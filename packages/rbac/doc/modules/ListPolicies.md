[@redhat-cloud-services/javascript-clients](../README.md) / [Exports](../modules.md) / ListPolicies

# Module: ListPolicies

## Table of contents

### References

- [default](ListPolicies.md#default)

### Enumerations

- [ListPoliciesOrderByEnum](../enums/ListPolicies.ListPoliciesOrderByEnum.md)
- [ListPoliciesScopeEnum](../enums/ListPolicies.ListPoliciesScopeEnum.md)

### Type Aliases

- [ListPoliciesParams](ListPolicies.md#listpoliciesparams)

### Functions

- [listPoliciesParamCreator](ListPolicies.md#listpoliciesparamcreator)

## References

### default

Renames and re-exports [listPoliciesParamCreator](ListPolicies.md#listpoliciesparamcreator)

## Type Aliases

### ListPoliciesParams

Ƭ **ListPoliciesParams**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `groupName?` | `string` | Parameter for filtering resource by group name using string contains search. **`Memberof`** ListPoliciesApi |
| `groupUuid?` | `string` | Parameter for filtering resource by group uuid using UUID exact match. **`Memberof`** ListPoliciesApi |
| `limit?` | `number` | Parameter for selecting the amount of data returned. **`Memberof`** ListPoliciesApi |
| `name?` | `string` | Parameter for filtering resource by name using string contains search. **`Memberof`** ListPoliciesApi |
| `offset?` | `number` | Parameter for selecting the offset of data. **`Memberof`** ListPoliciesApi |
| `options?` | `AxiosRequestConfig` | - |
| `orderBy?` | [`ListPoliciesOrderByEnum`](../enums/ListPolicies.ListPoliciesOrderByEnum.md) | Parameter for ordering policies by value. For inverse ordering, supply \'-\' before the param value, such as: ?order_by=-name **`Memberof`** ListPoliciesApi |
| `scope?` | [`ListPoliciesScopeEnum`](../enums/ListPolicies.ListPoliciesScopeEnum.md) | Parameter for filtering resource by scope. **`Memberof`** ListPoliciesApi |

#### Defined in

[ListPolicies/index.ts:14](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/rbac/ListPolicies/index.ts#L14)

## Functions

### listPoliciesParamCreator

▸ **listPoliciesParamCreator**(`...config`): `Promise`\<`RequestArgs`\>

By default, responses are sorted in ascending order by policy name

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...config` | [[`ListPoliciesParams`](ListPolicies.md#listpoliciesparams)] \| [`number`, `number`, `string`, [`ListPoliciesScopeEnum`](../enums/ListPolicies.ListPoliciesScopeEnum.md), `string`, `string`, [`ListPoliciesOrderByEnum`](../enums/ListPolicies.ListPoliciesOrderByEnum.md), `AxiosRequestConfig`\<`any`\>] | with all available params. |

#### Returns

`Promise`\<`RequestArgs`\>

**`Summary`**

List the policies in the tenant

**`Throws`**

#### Defined in

[ListPolicies/index.ts:88](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/rbac/ListPolicies/index.ts#L88)
