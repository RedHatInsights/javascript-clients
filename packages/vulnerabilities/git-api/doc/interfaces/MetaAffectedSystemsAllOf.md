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

[api.ts:1399](https://github.com/mkholjuraev/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1399)

___

### first\_reported\_from

• **first\_reported\_from**: `string`

Filter system-cve pairs based on first time of detection of CVE.

**`Memberof`**

MetaAffectedSystemsAllOf

#### Defined in

[api.ts:1405](https://github.com/mkholjuraev/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1405)

___

### first\_reported\_to

• **first\_reported\_to**: `string`

Filter system-cve pairs based on first time of detection of CVE.

**`Memberof`**

MetaAffectedSystemsAllOf

#### Defined in

[api.ts:1411](https://github.com/mkholjuraev/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1411)

___

### group\_ids

• **group\_ids**: `string`

ID of the inventory group.

**`Memberof`**

MetaAffectedSystemsAllOf

#### Defined in

[api.ts:1417](https://github.com/mkholjuraev/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1417)

___

### group\_names

• **group\_names**: `string`

Name of the inventory group.

**`Memberof`**

MetaAffectedSystemsAllOf

#### Defined in

[api.ts:1423](https://github.com/mkholjuraev/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1423)

___

### patch\_access

• **patch\_access**: `boolean`

If show_advisories=true shows access to patch service else null

**`Memberof`**

MetaAffectedSystemsAllOf

#### Defined in

[api.ts:1429](https://github.com/mkholjuraev/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1429)

___

### rhel\_version

• **rhel\_version**: `string`

Filter base on system RHEL version.

**`Memberof`**

MetaAffectedSystemsAllOf

#### Defined in

[api.ts:1435](https://github.com/mkholjuraev/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1435)

___

### rule\_key

• **rule\_key**: `string`

Filters security rules by its error key.

**`Memberof`**

MetaAffectedSystemsAllOf

#### Defined in

[api.ts:1441](https://github.com/mkholjuraev/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1441)

___

### rule\_presence

• **rule\_presence**: `string`

Filter based on presence of security rule

**`Memberof`**

MetaAffectedSystemsAllOf

#### Defined in

[api.ts:1447](https://github.com/mkholjuraev/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1447)

___

### status\_id

• **status\_id**: `string`

Filer based on CVE status ID.

**`Memberof`**

MetaAffectedSystemsAllOf

#### Defined in

[api.ts:1453](https://github.com/mkholjuraev/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1453)
