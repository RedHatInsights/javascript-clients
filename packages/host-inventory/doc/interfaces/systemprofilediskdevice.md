[@redhat-cloud-services/host-inventory-client](../README.md) › [Globals](../globals.md) › [SystemProfileDiskDevice](systemprofilediskdevice.md)

# Interface: SystemProfileDiskDevice

Representation of one mounted device

**`export`** 

**`interface`** SystemProfileDiskDevice

## Hierarchy

* **SystemProfileDiskDevice**

## Index

### Properties

* [device](systemprofilediskdevice.md#optional-device)
* [label](systemprofilediskdevice.md#optional-label)
* [mount_point](systemprofilediskdevice.md#optional-mount_point)
* [options](systemprofilediskdevice.md#optional-options)
* [type](systemprofilediskdevice.md#optional-type)

## Properties

### `Optional` device

• **device**? : *string*

*Defined in [packages/host-inventory/api.ts:1528](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1528)*

**`memberof`** SystemProfileDiskDevice

___

### `Optional` label

• **label**? : *string*

*Defined in [packages/host-inventory/api.ts:1534](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1534)*

User-defined mount label

**`memberof`** SystemProfileDiskDevice

___

### `Optional` mount_point

• **mount_point**? : *string*

*Defined in [packages/host-inventory/api.ts:1546](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1546)*

The mount point

**`memberof`** SystemProfileDiskDevice

___

### `Optional` options

• **options**? : *object*

*Defined in [packages/host-inventory/api.ts:1540](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1540)*

An arbitrary object that does not allow empty string keys.

**`memberof`** SystemProfileDiskDevice

#### Type declaration:

* \[ **key**: *string*\]: object

___

### `Optional` type

• **type**? : *string*

*Defined in [packages/host-inventory/api.ts:1552](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1552)*

The mount type

**`memberof`** SystemProfileDiskDevice
