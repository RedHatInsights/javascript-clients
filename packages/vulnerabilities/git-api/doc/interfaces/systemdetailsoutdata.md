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

## Properties

###  last_evaluation

• **last_evaluation**: *string | null*

*Defined in [packages/vulnerabilities/git-api/api.ts:1199](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1199)*

Date of last evaluation.

**`memberof`** SystemDetailsOutData

___

###  last_upload

• **last_upload**: *string | null*

*Defined in [packages/vulnerabilities/git-api/api.ts:1217](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1217)*

Date of the latest upload of archive.

**`memberof`** SystemDetailsOutData

___

###  opt_out

• **opt_out**: *boolean*

*Defined in [packages/vulnerabilities/git-api/api.ts:1211](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1211)*

System opt out status.

**`memberof`** SystemDetailsOutData

___

###  rules_evaluation

• **rules_evaluation**: *string | null*

*Defined in [packages/vulnerabilities/git-api/api.ts:1205](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1205)*

Date of last security rules evaluation.

**`memberof`** SystemDetailsOutData

___

### `Optional` stale

• **stale**? : *boolean*

*Defined in [packages/vulnerabilities/git-api/api.ts:1223](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1223)*

System stale status.

**`memberof`** SystemDetailsOutData
