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

[api.ts:1310](https://github.com/mkholjuraev/javascript-clients/blob/master/packages/insights/api.ts#L1310)

___

### category

• **category**: [`RuleCategory`](RuleCategory.md)

**`Memberof`**

Rule

#### Defined in

[api.ts:1316](https://github.com/mkholjuraev/javascript-clients/blob/master/packages/insights/api.ts#L1316)

___

### created\_at

• **created\_at**: `string`

**`Memberof`**

Rule

#### Defined in

[api.ts:1286](https://github.com/mkholjuraev/javascript-clients/blob/master/packages/insights/api.ts#L1286)

___

### deleted\_at

• `Optional` **deleted\_at**: `string`

**`Memberof`**

Rule

#### Defined in

[api.ts:1298](https://github.com/mkholjuraev/javascript-clients/blob/master/packages/insights/api.ts#L1298)

___

### description

• **description**: `string`

**`Memberof`**

Rule

#### Defined in

[api.ts:1304](https://github.com/mkholjuraev/javascript-clients/blob/master/packages/insights/api.ts#L1304)

___

### generic

• **generic**: `string`

**`Memberof`**

Rule

#### Defined in

[api.ts:1364](https://github.com/mkholjuraev/javascript-clients/blob/master/packages/insights/api.ts#L1364)

___

### impact

• **impact**: [`RuleImpact`](RuleImpact.md)

**`Memberof`**

Rule

#### Defined in

[api.ts:1322](https://github.com/mkholjuraev/javascript-clients/blob/master/packages/insights/api.ts#L1322)

___

### likelihood

• `Optional` **likelihood**: `number`

**`Memberof`**

Rule

#### Defined in

[api.ts:1328](https://github.com/mkholjuraev/javascript-clients/blob/master/packages/insights/api.ts#L1328)

___

### more\_info

• `Optional` **more\_info**: `string`

**`Memberof`**

Rule

#### Defined in

[api.ts:1376](https://github.com/mkholjuraev/javascript-clients/blob/master/packages/insights/api.ts#L1376)

___

### node\_id

• `Optional` **node\_id**: `string`

KCS solution number

**`Memberof`**

Rule

#### Defined in

[api.ts:1334](https://github.com/mkholjuraev/javascript-clients/blob/master/packages/insights/api.ts#L1334)

___

### publish\_date

• `Optional` **publish\_date**: `string`

**`Memberof`**

Rule

#### Defined in

[api.ts:1352](https://github.com/mkholjuraev/javascript-clients/blob/master/packages/insights/api.ts#L1352)

___

### reason

• **reason**: `string`

**`Memberof`**

Rule

#### Defined in

[api.ts:1370](https://github.com/mkholjuraev/javascript-clients/blob/master/packages/insights/api.ts#L1370)

___

### reboot\_required

• `Optional` **reboot\_required**: `boolean`

**`Memberof`**

Rule

#### Defined in

[api.ts:1346](https://github.com/mkholjuraev/javascript-clients/blob/master/packages/insights/api.ts#L1346)

___

### resolution\_set

• **resolution\_set**: [`Resolution`](Resolution.md)[]

**`Memberof`**

Rule

#### Defined in

[api.ts:1382](https://github.com/mkholjuraev/javascript-clients/blob/master/packages/insights/api.ts#L1382)

___

### rule\_id

• **rule\_id**: `string`

Rule ID from Insights

**`Memberof`**

Rule

#### Defined in

[api.ts:1280](https://github.com/mkholjuraev/javascript-clients/blob/master/packages/insights/api.ts#L1280)

___

### summary

• **summary**: `string`

**`Memberof`**

Rule

#### Defined in

[api.ts:1358](https://github.com/mkholjuraev/javascript-clients/blob/master/packages/insights/api.ts#L1358)

___

### tags

• **tags**: `string`

**`Memberof`**

Rule

#### Defined in

[api.ts:1340](https://github.com/mkholjuraev/javascript-clients/blob/master/packages/insights/api.ts#L1340)

___

### total\_risk

• `Optional` **total\_risk**: `number`

**`Memberof`**

Rule

#### Defined in

[api.ts:1388](https://github.com/mkholjuraev/javascript-clients/blob/master/packages/insights/api.ts#L1388)

___

### updated\_at

• **updated\_at**: `string`

**`Memberof`**

Rule

#### Defined in

[api.ts:1292](https://github.com/mkholjuraev/javascript-clients/blob/master/packages/insights/api.ts#L1292)
