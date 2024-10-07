[@redhat-cloud-services/vulnerabilities-client](../README.md) / [Exports](../modules.md) / MetaCves

# Interface: MetaCves

**`Export`**

MetaCves

## Table of contents

### Properties

- [business\_risk\_id](MetaCves.md#business_risk_id)
- [cves\_without\_errata](MetaCves.md#cves_without_errata)
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

• **business\_risk\_id**: ``null`` \| `string`

Filter based on business risk IDs.

**`Memberof`**

MetaCves

#### Defined in

[api.ts:1507](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/vulnerabilities/git-api/api.ts#L1507)

___

### cves\_without\_errata

• **cves\_without\_errata**: ``null`` \| `boolean`

CVEs without Errata feature flag

**`Memberof`**

MetaCves

#### Defined in

[api.ts:1573](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/vulnerabilities/git-api/api.ts#L1573)

___

### cvss\_from

• **cvss\_from**: ``null`` \| `number`

Filter based on cvss score, starting from the value. Use -1 to include also CVEs with N/A cvss score.

**`Memberof`**

MetaCves

#### Defined in

[api.ts:1513](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/vulnerabilities/git-api/api.ts#L1513)

___

### cvss\_to

• **cvss\_to**: ``null`` \| `number`

Filter based on cvss score, up to the value.

**`Memberof`**

MetaCves

#### Defined in

[api.ts:1519](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/vulnerabilities/git-api/api.ts#L1519)

___

### data\_format

• **data\_format**: `string`

Format of the output data, either JSON (default) or CSV.

**`Memberof`**

MetaCves

#### Defined in

[api.ts:1495](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/vulnerabilities/git-api/api.ts#L1495)

___

### filter

• **filter**: ``null`` \| `string`

Full text filter

**`Memberof`**

MetaCves

#### Defined in

[api.ts:1447](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/vulnerabilities/git-api/api.ts#L1447)

___

### first\_reported\_from

• **first\_reported\_from**: ``null`` \| `string`

Filter system-cve pairs based on first time of detection of CVE.

**`Memberof`**

MetaCves

#### Defined in

[api.ts:1561](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/vulnerabilities/git-api/api.ts#L1561)

___

### first\_reported\_to

• **first\_reported\_to**: ``null`` \| `string`

Filter system-cve pairs based on first time of detection of CVE.

**`Memberof`**

MetaCves

#### Defined in

[api.ts:1567](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/vulnerabilities/git-api/api.ts#L1567)

___

### impact

• **impact**: ``null`` \| `string`

Filter based on impact IDs.

**`Memberof`**

MetaCves

#### Defined in

[api.ts:1537](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/vulnerabilities/git-api/api.ts#L1537)

___

### limit

• **limit**: `number`

Maximum number of paginated results.

**`Memberof`**

MetaCves

#### Defined in

[api.ts:1453](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/vulnerabilities/git-api/api.ts#L1453)

___

### offset

• **offset**: `number`

First record of paginated response.

**`Memberof`**

MetaCves

#### Defined in

[api.ts:1459](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/vulnerabilities/git-api/api.ts#L1459)

___

### page

• **page**: `number`

Page number of paginated response.

**`Memberof`**

MetaCves

#### Defined in

[api.ts:1465](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/vulnerabilities/git-api/api.ts#L1465)

___

### page\_size

• **page\_size**: `number`

Number of records per page of paginated response.

**`Memberof`**

MetaCves

#### Defined in

[api.ts:1471](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/vulnerabilities/git-api/api.ts#L1471)

___

### pages

• **pages**: `number`

Total number of pages of paginated response.

**`Memberof`**

MetaCves

#### Defined in

[api.ts:1477](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/vulnerabilities/git-api/api.ts#L1477)

___

### patch\_access

• **patch\_access**: ``null`` \| `boolean`

If show_advisories=true shows access to patch service else null

**`Memberof`**

MetaCves

#### Defined in

[api.ts:1555](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/vulnerabilities/git-api/api.ts#L1555)

___

### permissions

• **permissions**: `string`[]

Fetched permissions from RBAC for given user

**`Memberof`**

MetaCves

#### Defined in

[api.ts:1501](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/vulnerabilities/git-api/api.ts#L1501)

___

### public\_from

• **public\_from**: ``null`` \| `string`

Filter CVEs based on their published date, starting from the date.

**`Memberof`**

MetaCves

#### Defined in

[api.ts:1525](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/vulnerabilities/git-api/api.ts#L1525)

___

### public\_to

• **public\_to**: ``null`` \| `string`

Filter CVEs based on their published date, up to the date.

**`Memberof`**

MetaCves

#### Defined in

[api.ts:1531](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/vulnerabilities/git-api/api.ts#L1531)

___

### rule\_presence

• **rule\_presence**: ``null`` \| `string`

Filter based on presence of security rule

**`Memberof`**

MetaCves

#### Defined in

[api.ts:1549](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/vulnerabilities/git-api/api.ts#L1549)

___

### sort

• **sort**: ``null`` \| `string`

Sorting filter.

**`Memberof`**

MetaCves

#### Defined in

[api.ts:1483](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/vulnerabilities/git-api/api.ts#L1483)

___

### status\_id

• **status\_id**: ``null`` \| `string`

Filer based on CVE status ID.

**`Memberof`**

MetaCves

#### Defined in

[api.ts:1543](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/vulnerabilities/git-api/api.ts#L1543)

___

### total\_items

• **total\_items**: `number`

Total number of records.

**`Memberof`**

MetaCves

#### Defined in

[api.ts:1489](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/vulnerabilities/git-api/api.ts#L1489)
