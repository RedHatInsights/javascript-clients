[@redhat-cloud-services/insights-client](../README.md) › [Globals](../globals.md) › [TagApi](tagapi.md)

# Class: TagApi

TagApi - object-oriented interface

**`export`** 

## Hierarchy

* [BaseAPI](baseapi.md)

  ↳ **TagApi**

## Index

### Constructors

* [constructor](tagapi.md#constructor)

### Properties

* [axios](tagapi.md#protected-axios)
* [basePath](tagapi.md#protected-basepath)
* [configuration](tagapi.md#protected-configuration)

### Methods

* [tagList](tagapi.md#taglist)

## Constructors

###  constructor

\+ **new TagApi**(`configuration?`: [Configuration](configuration.md), `basePath`: string, `axios`: AxiosInstance): *[TagApi](tagapi.md)*

*Inherited from [BaseAPI](baseapi.md).[constructor](baseapi.md#constructor)*

Defined in packages/insights/base.ts:49

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`configuration?` | [Configuration](configuration.md) | - |
`basePath` | string | BASE_PATH |
`axios` | AxiosInstance | globalAxios |

**Returns:** *[TagApi](tagapi.md)*

## Properties

### `Protected` axios

• **axios**: *AxiosInstance*

*Inherited from [BaseAPI](baseapi.md).[axios](baseapi.md#protected-axios)*

Defined in packages/insights/base.ts:51

___

### `Protected` basePath

• **basePath**: *string*

*Inherited from [BaseAPI](baseapi.md).[basePath](baseapi.md#protected-basepath)*

Defined in packages/insights/base.ts:51

___

### `Protected` configuration

• **configuration**: *[Configuration](configuration.md) | undefined*

*Inherited from [BaseAPI](baseapi.md).[configuration](baseapi.md#protected-configuration)*

Defined in packages/insights/base.ts:49

## Methods

###  tagList

▸ **tagList**(`options?`: any): *AxiosPromise‹[TagList](../interfaces/taglist.md)›*

*Defined in [packages/insights/api.ts:5025](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L5025)*

Tags are ordered by namespace, key and value and are given in encoded fromat.

**`summary`** List all available host tags

**`throws`** {RequiredError}

**`memberof`** TagApi

**Parameters:**

Name | Type |
------ | ------ |
`options?` | any |

**Returns:** *AxiosPromise‹[TagList](../interfaces/taglist.md)›*
