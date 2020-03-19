[@redhat-cloud-services/host-inventory-client](../README.md) › [Globals](../globals.md) › [SystemProfileByHostOut](systemprofilebyhostout.md)

# Interface: SystemProfileByHostOut

Structure of the output of the host system profile query

**`export`** 

**`interface`** SystemProfileByHostOut

## Hierarchy

* **SystemProfileByHostOut**

## Index

### Properties

* [count](systemprofilebyhostout.md#count)
* [page](systemprofilebyhostout.md#page)
* [perPage](systemprofilebyhostout.md#perpage)
* [results](systemprofilebyhostout.md#results)
* [total](systemprofilebyhostout.md#total)

## Properties

###  count

• **count**: *number*

*Defined in [api.ts:855](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L855)*

A number of entries on the current page.

**`type`** {number}

**`memberof`** SystemProfileByHostOut

___

###  page

• **page**: *number*

*Defined in [api.ts:861](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L861)*

A current page number.

**`type`** {number}

**`memberof`** SystemProfileByHostOut

___

###  perPage

• **perPage**: *number*

*Defined in [api.ts:867](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L867)*

A page size – a number of entries per single page.

**`type`** {number}

**`memberof`** SystemProfileByHostOut

___

###  results

• **results**: *Array‹[HostSystemProfileOut](hostsystemprofileout.md)›*

*Defined in [api.ts:879](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L879)*

Actual host search query result entries.

**`type`** {Array<HostSystemProfileOut>}

**`memberof`** SystemProfileByHostOut

___

###  total

• **total**: *number*

*Defined in [api.ts:873](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L873)*

A total count of the found entries.

**`type`** {number}

**`memberof`** SystemProfileByHostOut
