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

*Defined in [packages/config-manager/base.ts:20](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/config-manager/base.ts#L20)*

## Functions

### `Const` DefaultApiAxiosParamCreator

▸ **DefaultApiAxiosParamCreator**(`configuration?`: [Configuration](classes/configuration.md)): *object*

*Defined in [packages/config-manager/api.ts:189](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/config-manager/api.ts#L189)*

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

* **getStates**(`limit?`: number, `offset?`: number, `options`: any): *Promise‹[RequestArgs](interfaces/requestargs.md)›*

* **updateStates**(`state`: [State](interfaces/state.md), `options`: any): *Promise‹[RequestArgs](interfaces/requestargs.md)›*

___

### `Const` DefaultApiFactory

▸ **DefaultApiFactory**(`configuration?`: [Configuration](classes/configuration.md), `basePath?`: string, `axios?`: AxiosInstance): *object*

*Defined in [packages/config-manager/api.ts:511](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/config-manager/api.ts#L511)*

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

* **getStates**(`limit?`: number, `offset?`: number, `options?`: any): *AxiosPromise‹[StateArchives](interfaces/statearchives.md)›*

* **updateStates**(`state`: [State](interfaces/state.md), `options?`: any): *AxiosPromise‹[AccountState](interfaces/accountstate.md)›*

___

### `Const` DefaultApiFp

▸ **DefaultApiFp**(`configuration?`: [Configuration](classes/configuration.md)): *object*

*Defined in [packages/config-manager/api.ts:418](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/config-manager/api.ts#L418)*

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

* **getStates**(`limit?`: number, `offset?`: number, `options?`: any): *Promise‹function›*

* **updateStates**(`state`: [State](interfaces/state.md), `options?`: any): *Promise‹function›*

## Object literals

### `Const` COLLECTION_FORMATS

### ▪ **COLLECTION_FORMATS**: *object*

*Defined in [packages/config-manager/base.ts:26](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/config-manager/base.ts#L26)*

**`export`** 

###  csv

• **csv**: *string* = ","

*Defined in [packages/config-manager/base.ts:27](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/config-manager/base.ts#L27)*

###  pipes

• **pipes**: *string* = "|"

*Defined in [packages/config-manager/base.ts:30](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/config-manager/base.ts#L30)*

###  ssv

• **ssv**: *string* = " "

*Defined in [packages/config-manager/base.ts:28](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/config-manager/base.ts#L28)*

###  tsv

• **tsv**: *string* = "	"

*Defined in [packages/config-manager/base.ts:29](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/config-manager/base.ts#L29)*
