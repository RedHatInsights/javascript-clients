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

*Defined in [packages/host-inventory/api.ts:1430](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1430)*

The number of items on the current page

**`memberof`** SystemProfileByHostOut

___

###  page

• **page**: *number*

*Defined in [packages/host-inventory/api.ts:1436](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1436)*

The page number

**`memberof`** SystemProfileByHostOut

___

###  per_page

• **per_page**: *number*

*Defined in [packages/host-inventory/api.ts:1442](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1442)*

The number of items to return per page

**`memberof`** SystemProfileByHostOut

___

###  results

• **results**: *Array‹[HostSystemProfileOut](hostsystemprofileout.md)›*

*Defined in [packages/host-inventory/api.ts:1454](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1454)*

Actual host search query result entries.

**`memberof`** SystemProfileByHostOut

___

###  total

• **total**: *number*

*Defined in [packages/host-inventory/api.ts:1448](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1448)*

Total number of items

**`memberof`** SystemProfileByHostOut
