[@redhat-cloud-services/patch-client](../README.md) / [Exports](../modules.md) / ControllersBaselinesMeta

# Interface: ControllersBaselinesMeta

**`Export`**

ControllersBaselinesMeta

## Table of contents

### Properties

- [creators](ControllersBaselinesMeta.md#creators)
- [filter](ControllersBaselinesMeta.md#filter)
- [has\_systems](ControllersBaselinesMeta.md#has_systems)
- [limit](ControllersBaselinesMeta.md#limit)
- [offset](ControllersBaselinesMeta.md#offset)
- [search](ControllersBaselinesMeta.md#search)
- [sort](ControllersBaselinesMeta.md#sort)
- [subtotals](ControllersBaselinesMeta.md#subtotals)
- [total\_items](ControllersBaselinesMeta.md#total_items)

## Properties

### creators

• `Optional` **creators**: `string`[]

**`Memberof`**

ControllersBaselinesMeta

#### Defined in

types/index.ts:1049

___

### filter

• `Optional` **filter**: `Object`

Used filters

**`Memberof`**

ControllersBaselinesMeta

#### Index signature

▪ [key: `string`]: [`ControllersFilterData`](ControllersFilterData.md)

#### Defined in

types/index.ts:1055

___

### has\_systems

• `Optional` **has\_systems**: `boolean`

Show whether customer has some registered systems

**`Memberof`**

ControllersBaselinesMeta

#### Defined in

types/index.ts:1061

___

### limit

• `Optional` **limit**: `number`

Used response limit (page size) - pagination

**`Memberof`**

ControllersBaselinesMeta

#### Defined in

types/index.ts:1067

___

### offset

• `Optional` **offset**: `number`

Used response offset - pagination

**`Memberof`**

ControllersBaselinesMeta

#### Defined in

types/index.ts:1073

___

### search

• `Optional` **search**: `string`

Used search terms

**`Memberof`**

ControllersBaselinesMeta

#### Defined in

types/index.ts:1079

___

### sort

• `Optional` **sort**: `string`[]

Used sorting fields

**`Memberof`**

ControllersBaselinesMeta

#### Defined in

types/index.ts:1085

___

### subtotals

• `Optional` **subtotals**: `Object`

Some subtotals used by some endpoints

**`Memberof`**

ControllersBaselinesMeta

#### Index signature

▪ [key: `string`]: `number`

#### Defined in

types/index.ts:1091

___

### total\_items

• `Optional` **total\_items**: `number`

Total items count to return

**`Memberof`**

ControllersBaselinesMeta

#### Defined in

types/index.ts:1097
