[@redhat-cloud-services/host-inventory-client](../README.md) / [Exports](../modules.md) / SystemProfileDiskDevice

# Interface: SystemProfileDiskDevice

Representation of one mounted device

**`Export`**

**`Interface`**

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

[api.ts:1995](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1995)

___

### label

• `Optional` **label**: `string`

User-defined mount label

**`Memberof`**

SystemProfileDiskDevice

#### Defined in

[api.ts:2001](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L2001)

___

### mount\_point

• `Optional` **mount\_point**: `string`

The mount point

**`Memberof`**

SystemProfileDiskDevice

#### Defined in

[api.ts:2013](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L2013)

___

### options

• `Optional` **options**: `Object`

An arbitrary object that does not allow empty string keys.

**`Memberof`**

SystemProfileDiskDevice

#### Index signature

▪ [key: `string`]: `object`

#### Defined in

[api.ts:2007](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L2007)

___

### type

• `Optional` **type**: `string`

The mount type

**`Memberof`**

SystemProfileDiskDevice

#### Defined in

[api.ts:2019](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L2019)
