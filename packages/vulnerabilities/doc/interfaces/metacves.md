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

<a id="cvssfrom"></a>

###  cvssFrom

**● cvssFrom**: *`number` \| `null`*

*Defined in [api.ts:513](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L513)*

Filter based on cvss score, starting from the value.

*__type__*: {number}

*__memberof__*: MetaCves

___
<a id="cvssto"></a>

###  cvssTo

**● cvssTo**: *`number` \| `null`*

*Defined in [api.ts:519](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L519)*

Filter based on cvss score, up to the value.

*__type__*: {number}

*__memberof__*: MetaCves

___
<a id="dataformat"></a>

###  dataFormat

**● dataFormat**: *`string`*

*Defined in [api.ts:507](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L507)*

Format of the output data, either JSON (default) or CSV.

*__type__*: {string}

*__memberof__*: MetaCves

___
<a id="filter"></a>

###  filter

**● filter**: *`string` \| `null`*

*Defined in [api.ts:459](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L459)*

Full text filter

*__type__*: {string}

*__memberof__*: MetaCves

___
<a id="impact"></a>

### `<Optional>` impact

**● impact**: *`string` \| `null`*

*Defined in [api.ts:537](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L537)*

Filter based on impact IDs.

*__type__*: {string}

*__memberof__*: MetaCves

___
<a id="limit"></a>

###  limit

**● limit**: *`number`*

*Defined in [api.ts:465](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L465)*

Maximum number of paginated results.

*__type__*: {number}

*__memberof__*: MetaCves

___
<a id="offset"></a>

###  offset

**● offset**: *`number`*

*Defined in [api.ts:471](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L471)*

First record of paginated response.

*__type__*: {number}

*__memberof__*: MetaCves

___
<a id="page"></a>

###  page

**● page**: *`number`*

*Defined in [api.ts:477](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L477)*

Page number of paginated response.

*__type__*: {number}

*__memberof__*: MetaCves

___
<a id="pagesize"></a>

###  pageSize

**● pageSize**: *`number`*

*Defined in [api.ts:483](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L483)*

Number of records per page of paginated response.

*__type__*: {number}

*__memberof__*: MetaCves

___
<a id="pages"></a>

###  pages

**● pages**: *`number`*

*Defined in [api.ts:489](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L489)*

Total number of pages of paginated response.

*__type__*: {number}

*__memberof__*: MetaCves

___
<a id="publicfrom"></a>

###  publicFrom

**● publicFrom**: *`string` \| `null`*

*Defined in [api.ts:525](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L525)*

Filter CVEs based on their published date, starting from the date.

*__type__*: {string}

*__memberof__*: MetaCves

___
<a id="publicto"></a>

###  publicTo

**● publicTo**: *`string` \| `null`*

*Defined in [api.ts:531](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L531)*

Filter CVEs based on their published date, up to the date.

*__type__*: {string}

*__memberof__*: MetaCves

___
<a id="sort"></a>

###  sort

**● sort**: *`string` \| `null`*

*Defined in [api.ts:495](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L495)*

Sorting filter.

*__type__*: {string}

*__memberof__*: MetaCves

___
<a id="statusid"></a>

###  statusId

**● statusId**: *`string` \| `null`*

*Defined in [api.ts:543](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L543)*

Filer based on CVE status ID.

*__type__*: {string}

*__memberof__*: MetaCves

___
<a id="totalitems"></a>

###  totalItems

**● totalItems**: *`number`*

*Defined in [api.ts:501](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L501)*

Total number of records.

*__type__*: {number}

*__memberof__*: MetaCves

___

