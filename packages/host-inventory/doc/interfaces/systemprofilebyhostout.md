[@redhat-cloud-services/host-inventory-client](../README.md) > [SystemProfileByHostOut](../interfaces/systemprofilebyhostout.md)

# Interface: SystemProfileByHostOut

Structure of the output of the host system profile query

*__export__*: 

*__interface__*: SystemProfileByHostOut

## Hierarchy

**SystemProfileByHostOut**

## Index

### Properties

* [count](systemprofilebyhostout.md#count)
* [page](systemprofilebyhostout.md#page)
* [perPage](systemprofilebyhostout.md#perpage)
* [results](systemprofilebyhostout.md#results)
* [total](systemprofilebyhostout.md#total)

---

## Properties

<a id="count"></a>

###  count

**● count**: *`number`*

*Defined in [api.ts:771](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L771)*

A number of entries on the current page.

*__type__*: {number}

*__memberof__*: SystemProfileByHostOut

___
<a id="page"></a>

###  page

**● page**: *`number`*

*Defined in [api.ts:777](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L777)*

A current page number.

*__type__*: {number}

*__memberof__*: SystemProfileByHostOut

___
<a id="perpage"></a>

###  perPage

**● perPage**: *`number`*

*Defined in [api.ts:783](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L783)*

A page size – a number of entries per single page.

*__type__*: {number}

*__memberof__*: SystemProfileByHostOut

___
<a id="results"></a>

###  results

**● results**: *`Array`<[HostSystemProfileOut](hostsystemprofileout.md)>*

*Defined in [api.ts:795](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L795)*

Actual host search query result entries.

*__type__*: {Array}

*__memberof__*: SystemProfileByHostOut

___
<a id="total"></a>

###  total

**● total**: *`number`*

*Defined in [api.ts:789](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L789)*

A total count of the found entries.

*__type__*: {number}

*__memberof__*: SystemProfileByHostOut

___

