[@redhat-cloud-services/patch-client](../README.md) / [Exports](../modules.md) / ControllersListMeta

# Interface: ControllersListMeta

**`Export`**

ControllersListMeta

## Table of contents

### Properties

- [filter](ControllersListMeta.md#filter)
- [has\_systems](ControllersListMeta.md#has_systems)
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

types/index.ts:1350

___

### has\_systems

• `Optional` **has\_systems**: `boolean`

Show whether customer has some registered systems

**`Memberof`**

ControllersListMeta

#### Defined in

types/index.ts:1356

___

### limit

• `Optional` **limit**: `number`

Used response limit (page size) - pagination

**`Memberof`**

ControllersListMeta

#### Defined in

types/index.ts:1362

___

### offset

• `Optional` **offset**: `number`

Used response offset - pagination

**`Memberof`**

ControllersListMeta

#### Defined in

types/index.ts:1368

___

### search

• `Optional` **search**: `string`

Used search terms

**`Memberof`**

ControllersListMeta

#### Defined in

types/index.ts:1374

___

### sort

• `Optional` **sort**: `string`[]

Used sorting fields

**`Memberof`**

ControllersListMeta

#### Defined in

types/index.ts:1380

___

### subtotals

• `Optional` **subtotals**: `Object`

Some subtotals used by some endpoints

**`Memberof`**

ControllersListMeta

#### Index signature

▪ [key: `string`]: `number`

#### Defined in

types/index.ts:1386

___

### total\_items

• `Optional` **total\_items**: `number`

Total items count to return

**`Memberof`**

ControllersListMeta

#### Defined in

types/index.ts:1392
