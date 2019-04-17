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

* [listApprovalRequests](orderitemapi.md#listapprovalrequests)
* [listProgressMessages](orderitemapi.md#listprogressmessages)

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

<a id="listapprovalrequests"></a>

###  listApprovalRequests

▸ **listApprovalRequests**(orderItemId: *`string`*, limit?: *`number`*, offset?: *`number`*, options?: *`any`*): `AxiosPromise`<[ApprovalRequestsCollection](../interfaces/approvalrequestscollection.md)>

*Defined in [api.ts:1569](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L1569)*

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
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[ApprovalRequestsCollection](../interfaces/approvalrequestscollection.md)>

___
<a id="listprogressmessages"></a>

###  listProgressMessages

▸ **listProgressMessages**(orderItemId: *`string`*, limit?: *`number`*, offset?: *`number`*, options?: *`any`*): `AxiosPromise`<[ProgressMessagesCollection](../interfaces/progressmessagescollection.md)>

*Defined in [api.ts:1583](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L1583)*

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
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[ProgressMessagesCollection](../interfaces/progressmessagescollection.md)>

___

