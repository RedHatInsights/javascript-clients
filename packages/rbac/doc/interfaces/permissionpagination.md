[@redhat-cloud-services/rbac-client](../README.md) › [Globals](../globals.md) › [PermissionPagination](permissionpagination.md)

# Interface: PermissionPagination

**`export`** 

**`interface`** PermissionPagination

## Hierarchy

* [ListPagination](listpagination.md)

  ↳ **PermissionPagination**

## Index

### Properties

* [data](permissionpagination.md#data)
* [links](permissionpagination.md#optional-links)
* [meta](permissionpagination.md#optional-meta)

## Properties

###  data

• **data**: *Array‹[Permission](permission.md)›*

*Defined in [packages/rbac/api.ts:561](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/rbac/api.ts#L561)*

**`memberof`** PermissionPagination

___

### `Optional` links

• **links**? : *[PaginationLinks](paginationlinks.md)*

*Inherited from [AccessPagination](accesspagination.md).[links](accesspagination.md#optional-links)*

*Defined in [packages/rbac/api.ts:460](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/rbac/api.ts#L460)*

**`memberof`** ListPagination

___

### `Optional` meta

• **meta**? : *[PaginationMeta](paginationmeta.md)*

*Inherited from [AccessPagination](accesspagination.md).[meta](accesspagination.md#optional-meta)*

*Defined in [packages/rbac/api.ts:454](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/rbac/api.ts#L454)*

**`memberof`** ListPagination
