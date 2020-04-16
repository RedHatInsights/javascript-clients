[@redhat-cloud-services/host-inventory-client](../README.md) › [Globals](../globals.md) › [TagsOut](tagsout.md)

# Interface: TagsOut

**`export`** 

**`interface`** TagsOut

## Hierarchy

* **TagsOut**

## Index

### Properties

* [count](tagsout.md#optional-count)
* [page](tagsout.md#optional-page)
* [per_page](tagsout.md#optional-per_page)
* [results](tagsout.md#optional-results)
* [total](tagsout.md#optional-total)

## Properties

### `Optional` count

• **count**? : *number*

*Defined in [packages/host-inventory/api.ts:960](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L960)*

A number of entries on the current page.

**`memberof`** TagsOut

___

### `Optional` page

• **page**? : *number*

*Defined in [packages/host-inventory/api.ts:966](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L966)*

A current page number.

**`memberof`** TagsOut

___

### `Optional` per_page

• **per_page**? : *number*

*Defined in [packages/host-inventory/api.ts:972](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L972)*

A page size – a number of entries per single page.

**`memberof`** TagsOut

___

### `Optional` results

• **results**? : *object*

*Defined in [packages/host-inventory/api.ts:978](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L978)*

The list of tags on the systems

**`memberof`** TagsOut

#### Type declaration:

* \[ **key**: *string*\]: Array‹[StructuredTag](structuredtag.md)›

___

### `Optional` total

• **total**? : *number*

*Defined in [packages/host-inventory/api.ts:954](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L954)*

Total number of items in the \"data\" list.

**`memberof`** TagsOut
