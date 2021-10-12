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
* [per_page](systemprofilebyhostout.md#per_page)
* [results](systemprofilebyhostout.md#results)
* [total](systemprofilebyhostout.md#total)

## Properties

###  count

• **count**: *number*

*Defined in [packages/host-inventory/api.ts:1478](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1478)*

The number of items on the current page

**`memberof`** SystemProfileByHostOut

___

###  page

• **page**: *number*

*Defined in [packages/host-inventory/api.ts:1484](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1484)*

The page number

**`memberof`** SystemProfileByHostOut

___

###  per_page

• **per_page**: *number*

*Defined in [packages/host-inventory/api.ts:1490](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1490)*

The number of items to return per page

**`memberof`** SystemProfileByHostOut

___

###  results

• **results**: *Array‹[HostSystemProfileOut](hostsystemprofileout.md)›*

*Defined in [packages/host-inventory/api.ts:1502](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1502)*

Actual host search query result entries.

**`memberof`** SystemProfileByHostOut

___

###  total

• **total**: *number*

*Defined in [packages/host-inventory/api.ts:1496](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1496)*

Total number of items

**`memberof`** SystemProfileByHostOut
