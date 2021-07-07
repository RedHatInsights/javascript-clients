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

*Defined in [packages/host-inventory/api.ts:1522](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1522)*

A number of entries on the current page.

**`memberof`** TagCountOut

___

### `Optional` page

• **page**? : *number*

*Defined in [packages/host-inventory/api.ts:1528](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1528)*

A current page number.

**`memberof`** TagCountOut

___

### `Optional` per_page

• **per_page**? : *number*

*Defined in [packages/host-inventory/api.ts:1534](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1534)*

A page size – a number of entries per single page.

**`memberof`** TagCountOut

___

### `Optional` results

• **results**? : *object*

*Defined in [packages/host-inventory/api.ts:1540](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1540)*

The list of tags on the systems

**`memberof`** TagCountOut

#### Type declaration:

* \[ **key**: *string*\]: number

___

### `Optional` total

• **total**? : *number*

*Defined in [packages/host-inventory/api.ts:1516](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1516)*

Total number of items in the \"data\" list.

**`memberof`** TagCountOut
