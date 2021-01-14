[@redhat-cloud-services/vulnerabilities-client](../README.md) › [Globals](../globals.md) › [MetaAffectedSystems](metaaffectedsystems.md)

# Interface: MetaAffectedSystems

**`export`** 

**`interface`** MetaAffectedSystems

## Hierarchy

* **MetaAffectedSystems**

## Index

### Properties

* [data_format](metaaffectedsystems.md#data_format)
* [filter](metaaffectedsystems.md#filter)
* [limit](metaaffectedsystems.md#limit)
* [offset](metaaffectedsystems.md#offset)
* [page](metaaffectedsystems.md#page)
* [page_size](metaaffectedsystems.md#page_size)
* [pages](metaaffectedsystems.md#pages)
* [patch_access](metaaffectedsystems.md#patch_access)
* [rule_key](metaaffectedsystems.md#rule_key)
* [rule_presence](metaaffectedsystems.md#rule_presence)
* [sort](metaaffectedsystems.md#sort)
* [status_id](metaaffectedsystems.md#status_id)
* [total_items](metaaffectedsystems.md#total_items)

## Properties

###  data_format

• **data_format**: *string*

*Defined in [packages/vulnerabilities/api.ts:831](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L831)*

Format of the output data, either JSON (default) or CSV.

**`memberof`** MetaAffectedSystems

___

###  filter

• **filter**: *string | null*

*Defined in [packages/vulnerabilities/api.ts:783](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L783)*

Full text filter

**`memberof`** MetaAffectedSystems

___

###  limit

• **limit**: *number*

*Defined in [packages/vulnerabilities/api.ts:789](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L789)*

Maximum number of paginated results.

**`memberof`** MetaAffectedSystems

___

###  offset

• **offset**: *number*

*Defined in [packages/vulnerabilities/api.ts:795](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L795)*

First record of paginated response.

**`memberof`** MetaAffectedSystems

___

###  page

• **page**: *number*

*Defined in [packages/vulnerabilities/api.ts:801](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L801)*

Page number of paginated response.

**`memberof`** MetaAffectedSystems

___

###  page_size

• **page_size**: *number*

*Defined in [packages/vulnerabilities/api.ts:807](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L807)*

Number of records per page of paginated response.

**`memberof`** MetaAffectedSystems

___

###  pages

• **pages**: *number*

*Defined in [packages/vulnerabilities/api.ts:813](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L813)*

Total number of pages of paginated response.

**`memberof`** MetaAffectedSystems

___

###  patch_access

• **patch_access**: *boolean | null*

*Defined in [packages/vulnerabilities/api.ts:855](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L855)*

If show_advisories=true shows access to patch service else null

**`memberof`** MetaAffectedSystems

___

###  rule_key

• **rule_key**: *string | null*

*Defined in [packages/vulnerabilities/api.ts:843](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L843)*

Filters security rules by its error key.

**`memberof`** MetaAffectedSystems

___

###  rule_presence

• **rule_presence**: *string | null*

*Defined in [packages/vulnerabilities/api.ts:849](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L849)*

Filter based on presence of security rule

**`memberof`** MetaAffectedSystems

___

###  sort

• **sort**: *string | null*

*Defined in [packages/vulnerabilities/api.ts:819](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L819)*

Sorting filter.

**`memberof`** MetaAffectedSystems

___

###  status_id

• **status_id**: *string | null*

*Defined in [packages/vulnerabilities/api.ts:837](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L837)*

Filer based on CVE status ID.

**`memberof`** MetaAffectedSystems

___

###  total_items

• **total_items**: *number*

*Defined in [packages/vulnerabilities/api.ts:825](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L825)*

Total number of records.

**`memberof`** MetaAffectedSystems
