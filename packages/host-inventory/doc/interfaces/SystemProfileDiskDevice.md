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

[api.ts:1656](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1656)

___

### label

• `Optional` **label**: `string`

User-defined mount label

**`Memberof`**

SystemProfileDiskDevice

#### Defined in

[api.ts:1662](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1662)

___

### mount\_point

• `Optional` **mount\_point**: `string`

The mount point

**`Memberof`**

SystemProfileDiskDevice

#### Defined in

[api.ts:1674](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1674)

___

### options

• `Optional` **options**: `Object`

An arbitrary object that does not allow empty string keys.

**`Memberof`**

SystemProfileDiskDevice

#### Index signature

▪ [key: `string`]: `object`

#### Defined in

[api.ts:1668](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1668)

___

### type

• `Optional` **type**: `string`

The mount type

**`Memberof`**

SystemProfileDiskDevice

#### Defined in

[api.ts:1680](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1680)
