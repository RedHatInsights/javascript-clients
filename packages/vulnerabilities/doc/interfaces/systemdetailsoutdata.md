[@redhat-cloud-services/vulnerabilities-client](../README.md) › [Globals](../globals.md) › [SystemDetailsOutData](systemdetailsoutdata.md)

# Interface: SystemDetailsOutData

**`export`** 

**`interface`** SystemDetailsOutData

## Hierarchy

* **SystemDetailsOutData**

## Index

### Properties

* [last_evaluation](systemdetailsoutdata.md#last_evaluation)
* [last_upload](systemdetailsoutdata.md#last_upload)
* [opt_out](systemdetailsoutdata.md#opt_out)
* [rules_evaluation](systemdetailsoutdata.md#rules_evaluation)
* [stale](systemdetailsoutdata.md#optional-stale)
* [tags](systemdetailsoutdata.md#tags)
* [updated](systemdetailsoutdata.md#optional-updated)

## Properties

###  last_evaluation

• **last_evaluation**: *string | null*

*Defined in [packages/vulnerabilities/api.ts:1747](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1747)*

Date of last evaluation.

**`memberof`** SystemDetailsOutData

___

###  last_upload

• **last_upload**: *string | null*

*Defined in [packages/vulnerabilities/api.ts:1765](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1765)*

Date of the latest upload of archive.

**`memberof`** SystemDetailsOutData

___

###  opt_out

• **opt_out**: *boolean*

*Defined in [packages/vulnerabilities/api.ts:1759](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1759)*

System opt out status.

**`memberof`** SystemDetailsOutData

___

###  rules_evaluation

• **rules_evaluation**: *string | null*

*Defined in [packages/vulnerabilities/api.ts:1753](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1753)*

Date of last security rules evaluation.

**`memberof`** SystemDetailsOutData

___

### `Optional` stale

• **stale**? : *boolean*

*Defined in [packages/vulnerabilities/api.ts:1771](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1771)*

System stale status.

**`memberof`** SystemDetailsOutData

___

###  tags

• **tags**: *Array‹[SystemDetailsOutDataTags](systemdetailsoutdatatags.md)›*

*Defined in [packages/vulnerabilities/api.ts:1783](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1783)*

**`memberof`** SystemDetailsOutData

___

### `Optional` updated

• **updated**? : *string | null*

*Defined in [packages/vulnerabilities/api.ts:1777](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1777)*

Date of the lastest upload of archive taken from Inventory syndicated data.

**`memberof`** SystemDetailsOutData
