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

*Defined in [packages/vulnerabilities/api.ts:1804](https://github.com/fhlavac/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1804)*

Description of CVE showing preferences

**`memberof`** MetaVulnerabilitiesOutAllOf

___

###  business_risk_id

• **business_risk_id**: *string | null*

*Defined in [packages/vulnerabilities/api.ts:1810](https://github.com/fhlavac/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1810)*

Filter based on business risk IDs.

**`memberof`** MetaVulnerabilitiesOutAllOf

___

###  cvss_from

• **cvss_from**: *number | null*

*Defined in [packages/vulnerabilities/api.ts:1816](https://github.com/fhlavac/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1816)*

Filter based on cvss score, starting from the value. Use -1 to include also CVEs with N/A cvss score.

**`memberof`** MetaVulnerabilitiesOutAllOf

___

###  cvss_to

• **cvss_to**: *number | null*

*Defined in [packages/vulnerabilities/api.ts:1822](https://github.com/fhlavac/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1822)*

Filter based on cvss score, up to the value.

**`memberof`** MetaVulnerabilitiesOutAllOf

___

###  impact

• **impact**: *string | null*

*Defined in [packages/vulnerabilities/api.ts:1840](https://github.com/fhlavac/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1840)*

Filter based on impact IDs.

**`memberof`** MetaVulnerabilitiesOutAllOf

___

###  public_from

• **public_from**: *string | null*

*Defined in [packages/vulnerabilities/api.ts:1828](https://github.com/fhlavac/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1828)*

Filter CVEs based on their published date, starting from the date.

**`memberof`** MetaVulnerabilitiesOutAllOf

___

###  public_to

• **public_to**: *string | null*

*Defined in [packages/vulnerabilities/api.ts:1834](https://github.com/fhlavac/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1834)*

Filter CVEs based on their published date, up to the date.

**`memberof`** MetaVulnerabilitiesOutAllOf

___

###  rule_presence

• **rule_presence**: *string | null*

*Defined in [packages/vulnerabilities/api.ts:1852](https://github.com/fhlavac/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1852)*

Filter based on presence of security rule

**`memberof`** MetaVulnerabilitiesOutAllOf

___

### `Optional` system_count

• **system_count**? : *number*

*Defined in [packages/vulnerabilities/api.ts:1846](https://github.com/fhlavac/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1846)*

Total number of systems managed by vulnerability application.

**`memberof`** MetaVulnerabilitiesOutAllOf
