
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
* [RequiredError](classes/requirederror.md)

### Interfaces

* [AffectedSystemsOut](interfaces/affectedsystemsout.md)
* [ConfigurationParameters](interfaces/configurationparameters.md)
* [CveDetailOut](interfaces/cvedetailout.md)
* [CveDetailOutData](interfaces/cvedetailoutdata.md)
* [CveDetailOutDataAttributes](interfaces/cvedetailoutdataattributes.md)
* [Errors](interfaces/errors.md)
* [ErrorsErrors](interfaces/errorserrors.md)
* [Links](interfaces/links.md)
* [Meta](interfaces/meta.md)
* [MetaAffectedSystems](interfaces/metaaffectedsystems.md)
* [MetaCves](interfaces/metacves.md)
* [MetaSystems](interfaces/metasystems.md)
* [RequestArgs](interfaces/requestargs.md)
* [StatusIn](interfaces/statusin.md)
* [StatusListOut](interfaces/statuslistout.md)
* [StatusListOutData](interfaces/statuslistoutdata.md)
* [StatusListOutMeta](interfaces/statuslistoutmeta.md)
* [SystemCvesOut](interfaces/systemcvesout.md)
* [SystemListOut](interfaces/systemlistout.md)
* [VulnerabilitiesOut](interfaces/vulnerabilitiesout.md)

### Variables

* [BASE_PATH](#base_path)

### Functions

* [DefaultApiAxiosParamCreator](#defaultapiaxiosparamcreator)
* [DefaultApiFactory](#defaultapifactory)
* [DefaultApiFp](#defaultapifp)

### Object literals

* [COLLECTION_FORMATS](#collection_formats)

---

## Variables

<a id="base_path"></a>

### `<Const>` BASE_PATH

**● BASE_PATH**: *`string`* =  "http://localhost/api/vulnerability".replace(/\/+$/, "")

*Defined in base.ts:19*

___

## Functions

<a id="defaultapiaxiosparamcreator"></a>

### `<Const>` DefaultApiAxiosParamCreator

▸ **DefaultApiAxiosParamCreator**(configuration?: *[Configuration](classes/configuration.md)*): `object`

*Defined in [api.ts:680](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L680)*

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

*Defined in [api.ts:1479](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1479)*

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

*Defined in [api.ts:1305](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1305)*

DefaultApi - functional programming interface

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

*Defined in base.ts:25*

*__export__*: 

<a id="collection_formats.csv"></a>

####  csv

**● csv**: *`string`* = ","

*Defined in base.ts:26*

___
<a id="collection_formats.pipes"></a>

####  pipes

**● pipes**: *`string`* = "|"

*Defined in base.ts:29*

___
<a id="collection_formats.ssv"></a>

####  ssv

**● ssv**: *`string`* = " "

*Defined in base.ts:27*

___
<a id="collection_formats.tsv"></a>

####  tsv

**● tsv**: *`string`* = "	"

*Defined in base.ts:28*

___

___

