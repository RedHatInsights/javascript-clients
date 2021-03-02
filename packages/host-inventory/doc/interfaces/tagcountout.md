[@redhat-cloud-services/host-inventory-client](../README.md) › [Globals](../globals.md) › [TagCountOut](tagcountout.md)

# Interface: TagCountOut

**`export`** 

**`interface`** TagCountOut

## Hierarchy

* **TagCountOut**

## Index

### Properties

* [count](tagcountout.md#optional-count)
* [page](tagcountout.md#optional-page)
* [per_page](tagcountout.md#optional-per_page)
* [results](tagcountout.md#optional-results)
* [total](tagcountout.md#optional-total)

## Properties

### `Optional` count

• **count**? : *number*

*Defined in [packages/host-inventory/api.ts:1365](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1365)*

A number of entries on the current page.

**`memberof`** TagCountOut

___

### `Optional` page

• **page**? : *number*

*Defined in [packages/host-inventory/api.ts:1371](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1371)*

A current page number.

**`memberof`** TagCountOut

___

### `Optional` per_page

• **per_page**? : *number*

*Defined in [packages/host-inventory/api.ts:1377](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1377)*

A page size – a number of entries per single page.

**`memberof`** TagCountOut

___

### `Optional` results

• **results**? : *object*

*Defined in [packages/host-inventory/api.ts:1383](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1383)*

The list of tags on the systems

**`memberof`** TagCountOut

#### Type declaration:

* \[ **key**: *string*\]: number

___

### `Optional` total

• **total**? : *number*

*Defined in [packages/host-inventory/api.ts:1359](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1359)*

Total number of items in the \"data\" list.

**`memberof`** TagCountOut
