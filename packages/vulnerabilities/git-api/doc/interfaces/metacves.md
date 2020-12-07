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
* [security_rule](metacves.md#security_rule)
* [sort](metacves.md#sort)
* [status_id](metacves.md#status_id)
* [total_items](metacves.md#total_items)

## Properties

###  business_risk_id

• **business_risk_id**: *string | null*

*Defined in [packages/vulnerabilities/git-api/api.ts:953](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L953)*

Filter based on business risk IDs.

**`memberof`** MetaCves

___

###  cvss_from

• **cvss_from**: *number | null*

*Defined in [packages/vulnerabilities/git-api/api.ts:959](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L959)*

Filter based on cvss score, starting from the value. Use -1 to include also CVEs with N/A cvss score.

**`memberof`** MetaCves

___

###  cvss_to

• **cvss_to**: *number | null*

*Defined in [packages/vulnerabilities/git-api/api.ts:965](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L965)*

Filter based on cvss score, up to the value.

**`memberof`** MetaCves

___

###  data_format

• **data_format**: *string*

*Defined in [packages/vulnerabilities/git-api/api.ts:947](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L947)*

Format of the output data, either JSON (default) or CSV.

**`memberof`** MetaCves

___

###  filter

• **filter**: *string | null*

*Defined in [packages/vulnerabilities/git-api/api.ts:899](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L899)*

Full text filter

**`memberof`** MetaCves

___

###  impact

• **impact**: *string | null*

*Defined in [packages/vulnerabilities/git-api/api.ts:983](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L983)*

Filter based on impact IDs.

**`memberof`** MetaCves

___

###  limit

• **limit**: *number*

*Defined in [packages/vulnerabilities/git-api/api.ts:905](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L905)*

Maximum number of paginated results.

**`memberof`** MetaCves

___

###  offset

• **offset**: *number*

*Defined in [packages/vulnerabilities/git-api/api.ts:911](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L911)*

First record of paginated response.

**`memberof`** MetaCves

___

###  page

• **page**: *number*

*Defined in [packages/vulnerabilities/git-api/api.ts:917](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L917)*

Page number of paginated response.

**`memberof`** MetaCves

___

###  page_size

• **page_size**: *number*

*Defined in [packages/vulnerabilities/git-api/api.ts:923](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L923)*

Number of records per page of paginated response.

**`memberof`** MetaCves

___

###  pages

• **pages**: *number*

*Defined in [packages/vulnerabilities/git-api/api.ts:929](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L929)*

Total number of pages of paginated response.

**`memberof`** MetaCves

___

###  patch_access

• **patch_access**: *boolean | null*

*Defined in [packages/vulnerabilities/git-api/api.ts:1007](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1007)*

If show_advisories=true shows access to patch service else null

**`memberof`** MetaCves

___

###  public_from

• **public_from**: *string | null*

*Defined in [packages/vulnerabilities/git-api/api.ts:971](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L971)*

Filter CVEs based on their published date, starting from the date.

**`memberof`** MetaCves

___

###  public_to

• **public_to**: *string | null*

*Defined in [packages/vulnerabilities/git-api/api.ts:977](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L977)*

Filter CVEs based on their published date, up to the date.

**`memberof`** MetaCves

___

###  rule_presence

• **rule_presence**: *string | null*

*Defined in [packages/vulnerabilities/git-api/api.ts:995](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L995)*

Filter based on presence of security rule

**`memberof`** MetaCves

___

###  security_rule

• **security_rule**: *boolean | null*

*Defined in [packages/vulnerabilities/git-api/api.ts:1001](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1001)*

Filter based on presence of security_rule - deprecated

**`memberof`** MetaCves

___

###  sort

• **sort**: *string | null*

*Defined in [packages/vulnerabilities/git-api/api.ts:935](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L935)*

Sorting filter.

**`memberof`** MetaCves

___

###  status_id

• **status_id**: *string | null*

*Defined in [packages/vulnerabilities/git-api/api.ts:989](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L989)*

Filer based on CVE status ID.

**`memberof`** MetaCves

___

###  total_items

• **total_items**: *number*

*Defined in [packages/vulnerabilities/git-api/api.ts:941](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L941)*

Total number of records.

**`memberof`** MetaCves
