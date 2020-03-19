[@redhat-cloud-services/vulnerabilities-client](../README.md) › [Globals](../globals.md) › [MetaSystems](metasystems.md)

# Interface: MetaSystems

**`export`** 

**`interface`** MetaSystems

## Hierarchy

* **MetaSystems**

## Index

### Properties

* [dataFormat](metasystems.md#dataformat)
* [filter](metasystems.md#filter)
* [limit](metasystems.md#limit)
* [offset](metasystems.md#offset)
* [optOut](metasystems.md#optout)
* [page](metasystems.md#page)
* [pageSize](metasystems.md#pagesize)
* [pages](metasystems.md#pages)
* [sort](metasystems.md#sort)
* [totalItems](metasystems.md#totalitems)

## Properties

###  dataFormat

• **dataFormat**: *string*

*Defined in [api.ts:1053](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1053)*

Format of the output data, either JSON (default) or CSV.

**`type`** {string}

**`memberof`** MetaSystems

___

###  filter

• **filter**: *string | null*

*Defined in [api.ts:1005](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1005)*

Full text filter

**`type`** {string}

**`memberof`** MetaSystems

___

###  limit

• **limit**: *number*

*Defined in [api.ts:1011](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1011)*

Maximum number of paginated results.

**`type`** {number}

**`memberof`** MetaSystems

___

###  offset

• **offset**: *number*

*Defined in [api.ts:1017](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1017)*

First record of paginated response.

**`type`** {number}

**`memberof`** MetaSystems

___

###  optOut

• **optOut**: *boolean | null*

*Defined in [api.ts:1059](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1059)*

Whether the filter to show opted out systems is active or not. If not set, defaults to hiding opted out systems.

**`type`** {boolean}

**`memberof`** MetaSystems

___

###  page

• **page**: *number*

*Defined in [api.ts:1023](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1023)*

Page number of paginated response.

**`type`** {number}

**`memberof`** MetaSystems

___

###  pageSize

• **pageSize**: *number*

*Defined in [api.ts:1029](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1029)*

Number of records per page of paginated response.

**`type`** {number}

**`memberof`** MetaSystems

___

###  pages

• **pages**: *number*

*Defined in [api.ts:1035](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1035)*

Total number of pages of paginated response.

**`type`** {number}

**`memberof`** MetaSystems

___

###  sort

• **sort**: *string | null*

*Defined in [api.ts:1041](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1041)*

Sorting filter.

**`type`** {string}

**`memberof`** MetaSystems

___

###  totalItems

• **totalItems**: *number*

*Defined in [api.ts:1047](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1047)*

Total number of records.

**`type`** {number}

**`memberof`** MetaSystems
