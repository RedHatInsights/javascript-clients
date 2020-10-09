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

*Defined in [packages/host-inventory/api.ts:557](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L557)*

**`memberof`** NetworkInterface

___

### `Optional` ipv6_addresses

• **ipv6_addresses**? : *Array‹string›*

*Defined in [packages/host-inventory/api.ts:563](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L563)*

**`memberof`** NetworkInterface

___

### `Optional` mac_address

• **mac_address**? : *string*

*Defined in [packages/host-inventory/api.ts:575](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L575)*

MAC address (with or without colons)

**`memberof`** NetworkInterface

___

### `Optional` mtu

• **mtu**? : *number*

*Defined in [packages/host-inventory/api.ts:569](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L569)*

MTU (Maximum transmission unit)

**`memberof`** NetworkInterface

___

### `Optional` name

• **name**? : *string*

*Defined in [packages/host-inventory/api.ts:581](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L581)*

Name of interface

**`memberof`** NetworkInterface

___

### `Optional` state

• **state**? : *string*

*Defined in [packages/host-inventory/api.ts:587](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L587)*

Interface state (UP, DOWN, UNKNOWN)

**`memberof`** NetworkInterface

___

### `Optional` type

• **type**? : *string*

*Defined in [packages/host-inventory/api.ts:593](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L593)*

Interface type (ether, loopback)

**`memberof`** NetworkInterface
