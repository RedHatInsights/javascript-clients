# Javascript Clients
Auto generated Javascript clients for swagger API

### Overview
This repository is set up as a monorepo for all API clients to use one configuration and release cycle. This repo is using [NX](https://nx.dev/getting-started/intro) as its monorepo manager and [Github Actions](https://docs.github.com/en/actions) for CI/CD as well as publishing packages to NPM.


### Local development

We are using Java to install and build this generator. Please install Java and preferably Maven as well so you don't have any issues when building this new generator.

* Once you have Java and Maven installed you can install dependencies by running `npm install`

* When you have dependencies installed you can run build anytime you change something in the generator `npm run build:generator`

### Creating a new client
Run `npm run create-client` and enter your new client name (e.g. entering `notifications` will generate `notifications-client`). All the necessary TS and NX config files will be created for you. After client creation, add your client info to `clients.json`. A client entry should look like the following:
```
{
  "name": "rbac",
  "generator": "fed-mod",
  "postProcess": true,
  "specs": [
    { "default": "https://raw.githubusercontent.com/RedHatInsights/insights-rbac/master/docs/source/specs/openapi.json" },
    { "v2": "https://raw.githubusercontent.com/RedHatInsights/insights-rbac/master/docs/source/specs/v2/openapi.v2.yaml" }
  ]
},
```
where `generator` can be either the `default` one from OpenAPI or the custom `fed-mod` generator which is described below (newly made clients should use `fed-mod` when possible), `postProcess` is a legacy setting for older clients (leave `false` for new clients), and `specs` contains the locations of your clients OpenAPI specs ('default' will export all your endpoints at the root level of the client e.g. some-client/dist/SomeEndpoint and any key other than `default` will export to that path e.g. some-client/dist/v2/SomeEndpoint).

### Generating and Building clients

From the root javascript-clients folder:
* To generate all clients run `npm run generate`
* To build clients and generate their dist to be published run `npm run build` -- NX will only build packages when it detects that a change has been made to the client (otherwise it will reference the cache). After a client has been built, our `builder` (located in `packages/build-utils`) will move each client's `dist` into a top-level `dist` for publishing. Use `npx nx run-many --skip-nx-cache -t build --exclude=@redhat-cloud-services/CLIENTNAME-client` if you wish to build all clients regardless of whether or not a change has been made.

### Custom Module Federation Generator

As the default, we use `typescript-axios` to generate a client based on their OpenAPI spec. In addition, we have a custom generator available for use built with module federation in mind which allows for treeshaking by webpack. This will create a new folder for each endpoint allowing consumers to import only the endpoints they are going to use without the need of importing the entire API. This generator should be a replacement for the regular `typescript-axios` generator. See below for an example script to use the new generator:

```JSON
{
  "name": "@redhat-cloud-services/some-client-name",
  "version": "1.0.0",
  "scripts": {
    "generate": "TS_POST_PROCESS_FILE='../../postProcess.sh' openapi-generator-cli generate -i $SPEC --custom-generator=../../target/typescript-axios-webpack-module-federation-openapi-generator-1.0.0.jar -g typescript-axios-webpack-module-federation -o . --skip-validate-spec --enable-post-process-file"
  }
}
```

If you've previously used the `typescript-axios` generator you will also have to change the version of `generator-cli.version` in `openapitool.json` to at least `6.6.0`.
