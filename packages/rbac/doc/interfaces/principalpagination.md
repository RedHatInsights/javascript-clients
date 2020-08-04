[@redhat-cloud-services/rbac-client](../README.md) › [Globals](../globals.md) › [PrincipalPagination](principalpagination.md)

# Interface: PrincipalPagination

**`export`** 

**`interface`** PrincipalPagination

## Hierarchy

* [ListPagination](listpagination.md)

  ↳ **PrincipalPagination**

## Index

### Properties

* [data](principalpagination.md#data)
* [links](principalpagination.md#optional-links)
* [meta](principalpagination.md#optional-meta)

## Properties

###  data

• **data**: *Array‹[Principal](principal.md)›*

*Defined in [packages/rbac/api.ts:787](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/rbac/api.ts#L787)*

**`memberof`** PrincipalPagination

___

### `Optional` links

• **links**? : *[PaginationLinks](paginationlinks.md)*

*Inherited from [AccessPagination](accesspagination.md).[links](accesspagination.md#optional-links)*

*Defined in [packages/rbac/api.ts:416](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/rbac/api.ts#L416)*

**`memberof`** ListPagination

___

### `Optional` meta

• **meta**? : *[PaginationMeta](paginationmeta.md)*

*Inherited from [AccessPagination](accesspagination.md).[meta](accesspagination.md#optional-meta)*

*Defined in [packages/rbac/api.ts:410](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/rbac/api.ts#L410)*

**`memberof`** ListPagination
