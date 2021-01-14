[@redhat-cloud-services/vulnerabilities-client](../README.md) › [Globals](../globals.md) › [MetaVulnerabilitiesOutAllOf](metavulnerabilitiesoutallof.md)

# Interface: MetaVulnerabilitiesOutAllOf

**`export`** 

**`interface`** MetaVulnerabilitiesOutAllOf

## Hierarchy

* **MetaVulnerabilitiesOutAllOf**

## Index

### Properties

* [affecting](metavulnerabilitiesoutallof.md#affecting)
* [business_risk_id](metavulnerabilitiesoutallof.md#business_risk_id)
* [cvss_from](metavulnerabilitiesoutallof.md#cvss_from)
* [cvss_to](metavulnerabilitiesoutallof.md#cvss_to)
* [impact](metavulnerabilitiesoutallof.md#impact)
* [public_from](metavulnerabilitiesoutallof.md#public_from)
* [public_to](metavulnerabilitiesoutallof.md#public_to)
* [rule_presence](metavulnerabilitiesoutallof.md#rule_presence)
* [security_rule](metavulnerabilitiesoutallof.md#security_rule)
* [show_all](metavulnerabilitiesoutallof.md#show_all)
* [system_count](metavulnerabilitiesoutallof.md#optional-system_count)

## Properties

###  affecting

• **affecting**: *string | null*

*Defined in [packages/vulnerabilities/api.ts:1446](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1446)*

Description of CVE showing preferences

**`memberof`** MetaVulnerabilitiesOutAllOf

___

###  business_risk_id

• **business_risk_id**: *string | null*

*Defined in [packages/vulnerabilities/api.ts:1452](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1452)*

Filter based on business risk IDs.

**`memberof`** MetaVulnerabilitiesOutAllOf

___

###  cvss_from

• **cvss_from**: *number | null*

*Defined in [packages/vulnerabilities/api.ts:1458](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1458)*

Filter based on cvss score, starting from the value. Use -1 to include also CVEs with N/A cvss score.

**`memberof`** MetaVulnerabilitiesOutAllOf

___

###  cvss_to

• **cvss_to**: *number | null*

*Defined in [packages/vulnerabilities/api.ts:1464](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1464)*

Filter based on cvss score, up to the value.

**`memberof`** MetaVulnerabilitiesOutAllOf

___

###  impact

• **impact**: *string | null*

*Defined in [packages/vulnerabilities/api.ts:1488](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1488)*

Filter based on impact IDs.

**`memberof`** MetaVulnerabilitiesOutAllOf

___

###  public_from

• **public_from**: *string | null*

*Defined in [packages/vulnerabilities/api.ts:1476](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1476)*

Filter CVEs based on their published date, starting from the date.

**`memberof`** MetaVulnerabilitiesOutAllOf

___

###  public_to

• **public_to**: *string | null*

*Defined in [packages/vulnerabilities/api.ts:1482](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1482)*

Filter CVEs based on their published date, up to the date.

**`memberof`** MetaVulnerabilitiesOutAllOf

___

###  rule_presence

• **rule_presence**: *string | null*

*Defined in [packages/vulnerabilities/api.ts:1500](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1500)*

Filter based on presence of security rule

**`memberof`** MetaVulnerabilitiesOutAllOf

___

###  security_rule

• **security_rule**: *boolean | null*

*Defined in [packages/vulnerabilities/api.ts:1506](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1506)*

Filter based on presence of security rule - deprecated

**`memberof`** MetaVulnerabilitiesOutAllOf

___

###  show_all

• **show_all**: *boolean | null*

*Defined in [packages/vulnerabilities/api.ts:1470](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1470)*

Show all known vulnerabilities, regardless of number of affected systems.

**`memberof`** MetaVulnerabilitiesOutAllOf

___

### `Optional` system_count

• **system_count**? : *number*

*Defined in [packages/vulnerabilities/api.ts:1494](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1494)*

Total number of systems managed by vulnerability application.

**`memberof`** MetaVulnerabilitiesOutAllOf
