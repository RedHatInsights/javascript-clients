[@redhat-cloud-services/vulnerabilities-client](../README.md) › [Globals](../globals.md) › [MetaVulnerabilitiesOut](metavulnerabilitiesout.md)

# Interface: MetaVulnerabilitiesOut

**`export`** 

**`interface`** MetaVulnerabilitiesOut

## Hierarchy

* **MetaVulnerabilitiesOut**

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

## Properties

###  businessRiskId

• **businessRiskId**: *string | null*

*Defined in [api.ts:1127](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1127)*

Filter based on business risk IDs.

**`type`** {string}

**`memberof`** MetaVulnerabilitiesOut

___

###  cvssFrom

• **cvssFrom**: *number | null*

*Defined in [api.ts:1133](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1133)*

Filter based on cvss score, starting from the value.

**`type`** {number}

**`memberof`** MetaVulnerabilitiesOut

___

###  cvssTo

• **cvssTo**: *number | null*

*Defined in [api.ts:1139](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1139)*

Filter based on cvss score, up to the value.

**`type`** {number}

**`memberof`** MetaVulnerabilitiesOut

___

###  dataFormat

• **dataFormat**: *string*

*Defined in [api.ts:1121](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1121)*

Format of the output data, either JSON (default) or CSV.

**`type`** {string}

**`memberof`** MetaVulnerabilitiesOut

___

###  filter

• **filter**: *string | null*

*Defined in [api.ts:1073](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1073)*

Full text filter

**`type`** {string}

**`memberof`** MetaVulnerabilitiesOut

___

###  impact

• **impact**: *string | null*

*Defined in [api.ts:1163](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1163)*

Filter based on impact IDs.

**`type`** {string}

**`memberof`** MetaVulnerabilitiesOut

___

###  limit

• **limit**: *number*

*Defined in [api.ts:1079](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1079)*

Maximum number of paginated results.

**`type`** {number}

**`memberof`** MetaVulnerabilitiesOut

___

###  offset

• **offset**: *number*

*Defined in [api.ts:1085](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1085)*

First record of paginated response.

**`type`** {number}

**`memberof`** MetaVulnerabilitiesOut

___

###  page

• **page**: *number*

*Defined in [api.ts:1091](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1091)*

Page number of paginated response.

**`type`** {number}

**`memberof`** MetaVulnerabilitiesOut

___

###  pageSize

• **pageSize**: *number*

*Defined in [api.ts:1097](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1097)*

Number of records per page of paginated response.

**`type`** {number}

**`memberof`** MetaVulnerabilitiesOut

___

###  pages

• **pages**: *number*

*Defined in [api.ts:1103](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1103)*

Total number of pages of paginated response.

**`type`** {number}

**`memberof`** MetaVulnerabilitiesOut

___

###  publicFrom

• **publicFrom**: *string | null*

*Defined in [api.ts:1151](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1151)*

Filter CVEs based on their published date, starting from the date.

**`type`** {string}

**`memberof`** MetaVulnerabilitiesOut

___

###  publicTo

• **publicTo**: *string | null*

*Defined in [api.ts:1157](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1157)*

Filter CVEs based on their published date, up to the date.

**`type`** {string}

**`memberof`** MetaVulnerabilitiesOut

___

###  showAll

• **showAll**: *boolean | null*

*Defined in [api.ts:1145](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1145)*

Show all known vulnerabilities, regardless of number of affected systems.

**`type`** {boolean}

**`memberof`** MetaVulnerabilitiesOut

___

###  sort

• **sort**: *string | null*

*Defined in [api.ts:1109](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1109)*

Sorting filter.

**`type`** {string}

**`memberof`** MetaVulnerabilitiesOut

___

###  totalItems

• **totalItems**: *number*

*Defined in [api.ts:1115](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1115)*

Total number of records.

**`type`** {number}

**`memberof`** MetaVulnerabilitiesOut
