var request = require("request");
const fs = require("fs");
const SPEC = "apiSpec.json";
const PRODSPEC = process.argv.slice(2)[0];
const methodNameField = "x-methodName";
const YAML = require("yaml");
var path = require("path");

request(PRODSPEC || null, (error, response, body) => {
  if (!error && response.statusCode == 200) {
    const spec_json =
      path.extname(PRODSPEC) === ".json" ? JSON.parse(body) : YAML.parse(body);
    const paths = spec_json.paths;
    Object.keys(paths).forEach(url => {
      const keys = Object.keys(paths[url]);
      keys.forEach(attr => {
        paths[url][attr]["operationId"] = paths[url][attr][methodNameField];
      });
    });
    fs.writeFileSync(SPEC, JSON.stringify(spec_json));
    console.log(SPEC);
  } else {
    process.exit(1);
  }
});
