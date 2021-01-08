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

*Defined in [packages/vulnerabilities/git-api/api.ts:1386](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1386)*

Format of the output data, either JSON (default) or CSV.

**`memberof`** MetaSystems

___

###  excluded

• **excluded**: *string | null*

*Defined in [packages/vulnerabilities/git-api/api.ts:1398](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1398)*

Display setting of opted out systems.

**`memberof`** MetaSystems

___

###  filter

• **filter**: *string | null*

*Defined in [packages/vulnerabilities/git-api/api.ts:1338](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1338)*

Full text filter

**`memberof`** MetaSystems

___

###  limit

• **limit**: *number*

*Defined in [packages/vulnerabilities/git-api/api.ts:1344](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1344)*

Maximum number of paginated results.

**`memberof`** MetaSystems

___

###  offset

• **offset**: *number*

*Defined in [packages/vulnerabilities/git-api/api.ts:1350](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1350)*

First record of paginated response.

**`memberof`** MetaSystems

___

###  opt_out

• **opt_out**: *boolean | null*

*Defined in [packages/vulnerabilities/git-api/api.ts:1392](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1392)*

Whether the filter to show opted out systems is active or not. If not set, defaults to hiding opted out systems.

**`memberof`** MetaSystems

___

###  page

• **page**: *number*

*Defined in [packages/vulnerabilities/git-api/api.ts:1356](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1356)*

Page number of paginated response.

**`memberof`** MetaSystems

___

###  page_size

• **page_size**: *number*

*Defined in [packages/vulnerabilities/git-api/api.ts:1362](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1362)*

Number of records per page of paginated response.

**`memberof`** MetaSystems

___

###  pages

• **pages**: *number*

*Defined in [packages/vulnerabilities/git-api/api.ts:1368](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1368)*

Total number of pages of paginated response.

**`memberof`** MetaSystems

___

###  sort

• **sort**: *string | null*

*Defined in [packages/vulnerabilities/git-api/api.ts:1374](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1374)*

Sorting filter.

**`memberof`** MetaSystems

___

###  total_items

• **total_items**: *number*

*Defined in [packages/vulnerabilities/git-api/api.ts:1380](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1380)*

Total number of records.

**`memberof`** MetaSystems
