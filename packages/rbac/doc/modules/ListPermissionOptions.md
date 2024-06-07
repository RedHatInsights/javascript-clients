[@redhat-cloud-services/javascript-clients](../README.md) / [Exports](../modules.md) / ListPermissionOptions

# Module: ListPermissionOptions

## Table of contents

### References

- [default](ListPermissionOptions.md#default)

### Enumerations

- [ListPermissionOptionsAllowedOnlyEnum](../enums/ListPermissionOptions.ListPermissionOptionsAllowedOnlyEnum.md)
- [ListPermissionOptionsExcludeGlobalsEnum](../enums/ListPermissionOptions.ListPermissionOptionsExcludeGlobalsEnum.md)
- [ListPermissionOptionsFieldEnum](../enums/ListPermissionOptions.ListPermissionOptionsFieldEnum.md)

### Type Aliases

- [ListPermissionOptionsParams](ListPermissionOptions.md#listpermissionoptionsparams)

### Functions

- [listPermissionOptionsParamCreator](ListPermissionOptions.md#listpermissionoptionsparamcreator)

## References

### default

Renames and re-exports [listPermissionOptionsParamCreator](ListPermissionOptions.md#listpermissionoptionsparamcreator)

## Type Aliases

### ListPermissionOptionsParams

Ƭ **ListPermissionOptionsParams**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `allowedOnly?` | [`ListPermissionOptionsAllowedOnlyEnum`](../enums/ListPermissionOptions.ListPermissionOptionsAllowedOnlyEnum.md) | If set to \'true\', this will exclude any permission with a role where the \'application\' is not in the role create allow list. **`Memberof`** ListPermissionOptionsApi |
| `application?` | `string` | Filter returned options based on application. You may also use a comma-separated list to filter on multiple applications. **`Memberof`** ListPermissionOptionsApi |
| `excludeGlobals?` | [`ListPermissionOptionsExcludeGlobalsEnum`](../enums/ListPermissionOptions.ListPermissionOptionsExcludeGlobalsEnum.md) | If set to \'true\', this will exclude any permission option with a global allowance on the supplied \'?field=\' value of \'application\', \'resource_type\' or \'verb\'. The default is \'false\'. **`Memberof`** ListPermissionOptionsApi |
| `field` | [`ListPermissionOptionsFieldEnum`](../enums/ListPermissionOptions.ListPermissionOptionsFieldEnum.md) | specify which fields of permission to display **`Memberof`** ListPermissionOptionsApi |
| `limit?` | `number` | Parameter for selecting the amount of data returned. **`Memberof`** ListPermissionOptionsApi |
| `offset?` | `number` | Parameter for selecting the offset of data. **`Memberof`** ListPermissionOptionsApi |
| `options?` | `AxiosRequestConfig` | - |
| `resourceType?` | `string` | Filter returned options based on resource_type. You may also use a comma-separated list to filter on multiple resource_types. **`Memberof`** ListPermissionOptionsApi |
| `verb?` | `string` | Filter returned options based on verb. You may also use a comma-separated list to filter on multiple verbs. **`Memberof`** ListPermissionOptionsApi |

#### Defined in

[ListPermissionOptions/index.ts:14](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/rbac/ListPermissionOptions/index.ts#L14)

## Functions

### listPermissionOptionsParamCreator

▸ **listPermissionOptionsParamCreator**(`...config`): `Promise`\<`RequestArgs`\>

By default, options of application is returned. And could be resource_type or verb on demand.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...config` | [[`ListPermissionOptionsParams`](ListPermissionOptions.md#listpermissionoptionsparams)] \| [[`ListPermissionOptionsFieldEnum`](../enums/ListPermissionOptions.ListPermissionOptionsFieldEnum.md), `number`, `number`, `string`, `string`, `string`, [`ListPermissionOptionsExcludeGlobalsEnum`](../enums/ListPermissionOptions.ListPermissionOptionsExcludeGlobalsEnum.md), [`ListPermissionOptionsAllowedOnlyEnum`](../enums/ListPermissionOptions.ListPermissionOptionsAllowedOnlyEnum.md), `AxiosRequestConfig`\<`any`\>] | with all available params. |

#### Returns

`Promise`\<`RequestArgs`\>

**`Summary`**

List the available options for fields of permissions for a tenant

**`Throws`**

#### Defined in

[ListPermissionOptions/index.ts:104](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/rbac/ListPermissionOptions/index.ts#L104)
