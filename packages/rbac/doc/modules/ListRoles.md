[@redhat-cloud-services/javascript-clients](../README.md) / [Exports](../modules.md) / ListRoles

# Module: ListRoles

## Table of contents

### References

- [default](ListRoles.md#default)

### Enumerations

- [ListRolesAddFieldsEnum](../enums/ListRoles.ListRolesAddFieldsEnum.md)
- [ListRolesNameMatchEnum](../enums/ListRoles.ListRolesNameMatchEnum.md)
- [ListRolesOrderByEnum](../enums/ListRoles.ListRolesOrderByEnum.md)
- [ListRolesScopeEnum](../enums/ListRoles.ListRolesScopeEnum.md)

### Type Aliases

- [ListRolesParams](ListRoles.md#listrolesparams)

### Functions

- [listRolesParamCreator](ListRoles.md#listrolesparamcreator)

## References

### default

Renames and re-exports [listRolesParamCreator](ListRoles.md#listrolesparamcreator)

## Type Aliases

### ListRolesParams

Ƭ **ListRolesParams**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `addFields?` | [`ListRolesAddFieldsEnum`](../enums/ListRoles.ListRolesAddFieldsEnum.md)[] | Parameter for add list of fields to display for roles. **`Memberof`** ListRolesApi |
| `application?` | `string` | The application name(s) to filter roles by, from permissions or external tenant name. This is an exact match. You may also use a comma-separated list to match on multiple applications. **`Memberof`** ListRolesApi |
| `displayName?` | `string` | Parameter for filtering resource by display_name using string contains search. **`Memberof`** ListRolesApi |
| `externalTenant?` | `string` | Parameter for filtering roles by external tenant name using string search. **`Memberof`** ListRolesApi |
| `limit?` | `number` | Parameter for selecting the amount of data returned. **`Memberof`** ListRolesApi |
| `name?` | `string` | Parameter for filtering resource by name using string contains search. **`Memberof`** ListRolesApi |
| `nameMatch?` | [`ListRolesNameMatchEnum`](../enums/ListRoles.ListRolesNameMatchEnum.md) | Parameter for specifying the matching criteria for an object\'s name or display_name. **`Memberof`** ListRolesApi |
| `offset?` | `number` | Parameter for selecting the offset of data. **`Memberof`** ListRolesApi |
| `options?` | `AxiosRequestConfig` | - |
| `orderBy?` | [`ListRolesOrderByEnum`](../enums/ListRoles.ListRolesOrderByEnum.md) | Parameter for ordering roles by value. For inverse ordering, supply \'-\' before the param value, such as: ?order_by=-name **`Memberof`** ListRolesApi |
| `permission?` | `string` | The permission(s) to filter roles by. This is an exact match. You may also use a comma-separated list to match on multiple permissions. **`Memberof`** ListRolesApi |
| `scope?` | [`ListRolesScopeEnum`](../enums/ListRoles.ListRolesScopeEnum.md) | Parameter for filtering resource by scope. **`Memberof`** ListRolesApi |
| `system?` | `boolean` | Parameter for filtering resource by system flag. **`Memberof`** ListRolesApi |
| `username?` | `string` | Unique username of the principal to obtain roles for (only available for admins, and if supplied, takes precedence over the identity header). **`Memberof`** ListRolesApi |

#### Defined in

ListRoles/index.ts:14

## Functions

### listRolesParamCreator

▸ **listRolesParamCreator**(`...config`): `Promise`\<`RequestArgs`\>

By default, responses are sorted in ascending order by role name

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...config` | [[`ListRolesParams`](ListRoles.md#listrolesparams)] \| [`number`, `number`, `string`, `boolean`, `string`, [`ListRolesNameMatchEnum`](../enums/ListRoles.ListRolesNameMatchEnum.md), [`ListRolesScopeEnum`](../enums/ListRoles.ListRolesScopeEnum.md), [`ListRolesOrderByEnum`](../enums/ListRoles.ListRolesOrderByEnum.md), [`ListRolesAddFieldsEnum`](../enums/ListRoles.ListRolesAddFieldsEnum.md)[], `string`] | with all available params. |

#### Returns

`Promise`\<`RequestArgs`\>

**`Summary`**

List the roles for a tenant

**`Throws`**

#### Defined in

ListRoles/index.ts:145
