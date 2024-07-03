[@redhat-cloud-services/javascript-clients](../README.md) / [Exports](../modules.md) / ListGroups

# Module: ListGroups

## Table of contents

### References

- [default](ListGroups.md#default)

### Enumerations

- [ListGroupsNameMatchEnum](../enums/ListGroups.ListGroupsNameMatchEnum.md)
- [ListGroupsOrderByEnum](../enums/ListGroups.ListGroupsOrderByEnum.md)
- [ListGroupsRoleDiscriminatorEnum](../enums/ListGroups.ListGroupsRoleDiscriminatorEnum.md)
- [ListGroupsScopeEnum](../enums/ListGroups.ListGroupsScopeEnum.md)

### Type Aliases

- [ListGroupsParams](ListGroups.md#listgroupsparams)

### Functions

- [listGroupsParamCreator](ListGroups.md#listgroupsparamcreator)

## References

### default

Renames and re-exports [listGroupsParamCreator](ListGroups.md#listgroupsparamcreator)

## Type Aliases

### ListGroupsParams

Ƭ **ListGroupsParams**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `adminDefault?` | `boolean` | An optional flag to return either admin default or non-admin default groups. **`Memberof`** ListGroupsApi |
| `excludeUsername?` | `string` | A username for a principal to filter for groups where principal is not a member and can be added manually **`Memberof`** ListGroupsApi |
| `limit?` | `number` | Parameter for selecting the amount of data returned. **`Memberof`** ListGroupsApi |
| `name?` | `string` | Parameter for filtering resource by name using string contains search. **`Memberof`** ListGroupsApi |
| `nameMatch?` | [`ListGroupsNameMatchEnum`](../enums/ListGroups.ListGroupsNameMatchEnum.md) | Parameter for specifying the matching criteria for an object\'s name or display_name. **`Memberof`** ListGroupsApi |
| `offset?` | `number` | Parameter for selecting the offset of data. **`Memberof`** ListGroupsApi |
| `options?` | `AxiosRequestConfig` | - |
| `orderBy?` | [`ListGroupsOrderByEnum`](../enums/ListGroups.ListGroupsOrderByEnum.md) | Parameter for ordering groups by value. For inverse ordering, supply \'-\' before the param value, such as: ?order_by=-name **`Memberof`** ListGroupsApi |
| `platformDefault?` | `boolean` | An optional flag to return either platform default or non-platform default groups. **`Memberof`** ListGroupsApi |
| `roleDiscriminator?` | [`ListGroupsRoleDiscriminatorEnum`](../enums/ListGroups.ListGroupsRoleDiscriminatorEnum.md) | Discriminator that works with role_names to indicate matching all/any of the role names **`Memberof`** ListGroupsApi |
| `roleNames?` | `string`[] | List of role name to filter for groups. It is exact match but case-insensitive **`Memberof`** ListGroupsApi |
| `scope?` | [`ListGroupsScopeEnum`](../enums/ListGroups.ListGroupsScopeEnum.md) | Parameter for filtering resource by scope. **`Memberof`** ListGroupsApi |
| `system?` | `boolean` | An optional flag to return either system or non-system groups. **`Memberof`** ListGroupsApi |
| `username?` | `string` | A username for a principal to filter for groups **`Memberof`** ListGroupsApi |
| `uuid?` | `string`[] | A list of UUIDs to filter listed groups. **`Memberof`** ListGroupsApi |

#### Defined in

[ListGroups/index.ts:14](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/rbac/ListGroups/index.ts#L14)

## Functions

### listGroupsParamCreator

▸ **listGroupsParamCreator**(`...config`): `Promise`\<`RequestArgs`\>

By default, responses are sorted in ascending order by group name

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...config` | [[`ListGroupsParams`](ListGroups.md#listgroupsparams)] \| [`number`, `number`, `string`, [`ListGroupsNameMatchEnum`](../enums/ListGroups.ListGroupsNameMatchEnum.md), [`ListGroupsScopeEnum`](../enums/ListGroups.ListGroupsScopeEnum.md), `string`, `string`, `string`[], `string`[], [`ListGroupsRoleDiscriminatorEnum`](../enums/ListGroups.ListGroupsRoleDiscriminatorEnum.md), [`ListGroupsOrderByEnum`](../enums/ListGroups.ListGroupsOrderByEnum.md), `boolean`] | with all available params. |

#### Returns

`Promise`\<`RequestArgs`\>

**`Summary`**

List the groups for a tenant

**`Throws`**

#### Defined in

[ListGroups/index.ts:150](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/rbac/ListGroups/index.ts#L150)
