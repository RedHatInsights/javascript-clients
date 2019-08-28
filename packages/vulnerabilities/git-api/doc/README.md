
Javascript client for Vulnerability API
=======================================

If you want to use [RedHatInsights/vulnerability-engine](https://github.com/RedHatInsights/vulnerability-engine) you shouldn't use get requests directly, but rather use this client to integrate with this service.

Install
-------

NPM

```bash
npm install --save @redhat-cloud-services/vulnerabilities-client
```

Or Yarn

```bash
yarn add @redhat-cloud-services/vulnerabilities-client
```

### Usage

This client is using typescript and axios. Types are distributed with this package, so no need to define or install them separately.

To correctly bootstrap this API you should use this config (no need to define it multiple times, just one config and reimport it anywhere you want to use it).

```JS
// api.js
import axios from 'axios';
import { BaseApi } from '@redhat-cloud-services/vulnerabilities-client';
const instance = axios.create();

// BASE_PATH should be set in your constants file
const vulnApi = new BaseApi(undefined, BASE_PATH, instance);
export vulnApi;
```

If you want to add some interceptors you can use axios build in interceptors

```JS
// api.js
import axios from 'axios';
import { BaseApi } from '@redhat-cloud-services/vulnerabilities-client';
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
const vulnApi = new BaseApi(undefined, BASE_PATH, instance);
export vulnApi;
```

API documentation
-----------------

*   [README](doc/README.md)

## Index

### Classes

* [BaseAPI](classes/baseapi.md)
* [Configuration](classes/configuration.md)
* [DefaultApi](classes/defaultapi.md)
* [InternalApi](classes/internalapi.md)
* [RequiredError](classes/requirederror.md)

### Interfaces

* [AffectedSystemsOut](interfaces/affectedsystemsout.md)
* [BulkChangeOut](interfaces/bulkchangeout.md)
* [BusinessRiskListOut](interfaces/businessrisklistout.md)
* [BusinessRiskListOutData](interfaces/businessrisklistoutdata.md)
* [BusinessRiskListOutMeta](interfaces/businessrisklistoutmeta.md)
* [ConfigurationParameters](interfaces/configurationparameters.md)
* [CveDetailOut](interfaces/cvedetailout.md)
* [CveDetailOutData](interfaces/cvedetailoutdata.md)
* [CveDetailOutDataAttributes](interfaces/cvedetailoutdataattributes.md)
* [CveOrList](interfaces/cveorlist.md)
* [CveRiskIn](interfaces/cveriskin.md)
* [Errors](interfaces/errors.md)
* [ErrorsErrors](interfaces/errorserrors.md)
* [InventoryIdOrList](interfaces/inventoryidorlist.md)
* [Links](interfaces/links.md)
* [Meta](interfaces/meta.md)
* [MetaAffectedSystems](interfaces/metaaffectedsystems.md)
* [MetaCves](interfaces/metacves.md)
* [MetaCvesSystems](interfaces/metacvessystems.md)
* [MetaSystems](interfaces/metasystems.md)
* [MetaVulnerabilitiesOut](interfaces/metavulnerabilitiesout.md)
* [OptOutIn](interfaces/optoutin.md)
* [RequestArgs](interfaces/requestargs.md)
* [StatusIn](interfaces/statusin.md)
* [StatusListOut](interfaces/statuslistout.md)
* [StatusListOutData](interfaces/statuslistoutdata.md)
* [StatusListOutMeta](interfaces/statuslistoutmeta.md)
* [SystemCvesOut](interfaces/systemcvesout.md)
* [SystemDetailsOut](interfaces/systemdetailsout.md)
* [SystemDetailsOutData](interfaces/systemdetailsoutdata.md)
* [SystemListOut](interfaces/systemlistout.md)
* [VersionOut](interfaces/versionout.md)
* [VulnerabilitiesOut](interfaces/vulnerabilitiesout.md)

### Variables

* [BASE_PATH](#base_path)

### Functions

* [DefaultApiAxiosParamCreator](#defaultapiaxiosparamcreator)
* [DefaultApiFactory](#defaultapifactory)
* [DefaultApiFp](#defaultapifp)
* [InternalApiAxiosParamCreator](#internalapiaxiosparamcreator)
* [InternalApiFactory](#internalapifactory)
* [InternalApiFp](#internalapifp)

### Object literals

* [COLLECTION_FORMATS](#collection_formats)

---

## Variables

<a id="base_path"></a>

### `<Const>` BASE_PATH

**● BASE_PATH**: *`string`* =  "http://localhost".replace(/\/+$/, "")

*Defined in [api.ts:20](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L20)*

___

## Functions

<a id="defaultapiaxiosparamcreator"></a>

### `<Const>` DefaultApiAxiosParamCreator

▸ **DefaultApiAxiosParamCreator**(configuration?: *[Configuration](classes/configuration.md)*): `object`

*Defined in [api.ts:1183](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1183)*

DefaultApi - axios parameter creator

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` configuration | [Configuration](classes/configuration.md) |

**Returns:** `object`

___
<a id="defaultapifactory"></a>

### `<Const>` DefaultApiFactory

▸ **DefaultApiFactory**(configuration?: *[Configuration](classes/configuration.md)*, basePath?: *`string`*, axios?: *`AxiosInstance`*): `object`

*Defined in [api.ts:2289](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L2289)*

DefaultApi - factory interface

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` configuration | [Configuration](classes/configuration.md) |
| `Optional` basePath | `string` |
| `Optional` axios | `AxiosInstance` |

**Returns:** `object`

___
<a id="defaultapifp"></a>

### `<Const>` DefaultApiFp

▸ **DefaultApiFp**(configuration?: *[Configuration](classes/configuration.md)*): `object`

*Defined in [api.ts:2044](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L2044)*

DefaultApi - functional programming interface

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` configuration | [Configuration](classes/configuration.md) |

**Returns:** `object`

___
<a id="internalapiaxiosparamcreator"></a>

### `<Const>` InternalApiAxiosParamCreator

▸ **InternalApiAxiosParamCreator**(configuration?: *[Configuration](classes/configuration.md)*): `object`

*Defined in [api.ts:2695](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L2695)*

InternalApi - axios parameter creator

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` configuration | [Configuration](classes/configuration.md) |

**Returns:** `object`

___
<a id="internalapifactory"></a>

### `<Const>` InternalApiFactory

▸ **InternalApiFactory**(configuration?: *[Configuration](classes/configuration.md)*, basePath?: *`string`*, axios?: *`AxiosInstance`*): `object`

*Defined in [api.ts:2964](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L2964)*

InternalApi - factory interface

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` configuration | [Configuration](classes/configuration.md) |
| `Optional` basePath | `string` |
| `Optional` axios | `AxiosInstance` |

**Returns:** `object`

___
<a id="internalapifp"></a>

### `<Const>` InternalApiFp

▸ **InternalApiFp**(configuration?: *[Configuration](classes/configuration.md)*): `object`

*Defined in [api.ts:2898](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L2898)*

InternalApi - functional programming interface

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` configuration | [Configuration](classes/configuration.md) |

**Returns:** `object`

___

## Object literals

<a id="collection_formats"></a>

### `<Const>` COLLECTION_FORMATS

**COLLECTION_FORMATS**: *`object`*

*Defined in [api.ts:26](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L26)*

*__export__*: 

<a id="collection_formats.csv"></a>

####  csv

**● csv**: *`string`* = ","

*Defined in [api.ts:27](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L27)*

___
<a id="collection_formats.pipes"></a>

####  pipes

**● pipes**: *`string`* = "|"

*Defined in [api.ts:30](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L30)*

___
<a id="collection_formats.ssv"></a>

####  ssv

**● ssv**: *`string`* = " "

*Defined in [api.ts:28](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L28)*

___
<a id="collection_formats.tsv"></a>

####  tsv

**● tsv**: *`string`* = "	"

*Defined in [api.ts:29](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L29)*

___

___

