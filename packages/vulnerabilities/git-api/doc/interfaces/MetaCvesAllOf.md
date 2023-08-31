[@redhat-cloud-services/vulnerabilities-client](../README.md) / [Exports](../modules.md) / MetaCvesAllOf

# Interface: MetaCvesAllOf

**`Export`**

**`Interface`**

MetaCvesAllOf

## Table of contents

### Properties

- [business\_risk\_id](MetaCvesAllOf.md#business_risk_id)
- [cves\_without\_errata](MetaCvesAllOf.md#cves_without_errata)
- [cvss\_from](MetaCvesAllOf.md#cvss_from)
- [cvss\_to](MetaCvesAllOf.md#cvss_to)
- [first\_reported\_from](MetaCvesAllOf.md#first_reported_from)
- [first\_reported\_to](MetaCvesAllOf.md#first_reported_to)
- [impact](MetaCvesAllOf.md#impact)
- [patch\_access](MetaCvesAllOf.md#patch_access)
- [public\_from](MetaCvesAllOf.md#public_from)
- [public\_to](MetaCvesAllOf.md#public_to)
- [rule\_presence](MetaCvesAllOf.md#rule_presence)
- [status\_id](MetaCvesAllOf.md#status_id)

## Properties

### business\_risk\_id

• **business\_risk\_id**: `string`

Filter based on business risk IDs.

**`Memberof`**

MetaCvesAllOf

#### Defined in

[api.ts:1630](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1630)

___

### cves\_without\_errata

• **cves\_without\_errata**: `boolean`

CVEs without Errata feature flag

**`Memberof`**

MetaCvesAllOf

#### Defined in

[api.ts:1636](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1636)

___

### cvss\_from

• **cvss\_from**: `number`

Filter based on cvss score, starting from the value. Use -1 to include also CVEs with N/A cvss score.

**`Memberof`**

MetaCvesAllOf

#### Defined in

[api.ts:1642](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1642)

___

### cvss\_to

• **cvss\_to**: `number`

Filter based on cvss score, up to the value.

**`Memberof`**

MetaCvesAllOf

#### Defined in

[api.ts:1648](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1648)

___

### first\_reported\_from

• **first\_reported\_from**: `string`

Filter system-cve pairs based on first time of detection of CVE.

**`Memberof`**

MetaCvesAllOf

#### Defined in

[api.ts:1654](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1654)

___

### first\_reported\_to

• **first\_reported\_to**: `string`

Filter system-cve pairs based on first time of detection of CVE.

**`Memberof`**

MetaCvesAllOf

#### Defined in

[api.ts:1660](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1660)

___

### impact

• **impact**: `string`

Filter based on impact IDs.

**`Memberof`**

MetaCvesAllOf

#### Defined in

[api.ts:1666](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1666)

___

### patch\_access

• **patch\_access**: `boolean`

If show_advisories=true shows access to patch service else null

**`Memberof`**

MetaCvesAllOf

#### Defined in

[api.ts:1672](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1672)

___

### public\_from

• **public\_from**: `string`

Filter CVEs based on their published date, starting from the date.

**`Memberof`**

MetaCvesAllOf

#### Defined in

[api.ts:1678](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1678)

___

### public\_to

• **public\_to**: `string`

Filter CVEs based on their published date, up to the date.

**`Memberof`**

MetaCvesAllOf

#### Defined in

[api.ts:1684](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1684)

___

### rule\_presence

• **rule\_presence**: `string`

Filter based on presence of security rule

**`Memberof`**

MetaCvesAllOf

#### Defined in

[api.ts:1690](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1690)

___

### status\_id

• **status\_id**: `string`

Filer based on CVE status ID.

**`Memberof`**

MetaCvesAllOf

#### Defined in

[api.ts:1696](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1696)
