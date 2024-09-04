[@redhat-cloud-services/vulnerabilities-client](../README.md) / [Exports](../modules.md) / MetaAffectedSystemsAllOf

# Interface: MetaAffectedSystemsAllOf

**`Export`**

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

• **cves\_without\_errata**: ``null`` \| `boolean`

CVEs without Errata feature flag

**`Memberof`**

MetaAffectedSystemsAllOf

#### Defined in

[api.ts:1422](https://github.com/mkholjuraev/javascript-clients/blob/main/packages/vulnerabilities/git-api/api.ts#L1422)

___

### first\_reported\_from

• **first\_reported\_from**: ``null`` \| `string`

Filter system-cve pairs based on first time of detection of CVE.

**`Memberof`**

MetaAffectedSystemsAllOf

#### Defined in

[api.ts:1410](https://github.com/mkholjuraev/javascript-clients/blob/main/packages/vulnerabilities/git-api/api.ts#L1410)

___

### first\_reported\_to

• **first\_reported\_to**: ``null`` \| `string`

Filter system-cve pairs based on first time of detection of CVE.

**`Memberof`**

MetaAffectedSystemsAllOf

#### Defined in

[api.ts:1416](https://github.com/mkholjuraev/javascript-clients/blob/main/packages/vulnerabilities/git-api/api.ts#L1416)

___

### group\_ids

• **group\_ids**: ``null`` \| `string`

ID of the inventory group.

**`Memberof`**

MetaAffectedSystemsAllOf

#### Defined in

[api.ts:1434](https://github.com/mkholjuraev/javascript-clients/blob/main/packages/vulnerabilities/git-api/api.ts#L1434)

___

### group\_names

• **group\_names**: ``null`` \| `string`

Name of the inventory group.

**`Memberof`**

MetaAffectedSystemsAllOf

#### Defined in

[api.ts:1428](https://github.com/mkholjuraev/javascript-clients/blob/main/packages/vulnerabilities/git-api/api.ts#L1428)

___

### patch\_access

• **patch\_access**: ``null`` \| `boolean`

If show_advisories=true shows access to patch service else null

**`Memberof`**

MetaAffectedSystemsAllOf

#### Defined in

[api.ts:1398](https://github.com/mkholjuraev/javascript-clients/blob/main/packages/vulnerabilities/git-api/api.ts#L1398)

___

### rhel\_version

• **rhel\_version**: ``null`` \| `string`

Filter base on system RHEL version.

**`Memberof`**

MetaAffectedSystemsAllOf

#### Defined in

[api.ts:1404](https://github.com/mkholjuraev/javascript-clients/blob/main/packages/vulnerabilities/git-api/api.ts#L1404)

___

### rule\_key

• **rule\_key**: ``null`` \| `string`

Filters security rules by its error key.

**`Memberof`**

MetaAffectedSystemsAllOf

#### Defined in

[api.ts:1386](https://github.com/mkholjuraev/javascript-clients/blob/main/packages/vulnerabilities/git-api/api.ts#L1386)

___

### rule\_presence

• **rule\_presence**: ``null`` \| `string`

Filter based on presence of security rule

**`Memberof`**

MetaAffectedSystemsAllOf

#### Defined in

[api.ts:1392](https://github.com/mkholjuraev/javascript-clients/blob/main/packages/vulnerabilities/git-api/api.ts#L1392)

___

### status\_id

• **status\_id**: ``null`` \| `string`

Filer based on CVE status ID.

**`Memberof`**

MetaAffectedSystemsAllOf

#### Defined in

[api.ts:1380](https://github.com/mkholjuraev/javascript-clients/blob/main/packages/vulnerabilities/git-api/api.ts#L1380)
