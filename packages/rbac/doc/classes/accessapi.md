[@redhat-cloud-services/rbac-client](../README.md) › [Globals](../globals.md) › [AccessApi](accessapi.md)

# Class: AccessApi

AccessApi - object-oriented interface

**`export`** 

**`class`** AccessApi

**`extends`** {BaseAPI}

## Hierarchy

* [BaseAPI](baseapi.md)

  ↳ **AccessApi**

## Index

### Constructors

* [constructor](accessapi.md#constructor)

### Properties

* [axios](accessapi.md#protected-axios)
* [basePath](accessapi.md#protected-basepath)
* [configuration](accessapi.md#protected-configuration)

### Methods

* [getPrincipalAccess](accessapi.md#getprincipalaccess)

## Constructors

###  constructor

\+ **new AccessApi**(`configuration?`: [Configuration](configuration.md), `basePath`: string, `axios`: AxiosInstance): *[AccessApi](accessapi.md)*

*Inherited from [BaseAPI](baseapi.md).[constructor](baseapi.md#constructor)*

*Defined in [api.ts:49](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/rbac/api.ts#L49)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`configuration?` | [Configuration](configuration.md) | - |
`basePath` | string |  BASE_PATH |
`axios` | AxiosInstance |  globalAxios |

**Returns:** *[AccessApi](accessapi.md)*

## Properties

### `Protected` axios

• **axios**: *AxiosInstance*

*Inherited from [BaseAPI](baseapi.md).[axios](baseapi.md#protected-axios)*

*Defined in [api.ts:51](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/rbac/api.ts#L51)*

___

### `Protected` basePath

• **basePath**: *string*

*Inherited from [BaseAPI](baseapi.md).[basePath](baseapi.md#protected-basepath)*

*Defined in [api.ts:51](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/rbac/api.ts#L51)*

___

### `Protected` configuration

• **configuration**: *[Configuration](configuration.md) | undefined*

*Inherited from [BaseAPI](baseapi.md).[configuration](baseapi.md#protected-configuration)*

*Defined in [api.ts:49](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/rbac/api.ts#L49)*

## Methods

###  getPrincipalAccess

▸ **getPrincipalAccess**(`application`: string, `username?`: string, `limit?`: number, `offset?`: number, `options?`: any): *AxiosPromise‹[AccessPagination](../interfaces/accesspagination.md)›*

*Defined in [api.ts:1338](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/rbac/api.ts#L1338)*

**`summary`** Get the permitted access for a principal in the tenant (defaults to principal from the identity header)

**`throws`** {RequiredError}

**`memberof`** AccessApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`application` | string | The application name to obtain access for the principal |
`username?` | string | - |
`limit?` | number | - |
`offset?` | number | - |
`options?` | any | - |

**Returns:** *AxiosPromise‹[AccessPagination](../interfaces/accesspagination.md)›*
