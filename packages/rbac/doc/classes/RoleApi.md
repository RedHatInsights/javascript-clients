[@redhat-cloud-services/rbac-client](../README.md) / [Exports](../modules.md) / RoleApi

# Class: RoleApi

RoleApi - object-oriented interface

**`Export`**

## Hierarchy

- `BaseAPI`

  ↳ **`RoleApi`**

## Table of contents

### Constructors

- [constructor](RoleApi.md#constructor)

### Properties

- [axios](RoleApi.md#axios)
- [basePath](RoleApi.md#basepath)
- [configuration](RoleApi.md#configuration)

### Methods

- [createRole](RoleApi.md#createrole)
- [deleteRole](RoleApi.md#deleterole)
- [getRole](RoleApi.md#getrole)
- [getRoleAccess](RoleApi.md#getroleaccess)
- [listRoles](RoleApi.md#listroles)
- [patchRole](RoleApi.md#patchrole)
- [updateRole](RoleApi.md#updaterole)

## Constructors

### constructor

• **new RoleApi**(`configuration?`, `basePath?`, `axios?`)

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

### createRole

▸ **createRole**(`roleIn`, `options?`): `Promise`<`AxiosResponse`<[`RoleWithAccess`](../interfaces/RoleWithAccess.md)\>\>

**`Summary`**

Create a role for a tenant

**`Throws`**

**`Memberof`**

RoleApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `roleIn` | [`RoleIn`](../interfaces/RoleIn.md) | Role to create |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`RoleWithAccess`](../interfaces/RoleWithAccess.md)\>\>

#### Defined in

[api.ts:5933](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/rbac/api.ts#L5933)

___

### deleteRole

▸ **deleteRole**(`uuid`, `options?`): `Promise`<`AxiosResponse`<`void`\>\>

**`Summary`**

Delete a role in the tenant

**`Throws`**

**`Memberof`**

RoleApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `uuid` | `string` | ID of role to delete |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<`void`\>\>

#### Defined in

[api.ts:5945](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/rbac/api.ts#L5945)

___

### getRole

▸ **getRole**(`uuid`, `scope?`, `options?`): `Promise`<`AxiosResponse`<[`RoleWithAccess`](../interfaces/RoleWithAccess.md)\>\>

**`Summary`**

Get a role in the tenant

**`Throws`**

**`Memberof`**

RoleApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `uuid` | `string` | ID of role to get |
| `scope?` | ``"account"`` \| ``"principal"`` | Parameter for filtering resource by scope. |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`RoleWithAccess`](../interfaces/RoleWithAccess.md)\>\>

#### Defined in

[api.ts:5958](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/rbac/api.ts#L5958)

___

### getRoleAccess

▸ **getRoleAccess**(`uuid`, `limit?`, `offset?`, `options?`): `Promise`<`AxiosResponse`<[`AccessPagination`](../interfaces/AccessPagination.md)\>\>

**`Summary`**

Get access for a role in the tenant

**`Throws`**

**`Memberof`**

RoleApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `uuid` | `string` | ID of the role |
| `limit?` | `number` | Parameter for selecting the amount of data returned. |
| `offset?` | `number` | Parameter for selecting the offset of data. |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`AccessPagination`](../interfaces/AccessPagination.md)\>\>

#### Defined in

[api.ts:5972](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/rbac/api.ts#L5972)

___

### listRoles

▸ **listRoles**(`limit?`, `offset?`, `name?`, `system?`, `displayName?`, `nameMatch?`, `scope?`, `orderBy?`, `addFields?`, `username?`, `application?`, `permission?`, `externalTenant?`, `options?`): `Promise`<`AxiosResponse`<[`RolePaginationDynamic`](../interfaces/RolePaginationDynamic.md)\>\>

By default, responses are sorted in ascending order by role name

**`Summary`**

List the roles for a tenant

**`Throws`**

**`Memberof`**

RoleApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `limit?` | `number` | Parameter for selecting the amount of data returned. |
| `offset?` | `number` | Parameter for selecting the offset of data. |
| `name?` | `string` | Parameter for filtering resource by name using string contains search. |
| `system?` | `boolean` | Parameter for filtering resource by system flag. |
| `displayName?` | `string` | Parameter for filtering resource by display_name using string contains search. |
| `nameMatch?` | ``"exact"`` \| ``"partial"`` | Parameter for specifying the matching criteria for an object\&#39;s name or display_name. |
| `scope?` | ``"account"`` \| ``"principal"`` | Parameter for filtering resource by scope. |
| `orderBy?` | ``"name"`` \| ``"modified"`` \| ``"policyCount"`` \| ``"display_name"`` | Parameter for ordering roles by value. For inverse ordering, supply \&#39;-\&#39; before the param value, such as: ?order_by&#x3D;-name |
| `addFields?` | (``"groups_in"`` \| ``"groups_in_count"`` \| ``"access"``)[] | Parameter for add list of fields to display for roles. |
| `username?` | `string` | Unique username of the principal to obtain roles for (only available for admins, and if supplied, takes precedence over the identity header). |
| `application?` | `string` | The application name(s) to filter roles by, from permissions or external tenant name. This is an exact match. You may also use a comma-separated list to match on multiple applications. |
| `permission?` | `string` | The permission(s) to filter roles by. This is an exact match. You may also use a comma-separated list to match on multiple permissions. |
| `externalTenant?` | `string` | Parameter for filtering roles by external tenant name using string search. |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`RolePaginationDynamic`](../interfaces/RolePaginationDynamic.md)\>\>

#### Defined in

[api.ts:5996](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/rbac/api.ts#L5996)

___

### patchRole

▸ **patchRole**(`uuid`, `rolePatch?`, `options?`): `Promise`<`AxiosResponse`<[`RoleWithAccess`](../interfaces/RoleWithAccess.md)\>\>

**`Summary`**

Patch a role in the tenant

**`Throws`**

**`Memberof`**

RoleApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `uuid` | `string` | ID of role to update |
| `rolePatch?` | [`RolePatch`](../interfaces/RolePatch.md) | Patch to a role |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`RoleWithAccess`](../interfaces/RoleWithAccess.md)\>\>

#### Defined in

[api.ts:6009](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/rbac/api.ts#L6009)

___

### updateRole

▸ **updateRole**(`uuid`, `roleWithAccess`, `options?`): `Promise`<`AxiosResponse`<`void`\>\>

**`Summary`**

Update a role in the tenant

**`Throws`**

**`Memberof`**

RoleApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `uuid` | `string` | ID of role to update |
| `roleWithAccess` | [`RoleWithAccess`](../interfaces/RoleWithAccess.md) | Update to a role |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<`void`\>\>

#### Defined in

[api.ts:6022](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/rbac/api.ts#L6022)
