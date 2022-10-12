[@redhat-cloud-services/catalog-client](../README.md) / [Exports](../modules.md) / OrderApi

# Class: OrderApi

OrderApi - object-oriented interface

**`Export`**

## Hierarchy

- `BaseAPI`

  ↳ **`OrderApi`**

## Table of contents

### Constructors

- [constructor](OrderApi.md#constructor)

### Properties

- [axios](OrderApi.md#axios)
- [basePath](OrderApi.md#basepath)
- [configuration](OrderApi.md#configuration)

### Methods

- [addToOrder](OrderApi.md#addtoorder)
- [cancelOrder](OrderApi.md#cancelorder)
- [createOrder](OrderApi.md#createorder)
- [destroyOrder](OrderApi.md#destroyorder)
- [listOrderItemsFromOrder](OrderApi.md#listorderitemsfromorder)
- [listOrderProgressMessages](OrderApi.md#listorderprogressmessages)
- [listOrders](OrderApi.md#listorders)
- [restoreOrder](OrderApi.md#restoreorder)
- [showOrder](OrderApi.md#showorder)
- [showOrderItemFromOrder](OrderApi.md#showorderitemfromorder)
- [submitOrder](OrderApi.md#submitorder)

## Constructors

### constructor

• **new OrderApi**(`configuration?`, `basePath?`, `axios?`)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `configuration?` | [`Configuration`](Configuration.md) | `undefined` |
| `basePath` | `string` | `BASE_PATH` |
| `axios` | `AxiosInstance` | `globalAxios` |

#### Inherited from

BaseAPI.constructor

#### Defined in

[base.ts:51](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/base.ts#L51)

## Properties

### axios

• `Protected` **axios**: `AxiosInstance` = `globalAxios`

#### Inherited from

BaseAPI.axios

#### Defined in

[base.ts:51](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/base.ts#L51)

___

### basePath

• `Protected` **basePath**: `string` = `BASE_PATH`

#### Inherited from

BaseAPI.basePath

#### Defined in

[base.ts:51](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/base.ts#L51)

___

### configuration

• `Protected` **configuration**: [`Configuration`](Configuration.md)

#### Inherited from

BaseAPI.configuration

#### Defined in

[base.ts:49](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/base.ts#L49)

## Methods

### addToOrder

▸ **addToOrder**(`orderId`, `orderItem`, `options?`): `Promise`<`AxiosResponse`<[`OrderItem`](../interfaces/OrderItem.md)\>\>

Adds an order item to an order in pending state

**`Summary`**

Add an order item to an order in pending state

**`Throws`**

**`Memberof`**

OrderApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `orderId` | `string` | The Order ID |
| `orderItem` | [`OrderItem`](../interfaces/OrderItem.md) |  |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`OrderItem`](../interfaces/OrderItem.md)\>\>

#### Defined in

[api.ts:2675](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L2675)

___

### cancelOrder

▸ **cancelOrder**(`orderId`, `options?`): `Promise`<`AxiosResponse`<[`Order`](../interfaces/Order.md)\>\>

Returns an updated order.

**`Summary`**

Cancels a given order

**`Throws`**

**`Memberof`**

OrderApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `orderId` | `string` | The Order ID |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`Order`](../interfaces/Order.md)\>\>

#### Defined in

[api.ts:2687](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L2687)

___

### createOrder

▸ **createOrder**(`options?`): `Promise`<`AxiosResponse`<[`Order`](../interfaces/Order.md)\>\>

Creates a new order.

**`Summary`**

Create a new order

**`Throws`**

**`Memberof`**

OrderApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`Order`](../interfaces/Order.md)\>\>

#### Defined in

[api.ts:2698](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L2698)

___

### destroyOrder

▸ **destroyOrder**(`id`, `options?`): `Promise`<`AxiosResponse`<[`RestoreKey`](../interfaces/RestoreKey.md)\>\>

Deletes the Order based on order ID passed

**`Summary`**

Delete an existing Order

**`Throws`**

**`Memberof`**

OrderApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | ID of the resource |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`RestoreKey`](../interfaces/RestoreKey.md)\>\>

#### Defined in

[api.ts:2710](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L2710)

___

### listOrderItemsFromOrder

▸ **listOrderItemsFromOrder**(`orderId`, `limit?`, `offset?`, `filter?`, `sortBy?`, `options?`): `Promise`<`AxiosResponse`<[`OrderItemsCollection`](../interfaces/OrderItemsCollection.md)\>\>

Gets a list of items associated with an order.

**`Summary`**

Gets a list of items in a given order

**`Throws`**

**`Memberof`**

OrderApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `orderId` | `string` | The Order ID |
| `limit?` | `number` | The numbers of items to return per page. |
| `offset?` | `number` | The number of items to skip before starting to collect the result set. |
| `filter?` | `object` | Filter for querying collections. |
| `sortBy?` | `string` | Field to sort collection by. |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`OrderItemsCollection`](../interfaces/OrderItemsCollection.md)\>\>

#### Defined in

[api.ts:2726](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L2726)

___

### listOrderProgressMessages

▸ **listOrderProgressMessages**(`orderId`, `limit?`, `offset?`, `filter?`, `sortBy?`, `options?`): `Promise`<`AxiosResponse`<[`ProgressMessagesCollection`](../interfaces/ProgressMessagesCollection.md)\>\>

Gets a list of progress messages associated with an order. As the order is being processed the provider can update the progress messages.

**`Summary`**

Gets a list of progress messages in an order

**`Throws`**

**`Memberof`**

OrderApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `orderId` | `string` | The Order ID |
| `limit?` | `number` | The numbers of items to return per page. |
| `offset?` | `number` | The number of items to skip before starting to collect the result set. |
| `filter?` | `object` | Filter for querying collections. |
| `sortBy?` | `string` | Field to sort collection by. |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`ProgressMessagesCollection`](../interfaces/ProgressMessagesCollection.md)\>\>

#### Defined in

[api.ts:2742](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L2742)

___

### listOrders

▸ **listOrders**(`limit?`, `offset?`, `filter?`, `sortBy?`, `options?`): `Promise`<`AxiosResponse`<[`OrdersCollection`](../interfaces/OrdersCollection.md)\>\>

Gets a list of orders associated with the logged in user.

**`Summary`**

Get a list of orders

**`Throws`**

**`Memberof`**

OrderApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `limit?` | `number` | The numbers of items to return per page. |
| `offset?` | `number` | The number of items to skip before starting to collect the result set. |
| `filter?` | `object` | Filter for querying collections. |
| `sortBy?` | `string` | Field to sort collection by. |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`OrdersCollection`](../interfaces/OrdersCollection.md)\>\>

#### Defined in

[api.ts:2757](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L2757)

___

### restoreOrder

▸ **restoreOrder**(`id`, `restoreKey`, `options?`): `Promise`<`AxiosResponse`<[`Order`](../interfaces/Order.md)\>\>

Restores the order specified by the order ID.

**`Summary`**

Restore specific Order

**`Throws`**

**`Memberof`**

OrderApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | ID of the resource |
| `restoreKey` | [`RestoreKey`](../interfaces/RestoreKey.md) |  |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`Order`](../interfaces/Order.md)\>\>

#### Defined in

[api.ts:2770](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L2770)

___

### showOrder

▸ **showOrder**(`id`, `options?`): `Promise`<`AxiosResponse`<[`Order`](../interfaces/Order.md)\>\>

Get a specific order based on the order ID

**`Summary`**

Get a specific order

**`Throws`**

**`Memberof`**

OrderApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | ID of the resource |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`Order`](../interfaces/Order.md)\>\>

#### Defined in

[api.ts:2782](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L2782)

___

### showOrderItemFromOrder

▸ **showOrderItemFromOrder**(`orderId`, `id`, `options?`): `Promise`<`AxiosResponse`<[`OrderItem`](../interfaces/OrderItem.md)\>\>

Gets an order item associated with an order.

**`Summary`**

Gets an individual order item from a given order

**`Throws`**

**`Memberof`**

OrderApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `orderId` | `string` | The Order ID |
| `id` | `string` | ID of the resource |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`OrderItem`](../interfaces/OrderItem.md)\>\>

#### Defined in

[api.ts:2795](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L2795)

___

### submitOrder

▸ **submitOrder**(`orderId`, `options?`): `Promise`<`AxiosResponse`<[`Order`](../interfaces/Order.md)\>\>

Returns an updated order.

**`Summary`**

Submit a given order

**`Throws`**

**`Memberof`**

OrderApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `orderId` | `string` | The Order ID |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`Order`](../interfaces/Order.md)\>\>

#### Defined in

[api.ts:2807](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L2807)
