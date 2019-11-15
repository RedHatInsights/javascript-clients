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

*Defined in [git-api/api.ts:711](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L711)*

Format of the output data, either JSON (default) or CSV.

*__type__*: {string}

*__memberof__*: MetaAffectedSystems

___
<a id="filter"></a>

###  filter

**● filter**: *`string` \| `null`*

*Defined in [git-api/api.ts:663](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L663)*

Full text filter

*__type__*: {string}

*__memberof__*: MetaAffectedSystems

___
<a id="limit"></a>

###  limit

**● limit**: *`number`*

*Defined in [git-api/api.ts:669](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L669)*

Maximum number of paginated results.

*__type__*: {number}

*__memberof__*: MetaAffectedSystems

___
<a id="offset"></a>

###  offset

**● offset**: *`number`*

*Defined in [git-api/api.ts:675](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L675)*

First record of paginated response.

*__type__*: {number}

*__memberof__*: MetaAffectedSystems

___
<a id="page"></a>

###  page

**● page**: *`number`*

*Defined in [git-api/api.ts:681](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L681)*

Page number of paginated response.

*__type__*: {number}

*__memberof__*: MetaAffectedSystems

___
<a id="pagesize"></a>

###  pageSize

**● pageSize**: *`number`*

*Defined in [git-api/api.ts:687](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L687)*

Number of records per page of paginated response.

*__type__*: {number}

*__memberof__*: MetaAffectedSystems

___
<a id="pages"></a>

###  pages

**● pages**: *`number`*

*Defined in [git-api/api.ts:693](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L693)*

Total number of pages of paginated response.

*__type__*: {number}

*__memberof__*: MetaAffectedSystems

___
<a id="sort"></a>

###  sort

**● sort**: *`string` \| `null`*

*Defined in [git-api/api.ts:699](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L699)*

Sorting filter.

*__type__*: {string}

*__memberof__*: MetaAffectedSystems

___
<a id="statusid"></a>

###  statusId

**● statusId**: *`string` \| `null`*

*Defined in [git-api/api.ts:717](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L717)*

Filer based on CVE status ID.

*__type__*: {string}

*__memberof__*: MetaAffectedSystems

___
<a id="totalitems"></a>

###  totalItems

**● totalItems**: *`number`*

*Defined in [git-api/api.ts:705](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L705)*

Total number of records.

*__type__*: {number}

*__memberof__*: MetaAffectedSystems

___

