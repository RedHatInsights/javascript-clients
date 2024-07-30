var exec = require('child_process').exec;
var data = require('./clients.json');

function generateOldClient(name, spec) {
  exec(`TS_POST_PROCESS_FILE='./postProcess.sh' OPENAPI_GENERATOR_VERSION=4.3.1 openapi-generator-cli generate -i ${spec} -g typescript-axios -o . --skip-validate-spec --enable-post-process-file`, function(err, stdout, stderr) {
    if (err) {
      console.log (`error with ${name}`, err.message, err.stack);
    }
    console.log(stdout);
  });
}

function generateNewClient(name, spec, dir=".") {
  exec(`TS_POST_PROCESS_FILE='../../postProcess.sh' openapi-generator-cli generate -i ${spec} --custom-generator=../../target/typescript-axios-webpack-module-federation-openapi-generator-1.0.0.jar -g typescript-axios-webpack-module-federation -o ${dir} --skip-validate-spec --enable-post-process-file`, function(err, stdout, stderr) {
    if (err) {
      console.log (`error with ${name}`, err.message, err.stack);
    }
    console.log(stdout);
  })
}

function generateClients(data) {
  data.clients.forEach(client => {
    if (client.generator === "custom") {
      client.specs.forEach(spec => {
        if (spec.v2) {
          generateNewClient(client.name, spec.v2, 'v2');
        } else {
          generateNewClient(client.name, spec.v1);
        }
        if (client.postProcess === true) {
          exec(`./postProcess.sh`)
        }
      });
    } else {
      client.specs.forEach(spec => {
        generateOldClient(client.name, spec.v1);
      });
    }
  });
}

generateClients(data);
