[@redhat-cloud-services/vulnerabilities-client](../README.md) › [Globals](../globals.md) › [MetaCves](metacves.md)

# Interface: MetaCves

**`export`** 

**`interface`** MetaCves

## Hierarchy

* **MetaCves**

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

## Properties

###  businessRiskId

• **businessRiskId**: *string | null*

*Defined in [git-api/api.ts:851](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L851)*

Filter based on business risk IDs.

**`type`** {string}

**`memberof`** MetaCves

___

###  cvssFrom

• **cvssFrom**: *number | null*

*Defined in [git-api/api.ts:857](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L857)*

Filter based on cvss score, starting from the value.

**`type`** {number}

**`memberof`** MetaCves

___

###  cvssTo

• **cvssTo**: *number | null*

*Defined in [git-api/api.ts:863](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L863)*

Filter based on cvss score, up to the value.

**`type`** {number}

**`memberof`** MetaCves

___

###  dataFormat

• **dataFormat**: *string*

*Defined in [git-api/api.ts:845](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L845)*

Format of the output data, either JSON (default) or CSV.

**`type`** {string}

**`memberof`** MetaCves

___

###  filter

• **filter**: *string | null*

*Defined in [git-api/api.ts:797](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L797)*

Full text filter

**`type`** {string}

**`memberof`** MetaCves

___

###  impact

• **impact**: *string | null*

*Defined in [git-api/api.ts:881](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L881)*

Filter based on impact IDs.

**`type`** {string}

**`memberof`** MetaCves

___

###  limit

• **limit**: *number*

*Defined in [git-api/api.ts:803](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L803)*

Maximum number of paginated results.

**`type`** {number}

**`memberof`** MetaCves

___

###  offset

• **offset**: *number*

*Defined in [git-api/api.ts:809](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L809)*

First record of paginated response.

**`type`** {number}

**`memberof`** MetaCves

___

###  page

• **page**: *number*

*Defined in [git-api/api.ts:815](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L815)*

Page number of paginated response.

**`type`** {number}

**`memberof`** MetaCves

___

###  pageSize

• **pageSize**: *number*

*Defined in [git-api/api.ts:821](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L821)*

Number of records per page of paginated response.

**`type`** {number}

**`memberof`** MetaCves

___

###  pages

• **pages**: *number*

*Defined in [git-api/api.ts:827](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L827)*

Total number of pages of paginated response.

**`type`** {number}

**`memberof`** MetaCves

___

###  publicFrom

• **publicFrom**: *string | null*

*Defined in [git-api/api.ts:869](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L869)*

Filter CVEs based on their published date, starting from the date.

**`type`** {string}

**`memberof`** MetaCves

___

###  publicTo

• **publicTo**: *string | null*

*Defined in [git-api/api.ts:875](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L875)*

Filter CVEs based on their published date, up to the date.

**`type`** {string}

**`memberof`** MetaCves

___

###  sort

• **sort**: *string | null*

*Defined in [git-api/api.ts:833](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L833)*

Sorting filter.

**`type`** {string}

**`memberof`** MetaCves

___

###  statusId

• **statusId**: *string | null*

*Defined in [git-api/api.ts:887](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L887)*

Filer based on CVE status ID.

**`type`** {string}

**`memberof`** MetaCves

___

###  totalItems

• **totalItems**: *number*

*Defined in [git-api/api.ts:839](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L839)*

Total number of records.

**`type`** {number}

**`memberof`** MetaCves
