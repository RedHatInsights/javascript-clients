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

*Defined in [packages/host-inventory/api.ts:920](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L920)*

**`memberof`** NetworkInterface

___

### `Optional` ipv6_addresses

• **ipv6_addresses**? : *Array‹string›*

*Defined in [packages/host-inventory/api.ts:926](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L926)*

**`memberof`** NetworkInterface

___

### `Optional` mac_address

• **mac_address**? : *string*

*Defined in [packages/host-inventory/api.ts:938](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L938)*

MAC address (with or without colons)

**`memberof`** NetworkInterface

___

### `Optional` mtu

• **mtu**? : *number*

*Defined in [packages/host-inventory/api.ts:932](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L932)*

MTU (Maximum transmission unit)

**`memberof`** NetworkInterface

___

### `Optional` name

• **name**? : *string*

*Defined in [packages/host-inventory/api.ts:944](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L944)*

Name of interface

**`memberof`** NetworkInterface

___

### `Optional` state

• **state**? : *string*

*Defined in [packages/host-inventory/api.ts:950](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L950)*

Interface state (UP, DOWN, UNKNOWN)

**`memberof`** NetworkInterface

___

### `Optional` type

• **type**? : *string*

*Defined in [packages/host-inventory/api.ts:956](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L956)*

Interface type (ether, loopback)

**`memberof`** NetworkInterface
