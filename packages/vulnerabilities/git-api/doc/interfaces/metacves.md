[@redhat-cloud-services/vulnerabilities-client](../README.md) › [Globals](../globals.md) › [MetaCves](metacves.md)

# Interface: MetaCves

**`export`** 

**`interface`** MetaCves

## Hierarchy

* **MetaCves**

## Index

### Properties

* [business_risk_id](metacves.md#business_risk_id)
* [cvss_from](metacves.md#cvss_from)
* [cvss_to](metacves.md#cvss_to)
* [data_format](metacves.md#data_format)
* [filter](metacves.md#filter)
* [impact](metacves.md#impact)
* [limit](metacves.md#limit)
* [offset](metacves.md#offset)
* [page](metacves.md#page)
* [page_size](metacves.md#page_size)
* [pages](metacves.md#pages)
* [patch_access](metacves.md#patch_access)
* [public_from](metacves.md#public_from)
* [public_to](metacves.md#public_to)
* [rule_presence](metacves.md#rule_presence)
* [sort](metacves.md#sort)
* [status_id](metacves.md#status_id)
* [total_items](metacves.md#total_items)

## Properties

###  business_risk_id

• **business_risk_id**: *string | null*

*Defined in [packages/vulnerabilities/git-api/api.ts:1174](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1174)*

Filter based on business risk IDs.

**`memberof`** MetaCves

___

###  cvss_from

• **cvss_from**: *number | null*

*Defined in [packages/vulnerabilities/git-api/api.ts:1180](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1180)*

Filter based on cvss score, starting from the value. Use -1 to include also CVEs with N/A cvss score.

**`memberof`** MetaCves

___

###  cvss_to

• **cvss_to**: *number | null*

*Defined in [packages/vulnerabilities/git-api/api.ts:1186](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1186)*

Filter based on cvss score, up to the value.

**`memberof`** MetaCves

___

###  data_format

• **data_format**: *string*

*Defined in [packages/vulnerabilities/git-api/api.ts:1168](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1168)*

Format of the output data, either JSON (default) or CSV.

**`memberof`** MetaCves

___

###  filter

• **filter**: *string | null*

*Defined in [packages/vulnerabilities/git-api/api.ts:1120](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1120)*

Full text filter

**`memberof`** MetaCves

___

###  impact

• **impact**: *string | null*

*Defined in [packages/vulnerabilities/git-api/api.ts:1204](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1204)*

Filter based on impact IDs.

**`memberof`** MetaCves

___

###  limit

• **limit**: *number*

*Defined in [packages/vulnerabilities/git-api/api.ts:1126](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1126)*

Maximum number of paginated results.

**`memberof`** MetaCves

___

###  offset

• **offset**: *number*

*Defined in [packages/vulnerabilities/git-api/api.ts:1132](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1132)*

First record of paginated response.

**`memberof`** MetaCves

___

###  page

• **page**: *number*

*Defined in [packages/vulnerabilities/git-api/api.ts:1138](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1138)*

Page number of paginated response.

**`memberof`** MetaCves

___

###  page_size

• **page_size**: *number*

*Defined in [packages/vulnerabilities/git-api/api.ts:1144](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1144)*

Number of records per page of paginated response.

**`memberof`** MetaCves

___

###  pages

• **pages**: *number*

*Defined in [packages/vulnerabilities/git-api/api.ts:1150](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1150)*

Total number of pages of paginated response.

**`memberof`** MetaCves

___

###  patch_access

• **patch_access**: *boolean | null*

*Defined in [packages/vulnerabilities/git-api/api.ts:1222](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1222)*

If show_advisories=true shows access to patch service else null

**`memberof`** MetaCves

___

###  public_from

• **public_from**: *string | null*

*Defined in [packages/vulnerabilities/git-api/api.ts:1192](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1192)*

Filter CVEs based on their published date, starting from the date.

**`memberof`** MetaCves

___

###  public_to

• **public_to**: *string | null*

*Defined in [packages/vulnerabilities/git-api/api.ts:1198](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1198)*

Filter CVEs based on their published date, up to the date.

**`memberof`** MetaCves

___

###  rule_presence

• **rule_presence**: *string | null*

*Defined in [packages/vulnerabilities/git-api/api.ts:1216](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1216)*

Filter based on presence of security rule

**`memberof`** MetaCves

___

###  sort

• **sort**: *string | null*

*Defined in [packages/vulnerabilities/git-api/api.ts:1156](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1156)*

Sorting filter.

**`memberof`** MetaCves

___

###  status_id

• **status_id**: *string | null*

*Defined in [packages/vulnerabilities/git-api/api.ts:1210](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1210)*

Filer based on CVE status ID.

**`memberof`** MetaCves

___

###  total_items

• **total_items**: *number*

*Defined in [packages/vulnerabilities/git-api/api.ts:1162](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1162)*

Total number of records.

**`memberof`** MetaCves
