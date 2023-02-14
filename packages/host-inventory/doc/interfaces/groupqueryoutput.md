[@redhat-cloud-services/host-inventory-client](../README.md) › [Globals](../globals.md) › [GroupQueryOutput](groupqueryoutput.md)

# Interface: GroupQueryOutput

A paginated group search query result with group entries and their Inventory metadata.

**`export`** 

**`interface`** GroupQueryOutput

## Hierarchy

* **GroupQueryOutput**

## Index

### Properties

* [count](groupqueryoutput.md#count)
* [page](groupqueryoutput.md#page)
* [per_page](groupqueryoutput.md#per_page)
* [results](groupqueryoutput.md#results)
* [total](groupqueryoutput.md#total)

## Properties

###  count

• **count**: *number*

*Defined in [api.ts:705](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L705)*

The number of items on the current page

**`memberof`** GroupQueryOutput

___

###  page

• **page**: *number*

*Defined in [api.ts:711](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L711)*

The page number

**`memberof`** GroupQueryOutput

___

###  per_page

• **per_page**: *number*

*Defined in [api.ts:717](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L717)*

The number of items to return per page

**`memberof`** GroupQueryOutput

___

###  results

• **results**: *Array‹[GroupOut](groupout.md)›*

*Defined in [api.ts:729](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L729)*

Actual group search query result entries.

**`memberof`** GroupQueryOutput

___

###  total

• **total**: *number*

*Defined in [api.ts:723](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L723)*

Total number of items

**`memberof`** GroupQueryOutput
