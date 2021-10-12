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

*Defined in [packages/host-inventory/api.ts:1840](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1840)*

The number of items on the current page

**`memberof`** TagCountOut

___

###  page

• **page**: *number*

*Defined in [packages/host-inventory/api.ts:1846](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1846)*

The page number

**`memberof`** TagCountOut

___

###  per_page

• **per_page**: *number*

*Defined in [packages/host-inventory/api.ts:1852](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1852)*

The number of items to return per page

**`memberof`** TagCountOut

___

### `Optional` results

• **results**? : *object*

*Defined in [packages/host-inventory/api.ts:1864](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1864)*

The list of tags on the systems

**`memberof`** TagCountOut

#### Type declaration:

* \[ **key**: *string*\]: number

___

###  total

• **total**: *number*

*Defined in [packages/host-inventory/api.ts:1858](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1858)*

Total number of items

**`memberof`** TagCountOut
