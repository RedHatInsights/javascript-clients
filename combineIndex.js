const data = require('./clients.json');
const fs = require('fs');

function combineIndex(name, dir) {
  const newIndex = fs.readFileSync(`packages/${name}/${dir}/index.ts`, 'utf8');
  const exportRegex = /^(export\s+\{\s+default\s+as\s+\w+\s+\}\s+from\s+')(.+)(\/[^']+)(')$/gm;
  const exportsFromIndex = newIndex.match(exportRegex).join('\n\n\n// end of operations block\n').replace(exportRegex, (match, p1, p2, p3, p4) => {
    return `${p1}${p2}/${dir}${p3}${p4}`;
  });
  fs.appendFile(`packages/${name}/index.ts`, `${exportsFromIndex}\n`, function (err) {
    if (err) {
      console.log('Error combining exports');
    }
  });
}

data.clients.forEach(client => {
  client.specs.forEach(spec => {
    if (Object.keys(spec)[0] !== 'default') {
      combineIndex(client.name, Object.keys(spec)[0]);      
    }
  });
});
