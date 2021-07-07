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
* [system_count](metavulnerabilitiesoutallof.md#optional-system_count)

## Properties

###  affecting

• **affecting**: *string | null*

*Defined in [packages/vulnerabilities/git-api/api.ts:1864](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1864)*

Description of CVE showing preferences

**`memberof`** MetaVulnerabilitiesOutAllOf

___

###  business_risk_id

• **business_risk_id**: *string | null*

*Defined in [packages/vulnerabilities/git-api/api.ts:1870](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1870)*

Filter based on business risk IDs.

**`memberof`** MetaVulnerabilitiesOutAllOf

___

###  cvss_from

• **cvss_from**: *number | null*

*Defined in [packages/vulnerabilities/git-api/api.ts:1876](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1876)*

Filter based on cvss score, starting from the value. Use -1 to include also CVEs with N/A cvss score.

**`memberof`** MetaVulnerabilitiesOutAllOf

___

###  cvss_to

• **cvss_to**: *number | null*

*Defined in [packages/vulnerabilities/git-api/api.ts:1882](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1882)*

Filter based on cvss score, up to the value.

**`memberof`** MetaVulnerabilitiesOutAllOf

___

###  impact

• **impact**: *string | null*

*Defined in [packages/vulnerabilities/git-api/api.ts:1900](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1900)*

Filter based on impact IDs.

**`memberof`** MetaVulnerabilitiesOutAllOf

___

###  public_from

• **public_from**: *string | null*

*Defined in [packages/vulnerabilities/git-api/api.ts:1888](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1888)*

Filter CVEs based on their published date, starting from the date.

**`memberof`** MetaVulnerabilitiesOutAllOf

___

###  public_to

• **public_to**: *string | null*

*Defined in [packages/vulnerabilities/git-api/api.ts:1894](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1894)*

Filter CVEs based on their published date, up to the date.

**`memberof`** MetaVulnerabilitiesOutAllOf

___

###  rule_presence

• **rule_presence**: *string | null*

*Defined in [packages/vulnerabilities/git-api/api.ts:1912](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1912)*

Filter based on presence of security rule

**`memberof`** MetaVulnerabilitiesOutAllOf

___

### `Optional` system_count

• **system_count**? : *number*

*Defined in [packages/vulnerabilities/git-api/api.ts:1906](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1906)*

Total number of systems managed by vulnerability application.

**`memberof`** MetaVulnerabilitiesOutAllOf
