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
* [perPage](hostqueryoutput.md#perpage)
* [results](hostqueryoutput.md#results)
* [total](hostqueryoutput.md#total)

## Properties

###  count

• **count**: *number*

*Defined in [api.ts:675](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L675)*

A number of entries on the current page.

**`type`** {number}

**`memberof`** HostQueryOutput

___

###  page

• **page**: *number*

*Defined in [api.ts:681](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L681)*

A current page number.

**`type`** {number}

**`memberof`** HostQueryOutput

___

###  perPage

• **perPage**: *number*

*Defined in [api.ts:687](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L687)*

A page size – a number of entries per single page.

**`type`** {number}

**`memberof`** HostQueryOutput

___

###  results

• **results**: *Array‹[HostOut](hostout.md)›*

*Defined in [api.ts:699](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L699)*

Actual host search query result entries.

**`type`** {Array<HostOut>}

**`memberof`** HostQueryOutput

___

###  total

• **total**: *number*

*Defined in [api.ts:693](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L693)*

A total count of the found entries.

**`type`** {number}

**`memberof`** HostQueryOutput
