[@redhat-cloud-services/host-inventory-client](../README.md) / [Exports](../modules.md) / HostQueryOutput

# Interface: HostQueryOutput

A paginated host search query result with host entries and their Inventory metadata.

**`Export`**

**`Interface`**

HostQueryOutput

## Table of contents

### Properties

- [count](HostQueryOutput.md#count)
- [page](HostQueryOutput.md#page)
- [per\_page](HostQueryOutput.md#per_page)
- [results](HostQueryOutput.md#results)
- [total](HostQueryOutput.md#total)

## Properties

### count

• **count**: `number`

The number of items on the current page

**`Memberof`**

HostQueryOutput

#### Defined in

[api.ts:887](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L887)

___

### page

• **page**: `number`

The page number

**`Memberof`**

HostQueryOutput

#### Defined in

[api.ts:893](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L893)

___

### per\_page

• **per\_page**: `number`

The number of items to return per page

**`Memberof`**

HostQueryOutput

#### Defined in

[api.ts:899](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L899)

___

### results

• **results**: [`HostOut`](HostOut.md)[]

Actual host search query result entries.

**`Memberof`**

HostQueryOutput

#### Defined in

[api.ts:911](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L911)

___

### total

• **total**: `number`

Total number of items

**`Memberof`**

HostQueryOutput

#### Defined in

[api.ts:905](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L905)
