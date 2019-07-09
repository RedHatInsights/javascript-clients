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

*Defined in [api.ts:583](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L583)*

Format of the output data, either JSON (default) or CSV.

*__type__*: {string}

*__memberof__*: MetaSystems

___
<a id="filter"></a>

###  filter

**● filter**: *`string` \| `null`*

*Defined in [api.ts:535](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L535)*

Full text filter

*__type__*: {string}

*__memberof__*: MetaSystems

___
<a id="limit"></a>

###  limit

**● limit**: *`number`*

*Defined in [api.ts:541](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L541)*

Maximum number of paginated results.

*__type__*: {number}

*__memberof__*: MetaSystems

___
<a id="offset"></a>

###  offset

**● offset**: *`number`*

*Defined in [api.ts:547](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L547)*

First record of paginated response.

*__type__*: {number}

*__memberof__*: MetaSystems

___
<a id="optout"></a>

###  optOut

**● optOut**: *`boolean` \| `null`*

*Defined in [api.ts:589](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L589)*

Whether the filter to show opted out systems is active or not. If not set, defaults to hiding opted out systems.

*__type__*: {boolean}

*__memberof__*: MetaSystems

___
<a id="page"></a>

###  page

**● page**: *`number`*

*Defined in [api.ts:553](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L553)*

Page number of paginated response.

*__type__*: {number}

*__memberof__*: MetaSystems

___
<a id="pagesize"></a>

###  pageSize

**● pageSize**: *`number`*

*Defined in [api.ts:559](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L559)*

Number of records per page of paginated response.

*__type__*: {number}

*__memberof__*: MetaSystems

___
<a id="pages"></a>

###  pages

**● pages**: *`number`*

*Defined in [api.ts:565](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L565)*

Total number of pages of paginated response.

*__type__*: {number}

*__memberof__*: MetaSystems

___
<a id="sort"></a>

###  sort

**● sort**: *`string` \| `null`*

*Defined in [api.ts:571](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L571)*

Sorting filter.

*__type__*: {string}

*__memberof__*: MetaSystems

___
<a id="totalitems"></a>

###  totalItems

**● totalItems**: *`number`*

*Defined in [api.ts:577](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L577)*

Total number of records.

*__type__*: {number}

*__memberof__*: MetaSystems

___

