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

[api.ts:1820](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1820)

___

### label

• `Optional` **label**: `string`

User-defined mount label

**`Memberof`**

SystemProfileDiskDevice

#### Defined in

[api.ts:1826](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1826)

___

### mount\_point

• `Optional` **mount\_point**: `string`

The mount point

**`Memberof`**

SystemProfileDiskDevice

#### Defined in

[api.ts:1838](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1838)

___

### options

• `Optional` **options**: `Object`

An arbitrary object that does not allow empty string keys.

**`Memberof`**

SystemProfileDiskDevice

#### Index signature

▪ [key: `string`]: `object`

#### Defined in

[api.ts:1832](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1832)

___

### type

• `Optional` **type**: `string`

The mount type

**`Memberof`**

SystemProfileDiskDevice

#### Defined in

[api.ts:1844](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1844)
