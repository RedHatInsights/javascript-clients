[@redhat-cloud-services/vulnerabilities-client](../README.md) > [MetaCves](../interfaces/metacves.md)

# Interface: MetaCves

*__export__*: 

*__interface__*: MetaCves

## Hierarchy

**MetaCves**

## Index

### Properties

* [businessRiskId](metacves.md#businessriskid)
* [cvssFrom](metacves.md#cvssfrom)
* [cvssTo](metacves.md#cvssto)
* [dataFormat](metacves.md#dataformat)
* [filter](metacves.md#filter)
* [impact](metacves.md#impact)
* [limit](metacves.md#limit)
* [offset](metacves.md#offset)
* [page](metacves.md#page)
* [pageSize](metacves.md#pagesize)
* [pages](metacves.md#pages)
* [publicFrom](metacves.md#publicfrom)
* [publicTo](metacves.md#publicto)
* [sort](metacves.md#sort)
* [statusId](metacves.md#statusid)
* [totalItems](metacves.md#totalitems)

---

## Properties

<a id="businessriskid"></a>

###  businessRiskId

**● businessRiskId**: *`string` \| `null`*

*Defined in [api.ts:657](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L657)*

Filter based on business risk IDs.

*__type__*: {string}

*__memberof__*: MetaCves

___
<a id="cvssfrom"></a>

###  cvssFrom

**● cvssFrom**: *`number` \| `null`*

*Defined in [api.ts:663](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L663)*

Filter based on cvss score, starting from the value.

*__type__*: {number}

*__memberof__*: MetaCves

___
<a id="cvssto"></a>

###  cvssTo

**● cvssTo**: *`number` \| `null`*

*Defined in [api.ts:669](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L669)*

Filter based on cvss score, up to the value.

*__type__*: {number}

*__memberof__*: MetaCves

___
<a id="dataformat"></a>

###  dataFormat

**● dataFormat**: *`string`*

*Defined in [api.ts:651](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L651)*

Format of the output data, either JSON (default) or CSV.

*__type__*: {string}

*__memberof__*: MetaCves

___
<a id="filter"></a>

###  filter

**● filter**: *`string` \| `null`*

*Defined in [api.ts:603](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L603)*

Full text filter

*__type__*: {string}

*__memberof__*: MetaCves

___
<a id="impact"></a>

###  impact

**● impact**: *`string` \| `null`*

*Defined in [api.ts:687](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L687)*

Filter based on impact IDs.

*__type__*: {string}

*__memberof__*: MetaCves

___
<a id="limit"></a>

###  limit

**● limit**: *`number`*

*Defined in [api.ts:609](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L609)*

Maximum number of paginated results.

*__type__*: {number}

*__memberof__*: MetaCves

___
<a id="offset"></a>

###  offset

**● offset**: *`number`*

*Defined in [api.ts:615](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L615)*

First record of paginated response.

*__type__*: {number}

*__memberof__*: MetaCves

___
<a id="page"></a>

###  page

**● page**: *`number`*

*Defined in [api.ts:621](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L621)*

Page number of paginated response.

*__type__*: {number}

*__memberof__*: MetaCves

___
<a id="pagesize"></a>

###  pageSize

**● pageSize**: *`number`*

*Defined in [api.ts:627](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L627)*

Number of records per page of paginated response.

*__type__*: {number}

*__memberof__*: MetaCves

___
<a id="pages"></a>

###  pages

**● pages**: *`number`*

*Defined in [api.ts:633](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L633)*

Total number of pages of paginated response.

*__type__*: {number}

*__memberof__*: MetaCves

___
<a id="publicfrom"></a>

###  publicFrom

**● publicFrom**: *`string` \| `null`*

*Defined in [api.ts:675](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L675)*

Filter CVEs based on their published date, starting from the date.

*__type__*: {string}

*__memberof__*: MetaCves

___
<a id="publicto"></a>

###  publicTo

**● publicTo**: *`string` \| `null`*

*Defined in [api.ts:681](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L681)*

Filter CVEs based on their published date, up to the date.

*__type__*: {string}

*__memberof__*: MetaCves

___
<a id="sort"></a>

###  sort

**● sort**: *`string` \| `null`*

*Defined in [api.ts:639](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L639)*

Sorting filter.

*__type__*: {string}

*__memberof__*: MetaCves

___
<a id="statusid"></a>

###  statusId

**● statusId**: *`string` \| `null`*

*Defined in [api.ts:693](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L693)*

Filer based on CVE status ID.

*__type__*: {string}

*__memberof__*: MetaCves

___
<a id="totalitems"></a>

###  totalItems

**● totalItems**: *`number`*

*Defined in [api.ts:645](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L645)*

Total number of records.

*__type__*: {number}

*__memberof__*: MetaCves

___

