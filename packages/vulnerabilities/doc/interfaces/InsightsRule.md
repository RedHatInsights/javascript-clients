[@redhat-cloud-services/vulnerabilities-client](../README.md) / [Exports](../modules.md) / InsightsRule

# Interface: InsightsRule

**`Export`**

**`Interface`**

InsightsRule

## Table of contents

### Properties

- [associated\_cves](InsightsRule.md#associated_cves)
- [change\_risk](InsightsRule.md#change_risk)
- [description](InsightsRule.md#description)
- [kbase\_node\_id](InsightsRule.md#kbase_node_id)
- [playbook\_count](InsightsRule.md#playbook_count)
- [publish\_date](InsightsRule.md#publish_date)
- [reboot\_required](InsightsRule.md#reboot_required)
- [rule\_id](InsightsRule.md#rule_id)
- [rule\_impact](InsightsRule.md#rule_impact)
- [summary](InsightsRule.md#summary)
- [systems\_affected](InsightsRule.md#systems_affected)

## Properties

### associated\_cves

• **associated\_cves**: `string`[]

List of CVEs associated with the rule.

**`Memberof`**

InsightsRule

#### Defined in

[api.ts:1126](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1126)

___

### change\_risk

• **change\_risk**: `number`

Indicates how likely remediation can change environment on the remediatied system.

**`Memberof`**

InsightsRule

#### Defined in

[api.ts:1132](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1132)

___

### description

• **description**: `string`

Description of the rule.

**`Memberof`**

InsightsRule

#### Defined in

[api.ts:1138](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1138)

___

### kbase\_node\_id

• **kbase\_node\_id**: `number`

ID of associated Red Hat knowledgebase article.

**`Memberof`**

InsightsRule

#### Defined in

[api.ts:1144](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1144)

___

### playbook\_count

• **playbook\_count**: `number`

Number of available Ansible playbooks for remediation/mitigation.

**`Memberof`**

InsightsRule

#### Defined in

[api.ts:1150](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1150)

___

### publish\_date

• **publish\_date**: `string`

Date when the rule was published.

**`Memberof`**

InsightsRule

#### Defined in

[api.ts:1156](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1156)

___

### reboot\_required

• **reboot\_required**: `boolean`

Indicator whter reboot is required to mitigate vulnerability.

**`Memberof`**

InsightsRule

#### Defined in

[api.ts:1162](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1162)

___

### rule\_id

• **rule\_id**: `string`

ID(s) of associated security rule(s).

**`Memberof`**

InsightsRule

#### Defined in

[api.ts:1168](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1168)

___

### rule\_impact

• **rule\_impact**: `number`

Shows rules impact number from 1 to 4

**`Memberof`**

InsightsRule

#### Defined in

[api.ts:1174](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1174)

___

### summary

• **summary**: `string`

Summary of the rule.

**`Memberof`**

InsightsRule

#### Defined in

[api.ts:1180](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1180)

___

### systems\_affected

• `Optional` **systems\_affected**: `number`

Number of systems affected by the rule.

**`Memberof`**

InsightsRule

#### Defined in

[api.ts:1186](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1186)
