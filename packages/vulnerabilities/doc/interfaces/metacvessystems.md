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
* [first_reported_from](metacvessystems.md#first_reported_from)
* [first_reported_to](metacvessystems.md#first_reported_to)
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
* [sort](metacvessystems.md#sort)
* [status_id](metacvessystems.md#status_id)
* [total_items](metacvessystems.md#total_items)

## Properties

###  business_risk_id

• **business_risk_id**: *string | null*

*Defined in [packages/vulnerabilities/api.ts:1565](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1565)*

Filter based on business risk IDs.

**`memberof`** MetaCvesSystems

___

###  cvss_from

• **cvss_from**: *number | null*

*Defined in [packages/vulnerabilities/api.ts:1571](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1571)*

Filter based on cvss score, starting from the value. Use -1 to include also CVEs with N/A cvss score.

**`memberof`** MetaCvesSystems

___

###  cvss_to

• **cvss_to**: *number | null*

*Defined in [packages/vulnerabilities/api.ts:1577](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1577)*

Filter based on cvss score, up to the value.

**`memberof`** MetaCvesSystems

___

###  data_format

• **data_format**: *string*

*Defined in [packages/vulnerabilities/api.ts:1511](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1511)*

Format of the output data, either JSON (default) or CSV.

**`memberof`** MetaCvesSystems

___

###  filter

• **filter**: *string | null*

*Defined in [packages/vulnerabilities/api.ts:1517](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1517)*

Full text filter

**`memberof`** MetaCvesSystems

___

###  first_reported_from

• **first_reported_from**: *string | null*

*Defined in [packages/vulnerabilities/api.ts:1583](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1583)*

Filter system-cve pairs based on first time of detection of CVE.

**`memberof`** MetaCvesSystems

___

###  first_reported_to

• **first_reported_to**: *string | null*

*Defined in [packages/vulnerabilities/api.ts:1589](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1589)*

Filter system-cve pairs based on first time of detection of CVE.

**`memberof`** MetaCvesSystems

___

###  impact

• **impact**: *string | null*

*Defined in [packages/vulnerabilities/api.ts:1595](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1595)*

Filter based on impact IDs.

**`memberof`** MetaCvesSystems

___

###  limit

• **limit**: *number*

*Defined in [packages/vulnerabilities/api.ts:1523](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1523)*

Maximum number of paginated results.

**`memberof`** MetaCvesSystems

___

###  offset

• **offset**: *number*

*Defined in [packages/vulnerabilities/api.ts:1529](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1529)*

First record of paginated response.

**`memberof`** MetaCvesSystems

___

###  opt_out

• **opt_out**: *boolean*

*Defined in [packages/vulnerabilities/api.ts:1631](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1631)*

If given system was opted out.

**`memberof`** MetaCvesSystems

___

###  page

• **page**: *number*

*Defined in [packages/vulnerabilities/api.ts:1535](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1535)*

Page number of paginated response.

**`memberof`** MetaCvesSystems

___

###  page_size

• **page_size**: *number*

*Defined in [packages/vulnerabilities/api.ts:1541](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1541)*

Number of records per page of paginated response.

**`memberof`** MetaCvesSystems

___

###  pages

• **pages**: *number*

*Defined in [packages/vulnerabilities/api.ts:1547](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1547)*

Total number of pages of paginated response.

**`memberof`** MetaCvesSystems

___

###  patch_access

• **patch_access**: *boolean | null*

*Defined in [packages/vulnerabilities/api.ts:1601](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1601)*

If show_advisories=true shows access to patch service else null

**`memberof`** MetaCvesSystems

___

###  public_from

• **public_from**: *string | null*

*Defined in [packages/vulnerabilities/api.ts:1607](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1607)*

Filter CVEs based on their published date, starting from the date.

**`memberof`** MetaCvesSystems

___

###  public_to

• **public_to**: *string | null*

*Defined in [packages/vulnerabilities/api.ts:1613](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1613)*

Filter CVEs based on their published date, up to the date.

**`memberof`** MetaCvesSystems

___

###  rule_presence

• **rule_presence**: *string | null*

*Defined in [packages/vulnerabilities/api.ts:1619](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1619)*

Filter based on presence of security rule

**`memberof`** MetaCvesSystems

___

###  sort

• **sort**: *string | null*

*Defined in [packages/vulnerabilities/api.ts:1553](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1553)*

Sorting filter.

**`memberof`** MetaCvesSystems

___

###  status_id

• **status_id**: *string | null*

*Defined in [packages/vulnerabilities/api.ts:1625](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1625)*

Filer based on CVE status ID.

**`memberof`** MetaCvesSystems

___

###  total_items

• **total_items**: *number*

*Defined in [packages/vulnerabilities/api.ts:1559](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1559)*

Total number of records.

**`memberof`** MetaCvesSystems
