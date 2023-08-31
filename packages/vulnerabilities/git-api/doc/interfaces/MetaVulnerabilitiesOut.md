[@redhat-cloud-services/vulnerabilities-client](../README.md) / [Exports](../modules.md) / MetaVulnerabilitiesOut

# Interface: MetaVulnerabilitiesOut

**`Export`**

**`Interface`**

MetaVulnerabilitiesOut

## Table of contents

### Properties

- [advisory\_available](MetaVulnerabilitiesOut.md#advisory_available)
- [affecting](MetaVulnerabilitiesOut.md#affecting)
- [business\_risk\_id](MetaVulnerabilitiesOut.md#business_risk_id)
- [cves\_without\_errata](MetaVulnerabilitiesOut.md#cves_without_errata)
- [cvss\_from](MetaVulnerabilitiesOut.md#cvss_from)
- [cvss\_to](MetaVulnerabilitiesOut.md#cvss_to)
- [data\_format](MetaVulnerabilitiesOut.md#data_format)
- [filter](MetaVulnerabilitiesOut.md#filter)
- [impact](MetaVulnerabilitiesOut.md#impact)
- [limit](MetaVulnerabilitiesOut.md#limit)
- [offset](MetaVulnerabilitiesOut.md#offset)
- [page](MetaVulnerabilitiesOut.md#page)
- [page\_size](MetaVulnerabilitiesOut.md#page_size)
- [pages](MetaVulnerabilitiesOut.md#pages)
- [permissions](MetaVulnerabilitiesOut.md#permissions)
- [public\_from](MetaVulnerabilitiesOut.md#public_from)
- [public\_to](MetaVulnerabilitiesOut.md#public_to)
- [rhel\_version](MetaVulnerabilitiesOut.md#rhel_version)
- [rule\_presence](MetaVulnerabilitiesOut.md#rule_presence)
- [sort](MetaVulnerabilitiesOut.md#sort)
- [system\_count](MetaVulnerabilitiesOut.md#system_count)
- [total\_items](MetaVulnerabilitiesOut.md#total_items)

## Properties

### advisory\_available

• **advisory\_available**: `string`

Shows whether a CVE has available advisory or not

**`Memberof`**

MetaVulnerabilitiesOut

#### Defined in

[api.ts:2038](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L2038)

___

### affecting

• **affecting**: `string`

Description of CVE showing preferences

**`Memberof`**

MetaVulnerabilitiesOut

#### Defined in

[api.ts:2044](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L2044)

___

### business\_risk\_id

• **business\_risk\_id**: `string`

Filter based on business risk IDs.

**`Memberof`**

MetaVulnerabilitiesOut

#### Defined in

[api.ts:2050](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L2050)

___

### cves\_without\_errata

• **cves\_without\_errata**: `boolean`

CVEs without Errata feature flag

**`Memberof`**

MetaVulnerabilitiesOut

#### Defined in

[api.ts:2056](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L2056)

___

### cvss\_from

• **cvss\_from**: `number`

Filter based on cvss score, starting from the value. Use -1 to include also CVEs with N/A cvss score.

**`Memberof`**

MetaVulnerabilitiesOut

#### Defined in

[api.ts:2062](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L2062)

___

### cvss\_to

• **cvss\_to**: `number`

Filter based on cvss score, up to the value.

**`Memberof`**

MetaVulnerabilitiesOut

#### Defined in

[api.ts:2068](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L2068)

___

### data\_format

• **data\_format**: `string`

Format of the output data, either JSON (default) or CSV.

**`Memberof`**

MetaVulnerabilitiesOut

#### Defined in

[api.ts:1978](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1978)

___

### filter

• **filter**: `string`

Full text filter

**`Memberof`**

MetaVulnerabilitiesOut

#### Defined in

[api.ts:1984](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1984)

___

### impact

• **impact**: `string`

Filter based on impact IDs.

**`Memberof`**

MetaVulnerabilitiesOut

#### Defined in

[api.ts:2074](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L2074)

___

### limit

• **limit**: `number`

Maximum number of paginated results.

**`Memberof`**

MetaVulnerabilitiesOut

#### Defined in

[api.ts:1990](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1990)

___

### offset

• **offset**: `number`

First record of paginated response.

**`Memberof`**

MetaVulnerabilitiesOut

#### Defined in

[api.ts:1996](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1996)

___

### page

• **page**: `number`

Page number of paginated response.

**`Memberof`**

MetaVulnerabilitiesOut

#### Defined in

[api.ts:2002](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L2002)

___

### page\_size

• **page\_size**: `number`

Number of records per page of paginated response.

**`Memberof`**

MetaVulnerabilitiesOut

#### Defined in

[api.ts:2008](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L2008)

___

### pages

• **pages**: `number`

Total number of pages of paginated response.

**`Memberof`**

MetaVulnerabilitiesOut

#### Defined in

[api.ts:2014](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L2014)

___

### permissions

• **permissions**: `string`[]

Fetched permissions from RBAC for given user

**`Memberof`**

MetaVulnerabilitiesOut

#### Defined in

[api.ts:2032](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L2032)

___

### public\_from

• **public\_from**: `string`

Filter CVEs based on their published date, starting from the date.

**`Memberof`**

MetaVulnerabilitiesOut

#### Defined in

[api.ts:2080](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L2080)

___

### public\_to

• **public\_to**: `string`

Filter CVEs based on their published date, up to the date.

**`Memberof`**

MetaVulnerabilitiesOut

#### Defined in

[api.ts:2086](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L2086)

___

### rhel\_version

• **rhel\_version**: `string`

Filter base on system RHEL version.

**`Memberof`**

MetaVulnerabilitiesOut

#### Defined in

[api.ts:2092](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L2092)

___

### rule\_presence

• **rule\_presence**: `string`

Filter based on presence of security rule

**`Memberof`**

MetaVulnerabilitiesOut

#### Defined in

[api.ts:2098](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L2098)

___

### sort

• **sort**: `string`

Sorting filter.

**`Memberof`**

MetaVulnerabilitiesOut

#### Defined in

[api.ts:2020](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L2020)

___

### system\_count

• `Optional` **system\_count**: `number`

Total number of systems managed by vulnerability application.

**`Memberof`**

MetaVulnerabilitiesOut

#### Defined in

[api.ts:2104](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L2104)

___

### total\_items

• **total\_items**: `number`

Total number of records.

**`Memberof`**

MetaVulnerabilitiesOut

#### Defined in

[api.ts:2026](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L2026)
