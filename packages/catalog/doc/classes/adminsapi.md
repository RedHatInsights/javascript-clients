[@redhat-cloud-services/catalog-client](../README.md) > [AdminsApi](../classes/adminsapi.md)

# Class: AdminsApi

AdminsApi - object-oriented interface

*__export__*: 

*__class__*: AdminsApi

*__extends__*: {BaseAPI}

## Hierarchy

 [BaseAPI](baseapi.md)

**↳ AdminsApi**

## Index

### Constructors

* [constructor](adminsapi.md#constructor)

### Properties

* [axios](adminsapi.md#axios)
* [basePath](adminsapi.md#basepath)
* [configuration](adminsapi.md#configuration)

### Methods

* [addPortfolioItemToPortfolio](adminsapi.md#addportfolioitemtoportfolio)
* [addToOrder](adminsapi.md#addtoorder)
* [createOrder](adminsapi.md#createorder)
* [createPortfolio](adminsapi.md#createportfolio)
* [createPortfolioItem](adminsapi.md#createportfolioitem)
* [destroyPortfolio](adminsapi.md#destroyportfolio)
* [destroyPortfolioItem](adminsapi.md#destroyportfolioitem)
* [fetchPortfolioItemsWithPortfolio](adminsapi.md#fetchportfolioitemswithportfolio)
* [listOrderItems](adminsapi.md#listorderitems)
* [listOrders](adminsapi.md#listorders)
* [listPortfolioItems](adminsapi.md#listportfolioitems)
* [listPortfolios](adminsapi.md#listportfolios)
* [listProgressMessages](adminsapi.md#listprogressmessages)
* [listProviderControlParameters](adminsapi.md#listprovidercontrolparameters)
* [listServicePlans](adminsapi.md#listserviceplans)
* [shareInfo](adminsapi.md#shareinfo)
* [sharePortfolio](adminsapi.md#shareportfolio)
* [showOrderItem](adminsapi.md#showorderitem)
* [showPortfolio](adminsapi.md#showportfolio)
* [showPortfolioItem](adminsapi.md#showportfolioitem)
* [submitOrder](adminsapi.md#submitorder)
* [unsharePortfolio](adminsapi.md#unshareportfolio)
* [updatePortfolio](adminsapi.md#updateportfolio)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new AdminsApi**(configuration?: *[Configuration](configuration.md)*, basePath?: *`string`*, axios?: *`AxiosInstance`*): [AdminsApi](adminsapi.md)

*Inherited from [BaseAPI](baseapi.md).[constructor](baseapi.md#constructor)*

*Defined in api.ts:49*

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| `Optional` configuration | [Configuration](configuration.md) | - |
| `Default value` basePath | `string` |  BASE_PATH |
| `Default value` axios | `AxiosInstance` |  globalAxios |

**Returns:** [AdminsApi](adminsapi.md)

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

<a id="addportfolioitemtoportfolio"></a>

###  addPortfolioItemToPortfolio

▸ **addPortfolioItemToPortfolio**(portfolioId: *`string`*, addPortfolioItem: *[AddPortfolioItem](../interfaces/addportfolioitem.md)*, options?: *`any`*): `AxiosPromise`<`Response`>

*Defined in api.ts:2535*

Adds a new portfolio item to an existing portfolio.

*__summary__*: Add a portfolio item to a portfolio

*__throws__*: {RequiredError}

*__memberof__*: AdminsApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| portfolioId | `string` |  The Portfolio ID |
| addPortfolioItem | [AddPortfolioItem](../interfaces/addportfolioitem.md) |  \- |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<`Response`>

___
<a id="addtoorder"></a>

###  addToOrder

▸ **addToOrder**(orderId: *`string`*, orderItem: *[OrderItem](../modules/orderitem.md)*, options?: *`any`*): `AxiosPromise`<`Response`>

*Defined in api.ts:2548*

Adds an order item to an order in pending state

*__summary__*: Add an order item to an order in pending state

*__throws__*: {RequiredError}

*__memberof__*: AdminsApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| orderId | `string` |  The Order ID |
| orderItem | [OrderItem](../modules/orderitem.md) |  \- |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<`Response`>

___
<a id="createorder"></a>

###  createOrder

▸ **createOrder**(options?: *`any`*): `AxiosPromise`<[Order](../modules/order.md)>

*Defined in api.ts:2559*

Creates a new order.

*__summary__*: Create a new order

*__throws__*: {RequiredError}

*__memberof__*: AdminsApi

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[Order](../modules/order.md)>

___
<a id="createportfolio"></a>

###  createPortfolio

▸ **createPortfolio**(portfolio: *[Portfolio](../interfaces/portfolio.md)*, options?: *`any`*): `AxiosPromise`<[Portfolio](../interfaces/portfolio.md)>

*Defined in api.ts:2571*

Adds a portfolio.

*__summary__*: Add a new portfolio

*__throws__*: {RequiredError}

*__memberof__*: AdminsApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| portfolio | [Portfolio](../interfaces/portfolio.md) |  Parameters needed to add a Portfolio |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[Portfolio](../interfaces/portfolio.md)>

___
<a id="createportfolioitem"></a>

###  createPortfolioItem

▸ **createPortfolioItem**(createPortfolioItem: *[CreatePortfolioItem](../interfaces/createportfolioitem.md)*, options?: *`any`*): `AxiosPromise`<[PortfolioItem](../interfaces/portfolioitem.md)>

*Defined in api.ts:2583*

Adds a name and description for a portfolio item and returns the newly created portfolio item.

*__summary__*: Add a new portfolio item

*__throws__*: {RequiredError}

*__memberof__*: AdminsApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| createPortfolioItem | [CreatePortfolioItem](../interfaces/createportfolioitem.md) |  \- |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[PortfolioItem](../interfaces/portfolioitem.md)>

___
<a id="destroyportfolio"></a>

###  destroyPortfolio

▸ **destroyPortfolio**(id: *`string`*, options?: *`any`*): `AxiosPromise`<`Response`>

*Defined in api.ts:2595*

Deletes the portfolio specified by the ID.

*__summary__*: Delete an existing portfolio

*__throws__*: {RequiredError}

*__memberof__*: AdminsApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  ID of the resource |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<`Response`>

___
<a id="destroyportfolioitem"></a>

###  destroyPortfolioItem

▸ **destroyPortfolioItem**(id: *`string`*, options?: *`any`*): `AxiosPromise`<`Response`>

*Defined in api.ts:2607*

Deletes the portfolio item based on portfolio item ID passed

*__summary__*: Delete an existing portfolio item

*__throws__*: {RequiredError}

*__memberof__*: AdminsApi

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

*Defined in api.ts:2621*

Gets all portfilio items in the portfolio specified by the given ID.

*__summary__*: Get all portfolio items from a specific portfolio

*__throws__*: {RequiredError}

*__memberof__*: AdminsApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| portfolioId | `string` |  The Portfolio ID |
| `Optional` limit | `number` |
| `Optional` offset | `number` |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[PortfolioItemsCollection](../interfaces/portfolioitemscollection.md)>

___
<a id="listorderitems"></a>

###  listOrderItems

▸ **listOrderItems**(orderId: *`string`*, limit?: *`number`*, offset?: *`number`*, options?: *`any`*): `AxiosPromise`<[OrderItemsCollection](../interfaces/orderitemscollection.md)>

*Defined in api.ts:2635*

Gets a list of items associated with an order.

*__summary__*: Gets a list of items in a given order

*__throws__*: {RequiredError}

*__memberof__*: AdminsApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| orderId | `string` |  The Order ID |
| `Optional` limit | `number` |
| `Optional` offset | `number` |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[OrderItemsCollection](../interfaces/orderitemscollection.md)>

___
<a id="listorders"></a>

###  listOrders

▸ **listOrders**(limit?: *`number`*, offset?: *`number`*, options?: *`any`*): `AxiosPromise`<[OrdersCollection](../interfaces/orderscollection.md)>

*Defined in api.ts:2648*

Gets a list of orders associated with the logged in user.

*__summary__*: Get a list of orders

*__throws__*: {RequiredError}

*__memberof__*: AdminsApi

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` limit | `number` |
| `Optional` offset | `number` |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[OrdersCollection](../interfaces/orderscollection.md)>

___
<a id="listportfolioitems"></a>

###  listPortfolioItems

▸ **listPortfolioItems**(limit?: *`number`*, offset?: *`number`*, options?: *`any`*): `AxiosPromise`<[PortfolioItemsCollection](../interfaces/portfolioitemscollection.md)>

*Defined in api.ts:2661*

Gets a list of portfolio items.

*__summary__*: List all portfolio items

*__throws__*: {RequiredError}

*__memberof__*: AdminsApi

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` limit | `number` |
| `Optional` offset | `number` |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[PortfolioItemsCollection](../interfaces/portfolioitemscollection.md)>

___
<a id="listportfolios"></a>

###  listPortfolios

▸ **listPortfolios**(limit?: *`number`*, offset?: *`number`*, options?: *`any`*): `AxiosPromise`<[PortfoliosCollection](../interfaces/portfolioscollection.md)>

*Defined in api.ts:2674*

Gets a list of portfolios.

*__summary__*: List portfolios

*__throws__*: {RequiredError}

*__memberof__*: AdminsApi

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` limit | `number` |
| `Optional` offset | `number` |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[PortfoliosCollection](../interfaces/portfolioscollection.md)>

___
<a id="listprogressmessages"></a>

###  listProgressMessages

▸ **listProgressMessages**(orderItemId: *`string`*, limit?: *`number`*, offset?: *`number`*, options?: *`any`*): `AxiosPromise`<[ProgressMessagesCollection](../interfaces/progressmessagescollection.md)>

*Defined in api.ts:2688*

Gets a list of progress messages associated with an order item. As the item is being processed the provider can update the progress messages.

*__summary__*: Gets a list of progress messages in an item

*__throws__*: {RequiredError}

*__memberof__*: AdminsApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| orderItemId | `string` |  The Order Item ID |
| `Optional` limit | `number` |
| `Optional` offset | `number` |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[ProgressMessagesCollection](../interfaces/progressmessagescollection.md)>

___
<a id="listprovidercontrolparameters"></a>

###  listProviderControlParameters

▸ **listProviderControlParameters**(portfolioItemId: *`string`*, options?: *`any`*): `AxiosPromise`<`any`>

*Defined in api.ts:2700*

Gets the provider control parameters for a portfolio item.

*__summary__*: Gets the provider control parameters for this portfolio item; requires control paramaters provided when provisioning the portfolio item.

*__throws__*: {RequiredError}

*__memberof__*: AdminsApi

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

*Defined in api.ts:2712*

Gets all service plans for a portfolio item.

*__summary__*: Gets all service plans for a specific portfolio item; requires a connection to the topology service.

*__throws__*: {RequiredError}

*__memberof__*: AdminsApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| portfolioItemId | `string` |  The Portfolio Item ID |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[ServicePlan](../interfaces/serviceplan.md)[]>

___
<a id="shareinfo"></a>

###  shareInfo

▸ **shareInfo**(portfolioId: *`string`*, options?: *`any`*): `AxiosPromise`<[ShareInfo](../interfaces/shareinfo.md)[]>

*Defined in api.ts:2724*

Fetch share information about a portfolio

*__summary__*: Fetch share information about this portfolio, the response would include a collection of groups and permissions with each group

*__throws__*: {RequiredError}

*__memberof__*: AdminsApi

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

*Defined in api.ts:2737*

Share a Portfolio with one or more groups with specific permissions

*__summary__*: Share a portfolio with one or more groups with specific permission

*__throws__*: {RequiredError}

*__memberof__*: AdminsApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| portfolioId | `string` |  The Portfolio ID |
| sharePolicy | [SharePolicy](../interfaces/sharepolicy.md) |  \- |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<`Response`>

___
<a id="showorderitem"></a>

###  showOrderItem

▸ **showOrderItem**(orderId: *`string`*, id: *`string`*, options?: *`any`*): `AxiosPromise`<[OrderItem](../modules/orderitem.md)>

*Defined in api.ts:2750*

Gets an order item associated with an order.

*__summary__*: Gets an individual order item from a given order

*__throws__*: {RequiredError}

*__memberof__*: AdminsApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| orderId | `string` |  The Order ID |
| id | `string` |  ID of the resource |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[OrderItem](../modules/orderitem.md)>

___
<a id="showportfolio"></a>

###  showPortfolio

▸ **showPortfolio**(id: *`string`*, options?: *`any`*): `AxiosPromise`<[Portfolio](../interfaces/portfolio.md)>

*Defined in api.ts:2762*

Gets the portfolio specified by the portfolio ID.

*__summary__*: Get a specific portfolio

*__throws__*: {RequiredError}

*__memberof__*: AdminsApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  ID of the resource |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[Portfolio](../interfaces/portfolio.md)>

___
<a id="showportfolioitem"></a>

###  showPortfolioItem

▸ **showPortfolioItem**(id: *`string`*, options?: *`any`*): `AxiosPromise`<[PortfolioItem](../interfaces/portfolioitem.md)>

*Defined in api.ts:2774*

Gets a specific portfolio item based on the portfolio item ID passed

*__summary__*: Gets a specific portfolio item

*__throws__*: {RequiredError}

*__memberof__*: AdminsApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  ID of the resource |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[PortfolioItem](../interfaces/portfolioitem.md)>

___
<a id="submitorder"></a>

###  submitOrder

▸ **submitOrder**(orderId: *`string`*, options?: *`any`*): `AxiosPromise`<[Order](../modules/order.md)>

*Defined in api.ts:2786*

Returns an updated order.

*__summary__*: Submit a given order

*__throws__*: {RequiredError}

*__memberof__*: AdminsApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| orderId | `string` |  The Order ID |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[Order](../modules/order.md)>

___
<a id="unshareportfolio"></a>

###  unsharePortfolio

▸ **unsharePortfolio**(portfolioId: *`string`*, unsharePolicy: *[UnsharePolicy](../interfaces/unsharepolicy.md)*, options?: *`any`*): `AxiosPromise`<`Response`>

*Defined in api.ts:2799*

Unshare a Portfolio with one or more groups with specific permissions

*__summary__*: Unshare a portfolio from one or more groups with specific permission

*__throws__*: {RequiredError}

*__memberof__*: AdminsApi

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

*Defined in api.ts:2812*

Returns the edited portfolio.

*__summary__*: Edit an existing portfolio

*__throws__*: {RequiredError}

*__memberof__*: AdminsApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  ID of the resource |
| portfolio | [Portfolio](../interfaces/portfolio.md) |  Parameters needed to update a Portfolio |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[Portfolio](../interfaces/portfolio.md)>

___

