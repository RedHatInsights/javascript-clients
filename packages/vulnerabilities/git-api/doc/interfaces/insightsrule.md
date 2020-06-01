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
* [summary](insightsrule.md#summary)

## Properties

###  associated_cves

• **associated_cves**: *Array‹string›*

*Defined in [packages/vulnerabilities/git-api/api.ts:655](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L655)*

List of CVEs associated with the rule.

**`memberof`** InsightsRule

___

###  change_risk

• **change_risk**: *number | null*

*Defined in [packages/vulnerabilities/git-api/api.ts:643](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L643)*

Indicates how likely remediation can change environment on the remediatied system.

**`memberof`** InsightsRule

___

###  description

• **description**: *string | null*

*Defined in [packages/vulnerabilities/git-api/api.ts:613](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L613)*

Description of the rule.

**`memberof`** InsightsRule

___

###  generic

• **generic**: *string | null*

*Defined in [packages/vulnerabilities/git-api/api.ts:625](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L625)*

Generic information about the rule.

**`memberof`** InsightsRule

___

###  kbase_node_id

• **kbase_node_id**: *number | null*

*Defined in [packages/vulnerabilities/git-api/api.ts:649](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L649)*

ID of associated Red Hat knowledgebase article.

**`memberof`** InsightsRule

___

###  playbook_count

• **playbook_count**: *number | null*

*Defined in [packages/vulnerabilities/git-api/api.ts:637](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L637)*

Number of available Ansible playbooks for remediation/mitigation.

**`memberof`** InsightsRule

___

###  reboot_required

• **reboot_required**: *boolean | null*

*Defined in [packages/vulnerabilities/git-api/api.ts:631](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L631)*

Indicator whter reboot is required to mitigate vulnerability.

**`memberof`** InsightsRule

___

###  rule_id

• **rule_id**: *string*

*Defined in [packages/vulnerabilities/git-api/api.ts:607](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L607)*

ID(s) of associated security rule(s).

**`memberof`** InsightsRule

___

###  summary

• **summary**: *string | null*

*Defined in [packages/vulnerabilities/git-api/api.ts:619](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L619)*

Summary of the rule.

**`memberof`** InsightsRule
