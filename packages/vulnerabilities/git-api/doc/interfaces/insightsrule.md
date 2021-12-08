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

*Defined in [packages/vulnerabilities/git-api/api.ts:1012](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1012)*

List of CVEs associated with the rule.

**`memberof`** InsightsRule

___

###  change_risk

• **change_risk**: *number | null*

*Defined in [packages/vulnerabilities/git-api/api.ts:1018](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1018)*

Indicates how likely remediation can change environment on the remediatied system.

**`memberof`** InsightsRule

___

###  description

• **description**: *string | null*

*Defined in [packages/vulnerabilities/git-api/api.ts:1024](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1024)*

Description of the rule.

**`memberof`** InsightsRule

___

###  kbase_node_id

• **kbase_node_id**: *number | null*

*Defined in [packages/vulnerabilities/git-api/api.ts:1030](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1030)*

ID of associated Red Hat knowledgebase article.

**`memberof`** InsightsRule

___

###  playbook_count

• **playbook_count**: *number | null*

*Defined in [packages/vulnerabilities/git-api/api.ts:1036](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1036)*

Number of available Ansible playbooks for remediation/mitigation.

**`memberof`** InsightsRule

___

###  publish_date

• **publish_date**: *string | null*

*Defined in [packages/vulnerabilities/git-api/api.ts:1042](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1042)*

Date when the rule was published.

**`memberof`** InsightsRule

___

###  reboot_required

• **reboot_required**: *boolean | null*

*Defined in [packages/vulnerabilities/git-api/api.ts:1048](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1048)*

Indicator whter reboot is required to mitigate vulnerability.

**`memberof`** InsightsRule

___

###  rule_id

• **rule_id**: *string*

*Defined in [packages/vulnerabilities/git-api/api.ts:1054](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1054)*

ID(s) of associated security rule(s).

**`memberof`** InsightsRule

___

###  rule_impact

• **rule_impact**: *number | null*

*Defined in [packages/vulnerabilities/git-api/api.ts:1060](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1060)*

Shows rules impact number from 1 to 4

**`memberof`** InsightsRule

___

###  summary

• **summary**: *string | null*

*Defined in [packages/vulnerabilities/git-api/api.ts:1066](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1066)*

Summary of the rule.

**`memberof`** InsightsRule

___

### `Optional` systems_affected

• **systems_affected**? : *number*

*Defined in [packages/vulnerabilities/git-api/api.ts:1072](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1072)*

Number of systems affected by the rule.

**`memberof`** InsightsRule
