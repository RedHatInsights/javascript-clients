# Javascript client for the quickstarts API
If you want to use [RedHatInsights/quickstarts](https://github.com/RedHatInsights/quickstarts) you shouldn't use get requests directly, but rather use this client to integrate with this service.

## Install
NPM
```bash
npm install --save @redhat-cloud-services/quickstarts-client
```

Or Yarn
```bash
yarn add @redhat-cloud-services/quickstarts-client
```

### Usage
This client is using typescript and axios. Types are distributed with this package, so no need to define or install them separately.

This package comes with a client in its `api.ts` already defined with every call available. 
```JS
`import quickstartsClient from '@redhat-cloud-services/javascript-clients-shared/utils';

quickstartsClient.someEndpoint();
```

To bootstrap this API manually, you should create your own client via the `APIFactory` defined in the `@redhat-cloud-services/javascript-clients-shared` package. See below for an example:
```JS
import APIFactory from '@redhat-cloud-services/javascript-clients-shared/utils'; 
import exampleEndpoint from '@redhat-cloud-services/quickstarts-client/ExampleEndpoint';

// BASE_PATH should be set in your constants file
const quickstartsApi = APIFactory(BASE_PATH, undefined, { exampleEndpoint });
export quickstartsApi;
```

If you want to add some interceptors you can use axios build in interceptors
```JS
import axios from 'axios';
import APIFactory from '@redhat-cloud-services/javascript-clients-shared/utils';
import exampleEndpoint from '@redhat-cloud-services/quickstarts-client/ExampleEndpoint';

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
const quickstartsApi = APIFactory(BASE_PATH, instance, { exampleEndpoint });
export quickstartsApi;
```
## Generating

Ensure you have the javascript-clients generator built first with `npm run build:generator`. Then, run `nx run @redhat-cloud-services/quickstarts-client:generate` to generate the package.

## Building

Run `nx run @redhat-cloud-services/quickstarts-client:build` to build the package. This creates the `dist` for publishing.

## Running unit tests

Run `nx run @redhat-cloud-services/quickstarts-client:test` to execute the unit tests via [Jest](https://jestjs.io).

## API documentation

* [README](doc/README.md)
