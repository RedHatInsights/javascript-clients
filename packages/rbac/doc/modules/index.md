[@redhat-cloud-services/javascript-clients](../README.md) / [Exports](../modules.md) / index

# Module: index

## Table of contents

### References

- [Access](index.md#access)
- [AccessPagination](index.md#accesspagination)
- [AddRoleToGroup200Response](index.md#addroletogroup200response)
- [AdditionalGroup](index.md#additionalgroup)
- [CrossAccountRequest](index.md#crossaccountrequest)
- [CrossAccountRequestByAccount](index.md#crossaccountrequestbyaccount)
- [CrossAccountRequestByUserId](index.md#crossaccountrequestbyuserid)
- [CrossAccountRequestDetail](index.md#crossaccountrequestdetail)
- [CrossAccountRequestDetailByAccount](index.md#crossaccountrequestdetailbyaccount)
- [CrossAccountRequestDetailByUseId](index.md#crossaccountrequestdetailbyuseid)
- [CrossAccountRequestIn](index.md#crossaccountrequestin)
- [CrossAccountRequestOut](index.md#crossaccountrequestout)
- [CrossAccountRequestPagination](index.md#crossaccountrequestpagination)
- [CrossAccountRequestPaginationAllOfDataInner](index.md#crossaccountrequestpaginationallofdatainner)
- [CrossAccountRequestPatch](index.md#crossaccountrequestpatch)
- [CrossAccountRequestPatchStatusEnum](index.md#crossaccountrequestpatchstatusenum)
- [CrossAccountRequestUpdateIn](index.md#crossaccountrequestupdatein)
- [CrossAccountRequestWithRoles](index.md#crossaccountrequestwithroles)
- [CrossAccountRequestWithRolesRolesInner](index.md#crossaccountrequestwithrolesrolesinner)
- [Error403](index.md#error403)
- [Error403ErrorsInner](index.md#error403errorsinner)
- [ErrorErrorsInner](index.md#errorerrorsinner)
- [ErrorNotFound](index.md#errornotfound)
- [ErrorNotFoundErrorsInner](index.md#errornotfounderrorsinner)
- [GetPrincipalsFromGroup200Response](index.md#getprincipalsfromgroup200response)
- [Group](index.md#group)
- [GroupOut](index.md#groupout)
- [GroupPagination](index.md#grouppagination)
- [GroupPrincipalIn](index.md#groupprincipalin)
- [GroupPrincipalInPrincipalsInner](index.md#groupprincipalinprincipalsinner)
- [GroupPrincipalInPrincipalsInnerTypeEnum](index.md#groupprincipalinprincipalsinnertypeenum)
- [GroupRoleIn](index.md#grouprolein)
- [GroupRolesPagination](index.md#grouprolespagination)
- [GroupWithPrincipals](index.md#groupwithprincipals)
- [GroupWithPrincipalsAndRoles](index.md#groupwithprincipalsandroles)
- [ListPagination](index.md#listpagination)
- [ListPrincipals200Response](index.md#listprincipals200response)
- [ModelError](index.md#modelerror)
- [PaginationLinks](index.md#paginationlinks)
- [PaginationMeta](index.md#paginationmeta)
- [Permission](index.md#permission)
- [PermissionOptionsPagination](index.md#permissionoptionspagination)
- [PermissionPagination](index.md#permissionpagination)
- [Policy](index.md#policy)
- [PolicyExtended](index.md#policyextended)
- [PolicyIn](index.md#policyin)
- [PolicyPagination](index.md#policypagination)
- [Principal](index.md#principal)
- [PrincipalExternalSourceId](index.md#principalexternalsourceid)
- [PrincipalIn](index.md#principalin)
- [PrincipalMinimal](index.md#principalminimal)
- [PrincipalOut](index.md#principalout)
- [PrincipalPagination](index.md#principalpagination)
- [PrincipalPaginationAllOfDataInner](index.md#principalpaginationallofdatainner)
- [ResourceDefinition](index.md#resourcedefinition)
- [ResourceDefinitionFilter](index.md#resourcedefinitionfilter)
- [ResourceDefinitionFilterOperationEnum](index.md#resourcedefinitionfilteroperationenum)
- [ResourceDefinitionFilterValue](index.md#resourcedefinitionfiltervalue)
- [ResourceDefinitionFilterValueObject](index.md#resourcedefinitionfiltervalueobject)
- [Role](index.md#role)
- [RoleIn](index.md#rolein)
- [RoleOut](index.md#roleout)
- [RoleOutDynamic](index.md#roleoutdynamic)
- [RolePagination](index.md#rolepagination)
- [RolePaginationDynamic](index.md#rolepaginationdynamic)
- [RolePatch](index.md#rolepatch)
- [RoleWithAccess](index.md#rolewithaccess)
- [ServiceAccount](index.md#serviceaccount)
- [ServiceAccountIn](index.md#serviceaccountin)
- [ServiceAccountInGroupResponse](index.md#serviceaccountingroupresponse)
- [ServiceAccountInTypeEnum](index.md#serviceaccountintypeenum)
- [ServiceAccountPagination](index.md#serviceaccountpagination)
- [ServiceAccountTypeEnum](index.md#serviceaccounttypeenum)
- [Status](index.md#status)
- [Timestamped](index.md#timestamped)
- [UUID](index.md#uuid)
- [addPrincipalToGroup](index.md#addprincipaltogroup)
- [addRoleToGroup](index.md#addroletogroup)
- [createCrossAccountRequests](index.md#createcrossaccountrequests)
- [createGroup](index.md#creategroup)
- [createPolicies](index.md#createpolicies)
- [createRole](index.md#createrole)
- [deleteGroup](index.md#deletegroup)
- [deletePolicy](index.md#deletepolicy)
- [deletePrincipalFromGroup](index.md#deleteprincipalfromgroup)
- [deleteRole](index.md#deleterole)
- [deleteRoleFromGroup](index.md#deleterolefromgroup)
- [getCrossAccountRequest](index.md#getcrossaccountrequest)
- [getGroup](index.md#getgroup)
- [getPolicy](index.md#getpolicy)
- [getPrincipalAccess](index.md#getprincipalaccess)
- [getPrincipalsFromGroup](index.md#getprincipalsfromgroup)
- [getRole](index.md#getrole)
- [getRoleAccess](index.md#getroleaccess)
- [getStatus](index.md#getstatus)
- [listCrossAccountRequests](index.md#listcrossaccountrequests)
- [listGroups](index.md#listgroups)
- [listPermissionOptions](index.md#listpermissionoptions)
- [listPermissions](index.md#listpermissions)
- [listPolicies](index.md#listpolicies)
- [listPrincipals](index.md#listprincipals)
- [listRoles](index.md#listroles)
- [listRolesForGroup](index.md#listrolesforgroup)
- [patchCrossAccountRequest](index.md#patchcrossaccountrequest)
- [patchRole](index.md#patchrole)
- [putCrossAccountRequest](index.md#putcrossaccountrequest)
- [updateGroup](index.md#updategroup)
- [updatePolicy](index.md#updatepolicy)
- [updateRole](index.md#updaterole)

## References

### Access

Re-exports [Access](../interfaces/types.Access.md)

___

### AccessPagination

Re-exports [AccessPagination](../interfaces/types.AccessPagination.md)

___

### AddRoleToGroup200Response

Re-exports [AddRoleToGroup200Response](../interfaces/types.AddRoleToGroup200Response.md)

___

### AdditionalGroup

Re-exports [AdditionalGroup](../interfaces/types.AdditionalGroup.md)

___

### CrossAccountRequest

Re-exports [CrossAccountRequest](../interfaces/types.CrossAccountRequest.md)

___

### CrossAccountRequestByAccount

Re-exports [CrossAccountRequestByAccount](../interfaces/types.CrossAccountRequestByAccount.md)

___

### CrossAccountRequestByUserId

Re-exports [CrossAccountRequestByUserId](../interfaces/types.CrossAccountRequestByUserId.md)

___

### CrossAccountRequestDetail

Re-exports [CrossAccountRequestDetail](types.md#crossaccountrequestdetail)

___

### CrossAccountRequestDetailByAccount

Re-exports [CrossAccountRequestDetailByAccount](../interfaces/types.CrossAccountRequestDetailByAccount.md)

___

### CrossAccountRequestDetailByUseId

Re-exports [CrossAccountRequestDetailByUseId](../interfaces/types.CrossAccountRequestDetailByUseId.md)

___

### CrossAccountRequestIn

Re-exports [CrossAccountRequestIn](../interfaces/types.CrossAccountRequestIn.md)

___

### CrossAccountRequestOut

Re-exports [CrossAccountRequestOut](../interfaces/types.CrossAccountRequestOut.md)

___

### CrossAccountRequestPagination

Re-exports [CrossAccountRequestPagination](../interfaces/types.CrossAccountRequestPagination.md)

___

### CrossAccountRequestPaginationAllOfDataInner

Re-exports [CrossAccountRequestPaginationAllOfDataInner](types.md#crossaccountrequestpaginationallofdatainner)

___

### CrossAccountRequestPatch

Re-exports [CrossAccountRequestPatch](../interfaces/types.CrossAccountRequestPatch.md)

___

### CrossAccountRequestPatchStatusEnum

Re-exports [CrossAccountRequestPatchStatusEnum](types.md#crossaccountrequestpatchstatusenum-1)

___

### CrossAccountRequestUpdateIn

Re-exports [CrossAccountRequestUpdateIn](../interfaces/types.CrossAccountRequestUpdateIn.md)

___

### CrossAccountRequestWithRoles

Re-exports [CrossAccountRequestWithRoles](../interfaces/types.CrossAccountRequestWithRoles.md)

___

### CrossAccountRequestWithRolesRolesInner

Re-exports [CrossAccountRequestWithRolesRolesInner](../interfaces/types.CrossAccountRequestWithRolesRolesInner.md)

___

### Error403

Re-exports [Error403](../interfaces/types.Error403.md)

___

### Error403ErrorsInner

Re-exports [Error403ErrorsInner](../interfaces/types.Error403ErrorsInner.md)

___

### ErrorErrorsInner

Re-exports [ErrorErrorsInner](../interfaces/types.ErrorErrorsInner.md)

___

### ErrorNotFound

Re-exports [ErrorNotFound](../interfaces/types.ErrorNotFound.md)

___

### ErrorNotFoundErrorsInner

Re-exports [ErrorNotFoundErrorsInner](../interfaces/types.ErrorNotFoundErrorsInner.md)

___

### GetPrincipalsFromGroup200Response

Re-exports [GetPrincipalsFromGroup200Response](types.md#getprincipalsfromgroup200response)

___

### Group

Re-exports [Group](../interfaces/types.Group.md)

___

### GroupOut

Re-exports [GroupOut](../interfaces/types.GroupOut.md)

___

### GroupPagination

Re-exports [GroupPagination](../interfaces/types.GroupPagination.md)

___

### GroupPrincipalIn

Re-exports [GroupPrincipalIn](../interfaces/types.GroupPrincipalIn.md)

___

### GroupPrincipalInPrincipalsInner

Re-exports [GroupPrincipalInPrincipalsInner](../interfaces/types.GroupPrincipalInPrincipalsInner.md)

___

### GroupPrincipalInPrincipalsInnerTypeEnum

Re-exports [GroupPrincipalInPrincipalsInnerTypeEnum](types.md#groupprincipalinprincipalsinnertypeenum-1)

___

### GroupRoleIn

Re-exports [GroupRoleIn](../interfaces/types.GroupRoleIn.md)

___

### GroupRolesPagination

Re-exports [GroupRolesPagination](../interfaces/types.GroupRolesPagination.md)

___

### GroupWithPrincipals

Re-exports [GroupWithPrincipals](../interfaces/types.GroupWithPrincipals.md)

___

### GroupWithPrincipalsAndRoles

Re-exports [GroupWithPrincipalsAndRoles](../interfaces/types.GroupWithPrincipalsAndRoles.md)

___

### ListPagination

Re-exports [ListPagination](../interfaces/types.ListPagination.md)

___

### ListPrincipals200Response

Re-exports [ListPrincipals200Response](types.md#listprincipals200response)

___

### ModelError

Re-exports [ModelError](../interfaces/types.ModelError.md)

___

### PaginationLinks

Re-exports [PaginationLinks](../interfaces/types.PaginationLinks.md)

___

### PaginationMeta

Re-exports [PaginationMeta](../interfaces/types.PaginationMeta.md)

___

### Permission

Re-exports [Permission](../interfaces/types.Permission.md)

___

### PermissionOptionsPagination

Re-exports [PermissionOptionsPagination](../interfaces/types.PermissionOptionsPagination.md)

___

### PermissionPagination

Re-exports [PermissionPagination](../interfaces/types.PermissionPagination.md)

___

### Policy

Re-exports [Policy](../interfaces/types.Policy.md)

___

### PolicyExtended

Re-exports [PolicyExtended](../interfaces/types.PolicyExtended.md)

___

### PolicyIn

Re-exports [PolicyIn](../interfaces/types.PolicyIn.md)

___

### PolicyPagination

Re-exports [PolicyPagination](../interfaces/types.PolicyPagination.md)

___

### Principal

Re-exports [Principal](../interfaces/types.Principal.md)

___

### PrincipalExternalSourceId

Re-exports [PrincipalExternalSourceId](types.md#principalexternalsourceid)

___

### PrincipalIn

Re-exports [PrincipalIn](../interfaces/types.PrincipalIn.md)

___

### PrincipalMinimal

Re-exports [PrincipalMinimal](../interfaces/types.PrincipalMinimal.md)

___

### PrincipalOut

Re-exports [PrincipalOut](../interfaces/types.PrincipalOut.md)

___

### PrincipalPagination

Re-exports [PrincipalPagination](../interfaces/types.PrincipalPagination.md)

___

### PrincipalPaginationAllOfDataInner

Re-exports [PrincipalPaginationAllOfDataInner](types.md#principalpaginationallofdatainner)

___

### ResourceDefinition

Re-exports [ResourceDefinition](../interfaces/types.ResourceDefinition.md)

___

### ResourceDefinitionFilter

Re-exports [ResourceDefinitionFilter](../interfaces/types.ResourceDefinitionFilter.md)

___

### ResourceDefinitionFilterOperationEnum

Re-exports [ResourceDefinitionFilterOperationEnum](types.md#resourcedefinitionfilteroperationenum-1)

___

### ResourceDefinitionFilterValue

Re-exports [ResourceDefinitionFilterValue](types.md#resourcedefinitionfiltervalue)

___

### ResourceDefinitionFilterValueObject

Re-exports [ResourceDefinitionFilterValueObject](types.md#resourcedefinitionfiltervalueobject)

___

### Role

Re-exports [Role](../interfaces/types.Role.md)

___

### RoleIn

Re-exports [RoleIn](../interfaces/types.RoleIn.md)

___

### RoleOut

Re-exports [RoleOut](../interfaces/types.RoleOut.md)

___

### RoleOutDynamic

Re-exports [RoleOutDynamic](../interfaces/types.RoleOutDynamic.md)

___

### RolePagination

Re-exports [RolePagination](../interfaces/types.RolePagination.md)

___

### RolePaginationDynamic

Re-exports [RolePaginationDynamic](../interfaces/types.RolePaginationDynamic.md)

___

### RolePatch

Re-exports [RolePatch](../interfaces/types.RolePatch.md)

___

### RoleWithAccess

Re-exports [RoleWithAccess](../interfaces/types.RoleWithAccess.md)

___

### ServiceAccount

Re-exports [ServiceAccount](../interfaces/types.ServiceAccount.md)

___

### ServiceAccountIn

Re-exports [ServiceAccountIn](../interfaces/types.ServiceAccountIn.md)

___

### ServiceAccountInGroupResponse

Re-exports [ServiceAccountInGroupResponse](../interfaces/types.ServiceAccountInGroupResponse.md)

___

### ServiceAccountInTypeEnum

Re-exports [ServiceAccountInTypeEnum](types.md#serviceaccountintypeenum-1)

___

### ServiceAccountPagination

Re-exports [ServiceAccountPagination](../interfaces/types.ServiceAccountPagination.md)

___

### ServiceAccountTypeEnum

Re-exports [ServiceAccountTypeEnum](types.md#serviceaccounttypeenum-1)

___

### Status

Re-exports [Status](../interfaces/types.Status.md)

___

### Timestamped

Re-exports [Timestamped](../interfaces/types.Timestamped.md)

___

### UUID

Re-exports [UUID](../interfaces/types.UUID.md)

___

### addPrincipalToGroup

Renames and re-exports [addPrincipalToGroupParamCreator](AddPrincipalToGroup.md#addprincipaltogroupparamcreator)

___

### addRoleToGroup

Renames and re-exports [addRoleToGroupParamCreator](AddRoleToGroup.md#addroletogroupparamcreator)

___

### createCrossAccountRequests

Renames and re-exports [createCrossAccountRequestsParamCreator](CreateCrossAccountRequests.md#createcrossaccountrequestsparamcreator)

___

### createGroup

Renames and re-exports [createGroupParamCreator](CreateGroup.md#creategroupparamcreator)

___

### createPolicies

Renames and re-exports [createPoliciesParamCreator](CreatePolicies.md#createpoliciesparamcreator)

___

### createRole

Renames and re-exports [createRoleParamCreator](CreateRole.md#createroleparamcreator)

___

### deleteGroup

Renames and re-exports [deleteGroupParamCreator](DeleteGroup.md#deletegroupparamcreator)

___

### deletePolicy

Renames and re-exports [deletePolicyParamCreator](DeletePolicy.md#deletepolicyparamcreator)

___

### deletePrincipalFromGroup

Renames and re-exports [deletePrincipalFromGroupParamCreator](DeletePrincipalFromGroup.md#deleteprincipalfromgroupparamcreator)

___

### deleteRole

Renames and re-exports [deleteRoleParamCreator](DeleteRole.md#deleteroleparamcreator)

___

### deleteRoleFromGroup

Renames and re-exports [deleteRoleFromGroupParamCreator](DeleteRoleFromGroup.md#deleterolefromgroupparamcreator)

___

### getCrossAccountRequest

Renames and re-exports [getCrossAccountRequestParamCreator](GetCrossAccountRequest.md#getcrossaccountrequestparamcreator)

___

### getGroup

Renames and re-exports [getGroupParamCreator](GetGroup.md#getgroupparamcreator)

___

### getPolicy

Renames and re-exports [getPolicyParamCreator](GetPolicy.md#getpolicyparamcreator)

___

### getPrincipalAccess

Renames and re-exports [getPrincipalAccessParamCreator](GetPrincipalAccess.md#getprincipalaccessparamcreator)

___

### getPrincipalsFromGroup

Renames and re-exports [getPrincipalsFromGroupParamCreator](GetPrincipalsFromGroup.md#getprincipalsfromgroupparamcreator)

___

### getRole

Renames and re-exports [getRoleParamCreator](GetRole.md#getroleparamcreator)

___

### getRoleAccess

Renames and re-exports [getRoleAccessParamCreator](GetRoleAccess.md#getroleaccessparamcreator)

___

### getStatus

Renames and re-exports [getStatusParamCreator](GetStatus.md#getstatusparamcreator)

___

### listCrossAccountRequests

Renames and re-exports [listCrossAccountRequestsParamCreator](ListCrossAccountRequests.md#listcrossaccountrequestsparamcreator)

___

### listGroups

Renames and re-exports [listGroupsParamCreator](ListGroups.md#listgroupsparamcreator)

___

### listPermissionOptions

Renames and re-exports [listPermissionOptionsParamCreator](ListPermissionOptions.md#listpermissionoptionsparamcreator)

___

### listPermissions

Renames and re-exports [listPermissionsParamCreator](ListPermissions.md#listpermissionsparamcreator)

___

### listPolicies

Renames and re-exports [listPoliciesParamCreator](ListPolicies.md#listpoliciesparamcreator)

___

### listPrincipals

Renames and re-exports [listPrincipalsParamCreator](ListPrincipals.md#listprincipalsparamcreator)

___

### listRoles

Renames and re-exports [listRolesParamCreator](ListRoles.md#listrolesparamcreator)

___

### listRolesForGroup

Renames and re-exports [listRolesForGroupParamCreator](ListRolesForGroup.md#listrolesforgroupparamcreator)

___

### patchCrossAccountRequest

Renames and re-exports [patchCrossAccountRequestParamCreator](PatchCrossAccountRequest.md#patchcrossaccountrequestparamcreator)

___

### patchRole

Renames and re-exports [patchRoleParamCreator](PatchRole.md#patchroleparamcreator)

___

### putCrossAccountRequest

Renames and re-exports [putCrossAccountRequestParamCreator](PutCrossAccountRequest.md#putcrossaccountrequestparamcreator)

___

### updateGroup

Renames and re-exports [updateGroupParamCreator](UpdateGroup.md#updategroupparamcreator)

___

### updatePolicy

Renames and re-exports [updatePolicyParamCreator](UpdatePolicy.md#updatepolicyparamcreator)

___

### updateRole

Renames and re-exports [updateRoleParamCreator](UpdateRole.md#updateroleparamcreator)
