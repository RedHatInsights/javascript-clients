[@redhat-cloud-services/javascript-clients](../README.md) / [Exports](../modules.md) / ListPrincipals

# Module: ListPrincipals

## Table of contents

### References

- [default](ListPrincipals.md#default)

### Enumerations

- [ListPrincipalsMatchCriteriaEnum](../enums/ListPrincipals.ListPrincipalsMatchCriteriaEnum.md)
- [ListPrincipalsOrderByEnum](../enums/ListPrincipals.ListPrincipalsOrderByEnum.md)
- [ListPrincipalsSortOrderEnum](../enums/ListPrincipals.ListPrincipalsSortOrderEnum.md)
- [ListPrincipalsStatusEnum](../enums/ListPrincipals.ListPrincipalsStatusEnum.md)
- [ListPrincipalsTypeEnum](../enums/ListPrincipals.ListPrincipalsTypeEnum.md)

### Type Aliases

- [ListPrincipalsParams](ListPrincipals.md#listprincipalsparams)

### Functions

- [listPrincipalsParamCreator](ListPrincipals.md#listprincipalsparamcreator)

## References

### default

Renames and re-exports [listPrincipalsParamCreator](ListPrincipals.md#listprincipalsparamcreator)

## Type Aliases

### ListPrincipalsParams

Ƭ **ListPrincipalsParams**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `adminOnly?` | `boolean` | Get only admin users within an account. Setting this would ignore the parameters: usernames, email **`Memberof`** ListPrincipalsApi |
| `email?` | `string` | E-mail address of principal to search for. Could be combined with match_criteria for searching. **`Memberof`** ListPrincipalsApi |
| `limit?` | `number` | Parameter for selecting the amount of data returned. **`Memberof`** ListPrincipalsApi |
| `matchCriteria?` | [`ListPrincipalsMatchCriteriaEnum`](../enums/ListPrincipals.ListPrincipalsMatchCriteriaEnum.md) | Parameter for specifying the matching criteria for an object\'s name and/or email. Currently, match_criteria of partial searches for a username/email using \"starts with\" pattern. **`Memberof`** ListPrincipalsApi |
| `offset?` | `number` | Parameter for selecting the offset of data. **`Memberof`** ListPrincipalsApi |
| `options?` | `AxiosRequestConfig` | - |
| `orderBy?` | [`ListPrincipalsOrderByEnum`](../enums/ListPrincipals.ListPrincipalsOrderByEnum.md) | Parameter for ordering principals by value. For inverse ordering, supply \'-\' before the param value, such as: ?order_by=-username **`Memberof`** ListPrincipalsApi |
| `sortOrder?` | [`ListPrincipalsSortOrderEnum`](../enums/ListPrincipals.ListPrincipalsSortOrderEnum.md) | The sort order of the query, either ascending or descending. Defaults to ascending. **`Memberof`** ListPrincipalsApi |
| `status?` | [`ListPrincipalsStatusEnum`](../enums/ListPrincipals.ListPrincipalsStatusEnum.md) | Set the status of users to get back. **`Memberof`** ListPrincipalsApi |
| `type?` | [`ListPrincipalsTypeEnum`](../enums/ListPrincipals.ListPrincipalsTypeEnum.md) | Parameter for selecting the type of principal to be returned. **`Memberof`** ListPrincipalsApi |
| `usernameOnly?` | `boolean` | Parameter for optionally returning only usernames for principals, bypassing a call to IT. **`Memberof`** ListPrincipalsApi |
| `usernames?` | `string` | Comma separated usernames of principals to get. If match_criteria is specified, only the first username will be picked up for search. **`Memberof`** ListPrincipalsApi |

#### Defined in

[ListPrincipals/index.ts:14](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/rbac/ListPrincipals/index.ts#L14)

## Functions

### listPrincipalsParamCreator

▸ **listPrincipalsParamCreator**(`...config`): `Promise`\<`RequestArgs`\>

By default, responses are sorted in ascending order by username

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...config` | [[`ListPrincipalsParams`](ListPrincipals.md#listprincipalsparams)] \| [`number`, `number`, [`ListPrincipalsMatchCriteriaEnum`](../enums/ListPrincipals.ListPrincipalsMatchCriteriaEnum.md), `string`, [`ListPrincipalsSortOrderEnum`](../enums/ListPrincipals.ListPrincipalsSortOrderEnum.md), `string`, [`ListPrincipalsStatusEnum`](../enums/ListPrincipals.ListPrincipalsStatusEnum.md), `boolean`, ``"username"``] | with all available params. |

#### Returns

`Promise`\<`RequestArgs`\>

**`Summary`**

List the principals for a tenant

**`Throws`**

#### Defined in

[ListPrincipals/index.ts:139](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/rbac/ListPrincipals/index.ts#L139)
