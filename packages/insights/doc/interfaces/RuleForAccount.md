[@redhat-cloud-services/insights-client](../README.md) / [Exports](../modules.md) / RuleForAccount

# Interface: RuleForAccount

Rule information when we know the account, and therefore can calculate the number of impacted systems and the reports_shown/rule_status flags. We have to declare those explicitly here because they\'re not part of the model.

**`Export`**

RuleForAccount

## Table of contents

### Properties

- [active](RuleForAccount.md#active)
- [category](RuleForAccount.md#category)
- [created\_at](RuleForAccount.md#created_at)
- [deleted\_at](RuleForAccount.md#deleted_at)
- [description](RuleForAccount.md#description)
- [generic](RuleForAccount.md#generic)
- [hosts\_acked\_count](RuleForAccount.md#hosts_acked_count)
- [impact](RuleForAccount.md#impact)
- [impacted\_systems\_count](RuleForAccount.md#impacted_systems_count)
- [likelihood](RuleForAccount.md#likelihood)
- [more\_info](RuleForAccount.md#more_info)
- [node\_id](RuleForAccount.md#node_id)
- [pathway](RuleForAccount.md#pathway)
- [playbook\_count](RuleForAccount.md#playbook_count)
- [publish\_date](RuleForAccount.md#publish_date)
- [rating](RuleForAccount.md#rating)
- [reason](RuleForAccount.md#reason)
- [reboot\_required](RuleForAccount.md#reboot_required)
- [reports\_shown](RuleForAccount.md#reports_shown)
- [resolution\_set](RuleForAccount.md#resolution_set)
- [rule\_id](RuleForAccount.md#rule_id)
- [rule\_status](RuleForAccount.md#rule_status)
- [summary](RuleForAccount.md#summary)
- [tags](RuleForAccount.md#tags)
- [total\_risk](RuleForAccount.md#total_risk)
- [updated\_at](RuleForAccount.md#updated_at)

## Properties

### active

• `Optional` **active**: `boolean`

**`Memberof`**

RuleForAccount

#### Defined in

[api.ts:1582](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/insights/api.ts#L1582)

___

### category

• **category**: [`RuleCategory`](RuleCategory.md)

**`Memberof`**

RuleForAccount

#### Defined in

[api.ts:1588](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/insights/api.ts#L1588)

___

### created\_at

• **created\_at**: `string`

**`Memberof`**

RuleForAccount

#### Defined in

[api.ts:1558](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/insights/api.ts#L1558)

___

### deleted\_at

• `Optional` **deleted\_at**: `string`

**`Memberof`**

RuleForAccount

#### Defined in

[api.ts:1570](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/insights/api.ts#L1570)

___

### description

• **description**: `string`

**`Memberof`**

RuleForAccount

#### Defined in

[api.ts:1576](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/insights/api.ts#L1576)

___

### generic

• **generic**: `string`

**`Memberof`**

RuleForAccount

#### Defined in

[api.ts:1642](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/insights/api.ts#L1642)

___

### hosts\_acked\_count

• **hosts\_acked\_count**: `number`

**`Memberof`**

RuleForAccount

#### Defined in

[api.ts:1690](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/insights/api.ts#L1690)

___

### impact

• **impact**: [`RuleImpact`](RuleImpact.md)

**`Memberof`**

RuleForAccount

#### Defined in

[api.ts:1594](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/insights/api.ts#L1594)

___

### impacted\_systems\_count

• **impacted\_systems\_count**: `number`

**`Memberof`**

RuleForAccount

#### Defined in

[api.ts:1660](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/insights/api.ts#L1660)

___

### likelihood

• `Optional` **likelihood**: `number`

**`Memberof`**

RuleForAccount

#### Defined in

[api.ts:1600](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/insights/api.ts#L1600)

___

### more\_info

• `Optional` **more\_info**: `string`

**`Memberof`**

RuleForAccount

#### Defined in

[api.ts:1654](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/insights/api.ts#L1654)

___

### node\_id

• `Optional` **node\_id**: `string`

KCS solution number

**`Memberof`**

RuleForAccount

#### Defined in

[api.ts:1606](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/insights/api.ts#L1606)

___

### pathway

• `Optional` **pathway**: [`RulePathway`](RulePathway.md)

**`Memberof`**

RuleForAccount

#### Defined in

[api.ts:1702](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/insights/api.ts#L1702)

___

### playbook\_count

• **playbook\_count**: `number`

**`Memberof`**

RuleForAccount

#### Defined in

[api.ts:1618](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/insights/api.ts#L1618)

___

### publish\_date

• `Optional` **publish\_date**: ``null`` \| `string`

**`Memberof`**

RuleForAccount

#### Defined in

[api.ts:1630](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/insights/api.ts#L1630)

___

### rating

• **rating**: `number`

**`Memberof`**

RuleForAccount

#### Defined in

[api.ts:1696](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/insights/api.ts#L1696)

___

### reason

• **reason**: `string`

**`Memberof`**

RuleForAccount

#### Defined in

[api.ts:1648](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/insights/api.ts#L1648)

___

### reboot\_required

• `Optional` **reboot\_required**: `boolean`

**`Memberof`**

RuleForAccount

#### Defined in

[api.ts:1624](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/insights/api.ts#L1624)

___

### reports\_shown

• **reports\_shown**: `boolean`

**`Memberof`**

RuleForAccount

#### Defined in

[api.ts:1666](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/insights/api.ts#L1666)

___

### resolution\_set

• **resolution\_set**: [`Resolution`](Resolution.md)[]

**`Memberof`**

RuleForAccount

#### Defined in

[api.ts:1678](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/insights/api.ts#L1678)

___

### rule\_id

• **rule\_id**: `string`

Rule ID from Insights

**`Memberof`**

RuleForAccount

#### Defined in

[api.ts:1552](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/insights/api.ts#L1552)

___

### rule\_status

• **rule\_status**: `string`

**`Memberof`**

RuleForAccount

#### Defined in

[api.ts:1672](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/insights/api.ts#L1672)

___

### summary

• **summary**: `string`

**`Memberof`**

RuleForAccount

#### Defined in

[api.ts:1636](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/insights/api.ts#L1636)

___

### tags

• **tags**: `string`

**`Memberof`**

RuleForAccount

#### Defined in

[api.ts:1612](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/insights/api.ts#L1612)

___

### total\_risk

• `Optional` **total\_risk**: `number`

**`Memberof`**

RuleForAccount

#### Defined in

[api.ts:1684](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/insights/api.ts#L1684)

___

### updated\_at

• **updated\_at**: `string`

**`Memberof`**

RuleForAccount

#### Defined in

[api.ts:1564](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/insights/api.ts#L1564)
