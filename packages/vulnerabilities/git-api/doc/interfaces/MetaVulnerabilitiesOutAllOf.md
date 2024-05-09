[@redhat-cloud-services/vulnerabilities-client](../README.md) / [Exports](../modules.md) / MetaVulnerabilitiesOutAllOf

# Interface: MetaVulnerabilitiesOutAllOf

**`Export`**

MetaVulnerabilitiesOutAllOf

## Table of contents

### Properties

- [advisory\_available](MetaVulnerabilitiesOutAllOf.md#advisory_available)
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
- [system\_count\_per\_type](MetaVulnerabilitiesOutAllOf.md#system_count_per_type)

## Properties

### advisory\_available

• **advisory\_available**: ``null`` \| `string`

Shows whether a CVE has available advisory or not

**`Memberof`**

MetaVulnerabilitiesOutAllOf

#### Defined in

[api.ts:2098](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/vulnerabilities/git-api/api.ts#L2098)

___

### affecting

• **affecting**: ``null`` \| `string`

Description of CVE showing preferences

**`Memberof`**

MetaVulnerabilitiesOutAllOf

#### Defined in

[api.ts:2104](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/vulnerabilities/git-api/api.ts#L2104)

___

### business\_risk\_id

• **business\_risk\_id**: ``null`` \| `string`

Filter based on business risk IDs.

**`Memberof`**

MetaVulnerabilitiesOutAllOf

#### Defined in

[api.ts:2110](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/vulnerabilities/git-api/api.ts#L2110)

___

### cves\_without\_errata

• **cves\_without\_errata**: ``null`` \| `boolean`

CVEs without Errata feature flag

**`Memberof`**

MetaVulnerabilitiesOutAllOf

#### Defined in

[api.ts:2116](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/vulnerabilities/git-api/api.ts#L2116)

___

### cvss\_from

• **cvss\_from**: ``null`` \| `number`

Filter based on cvss score, starting from the value. Use -1 to include also CVEs with N/A cvss score.

**`Memberof`**

MetaVulnerabilitiesOutAllOf

#### Defined in

[api.ts:2122](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/vulnerabilities/git-api/api.ts#L2122)

___

### cvss\_to

• **cvss\_to**: ``null`` \| `number`

Filter based on cvss score, up to the value.

**`Memberof`**

MetaVulnerabilitiesOutAllOf

#### Defined in

[api.ts:2128](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/vulnerabilities/git-api/api.ts#L2128)

___

### impact

• **impact**: ``null`` \| `string`

Filter based on impact IDs.

**`Memberof`**

MetaVulnerabilitiesOutAllOf

#### Defined in

[api.ts:2134](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/vulnerabilities/git-api/api.ts#L2134)

___

### public\_from

• **public\_from**: ``null`` \| `string`

Filter CVEs based on their published date, starting from the date.

**`Memberof`**

MetaVulnerabilitiesOutAllOf

#### Defined in

[api.ts:2140](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/vulnerabilities/git-api/api.ts#L2140)

___

### public\_to

• **public\_to**: ``null`` \| `string`

Filter CVEs based on their published date, up to the date.

**`Memberof`**

MetaVulnerabilitiesOutAllOf

#### Defined in

[api.ts:2146](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/vulnerabilities/git-api/api.ts#L2146)

___

### rhel\_version

• **rhel\_version**: ``null`` \| `string`

Filter base on system RHEL version.

**`Memberof`**

MetaVulnerabilitiesOutAllOf

#### Defined in

[api.ts:2152](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/vulnerabilities/git-api/api.ts#L2152)

___

### rule\_presence

• **rule\_presence**: ``null`` \| `string`

Filter based on presence of security rule

**`Memberof`**

MetaVulnerabilitiesOutAllOf

#### Defined in

[api.ts:2158](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/vulnerabilities/git-api/api.ts#L2158)

___

### system\_count

• `Optional` **system\_count**: `number`

Total number of systems managed by vulnerability application.

**`Memberof`**

MetaVulnerabilitiesOutAllOf

#### Defined in

[api.ts:2164](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/vulnerabilities/git-api/api.ts#L2164)

___

### system\_count\_per\_type

• `Optional` **system\_count\_per\_type**: [`ExecutiveReportSystemCountPerType`](ExecutiveReportSystemCountPerType.md)

**`Memberof`**

MetaVulnerabilitiesOutAllOf

#### Defined in

[api.ts:2170](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/vulnerabilities/git-api/api.ts#L2170)
