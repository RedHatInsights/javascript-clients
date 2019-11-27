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
* [listRequestsByRequest](requestapi.md#listrequestsbyrequest)
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

▸ **createRequest**(requestIn: *[RequestIn](../interfaces/requestin.md)*, options?: *`any`*): `AxiosPromise`<[Request](../modules/request.md)>

*Defined in [api.ts:1361](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L1361)*

Add an approval request by given parameters, available to anyone

*__summary__*: Add an approval request by given parameters

*__throws__*: {RequiredError}

*__memberof__*: RequestApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| requestIn | [RequestIn](../interfaces/requestin.md) |  Parameters need to create a request |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[Request](../modules/request.md)>

___
<a id="listrequests"></a>

###  listRequests

▸ **listRequests**(xRhPersona?: *"approval/admin" \| "approval/approver" \| "approval/requester"*, limit?: *`number`*, offset?: *`number`*, filter?: *`any`*, options?: *`any`*): `AxiosPromise`<[RequestCollection](../interfaces/requestcollection.md)>

*Defined in [api.ts:1376](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L1376)*

The result depends on the x-rh-persona header (approval/admin, approval/requseter, or approval/approver). Program generated child requests are not included.

*__summary__*: Return an array of requester made approval requests, available to anyone

*__throws__*: {RequiredError}

*__memberof__*: RequestApi

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` xRhPersona | "approval/admin" \| "approval/approver" \| "approval/requester" |
| `Optional` limit | `number` |
| `Optional` offset | `number` |
| `Optional` filter | `any` |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[RequestCollection](../interfaces/requestcollection.md)>

___
<a id="listrequestsbyrequest"></a>

###  listRequestsByRequest

▸ **listRequestsByRequest**(requestId: *`string`*, options?: *`any`*): `AxiosPromise`<[RequestCollection](../interfaces/requestcollection.md)>

*Defined in [api.ts:1388](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L1388)*

Return an array of child requests of a given request id, available for admin/requester

*__summary__*: Return an array of child requests of a given request id

*__throws__*: {RequiredError}

*__memberof__*: RequestApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| requestId | `string` |  Id of request |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[RequestCollection](../interfaces/requestcollection.md)>

___
<a id="showrequest"></a>

###  showRequest

▸ **showRequest**(id: *`string`*, options?: *`any`*): `AxiosPromise`<[Request](../modules/request.md)>

*Defined in [api.ts:1400](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L1400)*

Return an approval request by given id, available to anyone who can access the request

*__summary__*: Return an approval request by given id

*__throws__*: {RequiredError}

*__memberof__*: RequestApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  Query by id |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[Request](../modules/request.md)>

___

