[@redhat-cloud-services/host-inventory-client](../README.md) › [Globals](../globals.md) › [TagsOut](tagsout.md)

# Interface: TagsOut

**`export`** 

**`interface`** TagsOut

## Hierarchy

* **TagsOut**

## Index

### Properties

* [count](tagsout.md#count)
* [page](tagsout.md#page)
* [per_page](tagsout.md#per_page)
* [results](tagsout.md#optional-results)
* [total](tagsout.md#total)

## Properties

###  count

• **count**: *number*

*Defined in [packages/host-inventory/api.ts:1855](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1855)*

The number of items on the current page

**`memberof`** TagsOut

___

###  page

• **page**: *number*

*Defined in [packages/host-inventory/api.ts:1861](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1861)*

The page number

**`memberof`** TagsOut

___

###  per_page

• **per_page**: *number*

*Defined in [packages/host-inventory/api.ts:1867](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1867)*

The number of items to return per page

**`memberof`** TagsOut

___

### `Optional` results

• **results**? : *object*

*Defined in [packages/host-inventory/api.ts:1879](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1879)*

The list of tags on the systems

**`memberof`** TagsOut

#### Type declaration:

* \[ **key**: *string*\]: Array‹[StructuredTag](structuredtag.md)›

___

###  total

• **total**: *number*

*Defined in [packages/host-inventory/api.ts:1873](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1873)*

Total number of items

**`memberof`** TagsOut
