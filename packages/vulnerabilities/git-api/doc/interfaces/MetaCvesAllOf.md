[@redhat-cloud-services/vulnerabilities-client](../README.md) / [Exports](../modules.md) / MetaCvesAllOf

# Interface: MetaCvesAllOf

**`Export`**

**`Interface`**

MetaCvesAllOf

## Table of contents

### Properties

- [business\_risk\_id](MetaCvesAllOf.md#business_risk_id)
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

[api.ts:1530](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1530)

___

### cvss\_from

• **cvss\_from**: `number`

Filter based on cvss score, starting from the value. Use -1 to include also CVEs with N/A cvss score.

**`Memberof`**

MetaCvesAllOf

#### Defined in

[api.ts:1536](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1536)

___

### cvss\_to

• **cvss\_to**: `number`

Filter based on cvss score, up to the value.

**`Memberof`**

MetaCvesAllOf

#### Defined in

[api.ts:1542](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1542)

___

### first\_reported\_from

• **first\_reported\_from**: `string`

Filter system-cve pairs based on first time of detection of CVE.

**`Memberof`**

MetaCvesAllOf

#### Defined in

[api.ts:1548](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1548)

___

### first\_reported\_to

• **first\_reported\_to**: `string`

Filter system-cve pairs based on first time of detection of CVE.

**`Memberof`**

MetaCvesAllOf

#### Defined in

[api.ts:1554](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1554)

___

### impact

• **impact**: `string`

Filter based on impact IDs.

**`Memberof`**

MetaCvesAllOf

#### Defined in

[api.ts:1560](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1560)

___

### patch\_access

• **patch\_access**: `boolean`

If show_advisories=true shows access to patch service else null

**`Memberof`**

MetaCvesAllOf

#### Defined in

[api.ts:1566](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1566)

___

### public\_from

• **public\_from**: `string`

Filter CVEs based on their published date, starting from the date.

**`Memberof`**

MetaCvesAllOf

#### Defined in

[api.ts:1572](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1572)

___

### public\_to

• **public\_to**: `string`

Filter CVEs based on their published date, up to the date.

**`Memberof`**

MetaCvesAllOf

#### Defined in

[api.ts:1578](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1578)

___

### rule\_presence

• **rule\_presence**: `string`

Filter based on presence of security rule

**`Memberof`**

MetaCvesAllOf

#### Defined in

[api.ts:1584](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1584)

___

### status\_id

• **status\_id**: `string`

Filer based on CVE status ID.

**`Memberof`**

MetaCvesAllOf

#### Defined in

[api.ts:1590](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1590)
