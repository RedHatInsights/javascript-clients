
Javascript client for Inventory API
===================================

If you want to use [RedHatInsights/entitlements-api](https://github.com/RedHatInsights/entitlements-api) you shouldn't use get requests directly, but rather use this client to integrate with this service.

Install
-------

NPM

```bash
npm install --save @redhat-cloud-services/entitlements-client
```

Or Yarn

```bash
yarn add @redhat-cloud-services/entitlements-client
```

### Usage

This client is using typescript and axios. Types are distributed with this package, so no need to define or install them separately.

To correctly bootstrap this API you should use this config (no need to define it multiple times, just one config and reimport it anywhere you want to use it).

```JS
// api.js
import axios from 'axios';
import { ActionApi } from '@redhat-cloud-services/entitlements-client';
const instance = axios.create();

// BASE_PATH should be set in your constants file
const actionAPI = new ActionApi(undefined, BASE_PATH, instance);
export actionAPI;
```

If you want to add some interceptors you can use axios build in interceptors

```JS
// api.js
import axios from 'axios';
import { ActionApi } from '@redhat-cloud-services/entitlements-client';
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
const actionAPI = new ActionApi(undefined, BASE_PATH, instance);
export actionAPI;
```

API documentation
-----------------

*   [README](doc/README.md)

## Index

### Classes

* [BaseAPI](classes/baseapi.md)
* [Configuration](classes/configuration.md)
* [RequiredError](classes/requirederror.md)
* [ServicesApi](classes/servicesapi.md)

### Interfaces

* [ConfigurationParameters](interfaces/configurationparameters.md)
* [RequestArgs](interfaces/requestargs.md)
* [ServiceDetails](interfaces/servicedetails.md)

### Variables

* [BASE_PATH](#base_path)

### Functions

* [ServicesApiAxiosParamCreator](#servicesapiaxiosparamcreator)
* [ServicesApiFactory](#servicesapifactory)
* [ServicesApiFp](#servicesapifp)

### Object literals

* [COLLECTION_FORMATS](#collection_formats)

---

## Variables

<a id="base_path"></a>

### `<Const>` BASE_PATH

**● BASE_PATH**: *`string`* =  "https://raw.githubusercontent.com/api/entitlements/v1".replace(/\/+$/, "")

*Defined in [api.ts:20](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/entitlements/api.ts#L20)*

___

## Functions

<a id="servicesapiaxiosparamcreator"></a>

### `<Const>` ServicesApiAxiosParamCreator

▸ **ServicesApiAxiosParamCreator**(configuration?: *[Configuration](classes/configuration.md)*): `object`

*Defined in [api.ts:91](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/entitlements/api.ts#L91)*

ServicesApi - axios parameter creator

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` configuration | [Configuration](classes/configuration.md) |

**Returns:** `object`

___
<a id="servicesapifactory"></a>

### `<Const>` ServicesApiFactory

▸ **ServicesApiFactory**(configuration?: *[Configuration](classes/configuration.md)*, basePath?: *`string`*, axios?: *`AxiosInstance`*): `object`

*Defined in [api.ts:149](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/entitlements/api.ts#L149)*

ServicesApi - factory interface

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` configuration | [Configuration](classes/configuration.md) |
| `Optional` basePath | `string` |
| `Optional` axios | `AxiosInstance` |

**Returns:** `object`

___
<a id="servicesapifp"></a>

### `<Const>` ServicesApiFp

▸ **ServicesApiFp**(configuration?: *[Configuration](classes/configuration.md)*): `object`

*Defined in [api.ts:127](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/entitlements/api.ts#L127)*

ServicesApi - functional programming interface

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

*Defined in [api.ts:26](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/entitlements/api.ts#L26)*

*__export__*: 

<a id="collection_formats.csv"></a>

####  csv

**● csv**: *`string`* = ","

*Defined in [api.ts:27](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/entitlements/api.ts#L27)*

___
<a id="collection_formats.pipes"></a>

####  pipes

**● pipes**: *`string`* = "|"

*Defined in [api.ts:30](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/entitlements/api.ts#L30)*

___
<a id="collection_formats.ssv"></a>

####  ssv

**● ssv**: *`string`* = " "

*Defined in [api.ts:28](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/entitlements/api.ts#L28)*

___
<a id="collection_formats.tsv"></a>

####  tsv

**● tsv**: *`string`* = "	"

*Defined in [api.ts:29](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/entitlements/api.ts#L29)*

___

___

