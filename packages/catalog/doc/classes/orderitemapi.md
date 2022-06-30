[@redhat-cloud-services/catalog-client](../README.md) › [Globals](../globals.md) › [OrderItemApi](orderitemapi.md)

# Class: OrderItemApi

OrderItemApi - object-oriented interface

**`export`** 

## Hierarchy

* [BaseAPI](baseapi.md)

  ↳ **OrderItemApi**

## Index

### Constructors

* [constructor](orderitemapi.md#constructor)

### Properties

* [axios](orderitemapi.md#protected-axios)
* [basePath](orderitemapi.md#protected-basepath)
* [configuration](orderitemapi.md#protected-configuration)

### Methods

* [destroyOrderItem](orderitemapi.md#destroyorderitem)
* [listApprovalRequests](orderitemapi.md#listapprovalrequests)
* [listOrderItemProgressMessages](orderitemapi.md#listorderitemprogressmessages)
* [listOrderItems](orderitemapi.md#listorderitems)
* [restoreOrderItem](orderitemapi.md#restoreorderitem)
* [showOrderItem](orderitemapi.md#showorderitem)

## Constructors

###  constructor

\+ **new OrderItemApi**(`configuration?`: [Configuration](configuration.md), `basePath`: string, `axios`: AxiosInstance): *[OrderItemApi](orderitemapi.md)*

*Inherited from [BaseAPI](baseapi.md).[constructor](baseapi.md#constructor)*

*Defined in [base.ts:49](https://github.com/RedHatInsights/javascript-clients.gi/blob/master/packages/catalog/base.ts#L49)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`configuration?` | [Configuration](configuration.md) | - |
`basePath` | string | BASE_PATH |
`axios` | AxiosInstance | globalAxios |

**Returns:** *[OrderItemApi](orderitemapi.md)*

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

###  destroyOrderItem

▸ **destroyOrderItem**(`id`: string, `options?`: any): *Promise‹AxiosResponse‹[RestoreKey](../interfaces/restorekey.md)››*

*Defined in [api.ts:3339](https://github.com/RedHatInsights/javascript-clients.gi/blob/master/packages/catalog/api.ts#L3339)*

Deletes the order item  based on order item ID passed

**`summary`** Delete an existing OrderItem

**`throws`** {RequiredError}

**`memberof`** OrderItemApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | ID of the resource |
`options?` | any | - |

**Returns:** *Promise‹AxiosResponse‹[RestoreKey](../interfaces/restorekey.md)››*

___

###  listApprovalRequests

▸ **listApprovalRequests**(`orderItemId`: string, `limit?`: number, `offset?`: number, `filter?`: object, `sortBy?`: string, `options?`: any): *Promise‹AxiosResponse‹[ApprovalRequestsCollection](../interfaces/approvalrequestscollection.md)››*

*Defined in [api.ts:3355](https://github.com/RedHatInsights/javascript-clients.gi/blob/master/packages/catalog/api.ts#L3355)*

Gets a list of approval request associated with an order item. As the item is being approved one can check the status of the approvals.

**`summary`** Gets a list of approval requests for an item

**`throws`** {RequiredError}

**`memberof`** OrderItemApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`orderItemId` | string | The Order Item ID |
`limit?` | number | - |
`offset?` | number | - |
`filter?` | object | - |
`sortBy?` | string | - |
`options?` | any | - |

**Returns:** *Promise‹AxiosResponse‹[ApprovalRequestsCollection](../interfaces/approvalrequestscollection.md)››*

___

###  listOrderItemProgressMessages

▸ **listOrderItemProgressMessages**(`orderItemId`: string, `limit?`: number, `offset?`: number, `filter?`: object, `sortBy?`: string, `options?`: any): *Promise‹AxiosResponse‹[ProgressMessagesCollection](../interfaces/progressmessagescollection.md)››*

*Defined in [api.ts:3371](https://github.com/RedHatInsights/javascript-clients.gi/blob/master/packages/catalog/api.ts#L3371)*

Gets a list of progress messages associated with an order item. As the item is being processed the provider can update the progress messages.

**`summary`** Gets a list of progress messages in an item

**`throws`** {RequiredError}

**`memberof`** OrderItemApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`orderItemId` | string | The Order Item ID |
`limit?` | number | - |
`offset?` | number | - |
`filter?` | object | - |
`sortBy?` | string | - |
`options?` | any | - |

**Returns:** *Promise‹AxiosResponse‹[ProgressMessagesCollection](../interfaces/progressmessagescollection.md)››*

___

###  listOrderItems

▸ **listOrderItems**(`limit?`: number, `offset?`: number, `filter?`: object, `sortBy?`: string, `options?`: any): *Promise‹AxiosResponse‹[OrderItemsCollection](../interfaces/orderitemscollection.md)››*

*Defined in [api.ts:3386](https://github.com/RedHatInsights/javascript-clients.gi/blob/master/packages/catalog/api.ts#L3386)*

Gets a list of order items.

**`summary`** List Order Items

**`throws`** {RequiredError}

**`memberof`** OrderItemApi

**Parameters:**

Name | Type |
------ | ------ |
`limit?` | number |
`offset?` | number |
`filter?` | object |
`sortBy?` | string |
`options?` | any |

**Returns:** *Promise‹AxiosResponse‹[OrderItemsCollection](../interfaces/orderitemscollection.md)››*

___

###  restoreOrderItem

▸ **restoreOrderItem**(`id`: string, `restoreKey`: [RestoreKey](../interfaces/restorekey.md), `options?`: any): *Promise‹AxiosResponse‹[OrderItem](../interfaces/orderitem.md)››*

*Defined in [api.ts:3399](https://github.com/RedHatInsights/javascript-clients.gi/blob/master/packages/catalog/api.ts#L3399)*

Restores the order item specified by the order item ID.

**`summary`** Restore specific Order item

**`throws`** {RequiredError}

**`memberof`** OrderItemApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | ID of the resource |
`restoreKey` | [RestoreKey](../interfaces/restorekey.md) | - |
`options?` | any | - |

**Returns:** *Promise‹AxiosResponse‹[OrderItem](../interfaces/orderitem.md)››*

___

###  showOrderItem

▸ **showOrderItem**(`id`: string, `options?`: any): *Promise‹AxiosResponse‹[OrderItem](../interfaces/orderitem.md)››*

*Defined in [api.ts:3411](https://github.com/RedHatInsights/javascript-clients.gi/blob/master/packages/catalog/api.ts#L3411)*

Gets a specific order item based on the order item ID passed

**`summary`** Gets a specific order item

**`throws`** {RequiredError}

**`memberof`** OrderItemApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | ID of the resource |
`options?` | any | - |

**Returns:** *Promise‹AxiosResponse‹[OrderItem](../interfaces/orderitem.md)››*
