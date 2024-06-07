[@redhat-cloud-services/javascript-clients](../README.md) / [Exports](../modules.md) / GetPrincipalsFromGroup

# Module: GetPrincipalsFromGroup

## Table of contents

### References

- [default](GetPrincipalsFromGroup.md#default)

### Enumerations

- [GetPrincipalsFromGroupOrderByEnum](../enums/GetPrincipalsFromGroup.GetPrincipalsFromGroupOrderByEnum.md)
- [GetPrincipalsFromGroupPrincipalTypeEnum](../enums/GetPrincipalsFromGroup.GetPrincipalsFromGroupPrincipalTypeEnum.md)

### Type Aliases

- [GetPrincipalsFromGroupParams](GetPrincipalsFromGroup.md#getprincipalsfromgroupparams)

### Functions

- [getPrincipalsFromGroupParamCreator](GetPrincipalsFromGroup.md#getprincipalsfromgroupparamcreator)

## References

### default

Renames and re-exports [getPrincipalsFromGroupParamCreator](GetPrincipalsFromGroup.md#getprincipalsfromgroupparamcreator)

## Type Aliases

### GetPrincipalsFromGroupParams

Ƭ **GetPrincipalsFromGroupParams**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `adminOnly?` | `boolean` | Get only admin users within an account. **`Memberof`** GetPrincipalsFromGroupApi |
| `limit?` | `number` | Parameter for selecting the amount of data returned. **`Memberof`** GetPrincipalsFromGroupApi |
| `offset?` | `number` | Parameter for selecting the offset of data. **`Memberof`** GetPrincipalsFromGroupApi |
| `options?` | `AxiosRequestConfig` | - |
| `orderBy?` | [`GetPrincipalsFromGroupOrderByEnum`](../enums/GetPrincipalsFromGroup.GetPrincipalsFromGroupOrderByEnum.md) | Parameter for ordering principals by value. For inverse ordering, supply \'-\' before the param value, such as: ?order_by=-username **`Memberof`** GetPrincipalsFromGroupApi |
| `principalType?` | [`GetPrincipalsFromGroupPrincipalTypeEnum`](../enums/GetPrincipalsFromGroup.GetPrincipalsFromGroupPrincipalTypeEnum.md) | Parameter for selecting the type of principal to be returned. **`Memberof`** GetPrincipalsFromGroupApi |
| `principalUsername?` | `string` | Parameter for filtering group principals by principal `username` using string contains search. **`Memberof`** GetPrincipalsFromGroupApi |
| `serviceAccountClientIds?` | `string` | By specifying a comma separated list of client IDs with this query parameter, RBAC will return an object with the specified client ID and it\'s matching boolean value to flag whether the client ID is present in the group or not. This query parameter cannot be used along with any other query parameter. **`Memberof`** GetPrincipalsFromGroupApi |
| `serviceAccountDescription?` | `string` | Parameter for filtering the service accounts by their description. **`Memberof`** GetPrincipalsFromGroupApi |
| `serviceAccountName?` | `string` | Parameter for filtering the service accounts by their name. **`Memberof`** GetPrincipalsFromGroupApi |
| `usernameOnly?` | `boolean` | Parameter for optionally returning only usernames for principals, bypassing a call to IT. **`Memberof`** GetPrincipalsFromGroupApi |
| `uuid` | `string` | ID of group from which to get principal **`Memberof`** GetPrincipalsFromGroupApi |

#### Defined in

[GetPrincipalsFromGroup/index.ts:14](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/rbac/GetPrincipalsFromGroup/index.ts#L14)

## Functions

### getPrincipalsFromGroupParamCreator

▸ **getPrincipalsFromGroupParamCreator**(`...config`): `Promise`\<`RequestArgs`\>

By default, responses are sorted in ascending order by username

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...config` | [[`GetPrincipalsFromGroupParams`](GetPrincipalsFromGroup.md#getprincipalsfromgroupparams)] \| [`string`, `boolean`, `string`, `number`, `number`, ``"username"``, `boolean`, [`GetPrincipalsFromGroupPrincipalTypeEnum`](../enums/GetPrincipalsFromGroup.GetPrincipalsFromGroupPrincipalTypeEnum.md), `string`, `string`, `string`, `AxiosRequestConfig`\<`any`\>] | with all available params. |

#### Returns

`Promise`\<`RequestArgs`\>

**`Summary`**

Get a list of principals from a group in the tenant

**`Throws`**

#### Defined in

[GetPrincipalsFromGroup/index.ts:111](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/rbac/GetPrincipalsFromGroup/index.ts#L111)
