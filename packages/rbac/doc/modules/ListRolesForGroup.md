[@redhat-cloud-services/javascript-clients](../README.md) / [Exports](../modules.md) / ListRolesForGroup

# Module: ListRolesForGroup

## Table of contents

### References

- [default](ListRolesForGroup.md#default)

### Enumerations

- [ListRolesForGroupOrderByEnum](../enums/ListRolesForGroup.ListRolesForGroupOrderByEnum.md)

### Type Aliases

- [ListRolesForGroupParams](ListRolesForGroup.md#listrolesforgroupparams)

### Functions

- [listRolesForGroupParamCreator](ListRolesForGroup.md#listrolesforgroupparamcreator)

## References

### default

Renames and re-exports [listRolesForGroupParamCreator](ListRolesForGroup.md#listrolesforgroupparamcreator)

## Type Aliases

### ListRolesForGroupParams

Ƭ **ListRolesForGroupParams**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `exclude?` | `boolean` | If this is set to true, the result would be roles excluding the ones in the group **`Memberof`** ListRolesForGroupApi |
| `limit?` | `number` | Parameter for selecting the amount of data returned. **`Memberof`** ListRolesForGroupApi |
| `offset?` | `number` | Parameter for selecting the offset of data. **`Memberof`** ListRolesForGroupApi |
| `options?` | `AxiosRequestConfig` | - |
| `orderBy?` | [`ListRolesForGroupOrderByEnum`](../enums/ListRolesForGroup.ListRolesForGroupOrderByEnum.md) | Parameter for ordering roles by value. For inverse ordering, supply \'-\' before the param value, such as: ?order_by=-name **`Memberof`** ListRolesForGroupApi |
| `roleDescription?` | `string` | Parameter for filtering group roles by role `description` using string contains search. **`Memberof`** ListRolesForGroupApi |
| `roleDisplayName?` | `string` | Parameter for filtering group roles by role `display_name` using string contains search. **`Memberof`** ListRolesForGroupApi |
| `roleExternalTenant?` | `string` | Parameter for filtering group roles by role `external_tenant` using string search. **`Memberof`** ListRolesForGroupApi |
| `roleName?` | `string` | Parameter for filtering group roles by role `name` using string contains search. **`Memberof`** ListRolesForGroupApi |
| `roleSystem?` | `boolean` | Parameter for filtering group roles by system flag. **`Memberof`** ListRolesForGroupApi |
| `uuid` | `string` | ID of group **`Memberof`** ListRolesForGroupApi |

#### Defined in

ListRolesForGroup/index.ts:14

## Functions

### listRolesForGroupParamCreator

▸ **listRolesForGroupParamCreator**(`...config`): `Promise`\<`RequestArgs`\>

By default, responses are sorted in ascending order by role name

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...config` | [[`ListRolesForGroupParams`](ListRolesForGroup.md#listrolesforgroupparams)] \| [`string`, `boolean`, `string`, `string`, `string`, `boolean`, `string`, `number`, `number`, [`ListRolesForGroupOrderByEnum`](../enums/ListRolesForGroup.ListRolesForGroupOrderByEnum.md), `AxiosRequestConfig`\<`any`\>] | with all available params. |

#### Returns

`Promise`\<`RequestArgs`\>

**`Summary`**

List the roles for a group in the tenant

**`Throws`**

#### Defined in

ListRolesForGroup/index.ts:99
