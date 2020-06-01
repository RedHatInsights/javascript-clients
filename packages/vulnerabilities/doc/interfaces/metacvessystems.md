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

*Defined in [packages/vulnerabilities/api.ts:793](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L793)*

Filter based on business risk IDs.

**`memberof`** MetaCves

___

###  cvss_from

• **cvss_from**: *number | null*

*Inherited from [MetaCves](metacves.md).[cvss_from](metacves.md#cvss_from)*

*Defined in [packages/vulnerabilities/api.ts:799](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L799)*

Filter based on cvss score, starting from the value. Use -1 to include also CVEs with N/A cvss score.

**`memberof`** MetaCves

___

###  cvss_to

• **cvss_to**: *number | null*

*Inherited from [MetaCves](metacves.md).[cvss_to](metacves.md#cvss_to)*

*Defined in [packages/vulnerabilities/api.ts:805](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L805)*

Filter based on cvss score, up to the value.

**`memberof`** MetaCves

___

###  data_format

• **data_format**: *string*

*Inherited from [Meta](meta.md).[data_format](meta.md#data_format)*

*Defined in [packages/vulnerabilities/api.ts:754](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L754)*

Format of the output data, either JSON (default) or CSV.

**`memberof`** Meta

___

###  filter

• **filter**: *string | null*

*Inherited from [Meta](meta.md).[filter](meta.md#filter)*

*Defined in [packages/vulnerabilities/api.ts:706](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L706)*

Full text filter

**`memberof`** Meta

___

###  impact

• **impact**: *string | null*

*Inherited from [MetaCves](metacves.md).[impact](metacves.md#impact)*

*Defined in [packages/vulnerabilities/api.ts:823](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L823)*

Filter based on impact IDs.

**`memberof`** MetaCves

___

###  limit

• **limit**: *number*

*Inherited from [Meta](meta.md).[limit](meta.md#limit)*

*Defined in [packages/vulnerabilities/api.ts:712](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L712)*

Maximum number of paginated results.

**`memberof`** Meta

___

###  offset

• **offset**: *number*

*Inherited from [Meta](meta.md).[offset](meta.md#offset)*

*Defined in [packages/vulnerabilities/api.ts:718](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L718)*

First record of paginated response.

**`memberof`** Meta

___

###  opt_out

• **opt_out**: *boolean*

*Defined in [packages/vulnerabilities/api.ts:903](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L903)*

If given system was opted out.

**`memberof`** MetaCvesSystems

___

###  page

• **page**: *number*

*Inherited from [Meta](meta.md).[page](meta.md#page)*

*Defined in [packages/vulnerabilities/api.ts:724](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L724)*

Page number of paginated response.

**`memberof`** Meta

___

###  page_size

• **page_size**: *number*

*Inherited from [Meta](meta.md).[page_size](meta.md#page_size)*

*Defined in [packages/vulnerabilities/api.ts:730](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L730)*

Number of records per page of paginated response.

**`memberof`** Meta

___

###  pages

• **pages**: *number*

*Inherited from [Meta](meta.md).[pages](meta.md#pages)*

*Defined in [packages/vulnerabilities/api.ts:736](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L736)*

Total number of pages of paginated response.

**`memberof`** Meta

___

###  public_from

• **public_from**: *string | null*

*Inherited from [MetaCves](metacves.md).[public_from](metacves.md#public_from)*

*Defined in [packages/vulnerabilities/api.ts:811](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L811)*

Filter CVEs based on their published date, starting from the date.

**`memberof`** MetaCves

___

###  public_to

• **public_to**: *string | null*

*Inherited from [MetaCves](metacves.md).[public_to](metacves.md#public_to)*

*Defined in [packages/vulnerabilities/api.ts:817](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L817)*

Filter CVEs based on their published date, up to the date.

**`memberof`** MetaCves

___

###  security_rule

• **security_rule**: *boolean | null*

*Inherited from [MetaCves](metacves.md).[security_rule](metacves.md#security_rule)*

*Defined in [packages/vulnerabilities/api.ts:829](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L829)*

Filter based on presence of security rule

**`memberof`** MetaCves

___

###  sort

• **sort**: *string | null*

*Inherited from [Meta](meta.md).[sort](meta.md#sort)*

*Defined in [packages/vulnerabilities/api.ts:742](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L742)*

Sorting filter.

**`memberof`** Meta

___

###  status_id

• **status_id**: *string | null*

*Inherited from [MetaCves](metacves.md).[status_id](metacves.md#status_id)*

*Defined in [packages/vulnerabilities/api.ts:835](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L835)*

Filer based on CVE status ID.

**`memberof`** MetaCves

___

###  total_items

• **total_items**: *number*

*Inherited from [Meta](meta.md).[total_items](meta.md#total_items)*

*Defined in [packages/vulnerabilities/api.ts:748](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L748)*

Total number of records.

**`memberof`** Meta
