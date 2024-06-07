[@redhat-cloud-services/javascript-clients](../README.md) / [Exports](../modules.md) / PatchRole

# Module: PatchRole

## Table of contents

### References

- [default](PatchRole.md#default)

### Type Aliases

- [PatchRoleParams](PatchRole.md#patchroleparams)

### Functions

- [patchRoleParamCreator](PatchRole.md#patchroleparamcreator)

## References

### default

Renames and re-exports [patchRoleParamCreator](PatchRole.md#patchroleparamcreator)

## Type Aliases

### PatchRoleParams

Ƭ **PatchRoleParams**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | `AxiosRequestConfig` | - |
| `rolePatch?` | [`RolePatch`](../interfaces/types.RolePatch.md) | Patch to a role **`Memberof`** PatchRoleApi |
| `uuid` | `string` | ID of role to update **`Memberof`** PatchRoleApi |

#### Defined in

[PatchRole/index.ts:14](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/rbac/PatchRole/index.ts#L14)

## Functions

### patchRoleParamCreator

▸ **patchRoleParamCreator**(`...config`): `Promise`\<`RequestArgs`\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...config` | [[`PatchRoleParams`](PatchRole.md#patchroleparams)] \| [`string`, [`RolePatch`](../interfaces/types.RolePatch.md), `AxiosRequestConfig`\<`any`\>] | with all available params. |

#### Returns

`Promise`\<`RequestArgs`\>

**`Summary`**

Patch a role in the tenant

**`Throws`**

#### Defined in

[PatchRole/index.ts:40](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/rbac/PatchRole/index.ts#L40)
