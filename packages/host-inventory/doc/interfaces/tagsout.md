[@redhat-cloud-services/host-inventory-client](../README.md) > [TagsOut](../interfaces/tagsout.md)

# Interface: TagsOut

*__export__*: 

*__interface__*: TagsOut

## Hierarchy

**TagsOut**

## Index

### Properties

* [count](tagsout.md#count)
* [page](tagsout.md#page)
* [perPage](tagsout.md#perpage)
* [results](tagsout.md#results)
* [total](tagsout.md#total)

---

## Properties

<a id="count"></a>

### `<Optional>` count

**● count**: *`number`*

*Defined in [api.ts:1073](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1073)*

A number of entries on the current page.

*__type__*: {number}

*__memberof__*: TagsOut

___
<a id="page"></a>

### `<Optional>` page

**● page**: *`number`*

*Defined in [api.ts:1079](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1079)*

A current page number.

*__type__*: {number}

*__memberof__*: TagsOut

___
<a id="perpage"></a>

### `<Optional>` perPage

**● perPage**: *`number`*

*Defined in [api.ts:1085](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1085)*

A page size – a number of entries per single page.

*__type__*: {number}

*__memberof__*: TagsOut

___
<a id="results"></a>

### `<Optional>` results

**● results**: *`object`*

*Defined in [api.ts:1091](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1091)*

The list of tags on the systems

*__type__*: {{ \[key: string\]: Array; }}

*__memberof__*: TagsOut

#### Type declaration

[key: `string`]: `Array`<[StructuredTag](structuredtag.md)>

___
<a id="total"></a>

### `<Optional>` total

**● total**: *`number`*

*Defined in [api.ts:1067](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1067)*

Total number of items in the "data" list.

*__type__*: {number}

*__memberof__*: TagsOut

___

