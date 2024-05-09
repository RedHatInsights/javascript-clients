[@redhat-cloud-services/patch-client](../README.md) / [Exports](../modules.md) / ControllersListMeta

# Interface: ControllersListMeta

**`Export`**

ControllersListMeta

## Table of contents

### Properties

- [filter](ControllersListMeta.md#filter)
- [limit](ControllersListMeta.md#limit)
- [offset](ControllersListMeta.md#offset)
- [search](ControllersListMeta.md#search)
- [sort](ControllersListMeta.md#sort)
- [subtotals](ControllersListMeta.md#subtotals)
- [total\_items](ControllersListMeta.md#total_items)

## Properties

### filter

• `Optional` **filter**: `Object`

Used filters

**`Memberof`**

ControllersListMeta

#### Index signature

▪ [key: `string`]: [`ControllersFilterData`](ControllersFilterData.md)

#### Defined in

[api.ts:718](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/patch/api.ts#L718)

___

### limit

• `Optional` **limit**: `number`

Used response limit (page size) - pagination

**`Memberof`**

ControllersListMeta

#### Defined in

[api.ts:724](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/patch/api.ts#L724)

___

### offset

• `Optional` **offset**: `number`

Used response offset - pagination

**`Memberof`**

ControllersListMeta

#### Defined in

[api.ts:730](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/patch/api.ts#L730)

___

### search

• `Optional` **search**: `string`

Used search terms

**`Memberof`**

ControllersListMeta

#### Defined in

[api.ts:736](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/patch/api.ts#L736)

___

### sort

• `Optional` **sort**: `string`[]

Used sorting fields

**`Memberof`**

ControllersListMeta

#### Defined in

[api.ts:742](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/patch/api.ts#L742)

___

### subtotals

• `Optional` **subtotals**: `Object`

Some subtotals used by some endpoints

**`Memberof`**

ControllersListMeta

#### Index signature

▪ [key: `string`]: `number`

#### Defined in

[api.ts:748](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/patch/api.ts#L748)

___

### total\_items

• `Optional` **total\_items**: `number`

Total items count to return

**`Memberof`**

ControllersListMeta

#### Defined in

[api.ts:754](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/patch/api.ts#L754)
