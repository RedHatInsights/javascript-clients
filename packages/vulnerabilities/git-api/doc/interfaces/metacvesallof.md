[@redhat-cloud-services/vulnerabilities-client](../README.md) › [Globals](../globals.md) › [MetaCvesAllOf](metacvesallof.md)

# Interface: MetaCvesAllOf

**`export`** 

**`interface`** MetaCvesAllOf

## Hierarchy

* **MetaCvesAllOf**

## Index

### Properties

* [business_risk_id](metacvesallof.md#business_risk_id)
* [cvss_from](metacvesallof.md#cvss_from)
* [cvss_to](metacvesallof.md#cvss_to)
* [impact](metacvesallof.md#impact)
* [patch_access](metacvesallof.md#patch_access)
* [public_from](metacvesallof.md#public_from)
* [public_to](metacvesallof.md#public_to)
* [rule_presence](metacvesallof.md#rule_presence)
* [status_id](metacvesallof.md#status_id)

## Properties

###  business_risk_id

• **business_risk_id**: *string | null*

*Defined in [packages/vulnerabilities/git-api/api.ts:1235](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1235)*

Filter based on business risk IDs.

**`memberof`** MetaCvesAllOf

___

###  cvss_from

• **cvss_from**: *number | null*

*Defined in [packages/vulnerabilities/git-api/api.ts:1241](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1241)*

Filter based on cvss score, starting from the value. Use -1 to include also CVEs with N/A cvss score.

**`memberof`** MetaCvesAllOf

___

###  cvss_to

• **cvss_to**: *number | null*

*Defined in [packages/vulnerabilities/git-api/api.ts:1247](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1247)*

Filter based on cvss score, up to the value.

**`memberof`** MetaCvesAllOf

___

###  impact

• **impact**: *string | null*

*Defined in [packages/vulnerabilities/git-api/api.ts:1265](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1265)*

Filter based on impact IDs.

**`memberof`** MetaCvesAllOf

___

###  patch_access

• **patch_access**: *boolean | null*

*Defined in [packages/vulnerabilities/git-api/api.ts:1283](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1283)*

If show_advisories=true shows access to patch service else null

**`memberof`** MetaCvesAllOf

___

###  public_from

• **public_from**: *string | null*

*Defined in [packages/vulnerabilities/git-api/api.ts:1253](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1253)*

Filter CVEs based on their published date, starting from the date.

**`memberof`** MetaCvesAllOf

___

###  public_to

• **public_to**: *string | null*

*Defined in [packages/vulnerabilities/git-api/api.ts:1259](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1259)*

Filter CVEs based on their published date, up to the date.

**`memberof`** MetaCvesAllOf

___

###  rule_presence

• **rule_presence**: *string | null*

*Defined in [packages/vulnerabilities/git-api/api.ts:1277](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1277)*

Filter based on presence of security rule

**`memberof`** MetaCvesAllOf

___

###  status_id

• **status_id**: *string | null*

*Defined in [packages/vulnerabilities/git-api/api.ts:1271](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1271)*

Filer based on CVE status ID.

**`memberof`** MetaCvesAllOf
