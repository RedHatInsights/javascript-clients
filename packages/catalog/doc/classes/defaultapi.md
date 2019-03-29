[@redhat-cloud-services/catalog-client](../README.md) > [DefaultApi](../classes/defaultapi.md)

# Class: DefaultApi

DefaultApi - object-oriented interface

*__export__*: 

*__class__*: DefaultApi

*__extends__*: {BaseAPI}

## Hierarchy

 [BaseAPI](baseapi.md)

**↳ DefaultApi**

## Index

### Constructors

* [constructor](defaultapi.md#constructor)

### Properties

* [axios](defaultapi.md#axios)
* [basePath](defaultapi.md#basepath)
* [configuration](defaultapi.md#configuration)

### Methods

* [updatePortfolioItem](defaultapi.md#updateportfolioitem)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new DefaultApi**(configuration?: *[Configuration](configuration.md)*, basePath?: *`string`*, axios?: *`AxiosInstance`*): [DefaultApi](defaultapi.md)

*Inherited from [BaseAPI](baseapi.md).[constructor](baseapi.md#constructor)*

*Defined in api.ts:49*

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| `Optional` configuration | [Configuration](configuration.md) | - |
| `Default value` basePath | `string` |  BASE_PATH |
| `Default value` axios | `AxiosInstance` |  globalAxios |

**Returns:** [DefaultApi](defaultapi.md)

___

## Properties

<a id="axios"></a>

### `<Protected>` axios

**● axios**: *`AxiosInstance`*

*Inherited from [BaseAPI](baseapi.md).[axios](baseapi.md#axios)*

*Defined in api.ts:51*

___
<a id="basepath"></a>

### `<Protected>` basePath

**● basePath**: *`string`*

*Inherited from [BaseAPI](baseapi.md).[basePath](baseapi.md#basepath)*

*Defined in api.ts:51*

___
<a id="configuration"></a>

### `<Protected>` configuration

**● configuration**: *[Configuration](configuration.md) \| `undefined`*

*Inherited from [BaseAPI](baseapi.md).[configuration](baseapi.md#configuration)*

*Defined in api.ts:49*

___

## Methods

<a id="updateportfolioitem"></a>

###  updatePortfolioItem

▸ **updatePortfolioItem**(id: *`string`*, portfolioItem: *[PortfolioItem](../interfaces/portfolioitem.md)*, options?: *`any`*): `AxiosPromise`<[PortfolioItem](../interfaces/portfolioitem.md)>

*Defined in api.ts:2943*

Edits portfolio item specified by the given ID.

*__summary__*: Edit an existing portfolio item

*__throws__*: {RequiredError}

*__memberof__*: DefaultApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  ID of the resource |
| portfolioItem | [PortfolioItem](../interfaces/portfolioitem.md) |  Parameters needed to update a Portfolio Item |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[PortfolioItem](../interfaces/portfolioitem.md)>

___

