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

*Defined in [packages/vulnerabilities/api.ts:1046](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1046)*

Format of the output data, either JSON (default) or CSV.

**`memberof`** MetaAffectedSystems

___

###  filter

• **filter**: *string | null*

*Defined in [packages/vulnerabilities/api.ts:998](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L998)*

Full text filter

**`memberof`** MetaAffectedSystems

___

###  limit

• **limit**: *number*

*Defined in [packages/vulnerabilities/api.ts:1004](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1004)*

Maximum number of paginated results.

**`memberof`** MetaAffectedSystems

___

###  offset

• **offset**: *number*

*Defined in [packages/vulnerabilities/api.ts:1010](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1010)*

First record of paginated response.

**`memberof`** MetaAffectedSystems

___

###  page

• **page**: *number*

*Defined in [packages/vulnerabilities/api.ts:1016](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1016)*

Page number of paginated response.

**`memberof`** MetaAffectedSystems

___

###  page_size

• **page_size**: *number*

*Defined in [packages/vulnerabilities/api.ts:1022](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1022)*

Number of records per page of paginated response.

**`memberof`** MetaAffectedSystems

___

###  pages

• **pages**: *number*

*Defined in [packages/vulnerabilities/api.ts:1028](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1028)*

Total number of pages of paginated response.

**`memberof`** MetaAffectedSystems

___

###  patch_access

• **patch_access**: *boolean | null*

*Defined in [packages/vulnerabilities/api.ts:1070](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1070)*

If show_advisories=true shows access to patch service else null

**`memberof`** MetaAffectedSystems

___

###  rule_key

• **rule_key**: *string | null*

*Defined in [packages/vulnerabilities/api.ts:1058](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1058)*

Filters security rules by its error key.

**`memberof`** MetaAffectedSystems

___

###  rule_presence

• **rule_presence**: *string | null*

*Defined in [packages/vulnerabilities/api.ts:1064](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1064)*

Filter based on presence of security rule

**`memberof`** MetaAffectedSystems

___

###  sort

• **sort**: *string | null*

*Defined in [packages/vulnerabilities/api.ts:1034](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1034)*

Sorting filter.

**`memberof`** MetaAffectedSystems

___

###  status_id

• **status_id**: *string | null*

*Defined in [packages/vulnerabilities/api.ts:1052](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1052)*

Filer based on CVE status ID.

**`memberof`** MetaAffectedSystems

___

###  total_items

• **total_items**: *number*

*Defined in [packages/vulnerabilities/api.ts:1040](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1040)*

Total number of records.

**`memberof`** MetaAffectedSystems
