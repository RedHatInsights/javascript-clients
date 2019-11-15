
[

Javascript client for Approval API
==================================

](#javascript-client-for-approval-api)

If you want to use [ManageIQ/approval-api](https://github.com/ManageIQ/approval-api) you shouldn't use get requests directly, but rather use this client to integrate with this service.

[

Install
-------

](#install)

NPM

```bash
npm install --save @redhat-cloud-services/approval-client
```

Or Yarn

```bash
yarn add @redhat-cloud-services/approval-client
```

[

### Usage

](#usage)

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

[

API documentation
-----------------

](#api-documentation)

*   [README](doc/README.md)

## Index

### Modules

* [Action](modules/action.md)
* [Request](modules/request.md)

### Classes

* [ActionApi](classes/actionapi.md)
* [BaseAPI](classes/baseapi.md)
* [Configuration](classes/configuration.md)
* [GraphqlApi](classes/graphqlapi.md)
* [RequestApi](classes/requestapi.md)
* [RequiredError](classes/requirederror.md)
* [TemplateApi](classes/templateapi.md)
* [WorkflowApi](classes/workflowapi.md)

### Interfaces

* [ActionCollection](interfaces/actioncollection.md)
* [CollectionLinks](interfaces/collectionlinks.md)
* [CollectionMetadata](interfaces/collectionmetadata.md)
* [ConfigurationParameters](interfaces/configurationparameters.md)
* [GraphqlIn](interfaces/graphqlin.md)
* [GraphqlOut](interfaces/graphqlout.md)
* [RequestArgs](interfaces/requestargs.md)
* [RequestCollection](interfaces/requestcollection.md)
* [RequestIn](interfaces/requestin.md)
* [ResourceObject](interfaces/resourceobject.md)
* [Tag](interfaces/tag.md)
* [TagResource](interfaces/tagresource.md)
* [Template](interfaces/template.md)
* [TemplateCollection](interfaces/templatecollection.md)
* [Workflow](interfaces/workflow.md)
* [WorkflowCollection](interfaces/workflowcollection.md)

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

*Defined in [api.ts:648](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L648)*

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

*Defined in [api.ts:835](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L835)*

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

*Defined in [api.ts:783](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L783)*

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

*Defined in [api.ts:921](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L921)*

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

*Defined in [api.ts:995](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L995)*

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

*Defined in [api.ts:972](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L972)*

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

*Defined in [api.ts:1035](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L1035)*

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

*Defined in [api.ts:1285](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L1285)*

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

*Defined in [api.ts:1217](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L1217)*

RequestApi - functional programming interface

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` configuration | [Configuration](classes/configuration.md) |

**Returns:** `object`

___
<a id="templateapiaxiosparamcreator"></a>

### `<Const>` TemplateApiAxiosParamCreator

▸ **TemplateApiAxiosParamCreator**(configuration?: *[Configuration](classes/configuration.md)*): `object`

*Defined in [api.ts:1397](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L1397)*

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

*Defined in [api.ts:1532](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L1532)*

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

*Defined in [api.ts:1493](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L1493)*

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

*Defined in [api.ts:1598](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L1598)*

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

*Defined in [api.ts:2221](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L2221)*

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

*Defined in [api.ts:2063](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L2063)*

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

