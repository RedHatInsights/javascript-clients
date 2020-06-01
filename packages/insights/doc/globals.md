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
* [SystemtypeApi](classes/systemtypeapi.md)
* [TotalRiskApi](classes/totalriskapi.md)

### Interfaces

* [ConfigurationParameters](interfaces/configurationparameters.md)
* [Kcs](interfaces/kcs.md)
* [RequestArgs](interfaces/requestargs.md)
* [RuleCategory](interfaces/rulecategory.md)
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

*Defined in [packages/insights/base.ts:20](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/base.ts#L20)*

## Functions

### `Const` KcsApiAxiosParamCreator

▸ **KcsApiAxiosParamCreator**(`configuration?`: [Configuration](classes/configuration.md)): *object*

*Defined in [packages/insights/api.ts:90](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L90)*

KcsApi - axios parameter creator

**`export`** 

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](classes/configuration.md) |

**Returns:** *object*

* **kcsList**(`nodeIds?`: Array‹string›, `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **kcsRead**(`nodeId`: string, `options`: any): *[RequestArgs](interfaces/requestargs.md)*

___

### `Const` KcsApiFactory

▸ **KcsApiFactory**(`configuration?`: [Configuration](classes/configuration.md), `basePath?`: string, `axios?`: AxiosInstance): *object*

*Defined in [packages/insights/api.ts:207](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L207)*

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

*Defined in [packages/insights/api.ts:170](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L170)*

KcsApi - functional programming interface

**`export`** 

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](classes/configuration.md) |

**Returns:** *object*

* **kcsList**(`nodeIds?`: Array‹string›, `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹Array‹[Kcs](interfaces/kcs.md)››*

* **kcsRead**(`nodeId`: string, `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹Array‹string››*

___

### `Const` ResolutionRiskApiAxiosParamCreator

▸ **ResolutionRiskApiAxiosParamCreator**(`configuration?`: [Configuration](classes/configuration.md)): *object*

*Defined in [packages/insights/api.ts:270](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L270)*

ResolutionRiskApi - axios parameter creator

**`export`** 

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](classes/configuration.md) |

**Returns:** *object*

* **resolutionRiskList**(`options`: any): *[RequestArgs](interfaces/requestargs.md)*

___

### `Const` ResolutionRiskApiFactory

▸ **ResolutionRiskApiFactory**(`configuration?`: [Configuration](classes/configuration.md), `basePath?`: string, `axios?`: AxiosInstance): *object*

*Defined in [packages/insights/api.ts:331](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L331)*

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

*Defined in [packages/insights/api.ts:309](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L309)*

ResolutionRiskApi - functional programming interface

**`export`** 

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](classes/configuration.md) |

**Returns:** *object*

* **resolutionRiskList**(`options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹void›*

___

### `Const` RulecategoryApiAxiosParamCreator

▸ **RulecategoryApiAxiosParamCreator**(`configuration?`: [Configuration](classes/configuration.md)): *object*

*Defined in [packages/insights/api.ts:370](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L370)*

RulecategoryApi - axios parameter creator

**`export`** 

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](classes/configuration.md) |

**Returns:** *object*

* **rulecategoryList**(`options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **rulecategoryRead**(`id`: number, `options`: any): *[RequestArgs](interfaces/requestargs.md)*

___

### `Const` RulecategoryApiFactory

▸ **RulecategoryApiFactory**(`configuration?`: [Configuration](classes/configuration.md), `basePath?`: string, `axios?`: AxiosInstance): *object*

*Defined in [packages/insights/api.ts:481](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L481)*

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

*Defined in [packages/insights/api.ts:445](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L445)*

RulecategoryApi - functional programming interface

**`export`** 

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](classes/configuration.md) |

**Returns:** *object*

* **rulecategoryList**(`options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹Array‹[RuleCategory](interfaces/rulecategory.md)››*

* **rulecategoryRead**(`id`: number, `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹[RuleCategory](interfaces/rulecategory.md)›*

___

### `Const` SystemtypeApiAxiosParamCreator

▸ **SystemtypeApiAxiosParamCreator**(`configuration?`: [Configuration](classes/configuration.md)): *object*

*Defined in [packages/insights/api.ts:542](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L542)*

SystemtypeApi - axios parameter creator

**`export`** 

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](classes/configuration.md) |

**Returns:** *object*

* **systemtypeList**(`options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **systemtypeRead**(`id`: number, `options`: any): *[RequestArgs](interfaces/requestargs.md)*

___

### `Const` SystemtypeApiFactory

▸ **SystemtypeApiFactory**(`configuration?`: [Configuration](classes/configuration.md), `basePath?`: string, `axios?`: AxiosInstance): *object*

*Defined in [packages/insights/api.ts:653](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L653)*

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

*Defined in [packages/insights/api.ts:617](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L617)*

SystemtypeApi - functional programming interface

**`export`** 

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](classes/configuration.md) |

**Returns:** *object*

* **systemtypeList**(`options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹Array‹[SystemType](interfaces/systemtype.md)››*

* **systemtypeRead**(`id`: number, `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹[SystemType](interfaces/systemtype.md)›*

___

### `Const` TotalRiskApiAxiosParamCreator

▸ **TotalRiskApiAxiosParamCreator**(`configuration?`: [Configuration](classes/configuration.md)): *object*

*Defined in [packages/insights/api.ts:714](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L714)*

TotalRiskApi - axios parameter creator

**`export`** 

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](classes/configuration.md) |

**Returns:** *object*

* **totalRiskList**(`options`: any): *[RequestArgs](interfaces/requestargs.md)*

___

### `Const` TotalRiskApiFactory

▸ **TotalRiskApiFactory**(`configuration?`: [Configuration](classes/configuration.md), `basePath?`: string, `axios?`: AxiosInstance): *object*

*Defined in [packages/insights/api.ts:775](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L775)*

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

*Defined in [packages/insights/api.ts:753](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L753)*

TotalRiskApi - functional programming interface

**`export`** 

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](classes/configuration.md) |

**Returns:** *object*

* **totalRiskList**(`options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹void›*

## Object literals

### `Const` COLLECTION_FORMATS

### ▪ **COLLECTION_FORMATS**: *object*

*Defined in [packages/insights/base.ts:26](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/base.ts#L26)*

**`export`** 

###  csv

• **csv**: *string* = ","

*Defined in [packages/insights/base.ts:27](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/base.ts#L27)*

###  pipes

• **pipes**: *string* = "|"

*Defined in [packages/insights/base.ts:30](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/base.ts#L30)*

###  ssv

• **ssv**: *string* = " "

*Defined in [packages/insights/base.ts:28](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/base.ts#L28)*

###  tsv

• **tsv**: *string* = "	"

*Defined in [packages/insights/base.ts:29](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/base.ts#L29)*
