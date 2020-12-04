[@redhat-cloud-services/vulnerabilities-client](../README.md) › [Globals](../globals.md) › [MetaCvesSystems](metacvessystems.md)

# Interface: MetaCvesSystems

**`export`** 

**`interface`** MetaCvesSystems

## Hierarchy

* **MetaCvesSystems**

## Index

### Properties

* [business_risk_id](metacvessystems.md#business_risk_id)
* [cvss_from](metacvessystems.md#cvss_from)
* [cvss_to](metacvessystems.md#cvss_to)
* [data_format](metacvessystems.md#data_format)
* [filter](metacvessystems.md#filter)
* [impact](metacvessystems.md#impact)
* [limit](metacvessystems.md#limit)
* [offset](metacvessystems.md#offset)
* [opt_out](metacvessystems.md#opt_out)
* [page](metacvessystems.md#page)
* [page_size](metacvessystems.md#page_size)
* [pages](metacvessystems.md#pages)
* [patch_access](metacvessystems.md#patch_access)
* [public_from](metacvessystems.md#public_from)
* [public_to](metacvessystems.md#public_to)
* [rule_presence](metacvessystems.md#rule_presence)
* [security_rule](metacvessystems.md#security_rule)
* [sort](metacvessystems.md#sort)
* [status_id](metacvessystems.md#status_id)
* [total_items](metacvessystems.md#total_items)

## Properties

###  business_risk_id

• **business_risk_id**: *string | null*

*Defined in [packages/vulnerabilities/git-api/api.ts:1141](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1141)*

Filter based on business risk IDs.

**`memberof`** MetaCvesSystems

___

###  cvss_from

• **cvss_from**: *number | null*

*Defined in [packages/vulnerabilities/git-api/api.ts:1147](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1147)*

Filter based on cvss score, starting from the value. Use -1 to include also CVEs with N/A cvss score.

**`memberof`** MetaCvesSystems

___

###  cvss_to

• **cvss_to**: *number | null*

*Defined in [packages/vulnerabilities/git-api/api.ts:1153](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1153)*

Filter based on cvss score, up to the value.

**`memberof`** MetaCvesSystems

___

###  data_format

• **data_format**: *string*

*Defined in [packages/vulnerabilities/git-api/api.ts:1135](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1135)*

Format of the output data, either JSON (default) or CSV.

**`memberof`** MetaCvesSystems

___

###  filter

• **filter**: *string | null*

*Defined in [packages/vulnerabilities/git-api/api.ts:1087](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1087)*

Full text filter

**`memberof`** MetaCvesSystems

___

###  impact

• **impact**: *string | null*

*Defined in [packages/vulnerabilities/git-api/api.ts:1171](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1171)*

Filter based on impact IDs.

**`memberof`** MetaCvesSystems

___

###  limit

• **limit**: *number*

*Defined in [packages/vulnerabilities/git-api/api.ts:1093](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1093)*

Maximum number of paginated results.

**`memberof`** MetaCvesSystems

___

###  offset

• **offset**: *number*

*Defined in [packages/vulnerabilities/git-api/api.ts:1099](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1099)*

First record of paginated response.

**`memberof`** MetaCvesSystems

___

###  opt_out

• **opt_out**: *boolean*

*Defined in [packages/vulnerabilities/git-api/api.ts:1201](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1201)*

If given system was opted out.

**`memberof`** MetaCvesSystems

___

###  page

• **page**: *number*

*Defined in [packages/vulnerabilities/git-api/api.ts:1105](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1105)*

Page number of paginated response.

**`memberof`** MetaCvesSystems

___

###  page_size

• **page_size**: *number*

*Defined in [packages/vulnerabilities/git-api/api.ts:1111](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1111)*

Number of records per page of paginated response.

**`memberof`** MetaCvesSystems

___

###  pages

• **pages**: *number*

*Defined in [packages/vulnerabilities/git-api/api.ts:1117](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1117)*

Total number of pages of paginated response.

**`memberof`** MetaCvesSystems

___

###  patch_access

• **patch_access**: *boolean | null*

*Defined in [packages/vulnerabilities/git-api/api.ts:1195](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1195)*

If show_advisories=true shows access to patch service else null

**`memberof`** MetaCvesSystems

___

###  public_from

• **public_from**: *string | null*

*Defined in [packages/vulnerabilities/git-api/api.ts:1159](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1159)*

Filter CVEs based on their published date, starting from the date.

**`memberof`** MetaCvesSystems

___

###  public_to

• **public_to**: *string | null*

*Defined in [packages/vulnerabilities/git-api/api.ts:1165](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1165)*

Filter CVEs based on their published date, up to the date.

**`memberof`** MetaCvesSystems

___

###  rule_presence

• **rule_presence**: *string | null*

*Defined in [packages/vulnerabilities/git-api/api.ts:1183](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1183)*

Filter based on presence of security rule

**`memberof`** MetaCvesSystems

___

###  security_rule

• **security_rule**: *boolean | null*

*Defined in [packages/vulnerabilities/git-api/api.ts:1189](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1189)*

Filter based on presence of security_rule - deprecated

**`memberof`** MetaCvesSystems

___

###  sort

• **sort**: *string | null*

*Defined in [packages/vulnerabilities/git-api/api.ts:1123](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1123)*

Sorting filter.

**`memberof`** MetaCvesSystems

___

###  status_id

• **status_id**: *string | null*

*Defined in [packages/vulnerabilities/git-api/api.ts:1177](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1177)*

Filer based on CVE status ID.

**`memberof`** MetaCvesSystems

___

###  total_items

• **total_items**: *number*

*Defined in [packages/vulnerabilities/git-api/api.ts:1129](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1129)*

Total number of records.

**`memberof`** MetaCvesSystems
