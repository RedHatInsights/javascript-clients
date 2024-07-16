[@redhat-cloud-services/javascript-clients](../README.md) / [Exports](../modules.md) / ListPermissions

# Module: ListPermissions

## Table of contents

### References

- [default](ListPermissions.md#default)

### Enumerations

- [ListPermissionsAllowedOnlyEnum](../enums/ListPermissions.ListPermissionsAllowedOnlyEnum.md)
- [ListPermissionsExcludeGlobalsEnum](../enums/ListPermissions.ListPermissionsExcludeGlobalsEnum.md)
- [ListPermissionsOrderByEnum](../enums/ListPermissions.ListPermissionsOrderByEnum.md)

### Type Aliases

- [ListPermissionsParams](ListPermissions.md#listpermissionsparams)

### Functions

- [listPermissionsParamCreator](ListPermissions.md#listpermissionsparamcreator)

## References

### default

Renames and re-exports [listPermissionsParamCreator](ListPermissions.md#listpermissionsparamcreator)

## Type Aliases

### ListPermissionsParams

Ƭ **ListPermissionsParams**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `allowedOnly?` | [`ListPermissionsAllowedOnlyEnum`](../enums/ListPermissions.ListPermissionsAllowedOnlyEnum.md) | If set to \'true\', this will exclude any permission with a role where the \'application\' is not in the role create allow list. **`Memberof`** ListPermissionsApi |
| `application?` | `string` | Exact match for the application name of a permission. You may also use a comma-separated list to match on multiple applications. **`Memberof`** ListPermissionsApi |
| `excludeGlobals?` | [`ListPermissionsExcludeGlobalsEnum`](../enums/ListPermissions.ListPermissionsExcludeGlobalsEnum.md) | If set to \'true\', this will exclude any permission with a global allowance on either \'application\', \'resource_type\' or \'verb\'. The default is \'false\'. **`Memberof`** ListPermissionsApi |
| `excludeRoles?` | `string` | An optional string filter which accepts one or more role UUIDs, comma-separated, to return permissions not associated with the supplied role(s). **`Memberof`** ListPermissionsApi |
| `limit?` | `number` | Parameter for selecting the amount of data returned. **`Memberof`** ListPermissionsApi |
| `offset?` | `number` | Parameter for selecting the offset of data. **`Memberof`** ListPermissionsApi |
| `options?` | `AxiosRequestConfig` | - |
| `orderBy?` | [`ListPermissionsOrderByEnum`](../enums/ListPermissions.ListPermissionsOrderByEnum.md) | Parameter for ordering permissions by value. For inverse ordering, supply \'-\' before the param value, such as: ?order_by=-application **`Memberof`** ListPermissionsApi |
| `permission?` | `string` | Partial match for the aggregate permission value name of a permission object. **`Memberof`** ListPermissionsApi |
| `resourceType?` | `string` | Exact match for the resource type name of a permission. You may also use a comma-separated list to match on multiple resource_types. **`Memberof`** ListPermissionsApi |
| `verb?` | `string` | Exact match for the operation verb name of a permission You may also use a comma-separated list to match on multiple verbs. **`Memberof`** ListPermissionsApi |

#### Defined in

ListPermissions/index.ts:14

## Functions

### listPermissionsParamCreator

▸ **listPermissionsParamCreator**(`...config`): `Promise`\<`RequestArgs`\>

By default, responses are sorted in ascending order by permission application.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...config` | [[`ListPermissionsParams`](ListPermissions.md#listpermissionsparams)] \| [`number`, `number`, [`ListPermissionsOrderByEnum`](../enums/ListPermissions.ListPermissionsOrderByEnum.md), `string`, `string`, `string`, `string`, [`ListPermissionsExcludeGlobalsEnum`](../enums/ListPermissions.ListPermissionsExcludeGlobalsEnum.md), `string`, [`ListPermissionsAllowedOnlyEnum`](../enums/ListPermissions.ListPermissionsAllowedOnlyEnum.md), `AxiosRequestConfig`\<`any`\>] | with all available params. |

#### Returns

`Promise`\<`RequestArgs`\>

**`Summary`**

List the permissions for a tenant

**`Throws`**

#### Defined in

ListPermissions/index.ts:117
