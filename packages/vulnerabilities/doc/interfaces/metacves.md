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

*Defined in [api.ts:845](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L845)*

Filter based on business risk IDs.

*__type__*: {string}

*__memberof__*: MetaCves

___
<a id="cvssfrom"></a>

###  cvssFrom

**● cvssFrom**: *`number` \| `null`*

*Defined in [api.ts:851](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L851)*

Filter based on cvss score, starting from the value.

*__type__*: {number}

*__memberof__*: MetaCves

___
<a id="cvssto"></a>

###  cvssTo

**● cvssTo**: *`number` \| `null`*

*Defined in [api.ts:857](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L857)*

Filter based on cvss score, up to the value.

*__type__*: {number}

*__memberof__*: MetaCves

___
<a id="dataformat"></a>

###  dataFormat

**● dataFormat**: *`string`*

*Defined in [api.ts:839](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L839)*

Format of the output data, either JSON (default) or CSV.

*__type__*: {string}

*__memberof__*: MetaCves

___
<a id="filter"></a>

###  filter

**● filter**: *`string` \| `null`*

*Defined in [api.ts:791](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L791)*

Full text filter

*__type__*: {string}

*__memberof__*: MetaCves

___
<a id="impact"></a>

###  impact

**● impact**: *`string` \| `null`*

*Defined in [api.ts:875](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L875)*

Filter based on impact IDs.

*__type__*: {string}

*__memberof__*: MetaCves

___
<a id="limit"></a>

###  limit

**● limit**: *`number`*

*Defined in [api.ts:797](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L797)*

Maximum number of paginated results.

*__type__*: {number}

*__memberof__*: MetaCves

___
<a id="offset"></a>

###  offset

**● offset**: *`number`*

*Defined in [api.ts:803](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L803)*

First record of paginated response.

*__type__*: {number}

*__memberof__*: MetaCves

___
<a id="page"></a>

###  page

**● page**: *`number`*

*Defined in [api.ts:809](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L809)*

Page number of paginated response.

*__type__*: {number}

*__memberof__*: MetaCves

___
<a id="pagesize"></a>

###  pageSize

**● pageSize**: *`number`*

*Defined in [api.ts:815](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L815)*

Number of records per page of paginated response.

*__type__*: {number}

*__memberof__*: MetaCves

___
<a id="pages"></a>

###  pages

**● pages**: *`number`*

*Defined in [api.ts:821](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L821)*

Total number of pages of paginated response.

*__type__*: {number}

*__memberof__*: MetaCves

___
<a id="publicfrom"></a>

###  publicFrom

**● publicFrom**: *`string` \| `null`*

*Defined in [api.ts:863](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L863)*

Filter CVEs based on their published date, starting from the date.

*__type__*: {string}

*__memberof__*: MetaCves

___
<a id="publicto"></a>

###  publicTo

**● publicTo**: *`string` \| `null`*

*Defined in [api.ts:869](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L869)*

Filter CVEs based on their published date, up to the date.

*__type__*: {string}

*__memberof__*: MetaCves

___
<a id="sort"></a>

###  sort

**● sort**: *`string` \| `null`*

*Defined in [api.ts:827](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L827)*

Sorting filter.

*__type__*: {string}

*__memberof__*: MetaCves

___
<a id="statusid"></a>

###  statusId

**● statusId**: *`string` \| `null`*

*Defined in [api.ts:881](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L881)*

Filer based on CVE status ID.

*__type__*: {string}

*__memberof__*: MetaCves

___
<a id="totalitems"></a>

###  totalItems

**● totalItems**: *`number`*

*Defined in [api.ts:833](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L833)*

Total number of records.

*__type__*: {number}

*__memberof__*: MetaCves

___

