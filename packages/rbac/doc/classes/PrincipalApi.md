[@redhat-cloud-services/rbac-client](../README.md) / [Exports](../modules.md) / PrincipalApi

# Class: PrincipalApi

PrincipalApi - object-oriented interface

**`Export`**

## Hierarchy

- `BaseAPI`

  ↳ **`PrincipalApi`**

## Table of contents

### Constructors

- [constructor](PrincipalApi.md#constructor)

### Properties

- [axios](PrincipalApi.md#axios)
- [basePath](PrincipalApi.md#basepath)
- [configuration](PrincipalApi.md#configuration)

### Methods

- [listPrincipals](PrincipalApi.md#listprincipals)

## Constructors

### constructor

• **new PrincipalApi**(`configuration?`, `basePath?`, `axios?`)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `configuration?` | [`Configuration`](Configuration.md) | `undefined` |
| `basePath` | `string` | `BASE_PATH` |
| `axios` | `AxiosInstance` | `globalAxios` |

#### Inherited from

BaseAPI.constructor

#### Defined in

[base.ts:51](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/rbac/base.ts#L51)

## Properties

### axios

• `Protected` **axios**: `AxiosInstance` = `globalAxios`

#### Inherited from

BaseAPI.axios

#### Defined in

[base.ts:51](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/rbac/base.ts#L51)

___

### basePath

• `Protected` **basePath**: `string` = `BASE_PATH`

#### Inherited from

BaseAPI.basePath

#### Defined in

[base.ts:51](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/rbac/base.ts#L51)

___

### configuration

• `Protected` **configuration**: [`Configuration`](Configuration.md)

#### Inherited from

BaseAPI.configuration

#### Defined in

[base.ts:49](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/rbac/base.ts#L49)

## Methods

### listPrincipals

▸ **listPrincipals**(`limit?`, `offset?`, `matchCriteria?`, `usernames?`, `sortOrder?`, `email?`, `status?`, `adminOnly?`, `orderBy?`, `usernameOnly?`, `options?`): `Promise`<`AxiosResponse`<[`PrincipalPagination`](../interfaces/PrincipalPagination.md), `any`\>\>

By default, responses are sorted in ascending order by username

**`Summary`**

List the principals for a tenant

**`Throws`**

**`Memberof`**

PrincipalApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `limit?` | `number` | Parameter for selecting the amount of data returned. |
| `offset?` | `number` | Parameter for selecting the offset of data. |
| `matchCriteria?` | ``"exact"`` \| ``"partial"`` | Parameter for specifying the matching criteria for an object\&#39;s name and/or email. Currently, match_criteria of partial searches for a username/email using \&quot;starts with\&quot; pattern. |
| `usernames?` | `string` | Comma separated usernames of principals to get. If match_criteria is specified, only the first username will be picked up for search. |
| `sortOrder?` | ``"desc"`` \| ``"asc"`` | The sort order of the query, either ascending or descending. Defaults to ascending. |
| `email?` | `string` | E-mail address of principal to search for. Could be combined with match_criteria for searching. |
| `status?` | ``"all"`` \| ``"disabled"`` \| ``"enabled"`` | Set the status of users to get back. |
| `adminOnly?` | ``"false"`` \| ``"true"`` | Get only admin users within an account. Setting this would ignore the parameters: usernames, email |
| `orderBy?` | ``"username"`` | Parameter for ordering principals by value. For inverse ordering, supply \&#39;-\&#39; before the param value, such as: ?order_by&#x3D;-username |
| `usernameOnly?` | `boolean` | Parameter for optionally returning only usernames for principals, bypassing a call to IT. |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`PrincipalPagination`](../interfaces/PrincipalPagination.md), `any`\>\>

#### Defined in

[api.ts:5211](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/rbac/api.ts#L5211)
