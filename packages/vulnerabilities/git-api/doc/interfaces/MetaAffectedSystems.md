[@redhat-cloud-services/vulnerabilities-client](../README.md) / [Exports](../modules.md) / MetaAffectedSystems

# Interface: MetaAffectedSystems

**`Export`**

**`Interface`**

MetaAffectedSystems

## Table of contents

### Properties

- [data\_format](MetaAffectedSystems.md#data_format)
- [filter](MetaAffectedSystems.md#filter)
- [first\_reported\_from](MetaAffectedSystems.md#first_reported_from)
- [first\_reported\_to](MetaAffectedSystems.md#first_reported_to)
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

### data\_format

• **data\_format**: `string`

Format of the output data, either JSON (default) or CSV.

**`Memberof`**

MetaAffectedSystems

#### Defined in

[api.ts:1239](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1239)

___

### filter

• **filter**: `string`

Full text filter

**`Memberof`**

MetaAffectedSystems

#### Defined in

[api.ts:1245](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1245)

___

### first\_reported\_from

• **first\_reported\_from**: `string`

Filter system-cve pairs based on first time of detection of CVE.

**`Memberof`**

MetaAffectedSystems

#### Defined in

[api.ts:1299](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1299)

___

### first\_reported\_to

• **first\_reported\_to**: `string`

Filter system-cve pairs based on first time of detection of CVE.

**`Memberof`**

MetaAffectedSystems

#### Defined in

[api.ts:1305](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1305)

___

### limit

• **limit**: `number`

Maximum number of paginated results.

**`Memberof`**

MetaAffectedSystems

#### Defined in

[api.ts:1251](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1251)

___

### offset

• **offset**: `number`

First record of paginated response.

**`Memberof`**

MetaAffectedSystems

#### Defined in

[api.ts:1257](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1257)

___

### page

• **page**: `number`

Page number of paginated response.

**`Memberof`**

MetaAffectedSystems

#### Defined in

[api.ts:1263](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1263)

___

### page\_size

• **page\_size**: `number`

Number of records per page of paginated response.

**`Memberof`**

MetaAffectedSystems

#### Defined in

[api.ts:1269](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1269)

___

### pages

• **pages**: `number`

Total number of pages of paginated response.

**`Memberof`**

MetaAffectedSystems

#### Defined in

[api.ts:1275](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1275)

___

### patch\_access

• **patch\_access**: `boolean`

If show_advisories=true shows access to patch service else null

**`Memberof`**

MetaAffectedSystems

#### Defined in

[api.ts:1311](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1311)

___

### permissions

• **permissions**: `string`[]

Fetched permissions from RBAC for given user

**`Memberof`**

MetaAffectedSystems

#### Defined in

[api.ts:1293](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1293)

___

### rhel\_version

• **rhel\_version**: `string`

Filter base on system RHEL version.

**`Memberof`**

MetaAffectedSystems

#### Defined in

[api.ts:1317](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1317)

___

### rule\_key

• **rule\_key**: `string`

Filters security rules by its error key.

**`Memberof`**

MetaAffectedSystems

#### Defined in

[api.ts:1323](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1323)

___

### rule\_presence

• **rule\_presence**: `string`

Filter based on presence of security rule

**`Memberof`**

MetaAffectedSystems

#### Defined in

[api.ts:1329](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1329)

___

### sort

• **sort**: `string`

Sorting filter.

**`Memberof`**

MetaAffectedSystems

#### Defined in

[api.ts:1281](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1281)

___

### status\_id

• **status\_id**: `string`

Filer based on CVE status ID.

**`Memberof`**

MetaAffectedSystems

#### Defined in

[api.ts:1335](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1335)

___

### total\_items

• **total\_items**: `number`

Total number of records.

**`Memberof`**

MetaAffectedSystems

#### Defined in

[api.ts:1287](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1287)
