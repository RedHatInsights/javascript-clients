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

• **business\_risk\_id**: ``null`` \| `string`

Filter based on business risk IDs.

**`Memberof`**

MetaCvesSystems

#### Defined in

[api.ts:1744](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1744)

___

### cves\_without\_errata

• **cves\_without\_errata**: ``null`` \| `boolean`

CVEs without Errata feature flag

**`Memberof`**

MetaCvesSystems

#### Defined in

[api.ts:1750](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1750)

___

### cvss\_from

• **cvss\_from**: ``null`` \| `number`

Filter based on cvss score, starting from the value. Use -1 to include also CVEs with N/A cvss score.

**`Memberof`**

MetaCvesSystems

#### Defined in

[api.ts:1756](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1756)

___

### cvss\_to

• **cvss\_to**: ``null`` \| `number`

Filter based on cvss score, up to the value.

**`Memberof`**

MetaCvesSystems

#### Defined in

[api.ts:1762](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1762)

___

### data\_format

• **data\_format**: `string`

Format of the output data, either JSON (default) or CSV.

**`Memberof`**

MetaCvesSystems

#### Defined in

[api.ts:1684](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1684)

___

### filter

• **filter**: ``null`` \| `string`

Full text filter

**`Memberof`**

MetaCvesSystems

#### Defined in

[api.ts:1690](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1690)

___

### first\_reported\_from

• **first\_reported\_from**: ``null`` \| `string`

Filter system-cve pairs based on first time of detection of CVE.

**`Memberof`**

MetaCvesSystems

#### Defined in

[api.ts:1768](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1768)

___

### first\_reported\_to

• **first\_reported\_to**: ``null`` \| `string`

Filter system-cve pairs based on first time of detection of CVE.

**`Memberof`**

MetaCvesSystems

#### Defined in

[api.ts:1774](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1774)

___

### impact

• **impact**: ``null`` \| `string`

Filter based on impact IDs.

**`Memberof`**

MetaCvesSystems

#### Defined in

[api.ts:1780](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1780)

___

### limit

• **limit**: `number`

Maximum number of paginated results.

**`Memberof`**

MetaCvesSystems

#### Defined in

[api.ts:1696](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1696)

___

### offset

• **offset**: `number`

First record of paginated response.

**`Memberof`**

MetaCvesSystems

#### Defined in

[api.ts:1702](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1702)

___

### opt\_out

• **opt\_out**: `boolean`

If given system was opted out.

**`Memberof`**

MetaCvesSystems

#### Defined in

[api.ts:1816](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1816)

___

### page

• **page**: `number`

Page number of paginated response.

**`Memberof`**

MetaCvesSystems

#### Defined in

[api.ts:1708](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1708)

___

### page\_size

• **page\_size**: `number`

Number of records per page of paginated response.

**`Memberof`**

MetaCvesSystems

#### Defined in

[api.ts:1714](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1714)

___

### pages

• **pages**: `number`

Total number of pages of paginated response.

**`Memberof`**

MetaCvesSystems

#### Defined in

[api.ts:1720](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1720)

___

### patch\_access

• **patch\_access**: ``null`` \| `boolean`

If show_advisories=true shows access to patch service else null

**`Memberof`**

MetaCvesSystems

#### Defined in

[api.ts:1786](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1786)

___

### permissions

• **permissions**: `string`[]

Fetched permissions from RBAC for given user

**`Memberof`**

MetaCvesSystems

#### Defined in

[api.ts:1738](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1738)

___

### public\_from

• **public\_from**: ``null`` \| `string`

Filter CVEs based on their published date, starting from the date.

**`Memberof`**

MetaCvesSystems

#### Defined in

[api.ts:1792](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1792)

___

### public\_to

• **public\_to**: ``null`` \| `string`

Filter CVEs based on their published date, up to the date.

**`Memberof`**

MetaCvesSystems

#### Defined in

[api.ts:1798](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1798)

___

### rule\_presence

• **rule\_presence**: ``null`` \| `string`

Filter based on presence of security rule

**`Memberof`**

MetaCvesSystems

#### Defined in

[api.ts:1804](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1804)

___

### sort

• **sort**: ``null`` \| `string`

Sorting filter.

**`Memberof`**

MetaCvesSystems

#### Defined in

[api.ts:1726](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1726)

___

### status\_id

• **status\_id**: ``null`` \| `string`

Filer based on CVE status ID.

**`Memberof`**

MetaCvesSystems

#### Defined in

[api.ts:1810](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1810)

___

### total\_items

• **total\_items**: `number`

Total number of records.

**`Memberof`**

MetaCvesSystems

#### Defined in

[api.ts:1732](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1732)
