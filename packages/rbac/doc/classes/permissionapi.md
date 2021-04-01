[@redhat-cloud-services/rbac-client](../README.md) › [Globals](../globals.md) › [PermissionApi](permissionapi.md)

# Class: PermissionApi

PermissionApi - object-oriented interface

**`export`** 

## Hierarchy

* [BaseAPI](baseapi.md)

  ↳ **PermissionApi**

## Index

### Constructors

* [constructor](permissionapi.md#constructor)

### Properties

* [axios](permissionapi.md#protected-axios)
* [basePath](permissionapi.md#protected-basepath)
* [configuration](permissionapi.md#protected-configuration)

### Methods

* [listPermissionOptions](permissionapi.md#listpermissionoptions)
* [listPermissions](permissionapi.md#listpermissions)

## Constructors

###  constructor

\+ **new PermissionApi**(`configuration?`: [Configuration](configuration.md), `basePath`: string, `axios`: AxiosInstance): *[PermissionApi](permissionapi.md)*

*Inherited from [BaseAPI](baseapi.md).[constructor](baseapi.md#constructor)*

*Defined in [packages/rbac/base.ts:49](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/rbac/base.ts#L49)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`configuration?` | [Configuration](configuration.md) | - |
`basePath` | string | BASE_PATH |
`axios` | AxiosInstance | globalAxios |

**Returns:** *[PermissionApi](permissionapi.md)*

## Properties

### `Protected` axios

• **axios**: *AxiosInstance*

*Inherited from [BaseAPI](baseapi.md).[axios](baseapi.md#protected-axios)*

*Defined in [packages/rbac/base.ts:51](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/rbac/base.ts#L51)*

___

### `Protected` basePath

• **basePath**: *string*

*Inherited from [BaseAPI](baseapi.md).[basePath](baseapi.md#protected-basepath)*

*Defined in [packages/rbac/base.ts:51](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/rbac/base.ts#L51)*

___

### `Protected` configuration

• **configuration**: *[Configuration](configuration.md) | undefined*

*Inherited from [BaseAPI](baseapi.md).[configuration](baseapi.md#protected-configuration)*

*Defined in [packages/rbac/base.ts:49](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/rbac/base.ts#L49)*

## Methods

###  listPermissionOptions

▸ **listPermissionOptions**(`field`: "application" | "resource_type" | "verb", `limit?`: number, `offset?`: number, `application?`: string, `resourceType?`: string, `verb?`: string, `options?`: any): *Promise‹AxiosResponse‹[PermissionOptionsPagination](../interfaces/permissionoptionspagination.md)››*

*Defined in [packages/rbac/api.ts:4293](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/rbac/api.ts#L4293)*

By default, options of application is returned. And could be resource_type or verb on demand.

**`summary`** List the available options for fields of permissions for a tenant

**`throws`** {RequiredError}

**`memberof`** PermissionApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`field` | "application" &#124; "resource_type" &#124; "verb" | specify which fields of permission to display |
`limit?` | number | - |
`offset?` | number | - |
`application?` | string | - |
`resourceType?` | string | - |
`verb?` | string | - |
`options?` | any | - |

**Returns:** *Promise‹AxiosResponse‹[PermissionOptionsPagination](../interfaces/permissionoptionspagination.md)››*

___

###  listPermissions

▸ **listPermissions**(`limit?`: number, `offset?`: number, `orderBy?`: "application" | "resource_type" | "verb" | "permission", `application?`: string, `resourceType?`: string, `verb?`: string, `permission?`: string, `excludeGlobals?`: "true" | "false", `options?`: any): *Promise‹AxiosResponse‹[PermissionPagination](../interfaces/permissionpagination.md)››*

*Defined in [packages/rbac/api.ts:4312](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/rbac/api.ts#L4312)*

By default, responses are sorted in ascending order by permission application.

**`summary`** List the permissions for a tenant

**`throws`** {RequiredError}

**`memberof`** PermissionApi

**Parameters:**

Name | Type |
------ | ------ |
`limit?` | number |
`offset?` | number |
`orderBy?` | "application" &#124; "resource_type" &#124; "verb" &#124; "permission" |
`application?` | string |
`resourceType?` | string |
`verb?` | string |
`permission?` | string |
`excludeGlobals?` | "true" &#124; "false" |
`options?` | any |

**Returns:** *Promise‹AxiosResponse‹[PermissionPagination](../interfaces/permissionpagination.md)››*
