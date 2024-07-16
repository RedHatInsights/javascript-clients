[@redhat-cloud-services/javascript-clients](../README.md) / [Exports](../modules.md) / GetRoleAccess

# Module: GetRoleAccess

## Table of contents

### References

- [default](GetRoleAccess.md#default)

### Type Aliases

- [GetRoleAccessParams](GetRoleAccess.md#getroleaccessparams)

### Functions

- [getRoleAccessParamCreator](GetRoleAccess.md#getroleaccessparamcreator)

## References

### default

Renames and re-exports [getRoleAccessParamCreator](GetRoleAccess.md#getroleaccessparamcreator)

## Type Aliases

### GetRoleAccessParams

Ƭ **GetRoleAccessParams**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `limit?` | `number` | Parameter for selecting the amount of data returned. **`Memberof`** GetRoleAccessApi |
| `offset?` | `number` | Parameter for selecting the offset of data. **`Memberof`** GetRoleAccessApi |
| `options?` | `AxiosRequestConfig` | - |
| `uuid` | `string` | ID of the role **`Memberof`** GetRoleAccessApi |

#### Defined in

GetRoleAccess/index.ts:14

## Functions

### getRoleAccessParamCreator

▸ **getRoleAccessParamCreator**(`...config`): `Promise`\<`RequestArgs`\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...config` | [[`GetRoleAccessParams`](GetRoleAccess.md#getroleaccessparams)] \| [`string`, `number`, `number`, `AxiosRequestConfig`\<`any`\>] | with all available params. |

#### Returns

`Promise`\<`RequestArgs`\>

**`Summary`**

Get access for a role in the tenant

**`Throws`**

#### Defined in

GetRoleAccess/index.ts:46
