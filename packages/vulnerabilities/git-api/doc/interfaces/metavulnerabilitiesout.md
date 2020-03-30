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

*Defined in [git-api/api.ts:1195](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1195)*

Filter based on business risk IDs.

**`type`** {string}

**`memberof`** MetaVulnerabilitiesOut

___

###  cvssFrom

• **cvssFrom**: *number | null*

*Defined in [git-api/api.ts:1201](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1201)*

Filter based on cvss score, starting from the value.

**`type`** {number}

**`memberof`** MetaVulnerabilitiesOut

___

###  cvssTo

• **cvssTo**: *number | null*

*Defined in [git-api/api.ts:1207](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1207)*

Filter based on cvss score, up to the value.

**`type`** {number}

**`memberof`** MetaVulnerabilitiesOut

___

###  dataFormat

• **dataFormat**: *string*

*Defined in [git-api/api.ts:1189](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1189)*

Format of the output data, either JSON (default) or CSV.

**`type`** {string}

**`memberof`** MetaVulnerabilitiesOut

___

###  filter

• **filter**: *string | null*

*Defined in [git-api/api.ts:1141](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1141)*

Full text filter

**`type`** {string}

**`memberof`** MetaVulnerabilitiesOut

___

###  impact

• **impact**: *string | null*

*Defined in [git-api/api.ts:1231](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1231)*

Filter based on impact IDs.

**`type`** {string}

**`memberof`** MetaVulnerabilitiesOut

___

###  limit

• **limit**: *number*

*Defined in [git-api/api.ts:1147](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1147)*

Maximum number of paginated results.

**`type`** {number}

**`memberof`** MetaVulnerabilitiesOut

___

###  offset

• **offset**: *number*

*Defined in [git-api/api.ts:1153](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1153)*

First record of paginated response.

**`type`** {number}

**`memberof`** MetaVulnerabilitiesOut

___

###  page

• **page**: *number*

*Defined in [git-api/api.ts:1159](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1159)*

Page number of paginated response.

**`type`** {number}

**`memberof`** MetaVulnerabilitiesOut

___

###  pageSize

• **pageSize**: *number*

*Defined in [git-api/api.ts:1165](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1165)*

Number of records per page of paginated response.

**`type`** {number}

**`memberof`** MetaVulnerabilitiesOut

___

###  pages

• **pages**: *number*

*Defined in [git-api/api.ts:1171](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1171)*

Total number of pages of paginated response.

**`type`** {number}

**`memberof`** MetaVulnerabilitiesOut

___

###  publicFrom

• **publicFrom**: *string | null*

*Defined in [git-api/api.ts:1219](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1219)*

Filter CVEs based on their published date, starting from the date.

**`type`** {string}

**`memberof`** MetaVulnerabilitiesOut

___

###  publicTo

• **publicTo**: *string | null*

*Defined in [git-api/api.ts:1225](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1225)*

Filter CVEs based on their published date, up to the date.

**`type`** {string}

**`memberof`** MetaVulnerabilitiesOut

___

###  showAll

• **showAll**: *boolean | null*

*Defined in [git-api/api.ts:1213](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1213)*

Show all known vulnerabilities, regardless of number of affected systems.

**`type`** {boolean}

**`memberof`** MetaVulnerabilitiesOut

___

###  sort

• **sort**: *string | null*

*Defined in [git-api/api.ts:1177](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1177)*

Sorting filter.

**`type`** {string}

**`memberof`** MetaVulnerabilitiesOut

___

###  totalItems

• **totalItems**: *number*

*Defined in [git-api/api.ts:1183](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1183)*

Total number of records.

**`type`** {number}

**`memberof`** MetaVulnerabilitiesOut
