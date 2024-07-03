[@redhat-cloud-services/vulnerabilities-client](../README.md) / [Exports](../modules.md) / MetaCvesSystems

# Interface: MetaCvesSystems

**`Export`**

MetaCvesSystems

## Table of contents

### Properties

- [business\_risk\_id](MetaCvesSystems.md#business_risk_id)
- [cves\_without\_errata](MetaCvesSystems.md#cves_without_errata)
- [cvss\_from](MetaCvesSystems.md#cvss_from)
- [cvss\_to](MetaCvesSystems.md#cvss_to)
- [data\_format](MetaCvesSystems.md#data_format)
- [filter](MetaCvesSystems.md#filter)
- [first\_reported\_from](MetaCvesSystems.md#first_reported_from)
- [first\_reported\_to](MetaCvesSystems.md#first_reported_to)
- [impact](MetaCvesSystems.md#impact)
- [limit](MetaCvesSystems.md#limit)
- [offset](MetaCvesSystems.md#offset)
- [opt\_out](MetaCvesSystems.md#opt_out)
- [page](MetaCvesSystems.md#page)
- [page\_size](MetaCvesSystems.md#page_size)
- [pages](MetaCvesSystems.md#pages)
- [patch\_access](MetaCvesSystems.md#patch_access)
- [permissions](MetaCvesSystems.md#permissions)
- [public\_from](MetaCvesSystems.md#public_from)
- [public\_to](MetaCvesSystems.md#public_to)
- [rule\_presence](MetaCvesSystems.md#rule_presence)
- [sort](MetaCvesSystems.md#sort)
- [status\_id](MetaCvesSystems.md#status_id)
- [total\_items](MetaCvesSystems.md#total_items)

## Properties

### business\_risk\_id

• **business\_risk\_id**: ``null`` \| `string`

Filter based on business risk IDs.

**`Memberof`**

MetaCvesSystems

#### Defined in

[api.ts:1725](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/vulnerabilities/api.ts#L1725)

___

### cves\_without\_errata

• **cves\_without\_errata**: ``null`` \| `boolean`

CVEs without Errata feature flag

**`Memberof`**

MetaCvesSystems

#### Defined in

[api.ts:1791](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/vulnerabilities/api.ts#L1791)

___

### cvss\_from

• **cvss\_from**: ``null`` \| `number`

Filter based on cvss score, starting from the value. Use -1 to include also CVEs with N/A cvss score.

**`Memberof`**

MetaCvesSystems

#### Defined in

[api.ts:1731](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/vulnerabilities/api.ts#L1731)

___

### cvss\_to

• **cvss\_to**: ``null`` \| `number`

Filter based on cvss score, up to the value.

**`Memberof`**

MetaCvesSystems

#### Defined in

[api.ts:1737](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/vulnerabilities/api.ts#L1737)

___

### data\_format

• **data\_format**: `string`

Format of the output data, either JSON (default) or CSV.

**`Memberof`**

MetaCvesSystems

#### Defined in

[api.ts:1713](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/vulnerabilities/api.ts#L1713)

___

### filter

• **filter**: ``null`` \| `string`

Full text filter

**`Memberof`**

MetaCvesSystems

#### Defined in

[api.ts:1665](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/vulnerabilities/api.ts#L1665)

___

### first\_reported\_from

• **first\_reported\_from**: ``null`` \| `string`

Filter system-cve pairs based on first time of detection of CVE.

**`Memberof`**

MetaCvesSystems

#### Defined in

[api.ts:1779](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/vulnerabilities/api.ts#L1779)

___

### first\_reported\_to

• **first\_reported\_to**: ``null`` \| `string`

Filter system-cve pairs based on first time of detection of CVE.

**`Memberof`**

MetaCvesSystems

#### Defined in

[api.ts:1785](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/vulnerabilities/api.ts#L1785)

___

### impact

• **impact**: ``null`` \| `string`

Filter based on impact IDs.

**`Memberof`**

MetaCvesSystems

#### Defined in

[api.ts:1755](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/vulnerabilities/api.ts#L1755)

___

### limit

• **limit**: `number`

Maximum number of paginated results.

**`Memberof`**

MetaCvesSystems

#### Defined in

[api.ts:1671](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/vulnerabilities/api.ts#L1671)

___

### offset

• **offset**: `number`

First record of paginated response.

**`Memberof`**

MetaCvesSystems

#### Defined in

[api.ts:1677](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/vulnerabilities/api.ts#L1677)

___

### opt\_out

• **opt\_out**: `boolean`

If given system was opted out.

**`Memberof`**

MetaCvesSystems

#### Defined in

[api.ts:1797](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/vulnerabilities/api.ts#L1797)

___

### page

• **page**: `number`

Page number of paginated response.

**`Memberof`**

MetaCvesSystems

#### Defined in

[api.ts:1683](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/vulnerabilities/api.ts#L1683)

___

### page\_size

• **page\_size**: `number`

Number of records per page of paginated response.

**`Memberof`**

MetaCvesSystems

#### Defined in

[api.ts:1689](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/vulnerabilities/api.ts#L1689)

___

### pages

• **pages**: `number`

Total number of pages of paginated response.

**`Memberof`**

MetaCvesSystems

#### Defined in

[api.ts:1695](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/vulnerabilities/api.ts#L1695)

___

### patch\_access

• **patch\_access**: ``null`` \| `boolean`

If show_advisories=true shows access to patch service else null

**`Memberof`**

MetaCvesSystems

#### Defined in

[api.ts:1773](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/vulnerabilities/api.ts#L1773)

___

### permissions

• **permissions**: `string`[]

Fetched permissions from RBAC for given user

**`Memberof`**

MetaCvesSystems

#### Defined in

[api.ts:1719](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/vulnerabilities/api.ts#L1719)

___

### public\_from

• **public\_from**: ``null`` \| `string`

Filter CVEs based on their published date, starting from the date.

**`Memberof`**

MetaCvesSystems

#### Defined in

[api.ts:1743](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/vulnerabilities/api.ts#L1743)

___

### public\_to

• **public\_to**: ``null`` \| `string`

Filter CVEs based on their published date, up to the date.

**`Memberof`**

MetaCvesSystems

#### Defined in

[api.ts:1749](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/vulnerabilities/api.ts#L1749)

___

### rule\_presence

• **rule\_presence**: ``null`` \| `string`

Filter based on presence of security rule

**`Memberof`**

MetaCvesSystems

#### Defined in

[api.ts:1767](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/vulnerabilities/api.ts#L1767)

___

### sort

• **sort**: ``null`` \| `string`

Sorting filter.

**`Memberof`**

MetaCvesSystems

#### Defined in

[api.ts:1701](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/vulnerabilities/api.ts#L1701)

___

### status\_id

• **status\_id**: ``null`` \| `string`

Filer based on CVE status ID.

**`Memberof`**

MetaCvesSystems

#### Defined in

[api.ts:1761](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/vulnerabilities/api.ts#L1761)

___

### total\_items

• **total\_items**: `number`

Total number of records.

**`Memberof`**

MetaCvesSystems

#### Defined in

[api.ts:1707](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/vulnerabilities/api.ts#L1707)
