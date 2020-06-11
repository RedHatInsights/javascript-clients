[@redhat-cloud-services/vulnerabilities-client](../README.md) › [Globals](../globals.md) › [MetaCvesSystems](metacvessystems.md)

# Interface: MetaCvesSystems

**`export`** 

**`interface`** MetaCvesSystems

## Hierarchy

  ↳ [MetaCves](metacves.md)

  ↳ **MetaCvesSystems**

## Index

### Properties

* [business_risk_id](metacvessystems.md#business_risk_id)
* [cvss_from](metacvessystems.md#cvss_from)
* [cvss_to](metacvessystems.md#cvss_to)
* [data_format](metacvessystems.md#data_format)
* [filter](metacvessystems.md#filter)
* [impact](metacvessystems.md#impact)
* [limit](metacvessystems.md#limit)
* [offset](metacvessystems.md#offset)
* [opt_out](metacvessystems.md#opt_out)
* [page](metacvessystems.md#page)
* [page_size](metacvessystems.md#page_size)
* [pages](metacvessystems.md#pages)
* [public_from](metacvessystems.md#public_from)
* [public_to](metacvessystems.md#public_to)
* [security_rule](metacvessystems.md#security_rule)
* [sort](metacvessystems.md#sort)
* [status_id](metacvessystems.md#status_id)
* [total_items](metacvessystems.md#total_items)

## Properties

###  business_risk_id

• **business_risk_id**: *string | null*

*Inherited from [MetaCves](metacves.md).[business_risk_id](metacves.md#business_risk_id)*

*Defined in [packages/vulnerabilities/api.ts:768](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L768)*

Filter based on business risk IDs.

**`memberof`** MetaCves

___

###  cvss_from

• **cvss_from**: *number | null*

*Inherited from [MetaCves](metacves.md).[cvss_from](metacves.md#cvss_from)*

*Defined in [packages/vulnerabilities/api.ts:774](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L774)*

Filter based on cvss score, starting from the value.

**`memberof`** MetaCves

___

###  cvss_to

• **cvss_to**: *number | null*

*Inherited from [MetaCves](metacves.md).[cvss_to](metacves.md#cvss_to)*

*Defined in [packages/vulnerabilities/api.ts:780](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L780)*

Filter based on cvss score, up to the value.

**`memberof`** MetaCves

___

###  data_format

• **data_format**: *string*

*Inherited from [Meta](meta.md).[data_format](meta.md#data_format)*

*Defined in [packages/vulnerabilities/api.ts:729](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L729)*

Format of the output data, either JSON (default) or CSV.

**`memberof`** Meta

___

###  filter

• **filter**: *string | null*

*Inherited from [Meta](meta.md).[filter](meta.md#filter)*

*Defined in [packages/vulnerabilities/api.ts:681](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L681)*

Full text filter

**`memberof`** Meta

___

###  impact

• **impact**: *string | null*

*Inherited from [MetaCves](metacves.md).[impact](metacves.md#impact)*

*Defined in [packages/vulnerabilities/api.ts:798](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L798)*

Filter based on impact IDs.

**`memberof`** MetaCves

___

###  limit

• **limit**: *number*

*Inherited from [Meta](meta.md).[limit](meta.md#limit)*

*Defined in [packages/vulnerabilities/api.ts:687](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L687)*

Maximum number of paginated results.

**`memberof`** Meta

___

###  offset

• **offset**: *number*

*Inherited from [Meta](meta.md).[offset](meta.md#offset)*

*Defined in [packages/vulnerabilities/api.ts:693](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L693)*

First record of paginated response.

**`memberof`** Meta

___

###  opt_out

• **opt_out**: *boolean*

*Defined in [packages/vulnerabilities/api.ts:878](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L878)*

If given system was opted out.

**`memberof`** MetaCvesSystems

___

###  page

• **page**: *number*

*Inherited from [Meta](meta.md).[page](meta.md#page)*

*Defined in [packages/vulnerabilities/api.ts:699](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L699)*

Page number of paginated response.

**`memberof`** Meta

___

###  page_size

• **page_size**: *number*

*Inherited from [Meta](meta.md).[page_size](meta.md#page_size)*

*Defined in [packages/vulnerabilities/api.ts:705](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L705)*

Number of records per page of paginated response.

**`memberof`** Meta

___

###  pages

• **pages**: *number*

*Inherited from [Meta](meta.md).[pages](meta.md#pages)*

*Defined in [packages/vulnerabilities/api.ts:711](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L711)*

Total number of pages of paginated response.

**`memberof`** Meta

___

###  public_from

• **public_from**: *string | null*

*Inherited from [MetaCves](metacves.md).[public_from](metacves.md#public_from)*

*Defined in [packages/vulnerabilities/api.ts:786](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L786)*

Filter CVEs based on their published date, starting from the date.

**`memberof`** MetaCves

___

###  public_to

• **public_to**: *string | null*

*Inherited from [MetaCves](metacves.md).[public_to](metacves.md#public_to)*

*Defined in [packages/vulnerabilities/api.ts:792](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L792)*

Filter CVEs based on their published date, up to the date.

**`memberof`** MetaCves

___

###  security_rule

• **security_rule**: *boolean | null*

*Inherited from [MetaCves](metacves.md).[security_rule](metacves.md#security_rule)*

*Defined in [packages/vulnerabilities/api.ts:804](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L804)*

Filter based on presence of security rule

**`memberof`** MetaCves

___

###  sort

• **sort**: *string | null*

*Inherited from [Meta](meta.md).[sort](meta.md#sort)*

*Defined in [packages/vulnerabilities/api.ts:717](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L717)*

Sorting filter.

**`memberof`** Meta

___

###  status_id

• **status_id**: *string | null*

*Inherited from [MetaCves](metacves.md).[status_id](metacves.md#status_id)*

*Defined in [packages/vulnerabilities/api.ts:810](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L810)*

Filer based on CVE status ID.

**`memberof`** MetaCves

___

###  total_items

• **total_items**: *number*

*Inherited from [Meta](meta.md).[total_items](meta.md#total_items)*

*Defined in [packages/vulnerabilities/api.ts:723](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L723)*

Total number of records.

**`memberof`** Meta
