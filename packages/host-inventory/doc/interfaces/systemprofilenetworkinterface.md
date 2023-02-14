[@redhat-cloud-services/host-inventory-client](../README.md) › [Globals](../globals.md) › [SystemProfileNetworkInterface](systemprofilenetworkinterface.md)

# Interface: SystemProfileNetworkInterface

Representation of one network interface

**`export`** 

**`interface`** SystemProfileNetworkInterface

## Hierarchy

* **SystemProfileNetworkInterface**

## Index

### Properties

* [ipv4_addresses](systemprofilenetworkinterface.md#optional-ipv4_addresses)
* [ipv6_addresses](systemprofilenetworkinterface.md#optional-ipv6_addresses)
* [mac_address](systemprofilenetworkinterface.md#optional-mac_address)
* [mtu](systemprofilenetworkinterface.md#optional-mtu)
* [name](systemprofilenetworkinterface.md#optional-name)
* [state](systemprofilenetworkinterface.md#optional-state)
* [type](systemprofilenetworkinterface.md#optional-type)

## Properties

### `Optional` ipv4_addresses

• **ipv4_addresses**? : *Array‹string›*

*Defined in [api.ts:1770](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1770)*

**`memberof`** SystemProfileNetworkInterface

___

### `Optional` ipv6_addresses

• **ipv6_addresses**? : *Array‹string›*

*Defined in [api.ts:1776](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1776)*

**`memberof`** SystemProfileNetworkInterface

___

### `Optional` mac_address

• **mac_address**? : *string*

*Defined in [api.ts:1788](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1788)*

MAC address (with or without colons)

**`memberof`** SystemProfileNetworkInterface

___

### `Optional` mtu

• **mtu**? : *number*

*Defined in [api.ts:1782](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1782)*

MTU (Maximum transmission unit)

**`memberof`** SystemProfileNetworkInterface

___

### `Optional` name

• **name**? : *string*

*Defined in [api.ts:1794](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1794)*

Name of interface

**`memberof`** SystemProfileNetworkInterface

___

### `Optional` state

• **state**? : *string*

*Defined in [api.ts:1800](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1800)*

Interface state (UP, DOWN, UNKNOWN)

**`memberof`** SystemProfileNetworkInterface

___

### `Optional` type

• **type**? : *string*

*Defined in [api.ts:1806](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1806)*

Interface type (ether, loopback)

**`memberof`** SystemProfileNetworkInterface
