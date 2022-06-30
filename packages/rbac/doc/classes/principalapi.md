[@redhat-cloud-services/rbac-client](../README.md) › [Globals](../globals.md) › [PrincipalApi](principalapi.md)

# Class: PrincipalApi

PrincipalApi - object-oriented interface

**`export`** 

## Hierarchy

* [BaseAPI](baseapi.md)

  ↳ **PrincipalApi**

## Index

### Constructors

* [constructor](principalapi.md#constructor)

### Properties

* [axios](principalapi.md#protected-axios)
* [basePath](principalapi.md#protected-basepath)
* [configuration](principalapi.md#protected-configuration)

### Methods

* [listPrincipals](principalapi.md#listprincipals)

## Constructors

###  constructor

\+ **new PrincipalApi**(`configuration?`: [Configuration](configuration.md), `basePath`: string, `axios`: AxiosInstance): *[PrincipalApi](principalapi.md)*

*Inherited from [BaseAPI](baseapi.md).[constructor](baseapi.md#constructor)*

*Defined in [base.ts:49](https://github.com/RedHatInsights/javascript-clients.gi/blob/master/packages/rbac/base.ts#L49)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`configuration?` | [Configuration](configuration.md) | - |
`basePath` | string | BASE_PATH |
`axios` | AxiosInstance | globalAxios |

**Returns:** *[PrincipalApi](principalapi.md)*

## Properties

### `Protected` axios

• **axios**: *AxiosInstance*

*Inherited from [BaseAPI](baseapi.md).[axios](baseapi.md#protected-axios)*

*Defined in [base.ts:51](https://github.com/RedHatInsights/javascript-clients.gi/blob/master/packages/rbac/base.ts#L51)*

___

### `Protected` basePath

• **basePath**: *string*

*Inherited from [BaseAPI](baseapi.md).[basePath](baseapi.md#protected-basepath)*

*Defined in [base.ts:51](https://github.com/RedHatInsights/javascript-clients.gi/blob/master/packages/rbac/base.ts#L51)*

___

### `Protected` configuration

• **configuration**: *[Configuration](configuration.md) | undefined*

*Inherited from [BaseAPI](baseapi.md).[configuration](baseapi.md#protected-configuration)*

*Defined in [base.ts:49](https://github.com/RedHatInsights/javascript-clients.gi/blob/master/packages/rbac/base.ts#L49)*

## Methods

###  listPrincipals

▸ **listPrincipals**(`limit?`: number, `offset?`: number, `matchCriteria?`: "partial" | "exact", `usernames?`: string, `sortOrder?`: "asc" | "desc", `email?`: string, `status?`: "enabled" | "disabled" | "all", `adminOnly?`: "true" | "false", `orderBy?`: "username", `options?`: any): *Promise‹AxiosResponse‹[PrincipalPagination](../interfaces/principalpagination.md)››*

*Defined in [api.ts:5114](https://github.com/RedHatInsights/javascript-clients.gi/blob/master/packages/rbac/api.ts#L5114)*

By default, responses are sorted in ascending order by username

**`summary`** List the principals for a tenant

**`throws`** {RequiredError}

**`memberof`** PrincipalApi

**Parameters:**

Name | Type |
------ | ------ |
`limit?` | number |
`offset?` | number |
`matchCriteria?` | "partial" &#124; "exact" |
`usernames?` | string |
`sortOrder?` | "asc" &#124; "desc" |
`email?` | string |
`status?` | "enabled" &#124; "disabled" &#124; "all" |
`adminOnly?` | "true" &#124; "false" |
`orderBy?` | "username" |
`options?` | any |

**Returns:** *Promise‹AxiosResponse‹[PrincipalPagination](../interfaces/principalpagination.md)››*
