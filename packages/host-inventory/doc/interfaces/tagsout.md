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

*Defined in [packages/host-inventory/api.ts:1035](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1035)*

A number of entries on the current page.

**`memberof`** TagsOut

___

### `Optional` page

• **page**? : *number*

*Defined in [packages/host-inventory/api.ts:1041](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1041)*

A current page number.

**`memberof`** TagsOut

___

### `Optional` per_page

• **per_page**? : *number*

*Defined in [packages/host-inventory/api.ts:1047](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1047)*

A page size – a number of entries per single page.

**`memberof`** TagsOut

___

### `Optional` results

• **results**? : *object*

*Defined in [packages/host-inventory/api.ts:1053](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1053)*

The list of tags on the systems

**`memberof`** TagsOut

#### Type declaration:

* \[ **key**: *string*\]: Array‹[StructuredTag](structuredtag.md)›

___

### `Optional` total

• **total**? : *number*

*Defined in [packages/host-inventory/api.ts:1029](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1029)*

Total number of items in the \"data\" list.

**`memberof`** TagsOut
