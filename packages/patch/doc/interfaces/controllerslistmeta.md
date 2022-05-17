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

*Defined in [api.ts:705](https://github.com/RedHatInsights/javascript-clients/blob/22e0c417/packages/patch/api.ts#L705)*

Used filters

**`memberof`** ControllersListMeta

#### Type declaration:

* \[ **key**: *string*\]: [ControllersFilterData](controllersfilterdata.md)

___

### `Optional` limit

• **limit**? : *number*

*Defined in [api.ts:711](https://github.com/RedHatInsights/javascript-clients/blob/22e0c417/packages/patch/api.ts#L711)*

Used response limit (page size) - pagination

**`memberof`** ControllersListMeta

___

### `Optional` offset

• **offset**? : *number*

*Defined in [api.ts:717](https://github.com/RedHatInsights/javascript-clients/blob/22e0c417/packages/patch/api.ts#L717)*

Used response offset - pagination

**`memberof`** ControllersListMeta

___

### `Optional` search

• **search**? : *string*

*Defined in [api.ts:723](https://github.com/RedHatInsights/javascript-clients/blob/22e0c417/packages/patch/api.ts#L723)*

Used search terms

**`memberof`** ControllersListMeta

___

### `Optional` sort

• **sort**? : *Array‹string›*

*Defined in [api.ts:729](https://github.com/RedHatInsights/javascript-clients/blob/22e0c417/packages/patch/api.ts#L729)*

Used sorting fields

**`memberof`** ControllersListMeta

___

### `Optional` subtotals

• **subtotals**? : *object*

*Defined in [api.ts:735](https://github.com/RedHatInsights/javascript-clients/blob/22e0c417/packages/patch/api.ts#L735)*

Some subtotals used by some endpoints

**`memberof`** ControllersListMeta

#### Type declaration:

* \[ **key**: *string*\]: number

___

### `Optional` total_items

• **total_items**? : *number*

*Defined in [api.ts:741](https://github.com/RedHatInsights/javascript-clients/blob/22e0c417/packages/patch/api.ts#L741)*

Total items count to return

**`memberof`** ControllersListMeta
