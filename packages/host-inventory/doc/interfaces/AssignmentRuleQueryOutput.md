[@redhat-cloud-services/host-inventory-client](../README.md) / [Exports](../modules.md) / AssignmentRuleQueryOutput

# Interface: AssignmentRuleQueryOutput

A paginated assignment-rule search query result with assignment-rule entries and their Inventory metadata.

**`Export`**

**`Interface`**

AssignmentRuleQueryOutput

## Table of contents

### Properties

- [count](AssignmentRuleQueryOutput.md#count)
- [page](AssignmentRuleQueryOutput.md#page)
- [per\_page](AssignmentRuleQueryOutput.md#per_page)
- [results](AssignmentRuleQueryOutput.md#results)
- [total](AssignmentRuleQueryOutput.md#total)

## Properties

### count

• **count**: `number`

The number of items on the current page

**`Memberof`**

AssignmentRuleQueryOutput

#### Defined in

[api.ts:329](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L329)

___

### page

• **page**: `number`

The page number

**`Memberof`**

AssignmentRuleQueryOutput

#### Defined in

[api.ts:335](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L335)

___

### per\_page

• **per\_page**: `number`

The number of items to return per page

**`Memberof`**

AssignmentRuleQueryOutput

#### Defined in

[api.ts:341](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L341)

___

### results

• **results**: [`AssignmentRuleOut`](AssignmentRuleOut.md)[]

Actual assignment-rule search query result entries.

**`Memberof`**

AssignmentRuleQueryOutput

#### Defined in

[api.ts:353](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L353)

___

### total

• **total**: `number`

Total number of items

**`Memberof`**

AssignmentRuleQueryOutput

#### Defined in

[api.ts:347](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L347)
