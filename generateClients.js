const exec = require('child_process').exec;
const data = require('./clients.json');

function generateOldClient(name, postProcess, spec) {
  exec(`TS_POST_PROCESS_FILE='./postProcess.sh' openapi-generator-cli generate -i ${spec} -g typescript-axios -o packages/${name}/ --openapitools packages/${name}/openapitools.json --skip-validate-spec --enable-post-process-file`, function(err, stdout, stderr) {
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

function generateClients(data) {
  data.clients.forEach(client => {
    if (client.generator === "fed-mod") {
      client.specs.forEach(spec => {
        if (Object.keys(spec)[0] !== 'default') {
          generateNewClient(client.name, client.postProcess, spec[Object.keys(spec)], Object.keys(spec)[0]);
        } else {
          generateNewClient(client.name, client.postProcess, spec[Object.keys(spec)], '.');
        }
      });
    } else {
      client.specs.forEach(spec => {
        generateOldClient(client.name, client.postProcess, spec[Object.keys(spec)], '.');
      });
    }
  });
}

generateClients(data);
