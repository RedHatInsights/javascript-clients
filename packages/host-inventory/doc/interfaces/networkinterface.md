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

*Defined in [api.ts:856](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L856)*

**`memberof`** NetworkInterface

___

### `Optional` ipv6_addresses

• **ipv6_addresses**? : *Array‹string›*

*Defined in [api.ts:862](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L862)*

**`memberof`** NetworkInterface

___

### `Optional` mac_address

• **mac_address**? : *string*

*Defined in [api.ts:874](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L874)*

MAC address (with or without colons)

**`memberof`** NetworkInterface

___

### `Optional` mtu

• **mtu**? : *number*

*Defined in [api.ts:868](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L868)*

MTU (Maximum transmission unit)

**`memberof`** NetworkInterface

___

### `Optional` name

• **name**? : *string*

*Defined in [api.ts:880](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L880)*

Name of interface

**`memberof`** NetworkInterface

___

### `Optional` state

• **state**? : *string*

*Defined in [api.ts:886](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L886)*

Interface state (UP, DOWN, UNKNOWN)

**`memberof`** NetworkInterface

___

### `Optional` type

• **type**? : *string*

*Defined in [api.ts:892](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L892)*

Interface type (ether, loopback)

**`memberof`** NetworkInterface
