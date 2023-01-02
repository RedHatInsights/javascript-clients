[@redhat-cloud-services/rbac-client](../README.md) / [Exports](../modules.md) / PermissionApi

# Class: PermissionApi

PermissionApi - object-oriented interface

**`Export`**

## Hierarchy

- `BaseAPI`

  ↳ **`PermissionApi`**

## Table of contents

### Constructors

- [constructor](PermissionApi.md#constructor)

### Properties

- [axios](PermissionApi.md#axios)
- [basePath](PermissionApi.md#basepath)
- [configuration](PermissionApi.md#configuration)

### Methods

- [listPermissionOptions](PermissionApi.md#listpermissionoptions)
- [listPermissions](PermissionApi.md#listpermissions)

## Constructors

### constructor

• **new PermissionApi**(`configuration?`, `basePath?`, `axios?`)

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

### listPermissionOptions

▸ **listPermissionOptions**(`field`, `limit?`, `offset?`, `application?`, `resourceType?`, `verb?`, `excludeGlobals?`, `allowedOnly?`, `options?`): `Promise`<`AxiosResponse`<[`PermissionOptionsPagination`](../interfaces/PermissionOptionsPagination.md), `any`\>\>

By default, options of application is returned. And could be resource_type or verb on demand.

**`Summary`**

List the available options for fields of permissions for a tenant

**`Throws`**

**`Memberof`**

PermissionApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `field` | ``"application"`` \| ``"resource_type"`` \| ``"verb"`` | specify which fields of permission to display |
| `limit?` | `number` | Parameter for selecting the amount of data returned. |
| `offset?` | `number` | Parameter for selecting the offset of data. |
| `application?` | `string` | Filter returned options based on application. You may also use a comma-separated list to filter on multiple applications. |
| `resourceType?` | `string` | Filter returned options based on resource_type. You may also use a comma-separated list to filter on multiple resource_types. |
| `verb?` | `string` | Filter returned options based on verb. You may also use a comma-separated list to filter on multiple verbs. |
| `excludeGlobals?` | ``"false"`` \| ``"true"`` | If set to \&#39;true\&#39;, this will exclude any permission option with a global allowance on the supplied \&#39;?field&#x3D;\&#39; value of \&#39;application\&#39;, \&#39;resource_type\&#39; or \&#39;verb\&#39;. The default is \&#39;false\&#39;. |
| `allowedOnly?` | ``"false"`` \| ``"true"`` | If set to \&#39;true\&#39;, this will exclude any permission with a role where the \&#39;application\&#39; is not in the role create allow list. |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`PermissionOptionsPagination`](../interfaces/PermissionOptionsPagination.md), `any`\>\>

#### Defined in

[api.ts:4515](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/rbac/api.ts#L4515)

___

### listPermissions

▸ **listPermissions**(`limit?`, `offset?`, `orderBy?`, `application?`, `resourceType?`, `verb?`, `permission?`, `excludeGlobals?`, `excludeRoles?`, `allowedOnly?`, `options?`): `Promise`<`AxiosResponse`<[`PermissionPagination`](../interfaces/PermissionPagination.md), `any`\>\>

By default, responses are sorted in ascending order by permission application.

**`Summary`**

List the permissions for a tenant

**`Throws`**

**`Memberof`**

PermissionApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `limit?` | `number` | Parameter for selecting the amount of data returned. |
| `offset?` | `number` | Parameter for selecting the offset of data. |
| `orderBy?` | ``"application"`` \| ``"resource_type"`` \| ``"verb"`` \| ``"permission"`` | Parameter for ordering permissions by value. For inverse ordering, supply \&#39;-\&#39; before the param value, such as: ?order_by&#x3D;-application |
| `application?` | `string` | Exact match for the application name of a permission. You may also use a comma-separated list to match on multiple applications. |
| `resourceType?` | `string` | Exact match for the resource type name of a permission. You may also use a comma-separated list to match on multiple resource_types. |
| `verb?` | `string` | Exact match for the operation verb name of a permission You may also use a comma-separated list to match on multiple verbs. |
| `permission?` | `string` | Partial match for the aggregate permission value name of a permission object. |
| `excludeGlobals?` | ``"false"`` \| ``"true"`` | If set to \&#39;true\&#39;, this will exclude any permission with a global allowance on either \&#39;application\&#39;, \&#39;resource_type\&#39; or \&#39;verb\&#39;. The default is \&#39;false\&#39;. |
| `excludeRoles?` | `string` | An optional string filter which accepts one or more role UUIDs, comma-separated, to return permissions not associated with the supplied role(s). |
| `allowedOnly?` | ``"false"`` \| ``"true"`` | If set to \&#39;true\&#39;, this will exclude any permission with a role where the \&#39;application\&#39; is not in the role create allow list. |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`PermissionPagination`](../interfaces/PermissionPagination.md), `any`\>\>

#### Defined in

[api.ts:4536](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/rbac/api.ts#L4536)
