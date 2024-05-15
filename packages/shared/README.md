@redhat-cloud-services/javascript-clients-shared / [Exports](modules.md)

# Shared Javascript utilities and functions for javascript-clients
This package contains some common configurations and functions needed for clients using the new [javascript-clients](https://github.com/RedHatInsights/javascript-clients) generator. 

## Install
NPM
```bash
npm install --save @redhat-cloud-services/javascript-clients-shared
```

Or Yarn
```bash
yarn add @redhat-cloud-services/javascript-clients-shared
```

### Usage
This client is using typescript and axios. Types are distributed with this package, so no need to define or install them separately.

To correctly bootstrap this API you should use this config (no need to define it multiple times, just one config and reimport it anywhere you want to use it).
```JS
// api.js
import APIFactory from '@redhat-cloud-services/javascript-clients-shared'; 

// BASE_PATH should be set in your constants file
const someApi = APIFactory(BASE_PATH, undefined, { createEndpoint, enableEndpoint });
export someApi;
```

## Building

Run `nx build @redhat-cloud-services/javascript-clients-shared` to build the library.

## Running unit tests

Run `nx test @redhat-cloud-services/javascript-clients-shared` to execute the unit tests via [Jest](https://jestjs.io).

## API documentation

* [README](doc/README.md)
