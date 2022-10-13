[@redhat-cloud-services/approval-client](../README.md) / [Exports](../modules.md) / RequestApi

# Class: RequestApi

RequestApi - object-oriented interface

**`Export`**

## Hierarchy

- `BaseAPI`

  ↳ **`RequestApi`**

## Table of contents

### Constructors

- [constructor](RequestApi.md#constructor)

### Properties

- [axios](RequestApi.md#axios)
- [basePath](RequestApi.md#basepath)
- [configuration](RequestApi.md#configuration)

### Methods

- [createRequest](RequestApi.md#createrequest)
- [listRequests](RequestApi.md#listrequests)
- [listRequestsByRequest](RequestApi.md#listrequestsbyrequest)
- [showRequest](RequestApi.md#showrequest)
- [showRequestContent](RequestApi.md#showrequestcontent)

## Constructors

### constructor

• **new RequestApi**(`configuration?`, `basePath?`, `axios?`)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `configuration?` | [`Configuration`](Configuration.md) | `undefined` |
| `basePath` | `string` | `BASE_PATH` |
| `axios` | `AxiosInstance` | `globalAxios` |

#### Inherited from

BaseAPI.constructor

#### Defined in

[base.ts:51](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/base.ts#L51)

## Properties

### axios

• `Protected` **axios**: `AxiosInstance` = `globalAxios`

#### Inherited from

BaseAPI.axios

#### Defined in

[base.ts:51](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/base.ts#L51)

___

### basePath

• `Protected` **basePath**: `string` = `BASE_PATH`

#### Inherited from

BaseAPI.basePath

#### Defined in

[base.ts:51](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/base.ts#L51)

___

### configuration

• `Protected` **configuration**: [`Configuration`](Configuration.md)

#### Inherited from

BaseAPI.configuration

#### Defined in

[base.ts:49](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/base.ts#L49)

## Methods

### createRequest

▸ **createRequest**(`requestIn`, `options?`): `Promise`<`AxiosResponse`<[`Request`](../interfaces/Request.md)\>\>

Create an approval request using given parameters, available to everyone

**`Summary`**

Create a new approval request

**`Throws`**

**`Memberof`**

RequestApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestIn` | [`RequestIn`](../interfaces/RequestIn.md) | Parameters needed to create a request |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`Request`](../interfaces/Request.md)\>\>

#### Defined in

[api.ts:1521](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L1521)

___

### listRequests

▸ **listRequests**(`xRhPersona?`, `limit?`, `offset?`, `filter?`, `sortBy?`, `options?`): `Promise`<`AxiosResponse`<[`RequestCollection`](../interfaces/RequestCollection.md)\>\>

The result depends on the x-rh-persona header (approval/admin, approval/requester, or approval/approver). Program generated child requests are not included.

**`Summary`**

List filtered requests, available to everyone

**`Throws`**

**`Memberof`**

RequestApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `xRhPersona?` | ``"approval/admin"`` \| ``"approval/approver"`` \| ``"approval/requester"`` | Desired persona of the current login user |
| `limit?` | `number` | Maximum number of items per page. Used by pagination |
| `offset?` | `number` | Number of items to skip before starting to collect the result set. Used by pagination |
| `filter?` | `object` | Filter for querying collections |
| `sortBy?` | `string` | Attribute used to sort a collection |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`RequestCollection`](../interfaces/RequestCollection.md)\>\>

#### Defined in

[api.ts:1537](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L1537)

___

### listRequestsByRequest

▸ **listRequestsByRequest**(`requestId`, `xRhPersona?`, `options?`): `Promise`<`AxiosResponse`<[`RequestCollection`](../interfaces/RequestCollection.md)\>\>

Find child requests based on the parent request id. The result depends on the x-rh-persona header (approval/admin, approval/requester, or approval/approver).

**`Summary`**

List filtered child requests of a request

**`Throws`**

**`Memberof`**

RequestApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestId` | `string` | ID of a request |
| `xRhPersona?` | ``"approval/admin"`` \| ``"approval/approver"`` \| ``"approval/requester"`` | Desired persona of the current login user |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`RequestCollection`](../interfaces/RequestCollection.md)\>\>

#### Defined in

[api.ts:1550](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L1550)

___

### showRequest

▸ **showRequest**(`id`, `options?`): `Promise`<`AxiosResponse`<[`Request`](../interfaces/Request.md)\>\>

Find an approval request by its id, available to anyone who can access the request

**`Summary`**

Return an approval request

**`Throws`**

**`Memberof`**

RequestApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | ID used to select a resource |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`Request`](../interfaces/Request.md)\>\>

#### Defined in

[api.ts:1562](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L1562)

___

### showRequestContent

▸ **showRequestContent**(`requestId`, `options?`): `Promise`<`AxiosResponse`<`object`\>\>

Find the request content based on a request id, available to everyone

**`Summary`**

Return the request content of a request

**`Throws`**

**`Memberof`**

RequestApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestId` | `string` | ID of a request |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<`object`\>\>

#### Defined in

[api.ts:1574](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L1574)
