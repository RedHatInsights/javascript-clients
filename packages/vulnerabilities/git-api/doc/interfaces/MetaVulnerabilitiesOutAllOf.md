[@redhat-cloud-services/vulnerabilities-client](../README.md) / [Exports](../modules.md) / MetaVulnerabilitiesOutAllOf

# Interface: MetaVulnerabilitiesOutAllOf

**`Export`**

**`Interface`**

MetaVulnerabilitiesOutAllOf

## Table of contents

### Properties

- [affecting](MetaVulnerabilitiesOutAllOf.md#affecting)
- [business\_risk\_id](MetaVulnerabilitiesOutAllOf.md#business_risk_id)
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

[api.ts:1993](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1993)

___

### business\_risk\_id

• **business\_risk\_id**: `string`

Filter based on business risk IDs.

**`Memberof`**

MetaVulnerabilitiesOutAllOf

#### Defined in

[api.ts:1999](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1999)

___

### cvss\_from

• **cvss\_from**: `number`

Filter based on cvss score, starting from the value. Use -1 to include also CVEs with N/A cvss score.

**`Memberof`**

MetaVulnerabilitiesOutAllOf

#### Defined in

[api.ts:2005](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L2005)

___

### cvss\_to

• **cvss\_to**: `number`

Filter based on cvss score, up to the value.

**`Memberof`**

MetaVulnerabilitiesOutAllOf

#### Defined in

[api.ts:2011](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L2011)

___

### impact

• **impact**: `string`

Filter based on impact IDs.

**`Memberof`**

MetaVulnerabilitiesOutAllOf

#### Defined in

[api.ts:2017](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L2017)

___

### public\_from

• **public\_from**: `string`

Filter CVEs based on their published date, starting from the date.

**`Memberof`**

MetaVulnerabilitiesOutAllOf

#### Defined in

[api.ts:2023](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L2023)

___

### public\_to

• **public\_to**: `string`

Filter CVEs based on their published date, up to the date.

**`Memberof`**

MetaVulnerabilitiesOutAllOf

#### Defined in

[api.ts:2029](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L2029)

___

### rhel\_version

• **rhel\_version**: `string`

Filter base on system RHEL version.

**`Memberof`**

MetaVulnerabilitiesOutAllOf

#### Defined in

[api.ts:2035](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L2035)

___

### rule\_presence

• **rule\_presence**: `string`

Filter based on presence of security rule

**`Memberof`**

MetaVulnerabilitiesOutAllOf

#### Defined in

[api.ts:2041](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L2041)

___

### system\_count

• `Optional` **system\_count**: `number`

Total number of systems managed by vulnerability application.

**`Memberof`**

MetaVulnerabilitiesOutAllOf

#### Defined in

[api.ts:2047](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L2047)
