import { ExecutorContext } from '@nx/devkit';
import { execSync } from 'child_process';
import path from 'path';
import { z } from 'zod';

const ClientGeneratorSchema = z.object({
  specs: z.record(z.string(), z.string()),
  postProcess: z.string().optional(),
  legacyGenerator: z.boolean().optional(),
});

export type ClientGeneratorSchemaType = z.infer<typeof ClientGeneratorSchema>;

function generateClient(targetPath: string, spec: string, dir: string, isLegacy?: boolean) {
  let additionalArgs: string;
  if (isLegacy) {
    additionalArgs = '-g typescript-axios';
  } else {
    additionalArgs =
      '--custom-generator=target/typescript-axios-webpack-module-federation-openapi-generator-1.0.0.jar -g typescript-axios-webpack-module-federation';
  }
  execSync(
    `TS_POST_PROCESS_FILE='./postProcess.sh' openapi-generator-cli generate -i ${spec} -o ${targetPath}/${dir} --openapitools ${targetPath}/openapitools.json --skip-validate-spec --enable-post-process-file ${additionalArgs}`,
    { stdio: 'inherit' },
  );
}

export default async function generateClients(options: ClientGeneratorSchemaType, context: ExecutorContext) {
  const result = ClientGeneratorSchema.safeParse(options);
  if (!result?.success) {
    console.error(result?.error);
    throw new Error('invalid options passed to client-generator executor');
  }

  const targetPath = context.projectsConfigurations?.projects[context.projectName]?.root;
  Object.keys(options.specs).forEach((specName) => {
    let specPath = options.specs[specName];
    if (specPath.indexOf('http://') < 0 && specPath.indexOf('https://') < 0) {
      specPath = path.join(targetPath, specPath);
    }
    if (specName !== 'default') {
      generateClient(targetPath, specPath, specName, options.legacyGenerator);
    } else {
      generateClient(targetPath, specPath, '.', options.legacyGenerator);
    }
  });

  if (options.postProcess) {
    execSync(`cd ${targetPath} && ${options.postProcess}`, { stdio: 'inherit' });
  }

  return {
    success: true,
  };
}
