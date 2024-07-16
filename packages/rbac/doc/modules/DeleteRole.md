[@redhat-cloud-services/javascript-clients](../README.md) / [Exports](../modules.md) / DeleteRole

# Module: DeleteRole

## Table of contents

### References

- [default](DeleteRole.md#default)

### Type Aliases

- [DeleteRoleParams](DeleteRole.md#deleteroleparams)

### Functions

- [deleteRoleParamCreator](DeleteRole.md#deleteroleparamcreator)

## References

### default

Renames and re-exports [deleteRoleParamCreator](DeleteRole.md#deleteroleparamcreator)

## Type Aliases

### DeleteRoleParams

Ƭ **DeleteRoleParams**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | `AxiosRequestConfig` | - |
| `uuid` | `string` | ID of role to delete **`Memberof`** DeleteRoleApi |

#### Defined in

DeleteRole/index.ts:14

## Functions

### deleteRoleParamCreator

▸ **deleteRoleParamCreator**(`...config`): `Promise`\<`RequestArgs`\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...config` | [`string`, `AxiosRequestConfig`\<`any`\>] \| [[`DeleteRoleParams`](DeleteRole.md#deleteroleparams)] | with all available params. |

#### Returns

`Promise`\<`RequestArgs`\>

**`Summary`**

Delete a role in the tenant

**`Throws`**

#### Defined in

DeleteRole/index.ts:34
