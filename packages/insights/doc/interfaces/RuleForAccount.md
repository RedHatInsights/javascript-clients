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

[api.ts:1607](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/insights/api.ts#L1607)

___

### category

• **category**: [`RuleCategory`](RuleCategory.md)

**`Memberof`**

RuleForAccount

#### Defined in

[api.ts:1613](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/insights/api.ts#L1613)

___

### created\_at

• **created\_at**: `string`

**`Memberof`**

RuleForAccount

#### Defined in

[api.ts:1583](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/insights/api.ts#L1583)

___

### deleted\_at

• `Optional` **deleted\_at**: `string`

**`Memberof`**

RuleForAccount

#### Defined in

[api.ts:1595](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/insights/api.ts#L1595)

___

### description

• **description**: `string`

**`Memberof`**

RuleForAccount

#### Defined in

[api.ts:1601](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/insights/api.ts#L1601)

___

### generic

• **generic**: `string`

**`Memberof`**

RuleForAccount

#### Defined in

[api.ts:1667](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/insights/api.ts#L1667)

___

### hosts\_acked\_count

• **hosts\_acked\_count**: `number`

**`Memberof`**

RuleForAccount

#### Defined in

[api.ts:1715](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/insights/api.ts#L1715)

___

### impact

• **impact**: [`RuleImpact`](RuleImpact.md)

**`Memberof`**

RuleForAccount

#### Defined in

[api.ts:1619](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/insights/api.ts#L1619)

___

### impacted\_systems\_count

• **impacted\_systems\_count**: `number`

**`Memberof`**

RuleForAccount

#### Defined in

[api.ts:1685](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/insights/api.ts#L1685)

___

### likelihood

• `Optional` **likelihood**: `number`

**`Memberof`**

RuleForAccount

#### Defined in

[api.ts:1625](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/insights/api.ts#L1625)

___

### more\_info

• `Optional` **more\_info**: `string`

**`Memberof`**

RuleForAccount

#### Defined in

[api.ts:1679](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/insights/api.ts#L1679)

___

### node\_id

• `Optional` **node\_id**: `string`

KCS solution number

**`Memberof`**

RuleForAccount

#### Defined in

[api.ts:1631](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/insights/api.ts#L1631)

___

### pathway

• `Optional` **pathway**: [`RulePathway`](RulePathway.md)

**`Memberof`**

RuleForAccount

#### Defined in

[api.ts:1727](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/insights/api.ts#L1727)

___

### playbook\_count

• **playbook\_count**: `number`

**`Memberof`**

RuleForAccount

#### Defined in

[api.ts:1643](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/insights/api.ts#L1643)

___

### publish\_date

• `Optional` **publish\_date**: ``null`` \| `string`

**`Memberof`**

RuleForAccount

#### Defined in

[api.ts:1655](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/insights/api.ts#L1655)

___

### rating

• **rating**: `number`

**`Memberof`**

RuleForAccount

#### Defined in

[api.ts:1721](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/insights/api.ts#L1721)

___

### reason

• **reason**: `string`

**`Memberof`**

RuleForAccount

#### Defined in

[api.ts:1673](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/insights/api.ts#L1673)

___

### reboot\_required

• `Optional` **reboot\_required**: `boolean`

**`Memberof`**

RuleForAccount

#### Defined in

[api.ts:1649](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/insights/api.ts#L1649)

___

### reports\_shown

• **reports\_shown**: `boolean`

**`Memberof`**

RuleForAccount

#### Defined in

[api.ts:1691](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/insights/api.ts#L1691)

___

### resolution\_set

• **resolution\_set**: [`Resolution`](Resolution.md)[]

**`Memberof`**

RuleForAccount

#### Defined in

[api.ts:1703](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/insights/api.ts#L1703)

___

### rule\_id

• **rule\_id**: `string`

Rule ID from Insights

**`Memberof`**

RuleForAccount

#### Defined in

[api.ts:1577](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/insights/api.ts#L1577)

___

### rule\_status

• **rule\_status**: `string`

**`Memberof`**

RuleForAccount

#### Defined in

[api.ts:1697](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/insights/api.ts#L1697)

___

### summary

• **summary**: `string`

**`Memberof`**

RuleForAccount

#### Defined in

[api.ts:1661](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/insights/api.ts#L1661)

___

### tags

• **tags**: `string`

**`Memberof`**

RuleForAccount

#### Defined in

[api.ts:1637](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/insights/api.ts#L1637)

___

### total\_risk

• `Optional` **total\_risk**: `number`

**`Memberof`**

RuleForAccount

#### Defined in

[api.ts:1709](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/insights/api.ts#L1709)

___

### updated\_at

• **updated\_at**: `string`

**`Memberof`**

RuleForAccount

#### Defined in

[api.ts:1589](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/insights/api.ts#L1589)
