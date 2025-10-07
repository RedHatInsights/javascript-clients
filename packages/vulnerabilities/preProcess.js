const fs = require("fs");
const SPEC = "apiSpec.json";
const PRODSPEC = process.argv.slice(2)[0];
const methodNameField = "x-methodName";
const YAML = require("yaml");
var path = require("path");
const axios = require("axios");

axios.get(PRODSPEC || null).then(({ data: body }) => {
  const spec_json = typeof body === "object" ? body :
    path.extname(PRODSPEC) === ".json" ? JSON.parse(body) : YAML.parse(body);
  const paths = spec_json.paths;
  Object.keys(paths).forEach(url => {
    const keys = Object.keys(paths[url]);
    keys.forEach(attr => {
      paths[url][attr]["operationId"] = paths[url][attr][methodNameField];
    });
  });
  fs.writeFileSync(path.join(__dirname, SPEC), JSON.stringify(spec_json));
  console.log(SPEC);
  process.exit(0);
}).catch(err => {
  console.error(err);
  process.exit(1);
});
