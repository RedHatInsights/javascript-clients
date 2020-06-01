[@redhat-cloud-services/vulnerabilities-client](../README.md) › [Globals](../globals.md) › [MetaAffectedSystems](metaaffectedsystems.md)

# Interface: MetaAffectedSystems

**`export`** 

**`interface`** MetaAffectedSystems

## Hierarchy

* [Meta](meta.md)

  ↳ **MetaAffectedSystems**

## Index

### Properties

* [data_format](metaaffectedsystems.md#data_format)
* [filter](metaaffectedsystems.md#filter)
* [limit](metaaffectedsystems.md#limit)
* [offset](metaaffectedsystems.md#offset)
* [page](metaaffectedsystems.md#page)
* [page_size](metaaffectedsystems.md#page_size)
* [pages](metaaffectedsystems.md#pages)
* [sort](metaaffectedsystems.md#sort)
* [status_id](metaaffectedsystems.md#status_id)
* [total_items](metaaffectedsystems.md#total_items)

## Properties

###  data_format

• **data_format**: *string*

*Inherited from [Meta](meta.md).[data_format](meta.md#data_format)*

*Defined in [packages/vulnerabilities/git-api/api.ts:754](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L754)*

Format of the output data, either JSON (default) or CSV.

**`memberof`** Meta

___

###  filter

• **filter**: *string | null*

*Inherited from [Meta](meta.md).[filter](meta.md#filter)*

*Defined in [packages/vulnerabilities/git-api/api.ts:706](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L706)*

Full text filter

**`memberof`** Meta

___

###  limit

• **limit**: *number*

*Inherited from [Meta](meta.md).[limit](meta.md#limit)*

*Defined in [packages/vulnerabilities/git-api/api.ts:712](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L712)*

Maximum number of paginated results.

**`memberof`** Meta

___

###  offset

• **offset**: *number*

*Inherited from [Meta](meta.md).[offset](meta.md#offset)*

*Defined in [packages/vulnerabilities/git-api/api.ts:718](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L718)*

First record of paginated response.

**`memberof`** Meta

___

###  page

• **page**: *number*

*Inherited from [Meta](meta.md).[page](meta.md#page)*

*Defined in [packages/vulnerabilities/git-api/api.ts:724](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L724)*

Page number of paginated response.

**`memberof`** Meta

___

###  page_size

• **page_size**: *number*

*Inherited from [Meta](meta.md).[page_size](meta.md#page_size)*

*Defined in [packages/vulnerabilities/git-api/api.ts:730](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L730)*

Number of records per page of paginated response.

**`memberof`** Meta

___

###  pages

• **pages**: *number*

*Inherited from [Meta](meta.md).[pages](meta.md#pages)*

*Defined in [packages/vulnerabilities/git-api/api.ts:736](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L736)*

Total number of pages of paginated response.

**`memberof`** Meta

___

###  sort

• **sort**: *string | null*

*Inherited from [Meta](meta.md).[sort](meta.md#sort)*

*Defined in [packages/vulnerabilities/git-api/api.ts:742](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L742)*

Sorting filter.

**`memberof`** Meta

___

###  status_id

• **status_id**: *string | null*

*Defined in [packages/vulnerabilities/git-api/api.ts:767](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L767)*

Filer based on CVE status ID.

**`memberof`** MetaAffectedSystems

___

###  total_items

• **total_items**: *number*

*Inherited from [Meta](meta.md).[total_items](meta.md#total_items)*

*Defined in [packages/vulnerabilities/git-api/api.ts:748](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L748)*

Total number of records.

**`memberof`** Meta
