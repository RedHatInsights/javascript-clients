[@redhat-cloud-services/host-inventory-client](../README.md) / [Exports](../modules.md) / AssignmentRuleQueryOutput

# Interface: AssignmentRuleQueryOutput

A paginated assignment-rule search query result with assignment-rule entries and their Inventory metadata.

**`Export`**

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

[api.ts:206](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/host-inventory/api.ts#L206)

___

### page

• **page**: `number`

The page number

**`Memberof`**

AssignmentRuleQueryOutput

#### Defined in

[api.ts:212](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/host-inventory/api.ts#L212)

___

### per\_page

• **per\_page**: `number`

The number of items to return per page

**`Memberof`**

AssignmentRuleQueryOutput

#### Defined in

[api.ts:218](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/host-inventory/api.ts#L218)

___

### results

• **results**: [`AssignmentRuleOut`](AssignmentRuleOut.md)[]

Actual assignment-rule search query result entries.

**`Memberof`**

AssignmentRuleQueryOutput

#### Defined in

[api.ts:230](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/host-inventory/api.ts#L230)

___

### total

• **total**: `number`

Total number of items

**`Memberof`**

AssignmentRuleQueryOutput

#### Defined in

[api.ts:224](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/host-inventory/api.ts#L224)
