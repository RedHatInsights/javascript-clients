[@redhat-cloud-services/vulnerabilities-client](../README.md) / [Exports](../modules.md) / MetaAffectedSystems

# Interface: MetaAffectedSystems

**`Export`**

MetaAffectedSystems

## Table of contents

### Properties

- [cves\_without\_errata](MetaAffectedSystems.md#cves_without_errata)
- [data\_format](MetaAffectedSystems.md#data_format)
- [filter](MetaAffectedSystems.md#filter)
- [first\_reported\_from](MetaAffectedSystems.md#first_reported_from)
- [first\_reported\_to](MetaAffectedSystems.md#first_reported_to)
- [group\_ids](MetaAffectedSystems.md#group_ids)
- [group\_names](MetaAffectedSystems.md#group_names)
- [limit](MetaAffectedSystems.md#limit)
- [offset](MetaAffectedSystems.md#offset)
- [page](MetaAffectedSystems.md#page)
- [page\_size](MetaAffectedSystems.md#page_size)
- [pages](MetaAffectedSystems.md#pages)
- [patch\_access](MetaAffectedSystems.md#patch_access)
- [permissions](MetaAffectedSystems.md#permissions)
- [rhel\_version](MetaAffectedSystems.md#rhel_version)
- [rule\_key](MetaAffectedSystems.md#rule_key)
- [rule\_presence](MetaAffectedSystems.md#rule_presence)
- [sort](MetaAffectedSystems.md#sort)
- [status\_id](MetaAffectedSystems.md#status_id)
- [total\_items](MetaAffectedSystems.md#total_items)

## Properties

### cves\_without\_errata

• **cves\_without\_errata**: ``null`` \| `boolean`

CVEs without Errata feature flag

**`Memberof`**

MetaAffectedSystems

#### Defined in

[api.ts:1355](https://github.com/mkholjuraev/javascript-clients/blob/main/packages/vulnerabilities/git-api/api.ts#L1355)

___

### data\_format

• **data\_format**: `string`

Format of the output data, either JSON (default) or CSV.

**`Memberof`**

MetaAffectedSystems

#### Defined in

[api.ts:1301](https://github.com/mkholjuraev/javascript-clients/blob/main/packages/vulnerabilities/git-api/api.ts#L1301)

___

### filter

• **filter**: ``null`` \| `string`

Full text filter

**`Memberof`**

MetaAffectedSystems

#### Defined in

[api.ts:1253](https://github.com/mkholjuraev/javascript-clients/blob/main/packages/vulnerabilities/git-api/api.ts#L1253)

___

### first\_reported\_from

• **first\_reported\_from**: ``null`` \| `string`

Filter system-cve pairs based on first time of detection of CVE.

**`Memberof`**

MetaAffectedSystems

#### Defined in

[api.ts:1343](https://github.com/mkholjuraev/javascript-clients/blob/main/packages/vulnerabilities/git-api/api.ts#L1343)

___

### first\_reported\_to

• **first\_reported\_to**: ``null`` \| `string`

Filter system-cve pairs based on first time of detection of CVE.

**`Memberof`**

MetaAffectedSystems

#### Defined in

[api.ts:1349](https://github.com/mkholjuraev/javascript-clients/blob/main/packages/vulnerabilities/git-api/api.ts#L1349)

___

### group\_ids

• **group\_ids**: ``null`` \| `string`

ID of the inventory group.

**`Memberof`**

MetaAffectedSystems

#### Defined in

[api.ts:1367](https://github.com/mkholjuraev/javascript-clients/blob/main/packages/vulnerabilities/git-api/api.ts#L1367)

___

### group\_names

• **group\_names**: ``null`` \| `string`

Name of the inventory group.

**`Memberof`**

MetaAffectedSystems

#### Defined in

[api.ts:1361](https://github.com/mkholjuraev/javascript-clients/blob/main/packages/vulnerabilities/git-api/api.ts#L1361)

___

### limit

• **limit**: `number`

Maximum number of paginated results.

**`Memberof`**

MetaAffectedSystems

#### Defined in

[api.ts:1259](https://github.com/mkholjuraev/javascript-clients/blob/main/packages/vulnerabilities/git-api/api.ts#L1259)

___

### offset

• **offset**: `number`

First record of paginated response.

**`Memberof`**

MetaAffectedSystems

#### Defined in

[api.ts:1265](https://github.com/mkholjuraev/javascript-clients/blob/main/packages/vulnerabilities/git-api/api.ts#L1265)

___

### page

• **page**: `number`

Page number of paginated response.

**`Memberof`**

MetaAffectedSystems

#### Defined in

[api.ts:1271](https://github.com/mkholjuraev/javascript-clients/blob/main/packages/vulnerabilities/git-api/api.ts#L1271)

___

### page\_size

• **page\_size**: `number`

Number of records per page of paginated response.

**`Memberof`**

MetaAffectedSystems

#### Defined in

[api.ts:1277](https://github.com/mkholjuraev/javascript-clients/blob/main/packages/vulnerabilities/git-api/api.ts#L1277)

___

### pages

• **pages**: `number`

Total number of pages of paginated response.

**`Memberof`**

MetaAffectedSystems

#### Defined in

[api.ts:1283](https://github.com/mkholjuraev/javascript-clients/blob/main/packages/vulnerabilities/git-api/api.ts#L1283)

___

### patch\_access

• **patch\_access**: ``null`` \| `boolean`

If show_advisories=true shows access to patch service else null

**`Memberof`**

MetaAffectedSystems

#### Defined in

[api.ts:1331](https://github.com/mkholjuraev/javascript-clients/blob/main/packages/vulnerabilities/git-api/api.ts#L1331)

___

### permissions

• **permissions**: `string`[]

Fetched permissions from RBAC for given user

**`Memberof`**

MetaAffectedSystems

#### Defined in

[api.ts:1307](https://github.com/mkholjuraev/javascript-clients/blob/main/packages/vulnerabilities/git-api/api.ts#L1307)

___

### rhel\_version

• **rhel\_version**: ``null`` \| `string`

Filter base on system RHEL version.

**`Memberof`**

MetaAffectedSystems

#### Defined in

[api.ts:1337](https://github.com/mkholjuraev/javascript-clients/blob/main/packages/vulnerabilities/git-api/api.ts#L1337)

___

### rule\_key

• **rule\_key**: ``null`` \| `string`

Filters security rules by its error key.

**`Memberof`**

MetaAffectedSystems

#### Defined in

[api.ts:1319](https://github.com/mkholjuraev/javascript-clients/blob/main/packages/vulnerabilities/git-api/api.ts#L1319)

___

### rule\_presence

• **rule\_presence**: ``null`` \| `string`

Filter based on presence of security rule

**`Memberof`**

MetaAffectedSystems

#### Defined in

[api.ts:1325](https://github.com/mkholjuraev/javascript-clients/blob/main/packages/vulnerabilities/git-api/api.ts#L1325)

___

### sort

• **sort**: ``null`` \| `string`

Sorting filter.

**`Memberof`**

MetaAffectedSystems

#### Defined in

[api.ts:1289](https://github.com/mkholjuraev/javascript-clients/blob/main/packages/vulnerabilities/git-api/api.ts#L1289)

___

### status\_id

• **status\_id**: ``null`` \| `string`

Filer based on CVE status ID.

**`Memberof`**

MetaAffectedSystems

#### Defined in

[api.ts:1313](https://github.com/mkholjuraev/javascript-clients/blob/main/packages/vulnerabilities/git-api/api.ts#L1313)

___

### total\_items

• **total\_items**: `number`

Total number of records.

**`Memberof`**

MetaAffectedSystems

#### Defined in

[api.ts:1295](https://github.com/mkholjuraev/javascript-clients/blob/main/packages/vulnerabilities/git-api/api.ts#L1295)
