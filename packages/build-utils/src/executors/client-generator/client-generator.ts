import { ExecutorContext } from '@nx/devkit';
import { execSync } from 'child_process';
import { join } from 'node:path';
import { z } from 'zod';

const ClientGeneratorSchema = z.object({
  specs: z.record(z.string(), z.string()),
  postProcess: z.string().optional(),
  legacyGenerator: z.boolean().optional(),
  outputPath: z.string().optional(),
  skipValidation: z.boolean().optional(),
  clientName: z.string().refine((name) => /^[A-Z][a-zA-Z0-9]*Client$/.test(name), {
    message: "clientName must be PascalCase and end with 'Client' (e.g., 'MyServiceClient')",
  }),
});

export type ClientGeneratorSchemaType = z.infer<typeof ClientGeneratorSchema>;

export function validateSpec(spec: string): void {
  try {
    const output = execSync(`openapi-generator-cli validate -i ${spec} --recommend`, {
      encoding: 'utf-8',
      stdio: ['pipe', 'pipe', 'pipe'],
    });

    if (output.includes('[error]')) {
      throw new Error(`OpenAPI spec validation failed for '${spec}':\n${output}`);
    }

    if (output.includes('[warning]')) {
      console.warn(output.trim());
    }
  } catch (error: unknown) {
    if (error instanceof Error && error.message.startsWith('OpenAPI spec validation failed')) {
      throw error;
    }

    const execError = error as { stdout?: string; stderr?: string; status?: number };
    const output = execError.stdout || execError.stderr || '';
    throw new Error(`OpenAPI spec validation failed for '${spec}':\n${output || 'Spec could not be read or parsed.'}`);
  }
}

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

  // Resolve URIs, validate, and collect specs for generation
  const resolvedSpecs: { specURI: string; outputDir: string }[] = [];

  for (const namespace of Object.keys(options.specs)) {
    // Can be either a local file or a remote URL
    let specURI = options.specs[namespace];
    if (!specURI.startsWith('http://') && !specURI.startsWith('https://')) {
      specURI = join(packagePath, specURI);
    }

    // Determine output directory
    let outputDir = options.outputPath ? options.outputPath : packagePath;
    if (namespace !== 'default') {
      outputDir = join(outputDir, namespace);
    }

    // Validate before collecting — fails fast if any spec is invalid
    if (!options.skipValidation) {
      console.log(`Validating spec '${namespace}': ${specURI}`);
      validateSpec(specURI);
    }

    resolvedSpecs.push({ specURI, outputDir });
  }

  // Generate all clients only after every spec has been validated
  for (const { specURI, outputDir } of resolvedSpecs) {
    generateClient(packagePath, specURI, outputDir, clientName, options.legacyGenerator);
  }

  if (options.postProcess) {
    execSync(`cd ${packagePath} && ${options.postProcess}`, { stdio: 'inherit' });
  }

  return {
    success: true,
  };
}
