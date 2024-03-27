[@redhat-cloud-services/catalog-client](../README.md) / [Exports](../modules.md) / OrderItemApi

# Class: OrderItemApi

OrderItemApi - object-oriented interface

**`Export`**

## Hierarchy

- `BaseAPI`

  ↳ **`OrderItemApi`**

## Table of contents

### Constructors

- [constructor](OrderItemApi.md#constructor)

### Properties

- [axios](OrderItemApi.md#axios)
- [basePath](OrderItemApi.md#basepath)
- [configuration](OrderItemApi.md#configuration)

### Methods

- [destroyOrderItem](OrderItemApi.md#destroyorderitem)
- [listApprovalRequests](OrderItemApi.md#listapprovalrequests)
- [listOrderItemProgressMessages](OrderItemApi.md#listorderitemprogressmessages)
- [listOrderItems](OrderItemApi.md#listorderitems)
- [restoreOrderItem](OrderItemApi.md#restoreorderitem)
- [showOrderItem](OrderItemApi.md#showorderitem)

## Constructors

### constructor

• **new OrderItemApi**(`configuration?`, `basePath?`, `axios?`)

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

• `Protected` **configuration**: `undefined` \| [`Configuration`](Configuration.md)

#### Inherited from

BaseAPI.configuration

#### Defined in

[base.ts:49](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/base.ts#L49)

## Methods

### destroyOrderItem

▸ **destroyOrderItem**(`id`, `options?`): `Promise`<`AxiosResponse`<[`RestoreKey`](../interfaces/RestoreKey.md), `any`\>\>

Deletes the order item  based on order item ID passed

**`Summary`**

Delete an existing OrderItem

**`Throws`**

**`Memberof`**

OrderItemApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | ID of the resource |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`RestoreKey`](../interfaces/RestoreKey.md), `any`\>\>

#### Defined in

[api.ts:3339](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L3339)

___

### listApprovalRequests

▸ **listApprovalRequests**(`orderItemId`, `limit?`, `offset?`, `filter?`, `sortBy?`, `options?`): `Promise`<`AxiosResponse`<[`ApprovalRequestsCollection`](../interfaces/ApprovalRequestsCollection.md), `any`\>\>

Gets a list of approval request associated with an order item. As the item is being approved one can check the status of the approvals.

**`Summary`**

Gets a list of approval requests for an item

**`Throws`**

**`Memberof`**

OrderItemApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `orderItemId` | `string` | The Order Item ID |
| `limit?` | `number` | The numbers of items to return per page. |
| `offset?` | `number` | The number of items to skip before starting to collect the result set. |
| `filter?` | `object` | Filter for querying collections. |
| `sortBy?` | `string` | Field to sort collection by. |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`ApprovalRequestsCollection`](../interfaces/ApprovalRequestsCollection.md), `any`\>\>

#### Defined in

[api.ts:3355](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L3355)

___

### listOrderItemProgressMessages

▸ **listOrderItemProgressMessages**(`orderItemId`, `limit?`, `offset?`, `filter?`, `sortBy?`, `options?`): `Promise`<`AxiosResponse`<[`ProgressMessagesCollection`](../interfaces/ProgressMessagesCollection.md), `any`\>\>

Gets a list of progress messages associated with an order item. As the item is being processed the provider can update the progress messages.

**`Summary`**

Gets a list of progress messages in an item

**`Throws`**

**`Memberof`**

OrderItemApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `orderItemId` | `string` | The Order Item ID |
| `limit?` | `number` | The numbers of items to return per page. |
| `offset?` | `number` | The number of items to skip before starting to collect the result set. |
| `filter?` | `object` | Filter for querying collections. |
| `sortBy?` | `string` | Field to sort collection by. |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`ProgressMessagesCollection`](../interfaces/ProgressMessagesCollection.md), `any`\>\>

#### Defined in

[api.ts:3371](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L3371)

___

### listOrderItems

▸ **listOrderItems**(`limit?`, `offset?`, `filter?`, `sortBy?`, `options?`): `Promise`<`AxiosResponse`<[`OrderItemsCollection`](../interfaces/OrderItemsCollection.md), `any`\>\>

Gets a list of order items.

**`Summary`**

List Order Items

**`Throws`**

**`Memberof`**

OrderItemApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `limit?` | `number` | The numbers of items to return per page. |
| `offset?` | `number` | The number of items to skip before starting to collect the result set. |
| `filter?` | `object` | Filter for querying collections. |
| `sortBy?` | `string` | Field to sort collection by. |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`OrderItemsCollection`](../interfaces/OrderItemsCollection.md), `any`\>\>

#### Defined in

[api.ts:3386](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L3386)

___

### restoreOrderItem

▸ **restoreOrderItem**(`id`, `restoreKey`, `options?`): `Promise`<`AxiosResponse`<[`OrderItem`](../interfaces/OrderItem.md), `any`\>\>

Restores the order item specified by the order item ID.

**`Summary`**

Restore specific Order item

**`Throws`**

**`Memberof`**

OrderItemApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | ID of the resource |
| `restoreKey` | [`RestoreKey`](../interfaces/RestoreKey.md) |  |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`OrderItem`](../interfaces/OrderItem.md), `any`\>\>

#### Defined in

[api.ts:3399](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L3399)

___

### showOrderItem

▸ **showOrderItem**(`id`, `options?`): `Promise`<`AxiosResponse`<[`OrderItem`](../interfaces/OrderItem.md), `any`\>\>

Gets a specific order item based on the order item ID passed

**`Summary`**

Gets a specific order item

**`Throws`**

**`Memberof`**

OrderItemApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | ID of the resource |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`OrderItem`](../interfaces/OrderItem.md), `any`\>\>

#### Defined in

[api.ts:3411](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L3411)
