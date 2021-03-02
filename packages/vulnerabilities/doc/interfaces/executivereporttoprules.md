[@redhat-cloud-services/vulnerabilities-client](../README.md) › [Globals](../globals.md) › [ExecutiveReportTopRules](executivereporttoprules.md)

# Interface: ExecutiveReportTopRules

**`export`** 

**`interface`** ExecutiveReportTopRules

## Hierarchy

* **ExecutiveReportTopRules**

## Index

### Properties

* [associated_cves](executivereporttoprules.md#associated_cves)
* [description](executivereporttoprules.md#description)
* [name](executivereporttoprules.md#name)
* [rule_id](executivereporttoprules.md#optional-rule_id)
* [severity](executivereporttoprules.md#severity)
* [systems_affected](executivereporttoprules.md#systems_affected)

## Properties

###  associated_cves

• **associated_cves**: *Array‹string›*

*Defined in [packages/vulnerabilities/api.ts:784](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L784)*

All CVEs associated with the rule

**`memberof`** ExecutiveReportTopRules

___

###  description

• **description**: *string*

*Defined in [packages/vulnerabilities/api.ts:790](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L790)*

Short description of the problem.

**`memberof`** ExecutiveReportTopRules

___

###  name

• **name**: *string*

*Defined in [packages/vulnerabilities/api.ts:802](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L802)*

Name of the security rule.

**`memberof`** ExecutiveReportTopRules

___

### `Optional` rule_id

• **rule_id**? : *string*

*Defined in [packages/vulnerabilities/api.ts:796](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L796)*

ID of associated security rule.

**`memberof`** ExecutiveReportTopRules

___

###  severity

• **severity**: *number*

*Defined in [packages/vulnerabilities/api.ts:808](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L808)*

Severity of the security rule.

**`memberof`** ExecutiveReportTopRules

___

###  systems_affected

• **systems_affected**: *number*

*Defined in [packages/vulnerabilities/api.ts:814](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L814)*

Number of systems affected by the rule.

**`memberof`** ExecutiveReportTopRules
