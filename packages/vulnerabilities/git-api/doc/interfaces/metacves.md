[@redhat-cloud-services/vulnerabilities-client](../README.md) > [MetaCves](../interfaces/metacves.md)

# Interface: MetaCves

*__export__*: 

*__interface__*: MetaCves

## Hierarchy

**MetaCves**

## Index

### Properties

* [cvssFrom](metacves.md#cvssfrom)
* [cvssTo](metacves.md#cvssto)
* [dataFormat](metacves.md#dataformat)
* [filter](metacves.md#filter)
* [limit](metacves.md#limit)
* [offset](metacves.md#offset)
* [page](metacves.md#page)
* [pageSize](metacves.md#pagesize)
* [pages](metacves.md#pages)
* [publicFrom](metacves.md#publicfrom)
* [publicTo](metacves.md#publicto)
* [severity](metacves.md#severity)
* [sort](metacves.md#sort)
* [statusId](metacves.md#statusid)
* [totalItems](metacves.md#totalitems)

---

## Properties

<a id="cvssfrom"></a>

###  cvssFrom

**● cvssFrom**: *`number` \| `null`*

*Defined in [api.ts:491](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L491)*

Filter based on cvss score, starting from the value.

*__type__*: {number}

*__memberof__*: MetaCves

___
<a id="cvssto"></a>

###  cvssTo

**● cvssTo**: *`number` \| `null`*

*Defined in [api.ts:497](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L497)*

Filter based on cvss score, up to the value.

*__type__*: {number}

*__memberof__*: MetaCves

___
<a id="dataformat"></a>

###  dataFormat

**● dataFormat**: *`string`*

*Defined in [api.ts:485](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L485)*

Format of the output data, either JSON (default) or CSV.

*__type__*: {string}

*__memberof__*: MetaCves

___
<a id="filter"></a>

###  filter

**● filter**: *`string` \| `null`*

*Defined in [api.ts:437](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L437)*

Full text filter

*__type__*: {string}

*__memberof__*: MetaCves

___
<a id="limit"></a>

###  limit

**● limit**: *`number`*

*Defined in [api.ts:443](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L443)*

Maximum number of paginated results.

*__type__*: {number}

*__memberof__*: MetaCves

___
<a id="offset"></a>

###  offset

**● offset**: *`number`*

*Defined in [api.ts:449](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L449)*

First record of paginated response.

*__type__*: {number}

*__memberof__*: MetaCves

___
<a id="page"></a>

###  page

**● page**: *`number`*

*Defined in [api.ts:455](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L455)*

Page number of paginated response.

*__type__*: {number}

*__memberof__*: MetaCves

___
<a id="pagesize"></a>

###  pageSize

**● pageSize**: *`number`*

*Defined in [api.ts:461](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L461)*

Number of records per page of paginated response.

*__type__*: {number}

*__memberof__*: MetaCves

___
<a id="pages"></a>

###  pages

**● pages**: *`number`*

*Defined in [api.ts:467](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L467)*

Total number of pages of paginated response.

*__type__*: {number}

*__memberof__*: MetaCves

___
<a id="publicfrom"></a>

###  publicFrom

**● publicFrom**: *`string` \| `null`*

*Defined in [api.ts:503](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L503)*

Filter CVEs based on their published date, starting from the date.

*__type__*: {string}

*__memberof__*: MetaCves

___
<a id="publicto"></a>

###  publicTo

**● publicTo**: *`string` \| `null`*

*Defined in [api.ts:509](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L509)*

Filter CVEs based on their published date, up to the date.

*__type__*: {string}

*__memberof__*: MetaCves

___
<a id="severity"></a>

### `<Optional>` severity

**● severity**: *`string` \| `null`*

*Defined in [api.ts:515](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L515)*

Filter based on severity IDs.

*__type__*: {string}

*__memberof__*: MetaCves

___
<a id="sort"></a>

###  sort

**● sort**: *`string` \| `null`*

*Defined in [api.ts:473](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L473)*

Sorting filter.

*__type__*: {string}

*__memberof__*: MetaCves

___
<a id="statusid"></a>

###  statusId

**● statusId**: *`string` \| `null`*

*Defined in [api.ts:521](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L521)*

Filer based on CVE status ID.

*__type__*: {string}

*__memberof__*: MetaCves

___
<a id="totalitems"></a>

###  totalItems

**● totalItems**: *`number`*

*Defined in [api.ts:479](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L479)*

Total number of records.

*__type__*: {number}

*__memberof__*: MetaCves

___

