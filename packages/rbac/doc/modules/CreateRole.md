[@redhat-cloud-services/javascript-clients](../README.md) / [Exports](../modules.md) / CreateRole

# Module: CreateRole

## Table of contents

### References

- [default](CreateRole.md#default)

### Type Aliases

- [CreateRoleParams](CreateRole.md#createroleparams)

### Functions

- [createRoleParamCreator](CreateRole.md#createroleparamcreator)

## References

### default

Renames and re-exports [createRoleParamCreator](CreateRole.md#createroleparamcreator)

## Type Aliases

### CreateRoleParams

Ƭ **CreateRoleParams**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | `AxiosRequestConfig` | - |
| `roleIn` | [`RoleIn`](../interfaces/types.RoleIn.md) | Role to create **`Memberof`** CreateRoleApi |

#### Defined in

[CreateRole/index.ts:14](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/rbac/CreateRole/index.ts#L14)

## Functions

### createRoleParamCreator

▸ **createRoleParamCreator**(`...config`): `Promise`\<`RequestArgs`\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...config` | [[`CreateRoleParams`](CreateRole.md#createroleparams)] \| [[`RoleIn`](../interfaces/types.RoleIn.md), `AxiosRequestConfig`\<`any`\>] | with all available params. |

#### Returns

`Promise`\<`RequestArgs`\>

**`Summary`**

Create a role for a tenant

**`Throws`**

#### Defined in

[CreateRole/index.ts:34](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/rbac/CreateRole/index.ts#L34)
