[@redhat-cloud-services/vulnerabilities-client](../README.md) › [Globals](../globals.md) › [InsightsRule](insightsrule.md)

# Interface: InsightsRule

**`export`** 

**`interface`** InsightsRule

## Hierarchy

* **InsightsRule**

## Index

### Properties

* [associatedCves](insightsrule.md#associatedcves)
* [changeRisk](insightsrule.md#changerisk)
* [description](insightsrule.md#description)
* [generic](insightsrule.md#generic)
* [kbaseNodeId](insightsrule.md#kbasenodeid)
* [playbookCount](insightsrule.md#playbookcount)
* [rebootRequired](insightsrule.md#rebootrequired)
* [ruleId](insightsrule.md#ruleid)
* [summary](insightsrule.md#summary)

## Properties

###  associatedCves

• **associatedCves**: *Array‹string›*

*Defined in [git-api/api.ts:675](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L675)*

List of CVEs associated with the rule.

**`type`** {Array<string>}

**`memberof`** InsightsRule

___

###  changeRisk

• **changeRisk**: *number | null*

*Defined in [git-api/api.ts:663](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L663)*

Indicates how likely remediation can change environment on the remediatied system.

**`type`** {number}

**`memberof`** InsightsRule

___

###  description

• **description**: *string | null*

*Defined in [git-api/api.ts:633](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L633)*

Description of the rule.

**`type`** {string}

**`memberof`** InsightsRule

___

###  generic

• **generic**: *string | null*

*Defined in [git-api/api.ts:645](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L645)*

Generic information about the rule.

**`type`** {string}

**`memberof`** InsightsRule

___

###  kbaseNodeId

• **kbaseNodeId**: *number | null*

*Defined in [git-api/api.ts:669](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L669)*

ID of associated Red Hat knowledgebase article.

**`type`** {number}

**`memberof`** InsightsRule

___

###  playbookCount

• **playbookCount**: *number | null*

*Defined in [git-api/api.ts:657](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L657)*

Number of available Ansible playbooks for remediation/mitigation.

**`type`** {number}

**`memberof`** InsightsRule

___

###  rebootRequired

• **rebootRequired**: *boolean | null*

*Defined in [git-api/api.ts:651](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L651)*

Indicator whter reboot is required to mitigate vulnerability.

**`type`** {boolean}

**`memberof`** InsightsRule

___

###  ruleId

• **ruleId**: *string*

*Defined in [git-api/api.ts:627](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L627)*

ID(s) of associated security rule(s).

**`type`** {string}

**`memberof`** InsightsRule

___

###  summary

• **summary**: *string | null*

*Defined in [git-api/api.ts:639](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L639)*

Summary of the rule.

**`type`** {string}

**`memberof`** InsightsRule
