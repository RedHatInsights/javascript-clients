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

*Defined in [packages/vulnerabilities/api.ts:1277](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1277)*

Filter based on business risk IDs.

**`memberof`** MetaCvesSystems

___

###  cvss_from

• **cvss_from**: *number | null*

*Defined in [packages/vulnerabilities/api.ts:1283](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1283)*

Filter based on cvss score, starting from the value. Use -1 to include also CVEs with N/A cvss score.

**`memberof`** MetaCvesSystems

___

###  cvss_to

• **cvss_to**: *number | null*

*Defined in [packages/vulnerabilities/api.ts:1289](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1289)*

Filter based on cvss score, up to the value.

**`memberof`** MetaCvesSystems

___

###  data_format

• **data_format**: *string*

*Defined in [packages/vulnerabilities/api.ts:1271](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1271)*

Format of the output data, either JSON (default) or CSV.

**`memberof`** MetaCvesSystems

___

###  filter

• **filter**: *string | null*

*Defined in [packages/vulnerabilities/api.ts:1223](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1223)*

Full text filter

**`memberof`** MetaCvesSystems

___

###  impact

• **impact**: *string | null*

*Defined in [packages/vulnerabilities/api.ts:1307](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1307)*

Filter based on impact IDs.

**`memberof`** MetaCvesSystems

___

###  limit

• **limit**: *number*

*Defined in [packages/vulnerabilities/api.ts:1229](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1229)*

Maximum number of paginated results.

**`memberof`** MetaCvesSystems

___

###  offset

• **offset**: *number*

*Defined in [packages/vulnerabilities/api.ts:1235](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1235)*

First record of paginated response.

**`memberof`** MetaCvesSystems

___

###  opt_out

• **opt_out**: *boolean*

*Defined in [packages/vulnerabilities/api.ts:1337](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1337)*

If given system was opted out.

**`memberof`** MetaCvesSystems

___

###  page

• **page**: *number*

*Defined in [packages/vulnerabilities/api.ts:1241](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1241)*

Page number of paginated response.

**`memberof`** MetaCvesSystems

___

###  page_size

• **page_size**: *number*

*Defined in [packages/vulnerabilities/api.ts:1247](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1247)*

Number of records per page of paginated response.

**`memberof`** MetaCvesSystems

___

###  pages

• **pages**: *number*

*Defined in [packages/vulnerabilities/api.ts:1253](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1253)*

Total number of pages of paginated response.

**`memberof`** MetaCvesSystems

___

###  patch_access

• **patch_access**: *boolean | null*

*Defined in [packages/vulnerabilities/api.ts:1331](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1331)*

If show_advisories=true shows access to patch service else null

**`memberof`** MetaCvesSystems

___

###  public_from

• **public_from**: *string | null*

*Defined in [packages/vulnerabilities/api.ts:1295](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1295)*

Filter CVEs based on their published date, starting from the date.

**`memberof`** MetaCvesSystems

___

###  public_to

• **public_to**: *string | null*

*Defined in [packages/vulnerabilities/api.ts:1301](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1301)*

Filter CVEs based on their published date, up to the date.

**`memberof`** MetaCvesSystems

___

###  rule_presence

• **rule_presence**: *string | null*

*Defined in [packages/vulnerabilities/api.ts:1319](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1319)*

Filter based on presence of security rule

**`memberof`** MetaCvesSystems

___

###  security_rule

• **security_rule**: *boolean | null*

*Defined in [packages/vulnerabilities/api.ts:1325](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1325)*

Filter based on presence of security_rule - deprecated

**`memberof`** MetaCvesSystems

___

###  sort

• **sort**: *string | null*

*Defined in [packages/vulnerabilities/api.ts:1259](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1259)*

Sorting filter.

**`memberof`** MetaCvesSystems

___

###  status_id

• **status_id**: *string | null*

*Defined in [packages/vulnerabilities/api.ts:1313](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1313)*

Filer based on CVE status ID.

**`memberof`** MetaCvesSystems

___

###  total_items

• **total_items**: *number*

*Defined in [packages/vulnerabilities/api.ts:1265](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1265)*

Total number of records.

**`memberof`** MetaCvesSystems
