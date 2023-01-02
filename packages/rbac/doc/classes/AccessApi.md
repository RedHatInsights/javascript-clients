[@redhat-cloud-services/rbac-client](../README.md) / [Exports](../modules.md) / AccessApi

# Class: AccessApi

AccessApi - object-oriented interface

**`Export`**

## Hierarchy

- `BaseAPI`

  ↳ **`AccessApi`**

## Table of contents

### Constructors

- [constructor](AccessApi.md#constructor)

### Properties

- [axios](AccessApi.md#axios)
- [basePath](AccessApi.md#basepath)
- [configuration](AccessApi.md#configuration)

### Methods

- [getPrincipalAccess](AccessApi.md#getprincipalaccess)

## Constructors

### constructor

• **new AccessApi**(`configuration?`, `basePath?`, `axios?`)

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

### getPrincipalAccess

▸ **getPrincipalAccess**(`application`, `username?`, `orderBy?`, `limit?`, `offset?`, `options?`): `Promise`<`AxiosResponse`<[`AccessPagination`](../interfaces/AccessPagination.md), `any`\>\>

Access responses are sorted in ascending order by an ID internal to the database

**`Summary`**

Get the permitted access for a principal in the tenant (defaults to principal from the identity header)

**`Throws`**

**`Memberof`**

AccessApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `application` | `string` | The application name(s) to obtain access for the principal. This is an exact match. When no application is supplied, all permissions for the principal are returned. You may also use a comma-separated list to match on multiple applications. |
| `username?` | `string` | Unique username of the principal to obtain access for (only available for admins, and if supplied, takes precedence over the identity header). |
| `orderBy?` | ``"application"`` \| ``"resource_type"`` \| ``"verb"`` | Parameter for ordering roles by value. For inverse ordering, supply \&#39;-\&#39; before the param value, such as: ?order_by&#x3D;-application |
| `limit?` | `number` | Parameter for selecting the amount of data returned. |
| `offset?` | `number` | Parameter for selecting the offset of data. |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`AccessPagination`](../interfaces/AccessPagination.md), `any`\>\>

#### Defined in

[api.ts:2515](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/rbac/api.ts#L2515)
