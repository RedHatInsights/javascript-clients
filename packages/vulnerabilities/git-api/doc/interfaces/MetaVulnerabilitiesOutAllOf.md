[@redhat-cloud-services/vulnerabilities-client](../README.md) / [Exports](../modules.md) / MetaVulnerabilitiesOutAllOf

# Interface: MetaVulnerabilitiesOutAllOf

**`Export`**

**`Interface`**

MetaVulnerabilitiesOutAllOf

## Table of contents

### Properties

- [affecting](MetaVulnerabilitiesOutAllOf.md#affecting)
- [business\_risk\_id](MetaVulnerabilitiesOutAllOf.md#business_risk_id)
- [cves\_without\_errata](MetaVulnerabilitiesOutAllOf.md#cves_without_errata)
- [cvss\_from](MetaVulnerabilitiesOutAllOf.md#cvss_from)
- [cvss\_to](MetaVulnerabilitiesOutAllOf.md#cvss_to)
- [impact](MetaVulnerabilitiesOutAllOf.md#impact)
- [public\_from](MetaVulnerabilitiesOutAllOf.md#public_from)
- [public\_to](MetaVulnerabilitiesOutAllOf.md#public_to)
- [rhel\_version](MetaVulnerabilitiesOutAllOf.md#rhel_version)
- [rule\_presence](MetaVulnerabilitiesOutAllOf.md#rule_presence)
- [system\_count](MetaVulnerabilitiesOutAllOf.md#system_count)

## Properties

### affecting

• **affecting**: `string`

Description of CVE showing preferences

**`Memberof`**

MetaVulnerabilitiesOutAllOf

#### Defined in

[api.ts:2087](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L2087)

___

### business\_risk\_id

• **business\_risk\_id**: `string`

Filter based on business risk IDs.

**`Memberof`**

MetaVulnerabilitiesOutAllOf

#### Defined in

[api.ts:2093](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L2093)

___

### cves\_without\_errata

• **cves\_without\_errata**: `boolean`

CVEs without Errata feature flag

**`Memberof`**

MetaVulnerabilitiesOutAllOf

#### Defined in

[api.ts:2099](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L2099)

___

### cvss\_from

• **cvss\_from**: `number`

Filter based on cvss score, starting from the value. Use -1 to include also CVEs with N/A cvss score.

**`Memberof`**

MetaVulnerabilitiesOutAllOf

#### Defined in

[api.ts:2105](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L2105)

___

### cvss\_to

• **cvss\_to**: `number`

Filter based on cvss score, up to the value.

**`Memberof`**

MetaVulnerabilitiesOutAllOf

#### Defined in

[api.ts:2111](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L2111)

___

### impact

• **impact**: `string`

Filter based on impact IDs.

**`Memberof`**

MetaVulnerabilitiesOutAllOf

#### Defined in

[api.ts:2117](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L2117)

___

### public\_from

• **public\_from**: `string`

Filter CVEs based on their published date, starting from the date.

**`Memberof`**

MetaVulnerabilitiesOutAllOf

#### Defined in

[api.ts:2123](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L2123)

___

### public\_to

• **public\_to**: `string`

Filter CVEs based on their published date, up to the date.

**`Memberof`**

MetaVulnerabilitiesOutAllOf

#### Defined in

[api.ts:2129](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L2129)

___

### rhel\_version

• **rhel\_version**: `string`

Filter base on system RHEL version.

**`Memberof`**

MetaVulnerabilitiesOutAllOf

#### Defined in

[api.ts:2135](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L2135)

___

### rule\_presence

• **rule\_presence**: `string`

Filter based on presence of security rule

**`Memberof`**

MetaVulnerabilitiesOutAllOf

#### Defined in

[api.ts:2141](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L2141)

___

### system\_count

• `Optional` **system\_count**: `number`

Total number of systems managed by vulnerability application.

**`Memberof`**

MetaVulnerabilitiesOutAllOf

#### Defined in

[api.ts:2147](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L2147)
