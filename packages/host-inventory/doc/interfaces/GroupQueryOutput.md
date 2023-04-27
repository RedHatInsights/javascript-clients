[@redhat-cloud-services/host-inventory-client](../README.md) / [Exports](../modules.md) / GroupQueryOutput

# Interface: GroupQueryOutput

A paginated group search query result with group entries and their Inventory metadata.

**`Export`**

**`Interface`**

GroupQueryOutput

## Table of contents

### Properties

- [count](GroupQueryOutput.md#count)
- [page](GroupQueryOutput.md#page)
- [per\_page](GroupQueryOutput.md#per_page)
- [results](GroupQueryOutput.md#results)
- [total](GroupQueryOutput.md#total)

## Properties

### count

• **count**: `number`

The number of items on the current page

**`Memberof`**

GroupQueryOutput

#### Defined in

[api.ts:685](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L685)

___

### page

• **page**: `number`

The page number

**`Memberof`**

GroupQueryOutput

#### Defined in

[api.ts:691](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L691)

___

### per\_page

• **per\_page**: `number`

The number of items to return per page

**`Memberof`**

GroupQueryOutput

#### Defined in

[api.ts:697](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L697)

___

### results

• **results**: [`GroupOut`](GroupOut.md)[]

Actual group search query result entries.

**`Memberof`**

GroupQueryOutput

#### Defined in

[api.ts:709](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L709)

___

### total

• **total**: `number`

Total number of items

**`Memberof`**

GroupQueryOutput

#### Defined in

[api.ts:703](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L703)
