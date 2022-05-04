[@redhat-cloud-services/host-inventory-client](../README.md) › [Globals](../globals.md) › [TagCountOut](tagcountout.md)

# Interface: TagCountOut

**`export`** 

**`interface`** TagCountOut

## Hierarchy

* **TagCountOut**

## Index

### Properties

* [count](tagcountout.md#count)
* [page](tagcountout.md#page)
* [per_page](tagcountout.md#per_page)
* [results](tagcountout.md#optional-results)
* [total](tagcountout.md#total)

## Properties

###  count

• **count**: *number*

*Defined in [api.ts:1875](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1875)*

The number of items on the current page

**`memberof`** TagCountOut

___

###  page

• **page**: *number*

*Defined in [api.ts:1881](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1881)*

The page number

**`memberof`** TagCountOut

___

###  per_page

• **per_page**: *number*

*Defined in [api.ts:1887](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1887)*

The number of items to return per page

**`memberof`** TagCountOut

___

### `Optional` results

• **results**? : *object*

*Defined in [api.ts:1899](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1899)*

The list of tags on the systems

**`memberof`** TagCountOut

#### Type declaration:

* \[ **key**: *string*\]: number

___

###  total

• **total**: *number*

*Defined in [api.ts:1893](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1893)*

Total number of items

**`memberof`** TagCountOut
