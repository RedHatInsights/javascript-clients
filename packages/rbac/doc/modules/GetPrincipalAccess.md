[@redhat-cloud-services/javascript-clients](../README.md) / [Exports](../modules.md) / GetPrincipalAccess

# Module: GetPrincipalAccess

## Table of contents

### References

- [default](GetPrincipalAccess.md#default)

### Enumerations

- [GetPrincipalAccessOrderByEnum](../enums/GetPrincipalAccess.GetPrincipalAccessOrderByEnum.md)
- [GetPrincipalAccessStatusEnum](../enums/GetPrincipalAccess.GetPrincipalAccessStatusEnum.md)

### Type Aliases

- [GetPrincipalAccessParams](GetPrincipalAccess.md#getprincipalaccessparams)

### Functions

- [getPrincipalAccessParamCreator](GetPrincipalAccess.md#getprincipalaccessparamcreator)

## References

### default

Renames and re-exports [getPrincipalAccessParamCreator](GetPrincipalAccess.md#getprincipalaccessparamcreator)

## Type Aliases

### GetPrincipalAccessParams

Ƭ **GetPrincipalAccessParams**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `application` | `string` | The application name(s) to obtain access for the principal. This is an exact match. When no application is supplied, all permissions for the principal are returned. You may also use a comma-separated list to match on multiple applications. **`Memberof`** GetPrincipalAccessApi |
| `limit?` | `number` | Parameter for selecting the amount of data returned. **`Memberof`** GetPrincipalAccessApi |
| `offset?` | `number` | Parameter for selecting the offset of data. **`Memberof`** GetPrincipalAccessApi |
| `options?` | `AxiosRequestConfig` | - |
| `orderBy?` | [`GetPrincipalAccessOrderByEnum`](../enums/GetPrincipalAccess.GetPrincipalAccessOrderByEnum.md) | Parameter for ordering roles by value. For inverse ordering, supply \'-\' before the param value, such as: ?order_by=-application **`Memberof`** GetPrincipalAccessApi |
| `status?` | [`GetPrincipalAccessStatusEnum`](../enums/GetPrincipalAccess.GetPrincipalAccessStatusEnum.md) | Set the status of users to get back. **`Memberof`** GetPrincipalAccessApi |
| `username?` | `string` | Unique username of the principal to obtain access for (only available for admins, and if supplied, takes precedence over the identity header). **`Memberof`** GetPrincipalAccessApi |

#### Defined in

[GetPrincipalAccess/index.ts:14](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/rbac/GetPrincipalAccess/index.ts#L14)

## Functions

### getPrincipalAccessParamCreator

▸ **getPrincipalAccessParamCreator**(`...config`): `Promise`\<`RequestArgs`\>

Access responses are sorted in ascending order by an ID internal to the database

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...config` | [[`GetPrincipalAccessParams`](GetPrincipalAccess.md#getprincipalaccessparams)] \| [`string`, `string`, [`GetPrincipalAccessOrderByEnum`](../enums/GetPrincipalAccess.GetPrincipalAccessOrderByEnum.md), [`GetPrincipalAccessStatusEnum`](../enums/GetPrincipalAccess.GetPrincipalAccessStatusEnum.md), `number`, `number`, `AxiosRequestConfig`\<`any`\>] | with all available params. |

#### Returns

`Promise`\<`RequestArgs`\>

**`Summary`**

Get the permitted access for a principal in the tenant (defaults to principal from the identity header)

**`Throws`**

#### Defined in

[GetPrincipalAccess/index.ts:84](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/rbac/GetPrincipalAccess/index.ts#L84)
