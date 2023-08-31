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

[api.ts:1357](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1357)

___

### data\_format

• **data\_format**: `string`

Format of the output data, either JSON (default) or CSV.

**`Memberof`**

MetaAffectedSystems

#### Defined in

[api.ts:1297](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1297)

___

### filter

• **filter**: `string`

Full text filter

**`Memberof`**

MetaAffectedSystems

#### Defined in

[api.ts:1303](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1303)

___

### first\_reported\_from

• **first\_reported\_from**: `string`

Filter system-cve pairs based on first time of detection of CVE.

**`Memberof`**

MetaAffectedSystems

#### Defined in

[api.ts:1363](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1363)

___

### first\_reported\_to

• **first\_reported\_to**: `string`

Filter system-cve pairs based on first time of detection of CVE.

**`Memberof`**

MetaAffectedSystems

#### Defined in

[api.ts:1369](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1369)

___

### group\_ids

• **group\_ids**: `string`

ID of the inventory group.

**`Memberof`**

MetaAffectedSystems

#### Defined in

[api.ts:1375](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1375)

___

### group\_names

• **group\_names**: `string`

Name of the inventory group.

**`Memberof`**

MetaAffectedSystems

#### Defined in

[api.ts:1381](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1381)

___

### limit

• **limit**: `number`

Maximum number of paginated results.

**`Memberof`**

MetaAffectedSystems

#### Defined in

[api.ts:1309](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1309)

___

### offset

• **offset**: `number`

First record of paginated response.

**`Memberof`**

MetaAffectedSystems

#### Defined in

[api.ts:1315](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1315)

___

### page

• **page**: `number`

Page number of paginated response.

**`Memberof`**

MetaAffectedSystems

#### Defined in

[api.ts:1321](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1321)

___

### page\_size

• **page\_size**: `number`

Number of records per page of paginated response.

**`Memberof`**

MetaAffectedSystems

#### Defined in

[api.ts:1327](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1327)

___

### pages

• **pages**: `number`

Total number of pages of paginated response.

**`Memberof`**

MetaAffectedSystems

#### Defined in

[api.ts:1333](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1333)

___

### patch\_access

• **patch\_access**: `boolean`

If show_advisories=true shows access to patch service else null

**`Memberof`**

MetaAffectedSystems

#### Defined in

[api.ts:1387](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1387)

___

### permissions

• **permissions**: `string`[]

Fetched permissions from RBAC for given user

**`Memberof`**

MetaAffectedSystems

#### Defined in

[api.ts:1351](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1351)

___

### rhel\_version

• **rhel\_version**: `string`

Filter base on system RHEL version.

**`Memberof`**

MetaAffectedSystems

#### Defined in

[api.ts:1393](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1393)

___

### rule\_key

• **rule\_key**: `string`

Filters security rules by its error key.

**`Memberof`**

MetaAffectedSystems

#### Defined in

[api.ts:1399](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1399)

___

### rule\_presence

• **rule\_presence**: `string`

Filter based on presence of security rule

**`Memberof`**

MetaAffectedSystems

#### Defined in

[api.ts:1405](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1405)

___

### sort

• **sort**: `string`

Sorting filter.

**`Memberof`**

MetaAffectedSystems

#### Defined in

[api.ts:1339](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1339)

___

### status\_id

• **status\_id**: `string`

Filer based on CVE status ID.

**`Memberof`**

MetaAffectedSystems

#### Defined in

[api.ts:1411](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1411)

___

### total\_items

• **total\_items**: `number`

Total number of records.

**`Memberof`**

MetaAffectedSystems

#### Defined in

[api.ts:1345](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1345)
