[@redhat-cloud-services/vulnerabilities-client](../README.md) › [Globals](../globals.md) › [ExecutiveReportTopCves](executivereporttopcves.md)

# Interface: ExecutiveReportTopCves

**`export`** 

**`interface`** ExecutiveReportTopCves

## Hierarchy

* **ExecutiveReportTopCves**

## Index

### Properties

* [cvss2_score](executivereporttopcves.md#cvss2_score)
* [cvss3_score](executivereporttopcves.md#cvss3_score)
* [description](executivereporttopcves.md#description)
* [security_rule](executivereporttopcves.md#optional-security_rule)
* [synopsis](executivereporttopcves.md#synopsis)
* [systems_affected](executivereporttopcves.md#systems_affected)

## Properties

###  cvss2_score

• **cvss2_score**: *string | null*

*Defined in [packages/vulnerabilities/git-api/api.ts:753](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L753)*

String representation of cvss2 score of the CVE.

**`memberof`** ExecutiveReportTopCves

___

###  cvss3_score

• **cvss3_score**: *string | null*

*Defined in [packages/vulnerabilities/git-api/api.ts:759](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L759)*

String representation of cvss3 score of the CVE.

**`memberof`** ExecutiveReportTopCves

___

###  description

• **description**: *string*

*Defined in [packages/vulnerabilities/git-api/api.ts:765](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L765)*

Description of the CVE.

**`memberof`** ExecutiveReportTopCves

___

### `Optional` security_rule

• **security_rule**? : *boolean*

*Defined in [packages/vulnerabilities/git-api/api.ts:771](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L771)*

Indicator of security rule presence

**`memberof`** ExecutiveReportTopCves

___

###  synopsis

• **synopsis**: *string*

*Defined in [packages/vulnerabilities/git-api/api.ts:747](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L747)*

CVE synopsis

**`memberof`** ExecutiveReportTopCves

___

###  systems_affected

• **systems_affected**: *number*

*Defined in [packages/vulnerabilities/git-api/api.ts:777](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L777)*

Systems affected by the CVE.

**`memberof`** ExecutiveReportTopCves
