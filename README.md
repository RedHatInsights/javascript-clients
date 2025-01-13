# Javascript Clients
Auto generated Javascript clients for swagger API

### Overview
This repository is set up as a monorepo for all API clients to use one configuration and release cycle. This repo is using [NX](https://nx.dev/getting-started/intro) as its monorepo manager and [Github Actions](https://docs.github.com/en/actions) for CI/CD as well as publishing packages to NPM.


### Local development

We are using Java to install and build this generator. Please install Java and preferably Maven as well so you don't have any issues when building this new generator.

* Once you have Java and Maven installed you can install dependencies by running `npm install`

* When you have dependencies installed you can run build anytime you change something in the generator `npm run build:generator`

### Troubleshooting

#### NX Daemon
Sometimes NX fails to make it through all of the client packages when running the `build`/`generate` tasks with the following error:

```bash
 >  NX   Daemon process terminated and closed the connection

   Please rerun the command, which will restart the daemon.
   If you get this error again, check for any errors in the daemon process logs found in: /RedHatInsights/javascript-clients/.nx/cache/d/daemon.log
```

If this occurs, try running `npm run nx:reset` and retrigger the `build`/`generate` task.

#### I do not see my changes after running a build
By default NX caches the build results of the clients upon initial build. Consecutive builds will then be cached unless the client changes. To avoid this caching, run `npm run build:no-cache`

### Creating a new client
Run `npm run create-client` and enter your new client name (e.g. entering `notifications` will generate `notifications-client`). All the necessary TS and NX config files will be created for you.

### Specifying your OpenAPI spec locations
After client creation, add your OpenAPI spec locations as an object entries in your client's `project.json` NX configuration for the `client-generator` executor. The `client-generator` supports multiple spec entries. Entries should follow the pattern below.
```
{
  "name": "@redhat-cloud-services/CLIENTNAME-client",
  ...
  "targets": {
    "generate": {
      "executor": "@redhat-cloud-services/build-utils:client-generator",
      "options": {
        "specs": {
          "default": "https://raw.githubusercontent.com/RedHatInsights/insights-rbac/master/docs/source/specs/openapi.json",
          "v2": "https://raw.githubusercontent.com/RedHatInsights/insights-rbac/master/docs/source/specs/v2/openapi.v2.yaml"
        }
      }
    },
    ...
  }
}
```
where the `specs` object keys are the directories to export your endpoints and the corresponding key values as the location to the spec itself. For keys, `default` will export all your endpoints at the root level of the client and any key other than `default` will export to that path instead. An example import for the above `default` spec entry as well as the `v2` spec entry can be seen in the following examples

default:

`import { SomeEndpoint } from @redhat-cloud-services/some-client/dist/SomeEndpoint` 

v2:

`import { SomeV2Endpoint } from @redhat-cloud-services/some-client/dist/v2/SomeV2Endpoint`

### Generating and Building clients

From the root javascript-clients folder:
* To generate all clients run `npm run generate` -- NX will run through our `client-generator` executor located in `@redhat-cloud-services/build-utils` to execute the `openapi-generator-cli` command to generate your client based off of the specs defined in your client's `openapi-spec.json`. To generate one client, run `nx run @redhat-cloud-services/${your-client-name}-client:generate`. If you don't have `openapi-generator-cli` installed globally, you will need to run `npm install -g @openapitools/openapi-generator-cli`
* To build all clients and generate their dist to be published run `npm run build` -- NX will only build packages when it detects that a change has been made to the client (otherwise it will reference the cache). After a client has been built, our `builder` (located in `packages/build-utils`) will move each client's `dist` into a top-level `dist` for publishing to NPM after your PR is merged. Use `npx nx run-many --skip-nx-cache -t build --exclude=@redhat-cloud-services/CLIENTNAME-client` if you wish to build all clients regardless of whether or not a change has been made. To build one client, run `nx run @redhat-cloud-services/${your-client-name}-client:build`. If you don't have `tsc` installed globally, you will need to run `npm install -g @typescript`

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

## Running Client Integration Tests

Integration tests have been added in some client packages. For example, in `packages/rbac/v2/tests/integration/workspaces.test.ts` one will find an end-to-end test for the Workspaces API that exercises the workflow for CRUD operations. 

To run integration tests, use a command like the following:

`npm run test:integration`

Generally, the pattern is for a client to have a `tests/integration` folder with test files having names matching `*.test.ts`. Within each client's folder (e.g. `packages/<client>`) there should be a dedicated `tsconfig.integration.spec.json` with an `include` glob pattern that points to the integration tests. Similarly, there should also be a dedicated `jest.integration.config.ts` that points to `tsconfig.integration.spec.json` in the `transform` value. Also, each client's `project.json` should have an `integration` target defined/added when the integration tests are created.


Demo change. 
