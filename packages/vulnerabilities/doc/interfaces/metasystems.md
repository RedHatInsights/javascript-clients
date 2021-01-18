[@redhat-cloud-services/vulnerabilities-client](../README.md) › [Globals](../globals.md) › [MetaSystems](metasystems.md)

# Interface: MetaSystems

**`export`** 

**`interface`** MetaSystems

## Hierarchy

* **MetaSystems**

## Index

### Properties

* [data_format](metasystems.md#data_format)
* [excluded](metasystems.md#excluded)
* [filter](metasystems.md#filter)
* [limit](metasystems.md#limit)
* [offset](metasystems.md#offset)
* [opt_out](metasystems.md#opt_out)
* [page](metasystems.md#page)
* [page_size](metasystems.md#page_size)
* [pages](metasystems.md#pages)
* [sort](metasystems.md#sort)
* [total_items](metasystems.md#total_items)

## Properties

###  data_format

• **data_format**: *string*

*Defined in [packages/vulnerabilities/api.ts:1411](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1411)*

Format of the output data, either JSON (default) or CSV.

**`memberof`** MetaSystems

___

###  excluded

• **excluded**: *string | null*

*Defined in [packages/vulnerabilities/api.ts:1423](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1423)*

Display setting of opted out systems.

**`memberof`** MetaSystems

___

###  filter

• **filter**: *string | null*

*Defined in [packages/vulnerabilities/api.ts:1363](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1363)*

Full text filter

**`memberof`** MetaSystems

___

###  limit

• **limit**: *number*

*Defined in [packages/vulnerabilities/api.ts:1369](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1369)*

Maximum number of paginated results.

**`memberof`** MetaSystems

___

###  offset

• **offset**: *number*

*Defined in [packages/vulnerabilities/api.ts:1375](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1375)*

First record of paginated response.

**`memberof`** MetaSystems

___

###  opt_out

• **opt_out**: *boolean | null*

*Defined in [packages/vulnerabilities/api.ts:1417](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1417)*

Whether the filter to show opted out systems is active or not. If not set, defaults to hiding opted out systems.

**`memberof`** MetaSystems

___

###  page

• **page**: *number*

*Defined in [packages/vulnerabilities/api.ts:1381](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1381)*

Page number of paginated response.

**`memberof`** MetaSystems

___

###  page_size

• **page_size**: *number*

*Defined in [packages/vulnerabilities/api.ts:1387](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1387)*

Number of records per page of paginated response.

**`memberof`** MetaSystems

___

###  pages

• **pages**: *number*

*Defined in [packages/vulnerabilities/api.ts:1393](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1393)*

Total number of pages of paginated response.

**`memberof`** MetaSystems

___

###  sort

• **sort**: *string | null*

*Defined in [packages/vulnerabilities/api.ts:1399](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1399)*

Sorting filter.

**`memberof`** MetaSystems

___

###  total_items

• **total_items**: *number*

*Defined in [packages/vulnerabilities/api.ts:1405](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1405)*

Total number of records.

**`memberof`** MetaSystems
