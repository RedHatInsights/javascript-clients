[@redhat-cloud-services/vulnerabilities-client](../README.md) › [Globals](../globals.md) › [Meta](meta.md)

# Interface: Meta

**`export`** 

**`interface`** Meta

## Hierarchy

* **Meta**

  ↳ [MetaAffectedSystems](metaaffectedsystems.md)

  ↳ [MetaCves](metacves.md)

  ↳ [MetaSystems](metasystems.md)

  ↳ [MetaVulnerabilitiesOut](metavulnerabilitiesout.md)

## Index

### Properties

* [data_format](meta.md#data_format)
* [filter](meta.md#filter)
* [limit](meta.md#limit)
* [offset](meta.md#offset)
* [page](meta.md#page)
* [page_size](meta.md#page_size)
* [pages](meta.md#pages)
* [sort](meta.md#sort)
* [total_items](meta.md#total_items)

## Properties

###  data_format

• **data_format**: *string*

*Defined in [packages/vulnerabilities/git-api/api.ts:729](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L729)*

Format of the output data, either JSON (default) or CSV.

**`memberof`** Meta

___

###  filter

• **filter**: *string | null*

*Defined in [packages/vulnerabilities/git-api/api.ts:681](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L681)*

Full text filter

**`memberof`** Meta

___

###  limit

• **limit**: *number*

*Defined in [packages/vulnerabilities/git-api/api.ts:687](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L687)*

Maximum number of paginated results.

**`memberof`** Meta

___

###  offset

• **offset**: *number*

*Defined in [packages/vulnerabilities/git-api/api.ts:693](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L693)*

First record of paginated response.

**`memberof`** Meta

___

###  page

• **page**: *number*

*Defined in [packages/vulnerabilities/git-api/api.ts:699](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L699)*

Page number of paginated response.

**`memberof`** Meta

___

###  page_size

• **page_size**: *number*

*Defined in [packages/vulnerabilities/git-api/api.ts:705](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L705)*

Number of records per page of paginated response.

**`memberof`** Meta

___

###  pages

• **pages**: *number*

*Defined in [packages/vulnerabilities/git-api/api.ts:711](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L711)*

Total number of pages of paginated response.

**`memberof`** Meta

___

###  sort

• **sort**: *string | null*

*Defined in [packages/vulnerabilities/git-api/api.ts:717](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L717)*

Sorting filter.

**`memberof`** Meta

___

###  total_items

• **total_items**: *number*

*Defined in [packages/vulnerabilities/git-api/api.ts:723](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L723)*

Total number of records.

**`memberof`** Meta
