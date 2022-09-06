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
* [permissions](metacvessystems.md#permissions)
* [public_from](metacvessystems.md#public_from)
* [public_to](metacvessystems.md#public_to)
* [rule_presence](metacvessystems.md#rule_presence)
* [sort](metacvessystems.md#sort)
* [status_id](metacvessystems.md#status_id)
* [total_items](metacvessystems.md#total_items)

## Properties

###  business_risk_id

• **business_risk_id**: *string | null*

*Defined in [api.ts:1663](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1663)*

Filter based on business risk IDs.

**`memberof`** MetaCvesSystems

___

###  cvss_from

• **cvss_from**: *number | null*

*Defined in [api.ts:1669](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1669)*

Filter based on cvss score, starting from the value. Use -1 to include also CVEs with N/A cvss score.

**`memberof`** MetaCvesSystems

___

###  cvss_to

• **cvss_to**: *number | null*

*Defined in [api.ts:1675](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1675)*

Filter based on cvss score, up to the value.

**`memberof`** MetaCvesSystems

___

###  data_format

• **data_format**: *string*

*Defined in [api.ts:1603](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1603)*

Format of the output data, either JSON (default) or CSV.

**`memberof`** MetaCvesSystems

___

###  filter

• **filter**: *string | null*

*Defined in [api.ts:1609](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1609)*

Full text filter

**`memberof`** MetaCvesSystems

___

###  first_reported_from

• **first_reported_from**: *string | null*

*Defined in [api.ts:1681](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1681)*

Filter system-cve pairs based on first time of detection of CVE.

**`memberof`** MetaCvesSystems

___

###  first_reported_to

• **first_reported_to**: *string | null*

*Defined in [api.ts:1687](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1687)*

Filter system-cve pairs based on first time of detection of CVE.

**`memberof`** MetaCvesSystems

___

###  impact

• **impact**: *string | null*

*Defined in [api.ts:1693](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1693)*

Filter based on impact IDs.

**`memberof`** MetaCvesSystems

___

###  limit

• **limit**: *number*

*Defined in [api.ts:1615](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1615)*

Maximum number of paginated results.

**`memberof`** MetaCvesSystems

___

###  offset

• **offset**: *number*

*Defined in [api.ts:1621](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1621)*

First record of paginated response.

**`memberof`** MetaCvesSystems

___

###  opt_out

• **opt_out**: *boolean*

*Defined in [api.ts:1729](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1729)*

If given system was opted out.

**`memberof`** MetaCvesSystems

___

###  page

• **page**: *number*

*Defined in [api.ts:1627](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1627)*

Page number of paginated response.

**`memberof`** MetaCvesSystems

___

###  page_size

• **page_size**: *number*

*Defined in [api.ts:1633](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1633)*

Number of records per page of paginated response.

**`memberof`** MetaCvesSystems

___

###  pages

• **pages**: *number*

*Defined in [api.ts:1639](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1639)*

Total number of pages of paginated response.

**`memberof`** MetaCvesSystems

___

###  patch_access

• **patch_access**: *boolean | null*

*Defined in [api.ts:1699](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1699)*

If show_advisories=true shows access to patch service else null

**`memberof`** MetaCvesSystems

___

###  permissions

• **permissions**: *Array‹string›*

*Defined in [api.ts:1657](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1657)*

Fetched permissions from RBAC for given user

**`memberof`** MetaCvesSystems

___

###  public_from

• **public_from**: *string | null*

*Defined in [api.ts:1705](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1705)*

Filter CVEs based on their published date, starting from the date.

**`memberof`** MetaCvesSystems

___

###  public_to

• **public_to**: *string | null*

*Defined in [api.ts:1711](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1711)*

Filter CVEs based on their published date, up to the date.

**`memberof`** MetaCvesSystems

___

###  rule_presence

• **rule_presence**: *string | null*

*Defined in [api.ts:1717](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1717)*

Filter based on presence of security rule

**`memberof`** MetaCvesSystems

___

###  sort

• **sort**: *string | null*

*Defined in [api.ts:1645](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1645)*

Sorting filter.

**`memberof`** MetaCvesSystems

___

###  status_id

• **status_id**: *string | null*

*Defined in [api.ts:1723](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1723)*

Filer based on CVE status ID.

**`memberof`** MetaCvesSystems

___

###  total_items

• **total_items**: *number*

*Defined in [api.ts:1651](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1651)*

Total number of records.

**`memberof`** MetaCvesSystems
