[@redhat-cloud-services/insights-client](../README.md) > [TagApi](../classes/tagapi.md)

# Class: TagApi

TagApi - object-oriented interface

*__export__*: 

*__class__*: TagApi

*__extends__*: {BaseAPI}

## Hierarchy

 [BaseAPI](baseapi.md)

**↳ TagApi**

## Index

### Constructors

* [constructor](tagapi.md#constructor)

### Properties

* [axios](tagapi.md#axios)
* [basePath](tagapi.md#basepath)
* [configuration](tagapi.md#configuration)

### Methods

* [tagList](tagapi.md#taglist)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new TagApi**(configuration?: *[Configuration](configuration.md)*, basePath?: *`string`*, axios?: *`AxiosInstance`*): [TagApi](tagapi.md)

*Inherited from [BaseAPI](baseapi.md).[constructor](baseapi.md#constructor)*

*Defined in [api.ts:49](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L49)*

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| `Optional` configuration | [Configuration](configuration.md) | - |
| `Default value` basePath | `string` |  BASE_PATH |
| `Default value` axios | `AxiosInstance` |  globalAxios |

**Returns:** [TagApi](tagapi.md)

___

## Properties

<a id="axios"></a>

### `<Protected>` axios

**● axios**: *`AxiosInstance`*

*Inherited from [BaseAPI](baseapi.md).[axios](baseapi.md#axios)*

*Defined in [api.ts:51](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L51)*

___
<a id="basepath"></a>

### `<Protected>` basePath

**● basePath**: *`string`*

*Inherited from [BaseAPI](baseapi.md).[basePath](baseapi.md#basepath)*

*Defined in [api.ts:51](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L51)*

___
<a id="configuration"></a>

### `<Protected>` configuration

**● configuration**: *[Configuration](configuration.md) \| `undefined`*

*Inherited from [BaseAPI](baseapi.md).[configuration](baseapi.md#configuration)*

*Defined in [api.ts:49](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L49)*

___

## Methods

<a id="taglist"></a>

###  tagList

▸ **tagList**(options?: *`any`*): `AxiosPromise`<[TagList](../interfaces/taglist.md)>

*Defined in [api.ts:5345](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L5345)*

Tags are ordered by namespace, key and value and are given in encoded fromat.

*__summary__*: List all available host tags

*__throws__*: {RequiredError}

*__memberof__*: TagApi

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[TagList](../interfaces/taglist.md)>

___

