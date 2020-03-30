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

*Defined in [git-api/api.ts:913](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L913)*

Filter based on business risk IDs.

**`type`** {string}

**`memberof`** MetaCves

___

###  cvssFrom

• **cvssFrom**: *number | null*

*Defined in [git-api/api.ts:919](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L919)*

Filter based on cvss score, starting from the value.

**`type`** {number}

**`memberof`** MetaCves

___

###  cvssTo

• **cvssTo**: *number | null*

*Defined in [git-api/api.ts:925](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L925)*

Filter based on cvss score, up to the value.

**`type`** {number}

**`memberof`** MetaCves

___

###  dataFormat

• **dataFormat**: *string*

*Defined in [git-api/api.ts:907](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L907)*

Format of the output data, either JSON (default) or CSV.

**`type`** {string}

**`memberof`** MetaCves

___

###  filter

• **filter**: *string | null*

*Defined in [git-api/api.ts:859](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L859)*

Full text filter

**`type`** {string}

**`memberof`** MetaCves

___

###  impact

• **impact**: *string | null*

*Defined in [git-api/api.ts:943](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L943)*

Filter based on impact IDs.

**`type`** {string}

**`memberof`** MetaCves

___

###  limit

• **limit**: *number*

*Defined in [git-api/api.ts:865](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L865)*

Maximum number of paginated results.

**`type`** {number}

**`memberof`** MetaCves

___

###  offset

• **offset**: *number*

*Defined in [git-api/api.ts:871](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L871)*

First record of paginated response.

**`type`** {number}

**`memberof`** MetaCves

___

###  page

• **page**: *number*

*Defined in [git-api/api.ts:877](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L877)*

Page number of paginated response.

**`type`** {number}

**`memberof`** MetaCves

___

###  pageSize

• **pageSize**: *number*

*Defined in [git-api/api.ts:883](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L883)*

Number of records per page of paginated response.

**`type`** {number}

**`memberof`** MetaCves

___

###  pages

• **pages**: *number*

*Defined in [git-api/api.ts:889](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L889)*

Total number of pages of paginated response.

**`type`** {number}

**`memberof`** MetaCves

___

###  publicFrom

• **publicFrom**: *string | null*

*Defined in [git-api/api.ts:931](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L931)*

Filter CVEs based on their published date, starting from the date.

**`type`** {string}

**`memberof`** MetaCves

___

###  publicTo

• **publicTo**: *string | null*

*Defined in [git-api/api.ts:937](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L937)*

Filter CVEs based on their published date, up to the date.

**`type`** {string}

**`memberof`** MetaCves

___

###  sort

• **sort**: *string | null*

*Defined in [git-api/api.ts:895](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L895)*

Sorting filter.

**`type`** {string}

**`memberof`** MetaCves

___

###  statusId

• **statusId**: *string | null*

*Defined in [git-api/api.ts:949](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L949)*

Filer based on CVE status ID.

**`type`** {string}

**`memberof`** MetaCves

___

###  totalItems

• **totalItems**: *number*

*Defined in [git-api/api.ts:901](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L901)*

Total number of records.

**`type`** {number}

**`memberof`** MetaCves
