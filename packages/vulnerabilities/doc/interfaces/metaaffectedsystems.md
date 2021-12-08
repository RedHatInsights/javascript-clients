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
* [first_reported_from](metaaffectedsystems.md#first_reported_from)
* [first_reported_to](metaaffectedsystems.md#first_reported_to)
* [limit](metaaffectedsystems.md#limit)
* [offset](metaaffectedsystems.md#offset)
* [page](metaaffectedsystems.md#page)
* [page_size](metaaffectedsystems.md#page_size)
* [pages](metaaffectedsystems.md#pages)
* [patch_access](metaaffectedsystems.md#patch_access)
* [permissions](metaaffectedsystems.md#permissions)
* [rhel_version](metaaffectedsystems.md#rhel_version)
* [rule_key](metaaffectedsystems.md#rule_key)
* [rule_presence](metaaffectedsystems.md#rule_presence)
* [sort](metaaffectedsystems.md#sort)
* [status_id](metaaffectedsystems.md#status_id)
* [total_items](metaaffectedsystems.md#total_items)

## Properties

###  data_format

• **data_format**: *string*

*Defined in [packages/vulnerabilities/api.ts:1183](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1183)*

Format of the output data, either JSON (default) or CSV.

**`memberof`** MetaAffectedSystems

___

###  filter

• **filter**: *string | null*

*Defined in [packages/vulnerabilities/api.ts:1189](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1189)*

Full text filter

**`memberof`** MetaAffectedSystems

___

###  first_reported_from

• **first_reported_from**: *string | null*

*Defined in [packages/vulnerabilities/api.ts:1243](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1243)*

Filter system-cve pairs based on first time of detection of CVE.

**`memberof`** MetaAffectedSystems

___

###  first_reported_to

• **first_reported_to**: *string | null*

*Defined in [packages/vulnerabilities/api.ts:1249](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1249)*

Filter system-cve pairs based on first time of detection of CVE.

**`memberof`** MetaAffectedSystems

___

###  limit

• **limit**: *number*

*Defined in [packages/vulnerabilities/api.ts:1195](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1195)*

Maximum number of paginated results.

**`memberof`** MetaAffectedSystems

___

###  offset

• **offset**: *number*

*Defined in [packages/vulnerabilities/api.ts:1201](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1201)*

First record of paginated response.

**`memberof`** MetaAffectedSystems

___

###  page

• **page**: *number*

*Defined in [packages/vulnerabilities/api.ts:1207](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1207)*

Page number of paginated response.

**`memberof`** MetaAffectedSystems

___

###  page_size

• **page_size**: *number*

*Defined in [packages/vulnerabilities/api.ts:1213](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1213)*

Number of records per page of paginated response.

**`memberof`** MetaAffectedSystems

___

###  pages

• **pages**: *number*

*Defined in [packages/vulnerabilities/api.ts:1219](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1219)*

Total number of pages of paginated response.

**`memberof`** MetaAffectedSystems

___

###  patch_access

• **patch_access**: *boolean | null*

*Defined in [packages/vulnerabilities/api.ts:1255](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1255)*

If show_advisories=true shows access to patch service else null

**`memberof`** MetaAffectedSystems

___

###  permissions

• **permissions**: *Array‹string›*

*Defined in [packages/vulnerabilities/api.ts:1237](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1237)*

Fetched permissions from RBAC for given user

**`memberof`** MetaAffectedSystems

___

###  rhel_version

• **rhel_version**: *string | null*

*Defined in [packages/vulnerabilities/api.ts:1261](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1261)*

Filter base on system RHEL version.

**`memberof`** MetaAffectedSystems

___

###  rule_key

• **rule_key**: *string | null*

*Defined in [packages/vulnerabilities/api.ts:1267](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1267)*

Filters security rules by its error key.

**`memberof`** MetaAffectedSystems

___

###  rule_presence

• **rule_presence**: *string | null*

*Defined in [packages/vulnerabilities/api.ts:1273](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1273)*

Filter based on presence of security rule

**`memberof`** MetaAffectedSystems

___

###  sort

• **sort**: *string | null*

*Defined in [packages/vulnerabilities/api.ts:1225](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1225)*

Sorting filter.

**`memberof`** MetaAffectedSystems

___

###  status_id

• **status_id**: *string | null*

*Defined in [packages/vulnerabilities/api.ts:1279](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1279)*

Filer based on CVE status ID.

**`memberof`** MetaAffectedSystems

___

###  total_items

• **total_items**: *number*

*Defined in [packages/vulnerabilities/api.ts:1231](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1231)*

Total number of records.

**`memberof`** MetaAffectedSystems
