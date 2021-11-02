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

*Defined in [api.ts:1712](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1712)*

Format of the output data, either JSON (default) or CSV.

**`memberof`** MetaSystems

___

###  excluded

• **excluded**: *string | null*

*Defined in [api.ts:1772](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1772)*

Display setting of opted out systems.

**`memberof`** MetaSystems

___

###  filter

• **filter**: *string | null*

*Defined in [api.ts:1718](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1718)*

Full text filter

**`memberof`** MetaSystems

___

###  limit

• **limit**: *number*

*Defined in [api.ts:1724](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1724)*

Maximum number of paginated results.

**`memberof`** MetaSystems

___

###  offset

• **offset**: *number*

*Defined in [api.ts:1730](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1730)*

First record of paginated response.

**`memberof`** MetaSystems

___

###  page

• **page**: *number*

*Defined in [api.ts:1736](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1736)*

Page number of paginated response.

**`memberof`** MetaSystems

___

###  page_size

• **page_size**: *number*

*Defined in [api.ts:1742](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1742)*

Number of records per page of paginated response.

**`memberof`** MetaSystems

___

###  pages

• **pages**: *number*

*Defined in [api.ts:1748](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1748)*

Total number of pages of paginated response.

**`memberof`** MetaSystems

___

###  permissions

• **permissions**: *Array‹string›*

*Defined in [api.ts:1766](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1766)*

Fetched permissions from RBAC for given user

**`memberof`** MetaSystems

___

###  rhel_version

• **rhel_version**: *string | null*

*Defined in [api.ts:1778](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1778)*

Filter base on system RHEL version.

**`memberof`** MetaSystems

___

###  sort

• **sort**: *string | null*

*Defined in [api.ts:1754](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1754)*

Sorting filter.

**`memberof`** MetaSystems

___

###  total_items

• **total_items**: *number*

*Defined in [api.ts:1760](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1760)*

Total number of records.

**`memberof`** MetaSystems
