[@redhat-cloud-services/vulnerabilities-client](../README.md) / [Exports](../modules.md) / MetaCves

# Interface: MetaCves

**`Export`**

**`Interface`**

MetaCves

## Table of contents

### Properties

- [business\_risk\_id](MetaCves.md#business_risk_id)
- [cvss\_from](MetaCves.md#cvss_from)
- [cvss\_to](MetaCves.md#cvss_to)
- [data\_format](MetaCves.md#data_format)
- [filter](MetaCves.md#filter)
- [first\_reported\_from](MetaCves.md#first_reported_from)
- [first\_reported\_to](MetaCves.md#first_reported_to)
- [impact](MetaCves.md#impact)
- [limit](MetaCves.md#limit)
- [offset](MetaCves.md#offset)
- [page](MetaCves.md#page)
- [page\_size](MetaCves.md#page_size)
- [pages](MetaCves.md#pages)
- [patch\_access](MetaCves.md#patch_access)
- [permissions](MetaCves.md#permissions)
- [public\_from](MetaCves.md#public_from)
- [public\_to](MetaCves.md#public_to)
- [rule\_presence](MetaCves.md#rule_presence)
- [sort](MetaCves.md#sort)
- [status\_id](MetaCves.md#status_id)
- [total\_items](MetaCves.md#total_items)

## Properties

### business\_risk\_id

• **business\_risk\_id**: `string`

Filter based on business risk IDs.

**`Memberof`**

MetaCves

#### Defined in

[api.ts:1457](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1457)

___

### cvss\_from

• **cvss\_from**: `number`

Filter based on cvss score, starting from the value. Use -1 to include also CVEs with N/A cvss score.

**`Memberof`**

MetaCves

#### Defined in

[api.ts:1463](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1463)

___

### cvss\_to

• **cvss\_to**: `number`

Filter based on cvss score, up to the value.

**`Memberof`**

MetaCves

#### Defined in

[api.ts:1469](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1469)

___

### data\_format

• **data\_format**: `string`

Format of the output data, either JSON (default) or CSV.

**`Memberof`**

MetaCves

#### Defined in

[api.ts:1397](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1397)

___

### filter

• **filter**: `string`

Full text filter

**`Memberof`**

MetaCves

#### Defined in

[api.ts:1403](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1403)

___

### first\_reported\_from

• **first\_reported\_from**: `string`

Filter system-cve pairs based on first time of detection of CVE.

**`Memberof`**

MetaCves

#### Defined in

[api.ts:1475](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1475)

___

### first\_reported\_to

• **first\_reported\_to**: `string`

Filter system-cve pairs based on first time of detection of CVE.

**`Memberof`**

MetaCves

#### Defined in

[api.ts:1481](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1481)

___

### impact

• **impact**: `string`

Filter based on impact IDs.

**`Memberof`**

MetaCves

#### Defined in

[api.ts:1487](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1487)

___

### limit

• **limit**: `number`

Maximum number of paginated results.

**`Memberof`**

MetaCves

#### Defined in

[api.ts:1409](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1409)

___

### offset

• **offset**: `number`

First record of paginated response.

**`Memberof`**

MetaCves

#### Defined in

[api.ts:1415](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1415)

___

### page

• **page**: `number`

Page number of paginated response.

**`Memberof`**

MetaCves

#### Defined in

[api.ts:1421](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1421)

___

### page\_size

• **page\_size**: `number`

Number of records per page of paginated response.

**`Memberof`**

MetaCves

#### Defined in

[api.ts:1427](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1427)

___

### pages

• **pages**: `number`

Total number of pages of paginated response.

**`Memberof`**

MetaCves

#### Defined in

[api.ts:1433](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1433)

___

### patch\_access

• **patch\_access**: `boolean`

If show_advisories=true shows access to patch service else null

**`Memberof`**

MetaCves

#### Defined in

[api.ts:1493](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1493)

___

### permissions

• **permissions**: `string`[]

Fetched permissions from RBAC for given user

**`Memberof`**

MetaCves

#### Defined in

[api.ts:1451](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1451)

___

### public\_from

• **public\_from**: `string`

Filter CVEs based on their published date, starting from the date.

**`Memberof`**

MetaCves

#### Defined in

[api.ts:1499](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1499)

___

### public\_to

• **public\_to**: `string`

Filter CVEs based on their published date, up to the date.

**`Memberof`**

MetaCves

#### Defined in

[api.ts:1505](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1505)

___

### rule\_presence

• **rule\_presence**: `string`

Filter based on presence of security rule

**`Memberof`**

MetaCves

#### Defined in

[api.ts:1511](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1511)

___

### sort

• **sort**: `string`

Sorting filter.

**`Memberof`**

MetaCves

#### Defined in

[api.ts:1439](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1439)

___

### status\_id

• **status\_id**: `string`

Filer based on CVE status ID.

**`Memberof`**

MetaCves

#### Defined in

[api.ts:1517](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1517)

___

### total\_items

• **total\_items**: `number`

Total number of records.

**`Memberof`**

MetaCves

#### Defined in

[api.ts:1445](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1445)
