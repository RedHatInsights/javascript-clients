[@redhat-cloud-services/javascript-clients](../README.md) / [Exports](../modules.md) / UpdateRole

# Module: UpdateRole

## Table of contents

### References

- [default](UpdateRole.md#default)

### Type Aliases

- [UpdateRoleParams](UpdateRole.md#updateroleparams)

### Functions

- [updateRoleParamCreator](UpdateRole.md#updateroleparamcreator)

## References

### default

Renames and re-exports [updateRoleParamCreator](UpdateRole.md#updateroleparamcreator)

## Type Aliases

### UpdateRoleParams

Ƭ **UpdateRoleParams**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | `AxiosRequestConfig` | - |
| `rolePut` | [`RolePut`](../interfaces/types.RolePut.md) | Update to a role **`Memberof`** UpdateRoleApi |
| `uuid` | `string` | ID of role to update **`Memberof`** UpdateRoleApi |

#### Defined in

[UpdateRole/index.ts:14](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/rbac/UpdateRole/index.ts#L14)

## Functions

### updateRoleParamCreator

▸ **updateRoleParamCreator**(`...config`): `Promise`\<`RequestArgs`\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...config` | [[`UpdateRoleParams`](UpdateRole.md#updateroleparams)] \| [`string`, [`RolePut`](../interfaces/types.RolePut.md), `AxiosRequestConfig`\<`any`\>] | with all available params. |

#### Returns

`Promise`\<`RequestArgs`\>

**`Summary`**

Update a role in the tenant

**`Throws`**

#### Defined in

[UpdateRole/index.ts:40](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/rbac/UpdateRole/index.ts#L40)
