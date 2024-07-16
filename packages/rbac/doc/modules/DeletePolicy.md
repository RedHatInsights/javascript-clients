[@redhat-cloud-services/javascript-clients](../README.md) / [Exports](../modules.md) / DeletePolicy

# Module: DeletePolicy

## Table of contents

### References

- [default](DeletePolicy.md#default)

### Type Aliases

- [DeletePolicyParams](DeletePolicy.md#deletepolicyparams)

### Functions

- [deletePolicyParamCreator](DeletePolicy.md#deletepolicyparamcreator)

## References

### default

Renames and re-exports [deletePolicyParamCreator](DeletePolicy.md#deletepolicyparamcreator)

## Type Aliases

### DeletePolicyParams

Ƭ **DeletePolicyParams**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | `AxiosRequestConfig` | - |
| `uuid` | `string` | ID of policy to delete **`Memberof`** DeletePolicyApi |

#### Defined in

DeletePolicy/index.ts:14

## Functions

### deletePolicyParamCreator

▸ **deletePolicyParamCreator**(`...config`): `Promise`\<`RequestArgs`\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...config` | [`string`, `AxiosRequestConfig`\<`any`\>] \| [[`DeletePolicyParams`](DeletePolicy.md#deletepolicyparams)] | with all available params. |

#### Returns

`Promise`\<`RequestArgs`\>

**`Summary`**

Delete a policy in the tenant

**`Throws`**

#### Defined in

DeletePolicy/index.ts:34
