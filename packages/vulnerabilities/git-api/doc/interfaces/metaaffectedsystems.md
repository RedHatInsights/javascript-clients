[@redhat-cloud-services/vulnerabilities-client](../README.md) > [MetaAffectedSystems](../interfaces/metaaffectedsystems.md)

# Interface: MetaAffectedSystems

*__export__*: 

*__interface__*: MetaAffectedSystems

## Hierarchy

**MetaAffectedSystems**

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

---

## Properties

<a id="dataformat"></a>

###  dataFormat

**● dataFormat**: *`string`*

*Defined in [git-api/api.ts:771](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L771)*

Format of the output data, either JSON (default) or CSV.

*__type__*: {string}

*__memberof__*: MetaAffectedSystems

___
<a id="filter"></a>

###  filter

**● filter**: *`string` \| `null`*

*Defined in [git-api/api.ts:723](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L723)*

Full text filter

*__type__*: {string}

*__memberof__*: MetaAffectedSystems

___
<a id="limit"></a>

###  limit

**● limit**: *`number`*

*Defined in [git-api/api.ts:729](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L729)*

Maximum number of paginated results.

*__type__*: {number}

*__memberof__*: MetaAffectedSystems

___
<a id="offset"></a>

###  offset

**● offset**: *`number`*

*Defined in [git-api/api.ts:735](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L735)*

First record of paginated response.

*__type__*: {number}

*__memberof__*: MetaAffectedSystems

___
<a id="page"></a>

###  page

**● page**: *`number`*

*Defined in [git-api/api.ts:741](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L741)*

Page number of paginated response.

*__type__*: {number}

*__memberof__*: MetaAffectedSystems

___
<a id="pagesize"></a>

###  pageSize

**● pageSize**: *`number`*

*Defined in [git-api/api.ts:747](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L747)*

Number of records per page of paginated response.

*__type__*: {number}

*__memberof__*: MetaAffectedSystems

___
<a id="pages"></a>

###  pages

**● pages**: *`number`*

*Defined in [git-api/api.ts:753](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L753)*

Total number of pages of paginated response.

*__type__*: {number}

*__memberof__*: MetaAffectedSystems

___
<a id="sort"></a>

###  sort

**● sort**: *`string` \| `null`*

*Defined in [git-api/api.ts:759](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L759)*

Sorting filter.

*__type__*: {string}

*__memberof__*: MetaAffectedSystems

___
<a id="statusid"></a>

###  statusId

**● statusId**: *`string` \| `null`*

*Defined in [git-api/api.ts:777](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L777)*

Filer based on CVE status ID.

*__type__*: {string}

*__memberof__*: MetaAffectedSystems

___
<a id="totalitems"></a>

###  totalItems

**● totalItems**: *`number`*

*Defined in [git-api/api.ts:765](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L765)*

Total number of records.

*__type__*: {number}

*__memberof__*: MetaAffectedSystems

___

