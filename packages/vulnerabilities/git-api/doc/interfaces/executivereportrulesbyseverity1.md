[@redhat-cloud-services/vulnerabilities-client](../README.md) › [Globals](../globals.md) › [ExecutiveReportRulesBySeverity1](executivereportrulesbyseverity1.md)

# Interface: ExecutiveReportRulesBySeverity1

**`export`** 

**`interface`** ExecutiveReportRulesBySeverity1

## Hierarchy

* **ExecutiveReportRulesBySeverity1**

## Index

### Properties

* [rule_count](executivereportrulesbyseverity1.md#rule_count)
* [systems_affected](executivereportrulesbyseverity1.md#systems_affected)

## Properties

###  rule_count

• **rule_count**: *number*

*Defined in [git-api/api.ts:945](https://github.com/RedHatInsights/javascript-clients.gi/blob/master/packages/vulnerabilities/git-api/api.ts#L945)*

How many unique rules with at least system affected are present.

**`memberof`** ExecutiveReportRulesBySeverity1

___

###  systems_affected

• **systems_affected**: *number*

*Defined in [git-api/api.ts:951](https://github.com/RedHatInsights/javascript-clients.gi/blob/master/packages/vulnerabilities/git-api/api.ts#L951)*

How many unique systems are affected by at least one rules with given severity

**`memberof`** ExecutiveReportRulesBySeverity1
