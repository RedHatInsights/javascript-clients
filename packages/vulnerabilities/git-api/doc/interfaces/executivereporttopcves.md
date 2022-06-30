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
* [known_exploit](executivereporttopcves.md#known_exploit)
* [rule_presence](executivereporttopcves.md#optional-rule_presence)
* [security_rule](executivereporttopcves.md#optional-security_rule)
* [synopsis](executivereporttopcves.md#synopsis)
* [systems_affected](executivereporttopcves.md#systems_affected)

## Properties

###  cvss2_score

• **cvss2_score**: *string | null*

*Defined in [git-api/api.ts:964](https://github.com/RedHatInsights/javascript-clients.gi/blob/master/packages/vulnerabilities/git-api/api.ts#L964)*

String representation of cvss2 score of the CVE.

**`memberof`** ExecutiveReportTopCves

___

###  cvss3_score

• **cvss3_score**: *string | null*

*Defined in [git-api/api.ts:970](https://github.com/RedHatInsights/javascript-clients.gi/blob/master/packages/vulnerabilities/git-api/api.ts#L970)*

String representation of cvss3 score of the CVE.

**`memberof`** ExecutiveReportTopCves

___

###  description

• **description**: *string*

*Defined in [git-api/api.ts:976](https://github.com/RedHatInsights/javascript-clients.gi/blob/master/packages/vulnerabilities/git-api/api.ts#L976)*

Description of the CVE.

**`memberof`** ExecutiveReportTopCves

___

###  known_exploit

• **known_exploit**: *boolean*

*Defined in [git-api/api.ts:982](https://github.com/RedHatInsights/javascript-clients.gi/blob/master/packages/vulnerabilities/git-api/api.ts#L982)*

Shows whether a CVE has known exploits or not

**`memberof`** ExecutiveReportTopCves

___

### `Optional` rule_presence

• **rule_presence**? : *boolean*

*Defined in [git-api/api.ts:988](https://github.com/RedHatInsights/javascript-clients.gi/blob/master/packages/vulnerabilities/git-api/api.ts#L988)*

Indicator of security rule presence

**`memberof`** ExecutiveReportTopCves

___

### `Optional` security_rule

• **security_rule**? : *boolean*

*Defined in [git-api/api.ts:994](https://github.com/RedHatInsights/javascript-clients.gi/blob/master/packages/vulnerabilities/git-api/api.ts#L994)*

Indicator of security rule presence

**`memberof`** ExecutiveReportTopCves

___

###  synopsis

• **synopsis**: *string*

*Defined in [git-api/api.ts:1000](https://github.com/RedHatInsights/javascript-clients.gi/blob/master/packages/vulnerabilities/git-api/api.ts#L1000)*

CVE synopsis

**`memberof`** ExecutiveReportTopCves

___

###  systems_affected

• **systems_affected**: *number*

*Defined in [git-api/api.ts:1006](https://github.com/RedHatInsights/javascript-clients.gi/blob/master/packages/vulnerabilities/git-api/api.ts#L1006)*

Systems affected by the CVE.

**`memberof`** ExecutiveReportTopCves
