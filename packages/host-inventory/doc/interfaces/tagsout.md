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

*Defined in [api.ts:1856](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1856)*

The number of items on the current page

**`memberof`** TagsOut

___

###  page

• **page**: *number*

*Defined in [api.ts:1862](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1862)*

The page number

**`memberof`** TagsOut

___

###  per_page

• **per_page**: *number*

*Defined in [api.ts:1868](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1868)*

The number of items to return per page

**`memberof`** TagsOut

___

### `Optional` results

• **results**? : *object*

*Defined in [api.ts:1880](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1880)*

The list of tags on the systems

**`memberof`** TagsOut

#### Type declaration:

* \[ **key**: *string*\]: Array‹[StructuredTag](structuredtag.md)›

___

###  total

• **total**: *number*

*Defined in [api.ts:1874](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1874)*

Total number of items

**`memberof`** TagsOut
