[@redhat-cloud-services/rbac-client](../README.md) › [Globals](../globals.md) › [GroupPagination](grouppagination.md)

# Interface: GroupPagination

**`export`** 

**`interface`** GroupPagination

## Hierarchy

* [ListPagination](listpagination.md)

  ↳ **GroupPagination**

## Index

### Properties

* [data](grouppagination.md#data)
* [links](grouppagination.md#optional-links)
* [meta](grouppagination.md#optional-meta)

## Properties

###  data

• **data**: *Array‹[GroupOut](groupout.md)›*

*Defined in [packages/rbac/api.ts:240](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/rbac/api.ts#L240)*

**`memberof`** GroupPagination

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
