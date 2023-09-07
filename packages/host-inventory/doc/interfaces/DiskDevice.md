[@redhat-cloud-services/host-inventory-client](../README.md) / [Exports](../modules.md) / DiskDevice

# Interface: DiskDevice

Representation of one mounted device

**`Export`**

**`Interface`**

DiskDevice

## Table of contents

### Properties

- [device](DiskDevice.md#device)
- [label](DiskDevice.md#label)
- [mount\_point](DiskDevice.md#mount_point)
- [options](DiskDevice.md#options)
- [type](DiskDevice.md#type)

## Properties

### device

• `Optional` **device**: `string`

**`Memberof`**

DiskDevice

#### Defined in

[api.ts:588](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L588)

___

### label

• `Optional` **label**: `string`

User-defined mount label

**`Memberof`**

DiskDevice

#### Defined in

[api.ts:594](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L594)

___

### mount\_point

• `Optional` **mount\_point**: `string`

The mount point

**`Memberof`**

DiskDevice

#### Defined in

[api.ts:606](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L606)

___

### options

• `Optional` **options**: `Object`

An arbitrary object that does not allow empty string keys.

**`Memberof`**

DiskDevice

#### Index signature

▪ [key: `string`]: `object`

#### Defined in

[api.ts:600](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L600)

___

### type

• `Optional` **type**: `string`

The mount type

**`Memberof`**

DiskDevice

#### Defined in

[api.ts:612](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L612)
