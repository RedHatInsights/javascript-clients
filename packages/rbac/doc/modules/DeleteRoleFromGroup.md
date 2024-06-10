[@redhat-cloud-services/javascript-clients](../README.md) / [Exports](../modules.md) / DeleteRoleFromGroup

# Module: DeleteRoleFromGroup

## Table of contents

### References

- [default](DeleteRoleFromGroup.md#default)

### Type Aliases

- [DeleteRoleFromGroupParams](DeleteRoleFromGroup.md#deleterolefromgroupparams)

### Functions

- [deleteRoleFromGroupParamCreator](DeleteRoleFromGroup.md#deleterolefromgroupparamcreator)

## References

### default

Renames and re-exports [deleteRoleFromGroupParamCreator](DeleteRoleFromGroup.md#deleterolefromgroupparamcreator)

## Type Aliases

### DeleteRoleFromGroupParams

Ƭ **DeleteRoleFromGroupParams**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | `AxiosRequestConfig` | - |
| `roles` | `string` | A comma separated list of role UUIDs for roles to remove from the group **`Memberof`** DeleteRoleFromGroupApi |
| `uuid` | `string` | ID of group to update **`Memberof`** DeleteRoleFromGroupApi |

#### Defined in

[DeleteRoleFromGroup/index.ts:14](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/rbac/DeleteRoleFromGroup/index.ts#L14)

## Functions

### deleteRoleFromGroupParamCreator

▸ **deleteRoleFromGroupParamCreator**(`...config`): `Promise`\<`RequestArgs`\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...config` | [[`DeleteRoleFromGroupParams`](DeleteRoleFromGroup.md#deleterolefromgroupparams)] \| [`string`, `string`, `AxiosRequestConfig`\<`any`\>] | with all available params. |

#### Returns

`Promise`\<`RequestArgs`\>

**`Summary`**

Remove a role from a group in the tenant

**`Throws`**

#### Defined in

[DeleteRoleFromGroup/index.ts:40](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/rbac/DeleteRoleFromGroup/index.ts#L40)
