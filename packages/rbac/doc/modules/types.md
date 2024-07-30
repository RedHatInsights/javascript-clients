[@redhat-cloud-services/javascript-clients](../README.md) / [Exports](../modules.md) / types

# Module: types

## Table of contents

### Interfaces

- [Access](../interfaces/types.Access.md)
- [AccessPagination](../interfaces/types.AccessPagination.md)
- [AddRoleToGroup200Response](../interfaces/types.AddRoleToGroup200Response.md)
- [AdditionalGroup](../interfaces/types.AdditionalGroup.md)
- [CrossAccountRequest](../interfaces/types.CrossAccountRequest.md)
- [CrossAccountRequestByAccount](../interfaces/types.CrossAccountRequestByAccount.md)
- [CrossAccountRequestByUserId](../interfaces/types.CrossAccountRequestByUserId.md)
- [CrossAccountRequestDetailByAccount](../interfaces/types.CrossAccountRequestDetailByAccount.md)
- [CrossAccountRequestDetailByUseId](../interfaces/types.CrossAccountRequestDetailByUseId.md)
- [CrossAccountRequestIn](../interfaces/types.CrossAccountRequestIn.md)
- [CrossAccountRequestOut](../interfaces/types.CrossAccountRequestOut.md)
- [CrossAccountRequestPagination](../interfaces/types.CrossAccountRequestPagination.md)
- [CrossAccountRequestPatch](../interfaces/types.CrossAccountRequestPatch.md)
- [CrossAccountRequestUpdateIn](../interfaces/types.CrossAccountRequestUpdateIn.md)
- [CrossAccountRequestWithRoles](../interfaces/types.CrossAccountRequestWithRoles.md)
- [CrossAccountRequestWithRolesRolesInner](../interfaces/types.CrossAccountRequestWithRolesRolesInner.md)
- [Error403](../interfaces/types.Error403.md)
- [Error403ErrorsInner](../interfaces/types.Error403ErrorsInner.md)
- [ErrorErrorsInner](../interfaces/types.ErrorErrorsInner.md)
- [ErrorNotFound](../interfaces/types.ErrorNotFound.md)
- [ErrorNotFoundErrorsInner](../interfaces/types.ErrorNotFoundErrorsInner.md)
- [Group](../interfaces/types.Group.md)
- [GroupOut](../interfaces/types.GroupOut.md)
- [GroupPagination](../interfaces/types.GroupPagination.md)
- [GroupPrincipalIn](../interfaces/types.GroupPrincipalIn.md)
- [GroupPrincipalInPrincipalsInner](../interfaces/types.GroupPrincipalInPrincipalsInner.md)
- [GroupRoleIn](../interfaces/types.GroupRoleIn.md)
- [GroupRolesPagination](../interfaces/types.GroupRolesPagination.md)
- [GroupWithPrincipals](../interfaces/types.GroupWithPrincipals.md)
- [GroupWithPrincipalsAndRoles](../interfaces/types.GroupWithPrincipalsAndRoles.md)
- [ListPagination](../interfaces/types.ListPagination.md)
- [ModelError](../interfaces/types.ModelError.md)
- [PaginationLinks](../interfaces/types.PaginationLinks.md)
- [PaginationMeta](../interfaces/types.PaginationMeta.md)
- [Permission](../interfaces/types.Permission.md)
- [PermissionOptionsPagination](../interfaces/types.PermissionOptionsPagination.md)
- [PermissionPagination](../interfaces/types.PermissionPagination.md)
- [Policy](../interfaces/types.Policy.md)
- [PolicyExtended](../interfaces/types.PolicyExtended.md)
- [PolicyIn](../interfaces/types.PolicyIn.md)
- [PolicyPagination](../interfaces/types.PolicyPagination.md)
- [Principal](../interfaces/types.Principal.md)
- [PrincipalIn](../interfaces/types.PrincipalIn.md)
- [PrincipalMinimal](../interfaces/types.PrincipalMinimal.md)
- [PrincipalOut](../interfaces/types.PrincipalOut.md)
- [PrincipalPagination](../interfaces/types.PrincipalPagination.md)
- [ResourceDefinition](../interfaces/types.ResourceDefinition.md)
- [ResourceDefinitionFilter](../interfaces/types.ResourceDefinitionFilter.md)
- [Role](../interfaces/types.Role.md)
- [RoleIn](../interfaces/types.RoleIn.md)
- [RoleOut](../interfaces/types.RoleOut.md)
- [RoleOutDynamic](../interfaces/types.RoleOutDynamic.md)
- [RolePagination](../interfaces/types.RolePagination.md)
- [RolePaginationDynamic](../interfaces/types.RolePaginationDynamic.md)
- [RolePatch](../interfaces/types.RolePatch.md)
- [RolePut](../interfaces/types.RolePut.md)
- [RoleWithAccess](../interfaces/types.RoleWithAccess.md)
- [ServiceAccount](../interfaces/types.ServiceAccount.md)
- [ServiceAccountIn](../interfaces/types.ServiceAccountIn.md)
- [ServiceAccountInGroupResponse](../interfaces/types.ServiceAccountInGroupResponse.md)
- [ServiceAccountPagination](../interfaces/types.ServiceAccountPagination.md)
- [Status](../interfaces/types.Status.md)
- [Timestamped](../interfaces/types.Timestamped.md)
- [UUID](../interfaces/types.UUID.md)

### Type Aliases

- [CrossAccountRequestDetail](types.md#crossaccountrequestdetail)
- [CrossAccountRequestPaginationAllOfDataInner](types.md#crossaccountrequestpaginationallofdatainner)
- [CrossAccountRequestPatchStatusEnum](types.md#crossaccountrequestpatchstatusenum)
- [GetPrincipalsFromGroup200Response](types.md#getprincipalsfromgroup200response)
- [GroupPrincipalInPrincipalsInnerTypeEnum](types.md#groupprincipalinprincipalsinnertypeenum)
- [ListPrincipals200Response](types.md#listprincipals200response)
- [PrincipalExternalSourceId](types.md#principalexternalsourceid)
- [PrincipalPaginationAllOfDataInner](types.md#principalpaginationallofdatainner)
- [ResourceDefinitionFilterOperationEnum](types.md#resourcedefinitionfilteroperationenum)
- [ResourceDefinitionFilterValue](types.md#resourcedefinitionfiltervalue)
- [ResourceDefinitionFilterValueObject](types.md#resourcedefinitionfiltervalueobject)
- [ServiceAccountInTypeEnum](types.md#serviceaccountintypeenum)
- [ServiceAccountTypeEnum](types.md#serviceaccounttypeenum)

### Variables

- [CrossAccountRequestPatchStatusEnum](types.md#crossaccountrequestpatchstatusenum-1)
- [GroupPrincipalInPrincipalsInnerTypeEnum](types.md#groupprincipalinprincipalsinnertypeenum-1)
- [ResourceDefinitionFilterOperationEnum](types.md#resourcedefinitionfilteroperationenum-1)
- [ServiceAccountInTypeEnum](types.md#serviceaccountintypeenum-1)
- [ServiceAccountTypeEnum](types.md#serviceaccounttypeenum-1)

## Type Aliases

### CrossAccountRequestDetail

Ƭ **CrossAccountRequestDetail**: [`CrossAccountRequestDetailByAccount`](../interfaces/types.CrossAccountRequestDetailByAccount.md) \| [`CrossAccountRequestDetailByUseId`](../interfaces/types.CrossAccountRequestDetailByUseId.md)

**`Export`**

#### Defined in

[types/index.ts:258](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/rbac/types/index.ts#L258)

___

### CrossAccountRequestPaginationAllOfDataInner

Ƭ **CrossAccountRequestPaginationAllOfDataInner**: [`CrossAccountRequestByAccount`](../interfaces/types.CrossAccountRequestByAccount.md) \| [`CrossAccountRequestByUserId`](../interfaces/types.CrossAccountRequestByUserId.md)

**`Export`**

#### Defined in

[types/index.ts:521](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/rbac/types/index.ts#L521)

___

### CrossAccountRequestPatchStatusEnum

Ƭ **CrossAccountRequestPatchStatusEnum**: typeof [`CrossAccountRequestPatchStatusEnum`](types.md#crossaccountrequestpatchstatusenum-1)[keyof typeof [`CrossAccountRequestPatchStatusEnum`](types.md#crossaccountrequestpatchstatusenum-1)]

#### Defined in

[types/index.ts:555](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/rbac/types/index.ts#L555)

[types/index.ts:563](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/rbac/types/index.ts#L563)

___

### GetPrincipalsFromGroup200Response

Ƭ **GetPrincipalsFromGroup200Response**: [`PrincipalPagination`](../interfaces/types.PrincipalPagination.md) \| [`ServiceAccountInGroupResponse`](../interfaces/types.ServiceAccountInGroupResponse.md) \| [`ServiceAccountPagination`](../interfaces/types.ServiceAccountPagination.md)

**`Export`**

#### Defined in

[types/index.ts:769](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/rbac/types/index.ts#L769)

___

### GroupPrincipalInPrincipalsInnerTypeEnum

Ƭ **GroupPrincipalInPrincipalsInnerTypeEnum**: typeof [`GroupPrincipalInPrincipalsInnerTypeEnum`](types.md#groupprincipalinprincipalsinnertypeenum-1)[keyof typeof [`GroupPrincipalInPrincipalsInnerTypeEnum`](types.md#groupprincipalinprincipalsinnertypeenum-1)]

#### Defined in

[types/index.ts:921](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/rbac/types/index.ts#L921)

[types/index.ts:925](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/rbac/types/index.ts#L925)

___

### ListPrincipals200Response

Ƭ **ListPrincipals200Response**: [`PrincipalPagination`](../interfaces/types.PrincipalPagination.md) \| [`ServiceAccountPagination`](../interfaces/types.ServiceAccountPagination.md)

**`Export`**

#### Defined in

[types/index.ts:1080](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/rbac/types/index.ts#L1080)

___

### PrincipalExternalSourceId

Ƭ **PrincipalExternalSourceId**: `number` \| `string`

**`Export`**

#### Defined in

[types/index.ts:1403](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/rbac/types/index.ts#L1403)

___

### PrincipalPaginationAllOfDataInner

Ƭ **PrincipalPaginationAllOfDataInner**: [`Principal`](../interfaces/types.Principal.md) \| [`PrincipalMinimal`](../interfaces/types.PrincipalMinimal.md)

**`Export`**

#### Defined in

[types/index.ts:1515](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/rbac/types/index.ts#L1515)

___

### ResourceDefinitionFilterOperationEnum

Ƭ **ResourceDefinitionFilterOperationEnum**: typeof [`ResourceDefinitionFilterOperationEnum`](types.md#resourcedefinitionfilteroperationenum-1)[keyof typeof [`ResourceDefinitionFilterOperationEnum`](types.md#resourcedefinitionfilteroperationenum-1)]

#### Defined in

[types/index.ts:1556](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/rbac/types/index.ts#L1556)

[types/index.ts:1561](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/rbac/types/index.ts#L1561)

___

### ResourceDefinitionFilterValue

Ƭ **ResourceDefinitionFilterValue**: [`ResourceDefinitionFilterValueObject`](types.md#resourcedefinitionfiltervalueobject)[] \| `string`

**`Export`**

#### Defined in

[types/index.ts:1567](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/rbac/types/index.ts#L1567)

___

### ResourceDefinitionFilterValueObject

Ƭ **ResourceDefinitionFilterValueObject**: `string`

**`Export`**

#### Defined in

[types/index.ts:1573](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/rbac/types/index.ts#L1573)

___

### ServiceAccountInTypeEnum

Ƭ **ServiceAccountInTypeEnum**: typeof [`ServiceAccountInTypeEnum`](types.md#serviceaccountintypeenum-1)[keyof typeof [`ServiceAccountInTypeEnum`](types.md#serviceaccountintypeenum-1)]

#### Defined in

[types/index.ts:2110](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/rbac/types/index.ts#L2110)

[types/index.ts:2114](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/rbac/types/index.ts#L2114)

___

### ServiceAccountTypeEnum

Ƭ **ServiceAccountTypeEnum**: typeof [`ServiceAccountTypeEnum`](types.md#serviceaccounttypeenum-1)[keyof typeof [`ServiceAccountTypeEnum`](types.md#serviceaccounttypeenum-1)]

#### Defined in

[types/index.ts:2084](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/rbac/types/index.ts#L2084)

[types/index.ts:2088](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/rbac/types/index.ts#L2088)

## Variables

### CrossAccountRequestPatchStatusEnum

• `Const` **CrossAccountRequestPatchStatusEnum**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `Approved` | ``"approved"`` |
| `Cancelled` | ``"cancelled"`` |
| `Denied` | ``"denied"`` |
| `Expired` | ``"expired"`` |
| `Pending` | ``"pending"`` |

#### Defined in

[types/index.ts:555](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/rbac/types/index.ts#L555)

[types/index.ts:563](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/rbac/types/index.ts#L563)

___

### GroupPrincipalInPrincipalsInnerTypeEnum

• `Const` **GroupPrincipalInPrincipalsInnerTypeEnum**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `ServiceAccount` | ``"service-account"`` |

#### Defined in

[types/index.ts:921](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/rbac/types/index.ts#L921)

[types/index.ts:925](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/rbac/types/index.ts#L925)

___

### ResourceDefinitionFilterOperationEnum

• `Const` **ResourceDefinitionFilterOperationEnum**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `Equal` | ``"equal"`` |
| `In` | ``"in"`` |

#### Defined in

[types/index.ts:1556](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/rbac/types/index.ts#L1556)

[types/index.ts:1561](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/rbac/types/index.ts#L1561)

___

### ServiceAccountInTypeEnum

• `Const` **ServiceAccountInTypeEnum**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `ServiceAccount` | ``"service-account"`` |

#### Defined in

[types/index.ts:2110](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/rbac/types/index.ts#L2110)

[types/index.ts:2114](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/rbac/types/index.ts#L2114)

___

### ServiceAccountTypeEnum

• `Const` **ServiceAccountTypeEnum**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `ServiceAccount` | ``"service-account"`` |

#### Defined in

[types/index.ts:2084](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/rbac/types/index.ts#L2084)

[types/index.ts:2088](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/rbac/types/index.ts#L2088)
