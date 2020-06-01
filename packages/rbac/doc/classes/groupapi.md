[@redhat-cloud-services/rbac-client](../README.md) › [Globals](../globals.md) › [GroupApi](groupapi.md)

# Class: GroupApi

GroupApi - object-oriented interface

**`export`** 

## Hierarchy

* [BaseAPI](baseapi.md)

  ↳ **GroupApi**

## Index

### Constructors

* [constructor](groupapi.md#constructor)

### Properties

* [axios](groupapi.md#protected-axios)
* [basePath](groupapi.md#protected-basepath)
* [configuration](groupapi.md#protected-configuration)

### Methods

* [addPrincipalToGroup](groupapi.md#addprincipaltogroup)
* [addRoleToGroup](groupapi.md#addroletogroup)
* [createGroup](groupapi.md#creategroup)
* [deleteGroup](groupapi.md#deletegroup)
* [deletePrincipalFromGroup](groupapi.md#deleteprincipalfromgroup)
* [deleteRoleFromGroup](groupapi.md#deleterolefromgroup)
* [getGroup](groupapi.md#getgroup)
* [getPrincipalsFromGroup](groupapi.md#getprincipalsfromgroup)
* [listGroups](groupapi.md#listgroups)
* [listRolesForGroup](groupapi.md#listrolesforgroup)
* [updateGroup](groupapi.md#updategroup)

## Constructors

###  constructor

\+ **new GroupApi**(`configuration?`: [Configuration](configuration.md), `basePath`: string, `axios`: AxiosInstance): *[GroupApi](groupapi.md)*

*Inherited from [BaseAPI](baseapi.md).[constructor](baseapi.md#constructor)*

*Defined in [packages/rbac/base.ts:49](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/rbac/base.ts#L49)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`configuration?` | [Configuration](configuration.md) | - |
`basePath` | string | BASE_PATH |
`axios` | AxiosInstance | globalAxios |

**Returns:** *[GroupApi](groupapi.md)*

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

###  addPrincipalToGroup

▸ **addPrincipalToGroup**(`uuid`: string, `groupPrincipalIn`: [GroupPrincipalIn](../interfaces/groupprincipalin.md), `options?`: any): *AxiosPromise‹[GroupWithPrincipalsAndRoles](../interfaces/groupwithprincipalsandroles.md)›*

*Defined in [packages/rbac/api.ts:2334](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/rbac/api.ts#L2334)*

**`summary`** Add a principal to a group in the tenant

**`throws`** {RequiredError}

**`memberof`** GroupApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`uuid` | string | ID of group to update |
`groupPrincipalIn` | [GroupPrincipalIn](../interfaces/groupprincipalin.md) | Principal to add to a group |
`options?` | any | - |

**Returns:** *AxiosPromise‹[GroupWithPrincipalsAndRoles](../interfaces/groupwithprincipalsandroles.md)›*

___

###  addRoleToGroup

▸ **addRoleToGroup**(`uuid`: string, `groupRoleIn`: [GroupRoleIn](../interfaces/grouprolein.md), `options?`: any): *AxiosPromise‹[InlineResponse200](../interfaces/inlineresponse200.md)›*

*Defined in [packages/rbac/api.ts:2347](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/rbac/api.ts#L2347)*

**`summary`** Add a role to a group in the tenant

**`throws`** {RequiredError}

**`memberof`** GroupApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`uuid` | string | ID of group to update |
`groupRoleIn` | [GroupRoleIn](../interfaces/grouprolein.md) | Role to add to a group |
`options?` | any | - |

**Returns:** *AxiosPromise‹[InlineResponse200](../interfaces/inlineresponse200.md)›*

___

###  createGroup

▸ **createGroup**(`group`: [Group](../interfaces/group.md), `options?`: any): *AxiosPromise‹[GroupOut](../interfaces/groupout.md)›*

*Defined in [packages/rbac/api.ts:2359](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/rbac/api.ts#L2359)*

**`summary`** Create a group in a tenant

**`throws`** {RequiredError}

**`memberof`** GroupApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`group` | [Group](../interfaces/group.md) | Group to create in tenant |
`options?` | any | - |

**Returns:** *AxiosPromise‹[GroupOut](../interfaces/groupout.md)›*

___

###  deleteGroup

▸ **deleteGroup**(`uuid`: string, `options?`: any): *AxiosPromise‹void›*

*Defined in [packages/rbac/api.ts:2371](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/rbac/api.ts#L2371)*

**`summary`** Delete a group in the tenant

**`throws`** {RequiredError}

**`memberof`** GroupApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`uuid` | string | ID of group to delete |
`options?` | any | - |

**Returns:** *AxiosPromise‹void›*

___

###  deletePrincipalFromGroup

▸ **deletePrincipalFromGroup**(`uuid`: string, `usernames`: string, `options?`: any): *AxiosPromise‹void›*

*Defined in [packages/rbac/api.ts:2384](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/rbac/api.ts#L2384)*

**`summary`** Remove a principal from a group in the tenant

**`throws`** {RequiredError}

**`memberof`** GroupApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`uuid` | string | ID of group to update |
`usernames` | string | A comma separated list of usernames for principals to remove from the group |
`options?` | any | - |

**Returns:** *AxiosPromise‹void›*

___

###  deleteRoleFromGroup

▸ **deleteRoleFromGroup**(`uuid`: string, `roles`: string, `options?`: any): *AxiosPromise‹void›*

*Defined in [packages/rbac/api.ts:2397](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/rbac/api.ts#L2397)*

**`summary`** Remove a role from a group in the tenant

**`throws`** {RequiredError}

**`memberof`** GroupApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`uuid` | string | ID of group to update |
`roles` | string | A comma separated list of role UUIDs for roles to remove from the group |
`options?` | any | - |

**Returns:** *AxiosPromise‹void›*

___

###  getGroup

▸ **getGroup**(`uuid`: string, `options?`: any): *AxiosPromise‹[GroupWithPrincipalsAndRoles](../interfaces/groupwithprincipalsandroles.md)›*

*Defined in [packages/rbac/api.ts:2409](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/rbac/api.ts#L2409)*

**`summary`** Get a group in the tenant

**`throws`** {RequiredError}

**`memberof`** GroupApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`uuid` | string | ID of group to get |
`options?` | any | - |

**Returns:** *AxiosPromise‹[GroupWithPrincipalsAndRoles](../interfaces/groupwithprincipalsandroles.md)›*

___

###  getPrincipalsFromGroup

▸ **getPrincipalsFromGroup**(`uuid`: string, `principalUsername?`: string, `limit?`: number, `offset?`: number, `orderBy?`: "username", `options?`: any): *AxiosPromise‹[PrincipalPagination](../interfaces/principalpagination.md)›*

*Defined in [packages/rbac/api.ts:2425](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/rbac/api.ts#L2425)*

By default, responses are sorted in ascending order by username

**`summary`** Get a list of principals from a group in the tenant

**`throws`** {RequiredError}

**`memberof`** GroupApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`uuid` | string | ID of group from which to get principals |
`principalUsername?` | string | - |
`limit?` | number | - |
`offset?` | number | - |
`orderBy?` | "username" | - |
`options?` | any | - |

**Returns:** *AxiosPromise‹[PrincipalPagination](../interfaces/principalpagination.md)›*

___

###  listGroups

▸ **listGroups**(`limit?`: number, `offset?`: number, `name?`: string, `nameMatch?`: "partial" | "exact", `scope?`: "account" | "principal", `username?`: string, `uuid?`: Array‹string›, `roleNames?`: Array‹string›, `roleDiscriminator?`: "all" | "any", `orderBy?`: string, `options?`: any): *AxiosPromise‹[GroupPagination](../interfaces/grouppagination.md)›*

*Defined in [packages/rbac/api.ts:2446](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/rbac/api.ts#L2446)*

By default, responses are sorted in ascending order by group name

**`summary`** List the groups for a tenant

**`throws`** {RequiredError}

**`memberof`** GroupApi

**Parameters:**

Name | Type |
------ | ------ |
`limit?` | number |
`offset?` | number |
`name?` | string |
`nameMatch?` | "partial" &#124; "exact" |
`scope?` | "account" &#124; "principal" |
`username?` | string |
`uuid?` | Array‹string› |
`roleNames?` | Array‹string› |
`roleDiscriminator?` | "all" &#124; "any" |
`orderBy?` | string |
`options?` | any |

**Returns:** *AxiosPromise‹[GroupPagination](../interfaces/grouppagination.md)›*

___

###  listRolesForGroup

▸ **listRolesForGroup**(`uuid`: string, `exclude?`: boolean, `roleName?`: string, `roleDescription?`: string, `limit?`: number, `offset?`: number, `orderBy?`: "name" | "modified" | "policyCount", `options?`: any): *AxiosPromise‹[GroupRolesPagination](../interfaces/grouprolespagination.md)›*

*Defined in [packages/rbac/api.ts:2464](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/rbac/api.ts#L2464)*

By default, responses are sorted in ascending order by role name

**`summary`** List the roles for a group in the tenant

**`throws`** {RequiredError}

**`memberof`** GroupApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`uuid` | string | ID of group |
`exclude?` | boolean | - |
`roleName?` | string | - |
`roleDescription?` | string | - |
`limit?` | number | - |
`offset?` | number | - |
`orderBy?` | "name" &#124; "modified" &#124; "policyCount" | - |
`options?` | any | - |

**Returns:** *AxiosPromise‹[GroupRolesPagination](../interfaces/grouprolespagination.md)›*

___

###  updateGroup

▸ **updateGroup**(`uuid`: string, `group`: [Group](../interfaces/group.md), `options?`: any): *AxiosPromise‹[GroupOut](../interfaces/groupout.md)›*

*Defined in [packages/rbac/api.ts:2477](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/rbac/api.ts#L2477)*

**`summary`** Udate a group in the tenant

**`throws`** {RequiredError}

**`memberof`** GroupApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`uuid` | string | ID of group to update |
`group` | [Group](../interfaces/group.md) | Group to update in tenant |
`options?` | any | - |

**Returns:** *AxiosPromise‹[GroupOut](../interfaces/groupout.md)›*
