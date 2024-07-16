[@redhat-cloud-services/javascript-clients](../README.md) / [Exports](../modules.md) / GetPolicy

# Module: GetPolicy

## Table of contents

### References

- [default](GetPolicy.md#default)

### Type Aliases

- [GetPolicyParams](GetPolicy.md#getpolicyparams)

### Functions

- [getPolicyParamCreator](GetPolicy.md#getpolicyparamcreator)

## References

### default

Renames and re-exports [getPolicyParamCreator](GetPolicy.md#getpolicyparamcreator)

## Type Aliases

### GetPolicyParams

Ƭ **GetPolicyParams**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | `AxiosRequestConfig` | - |
| `uuid` | `string` | ID of policy to get **`Memberof`** GetPolicyApi |

#### Defined in

GetPolicy/index.ts:14

## Functions

### getPolicyParamCreator

▸ **getPolicyParamCreator**(`...config`): `Promise`\<`RequestArgs`\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...config` | [`string`, `AxiosRequestConfig`\<`any`\>] \| [[`GetPolicyParams`](GetPolicy.md#getpolicyparams)] | with all available params. |

#### Returns

`Promise`\<`RequestArgs`\>

**`Summary`**

Get a policy in the tenant

**`Throws`**

#### Defined in

GetPolicy/index.ts:34
