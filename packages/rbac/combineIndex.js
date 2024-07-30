const fs = require('fs');

function combineV2Index() {
  const v2Index = fs.readFileSync('./v2/index.ts', 'utf8');
  const exportRegex = /^(export\s+\{\s+default\s+as\s+\w+\s+\}\s+from\s+')(.+)(\/[^']+)(')$/gm;
  const exportsFromIndex = v2Index.match(exportRegex).join('\n\n\n// end of operations block\n').replace(exportRegex, (match, p1, p2, p3, p4) => {
    return `${p1}${p2}/v2${p3}${p4}`;
  });

  fs.appendFile('./index.ts', `${exportsFromIndex}\n`, function (err) {
    if (err) {
      console.log('Error combining exports');
    }
  });
}

combineV2Index();
