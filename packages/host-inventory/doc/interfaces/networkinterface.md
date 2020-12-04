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

*Defined in [packages/host-inventory/api.ts:860](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L860)*

**`memberof`** NetworkInterface

___

### `Optional` ipv6_addresses

• **ipv6_addresses**? : *Array‹string›*

*Defined in [packages/host-inventory/api.ts:866](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L866)*

**`memberof`** NetworkInterface

___

### `Optional` mac_address

• **mac_address**? : *string*

*Defined in [packages/host-inventory/api.ts:878](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L878)*

MAC address (with or without colons)

**`memberof`** NetworkInterface

___

### `Optional` mtu

• **mtu**? : *number*

*Defined in [packages/host-inventory/api.ts:872](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L872)*

MTU (Maximum transmission unit)

**`memberof`** NetworkInterface

___

### `Optional` name

• **name**? : *string*

*Defined in [packages/host-inventory/api.ts:884](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L884)*

Name of interface

**`memberof`** NetworkInterface

___

### `Optional` state

• **state**? : *string*

*Defined in [packages/host-inventory/api.ts:890](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L890)*

Interface state (UP, DOWN, UNKNOWN)

**`memberof`** NetworkInterface

___

### `Optional` type

• **type**? : *string*

*Defined in [packages/host-inventory/api.ts:896](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L896)*

Interface type (ether, loopback)

**`memberof`** NetworkInterface
