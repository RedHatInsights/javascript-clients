[@redhat-cloud-services/catalog-client](../README.md) > [PortfolioApi](../classes/portfolioapi.md)

# Class: PortfolioApi

PortfolioApi - object-oriented interface

*__export__*: 

*__class__*: PortfolioApi

*__extends__*: {BaseAPI}

## Hierarchy

 [BaseAPI](baseapi.md)

**↳ PortfolioApi**

## Index

### Constructors

* [constructor](portfolioapi.md#constructor)

### Properties

* [axios](portfolioapi.md#axios)
* [basePath](portfolioapi.md#basepath)
* [configuration](portfolioapi.md#configuration)

### Methods

* [addPortfolioTag](portfolioapi.md#addportfoliotag)
* [createPortfolio](portfolioapi.md#createportfolio)
* [destroyPortfolio](portfolioapi.md#destroyportfolio)
* [fetchPortfolioItemsWithPortfolio](portfolioapi.md#fetchportfolioitemswithportfolio)
* [listPortfolioTags](portfolioapi.md#listportfoliotags)
* [listPortfolios](portfolioapi.md#listportfolios)
* [postCopyPortfolio](portfolioapi.md#postcopyportfolio)
* [removePortfolioTags](portfolioapi.md#removeportfoliotags)
* [shareInfo](portfolioapi.md#shareinfo)
* [sharePortfolio](portfolioapi.md#shareportfolio)
* [showPortfolio](portfolioapi.md#showportfolio)
* [showPortfolioIcon](portfolioapi.md#showportfolioicon)
* [unDeletePortfolio](portfolioapi.md#undeleteportfolio)
* [unsharePortfolio](portfolioapi.md#unshareportfolio)
* [updatePortfolio](portfolioapi.md#updateportfolio)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new PortfolioApi**(configuration?: *[Configuration](configuration.md)*, basePath?: *`string`*, axios?: *`AxiosInstance`*): [PortfolioApi](portfolioapi.md)

*Inherited from [BaseAPI](baseapi.md).[constructor](baseapi.md#constructor)*

*Defined in [api.ts:49](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L49)*

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| `Optional` configuration | [Configuration](configuration.md) | - |
| `Default value` basePath | `string` |  BASE_PATH |
| `Default value` axios | `AxiosInstance` |  globalAxios |

**Returns:** [PortfolioApi](portfolioapi.md)

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

<a id="addportfoliotag"></a>

###  addPortfolioTag

▸ **addPortfolioTag**(id: *`string`*, tag: *`Array`<[Tag](../interfaces/tag.md)>*, options?: *`any`*): `AxiosPromise`<[Tag](../interfaces/tag.md)[]>

*Defined in [api.ts:4375](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L4375)*

Adds a single tag to Portfolio object

*__summary__*: Add Tag for Portfolio

*__throws__*: {RequiredError}

*__memberof__*: PortfolioApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  ID of the resource |
| tag | `Array`<[Tag](../interfaces/tag.md)> |  \- |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[Tag](../interfaces/tag.md)[]>

___
<a id="createportfolio"></a>

###  createPortfolio

▸ **createPortfolio**(portfolio: *[Portfolio](../interfaces/portfolio.md)*, options?: *`any`*): `AxiosPromise`<[Portfolio](../interfaces/portfolio.md)>

*Defined in [api.ts:4387](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L4387)*

Adds a portfolio.

*__summary__*: Add a new portfolio

*__throws__*: {RequiredError}

*__memberof__*: PortfolioApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| portfolio | [Portfolio](../interfaces/portfolio.md) |  Parameters needed to add a Portfolio |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[Portfolio](../interfaces/portfolio.md)>

___
<a id="destroyportfolio"></a>

###  destroyPortfolio

▸ **destroyPortfolio**(id: *`string`*, options?: *`any`*): `AxiosPromise`<[RestoreKey](../interfaces/restorekey.md)>

*Defined in [api.ts:4399](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L4399)*

Deletes the portfolio specified by the ID.

*__summary__*: Delete an existing portfolio

*__throws__*: {RequiredError}

*__memberof__*: PortfolioApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  ID of the resource |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[RestoreKey](../interfaces/restorekey.md)>

___
<a id="fetchportfolioitemswithportfolio"></a>

###  fetchPortfolioItemsWithPortfolio

▸ **fetchPortfolioItemsWithPortfolio**(portfolioId: *`string`*, limit?: *`number`*, offset?: *`number`*, filter?: *`any`*, options?: *`any`*): `AxiosPromise`<[PortfolioItemsCollection](../interfaces/portfolioitemscollection.md)>

*Defined in [api.ts:4414](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L4414)*

Gets all portfilio items in the portfolio specified by the given ID.

*__summary__*: Get all portfolio items from a specific portfolio

*__throws__*: {RequiredError}

*__memberof__*: PortfolioApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| portfolioId | `string` |  The Portfolio ID |
| `Optional` limit | `number` |
| `Optional` offset | `number` |
| `Optional` filter | `any` |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[PortfolioItemsCollection](../interfaces/portfolioitemscollection.md)>

___
<a id="listportfoliotags"></a>

###  listPortfolioTags

▸ **listPortfolioTags**(id: *`string`*, limit?: *`number`*, offset?: *`number`*, filter?: *`any`*, options?: *`any`*): `AxiosPromise`<[TagsCollection](../interfaces/tagscollection.md)>

*Defined in [api.ts:4429](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L4429)*

Returns an array of Tag objects

*__summary__*: List Tags for Portfolio

*__throws__*: {RequiredError}

*__memberof__*: PortfolioApi

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
<a id="listportfolios"></a>

###  listPortfolios

▸ **listPortfolios**(limit?: *`number`*, offset?: *`number`*, filter?: *`any`*, options?: *`any`*): `AxiosPromise`<[PortfoliosCollection](../interfaces/portfolioscollection.md)>

*Defined in [api.ts:4443](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L4443)*

Gets a list of portfolios.

*__summary__*: List portfolios

*__throws__*: {RequiredError}

*__memberof__*: PortfolioApi

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` limit | `number` |
| `Optional` offset | `number` |
| `Optional` filter | `any` |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[PortfoliosCollection](../interfaces/portfolioscollection.md)>

___
<a id="postcopyportfolio"></a>

###  postCopyPortfolio

▸ **postCopyPortfolio**(portfolioId: *`string`*, options?: *`any`*): `AxiosPromise`<[Portfolio](../interfaces/portfolio.md)>

*Defined in [api.ts:4455](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L4455)*

Make a copy of the Portfolio.

*__summary__*: Make a copy of the Portfolio

*__throws__*: {RequiredError}

*__memberof__*: PortfolioApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| portfolioId | `string` |  The Portfolio ID |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[Portfolio](../interfaces/portfolio.md)>

___
<a id="removeportfoliotags"></a>

###  removePortfolioTags

▸ **removePortfolioTags**(id: *`string`*, tag: *`Array`<[Tag](../interfaces/tag.md)>*, options?: *`any`*): `AxiosPromise`<`Response`>

*Defined in [api.ts:4468](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L4468)*

Remove Tags from Portfolio

*__summary__*: Remove Tags from Portfolio

*__throws__*: {RequiredError}

*__memberof__*: PortfolioApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  ID of the resource |
| tag | `Array`<[Tag](../interfaces/tag.md)> |  \- |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<`Response`>

___
<a id="shareinfo"></a>

###  shareInfo

▸ **shareInfo**(portfolioId: *`string`*, options?: *`any`*): `AxiosPromise`<[ShareInfo](../modules/shareinfo.md)[]>

*Defined in [api.ts:4480](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L4480)*

Fetch share information about a portfolio

*__summary__*: Fetch share information about this portfolio, the response would include a collection of groups and permissions with each group

*__throws__*: {RequiredError}

*__memberof__*: PortfolioApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| portfolioId | `string` |  The Portfolio ID |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[ShareInfo](../modules/shareinfo.md)[]>

___
<a id="shareportfolio"></a>

###  sharePortfolio

▸ **sharePortfolio**(portfolioId: *`string`*, sharePolicy: *[SharePolicy](../modules/sharepolicy.md)*, options?: *`any`*): `AxiosPromise`<`Response`>

*Defined in [api.ts:4493](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L4493)*

Share a Portfolio with one or more groups with specific permissions

*__summary__*: Share a portfolio with one or more groups with specific permission

*__throws__*: {RequiredError}

*__memberof__*: PortfolioApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| portfolioId | `string` |  The Portfolio ID |
| sharePolicy | [SharePolicy](../modules/sharepolicy.md) |  \- |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<`Response`>

___
<a id="showportfolio"></a>

###  showPortfolio

▸ **showPortfolio**(id: *`string`*, options?: *`any`*): `AxiosPromise`<[Portfolio](../interfaces/portfolio.md)>

*Defined in [api.ts:4505](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L4505)*

Gets the portfolio specified by the portfolio ID.

*__summary__*: Get a specific portfolio

*__throws__*: {RequiredError}

*__memberof__*: PortfolioApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  ID of the resource |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[Portfolio](../interfaces/portfolio.md)>

___
<a id="showportfolioicon"></a>

###  showPortfolioIcon

▸ **showPortfolioIcon**(portfolioId: *`string`*, options?: *`any`*): `AxiosPromise`<`any`>

*Defined in [api.ts:4517](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L4517)*

Fetch the specified portfolio's icon image.

*__summary__*: Fetches the specified portfolio's icon image

*__throws__*: {RequiredError}

*__memberof__*: PortfolioApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| portfolioId | `string` |  The Portfolio ID |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<`any`>

___
<a id="undeleteportfolio"></a>

###  unDeletePortfolio

▸ **unDeletePortfolio**(id: *`string`*, restoreKey: *[RestoreKey](../interfaces/restorekey.md)*, options?: *`any`*): `AxiosPromise`<[Portfolio](../interfaces/portfolio.md)>

*Defined in [api.ts:4530](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L4530)*

Undeletes the portfolio specified by the portfolio ID.

*__summary__*: Undelete specific portfolio

*__throws__*: {RequiredError}

*__memberof__*: PortfolioApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  ID of the resource |
| restoreKey | [RestoreKey](../interfaces/restorekey.md) |  \- |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[Portfolio](../interfaces/portfolio.md)>

___
<a id="unshareportfolio"></a>

###  unsharePortfolio

▸ **unsharePortfolio**(portfolioId: *`string`*, unsharePolicy: *[UnsharePolicy](../modules/unsharepolicy.md)*, options?: *`any`*): `AxiosPromise`<`Response`>

*Defined in [api.ts:4543](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L4543)*

Unshare a Portfolio with one or more groups with specific permissions

*__summary__*: Unshare a portfolio from one or more groups with specific permission

*__throws__*: {RequiredError}

*__memberof__*: PortfolioApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| portfolioId | `string` |  The Portfolio ID |
| unsharePolicy | [UnsharePolicy](../modules/unsharepolicy.md) |  \- |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<`Response`>

___
<a id="updateportfolio"></a>

###  updatePortfolio

▸ **updatePortfolio**(id: *`string`*, portfolio: *[Portfolio](../interfaces/portfolio.md)*, options?: *`any`*): `AxiosPromise`<[Portfolio](../interfaces/portfolio.md)>

*Defined in [api.ts:4556](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L4556)*

Returns the edited portfolio.

*__summary__*: Edit an existing portfolio

*__throws__*: {RequiredError}

*__memberof__*: PortfolioApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  ID of the resource |
| portfolio | [Portfolio](../interfaces/portfolio.md) |  Parameters needed to update a Portfolio |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[Portfolio](../interfaces/portfolio.md)>

___

