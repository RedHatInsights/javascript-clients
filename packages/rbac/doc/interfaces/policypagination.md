[@redhat-cloud-services/rbac-client](../README.md) › [Globals](../globals.md) › [PolicyPagination](policypagination.md)

# Interface: PolicyPagination

**`export`** 

**`interface`** PolicyPagination

## Hierarchy

* [ListPagination](listpagination.md)

  ↳ **PolicyPagination**

## Index

### Properties

* [data](policypagination.md#data)
* [links](policypagination.md#optional-links)
* [meta](policypagination.md#optional-meta)

## Properties

###  data

• **data**: *Array‹[PolicyExtended](policyextended.md)›*

*Defined in [packages/rbac/api.ts:712](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/rbac/api.ts#L712)*

**`memberof`** PolicyPagination

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
