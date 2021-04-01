[@redhat-cloud-services/host-inventory-client](../README.md) › [Globals](../globals.md) › [DiskDevice](diskdevice.md)

# Interface: DiskDevice

Representation of one mounted device

**`export`** 

**`interface`** DiskDevice

## Hierarchy

* **DiskDevice**

## Index

### Properties

* [device](diskdevice.md#optional-device)
* [label](diskdevice.md#optional-label)
* [mount_point](diskdevice.md#optional-mount_point)
* [options](diskdevice.md#optional-options)
* [type](diskdevice.md#optional-type)

## Properties

### `Optional` device

• **device**? : *string*

*Defined in [packages/host-inventory/api.ts:552](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L552)*

**`memberof`** DiskDevice

___

### `Optional` label

• **label**? : *string*

*Defined in [packages/host-inventory/api.ts:558](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L558)*

User-defined mount label

**`memberof`** DiskDevice

___

### `Optional` mount_point

• **mount_point**? : *string*

*Defined in [packages/host-inventory/api.ts:570](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L570)*

The mount point

**`memberof`** DiskDevice

___

### `Optional` options

• **options**? : *object*

*Defined in [packages/host-inventory/api.ts:564](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L564)*

An arbitrary object that does not allow empty string keys.

**`memberof`** DiskDevice

#### Type declaration:

* \[ **key**: *string*\]: object

___

### `Optional` type

• **type**? : *string*

*Defined in [packages/host-inventory/api.ts:576](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L576)*

The mount type

**`memberof`** DiskDevice
