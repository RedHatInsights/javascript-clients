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

*Defined in [api.ts:1626](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1626)*

The number of items on the current page

**`memberof`** SystemProfileByHostOut

___

###  page

• **page**: *number*

*Defined in [api.ts:1632](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1632)*

The page number

**`memberof`** SystemProfileByHostOut

___

###  per_page

• **per_page**: *number*

*Defined in [api.ts:1638](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1638)*

The number of items to return per page

**`memberof`** SystemProfileByHostOut

___

###  results

• **results**: *Array‹[HostSystemProfileOut](hostsystemprofileout.md)›*

*Defined in [api.ts:1650](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1650)*

Actual host search query result entries.

**`memberof`** SystemProfileByHostOut

___

###  total

• **total**: *number*

*Defined in [api.ts:1644](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1644)*

Total number of items

**`memberof`** SystemProfileByHostOut
