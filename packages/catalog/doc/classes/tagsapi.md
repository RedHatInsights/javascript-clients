[@redhat-cloud-services/catalog-client](../README.md) > [TagsApi](../classes/tagsapi.md)

# Class: TagsApi

TagsApi - object-oriented interface

*__export__*: 

*__class__*: TagsApi

*__extends__*: {BaseAPI}

## Hierarchy

 [BaseAPI](baseapi.md)

**↳ TagsApi**

## Index

### Constructors

* [constructor](tagsapi.md#constructor)

### Properties

* [axios](tagsapi.md#axios)
* [basePath](tagsapi.md#basepath)
* [configuration](tagsapi.md#configuration)

### Methods

* [listTagPortfolioItems](tagsapi.md#listtagportfolioitems)
* [listTagPortfolios](tagsapi.md#listtagportfolios)
* [listTags](tagsapi.md#listtags)
* [showTag](tagsapi.md#showtag)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new TagsApi**(configuration?: *[Configuration](configuration.md)*, basePath?: *`string`*, axios?: *`AxiosInstance`*): [TagsApi](tagsapi.md)

*Inherited from [BaseAPI](baseapi.md).[constructor](baseapi.md#constructor)*

*Defined in [api.ts:49](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L49)*

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| `Optional` configuration | [Configuration](configuration.md) | - |
| `Default value` basePath | `string` |  BASE_PATH |
| `Default value` axios | `AxiosInstance` |  globalAxios |

**Returns:** [TagsApi](tagsapi.md)

___

## Properties

<a id="axios"></a>

### `<Protected>` axios

**● axios**: *`AxiosInstance`*

*Inherited from [BaseAPI](baseapi.md).[axios](baseapi.md#axios)*

*Defined in [api.ts:51](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L51)*

___
<a id="basepath"></a>

### `<Protected>` basePath

**● basePath**: *`string`*

*Inherited from [BaseAPI](baseapi.md).[basePath](baseapi.md#basepath)*

*Defined in [api.ts:51](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L51)*

___
<a id="configuration"></a>

### `<Protected>` configuration

**● configuration**: *[Configuration](configuration.md) \| `undefined`*

*Inherited from [BaseAPI](baseapi.md).[configuration](baseapi.md#configuration)*

*Defined in [api.ts:49](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L49)*

___

## Methods

<a id="listtagportfolioitems"></a>

###  listTagPortfolioItems

▸ **listTagPortfolioItems**(id: *`string`*, limit?: *`number`*, offset?: *`number`*, filter?: *`any`*, options?: *`any`*): `AxiosPromise`<[PortfolioItemsCollection](../interfaces/portfolioitemscollection.md)>

*Defined in [api.ts:6814](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L6814)*

Returns an array of Portfolio Item objects

*__summary__*: List Portfolio Items for Tag

*__throws__*: {RequiredError}

*__memberof__*: TagsApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  ID of the resource |
| `Optional` limit | `number` |
| `Optional` offset | `number` |
| `Optional` filter | `any` |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[PortfolioItemsCollection](../interfaces/portfolioitemscollection.md)>

___
<a id="listtagportfolios"></a>

###  listTagPortfolios

▸ **listTagPortfolios**(id: *`string`*, limit?: *`number`*, offset?: *`number`*, filter?: *`any`*, options?: *`any`*): `AxiosPromise`<[PortfoliosCollection](../interfaces/portfolioscollection.md)>

*Defined in [api.ts:6829](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L6829)*

Returns an array of Portfolio objects

*__summary__*: List Portfolios for Tag

*__throws__*: {RequiredError}

*__memberof__*: TagsApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  ID of the resource |
| `Optional` limit | `number` |
| `Optional` offset | `number` |
| `Optional` filter | `any` |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[PortfoliosCollection](../interfaces/portfolioscollection.md)>

___
<a id="listtags"></a>

###  listTags

▸ **listTags**(options?: *`any`*): `AxiosPromise`<[TagsCollection](../interfaces/tagscollection.md)>

*Defined in [api.ts:6840](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L6840)*

List Tags

*__summary__*: List Tags

*__throws__*: {RequiredError}

*__memberof__*: TagsApi

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[TagsCollection](../interfaces/tagscollection.md)>

___
<a id="showtag"></a>

###  showTag

▸ **showTag**(id: *`string`*, options?: *`any`*): `AxiosPromise`<[Tag](../interfaces/tag.md)>

*Defined in [api.ts:6852](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L6852)*

Show a specific Tag

*__summary__*: Show Tag

*__throws__*: {RequiredError}

*__memberof__*: TagsApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  ID of the resource |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[Tag](../interfaces/tag.md)>

___

