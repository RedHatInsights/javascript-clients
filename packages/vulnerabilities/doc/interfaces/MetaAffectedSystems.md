[@redhat-cloud-services/vulnerabilities-client](../README.md) / [Exports](../modules.md) / MetaAffectedSystems

# Interface: MetaAffectedSystems

**`Export`**

**`Interface`**

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

• **cves\_without\_errata**: `boolean`

CVEs without Errata feature flag

**`Memberof`**

MetaAffectedSystems

#### Defined in

[api.ts:1332](https://github.com/mkholjuraev/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1332)

___

### data\_format

• **data\_format**: `string`

Format of the output data, either JSON (default) or CSV.

**`Memberof`**

MetaAffectedSystems

#### Defined in

[api.ts:1272](https://github.com/mkholjuraev/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1272)

___

### filter

• **filter**: `string`

Full text filter

**`Memberof`**

MetaAffectedSystems

#### Defined in

[api.ts:1278](https://github.com/mkholjuraev/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1278)

___

### first\_reported\_from

• **first\_reported\_from**: `string`

Filter system-cve pairs based on first time of detection of CVE.

**`Memberof`**

MetaAffectedSystems

#### Defined in

[api.ts:1338](https://github.com/mkholjuraev/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1338)

___

### first\_reported\_to

• **first\_reported\_to**: `string`

Filter system-cve pairs based on first time of detection of CVE.

**`Memberof`**

MetaAffectedSystems

#### Defined in

[api.ts:1344](https://github.com/mkholjuraev/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1344)

___

### group\_ids

• **group\_ids**: `string`

ID of the inventory group.

**`Memberof`**

MetaAffectedSystems

#### Defined in

[api.ts:1350](https://github.com/mkholjuraev/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1350)

___

### group\_names

• **group\_names**: `string`

Name of the inventory group.

**`Memberof`**

MetaAffectedSystems

#### Defined in

[api.ts:1356](https://github.com/mkholjuraev/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1356)

___

### limit

• **limit**: `number`

Maximum number of paginated results.

**`Memberof`**

MetaAffectedSystems

#### Defined in

[api.ts:1284](https://github.com/mkholjuraev/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1284)

___

### offset

• **offset**: `number`

First record of paginated response.

**`Memberof`**

MetaAffectedSystems

#### Defined in

[api.ts:1290](https://github.com/mkholjuraev/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1290)

___

### page

• **page**: `number`

Page number of paginated response.

**`Memberof`**

MetaAffectedSystems

#### Defined in

[api.ts:1296](https://github.com/mkholjuraev/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1296)

___

### page\_size

• **page\_size**: `number`

Number of records per page of paginated response.

**`Memberof`**

MetaAffectedSystems

#### Defined in

[api.ts:1302](https://github.com/mkholjuraev/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1302)

___

### pages

• **pages**: `number`

Total number of pages of paginated response.

**`Memberof`**

MetaAffectedSystems

#### Defined in

[api.ts:1308](https://github.com/mkholjuraev/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1308)

___

### patch\_access

• **patch\_access**: `boolean`

If show_advisories=true shows access to patch service else null

**`Memberof`**

MetaAffectedSystems

#### Defined in

[api.ts:1362](https://github.com/mkholjuraev/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1362)

___

### permissions

• **permissions**: `string`[]

Fetched permissions from RBAC for given user

**`Memberof`**

MetaAffectedSystems

#### Defined in

[api.ts:1326](https://github.com/mkholjuraev/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1326)

___

### rhel\_version

• **rhel\_version**: `string`

Filter base on system RHEL version.

**`Memberof`**

MetaAffectedSystems

#### Defined in

[api.ts:1368](https://github.com/mkholjuraev/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1368)

___

### rule\_key

• **rule\_key**: `string`

Filters security rules by its error key.

**`Memberof`**

MetaAffectedSystems

#### Defined in

[api.ts:1374](https://github.com/mkholjuraev/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1374)

___

### rule\_presence

• **rule\_presence**: `string`

Filter based on presence of security rule

**`Memberof`**

MetaAffectedSystems

#### Defined in

[api.ts:1380](https://github.com/mkholjuraev/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1380)

___

### sort

• **sort**: `string`

Sorting filter.

**`Memberof`**

MetaAffectedSystems

#### Defined in

[api.ts:1314](https://github.com/mkholjuraev/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1314)

___

### status\_id

• **status\_id**: `string`

Filer based on CVE status ID.

**`Memberof`**

MetaAffectedSystems

#### Defined in

[api.ts:1386](https://github.com/mkholjuraev/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1386)

___

### total\_items

• **total\_items**: `number`

Total number of records.

**`Memberof`**

MetaAffectedSystems

#### Defined in

[api.ts:1320](https://github.com/mkholjuraev/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1320)
