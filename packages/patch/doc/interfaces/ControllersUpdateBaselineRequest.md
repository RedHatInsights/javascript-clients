[@redhat-cloud-services/patch-client](../README.md) / [Exports](../modules.md) / ControllersUpdateBaselineRequest

# Interface: ControllersUpdateBaselineRequest

**`Export`**

ControllersUpdateBaselineRequest

## Table of contents

### Properties

- [config](ControllersUpdateBaselineRequest.md#config)
- [description](ControllersUpdateBaselineRequest.md#description)
- [inventory\_ids](ControllersUpdateBaselineRequest.md#inventory_ids)
- [name](ControllersUpdateBaselineRequest.md#name)

## Properties

### config

• `Optional` **config**: [`ControllersBaselineConfig`](ControllersBaselineConfig.md)

**`Memberof`**

ControllersUpdateBaselineRequest

#### Defined in

types/index.ts:3353

___

### description

• `Optional` **description**: `string`

Description of the baseline (optional).

**`Memberof`**

ControllersUpdateBaselineRequest

#### Defined in

types/index.ts:3359

___

### inventory\_ids

• `Optional` **inventory\_ids**: `Object`

Map of inventories to add to (true) or remove (false) from given baseline (optional)

**`Memberof`**

ControllersUpdateBaselineRequest

#### Index signature

▪ [key: `string`]: `boolean`

#### Defined in

types/index.ts:3365

___

### name

• `Optional` **name**: `string`

Updated baseline name (optional)

**`Memberof`**

ControllersUpdateBaselineRequest

#### Defined in

types/index.ts:3371
