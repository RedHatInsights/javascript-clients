[@redhat-cloud-services/vulnerabilities-client](../README.md) > [MetaCvesSystems](../interfaces/metacvessystems.md)

# Interface: MetaCvesSystems

*__export__*: 

*__interface__*: MetaCvesSystems

## Hierarchy

**MetaCvesSystems**

## Index

### Properties

* [cvssFrom](metacvessystems.md#cvssfrom)
* [cvssTo](metacvessystems.md#cvssto)
* [dataFormat](metacvessystems.md#dataformat)
* [filter](metacvessystems.md#filter)
* [impact](metacvessystems.md#impact)
* [limit](metacvessystems.md#limit)
* [offset](metacvessystems.md#offset)
* [optOut](metacvessystems.md#optout)
* [page](metacvessystems.md#page)
* [pageSize](metacvessystems.md#pagesize)
* [pages](metacvessystems.md#pages)
* [publicFrom](metacvessystems.md#publicfrom)
* [publicTo](metacvessystems.md#publicto)
* [sort](metacvessystems.md#sort)
* [statusId](metacvessystems.md#statusid)
* [totalItems](metacvessystems.md#totalitems)

---

## Properties

<a id="cvssfrom"></a>

###  cvssFrom

**● cvssFrom**: *`number` \| `null`*

*Defined in [api.ts:611](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L611)*

Filter based on cvss score, starting from the value.

*__type__*: {number}

*__memberof__*: MetaCvesSystems

___
<a id="cvssto"></a>

###  cvssTo

**● cvssTo**: *`number` \| `null`*

*Defined in [api.ts:617](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L617)*

Filter based on cvss score, up to the value.

*__type__*: {number}

*__memberof__*: MetaCvesSystems

___
<a id="dataformat"></a>

###  dataFormat

**● dataFormat**: *`string`*

*Defined in [api.ts:605](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L605)*

Format of the output data, either JSON (default) or CSV.

*__type__*: {string}

*__memberof__*: MetaCvesSystems

___
<a id="filter"></a>

###  filter

**● filter**: *`string` \| `null`*

*Defined in [api.ts:557](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L557)*

Full text filter

*__type__*: {string}

*__memberof__*: MetaCvesSystems

___
<a id="impact"></a>

### `<Optional>` impact

**● impact**: *`string` \| `null`*

*Defined in [api.ts:635](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L635)*

Filter based on impact IDs.

*__type__*: {string}

*__memberof__*: MetaCvesSystems

___
<a id="limit"></a>

###  limit

**● limit**: *`number`*

*Defined in [api.ts:563](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L563)*

Maximum number of paginated results.

*__type__*: {number}

*__memberof__*: MetaCvesSystems

___
<a id="offset"></a>

###  offset

**● offset**: *`number`*

*Defined in [api.ts:569](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L569)*

First record of paginated response.

*__type__*: {number}

*__memberof__*: MetaCvesSystems

___
<a id="optout"></a>

###  optOut

**● optOut**: *`boolean`*

*Defined in [api.ts:647](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L647)*

If given system was opted out.

*__type__*: {boolean}

*__memberof__*: MetaCvesSystems

___
<a id="page"></a>

###  page

**● page**: *`number`*

*Defined in [api.ts:575](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L575)*

Page number of paginated response.

*__type__*: {number}

*__memberof__*: MetaCvesSystems

___
<a id="pagesize"></a>

###  pageSize

**● pageSize**: *`number`*

*Defined in [api.ts:581](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L581)*

Number of records per page of paginated response.

*__type__*: {number}

*__memberof__*: MetaCvesSystems

___
<a id="pages"></a>

###  pages

**● pages**: *`number`*

*Defined in [api.ts:587](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L587)*

Total number of pages of paginated response.

*__type__*: {number}

*__memberof__*: MetaCvesSystems

___
<a id="publicfrom"></a>

###  publicFrom

**● publicFrom**: *`string` \| `null`*

*Defined in [api.ts:623](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L623)*

Filter CVEs based on their published date, starting from the date.

*__type__*: {string}

*__memberof__*: MetaCvesSystems

___
<a id="publicto"></a>

###  publicTo

**● publicTo**: *`string` \| `null`*

*Defined in [api.ts:629](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L629)*

Filter CVEs based on their published date, up to the date.

*__type__*: {string}

*__memberof__*: MetaCvesSystems

___
<a id="sort"></a>

###  sort

**● sort**: *`string` \| `null`*

*Defined in [api.ts:593](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L593)*

Sorting filter.

*__type__*: {string}

*__memberof__*: MetaCvesSystems

___
<a id="statusid"></a>

###  statusId

**● statusId**: *`string` \| `null`*

*Defined in [api.ts:641](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L641)*

Filer based on CVE status ID.

*__type__*: {string}

*__memberof__*: MetaCvesSystems

___
<a id="totalitems"></a>

###  totalItems

**● totalItems**: *`number`*

*Defined in [api.ts:599](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L599)*

Total number of records.

*__type__*: {number}

*__memberof__*: MetaCvesSystems

___

