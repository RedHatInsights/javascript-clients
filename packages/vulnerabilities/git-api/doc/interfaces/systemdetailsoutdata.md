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
* [os](systemdetailsoutdata.md#os)
* [rules_evaluation](systemdetailsoutdata.md#rules_evaluation)
* [stale](systemdetailsoutdata.md#optional-stale)
* [tags](systemdetailsoutdata.md#tags)
* [updated](systemdetailsoutdata.md#optional-updated)

## Properties

###  last_evaluation

• **last_evaluation**: *string | null*

*Defined in [packages/vulnerabilities/git-api/api.ts:2300](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L2300)*

Date of last evaluation.

**`memberof`** SystemDetailsOutData

___

###  last_upload

• **last_upload**: *string | null*

*Defined in [packages/vulnerabilities/git-api/api.ts:2306](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L2306)*

Date of the latest upload of archive.

**`memberof`** SystemDetailsOutData

___

###  opt_out

• **opt_out**: *boolean*

*Defined in [packages/vulnerabilities/git-api/api.ts:2312](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L2312)*

System opt out status.

**`memberof`** SystemDetailsOutData

___

###  os

• **os**: *string*

*Defined in [packages/vulnerabilities/git-api/api.ts:2318](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L2318)*

Operating system.

**`memberof`** SystemDetailsOutData

___

###  rules_evaluation

• **rules_evaluation**: *string | null*

*Defined in [packages/vulnerabilities/git-api/api.ts:2324](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L2324)*

Date of last security rules evaluation.

**`memberof`** SystemDetailsOutData

___

### `Optional` stale

• **stale**? : *boolean*

*Defined in [packages/vulnerabilities/git-api/api.ts:2330](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L2330)*

System stale status.

**`memberof`** SystemDetailsOutData

___

###  tags

• **tags**: *Array‹[SystemDetailsOutDataTags](systemdetailsoutdatatags.md)›*

*Defined in [packages/vulnerabilities/git-api/api.ts:2336](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L2336)*

**`memberof`** SystemDetailsOutData

___

### `Optional` updated

• **updated**? : *string | null*

*Defined in [packages/vulnerabilities/git-api/api.ts:2342](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L2342)*

Date of the lastest upload of archive taken from Inventory syndicated data.

**`memberof`** SystemDetailsOutData
