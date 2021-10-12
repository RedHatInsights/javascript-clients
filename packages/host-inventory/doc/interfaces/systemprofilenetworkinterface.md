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

*Defined in [packages/host-inventory/api.ts:1609](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1609)*

**`memberof`** SystemProfileNetworkInterface

___

### `Optional` ipv6_addresses

• **ipv6_addresses**? : *Array‹string›*

*Defined in [packages/host-inventory/api.ts:1615](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1615)*

**`memberof`** SystemProfileNetworkInterface

___

### `Optional` mac_address

• **mac_address**? : *string*

*Defined in [packages/host-inventory/api.ts:1627](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1627)*

MAC address (with or without colons)

**`memberof`** SystemProfileNetworkInterface

___

### `Optional` mtu

• **mtu**? : *number*

*Defined in [packages/host-inventory/api.ts:1621](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1621)*

MTU (Maximum transmission unit)

**`memberof`** SystemProfileNetworkInterface

___

### `Optional` name

• **name**? : *string*

*Defined in [packages/host-inventory/api.ts:1633](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1633)*

Name of interface

**`memberof`** SystemProfileNetworkInterface

___

### `Optional` state

• **state**? : *string*

*Defined in [packages/host-inventory/api.ts:1639](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1639)*

Interface state (UP, DOWN, UNKNOWN)

**`memberof`** SystemProfileNetworkInterface

___

### `Optional` type

• **type**? : *string*

*Defined in [packages/host-inventory/api.ts:1645](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1645)*

Interface type (ether, loopback)

**`memberof`** SystemProfileNetworkInterface
