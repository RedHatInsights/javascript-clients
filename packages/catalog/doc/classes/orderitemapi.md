[@redhat-cloud-services/catalog-client](../README.md) > [OrderItemApi](../classes/orderitemapi.md)

# Class: OrderItemApi

OrderItemApi - object-oriented interface

*__export__*: 

*__class__*: OrderItemApi

*__extends__*: {BaseAPI}

## Hierarchy

 [BaseAPI](baseapi.md)

**↳ OrderItemApi**

## Index

### Constructors

* [constructor](orderitemapi.md#constructor)

### Properties

* [axios](orderitemapi.md#axios)
* [basePath](orderitemapi.md#basepath)
* [configuration](orderitemapi.md#configuration)

### Methods

* [destroyOrderItem](orderitemapi.md#destroyorderitem)
* [listApprovalRequests](orderitemapi.md#listapprovalrequests)
* [listOrderItems](orderitemapi.md#listorderitems)
* [listProgressMessages](orderitemapi.md#listprogressmessages)
* [restoreOrderItem](orderitemapi.md#restoreorderitem)
* [showOrderItem](orderitemapi.md#showorderitem)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new OrderItemApi**(configuration?: *[Configuration](configuration.md)*, basePath?: *`string`*, axios?: *`AxiosInstance`*): [OrderItemApi](orderitemapi.md)

*Inherited from [BaseAPI](baseapi.md).[constructor](baseapi.md#constructor)*

*Defined in [api.ts:49](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L49)*

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| `Optional` configuration | [Configuration](configuration.md) | - |
| `Default value` basePath | `string` |  BASE_PATH |
| `Default value` axios | `AxiosInstance` |  globalAxios |

**Returns:** [OrderItemApi](orderitemapi.md)

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

<a id="destroyorderitem"></a>

###  destroyOrderItem

▸ **destroyOrderItem**(id: *`string`*, options?: *`any`*): `AxiosPromise`<[RestoreKey](../interfaces/restorekey.md)>

*Defined in [api.ts:3189](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L3189)*

Deletes the order item based on order item ID passed

*__summary__*: Delete an existing OrderItem

*__throws__*: {RequiredError}

*__memberof__*: OrderItemApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  ID of the resource |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[RestoreKey](../interfaces/restorekey.md)>

___
<a id="listapprovalrequests"></a>

###  listApprovalRequests

▸ **listApprovalRequests**(orderItemId: *`string`*, limit?: *`number`*, offset?: *`number`*, filter?: *`any`*, options?: *`any`*): `AxiosPromise`<[ApprovalRequestsCollection](../interfaces/approvalrequestscollection.md)>

*Defined in [api.ts:3204](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L3204)*

Gets a list of approval request associated with an order item. As the item is being approved one can check the status of the approvals.

*__summary__*: Gets a list of approval requests for an item

*__throws__*: {RequiredError}

*__memberof__*: OrderItemApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| orderItemId | `string` |  The Order Item ID |
| `Optional` limit | `number` |
| `Optional` offset | `number` |
| `Optional` filter | `any` |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[ApprovalRequestsCollection](../interfaces/approvalrequestscollection.md)>

___
<a id="listorderitems"></a>

###  listOrderItems

▸ **listOrderItems**(limit?: *`number`*, offset?: *`number`*, filter?: *`any`*, options?: *`any`*): `AxiosPromise`<[OrderItemsCollection](../interfaces/orderitemscollection.md)>

*Defined in [api.ts:3218](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L3218)*

Gets a list of order items.

*__summary__*: List Order Items

*__throws__*: {RequiredError}

*__memberof__*: OrderItemApi

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` limit | `number` |
| `Optional` offset | `number` |
| `Optional` filter | `any` |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[OrderItemsCollection](../interfaces/orderitemscollection.md)>

___
<a id="listprogressmessages"></a>

###  listProgressMessages

▸ **listProgressMessages**(orderItemId: *`string`*, limit?: *`number`*, offset?: *`number`*, filter?: *`any`*, options?: *`any`*): `AxiosPromise`<[ProgressMessagesCollection](../interfaces/progressmessagescollection.md)>

*Defined in [api.ts:3233](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L3233)*

Gets a list of progress messages associated with an order item. As the item is being processed the provider can update the progress messages.

*__summary__*: Gets a list of progress messages in an item

*__throws__*: {RequiredError}

*__memberof__*: OrderItemApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| orderItemId | `string` |  The Order Item ID |
| `Optional` limit | `number` |
| `Optional` offset | `number` |
| `Optional` filter | `any` |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[ProgressMessagesCollection](../interfaces/progressmessagescollection.md)>

___
<a id="restoreorderitem"></a>

###  restoreOrderItem

▸ **restoreOrderItem**(id: *`string`*, restoreKey: *[RestoreKey](../interfaces/restorekey.md)*, options?: *`any`*): `AxiosPromise`<[OrderItem](../modules/orderitem.md)>

*Defined in [api.ts:3246](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L3246)*

Restores the order item specified by the order item ID.

*__summary__*: Restore specific Order item

*__throws__*: {RequiredError}

*__memberof__*: OrderItemApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  ID of the resource |
| restoreKey | [RestoreKey](../interfaces/restorekey.md) |  \- |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[OrderItem](../modules/orderitem.md)>

___
<a id="showorderitem"></a>

###  showOrderItem

▸ **showOrderItem**(id: *`string`*, options?: *`any`*): `AxiosPromise`<[OrderItem](../modules/orderitem.md)>

*Defined in [api.ts:3258](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L3258)*

Gets a specific order item based on the order item ID passed

*__summary__*: Gets a specific order item

*__throws__*: {RequiredError}

*__memberof__*: OrderItemApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  ID of the resource |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[OrderItem](../modules/orderitem.md)>

___

