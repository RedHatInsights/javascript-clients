[@redhat-cloud-services/host-inventory-client](../README.md) › [Globals](../globals.md) › [NetworkInterface](networkinterface.md)

# Interface: NetworkInterface

Representation of one network interface

**`export`** 

**`interface`** NetworkInterface

## Hierarchy

* **NetworkInterface**

## Index

### Properties

* [ipv4_addresses](networkinterface.md#optional-ipv4_addresses)
* [ipv6_addresses](networkinterface.md#optional-ipv6_addresses)
* [mac_address](networkinterface.md#optional-mac_address)
* [mtu](networkinterface.md#optional-mtu)
* [name](networkinterface.md#optional-name)
* [state](networkinterface.md#optional-state)
* [type](networkinterface.md#optional-type)

## Properties

### `Optional` ipv4_addresses

• **ipv4_addresses**? : *Array‹string›*

*Defined in [packages/host-inventory/api.ts:576](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L576)*

**`memberof`** NetworkInterface

___

### `Optional` ipv6_addresses

• **ipv6_addresses**? : *Array‹string›*

*Defined in [packages/host-inventory/api.ts:582](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L582)*

**`memberof`** NetworkInterface

___

### `Optional` mac_address

• **mac_address**? : *string*

*Defined in [packages/host-inventory/api.ts:594](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L594)*

MAC address (with or without colons)

**`memberof`** NetworkInterface

___

### `Optional` mtu

• **mtu**? : *number*

*Defined in [packages/host-inventory/api.ts:588](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L588)*

MTU

**`memberof`** NetworkInterface

___

### `Optional` name

• **name**? : *string*

*Defined in [packages/host-inventory/api.ts:600](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L600)*

name of interface

**`memberof`** NetworkInterface

___

### `Optional` state

• **state**? : *string*

*Defined in [packages/host-inventory/api.ts:606](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L606)*

interface state (UP, DOWN, UNKNOWN)

**`memberof`** NetworkInterface

___

### `Optional` type

• **type**? : *string*

*Defined in [packages/host-inventory/api.ts:612](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L612)*

interface type (ether, loopback)

**`memberof`** NetworkInterface
