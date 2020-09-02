[@redhat-cloud-services/catalog-client](../README.md) › [Globals](../globals.md) › [IconApi](iconapi.md)

# Class: IconApi

IconApi - object-oriented interface

**`export`** 

## Hierarchy

* [BaseAPI](baseapi.md)

  ↳ **IconApi**

## Index

### Constructors

* [constructor](iconapi.md#constructor)

### Properties

* [axios](iconapi.md#protected-axios)
* [basePath](iconapi.md#protected-basepath)
* [configuration](iconapi.md#protected-configuration)

### Methods

* [createIcon](iconapi.md#createicon)
* [destroyIcon](iconapi.md#destroyicon)

## Constructors

###  constructor

\+ **new IconApi**(`configuration?`: [Configuration](configuration.md), `basePath`: string, `axios`: AxiosInstance): *[IconApi](iconapi.md)*

*Inherited from [BaseAPI](baseapi.md).[constructor](baseapi.md#constructor)*

*Defined in [packages/catalog/base.ts:49](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/base.ts#L49)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`configuration?` | [Configuration](configuration.md) | - |
`basePath` | string | BASE_PATH |
`axios` | AxiosInstance | globalAxios |

**Returns:** *[IconApi](iconapi.md)*

## Properties

### `Protected` axios

• **axios**: *AxiosInstance*

*Inherited from [BaseAPI](baseapi.md).[axios](baseapi.md#protected-axios)*

*Defined in [packages/catalog/base.ts:51](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/base.ts#L51)*

___

### `Protected` basePath

• **basePath**: *string*

*Inherited from [BaseAPI](baseapi.md).[basePath](baseapi.md#protected-basepath)*

*Defined in [packages/catalog/base.ts:51](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/base.ts#L51)*

___

### `Protected` configuration

• **configuration**: *[Configuration](configuration.md) | undefined*

*Inherited from [BaseAPI](baseapi.md).[configuration](baseapi.md#protected-configuration)*

*Defined in [packages/catalog/base.ts:49](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/base.ts#L49)*

## Methods

###  createIcon

▸ **createIcon**(`content?`: any, `portfolioId?`: string, `portfolioItemId?`: string, `options?`: any): *AxiosPromise‹[Icon](../interfaces/icon.md)›*

*Defined in [packages/catalog/api.ts:1697](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L1697)*

Creates an Icon from the specified parameters

**`summary`** Create an Icon

**`throws`** {RequiredError}

**`memberof`** IconApi

**Parameters:**

Name | Type |
------ | ------ |
`content?` | any |
`portfolioId?` | string |
`portfolioItemId?` | string |
`options?` | any |

**Returns:** *AxiosPromise‹[Icon](../interfaces/icon.md)›*

___

###  destroyIcon

▸ **destroyIcon**(`id`: string, `options?`: any): *AxiosPromise‹void›*

*Defined in [packages/catalog/api.ts:1709](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L1709)*

Deletes the icon based on the icon ID passed

**`summary`** Delete an existing Icon

**`throws`** {RequiredError}

**`memberof`** IconApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | ID of the resource |
`options?` | any | - |

**Returns:** *AxiosPromise‹void›*
