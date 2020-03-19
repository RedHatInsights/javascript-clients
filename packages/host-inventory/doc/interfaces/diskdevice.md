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
* [mountPoint](diskdevice.md#optional-mountpoint)
* [options](diskdevice.md#optional-options)
* [type](diskdevice.md#optional-type)

## Properties

### `Optional` device

• **device**? : *string*

*Defined in [api.ts:443](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L443)*

**`type`** {string}

**`memberof`** DiskDevice

___

### `Optional` label

• **label**? : *string*

*Defined in [api.ts:449](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L449)*

user-defined mount label

**`type`** {string}

**`memberof`** DiskDevice

___

### `Optional` mountPoint

• **mountPoint**? : *string*

*Defined in [api.ts:461](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L461)*

mount point

**`type`** {string}

**`memberof`** DiskDevice

___

### `Optional` options

• **options**? : *[DiskDeviceOptions](diskdeviceoptions.md)*

*Defined in [api.ts:455](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L455)*

**`type`** {DiskDeviceOptions}

**`memberof`** DiskDevice

___

### `Optional` type

• **type**? : *string*

*Defined in [api.ts:467](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L467)*

mount type

**`type`** {string}

**`memberof`** DiskDevice
