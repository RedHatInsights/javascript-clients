[@redhat-cloud-services/host-inventory-client](../README.md) / [Exports](../modules.md) / TagsOut

# Interface: TagsOut

**`Export`**

**`Interface`**

TagsOut

## Table of contents

### Properties

- [count](TagsOut.md#count)
- [page](TagsOut.md#page)
- [per\_page](TagsOut.md#per_page)
- [results](TagsOut.md#results)
- [total](TagsOut.md#total)

## Properties

### count

• **count**: `number`

The number of items on the current page

**`Memberof`**

TagsOut

#### Defined in

[api.ts:2554](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L2554)

___

### page

• **page**: `number`

The page number

**`Memberof`**

TagsOut

#### Defined in

[api.ts:2560](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L2560)

___

### per\_page

• **per\_page**: `number`

The number of items to return per page

**`Memberof`**

TagsOut

#### Defined in

[api.ts:2566](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L2566)

___

### results

• `Optional` **results**: `Object`

The list of tags on the systems

**`Memberof`**

TagsOut

#### Index signature

▪ [key: `string`]: [`StructuredTag`](StructuredTag.md)[]

#### Defined in

[api.ts:2578](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L2578)

___

### total

• **total**: `number`

Total number of items

**`Memberof`**

TagsOut

#### Defined in

[api.ts:2572](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L2572)
