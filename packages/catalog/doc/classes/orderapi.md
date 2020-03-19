[@redhat-cloud-services/catalog-client](../README.md) › [Globals](../globals.md) › [OrderApi](orderapi.md)

# Class: OrderApi

OrderApi - object-oriented interface

**`export`** 

**`class`** OrderApi

**`extends`** {BaseAPI}

## Hierarchy

* [BaseAPI](baseapi.md)

  ↳ **OrderApi**

## Index

### Constructors

* [constructor](orderapi.md#constructor)

### Properties

* [axios](orderapi.md#protected-axios)
* [basePath](orderapi.md#protected-basepath)
* [configuration](orderapi.md#protected-configuration)

### Methods

* [addToOrder](orderapi.md#addtoorder)
* [cancelOrder](orderapi.md#cancelorder)
* [createOrder](orderapi.md#createorder)
* [destroyOrder](orderapi.md#destroyorder)
* [listOrderItemsFromOrder](orderapi.md#listorderitemsfromorder)
* [listOrders](orderapi.md#listorders)
* [restoreOrder](orderapi.md#restoreorder)
* [showOrder](orderapi.md#showorder)
* [showOrderItemFromOrder](orderapi.md#showorderitemfromorder)
* [submitOrder](orderapi.md#submitorder)

## Constructors

###  constructor

\+ **new OrderApi**(`configuration?`: [Configuration](configuration.md), `basePath`: string, `axios`: AxiosInstance): *[OrderApi](orderapi.md)*

*Inherited from [BaseAPI](baseapi.md).[constructor](baseapi.md#constructor)*

*Defined in [api.ts:49](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L49)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`configuration?` | [Configuration](configuration.md) | - |
`basePath` | string |  BASE_PATH |
`axios` | AxiosInstance |  globalAxios |

**Returns:** *[OrderApi](orderapi.md)*

## Properties

### `Protected` axios

• **axios**: *AxiosInstance*

*Inherited from [BaseAPI](baseapi.md).[axios](baseapi.md#protected-axios)*

*Defined in [api.ts:51](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L51)*

___

### `Protected` basePath

• **basePath**: *string*

*Inherited from [BaseAPI](baseapi.md).[basePath](baseapi.md#protected-basepath)*

*Defined in [api.ts:51](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L51)*

___

### `Protected` configuration

• **configuration**: *[Configuration](configuration.md) | undefined*

*Inherited from [BaseAPI](baseapi.md).[configuration](baseapi.md#protected-configuration)*

*Defined in [api.ts:49](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L49)*

## Methods

###  addToOrder

▸ **addToOrder**(`orderId`: string, `orderItem`: [OrderItem](../modules/orderitem.md), `options?`: any): *AxiosPromise‹[OrderItem](../modules/orderitem.md)›*

*Defined in [api.ts:2582](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L2582)*

Adds an order item to an order in pending state

**`summary`** Add an order item to an order in pending state

**`throws`** {RequiredError}

**`memberof`** OrderApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`orderId` | string | The Order ID |
`orderItem` | [OrderItem](../modules/orderitem.md) | - |
`options?` | any | - |

**Returns:** *AxiosPromise‹[OrderItem](../modules/orderitem.md)›*

___

###  cancelOrder

▸ **cancelOrder**(`orderId`: string, `options?`: any): *AxiosPromise‹[Order](../modules/order.md)›*

*Defined in [api.ts:2594](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L2594)*

Returns an updated order.

**`summary`** Cancels a given order

**`throws`** {RequiredError}

**`memberof`** OrderApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`orderId` | string | The Order ID |
`options?` | any | - |

**Returns:** *AxiosPromise‹[Order](../modules/order.md)›*

___

###  createOrder

▸ **createOrder**(`options?`: any): *AxiosPromise‹[Order](../modules/order.md)›*

*Defined in [api.ts:2605](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L2605)*

Creates a new order.

**`summary`** Create a new order

**`throws`** {RequiredError}

**`memberof`** OrderApi

**Parameters:**

Name | Type |
------ | ------ |
`options?` | any |

**Returns:** *AxiosPromise‹[Order](../modules/order.md)›*

___

###  destroyOrder

▸ **destroyOrder**(`id`: string, `options?`: any): *AxiosPromise‹[RestoreKey](../interfaces/restorekey.md)›*

*Defined in [api.ts:2617](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L2617)*

Deletes the Order based on order ID passed

**`summary`** Delete an existing Order

**`throws`** {RequiredError}

**`memberof`** OrderApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | ID of the resource |
`options?` | any | - |

**Returns:** *AxiosPromise‹[RestoreKey](../interfaces/restorekey.md)›*

___

###  listOrderItemsFromOrder

▸ **listOrderItemsFromOrder**(`orderId`: string, `limit?`: number, `offset?`: number, `filter?`: any, `options?`: any): *AxiosPromise‹[OrderItemsCollection](../interfaces/orderitemscollection.md)›*

*Defined in [api.ts:2632](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L2632)*

Gets a list of items associated with an order.

**`summary`** Gets a list of items in a given order

**`throws`** {RequiredError}

**`memberof`** OrderApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`orderId` | string | The Order ID |
`limit?` | number | - |
`offset?` | number | - |
`filter?` | any | - |
`options?` | any | - |

**Returns:** *AxiosPromise‹[OrderItemsCollection](../interfaces/orderitemscollection.md)›*

___

###  listOrders

▸ **listOrders**(`limit?`: number, `offset?`: number, `filter?`: any, `options?`: any): *AxiosPromise‹[OrdersCollection](../interfaces/orderscollection.md)›*

*Defined in [api.ts:2646](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L2646)*

Gets a list of orders associated with the logged in user.

**`summary`** Get a list of orders

**`throws`** {RequiredError}

**`memberof`** OrderApi

**Parameters:**

Name | Type |
------ | ------ |
`limit?` | number |
`offset?` | number |
`filter?` | any |
`options?` | any |

**Returns:** *AxiosPromise‹[OrdersCollection](../interfaces/orderscollection.md)›*

___

###  restoreOrder

▸ **restoreOrder**(`id`: string, `restoreKey`: [RestoreKey](../interfaces/restorekey.md), `options?`: any): *AxiosPromise‹[Order](../modules/order.md)›*

*Defined in [api.ts:2659](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L2659)*

Restores the order specified by the order ID.

**`summary`** Restore specific Order

**`throws`** {RequiredError}

**`memberof`** OrderApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | ID of the resource |
`restoreKey` | [RestoreKey](../interfaces/restorekey.md) | - |
`options?` | any | - |

**Returns:** *AxiosPromise‹[Order](../modules/order.md)›*

___

###  showOrder

▸ **showOrder**(`id`: string, `options?`: any): *AxiosPromise‹[Order](../modules/order.md)›*

*Defined in [api.ts:2671](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L2671)*

Get a specific order based on the order ID

**`summary`** Get a specific order

**`throws`** {RequiredError}

**`memberof`** OrderApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | ID of the resource |
`options?` | any | - |

**Returns:** *AxiosPromise‹[Order](../modules/order.md)›*

___

###  showOrderItemFromOrder

▸ **showOrderItemFromOrder**(`orderId`: string, `id`: string, `options?`: any): *AxiosPromise‹[OrderItem](../modules/orderitem.md)›*

*Defined in [api.ts:2684](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L2684)*

Gets an order item associated with an order.

**`summary`** Gets an individual order item from a given order

**`throws`** {RequiredError}

**`memberof`** OrderApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`orderId` | string | The Order ID |
`id` | string | ID of the resource |
`options?` | any | - |

**Returns:** *AxiosPromise‹[OrderItem](../modules/orderitem.md)›*

___

###  submitOrder

▸ **submitOrder**(`orderId`: string, `options?`: any): *AxiosPromise‹[Order](../modules/order.md)›*

*Defined in [api.ts:2696](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L2696)*

Returns an updated order.

**`summary`** Submit a given order

**`throws`** {RequiredError}

**`memberof`** OrderApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`orderId` | string | The Order ID |
`options?` | any | - |

**Returns:** *AxiosPromise‹[Order](../modules/order.md)›*
