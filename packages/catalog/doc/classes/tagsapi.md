[@redhat-cloud-services/catalog-client](../README.md) › [Globals](../globals.md) › [TagsApi](tagsapi.md)

# Class: TagsApi

TagsApi - object-oriented interface

**`export`** 

## Hierarchy

* [BaseAPI](baseapi.md)

  ↳ **TagsApi**

## Index

### Constructors

* [constructor](tagsapi.md#constructor)

### Properties

* [axios](tagsapi.md#protected-axios)
* [basePath](tagsapi.md#protected-basepath)
* [configuration](tagsapi.md#protected-configuration)

### Methods

* [listTags](tagsapi.md#listtags)

## Constructors

###  constructor

\+ **new TagsApi**(`configuration?`: [Configuration](configuration.md), `basePath`: string, `axios`: AxiosInstance): *[TagsApi](tagsapi.md)*

*Inherited from [BaseAPI](baseapi.md).[constructor](baseapi.md#constructor)*

Defined in packages/catalog/base.ts:49

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`configuration?` | [Configuration](configuration.md) | - |
`basePath` | string | BASE_PATH |
`axios` | AxiosInstance | globalAxios |

**Returns:** *[TagsApi](tagsapi.md)*

## Properties

### `Protected` axios

• **axios**: *AxiosInstance*

*Inherited from [BaseAPI](baseapi.md).[axios](baseapi.md#protected-axios)*

Defined in packages/catalog/base.ts:51

___

### `Protected` basePath

• **basePath**: *string*

*Inherited from [BaseAPI](baseapi.md).[basePath](baseapi.md#protected-basepath)*

Defined in packages/catalog/base.ts:51

___

### `Protected` configuration

• **configuration**: *[Configuration](configuration.md) | undefined*

*Inherited from [BaseAPI](baseapi.md).[configuration](baseapi.md#protected-configuration)*

Defined in packages/catalog/base.ts:49

## Methods

###  listTags

▸ **listTags**(`options?`: any): *AxiosPromise‹[TagsCollection](../interfaces/tagscollection.md)›*

*Defined in [packages/catalog/api.ts:6829](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L6829)*

List Tags

**`summary`** List Tags

**`throws`** {RequiredError}

**`memberof`** TagsApi

**Parameters:**

Name | Type |
------ | ------ |
`options?` | any |

**Returns:** *AxiosPromise‹[TagsCollection](../interfaces/tagscollection.md)›*
