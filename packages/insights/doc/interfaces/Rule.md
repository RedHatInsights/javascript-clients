[@redhat-cloud-services/insights-client](../README.md) / [Exports](../modules.md) / Rule

# Interface: Rule

The standard rule information.  Used for models and relations that don\'t know the account and therefore can\'t know the acks or impacted systems.

**`Export`**

**`Interface`**

Rule

## Table of contents

### Properties

- [active](Rule.md#active)
- [category](Rule.md#category)
- [created\_at](Rule.md#created_at)
- [deleted\_at](Rule.md#deleted_at)
- [description](Rule.md#description)
- [generic](Rule.md#generic)
- [impact](Rule.md#impact)
- [likelihood](Rule.md#likelihood)
- [more\_info](Rule.md#more_info)
- [node\_id](Rule.md#node_id)
- [publish\_date](Rule.md#publish_date)
- [reason](Rule.md#reason)
- [reboot\_required](Rule.md#reboot_required)
- [resolution\_set](Rule.md#resolution_set)
- [rule\_id](Rule.md#rule_id)
- [summary](Rule.md#summary)
- [tags](Rule.md#tags)
- [total\_risk](Rule.md#total_risk)
- [updated\_at](Rule.md#updated_at)

## Properties

### active

• `Optional` **active**: `boolean`

**`Memberof`**

Rule

#### Defined in

[api.ts:1360](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L1360)

___

### category

• **category**: [`RuleCategory`](RuleCategory.md)

**`Memberof`**

Rule

#### Defined in

[api.ts:1366](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L1366)

___

### created\_at

• **created\_at**: `string`

**`Memberof`**

Rule

#### Defined in

[api.ts:1336](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L1336)

___

### deleted\_at

• `Optional` **deleted\_at**: `string`

**`Memberof`**

Rule

#### Defined in

[api.ts:1348](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L1348)

___

### description

• **description**: `string`

**`Memberof`**

Rule

#### Defined in

[api.ts:1354](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L1354)

___

### generic

• **generic**: `string`

**`Memberof`**

Rule

#### Defined in

[api.ts:1414](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L1414)

___

### impact

• **impact**: [`RuleImpact`](RuleImpact.md)

**`Memberof`**

Rule

#### Defined in

[api.ts:1372](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L1372)

___

### likelihood

• `Optional` **likelihood**: `number`

**`Memberof`**

Rule

#### Defined in

[api.ts:1378](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L1378)

___

### more\_info

• `Optional` **more\_info**: `string`

**`Memberof`**

Rule

#### Defined in

[api.ts:1426](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L1426)

___

### node\_id

• `Optional` **node\_id**: `string`

KCS solution number

**`Memberof`**

Rule

#### Defined in

[api.ts:1384](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L1384)

___

### publish\_date

• `Optional` **publish\_date**: `string`

**`Memberof`**

Rule

#### Defined in

[api.ts:1402](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L1402)

___

### reason

• **reason**: `string`

**`Memberof`**

Rule

#### Defined in

[api.ts:1420](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L1420)

___

### reboot\_required

• `Optional` **reboot\_required**: `boolean`

**`Memberof`**

Rule

#### Defined in

[api.ts:1396](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L1396)

___

### resolution\_set

• **resolution\_set**: [`Resolution`](Resolution.md)[]

**`Memberof`**

Rule

#### Defined in

[api.ts:1432](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L1432)

___

### rule\_id

• **rule\_id**: `string`

Rule ID from Insights

**`Memberof`**

Rule

#### Defined in

[api.ts:1330](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L1330)

___

### summary

• **summary**: `string`

**`Memberof`**

Rule

#### Defined in

[api.ts:1408](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L1408)

___

### tags

• **tags**: `string`

**`Memberof`**

Rule

#### Defined in

[api.ts:1390](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L1390)

___

### total\_risk

• `Optional` **total\_risk**: `number`

**`Memberof`**

Rule

#### Defined in

[api.ts:1438](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L1438)

___

### updated\_at

• **updated\_at**: `string`

**`Memberof`**

Rule

#### Defined in

[api.ts:1342](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L1342)
