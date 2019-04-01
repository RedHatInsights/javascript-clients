
javascript-clients
==================

Javascript clients for swagger API

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

**● BASE_PATH**: *`string`* =  "http://localhost/api/approval/v1.0".replace(/\/+$/, "")

*Defined in api.ts:20*

___

## Functions

<a id="actionapiaxiosparamcreator"></a>

### `<Const>` ActionApiAxiosParamCreator

▸ **ActionApiAxiosParamCreator**(configuration?: *[Configuration](classes/configuration.md)*): `object`

*Defined in api.ts:639*

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

*Defined in api.ts:826*

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

*Defined in api.ts:774*

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

*Defined in api.ts:912*

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

*Defined in api.ts:1187*

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

*Defined in api.ts:1115*

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

*Defined in api.ts:1307*

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

*Defined in api.ts:1431*

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

*Defined in api.ts:1394*

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

*Defined in api.ts:1493*

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

*Defined in api.ts:1622*

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

*Defined in api.ts:1584*

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

*Defined in api.ts:1686*

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

*Defined in api.ts:2059*

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

*Defined in api.ts:1961*

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

*Defined in api.ts:26*

*__export__*: 

<a id="collection_formats.csv"></a>

####  csv

**● csv**: *`string`* = ","

*Defined in api.ts:27*

___
<a id="collection_formats.pipes"></a>

####  pipes

**● pipes**: *`string`* = "|"

*Defined in api.ts:30*

___
<a id="collection_formats.ssv"></a>

####  ssv

**● ssv**: *`string`* = " "

*Defined in api.ts:28*

___
<a id="collection_formats.tsv"></a>

####  tsv

**● tsv**: *`string`* = "	"

*Defined in api.ts:29*

___

___

