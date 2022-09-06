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
* [page](metasystems.md#page)
* [page_size](metasystems.md#page_size)
* [pages](metasystems.md#pages)
* [permissions](metasystems.md#permissions)
* [rhel_version](metasystems.md#rhel_version)
* [sort](metasystems.md#sort)
* [total_items](metasystems.md#total_items)

## Properties

###  data_format

• **data_format**: *string*

*Defined in [api.ts:1768](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1768)*

Format of the output data, either JSON (default) or CSV.

**`memberof`** MetaSystems

___

###  excluded

• **excluded**: *string | null*

*Defined in [api.ts:1828](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1828)*

Display setting of opted out systems.

**`memberof`** MetaSystems

___

###  filter

• **filter**: *string | null*

*Defined in [api.ts:1774](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1774)*

Full text filter

**`memberof`** MetaSystems

___

###  limit

• **limit**: *number*

*Defined in [api.ts:1780](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1780)*

Maximum number of paginated results.

**`memberof`** MetaSystems

___

###  offset

• **offset**: *number*

*Defined in [api.ts:1786](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1786)*

First record of paginated response.

**`memberof`** MetaSystems

___

###  page

• **page**: *number*

*Defined in [api.ts:1792](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1792)*

Page number of paginated response.

**`memberof`** MetaSystems

___

###  page_size

• **page_size**: *number*

*Defined in [api.ts:1798](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1798)*

Number of records per page of paginated response.

**`memberof`** MetaSystems

___

###  pages

• **pages**: *number*

*Defined in [api.ts:1804](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1804)*

Total number of pages of paginated response.

**`memberof`** MetaSystems

___

###  permissions

• **permissions**: *Array‹string›*

*Defined in [api.ts:1822](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1822)*

Fetched permissions from RBAC for given user

**`memberof`** MetaSystems

___

###  rhel_version

• **rhel_version**: *string | null*

*Defined in [api.ts:1834](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1834)*

Filter base on system RHEL version.

**`memberof`** MetaSystems

___

###  sort

• **sort**: *string | null*

*Defined in [api.ts:1810](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1810)*

Sorting filter.

**`memberof`** MetaSystems

___

###  total_items

• **total_items**: *number*

*Defined in [api.ts:1816](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1816)*

Total number of records.

**`memberof`** MetaSystems
