[@redhat-cloud-services/patch-client](../README.md) › [Globals](../globals.md) › [ControllersListMeta](controllerslistmeta.md)

# Interface: ControllersListMeta

**`export`** 

**`interface`** ControllersListMeta

## Hierarchy

* **ControllersListMeta**

## Index

### Properties

* [filter](controllerslistmeta.md#optional-filter)
* [limit](controllerslistmeta.md#optional-limit)
* [offset](controllerslistmeta.md#optional-offset)
* [search](controllerslistmeta.md#optional-search)
* [sort](controllerslistmeta.md#optional-sort)
* [subtotals](controllerslistmeta.md#optional-subtotals)
* [total_items](controllerslistmeta.md#optional-total_items)

## Properties

### `Optional` filter

• **filter**? : *object*

*Defined in [api.ts:718](https://github.com/RedHatInsights/javascript-clients/blob/daadefd7/packages/patch/api.ts#L718)*

Used filters

**`memberof`** ControllersListMeta

#### Type declaration:

* \[ **key**: *string*\]: [ControllersFilterData](controllersfilterdata.md)

___

### `Optional` limit

• **limit**? : *number*

*Defined in [api.ts:724](https://github.com/RedHatInsights/javascript-clients/blob/daadefd7/packages/patch/api.ts#L724)*

Used response limit (page size) - pagination

**`memberof`** ControllersListMeta

___

### `Optional` offset

• **offset**? : *number*

*Defined in [api.ts:730](https://github.com/RedHatInsights/javascript-clients/blob/daadefd7/packages/patch/api.ts#L730)*

Used response offset - pagination

**`memberof`** ControllersListMeta

___

### `Optional` search

• **search**? : *string*

*Defined in [api.ts:736](https://github.com/RedHatInsights/javascript-clients/blob/daadefd7/packages/patch/api.ts#L736)*

Used search terms

**`memberof`** ControllersListMeta

___

### `Optional` sort

• **sort**? : *Array‹string›*

*Defined in [api.ts:742](https://github.com/RedHatInsights/javascript-clients/blob/daadefd7/packages/patch/api.ts#L742)*

Used sorting fields

**`memberof`** ControllersListMeta

___

### `Optional` subtotals

• **subtotals**? : *object*

*Defined in [api.ts:748](https://github.com/RedHatInsights/javascript-clients/blob/daadefd7/packages/patch/api.ts#L748)*

Some subtotals used by some endpoints

**`memberof`** ControllersListMeta

#### Type declaration:

* \[ **key**: *string*\]: number

___

### `Optional` total_items

• **total_items**? : *number*

*Defined in [api.ts:754](https://github.com/RedHatInsights/javascript-clients/blob/daadefd7/packages/patch/api.ts#L754)*

Total items count to return

**`memberof`** ControllersListMeta
