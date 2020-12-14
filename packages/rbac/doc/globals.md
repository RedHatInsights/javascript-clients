[@redhat-cloud-services/rbac-client](README.md) › [Globals](globals.md)

# @redhat-cloud-services/rbac-client

## Index

### Enumerations

* [ResourceDefinitionFilterOperationEnum](enums/resourcedefinitionfilteroperationenum.md)

### Classes

* [AccessApi](classes/accessapi.md)
* [BaseAPI](classes/baseapi.md)
* [Configuration](classes/configuration.md)
* [GroupApi](classes/groupapi.md)
* [PermissionApi](classes/permissionapi.md)
* [PolicyApi](classes/policyapi.md)
* [PrincipalApi](classes/principalapi.md)
* [RequiredError](classes/requirederror.md)
* [RoleApi](classes/roleapi.md)
* [StatusApi](classes/statusapi.md)

### Interfaces

* [Access](interfaces/access.md)
* [AccessPagination](interfaces/accesspagination.md)
* [AccessPaginationAllOf](interfaces/accesspaginationallof.md)
* [AdditionalGroup](interfaces/additionalgroup.md)
* [ConfigurationParameters](interfaces/configurationparameters.md)
* [Error403](interfaces/error403.md)
* [Error403Errors](interfaces/error403errors.md)
* [ErrorErrors](interfaces/errorerrors.md)
* [Group](interfaces/group.md)
* [GroupOut](interfaces/groupout.md)
* [GroupOutAllOf](interfaces/groupoutallof.md)
* [GroupPagination](interfaces/grouppagination.md)
* [GroupPaginationAllOf](interfaces/grouppaginationallof.md)
* [GroupPrincipalIn](interfaces/groupprincipalin.md)
* [GroupRoleIn](interfaces/grouprolein.md)
* [GroupRolesPagination](interfaces/grouprolespagination.md)
* [GroupWithPrincipals](interfaces/groupwithprincipals.md)
* [GroupWithPrincipalsAllOf](interfaces/groupwithprincipalsallof.md)
* [GroupWithPrincipalsAndRoles](interfaces/groupwithprincipalsandroles.md)
* [GroupWithPrincipalsAndRolesAllOf](interfaces/groupwithprincipalsandrolesallof.md)
* [InlineResponse200](interfaces/inlineresponse200.md)
* [ListPagination](interfaces/listpagination.md)
* [ModelError](interfaces/modelerror.md)
* [PaginationLinks](interfaces/paginationlinks.md)
* [PaginationMeta](interfaces/paginationmeta.md)
* [Permission](interfaces/permission.md)
* [PermissionOptionsPagination](interfaces/permissionoptionspagination.md)
* [PermissionOptionsPaginationAllOf](interfaces/permissionoptionspaginationallof.md)
* [PermissionPagination](interfaces/permissionpagination.md)
* [PermissionPaginationAllOf](interfaces/permissionpaginationallof.md)
* [Policy](interfaces/policy.md)
* [PolicyExtended](interfaces/policyextended.md)
* [PolicyExtendedAllOf](interfaces/policyextendedallof.md)
* [PolicyIn](interfaces/policyin.md)
* [PolicyInAllOf](interfaces/policyinallof.md)
* [PolicyPagination](interfaces/policypagination.md)
* [PolicyPaginationAllOf](interfaces/policypaginationallof.md)
* [Principal](interfaces/principal.md)
* [PrincipalIn](interfaces/principalin.md)
* [PrincipalOut](interfaces/principalout.md)
* [PrincipalPagination](interfaces/principalpagination.md)
* [PrincipalPaginationAllOf](interfaces/principalpaginationallof.md)
* [RequestArgs](interfaces/requestargs.md)
* [ResourceDefinition](interfaces/resourcedefinition.md)
* [ResourceDefinitionFilter](interfaces/resourcedefinitionfilter.md)
* [Role](interfaces/role.md)
* [RoleIn](interfaces/rolein.md)
* [RoleInAllOf](interfaces/roleinallof.md)
* [RoleOut](interfaces/roleout.md)
* [RoleOutAllOf](interfaces/roleoutallof.md)
* [RoleOutDynamic](interfaces/roleoutdynamic.md)
* [RoleOutDynamicAllOf](interfaces/roleoutdynamicallof.md)
* [RolePagination](interfaces/rolepagination.md)
* [RolePaginationDynamic](interfaces/rolepaginationdynamic.md)
* [RolePaginationDynamicAllOf](interfaces/rolepaginationdynamicallof.md)
* [RolePatch](interfaces/rolepatch.md)
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
* [PermissionApiAxiosParamCreator](globals.md#const-permissionapiaxiosparamcreator)
* [PermissionApiFactory](globals.md#const-permissionapifactory)
* [PermissionApiFp](globals.md#const-permissionapifp)
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

• **BASE_PATH**: *string* = "https://raw.githubusercontent.com/api/rbac/v1".replace(/\/+$/, "")

*Defined in [packages/rbac/base.ts:20](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/rbac/base.ts#L20)*

## Functions

### `Const` AccessApiAxiosParamCreator

▸ **AccessApiAxiosParamCreator**(`configuration?`: [Configuration](classes/configuration.md)): *object*

*Defined in [packages/rbac/api.ts:1613](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/rbac/api.ts#L1613)*

AccessApi - axios parameter creator

**`export`** 

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](classes/configuration.md) |

**Returns:** *object*

* **getPrincipalAccess**(`application`: string, `username?`: string, `limit?`: number, `offset?`: number, `options`: any): *Promise‹[RequestArgs](interfaces/requestargs.md)›*

___

### `Const` AccessApiFactory

▸ **AccessApiFactory**(`configuration?`: [Configuration](classes/configuration.md), `basePath?`: string, `axios?`: AxiosInstance): *object*

*Defined in [packages/rbac/api.ts:1708](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/rbac/api.ts#L1708)*

AccessApi - factory interface

**`export`** 

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

*Defined in [packages/rbac/api.ts:1682](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/rbac/api.ts#L1682)*

AccessApi - functional programming interface

**`export`** 

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](classes/configuration.md) |

**Returns:** *object*

* **getPrincipalAccess**(`application`: string, `username?`: string, `limit?`: number, `offset?`: number, `options?`: any): *Promise‹function›*

___

### `Const` GroupApiAxiosParamCreator

▸ **GroupApiAxiosParamCreator**(`configuration?`: [Configuration](classes/configuration.md)): *object*

*Defined in [packages/rbac/api.ts:1755](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/rbac/api.ts#L1755)*

GroupApi - axios parameter creator

**`export`** 

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](classes/configuration.md) |

**Returns:** *object*

* **addPrincipalToGroup**(`uuid`: string, `groupPrincipalIn`: [GroupPrincipalIn](interfaces/groupprincipalin.md), `options`: any): *Promise‹[RequestArgs](interfaces/requestargs.md)›*

* **addRoleToGroup**(`uuid`: string, `groupRoleIn`: [GroupRoleIn](interfaces/grouprolein.md), `options`: any): *Promise‹[RequestArgs](interfaces/requestargs.md)›*

* **createGroup**(`group`: [Group](interfaces/group.md), `options`: any): *Promise‹[RequestArgs](interfaces/requestargs.md)›*

* **deleteGroup**(`uuid`: string, `options`: any): *Promise‹[RequestArgs](interfaces/requestargs.md)›*

* **deletePrincipalFromGroup**(`uuid`: string, `usernames`: string, `options`: any): *Promise‹[RequestArgs](interfaces/requestargs.md)›*

* **deleteRoleFromGroup**(`uuid`: string, `roles`: string, `options`: any): *Promise‹[RequestArgs](interfaces/requestargs.md)›*

* **getGroup**(`uuid`: string, `options`: any): *Promise‹[RequestArgs](interfaces/requestargs.md)›*

* **getPrincipalsFromGroup**(`uuid`: string, `principalUsername?`: string, `limit?`: number, `offset?`: number, `orderBy?`: "username", `options`: any): *Promise‹[RequestArgs](interfaces/requestargs.md)›*

* **listGroups**(`limit?`: number, `offset?`: number, `name?`: string, `nameMatch?`: "partial" | "exact", `scope?`: "account" | "principal", `username?`: string, `uuid?`: Array‹string›, `roleNames?`: Array‹string›, `roleDiscriminator?`: "all" | "any", `orderBy?`: "name" | "modified" | "principalCount" | "policyCount", `options`: any): *Promise‹[RequestArgs](interfaces/requestargs.md)›*

* **listRolesForGroup**(`uuid`: string, `exclude?`: boolean, `roleName?`: string, `roleDisplayName?`: string, `roleDescription?`: string, `limit?`: number, `offset?`: number, `orderBy?`: "name" | "display_name" | "modified" | "policyCount", `options`: any): *Promise‹[RequestArgs](interfaces/requestargs.md)›*

* **updateGroup**(`uuid`: string, `group`: [Group](interfaces/group.md), `options`: any): *Promise‹[RequestArgs](interfaces/requestargs.md)›*

___

### `Const` GroupApiFactory

▸ **GroupApiFactory**(`configuration?`: [Configuration](classes/configuration.md), `basePath?`: string, `axios?`: AxiosInstance): *object*

*Defined in [packages/rbac/api.ts:2561](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/rbac/api.ts#L2561)*

GroupApi - factory interface

**`export`** 

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

* **deleteGroup**(`uuid`: string, `options?`: any): *AxiosPromise‹void›*

* **deletePrincipalFromGroup**(`uuid`: string, `usernames`: string, `options?`: any): *AxiosPromise‹void›*

* **deleteRoleFromGroup**(`uuid`: string, `roles`: string, `options?`: any): *AxiosPromise‹void›*

* **getGroup**(`uuid`: string, `options?`: any): *AxiosPromise‹[GroupWithPrincipalsAndRoles](interfaces/groupwithprincipalsandroles.md)›*

* **getPrincipalsFromGroup**(`uuid`: string, `principalUsername?`: string, `limit?`: number, `offset?`: number, `orderBy?`: "username", `options?`: any): *AxiosPromise‹[PrincipalPagination](interfaces/principalpagination.md)›*

* **listGroups**(`limit?`: number, `offset?`: number, `name?`: string, `nameMatch?`: "partial" | "exact", `scope?`: "account" | "principal", `username?`: string, `uuid?`: Array‹string›, `roleNames?`: Array‹string›, `roleDiscriminator?`: "all" | "any", `orderBy?`: "name" | "modified" | "principalCount" | "policyCount", `options?`: any): *AxiosPromise‹[GroupPagination](interfaces/grouppagination.md)›*

* **listRolesForGroup**(`uuid`: string, `exclude?`: boolean, `roleName?`: string, `roleDisplayName?`: string, `roleDescription?`: string, `limit?`: number, `offset?`: number, `orderBy?`: "name" | "display_name" | "modified" | "policyCount", `options?`: any): *AxiosPromise‹[GroupRolesPagination](interfaces/grouprolespagination.md)›*

* **updateGroup**(`uuid`: string, `group`: [Group](interfaces/group.md), `options?`: any): *AxiosPromise‹[GroupOut](interfaces/groupout.md)›*

___

### `Const` GroupApiFp

▸ **GroupApiFp**(`configuration?`: [Configuration](classes/configuration.md)): *object*

*Defined in [packages/rbac/api.ts:2373](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/rbac/api.ts#L2373)*

GroupApi - functional programming interface

**`export`** 

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](classes/configuration.md) |

**Returns:** *object*

* **addPrincipalToGroup**(`uuid`: string, `groupPrincipalIn`: [GroupPrincipalIn](interfaces/groupprincipalin.md), `options?`: any): *Promise‹function›*

* **addRoleToGroup**(`uuid`: string, `groupRoleIn`: [GroupRoleIn](interfaces/grouprolein.md), `options?`: any): *Promise‹function›*

* **createGroup**(`group`: [Group](interfaces/group.md), `options?`: any): *Promise‹function›*

* **deleteGroup**(`uuid`: string, `options?`: any): *Promise‹function›*

* **deletePrincipalFromGroup**(`uuid`: string, `usernames`: string, `options?`: any): *Promise‹function›*

* **deleteRoleFromGroup**(`uuid`: string, `roles`: string, `options?`: any): *Promise‹function›*

* **getGroup**(`uuid`: string, `options?`: any): *Promise‹function›*

* **getPrincipalsFromGroup**(`uuid`: string, `principalUsername?`: string, `limit?`: number, `offset?`: number, `orderBy?`: "username", `options?`: any): *Promise‹function›*

* **listGroups**(`limit?`: number, `offset?`: number, `name?`: string, `nameMatch?`: "partial" | "exact", `scope?`: "account" | "principal", `username?`: string, `uuid?`: Array‹string›, `roleNames?`: Array‹string›, `roleDiscriminator?`: "all" | "any", `orderBy?`: "name" | "modified" | "principalCount" | "policyCount", `options?`: any): *Promise‹function›*

* **listRolesForGroup**(`uuid`: string, `exclude?`: boolean, `roleName?`: string, `roleDisplayName?`: string, `roleDescription?`: string, `limit?`: number, `offset?`: number, `orderBy?`: "name" | "display_name" | "modified" | "policyCount", `options?`: any): *Promise‹function›*

* **updateGroup**(`uuid`: string, `group`: [Group](interfaces/group.md), `options?`: any): *Promise‹function›*

___

### `Const` PermissionApiAxiosParamCreator

▸ **PermissionApiAxiosParamCreator**(`configuration?`: [Configuration](classes/configuration.md)): *object*

*Defined in [packages/rbac/api.ts:2872](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/rbac/api.ts#L2872)*

PermissionApi - axios parameter creator

**`export`** 

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](classes/configuration.md) |

**Returns:** *object*

* **listPermissionOptions**(`field`: "application" | "resource_type" | "verb", `limit?`: number, `offset?`: number, `application?`: string, `resourceType?`: string, `verb?`: string, `options`: any): *Promise‹[RequestArgs](interfaces/requestargs.md)›*

* **listPermissions**(`limit?`: number, `offset?`: number, `orderBy?`: "application" | "resource_type" | "verb" | "permission", `application?`: string, `resourceType?`: string, `verb?`: string, `permission?`: string, `excludeGlobals?`: "true" | "false", `options`: any): *Promise‹[RequestArgs](interfaces/requestargs.md)›*

___

### `Const` PermissionApiFactory

▸ **PermissionApiFactory**(`configuration?`: [Configuration](classes/configuration.md), `basePath?`: string, `axios?`: AxiosInstance): *object*

*Defined in [packages/rbac/api.ts:3076](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/rbac/api.ts#L3076)*

PermissionApi - factory interface

**`export`** 

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](classes/configuration.md) |
`basePath?` | string |
`axios?` | AxiosInstance |

**Returns:** *object*

* **listPermissionOptions**(`field`: "application" | "resource_type" | "verb", `limit?`: number, `offset?`: number, `application?`: string, `resourceType?`: string, `verb?`: string, `options?`: any): *AxiosPromise‹[PermissionOptionsPagination](interfaces/permissionoptionspagination.md)›*

* **listPermissions**(`limit?`: number, `offset?`: number, `orderBy?`: "application" | "resource_type" | "verb" | "permission", `application?`: string, `resourceType?`: string, `verb?`: string, `permission?`: string, `excludeGlobals?`: "true" | "false", `options?`: any): *AxiosPromise‹[PermissionPagination](interfaces/permissionpagination.md)›*

___

### `Const` PermissionApiFp

▸ **PermissionApiFp**(`configuration?`: [Configuration](classes/configuration.md)): *object*

*Defined in [packages/rbac/api.ts:3027](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/rbac/api.ts#L3027)*

PermissionApi - functional programming interface

**`export`** 

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](classes/configuration.md) |

**Returns:** *object*

* **listPermissionOptions**(`field`: "application" | "resource_type" | "verb", `limit?`: number, `offset?`: number, `application?`: string, `resourceType?`: string, `verb?`: string, `options?`: any): *Promise‹function›*

* **listPermissions**(`limit?`: number, `offset?`: number, `orderBy?`: "application" | "resource_type" | "verb" | "permission", `application?`: string, `resourceType?`: string, `verb?`: string, `permission?`: string, `excludeGlobals?`: "true" | "false", `options?`: any): *Promise‹function›*

___

### `Const` PolicyApiAxiosParamCreator

▸ **PolicyApiAxiosParamCreator**(`configuration?`: [Configuration](classes/configuration.md)): *object*

*Defined in [packages/rbac/api.ts:3163](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/rbac/api.ts#L3163)*

PolicyApi - axios parameter creator

**`export`** 

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](classes/configuration.md) |

**Returns:** *object*

* **createPolicies**(`policyIn`: [PolicyIn](interfaces/policyin.md), `options`: any): *Promise‹[RequestArgs](interfaces/requestargs.md)›*

* **deletePolicy**(`uuid`: string, `options`: any): *Promise‹[RequestArgs](interfaces/requestargs.md)›*

* **getPolicy**(`uuid`: string, `options`: any): *Promise‹[RequestArgs](interfaces/requestargs.md)›*

* **listPolicies**(`limit?`: number, `offset?`: number, `name?`: string, `scope?`: "account" | "principal", `groupName?`: string, `groupUuid?`: string, `orderBy?`: "name" | "modified", `options`: any): *Promise‹[RequestArgs](interfaces/requestargs.md)›*

* **updatePolicy**(`uuid`: string, `policyIn`: [PolicyIn](interfaces/policyin.md), `options`: any): *Promise‹[RequestArgs](interfaces/requestargs.md)›*

___

### `Const` PolicyApiFactory

▸ **PolicyApiFactory**(`configuration?`: [Configuration](classes/configuration.md), `basePath?`: string, `axios?`: AxiosInstance): *object*

*Defined in [packages/rbac/api.ts:3509](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/rbac/api.ts#L3509)*

PolicyApi - factory interface

**`export`** 

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](classes/configuration.md) |
`basePath?` | string |
`axios?` | AxiosInstance |

**Returns:** *object*

* **createPolicies**(`policyIn`: [PolicyIn](interfaces/policyin.md), `options?`: any): *AxiosPromise‹[PolicyExtended](interfaces/policyextended.md)›*

* **deletePolicy**(`uuid`: string, `options?`: any): *AxiosPromise‹void›*

* **getPolicy**(`uuid`: string, `options?`: any): *AxiosPromise‹[PolicyExtended](interfaces/policyextended.md)›*

* **listPolicies**(`limit?`: number, `offset?`: number, `name?`: string, `scope?`: "account" | "principal", `groupName?`: string, `groupUuid?`: string, `orderBy?`: "name" | "modified", `options?`: any): *AxiosPromise‹[PolicyPagination](interfaces/policypagination.md)›*

* **updatePolicy**(`uuid`: string, `policyIn`: [PolicyIn](interfaces/policyin.md), `options?`: any): *AxiosPromise‹[PolicyExtended](interfaces/policyextended.md)›*

___

### `Const` PolicyApiFp

▸ **PolicyApiFp**(`configuration?`: [Configuration](classes/configuration.md)): *object*

*Defined in [packages/rbac/api.ts:3423](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/rbac/api.ts#L3423)*

PolicyApi - functional programming interface

**`export`** 

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](classes/configuration.md) |

**Returns:** *object*

* **createPolicies**(`policyIn`: [PolicyIn](interfaces/policyin.md), `options?`: any): *Promise‹function›*

* **deletePolicy**(`uuid`: string, `options?`: any): *Promise‹function›*

* **getPolicy**(`uuid`: string, `options?`: any): *Promise‹function›*

* **listPolicies**(`limit?`: number, `offset?`: number, `name?`: string, `scope?`: "account" | "principal", `groupName?`: string, `groupUuid?`: string, `orderBy?`: "name" | "modified", `options?`: any): *Promise‹function›*

* **updatePolicy**(`uuid`: string, `policyIn`: [PolicyIn](interfaces/policyin.md), `options?`: any): *Promise‹function›*

___

### `Const` PrincipalApiAxiosParamCreator

▸ **PrincipalApiAxiosParamCreator**(`configuration?`: [Configuration](classes/configuration.md)): *object*

*Defined in [packages/rbac/api.ts:3652](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/rbac/api.ts#L3652)*

PrincipalApi - axios parameter creator

**`export`** 

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](classes/configuration.md) |

**Returns:** *object*

* **listPrincipals**(`limit?`: number, `offset?`: number, `matchCriteria?`: "partial" | "exact", `usernames?`: string, `sortOrder?`: "asc" | "desc", `email?`: string, `status?`: "enabled" | "disabled" | "all", `adminOnly?`: "true" | "false", `orderBy?`: "username", `options`: any): *Promise‹[RequestArgs](interfaces/requestargs.md)›*

___

### `Const` PrincipalApiFactory

▸ **PrincipalApiFactory**(`configuration?`: [Configuration](classes/configuration.md), `basePath?`: string, `axios?`: AxiosInstance): *object*

*Defined in [packages/rbac/api.ts:3773](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/rbac/api.ts#L3773)*

PrincipalApi - factory interface

**`export`** 

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](classes/configuration.md) |
`basePath?` | string |
`axios?` | AxiosInstance |

**Returns:** *object*

* **listPrincipals**(`limit?`: number, `offset?`: number, `matchCriteria?`: "partial" | "exact", `usernames?`: string, `sortOrder?`: "asc" | "desc", `email?`: string, `status?`: "enabled" | "disabled" | "all", `adminOnly?`: "true" | "false", `orderBy?`: "username", `options?`: any): *AxiosPromise‹[PrincipalPagination](interfaces/principalpagination.md)›*

___

### `Const` PrincipalApiFp

▸ **PrincipalApiFp**(`configuration?`: [Configuration](classes/configuration.md)): *object*

*Defined in [packages/rbac/api.ts:3742](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/rbac/api.ts#L3742)*

PrincipalApi - functional programming interface

**`export`** 

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](classes/configuration.md) |

**Returns:** *object*

* **listPrincipals**(`limit?`: number, `offset?`: number, `matchCriteria?`: "partial" | "exact", `usernames?`: string, `sortOrder?`: "asc" | "desc", `email?`: string, `status?`: "enabled" | "disabled" | "all", `adminOnly?`: "true" | "false", `orderBy?`: "username", `options?`: any): *Promise‹function›*

___

### `Const` RoleApiAxiosParamCreator

▸ **RoleApiAxiosParamCreator**(`configuration?`: [Configuration](classes/configuration.md)): *object*

*Defined in [packages/rbac/api.ts:3830](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/rbac/api.ts#L3830)*

RoleApi - axios parameter creator

**`export`** 

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](classes/configuration.md) |

**Returns:** *object*

* **createRoles**(`roleIn`: [RoleIn](interfaces/rolein.md), `options`: any): *Promise‹[RequestArgs](interfaces/requestargs.md)›*

* **deleteRole**(`uuid`: string, `options`: any): *Promise‹[RequestArgs](interfaces/requestargs.md)›*

* **getRole**(`uuid`: string, `scope?`: "account" | "principal", `options`: any): *Promise‹[RequestArgs](interfaces/requestargs.md)›*

* **getRoleAccess**(`uuid`: string, `limit?`: number, `offset?`: number, `options`: any): *Promise‹[RequestArgs](interfaces/requestargs.md)›*

* **listRoles**(`limit?`: number, `offset?`: number, `name?`: string, `displayName?`: string, `nameMatch?`: "partial" | "exact", `scope?`: "account" | "principal", `orderBy?`: "name" | "display_name" | "modified" | "policyCount", `addFields?`: Array‹"groups_in" | "groups_in_count"›, `username?`: string, `application?`: string, `permission?`: string, `options`: any): *Promise‹[RequestArgs](interfaces/requestargs.md)›*

* **patchRole**(`uuid`: string, `rolePatch?`: [RolePatch](interfaces/rolepatch.md), `options`: any): *Promise‹[RequestArgs](interfaces/requestargs.md)›*

* **updateRole**(`uuid`: string, `roleWithAccess`: [RoleWithAccess](interfaces/rolewithaccess.md), `options`: any): *Promise‹[RequestArgs](interfaces/requestargs.md)›*

___

### `Const` RoleApiFactory

▸ **RoleApiFactory**(`configuration?`: [Configuration](classes/configuration.md), `basePath?`: string, `axios?`: AxiosInstance): *object*

*Defined in [packages/rbac/api.ts:4336](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/rbac/api.ts#L4336)*

RoleApi - factory interface

**`export`** 

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](classes/configuration.md) |
`basePath?` | string |
`axios?` | AxiosInstance |

**Returns:** *object*

* **createRoles**(`roleIn`: [RoleIn](interfaces/rolein.md), `options?`: any): *AxiosPromise‹[RoleWithAccess](interfaces/rolewithaccess.md)›*

* **deleteRole**(`uuid`: string, `options?`: any): *AxiosPromise‹void›*

* **getRole**(`uuid`: string, `scope?`: "account" | "principal", `options?`: any): *AxiosPromise‹[RoleWithAccess](interfaces/rolewithaccess.md)›*

* **getRoleAccess**(`uuid`: string, `limit?`: number, `offset?`: number, `options?`: any): *AxiosPromise‹[AccessPagination](interfaces/accesspagination.md)›*

* **listRoles**(`limit?`: number, `offset?`: number, `name?`: string, `displayName?`: string, `nameMatch?`: "partial" | "exact", `scope?`: "account" | "principal", `orderBy?`: "name" | "display_name" | "modified" | "policyCount", `addFields?`: Array‹"groups_in" | "groups_in_count"›, `username?`: string, `application?`: string, `permission?`: string, `options?`: any): *AxiosPromise‹[RolePaginationDynamic](interfaces/rolepaginationdynamic.md)›*

* **patchRole**(`uuid`: string, `rolePatch?`: [RolePatch](interfaces/rolepatch.md), `options?`: any): *AxiosPromise‹[RoleWithAccess](interfaces/rolewithaccess.md)›*

* **updateRole**(`uuid`: string, `roleWithAccess`: [RoleWithAccess](interfaces/rolewithaccess.md), `options?`: any): *AxiosPromise‹void›*

___

### `Const` RoleApiFp

▸ **RoleApiFp**(`configuration?`: [Configuration](classes/configuration.md)): *object*

*Defined in [packages/rbac/api.ts:4214](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/rbac/api.ts#L4214)*

RoleApi - functional programming interface

**`export`** 

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](classes/configuration.md) |

**Returns:** *object*

* **createRoles**(`roleIn`: [RoleIn](interfaces/rolein.md), `options?`: any): *Promise‹function›*

* **deleteRole**(`uuid`: string, `options?`: any): *Promise‹function›*

* **getRole**(`uuid`: string, `scope?`: "account" | "principal", `options?`: any): *Promise‹function›*

* **getRoleAccess**(`uuid`: string, `limit?`: number, `offset?`: number, `options?`: any): *Promise‹function›*

* **listRoles**(`limit?`: number, `offset?`: number, `name?`: string, `displayName?`: string, `nameMatch?`: "partial" | "exact", `scope?`: "account" | "principal", `orderBy?`: "name" | "display_name" | "modified" | "policyCount", `addFields?`: Array‹"groups_in" | "groups_in_count"›, `username?`: string, `application?`: string, `permission?`: string, `options?`: any): *Promise‹function›*

* **patchRole**(`uuid`: string, `rolePatch?`: [RolePatch](interfaces/rolepatch.md), `options?`: any): *Promise‹function›*

* **updateRole**(`uuid`: string, `roleWithAccess`: [RoleWithAccess](interfaces/rolewithaccess.md), `options?`: any): *Promise‹function›*

___

### `Const` StatusApiAxiosParamCreator

▸ **StatusApiAxiosParamCreator**(`configuration?`: [Configuration](classes/configuration.md)): *object*

*Defined in [packages/rbac/api.ts:4539](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/rbac/api.ts#L4539)*

StatusApi - axios parameter creator

**`export`** 

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](classes/configuration.md) |

**Returns:** *object*

* **getStatus**(`options`: any): *Promise‹[RequestArgs](interfaces/requestargs.md)›*

___

### `Const` StatusApiFactory

▸ **StatusApiFactory**(`configuration?`: [Configuration](classes/configuration.md), `basePath?`: string, `axios?`: AxiosInstance): *object*

*Defined in [packages/rbac/api.ts:4606](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/rbac/api.ts#L4606)*

StatusApi - factory interface

**`export`** 

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

*Defined in [packages/rbac/api.ts:4584](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/rbac/api.ts#L4584)*

StatusApi - functional programming interface

**`export`** 

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](classes/configuration.md) |

**Returns:** *object*

* **getStatus**(`options?`: any): *Promise‹function›*

## Object literals

### `Const` COLLECTION_FORMATS

### ▪ **COLLECTION_FORMATS**: *object*

*Defined in [packages/rbac/base.ts:26](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/rbac/base.ts#L26)*

**`export`** 

###  csv

• **csv**: *string* = ","

*Defined in [packages/rbac/base.ts:27](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/rbac/base.ts#L27)*

###  pipes

• **pipes**: *string* = "|"

*Defined in [packages/rbac/base.ts:30](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/rbac/base.ts#L30)*

###  ssv

• **ssv**: *string* = " "

*Defined in [packages/rbac/base.ts:28](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/rbac/base.ts#L28)*

###  tsv

• **tsv**: *string* = "	"

*Defined in [packages/rbac/base.ts:29](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/rbac/base.ts#L29)*
