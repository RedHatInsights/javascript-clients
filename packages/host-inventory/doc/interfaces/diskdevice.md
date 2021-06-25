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

*Defined in [packages/host-inventory/api.ts:612](https://github.com/fhlavac/javascript-clients/blob/master/packages/host-inventory/api.ts#L612)*

**`memberof`** DiskDevice

___

### `Optional` label

• **label**? : *string*

*Defined in [packages/host-inventory/api.ts:618](https://github.com/fhlavac/javascript-clients/blob/master/packages/host-inventory/api.ts#L618)*

User-defined mount label

**`memberof`** DiskDevice

___

### `Optional` mount_point

• **mount_point**? : *string*

*Defined in [packages/host-inventory/api.ts:630](https://github.com/fhlavac/javascript-clients/blob/master/packages/host-inventory/api.ts#L630)*

The mount point

**`memberof`** DiskDevice

___

### `Optional` options

• **options**? : *object*

*Defined in [packages/host-inventory/api.ts:624](https://github.com/fhlavac/javascript-clients/blob/master/packages/host-inventory/api.ts#L624)*

An arbitrary object that does not allow empty string keys.

**`memberof`** DiskDevice

#### Type declaration:

* \[ **key**: *string*\]: object

___

### `Optional` type

• **type**? : *string*

*Defined in [packages/host-inventory/api.ts:636](https://github.com/fhlavac/javascript-clients/blob/master/packages/host-inventory/api.ts#L636)*

The mount type

**`memberof`** DiskDevice
