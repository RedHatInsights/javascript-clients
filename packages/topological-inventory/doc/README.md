@redhat-cloud-services/topological-inventory-client / [Exports](modules.md)

# Javascript client for Topological inventory API
If you want to use [ManageIQ/topological-inventory-api](https://github.com/ManageIQ/https://github.com/ManageIQ/topological_inventory-api) you shouldn't use get requests directly, but rather use this client to integrate with this service.

## Install
NPM
```bash
npm install --save @redhat-cloud-services/topological-inventory-client
```

Or Yarn
```bash
yarn add @redhat-cloud-services/topological-inventory-client
```

### Usage
This client is using typescript and axios. Types are distributed with this package, so no need to define or install them separately.

To correctly bootstrap this API you should use this config (no need to define it multiple times, just one config and reimport it anywhere you want to use it).
```JS
// api.js
import axios from 'axios';
import { DefaultApi } from '@redhat-cloud-services/topological-inventory-client';
const instance = axios.create();

// BASE_PATH should be set in your constants file
const baseApi = new DefaultApi(undefined, BASE_PATH, instance);
export baseApi;
```

If you want to add some interceptors you can use axios build in interceptors
```JS
// api.js
import axios from 'axios';
import { DefaultApi } from '@redhat-cloud-services/topological-inventory-client';
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
const baseApi = new DefaultApi(undefined, BASE_PATH, instance);
export baseApi;
```

## API documentation
## Building

Run `nx build topological-inventory-client` to build the library.

## Running unit tests

Run `nx test topological-inventory-client` to execute the unit tests via [Jest](https://jestjs.io).

## API documentation

* [README](doc/README.md)
