# Javascript client for config-manager API
If you want to use [RedHatInsights/notifications-backend](https://github.com/RedHatInsights/notifications-backend) you shouldn't use get requests directly, but rather use this client to integrate with the service.

## Install
NPM
```bash
npm install --save @redhat-cloud-services/config-manager-client
```

Or Yarn
```bash
yarn add @redhat-cloud-services/config-manager-client
```

### Usage
This client is using typescript and axios. Types are distributed with this package, so no need to define or install them separately.

To correctly bootstrap this API you should use this config (no need to define it multiple times, just one config and reimport it anywhere you want to use it).
```JS
// api.js
import APIFactory from '@redhat-cloud-services/javascript-client-shared/dist/utils'; 
import createEndpoint from '@redhat-cloud-services/config-manager-client/dist/endpointResourceV1CreateEndpoint';
import enableEndpoint from '@redhat-cloud-services/config-manager-client/dist/endpointResourceV1EnableEndpoint';

// BASE_PATH should be set in your constants file
const configManagerApi = APIFactory(BASE_PATH, undefined, { createEndpoint, enableEndpoint });
export configMnagerApi;
```

If you want to add some interceptors you can use axios build in interceptors
```JS
// api.js
import axios from 'axios';
import { configManagerApi } from '@redhat-cloud-services/config-manager-client';
const instance = axios.create();

// Request interceptor
instance.interceptors.request.use((request) => {
    // some logic to do with request
});

// Response interceptor
instance.interceptors.response.use((response) => {
    // some logic to do with request
});

// Error interceptor
instance.interceptors.response.use(null, (error) => {
    // some logic to do with error
});

// BASE_PATH should be set in your constants file
const configManagerApi = APIFactory(BASE_PATH, instance, { createEndpoint, enableEndpoint });
export configManagerApi;
```

## Building

Run `nx build @redhat-cloud-services/config-manager-client` to build the library.

## Running unit tests

Run `nx test @redhat-cloud-services/config-manager-client` to execute the unit tests via [Jest](https://jestjs.io).

## API documentation

* [README](doc/README.md)
