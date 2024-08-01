import { ExecutorContext } from '@nx/devkit';
import { exec } from 'child_process';
import { readFileSync } from 'fs';
import { z } from 'zod';

const ClientGeneratorSchema = z.object({
  client: z.string()
});

export type ClientGeneratorSchemaType = z.infer<typeof ClientGeneratorSchema>;

function generateOldClient(name, postProcess, spec, dir) {
  exec(`TS_POST_PROCESS_FILE='./postProcess.sh' openapi-generator-cli generate -i ${spec} -g typescript-axios -o packages/${name}/${dir} --openapitools packages/${name}/openapitools.json --skip-validate-spec --enable-post-process-file`, function(err, stdout, stderr) {
    if (err) {
      console.log (`error with ${name}`, err.message, err.stack);
    }
    console.log(stdout);
  }).on("exit", () => {
    if (postProcess === true) { 
      execPostProcess(name);
    }
  });
}

function generateNewClient(name, postProcess, spec, dir) {
  exec(`TS_POST_PROCESS_FILE='./postProcess.sh' openapi-generator-cli generate -i ${spec} --custom-generator=target/typescript-axios-webpack-module-federation-openapi-generator-1.0.0.jar -g typescript-axios-webpack-module-federation -o packages/${name}/${dir} --openapitools packages/${name}/openapitools.json --skip-validate-spec --enable-post-process-file`, function(err, stdout, stderr) {
    if (err) {
      console.log (`error with ${name}`, err.message, err.stack);
    }
    console.log(stdout);
  }).on("exit", () => {
    if (postProcess === true) { 
      execPostProcess(name);
    }
  });
}

function execPostProcess(name) {
  exec(`sed -i.bak 's/AnyType/any/g' packages/${name}/api.ts`).on("exit", () => {
    exec(`rm packages/${name}/api.ts.bak`);
  });
}

export default async function generateClients(options: ClientGeneratorSchemaType, context: ExecutorContext) {
  try {
    ClientGeneratorSchema.parse(options);
  } catch (error) {
    throw new Error(`Invalid options passed to builder executor: ${error}`);
  }
  
  const client = JSON.parse(readFileSync(options.client, 'utf8'));
  if (client.generator === "fed-mod") {
    client.specs.forEach((spec) => {
      let specName = Object.keys(spec)[0];
      let specPath = spec[Object.keys(spec)[0]];
      console.log(specName, specPath);
      if (specName !== 'default') {
        generateNewClient(client.name, client.postProcess, specPath, specName);
      } else {
        generateNewClient(client.name, client.postProcess, specPath, '.');
      }
    });
  } else {
    client.specs.forEach((spec) => {
      let specName = Object.keys(spec)[0];
      let specPath = spec[Object.keys(spec)[0]];
      console.log(specName, specPath);
      if (specName !== 'default') {
        generateOldClient(client.name, client.postProcess, specPath, specName);
      } else {
        generateOldClient(client.name, client.postProcess, specPath, '.');
      }
    });
  }

  return {
    success: true,
  };
}
