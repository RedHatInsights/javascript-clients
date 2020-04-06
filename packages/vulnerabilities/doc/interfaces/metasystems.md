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

*Defined in [api.ts:1121](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1121)*

Format of the output data, either JSON (default) or CSV.

**`type`** {string}

**`memberof`** MetaSystems

___

###  filter

• **filter**: *string | null*

*Defined in [api.ts:1073](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1073)*

Full text filter

**`type`** {string}

**`memberof`** MetaSystems

___

###  limit

• **limit**: *number*

*Defined in [api.ts:1079](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1079)*

Maximum number of paginated results.

**`type`** {number}

**`memberof`** MetaSystems

___

###  offset

• **offset**: *number*

*Defined in [api.ts:1085](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1085)*

First record of paginated response.

**`type`** {number}

**`memberof`** MetaSystems

___

###  optOut

• **optOut**: *boolean | null*

*Defined in [api.ts:1127](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1127)*

Whether the filter to show opted out systems is active or not. If not set, defaults to hiding opted out systems.

**`type`** {boolean}

**`memberof`** MetaSystems

___

###  page

• **page**: *number*

*Defined in [api.ts:1091](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1091)*

Page number of paginated response.

**`type`** {number}

**`memberof`** MetaSystems

___

###  pageSize

• **pageSize**: *number*

*Defined in [api.ts:1097](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1097)*

Number of records per page of paginated response.

**`type`** {number}

**`memberof`** MetaSystems

___

###  pages

• **pages**: *number*

*Defined in [api.ts:1103](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1103)*

Total number of pages of paginated response.

**`type`** {number}

**`memberof`** MetaSystems

___

###  sort

• **sort**: *string | null*

*Defined in [api.ts:1109](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1109)*

Sorting filter.

**`type`** {string}

**`memberof`** MetaSystems

___

###  totalItems

• **totalItems**: *number*

*Defined in [api.ts:1115](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1115)*

Total number of records.

**`type`** {number}

**`memberof`** MetaSystems
