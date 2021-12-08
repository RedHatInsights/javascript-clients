[@redhat-cloud-services/vulnerabilities-client](../README.md) › [Globals](../globals.md) › [MetaVulnerabilitiesOut](metavulnerabilitiesout.md)

# Interface: MetaVulnerabilitiesOut

**`export`** 

**`interface`** MetaVulnerabilitiesOut

## Hierarchy

* **MetaVulnerabilitiesOut**

## Index

### Properties

* [affecting](metavulnerabilitiesout.md#affecting)
* [business_risk_id](metavulnerabilitiesout.md#business_risk_id)
* [cvss_from](metavulnerabilitiesout.md#cvss_from)
* [cvss_to](metavulnerabilitiesout.md#cvss_to)
* [data_format](metavulnerabilitiesout.md#data_format)
* [filter](metavulnerabilitiesout.md#filter)
* [impact](metavulnerabilitiesout.md#impact)
* [limit](metavulnerabilitiesout.md#limit)
* [offset](metavulnerabilitiesout.md#offset)
* [page](metavulnerabilitiesout.md#page)
* [page_size](metavulnerabilitiesout.md#page_size)
* [pages](metavulnerabilitiesout.md#pages)
* [permissions](metavulnerabilitiesout.md#permissions)
* [public_from](metavulnerabilitiesout.md#public_from)
* [public_to](metavulnerabilitiesout.md#public_to)
* [rhel_version](metavulnerabilitiesout.md#rhel_version)
* [rule_presence](metavulnerabilitiesout.md#rule_presence)
* [sort](metavulnerabilitiesout.md#sort)
* [system_count](metavulnerabilitiesout.md#optional-system_count)
* [total_items](metavulnerabilitiesout.md#total_items)

## Properties

###  affecting

• **affecting**: *string | null*

*Defined in [packages/vulnerabilities/api.ts:1870](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1870)*

Description of CVE showing preferences

**`memberof`** MetaVulnerabilitiesOut

___

###  business_risk_id

• **business_risk_id**: *string | null*

*Defined in [packages/vulnerabilities/api.ts:1876](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1876)*

Filter based on business risk IDs.

**`memberof`** MetaVulnerabilitiesOut

___

###  cvss_from

• **cvss_from**: *number | null*

*Defined in [packages/vulnerabilities/api.ts:1882](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1882)*

Filter based on cvss score, starting from the value. Use -1 to include also CVEs with N/A cvss score.

**`memberof`** MetaVulnerabilitiesOut

___

###  cvss_to

• **cvss_to**: *number | null*

*Defined in [packages/vulnerabilities/api.ts:1888](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1888)*

Filter based on cvss score, up to the value.

**`memberof`** MetaVulnerabilitiesOut

___

###  data_format

• **data_format**: *string*

*Defined in [packages/vulnerabilities/api.ts:1810](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1810)*

Format of the output data, either JSON (default) or CSV.

**`memberof`** MetaVulnerabilitiesOut

___

###  filter

• **filter**: *string | null*

*Defined in [packages/vulnerabilities/api.ts:1816](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1816)*

Full text filter

**`memberof`** MetaVulnerabilitiesOut

___

###  impact

• **impact**: *string | null*

*Defined in [packages/vulnerabilities/api.ts:1894](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1894)*

Filter based on impact IDs.

**`memberof`** MetaVulnerabilitiesOut

___

###  limit

• **limit**: *number*

*Defined in [packages/vulnerabilities/api.ts:1822](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1822)*

Maximum number of paginated results.

**`memberof`** MetaVulnerabilitiesOut

___

###  offset

• **offset**: *number*

*Defined in [packages/vulnerabilities/api.ts:1828](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1828)*

First record of paginated response.

**`memberof`** MetaVulnerabilitiesOut

___

###  page

• **page**: *number*

*Defined in [packages/vulnerabilities/api.ts:1834](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1834)*

Page number of paginated response.

**`memberof`** MetaVulnerabilitiesOut

___

###  page_size

• **page_size**: *number*

*Defined in [packages/vulnerabilities/api.ts:1840](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1840)*

Number of records per page of paginated response.

**`memberof`** MetaVulnerabilitiesOut

___

###  pages

• **pages**: *number*

*Defined in [packages/vulnerabilities/api.ts:1846](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1846)*

Total number of pages of paginated response.

**`memberof`** MetaVulnerabilitiesOut

___

###  permissions

• **permissions**: *Array‹string›*

*Defined in [packages/vulnerabilities/api.ts:1864](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1864)*

Fetched permissions from RBAC for given user

**`memberof`** MetaVulnerabilitiesOut

___

###  public_from

• **public_from**: *string | null*

*Defined in [packages/vulnerabilities/api.ts:1900](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1900)*

Filter CVEs based on their published date, starting from the date.

**`memberof`** MetaVulnerabilitiesOut

___

###  public_to

• **public_to**: *string | null*

*Defined in [packages/vulnerabilities/api.ts:1906](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1906)*

Filter CVEs based on their published date, up to the date.

**`memberof`** MetaVulnerabilitiesOut

___

###  rhel_version

• **rhel_version**: *string | null*

*Defined in [packages/vulnerabilities/api.ts:1912](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1912)*

Filter base on system RHEL version.

**`memberof`** MetaVulnerabilitiesOut

___

###  rule_presence

• **rule_presence**: *string | null*

*Defined in [packages/vulnerabilities/api.ts:1918](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1918)*

Filter based on presence of security rule

**`memberof`** MetaVulnerabilitiesOut

___

###  sort

• **sort**: *string | null*

*Defined in [packages/vulnerabilities/api.ts:1852](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1852)*

Sorting filter.

**`memberof`** MetaVulnerabilitiesOut

___

### `Optional` system_count

• **system_count**? : *number*

*Defined in [packages/vulnerabilities/api.ts:1924](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1924)*

Total number of systems managed by vulnerability application.

**`memberof`** MetaVulnerabilitiesOut

___

###  total_items

• **total_items**: *number*

*Defined in [packages/vulnerabilities/api.ts:1858](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1858)*

Total number of records.

**`memberof`** MetaVulnerabilitiesOut
