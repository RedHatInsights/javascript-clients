[@redhat-cloud-services/rbac-client](../README.md) / [Exports](../modules.md) / GroupApi

# Class: GroupApi

GroupApi - object-oriented interface

**`Export`**

## Hierarchy

- `BaseAPI`

  ↳ **`GroupApi`**

## Table of contents

### Constructors

- [constructor](GroupApi.md#constructor)

### Properties

- [axios](GroupApi.md#axios)
- [basePath](GroupApi.md#basepath)
- [configuration](GroupApi.md#configuration)

### Methods

- [addPrincipalToGroup](GroupApi.md#addprincipaltogroup)
- [addRoleToGroup](GroupApi.md#addroletogroup)
- [createGroup](GroupApi.md#creategroup)
- [deleteGroup](GroupApi.md#deletegroup)
- [deletePrincipalFromGroup](GroupApi.md#deleteprincipalfromgroup)
- [deleteRoleFromGroup](GroupApi.md#deleterolefromgroup)
- [getGroup](GroupApi.md#getgroup)
- [getPrincipalsFromGroup](GroupApi.md#getprincipalsfromgroup)
- [listGroups](GroupApi.md#listgroups)
- [listRolesForGroup](GroupApi.md#listrolesforgroup)
- [updateGroup](GroupApi.md#updategroup)

## Constructors

### constructor

• **new GroupApi**(`configuration?`, `basePath?`, `axios?`)

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

### addPrincipalToGroup

▸ **addPrincipalToGroup**(`uuid`, `groupPrincipalIn`, `options?`): `Promise`<`AxiosResponse`<[`GroupWithPrincipalsAndRoles`](../interfaces/GroupWithPrincipalsAndRoles.md), `any`\>\>

**`Summary`**

Add a principal to a group in the tenant

**`Throws`**

**`Memberof`**

GroupApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `uuid` | `string` | ID of group to update |
| `groupPrincipalIn` | [`GroupPrincipalIn`](../interfaces/GroupPrincipalIn.md) | Principal to add to a group |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`GroupWithPrincipalsAndRoles`](../interfaces/GroupWithPrincipalsAndRoles.md), `any`\>\>

#### Defined in

[api.ts:4063](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/rbac/api.ts#L4063)

___

### addRoleToGroup

▸ **addRoleToGroup**(`uuid`, `groupRoleIn`, `options?`): `Promise`<`AxiosResponse`<[`InlineResponse200`](../interfaces/InlineResponse200.md), `any`\>\>

**`Summary`**

Add a role to a group in the tenant

**`Throws`**

**`Memberof`**

GroupApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `uuid` | `string` | ID of group to update |
| `groupRoleIn` | [`GroupRoleIn`](../interfaces/GroupRoleIn.md) | Role to add to a group |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`InlineResponse200`](../interfaces/InlineResponse200.md), `any`\>\>

#### Defined in

[api.ts:4076](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/rbac/api.ts#L4076)

___

### createGroup

▸ **createGroup**(`group`, `options?`): `Promise`<`AxiosResponse`<[`GroupOut`](../interfaces/GroupOut.md), `any`\>\>

**`Summary`**

Create a group in a tenant

**`Throws`**

**`Memberof`**

GroupApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `group` | [`Group`](../interfaces/Group.md) | Group to create in tenant |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`GroupOut`](../interfaces/GroupOut.md), `any`\>\>

#### Defined in

[api.ts:4088](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/rbac/api.ts#L4088)

___

### deleteGroup

▸ **deleteGroup**(`uuid`, `options?`): `Promise`<`AxiosResponse`<`void`, `any`\>\>

**`Summary`**

Delete a group in the tenant

**`Throws`**

**`Memberof`**

GroupApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `uuid` | `string` | ID of group to delete |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<`void`, `any`\>\>

#### Defined in

[api.ts:4100](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/rbac/api.ts#L4100)

___

### deletePrincipalFromGroup

▸ **deletePrincipalFromGroup**(`uuid`, `usernames`, `options?`): `Promise`<`AxiosResponse`<`void`, `any`\>\>

**`Summary`**

Remove a principal from a group in the tenant

**`Throws`**

**`Memberof`**

GroupApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `uuid` | `string` | ID of group to update |
| `usernames` | `string` | A comma separated list of usernames for principals to remove from the group |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<`void`, `any`\>\>

#### Defined in

[api.ts:4113](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/rbac/api.ts#L4113)

___

### deleteRoleFromGroup

▸ **deleteRoleFromGroup**(`uuid`, `roles`, `options?`): `Promise`<`AxiosResponse`<`void`, `any`\>\>

**`Summary`**

Remove a role from a group in the tenant

**`Throws`**

**`Memberof`**

GroupApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `uuid` | `string` | ID of group to update |
| `roles` | `string` | A comma separated list of role UUIDs for roles to remove from the group |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<`void`, `any`\>\>

#### Defined in

[api.ts:4126](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/rbac/api.ts#L4126)

___

### getGroup

▸ **getGroup**(`uuid`, `options?`): `Promise`<`AxiosResponse`<[`GroupWithPrincipalsAndRoles`](../interfaces/GroupWithPrincipalsAndRoles.md), `any`\>\>

**`Summary`**

Get a group in the tenant

**`Throws`**

**`Memberof`**

GroupApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `uuid` | `string` | ID of group to get |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`GroupWithPrincipalsAndRoles`](../interfaces/GroupWithPrincipalsAndRoles.md), `any`\>\>

#### Defined in

[api.ts:4138](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/rbac/api.ts#L4138)

___

### getPrincipalsFromGroup

▸ **getPrincipalsFromGroup**(`uuid`, `principalUsername?`, `limit?`, `offset?`, `orderBy?`, `usernameOnly?`, `options?`): `Promise`<`AxiosResponse`<[`PrincipalPagination`](../interfaces/PrincipalPagination.md), `any`\>\>

By default, responses are sorted in ascending order by username

**`Summary`**

Get a list of principals from a group in the tenant

**`Throws`**

**`Memberof`**

GroupApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `uuid` | `string` | ID of group from which to get principals |
| `principalUsername?` | `string` | Parameter for filtering group principals by principal &#x60;username&#x60; using string contains search. |
| `limit?` | `number` | Parameter for selecting the amount of data returned. |
| `offset?` | `number` | Parameter for selecting the offset of data. |
| `orderBy?` | ``"username"`` | Parameter for ordering principals by value. For inverse ordering, supply \&#39;-\&#39; before the param value, such as: ?order_by&#x3D;-username |
| `usernameOnly?` | `boolean` | Parameter for optionally returning only usernames for principals, bypassing a call to IT. |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`PrincipalPagination`](../interfaces/PrincipalPagination.md), `any`\>\>

#### Defined in

[api.ts:4155](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/rbac/api.ts#L4155)

___

### listGroups

▸ **listGroups**(`limit?`, `offset?`, `name?`, `nameMatch?`, `scope?`, `username?`, `uuid?`, `roleNames?`, `roleDiscriminator?`, `orderBy?`, `platformDefault?`, `adminDefault?`, `system?`, `options?`): `Promise`<`AxiosResponse`<[`GroupPagination`](../interfaces/GroupPagination.md), `any`\>\>

By default, responses are sorted in ascending order by group name

**`Summary`**

List the groups for a tenant

**`Throws`**

**`Memberof`**

GroupApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `limit?` | `number` | Parameter for selecting the amount of data returned. |
| `offset?` | `number` | Parameter for selecting the offset of data. |
| `name?` | `string` | Parameter for filtering resource by name using string contains search. |
| `nameMatch?` | ``"exact"`` \| ``"partial"`` | Parameter for specifying the matching criteria for an object\&#39;s name or display_name. |
| `scope?` | ``"account"`` \| ``"principal"`` | Parameter for filtering resource by scope. |
| `username?` | `string` | A username for a principal to filter for groups |
| `uuid?` | `string`[] | A list of UUIDs to filter listed groups. |
| `roleNames?` | `string`[] | List of role name to filter for groups. It is exact match but case-insensitive |
| `roleDiscriminator?` | ``"all"`` \| ``"any"`` | Discriminator that works with role_names to indicate matching all/any of the role names |
| `orderBy?` | ``"name"`` \| ``"modified"`` \| ``"principalCount"`` \| ``"policyCount"`` | Parameter for ordering groups by value. For inverse ordering, supply \&#39;-\&#39; before the param value, such as: ?order_by&#x3D;-name |
| `platformDefault?` | `boolean` | An optional flag to return either platform default or non-platform default groups. |
| `adminDefault?` | `boolean` | An optional flag to return either admin default or non-admin default groups. |
| `system?` | `boolean` | An optional flag to return either system or non-system groups. |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`GroupPagination`](../interfaces/GroupPagination.md), `any`\>\>

#### Defined in

[api.ts:4179](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/rbac/api.ts#L4179)

___

### listRolesForGroup

▸ **listRolesForGroup**(`uuid`, `exclude?`, `roleName?`, `roleDisplayName?`, `roleDescription?`, `roleSystem?`, `roleExternalTenant?`, `limit?`, `offset?`, `orderBy?`, `options?`): `Promise`<`AxiosResponse`<[`GroupRolesPagination`](../interfaces/GroupRolesPagination.md), `any`\>\>

By default, responses are sorted in ascending order by role name

**`Summary`**

List the roles for a group in the tenant

**`Throws`**

**`Memberof`**

GroupApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `uuid` | `string` | ID of group |
| `exclude?` | `boolean` | If this is set to true, the result would be roles excluding the ones in the group |
| `roleName?` | `string` | Parameter for filtering group roles by role &#x60;name&#x60; using string contains search. |
| `roleDisplayName?` | `string` | Parameter for filtering group roles by role &#x60;display_name&#x60; using string contains search. |
| `roleDescription?` | `string` | Parameter for filtering group roles by role &#x60;description&#x60; using string contains search. |
| `roleSystem?` | `boolean` | Parameter for filtering group roles by system flag. |
| `roleExternalTenant?` | `string` | Parameter for filtering group roles by role &#x60;external_tenant&#x60; using string search. |
| `limit?` | `number` | Parameter for selecting the amount of data returned. |
| `offset?` | `number` | Parameter for selecting the offset of data. |
| `orderBy?` | ``"name"`` \| ``"modified"`` \| ``"policyCount"`` \| ``"display_name"`` | Parameter for ordering roles by value. For inverse ordering, supply \&#39;-\&#39; before the param value, such as: ?order_by&#x3D;-name |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`GroupRolesPagination`](../interfaces/GroupRolesPagination.md), `any`\>\>

#### Defined in

[api.ts:4200](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/rbac/api.ts#L4200)

___

### updateGroup

▸ **updateGroup**(`uuid`, `group`, `options?`): `Promise`<`AxiosResponse`<[`GroupOut`](../interfaces/GroupOut.md), `any`\>\>

**`Summary`**

Update a group in the tenant

**`Throws`**

**`Memberof`**

GroupApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `uuid` | `string` | ID of group to update |
| `group` | [`Group`](../interfaces/Group.md) | Group to update in tenant |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`GroupOut`](../interfaces/GroupOut.md), `any`\>\>

#### Defined in

[api.ts:4213](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/rbac/api.ts#L4213)
