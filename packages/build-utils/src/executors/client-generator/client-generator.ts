import { ExecutorContext } from '@nx/devkit';
import { execSync } from 'child_process';
import { join } from 'node:path';
import { z } from 'zod';

const ClientGeneratorSchema = z.object({
  specs: z.record(z.string(), z.string()),
  postProcess: z.string().optional(),
  legacyGenerator: z.boolean().optional(),
  outputPath: z.string().optional(),
  clientName: z.string().refine((name) => /^[A-Z][a-zA-Z0-9]*Client$/.test(name), {
    message: "clientName must be PascalCase and end with 'Client' (e.g., 'MyServiceClient')",
  }),
});

export type ClientGeneratorSchemaType = z.infer<typeof ClientGeneratorSchema>;

function generateClient(packagePath: string, spec: string, outputDir: string, clientName: string, isLegacy?: boolean) {
  let additionalArgs: string;
  if (isLegacy) {
    additionalArgs = '-g typescript-axios';
  } else {
    additionalArgs =
      '--custom-generator=target/typescript-axios-webpack-module-federation-openapi-generator-1.0.0.jar -g typescript-axios-webpack-module-federation';
  }

  execSync(
    `TS_POST_PROCESS_FILE='./postProcess.sh' openapi-generator-cli generate -i ${spec} -o ${outputDir} --openapitools ${packagePath}/openapitools.json --skip-validate-spec --enable-post-process-file ${additionalArgs} --additional-properties clientName=${clientName}`,
    { stdio: 'inherit' },
  );
}

export default async function generateClients(options: ClientGeneratorSchemaType, context: ExecutorContext) {
  const result = ClientGeneratorSchema.safeParse(options);
  if (!result?.success) {
    console.error(result?.error);
    throw new Error('invalid options passed to client-generator executor');
  }

  const projectConfig = context.projectsConfigurations?.projects[context.projectName];

  if (!projectConfig) {
    throw new Error('Project configuration not found');
  }

  const packagePath = projectConfig.root;
  const clientName = options.clientName;

  Object.keys(options.specs).forEach((namespace) => {
    // Can be either a local file or a remote URL
    let specURI = options.specs[namespace];

    // Local spec file
    if (specURI.indexOf('http://') < 0 && specURI.indexOf('https://') < 0) {
      specURI = join(packagePath, specURI);
    }

    // Determine output directory
    let outputDir = options.outputPath ? options.outputPath : packagePath;
    if (namespace !== 'default') {
      outputDir = join(outputDir, namespace);
    }

    generateClient(packagePath, specURI, outputDir, clientName, options.legacyGenerator);
  });

  if (options.postProcess) {
    execSync(`cd ${packagePath} && ${options.postProcess}`, { stdio: 'inherit' });
  }

  return {
    success: true,
  };
}
