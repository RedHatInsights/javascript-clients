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

*Defined in [packages/vulnerabilities/git-api/api.ts:902](https://github.com/fhlavac/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L902)*

String representation of cvss2 score of the CVE.

**`memberof`** ExecutiveReportTopCves

___

###  cvss3_score

• **cvss3_score**: *string | null*

*Defined in [packages/vulnerabilities/git-api/api.ts:908](https://github.com/fhlavac/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L908)*

String representation of cvss3 score of the CVE.

**`memberof`** ExecutiveReportTopCves

___

###  description

• **description**: *string*

*Defined in [packages/vulnerabilities/git-api/api.ts:914](https://github.com/fhlavac/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L914)*

Description of the CVE.

**`memberof`** ExecutiveReportTopCves

___

###  known_exploit

• **known_exploit**: *boolean*

*Defined in [packages/vulnerabilities/git-api/api.ts:932](https://github.com/fhlavac/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L932)*

Shows whether a CVE has known exploits or not

**`memberof`** ExecutiveReportTopCves

___

### `Optional` security_rule

• **security_rule**? : *boolean*

*Defined in [packages/vulnerabilities/git-api/api.ts:920](https://github.com/fhlavac/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L920)*

Indicator of security rule presence

**`memberof`** ExecutiveReportTopCves

___

###  synopsis

• **synopsis**: *string*

*Defined in [packages/vulnerabilities/git-api/api.ts:896](https://github.com/fhlavac/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L896)*

CVE synopsis

**`memberof`** ExecutiveReportTopCves

___

###  systems_affected

• **systems_affected**: *number*

*Defined in [packages/vulnerabilities/git-api/api.ts:926](https://github.com/fhlavac/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L926)*

Systems affected by the CVE.

**`memberof`** ExecutiveReportTopCves
