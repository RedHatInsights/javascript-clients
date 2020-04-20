[@redhat-cloud-services/catalog-client](../README.md) › [Globals](../globals.md) › [OrderApi](orderapi.md)

# Class: OrderApi

OrderApi - object-oriented interface

**`export`** 

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

*Defined in [packages/catalog/base.ts:49](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/base.ts#L49)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`configuration?` | [Configuration](configuration.md) | - |
`basePath` | string | BASE_PATH |
`axios` | AxiosInstance | globalAxios |

**Returns:** *[OrderApi](orderapi.md)*

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

###  addToOrder

▸ **addToOrder**(`orderId`: string, `orderItem`: [OrderItem](../interfaces/orderitem.md), `options?`: any): *AxiosPromise‹[OrderItem](../interfaces/orderitem.md)›*

*Defined in [packages/catalog/api.ts:2516](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L2516)*

Adds an order item to an order in pending state

**`summary`** Add an order item to an order in pending state

**`throws`** {RequiredError}

**`memberof`** OrderApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`orderId` | string | The Order ID |
`orderItem` | [OrderItem](../interfaces/orderitem.md) | - |
`options?` | any | - |

**Returns:** *AxiosPromise‹[OrderItem](../interfaces/orderitem.md)›*

___

###  cancelOrder

▸ **cancelOrder**(`orderId`: string, `options?`: any): *AxiosPromise‹[Order](../interfaces/order.md)›*

*Defined in [packages/catalog/api.ts:2528](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L2528)*

Returns an updated order.

**`summary`** Cancels a given order

**`throws`** {RequiredError}

**`memberof`** OrderApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`orderId` | string | The Order ID |
`options?` | any | - |

**Returns:** *AxiosPromise‹[Order](../interfaces/order.md)›*

___

###  createOrder

▸ **createOrder**(`options?`: any): *AxiosPromise‹[Order](../interfaces/order.md)›*

*Defined in [packages/catalog/api.ts:2539](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L2539)*

Creates a new order.

**`summary`** Create a new order

**`throws`** {RequiredError}

**`memberof`** OrderApi

**Parameters:**

Name | Type |
------ | ------ |
`options?` | any |

**Returns:** *AxiosPromise‹[Order](../interfaces/order.md)›*

___

###  destroyOrder

▸ **destroyOrder**(`id`: string, `options?`: any): *AxiosPromise‹[RestoreKey](../interfaces/restorekey.md)›*

*Defined in [packages/catalog/api.ts:2551](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L2551)*

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

▸ **listOrderItemsFromOrder**(`orderId`: string, `limit?`: number, `offset?`: number, `filter?`: object, `options?`: any): *AxiosPromise‹[OrderItemsCollection](../interfaces/orderitemscollection.md)›*

*Defined in [packages/catalog/api.ts:2566](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L2566)*

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
`filter?` | object | - |
`options?` | any | - |

**Returns:** *AxiosPromise‹[OrderItemsCollection](../interfaces/orderitemscollection.md)›*

___

###  listOrders

▸ **listOrders**(`limit?`: number, `offset?`: number, `filter?`: object, `options?`: any): *AxiosPromise‹[OrdersCollection](../interfaces/orderscollection.md)›*

*Defined in [packages/catalog/api.ts:2580](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L2580)*

Gets a list of orders associated with the logged in user.

**`summary`** Get a list of orders

**`throws`** {RequiredError}

**`memberof`** OrderApi

**Parameters:**

Name | Type |
------ | ------ |
`limit?` | number |
`offset?` | number |
`filter?` | object |
`options?` | any |

**Returns:** *AxiosPromise‹[OrdersCollection](../interfaces/orderscollection.md)›*

___

###  restoreOrder

▸ **restoreOrder**(`id`: string, `restoreKey`: [RestoreKey](../interfaces/restorekey.md), `options?`: any): *AxiosPromise‹[Order](../interfaces/order.md)›*

*Defined in [packages/catalog/api.ts:2593](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L2593)*

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

**Returns:** *AxiosPromise‹[Order](../interfaces/order.md)›*

___

###  showOrder

▸ **showOrder**(`id`: string, `options?`: any): *AxiosPromise‹[Order](../interfaces/order.md)›*

*Defined in [packages/catalog/api.ts:2605](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L2605)*

Get a specific order based on the order ID

**`summary`** Get a specific order

**`throws`** {RequiredError}

**`memberof`** OrderApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | ID of the resource |
`options?` | any | - |

**Returns:** *AxiosPromise‹[Order](../interfaces/order.md)›*

___

###  showOrderItemFromOrder

▸ **showOrderItemFromOrder**(`orderId`: string, `id`: string, `options?`: any): *AxiosPromise‹[OrderItem](../interfaces/orderitem.md)›*

*Defined in [packages/catalog/api.ts:2618](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L2618)*

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

**Returns:** *AxiosPromise‹[OrderItem](../interfaces/orderitem.md)›*

___

###  submitOrder

▸ **submitOrder**(`orderId`: string, `options?`: any): *AxiosPromise‹[Order](../interfaces/order.md)›*

*Defined in [packages/catalog/api.ts:2630](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L2630)*

Returns an updated order.

**`summary`** Submit a given order

**`throws`** {RequiredError}

**`memberof`** OrderApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`orderId` | string | The Order ID |
`options?` | any | - |

**Returns:** *AxiosPromise‹[Order](../interfaces/order.md)›*
