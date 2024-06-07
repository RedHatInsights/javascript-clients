[@redhat-cloud-services/javascript-clients](../README.md) / [Exports](../modules.md) / ListCrossAccountRequests

# Module: ListCrossAccountRequests

## Table of contents

### References

- [default](ListCrossAccountRequests.md#default)

### Enumerations

- [ListCrossAccountRequestsApprovedOnlyEnum](../enums/ListCrossAccountRequests.ListCrossAccountRequestsApprovedOnlyEnum.md)
- [ListCrossAccountRequestsOrderByEnum](../enums/ListCrossAccountRequests.ListCrossAccountRequestsOrderByEnum.md)
- [ListCrossAccountRequestsQueryByEnum](../enums/ListCrossAccountRequests.ListCrossAccountRequestsQueryByEnum.md)
- [ListCrossAccountRequestsStatusEnum](../enums/ListCrossAccountRequests.ListCrossAccountRequestsStatusEnum.md)

### Type Aliases

- [ListCrossAccountRequestsParams](ListCrossAccountRequests.md#listcrossaccountrequestsparams)

### Functions

- [listCrossAccountRequestsParamCreator](ListCrossAccountRequests.md#listcrossaccountrequestsparamcreator)

## References

### default

Renames and re-exports [listCrossAccountRequestsParamCreator](ListCrossAccountRequests.md#listcrossaccountrequestsparamcreator)

## Type Aliases

### ListCrossAccountRequestsParams

Ƭ **ListCrossAccountRequestsParams**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `account?` | `string` | Parameter for filtering resource by an account number. Value can be a comma-separated list of ids. To be used in tandem with ?query_by=user_id to further filter a user\'s requests by account number. **`Memberof`** ListCrossAccountRequestsApi |
| `approvedOnly?` | [`ListCrossAccountRequestsApprovedOnlyEnum`](../enums/ListCrossAccountRequests.ListCrossAccountRequestsApprovedOnlyEnum.md) | Parameter for filtering resource which have been approved. **`Memberof`** ListCrossAccountRequestsApi |
| `limit?` | `number` | Parameter for selecting the amount of data returned. **`Memberof`** ListCrossAccountRequestsApi |
| `offset?` | `number` | Parameter for selecting the offset of data. **`Memberof`** ListCrossAccountRequestsApi |
| `options?` | `AxiosRequestConfig` | - |
| `orderBy?` | [`ListCrossAccountRequestsOrderByEnum`](../enums/ListCrossAccountRequests.ListCrossAccountRequestsOrderByEnum.md) | Parameter for ordering by field. For inverse ordering, use \'-\', e.g. ?order_by=-start_date. **`Memberof`** ListCrossAccountRequestsApi |
| `orgId?` | `string` | Parameter for filtering resource by an org id. Value can be a comma-separated list of ids. To be used in tandem with ?query_by=user_id to further filter a user\'s requests by org id. **`Memberof`** ListCrossAccountRequestsApi |
| `queryBy?` | [`ListCrossAccountRequestsQueryByEnum`](../enums/ListCrossAccountRequests.ListCrossAccountRequestsQueryByEnum.md) | Parameter for filtering resource by either a user\'s ID, or a client\'s org. The default value is target_org. **`Memberof`** ListCrossAccountRequestsApi |
| `status?` | [`ListCrossAccountRequestsStatusEnum`](../enums/ListCrossAccountRequests.ListCrossAccountRequestsStatusEnum.md) | Parameter for filtering resource based on status. **`Memberof`** ListCrossAccountRequestsApi |

#### Defined in

[ListCrossAccountRequests/index.ts:14](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/rbac/ListCrossAccountRequests/index.ts#L14)

## Functions

### listCrossAccountRequestsParamCreator

▸ **listCrossAccountRequestsParamCreator**(`...config`): `Promise`\<`RequestArgs`\>

By default, responses are sorted in ascending order by created_at

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...config` | [[`ListCrossAccountRequestsParams`](ListCrossAccountRequests.md#listcrossaccountrequestsparams)] \| [`number`, `number`, [`ListCrossAccountRequestsQueryByEnum`](../enums/ListCrossAccountRequests.ListCrossAccountRequestsQueryByEnum.md), `string`, `string`, ``"true"``, [`ListCrossAccountRequestsStatusEnum`](../enums/ListCrossAccountRequests.ListCrossAccountRequestsStatusEnum.md), [`ListCrossAccountRequestsOrderByEnum`](../enums/ListCrossAccountRequests.ListCrossAccountRequestsOrderByEnum.md), `AxiosRequestConfig`\<`any`\>] | with all available params. |

#### Returns

`Promise`\<`RequestArgs`\>

**`Summary`**

List the cross account requests for a user or account

**`Throws`**

#### Defined in

[ListCrossAccountRequests/index.ts:118](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/rbac/ListCrossAccountRequests/index.ts#L118)
