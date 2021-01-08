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

*Defined in [packages/vulnerabilities/git-api/api.ts:1864](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1864)*

Date of last evaluation.

**`memberof`** SystemDetailsOutData

___

###  last_upload

• **last_upload**: *string | null*

*Defined in [packages/vulnerabilities/git-api/api.ts:1882](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1882)*

Date of the latest upload of archive.

**`memberof`** SystemDetailsOutData

___

###  opt_out

• **opt_out**: *boolean*

*Defined in [packages/vulnerabilities/git-api/api.ts:1876](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1876)*

System opt out status.

**`memberof`** SystemDetailsOutData

___

###  rules_evaluation

• **rules_evaluation**: *string | null*

*Defined in [packages/vulnerabilities/git-api/api.ts:1870](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1870)*

Date of last security rules evaluation.

**`memberof`** SystemDetailsOutData

___

### `Optional` stale

• **stale**? : *boolean*

*Defined in [packages/vulnerabilities/git-api/api.ts:1888](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1888)*

System stale status.

**`memberof`** SystemDetailsOutData

___

###  tags

• **tags**: *Array‹[SystemDetailsOutDataTags](systemdetailsoutdatatags.md)›*

*Defined in [packages/vulnerabilities/git-api/api.ts:1900](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1900)*

**`memberof`** SystemDetailsOutData

___

### `Optional` updated

• **updated**? : *string | null*

*Defined in [packages/vulnerabilities/git-api/api.ts:1894](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1894)*

Date of the lastest upload of archive taken from Inventory syndicated data.

**`memberof`** SystemDetailsOutData
