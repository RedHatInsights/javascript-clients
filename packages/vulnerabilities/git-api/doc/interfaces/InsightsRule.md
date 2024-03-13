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

[api.ts:1101](https://github.com/mkholjuraev/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1101)

___

### change\_risk

• **change\_risk**: `number`

Indicates how likely remediation can change environment on the remediatied system.

**`Memberof`**

InsightsRule

#### Defined in

[api.ts:1107](https://github.com/mkholjuraev/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1107)

___

### description

• **description**: `string`

Description of the rule.

**`Memberof`**

InsightsRule

#### Defined in

[api.ts:1113](https://github.com/mkholjuraev/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1113)

___

### kbase\_node\_id

• **kbase\_node\_id**: `number`

ID of associated Red Hat knowledgebase article.

**`Memberof`**

InsightsRule

#### Defined in

[api.ts:1119](https://github.com/mkholjuraev/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1119)

___

### playbook\_count

• **playbook\_count**: `number`

Number of available Ansible playbooks for remediation/mitigation.

**`Memberof`**

InsightsRule

#### Defined in

[api.ts:1125](https://github.com/mkholjuraev/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1125)

___

### publish\_date

• **publish\_date**: `string`

Date when the rule was published.

**`Memberof`**

InsightsRule

#### Defined in

[api.ts:1131](https://github.com/mkholjuraev/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1131)

___

### reboot\_required

• **reboot\_required**: `boolean`

Indicator whter reboot is required to mitigate vulnerability.

**`Memberof`**

InsightsRule

#### Defined in

[api.ts:1137](https://github.com/mkholjuraev/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1137)

___

### rule\_id

• **rule\_id**: `string`

ID(s) of associated security rule(s).

**`Memberof`**

InsightsRule

#### Defined in

[api.ts:1143](https://github.com/mkholjuraev/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1143)

___

### rule\_impact

• **rule\_impact**: `number`

Shows rules impact number from 1 to 4

**`Memberof`**

InsightsRule

#### Defined in

[api.ts:1149](https://github.com/mkholjuraev/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1149)

___

### summary

• **summary**: `string`

Summary of the rule.

**`Memberof`**

InsightsRule

#### Defined in

[api.ts:1155](https://github.com/mkholjuraev/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1155)

___

### systems\_affected

• `Optional` **systems\_affected**: `number`

Number of systems affected by the rule.

**`Memberof`**

InsightsRule

#### Defined in

[api.ts:1161](https://github.com/mkholjuraev/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1161)
