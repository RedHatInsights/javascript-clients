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

*Defined in [git-api/api.ts:785](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L785)*

Filter based on business risk IDs.

*__type__*: {string}

*__memberof__*: MetaCves

___
<a id="cvssfrom"></a>

###  cvssFrom

**● cvssFrom**: *`number` \| `null`*

*Defined in [git-api/api.ts:791](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L791)*

Filter based on cvss score, starting from the value.

*__type__*: {number}

*__memberof__*: MetaCves

___
<a id="cvssto"></a>

###  cvssTo

**● cvssTo**: *`number` \| `null`*

*Defined in [git-api/api.ts:797](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L797)*

Filter based on cvss score, up to the value.

*__type__*: {number}

*__memberof__*: MetaCves

___
<a id="dataformat"></a>

###  dataFormat

**● dataFormat**: *`string`*

*Defined in [git-api/api.ts:779](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L779)*

Format of the output data, either JSON (default) or CSV.

*__type__*: {string}

*__memberof__*: MetaCves

___
<a id="filter"></a>

###  filter

**● filter**: *`string` \| `null`*

*Defined in [git-api/api.ts:731](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L731)*

Full text filter

*__type__*: {string}

*__memberof__*: MetaCves

___
<a id="impact"></a>

###  impact

**● impact**: *`string` \| `null`*

*Defined in [git-api/api.ts:815](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L815)*

Filter based on impact IDs.

*__type__*: {string}

*__memberof__*: MetaCves

___
<a id="limit"></a>

###  limit

**● limit**: *`number`*

*Defined in [git-api/api.ts:737](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L737)*

Maximum number of paginated results.

*__type__*: {number}

*__memberof__*: MetaCves

___
<a id="offset"></a>

###  offset

**● offset**: *`number`*

*Defined in [git-api/api.ts:743](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L743)*

First record of paginated response.

*__type__*: {number}

*__memberof__*: MetaCves

___
<a id="page"></a>

###  page

**● page**: *`number`*

*Defined in [git-api/api.ts:749](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L749)*

Page number of paginated response.

*__type__*: {number}

*__memberof__*: MetaCves

___
<a id="pagesize"></a>

###  pageSize

**● pageSize**: *`number`*

*Defined in [git-api/api.ts:755](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L755)*

Number of records per page of paginated response.

*__type__*: {number}

*__memberof__*: MetaCves

___
<a id="pages"></a>

###  pages

**● pages**: *`number`*

*Defined in [git-api/api.ts:761](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L761)*

Total number of pages of paginated response.

*__type__*: {number}

*__memberof__*: MetaCves

___
<a id="publicfrom"></a>

###  publicFrom

**● publicFrom**: *`string` \| `null`*

*Defined in [git-api/api.ts:803](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L803)*

Filter CVEs based on their published date, starting from the date.

*__type__*: {string}

*__memberof__*: MetaCves

___
<a id="publicto"></a>

###  publicTo

**● publicTo**: *`string` \| `null`*

*Defined in [git-api/api.ts:809](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L809)*

Filter CVEs based on their published date, up to the date.

*__type__*: {string}

*__memberof__*: MetaCves

___
<a id="sort"></a>

###  sort

**● sort**: *`string` \| `null`*

*Defined in [git-api/api.ts:767](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L767)*

Sorting filter.

*__type__*: {string}

*__memberof__*: MetaCves

___
<a id="statusid"></a>

###  statusId

**● statusId**: *`string` \| `null`*

*Defined in [git-api/api.ts:821](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L821)*

Filer based on CVE status ID.

*__type__*: {string}

*__memberof__*: MetaCves

___
<a id="totalitems"></a>

###  totalItems

**● totalItems**: *`number`*

*Defined in [git-api/api.ts:773](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L773)*

Total number of records.

*__type__*: {number}

*__memberof__*: MetaCves

___

