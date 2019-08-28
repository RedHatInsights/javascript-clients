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

*Defined in [api.ts:827](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L827)*

Format of the output data, either JSON (default) or CSV.

*__type__*: {string}

*__memberof__*: MetaSystems

___
<a id="filter"></a>

###  filter

**● filter**: *`string` \| `null`*

*Defined in [api.ts:779](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L779)*

Full text filter

*__type__*: {string}

*__memberof__*: MetaSystems

___
<a id="limit"></a>

###  limit

**● limit**: *`number`*

*Defined in [api.ts:785](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L785)*

Maximum number of paginated results.

*__type__*: {number}

*__memberof__*: MetaSystems

___
<a id="offset"></a>

###  offset

**● offset**: *`number`*

*Defined in [api.ts:791](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L791)*

First record of paginated response.

*__type__*: {number}

*__memberof__*: MetaSystems

___
<a id="optout"></a>

###  optOut

**● optOut**: *`boolean` \| `null`*

*Defined in [api.ts:833](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L833)*

Whether the filter to show opted out systems is active or not. If not set, defaults to hiding opted out systems.

*__type__*: {boolean}

*__memberof__*: MetaSystems

___
<a id="page"></a>

###  page

**● page**: *`number`*

*Defined in [api.ts:797](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L797)*

Page number of paginated response.

*__type__*: {number}

*__memberof__*: MetaSystems

___
<a id="pagesize"></a>

###  pageSize

**● pageSize**: *`number`*

*Defined in [api.ts:803](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L803)*

Number of records per page of paginated response.

*__type__*: {number}

*__memberof__*: MetaSystems

___
<a id="pages"></a>

###  pages

**● pages**: *`number`*

*Defined in [api.ts:809](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L809)*

Total number of pages of paginated response.

*__type__*: {number}

*__memberof__*: MetaSystems

___
<a id="sort"></a>

###  sort

**● sort**: *`string` \| `null`*

*Defined in [api.ts:815](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L815)*

Sorting filter.

*__type__*: {string}

*__memberof__*: MetaSystems

___
<a id="totalitems"></a>

###  totalItems

**● totalItems**: *`number`*

*Defined in [api.ts:821](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L821)*

Total number of records.

*__type__*: {number}

*__memberof__*: MetaSystems

___

