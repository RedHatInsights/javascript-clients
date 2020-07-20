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

▸ **createRoles**(`roleIn`: [RoleIn](../interfaces/rolein.md), `options?`: any): *AxiosPromise‹[RoleWithAccess](../interfaces/rolewithaccess.md)›*

*Defined in [packages/rbac/api.ts:3633](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/rbac/api.ts#L3633)*

**`summary`** Create a roles for a tenant

**`throws`** {RequiredError}

**`memberof`** RoleApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`roleIn` | [RoleIn](../interfaces/rolein.md) | Role to create |
`options?` | any | - |

**Returns:** *AxiosPromise‹[RoleWithAccess](../interfaces/rolewithaccess.md)›*

___

###  deleteRole

▸ **deleteRole**(`uuid`: string, `options?`: any): *AxiosPromise‹void›*

*Defined in [packages/rbac/api.ts:3645](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/rbac/api.ts#L3645)*

**`summary`** Delete a role in the tenant

**`throws`** {RequiredError}

**`memberof`** RoleApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`uuid` | string | ID of role to delete |
`options?` | any | - |

**Returns:** *AxiosPromise‹void›*

___

###  getRole

▸ **getRole**(`uuid`: string, `options?`: any): *AxiosPromise‹[RoleWithAccess](../interfaces/rolewithaccess.md)›*

*Defined in [packages/rbac/api.ts:3657](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/rbac/api.ts#L3657)*

**`summary`** Get a role in the tenant

**`throws`** {RequiredError}

**`memberof`** RoleApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`uuid` | string | ID of role to get |
`options?` | any | - |

**Returns:** *AxiosPromise‹[RoleWithAccess](../interfaces/rolewithaccess.md)›*

___

###  getRoleAccess

▸ **getRoleAccess**(`uuid`: string, `limit?`: number, `offset?`: number, `options?`: any): *AxiosPromise‹[AccessPagination](../interfaces/accesspagination.md)›*

*Defined in [packages/rbac/api.ts:3671](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/rbac/api.ts#L3671)*

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

**Returns:** *AxiosPromise‹[AccessPagination](../interfaces/accesspagination.md)›*

___

###  listRoles

▸ **listRoles**(`limit?`: number, `offset?`: number, `name?`: string, `nameMatch?`: "partial" | "exact", `scope?`: "account" | "principal", `orderBy?`: string, `addFields?`: Array‹"groups_in" | "groups_in_count"›, `username?`: string, `options?`: any): *AxiosPromise‹[RolePaginationDynamic](../interfaces/rolepaginationdynamic.md)›*

*Defined in [packages/rbac/api.ts:3690](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/rbac/api.ts#L3690)*

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
`nameMatch?` | "partial" &#124; "exact" |
`scope?` | "account" &#124; "principal" |
`orderBy?` | string |
`addFields?` | Array‹"groups_in" &#124; "groups_in_count"› |
`username?` | string |
`options?` | any |

**Returns:** *AxiosPromise‹[RolePaginationDynamic](../interfaces/rolepaginationdynamic.md)›*

___

###  updateRole

▸ **updateRole**(`uuid`: string, `roleWithAccess`: [RoleWithAccess](../interfaces/rolewithaccess.md), `options?`: any): *AxiosPromise‹void›*

*Defined in [packages/rbac/api.ts:3703](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/rbac/api.ts#L3703)*

**`summary`** Update a Role in the tenant

**`throws`** {RequiredError}

**`memberof`** RoleApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`uuid` | string | ID of role to update |
`roleWithAccess` | [RoleWithAccess](../interfaces/rolewithaccess.md) | Update to a Role |
`options?` | any | - |

**Returns:** *AxiosPromise‹void›*
