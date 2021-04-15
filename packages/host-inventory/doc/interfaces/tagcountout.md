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

*Defined in [packages/host-inventory/api.ts:1362](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1362)*

A number of entries on the current page.

**`memberof`** TagCountOut

___

### `Optional` page

• **page**? : *number*

*Defined in [packages/host-inventory/api.ts:1368](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1368)*

A current page number.

**`memberof`** TagCountOut

___

### `Optional` per_page

• **per_page**? : *number*

*Defined in [packages/host-inventory/api.ts:1374](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1374)*

A page size – a number of entries per single page.

**`memberof`** TagCountOut

___

### `Optional` results

• **results**? : *object*

*Defined in [packages/host-inventory/api.ts:1380](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1380)*

The list of tags on the systems

**`memberof`** TagCountOut

#### Type declaration:

* \[ **key**: *string*\]: number

___

### `Optional` total

• **total**? : *number*

*Defined in [packages/host-inventory/api.ts:1356](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1356)*

Total number of items in the \"data\" list.

**`memberof`** TagCountOut
