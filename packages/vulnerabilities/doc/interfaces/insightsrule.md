[@redhat-cloud-services/vulnerabilities-client](../README.md) › [Globals](../globals.md) › [InsightsRule](insightsrule.md)

# Interface: InsightsRule

**`export`** 

**`interface`** InsightsRule

## Hierarchy

* **InsightsRule**

## Index

### Properties

* [associated_cves](insightsrule.md#associated_cves)
* [change_risk](insightsrule.md#change_risk)
* [description](insightsrule.md#description)
* [generic](insightsrule.md#generic)
* [kbase_node_id](insightsrule.md#kbase_node_id)
* [playbook_count](insightsrule.md#playbook_count)
* [reboot_required](insightsrule.md#reboot_required)
* [rule_id](insightsrule.md#rule_id)
* [rule_impact](insightsrule.md#rule_impact)
* [summary](insightsrule.md#summary)
* [systems_affected](insightsrule.md#optional-systems_affected)

## Properties

###  associated_cves

• **associated_cves**: *Array‹string›*

*Defined in [packages/vulnerabilities/api.ts:796](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L796)*

List of CVEs associated with the rule.

**`memberof`** InsightsRule

___

###  change_risk

• **change_risk**: *number | null*

*Defined in [packages/vulnerabilities/api.ts:784](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L784)*

Indicates how likely remediation can change environment on the remediatied system.

**`memberof`** InsightsRule

___

###  description

• **description**: *string | null*

*Defined in [packages/vulnerabilities/api.ts:754](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L754)*

Description of the rule.

**`memberof`** InsightsRule

___

###  generic

• **generic**: *string | null*

*Defined in [packages/vulnerabilities/api.ts:766](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L766)*

Generic information about the rule.

**`memberof`** InsightsRule

___

###  kbase_node_id

• **kbase_node_id**: *number | null*

*Defined in [packages/vulnerabilities/api.ts:790](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L790)*

ID of associated Red Hat knowledgebase article.

**`memberof`** InsightsRule

___

###  playbook_count

• **playbook_count**: *number | null*

*Defined in [packages/vulnerabilities/api.ts:778](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L778)*

Number of available Ansible playbooks for remediation/mitigation.

**`memberof`** InsightsRule

___

###  reboot_required

• **reboot_required**: *boolean | null*

*Defined in [packages/vulnerabilities/api.ts:772](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L772)*

Indicator whter reboot is required to mitigate vulnerability.

**`memberof`** InsightsRule

___

###  rule_id

• **rule_id**: *string*

*Defined in [packages/vulnerabilities/api.ts:748](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L748)*

ID(s) of associated security rule(s).

**`memberof`** InsightsRule

___

###  rule_impact

• **rule_impact**: *number | null*

*Defined in [packages/vulnerabilities/api.ts:802](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L802)*

Shows rules impact number from 1 to 4

**`memberof`** InsightsRule

___

###  summary

• **summary**: *string | null*

*Defined in [packages/vulnerabilities/api.ts:760](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L760)*

Summary of the rule.

**`memberof`** InsightsRule

___

### `Optional` systems_affected

• **systems_affected**? : *number*

*Defined in [packages/vulnerabilities/api.ts:808](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L808)*

Number of systems affected by the rule.

**`memberof`** InsightsRule
