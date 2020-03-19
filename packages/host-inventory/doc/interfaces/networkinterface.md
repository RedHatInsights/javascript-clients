[@redhat-cloud-services/host-inventory-client](../README.md) › [Globals](../globals.md) › [NetworkInterface](networkinterface.md)

# Interface: NetworkInterface

Representation of one network interface

**`export`** 

**`interface`** NetworkInterface

## Hierarchy

* **NetworkInterface**

## Index

### Properties

* [ipv4Addresses](networkinterface.md#optional-ipv4addresses)
* [ipv6Addresses](networkinterface.md#optional-ipv6addresses)
* [macAddress](networkinterface.md#optional-macaddress)
* [mtu](networkinterface.md#optional-mtu)
* [name](networkinterface.md#optional-name)
* [state](networkinterface.md#optional-state)
* [type](networkinterface.md#optional-type)

## Properties

### `Optional` ipv4Addresses

• **ipv4Addresses**? : *Array‹string›*

*Defined in [api.ts:759](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L759)*

**`type`** {Array<string>}

**`memberof`** NetworkInterface

___

### `Optional` ipv6Addresses

• **ipv6Addresses**? : *Array‹string›*

*Defined in [api.ts:765](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L765)*

**`type`** {Array<string>}

**`memberof`** NetworkInterface

___

### `Optional` macAddress

• **macAddress**? : *string*

*Defined in [api.ts:777](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L777)*

MAC address (with or without colons)

**`type`** {string}

**`memberof`** NetworkInterface

___

### `Optional` mtu

• **mtu**? : *number*

*Defined in [api.ts:771](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L771)*

MTU

**`type`** {number}

**`memberof`** NetworkInterface

___

### `Optional` name

• **name**? : *string*

*Defined in [api.ts:783](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L783)*

name of interface

**`type`** {string}

**`memberof`** NetworkInterface

___

### `Optional` state

• **state**? : *string*

*Defined in [api.ts:789](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L789)*

interface state (UP, DOWN, UNKNOWN)

**`type`** {string}

**`memberof`** NetworkInterface

___

### `Optional` type

• **type**? : *string*

*Defined in [api.ts:795](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L795)*

interface type (ether, loopback)

**`type`** {string}

**`memberof`** NetworkInterface
