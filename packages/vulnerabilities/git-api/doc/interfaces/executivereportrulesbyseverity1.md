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

*Defined in [packages/vulnerabilities/git-api/api.ts:655](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L655)*

How many unique rules with at least system affected are present.

**`memberof`** ExecutiveReportRulesBySeverity1

___

###  systems_affected

• **systems_affected**: *number*

*Defined in [packages/vulnerabilities/git-api/api.ts:661](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L661)*

How many unique systems are affected by at least one rules with given severity

**`memberof`** ExecutiveReportRulesBySeverity1
