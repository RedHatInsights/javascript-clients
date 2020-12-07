[@redhat-cloud-services/host-inventory-client](../README.md) › [Globals](../globals.md) › [HostQueryOutput](hostqueryoutput.md)

# Interface: HostQueryOutput

A paginated host search query result with host entries and their Inventory metadata.

**`export`** 

**`interface`** HostQueryOutput

## Hierarchy

* **HostQueryOutput**

## Index

### Properties

* [count](hostqueryoutput.md#count)
* [page](hostqueryoutput.md#page)
* [per_page](hostqueryoutput.md#per_page)
* [results](hostqueryoutput.md#results)
* [total](hostqueryoutput.md#total)

## Properties

###  count

• **count**: *number*

*Defined in [packages/host-inventory/api.ts:779](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L779)*

A number of entries on the current page.

**`memberof`** HostQueryOutput

___

###  page

• **page**: *number*

*Defined in [packages/host-inventory/api.ts:785](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L785)*

A current page number.

**`memberof`** HostQueryOutput

___

###  per_page

• **per_page**: *number*

*Defined in [packages/host-inventory/api.ts:791](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L791)*

A page size – a number of entries per single page.

**`memberof`** HostQueryOutput

___

###  results

• **results**: *Array‹[HostOut](hostout.md)›*

*Defined in [packages/host-inventory/api.ts:803](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L803)*

Actual host search query result entries.

**`memberof`** HostQueryOutput

___

###  total

• **total**: *number*

*Defined in [packages/host-inventory/api.ts:797](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L797)*

A total count of the found entries.

**`memberof`** HostQueryOutput
