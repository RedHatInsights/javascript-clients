[@redhat-cloud-services/rbac-client](../README.md) > [GroupApi](../classes/groupapi.md)

# Class: GroupApi

GroupApi - object-oriented interface

*__export__*: 

*__class__*: GroupApi

*__extends__*: {BaseAPI}

## Hierarchy

 [BaseAPI](baseapi.md)

**↳ GroupApi**

## Index

### Constructors

* [constructor](groupapi.md#constructor)

### Properties

* [axios](groupapi.md#axios)
* [basePath](groupapi.md#basepath)
* [configuration](groupapi.md#configuration)

### Methods

* [addPrincipalToGroup](groupapi.md#addprincipaltogroup)
* [addRoleToGroup](groupapi.md#addroletogroup)
* [createGroup](groupapi.md#creategroup)
* [deleteGroup](groupapi.md#deletegroup)
* [deletePrincipalFromGroup](groupapi.md#deleteprincipalfromgroup)
* [deleteRoleFromGroup](groupapi.md#deleterolefromgroup)
* [getGroup](groupapi.md#getgroup)
* [listGroups](groupapi.md#listgroups)
* [listRolesForGroup](groupapi.md#listrolesforgroup)
* [updateGroup](groupapi.md#updategroup)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new GroupApi**(configuration?: *[Configuration](configuration.md)*, basePath?: *`string`*, axios?: *`AxiosInstance`*): [GroupApi](groupapi.md)

*Inherited from [BaseAPI](baseapi.md).[constructor](baseapi.md#constructor)*

*Defined in [api.ts:49](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/rbac/api.ts#L49)*

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| `Optional` configuration | [Configuration](configuration.md) | - |
| `Default value` basePath | `string` |  BASE_PATH |
| `Default value` axios | `AxiosInstance` |  globalAxios |

**Returns:** [GroupApi](groupapi.md)

___

## Properties

<a id="axios"></a>

### `<Protected>` axios

**● axios**: *`AxiosInstance`*

*Inherited from [BaseAPI](baseapi.md).[axios](baseapi.md#axios)*

*Defined in [api.ts:51](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/rbac/api.ts#L51)*

___
<a id="basepath"></a>

### `<Protected>` basePath

**● basePath**: *`string`*

*Inherited from [BaseAPI](baseapi.md).[basePath](baseapi.md#basepath)*

*Defined in [api.ts:51](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/rbac/api.ts#L51)*

___
<a id="configuration"></a>

### `<Protected>` configuration

**● configuration**: *[Configuration](configuration.md) \| `undefined`*

*Inherited from [BaseAPI](baseapi.md).[configuration](baseapi.md#configuration)*

*Defined in [api.ts:49](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/rbac/api.ts#L49)*

___

## Methods

<a id="addprincipaltogroup"></a>

###  addPrincipalToGroup

▸ **addPrincipalToGroup**(uuid: *`string`*, groupPrincipalIn: *[GroupPrincipalIn](../interfaces/groupprincipalin.md)*, options?: *`any`*): `AxiosPromise`<[GroupWithPrincipalsAndRoles](../interfaces/groupwithprincipalsandroles.md)>

*Defined in [api.ts:1873](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/rbac/api.ts#L1873)*

*__summary__*: Add a principal to a group in the tenant

*__throws__*: {RequiredError}

*__memberof__*: GroupApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| uuid | `string` |  ID of group to update |
| groupPrincipalIn | [GroupPrincipalIn](../interfaces/groupprincipalin.md) |  Principal to add to a group |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[GroupWithPrincipalsAndRoles](../interfaces/groupwithprincipalsandroles.md)>

___
<a id="addroletogroup"></a>

###  addRoleToGroup

▸ **addRoleToGroup**(uuid: *`string`*, groupRoleIn: *[GroupRoleIn](../interfaces/grouprolein.md)*, options?: *`any`*): `AxiosPromise`<[GroupWithPrincipalsAndRoles](../interfaces/groupwithprincipalsandroles.md)>

*Defined in [api.ts:1886](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/rbac/api.ts#L1886)*

*__summary__*: Add a role to a group in the tenant

*__throws__*: {RequiredError}

*__memberof__*: GroupApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| uuid | `string` |  ID of group to update |
| groupRoleIn | [GroupRoleIn](../interfaces/grouprolein.md) |  Role to add to a group |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[GroupWithPrincipalsAndRoles](../interfaces/groupwithprincipalsandroles.md)>

___
<a id="creategroup"></a>

###  createGroup

▸ **createGroup**(group: *[Group](../interfaces/group.md)*, options?: *`any`*): `AxiosPromise`<[GroupOut](../interfaces/groupout.md)>

*Defined in [api.ts:1898](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/rbac/api.ts#L1898)*

*__summary__*: Create a group in a tenant

*__throws__*: {RequiredError}

*__memberof__*: GroupApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| group | [Group](../interfaces/group.md) |  Group to create in tenant |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[GroupOut](../interfaces/groupout.md)>

___
<a id="deletegroup"></a>

###  deleteGroup

▸ **deleteGroup**(uuid: *`string`*, options?: *`any`*): `AxiosPromise`<`Response`>

*Defined in [api.ts:1910](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/rbac/api.ts#L1910)*

*__summary__*: Delete a group in the tenant

*__throws__*: {RequiredError}

*__memberof__*: GroupApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| uuid | `string` |  ID of group to delete |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<`Response`>

___
<a id="deleteprincipalfromgroup"></a>

###  deletePrincipalFromGroup

▸ **deletePrincipalFromGroup**(uuid: *`string`*, usernames: *`string`*, options?: *`any`*): `AxiosPromise`<`Response`>

*Defined in [api.ts:1923](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/rbac/api.ts#L1923)*

*__summary__*: Remove a principal from a group in the tenant

*__throws__*: {RequiredError}

*__memberof__*: GroupApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| uuid | `string` |  ID of group to update |
| usernames | `string` |  A comma separated list of usernames for principals to remove from the group |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<`Response`>

___
<a id="deleterolefromgroup"></a>

###  deleteRoleFromGroup

▸ **deleteRoleFromGroup**(uuid: *`string`*, roles: *`string`*, options?: *`any`*): `AxiosPromise`<`Response`>

*Defined in [api.ts:1936](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/rbac/api.ts#L1936)*

*__summary__*: Remove a role from a group in the tenant

*__throws__*: {RequiredError}

*__memberof__*: GroupApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| uuid | `string` |  ID of group to update |
| roles | `string` |  A comma separated list of role UUIDs for roles to remove from the group |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<`Response`>

___
<a id="getgroup"></a>

###  getGroup

▸ **getGroup**(uuid: *`string`*, options?: *`any`*): `AxiosPromise`<[GroupWithPrincipalsAndRoles](../interfaces/groupwithprincipalsandroles.md)>

*Defined in [api.ts:1948](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/rbac/api.ts#L1948)*

*__summary__*: Get a group in the tenant

*__throws__*: {RequiredError}

*__memberof__*: GroupApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| uuid | `string` |  ID of group to get |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[GroupWithPrincipalsAndRoles](../interfaces/groupwithprincipalsandroles.md)>

___
<a id="listgroups"></a>

###  listGroups

▸ **listGroups**(limit?: *`number`*, offset?: *`number`*, name?: *`string`*, scope?: *"account" \| "principal"*, username?: *`string`*, orderBy?: *`string`*, options?: *`any`*): `AxiosPromise`<[GroupPagination](../interfaces/grouppagination.md)>

*Defined in [api.ts:1965](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/rbac/api.ts#L1965)*

*__summary__*: List the groups for a tenant

*__throws__*: {RequiredError}

*__memberof__*: GroupApi

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` limit | `number` |
| `Optional` offset | `number` |
| `Optional` name | `string` |
| `Optional` scope | "account" \| "principal" |
| `Optional` username | `string` |
| `Optional` orderBy | `string` |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[GroupPagination](../interfaces/grouppagination.md)>

___
<a id="listrolesforgroup"></a>

###  listRolesForGroup

▸ **listRolesForGroup**(uuid: *`string`*, limit?: *`number`*, offset?: *`number`*, options?: *`any`*): `AxiosPromise`<[GroupRolesPagination](../interfaces/grouprolespagination.md)>

*Defined in [api.ts:1979](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/rbac/api.ts#L1979)*

*__summary__*: List the roles for a group in the tenant

*__throws__*: {RequiredError}

*__memberof__*: GroupApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| uuid | `string` |  ID of group |
| `Optional` limit | `number` |
| `Optional` offset | `number` |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[GroupRolesPagination](../interfaces/grouprolespagination.md)>

___
<a id="updategroup"></a>

###  updateGroup

▸ **updateGroup**(uuid: *`string`*, group: *[Group](../interfaces/group.md)*, options?: *`any`*): `AxiosPromise`<[GroupOut](../interfaces/groupout.md)>

*Defined in [api.ts:1992](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/rbac/api.ts#L1992)*

*__summary__*: Udate a group in the tenant

*__throws__*: {RequiredError}

*__memberof__*: GroupApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| uuid | `string` |  ID of group to update |
| group | [Group](../interfaces/group.md) |  Group to update in tenant |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[GroupOut](../interfaces/groupout.md)>

___

