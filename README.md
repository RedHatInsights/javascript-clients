# Javascript Clients
Auto generated Javascript clients for swagger API

## Contribution
This repository is set up to use monorepo so we have all API clients in place with one configuration and release cycle. This repo is using NX as its monorepo manager and Github Actions for publishing to NPM.

### Creating a new client
Run `npm run create-client` and enter your new client name (e.g. entering `notifications` will generate `notifications-client`). All the necessary TS and NX config files will be created for you.

**IMPORTANT! Ensure the `SPEC` URL in you `generate:prod` script in the `package.json` matches your spec correctly**

### Building clients

Run these commands from the root folder:

* To install all dependencies in all packages run `npm install`,
* To generate all packages run `npm run generate` - this will generete code from swagger files, builds them and generates doc. The command **must** be run with git origin set to the upstream repository (**RedHatInsights/javascript-clients**) - this way the correct docs and references are generated.
* To build packages run `npm run build` -- NX will only build packages when it detects that a change has been made to the client (otherwise it will reference the cache). After a client has been built, our `builder` (located in `packages/build-utils`) will move each client's `dist` into a top-level `dist` for publishing. Use `npx nx run-many --skip-nx-cache -t build --exclude=@redhat-cloud-services/CLIENTNAME-client` if you wish to build all clients regardless of whether or not a change has been made.

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

