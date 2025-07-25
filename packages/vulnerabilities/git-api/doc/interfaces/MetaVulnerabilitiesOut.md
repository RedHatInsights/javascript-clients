[@redhat-cloud-services/vulnerabilities-client](../README.md) / [Exports](../modules.md) / MetaVulnerabilitiesOut

# Interface: MetaVulnerabilitiesOut

**`Export`**

MetaVulnerabilitiesOut

## Table of contents

### Properties

- [advisory\_available](MetaVulnerabilitiesOut.md#advisory_available)
- [affecting](MetaVulnerabilitiesOut.md#affecting)
- [business\_risk\_id](MetaVulnerabilitiesOut.md#business_risk_id)
- [cache\_used](MetaVulnerabilitiesOut.md#cache_used)
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
- [system\_count\_per\_type](MetaVulnerabilitiesOut.md#system_count_per_type)
- [total\_items](MetaVulnerabilitiesOut.md#total_items)

## Properties

### advisory\_available

• **advisory\_available**: ``null`` \| `string`

Shows whether a CVE has available advisory or not

**`Memberof`**

MetaVulnerabilitiesOut

#### Defined in

[api.ts:2066](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/vulnerabilities/git-api/api.ts#L2066)

___

### affecting

• **affecting**: ``null`` \| `string`

Description of CVE showing preferences

**`Memberof`**

MetaVulnerabilitiesOut

#### Defined in

[api.ts:1994](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/vulnerabilities/git-api/api.ts#L1994)

___

### business\_risk\_id

• **business\_risk\_id**: ``null`` \| `string`

Filter based on business risk IDs.

**`Memberof`**

MetaVulnerabilitiesOut

#### Defined in

[api.ts:2000](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/vulnerabilities/git-api/api.ts#L2000)

___

### cache\_used

• **cache\_used**: `boolean`

Flag if cached data was used to produce the response.

**`Memberof`**

MetaVulnerabilitiesOut

#### Defined in

[api.ts:2072](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/vulnerabilities/git-api/api.ts#L2072)

___

### cves\_without\_errata

• **cves\_without\_errata**: ``null`` \| `boolean`

CVEs without Errata feature flag

**`Memberof`**

MetaVulnerabilitiesOut

#### Defined in

[api.ts:2060](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/vulnerabilities/git-api/api.ts#L2060)

___

### cvss\_from

• **cvss\_from**: ``null`` \| `number`

Filter based on cvss score, starting from the value. Use -1 to include also CVEs with N/A cvss score.

**`Memberof`**

MetaVulnerabilitiesOut

#### Defined in

[api.ts:2006](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/vulnerabilities/git-api/api.ts#L2006)

___

### cvss\_to

• **cvss\_to**: ``null`` \| `number`

Filter based on cvss score, up to the value.

**`Memberof`**

MetaVulnerabilitiesOut

#### Defined in

[api.ts:2012](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/vulnerabilities/git-api/api.ts#L2012)

___

### data\_format

• **data\_format**: `string`

Format of the output data, either JSON (default) or CSV.

**`Memberof`**

MetaVulnerabilitiesOut

#### Defined in

[api.ts:1982](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/vulnerabilities/git-api/api.ts#L1982)

___

### filter

• **filter**: ``null`` \| `string`

Full text filter

**`Memberof`**

MetaVulnerabilitiesOut

#### Defined in

[api.ts:1934](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/vulnerabilities/git-api/api.ts#L1934)

___

### impact

• **impact**: ``null`` \| `string`

Filter based on impact IDs.

**`Memberof`**

MetaVulnerabilitiesOut

#### Defined in

[api.ts:2030](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/vulnerabilities/git-api/api.ts#L2030)

___

### limit

• **limit**: `number`

Maximum number of paginated results.

**`Memberof`**

MetaVulnerabilitiesOut

#### Defined in

[api.ts:1940](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/vulnerabilities/git-api/api.ts#L1940)

___

### offset

• **offset**: `number`

First record of paginated response.

**`Memberof`**

MetaVulnerabilitiesOut

#### Defined in

[api.ts:1946](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/vulnerabilities/git-api/api.ts#L1946)

___

### page

• **page**: `number`

Page number of paginated response.

**`Memberof`**

MetaVulnerabilitiesOut

#### Defined in

[api.ts:1952](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/vulnerabilities/git-api/api.ts#L1952)

___

### page\_size

• **page\_size**: `number`

Number of records per page of paginated response.

**`Memberof`**

MetaVulnerabilitiesOut

#### Defined in

[api.ts:1958](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/vulnerabilities/git-api/api.ts#L1958)

___

### pages

• **pages**: `number`

Total number of pages of paginated response.

**`Memberof`**

MetaVulnerabilitiesOut

#### Defined in

[api.ts:1964](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/vulnerabilities/git-api/api.ts#L1964)

___

### permissions

• **permissions**: `string`[]

Fetched permissions from RBAC for given user

**`Memberof`**

MetaVulnerabilitiesOut

#### Defined in

[api.ts:1988](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/vulnerabilities/git-api/api.ts#L1988)

___

### public\_from

• **public\_from**: ``null`` \| `string`

Filter CVEs based on their published date, starting from the date.

**`Memberof`**

MetaVulnerabilitiesOut

#### Defined in

[api.ts:2018](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/vulnerabilities/git-api/api.ts#L2018)

___

### public\_to

• **public\_to**: ``null`` \| `string`

Filter CVEs based on their published date, up to the date.

**`Memberof`**

MetaVulnerabilitiesOut

#### Defined in

[api.ts:2024](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/vulnerabilities/git-api/api.ts#L2024)

___

### rhel\_version

• **rhel\_version**: ``null`` \| `string`

Filter base on system RHEL version.

**`Memberof`**

MetaVulnerabilitiesOut

#### Defined in

[api.ts:2048](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/vulnerabilities/git-api/api.ts#L2048)

___

### rule\_presence

• **rule\_presence**: ``null`` \| `string`

Filter based on presence of security rule

**`Memberof`**

MetaVulnerabilitiesOut

#### Defined in

[api.ts:2054](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/vulnerabilities/git-api/api.ts#L2054)

___

### sort

• **sort**: ``null`` \| `string`

Sorting filter.

**`Memberof`**

MetaVulnerabilitiesOut

#### Defined in

[api.ts:1970](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/vulnerabilities/git-api/api.ts#L1970)

___

### system\_count

• `Optional` **system\_count**: `number`

Total number of systems managed by vulnerability application.

**`Memberof`**

MetaVulnerabilitiesOut

#### Defined in

[api.ts:2042](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/vulnerabilities/git-api/api.ts#L2042)

___

### system\_count\_per\_type

• `Optional` **system\_count\_per\_type**: [`MetaVulnerabilitiesOutAllOfSystemCountPerType`](MetaVulnerabilitiesOutAllOfSystemCountPerType.md)

**`Memberof`**

MetaVulnerabilitiesOut

#### Defined in

[api.ts:2036](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/vulnerabilities/git-api/api.ts#L2036)

___

### total\_items

• **total\_items**: `number`

Total number of records.

**`Memberof`**

MetaVulnerabilitiesOut

#### Defined in

[api.ts:1976](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/vulnerabilities/git-api/api.ts#L1976)
