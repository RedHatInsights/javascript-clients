
Javascript client for Approval API
==================================

If you want to use [ManageIQ/approval-api](https://github.com/ManageIQ/approval-api) you shouldn't use get requests directly, but rather use this client to integrate with this service.

Install
-------

NPM

```bash
npm install --save @redhat-cloud-services/approval-client
```

Or Yarn

```bash
yarn add @redhat-cloud-services/approval-client
```

### Usage

This client is using typescript and axios. Types are distributed with this package, so no need to define or install them separately.

To correctly bootstrap this API you should use this config (no need to define it multiple times, just one config and reimport it anywhere you want to use it).

```JS
// api.js
import axios from 'axios';
import { ActionApi } from '@redhat-cloud-services/approval-client';
const instance = axios.create();

// BASE_PATH should be set in your constants file
const actionsApi = new ActionApi(undefined, BASE_PATH, instance);
export actionsApi;
```

If you want to add some interceptors you can use axios build in interceptors

```JS
// api.js
import axios from 'axios';
import { ActionApi } from '@redhat-cloud-services/approval-client';
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
const actionsApi = new ActionApi(undefined, BASE_PATH, instance);
export actionsApi;
```

API documentation
-----------------

*   [README](doc/README.md)

## Index

### Modules

* [ActionIn](modules/actionin.md)
* [ActionOut](modules/actionout.md)
* [RequestOut](modules/requestout.md)
* [StageOut](modules/stageout.md)

### Classes

* [ActionApi](classes/actionapi.md)
* [BaseAPI](classes/baseapi.md)
* [Configuration](classes/configuration.md)
* [RequestApi](classes/requestapi.md)
* [RequiredError](classes/requirederror.md)
* [StageApi](classes/stageapi.md)
* [TemplateApi](classes/templateapi.md)
* [WorkflowApi](classes/workflowapi.md)

### Interfaces

* [ActionOutCollection](interfaces/actionoutcollection.md)
* [CollectionLinks](interfaces/collectionlinks.md)
* [CollectionMetadata](interfaces/collectionmetadata.md)
* [ConfigurationParameters](interfaces/configurationparameters.md)
* [RequestArgs](interfaces/requestargs.md)
* [RequestIn](interfaces/requestin.md)
* [RequestOutCollection](interfaces/requestoutcollection.md)
* [StageOutCollection](interfaces/stageoutcollection.md)
* [TemplateOut](interfaces/templateout.md)
* [TemplateOutCollection](interfaces/templateoutcollection.md)
* [WorkflowIn](interfaces/workflowin.md)
* [WorkflowOut](interfaces/workflowout.md)
* [WorkflowOutCollection](interfaces/workflowoutcollection.md)

### Variables

* [BASE_PATH](#base_path)

### Functions

* [ActionApiAxiosParamCreator](#actionapiaxiosparamcreator)
* [ActionApiFactory](#actionapifactory)
* [ActionApiFp](#actionapifp)
* [RequestApiAxiosParamCreator](#requestapiaxiosparamcreator)
* [RequestApiFactory](#requestapifactory)
* [RequestApiFp](#requestapifp)
* [StageApiAxiosParamCreator](#stageapiaxiosparamcreator)
* [StageApiFactory](#stageapifactory)
* [StageApiFp](#stageapifp)
* [TemplateApiAxiosParamCreator](#templateapiaxiosparamcreator)
* [TemplateApiFactory](#templateapifactory)
* [TemplateApiFp](#templateapifp)
* [WorkflowApiAxiosParamCreator](#workflowapiaxiosparamcreator)
* [WorkflowApiFactory](#workflowapifactory)
* [WorkflowApiFp](#workflowapifp)

### Object literals

* [COLLECTION_FORMATS](#collection_formats)

---

## Variables

<a id="base_path"></a>

### `<Const>` BASE_PATH

**● BASE_PATH**: *`string`* =  "https://cloud.redhat.com//api/approval/v1.0".replace(/\/+$/, "")

*Defined in [api.ts:20](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L20)*

___

## Functions

<a id="actionapiaxiosparamcreator"></a>

### `<Const>` ActionApiAxiosParamCreator

▸ **ActionApiAxiosParamCreator**(configuration?: *[Configuration](classes/configuration.md)*): `object`

*Defined in [api.ts:687](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L687)*

ActionApi - axios parameter creator

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` configuration | [Configuration](classes/configuration.md) |

**Returns:** `object`

___
<a id="actionapifactory"></a>

### `<Const>` ActionApiFactory

▸ **ActionApiFactory**(configuration?: *[Configuration](classes/configuration.md)*, basePath?: *`string`*, axios?: *`AxiosInstance`*): `object`

*Defined in [api.ts:937](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L937)*

ActionApi - factory interface

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` configuration | [Configuration](classes/configuration.md) |
| `Optional` basePath | `string` |
| `Optional` axios | `AxiosInstance` |

**Returns:** `object`

___
<a id="actionapifp"></a>

### `<Const>` ActionApiFp

▸ **ActionApiFp**(configuration?: *[Configuration](classes/configuration.md)*): `object`

*Defined in [api.ts:870](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L870)*

ActionApi - functional programming interface

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` configuration | [Configuration](classes/configuration.md) |

**Returns:** `object`

___
<a id="requestapiaxiosparamcreator"></a>

### `<Const>` RequestApiAxiosParamCreator

▸ **RequestApiAxiosParamCreator**(configuration?: *[Configuration](classes/configuration.md)*): `object`

*Defined in [api.ts:1047](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L1047)*

RequestApi - axios parameter creator

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` configuration | [Configuration](classes/configuration.md) |

**Returns:** `object`

___
<a id="requestapifactory"></a>

### `<Const>` RequestApiFactory

▸ **RequestApiFactory**(configuration?: *[Configuration](classes/configuration.md)*, basePath?: *`string`*, axios?: *`AxiosInstance`*): `object`

*Defined in [api.ts:1322](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L1322)*

RequestApi - factory interface

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` configuration | [Configuration](classes/configuration.md) |
| `Optional` basePath | `string` |
| `Optional` axios | `AxiosInstance` |

**Returns:** `object`

___
<a id="requestapifp"></a>

### `<Const>` RequestApiFp

▸ **RequestApiFp**(configuration?: *[Configuration](classes/configuration.md)*): `object`

*Defined in [api.ts:1250](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L1250)*

RequestApi - functional programming interface

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` configuration | [Configuration](classes/configuration.md) |

**Returns:** `object`

___
<a id="stageapiaxiosparamcreator"></a>

### `<Const>` StageApiAxiosParamCreator

▸ **StageApiAxiosParamCreator**(configuration?: *[Configuration](classes/configuration.md)*): `object`

*Defined in [api.ts:1442](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L1442)*

StageApi - axios parameter creator

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` configuration | [Configuration](classes/configuration.md) |

**Returns:** `object`

___
<a id="stageapifactory"></a>

### `<Const>` StageApiFactory

▸ **StageApiFactory**(configuration?: *[Configuration](classes/configuration.md)*, basePath?: *`string`*, axios?: *`AxiosInstance`*): `object`

*Defined in [api.ts:1566](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L1566)*

StageApi - factory interface

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` configuration | [Configuration](classes/configuration.md) |
| `Optional` basePath | `string` |
| `Optional` axios | `AxiosInstance` |

**Returns:** `object`

___
<a id="stageapifp"></a>

### `<Const>` StageApiFp

▸ **StageApiFp**(configuration?: *[Configuration](classes/configuration.md)*): `object`

*Defined in [api.ts:1529](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L1529)*

StageApi - functional programming interface

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` configuration | [Configuration](classes/configuration.md) |

**Returns:** `object`

___
<a id="templateapiaxiosparamcreator"></a>

### `<Const>` TemplateApiAxiosParamCreator

▸ **TemplateApiAxiosParamCreator**(configuration?: *[Configuration](classes/configuration.md)*): `object`

*Defined in [api.ts:1628](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L1628)*

TemplateApi - axios parameter creator

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` configuration | [Configuration](classes/configuration.md) |

**Returns:** `object`

___
<a id="templateapifactory"></a>

### `<Const>` TemplateApiFactory

▸ **TemplateApiFactory**(configuration?: *[Configuration](classes/configuration.md)*, basePath?: *`string`*, axios?: *`AxiosInstance`*): `object`

*Defined in [api.ts:1763](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L1763)*

TemplateApi - factory interface

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` configuration | [Configuration](classes/configuration.md) |
| `Optional` basePath | `string` |
| `Optional` axios | `AxiosInstance` |

**Returns:** `object`

___
<a id="templateapifp"></a>

### `<Const>` TemplateApiFp

▸ **TemplateApiFp**(configuration?: *[Configuration](classes/configuration.md)*): `object`

*Defined in [api.ts:1724](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L1724)*

TemplateApi - functional programming interface

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` configuration | [Configuration](classes/configuration.md) |

**Returns:** `object`

___
<a id="workflowapiaxiosparamcreator"></a>

### `<Const>` WorkflowApiAxiosParamCreator

▸ **WorkflowApiAxiosParamCreator**(configuration?: *[Configuration](classes/configuration.md)*): `object`

*Defined in [api.ts:1829](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L1829)*

WorkflowApi - axios parameter creator

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` configuration | [Configuration](classes/configuration.md) |

**Returns:** `object`

___
<a id="workflowapifactory"></a>

### `<Const>` WorkflowApiFactory

▸ **WorkflowApiFactory**(configuration?: *[Configuration](classes/configuration.md)*, basePath?: *`string`*, axios?: *`AxiosInstance`*): `object`

*Defined in [api.ts:2214](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L2214)*

WorkflowApi - factory interface

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` configuration | [Configuration](classes/configuration.md) |
| `Optional` basePath | `string` |
| `Optional` axios | `AxiosInstance` |

**Returns:** `object`

___
<a id="workflowapifp"></a>

### `<Const>` WorkflowApiFp

▸ **WorkflowApiFp**(configuration?: *[Configuration](classes/configuration.md)*): `object`

*Defined in [api.ts:2114](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L2114)*

WorkflowApi - functional programming interface

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

*Defined in [api.ts:26](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L26)*

*__export__*: 

<a id="collection_formats.csv"></a>

####  csv

**● csv**: *`string`* = ","

*Defined in [api.ts:27](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L27)*

___
<a id="collection_formats.pipes"></a>

####  pipes

**● pipes**: *`string`* = "|"

*Defined in [api.ts:30](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L30)*

___
<a id="collection_formats.ssv"></a>

####  ssv

**● ssv**: *`string`* = " "

*Defined in [api.ts:28](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L28)*

___
<a id="collection_formats.tsv"></a>

####  tsv

**● tsv**: *`string`* = "	"

*Defined in [api.ts:29](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L29)*

___

___

