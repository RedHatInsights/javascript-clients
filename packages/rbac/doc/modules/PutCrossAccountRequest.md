[@redhat-cloud-services/javascript-clients](../README.md) / [Exports](../modules.md) / PutCrossAccountRequest

# Module: PutCrossAccountRequest

## Table of contents

### References

- [default](PutCrossAccountRequest.md#default)

### Type Aliases

- [PutCrossAccountRequestParams](PutCrossAccountRequest.md#putcrossaccountrequestparams)

### Functions

- [putCrossAccountRequestParamCreator](PutCrossAccountRequest.md#putcrossaccountrequestparamcreator)

## References

### default

Renames and re-exports [putCrossAccountRequestParamCreator](PutCrossAccountRequest.md#putcrossaccountrequestparamcreator)

## Type Aliases

### PutCrossAccountRequestParams

Ƭ **PutCrossAccountRequestParams**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `crossAccountRequestUpdateIn` | [`CrossAccountRequestUpdateIn`](../interfaces/types.CrossAccountRequestUpdateIn.md) | Updates to CrossAccountRequest **`Memberof`** PutCrossAccountRequestApi |
| `options?` | `AxiosRequestConfig` | - |
| `uuid` | `string` | ID of cross account request to get **`Memberof`** PutCrossAccountRequestApi |

#### Defined in

[PutCrossAccountRequest/index.ts:14](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/rbac/PutCrossAccountRequest/index.ts#L14)

## Functions

### putCrossAccountRequestParamCreator

▸ **putCrossAccountRequestParamCreator**(`...config`): `Promise`\<`RequestArgs`\>

For TAM requestor to update the start_date/end_date/roles of an existing cross account request.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...config` | [[`PutCrossAccountRequestParams`](PutCrossAccountRequest.md#putcrossaccountrequestparams)] \| [`string`, [`CrossAccountRequestUpdateIn`](../interfaces/types.CrossAccountRequestUpdateIn.md), `AxiosRequestConfig`\<`any`\>] | with all available params. |

#### Returns

`Promise`\<`RequestArgs`\>

**`Summary`**

Update a cross account request

**`Throws`**

#### Defined in

[PutCrossAccountRequest/index.ts:40](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/rbac/PutCrossAccountRequest/index.ts#L40)
