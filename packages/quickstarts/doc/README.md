@redhat-cloud-services/quickstarts-client / [Exports](modules.md)

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

Run these commands from the root folder:

* To install all dependencies in all packages run `npm install`,
* To build all packages run `npm run generate` - this will generete code from swagger files, builds them and generates doc. The command **must** be run with git origin set to the upstream repository (**RedHatInsights/javascript-clients**) - this way the correct docs and references are generated.

## Module federation generator

We have cusom generator available for any application. This generator has been build with webpack module federation in mind. Meaning the code is ready for treeshaking by webpack. The generator will create new folder which serves as new package for each API resource. This will allow consumers to import endpoints they are going to use without the need of importing entire API.

### Using module federation generator

This generator should be replacement for regular `typescript-axios` generator. So just adjusting your generate command should be enough

```JSON
{
  "name": "",
  "version": "",
  "scripts": {
    "generate": "TS_POST_PROCESS_FILE='../../postProcess.sh' openapi-generator-cli generate -i $SPEC --custom-generator=../../target/typescript-axios-webpack-module-federation-openapi-generator-1.0.0.jar -g typescript-axios-webpack-module-federation -o . --skip-validate-spec --enable-post-process-file"
  }
}
```

If you've previously used the generator you will have to change also the version of `generator-cli.version` in `openapitool.json` to at least `6.6.0`.

Don't worry that a lot of new folders are created with typescript files. This should also be pushed because documentation will have easier time generating references.

### Local development

We are using Java to install and build this generator. Please install Java and preferably maven as well so you don't have any issues when building this new generator.

* Once you have Java and maven installed you can install dependenencies by running

```bash
npm run install
```

* When you have dependencies installed you can run build anytime you change something in the generator

```bash
npm run build:generator
```
