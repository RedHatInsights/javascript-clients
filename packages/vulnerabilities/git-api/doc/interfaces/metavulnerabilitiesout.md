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

*Defined in [git-api/api.ts:1920](https://github.com/RedHatInsights/javascript-clients.gi/blob/master/packages/vulnerabilities/git-api/api.ts#L1920)*

Description of CVE showing preferences

**`memberof`** MetaVulnerabilitiesOut

___

###  business_risk_id

• **business_risk_id**: *string | null*

*Defined in [git-api/api.ts:1926](https://github.com/RedHatInsights/javascript-clients.gi/blob/master/packages/vulnerabilities/git-api/api.ts#L1926)*

Filter based on business risk IDs.

**`memberof`** MetaVulnerabilitiesOut

___

###  cvss_from

• **cvss_from**: *number | null*

*Defined in [git-api/api.ts:1932](https://github.com/RedHatInsights/javascript-clients.gi/blob/master/packages/vulnerabilities/git-api/api.ts#L1932)*

Filter based on cvss score, starting from the value. Use -1 to include also CVEs with N/A cvss score.

**`memberof`** MetaVulnerabilitiesOut

___

###  cvss_to

• **cvss_to**: *number | null*

*Defined in [git-api/api.ts:1938](https://github.com/RedHatInsights/javascript-clients.gi/blob/master/packages/vulnerabilities/git-api/api.ts#L1938)*

Filter based on cvss score, up to the value.

**`memberof`** MetaVulnerabilitiesOut

___

###  data_format

• **data_format**: *string*

*Defined in [git-api/api.ts:1860](https://github.com/RedHatInsights/javascript-clients.gi/blob/master/packages/vulnerabilities/git-api/api.ts#L1860)*

Format of the output data, either JSON (default) or CSV.

**`memberof`** MetaVulnerabilitiesOut

___

###  filter

• **filter**: *string | null*

*Defined in [git-api/api.ts:1866](https://github.com/RedHatInsights/javascript-clients.gi/blob/master/packages/vulnerabilities/git-api/api.ts#L1866)*

Full text filter

**`memberof`** MetaVulnerabilitiesOut

___

###  impact

• **impact**: *string | null*

*Defined in [git-api/api.ts:1944](https://github.com/RedHatInsights/javascript-clients.gi/blob/master/packages/vulnerabilities/git-api/api.ts#L1944)*

Filter based on impact IDs.

**`memberof`** MetaVulnerabilitiesOut

___

###  limit

• **limit**: *number*

*Defined in [git-api/api.ts:1872](https://github.com/RedHatInsights/javascript-clients.gi/blob/master/packages/vulnerabilities/git-api/api.ts#L1872)*

Maximum number of paginated results.

**`memberof`** MetaVulnerabilitiesOut

___

###  offset

• **offset**: *number*

*Defined in [git-api/api.ts:1878](https://github.com/RedHatInsights/javascript-clients.gi/blob/master/packages/vulnerabilities/git-api/api.ts#L1878)*

First record of paginated response.

**`memberof`** MetaVulnerabilitiesOut

___

###  page

• **page**: *number*

*Defined in [git-api/api.ts:1884](https://github.com/RedHatInsights/javascript-clients.gi/blob/master/packages/vulnerabilities/git-api/api.ts#L1884)*

Page number of paginated response.

**`memberof`** MetaVulnerabilitiesOut

___

###  page_size

• **page_size**: *number*

*Defined in [git-api/api.ts:1890](https://github.com/RedHatInsights/javascript-clients.gi/blob/master/packages/vulnerabilities/git-api/api.ts#L1890)*

Number of records per page of paginated response.

**`memberof`** MetaVulnerabilitiesOut

___

###  pages

• **pages**: *number*

*Defined in [git-api/api.ts:1896](https://github.com/RedHatInsights/javascript-clients.gi/blob/master/packages/vulnerabilities/git-api/api.ts#L1896)*

Total number of pages of paginated response.

**`memberof`** MetaVulnerabilitiesOut

___

###  permissions

• **permissions**: *Array‹string›*

*Defined in [git-api/api.ts:1914](https://github.com/RedHatInsights/javascript-clients.gi/blob/master/packages/vulnerabilities/git-api/api.ts#L1914)*

Fetched permissions from RBAC for given user

**`memberof`** MetaVulnerabilitiesOut

___

###  public_from

• **public_from**: *string | null*

*Defined in [git-api/api.ts:1950](https://github.com/RedHatInsights/javascript-clients.gi/blob/master/packages/vulnerabilities/git-api/api.ts#L1950)*

Filter CVEs based on their published date, starting from the date.

**`memberof`** MetaVulnerabilitiesOut

___

###  public_to

• **public_to**: *string | null*

*Defined in [git-api/api.ts:1956](https://github.com/RedHatInsights/javascript-clients.gi/blob/master/packages/vulnerabilities/git-api/api.ts#L1956)*

Filter CVEs based on their published date, up to the date.

**`memberof`** MetaVulnerabilitiesOut

___

###  rhel_version

• **rhel_version**: *string | null*

*Defined in [git-api/api.ts:1962](https://github.com/RedHatInsights/javascript-clients.gi/blob/master/packages/vulnerabilities/git-api/api.ts#L1962)*

Filter base on system RHEL version.

**`memberof`** MetaVulnerabilitiesOut

___

###  rule_presence

• **rule_presence**: *string | null*

*Defined in [git-api/api.ts:1968](https://github.com/RedHatInsights/javascript-clients.gi/blob/master/packages/vulnerabilities/git-api/api.ts#L1968)*

Filter based on presence of security rule

**`memberof`** MetaVulnerabilitiesOut

___

###  sort

• **sort**: *string | null*

*Defined in [git-api/api.ts:1902](https://github.com/RedHatInsights/javascript-clients.gi/blob/master/packages/vulnerabilities/git-api/api.ts#L1902)*

Sorting filter.

**`memberof`** MetaVulnerabilitiesOut

___

### `Optional` system_count

• **system_count**? : *number*

*Defined in [git-api/api.ts:1974](https://github.com/RedHatInsights/javascript-clients.gi/blob/master/packages/vulnerabilities/git-api/api.ts#L1974)*

Total number of systems managed by vulnerability application.

**`memberof`** MetaVulnerabilitiesOut

___

###  total_items

• **total_items**: *number*

*Defined in [git-api/api.ts:1908](https://github.com/RedHatInsights/javascript-clients.gi/blob/master/packages/vulnerabilities/git-api/api.ts#L1908)*

Total number of records.

**`memberof`** MetaVulnerabilitiesOut
