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

*Defined in [api.ts:761](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L761)*

Filter based on business risk IDs.

*__type__*: {string}

*__memberof__*: MetaCvesSystems

___
<a id="cvssfrom"></a>

###  cvssFrom

**● cvssFrom**: *`number` \| `null`*

*Defined in [api.ts:767](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L767)*

Filter based on cvss score, starting from the value.

*__type__*: {number}

*__memberof__*: MetaCvesSystems

___
<a id="cvssto"></a>

###  cvssTo

**● cvssTo**: *`number` \| `null`*

*Defined in [api.ts:773](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L773)*

Filter based on cvss score, up to the value.

*__type__*: {number}

*__memberof__*: MetaCvesSystems

___
<a id="dataformat"></a>

###  dataFormat

**● dataFormat**: *`string`*

*Defined in [api.ts:755](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L755)*

Format of the output data, either JSON (default) or CSV.

*__type__*: {string}

*__memberof__*: MetaCvesSystems

___
<a id="filter"></a>

###  filter

**● filter**: *`string` \| `null`*

*Defined in [api.ts:707](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L707)*

Full text filter

*__type__*: {string}

*__memberof__*: MetaCvesSystems

___
<a id="impact"></a>

###  impact

**● impact**: *`string` \| `null`*

*Defined in [api.ts:791](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L791)*

Filter based on impact IDs.

*__type__*: {string}

*__memberof__*: MetaCvesSystems

___
<a id="limit"></a>

###  limit

**● limit**: *`number`*

*Defined in [api.ts:713](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L713)*

Maximum number of paginated results.

*__type__*: {number}

*__memberof__*: MetaCvesSystems

___
<a id="offset"></a>

###  offset

**● offset**: *`number`*

*Defined in [api.ts:719](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L719)*

First record of paginated response.

*__type__*: {number}

*__memberof__*: MetaCvesSystems

___
<a id="optout"></a>

###  optOut

**● optOut**: *`boolean`*

*Defined in [api.ts:803](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L803)*

If given system was opted out.

*__type__*: {boolean}

*__memberof__*: MetaCvesSystems

___
<a id="page"></a>

###  page

**● page**: *`number`*

*Defined in [api.ts:725](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L725)*

Page number of paginated response.

*__type__*: {number}

*__memberof__*: MetaCvesSystems

___
<a id="pagesize"></a>

###  pageSize

**● pageSize**: *`number`*

*Defined in [api.ts:731](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L731)*

Number of records per page of paginated response.

*__type__*: {number}

*__memberof__*: MetaCvesSystems

___
<a id="pages"></a>

###  pages

**● pages**: *`number`*

*Defined in [api.ts:737](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L737)*

Total number of pages of paginated response.

*__type__*: {number}

*__memberof__*: MetaCvesSystems

___
<a id="publicfrom"></a>

###  publicFrom

**● publicFrom**: *`string` \| `null`*

*Defined in [api.ts:779](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L779)*

Filter CVEs based on their published date, starting from the date.

*__type__*: {string}

*__memberof__*: MetaCvesSystems

___
<a id="publicto"></a>

###  publicTo

**● publicTo**: *`string` \| `null`*

*Defined in [api.ts:785](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L785)*

Filter CVEs based on their published date, up to the date.

*__type__*: {string}

*__memberof__*: MetaCvesSystems

___
<a id="sort"></a>

###  sort

**● sort**: *`string` \| `null`*

*Defined in [api.ts:743](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L743)*

Sorting filter.

*__type__*: {string}

*__memberof__*: MetaCvesSystems

___
<a id="statusid"></a>

###  statusId

**● statusId**: *`string` \| `null`*

*Defined in [api.ts:797](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L797)*

Filer based on CVE status ID.

*__type__*: {string}

*__memberof__*: MetaCvesSystems

___
<a id="totalitems"></a>

###  totalItems

**● totalItems**: *`number`*

*Defined in [api.ts:749](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L749)*

Total number of records.

*__type__*: {number}

*__memberof__*: MetaCvesSystems

___

