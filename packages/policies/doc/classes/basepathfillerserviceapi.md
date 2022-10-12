[@redhat-cloud-services/policies-client](../README.md) › [Globals](../globals.md) › [BasePathFillerServiceApi](basepathfillerserviceapi.md)

# Class: BasePathFillerServiceApi

BasePathFillerServiceApi - object-oriented interface

**`export`** 

## Hierarchy

* [BaseAPI](baseapi.md)

  ↳ **BasePathFillerServiceApi**

## Index

### Constructors

* [constructor](basepathfillerserviceapi.md#constructor)

### Properties

* [axios](basepathfillerserviceapi.md#protected-axios)
* [basePath](basepathfillerserviceapi.md#protected-basepath)
* [configuration](basepathfillerserviceapi.md#protected-configuration)

### Methods

* [get](basepathfillerserviceapi.md#get)

## Constructors

###  constructor

\+ **new BasePathFillerServiceApi**(`configuration?`: [Configuration](configuration.md), `basePath`: string, `axios`: AxiosInstance): *[BasePathFillerServiceApi](basepathfillerserviceapi.md)*

*Inherited from [BaseAPI](baseapi.md).[constructor](baseapi.md#constructor)*

Defined in packages/policies/base.ts:50

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`configuration?` | [Configuration](configuration.md) | - |
`basePath` | string | BASE_PATH |
`axios` | AxiosInstance | globalAxios |

**Returns:** *[BasePathFillerServiceApi](basepathfillerserviceapi.md)*

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

###  get

▸ **get**(`options?`: AxiosRequestConfig): *Promise‹AxiosResponse‹void››*

Defined in packages/policies/api.ts:339

**`summary`** Just a filler to have a defined return code for the base path

**`throws`** {RequiredError}

**`memberof`** BasePathFillerServiceApi

**Parameters:**

Name | Type |
------ | ------ |
`options?` | AxiosRequestConfig |

**Returns:** *Promise‹AxiosResponse‹void››*
