[@redhat-cloud-services/vulnerabilities-client](../README.md) > [MetaCves](../interfaces/metacves.md)

# Interface: MetaCves

*__export__*: 

*__interface__*: MetaCves

## Hierarchy

**MetaCves**

## Index

### Properties

* [businessRisk](metacves.md#businessrisk)
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

<a id="businessrisk"></a>

### `<Optional>` businessRisk

**● businessRisk**: *`string` \| `null`*

*Defined in [api.ts:619](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L619)*

Filter based on business risk IDs.

*__type__*: {string}

*__memberof__*: MetaCves

___
<a id="cvssfrom"></a>

###  cvssFrom

**● cvssFrom**: *`number` \| `null`*

*Defined in [api.ts:625](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L625)*

Filter based on cvss score, starting from the value.

*__type__*: {number}

*__memberof__*: MetaCves

___
<a id="cvssto"></a>

###  cvssTo

**● cvssTo**: *`number` \| `null`*

*Defined in [api.ts:631](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L631)*

Filter based on cvss score, up to the value.

*__type__*: {number}

*__memberof__*: MetaCves

___
<a id="dataformat"></a>

###  dataFormat

**● dataFormat**: *`string`*

*Defined in [api.ts:613](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L613)*

Format of the output data, either JSON (default) or CSV.

*__type__*: {string}

*__memberof__*: MetaCves

___
<a id="filter"></a>

###  filter

**● filter**: *`string` \| `null`*

*Defined in [api.ts:565](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L565)*

Full text filter

*__type__*: {string}

*__memberof__*: MetaCves

___
<a id="impact"></a>

### `<Optional>` impact

**● impact**: *`string` \| `null`*

*Defined in [api.ts:649](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L649)*

Filter based on impact IDs.

*__type__*: {string}

*__memberof__*: MetaCves

___
<a id="limit"></a>

###  limit

**● limit**: *`number`*

*Defined in [api.ts:571](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L571)*

Maximum number of paginated results.

*__type__*: {number}

*__memberof__*: MetaCves

___
<a id="offset"></a>

###  offset

**● offset**: *`number`*

*Defined in [api.ts:577](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L577)*

First record of paginated response.

*__type__*: {number}

*__memberof__*: MetaCves

___
<a id="page"></a>

###  page

**● page**: *`number`*

*Defined in [api.ts:583](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L583)*

Page number of paginated response.

*__type__*: {number}

*__memberof__*: MetaCves

___
<a id="pagesize"></a>

###  pageSize

**● pageSize**: *`number`*

*Defined in [api.ts:589](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L589)*

Number of records per page of paginated response.

*__type__*: {number}

*__memberof__*: MetaCves

___
<a id="pages"></a>

###  pages

**● pages**: *`number`*

*Defined in [api.ts:595](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L595)*

Total number of pages of paginated response.

*__type__*: {number}

*__memberof__*: MetaCves

___
<a id="publicfrom"></a>

###  publicFrom

**● publicFrom**: *`string` \| `null`*

*Defined in [api.ts:637](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L637)*

Filter CVEs based on their published date, starting from the date.

*__type__*: {string}

*__memberof__*: MetaCves

___
<a id="publicto"></a>

###  publicTo

**● publicTo**: *`string` \| `null`*

*Defined in [api.ts:643](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L643)*

Filter CVEs based on their published date, up to the date.

*__type__*: {string}

*__memberof__*: MetaCves

___
<a id="sort"></a>

###  sort

**● sort**: *`string` \| `null`*

*Defined in [api.ts:601](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L601)*

Sorting filter.

*__type__*: {string}

*__memberof__*: MetaCves

___
<a id="statusid"></a>

###  statusId

**● statusId**: *`string` \| `null`*

*Defined in [api.ts:655](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L655)*

Filer based on CVE status ID.

*__type__*: {string}

*__memberof__*: MetaCves

___
<a id="totalitems"></a>

###  totalItems

**● totalItems**: *`number`*

*Defined in [api.ts:607](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L607)*

Total number of records.

*__type__*: {number}

*__memberof__*: MetaCves

___

