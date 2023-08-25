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

[api.ts:552](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L552)

___

### label

• `Optional` **label**: `string`

User-defined mount label

**`Memberof`**

DiskDevice

#### Defined in

[api.ts:558](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L558)

___

### mount\_point

• `Optional` **mount\_point**: `string`

The mount point

**`Memberof`**

DiskDevice

#### Defined in

[api.ts:570](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L570)

___

### options

• `Optional` **options**: `Object`

An arbitrary object that does not allow empty string keys.

**`Memberof`**

DiskDevice

#### Index signature

▪ [key: `string`]: `object`

#### Defined in

[api.ts:564](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L564)

___

### type

• `Optional` **type**: `string`

The mount type

**`Memberof`**

DiskDevice

#### Defined in

[api.ts:576](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L576)
