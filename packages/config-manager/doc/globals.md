[@redhat-cloud-services/config-manager-client](README.md) › [Globals](globals.md)

# @redhat-cloud-services/config-manager-client

## Index

### Enumerations

* [StateComplianceOpenscapEnum](enums/statecomplianceopenscapenum.md)
* [StateInsightsEnum](enums/stateinsightsenum.md)
* [StateRemediationsEnum](enums/stateremediationsenum.md)

### Classes

* [BaseAPI](classes/baseapi.md)
* [Configuration](classes/configuration.md)
* [DefaultApi](classes/defaultapi.md)
* [RequiredError](classes/requirederror.md)

### Interfaces

* [AccountState](interfaces/accountstate.md)
* [ConfigurationParameters](interfaces/configurationparameters.md)
* [RequestArgs](interfaces/requestargs.md)
* [State](interfaces/state.md)
* [StateArchive](interfaces/statearchive.md)
* [StateArchives](interfaces/statearchives.md)

### Variables

* [BASE_PATH](globals.md#const-base_path)

### Functions

* [DefaultApiAxiosParamCreator](globals.md#const-defaultapiaxiosparamcreator)
* [DefaultApiFactory](globals.md#const-defaultapifactory)
* [DefaultApiFp](globals.md#const-defaultapifp)

### Object literals

* [COLLECTION_FORMATS](globals.md#const-collection_formats)

## Variables

### `Const` BASE_PATH

• **BASE_PATH**: *string* = "https://cloud.redhat.com/api/config-manager/v1".replace(/\/+$/, "")

*Defined in [base.ts:20](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/config-manager/base.ts#L20)*

## Functions

### `Const` DefaultApiAxiosParamCreator

▸ **DefaultApiAxiosParamCreator**(`configuration?`: [Configuration](classes/configuration.md)): *object*

*Defined in [api.ts:207](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/config-manager/api.ts#L207)*

DefaultApi - axios parameter creator

**`export`** 

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](classes/configuration.md) |

**Returns:** *object*

* **getCurrentState**(`options`: any): *Promise‹[RequestArgs](interfaces/requestargs.md)›*

* **getPlaybookById**(`id`: string, `options`: any): *Promise‹[RequestArgs](interfaces/requestargs.md)›*

* **getPlaybookPreview**(`state`: [State](interfaces/state.md), `options`: any): *Promise‹[RequestArgs](interfaces/requestargs.md)›*

* **getStateById**(`id`: string, `options`: any): *Promise‹[RequestArgs](interfaces/requestargs.md)›*

* **getStates**(`limit?`: number, `offset?`: number, `sortBy?`: "created_at" | "created_at:asc" | "created_at:desc", `options`: any): *Promise‹[RequestArgs](interfaces/requestargs.md)›*

* **postManage**(`body?`: boolean, `options`: any): *Promise‹[RequestArgs](interfaces/requestargs.md)›*

* **updateStates**(`state`: [State](interfaces/state.md), `options`: any): *Promise‹[RequestArgs](interfaces/requestargs.md)›*

___

### `Const` DefaultApiFactory

▸ **DefaultApiFactory**(`configuration?`: [Configuration](classes/configuration.md), `basePath?`: string, `axios?`: AxiosInstance): *object*

*Defined in [api.ts:584](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/config-manager/api.ts#L584)*

DefaultApi - factory interface

**`export`** 

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](classes/configuration.md) |
`basePath?` | string |
`axios?` | AxiosInstance |

**Returns:** *object*

* **getCurrentState**(`options?`: any): *AxiosPromise‹[AccountState](interfaces/accountstate.md)›*

* **getPlaybookById**(`id`: string, `options?`: any): *AxiosPromise‹string›*

* **getPlaybookPreview**(`state`: [State](interfaces/state.md), `options?`: any): *AxiosPromise‹string›*

* **getStateById**(`id`: string, `options?`: any): *AxiosPromise‹[StateArchive](interfaces/statearchive.md)›*

* **getStates**(`limit?`: number, `offset?`: number, `sortBy?`: "created_at" | "created_at:asc" | "created_at:desc", `options?`: any): *AxiosPromise‹[StateArchives](interfaces/statearchives.md)›*

* **postManage**(`body?`: boolean, `options?`: any): *AxiosPromise‹void›*

* **updateStates**(`state`: [State](interfaces/state.md), `options?`: any): *AxiosPromise‹[AccountState](interfaces/accountstate.md)›*

___

### `Const` DefaultApiFp

▸ **DefaultApiFp**(`configuration?`: [Configuration](classes/configuration.md)): *object*

*Defined in [api.ts:476](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/config-manager/api.ts#L476)*

DefaultApi - functional programming interface

**`export`** 

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](classes/configuration.md) |

**Returns:** *object*

* **getCurrentState**(`options?`: any): *Promise‹function›*

* **getPlaybookById**(`id`: string, `options?`: any): *Promise‹function›*

* **getPlaybookPreview**(`state`: [State](interfaces/state.md), `options?`: any): *Promise‹function›*

* **getStateById**(`id`: string, `options?`: any): *Promise‹function›*

* **getStates**(`limit?`: number, `offset?`: number, `sortBy?`: "created_at" | "created_at:asc" | "created_at:desc", `options?`: any): *Promise‹function›*

* **postManage**(`body?`: boolean, `options?`: any): *Promise‹function›*

* **updateStates**(`state`: [State](interfaces/state.md), `options?`: any): *Promise‹function›*

## Object literals

### `Const` COLLECTION_FORMATS

### ▪ **COLLECTION_FORMATS**: *object*

*Defined in [base.ts:26](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/config-manager/base.ts#L26)*

**`export`** 

###  csv

• **csv**: *string* = ","

*Defined in [base.ts:27](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/config-manager/base.ts#L27)*

###  pipes

• **pipes**: *string* = "|"

*Defined in [base.ts:30](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/config-manager/base.ts#L30)*

###  ssv

• **ssv**: *string* = " "

*Defined in [base.ts:28](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/config-manager/base.ts#L28)*

###  tsv

• **tsv**: *string* = "	"

*Defined in [base.ts:29](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/config-manager/base.ts#L29)*
