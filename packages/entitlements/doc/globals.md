[@redhat-cloud-services/entitlements-client](README.md) › [Globals](globals.md)

# @redhat-cloud-services/entitlements-client

## Index

### Classes

* [BaseAPI](classes/baseapi.md)
* [Configuration](classes/configuration.md)
* [RequiredError](classes/requirederror.md)
* [ServicesApi](classes/servicesapi.md)

### Interfaces

* [ConfigurationParameters](interfaces/configurationparameters.md)
* [RequestArgs](interfaces/requestargs.md)
* [ServiceDetails](interfaces/servicedetails.md)

### Variables

* [BASE_PATH](globals.md#const-base_path)

### Functions

* [ServicesApiAxiosParamCreator](globals.md#const-servicesapiaxiosparamcreator)
* [ServicesApiFactory](globals.md#const-servicesapifactory)
* [ServicesApiFp](globals.md#const-servicesapifp)

### Object literals

* [COLLECTION_FORMATS](globals.md#const-collection_formats)

## Variables

### `Const` BASE_PATH

• **BASE_PATH**: *string* = "https://raw.githubusercontent.com/api/entitlements/v1".replace(/\/+$/, "")

*Defined in [packages/entitlements/base.ts:20](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/entitlements/base.ts#L20)*

## Functions

### `Const` ServicesApiAxiosParamCreator

▸ **ServicesApiAxiosParamCreator**(`configuration?`: [Configuration](classes/configuration.md)): *object*

*Defined in [packages/entitlements/api.ts:40](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/entitlements/api.ts#L40)*

ServicesApi - axios parameter creator

**`export`** 

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](classes/configuration.md) |

**Returns:** *object*

* **servicesGet**(`options`: any): *[RequestArgs](interfaces/requestargs.md)*

___

### `Const` ServicesApiFactory

▸ **ServicesApiFactory**(`configuration?`: [Configuration](classes/configuration.md), `basePath?`: string, `axios?`: AxiosInstance): *object*

*Defined in [packages/entitlements/api.ts:101](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/entitlements/api.ts#L101)*

ServicesApi - factory interface

**`export`** 

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](classes/configuration.md) |
`basePath?` | string |
`axios?` | AxiosInstance |

**Returns:** *object*

* **servicesGet**(`options?`: any): *AxiosPromise‹object›*

___

### `Const` ServicesApiFp

▸ **ServicesApiFp**(`configuration?`: [Configuration](classes/configuration.md)): *object*

*Defined in [packages/entitlements/api.ts:79](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/entitlements/api.ts#L79)*

ServicesApi - functional programming interface

**`export`** 

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](classes/configuration.md) |

**Returns:** *object*

* **servicesGet**(`options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹object›*

## Object literals

### `Const` COLLECTION_FORMATS

### ▪ **COLLECTION_FORMATS**: *object*

*Defined in [packages/entitlements/base.ts:26](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/entitlements/base.ts#L26)*

**`export`** 

###  csv

• **csv**: *string* = ","

*Defined in [packages/entitlements/base.ts:27](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/entitlements/base.ts#L27)*

###  pipes

• **pipes**: *string* = "|"

*Defined in [packages/entitlements/base.ts:30](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/entitlements/base.ts#L30)*

###  ssv

• **ssv**: *string* = " "

*Defined in [packages/entitlements/base.ts:28](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/entitlements/base.ts#L28)*

###  tsv

• **tsv**: *string* = "	"

*Defined in [packages/entitlements/base.ts:29](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/entitlements/base.ts#L29)*
