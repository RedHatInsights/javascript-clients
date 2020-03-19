[@redhat-cloud-services/vulnerabilities-client](../README.md) › [Globals](../globals.md) › [Meta](meta.md)

# Interface: Meta

**`export`** 

**`interface`** Meta

## Hierarchy

* **Meta**

## Index

### Properties

* [dataFormat](meta.md#dataformat)
* [filter](meta.md#filter)
* [limit](meta.md#limit)
* [offset](meta.md#offset)
* [page](meta.md#page)
* [pageSize](meta.md#pagesize)
* [pages](meta.md#pages)
* [sort](meta.md#sort)
* [totalItems](meta.md#totalitems)

## Properties

###  dataFormat

• **dataFormat**: *string*

*Defined in [git-api/api.ts:715](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L715)*

Format of the output data, either JSON (default) or CSV.

**`type`** {string}

**`memberof`** Meta

___

###  filter

• **filter**: *string | null*

*Defined in [git-api/api.ts:667](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L667)*

Full text filter

**`type`** {string}

**`memberof`** Meta

___

###  limit

• **limit**: *number*

*Defined in [git-api/api.ts:673](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L673)*

Maximum number of paginated results.

**`type`** {number}

**`memberof`** Meta

___

###  offset

• **offset**: *number*

*Defined in [git-api/api.ts:679](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L679)*

First record of paginated response.

**`type`** {number}

**`memberof`** Meta

___

###  page

• **page**: *number*

*Defined in [git-api/api.ts:685](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L685)*

Page number of paginated response.

**`type`** {number}

**`memberof`** Meta

___

###  pageSize

• **pageSize**: *number*

*Defined in [git-api/api.ts:691](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L691)*

Number of records per page of paginated response.

**`type`** {number}

**`memberof`** Meta

___

###  pages

• **pages**: *number*

*Defined in [git-api/api.ts:697](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L697)*

Total number of pages of paginated response.

**`type`** {number}

**`memberof`** Meta

___

###  sort

• **sort**: *string | null*

*Defined in [git-api/api.ts:703](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L703)*

Sorting filter.

**`type`** {string}

**`memberof`** Meta

___

###  totalItems

• **totalItems**: *number*

*Defined in [git-api/api.ts:709](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L709)*

Total number of records.

**`type`** {number}

**`memberof`** Meta
