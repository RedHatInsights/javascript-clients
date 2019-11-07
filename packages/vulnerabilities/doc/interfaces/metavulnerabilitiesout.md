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

*Defined in [api.ts:939](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L939)*

Filter based on business risk IDs.

*__type__*: {string}

*__memberof__*: MetaVulnerabilitiesOut

___
<a id="cvssfrom"></a>

###  cvssFrom

**● cvssFrom**: *`number` \| `null`*

*Defined in [api.ts:945](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L945)*

Filter based on cvss score, starting from the value.

*__type__*: {number}

*__memberof__*: MetaVulnerabilitiesOut

___
<a id="cvssto"></a>

###  cvssTo

**● cvssTo**: *`number` \| `null`*

*Defined in [api.ts:951](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L951)*

Filter based on cvss score, up to the value.

*__type__*: {number}

*__memberof__*: MetaVulnerabilitiesOut

___
<a id="dataformat"></a>

###  dataFormat

**● dataFormat**: *`string`*

*Defined in [api.ts:933](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L933)*

Format of the output data, either JSON (default) or CSV.

*__type__*: {string}

*__memberof__*: MetaVulnerabilitiesOut

___
<a id="filter"></a>

###  filter

**● filter**: *`string` \| `null`*

*Defined in [api.ts:885](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L885)*

Full text filter

*__type__*: {string}

*__memberof__*: MetaVulnerabilitiesOut

___
<a id="impact"></a>

###  impact

**● impact**: *`string` \| `null`*

*Defined in [api.ts:975](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L975)*

Filter based on impact IDs.

*__type__*: {string}

*__memberof__*: MetaVulnerabilitiesOut

___
<a id="limit"></a>

###  limit

**● limit**: *`number`*

*Defined in [api.ts:891](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L891)*

Maximum number of paginated results.

*__type__*: {number}

*__memberof__*: MetaVulnerabilitiesOut

___
<a id="offset"></a>

###  offset

**● offset**: *`number`*

*Defined in [api.ts:897](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L897)*

First record of paginated response.

*__type__*: {number}

*__memberof__*: MetaVulnerabilitiesOut

___
<a id="page"></a>

###  page

**● page**: *`number`*

*Defined in [api.ts:903](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L903)*

Page number of paginated response.

*__type__*: {number}

*__memberof__*: MetaVulnerabilitiesOut

___
<a id="pagesize"></a>

###  pageSize

**● pageSize**: *`number`*

*Defined in [api.ts:909](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L909)*

Number of records per page of paginated response.

*__type__*: {number}

*__memberof__*: MetaVulnerabilitiesOut

___
<a id="pages"></a>

###  pages

**● pages**: *`number`*

*Defined in [api.ts:915](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L915)*

Total number of pages of paginated response.

*__type__*: {number}

*__memberof__*: MetaVulnerabilitiesOut

___
<a id="publicfrom"></a>

###  publicFrom

**● publicFrom**: *`string` \| `null`*

*Defined in [api.ts:963](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L963)*

Filter CVEs based on their published date, starting from the date.

*__type__*: {string}

*__memberof__*: MetaVulnerabilitiesOut

___
<a id="publicto"></a>

###  publicTo

**● publicTo**: *`string` \| `null`*

*Defined in [api.ts:969](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L969)*

Filter CVEs based on their published date, up to the date.

*__type__*: {string}

*__memberof__*: MetaVulnerabilitiesOut

___
<a id="showall"></a>

###  showAll

**● showAll**: *`boolean` \| `null`*

*Defined in [api.ts:957](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L957)*

Show all known vulnerabilities, regardless of number of affected systems.

*__type__*: {boolean}

*__memberof__*: MetaVulnerabilitiesOut

___
<a id="sort"></a>

###  sort

**● sort**: *`string` \| `null`*

*Defined in [api.ts:921](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L921)*

Sorting filter.

*__type__*: {string}

*__memberof__*: MetaVulnerabilitiesOut

___
<a id="totalitems"></a>

###  totalItems

**● totalItems**: *`number`*

*Defined in [api.ts:927](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L927)*

Total number of records.

*__type__*: {number}

*__memberof__*: MetaVulnerabilitiesOut

___

