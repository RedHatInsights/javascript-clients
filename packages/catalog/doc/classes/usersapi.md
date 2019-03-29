[@redhat-cloud-services/catalog-client](../README.md) > [UsersApi](../classes/usersapi.md)

# Class: UsersApi

UsersApi - object-oriented interface

*__export__*: 

*__class__*: UsersApi

*__extends__*: {BaseAPI}

## Hierarchy

 [BaseAPI](baseapi.md)

**↳ UsersApi**

## Index

### Constructors

* [constructor](usersapi.md#constructor)

### Properties

* [axios](usersapi.md#axios)
* [basePath](usersapi.md#basepath)
* [configuration](usersapi.md#configuration)

### Methods

* [addToOrder](usersapi.md#addtoorder)
* [fetchPortfolioItemsWithPortfolio](usersapi.md#fetchportfolioitemswithportfolio)
* [listOrderItems](usersapi.md#listorderitems)
* [listOrders](usersapi.md#listorders)
* [listPortfolioItems](usersapi.md#listportfolioitems)
* [listPortfolios](usersapi.md#listportfolios)
* [listProgressMessages](usersapi.md#listprogressmessages)
* [listProviderControlParameters](usersapi.md#listprovidercontrolparameters)
* [listServicePlans](usersapi.md#listserviceplans)
* [shareInfo](usersapi.md#shareinfo)
* [showOrderItem](usersapi.md#showorderitem)
* [showPortfolio](usersapi.md#showportfolio)
* [showPortfolioItem](usersapi.md#showportfolioitem)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new UsersApi**(configuration?: *[Configuration](configuration.md)*, basePath?: *`string`*, axios?: *`AxiosInstance`*): [UsersApi](usersapi.md)

*Inherited from [BaseAPI](baseapi.md).[constructor](baseapi.md#constructor)*

*Defined in api.ts:49*

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| `Optional` configuration | [Configuration](configuration.md) | - |
| `Default value` basePath | `string` |  BASE_PATH |
| `Default value` axios | `AxiosInstance` |  globalAxios |

**Returns:** [UsersApi](usersapi.md)

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

<a id="addtoorder"></a>

###  addToOrder

▸ **addToOrder**(orderId: *`string`*, orderItem: *[OrderItem](../modules/orderitem.md)*, options?: *`any`*): `AxiosPromise`<`Response`>

*Defined in api.ts:3994*

Adds an order item to an order in pending state

*__summary__*: Add an order item to an order in pending state

*__throws__*: {RequiredError}

*__memberof__*: UsersApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| orderId | `string` |  The Order ID |
| orderItem | [OrderItem](../modules/orderitem.md) |  \- |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<`Response`>

___
<a id="fetchportfolioitemswithportfolio"></a>

###  fetchPortfolioItemsWithPortfolio

▸ **fetchPortfolioItemsWithPortfolio**(portfolioId: *`string`*, limit?: *`number`*, offset?: *`number`*, options?: *`any`*): `AxiosPromise`<[PortfolioItemsCollection](../interfaces/portfolioitemscollection.md)>

*Defined in api.ts:4008*

Gets all portfilio items in the portfolio specified by the given ID.

*__summary__*: Get all portfolio items from a specific portfolio

*__throws__*: {RequiredError}

*__memberof__*: UsersApi

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

*Defined in api.ts:4022*

Gets a list of items associated with an order.

*__summary__*: Gets a list of items in a given order

*__throws__*: {RequiredError}

*__memberof__*: UsersApi

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

*Defined in api.ts:4035*

Gets a list of orders associated with the logged in user.

*__summary__*: Get a list of orders

*__throws__*: {RequiredError}

*__memberof__*: UsersApi

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

*Defined in api.ts:4048*

Gets a list of portfolio items.

*__summary__*: List all portfolio items

*__throws__*: {RequiredError}

*__memberof__*: UsersApi

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

*Defined in api.ts:4061*

Gets a list of portfolios.

*__summary__*: List portfolios

*__throws__*: {RequiredError}

*__memberof__*: UsersApi

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

*Defined in api.ts:4075*

Gets a list of progress messages associated with an order item. As the item is being processed the provider can update the progress messages.

*__summary__*: Gets a list of progress messages in an item

*__throws__*: {RequiredError}

*__memberof__*: UsersApi

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

*Defined in api.ts:4087*

Gets the provider control parameters for a portfolio item.

*__summary__*: Gets the provider control parameters for this portfolio item; requires control paramaters provided when provisioning the portfolio item.

*__throws__*: {RequiredError}

*__memberof__*: UsersApi

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

*Defined in api.ts:4099*

Gets all service plans for a portfolio item.

*__summary__*: Gets all service plans for a specific portfolio item; requires a connection to the topology service.

*__throws__*: {RequiredError}

*__memberof__*: UsersApi

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

*Defined in api.ts:4111*

Fetch share information about a portfolio

*__summary__*: Fetch share information about this portfolio, the response would include a collection of groups and permissions with each group

*__throws__*: {RequiredError}

*__memberof__*: UsersApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| portfolioId | `string` |  The Portfolio ID |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[ShareInfo](../interfaces/shareinfo.md)[]>

___
<a id="showorderitem"></a>

###  showOrderItem

▸ **showOrderItem**(orderId: *`string`*, id: *`string`*, options?: *`any`*): `AxiosPromise`<[OrderItem](../modules/orderitem.md)>

*Defined in api.ts:4124*

Gets an order item associated with an order.

*__summary__*: Gets an individual order item from a given order

*__throws__*: {RequiredError}

*__memberof__*: UsersApi

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

*Defined in api.ts:4136*

Gets the portfolio specified by the portfolio ID.

*__summary__*: Get a specific portfolio

*__throws__*: {RequiredError}

*__memberof__*: UsersApi

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

*Defined in api.ts:4148*

Gets a specific portfolio item based on the portfolio item ID passed

*__summary__*: Gets a specific portfolio item

*__throws__*: {RequiredError}

*__memberof__*: UsersApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  ID of the resource |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[PortfolioItem](../interfaces/portfolioitem.md)>

___

