[@redhat-cloud-services/rbac-client](../README.md) › [Globals](../globals.md) › [RoleApi](roleapi.md)

# Class: RoleApi

RoleApi - object-oriented interface

**`export`** 

## Hierarchy

* [BaseAPI](baseapi.md)

  ↳ **RoleApi**

## Index

### Constructors

* [constructor](roleapi.md#constructor)

### Properties

* [axios](roleapi.md#protected-axios)
* [basePath](roleapi.md#protected-basepath)
* [configuration](roleapi.md#protected-configuration)

### Methods

* [createRoles](roleapi.md#createroles)
* [deleteRole](roleapi.md#deleterole)
* [getRole](roleapi.md#getrole)
* [getRoleAccess](roleapi.md#getroleaccess)
* [listRoles](roleapi.md#listroles)
* [patchRole](roleapi.md#patchrole)
* [updateRole](roleapi.md#updaterole)

## Constructors

###  constructor

\+ **new RoleApi**(`configuration?`: [Configuration](configuration.md), `basePath`: string, `axios`: AxiosInstance): *[RoleApi](roleapi.md)*

*Inherited from [BaseAPI](baseapi.md).[constructor](baseapi.md#constructor)*

*Defined in [packages/rbac/base.ts:49](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/rbac/base.ts#L49)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`configuration?` | [Configuration](configuration.md) | - |
`basePath` | string | BASE_PATH |
`axios` | AxiosInstance | globalAxios |

**Returns:** *[RoleApi](roleapi.md)*

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

###  createRoles

▸ **createRoles**(`roleIn`: [RoleIn](../interfaces/rolein.md), `options?`: any): *Promise‹AxiosResponse‹[RoleWithAccess](../interfaces/rolewithaccess.md)››*

*Defined in [packages/rbac/api.ts:4441](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/rbac/api.ts#L4441)*

**`summary`** Create a roles for a tenant

**`throws`** {RequiredError}

**`memberof`** RoleApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`roleIn` | [RoleIn](../interfaces/rolein.md) | Role to create |
`options?` | any | - |

**Returns:** *Promise‹AxiosResponse‹[RoleWithAccess](../interfaces/rolewithaccess.md)››*

___

###  deleteRole

▸ **deleteRole**(`uuid`: string, `options?`: any): *Promise‹AxiosResponse‹void››*

*Defined in [packages/rbac/api.ts:4453](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/rbac/api.ts#L4453)*

**`summary`** Delete a role in the tenant

**`throws`** {RequiredError}

**`memberof`** RoleApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`uuid` | string | ID of role to delete |
`options?` | any | - |

**Returns:** *Promise‹AxiosResponse‹void››*

___

###  getRole

▸ **getRole**(`uuid`: string, `scope?`: "account" | "principal", `options?`: any): *Promise‹AxiosResponse‹[RoleWithAccess](../interfaces/rolewithaccess.md)››*

*Defined in [packages/rbac/api.ts:4466](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/rbac/api.ts#L4466)*

**`summary`** Get a role in the tenant

**`throws`** {RequiredError}

**`memberof`** RoleApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`uuid` | string | ID of role to get |
`scope?` | "account" &#124; "principal" | - |
`options?` | any | - |

**Returns:** *Promise‹AxiosResponse‹[RoleWithAccess](../interfaces/rolewithaccess.md)››*

___

###  getRoleAccess

▸ **getRoleAccess**(`uuid`: string, `limit?`: number, `offset?`: number, `options?`: any): *Promise‹AxiosResponse‹[AccessPagination](../interfaces/accesspagination.md)››*

*Defined in [packages/rbac/api.ts:4480](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/rbac/api.ts#L4480)*

**`summary`** Get access for a role in the tenant

**`throws`** {RequiredError}

**`memberof`** RoleApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`uuid` | string | ID of the role |
`limit?` | number | - |
`offset?` | number | - |
`options?` | any | - |

**Returns:** *Promise‹AxiosResponse‹[AccessPagination](../interfaces/accesspagination.md)››*

___

###  listRoles

▸ **listRoles**(`limit?`: number, `offset?`: number, `name?`: string, `displayName?`: string, `nameMatch?`: "partial" | "exact", `scope?`: "account" | "principal", `orderBy?`: "name" | "display_name" | "modified" | "policyCount", `addFields?`: Array‹"groups_in" | "groups_in_count"›, `username?`: string, `application?`: string, `permission?`: string, `options?`: any): *Promise‹AxiosResponse‹[RolePaginationDynamic](../interfaces/rolepaginationdynamic.md)››*

*Defined in [packages/rbac/api.ts:4502](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/rbac/api.ts#L4502)*

By default, responses are sorted in ascending order by role name

**`summary`** List the roles for a tenant

**`throws`** {RequiredError}

**`memberof`** RoleApi

**Parameters:**

Name | Type |
------ | ------ |
`limit?` | number |
`offset?` | number |
`name?` | string |
`displayName?` | string |
`nameMatch?` | "partial" &#124; "exact" |
`scope?` | "account" &#124; "principal" |
`orderBy?` | "name" &#124; "display_name" &#124; "modified" &#124; "policyCount" |
`addFields?` | Array‹"groups_in" &#124; "groups_in_count"› |
`username?` | string |
`application?` | string |
`permission?` | string |
`options?` | any |

**Returns:** *Promise‹AxiosResponse‹[RolePaginationDynamic](../interfaces/rolepaginationdynamic.md)››*

___

###  patchRole

▸ **patchRole**(`uuid`: string, `rolePatch?`: [RolePatch](../interfaces/rolepatch.md), `options?`: any): *Promise‹AxiosResponse‹[RoleWithAccess](../interfaces/rolewithaccess.md)››*

*Defined in [packages/rbac/api.ts:4515](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/rbac/api.ts#L4515)*

**`summary`** Patch a Role in the tenant

**`throws`** {RequiredError}

**`memberof`** RoleApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`uuid` | string | ID of role to update |
`rolePatch?` | [RolePatch](../interfaces/rolepatch.md) | - |
`options?` | any | - |

**Returns:** *Promise‹AxiosResponse‹[RoleWithAccess](../interfaces/rolewithaccess.md)››*

___

###  updateRole

▸ **updateRole**(`uuid`: string, `roleWithAccess`: [RoleWithAccess](../interfaces/rolewithaccess.md), `options?`: any): *Promise‹AxiosResponse‹void››*

*Defined in [packages/rbac/api.ts:4528](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/rbac/api.ts#L4528)*

**`summary`** Update a Role in the tenant

**`throws`** {RequiredError}

**`memberof`** RoleApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`uuid` | string | ID of role to update |
`roleWithAccess` | [RoleWithAccess](../interfaces/rolewithaccess.md) | Update to a Role |
`options?` | any | - |

**Returns:** *Promise‹AxiosResponse‹void››*
