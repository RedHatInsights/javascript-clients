[@redhat-cloud-services/insights-client](../README.md) / [Exports](../modules.md) / Rule

# Interface: Rule

The standard rule information.  Used for models and relations that don\'t know the account and therefore can\'t know the acks or impacted systems.

**`Export`**

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

[api.ts:1285](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/insights/api.ts#L1285)

___

### category

• **category**: [`RuleCategory`](RuleCategory.md)

**`Memberof`**

Rule

#### Defined in

[api.ts:1291](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/insights/api.ts#L1291)

___

### created\_at

• **created\_at**: `string`

**`Memberof`**

Rule

#### Defined in

[api.ts:1261](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/insights/api.ts#L1261)

___

### deleted\_at

• `Optional` **deleted\_at**: `string`

**`Memberof`**

Rule

#### Defined in

[api.ts:1273](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/insights/api.ts#L1273)

___

### description

• **description**: `string`

**`Memberof`**

Rule

#### Defined in

[api.ts:1279](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/insights/api.ts#L1279)

___

### generic

• **generic**: `string`

**`Memberof`**

Rule

#### Defined in

[api.ts:1339](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/insights/api.ts#L1339)

___

### impact

• **impact**: [`RuleImpact`](RuleImpact.md)

**`Memberof`**

Rule

#### Defined in

[api.ts:1297](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/insights/api.ts#L1297)

___

### likelihood

• `Optional` **likelihood**: `number`

**`Memberof`**

Rule

#### Defined in

[api.ts:1303](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/insights/api.ts#L1303)

___

### more\_info

• `Optional` **more\_info**: `string`

**`Memberof`**

Rule

#### Defined in

[api.ts:1351](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/insights/api.ts#L1351)

___

### node\_id

• `Optional` **node\_id**: `string`

KCS solution number

**`Memberof`**

Rule

#### Defined in

[api.ts:1309](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/insights/api.ts#L1309)

___

### publish\_date

• `Optional` **publish\_date**: ``null`` \| `string`

**`Memberof`**

Rule

#### Defined in

[api.ts:1327](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/insights/api.ts#L1327)

___

### reason

• **reason**: `string`

**`Memberof`**

Rule

#### Defined in

[api.ts:1345](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/insights/api.ts#L1345)

___

### reboot\_required

• `Optional` **reboot\_required**: `boolean`

**`Memberof`**

Rule

#### Defined in

[api.ts:1321](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/insights/api.ts#L1321)

___

### resolution\_set

• **resolution\_set**: [`Resolution`](Resolution.md)[]

**`Memberof`**

Rule

#### Defined in

[api.ts:1357](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/insights/api.ts#L1357)

___

### rule\_id

• **rule\_id**: `string`

Rule ID from Insights

**`Memberof`**

Rule

#### Defined in

[api.ts:1255](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/insights/api.ts#L1255)

___

### summary

• **summary**: `string`

**`Memberof`**

Rule

#### Defined in

[api.ts:1333](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/insights/api.ts#L1333)

___

### tags

• **tags**: `string`

**`Memberof`**

Rule

#### Defined in

[api.ts:1315](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/insights/api.ts#L1315)

___

### total\_risk

• `Optional` **total\_risk**: `number`

**`Memberof`**

Rule

#### Defined in

[api.ts:1363](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/insights/api.ts#L1363)

___

### updated\_at

• **updated\_at**: `string`

**`Memberof`**

Rule

#### Defined in

[api.ts:1267](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/insights/api.ts#L1267)
