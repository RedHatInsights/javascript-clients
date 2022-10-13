[@redhat-cloud-services/vulnerabilities-client](../README.md) / [Exports](../modules.md) / MetaAffectedSystemsAllOf

# Interface: MetaAffectedSystemsAllOf

**`Export`**

**`Interface`**

MetaAffectedSystemsAllOf

## Table of contents

### Properties

- [first\_reported\_from](MetaAffectedSystemsAllOf.md#first_reported_from)
- [first\_reported\_to](MetaAffectedSystemsAllOf.md#first_reported_to)
- [patch\_access](MetaAffectedSystemsAllOf.md#patch_access)
- [rhel\_version](MetaAffectedSystemsAllOf.md#rhel_version)
- [rule\_key](MetaAffectedSystemsAllOf.md#rule_key)
- [rule\_presence](MetaAffectedSystemsAllOf.md#rule_presence)
- [status\_id](MetaAffectedSystemsAllOf.md#status_id)

## Properties

### first\_reported\_from

• **first\_reported\_from**: `string`

Filter system-cve pairs based on first time of detection of CVE.

**`Memberof`**

MetaAffectedSystemsAllOf

#### Defined in

[api.ts:1348](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1348)

___

### first\_reported\_to

• **first\_reported\_to**: `string`

Filter system-cve pairs based on first time of detection of CVE.

**`Memberof`**

MetaAffectedSystemsAllOf

#### Defined in

[api.ts:1354](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1354)

___

### patch\_access

• **patch\_access**: `boolean`

If show_advisories=true shows access to patch service else null

**`Memberof`**

MetaAffectedSystemsAllOf

#### Defined in

[api.ts:1360](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1360)

___

### rhel\_version

• **rhel\_version**: `string`

Filter base on system RHEL version.

**`Memberof`**

MetaAffectedSystemsAllOf

#### Defined in

[api.ts:1366](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1366)

___

### rule\_key

• **rule\_key**: `string`

Filters security rules by its error key.

**`Memberof`**

MetaAffectedSystemsAllOf

#### Defined in

[api.ts:1372](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1372)

___

### rule\_presence

• **rule\_presence**: `string`

Filter based on presence of security rule

**`Memberof`**

MetaAffectedSystemsAllOf

#### Defined in

[api.ts:1378](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1378)

___

### status\_id

• **status\_id**: `string`

Filer based on CVE status ID.

**`Memberof`**

MetaAffectedSystemsAllOf

#### Defined in

[api.ts:1384](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1384)
