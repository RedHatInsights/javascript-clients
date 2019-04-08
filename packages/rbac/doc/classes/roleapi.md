[@redhat-cloud-services/rbac-client](../README.md) > [RoleApi](../classes/roleapi.md)

# Class: RoleApi

RoleApi - object-oriented interface

*__export__*: 

*__class__*: RoleApi

*__extends__*: {BaseAPI}

## Hierarchy

 [BaseAPI](baseapi.md)

**↳ RoleApi**

## Index

### Constructors

* [constructor](roleapi.md#constructor)

### Properties

* [axios](roleapi.md#axios)
* [basePath](roleapi.md#basepath)
* [configuration](roleapi.md#configuration)

### Methods

* [createRoles](roleapi.md#createroles)
* [deleteRole](roleapi.md#deleterole)
* [getRole](roleapi.md#getrole)
* [listRoles](roleapi.md#listroles)
* [updateRole](roleapi.md#updaterole)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new RoleApi**(configuration?: *[Configuration](configuration.md)*, basePath?: *`string`*, axios?: *`AxiosInstance`*): [RoleApi](roleapi.md)

*Inherited from [BaseAPI](baseapi.md).[constructor](baseapi.md#constructor)*

*Defined in [api.ts:49](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/rbac/api.ts#L49)*

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| `Optional` configuration | [Configuration](configuration.md) | - |
| `Default value` basePath | `string` |  BASE_PATH |
| `Default value` axios | `AxiosInstance` |  globalAxios |

**Returns:** [RoleApi](roleapi.md)

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

<a id="createroles"></a>

###  createRoles

▸ **createRoles**(roleIn: *[RoleIn](../interfaces/rolein.md)*, options?: *`any`*): `AxiosPromise`<[RoleWithAccess](../interfaces/rolewithaccess.md)>

*Defined in [api.ts:2601](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/rbac/api.ts#L2601)*

*__summary__*: Create a roles for a tenant

*__throws__*: {RequiredError}

*__memberof__*: RoleApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| roleIn | [RoleIn](../interfaces/rolein.md) |  Role to create |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[RoleWithAccess](../interfaces/rolewithaccess.md)>

___
<a id="deleterole"></a>

###  deleteRole

▸ **deleteRole**(uuid: *`string`*, options?: *`any`*): `AxiosPromise`<`Response`>

*Defined in [api.ts:2613](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/rbac/api.ts#L2613)*

*__summary__*: Delete a role in the tenant

*__throws__*: {RequiredError}

*__memberof__*: RoleApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| uuid | `string` |  ID of role to delete |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<`Response`>

___
<a id="getrole"></a>

###  getRole

▸ **getRole**(uuid: *`string`*, options?: *`any`*): `AxiosPromise`<[RoleWithAccess](../interfaces/rolewithaccess.md)>

*Defined in [api.ts:2625](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/rbac/api.ts#L2625)*

*__summary__*: Get a role in the tenant

*__throws__*: {RequiredError}

*__memberof__*: RoleApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| uuid | `string` |  ID of role to get |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[RoleWithAccess](../interfaces/rolewithaccess.md)>

___
<a id="listroles"></a>

###  listRoles

▸ **listRoles**(limit?: *`number`*, offset?: *`number`*, name?: *`string`*, orderBy?: *`string`*, options?: *`any`*): `AxiosPromise`<[RolePagination](../interfaces/rolepagination.md)>

*Defined in [api.ts:2640](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/rbac/api.ts#L2640)*

*__summary__*: List the roles for a tenant

*__throws__*: {RequiredError}

*__memberof__*: RoleApi

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` limit | `number` |
| `Optional` offset | `number` |
| `Optional` name | `string` |
| `Optional` orderBy | `string` |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[RolePagination](../interfaces/rolepagination.md)>

___
<a id="updaterole"></a>

###  updateRole

▸ **updateRole**(uuid: *`string`*, roleWithAccess: *[RoleWithAccess](../interfaces/rolewithaccess.md)*, options?: *`any`*): `AxiosPromise`<`Response`>

*Defined in [api.ts:2653](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/rbac/api.ts#L2653)*

*__summary__*: Update a Role in the tenant

*__throws__*: {RequiredError}

*__memberof__*: RoleApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| uuid | `string` |  ID of role to update |
| roleWithAccess | [RoleWithAccess](../interfaces/rolewithaccess.md) |  Update to a Role |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<`Response`>

___

