[@redhat-cloud-services/rbac-client](README.md) › [Globals](globals.md)

# @redhat-cloud-services/rbac-client

## Index

### Modules

* [ResourceDefinitionFilter](modules/resourcedefinitionfilter.md)

### Classes

* [AccessApi](classes/accessapi.md)
* [BaseAPI](classes/baseapi.md)
* [Configuration](classes/configuration.md)
* [GroupApi](classes/groupapi.md)
* [PolicyApi](classes/policyapi.md)
* [PrincipalApi](classes/principalapi.md)
* [RequiredError](classes/requirederror.md)
* [RoleApi](classes/roleapi.md)
* [StatusApi](classes/statusapi.md)

### Interfaces

* [Access](interfaces/access.md)
* [AccessPagination](interfaces/accesspagination.md)
* [AdditionalGroup](interfaces/additionalgroup.md)
* [ConfigurationParameters](interfaces/configurationparameters.md)
* [Error403](interfaces/error403.md)
* [Group](interfaces/group.md)
* [GroupOut](interfaces/groupout.md)
* [GroupPagination](interfaces/grouppagination.md)
* [GroupPrincipalIn](interfaces/groupprincipalin.md)
* [GroupRoleIn](interfaces/grouprolein.md)
* [GroupRolesPagination](interfaces/grouprolespagination.md)
* [GroupWithPrincipals](interfaces/groupwithprincipals.md)
* [GroupWithPrincipalsAndRoles](interfaces/groupwithprincipalsandroles.md)
* [InlineResponse200](interfaces/inlineresponse200.md)
* [ListPagination](interfaces/listpagination.md)
* [ModelError](interfaces/modelerror.md)
* [PaginationLinks](interfaces/paginationlinks.md)
* [PaginationMeta](interfaces/paginationmeta.md)
* [Policy](interfaces/policy.md)
* [PolicyExtended](interfaces/policyextended.md)
* [PolicyIn](interfaces/policyin.md)
* [PolicyPagination](interfaces/policypagination.md)
* [Principal](interfaces/principal.md)
* [PrincipalIn](interfaces/principalin.md)
* [PrincipalOut](interfaces/principalout.md)
* [PrincipalPagination](interfaces/principalpagination.md)
* [RequestArgs](interfaces/requestargs.md)
* [ResourceDefinition](interfaces/resourcedefinition.md)
* [Role](interfaces/role.md)
* [RoleIn](interfaces/rolein.md)
* [RoleOut](interfaces/roleout.md)
* [RoleOutDynamic](interfaces/roleoutdynamic.md)
* [RolePagination](interfaces/rolepagination.md)
* [RolePaginationDynamic](interfaces/rolepaginationdynamic.md)
* [RoleWithAccess](interfaces/rolewithaccess.md)
* [Status](interfaces/status.md)
* [Timestamped](interfaces/timestamped.md)
* [UUID](interfaces/uuid.md)

### Variables

* [BASE_PATH](globals.md#const-base_path)

### Functions

* [AccessApiAxiosParamCreator](globals.md#const-accessapiaxiosparamcreator)
* [AccessApiFactory](globals.md#const-accessapifactory)
* [AccessApiFp](globals.md#const-accessapifp)
* [GroupApiAxiosParamCreator](globals.md#const-groupapiaxiosparamcreator)
* [GroupApiFactory](globals.md#const-groupapifactory)
* [GroupApiFp](globals.md#const-groupapifp)
* [PolicyApiAxiosParamCreator](globals.md#const-policyapiaxiosparamcreator)
* [PolicyApiFactory](globals.md#const-policyapifactory)
* [PolicyApiFp](globals.md#const-policyapifp)
* [PrincipalApiAxiosParamCreator](globals.md#const-principalapiaxiosparamcreator)
* [PrincipalApiFactory](globals.md#const-principalapifactory)
* [PrincipalApiFp](globals.md#const-principalapifp)
* [RoleApiAxiosParamCreator](globals.md#const-roleapiaxiosparamcreator)
* [RoleApiFactory](globals.md#const-roleapifactory)
* [RoleApiFp](globals.md#const-roleapifp)
* [StatusApiAxiosParamCreator](globals.md#const-statusapiaxiosparamcreator)
* [StatusApiFactory](globals.md#const-statusapifactory)
* [StatusApiFp](globals.md#const-statusapifp)

### Object literals

* [COLLECTION_FORMATS](globals.md#const-collection_formats)

## Variables

### `Const` BASE_PATH

• **BASE_PATH**: *string* =  "https://raw.githubusercontent.com/api/rbac/v1".replace(/\/+$/, "")

*Defined in [api.ts:20](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/rbac/api.ts#L20)*

## Functions

### `Const` AccessApiAxiosParamCreator

▸ **AccessApiAxiosParamCreator**(`configuration?`: [Configuration](classes/configuration.md)): *object*

*Defined in [api.ts:1198](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/rbac/api.ts#L1198)*

AccessApi - axios parameter creator

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](classes/configuration.md) |

**Returns:** *object*

* **getPrincipalAccess**(`application`: string, `username?`: string, `limit?`: number, `offset?`: number, `options`: any): *[RequestArgs](interfaces/requestargs.md)*

___

### `Const` AccessApiFactory

▸ **AccessApiFactory**(`configuration?`: [Configuration](classes/configuration.md), `basePath?`: string, `axios?`: AxiosInstance): *object*

*Defined in [api.ts:1290](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/rbac/api.ts#L1290)*

AccessApi - factory interface

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](classes/configuration.md) |
`basePath?` | string |
`axios?` | AxiosInstance |

**Returns:** *object*

* **getPrincipalAccess**(`application`: string, `username?`: string, `limit?`: number, `offset?`: number, `options?`: any): *AxiosPromise‹[AccessPagination](interfaces/accesspagination.md)›*

___

### `Const` AccessApiFp

▸ **AccessApiFp**(`configuration?`: [Configuration](classes/configuration.md)): *object*

*Defined in [api.ts:1264](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/rbac/api.ts#L1264)*

AccessApi - functional programming interface

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](classes/configuration.md) |

**Returns:** *object*

* **getPrincipalAccess**(`application`: string, `username?`: string, `limit?`: number, `offset?`: number, `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹[AccessPagination](interfaces/accesspagination.md)›*

___

### `Const` GroupApiAxiosParamCreator

▸ **GroupApiAxiosParamCreator**(`configuration?`: [Configuration](classes/configuration.md)): *object*

*Defined in [api.ts:1336](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/rbac/api.ts#L1336)*

GroupApi - axios parameter creator

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](classes/configuration.md) |

**Returns:** *object*

* **addPrincipalToGroup**(`uuid`: string, `groupPrincipalIn`: [GroupPrincipalIn](interfaces/groupprincipalin.md), `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **addRoleToGroup**(`uuid`: string, `groupRoleIn`: [GroupRoleIn](interfaces/grouprolein.md), `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **createGroup**(`group`: [Group](interfaces/group.md), `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **deleteGroup**(`uuid`: string, `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **deletePrincipalFromGroup**(`uuid`: string, `usernames`: string, `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **deleteRoleFromGroup**(`uuid`: string, `roles`: string, `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **getGroup**(`uuid`: string, `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **getPrincipalsFromGroup**(`uuid`: string, `principalUsername?`: string, `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **listGroups**(`limit?`: number, `offset?`: number, `name?`: string, `scope?`: "account" | "principal", `username?`: string, `uuid?`: Array‹string›, `roleNames?`: Array‹string›, `roleDiscriminator?`: "all" | "any", `orderBy?`: string, `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **listRolesForGroup**(`uuid`: string, `exclude?`: boolean, `roleName?`: string, `roleDescription?`: string, `limit?`: number, `offset?`: number, `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **updateGroup**(`uuid`: string, `group`: [Group](interfaces/group.md), `options`: any): *[RequestArgs](interfaces/requestargs.md)*

___

### `Const` GroupApiFactory

▸ **GroupApiFactory**(`configuration?`: [Configuration](classes/configuration.md), `basePath?`: string, `axios?`: AxiosInstance): *object*

*Defined in [api.ts:2073](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/rbac/api.ts#L2073)*

GroupApi - factory interface

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](classes/configuration.md) |
`basePath?` | string |
`axios?` | AxiosInstance |

**Returns:** *object*

* **addPrincipalToGroup**(`uuid`: string, `groupPrincipalIn`: [GroupPrincipalIn](interfaces/groupprincipalin.md), `options?`: any): *AxiosPromise‹[GroupWithPrincipalsAndRoles](interfaces/groupwithprincipalsandroles.md)›*

* **addRoleToGroup**(`uuid`: string, `groupRoleIn`: [GroupRoleIn](interfaces/grouprolein.md), `options?`: any): *AxiosPromise‹[InlineResponse200](interfaces/inlineresponse200.md)›*

* **createGroup**(`group`: [Group](interfaces/group.md), `options?`: any): *AxiosPromise‹[GroupOut](interfaces/groupout.md)›*

* **deleteGroup**(`uuid`: string, `options?`: any): *AxiosPromise‹Response›*

* **deletePrincipalFromGroup**(`uuid`: string, `usernames`: string, `options?`: any): *AxiosPromise‹Response›*

* **deleteRoleFromGroup**(`uuid`: string, `roles`: string, `options?`: any): *AxiosPromise‹Response›*

* **getGroup**(`uuid`: string, `options?`: any): *AxiosPromise‹[GroupWithPrincipalsAndRoles](interfaces/groupwithprincipalsandroles.md)›*

* **getPrincipalsFromGroup**(`uuid`: string, `principalUsername?`: string, `options?`: any): *AxiosPromise‹[PrincipalPagination](interfaces/principalpagination.md)›*

* **listGroups**(`limit?`: number, `offset?`: number, `name?`: string, `scope?`: "account" | "principal", `username?`: string, `uuid?`: Array‹string›, `roleNames?`: Array‹string›, `roleDiscriminator?`: "all" | "any", `orderBy?`: string, `options?`: any): *AxiosPromise‹[GroupPagination](interfaces/grouppagination.md)›*

* **listRolesForGroup**(`uuid`: string, `exclude?`: boolean, `roleName?`: string, `roleDescription?`: string, `limit?`: number, `offset?`: number, `options?`: any): *AxiosPromise‹[GroupRolesPagination](interfaces/grouprolespagination.md)›*

* **updateGroup**(`uuid`: string, `group`: [Group](interfaces/group.md), `options?`: any): *AxiosPromise‹[GroupOut](interfaces/groupout.md)›*

___

### `Const` GroupApiFp

▸ **GroupApiFp**(`configuration?`: [Configuration](classes/configuration.md)): *object*

*Defined in [api.ts:1891](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/rbac/api.ts#L1891)*

GroupApi - functional programming interface

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](classes/configuration.md) |

**Returns:** *object*

* **addPrincipalToGroup**(`uuid`: string, `groupPrincipalIn`: [GroupPrincipalIn](interfaces/groupprincipalin.md), `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹[GroupWithPrincipalsAndRoles](interfaces/groupwithprincipalsandroles.md)›*

* **addRoleToGroup**(`uuid`: string, `groupRoleIn`: [GroupRoleIn](interfaces/grouprolein.md), `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹[InlineResponse200](interfaces/inlineresponse200.md)›*

* **createGroup**(`group`: [Group](interfaces/group.md), `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹[GroupOut](interfaces/groupout.md)›*

* **deleteGroup**(`uuid`: string, `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹Response›*

* **deletePrincipalFromGroup**(`uuid`: string, `usernames`: string, `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹Response›*

* **deleteRoleFromGroup**(`uuid`: string, `roles`: string, `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹Response›*

* **getGroup**(`uuid`: string, `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹[GroupWithPrincipalsAndRoles](interfaces/groupwithprincipalsandroles.md)›*

* **getPrincipalsFromGroup**(`uuid`: string, `principalUsername?`: string, `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹[PrincipalPagination](interfaces/principalpagination.md)›*

* **listGroups**(`limit?`: number, `offset?`: number, `name?`: string, `scope?`: "account" | "principal", `username?`: string, `uuid?`: Array‹string›, `roleNames?`: Array‹string›, `roleDiscriminator?`: "all" | "any", `orderBy?`: string, `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹[GroupPagination](interfaces/grouppagination.md)›*

* **listRolesForGroup**(`uuid`: string, `exclude?`: boolean, `roleName?`: string, `roleDescription?`: string, `limit?`: number, `offset?`: number, `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹[GroupRolesPagination](interfaces/grouprolespagination.md)›*

* **updateGroup**(`uuid`: string, `group`: [Group](interfaces/group.md), `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹[GroupOut](interfaces/groupout.md)›*

___

### `Const` PolicyApiAxiosParamCreator

▸ **PolicyApiAxiosParamCreator**(`configuration?`: [Configuration](classes/configuration.md)): *object*

*Defined in [api.ts:2371](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/rbac/api.ts#L2371)*

PolicyApi - axios parameter creator

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](classes/configuration.md) |

**Returns:** *object*

* **createPolicies**(`policyIn`: [PolicyIn](interfaces/policyin.md), `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **deletePolicy**(`uuid`: string, `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **getPolicy**(`uuid`: string, `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **listPolicies**(`limit?`: number, `offset?`: number, `name?`: string, `scope?`: "account" | "principal", `groupName?`: string, `groupUuid?`: string, `orderBy?`: string, `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **updatePolicy**(`uuid`: string, `policyIn`: [PolicyIn](interfaces/policyin.md), `options`: any): *[RequestArgs](interfaces/requestargs.md)*

___

### `Const` PolicyApiFactory

▸ **PolicyApiFactory**(`configuration?`: [Configuration](classes/configuration.md), `basePath?`: string, `axios?`: AxiosInstance): *object*

*Defined in [api.ts:2702](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/rbac/api.ts#L2702)*

PolicyApi - factory interface

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](classes/configuration.md) |
`basePath?` | string |
`axios?` | AxiosInstance |

**Returns:** *object*

* **createPolicies**(`policyIn`: [PolicyIn](interfaces/policyin.md), `options?`: any): *AxiosPromise‹[PolicyExtended](interfaces/policyextended.md)›*

* **deletePolicy**(`uuid`: string, `options?`: any): *AxiosPromise‹Response›*

* **getPolicy**(`uuid`: string, `options?`: any): *AxiosPromise‹[PolicyExtended](interfaces/policyextended.md)›*

* **listPolicies**(`limit?`: number, `offset?`: number, `name?`: string, `scope?`: "account" | "principal", `groupName?`: string, `groupUuid?`: string, `orderBy?`: string, `options?`: any): *AxiosPromise‹[PolicyPagination](interfaces/policypagination.md)›*

* **updatePolicy**(`uuid`: string, `policyIn`: [PolicyIn](interfaces/policyin.md), `options?`: any): *AxiosPromise‹[PolicyExtended](interfaces/policyextended.md)›*

___

### `Const` PolicyApiFp

▸ **PolicyApiFp**(`configuration?`: [Configuration](classes/configuration.md)): *object*

*Defined in [api.ts:2616](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/rbac/api.ts#L2616)*

PolicyApi - functional programming interface

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](classes/configuration.md) |

**Returns:** *object*

* **createPolicies**(`policyIn`: [PolicyIn](interfaces/policyin.md), `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹[PolicyExtended](interfaces/policyextended.md)›*

* **deletePolicy**(`uuid`: string, `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹Response›*

* **getPolicy**(`uuid`: string, `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹[PolicyExtended](interfaces/policyextended.md)›*

* **listPolicies**(`limit?`: number, `offset?`: number, `name?`: string, `scope?`: "account" | "principal", `groupName?`: string, `groupUuid?`: string, `orderBy?`: string, `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹[PolicyPagination](interfaces/policypagination.md)›*

* **updatePolicy**(`uuid`: string, `policyIn`: [PolicyIn](interfaces/policyin.md), `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹[PolicyExtended](interfaces/policyextended.md)›*

___

### `Const` PrincipalApiAxiosParamCreator

▸ **PrincipalApiAxiosParamCreator**(`configuration?`: [Configuration](classes/configuration.md)): *object*

*Defined in [api.ts:2844](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/rbac/api.ts#L2844)*

PrincipalApi - axios parameter creator

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](classes/configuration.md) |

**Returns:** *object*

* **listPrincipals**(`limit?`: number, `offset?`: number, `usernames?`: string, `sortOrder?`: "asc" | "desc", `options`: any): *[RequestArgs](interfaces/requestargs.md)*

___

### `Const` PrincipalApiFactory

▸ **PrincipalApiFactory**(`configuration?`: [Configuration](classes/configuration.md), `basePath?`: string, `axios?`: AxiosInstance): *object*

*Defined in [api.ts:2932](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/rbac/api.ts#L2932)*

PrincipalApi - factory interface

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](classes/configuration.md) |
`basePath?` | string |
`axios?` | AxiosInstance |

**Returns:** *object*

* **listPrincipals**(`limit?`: number, `offset?`: number, `usernames?`: string, `sortOrder?`: "asc" | "desc", `options?`: any): *AxiosPromise‹[PrincipalPagination](interfaces/principalpagination.md)›*

___

### `Const` PrincipalApiFp

▸ **PrincipalApiFp**(`configuration?`: [Configuration](classes/configuration.md)): *object*

*Defined in [api.ts:2906](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/rbac/api.ts#L2906)*

PrincipalApi - functional programming interface

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](classes/configuration.md) |

**Returns:** *object*

* **listPrincipals**(`limit?`: number, `offset?`: number, `usernames?`: string, `sortOrder?`: "asc" | "desc", `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹[PrincipalPagination](interfaces/principalpagination.md)›*

___

### `Const` RoleApiAxiosParamCreator

▸ **RoleApiAxiosParamCreator**(`configuration?`: [Configuration](classes/configuration.md)): *object*

*Defined in [api.ts:2978](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/rbac/api.ts#L2978)*

RoleApi - axios parameter creator

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](classes/configuration.md) |

**Returns:** *object*

* **createRoles**(`roleIn`: [RoleIn](interfaces/rolein.md), `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **deleteRole**(`uuid`: string, `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **getRole**(`uuid`: string, `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **getRoleAccess**(`uuid`: string, `limit?`: number, `offset?`: number, `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **listRoles**(`limit?`: number, `offset?`: number, `name?`: string, `scope?`: "account" | "principal", `orderBy?`: string, `addFields?`: Array‹"groups_in" | "groups_in_count"›, `username?`: string, `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **updateRole**(`uuid`: string, `roleWithAccess`: [RoleWithAccess](interfaces/rolewithaccess.md), `options`: any): *[RequestArgs](interfaces/requestargs.md)*

___

### `Const` RoleApiFactory

▸ **RoleApiFactory**(`configuration?`: [Configuration](classes/configuration.md), `basePath?`: string, `axios?`: AxiosInstance): *object*

*Defined in [api.ts:3374](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/rbac/api.ts#L3374)*

RoleApi - factory interface

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](classes/configuration.md) |
`basePath?` | string |
`axios?` | AxiosInstance |

**Returns:** *object*

* **createRoles**(`roleIn`: [RoleIn](interfaces/rolein.md), `options?`: any): *AxiosPromise‹[RoleWithAccess](interfaces/rolewithaccess.md)›*

* **deleteRole**(`uuid`: string, `options?`: any): *AxiosPromise‹Response›*

* **getRole**(`uuid`: string, `options?`: any): *AxiosPromise‹[RoleWithAccess](interfaces/rolewithaccess.md)›*

* **getRoleAccess**(`uuid`: string, `limit?`: number, `offset?`: number, `options?`: any): *AxiosPromise‹[AccessPagination](interfaces/accesspagination.md)›*

* **listRoles**(`limit?`: number, `offset?`: number, `name?`: string, `scope?`: "account" | "principal", `orderBy?`: string, `addFields?`: Array‹"groups_in" | "groups_in_count"›, `username?`: string, `options?`: any): *AxiosPromise‹[RolePaginationDynamic](interfaces/rolepaginationdynamic.md)›*

* **updateRole**(`uuid`: string, `roleWithAccess`: [RoleWithAccess](interfaces/rolewithaccess.md), `options?`: any): *AxiosPromise‹Response›*

___

### `Const` RoleApiFp

▸ **RoleApiFp**(`configuration?`: [Configuration](classes/configuration.md)): *object*

*Defined in [api.ts:3272](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/rbac/api.ts#L3272)*

RoleApi - functional programming interface

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](classes/configuration.md) |

**Returns:** *object*

* **createRoles**(`roleIn`: [RoleIn](interfaces/rolein.md), `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹[RoleWithAccess](interfaces/rolewithaccess.md)›*

* **deleteRole**(`uuid`: string, `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹Response›*

* **getRole**(`uuid`: string, `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹[RoleWithAccess](interfaces/rolewithaccess.md)›*

* **getRoleAccess**(`uuid`: string, `limit?`: number, `offset?`: number, `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹[AccessPagination](interfaces/accesspagination.md)›*

* **listRoles**(`limit?`: number, `offset?`: number, `name?`: string, `scope?`: "account" | "principal", `orderBy?`: string, `addFields?`: Array‹"groups_in" | "groups_in_count"›, `username?`: string, `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹[RolePaginationDynamic](interfaces/rolepaginationdynamic.md)›*

* **updateRole**(`uuid`: string, `roleWithAccess`: [RoleWithAccess](interfaces/rolewithaccess.md), `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹Response›*

___

### `Const` StatusApiAxiosParamCreator

▸ **StatusApiAxiosParamCreator**(`configuration?`: [Configuration](classes/configuration.md)): *object*

*Defined in [api.ts:3542](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/rbac/api.ts#L3542)*

StatusApi - axios parameter creator

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](classes/configuration.md) |

**Returns:** *object*

* **getStatus**(`options`: any): *[RequestArgs](interfaces/requestargs.md)*

___

### `Const` StatusApiFactory

▸ **StatusApiFactory**(`configuration?`: [Configuration](classes/configuration.md), `basePath?`: string, `axios?`: AxiosInstance): *object*

*Defined in [api.ts:3606](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/rbac/api.ts#L3606)*

StatusApi - factory interface

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](classes/configuration.md) |
`basePath?` | string |
`axios?` | AxiosInstance |

**Returns:** *object*

* **getStatus**(`options?`: any): *AxiosPromise‹[Status](interfaces/status.md)›*

___

### `Const` StatusApiFp

▸ **StatusApiFp**(`configuration?`: [Configuration](classes/configuration.md)): *object*

*Defined in [api.ts:3584](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/rbac/api.ts#L3584)*

StatusApi - functional programming interface

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](classes/configuration.md) |

**Returns:** *object*

* **getStatus**(`options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹[Status](interfaces/status.md)›*

## Object literals

### `Const` COLLECTION_FORMATS

### ▪ **COLLECTION_FORMATS**: *object*

*Defined in [api.ts:26](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/rbac/api.ts#L26)*

**`export`** 

###  csv

• **csv**: *string* = ","

*Defined in [api.ts:27](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/rbac/api.ts#L27)*

###  pipes

• **pipes**: *string* = "|"

*Defined in [api.ts:30](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/rbac/api.ts#L30)*

###  ssv

• **ssv**: *string* = " "

*Defined in [api.ts:28](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/rbac/api.ts#L28)*

###  tsv

• **tsv**: *string* = "	"

*Defined in [api.ts:29](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/rbac/api.ts#L29)*
