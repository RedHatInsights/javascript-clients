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

[api.ts:293](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L293)

___

### page

• **page**: `number`

The page number

**`Memberof`**

AssignmentRuleQueryOutput

#### Defined in

[api.ts:299](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L299)

___

### per\_page

• **per\_page**: `number`

The number of items to return per page

**`Memberof`**

AssignmentRuleQueryOutput

#### Defined in

[api.ts:305](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L305)

___

### results

• **results**: [`AssignmentRuleOut`](AssignmentRuleOut.md)[]

Actual assignment-rule search query result entries.

**`Memberof`**

AssignmentRuleQueryOutput

#### Defined in

[api.ts:317](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L317)

___

### total

• **total**: `number`

Total number of items

**`Memberof`**

AssignmentRuleQueryOutput

#### Defined in

[api.ts:311](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L311)
