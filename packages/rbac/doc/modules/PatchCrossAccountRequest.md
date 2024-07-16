[@redhat-cloud-services/javascript-clients](../README.md) / [Exports](../modules.md) / PatchCrossAccountRequest

# Module: PatchCrossAccountRequest

## Table of contents

### References

- [default](PatchCrossAccountRequest.md#default)

### Type Aliases

- [PatchCrossAccountRequestParams](PatchCrossAccountRequest.md#patchcrossaccountrequestparams)

### Functions

- [patchCrossAccountRequestParamCreator](PatchCrossAccountRequest.md#patchcrossaccountrequestparamcreator)

## References

### default

Renames and re-exports [patchCrossAccountRequestParamCreator](PatchCrossAccountRequest.md#patchcrossaccountrequestparamcreator)

## Type Aliases

### PatchCrossAccountRequestParams

Ƭ **PatchCrossAccountRequestParams**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `crossAccountRequestPatch` | [`CrossAccountRequestPatch`](../interfaces/types.CrossAccountRequestPatch.md) | Updates to CrossAccountRequest **`Memberof`** PatchCrossAccountRequestApi |
| `options?` | `AxiosRequestConfig` | - |
| `uuid` | `string` | ID of cross account request to get **`Memberof`** PatchCrossAccountRequestApi |

#### Defined in

PatchCrossAccountRequest/index.ts:14

## Functions

### patchCrossAccountRequestParamCreator

▸ **patchCrossAccountRequestParamCreator**(`...config`): `Promise`\<`RequestArgs`\>

Patch the start_date/end_date/roles of an existing request. Could be used by TAM requestor to cancel request or target account admin to approve/deny request.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...config` | [[`PatchCrossAccountRequestParams`](PatchCrossAccountRequest.md#patchcrossaccountrequestparams)] \| [`string`, [`CrossAccountRequestPatch`](../interfaces/types.CrossAccountRequestPatch.md), `AxiosRequestConfig`\<`any`\>] | with all available params. |

#### Returns

`Promise`\<`RequestArgs`\>

**`Summary`**

Patch a cross account request

**`Throws`**

#### Defined in

PatchCrossAccountRequest/index.ts:40
