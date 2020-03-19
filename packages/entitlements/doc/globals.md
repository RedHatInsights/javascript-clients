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

• **BASE_PATH**: *string* =  "https://raw.githubusercontent.com/api/entitlements/v1".replace(/\/+$/, "")

*Defined in [api.ts:20](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/entitlements/api.ts#L20)*

## Functions

### `Const` ServicesApiAxiosParamCreator

▸ **ServicesApiAxiosParamCreator**(`configuration?`: [Configuration](classes/configuration.md)): *object*

*Defined in [api.ts:91](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/entitlements/api.ts#L91)*

ServicesApi - axios parameter creator

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](classes/configuration.md) |

**Returns:** *object*

* **servicesGet**(`options`: any): *[RequestArgs](interfaces/requestargs.md)*

___

### `Const` ServicesApiFactory

▸ **ServicesApiFactory**(`configuration?`: [Configuration](classes/configuration.md), `basePath?`: string, `axios?`: AxiosInstance): *object*

*Defined in [api.ts:149](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/entitlements/api.ts#L149)*

ServicesApi - factory interface

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

*Defined in [api.ts:127](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/entitlements/api.ts#L127)*

ServicesApi - functional programming interface

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

*Defined in [api.ts:26](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/entitlements/api.ts#L26)*

**`export`** 

###  csv

• **csv**: *string* = ","

*Defined in [api.ts:27](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/entitlements/api.ts#L27)*

###  pipes

• **pipes**: *string* = "|"

*Defined in [api.ts:30](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/entitlements/api.ts#L30)*

###  ssv

• **ssv**: *string* = " "

*Defined in [api.ts:28](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/entitlements/api.ts#L28)*

###  tsv

• **tsv**: *string* = "	"

*Defined in [api.ts:29](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/entitlements/api.ts#L29)*
