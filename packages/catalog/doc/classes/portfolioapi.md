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

* [addPortfolioItemToPortfolio](portfolioapi.md#addportfolioitemtoportfolio)
* [createPortfolio](portfolioapi.md#createportfolio)
* [destroyPortfolio](portfolioapi.md#destroyportfolio)
* [fetchPortfolioItemsWithPortfolio](portfolioapi.md#fetchportfolioitemswithportfolio)
* [listPortfolios](portfolioapi.md#listportfolios)
* [shareInfo](portfolioapi.md#shareinfo)
* [sharePortfolio](portfolioapi.md#shareportfolio)
* [showPortfolio](portfolioapi.md#showportfolio)
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

<a id="addportfolioitemtoportfolio"></a>

###  addPortfolioItemToPortfolio

▸ **addPortfolioItemToPortfolio**(portfolioId: *`string`*, addPortfolioItem: *[AddPortfolioItem](../interfaces/addportfolioitem.md)*, options?: *`any`*): `AxiosPromise`<`Response`>

*Defined in [api.ts:2337](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L2337)*

Adds a new portfolio item to an existing portfolio.

*__summary__*: Add a portfolio item to a portfolio

*__throws__*: {RequiredError}

*__memberof__*: PortfolioApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| portfolioId | `string` |  The Portfolio ID |
| addPortfolioItem | [AddPortfolioItem](../interfaces/addportfolioitem.md) |  \- |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<`Response`>

___
<a id="createportfolio"></a>

###  createPortfolio

▸ **createPortfolio**(portfolio: *[Portfolio](../interfaces/portfolio.md)*, options?: *`any`*): `AxiosPromise`<[Portfolio](../interfaces/portfolio.md)>

*Defined in [api.ts:2349](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L2349)*

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

▸ **destroyPortfolio**(id: *`string`*, options?: *`any`*): `AxiosPromise`<`Response`>

*Defined in [api.ts:2361](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L2361)*

Deletes the portfolio specified by the ID.

*__summary__*: Delete an existing portfolio

*__throws__*: {RequiredError}

*__memberof__*: PortfolioApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  ID of the resource |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<`Response`>

___
<a id="fetchportfolioitemswithportfolio"></a>

###  fetchPortfolioItemsWithPortfolio

▸ **fetchPortfolioItemsWithPortfolio**(portfolioId: *`string`*, limit?: *`number`*, offset?: *`number`*, options?: *`any`*): `AxiosPromise`<[PortfolioItemsCollection](../interfaces/portfolioitemscollection.md)>

*Defined in [api.ts:2375](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L2375)*

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
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[PortfolioItemsCollection](../interfaces/portfolioitemscollection.md)>

___
<a id="listportfolios"></a>

###  listPortfolios

▸ **listPortfolios**(limit?: *`number`*, offset?: *`number`*, options?: *`any`*): `AxiosPromise`<[PortfoliosCollection](../interfaces/portfolioscollection.md)>

*Defined in [api.ts:2388](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L2388)*

Gets a list of portfolios.

*__summary__*: List portfolios

*__throws__*: {RequiredError}

*__memberof__*: PortfolioApi

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` limit | `number` |
| `Optional` offset | `number` |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[PortfoliosCollection](../interfaces/portfolioscollection.md)>

___
<a id="shareinfo"></a>

###  shareInfo

▸ **shareInfo**(portfolioId: *`string`*, options?: *`any`*): `AxiosPromise`<[ShareInfo](../interfaces/shareinfo.md)[]>

*Defined in [api.ts:2400](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L2400)*

Fetch share information about a portfolio

*__summary__*: Fetch share information about this portfolio, the response would include a collection of groups and permissions with each group

*__throws__*: {RequiredError}

*__memberof__*: PortfolioApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| portfolioId | `string` |  The Portfolio ID |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[ShareInfo](../interfaces/shareinfo.md)[]>

___
<a id="shareportfolio"></a>

###  sharePortfolio

▸ **sharePortfolio**(portfolioId: *`string`*, sharePolicy: *[SharePolicy](../interfaces/sharepolicy.md)*, options?: *`any`*): `AxiosPromise`<`Response`>

*Defined in [api.ts:2413](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L2413)*

Share a Portfolio with one or more groups with specific permissions

*__summary__*: Share a portfolio with one or more groups with specific permission

*__throws__*: {RequiredError}

*__memberof__*: PortfolioApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| portfolioId | `string` |  The Portfolio ID |
| sharePolicy | [SharePolicy](../interfaces/sharepolicy.md) |  \- |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<`Response`>

___
<a id="showportfolio"></a>

###  showPortfolio

▸ **showPortfolio**(id: *`string`*, options?: *`any`*): `AxiosPromise`<[Portfolio](../interfaces/portfolio.md)>

*Defined in [api.ts:2425](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L2425)*

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
<a id="unshareportfolio"></a>

###  unsharePortfolio

▸ **unsharePortfolio**(portfolioId: *`string`*, unsharePolicy: *[UnsharePolicy](../interfaces/unsharepolicy.md)*, options?: *`any`*): `AxiosPromise`<`Response`>

*Defined in [api.ts:2438](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L2438)*

Unshare a Portfolio with one or more groups with specific permissions

*__summary__*: Unshare a portfolio from one or more groups with specific permission

*__throws__*: {RequiredError}

*__memberof__*: PortfolioApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| portfolioId | `string` |  The Portfolio ID |
| unsharePolicy | [UnsharePolicy](../interfaces/unsharepolicy.md) |  \- |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<`Response`>

___
<a id="updateportfolio"></a>

###  updatePortfolio

▸ **updatePortfolio**(id: *`string`*, portfolio: *[Portfolio](../interfaces/portfolio.md)*, options?: *`any`*): `AxiosPromise`<[Portfolio](../interfaces/portfolio.md)>

*Defined in [api.ts:2451](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L2451)*

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

