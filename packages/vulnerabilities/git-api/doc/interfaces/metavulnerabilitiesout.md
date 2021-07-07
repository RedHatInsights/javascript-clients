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
* [public_from](metavulnerabilitiesout.md#public_from)
* [public_to](metavulnerabilitiesout.md#public_to)
* [rule_presence](metavulnerabilitiesout.md#rule_presence)
* [sort](metavulnerabilitiesout.md#sort)
* [system_count](metavulnerabilitiesout.md#optional-system_count)
* [total_items](metavulnerabilitiesout.md#total_items)

## Properties

###  affecting

• **affecting**: *string | null*

*Defined in [packages/vulnerabilities/git-api/api.ts:1803](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1803)*

Description of CVE showing preferences

**`memberof`** MetaVulnerabilitiesOut

___

###  business_risk_id

• **business_risk_id**: *string | null*

*Defined in [packages/vulnerabilities/git-api/api.ts:1809](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1809)*

Filter based on business risk IDs.

**`memberof`** MetaVulnerabilitiesOut

___

###  cvss_from

• **cvss_from**: *number | null*

*Defined in [packages/vulnerabilities/git-api/api.ts:1815](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1815)*

Filter based on cvss score, starting from the value. Use -1 to include also CVEs with N/A cvss score.

**`memberof`** MetaVulnerabilitiesOut

___

###  cvss_to

• **cvss_to**: *number | null*

*Defined in [packages/vulnerabilities/git-api/api.ts:1821](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1821)*

Filter based on cvss score, up to the value.

**`memberof`** MetaVulnerabilitiesOut

___

###  data_format

• **data_format**: *string*

*Defined in [packages/vulnerabilities/git-api/api.ts:1797](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1797)*

Format of the output data, either JSON (default) or CSV.

**`memberof`** MetaVulnerabilitiesOut

___

###  filter

• **filter**: *string | null*

*Defined in [packages/vulnerabilities/git-api/api.ts:1749](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1749)*

Full text filter

**`memberof`** MetaVulnerabilitiesOut

___

###  impact

• **impact**: *string | null*

*Defined in [packages/vulnerabilities/git-api/api.ts:1839](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1839)*

Filter based on impact IDs.

**`memberof`** MetaVulnerabilitiesOut

___

###  limit

• **limit**: *number*

*Defined in [packages/vulnerabilities/git-api/api.ts:1755](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1755)*

Maximum number of paginated results.

**`memberof`** MetaVulnerabilitiesOut

___

###  offset

• **offset**: *number*

*Defined in [packages/vulnerabilities/git-api/api.ts:1761](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1761)*

First record of paginated response.

**`memberof`** MetaVulnerabilitiesOut

___

###  page

• **page**: *number*

*Defined in [packages/vulnerabilities/git-api/api.ts:1767](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1767)*

Page number of paginated response.

**`memberof`** MetaVulnerabilitiesOut

___

###  page_size

• **page_size**: *number*

*Defined in [packages/vulnerabilities/git-api/api.ts:1773](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1773)*

Number of records per page of paginated response.

**`memberof`** MetaVulnerabilitiesOut

___

###  pages

• **pages**: *number*

*Defined in [packages/vulnerabilities/git-api/api.ts:1779](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1779)*

Total number of pages of paginated response.

**`memberof`** MetaVulnerabilitiesOut

___

###  public_from

• **public_from**: *string | null*

*Defined in [packages/vulnerabilities/git-api/api.ts:1827](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1827)*

Filter CVEs based on their published date, starting from the date.

**`memberof`** MetaVulnerabilitiesOut

___

###  public_to

• **public_to**: *string | null*

*Defined in [packages/vulnerabilities/git-api/api.ts:1833](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1833)*

Filter CVEs based on their published date, up to the date.

**`memberof`** MetaVulnerabilitiesOut

___

###  rule_presence

• **rule_presence**: *string | null*

*Defined in [packages/vulnerabilities/git-api/api.ts:1851](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1851)*

Filter based on presence of security rule

**`memberof`** MetaVulnerabilitiesOut

___

###  sort

• **sort**: *string | null*

*Defined in [packages/vulnerabilities/git-api/api.ts:1785](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1785)*

Sorting filter.

**`memberof`** MetaVulnerabilitiesOut

___

### `Optional` system_count

• **system_count**? : *number*

*Defined in [packages/vulnerabilities/git-api/api.ts:1845](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1845)*

Total number of systems managed by vulnerability application.

**`memberof`** MetaVulnerabilitiesOut

___

###  total_items

• **total_items**: *number*

*Defined in [packages/vulnerabilities/git-api/api.ts:1791](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1791)*

Total number of records.

**`memberof`** MetaVulnerabilitiesOut
