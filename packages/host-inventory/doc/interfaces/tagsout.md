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
* [perPage](tagsout.md#optional-perpage)
* [results](tagsout.md#optional-results)
* [total](tagsout.md#optional-total)

## Properties

### `Optional` count

• **count**? : *number*

*Defined in [api.ts:1137](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1137)*

A number of entries on the current page.

**`type`** {number}

**`memberof`** TagsOut

___

### `Optional` page

• **page**? : *number*

*Defined in [api.ts:1143](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1143)*

A current page number.

**`type`** {number}

**`memberof`** TagsOut

___

### `Optional` perPage

• **perPage**? : *number*

*Defined in [api.ts:1149](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1149)*

A page size – a number of entries per single page.

**`type`** {number}

**`memberof`** TagsOut

___

### `Optional` results

• **results**? : *object*

*Defined in [api.ts:1155](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1155)*

The list of tags on the systems

**`type`** {{ [key: string]: Array<StructuredTag>; }}

**`memberof`** TagsOut

#### Type declaration:

* \[ **key**: *string*\]: Array‹[StructuredTag](structuredtag.md)›

___

### `Optional` total

• **total**? : *number*

*Defined in [api.ts:1131](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1131)*

Total number of items in the \"data\" list.

**`type`** {number}

**`memberof`** TagsOut
