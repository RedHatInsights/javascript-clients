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
- [system\_count\_per\_type](MetaVulnerabilitiesOut.md#system_count_per_type)
- [total\_items](MetaVulnerabilitiesOut.md#total_items)

## Properties

### advisory\_available

• **advisory\_available**: ``null`` \| `string`

Shows whether a CVE has available advisory or not

**`Memberof`**

MetaVulnerabilitiesOut

#### Defined in

[api.ts:2013](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L2013)

___

### affecting

• **affecting**: ``null`` \| `string`

Description of CVE showing preferences

**`Memberof`**

MetaVulnerabilitiesOut

#### Defined in

[api.ts:2019](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L2019)

___

### business\_risk\_id

• **business\_risk\_id**: ``null`` \| `string`

Filter based on business risk IDs.

**`Memberof`**

MetaVulnerabilitiesOut

#### Defined in

[api.ts:2025](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L2025)

___

### cves\_without\_errata

• **cves\_without\_errata**: ``null`` \| `boolean`

CVEs without Errata feature flag

**`Memberof`**

MetaVulnerabilitiesOut

#### Defined in

[api.ts:2031](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L2031)

___

### cvss\_from

• **cvss\_from**: ``null`` \| `number`

Filter based on cvss score, starting from the value. Use -1 to include also CVEs with N/A cvss score.

**`Memberof`**

MetaVulnerabilitiesOut

#### Defined in

[api.ts:2037](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L2037)

___

### cvss\_to

• **cvss\_to**: ``null`` \| `number`

Filter based on cvss score, up to the value.

**`Memberof`**

MetaVulnerabilitiesOut

#### Defined in

[api.ts:2043](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L2043)

___

### data\_format

• **data\_format**: `string`

Format of the output data, either JSON (default) or CSV.

**`Memberof`**

MetaVulnerabilitiesOut

#### Defined in

[api.ts:1953](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1953)

___

### filter

• **filter**: ``null`` \| `string`

Full text filter

**`Memberof`**

MetaVulnerabilitiesOut

#### Defined in

[api.ts:1959](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1959)

___

### impact

• **impact**: ``null`` \| `string`

Filter based on impact IDs.

**`Memberof`**

MetaVulnerabilitiesOut

#### Defined in

[api.ts:2049](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L2049)

___

### limit

• **limit**: `number`

Maximum number of paginated results.

**`Memberof`**

MetaVulnerabilitiesOut

#### Defined in

[api.ts:1965](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1965)

___

### offset

• **offset**: `number`

First record of paginated response.

**`Memberof`**

MetaVulnerabilitiesOut

#### Defined in

[api.ts:1971](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1971)

___

### page

• **page**: `number`

Page number of paginated response.

**`Memberof`**

MetaVulnerabilitiesOut

#### Defined in

[api.ts:1977](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1977)

___

### page\_size

• **page\_size**: `number`

Number of records per page of paginated response.

**`Memberof`**

MetaVulnerabilitiesOut

#### Defined in

[api.ts:1983](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1983)

___

### pages

• **pages**: `number`

Total number of pages of paginated response.

**`Memberof`**

MetaVulnerabilitiesOut

#### Defined in

[api.ts:1989](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1989)

___

### permissions

• **permissions**: `string`[]

Fetched permissions from RBAC for given user

**`Memberof`**

MetaVulnerabilitiesOut

#### Defined in

[api.ts:2007](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L2007)

___

### public\_from

• **public\_from**: ``null`` \| `string`

Filter CVEs based on their published date, starting from the date.

**`Memberof`**

MetaVulnerabilitiesOut

#### Defined in

[api.ts:2055](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L2055)

___

### public\_to

• **public\_to**: ``null`` \| `string`

Filter CVEs based on their published date, up to the date.

**`Memberof`**

MetaVulnerabilitiesOut

#### Defined in

[api.ts:2061](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L2061)

___

### rhel\_version

• **rhel\_version**: ``null`` \| `string`

Filter base on system RHEL version.

**`Memberof`**

MetaVulnerabilitiesOut

#### Defined in

[api.ts:2067](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L2067)

___

### rule\_presence

• **rule\_presence**: ``null`` \| `string`

Filter based on presence of security rule

**`Memberof`**

MetaVulnerabilitiesOut

#### Defined in

[api.ts:2073](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L2073)

___

### sort

• **sort**: ``null`` \| `string`

Sorting filter.

**`Memberof`**

MetaVulnerabilitiesOut

#### Defined in

[api.ts:1995](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1995)

___

### system\_count

• `Optional` **system\_count**: `number`

Total number of systems managed by vulnerability application.

**`Memberof`**

MetaVulnerabilitiesOut

#### Defined in

[api.ts:2079](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L2079)

___

### system\_count\_per\_type

• `Optional` **system\_count\_per\_type**: [`ExecutiveReportSystemCountPerType`](ExecutiveReportSystemCountPerType.md)

**`Memberof`**

MetaVulnerabilitiesOut

#### Defined in

[api.ts:2085](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L2085)

___

### total\_items

• **total\_items**: `number`

Total number of records.

**`Memberof`**

MetaVulnerabilitiesOut

#### Defined in

[api.ts:2001](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L2001)
