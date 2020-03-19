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
* [perPage](tagcountout.md#optional-perpage)
* [results](tagcountout.md#optional-results)
* [total](tagcountout.md#optional-total)

## Properties

### `Optional` count

• **count**? : *number*

*Defined in [api.ts:1099](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1099)*

A number of entries on the current page.

**`type`** {number}

**`memberof`** TagCountOut

___

### `Optional` page

• **page**? : *number*

*Defined in [api.ts:1105](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1105)*

A current page number.

**`type`** {number}

**`memberof`** TagCountOut

___

### `Optional` perPage

• **perPage**? : *number*

*Defined in [api.ts:1111](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1111)*

A page size – a number of entries per single page.

**`type`** {number}

**`memberof`** TagCountOut

___

### `Optional` results

• **results**? : *object*

*Defined in [api.ts:1117](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1117)*

The list of tags on the systems

**`type`** {{ [key: string]: number; }}

**`memberof`** TagCountOut

#### Type declaration:

* \[ **key**: *string*\]: number

___

### `Optional` total

• **total**? : *number*

*Defined in [api.ts:1093](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1093)*

Total number of items in the \"data\" list.

**`type`** {number}

**`memberof`** TagCountOut
