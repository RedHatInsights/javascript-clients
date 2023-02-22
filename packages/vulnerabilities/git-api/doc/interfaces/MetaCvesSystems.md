[@redhat-cloud-services/vulnerabilities-client](../README.md) / [Exports](../modules.md) / MetaCvesSystems

# Interface: MetaCvesSystems

**`Export`**

**`Interface`**

MetaCvesSystems

## Table of contents

### Properties

- [business\_risk\_id](MetaCvesSystems.md#business_risk_id)
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

[api.ts:1657](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1657)

___

### cvss\_from

• **cvss\_from**: `number`

Filter based on cvss score, starting from the value. Use -1 to include also CVEs with N/A cvss score.

**`Memberof`**

MetaCvesSystems

#### Defined in

[api.ts:1663](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1663)

___

### cvss\_to

• **cvss\_to**: `number`

Filter based on cvss score, up to the value.

**`Memberof`**

MetaCvesSystems

#### Defined in

[api.ts:1669](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1669)

___

### data\_format

• **data\_format**: `string`

Format of the output data, either JSON (default) or CSV.

**`Memberof`**

MetaCvesSystems

#### Defined in

[api.ts:1597](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1597)

___

### filter

• **filter**: `string`

Full text filter

**`Memberof`**

MetaCvesSystems

#### Defined in

[api.ts:1603](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1603)

___

### first\_reported\_from

• **first\_reported\_from**: `string`

Filter system-cve pairs based on first time of detection of CVE.

**`Memberof`**

MetaCvesSystems

#### Defined in

[api.ts:1675](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1675)

___

### first\_reported\_to

• **first\_reported\_to**: `string`

Filter system-cve pairs based on first time of detection of CVE.

**`Memberof`**

MetaCvesSystems

#### Defined in

[api.ts:1681](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1681)

___

### impact

• **impact**: `string`

Filter based on impact IDs.

**`Memberof`**

MetaCvesSystems

#### Defined in

[api.ts:1687](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1687)

___

### limit

• **limit**: `number`

Maximum number of paginated results.

**`Memberof`**

MetaCvesSystems

#### Defined in

[api.ts:1609](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1609)

___

### offset

• **offset**: `number`

First record of paginated response.

**`Memberof`**

MetaCvesSystems

#### Defined in

[api.ts:1615](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1615)

___

### opt\_out

• **opt\_out**: `boolean`

If given system was opted out.

**`Memberof`**

MetaCvesSystems

#### Defined in

[api.ts:1723](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1723)

___

### page

• **page**: `number`

Page number of paginated response.

**`Memberof`**

MetaCvesSystems

#### Defined in

[api.ts:1621](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1621)

___

### page\_size

• **page\_size**: `number`

Number of records per page of paginated response.

**`Memberof`**

MetaCvesSystems

#### Defined in

[api.ts:1627](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1627)

___

### pages

• **pages**: `number`

Total number of pages of paginated response.

**`Memberof`**

MetaCvesSystems

#### Defined in

[api.ts:1633](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1633)

___

### patch\_access

• **patch\_access**: `boolean`

If show_advisories=true shows access to patch service else null

**`Memberof`**

MetaCvesSystems

#### Defined in

[api.ts:1693](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1693)

___

### permissions

• **permissions**: `string`[]

Fetched permissions from RBAC for given user

**`Memberof`**

MetaCvesSystems

#### Defined in

[api.ts:1651](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1651)

___

### public\_from

• **public\_from**: `string`

Filter CVEs based on their published date, starting from the date.

**`Memberof`**

MetaCvesSystems

#### Defined in

[api.ts:1699](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1699)

___

### public\_to

• **public\_to**: `string`

Filter CVEs based on their published date, up to the date.

**`Memberof`**

MetaCvesSystems

#### Defined in

[api.ts:1705](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1705)

___

### rule\_presence

• **rule\_presence**: `string`

Filter based on presence of security rule

**`Memberof`**

MetaCvesSystems

#### Defined in

[api.ts:1711](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1711)

___

### sort

• **sort**: `string`

Sorting filter.

**`Memberof`**

MetaCvesSystems

#### Defined in

[api.ts:1639](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1639)

___

### status\_id

• **status\_id**: `string`

Filer based on CVE status ID.

**`Memberof`**

MetaCvesSystems

#### Defined in

[api.ts:1717](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1717)

___

### total\_items

• **total\_items**: `number`

Total number of records.

**`Memberof`**

MetaCvesSystems

#### Defined in

[api.ts:1645](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1645)
