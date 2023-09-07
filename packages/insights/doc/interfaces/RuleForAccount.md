[@redhat-cloud-services/insights-client](../README.md) / [Exports](../modules.md) / RuleForAccount

# Interface: RuleForAccount

Rule information when we know the account, and therefore can calculate the number of impacted systems and the reports_shown/rule_status flags. We have to declare those explicitly here because they\'re not part of the model.

**`Export`**

**`Interface`**

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

[api.ts:1657](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L1657)

___

### category

• **category**: [`RuleCategory`](RuleCategory.md)

**`Memberof`**

RuleForAccount

#### Defined in

[api.ts:1663](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L1663)

___

### created\_at

• **created\_at**: `string`

**`Memberof`**

RuleForAccount

#### Defined in

[api.ts:1633](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L1633)

___

### deleted\_at

• `Optional` **deleted\_at**: `string`

**`Memberof`**

RuleForAccount

#### Defined in

[api.ts:1645](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L1645)

___

### description

• **description**: `string`

**`Memberof`**

RuleForAccount

#### Defined in

[api.ts:1651](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L1651)

___

### generic

• **generic**: `string`

**`Memberof`**

RuleForAccount

#### Defined in

[api.ts:1717](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L1717)

___

### hosts\_acked\_count

• **hosts\_acked\_count**: `number`

**`Memberof`**

RuleForAccount

#### Defined in

[api.ts:1765](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L1765)

___

### impact

• **impact**: [`RuleImpact`](RuleImpact.md)

**`Memberof`**

RuleForAccount

#### Defined in

[api.ts:1669](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L1669)

___

### impacted\_systems\_count

• **impacted\_systems\_count**: `number`

**`Memberof`**

RuleForAccount

#### Defined in

[api.ts:1735](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L1735)

___

### likelihood

• `Optional` **likelihood**: `number`

**`Memberof`**

RuleForAccount

#### Defined in

[api.ts:1675](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L1675)

___

### more\_info

• `Optional` **more\_info**: `string`

**`Memberof`**

RuleForAccount

#### Defined in

[api.ts:1729](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L1729)

___

### node\_id

• `Optional` **node\_id**: `string`

KCS solution number

**`Memberof`**

RuleForAccount

#### Defined in

[api.ts:1681](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L1681)

___

### pathway

• `Optional` **pathway**: [`RulePathway`](RulePathway.md)

**`Memberof`**

RuleForAccount

#### Defined in

[api.ts:1777](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L1777)

___

### playbook\_count

• **playbook\_count**: `number`

**`Memberof`**

RuleForAccount

#### Defined in

[api.ts:1693](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L1693)

___

### publish\_date

• `Optional` **publish\_date**: `string`

**`Memberof`**

RuleForAccount

#### Defined in

[api.ts:1705](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L1705)

___

### rating

• **rating**: `number`

**`Memberof`**

RuleForAccount

#### Defined in

[api.ts:1771](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L1771)

___

### reason

• **reason**: `string`

**`Memberof`**

RuleForAccount

#### Defined in

[api.ts:1723](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L1723)

___

### reboot\_required

• `Optional` **reboot\_required**: `boolean`

**`Memberof`**

RuleForAccount

#### Defined in

[api.ts:1699](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L1699)

___

### reports\_shown

• **reports\_shown**: `boolean`

**`Memberof`**

RuleForAccount

#### Defined in

[api.ts:1741](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L1741)

___

### resolution\_set

• **resolution\_set**: [`Resolution`](Resolution.md)[]

**`Memberof`**

RuleForAccount

#### Defined in

[api.ts:1753](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L1753)

___

### rule\_id

• **rule\_id**: `string`

Rule ID from Insights

**`Memberof`**

RuleForAccount

#### Defined in

[api.ts:1627](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L1627)

___

### rule\_status

• **rule\_status**: `string`

**`Memberof`**

RuleForAccount

#### Defined in

[api.ts:1747](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L1747)

___

### summary

• **summary**: `string`

**`Memberof`**

RuleForAccount

#### Defined in

[api.ts:1711](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L1711)

___

### tags

• **tags**: `string`

**`Memberof`**

RuleForAccount

#### Defined in

[api.ts:1687](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L1687)

___

### total\_risk

• `Optional` **total\_risk**: `number`

**`Memberof`**

RuleForAccount

#### Defined in

[api.ts:1759](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L1759)

___

### updated\_at

• **updated\_at**: `string`

**`Memberof`**

RuleForAccount

#### Defined in

[api.ts:1639](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L1639)
