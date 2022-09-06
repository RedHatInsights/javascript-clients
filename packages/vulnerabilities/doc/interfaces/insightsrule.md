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
* [kbase_node_id](insightsrule.md#kbase_node_id)
* [playbook_count](insightsrule.md#playbook_count)
* [publish_date](insightsrule.md#publish_date)
* [reboot_required](insightsrule.md#reboot_required)
* [rule_id](insightsrule.md#rule_id)
* [rule_impact](insightsrule.md#rule_impact)
* [summary](insightsrule.md#summary)
* [systems_affected](insightsrule.md#optional-systems_affected)

## Properties

###  associated_cves

• **associated_cves**: *Array‹string›*

*Defined in [api.ts:1068](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1068)*

List of CVEs associated with the rule.

**`memberof`** InsightsRule

___

###  change_risk

• **change_risk**: *number | null*

*Defined in [api.ts:1074](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1074)*

Indicates how likely remediation can change environment on the remediatied system.

**`memberof`** InsightsRule

___

###  description

• **description**: *string | null*

*Defined in [api.ts:1080](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1080)*

Description of the rule.

**`memberof`** InsightsRule

___

###  kbase_node_id

• **kbase_node_id**: *number | null*

*Defined in [api.ts:1086](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1086)*

ID of associated Red Hat knowledgebase article.

**`memberof`** InsightsRule

___

###  playbook_count

• **playbook_count**: *number | null*

*Defined in [api.ts:1092](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1092)*

Number of available Ansible playbooks for remediation/mitigation.

**`memberof`** InsightsRule

___

###  publish_date

• **publish_date**: *string | null*

*Defined in [api.ts:1098](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1098)*

Date when the rule was published.

**`memberof`** InsightsRule

___

###  reboot_required

• **reboot_required**: *boolean | null*

*Defined in [api.ts:1104](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1104)*

Indicator whter reboot is required to mitigate vulnerability.

**`memberof`** InsightsRule

___

###  rule_id

• **rule_id**: *string*

*Defined in [api.ts:1110](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1110)*

ID(s) of associated security rule(s).

**`memberof`** InsightsRule

___

###  rule_impact

• **rule_impact**: *number | null*

*Defined in [api.ts:1116](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1116)*

Shows rules impact number from 1 to 4

**`memberof`** InsightsRule

___

###  summary

• **summary**: *string | null*

*Defined in [api.ts:1122](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1122)*

Summary of the rule.

**`memberof`** InsightsRule

___

### `Optional` systems_affected

• **systems_affected**? : *number*

*Defined in [api.ts:1128](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1128)*

Number of systems affected by the rule.

**`memberof`** InsightsRule
