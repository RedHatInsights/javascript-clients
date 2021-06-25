[@redhat-cloud-services/entitlements-client](../README.md) › [Globals](../globals.md) › [ServicesApi](servicesapi.md)

# Class: ServicesApi

ServicesApi - object-oriented interface

**`export`** 

## Hierarchy

* [BaseAPI](baseapi.md)

  ↳ **ServicesApi**

## Index

### Constructors

* [constructor](servicesapi.md#constructor)

### Properties

* [axios](servicesapi.md#protected-axios)
* [basePath](servicesapi.md#protected-basepath)
* [configuration](servicesapi.md#protected-configuration)

### Methods

* [servicesGet](servicesapi.md#servicesget)

## Constructors

###  constructor

\+ **new ServicesApi**(`configuration?`: [Configuration](configuration.md), `basePath`: string, `axios`: AxiosInstance): *[ServicesApi](servicesapi.md)*

*Inherited from [BaseAPI](baseapi.md).[constructor](baseapi.md#constructor)*

*Defined in [packages/entitlements/base.ts:49](https://github.com/fhlavac/javascript-clients/blob/master/packages/entitlements/base.ts#L49)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`configuration?` | [Configuration](configuration.md) | - |
`basePath` | string | BASE_PATH |
`axios` | AxiosInstance | globalAxios |

**Returns:** *[ServicesApi](servicesapi.md)*

## Properties

### `Protected` axios

• **axios**: *AxiosInstance*

*Inherited from [BaseAPI](baseapi.md).[axios](baseapi.md#protected-axios)*

*Defined in [packages/entitlements/base.ts:51](https://github.com/fhlavac/javascript-clients/blob/master/packages/entitlements/base.ts#L51)*

___

### `Protected` basePath

• **basePath**: *string*

*Inherited from [BaseAPI](baseapi.md).[basePath](baseapi.md#protected-basepath)*

*Defined in [packages/entitlements/base.ts:51](https://github.com/fhlavac/javascript-clients/blob/master/packages/entitlements/base.ts#L51)*

___

### `Protected` configuration

• **configuration**: *[Configuration](configuration.md) | undefined*

*Inherited from [BaseAPI](baseapi.md).[configuration](baseapi.md#protected-configuration)*

*Defined in [packages/entitlements/base.ts:49](https://github.com/fhlavac/javascript-clients/blob/master/packages/entitlements/base.ts#L49)*

## Methods

###  servicesGet

▸ **servicesGet**(`options?`: any): *Promise‹AxiosResponse‹object››*

*Defined in [packages/entitlements/api.ts:129](https://github.com/fhlavac/javascript-clients/blob/master/packages/entitlements/api.ts#L129)*

**`summary`** get a list of services a user is entitled to

**`throws`** {RequiredError}

**`memberof`** ServicesApi

**Parameters:**

Name | Type |
------ | ------ |
`options?` | any |

**Returns:** *Promise‹AxiosResponse‹object››*
