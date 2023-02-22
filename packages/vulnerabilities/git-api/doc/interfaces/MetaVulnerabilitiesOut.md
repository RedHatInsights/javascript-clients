[@redhat-cloud-services/vulnerabilities-client](../README.md) / [Exports](../modules.md) / MetaVulnerabilitiesOut

# Interface: MetaVulnerabilitiesOut

**`Export`**

**`Interface`**

MetaVulnerabilitiesOut

## Table of contents

### Properties

- [affecting](MetaVulnerabilitiesOut.md#affecting)
- [business\_risk\_id](MetaVulnerabilitiesOut.md#business_risk_id)
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

### affecting

• **affecting**: `string`

Description of CVE showing preferences

**`Memberof`**

MetaVulnerabilitiesOut

#### Defined in

[api.ts:1920](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1920)

___

### business\_risk\_id

• **business\_risk\_id**: `string`

Filter based on business risk IDs.

**`Memberof`**

MetaVulnerabilitiesOut

#### Defined in

[api.ts:1926](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1926)

___

### cvss\_from

• **cvss\_from**: `number`

Filter based on cvss score, starting from the value. Use -1 to include also CVEs with N/A cvss score.

**`Memberof`**

MetaVulnerabilitiesOut

#### Defined in

[api.ts:1932](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1932)

___

### cvss\_to

• **cvss\_to**: `number`

Filter based on cvss score, up to the value.

**`Memberof`**

MetaVulnerabilitiesOut

#### Defined in

[api.ts:1938](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1938)

___

### data\_format

• **data\_format**: `string`

Format of the output data, either JSON (default) or CSV.

**`Memberof`**

MetaVulnerabilitiesOut

#### Defined in

[api.ts:1860](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1860)

___

### filter

• **filter**: `string`

Full text filter

**`Memberof`**

MetaVulnerabilitiesOut

#### Defined in

[api.ts:1866](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1866)

___

### impact

• **impact**: `string`

Filter based on impact IDs.

**`Memberof`**

MetaVulnerabilitiesOut

#### Defined in

[api.ts:1944](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1944)

___

### limit

• **limit**: `number`

Maximum number of paginated results.

**`Memberof`**

MetaVulnerabilitiesOut

#### Defined in

[api.ts:1872](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1872)

___

### offset

• **offset**: `number`

First record of paginated response.

**`Memberof`**

MetaVulnerabilitiesOut

#### Defined in

[api.ts:1878](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1878)

___

### page

• **page**: `number`

Page number of paginated response.

**`Memberof`**

MetaVulnerabilitiesOut

#### Defined in

[api.ts:1884](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1884)

___

### page\_size

• **page\_size**: `number`

Number of records per page of paginated response.

**`Memberof`**

MetaVulnerabilitiesOut

#### Defined in

[api.ts:1890](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1890)

___

### pages

• **pages**: `number`

Total number of pages of paginated response.

**`Memberof`**

MetaVulnerabilitiesOut

#### Defined in

[api.ts:1896](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1896)

___

### permissions

• **permissions**: `string`[]

Fetched permissions from RBAC for given user

**`Memberof`**

MetaVulnerabilitiesOut

#### Defined in

[api.ts:1914](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1914)

___

### public\_from

• **public\_from**: `string`

Filter CVEs based on their published date, starting from the date.

**`Memberof`**

MetaVulnerabilitiesOut

#### Defined in

[api.ts:1950](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1950)

___

### public\_to

• **public\_to**: `string`

Filter CVEs based on their published date, up to the date.

**`Memberof`**

MetaVulnerabilitiesOut

#### Defined in

[api.ts:1956](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1956)

___

### rhel\_version

• **rhel\_version**: `string`

Filter base on system RHEL version.

**`Memberof`**

MetaVulnerabilitiesOut

#### Defined in

[api.ts:1962](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1962)

___

### rule\_presence

• **rule\_presence**: `string`

Filter based on presence of security rule

**`Memberof`**

MetaVulnerabilitiesOut

#### Defined in

[api.ts:1968](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1968)

___

### sort

• **sort**: `string`

Sorting filter.

**`Memberof`**

MetaVulnerabilitiesOut

#### Defined in

[api.ts:1902](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1902)

___

### system\_count

• `Optional` **system\_count**: `number`

Total number of systems managed by vulnerability application.

**`Memberof`**

MetaVulnerabilitiesOut

#### Defined in

[api.ts:1974](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1974)

___

### total\_items

• **total\_items**: `number`

Total number of records.

**`Memberof`**

MetaVulnerabilitiesOut

#### Defined in

[api.ts:1908](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1908)
