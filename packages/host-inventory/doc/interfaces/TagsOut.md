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

[api.ts:2138](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L2138)

___

### page

• **page**: `number`

The page number

**`Memberof`**

TagsOut

#### Defined in

[api.ts:2144](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L2144)

___

### per\_page

• **per\_page**: `number`

The number of items to return per page

**`Memberof`**

TagsOut

#### Defined in

[api.ts:2150](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L2150)

___

### results

• `Optional` **results**: `Object`

The list of tags on the systems

**`Memberof`**

TagsOut

#### Index signature

▪ [key: `string`]: [`StructuredTag`](StructuredTag.md)[]

#### Defined in

[api.ts:2162](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L2162)

___

### total

• **total**: `number`

Total number of items

**`Memberof`**

TagsOut

#### Defined in

[api.ts:2156](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L2156)
