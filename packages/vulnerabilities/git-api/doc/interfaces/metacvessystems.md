[@redhat-cloud-services/vulnerabilities-client](../README.md) > [MetaCvesSystems](../interfaces/metacvessystems.md)

# Interface: MetaCvesSystems

*__export__*: 

*__interface__*: MetaCvesSystems

## Hierarchy

**MetaCvesSystems**

## Index

### Properties

* [businessRiskId](metacvessystems.md#businessriskid)
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

<a id="businessriskid"></a>

###  businessRiskId

**● businessRiskId**: *`string` \| `null`*

*Defined in [git-api/api.ts:889](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L889)*

Filter based on business risk IDs.

*__type__*: {string}

*__memberof__*: MetaCvesSystems

___
<a id="cvssfrom"></a>

###  cvssFrom

**● cvssFrom**: *`number` \| `null`*

*Defined in [git-api/api.ts:895](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L895)*

Filter based on cvss score, starting from the value.

*__type__*: {number}

*__memberof__*: MetaCvesSystems

___
<a id="cvssto"></a>

###  cvssTo

**● cvssTo**: *`number` \| `null`*

*Defined in [git-api/api.ts:901](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L901)*

Filter based on cvss score, up to the value.

*__type__*: {number}

*__memberof__*: MetaCvesSystems

___
<a id="dataformat"></a>

###  dataFormat

**● dataFormat**: *`string`*

*Defined in [git-api/api.ts:883](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L883)*

Format of the output data, either JSON (default) or CSV.

*__type__*: {string}

*__memberof__*: MetaCvesSystems

___
<a id="filter"></a>

###  filter

**● filter**: *`string` \| `null`*

*Defined in [git-api/api.ts:835](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L835)*

Full text filter

*__type__*: {string}

*__memberof__*: MetaCvesSystems

___
<a id="impact"></a>

###  impact

**● impact**: *`string` \| `null`*

*Defined in [git-api/api.ts:919](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L919)*

Filter based on impact IDs.

*__type__*: {string}

*__memberof__*: MetaCvesSystems

___
<a id="limit"></a>

###  limit

**● limit**: *`number`*

*Defined in [git-api/api.ts:841](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L841)*

Maximum number of paginated results.

*__type__*: {number}

*__memberof__*: MetaCvesSystems

___
<a id="offset"></a>

###  offset

**● offset**: *`number`*

*Defined in [git-api/api.ts:847](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L847)*

First record of paginated response.

*__type__*: {number}

*__memberof__*: MetaCvesSystems

___
<a id="optout"></a>

###  optOut

**● optOut**: *`boolean`*

*Defined in [git-api/api.ts:931](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L931)*

If given system was opted out.

*__type__*: {boolean}

*__memberof__*: MetaCvesSystems

___
<a id="page"></a>

###  page

**● page**: *`number`*

*Defined in [git-api/api.ts:853](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L853)*

Page number of paginated response.

*__type__*: {number}

*__memberof__*: MetaCvesSystems

___
<a id="pagesize"></a>

###  pageSize

**● pageSize**: *`number`*

*Defined in [git-api/api.ts:859](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L859)*

Number of records per page of paginated response.

*__type__*: {number}

*__memberof__*: MetaCvesSystems

___
<a id="pages"></a>

###  pages

**● pages**: *`number`*

*Defined in [git-api/api.ts:865](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L865)*

Total number of pages of paginated response.

*__type__*: {number}

*__memberof__*: MetaCvesSystems

___
<a id="publicfrom"></a>

###  publicFrom

**● publicFrom**: *`string` \| `null`*

*Defined in [git-api/api.ts:907](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L907)*

Filter CVEs based on their published date, starting from the date.

*__type__*: {string}

*__memberof__*: MetaCvesSystems

___
<a id="publicto"></a>

###  publicTo

**● publicTo**: *`string` \| `null`*

*Defined in [git-api/api.ts:913](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L913)*

Filter CVEs based on their published date, up to the date.

*__type__*: {string}

*__memberof__*: MetaCvesSystems

___
<a id="sort"></a>

###  sort

**● sort**: *`string` \| `null`*

*Defined in [git-api/api.ts:871](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L871)*

Sorting filter.

*__type__*: {string}

*__memberof__*: MetaCvesSystems

___
<a id="statusid"></a>

###  statusId

**● statusId**: *`string` \| `null`*

*Defined in [git-api/api.ts:925](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L925)*

Filer based on CVE status ID.

*__type__*: {string}

*__memberof__*: MetaCvesSystems

___
<a id="totalitems"></a>

###  totalItems

**● totalItems**: *`number`*

*Defined in [git-api/api.ts:877](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L877)*

Total number of records.

*__type__*: {number}

*__memberof__*: MetaCvesSystems

___

