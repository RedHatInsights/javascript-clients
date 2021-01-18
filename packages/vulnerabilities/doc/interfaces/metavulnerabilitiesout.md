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
* [security_rule](metavulnerabilitiesout.md#security_rule)
* [show_all](metavulnerabilitiesout.md#show_all)
* [sort](metavulnerabilitiesout.md#sort)
* [system_count](metavulnerabilitiesout.md#optional-system_count)
* [total_items](metavulnerabilitiesout.md#total_items)

## Properties

###  affecting

• **affecting**: *string | null*

*Defined in [packages/vulnerabilities/api.ts:1509](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1509)*

Description of CVE showing preferences

**`memberof`** MetaVulnerabilitiesOut

___

###  business_risk_id

• **business_risk_id**: *string | null*

*Defined in [packages/vulnerabilities/api.ts:1515](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1515)*

Filter based on business risk IDs.

**`memberof`** MetaVulnerabilitiesOut

___

###  cvss_from

• **cvss_from**: *number | null*

*Defined in [packages/vulnerabilities/api.ts:1521](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1521)*

Filter based on cvss score, starting from the value. Use -1 to include also CVEs with N/A cvss score.

**`memberof`** MetaVulnerabilitiesOut

___

###  cvss_to

• **cvss_to**: *number | null*

*Defined in [packages/vulnerabilities/api.ts:1527](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1527)*

Filter based on cvss score, up to the value.

**`memberof`** MetaVulnerabilitiesOut

___

###  data_format

• **data_format**: *string*

*Defined in [packages/vulnerabilities/api.ts:1503](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1503)*

Format of the output data, either JSON (default) or CSV.

**`memberof`** MetaVulnerabilitiesOut

___

###  filter

• **filter**: *string | null*

*Defined in [packages/vulnerabilities/api.ts:1455](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1455)*

Full text filter

**`memberof`** MetaVulnerabilitiesOut

___

###  impact

• **impact**: *string | null*

*Defined in [packages/vulnerabilities/api.ts:1551](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1551)*

Filter based on impact IDs.

**`memberof`** MetaVulnerabilitiesOut

___

###  limit

• **limit**: *number*

*Defined in [packages/vulnerabilities/api.ts:1461](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1461)*

Maximum number of paginated results.

**`memberof`** MetaVulnerabilitiesOut

___

###  offset

• **offset**: *number*

*Defined in [packages/vulnerabilities/api.ts:1467](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1467)*

First record of paginated response.

**`memberof`** MetaVulnerabilitiesOut

___

###  page

• **page**: *number*

*Defined in [packages/vulnerabilities/api.ts:1473](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1473)*

Page number of paginated response.

**`memberof`** MetaVulnerabilitiesOut

___

###  page_size

• **page_size**: *number*

*Defined in [packages/vulnerabilities/api.ts:1479](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1479)*

Number of records per page of paginated response.

**`memberof`** MetaVulnerabilitiesOut

___

###  pages

• **pages**: *number*

*Defined in [packages/vulnerabilities/api.ts:1485](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1485)*

Total number of pages of paginated response.

**`memberof`** MetaVulnerabilitiesOut

___

###  public_from

• **public_from**: *string | null*

*Defined in [packages/vulnerabilities/api.ts:1539](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1539)*

Filter CVEs based on their published date, starting from the date.

**`memberof`** MetaVulnerabilitiesOut

___

###  public_to

• **public_to**: *string | null*

*Defined in [packages/vulnerabilities/api.ts:1545](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1545)*

Filter CVEs based on their published date, up to the date.

**`memberof`** MetaVulnerabilitiesOut

___

###  rule_presence

• **rule_presence**: *string | null*

*Defined in [packages/vulnerabilities/api.ts:1563](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1563)*

Filter based on presence of security rule

**`memberof`** MetaVulnerabilitiesOut

___

###  security_rule

• **security_rule**: *boolean | null*

*Defined in [packages/vulnerabilities/api.ts:1569](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1569)*

Filter based on presence of security rule - deprecated

**`memberof`** MetaVulnerabilitiesOut

___

###  show_all

• **show_all**: *boolean | null*

*Defined in [packages/vulnerabilities/api.ts:1533](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1533)*

Show all known vulnerabilities, regardless of number of affected systems.

**`memberof`** MetaVulnerabilitiesOut

___

###  sort

• **sort**: *string | null*

*Defined in [packages/vulnerabilities/api.ts:1491](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1491)*

Sorting filter.

**`memberof`** MetaVulnerabilitiesOut

___

### `Optional` system_count

• **system_count**? : *number*

*Defined in [packages/vulnerabilities/api.ts:1557](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1557)*

Total number of systems managed by vulnerability application.

**`memberof`** MetaVulnerabilitiesOut

___

###  total_items

• **total_items**: *number*

*Defined in [packages/vulnerabilities/api.ts:1497](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1497)*

Total number of records.

**`memberof`** MetaVulnerabilitiesOut
