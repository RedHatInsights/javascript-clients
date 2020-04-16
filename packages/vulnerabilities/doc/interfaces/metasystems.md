[@redhat-cloud-services/vulnerabilities-client](../README.md) › [Globals](../globals.md) › [MetaSystems](metasystems.md)

# Interface: MetaSystems

**`export`** 

**`interface`** MetaSystems

## Hierarchy

* [Meta](meta.md)

  ↳ **MetaSystems**

## Index

### Properties

* [data_format](metasystems.md#data_format)
* [filter](metasystems.md#filter)
* [limit](metasystems.md#limit)
* [offset](metasystems.md#offset)
* [opt_out](metasystems.md#opt_out)
* [page](metasystems.md#page)
* [page_size](metasystems.md#page_size)
* [pages](metasystems.md#pages)
* [sort](metasystems.md#sort)
* [total_items](metasystems.md#total_items)

## Properties

###  data_format

• **data_format**: *string*

*Inherited from [Meta](meta.md).[data_format](meta.md#data_format)*

*Defined in [packages/vulnerabilities/api.ts:704](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L704)*

Format of the output data, either JSON (default) or CSV.

**`memberof`** Meta

___

###  filter

• **filter**: *string | null*

*Inherited from [Meta](meta.md).[filter](meta.md#filter)*

*Defined in [packages/vulnerabilities/api.ts:656](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L656)*

Full text filter

**`memberof`** Meta

___

###  limit

• **limit**: *number*

*Inherited from [Meta](meta.md).[limit](meta.md#limit)*

*Defined in [packages/vulnerabilities/api.ts:662](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L662)*

Maximum number of paginated results.

**`memberof`** Meta

___

###  offset

• **offset**: *number*

*Inherited from [Meta](meta.md).[offset](meta.md#offset)*

*Defined in [packages/vulnerabilities/api.ts:668](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L668)*

First record of paginated response.

**`memberof`** Meta

___

###  opt_out

• **opt_out**: *boolean | null*

*Defined in [packages/vulnerabilities/api.ts:867](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L867)*

Whether the filter to show opted out systems is active or not. If not set, defaults to hiding opted out systems.

**`memberof`** MetaSystems

___

###  page

• **page**: *number*

*Inherited from [Meta](meta.md).[page](meta.md#page)*

*Defined in [packages/vulnerabilities/api.ts:674](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L674)*

Page number of paginated response.

**`memberof`** Meta

___

###  page_size

• **page_size**: *number*

*Inherited from [Meta](meta.md).[page_size](meta.md#page_size)*

*Defined in [packages/vulnerabilities/api.ts:680](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L680)*

Number of records per page of paginated response.

**`memberof`** Meta

___

###  pages

• **pages**: *number*

*Inherited from [Meta](meta.md).[pages](meta.md#pages)*

*Defined in [packages/vulnerabilities/api.ts:686](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L686)*

Total number of pages of paginated response.

**`memberof`** Meta

___

###  sort

• **sort**: *string | null*

*Inherited from [Meta](meta.md).[sort](meta.md#sort)*

*Defined in [packages/vulnerabilities/api.ts:692](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L692)*

Sorting filter.

**`memberof`** Meta

___

###  total_items

• **total_items**: *number*

*Inherited from [Meta](meta.md).[total_items](meta.md#total_items)*

*Defined in [packages/vulnerabilities/api.ts:698](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L698)*

Total number of records.

**`memberof`** Meta
