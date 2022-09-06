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

*Defined in [api.ts:970](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L970)*

String representation of cvss2 score of the CVE.

**`memberof`** ExecutiveReportTopCves

___

###  cvss3_score

• **cvss3_score**: *string | null*

*Defined in [api.ts:976](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L976)*

String representation of cvss3 score of the CVE.

**`memberof`** ExecutiveReportTopCves

___

###  description

• **description**: *string*

*Defined in [api.ts:982](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L982)*

Description of the CVE.

**`memberof`** ExecutiveReportTopCves

___

###  known_exploit

• **known_exploit**: *boolean*

*Defined in [api.ts:988](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L988)*

Shows whether a CVE has known exploits or not

**`memberof`** ExecutiveReportTopCves

___

### `Optional` rule_presence

• **rule_presence**? : *boolean*

*Defined in [api.ts:994](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L994)*

Indicator of security rule presence

**`memberof`** ExecutiveReportTopCves

___

### `Optional` security_rule

• **security_rule**? : *boolean*

*Defined in [api.ts:1000](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1000)*

Indicator of security rule presence

**`memberof`** ExecutiveReportTopCves

___

###  synopsis

• **synopsis**: *string*

*Defined in [api.ts:1006](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1006)*

CVE synopsis

**`memberof`** ExecutiveReportTopCves

___

###  systems_affected

• **systems_affected**: *number*

*Defined in [api.ts:1012](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1012)*

Systems affected by the CVE.

**`memberof`** ExecutiveReportTopCves
