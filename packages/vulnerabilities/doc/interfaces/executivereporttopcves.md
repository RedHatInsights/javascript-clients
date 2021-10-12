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
* [security_rule](executivereporttopcves.md#optional-security_rule)
* [synopsis](executivereporttopcves.md#synopsis)
* [systems_affected](executivereporttopcves.md#systems_affected)

## Properties

###  cvss2_score

• **cvss2_score**: *string | null*

*Defined in [packages/vulnerabilities/api.ts:896](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L896)*

String representation of cvss2 score of the CVE.

**`memberof`** ExecutiveReportTopCves

___

###  cvss3_score

• **cvss3_score**: *string | null*

*Defined in [packages/vulnerabilities/api.ts:902](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L902)*

String representation of cvss3 score of the CVE.

**`memberof`** ExecutiveReportTopCves

___

###  description

• **description**: *string*

*Defined in [packages/vulnerabilities/api.ts:908](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L908)*

Description of the CVE.

**`memberof`** ExecutiveReportTopCves

___

###  known_exploit

• **known_exploit**: *boolean*

*Defined in [packages/vulnerabilities/api.ts:914](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L914)*

Shows whether a CVE has known exploits or not

**`memberof`** ExecutiveReportTopCves

___

### `Optional` security_rule

• **security_rule**? : *boolean*

*Defined in [packages/vulnerabilities/api.ts:920](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L920)*

Indicator of security rule presence

**`memberof`** ExecutiveReportTopCves

___

###  synopsis

• **synopsis**: *string*

*Defined in [packages/vulnerabilities/api.ts:926](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L926)*

CVE synopsis

**`memberof`** ExecutiveReportTopCves

___

###  systems_affected

• **systems_affected**: *number*

*Defined in [packages/vulnerabilities/api.ts:932](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L932)*

Systems affected by the CVE.

**`memberof`** ExecutiveReportTopCves
