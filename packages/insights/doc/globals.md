[@redhat-cloud-services/insights-client](README.md) › [Globals](globals.md)

# @redhat-cloud-services/insights-client

## Index

### Classes

* [BaseAPI](classes/baseapi.md)
* [Configuration](classes/configuration.md)
* [KcsApi](classes/kcsapi.md)
* [RequiredError](classes/requirederror.md)
* [ResolutionRiskApi](classes/resolutionriskapi.md)
* [RulecategoryApi](classes/rulecategoryapi.md)
* [StatusApi](classes/statusapi.md)
* [SystemtypeApi](classes/systemtypeapi.md)
* [TotalRiskApi](classes/totalriskapi.md)

### Interfaces

* [ConfigurationParameters](interfaces/configurationparameters.md)
* [Kcs](interfaces/kcs.md)
* [RequestArgs](interfaces/requestargs.md)
* [RuleCategory](interfaces/rulecategory.md)
* [StatusReady](interfaces/statusready.md)
* [SystemType](interfaces/systemtype.md)

### Variables

* [BASE_PATH](globals.md#const-base_path)

### Functions

* [KcsApiAxiosParamCreator](globals.md#const-kcsapiaxiosparamcreator)
* [KcsApiFactory](globals.md#const-kcsapifactory)
* [KcsApiFp](globals.md#const-kcsapifp)
* [ResolutionRiskApiAxiosParamCreator](globals.md#const-resolutionriskapiaxiosparamcreator)
* [ResolutionRiskApiFactory](globals.md#const-resolutionriskapifactory)
* [ResolutionRiskApiFp](globals.md#const-resolutionriskapifp)
* [RulecategoryApiAxiosParamCreator](globals.md#const-rulecategoryapiaxiosparamcreator)
* [RulecategoryApiFactory](globals.md#const-rulecategoryapifactory)
* [RulecategoryApiFp](globals.md#const-rulecategoryapifp)
* [StatusApiAxiosParamCreator](globals.md#const-statusapiaxiosparamcreator)
* [StatusApiFactory](globals.md#const-statusapifactory)
* [StatusApiFp](globals.md#const-statusapifp)
* [SystemtypeApiAxiosParamCreator](globals.md#const-systemtypeapiaxiosparamcreator)
* [SystemtypeApiFactory](globals.md#const-systemtypeapifactory)
* [SystemtypeApiFp](globals.md#const-systemtypeapifp)
* [TotalRiskApiAxiosParamCreator](globals.md#const-totalriskapiaxiosparamcreator)
* [TotalRiskApiFactory](globals.md#const-totalriskapifactory)
* [TotalRiskApiFp](globals.md#const-totalriskapifp)

### Object literals

* [COLLECTION_FORMATS](globals.md#const-collection_formats)

## Variables

### `Const` BASE_PATH

• **BASE_PATH**: *string* = "https://cloud.redhat.com/api/insights/v1".replace(/\/+$/, "")

*Defined in [packages/insights/base.ts:20](https://github.com/fhlavac/javascript-clients/blob/master/packages/insights/base.ts#L20)*

## Functions

### `Const` KcsApiAxiosParamCreator

▸ **KcsApiAxiosParamCreator**(`configuration?`: [Configuration](classes/configuration.md)): *object*

*Defined in [packages/insights/api.ts:121](https://github.com/fhlavac/javascript-clients/blob/master/packages/insights/api.ts#L121)*

KcsApi - axios parameter creator

**`export`** 

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](classes/configuration.md) |

**Returns:** *object*

* **kcsList**(`nodeIds?`: Array‹string›, `options`: any): *Promise‹[RequestArgs](interfaces/requestargs.md)›*

* **kcsRead**(`nodeId`: string, `options`: any): *Promise‹[RequestArgs](interfaces/requestargs.md)›*

___

### `Const` KcsApiFactory

▸ **KcsApiFactory**(`configuration?`: [Configuration](classes/configuration.md), `basePath?`: string, `axios?`: AxiosInstance): *object*

*Defined in [packages/insights/api.ts:238](https://github.com/fhlavac/javascript-clients/blob/master/packages/insights/api.ts#L238)*

KcsApi - factory interface

**`export`** 

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](classes/configuration.md) |
`basePath?` | string |
`axios?` | AxiosInstance |

**Returns:** *object*

* **kcsList**(`nodeIds?`: Array‹string›, `options?`: any): *AxiosPromise‹Array‹[Kcs](interfaces/kcs.md)››*

* **kcsRead**(`nodeId`: string, `options?`: any): *AxiosPromise‹Array‹string››*

___

### `Const` KcsApiFp

▸ **KcsApiFp**(`configuration?`: [Configuration](classes/configuration.md)): *object*

*Defined in [packages/insights/api.ts:201](https://github.com/fhlavac/javascript-clients/blob/master/packages/insights/api.ts#L201)*

KcsApi - functional programming interface

**`export`** 

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](classes/configuration.md) |

**Returns:** *object*

* **kcsList**(`nodeIds?`: Array‹string›, `options?`: any): *Promise‹function›*

* **kcsRead**(`nodeId`: string, `options?`: any): *Promise‹function›*

___

### `Const` ResolutionRiskApiAxiosParamCreator

▸ **ResolutionRiskApiAxiosParamCreator**(`configuration?`: [Configuration](classes/configuration.md)): *object*

*Defined in [packages/insights/api.ts:301](https://github.com/fhlavac/javascript-clients/blob/master/packages/insights/api.ts#L301)*

ResolutionRiskApi - axios parameter creator

**`export`** 

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](classes/configuration.md) |

**Returns:** *object*

* **resolutionRiskList**(`options`: any): *Promise‹[RequestArgs](interfaces/requestargs.md)›*

___

### `Const` ResolutionRiskApiFactory

▸ **ResolutionRiskApiFactory**(`configuration?`: [Configuration](classes/configuration.md), `basePath?`: string, `axios?`: AxiosInstance): *object*

*Defined in [packages/insights/api.ts:362](https://github.com/fhlavac/javascript-clients/blob/master/packages/insights/api.ts#L362)*

ResolutionRiskApi - factory interface

**`export`** 

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](classes/configuration.md) |
`basePath?` | string |
`axios?` | AxiosInstance |

**Returns:** *object*

* **resolutionRiskList**(`options?`: any): *AxiosPromise‹void›*

___

### `Const` ResolutionRiskApiFp

▸ **ResolutionRiskApiFp**(`configuration?`: [Configuration](classes/configuration.md)): *object*

*Defined in [packages/insights/api.ts:340](https://github.com/fhlavac/javascript-clients/blob/master/packages/insights/api.ts#L340)*

ResolutionRiskApi - functional programming interface

**`export`** 

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](classes/configuration.md) |

**Returns:** *object*

* **resolutionRiskList**(`options?`: any): *Promise‹function›*

___

### `Const` RulecategoryApiAxiosParamCreator

▸ **RulecategoryApiAxiosParamCreator**(`configuration?`: [Configuration](classes/configuration.md)): *object*

*Defined in [packages/insights/api.ts:401](https://github.com/fhlavac/javascript-clients/blob/master/packages/insights/api.ts#L401)*

RulecategoryApi - axios parameter creator

**`export`** 

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](classes/configuration.md) |

**Returns:** *object*

* **rulecategoryList**(`options`: any): *Promise‹[RequestArgs](interfaces/requestargs.md)›*

* **rulecategoryRead**(`id`: number, `options`: any): *Promise‹[RequestArgs](interfaces/requestargs.md)›*

___

### `Const` RulecategoryApiFactory

▸ **RulecategoryApiFactory**(`configuration?`: [Configuration](classes/configuration.md), `basePath?`: string, `axios?`: AxiosInstance): *object*

*Defined in [packages/insights/api.ts:512](https://github.com/fhlavac/javascript-clients/blob/master/packages/insights/api.ts#L512)*

RulecategoryApi - factory interface

**`export`** 

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](classes/configuration.md) |
`basePath?` | string |
`axios?` | AxiosInstance |

**Returns:** *object*

* **rulecategoryList**(`options?`: any): *AxiosPromise‹Array‹[RuleCategory](interfaces/rulecategory.md)››*

* **rulecategoryRead**(`id`: number, `options?`: any): *AxiosPromise‹[RuleCategory](interfaces/rulecategory.md)›*

___

### `Const` RulecategoryApiFp

▸ **RulecategoryApiFp**(`configuration?`: [Configuration](classes/configuration.md)): *object*

*Defined in [packages/insights/api.ts:476](https://github.com/fhlavac/javascript-clients/blob/master/packages/insights/api.ts#L476)*

RulecategoryApi - functional programming interface

**`export`** 

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](classes/configuration.md) |

**Returns:** *object*

* **rulecategoryList**(`options?`: any): *Promise‹function›*

* **rulecategoryRead**(`id`: number, `options?`: any): *Promise‹function›*

___

### `Const` StatusApiAxiosParamCreator

▸ **StatusApiAxiosParamCreator**(`configuration?`: [Configuration](classes/configuration.md)): *object*

*Defined in [packages/insights/api.ts:573](https://github.com/fhlavac/javascript-clients/blob/master/packages/insights/api.ts#L573)*

StatusApi - axios parameter creator

**`export`** 

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](classes/configuration.md) |

**Returns:** *object*

* **statusList**(`options`: any): *Promise‹[RequestArgs](interfaces/requestargs.md)›*

* **statusLiveRead**(`options`: any): *Promise‹[RequestArgs](interfaces/requestargs.md)›*

* **statusReadyRead**(`options`: any): *Promise‹[RequestArgs](interfaces/requestargs.md)›*

___

### `Const` StatusApiFactory

▸ **StatusApiFactory**(`configuration?`: [Configuration](classes/configuration.md), `basePath?`: string, `axios?`: AxiosInstance): *object*

*Defined in [packages/insights/api.ts:720](https://github.com/fhlavac/javascript-clients/blob/master/packages/insights/api.ts#L720)*

StatusApi - factory interface

**`export`** 

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](classes/configuration.md) |
`basePath?` | string |
`axios?` | AxiosInstance |

**Returns:** *object*

* **statusList**(`options?`: any): *AxiosPromise‹void›*

* **statusLiveRead**(`options?`: any): *AxiosPromise‹[StatusReady](interfaces/statusready.md)›*

* **statusReadyRead**(`options?`: any): *AxiosPromise‹[StatusReady](interfaces/statusready.md)›*

___

### `Const` StatusApiFp

▸ **StatusApiFp**(`configuration?`: [Configuration](classes/configuration.md)): *object*

*Defined in [packages/insights/api.ts:672](https://github.com/fhlavac/javascript-clients/blob/master/packages/insights/api.ts#L672)*

StatusApi - functional programming interface

**`export`** 

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](classes/configuration.md) |

**Returns:** *object*

* **statusList**(`options?`: any): *Promise‹function›*

* **statusLiveRead**(`options?`: any): *Promise‹function›*

* **statusReadyRead**(`options?`: any): *Promise‹function›*

___

### `Const` SystemtypeApiAxiosParamCreator

▸ **SystemtypeApiAxiosParamCreator**(`configuration?`: [Configuration](classes/configuration.md)): *object*

*Defined in [packages/insights/api.ts:799](https://github.com/fhlavac/javascript-clients/blob/master/packages/insights/api.ts#L799)*

SystemtypeApi - axios parameter creator

**`export`** 

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](classes/configuration.md) |

**Returns:** *object*

* **systemtypeList**(`options`: any): *Promise‹[RequestArgs](interfaces/requestargs.md)›*

* **systemtypeRead**(`id`: number, `options`: any): *Promise‹[RequestArgs](interfaces/requestargs.md)›*

___

### `Const` SystemtypeApiFactory

▸ **SystemtypeApiFactory**(`configuration?`: [Configuration](classes/configuration.md), `basePath?`: string, `axios?`: AxiosInstance): *object*

*Defined in [packages/insights/api.ts:910](https://github.com/fhlavac/javascript-clients/blob/master/packages/insights/api.ts#L910)*

SystemtypeApi - factory interface

**`export`** 

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](classes/configuration.md) |
`basePath?` | string |
`axios?` | AxiosInstance |

**Returns:** *object*

* **systemtypeList**(`options?`: any): *AxiosPromise‹Array‹[SystemType](interfaces/systemtype.md)››*

* **systemtypeRead**(`id`: number, `options?`: any): *AxiosPromise‹[SystemType](interfaces/systemtype.md)›*

___

### `Const` SystemtypeApiFp

▸ **SystemtypeApiFp**(`configuration?`: [Configuration](classes/configuration.md)): *object*

*Defined in [packages/insights/api.ts:874](https://github.com/fhlavac/javascript-clients/blob/master/packages/insights/api.ts#L874)*

SystemtypeApi - functional programming interface

**`export`** 

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](classes/configuration.md) |

**Returns:** *object*

* **systemtypeList**(`options?`: any): *Promise‹function›*

* **systemtypeRead**(`id`: number, `options?`: any): *Promise‹function›*

___

### `Const` TotalRiskApiAxiosParamCreator

▸ **TotalRiskApiAxiosParamCreator**(`configuration?`: [Configuration](classes/configuration.md)): *object*

*Defined in [packages/insights/api.ts:971](https://github.com/fhlavac/javascript-clients/blob/master/packages/insights/api.ts#L971)*

TotalRiskApi - axios parameter creator

**`export`** 

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](classes/configuration.md) |

**Returns:** *object*

* **totalRiskList**(`options`: any): *Promise‹[RequestArgs](interfaces/requestargs.md)›*

___

### `Const` TotalRiskApiFactory

▸ **TotalRiskApiFactory**(`configuration?`: [Configuration](classes/configuration.md), `basePath?`: string, `axios?`: AxiosInstance): *object*

*Defined in [packages/insights/api.ts:1032](https://github.com/fhlavac/javascript-clients/blob/master/packages/insights/api.ts#L1032)*

TotalRiskApi - factory interface

**`export`** 

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](classes/configuration.md) |
`basePath?` | string |
`axios?` | AxiosInstance |

**Returns:** *object*

* **totalRiskList**(`options?`: any): *AxiosPromise‹void›*

___

### `Const` TotalRiskApiFp

▸ **TotalRiskApiFp**(`configuration?`: [Configuration](classes/configuration.md)): *object*

*Defined in [packages/insights/api.ts:1010](https://github.com/fhlavac/javascript-clients/blob/master/packages/insights/api.ts#L1010)*

TotalRiskApi - functional programming interface

**`export`** 

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](classes/configuration.md) |

**Returns:** *object*

* **totalRiskList**(`options?`: any): *Promise‹function›*

## Object literals

### `Const` COLLECTION_FORMATS

### ▪ **COLLECTION_FORMATS**: *object*

*Defined in [packages/insights/base.ts:26](https://github.com/fhlavac/javascript-clients/blob/master/packages/insights/base.ts#L26)*

**`export`** 

###  csv

• **csv**: *string* = ","

*Defined in [packages/insights/base.ts:27](https://github.com/fhlavac/javascript-clients/blob/master/packages/insights/base.ts#L27)*

###  pipes

• **pipes**: *string* = "|"

*Defined in [packages/insights/base.ts:30](https://github.com/fhlavac/javascript-clients/blob/master/packages/insights/base.ts#L30)*

###  ssv

• **ssv**: *string* = " "

*Defined in [packages/insights/base.ts:28](https://github.com/fhlavac/javascript-clients/blob/master/packages/insights/base.ts#L28)*

###  tsv

• **tsv**: *string* = "	"

*Defined in [packages/insights/base.ts:29](https://github.com/fhlavac/javascript-clients/blob/master/packages/insights/base.ts#L29)*
