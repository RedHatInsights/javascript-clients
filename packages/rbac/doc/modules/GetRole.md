[@redhat-cloud-services/javascript-clients](../README.md) / [Exports](../modules.md) / GetRole

# Module: GetRole

## Table of contents

### References

- [default](GetRole.md#default)

### Enumerations

- [GetRoleScopeEnum](../enums/GetRole.GetRoleScopeEnum.md)

### Type Aliases

- [GetRoleParams](GetRole.md#getroleparams)

### Functions

- [getRoleParamCreator](GetRole.md#getroleparamcreator)

## References

### default

Renames and re-exports [getRoleParamCreator](GetRole.md#getroleparamcreator)

## Type Aliases

### GetRoleParams

Ƭ **GetRoleParams**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | `AxiosRequestConfig` | - |
| `scope?` | [`GetRoleScopeEnum`](../enums/GetRole.GetRoleScopeEnum.md) | Parameter for filtering resource by scope. **`Memberof`** GetRoleApi |
| `uuid` | `string` | ID of role to get **`Memberof`** GetRoleApi |

#### Defined in

GetRole/index.ts:14

## Functions

### getRoleParamCreator

▸ **getRoleParamCreator**(`...config`): `Promise`\<`RequestArgs`\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...config` | [[`GetRoleParams`](GetRole.md#getroleparams)] \| [`string`, [`GetRoleScopeEnum`](../enums/GetRole.GetRoleScopeEnum.md), `AxiosRequestConfig`\<`any`\>] | with all available params. |

#### Returns

`Promise`\<`RequestArgs`\>

**`Summary`**

Get a role in the tenant

**`Throws`**

#### Defined in

GetRole/index.ts:49
