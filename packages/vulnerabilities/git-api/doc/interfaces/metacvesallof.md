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
* [first_reported_from](metacvesallof.md#first_reported_from)
* [first_reported_to](metacvesallof.md#first_reported_to)
* [impact](metacvesallof.md#impact)
* [patch_access](metacvesallof.md#patch_access)
* [public_from](metacvesallof.md#public_from)
* [public_to](metacvesallof.md#public_to)
* [rule_presence](metacvesallof.md#rule_presence)
* [status_id](metacvesallof.md#status_id)

## Properties

###  business_risk_id

• **business_risk_id**: *string | null*

*Defined in [git-api/api.ts:1524](https://github.com/RedHatInsights/javascript-clients.gi/blob/master/packages/vulnerabilities/git-api/api.ts#L1524)*

Filter based on business risk IDs.

**`memberof`** MetaCvesAllOf

___

###  cvss_from

• **cvss_from**: *number | null*

*Defined in [git-api/api.ts:1530](https://github.com/RedHatInsights/javascript-clients.gi/blob/master/packages/vulnerabilities/git-api/api.ts#L1530)*

Filter based on cvss score, starting from the value. Use -1 to include also CVEs with N/A cvss score.

**`memberof`** MetaCvesAllOf

___

###  cvss_to

• **cvss_to**: *number | null*

*Defined in [git-api/api.ts:1536](https://github.com/RedHatInsights/javascript-clients.gi/blob/master/packages/vulnerabilities/git-api/api.ts#L1536)*

Filter based on cvss score, up to the value.

**`memberof`** MetaCvesAllOf

___

###  first_reported_from

• **first_reported_from**: *string | null*

*Defined in [git-api/api.ts:1542](https://github.com/RedHatInsights/javascript-clients.gi/blob/master/packages/vulnerabilities/git-api/api.ts#L1542)*

Filter system-cve pairs based on first time of detection of CVE.

**`memberof`** MetaCvesAllOf

___

###  first_reported_to

• **first_reported_to**: *string | null*

*Defined in [git-api/api.ts:1548](https://github.com/RedHatInsights/javascript-clients.gi/blob/master/packages/vulnerabilities/git-api/api.ts#L1548)*

Filter system-cve pairs based on first time of detection of CVE.

**`memberof`** MetaCvesAllOf

___

###  impact

• **impact**: *string | null*

*Defined in [git-api/api.ts:1554](https://github.com/RedHatInsights/javascript-clients.gi/blob/master/packages/vulnerabilities/git-api/api.ts#L1554)*

Filter based on impact IDs.

**`memberof`** MetaCvesAllOf

___

###  patch_access

• **patch_access**: *boolean | null*

*Defined in [git-api/api.ts:1560](https://github.com/RedHatInsights/javascript-clients.gi/blob/master/packages/vulnerabilities/git-api/api.ts#L1560)*

If show_advisories=true shows access to patch service else null

**`memberof`** MetaCvesAllOf

___

###  public_from

• **public_from**: *string | null*

*Defined in [git-api/api.ts:1566](https://github.com/RedHatInsights/javascript-clients.gi/blob/master/packages/vulnerabilities/git-api/api.ts#L1566)*

Filter CVEs based on their published date, starting from the date.

**`memberof`** MetaCvesAllOf

___

###  public_to

• **public_to**: *string | null*

*Defined in [git-api/api.ts:1572](https://github.com/RedHatInsights/javascript-clients.gi/blob/master/packages/vulnerabilities/git-api/api.ts#L1572)*

Filter CVEs based on their published date, up to the date.

**`memberof`** MetaCvesAllOf

___

###  rule_presence

• **rule_presence**: *string | null*

*Defined in [git-api/api.ts:1578](https://github.com/RedHatInsights/javascript-clients.gi/blob/master/packages/vulnerabilities/git-api/api.ts#L1578)*

Filter based on presence of security rule

**`memberof`** MetaCvesAllOf

___

###  status_id

• **status_id**: *string | null*

*Defined in [git-api/api.ts:1584](https://github.com/RedHatInsights/javascript-clients.gi/blob/master/packages/vulnerabilities/git-api/api.ts#L1584)*

Filer based on CVE status ID.

**`memberof`** MetaCvesAllOf
