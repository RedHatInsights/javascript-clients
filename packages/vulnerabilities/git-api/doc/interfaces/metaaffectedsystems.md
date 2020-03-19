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

*Defined in [git-api/api.ts:777](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L777)*

Format of the output data, either JSON (default) or CSV.

**`type`** {string}

**`memberof`** MetaAffectedSystems

___

###  filter

• **filter**: *string | null*

*Defined in [git-api/api.ts:729](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L729)*

Full text filter

**`type`** {string}

**`memberof`** MetaAffectedSystems

___

###  limit

• **limit**: *number*

*Defined in [git-api/api.ts:735](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L735)*

Maximum number of paginated results.

**`type`** {number}

**`memberof`** MetaAffectedSystems

___

###  offset

• **offset**: *number*

*Defined in [git-api/api.ts:741](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L741)*

First record of paginated response.

**`type`** {number}

**`memberof`** MetaAffectedSystems

___

###  page

• **page**: *number*

*Defined in [git-api/api.ts:747](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L747)*

Page number of paginated response.

**`type`** {number}

**`memberof`** MetaAffectedSystems

___

###  pageSize

• **pageSize**: *number*

*Defined in [git-api/api.ts:753](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L753)*

Number of records per page of paginated response.

**`type`** {number}

**`memberof`** MetaAffectedSystems

___

###  pages

• **pages**: *number*

*Defined in [git-api/api.ts:759](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L759)*

Total number of pages of paginated response.

**`type`** {number}

**`memberof`** MetaAffectedSystems

___

###  sort

• **sort**: *string | null*

*Defined in [git-api/api.ts:765](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L765)*

Sorting filter.

**`type`** {string}

**`memberof`** MetaAffectedSystems

___

###  statusId

• **statusId**: *string | null*

*Defined in [git-api/api.ts:783](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L783)*

Filer based on CVE status ID.

**`type`** {string}

**`memberof`** MetaAffectedSystems

___

###  totalItems

• **totalItems**: *number*

*Defined in [git-api/api.ts:771](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L771)*

Total number of records.

**`type`** {number}

**`memberof`** MetaAffectedSystems
