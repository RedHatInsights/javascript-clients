[@redhat-cloud-services/host-inventory-client](../README.md) > [TagCountOut](../interfaces/tagcountout.md)

# Interface: TagCountOut

*__export__*: 

*__interface__*: TagCountOut

## Hierarchy

**TagCountOut**

## Index

### Properties

* [count](tagcountout.md#count)
* [page](tagcountout.md#page)
* [perPage](tagcountout.md#perpage)
* [results](tagcountout.md#results)
* [total](tagcountout.md#total)

---

## Properties

<a id="count"></a>

### `<Optional>` count

**● count**: *`number`*

*Defined in [api.ts:943](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L943)*

A number of entries on the current page.

*__type__*: {number}

*__memberof__*: TagCountOut

___
<a id="page"></a>

### `<Optional>` page

**● page**: *`number`*

*Defined in [api.ts:949](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L949)*

A current page number.

*__type__*: {number}

*__memberof__*: TagCountOut

___
<a id="perpage"></a>

### `<Optional>` perPage

**● perPage**: *`number`*

*Defined in [api.ts:955](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L955)*

A page size – a number of entries per single page.

*__type__*: {number}

*__memberof__*: TagCountOut

___
<a id="results"></a>

### `<Optional>` results

**● results**: *`object`*

*Defined in [api.ts:961](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L961)*

The list of tags on the systems

*__type__*: {{ \[key: string\]: number; }}

*__memberof__*: TagCountOut

#### Type declaration

[key: `string`]: `number`

___
<a id="total"></a>

### `<Optional>` total

**● total**: *`number`*

*Defined in [api.ts:937](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L937)*

Total number of items in the "data" list.

*__type__*: {number}

*__memberof__*: TagCountOut

___

