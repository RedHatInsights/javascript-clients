[@redhat-cloud-services/vulnerabilities-client](../README.md) > [MetaVulnerabilitiesOut](../interfaces/metavulnerabilitiesout.md)

# Interface: MetaVulnerabilitiesOut

*__export__*: 

*__interface__*: MetaVulnerabilitiesOut

## Hierarchy

**MetaVulnerabilitiesOut**

## Index

### Properties

* [businessRiskId](metavulnerabilitiesout.md#businessriskid)
* [cvssFrom](metavulnerabilitiesout.md#cvssfrom)
* [cvssTo](metavulnerabilitiesout.md#cvssto)
* [dataFormat](metavulnerabilitiesout.md#dataformat)
* [filter](metavulnerabilitiesout.md#filter)
* [impact](metavulnerabilitiesout.md#impact)
* [limit](metavulnerabilitiesout.md#limit)
* [offset](metavulnerabilitiesout.md#offset)
* [page](metavulnerabilitiesout.md#page)
* [pageSize](metavulnerabilitiesout.md#pagesize)
* [pages](metavulnerabilitiesout.md#pages)
* [publicFrom](metavulnerabilitiesout.md#publicfrom)
* [publicTo](metavulnerabilitiesout.md#publicto)
* [showAll](metavulnerabilitiesout.md#showall)
* [sort](metavulnerabilitiesout.md#sort)
* [totalItems](metavulnerabilitiesout.md#totalitems)

---

## Properties

<a id="businessriskid"></a>

###  businessRiskId

**● businessRiskId**: *`string` \| `null`*

*Defined in [git-api/api.ts:1127](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1127)*

Filter based on business risk IDs.

*__type__*: {string}

*__memberof__*: MetaVulnerabilitiesOut

___
<a id="cvssfrom"></a>

###  cvssFrom

**● cvssFrom**: *`number` \| `null`*

*Defined in [git-api/api.ts:1133](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1133)*

Filter based on cvss score, starting from the value.

*__type__*: {number}

*__memberof__*: MetaVulnerabilitiesOut

___
<a id="cvssto"></a>

###  cvssTo

**● cvssTo**: *`number` \| `null`*

*Defined in [git-api/api.ts:1139](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1139)*

Filter based on cvss score, up to the value.

*__type__*: {number}

*__memberof__*: MetaVulnerabilitiesOut

___
<a id="dataformat"></a>

###  dataFormat

**● dataFormat**: *`string`*

*Defined in [git-api/api.ts:1121](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1121)*

Format of the output data, either JSON (default) or CSV.

*__type__*: {string}

*__memberof__*: MetaVulnerabilitiesOut

___
<a id="filter"></a>

###  filter

**● filter**: *`string` \| `null`*

*Defined in [git-api/api.ts:1073](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1073)*

Full text filter

*__type__*: {string}

*__memberof__*: MetaVulnerabilitiesOut

___
<a id="impact"></a>

###  impact

**● impact**: *`string` \| `null`*

*Defined in [git-api/api.ts:1163](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1163)*

Filter based on impact IDs.

*__type__*: {string}

*__memberof__*: MetaVulnerabilitiesOut

___
<a id="limit"></a>

###  limit

**● limit**: *`number`*

*Defined in [git-api/api.ts:1079](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1079)*

Maximum number of paginated results.

*__type__*: {number}

*__memberof__*: MetaVulnerabilitiesOut

___
<a id="offset"></a>

###  offset

**● offset**: *`number`*

*Defined in [git-api/api.ts:1085](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1085)*

First record of paginated response.

*__type__*: {number}

*__memberof__*: MetaVulnerabilitiesOut

___
<a id="page"></a>

###  page

**● page**: *`number`*

*Defined in [git-api/api.ts:1091](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1091)*

Page number of paginated response.

*__type__*: {number}

*__memberof__*: MetaVulnerabilitiesOut

___
<a id="pagesize"></a>

###  pageSize

**● pageSize**: *`number`*

*Defined in [git-api/api.ts:1097](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1097)*

Number of records per page of paginated response.

*__type__*: {number}

*__memberof__*: MetaVulnerabilitiesOut

___
<a id="pages"></a>

###  pages

**● pages**: *`number`*

*Defined in [git-api/api.ts:1103](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1103)*

Total number of pages of paginated response.

*__type__*: {number}

*__memberof__*: MetaVulnerabilitiesOut

___
<a id="publicfrom"></a>

###  publicFrom

**● publicFrom**: *`string` \| `null`*

*Defined in [git-api/api.ts:1151](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1151)*

Filter CVEs based on their published date, starting from the date.

*__type__*: {string}

*__memberof__*: MetaVulnerabilitiesOut

___
<a id="publicto"></a>

###  publicTo

**● publicTo**: *`string` \| `null`*

*Defined in [git-api/api.ts:1157](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1157)*

Filter CVEs based on their published date, up to the date.

*__type__*: {string}

*__memberof__*: MetaVulnerabilitiesOut

___
<a id="showall"></a>

###  showAll

**● showAll**: *`boolean` \| `null`*

*Defined in [git-api/api.ts:1145](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1145)*

Show all known vulnerabilities, regardless of number of affected systems.

*__type__*: {boolean}

*__memberof__*: MetaVulnerabilitiesOut

___
<a id="sort"></a>

###  sort

**● sort**: *`string` \| `null`*

*Defined in [git-api/api.ts:1109](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1109)*

Sorting filter.

*__type__*: {string}

*__memberof__*: MetaVulnerabilitiesOut

___
<a id="totalitems"></a>

###  totalItems

**● totalItems**: *`number`*

*Defined in [git-api/api.ts:1115](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1115)*

Total number of records.

*__type__*: {number}

*__memberof__*: MetaVulnerabilitiesOut

___

