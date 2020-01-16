[@redhat-cloud-services/catalog-client](../README.md) > [PortfolioItemApi](../classes/portfolioitemapi.md)

# Class: PortfolioItemApi

PortfolioItemApi - object-oriented interface

*__export__*: 

*__class__*: PortfolioItemApi

*__extends__*: {BaseAPI}

## Hierarchy

 [BaseAPI](baseapi.md)

**↳ PortfolioItemApi**

## Index

### Constructors

* [constructor](portfolioitemapi.md#constructor)

### Properties

* [axios](portfolioitemapi.md#axios)
* [basePath](portfolioitemapi.md#basepath)
* [configuration](portfolioitemapi.md#configuration)

### Methods

* [addPortfolioItemTag](portfolioitemapi.md#addportfolioitemtag)
* [createPortfolioItem](portfolioitemapi.md#createportfolioitem)
* [destroyPortfolioItem](portfolioitemapi.md#destroyportfolioitem)
* [getPortfolioItemNextName](portfolioitemapi.md#getportfolioitemnextname)
* [listPortfolioItemTags](portfolioitemapi.md#listportfolioitemtags)
* [listPortfolioItems](portfolioitemapi.md#listportfolioitems)
* [listProviderControlParameters](portfolioitemapi.md#listprovidercontrolparameters)
* [listServicePlans](portfolioitemapi.md#listserviceplans)
* [postCopyPortfolioItem](portfolioitemapi.md#postcopyportfolioitem)
* [removePortfolioItemTags](portfolioitemapi.md#removeportfolioitemtags)
* [showPortfolioItem](portfolioitemapi.md#showportfolioitem)
* [showPortfolioItemIcon](portfolioitemapi.md#showportfolioitemicon)
* [unDeletePortfolioItem](portfolioitemapi.md#undeleteportfolioitem)
* [updatePortfolioItem](portfolioitemapi.md#updateportfolioitem)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new PortfolioItemApi**(configuration?: *[Configuration](configuration.md)*, basePath?: *`string`*, axios?: *`AxiosInstance`*): [PortfolioItemApi](portfolioitemapi.md)

*Inherited from [BaseAPI](baseapi.md).[constructor](baseapi.md#constructor)*

*Defined in [api.ts:49](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L49)*

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| `Optional` configuration | [Configuration](configuration.md) | - |
| `Default value` basePath | `string` |  BASE_PATH |
| `Default value` axios | `AxiosInstance` |  globalAxios |

**Returns:** [PortfolioItemApi](portfolioitemapi.md)

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

<a id="addportfolioitemtag"></a>

###  addPortfolioItemTag

▸ **addPortfolioItemTag**(id: *`string`*, tagItem: *`Array`<[TagItem](../interfaces/tagitem.md)>*, options?: *`any`*): `AxiosPromise`<[TagItem](../interfaces/tagitem.md)[]>

*Defined in [api.ts:5709](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L5709)*

Adds a single tag to a Portfolio Item object

*__summary__*: Add Tag for Portfolio Item

*__throws__*: {RequiredError}

*__memberof__*: PortfolioItemApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  ID of the resource |
| tagItem | `Array`<[TagItem](../interfaces/tagitem.md)> |  \- |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[TagItem](../interfaces/tagitem.md)[]>

___
<a id="createportfolioitem"></a>

###  createPortfolioItem

▸ **createPortfolioItem**(createPortfolioItem: *[CreatePortfolioItem](../interfaces/createportfolioitem.md)*, options?: *`any`*): `AxiosPromise`<[PortfolioItem](../interfaces/portfolioitem.md)>

*Defined in [api.ts:5721](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L5721)*

Adds a name and description for a portfolio item and returns the newly created portfolio item.

*__summary__*: Add a new portfolio item

*__throws__*: {RequiredError}

*__memberof__*: PortfolioItemApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| createPortfolioItem | [CreatePortfolioItem](../interfaces/createportfolioitem.md) |  \- |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[PortfolioItem](../interfaces/portfolioitem.md)>

___
<a id="destroyportfolioitem"></a>

###  destroyPortfolioItem

▸ **destroyPortfolioItem**(id: *`string`*, options?: *`any`*): `AxiosPromise`<[RestoreKey](../interfaces/restorekey.md)>

*Defined in [api.ts:5733](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L5733)*

Deletes the portfolio item based on portfolio item ID passed

*__summary__*: Delete an existing portfolio item

*__throws__*: {RequiredError}

*__memberof__*: PortfolioItemApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  ID of the resource |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[RestoreKey](../interfaces/restorekey.md)>

___
<a id="getportfolioitemnextname"></a>

###  getPortfolioItemNextName

▸ **getPortfolioItemNextName**(portfolioItemId: *`string`*, destinationPortfolioId?: *`string`*, options?: *`any`*): `AxiosPromise`<[PortfolioItemNextName](../interfaces/portfolioitemnextname.md)>

*Defined in [api.ts:5746](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L5746)*

Get the next name for a the Portfolio Item prior to a copy operation

*__summary__*: Get the next name for a the Portfolio Item prior to a copy operation

*__throws__*: {RequiredError}

*__memberof__*: PortfolioItemApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| portfolioItemId | `string` |  The Portfolio Item ID |
| `Optional` destinationPortfolioId | `string` |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[PortfolioItemNextName](../interfaces/portfolioitemnextname.md)>

___
<a id="listportfolioitemtags"></a>

###  listPortfolioItemTags

▸ **listPortfolioItemTags**(id: *`string`*, limit?: *`number`*, offset?: *`number`*, filter?: *`any`*, options?: *`any`*): `AxiosPromise`<[TagsCollection](../interfaces/tagscollection.md)>

*Defined in [api.ts:5761](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L5761)*

Returns an array of Tag objects

*__summary__*: List Tags for Portfolio Items

*__throws__*: {RequiredError}

*__memberof__*: PortfolioItemApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  ID of the resource |
| `Optional` limit | `number` |
| `Optional` offset | `number` |
| `Optional` filter | `any` |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[TagsCollection](../interfaces/tagscollection.md)>

___
<a id="listportfolioitems"></a>

###  listPortfolioItems

▸ **listPortfolioItems**(limit?: *`number`*, offset?: *`number`*, filter?: *`any`*, options?: *`any`*): `AxiosPromise`<[PortfolioItemsCollection](../interfaces/portfolioitemscollection.md)>

*Defined in [api.ts:5775](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L5775)*

Gets a list of portfolio items.

*__summary__*: List all portfolio items

*__throws__*: {RequiredError}

*__memberof__*: PortfolioItemApi

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` limit | `number` |
| `Optional` offset | `number` |
| `Optional` filter | `any` |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[PortfolioItemsCollection](../interfaces/portfolioitemscollection.md)>

___
<a id="listprovidercontrolparameters"></a>

###  listProviderControlParameters

▸ **listProviderControlParameters**(portfolioItemId: *`string`*, options?: *`any`*): `AxiosPromise`<`any`>

*Defined in [api.ts:5787](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L5787)*

Gets the provider control parameters for a portfolio item.

*__summary__*: Gets the provider control parameters for this portfolio item; requires control paramaters provided when provisioning the portfolio item.

*__throws__*: {RequiredError}

*__memberof__*: PortfolioItemApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| portfolioItemId | `string` |  The Portfolio Item ID |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<`any`>

___
<a id="listserviceplans"></a>

###  listServicePlans

▸ **listServicePlans**(portfolioItemId: *`string`*, options?: *`any`*): `AxiosPromise`<[ServicePlan](../interfaces/serviceplan.md)[]>

*Defined in [api.ts:5799](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L5799)*

Gets all service plans for a portfolio item.

*__summary__*: Gets all service plans for a specific portfolio item; requires a connection to the topology service.

*__throws__*: {RequiredError}

*__memberof__*: PortfolioItemApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| portfolioItemId | `string` |  The Portfolio Item ID |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[ServicePlan](../interfaces/serviceplan.md)[]>

___
<a id="postcopyportfolioitem"></a>

###  postCopyPortfolioItem

▸ **postCopyPortfolioItem**(portfolioItemId: *`string`*, copyPortfolioItem?: *[CopyPortfolioItem](../interfaces/copyportfolioitem.md)*, options?: *`any`*): `AxiosPromise`<[PortfolioItem](../interfaces/portfolioitem.md)>

*Defined in [api.ts:5812](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L5812)*

Make a copy of the Portfolio Item.

*__summary__*: Make a copy of the Portfolio Item

*__throws__*: {RequiredError}

*__memberof__*: PortfolioItemApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| portfolioItemId | `string` |  The Portfolio Item ID |
| `Optional` copyPortfolioItem | [CopyPortfolioItem](../interfaces/copyportfolioitem.md) |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[PortfolioItem](../interfaces/portfolioitem.md)>

___
<a id="removeportfolioitemtags"></a>

###  removePortfolioItemTags

▸ **removePortfolioItemTags**(id: *`string`*, tagItem: *`Array`<[TagItem](../interfaces/tagitem.md)>*, options?: *`any`*): `AxiosPromise`<`Response`>

*Defined in [api.ts:5825](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L5825)*

Remove Tags from Portfolio Item

*__summary__*: Remove Tags from Portfolio Item

*__throws__*: {RequiredError}

*__memberof__*: PortfolioItemApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  ID of the resource |
| tagItem | `Array`<[TagItem](../interfaces/tagitem.md)> |  \- |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<`Response`>

___
<a id="showportfolioitem"></a>

###  showPortfolioItem

▸ **showPortfolioItem**(id: *`string`*, options?: *`any`*): `AxiosPromise`<[PortfolioItem](../interfaces/portfolioitem.md)>

*Defined in [api.ts:5837](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L5837)*

Gets a specific portfolio item based on the portfolio item ID passed

*__summary__*: Gets a specific portfolio item

*__throws__*: {RequiredError}

*__memberof__*: PortfolioItemApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  ID of the resource |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[PortfolioItem](../interfaces/portfolioitem.md)>

___
<a id="showportfolioitemicon"></a>

###  showPortfolioItemIcon

▸ **showPortfolioItemIcon**(portfolioItemId: *`string`*, options?: *`any`*): `AxiosPromise`<`any`>

*Defined in [api.ts:5849](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L5849)*

Fetch the specified portfolio item's icon image.

*__summary__*: Fetches the specified portfolio item's icon image

*__throws__*: {RequiredError}

*__memberof__*: PortfolioItemApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| portfolioItemId | `string` |  The Portfolio Item ID |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<`any`>

___
<a id="undeleteportfolioitem"></a>

###  unDeletePortfolioItem

▸ **unDeletePortfolioItem**(portfolioItemId: *`string`*, restoreKey: *[RestoreKey](../interfaces/restorekey.md)*, options?: *`any`*): `AxiosPromise`<[PortfolioItem](../interfaces/portfolioitem.md)>

*Defined in [api.ts:5862](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L5862)*

If a record has been discarded, this operation will undelete it so it can be requested normally.

*__summary__*: Undelete a specified Portfolio Item

*__throws__*: {RequiredError}

*__memberof__*: PortfolioItemApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| portfolioItemId | `string` |  The Portfolio Item ID |
| restoreKey | [RestoreKey](../interfaces/restorekey.md) |  \- |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[PortfolioItem](../interfaces/portfolioitem.md)>

___
<a id="updateportfolioitem"></a>

###  updatePortfolioItem

▸ **updatePortfolioItem**(id: *`string`*, portfolioItem: *[PortfolioItem](../interfaces/portfolioitem.md)*, options?: *`any`*): `AxiosPromise`<[PortfolioItem](../interfaces/portfolioitem.md)>

*Defined in [api.ts:5875](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L5875)*

Edits portfolio item specified by the given ID.

*__summary__*: Edit an existing portfolio item

*__throws__*: {RequiredError}

*__memberof__*: PortfolioItemApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  ID of the resource |
| portfolioItem | [PortfolioItem](../interfaces/portfolioitem.md) |  Parameters needed to update a Portfolio Item |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[PortfolioItem](../interfaces/portfolioitem.md)>

___

