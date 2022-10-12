[@redhat-cloud-services/config-manager-client](README.md) › [Globals](globals.md)

# @redhat-cloud-services/config-manager-client

## Index

### Classes

* [BaseAPI](classes/baseapi.md)
* [Configuration](classes/configuration.md)
* [DefaultApi](classes/defaultapi.md)
* [RequiredError](classes/requirederror.md)

### Interfaces

* [ConfigurationParameters](interfaces/configurationparameters.md)
* [InlineObject](interfaces/inlineobject.md)
* [InlineResponse200](interfaces/inlineresponse200.md)
* [Profile](interfaces/profile.md)
* [RequestArgs](interfaces/requestargs.md)

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

• **BASE_PATH**: *string* = "https://raw.githubusercontent.com/api/config-manager/v2".replace(/\/+$/, "")

*Defined in [base.ts:20](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/config-manager/base.ts#L20)*

## Functions

### `Const` DefaultApiAxiosParamCreator

▸ **DefaultApiAxiosParamCreator**(`configuration?`: [Configuration](classes/configuration.md)): *object*

*Defined in [api.ts:162](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/config-manager/api.ts#L162)*

DefaultApi - axios parameter creator

**`export`** 

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](classes/configuration.md) |

**Returns:** *object*

* **createProfile**(`inlineObject`: [InlineObject](interfaces/inlineobject.md), `options`: any): *Promise‹[RequestArgs](interfaces/requestargs.md)›*

* **getPlaybook**(`profileId`: string, `options`: any): *Promise‹[RequestArgs](interfaces/requestargs.md)›*

* **getProfile**(`id`: string, `options`: any): *Promise‹[RequestArgs](interfaces/requestargs.md)›*

* **getProfiles**(`limit?`: number, `offset?`: number, `options`: any): *Promise‹[RequestArgs](interfaces/requestargs.md)›*

___

### `Const` DefaultApiFactory

▸ **DefaultApiFactory**(`configuration?`: [Configuration](classes/configuration.md), `basePath?`: string, `axios?`: AxiosInstance): *object*

*Defined in [api.ts:391](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/config-manager/api.ts#L391)*

DefaultApi - factory interface

**`export`** 

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](classes/configuration.md) |
`basePath?` | string |
`axios?` | AxiosInstance |

**Returns:** *object*

* **createProfile**(`inlineObject`: [InlineObject](interfaces/inlineobject.md), `options?`: any): *AxiosPromise‹[Profile](interfaces/profile.md)›*

* **getPlaybook**(`profileId`: string, `options?`: any): *AxiosPromise‹object›*

* **getProfile**(`id`: string, `options?`: any): *AxiosPromise‹[Profile](interfaces/profile.md)›*

* **getProfiles**(`limit?`: number, `offset?`: number, `options?`: any): *AxiosPromise‹[InlineResponse200](interfaces/inlineresponse200.md)›*

___

### `Const` DefaultApiFp

▸ **DefaultApiFp**(`configuration?`: [Configuration](classes/configuration.md)): *object*

*Defined in [api.ts:325](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/config-manager/api.ts#L325)*

DefaultApi - functional programming interface

**`export`** 

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](classes/configuration.md) |

**Returns:** *object*

* **createProfile**(`inlineObject`: [InlineObject](interfaces/inlineobject.md), `options?`: any): *Promise‹function›*

* **getPlaybook**(`profileId`: string, `options?`: any): *Promise‹function›*

* **getProfile**(`id`: string, `options?`: any): *Promise‹function›*

* **getProfiles**(`limit?`: number, `offset?`: number, `options?`: any): *Promise‹function›*

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
