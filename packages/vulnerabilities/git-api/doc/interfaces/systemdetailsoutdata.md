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

*Defined in [git-api/api.ts:1363](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1363)*

Date of last evaluation.

**`type`** {string}

**`memberof`** SystemDetailsOutData

___

###  lastUpload

• **lastUpload**: *string | null*

*Defined in [git-api/api.ts:1381](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1381)*

Date of the latest upload of archive.

**`type`** {string}

**`memberof`** SystemDetailsOutData

___

###  optOut

• **optOut**: *boolean*

*Defined in [git-api/api.ts:1375](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1375)*

System opt out status.

**`type`** {boolean}

**`memberof`** SystemDetailsOutData

___

###  rulesEvaluation

• **rulesEvaluation**: *string | null*

*Defined in [git-api/api.ts:1369](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1369)*

Date of last security rules evaluation.

**`type`** {string}

**`memberof`** SystemDetailsOutData

___

### `Optional` stale

• **stale**? : *boolean*

*Defined in [git-api/api.ts:1387](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1387)*

System stale status.

**`type`** {boolean}

**`memberof`** SystemDetailsOutData
