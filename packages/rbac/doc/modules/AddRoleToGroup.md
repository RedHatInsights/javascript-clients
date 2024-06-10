[@redhat-cloud-services/javascript-clients](../README.md) / [Exports](../modules.md) / AddRoleToGroup

# Module: AddRoleToGroup

## Table of contents

### References

- [default](AddRoleToGroup.md#default)

### Type Aliases

- [AddRoleToGroupParams](AddRoleToGroup.md#addroletogroupparams)

### Functions

- [addRoleToGroupParamCreator](AddRoleToGroup.md#addroletogroupparamcreator)

## References

### default

Renames and re-exports [addRoleToGroupParamCreator](AddRoleToGroup.md#addroletogroupparamcreator)

## Type Aliases

### AddRoleToGroupParams

Ƭ **AddRoleToGroupParams**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `groupRoleIn` | [`GroupRoleIn`](../interfaces/types.GroupRoleIn.md) | Role to add to a group **`Memberof`** AddRoleToGroupApi |
| `options?` | `AxiosRequestConfig` | - |
| `uuid` | `string` | ID of group to update **`Memberof`** AddRoleToGroupApi |

#### Defined in

[AddRoleToGroup/index.ts:14](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/rbac/AddRoleToGroup/index.ts#L14)

## Functions

### addRoleToGroupParamCreator

▸ **addRoleToGroupParamCreator**(`...config`): `Promise`\<`RequestArgs`\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...config` | [[`AddRoleToGroupParams`](AddRoleToGroup.md#addroletogroupparams)] \| [`string`, [`GroupRoleIn`](../interfaces/types.GroupRoleIn.md), `AxiosRequestConfig`\<`any`\>] | with all available params. |

#### Returns

`Promise`\<`RequestArgs`\>

**`Summary`**

Add a role to a group in the tenant

**`Throws`**

#### Defined in

[AddRoleToGroup/index.ts:40](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/rbac/AddRoleToGroup/index.ts#L40)
