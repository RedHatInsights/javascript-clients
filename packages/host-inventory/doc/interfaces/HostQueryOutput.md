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

[api.ts:762](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L762)

___

### page

• **page**: `number`

The page number

**`Memberof`**

HostQueryOutput

#### Defined in

[api.ts:768](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L768)

___

### per\_page

• **per\_page**: `number`

The number of items to return per page

**`Memberof`**

HostQueryOutput

#### Defined in

[api.ts:774](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L774)

___

### results

• **results**: [`HostOut`](HostOut.md)[]

Actual host search query result entries.

**`Memberof`**

HostQueryOutput

#### Defined in

[api.ts:786](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L786)

___

### total

• **total**: `number`

Total number of items

**`Memberof`**

HostQueryOutput

#### Defined in

[api.ts:780](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L780)
