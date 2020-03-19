[@redhat-cloud-services/vulnerabilities-client](../README.md) > [MetaSystems](../interfaces/metasystems.md)

# Interface: MetaSystems

*__export__*: 

*__interface__*: MetaSystems

## Hierarchy

**MetaSystems**

## Index

### Properties

* [dataFormat](metasystems.md#dataformat)
* [filter](metasystems.md#filter)
* [limit](metasystems.md#limit)
* [offset](metasystems.md#offset)
* [optOut](metasystems.md#optout)
* [page](metasystems.md#page)
* [pageSize](metasystems.md#pagesize)
* [pages](metasystems.md#pages)
* [sort](metasystems.md#sort)
* [totalItems](metasystems.md#totalitems)

---

## Properties

<a id="dataformat"></a>

###  dataFormat

**● dataFormat**: *`string`*

*Defined in [git-api/api.ts:1059](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1059)*

Format of the output data, either JSON (default) or CSV.

*__type__*: {string}

*__memberof__*: MetaSystems

___
<a id="filter"></a>

###  filter

**● filter**: *`string` \| `null`*

*Defined in [git-api/api.ts:1011](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1011)*

Full text filter

*__type__*: {string}

*__memberof__*: MetaSystems

___
<a id="limit"></a>

###  limit

**● limit**: *`number`*

*Defined in [git-api/api.ts:1017](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1017)*

Maximum number of paginated results.

*__type__*: {number}

*__memberof__*: MetaSystems

___
<a id="offset"></a>

###  offset

**● offset**: *`number`*

*Defined in [git-api/api.ts:1023](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1023)*

First record of paginated response.

*__type__*: {number}

*__memberof__*: MetaSystems

___
<a id="optout"></a>

###  optOut

**● optOut**: *`boolean` \| `null`*

*Defined in [git-api/api.ts:1065](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1065)*

Whether the filter to show opted out systems is active or not. If not set, defaults to hiding opted out systems.

*__type__*: {boolean}

*__memberof__*: MetaSystems

___
<a id="page"></a>

###  page

**● page**: *`number`*

*Defined in [git-api/api.ts:1029](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1029)*

Page number of paginated response.

*__type__*: {number}

*__memberof__*: MetaSystems

___
<a id="pagesize"></a>

###  pageSize

**● pageSize**: *`number`*

*Defined in [git-api/api.ts:1035](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1035)*

Number of records per page of paginated response.

*__type__*: {number}

*__memberof__*: MetaSystems

___
<a id="pages"></a>

###  pages

**● pages**: *`number`*

*Defined in [git-api/api.ts:1041](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1041)*

Total number of pages of paginated response.

*__type__*: {number}

*__memberof__*: MetaSystems

___
<a id="sort"></a>

###  sort

**● sort**: *`string` \| `null`*

*Defined in [git-api/api.ts:1047](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1047)*

Sorting filter.

*__type__*: {string}

*__memberof__*: MetaSystems

___
<a id="totalitems"></a>

###  totalItems

**● totalItems**: *`number`*

*Defined in [git-api/api.ts:1053](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1053)*

Total number of records.

*__type__*: {number}

*__memberof__*: MetaSystems

___

