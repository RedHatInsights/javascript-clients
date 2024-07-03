[@redhat-cloud-services/insights-client](../README.md) / [Exports](../modules.md) / RuleExport

# Interface: RuleExport

Rule information for export.

**`Export`**

RuleExport

## Table of contents

### Properties

- [active](RuleExport.md#active)
- [category](RuleExport.md#category)
- [created\_at](RuleExport.md#created_at)
- [deleted\_at](RuleExport.md#deleted_at)
- [description](RuleExport.md#description)
- [generic](RuleExport.md#generic)
- [hosts\_acked\_count](RuleExport.md#hosts_acked_count)
- [impact](RuleExport.md#impact)
- [impacted\_systems\_count](RuleExport.md#impacted_systems_count)
- [likelihood](RuleExport.md#likelihood)
- [more\_info](RuleExport.md#more_info)
- [node\_id](RuleExport.md#node_id)
- [playbook\_count](RuleExport.md#playbook_count)
- [publish\_date](RuleExport.md#publish_date)
- [rating](RuleExport.md#rating)
- [reason](RuleExport.md#reason)
- [reboot\_required](RuleExport.md#reboot_required)
- [reports\_shown](RuleExport.md#reports_shown)
- [resolution\_set](RuleExport.md#resolution_set)
- [rule\_id](RuleExport.md#rule_id)
- [rule\_status](RuleExport.md#rule_status)
- [summary](RuleExport.md#summary)
- [tags](RuleExport.md#tags)
- [total\_risk](RuleExport.md#total_risk)
- [updated\_at](RuleExport.md#updated_at)

## Properties

### active

• `Optional` **active**: `boolean`

**`Memberof`**

RuleExport

#### Defined in

[api.ts:1425](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/insights/api.ts#L1425)

___

### category

• **category**: `string`

**`Memberof`**

RuleExport

#### Defined in

[api.ts:1431](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/insights/api.ts#L1431)

___

### created\_at

• **created\_at**: `string`

**`Memberof`**

RuleExport

#### Defined in

[api.ts:1401](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/insights/api.ts#L1401)

___

### deleted\_at

• **deleted\_at**: ``null`` \| `string`

**`Memberof`**

RuleExport

#### Defined in

[api.ts:1413](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/insights/api.ts#L1413)

___

### description

• **description**: `string`

**`Memberof`**

RuleExport

#### Defined in

[api.ts:1419](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/insights/api.ts#L1419)

___

### generic

• **generic**: `string`

**`Memberof`**

RuleExport

#### Defined in

[api.ts:1485](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/insights/api.ts#L1485)

___

### hosts\_acked\_count

• **hosts\_acked\_count**: `number`

**`Memberof`**

RuleExport

#### Defined in

[api.ts:1527](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/insights/api.ts#L1527)

___

### impact

• **impact**: `string`

**`Memberof`**

RuleExport

#### Defined in

[api.ts:1437](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/insights/api.ts#L1437)

___

### impacted\_systems\_count

• **impacted\_systems\_count**: `number`

**`Memberof`**

RuleExport

#### Defined in

[api.ts:1503](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/insights/api.ts#L1503)

___

### likelihood

• `Optional` **likelihood**: `number`

**`Memberof`**

RuleExport

#### Defined in

[api.ts:1443](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/insights/api.ts#L1443)

___

### more\_info

• `Optional` **more\_info**: `string`

**`Memberof`**

RuleExport

#### Defined in

[api.ts:1497](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/insights/api.ts#L1497)

___

### node\_id

• `Optional` **node\_id**: `string`

KCS solution number

**`Memberof`**

RuleExport

#### Defined in

[api.ts:1449](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/insights/api.ts#L1449)

___

### playbook\_count

• **playbook\_count**: `number`

**`Memberof`**

RuleExport

#### Defined in

[api.ts:1461](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/insights/api.ts#L1461)

___

### publish\_date

• `Optional` **publish\_date**: ``null`` \| `string`

**`Memberof`**

RuleExport

#### Defined in

[api.ts:1473](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/insights/api.ts#L1473)

___

### rating

• **rating**: `number`

**`Memberof`**

RuleExport

#### Defined in

[api.ts:1533](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/insights/api.ts#L1533)

___

### reason

• **reason**: `string`

**`Memberof`**

RuleExport

#### Defined in

[api.ts:1491](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/insights/api.ts#L1491)

___

### reboot\_required

• `Optional` **reboot\_required**: `boolean`

**`Memberof`**

RuleExport

#### Defined in

[api.ts:1467](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/insights/api.ts#L1467)

___

### reports\_shown

• **reports\_shown**: `boolean`

**`Memberof`**

RuleExport

#### Defined in

[api.ts:1539](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/insights/api.ts#L1539)

___

### resolution\_set

• **resolution\_set**: [`Resolution`](Resolution.md)[]

**`Memberof`**

RuleExport

#### Defined in

[api.ts:1515](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/insights/api.ts#L1515)

___

### rule\_id

• **rule\_id**: `string`

Rule ID from Insights

**`Memberof`**

RuleExport

#### Defined in

[api.ts:1395](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/insights/api.ts#L1395)

___

### rule\_status

• **rule\_status**: `string`

**`Memberof`**

RuleExport

#### Defined in

[api.ts:1509](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/insights/api.ts#L1509)

___

### summary

• **summary**: `string`

**`Memberof`**

RuleExport

#### Defined in

[api.ts:1479](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/insights/api.ts#L1479)

___

### tags

• **tags**: `string`

**`Memberof`**

RuleExport

#### Defined in

[api.ts:1455](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/insights/api.ts#L1455)

___

### total\_risk

• `Optional` **total\_risk**: `number`

**`Memberof`**

RuleExport

#### Defined in

[api.ts:1521](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/insights/api.ts#L1521)

___

### updated\_at

• **updated\_at**: `string`

**`Memberof`**

RuleExport

#### Defined in

[api.ts:1407](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/insights/api.ts#L1407)
