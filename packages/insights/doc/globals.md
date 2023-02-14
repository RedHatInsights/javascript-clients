[@redhat-cloud-services/insights-client](README.md) › [Globals](globals.md)

# @redhat-cloud-services/insights-client

## Index

### Classes

* [BaseAPI](classes/baseapi.md)
* [Configuration](classes/configuration.md)
* [KcsApi](classes/kcsapi.md)
* [RequiredError](classes/requirederror.md)
* [RulecategoryApi](classes/rulecategoryapi.md)
* [StatusApi](classes/statusapi.md)
* [SystemtypeApi](classes/systemtypeapi.md)

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
* [RulecategoryApiAxiosParamCreator](globals.md#const-rulecategoryapiaxiosparamcreator)
* [RulecategoryApiFactory](globals.md#const-rulecategoryapifactory)
* [RulecategoryApiFp](globals.md#const-rulecategoryapifp)
* [StatusApiAxiosParamCreator](globals.md#const-statusapiaxiosparamcreator)
* [StatusApiFactory](globals.md#const-statusapifactory)
* [StatusApiFp](globals.md#const-statusapifp)
* [SystemtypeApiAxiosParamCreator](globals.md#const-systemtypeapiaxiosparamcreator)
* [SystemtypeApiFactory](globals.md#const-systemtypeapifactory)
* [SystemtypeApiFp](globals.md#const-systemtypeapifp)

### Object literals

* [COLLECTION_FORMATS](globals.md#const-collection_formats)

## Variables

### `Const` BASE_PATH

• **BASE_PATH**: *string* = "https://console.redhat.com".replace(/\/+$/, "")

*Defined in [base.ts:20](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/base.ts#L20)*

## Functions

### `Const` KcsApiAxiosParamCreator

▸ **KcsApiAxiosParamCreator**(`configuration?`: [Configuration](classes/configuration.md)): *object*

*Defined in [api.ts:90](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L90)*

KcsApi - axios parameter creator

**`export`** 

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](classes/configuration.md) |

**Returns:** *object*

* **kcsList**(`nodeIds?`: Array‹string›, `options`: any): *Promise‹[RequestArgs](interfaces/requestargs.md)›*

* **kcsRetrieve**(`nodeId`: string, `options`: any): *Promise‹[RequestArgs](interfaces/requestargs.md)›*

___

### `Const` KcsApiFactory

▸ **KcsApiFactory**(`configuration?`: [Configuration](classes/configuration.md), `basePath?`: string, `axios?`: AxiosInstance): *object*

*Defined in [api.ts:203](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L203)*

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

* **kcsRetrieve**(`nodeId`: string, `options?`: any): *AxiosPromise‹Array‹string››*

___

### `Const` KcsApiFp

▸ **KcsApiFp**(`configuration?`: [Configuration](classes/configuration.md)): *object*

*Defined in [api.ts:168](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L168)*

KcsApi - functional programming interface

**`export`** 

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](classes/configuration.md) |

**Returns:** *object*

* **kcsList**(`nodeIds?`: Array‹string›, `options?`: any): *Promise‹function›*

* **kcsRetrieve**(`nodeId`: string, `options?`: any): *Promise‹function›*

___

### `Const` RulecategoryApiAxiosParamCreator

▸ **RulecategoryApiAxiosParamCreator**(`configuration?`: [Configuration](classes/configuration.md)): *object*

*Defined in [api.ts:262](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L262)*

RulecategoryApi - axios parameter creator

**`export`** 

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](classes/configuration.md) |

**Returns:** *object*

* **rulecategoryList**(`options`: any): *Promise‹[RequestArgs](interfaces/requestargs.md)›*

* **rulecategoryRetrieve**(`id`: number, `options`: any): *Promise‹[RequestArgs](interfaces/requestargs.md)›*

___

### `Const` RulecategoryApiFactory

▸ **RulecategoryApiFactory**(`configuration?`: [Configuration](classes/configuration.md), `basePath?`: string, `axios?`: AxiosInstance): *object*

*Defined in [api.ts:369](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L369)*

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

* **rulecategoryRetrieve**(`id`: number, `options?`: any): *AxiosPromise‹[RuleCategory](interfaces/rulecategory.md)›*

___

### `Const` RulecategoryApiFp

▸ **RulecategoryApiFp**(`configuration?`: [Configuration](classes/configuration.md)): *object*

*Defined in [api.ts:335](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L335)*

RulecategoryApi - functional programming interface

**`export`** 

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](classes/configuration.md) |

**Returns:** *object*

* **rulecategoryList**(`options?`: any): *Promise‹function›*

* **rulecategoryRetrieve**(`id`: number, `options?`: any): *Promise‹function›*

___

### `Const` StatusApiAxiosParamCreator

▸ **StatusApiAxiosParamCreator**(`configuration?`: [Configuration](classes/configuration.md)): *object*

*Defined in [api.ts:426](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L426)*

StatusApi - axios parameter creator

**`export`** 

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](classes/configuration.md) |

**Returns:** *object*

* **statusLiveRetrieve**(`options`: any): *Promise‹[RequestArgs](interfaces/requestargs.md)›*

* **statusReadyRetrieve**(`options`: any): *Promise‹[RequestArgs](interfaces/requestargs.md)›*

* **statusRetrieve**(`options`: any): *Promise‹[RequestArgs](interfaces/requestargs.md)›*

___

### `Const` StatusApiFactory

▸ **StatusApiFactory**(`configuration?`: [Configuration](classes/configuration.md), `basePath?`: string, `axios?`: AxiosInstance): *object*

*Defined in [api.ts:567](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L567)*

StatusApi - factory interface

**`export`** 

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](classes/configuration.md) |
`basePath?` | string |
`axios?` | AxiosInstance |

**Returns:** *object*

* **statusLiveRetrieve**(`options?`: any): *AxiosPromise‹void›*

* **statusReadyRetrieve**(`options?`: any): *AxiosPromise‹void›*

* **statusRetrieve**(`options?`: any): *AxiosPromise‹void›*

___

### `Const` StatusApiFp

▸ **StatusApiFp**(`configuration?`: [Configuration](classes/configuration.md)): *object*

*Defined in [api.ts:522](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L522)*

StatusApi - functional programming interface

**`export`** 

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](classes/configuration.md) |

**Returns:** *object*

* **statusLiveRetrieve**(`options?`: any): *Promise‹function›*

* **statusReadyRetrieve**(`options?`: any): *Promise‹function›*

* **statusRetrieve**(`options?`: any): *Promise‹function›*

___

### `Const` SystemtypeApiAxiosParamCreator

▸ **SystemtypeApiAxiosParamCreator**(`configuration?`: [Configuration](classes/configuration.md)): *object*

*Defined in [api.ts:640](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L640)*

SystemtypeApi - axios parameter creator

**`export`** 

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](classes/configuration.md) |

**Returns:** *object*

* **systemtypeList**(`options`: any): *Promise‹[RequestArgs](interfaces/requestargs.md)›*

* **systemtypeRetrieve**(`id`: number, `options`: any): *Promise‹[RequestArgs](interfaces/requestargs.md)›*

___

### `Const` SystemtypeApiFactory

▸ **SystemtypeApiFactory**(`configuration?`: [Configuration](classes/configuration.md), `basePath?`: string, `axios?`: AxiosInstance): *object*

*Defined in [api.ts:751](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L751)*

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

* **systemtypeRetrieve**(`id`: number, `options?`: any): *AxiosPromise‹[SystemType](interfaces/systemtype.md)›*

___

### `Const` SystemtypeApiFp

▸ **SystemtypeApiFp**(`configuration?`: [Configuration](classes/configuration.md)): *object*

*Defined in [api.ts:715](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L715)*

SystemtypeApi - functional programming interface

**`export`** 

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](classes/configuration.md) |

**Returns:** *object*

* **systemtypeList**(`options?`: any): *Promise‹function›*

* **systemtypeRetrieve**(`id`: number, `options?`: any): *Promise‹function›*

## Object literals

### `Const` COLLECTION_FORMATS

### ▪ **COLLECTION_FORMATS**: *object*

*Defined in [base.ts:26](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/base.ts#L26)*

**`export`** 

###  csv

• **csv**: *string* = ","

*Defined in [base.ts:27](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/base.ts#L27)*

###  pipes

• **pipes**: *string* = "|"

*Defined in [base.ts:30](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/base.ts#L30)*

###  ssv

• **ssv**: *string* = " "

*Defined in [base.ts:28](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/base.ts#L28)*

###  tsv

• **tsv**: *string* = "	"

*Defined in [base.ts:29](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/base.ts#L29)*
