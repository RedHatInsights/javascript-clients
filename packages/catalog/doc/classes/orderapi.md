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
* [listOrderProgressMessages](orderapi.md#listorderprogressmessages)
* [listOrders](orderapi.md#listorders)
* [restoreOrder](orderapi.md#restoreorder)
* [showOrder](orderapi.md#showorder)
* [showOrderItemFromOrder](orderapi.md#showorderitemfromorder)
* [submitOrder](orderapi.md#submitorder)

## Constructors

###  constructor

\+ **new OrderApi**(`configuration?`: [Configuration](configuration.md), `basePath`: string, `axios`: AxiosInstance): *[OrderApi](orderapi.md)*

*Inherited from [BaseAPI](baseapi.md).[constructor](baseapi.md#constructor)*

*Defined in [base.ts:49](https://github.com/RedHatInsights/javascript-clients.gi/blob/master/packages/catalog/base.ts#L49)*

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

*Defined in [base.ts:51](https://github.com/RedHatInsights/javascript-clients.gi/blob/master/packages/catalog/base.ts#L51)*

___

### `Protected` basePath

• **basePath**: *string*

*Inherited from [BaseAPI](baseapi.md).[basePath](baseapi.md#protected-basepath)*

*Defined in [base.ts:51](https://github.com/RedHatInsights/javascript-clients.gi/blob/master/packages/catalog/base.ts#L51)*

___

### `Protected` configuration

• **configuration**: *[Configuration](configuration.md) | undefined*

*Inherited from [BaseAPI](baseapi.md).[configuration](baseapi.md#protected-configuration)*

*Defined in [base.ts:49](https://github.com/RedHatInsights/javascript-clients.gi/blob/master/packages/catalog/base.ts#L49)*

## Methods

###  addToOrder

▸ **addToOrder**(`orderId`: string, `orderItem`: [OrderItem](../interfaces/orderitem.md), `options?`: any): *Promise‹AxiosResponse‹[OrderItem](../interfaces/orderitem.md)››*

*Defined in [api.ts:2675](https://github.com/RedHatInsights/javascript-clients.gi/blob/master/packages/catalog/api.ts#L2675)*

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

**Returns:** *Promise‹AxiosResponse‹[OrderItem](../interfaces/orderitem.md)››*

___

###  cancelOrder

▸ **cancelOrder**(`orderId`: string, `options?`: any): *Promise‹AxiosResponse‹[Order](../interfaces/order.md)››*

*Defined in [api.ts:2687](https://github.com/RedHatInsights/javascript-clients.gi/blob/master/packages/catalog/api.ts#L2687)*

Returns an updated order.

**`summary`** Cancels a given order

**`throws`** {RequiredError}

**`memberof`** OrderApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`orderId` | string | The Order ID |
`options?` | any | - |

**Returns:** *Promise‹AxiosResponse‹[Order](../interfaces/order.md)››*

___

###  createOrder

▸ **createOrder**(`options?`: any): *Promise‹AxiosResponse‹[Order](../interfaces/order.md)››*

*Defined in [api.ts:2698](https://github.com/RedHatInsights/javascript-clients.gi/blob/master/packages/catalog/api.ts#L2698)*

Creates a new order.

**`summary`** Create a new order

**`throws`** {RequiredError}

**`memberof`** OrderApi

**Parameters:**

Name | Type |
------ | ------ |
`options?` | any |

**Returns:** *Promise‹AxiosResponse‹[Order](../interfaces/order.md)››*

___

###  destroyOrder

▸ **destroyOrder**(`id`: string, `options?`: any): *Promise‹AxiosResponse‹[RestoreKey](../interfaces/restorekey.md)››*

*Defined in [api.ts:2710](https://github.com/RedHatInsights/javascript-clients.gi/blob/master/packages/catalog/api.ts#L2710)*

Deletes the Order based on order ID passed

**`summary`** Delete an existing Order

**`throws`** {RequiredError}

**`memberof`** OrderApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | ID of the resource |
`options?` | any | - |

**Returns:** *Promise‹AxiosResponse‹[RestoreKey](../interfaces/restorekey.md)››*

___

###  listOrderItemsFromOrder

▸ **listOrderItemsFromOrder**(`orderId`: string, `limit?`: number, `offset?`: number, `filter?`: object, `sortBy?`: string, `options?`: any): *Promise‹AxiosResponse‹[OrderItemsCollection](../interfaces/orderitemscollection.md)››*

*Defined in [api.ts:2726](https://github.com/RedHatInsights/javascript-clients.gi/blob/master/packages/catalog/api.ts#L2726)*

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
`sortBy?` | string | - |
`options?` | any | - |

**Returns:** *Promise‹AxiosResponse‹[OrderItemsCollection](../interfaces/orderitemscollection.md)››*

___

###  listOrderProgressMessages

▸ **listOrderProgressMessages**(`orderId`: string, `limit?`: number, `offset?`: number, `filter?`: object, `sortBy?`: string, `options?`: any): *Promise‹AxiosResponse‹[ProgressMessagesCollection](../interfaces/progressmessagescollection.md)››*

*Defined in [api.ts:2742](https://github.com/RedHatInsights/javascript-clients.gi/blob/master/packages/catalog/api.ts#L2742)*

Gets a list of progress messages associated with an order. As the order is being processed the provider can update the progress messages.

**`summary`** Gets a list of progress messages in an order

**`throws`** {RequiredError}

**`memberof`** OrderApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`orderId` | string | The Order ID |
`limit?` | number | - |
`offset?` | number | - |
`filter?` | object | - |
`sortBy?` | string | - |
`options?` | any | - |

**Returns:** *Promise‹AxiosResponse‹[ProgressMessagesCollection](../interfaces/progressmessagescollection.md)››*

___

###  listOrders

▸ **listOrders**(`limit?`: number, `offset?`: number, `filter?`: object, `sortBy?`: string, `options?`: any): *Promise‹AxiosResponse‹[OrdersCollection](../interfaces/orderscollection.md)››*

*Defined in [api.ts:2757](https://github.com/RedHatInsights/javascript-clients.gi/blob/master/packages/catalog/api.ts#L2757)*

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
`sortBy?` | string |
`options?` | any |

**Returns:** *Promise‹AxiosResponse‹[OrdersCollection](../interfaces/orderscollection.md)››*

___

###  restoreOrder

▸ **restoreOrder**(`id`: string, `restoreKey`: [RestoreKey](../interfaces/restorekey.md), `options?`: any): *Promise‹AxiosResponse‹[Order](../interfaces/order.md)››*

*Defined in [api.ts:2770](https://github.com/RedHatInsights/javascript-clients.gi/blob/master/packages/catalog/api.ts#L2770)*

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

**Returns:** *Promise‹AxiosResponse‹[Order](../interfaces/order.md)››*

___

###  showOrder

▸ **showOrder**(`id`: string, `options?`: any): *Promise‹AxiosResponse‹[Order](../interfaces/order.md)››*

*Defined in [api.ts:2782](https://github.com/RedHatInsights/javascript-clients.gi/blob/master/packages/catalog/api.ts#L2782)*

Get a specific order based on the order ID

**`summary`** Get a specific order

**`throws`** {RequiredError}

**`memberof`** OrderApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | ID of the resource |
`options?` | any | - |

**Returns:** *Promise‹AxiosResponse‹[Order](../interfaces/order.md)››*

___

###  showOrderItemFromOrder

▸ **showOrderItemFromOrder**(`orderId`: string, `id`: string, `options?`: any): *Promise‹AxiosResponse‹[OrderItem](../interfaces/orderitem.md)››*

*Defined in [api.ts:2795](https://github.com/RedHatInsights/javascript-clients.gi/blob/master/packages/catalog/api.ts#L2795)*

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

**Returns:** *Promise‹AxiosResponse‹[OrderItem](../interfaces/orderitem.md)››*

___

###  submitOrder

▸ **submitOrder**(`orderId`: string, `options?`: any): *Promise‹AxiosResponse‹[Order](../interfaces/order.md)››*

*Defined in [api.ts:2807](https://github.com/RedHatInsights/javascript-clients.gi/blob/master/packages/catalog/api.ts#L2807)*

Returns an updated order.

**`summary`** Submit a given order

**`throws`** {RequiredError}

**`memberof`** OrderApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`orderId` | string | The Order ID |
`options?` | any | - |

**Returns:** *Promise‹AxiosResponse‹[Order](../interfaces/order.md)››*
