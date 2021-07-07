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

*Defined in [packages/vulnerabilities/api.ts:1341](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1341)*

Filter based on business risk IDs.

**`memberof`** MetaCves

___

###  cvss_from

• **cvss_from**: *number | null*

*Defined in [packages/vulnerabilities/api.ts:1347](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1347)*

Filter based on cvss score, starting from the value. Use -1 to include also CVEs with N/A cvss score.

**`memberof`** MetaCves

___

###  cvss_to

• **cvss_to**: *number | null*

*Defined in [packages/vulnerabilities/api.ts:1353](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1353)*

Filter based on cvss score, up to the value.

**`memberof`** MetaCves

___

###  data_format

• **data_format**: *string*

*Defined in [packages/vulnerabilities/api.ts:1335](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1335)*

Format of the output data, either JSON (default) or CSV.

**`memberof`** MetaCves

___

###  filter

• **filter**: *string | null*

*Defined in [packages/vulnerabilities/api.ts:1287](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1287)*

Full text filter

**`memberof`** MetaCves

___

###  impact

• **impact**: *string | null*

*Defined in [packages/vulnerabilities/api.ts:1371](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1371)*

Filter based on impact IDs.

**`memberof`** MetaCves

___

###  limit

• **limit**: *number*

*Defined in [packages/vulnerabilities/api.ts:1293](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1293)*

Maximum number of paginated results.

**`memberof`** MetaCves

___

###  offset

• **offset**: *number*

*Defined in [packages/vulnerabilities/api.ts:1299](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1299)*

First record of paginated response.

**`memberof`** MetaCves

___

###  page

• **page**: *number*

*Defined in [packages/vulnerabilities/api.ts:1305](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1305)*

Page number of paginated response.

**`memberof`** MetaCves

___

###  page_size

• **page_size**: *number*

*Defined in [packages/vulnerabilities/api.ts:1311](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1311)*

Number of records per page of paginated response.

**`memberof`** MetaCves

___

###  pages

• **pages**: *number*

*Defined in [packages/vulnerabilities/api.ts:1317](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1317)*

Total number of pages of paginated response.

**`memberof`** MetaCves

___

###  patch_access

• **patch_access**: *boolean | null*

*Defined in [packages/vulnerabilities/api.ts:1389](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1389)*

If show_advisories=true shows access to patch service else null

**`memberof`** MetaCves

___

###  public_from

• **public_from**: *string | null*

*Defined in [packages/vulnerabilities/api.ts:1359](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1359)*

Filter CVEs based on their published date, starting from the date.

**`memberof`** MetaCves

___

###  public_to

• **public_to**: *string | null*

*Defined in [packages/vulnerabilities/api.ts:1365](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1365)*

Filter CVEs based on their published date, up to the date.

**`memberof`** MetaCves

___

###  rule_presence

• **rule_presence**: *string | null*

*Defined in [packages/vulnerabilities/api.ts:1383](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1383)*

Filter based on presence of security rule

**`memberof`** MetaCves

___

###  sort

• **sort**: *string | null*

*Defined in [packages/vulnerabilities/api.ts:1323](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1323)*

Sorting filter.

**`memberof`** MetaCves

___

###  status_id

• **status_id**: *string | null*

*Defined in [packages/vulnerabilities/api.ts:1377](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1377)*

Filer based on CVE status ID.

**`memberof`** MetaCves

___

###  total_items

• **total_items**: *number*

*Defined in [packages/vulnerabilities/api.ts:1329](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1329)*

Total number of records.

**`memberof`** MetaCves
