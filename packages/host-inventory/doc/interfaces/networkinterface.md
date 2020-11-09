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

*Defined in [packages/host-inventory/api.ts:465](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L465)*

**`memberof`** NetworkInterface

___

### `Optional` ipv6_addresses

• **ipv6_addresses**? : *Array‹string›*

*Defined in [packages/host-inventory/api.ts:471](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L471)*

**`memberof`** NetworkInterface

___

### `Optional` mac_address

• **mac_address**? : *string*

*Defined in [packages/host-inventory/api.ts:483](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L483)*

MAC address (with or without colons)

**`memberof`** NetworkInterface

___

### `Optional` mtu

• **mtu**? : *number*

*Defined in [packages/host-inventory/api.ts:477](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L477)*

MTU (Maximum transmission unit)

**`memberof`** NetworkInterface

___

### `Optional` name

• **name**? : *string*

*Defined in [packages/host-inventory/api.ts:489](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L489)*

Name of interface

**`memberof`** NetworkInterface

___

### `Optional` state

• **state**? : *string*

*Defined in [packages/host-inventory/api.ts:495](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L495)*

Interface state (UP, DOWN, UNKNOWN)

**`memberof`** NetworkInterface

___

### `Optional` type

• **type**? : *string*

*Defined in [packages/host-inventory/api.ts:501](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L501)*

Interface type (ether, loopback)

**`memberof`** NetworkInterface
