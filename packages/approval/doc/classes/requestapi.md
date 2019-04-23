[@redhat-cloud-services/approval-client](../README.md) > [RequestApi](../classes/requestapi.md)

# Class: RequestApi

RequestApi - object-oriented interface

*__export__*: 

*__class__*: RequestApi

*__extends__*: {BaseAPI}

## Hierarchy

 [BaseAPI](baseapi.md)

**↳ RequestApi**

## Index

### Constructors

* [constructor](requestapi.md#constructor)

### Properties

* [axios](requestapi.md#axios)
* [basePath](requestapi.md#basepath)
* [configuration](requestapi.md#configuration)

### Methods

* [createRequest](requestapi.md#createrequest)
* [listRequests](requestapi.md#listrequests)
* [listRequestsByWorkflow](requestapi.md#listrequestsbyworkflow)
* [showRequest](requestapi.md#showrequest)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new RequestApi**(configuration?: *[Configuration](configuration.md)*, basePath?: *`string`*, axios?: *`AxiosInstance`*): [RequestApi](requestapi.md)

*Inherited from [BaseAPI](baseapi.md).[constructor](baseapi.md#constructor)*

*Defined in [api.ts:49](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L49)*

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| `Optional` configuration | [Configuration](configuration.md) | - |
| `Default value` basePath | `string` |  BASE_PATH |
| `Default value` axios | `AxiosInstance` |  globalAxios |

**Returns:** [RequestApi](requestapi.md)

___

## Properties

<a id="axios"></a>

### `<Protected>` axios

**● axios**: *`AxiosInstance`*

*Inherited from [BaseAPI](baseapi.md).[axios](baseapi.md#axios)*

*Defined in [api.ts:51](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L51)*

___
<a id="basepath"></a>

### `<Protected>` basePath

**● basePath**: *`string`*

*Inherited from [BaseAPI](baseapi.md).[basePath](baseapi.md#basepath)*

*Defined in [api.ts:51](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L51)*

___
<a id="configuration"></a>

### `<Protected>` configuration

**● configuration**: *[Configuration](configuration.md) \| `undefined`*

*Inherited from [BaseAPI](baseapi.md).[configuration](baseapi.md#configuration)*

*Defined in [api.ts:49](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L49)*

___

## Methods

<a id="createrequest"></a>

###  createRequest

▸ **createRequest**(workflowId: *`string`*, requestIn: *[RequestIn](../interfaces/requestin.md)*, options?: *`any`*): `AxiosPromise`<[RequestOut](../modules/requestout.md)>

*Defined in [api.ts:1279](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L1279)*

Add an approval request by given parameters

*__summary__*: Add an approval request by given parameters

*__throws__*: {RequiredError}

*__memberof__*: RequestApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| workflowId | `string` |  Id of workflow |
| requestIn | [RequestIn](../interfaces/requestin.md) |  Parameters need to create a request |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[RequestOut](../modules/requestout.md)>

___
<a id="listrequests"></a>

###  listRequests

▸ **listRequests**(decision?: *`Array`<"undecided" \| "approved" \| "denied">*, state?: *`Array`<"pending" \| "skipped" \| "notified" \| "finished">*, requester?: *`string`*, limit?: *`number`*, offset?: *`number`*, options?: *`any`*): `AxiosPromise`<[RequestOutCollection](../interfaces/requestoutcollection.md)>

*Defined in [api.ts:1295](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L1295)*

Return an array of requests

*__summary__*: Return an array of approval requests

*__throws__*: {RequiredError}

*__memberof__*: RequestApi

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` decision | `Array`<"undecided" \| "approved" \| "denied"> |
| `Optional` state | `Array`<"pending" \| "skipped" \| "notified" \| "finished"> |
| `Optional` requester | `string` |
| `Optional` limit | `number` |
| `Optional` offset | `number` |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[RequestOutCollection](../interfaces/requestoutcollection.md)>

___
<a id="listrequestsbyworkflow"></a>

###  listRequestsByWorkflow

▸ **listRequestsByWorkflow**(workflowId: *`string`*, limit?: *`number`*, offset?: *`number`*, options?: *`any`*): `AxiosPromise`<[RequestOutCollection](../interfaces/requestoutcollection.md)>

*Defined in [api.ts:1309](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L1309)*

Return approval requests by given workflow id

*__summary__*: Return approval requests by given workflow id

*__throws__*: {RequiredError}

*__memberof__*: RequestApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| workflowId | `string` |  Id of workflow |
| `Optional` limit | `number` |
| `Optional` offset | `number` |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[RequestOutCollection](../interfaces/requestoutcollection.md)>

___
<a id="showrequest"></a>

###  showRequest

▸ **showRequest**(id: *`string`*, options?: *`any`*): `AxiosPromise`<[RequestOut](../modules/requestout.md)>

*Defined in [api.ts:1321](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L1321)*

Return an approval request by given id

*__summary__*: Return an approval request by given id

*__throws__*: {RequiredError}

*__memberof__*: RequestApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  Query by id |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[RequestOut](../modules/requestout.md)>

___

