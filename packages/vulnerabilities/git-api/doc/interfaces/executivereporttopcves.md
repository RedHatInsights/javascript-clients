[@redhat-cloud-services/vulnerabilities-client](../README.md) › [Globals](../globals.md) › [ExecutiveReportTopCves](executivereporttopcves.md)

# Interface: ExecutiveReportTopCves

**`export`** 

**`interface`** ExecutiveReportTopCves

## Hierarchy

* **ExecutiveReportTopCves**

## Index

### Properties

* [cvss2Score](executivereporttopcves.md#cvss2score)
* [cvss3Score](executivereporttopcves.md#cvss3score)
* [description](executivereporttopcves.md#description)
* [synopsis](executivereporttopcves.md#synopsis)
* [systemsAffected](executivereporttopcves.md#systemsaffected)

## Properties

###  cvss2Score

• **cvss2Score**: *string | null*

*Defined in [git-api/api.ts:595](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L595)*

String representation of cvss2 score of the CVE.

**`type`** {string}

**`memberof`** ExecutiveReportTopCves

___

###  cvss3Score

• **cvss3Score**: *string | null*

*Defined in [git-api/api.ts:601](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L601)*

String representation of cvss3 score of the CVE.

**`type`** {string}

**`memberof`** ExecutiveReportTopCves

___

###  description

• **description**: *string*

*Defined in [git-api/api.ts:607](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L607)*

Description of the CVE.

**`type`** {string}

**`memberof`** ExecutiveReportTopCves

___

###  synopsis

• **synopsis**: *string*

*Defined in [git-api/api.ts:589](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L589)*

CVE synopsis

**`type`** {string}

**`memberof`** ExecutiveReportTopCves

___

###  systemsAffected

• **systemsAffected**: *number*

*Defined in [git-api/api.ts:613](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L613)*

Systems affected by the CVE.

**`type`** {number}

**`memberof`** ExecutiveReportTopCves
