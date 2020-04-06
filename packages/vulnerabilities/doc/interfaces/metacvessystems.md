[@redhat-cloud-services/vulnerabilities-client](../README.md) › [Globals](../globals.md) › [MetaCvesSystems](metacvessystems.md)

# Interface: MetaCvesSystems

**`export`** 

**`interface`** MetaCvesSystems

## Hierarchy

* **MetaCvesSystems**

## Index

### Properties

* [businessRiskId](metacvessystems.md#businessriskid)
* [cvssFrom](metacvessystems.md#cvssfrom)
* [cvssTo](metacvessystems.md#cvssto)
* [dataFormat](metacvessystems.md#dataformat)
* [filter](metacvessystems.md#filter)
* [impact](metacvessystems.md#impact)
* [limit](metacvessystems.md#limit)
* [offset](metacvessystems.md#offset)
* [optOut](metacvessystems.md#optout)
* [page](metacvessystems.md#page)
* [pageSize](metacvessystems.md#pagesize)
* [pages](metacvessystems.md#pages)
* [publicFrom](metacvessystems.md#publicfrom)
* [publicTo](metacvessystems.md#publicto)
* [sort](metacvessystems.md#sort)
* [statusId](metacvessystems.md#statusid)
* [totalItems](metacvessystems.md#totalitems)

## Properties

###  businessRiskId

• **businessRiskId**: *string | null*

*Defined in [api.ts:1017](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1017)*

Filter based on business risk IDs.

**`type`** {string}

**`memberof`** MetaCvesSystems

___

###  cvssFrom

• **cvssFrom**: *number | null*

*Defined in [api.ts:1023](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1023)*

Filter based on cvss score, starting from the value.

**`type`** {number}

**`memberof`** MetaCvesSystems

___

###  cvssTo

• **cvssTo**: *number | null*

*Defined in [api.ts:1029](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1029)*

Filter based on cvss score, up to the value.

**`type`** {number}

**`memberof`** MetaCvesSystems

___

###  dataFormat

• **dataFormat**: *string*

*Defined in [api.ts:1011](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1011)*

Format of the output data, either JSON (default) or CSV.

**`type`** {string}

**`memberof`** MetaCvesSystems

___

###  filter

• **filter**: *string | null*

*Defined in [api.ts:963](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L963)*

Full text filter

**`type`** {string}

**`memberof`** MetaCvesSystems

___

###  impact

• **impact**: *string | null*

*Defined in [api.ts:1047](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1047)*

Filter based on impact IDs.

**`type`** {string}

**`memberof`** MetaCvesSystems

___

###  limit

• **limit**: *number*

*Defined in [api.ts:969](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L969)*

Maximum number of paginated results.

**`type`** {number}

**`memberof`** MetaCvesSystems

___

###  offset

• **offset**: *number*

*Defined in [api.ts:975](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L975)*

First record of paginated response.

**`type`** {number}

**`memberof`** MetaCvesSystems

___

###  optOut

• **optOut**: *boolean*

*Defined in [api.ts:1059](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1059)*

If given system was opted out.

**`type`** {boolean}

**`memberof`** MetaCvesSystems

___

###  page

• **page**: *number*

*Defined in [api.ts:981](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L981)*

Page number of paginated response.

**`type`** {number}

**`memberof`** MetaCvesSystems

___

###  pageSize

• **pageSize**: *number*

*Defined in [api.ts:987](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L987)*

Number of records per page of paginated response.

**`type`** {number}

**`memberof`** MetaCvesSystems

___

###  pages

• **pages**: *number*

*Defined in [api.ts:993](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L993)*

Total number of pages of paginated response.

**`type`** {number}

**`memberof`** MetaCvesSystems

___

###  publicFrom

• **publicFrom**: *string | null*

*Defined in [api.ts:1035](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1035)*

Filter CVEs based on their published date, starting from the date.

**`type`** {string}

**`memberof`** MetaCvesSystems

___

###  publicTo

• **publicTo**: *string | null*

*Defined in [api.ts:1041](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1041)*

Filter CVEs based on their published date, up to the date.

**`type`** {string}

**`memberof`** MetaCvesSystems

___

###  sort

• **sort**: *string | null*

*Defined in [api.ts:999](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L999)*

Sorting filter.

**`type`** {string}

**`memberof`** MetaCvesSystems

___

###  statusId

• **statusId**: *string | null*

*Defined in [api.ts:1053](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1053)*

Filer based on CVE status ID.

**`type`** {string}

**`memberof`** MetaCvesSystems

___

###  totalItems

• **totalItems**: *number*

*Defined in [api.ts:1005](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1005)*

Total number of records.

**`type`** {number}

**`memberof`** MetaCvesSystems
