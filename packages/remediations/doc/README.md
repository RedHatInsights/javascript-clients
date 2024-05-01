@redhat-cloud-services/remediations-client / [Exports](modules.md)

Javascript client for Remediations API
=======================================

This is a client library for [RedHatInsights/insights-remediations](https://github.com/RedHatInsights/insights-remediations).

Install
-------

NPM

```bash
npm install --save @redhat-cloud-services/remediations-client
```

Or Yarn

```bash
yarn add @redhat-cloud-services/remediations-client
```

### Usage

This client is using typescript and axios. Types are distributed with this package, so no need to define or install them separately.

```js
import { RemediationsApi } from '@redhat-cloud-services/remediations-client';

const api = new RemediationsApi();
const remediations = await api.getRemediations();
```

## Building

Run `nx build @redhat-cloud-services/remediations-client` to build the library.

## Running unit tests

Run `nx test @redhat-cloud-services/remediations-client` to execute the unit tests via [Jest](https://jestjs.io).

## API documentation

* [README](doc/README.md)
