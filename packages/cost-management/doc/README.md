[@redhat-cloud-services/cost-management-client](README.md) › [Globals](globals.md)

# @redhat-cloud-services/cost-management-client

Javascript client for Cost Management API
=======================================

This is a client library for [RedHatInsights/Cost Management](https://github.com/project-koku).

Install
-------

NPM

```bash
npm install --save @redhat-cloud-services/cost-management-client
```

Or Yarn

```bash
yarn add @redhat-cloud-services/cost-management-client
```

### Usage

This client is using typescript and axios. Types are distributed with this package, so no need to define or install them separately.

```js
import { CostModelApi } from '@redhat-cloud-services/cost-management-client';

const api = new CostModelApi();
const costManagement = await api.getCostModel();
```

## API documentation

* [README](doc/README.md)
