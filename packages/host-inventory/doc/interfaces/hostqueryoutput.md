[@redhat-cloud-services/host-inventory-client](../README.md) > [HostQueryOutput](../interfaces/hostqueryoutput.md)

# Interface: HostQueryOutput

A paginated host search query result with host entries and their Inventory metadata.

*__export__*: 

*__interface__*: HostQueryOutput

## Hierarchy

**HostQueryOutput**

## Index

### Properties

* [count](hostqueryoutput.md#count)
* [page](hostqueryoutput.md#page)
* [perPage](hostqueryoutput.md#perpage)
* [results](hostqueryoutput.md#results)
* [total](hostqueryoutput.md#total)

---

## Properties

<a id="count"></a>

###  count

**● count**: *`number`*

*Defined in [api.ts:501](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L501)*

A number of entries on the current page.

*__type__*: {number}

*__memberof__*: HostQueryOutput

___
<a id="page"></a>

###  page

**● page**: *`number`*

*Defined in [api.ts:507](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L507)*

A current page number.

*__type__*: {number}

*__memberof__*: HostQueryOutput

___
<a id="perpage"></a>

###  perPage

**● perPage**: *`number`*

*Defined in [api.ts:513](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L513)*

A page size – a number of entries per single page.

*__type__*: {number}

*__memberof__*: HostQueryOutput

___
<a id="results"></a>

###  results

**● results**: *`Array`<[HostOut](hostout.md)>*

*Defined in [api.ts:525](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L525)*

Actual host search query result entries.

*__type__*: {Array}

*__memberof__*: HostQueryOutput

___
<a id="total"></a>

###  total

**● total**: *`number`*

*Defined in [api.ts:519](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L519)*

A total count of the found entries.

*__type__*: {number}

*__memberof__*: HostQueryOutput

___

