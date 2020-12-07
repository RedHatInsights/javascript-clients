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

*Defined in [packages/vulnerabilities/git-api/api.ts:1275](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1275)*

Format of the output data, either JSON (default) or CSV.

**`memberof`** MetaSystems

___

###  excluded

• **excluded**: *string | null*

*Defined in [packages/vulnerabilities/git-api/api.ts:1287](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1287)*

Display setting of opted out systems.

**`memberof`** MetaSystems

___

###  filter

• **filter**: *string | null*

*Defined in [packages/vulnerabilities/git-api/api.ts:1227](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1227)*

Full text filter

**`memberof`** MetaSystems

___

###  limit

• **limit**: *number*

*Defined in [packages/vulnerabilities/git-api/api.ts:1233](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1233)*

Maximum number of paginated results.

**`memberof`** MetaSystems

___

###  offset

• **offset**: *number*

*Defined in [packages/vulnerabilities/git-api/api.ts:1239](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1239)*

First record of paginated response.

**`memberof`** MetaSystems

___

###  opt_out

• **opt_out**: *boolean | null*

*Defined in [packages/vulnerabilities/git-api/api.ts:1281](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1281)*

Whether the filter to show opted out systems is active or not. If not set, defaults to hiding opted out systems.

**`memberof`** MetaSystems

___

###  page

• **page**: *number*

*Defined in [packages/vulnerabilities/git-api/api.ts:1245](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1245)*

Page number of paginated response.

**`memberof`** MetaSystems

___

###  page_size

• **page_size**: *number*

*Defined in [packages/vulnerabilities/git-api/api.ts:1251](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1251)*

Number of records per page of paginated response.

**`memberof`** MetaSystems

___

###  pages

• **pages**: *number*

*Defined in [packages/vulnerabilities/git-api/api.ts:1257](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1257)*

Total number of pages of paginated response.

**`memberof`** MetaSystems

___

###  sort

• **sort**: *string | null*

*Defined in [packages/vulnerabilities/git-api/api.ts:1263](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1263)*

Sorting filter.

**`memberof`** MetaSystems

___

###  total_items

• **total_items**: *number*

*Defined in [packages/vulnerabilities/git-api/api.ts:1269](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1269)*

Total number of records.

**`memberof`** MetaSystems
