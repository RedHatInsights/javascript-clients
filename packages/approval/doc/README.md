
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
* [GraphqlApi](classes/graphqlapi.md)
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
* [GraphqlIn](interfaces/graphqlin.md)
* [GraphqlOut](interfaces/graphqlout.md)
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
* [GraphqlApiAxiosParamCreator](#graphqlapiaxiosparamcreator)
* [GraphqlApiFactory](#graphqlapifactory)
* [GraphqlApiFp](#graphqlapifp)
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

*Defined in [api.ts:733](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L733)*

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

*Defined in [api.ts:983](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L983)*

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

*Defined in [api.ts:916](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L916)*

ActionApi - functional programming interface

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` configuration | [Configuration](classes/configuration.md) |

**Returns:** `object`

___
<a id="graphqlapiaxiosparamcreator"></a>

### `<Const>` GraphqlApiAxiosParamCreator

▸ **GraphqlApiAxiosParamCreator**(configuration?: *[Configuration](classes/configuration.md)*): `object`

*Defined in [api.ts:1093](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L1093)*

GraphqlApi - axios parameter creator

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` configuration | [Configuration](classes/configuration.md) |

**Returns:** `object`

___
<a id="graphqlapifactory"></a>

### `<Const>` GraphqlApiFactory

▸ **GraphqlApiFactory**(configuration?: *[Configuration](classes/configuration.md)*, basePath?: *`string`*, axios?: *`AxiosInstance`*): `object`

*Defined in [api.ts:1167](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L1167)*

GraphqlApi - factory interface

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` configuration | [Configuration](classes/configuration.md) |
| `Optional` basePath | `string` |
| `Optional` axios | `AxiosInstance` |

**Returns:** `object`

___
<a id="graphqlapifp"></a>

### `<Const>` GraphqlApiFp

▸ **GraphqlApiFp**(configuration?: *[Configuration](classes/configuration.md)*): `object`

*Defined in [api.ts:1144](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L1144)*

GraphqlApi - functional programming interface

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` configuration | [Configuration](classes/configuration.md) |

**Returns:** `object`

___
<a id="requestapiaxiosparamcreator"></a>

### `<Const>` RequestApiAxiosParamCreator

▸ **RequestApiAxiosParamCreator**(configuration?: *[Configuration](classes/configuration.md)*): `object`

*Defined in [api.ts:1207](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L1207)*

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

*Defined in [api.ts:1482](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L1482)*

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

*Defined in [api.ts:1410](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L1410)*

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

*Defined in [api.ts:1602](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L1602)*

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

*Defined in [api.ts:1726](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L1726)*

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

*Defined in [api.ts:1689](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L1689)*

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

*Defined in [api.ts:1788](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L1788)*

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

*Defined in [api.ts:1923](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L1923)*

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

*Defined in [api.ts:1884](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L1884)*

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

*Defined in [api.ts:1989](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L1989)*

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

*Defined in [api.ts:2374](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L2374)*

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

*Defined in [api.ts:2274](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L2274)*

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

