[@redhat-cloud-services/javascript-clients](../README.md) / [Exports](../modules.md) / DeletePrincipalFromGroup

# Module: DeletePrincipalFromGroup

## Table of contents

### References

- [default](DeletePrincipalFromGroup.md#default)

### Type Aliases

- [DeletePrincipalFromGroupParams](DeletePrincipalFromGroup.md#deleteprincipalfromgroupparams)

### Functions

- [deletePrincipalFromGroupParamCreator](DeletePrincipalFromGroup.md#deleteprincipalfromgroupparamcreator)

## References

### default

Renames and re-exports [deletePrincipalFromGroupParamCreator](DeletePrincipalFromGroup.md#deleteprincipalfromgroupparamcreator)

## Type Aliases

### DeletePrincipalFromGroupParams

Ƭ **DeletePrincipalFromGroupParams**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | `AxiosRequestConfig` | - |
| `serviceAccounts?` | `string` | A comma separated list of usernames for service accounts to remove from the group **`Memberof`** DeletePrincipalFromGroupApi |
| `usernames?` | `string` | A comma separated list of usernames for principals to remove from the group **`Memberof`** DeletePrincipalFromGroupApi |
| `uuid` | `string` | ID of group to update **`Memberof`** DeletePrincipalFromGroupApi |

#### Defined in

[DeletePrincipalFromGroup/index.ts:14](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/rbac/DeletePrincipalFromGroup/index.ts#L14)

## Functions

### deletePrincipalFromGroupParamCreator

▸ **deletePrincipalFromGroupParamCreator**(`...config`): `Promise`\<`RequestArgs`\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...config` | [[`DeletePrincipalFromGroupParams`](DeletePrincipalFromGroup.md#deleteprincipalfromgroupparams)] \| [`string`, `string`, `string`, `AxiosRequestConfig`\<`any`\>] | with all available params. |

#### Returns

`Promise`\<`RequestArgs`\>

**`Summary`**

Remove a principal from a group in the tenant

**`Throws`**

#### Defined in

[DeletePrincipalFromGroup/index.ts:46](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/rbac/DeletePrincipalFromGroup/index.ts#L46)
