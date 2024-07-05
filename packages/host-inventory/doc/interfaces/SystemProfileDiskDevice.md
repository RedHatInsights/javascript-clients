[@redhat-cloud-services/host-inventory-client](../README.md) / [Exports](../modules.md) / SystemProfileDiskDevice

# Interface: SystemProfileDiskDevice

Representation of one mounted device

**`Export`**

SystemProfileDiskDevice

## Table of contents

### Properties

- [device](SystemProfileDiskDevice.md#device)
- [label](SystemProfileDiskDevice.md#label)
- [mount\_point](SystemProfileDiskDevice.md#mount_point)
- [options](SystemProfileDiskDevice.md#options)
- [type](SystemProfileDiskDevice.md#type)

## Properties

### device

• `Optional` **device**: `string`

**`Memberof`**

SystemProfileDiskDevice

#### Defined in

[api.ts:2200](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/host-inventory/api.ts#L2200)

___

### label

• `Optional` **label**: `string`

User-defined mount label

**`Memberof`**

SystemProfileDiskDevice

#### Defined in

[api.ts:2206](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/host-inventory/api.ts#L2206)

___

### mount\_point

• `Optional` **mount\_point**: `string`

The mount point

**`Memberof`**

SystemProfileDiskDevice

#### Defined in

[api.ts:2218](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/host-inventory/api.ts#L2218)

___

### options

• `Optional` **options**: `Object`

An arbitrary object that does not allow empty string keys.

**`Memberof`**

SystemProfileDiskDevice

#### Index signature

▪ [key: `string`]: `object`

#### Defined in

[api.ts:2212](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/host-inventory/api.ts#L2212)

___

### type

• `Optional` **type**: `string`

The mount type

**`Memberof`**

SystemProfileDiskDevice

#### Defined in

[api.ts:2224](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/host-inventory/api.ts#L2224)
