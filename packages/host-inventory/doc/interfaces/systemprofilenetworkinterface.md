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

*Defined in [api.ts:1592](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1592)*

**`memberof`** SystemProfileNetworkInterface

___

### `Optional` ipv6_addresses

• **ipv6_addresses**? : *Array‹string›*

*Defined in [api.ts:1598](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1598)*

**`memberof`** SystemProfileNetworkInterface

___

### `Optional` mac_address

• **mac_address**? : *string*

*Defined in [api.ts:1610](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1610)*

MAC address (with or without colons)

**`memberof`** SystemProfileNetworkInterface

___

### `Optional` mtu

• **mtu**? : *number*

*Defined in [api.ts:1604](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1604)*

MTU (Maximum transmission unit)

**`memberof`** SystemProfileNetworkInterface

___

### `Optional` name

• **name**? : *string*

*Defined in [api.ts:1616](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1616)*

Name of interface

**`memberof`** SystemProfileNetworkInterface

___

### `Optional` state

• **state**? : *string*

*Defined in [api.ts:1622](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1622)*

Interface state (UP, DOWN, UNKNOWN)

**`memberof`** SystemProfileNetworkInterface

___

### `Optional` type

• **type**? : *string*

*Defined in [api.ts:1628](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1628)*

Interface type (ether, loopback)

**`memberof`** SystemProfileNetworkInterface
