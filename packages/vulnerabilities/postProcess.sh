npm run doc:git-api
cp ./custom.d.ts ./git-api
LINE='export { DefaultApi as GitApi } from "./git-api";'
FILE='index.ts'
grep -qF -- "$LINE" "$FILE" || echo "$LINE" >> "$FILE"
