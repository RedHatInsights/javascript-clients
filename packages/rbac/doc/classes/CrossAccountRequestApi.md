[@redhat-cloud-services/rbac-client](../README.md) / [Exports](../modules.md) / CrossAccountRequestApi

# Class: CrossAccountRequestApi

CrossAccountRequestApi - object-oriented interface

**`Export`**

## Hierarchy

- `BaseAPI`

  ↳ **`CrossAccountRequestApi`**

## Table of contents

### Constructors

- [constructor](CrossAccountRequestApi.md#constructor)

### Properties

- [axios](CrossAccountRequestApi.md#axios)
- [basePath](CrossAccountRequestApi.md#basepath)
- [configuration](CrossAccountRequestApi.md#configuration)

### Methods

- [createCrossAccountRequests](CrossAccountRequestApi.md#createcrossaccountrequests)
- [getCrossAccountRequest](CrossAccountRequestApi.md#getcrossaccountrequest)
- [listCrossAccountRequests](CrossAccountRequestApi.md#listcrossaccountrequests)
- [patchCrossAccountRequest](CrossAccountRequestApi.md#patchcrossaccountrequest)
- [putCrossAccountRequest](CrossAccountRequestApi.md#putcrossaccountrequest)

## Constructors

### constructor

• **new CrossAccountRequestApi**(`configuration?`, `basePath?`, `axios?`)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `configuration?` | [`Configuration`](Configuration.md) | `undefined` |
| `basePath` | `string` | `BASE_PATH` |
| `axios` | `AxiosInstance` | `globalAxios` |

#### Inherited from

BaseAPI.constructor

#### Defined in

[base.ts:51](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/rbac/base.ts#L51)

## Properties

### axios

• `Protected` **axios**: `AxiosInstance` = `globalAxios`

#### Inherited from

BaseAPI.axios

#### Defined in

[base.ts:51](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/rbac/base.ts#L51)

___

### basePath

• `Protected` **basePath**: `string` = `BASE_PATH`

#### Inherited from

BaseAPI.basePath

#### Defined in

[base.ts:51](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/rbac/base.ts#L51)

___

### configuration

• `Protected` **configuration**: [`Configuration`](Configuration.md)

#### Inherited from

BaseAPI.configuration

#### Defined in

[base.ts:49](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/rbac/base.ts#L49)

## Methods

### createCrossAccountRequests

▸ **createCrossAccountRequests**(`crossAccountRequestIn`, `options?`): `Promise`<`AxiosResponse`<[`CrossAccountRequestOut`](../interfaces/CrossAccountRequestOut.md), `any`\>\>

**`Summary`**

Create a cross account request

**`Throws`**

**`Memberof`**

CrossAccountRequestApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `crossAccountRequestIn` | [`CrossAccountRequestIn`](../interfaces/CrossAccountRequestIn.md) | CrossAccountRequest to create |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`CrossAccountRequestOut`](../interfaces/CrossAccountRequestOut.md), `any`\>\>

#### Defined in

[api.ts:2988](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/rbac/api.ts#L2988)

___

### getCrossAccountRequest

▸ **getCrossAccountRequest**(`uuid`, `queryBy?`, `account?`, `approvedOnly?`, `options?`): `Promise`<`AxiosResponse`<[`CrossAccountRequestDetail`](../modules.md#crossaccountrequestdetail), `any`\>\>

**`Summary`**

Get a cross account request

**`Throws`**

**`Memberof`**

CrossAccountRequestApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `uuid` | `string` | ID of cross account request to get |
| `queryBy?` | ``"user_id"`` \| ``"target_org"`` | Parameter for filtering resource by either a user\&#39;s ID, or a client\&#39;s org. The default value is target_org. |
| `account?` | `string` | Parameter for filtering resource by an account number. Value can be a comma-separated list of ids. To be used in tandem with ?query_by&#x3D;user_id to further filter a user\&#39;s requests by account number. |
| `approvedOnly?` | ``"true"`` | Parameter for filtering resource which have been approved. |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`CrossAccountRequestDetail`](../modules.md#crossaccountrequestdetail), `any`\>\>

#### Defined in

[api.ts:3003](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/rbac/api.ts#L3003)

___

### listCrossAccountRequests

▸ **listCrossAccountRequests**(`limit?`, `offset?`, `queryBy?`, `account?`, `orgId?`, `approvedOnly?`, `status?`, `orderBy?`, `options?`): `Promise`<`AxiosResponse`<[`CrossAccountRequestPagination`](../interfaces/CrossAccountRequestPagination.md), `any`\>\>

By default, responses are sorted in ascending order by created_at

**`Summary`**

List the cross account requests for a user or account

**`Throws`**

**`Memberof`**

CrossAccountRequestApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `limit?` | `number` | Parameter for selecting the amount of data returned. |
| `offset?` | `number` | Parameter for selecting the offset of data. |
| `queryBy?` | ``"user_id"`` \| ``"target_org"`` | Parameter for filtering resource by either a user\&#39;s ID, or a client\&#39;s org. The default value is target_org. |
| `account?` | `string` | Parameter for filtering resource by an account number. Value can be a comma-separated list of ids. To be used in tandem with ?query_by&#x3D;user_id to further filter a user\&#39;s requests by account number. |
| `orgId?` | `string` | Parameter for filtering resource by an org id. Value can be a comma-separated list of ids. To be used in tandem with ?query_by&#x3D;user_id to further filter a user\&#39;s requests by org id. |
| `approvedOnly?` | ``"true"`` | Parameter for filtering resource which have been approved. |
| `status?` | ``"pending"`` \| ``"expired"`` \| ``"denied"`` \| ``"approved"`` \| ``"cancelled"`` | Parameter for filtering resource based on status. |
| `orderBy?` | ``"status"`` \| ``"request_id"`` \| ``"start_date"`` \| ``"end_date"`` \| ``"created"`` \| ``"modified"`` | Parameter for ordering by field. For inverse ordering, use \&#39;-\&#39;, e.g. ?order_by&#x3D;-start_date. |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`CrossAccountRequestPagination`](../interfaces/CrossAccountRequestPagination.md), `any`\>\>

#### Defined in

[api.ts:3022](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/rbac/api.ts#L3022)

___

### patchCrossAccountRequest

▸ **patchCrossAccountRequest**(`uuid`, `crossAccountRequestPatch`, `options?`): `Promise`<`AxiosResponse`<[`CrossAccountRequestDetail`](../modules.md#crossaccountrequestdetail), `any`\>\>

Patch the start_date/end_date/roles of an existing request. Could be used by TAM requestor to cancel request or target account admin to approve/deny request.

**`Summary`**

Patch a cross account request

**`Throws`**

**`Memberof`**

CrossAccountRequestApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `uuid` | `string` | ID of cross account request to get |
| `crossAccountRequestPatch` | [`CrossAccountRequestPatch`](../interfaces/CrossAccountRequestPatch.md) | Updates to CrossAccountRequest |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`CrossAccountRequestDetail`](../modules.md#crossaccountrequestdetail), `any`\>\>

#### Defined in

[api.ts:3035](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/rbac/api.ts#L3035)

___

### putCrossAccountRequest

▸ **putCrossAccountRequest**(`uuid`, `crossAccountRequestUpdateIn`, `options?`): `Promise`<`AxiosResponse`<[`CrossAccountRequestDetail`](../modules.md#crossaccountrequestdetail), `any`\>\>

For TAM requestor to update the start_date/end_date/roles of an existing cross account request.

**`Summary`**

Update a cross account request

**`Throws`**

**`Memberof`**

CrossAccountRequestApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `uuid` | `string` | ID of cross account request to get |
| `crossAccountRequestUpdateIn` | [`CrossAccountRequestUpdateIn`](../interfaces/CrossAccountRequestUpdateIn.md) | Updates to CrossAccountRequest |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`CrossAccountRequestDetail`](../modules.md#crossaccountrequestdetail), `any`\>\>

#### Defined in

[api.ts:3048](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/rbac/api.ts#L3048)
