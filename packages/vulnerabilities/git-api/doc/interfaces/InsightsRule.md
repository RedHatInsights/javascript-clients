[@redhat-cloud-services/vulnerabilities-client](../README.md) / [Exports](../modules.md) / InsightsRule

# Interface: InsightsRule

**`Export`**

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

[api.ts:1124](https://github.com/mkholjuraev/javascript-clients/blob/main/packages/vulnerabilities/git-api/api.ts#L1124)

___

### change\_risk

• **change\_risk**: ``null`` \| `number`

Indicates how likely remediation can change environment on the remediatied system.

**`Memberof`**

InsightsRule

#### Defined in

[api.ts:1112](https://github.com/mkholjuraev/javascript-clients/blob/main/packages/vulnerabilities/git-api/api.ts#L1112)

___

### description

• **description**: ``null`` \| `string`

Description of the rule.

**`Memberof`**

InsightsRule

#### Defined in

[api.ts:1088](https://github.com/mkholjuraev/javascript-clients/blob/main/packages/vulnerabilities/git-api/api.ts#L1088)

___

### kbase\_node\_id

• **kbase\_node\_id**: ``null`` \| `number`

ID of associated Red Hat knowledgebase article.

**`Memberof`**

InsightsRule

#### Defined in

[api.ts:1118](https://github.com/mkholjuraev/javascript-clients/blob/main/packages/vulnerabilities/git-api/api.ts#L1118)

___

### playbook\_count

• **playbook\_count**: ``null`` \| `number`

Number of available Ansible playbooks for remediation/mitigation.

**`Memberof`**

InsightsRule

#### Defined in

[api.ts:1106](https://github.com/mkholjuraev/javascript-clients/blob/main/packages/vulnerabilities/git-api/api.ts#L1106)

___

### publish\_date

• **publish\_date**: ``null`` \| `string`

Date when the rule was published.

**`Memberof`**

InsightsRule

#### Defined in

[api.ts:1142](https://github.com/mkholjuraev/javascript-clients/blob/main/packages/vulnerabilities/git-api/api.ts#L1142)

___

### reboot\_required

• **reboot\_required**: ``null`` \| `boolean`

Indicator whter reboot is required to mitigate vulnerability.

**`Memberof`**

InsightsRule

#### Defined in

[api.ts:1100](https://github.com/mkholjuraev/javascript-clients/blob/main/packages/vulnerabilities/git-api/api.ts#L1100)

___

### rule\_id

• **rule\_id**: `string`

ID(s) of associated security rule(s).

**`Memberof`**

InsightsRule

#### Defined in

[api.ts:1082](https://github.com/mkholjuraev/javascript-clients/blob/main/packages/vulnerabilities/git-api/api.ts#L1082)

___

### rule\_impact

• **rule\_impact**: ``null`` \| `number`

Shows rules impact number from 1 to 4

**`Memberof`**

InsightsRule

#### Defined in

[api.ts:1130](https://github.com/mkholjuraev/javascript-clients/blob/main/packages/vulnerabilities/git-api/api.ts#L1130)

___

### summary

• **summary**: ``null`` \| `string`

Summary of the rule.

**`Memberof`**

InsightsRule

#### Defined in

[api.ts:1094](https://github.com/mkholjuraev/javascript-clients/blob/main/packages/vulnerabilities/git-api/api.ts#L1094)

___

### systems\_affected

• `Optional` **systems\_affected**: `number`

Number of systems affected by the rule.

**`Memberof`**

InsightsRule

#### Defined in

[api.ts:1136](https://github.com/mkholjuraev/javascript-clients/blob/main/packages/vulnerabilities/git-api/api.ts#L1136)
