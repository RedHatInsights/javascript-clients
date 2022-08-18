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

*Defined in [api.ts:762](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L762)*

The number of items on the current page

**`memberof`** HostQueryOutput

___

###  page

• **page**: *number*

*Defined in [api.ts:768](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L768)*

The page number

**`memberof`** HostQueryOutput

___

###  per_page

• **per_page**: *number*

*Defined in [api.ts:774](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L774)*

The number of items to return per page

**`memberof`** HostQueryOutput

___

###  results

• **results**: *Array‹[HostOut](hostout.md)›*

*Defined in [api.ts:786](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L786)*

Actual host search query result entries.

**`memberof`** HostQueryOutput

___

###  total

• **total**: *number*

*Defined in [api.ts:780](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L780)*

Total number of items

**`memberof`** HostQueryOutput
