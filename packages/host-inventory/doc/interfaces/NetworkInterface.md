[@redhat-cloud-services/host-inventory-client](../README.md) / [Exports](../modules.md) / NetworkInterface

# Interface: NetworkInterface

Representation of one network interface

**`Export`**

**`Interface`**

NetworkInterface

## Table of contents

### Properties

- [ipv4\_addresses](NetworkInterface.md#ipv4_addresses)
- [ipv6\_addresses](NetworkInterface.md#ipv6_addresses)
- [mac\_address](NetworkInterface.md#mac_address)
- [mtu](NetworkInterface.md#mtu)
- [name](NetworkInterface.md#name)
- [state](NetworkInterface.md#state)
- [type](NetworkInterface.md#type)

## Properties

### ipv4\_addresses

• `Optional` **ipv4\_addresses**: `string`[]

**`Memberof`**

NetworkInterface

#### Defined in

[api.ts:981](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L981)

___

### ipv6\_addresses

• `Optional` **ipv6\_addresses**: `string`[]

**`Memberof`**

NetworkInterface

#### Defined in

[api.ts:987](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L987)

___

### mac\_address

• `Optional` **mac\_address**: `string`

MAC address (with or without colons)

**`Memberof`**

NetworkInterface

#### Defined in

[api.ts:999](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L999)

___

### mtu

• `Optional` **mtu**: `number`

MTU (Maximum transmission unit)

**`Memberof`**

NetworkInterface

#### Defined in

[api.ts:993](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L993)

___

### name

• `Optional` **name**: `string`

Name of interface

**`Memberof`**

NetworkInterface

#### Defined in

[api.ts:1005](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1005)

___

### state

• `Optional` **state**: `string`

Interface state (UP, DOWN, UNKNOWN)

**`Memberof`**

NetworkInterface

#### Defined in

[api.ts:1011](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1011)

___

### type

• `Optional` **type**: `string`

Interface type (ether, loopback)

**`Memberof`**

NetworkInterface

#### Defined in

[api.ts:1017](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1017)
