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

*Defined in [packages/host-inventory/api.ts:1247](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1247)*

A number of entries on the current page.

**`memberof`** SystemProfileByHostOut

___

###  page

• **page**: *number*

*Defined in [packages/host-inventory/api.ts:1253](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1253)*

A current page number.

**`memberof`** SystemProfileByHostOut

___

###  per_page

• **per_page**: *number*

*Defined in [packages/host-inventory/api.ts:1259](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1259)*

A page size – a number of entries per single page.

**`memberof`** SystemProfileByHostOut

___

###  results

• **results**: *Array‹[HostSystemProfileOut](hostsystemprofileout.md)›*

*Defined in [packages/host-inventory/api.ts:1271](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1271)*

Actual host search query result entries.

**`memberof`** SystemProfileByHostOut

___

###  total

• **total**: *number*

*Defined in [packages/host-inventory/api.ts:1265](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1265)*

A total count of the found entries.

**`memberof`** SystemProfileByHostOut
