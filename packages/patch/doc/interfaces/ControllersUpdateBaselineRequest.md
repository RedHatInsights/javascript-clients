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

[api.ts:1733](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/patch/api.ts#L1733)

___

### description

• `Optional` **description**: `string`

Description of the baseline (optional).

**`Memberof`**

ControllersUpdateBaselineRequest

#### Defined in

[api.ts:1739](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/patch/api.ts#L1739)

___

### inventory\_ids

• `Optional` **inventory\_ids**: `Object`

Map of inventories to add to (true) or remove (false) from given baseline (optional)

**`Memberof`**

ControllersUpdateBaselineRequest

#### Index signature

▪ [key: `string`]: `boolean`

#### Defined in

[api.ts:1745](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/patch/api.ts#L1745)

___

### name

• `Optional` **name**: `string`

Updated baseline name (optional)

**`Memberof`**

ControllersUpdateBaselineRequest

#### Defined in

[api.ts:1751](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/patch/api.ts#L1751)
