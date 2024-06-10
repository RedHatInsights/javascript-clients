[@redhat-cloud-services/javascript-clients](../README.md) / [Exports](../modules.md) / CreateCrossAccountRequests

# Module: CreateCrossAccountRequests

## Table of contents

### References

- [default](CreateCrossAccountRequests.md#default)

### Type Aliases

- [CreateCrossAccountRequestsParams](CreateCrossAccountRequests.md#createcrossaccountrequestsparams)

### Functions

- [createCrossAccountRequestsParamCreator](CreateCrossAccountRequests.md#createcrossaccountrequestsparamcreator)

## References

### default

Renames and re-exports [createCrossAccountRequestsParamCreator](CreateCrossAccountRequests.md#createcrossaccountrequestsparamcreator)

## Type Aliases

### CreateCrossAccountRequestsParams

Ƭ **CreateCrossAccountRequestsParams**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `crossAccountRequestIn` | [`CrossAccountRequestIn`](../interfaces/types.CrossAccountRequestIn.md) | CrossAccountRequest to create **`Memberof`** CreateCrossAccountRequestsApi |
| `options?` | `AxiosRequestConfig` | - |

#### Defined in

[CreateCrossAccountRequests/index.ts:14](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/rbac/CreateCrossAccountRequests/index.ts#L14)

## Functions

### createCrossAccountRequestsParamCreator

▸ **createCrossAccountRequestsParamCreator**(`...config`): `Promise`\<`RequestArgs`\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...config` | [[`CreateCrossAccountRequestsParams`](CreateCrossAccountRequests.md#createcrossaccountrequestsparams)] \| [[`CrossAccountRequestIn`](../interfaces/types.CrossAccountRequestIn.md), `AxiosRequestConfig`\<`any`\>] | with all available params. |

#### Returns

`Promise`\<`RequestArgs`\>

**`Summary`**

Create a cross account request

**`Throws`**

#### Defined in

[CreateCrossAccountRequests/index.ts:34](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/rbac/CreateCrossAccountRequests/index.ts#L34)
