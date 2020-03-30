[@redhat-cloud-services/vulnerabilities-client](../README.md) › [Globals](../globals.md) › [SystemDetailsOutData](systemdetailsoutdata.md)

# Interface: SystemDetailsOutData

**`export`** 

**`interface`** SystemDetailsOutData

## Hierarchy

* **SystemDetailsOutData**

## Index

### Properties

* [lastEvaluation](systemdetailsoutdata.md#lastevaluation)
* [lastUpload](systemdetailsoutdata.md#lastupload)
* [optOut](systemdetailsoutdata.md#optout)
* [rulesEvaluation](systemdetailsoutdata.md#rulesevaluation)
* [stale](systemdetailsoutdata.md#optional-stale)

## Properties

###  lastEvaluation

• **lastEvaluation**: *string | null*

*Defined in [git-api/api.ts:1425](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1425)*

Date of last evaluation.

**`type`** {string}

**`memberof`** SystemDetailsOutData

___

###  lastUpload

• **lastUpload**: *string | null*

*Defined in [git-api/api.ts:1443](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1443)*

Date of the latest upload of archive.

**`type`** {string}

**`memberof`** SystemDetailsOutData

___

###  optOut

• **optOut**: *boolean*

*Defined in [git-api/api.ts:1437](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1437)*

System opt out status.

**`type`** {boolean}

**`memberof`** SystemDetailsOutData

___

###  rulesEvaluation

• **rulesEvaluation**: *string | null*

*Defined in [git-api/api.ts:1431](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1431)*

Date of last security rules evaluation.

**`type`** {string}

**`memberof`** SystemDetailsOutData

___

### `Optional` stale

• **stale**? : *boolean*

*Defined in [git-api/api.ts:1449](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1449)*

System stale status.

**`type`** {boolean}

**`memberof`** SystemDetailsOutData
