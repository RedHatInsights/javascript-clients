[@redhat-cloud-services/vulnerabilities-client](../README.md) / [Exports](../modules.md) / MetaCvesSystems

# Interface: MetaCvesSystems

**`Export`**

**`Interface`**

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

• **business\_risk\_id**: `string`

Filter based on business risk IDs.

**`Memberof`**

MetaCvesSystems

#### Defined in

[api.ts:1769](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1769)

___

### cves\_without\_errata

• **cves\_without\_errata**: `boolean`

CVEs without Errata feature flag

**`Memberof`**

MetaCvesSystems

#### Defined in

[api.ts:1775](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1775)

___

### cvss\_from

• **cvss\_from**: `number`

Filter based on cvss score, starting from the value. Use -1 to include also CVEs with N/A cvss score.

**`Memberof`**

MetaCvesSystems

#### Defined in

[api.ts:1781](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1781)

___

### cvss\_to

• **cvss\_to**: `number`

Filter based on cvss score, up to the value.

**`Memberof`**

MetaCvesSystems

#### Defined in

[api.ts:1787](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1787)

___

### data\_format

• **data\_format**: `string`

Format of the output data, either JSON (default) or CSV.

**`Memberof`**

MetaCvesSystems

#### Defined in

[api.ts:1709](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1709)

___

### filter

• **filter**: `string`

Full text filter

**`Memberof`**

MetaCvesSystems

#### Defined in

[api.ts:1715](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1715)

___

### first\_reported\_from

• **first\_reported\_from**: `string`

Filter system-cve pairs based on first time of detection of CVE.

**`Memberof`**

MetaCvesSystems

#### Defined in

[api.ts:1793](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1793)

___

### first\_reported\_to

• **first\_reported\_to**: `string`

Filter system-cve pairs based on first time of detection of CVE.

**`Memberof`**

MetaCvesSystems

#### Defined in

[api.ts:1799](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1799)

___

### impact

• **impact**: `string`

Filter based on impact IDs.

**`Memberof`**

MetaCvesSystems

#### Defined in

[api.ts:1805](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1805)

___

### limit

• **limit**: `number`

Maximum number of paginated results.

**`Memberof`**

MetaCvesSystems

#### Defined in

[api.ts:1721](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1721)

___

### offset

• **offset**: `number`

First record of paginated response.

**`Memberof`**

MetaCvesSystems

#### Defined in

[api.ts:1727](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1727)

___

### opt\_out

• **opt\_out**: `boolean`

If given system was opted out.

**`Memberof`**

MetaCvesSystems

#### Defined in

[api.ts:1841](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1841)

___

### page

• **page**: `number`

Page number of paginated response.

**`Memberof`**

MetaCvesSystems

#### Defined in

[api.ts:1733](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1733)

___

### page\_size

• **page\_size**: `number`

Number of records per page of paginated response.

**`Memberof`**

MetaCvesSystems

#### Defined in

[api.ts:1739](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1739)

___

### pages

• **pages**: `number`

Total number of pages of paginated response.

**`Memberof`**

MetaCvesSystems

#### Defined in

[api.ts:1745](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1745)

___

### patch\_access

• **patch\_access**: `boolean`

If show_advisories=true shows access to patch service else null

**`Memberof`**

MetaCvesSystems

#### Defined in

[api.ts:1811](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1811)

___

### permissions

• **permissions**: `string`[]

Fetched permissions from RBAC for given user

**`Memberof`**

MetaCvesSystems

#### Defined in

[api.ts:1763](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1763)

___

### public\_from

• **public\_from**: `string`

Filter CVEs based on their published date, starting from the date.

**`Memberof`**

MetaCvesSystems

#### Defined in

[api.ts:1817](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1817)

___

### public\_to

• **public\_to**: `string`

Filter CVEs based on their published date, up to the date.

**`Memberof`**

MetaCvesSystems

#### Defined in

[api.ts:1823](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1823)

___

### rule\_presence

• **rule\_presence**: `string`

Filter based on presence of security rule

**`Memberof`**

MetaCvesSystems

#### Defined in

[api.ts:1829](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1829)

___

### sort

• **sort**: `string`

Sorting filter.

**`Memberof`**

MetaCvesSystems

#### Defined in

[api.ts:1751](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1751)

___

### status\_id

• **status\_id**: `string`

Filer based on CVE status ID.

**`Memberof`**

MetaCvesSystems

#### Defined in

[api.ts:1835](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1835)

___

### total\_items

• **total\_items**: `number`

Total number of records.

**`Memberof`**

MetaCvesSystems

#### Defined in

[api.ts:1757](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1757)
