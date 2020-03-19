[@redhat-cloud-services/vulnerabilities-client](../README.md) › [Globals](../globals.md) › [MetaAffectedSystems](metaaffectedsystems.md)

# Interface: MetaAffectedSystems

**`export`** 

**`interface`** MetaAffectedSystems

## Hierarchy

* **MetaAffectedSystems**

## Index

### Properties

* [dataFormat](metaaffectedsystems.md#dataformat)
* [filter](metaaffectedsystems.md#filter)
* [limit](metaaffectedsystems.md#limit)
* [offset](metaaffectedsystems.md#offset)
* [page](metaaffectedsystems.md#page)
* [pageSize](metaaffectedsystems.md#pagesize)
* [pages](metaaffectedsystems.md#pages)
* [sort](metaaffectedsystems.md#sort)
* [statusId](metaaffectedsystems.md#statusid)
* [totalItems](metaaffectedsystems.md#totalitems)

## Properties

###  dataFormat

• **dataFormat**: *string*

*Defined in [api.ts:771](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L771)*

Format of the output data, either JSON (default) or CSV.

**`type`** {string}

**`memberof`** MetaAffectedSystems

___

###  filter

• **filter**: *string | null*

*Defined in [api.ts:723](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L723)*

Full text filter

**`type`** {string}

**`memberof`** MetaAffectedSystems

___

###  limit

• **limit**: *number*

*Defined in [api.ts:729](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L729)*

Maximum number of paginated results.

**`type`** {number}

**`memberof`** MetaAffectedSystems

___

###  offset

• **offset**: *number*

*Defined in [api.ts:735](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L735)*

First record of paginated response.

**`type`** {number}

**`memberof`** MetaAffectedSystems

___

###  page

• **page**: *number*

*Defined in [api.ts:741](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L741)*

Page number of paginated response.

**`type`** {number}

**`memberof`** MetaAffectedSystems

___

###  pageSize

• **pageSize**: *number*

*Defined in [api.ts:747](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L747)*

Number of records per page of paginated response.

**`type`** {number}

**`memberof`** MetaAffectedSystems

___

###  pages

• **pages**: *number*

*Defined in [api.ts:753](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L753)*

Total number of pages of paginated response.

**`type`** {number}

**`memberof`** MetaAffectedSystems

___

###  sort

• **sort**: *string | null*

*Defined in [api.ts:759](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L759)*

Sorting filter.

**`type`** {string}

**`memberof`** MetaAffectedSystems

___

###  statusId

• **statusId**: *string | null*

*Defined in [api.ts:777](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L777)*

Filer based on CVE status ID.

**`type`** {string}

**`memberof`** MetaAffectedSystems

___

###  totalItems

• **totalItems**: *number*

*Defined in [api.ts:765](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L765)*

Total number of records.

**`type`** {number}

**`memberof`** MetaAffectedSystems
