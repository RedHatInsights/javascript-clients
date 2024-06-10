# Javascript client for RBAC API

## Install
NPM
```bash
npm install --save @redhat-cloud-services/rbac-client
```

Or Yarn
```bash
yarn add @redhat-cloud-services/rbac-client
```

### Usage
This client is using typescript and axios. Types are distributed with this package, so no need to define or install them separately.

To correctly bootstrap this API you should use this config (no need to define it multiple times, just one config and reimport it anywhere you want to use it).
```JS
// api.js
import axios from "axios";
import { APIFactory } from '@redhat-cloud-services/javascript-clients-shared'; 
import getGroup from "@redhat-cloud-services/rbac-client/dist/GetGroup";

// BASE_PATH should be set in your constants file
const instance = axios.create();
const rbacApi = APIFactory(BASE_PATH, { getGroup }, instance);
export rbacApi;
```
And if you want to add some interceptors to the axios instance:
```JS
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
const rbacApi = APIFactory(BASE_PATH, { getGroup }, instance);
export rbacApi;
```

## Building

Run `nx build @redhat-cloud-services/rbac-client` to build the library.

## Running unit tests

Run `nx test @redhat-cloud-services/rbac-client` to execute the unit tests via [Jest](https://jestjs.io).

## API documentation

* [README](doc/README.md)
