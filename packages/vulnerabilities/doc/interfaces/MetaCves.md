[@redhat-cloud-services/vulnerabilities-client](../README.md) / [Exports](../modules.md) / MetaCves

# Interface: MetaCves

**`Export`**

**`Interface`**

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

• **business\_risk\_id**: `string`

Filter based on business risk IDs.

**`Memberof`**

MetaCves

#### Defined in

[api.ts:1526](https://github.com/mkholjuraev/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1526)

___

### cves\_without\_errata

• **cves\_without\_errata**: `boolean`

CVEs without Errata feature flag

**`Memberof`**

MetaCves

#### Defined in

[api.ts:1532](https://github.com/mkholjuraev/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1532)

___

### cvss\_from

• **cvss\_from**: `number`

Filter based on cvss score, starting from the value. Use -1 to include also CVEs with N/A cvss score.

**`Memberof`**

MetaCves

#### Defined in

[api.ts:1538](https://github.com/mkholjuraev/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1538)

___

### cvss\_to

• **cvss\_to**: `number`

Filter based on cvss score, up to the value.

**`Memberof`**

MetaCves

#### Defined in

[api.ts:1544](https://github.com/mkholjuraev/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1544)

___

### data\_format

• **data\_format**: `string`

Format of the output data, either JSON (default) or CSV.

**`Memberof`**

MetaCves

#### Defined in

[api.ts:1466](https://github.com/mkholjuraev/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1466)

___

### filter

• **filter**: `string`

Full text filter

**`Memberof`**

MetaCves

#### Defined in

[api.ts:1472](https://github.com/mkholjuraev/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1472)

___

### first\_reported\_from

• **first\_reported\_from**: `string`

Filter system-cve pairs based on first time of detection of CVE.

**`Memberof`**

MetaCves

#### Defined in

[api.ts:1550](https://github.com/mkholjuraev/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1550)

___

### first\_reported\_to

• **first\_reported\_to**: `string`

Filter system-cve pairs based on first time of detection of CVE.

**`Memberof`**

MetaCves

#### Defined in

[api.ts:1556](https://github.com/mkholjuraev/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1556)

___

### impact

• **impact**: `string`

Filter based on impact IDs.

**`Memberof`**

MetaCves

#### Defined in

[api.ts:1562](https://github.com/mkholjuraev/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1562)

___

### limit

• **limit**: `number`

Maximum number of paginated results.

**`Memberof`**

MetaCves

#### Defined in

[api.ts:1478](https://github.com/mkholjuraev/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1478)

___

### offset

• **offset**: `number`

First record of paginated response.

**`Memberof`**

MetaCves

#### Defined in

[api.ts:1484](https://github.com/mkholjuraev/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1484)

___

### page

• **page**: `number`

Page number of paginated response.

**`Memberof`**

MetaCves

#### Defined in

[api.ts:1490](https://github.com/mkholjuraev/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1490)

___

### page\_size

• **page\_size**: `number`

Number of records per page of paginated response.

**`Memberof`**

MetaCves

#### Defined in

[api.ts:1496](https://github.com/mkholjuraev/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1496)

___

### pages

• **pages**: `number`

Total number of pages of paginated response.

**`Memberof`**

MetaCves

#### Defined in

[api.ts:1502](https://github.com/mkholjuraev/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1502)

___

### patch\_access

• **patch\_access**: `boolean`

If show_advisories=true shows access to patch service else null

**`Memberof`**

MetaCves

#### Defined in

[api.ts:1568](https://github.com/mkholjuraev/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1568)

___

### permissions

• **permissions**: `string`[]

Fetched permissions from RBAC for given user

**`Memberof`**

MetaCves

#### Defined in

[api.ts:1520](https://github.com/mkholjuraev/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1520)

___

### public\_from

• **public\_from**: `string`

Filter CVEs based on their published date, starting from the date.

**`Memberof`**

MetaCves

#### Defined in

[api.ts:1574](https://github.com/mkholjuraev/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1574)

___

### public\_to

• **public\_to**: `string`

Filter CVEs based on their published date, up to the date.

**`Memberof`**

MetaCves

#### Defined in

[api.ts:1580](https://github.com/mkholjuraev/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1580)

___

### rule\_presence

• **rule\_presence**: `string`

Filter based on presence of security rule

**`Memberof`**

MetaCves

#### Defined in

[api.ts:1586](https://github.com/mkholjuraev/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1586)

___

### sort

• **sort**: `string`

Sorting filter.

**`Memberof`**

MetaCves

#### Defined in

[api.ts:1508](https://github.com/mkholjuraev/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1508)

___

### status\_id

• **status\_id**: `string`

Filer based on CVE status ID.

**`Memberof`**

MetaCves

#### Defined in

[api.ts:1592](https://github.com/mkholjuraev/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1592)

___

### total\_items

• **total\_items**: `number`

Total number of records.

**`Memberof`**

MetaCves

#### Defined in

[api.ts:1514](https://github.com/mkholjuraev/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1514)
