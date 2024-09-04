[@redhat-cloud-services/patch-client](../README.md) / [Exports](../modules.md) / ControllersTemplatesMeta

# Interface: ControllersTemplatesMeta

**`Export`**

ControllersTemplatesMeta

## Table of contents

### Properties

- [creators](ControllersTemplatesMeta.md#creators)
- [filter](ControllersTemplatesMeta.md#filter)
- [has\_systems](ControllersTemplatesMeta.md#has_systems)
- [limit](ControllersTemplatesMeta.md#limit)
- [offset](ControllersTemplatesMeta.md#offset)
- [search](ControllersTemplatesMeta.md#search)
- [sort](ControllersTemplatesMeta.md#sort)
- [subtotals](ControllersTemplatesMeta.md#subtotals)
- [total\_items](ControllersTemplatesMeta.md#total_items)

## Properties

### creators

• `Optional` **creators**: `string`[]

**`Memberof`**

ControllersTemplatesMeta

#### Defined in

types/index.ts:3267

___

### filter

• `Optional` **filter**: `Object`

Used filters

**`Memberof`**

ControllersTemplatesMeta

#### Index signature

▪ [key: `string`]: [`ControllersFilterData`](ControllersFilterData.md)

#### Defined in

types/index.ts:3273

___

### has\_systems

• `Optional` **has\_systems**: `boolean`

Show whether customer has some registered systems

**`Memberof`**

ControllersTemplatesMeta

#### Defined in

types/index.ts:3279

___

### limit

• `Optional` **limit**: `number`

Used response limit (page size) - pagination

**`Memberof`**

ControllersTemplatesMeta

#### Defined in

types/index.ts:3285

___

### offset

• `Optional` **offset**: `number`

Used response offset - pagination

**`Memberof`**

ControllersTemplatesMeta

#### Defined in

types/index.ts:3291

___

### search

• `Optional` **search**: `string`

Used search terms

**`Memberof`**

ControllersTemplatesMeta

#### Defined in

types/index.ts:3297

___

### sort

• `Optional` **sort**: `string`[]

Used sorting fields

**`Memberof`**

ControllersTemplatesMeta

#### Defined in

types/index.ts:3303

___

### subtotals

• `Optional` **subtotals**: `Object`

Some subtotals used by some endpoints

**`Memberof`**

ControllersTemplatesMeta

#### Index signature

▪ [key: `string`]: `number`

#### Defined in

types/index.ts:3309

___

### total\_items

• `Optional` **total\_items**: `number`

Total items count to return

**`Memberof`**

ControllersTemplatesMeta

#### Defined in

types/index.ts:3315
