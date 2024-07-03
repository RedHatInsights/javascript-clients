[@redhat-cloud-services/vulnerabilities-client](../README.md) / [Exports](../modules.md) / MetaCvesAllOf

# Interface: MetaCvesAllOf

**`Export`**

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

• **business\_risk\_id**: ``null`` \| `string`

Filter based on business risk IDs.

**`Memberof`**

MetaCvesAllOf

#### Defined in

[api.ts:1586](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/vulnerabilities/api.ts#L1586)

___

### cves\_without\_errata

• **cves\_without\_errata**: ``null`` \| `boolean`

CVEs without Errata feature flag

**`Memberof`**

MetaCvesAllOf

#### Defined in

[api.ts:1652](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/vulnerabilities/api.ts#L1652)

___

### cvss\_from

• **cvss\_from**: ``null`` \| `number`

Filter based on cvss score, starting from the value. Use -1 to include also CVEs with N/A cvss score.

**`Memberof`**

MetaCvesAllOf

#### Defined in

[api.ts:1592](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/vulnerabilities/api.ts#L1592)

___

### cvss\_to

• **cvss\_to**: ``null`` \| `number`

Filter based on cvss score, up to the value.

**`Memberof`**

MetaCvesAllOf

#### Defined in

[api.ts:1598](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/vulnerabilities/api.ts#L1598)

___

### first\_reported\_from

• **first\_reported\_from**: ``null`` \| `string`

Filter system-cve pairs based on first time of detection of CVE.

**`Memberof`**

MetaCvesAllOf

#### Defined in

[api.ts:1640](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/vulnerabilities/api.ts#L1640)

___

### first\_reported\_to

• **first\_reported\_to**: ``null`` \| `string`

Filter system-cve pairs based on first time of detection of CVE.

**`Memberof`**

MetaCvesAllOf

#### Defined in

[api.ts:1646](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/vulnerabilities/api.ts#L1646)

___

### impact

• **impact**: ``null`` \| `string`

Filter based on impact IDs.

**`Memberof`**

MetaCvesAllOf

#### Defined in

[api.ts:1616](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/vulnerabilities/api.ts#L1616)

___

### patch\_access

• **patch\_access**: ``null`` \| `boolean`

If show_advisories=true shows access to patch service else null

**`Memberof`**

MetaCvesAllOf

#### Defined in

[api.ts:1634](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/vulnerabilities/api.ts#L1634)

___

### public\_from

• **public\_from**: ``null`` \| `string`

Filter CVEs based on their published date, starting from the date.

**`Memberof`**

MetaCvesAllOf

#### Defined in

[api.ts:1604](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/vulnerabilities/api.ts#L1604)

___

### public\_to

• **public\_to**: ``null`` \| `string`

Filter CVEs based on their published date, up to the date.

**`Memberof`**

MetaCvesAllOf

#### Defined in

[api.ts:1610](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/vulnerabilities/api.ts#L1610)

___

### rule\_presence

• **rule\_presence**: ``null`` \| `string`

Filter based on presence of security rule

**`Memberof`**

MetaCvesAllOf

#### Defined in

[api.ts:1628](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/vulnerabilities/api.ts#L1628)

___

### status\_id

• **status\_id**: ``null`` \| `string`

Filer based on CVE status ID.

**`Memberof`**

MetaCvesAllOf

#### Defined in

[api.ts:1622](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/vulnerabilities/api.ts#L1622)
