[@redhat-cloud-services/vulnerabilities-client](../README.md) > [MetaVulnerabilitiesOut](../interfaces/metavulnerabilitiesout.md)

# Interface: MetaVulnerabilitiesOut

*__export__*: 

*__interface__*: MetaVulnerabilitiesOut

## Hierarchy

**MetaVulnerabilitiesOut**

## Index

### Properties

* [cvssFrom](metavulnerabilitiesout.md#cvssfrom)
* [cvssTo](metavulnerabilitiesout.md#cvssto)
* [dataFormat](metavulnerabilitiesout.md#dataformat)
* [filter](metavulnerabilitiesout.md#filter)
* [limit](metavulnerabilitiesout.md#limit)
* [offset](metavulnerabilitiesout.md#offset)
* [page](metavulnerabilitiesout.md#page)
* [pageSize](metavulnerabilitiesout.md#pagesize)
* [pages](metavulnerabilitiesout.md#pages)
* [publicFrom](metavulnerabilitiesout.md#publicfrom)
* [publicTo](metavulnerabilitiesout.md#publicto)
* [severity](metavulnerabilitiesout.md#severity)
* [showAll](metavulnerabilitiesout.md#showall)
* [sort](metavulnerabilitiesout.md#sort)
* [totalItems](metavulnerabilitiesout.md#totalitems)

---

## Properties

<a id="cvssfrom"></a>

###  cvssFrom

**● cvssFrom**: *`number` \| `null`*

*Defined in [api.ts:657](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L657)*

Filter based on cvss score, starting from the value.

*__type__*: {number}

*__memberof__*: MetaVulnerabilitiesOut

___
<a id="cvssto"></a>

###  cvssTo

**● cvssTo**: *`number` \| `null`*

*Defined in [api.ts:663](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L663)*

Filter based on cvss score, up to the value.

*__type__*: {number}

*__memberof__*: MetaVulnerabilitiesOut

___
<a id="dataformat"></a>

###  dataFormat

**● dataFormat**: *`string`*

*Defined in [api.ts:651](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L651)*

Format of the output data, either JSON (default) or CSV.

*__type__*: {string}

*__memberof__*: MetaVulnerabilitiesOut

___
<a id="filter"></a>

###  filter

**● filter**: *`string` \| `null`*

*Defined in [api.ts:603](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L603)*

Full text filter

*__type__*: {string}

*__memberof__*: MetaVulnerabilitiesOut

___
<a id="limit"></a>

###  limit

**● limit**: *`number`*

*Defined in [api.ts:609](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L609)*

Maximum number of paginated results.

*__type__*: {number}

*__memberof__*: MetaVulnerabilitiesOut

___
<a id="offset"></a>

###  offset

**● offset**: *`number`*

*Defined in [api.ts:615](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L615)*

First record of paginated response.

*__type__*: {number}

*__memberof__*: MetaVulnerabilitiesOut

___
<a id="page"></a>

###  page

**● page**: *`number`*

*Defined in [api.ts:621](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L621)*

Page number of paginated response.

*__type__*: {number}

*__memberof__*: MetaVulnerabilitiesOut

___
<a id="pagesize"></a>

###  pageSize

**● pageSize**: *`number`*

*Defined in [api.ts:627](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L627)*

Number of records per page of paginated response.

*__type__*: {number}

*__memberof__*: MetaVulnerabilitiesOut

___
<a id="pages"></a>

###  pages

**● pages**: *`number`*

*Defined in [api.ts:633](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L633)*

Total number of pages of paginated response.

*__type__*: {number}

*__memberof__*: MetaVulnerabilitiesOut

___
<a id="publicfrom"></a>

###  publicFrom

**● publicFrom**: *`string` \| `null`*

*Defined in [api.ts:675](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L675)*

Filter CVEs based on their published date, starting from the date.

*__type__*: {string}

*__memberof__*: MetaVulnerabilitiesOut

___
<a id="publicto"></a>

###  publicTo

**● publicTo**: *`string` \| `null`*

*Defined in [api.ts:681](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L681)*

Filter CVEs based on their published date, up to the date.

*__type__*: {string}

*__memberof__*: MetaVulnerabilitiesOut

___
<a id="severity"></a>

###  severity

**● severity**: *`string` \| `null`*

*Defined in [api.ts:687](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L687)*

Filter based on severity IDs.

*__type__*: {string}

*__memberof__*: MetaVulnerabilitiesOut

___
<a id="showall"></a>

###  showAll

**● showAll**: *`boolean` \| `null`*

*Defined in [api.ts:669](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L669)*

Show all known vulnerabilities, regardless of number of affected systems.

*__type__*: {boolean}

*__memberof__*: MetaVulnerabilitiesOut

___
<a id="sort"></a>

###  sort

**● sort**: *`string` \| `null`*

*Defined in [api.ts:639](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L639)*

Sorting filter.

*__type__*: {string}

*__memberof__*: MetaVulnerabilitiesOut

___
<a id="totalitems"></a>

###  totalItems

**● totalItems**: *`number`*

*Defined in [api.ts:645](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L645)*

Total number of records.

*__type__*: {number}

*__memberof__*: MetaVulnerabilitiesOut

___

