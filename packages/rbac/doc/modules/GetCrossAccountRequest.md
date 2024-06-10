[@redhat-cloud-services/javascript-clients](../README.md) / [Exports](../modules.md) / GetCrossAccountRequest

# Module: GetCrossAccountRequest

## Table of contents

### References

- [default](GetCrossAccountRequest.md#default)

### Enumerations

- [GetCrossAccountRequestApprovedOnlyEnum](../enums/GetCrossAccountRequest.GetCrossAccountRequestApprovedOnlyEnum.md)
- [GetCrossAccountRequestQueryByEnum](../enums/GetCrossAccountRequest.GetCrossAccountRequestQueryByEnum.md)

### Type Aliases

- [GetCrossAccountRequestParams](GetCrossAccountRequest.md#getcrossaccountrequestparams)

### Functions

- [getCrossAccountRequestParamCreator](GetCrossAccountRequest.md#getcrossaccountrequestparamcreator)

## References

### default

Renames and re-exports [getCrossAccountRequestParamCreator](GetCrossAccountRequest.md#getcrossaccountrequestparamcreator)

## Type Aliases

### GetCrossAccountRequestParams

Ƭ **GetCrossAccountRequestParams**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `account?` | `string` | Parameter for filtering resource by an account number. Value can be a comma-separated list of ids. To be used in tandem with ?query_by=user_id to further filter a user\'s requests by account number. **`Memberof`** GetCrossAccountRequestApi |
| `approvedOnly?` | [`GetCrossAccountRequestApprovedOnlyEnum`](../enums/GetCrossAccountRequest.GetCrossAccountRequestApprovedOnlyEnum.md) | Parameter for filtering resource which have been approved. **`Memberof`** GetCrossAccountRequestApi |
| `options?` | `AxiosRequestConfig` | - |
| `queryBy?` | [`GetCrossAccountRequestQueryByEnum`](../enums/GetCrossAccountRequest.GetCrossAccountRequestQueryByEnum.md) | Parameter for filtering resource by either a user\'s ID, or a client\'s org. The default value is target_org. **`Memberof`** GetCrossAccountRequestApi |
| `uuid` | `string` | ID of cross account request to get **`Memberof`** GetCrossAccountRequestApi |

#### Defined in

[GetCrossAccountRequest/index.ts:14](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/rbac/GetCrossAccountRequest/index.ts#L14)

## Functions

### getCrossAccountRequestParamCreator

▸ **getCrossAccountRequestParamCreator**(`...config`): `Promise`\<`RequestArgs`\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...config` | [[`GetCrossAccountRequestParams`](GetCrossAccountRequest.md#getcrossaccountrequestparams)] \| [`string`, [`GetCrossAccountRequestQueryByEnum`](../enums/GetCrossAccountRequest.GetCrossAccountRequestQueryByEnum.md), `string`, ``"true"``, `AxiosRequestConfig`\<`any`\>] | with all available params. |

#### Returns

`Promise`\<`RequestArgs`\>

**`Summary`**

Get a cross account request

**`Throws`**

#### Defined in

[GetCrossAccountRequest/index.ts:69](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/rbac/GetCrossAccountRequest/index.ts#L69)
