# Javascript Clients
Auto generated Javascript clients for swagger API

## Contribution
This repository is set up to use monorepo so we have all API clients in place with one configuration and release cycle.

### New package
* Create new folder in packages
* Run `npm init` in this newly created packaged
* NOTE: Please prepend each package name with `@redhat-cloud-services` in order to have all clients under one company
* Add custom `doc` (to generate documentation), `build` (to build your client) and `generate:prod` (auto generation) to package scripts 
* Add `.npmignore` - you may want to copy it from other package
* Add README.md and LICENSE file to your package

If you are using `typescript-axios` as code generator you should also add `tsconfig` file to your folder.

Please do not copy your swagger definition file to this repository as that would make it harder to keep in sync. Much better is to reference the openAPI definition directly either from GH repository or from swaggerhub.

**IMPORTANT! First release has to be done manually, please include in your pull request that it is initial release. Or include publishConfig in your package.json**
```JSON
{
    "publishConfig": {
        "access": "public"
    }
}
```

### Building all clients
Run these commands from root folder
* To install all dependencies in all packages run `npm run bootstrap`
* To build all packages run `npm run generate` - this will generete code from swagger files, builds them and generates doc
