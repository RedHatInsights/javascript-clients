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

*Defined in [git-api/api.ts:839](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L839)*

Format of the output data, either JSON (default) or CSV.

**`type`** {string}

**`memberof`** MetaAffectedSystems

___

###  filter

• **filter**: *string | null*

*Defined in [git-api/api.ts:791](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L791)*

Full text filter

**`type`** {string}

**`memberof`** MetaAffectedSystems

___

###  limit

• **limit**: *number*

*Defined in [git-api/api.ts:797](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L797)*

Maximum number of paginated results.

**`type`** {number}

**`memberof`** MetaAffectedSystems

___

###  offset

• **offset**: *number*

*Defined in [git-api/api.ts:803](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L803)*

First record of paginated response.

**`type`** {number}

**`memberof`** MetaAffectedSystems

___

###  page

• **page**: *number*

*Defined in [git-api/api.ts:809](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L809)*

Page number of paginated response.

**`type`** {number}

**`memberof`** MetaAffectedSystems

___

###  pageSize

• **pageSize**: *number*

*Defined in [git-api/api.ts:815](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L815)*

Number of records per page of paginated response.

**`type`** {number}

**`memberof`** MetaAffectedSystems

___

###  pages

• **pages**: *number*

*Defined in [git-api/api.ts:821](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L821)*

Total number of pages of paginated response.

**`type`** {number}

**`memberof`** MetaAffectedSystems

___

###  sort

• **sort**: *string | null*

*Defined in [git-api/api.ts:827](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L827)*

Sorting filter.

**`type`** {string}

**`memberof`** MetaAffectedSystems

___

###  statusId

• **statusId**: *string | null*

*Defined in [git-api/api.ts:845](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L845)*

Filer based on CVE status ID.

**`type`** {string}

**`memberof`** MetaAffectedSystems

___

###  totalItems

• **totalItems**: *number*

*Defined in [git-api/api.ts:833](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L833)*

Total number of records.

**`type`** {number}

**`memberof`** MetaAffectedSystems
