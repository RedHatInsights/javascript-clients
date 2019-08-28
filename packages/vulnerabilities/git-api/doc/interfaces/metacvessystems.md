[@redhat-cloud-services/vulnerabilities-client](../README.md) > [MetaCvesSystems](../interfaces/metacvessystems.md)

# Interface: MetaCvesSystems

*__export__*: 

*__interface__*: MetaCvesSystems

## Hierarchy

**MetaCvesSystems**

## Index

### Properties

* [businessRisk](metacvessystems.md#businessrisk)
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

<a id="businessrisk"></a>

### `<Optional>` businessRisk

**● businessRisk**: *`string` \| `null`*

*Defined in [api.ts:723](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L723)*

Filter based on business risk IDs.

*__type__*: {string}

*__memberof__*: MetaCvesSystems

___
<a id="cvssfrom"></a>

###  cvssFrom

**● cvssFrom**: *`number` \| `null`*

*Defined in [api.ts:729](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L729)*

Filter based on cvss score, starting from the value.

*__type__*: {number}

*__memberof__*: MetaCvesSystems

___
<a id="cvssto"></a>

###  cvssTo

**● cvssTo**: *`number` \| `null`*

*Defined in [api.ts:735](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L735)*

Filter based on cvss score, up to the value.

*__type__*: {number}

*__memberof__*: MetaCvesSystems

___
<a id="dataformat"></a>

###  dataFormat

**● dataFormat**: *`string`*

*Defined in [api.ts:717](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L717)*

Format of the output data, either JSON (default) or CSV.

*__type__*: {string}

*__memberof__*: MetaCvesSystems

___
<a id="filter"></a>

###  filter

**● filter**: *`string` \| `null`*

*Defined in [api.ts:669](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L669)*

Full text filter

*__type__*: {string}

*__memberof__*: MetaCvesSystems

___
<a id="impact"></a>

### `<Optional>` impact

**● impact**: *`string` \| `null`*

*Defined in [api.ts:753](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L753)*

Filter based on impact IDs.

*__type__*: {string}

*__memberof__*: MetaCvesSystems

___
<a id="limit"></a>

###  limit

**● limit**: *`number`*

*Defined in [api.ts:675](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L675)*

Maximum number of paginated results.

*__type__*: {number}

*__memberof__*: MetaCvesSystems

___
<a id="offset"></a>

###  offset

**● offset**: *`number`*

*Defined in [api.ts:681](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L681)*

First record of paginated response.

*__type__*: {number}

*__memberof__*: MetaCvesSystems

___
<a id="optout"></a>

###  optOut

**● optOut**: *`boolean`*

*Defined in [api.ts:765](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L765)*

If given system was opted out.

*__type__*: {boolean}

*__memberof__*: MetaCvesSystems

___
<a id="page"></a>

###  page

**● page**: *`number`*

*Defined in [api.ts:687](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L687)*

Page number of paginated response.

*__type__*: {number}

*__memberof__*: MetaCvesSystems

___
<a id="pagesize"></a>

###  pageSize

**● pageSize**: *`number`*

*Defined in [api.ts:693](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L693)*

Number of records per page of paginated response.

*__type__*: {number}

*__memberof__*: MetaCvesSystems

___
<a id="pages"></a>

###  pages

**● pages**: *`number`*

*Defined in [api.ts:699](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L699)*

Total number of pages of paginated response.

*__type__*: {number}

*__memberof__*: MetaCvesSystems

___
<a id="publicfrom"></a>

###  publicFrom

**● publicFrom**: *`string` \| `null`*

*Defined in [api.ts:741](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L741)*

Filter CVEs based on their published date, starting from the date.

*__type__*: {string}

*__memberof__*: MetaCvesSystems

___
<a id="publicto"></a>

###  publicTo

**● publicTo**: *`string` \| `null`*

*Defined in [api.ts:747](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L747)*

Filter CVEs based on their published date, up to the date.

*__type__*: {string}

*__memberof__*: MetaCvesSystems

___
<a id="sort"></a>

###  sort

**● sort**: *`string` \| `null`*

*Defined in [api.ts:705](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L705)*

Sorting filter.

*__type__*: {string}

*__memberof__*: MetaCvesSystems

___
<a id="statusid"></a>

###  statusId

**● statusId**: *`string` \| `null`*

*Defined in [api.ts:759](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L759)*

Filer based on CVE status ID.

*__type__*: {string}

*__memberof__*: MetaCvesSystems

___
<a id="totalitems"></a>

###  totalItems

**● totalItems**: *`number`*

*Defined in [api.ts:711](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L711)*

Total number of records.

*__type__*: {number}

*__memberof__*: MetaCvesSystems

___

