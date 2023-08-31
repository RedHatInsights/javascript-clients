[@redhat-cloud-services/vulnerabilities-client](../README.md) / [Exports](../modules.md) / MetaAffectedSystemsAllOf

# Interface: MetaAffectedSystemsAllOf

**`Export`**

**`Interface`**

MetaAffectedSystemsAllOf

## Table of contents

### Properties

- [cves\_without\_errata](MetaAffectedSystemsAllOf.md#cves_without_errata)
- [first\_reported\_from](MetaAffectedSystemsAllOf.md#first_reported_from)
- [first\_reported\_to](MetaAffectedSystemsAllOf.md#first_reported_to)
- [group\_ids](MetaAffectedSystemsAllOf.md#group_ids)
- [group\_names](MetaAffectedSystemsAllOf.md#group_names)
- [patch\_access](MetaAffectedSystemsAllOf.md#patch_access)
- [rhel\_version](MetaAffectedSystemsAllOf.md#rhel_version)
- [rule\_key](MetaAffectedSystemsAllOf.md#rule_key)
- [rule\_presence](MetaAffectedSystemsAllOf.md#rule_presence)
- [status\_id](MetaAffectedSystemsAllOf.md#status_id)

## Properties

### cves\_without\_errata

• **cves\_without\_errata**: `boolean`

CVEs without Errata feature flag

**`Memberof`**

MetaAffectedSystemsAllOf

#### Defined in

[api.ts:1424](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1424)

___

### first\_reported\_from

• **first\_reported\_from**: `string`

Filter system-cve pairs based on first time of detection of CVE.

**`Memberof`**

MetaAffectedSystemsAllOf

#### Defined in

[api.ts:1430](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1430)

___

### first\_reported\_to

• **first\_reported\_to**: `string`

Filter system-cve pairs based on first time of detection of CVE.

**`Memberof`**

MetaAffectedSystemsAllOf

#### Defined in

[api.ts:1436](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1436)

___

### group\_ids

• **group\_ids**: `string`

ID of the inventory group.

**`Memberof`**

MetaAffectedSystemsAllOf

#### Defined in

[api.ts:1442](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1442)

___

### group\_names

• **group\_names**: `string`

Name of the inventory group.

**`Memberof`**

MetaAffectedSystemsAllOf

#### Defined in

[api.ts:1448](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1448)

___

### patch\_access

• **patch\_access**: `boolean`

If show_advisories=true shows access to patch service else null

**`Memberof`**

MetaAffectedSystemsAllOf

#### Defined in

[api.ts:1454](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1454)

___

### rhel\_version

• **rhel\_version**: `string`

Filter base on system RHEL version.

**`Memberof`**

MetaAffectedSystemsAllOf

#### Defined in

[api.ts:1460](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1460)

___

### rule\_key

• **rule\_key**: `string`

Filters security rules by its error key.

**`Memberof`**

MetaAffectedSystemsAllOf

#### Defined in

[api.ts:1466](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1466)

___

### rule\_presence

• **rule\_presence**: `string`

Filter based on presence of security rule

**`Memberof`**

MetaAffectedSystemsAllOf

#### Defined in

[api.ts:1472](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1472)

___

### status\_id

• **status\_id**: `string`

Filer based on CVE status ID.

**`Memberof`**

MetaAffectedSystemsAllOf

#### Defined in

[api.ts:1478](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1478)
