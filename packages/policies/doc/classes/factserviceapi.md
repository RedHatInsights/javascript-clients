[@redhat-cloud-services/policies-client](../README.md) › [Globals](../globals.md) › [FactServiceApi](factserviceapi.md)

# Class: FactServiceApi

FactServiceApi - object-oriented interface

**`export`** 

## Hierarchy

* [BaseAPI](baseapi.md)

  ↳ **FactServiceApi**

## Index

### Constructors

* [constructor](factserviceapi.md#constructor)

### Properties

* [axios](factserviceapi.md#protected-axios)
* [basePath](factserviceapi.md#protected-basepath)
* [configuration](factserviceapi.md#protected-configuration)

### Methods

* [getFacts](factserviceapi.md#getfacts)

## Constructors

###  constructor

\+ **new FactServiceApi**(`configuration?`: [Configuration](configuration.md), `basePath`: string, `axios`: AxiosInstance): *[FactServiceApi](factserviceapi.md)*

*Inherited from [BaseAPI](baseapi.md).[constructor](baseapi.md#constructor)*

Defined in packages/policies/base.ts:50

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`configuration?` | [Configuration](configuration.md) | - |
`basePath` | string | BASE_PATH |
`axios` | AxiosInstance | globalAxios |

**Returns:** *[FactServiceApi](factserviceapi.md)*

## Properties

### `Protected` axios

• **axios**: *AxiosInstance*

*Inherited from [BaseAPI](baseapi.md).[axios](baseapi.md#protected-axios)*

Defined in packages/policies/base.ts:52

___

### `Protected` basePath

• **basePath**: *string*

*Inherited from [BaseAPI](baseapi.md).[basePath](baseapi.md#protected-basepath)*

Defined in packages/policies/base.ts:52

___

### `Protected` configuration

• **configuration**: *[Configuration](configuration.md) | undefined*

*Inherited from [BaseAPI](baseapi.md).[configuration](baseapi.md#protected-configuration)*

Defined in packages/policies/base.ts:50

## Methods

###  getFacts

▸ **getFacts**(`options?`: AxiosRequestConfig): *Promise‹AxiosResponse‹[Fact](../interfaces/fact.md)[]››*

Defined in packages/policies/api.ts:437

**`summary`** Retrieve a list of fact (keys) along with their data types

**`throws`** {RequiredError}

**`memberof`** FactServiceApi

**Parameters:**

Name | Type |
------ | ------ |
`options?` | AxiosRequestConfig |

**Returns:** *Promise‹AxiosResponse‹[Fact](../interfaces/fact.md)[]››*
