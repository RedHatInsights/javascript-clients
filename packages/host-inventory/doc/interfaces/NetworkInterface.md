[@redhat-cloud-services/host-inventory-client](../README.md) / [Exports](../modules.md) / NetworkInterface

# Interface: NetworkInterface

Representation of one network interface

**`Export`**

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

[api.ts:1113](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/host-inventory/api.ts#L1113)

___

### ipv6\_addresses

• `Optional` **ipv6\_addresses**: `string`[]

**`Memberof`**

NetworkInterface

#### Defined in

[api.ts:1119](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/host-inventory/api.ts#L1119)

___

### mac\_address

• `Optional` **mac\_address**: `string`

MAC address (with or without colons)

**`Memberof`**

NetworkInterface

#### Defined in

[api.ts:1131](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/host-inventory/api.ts#L1131)

___

### mtu

• `Optional` **mtu**: `number`

MTU (Maximum transmission unit)

**`Memberof`**

NetworkInterface

#### Defined in

[api.ts:1125](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/host-inventory/api.ts#L1125)

___

### name

• `Optional` **name**: `string`

Name of interface

**`Memberof`**

NetworkInterface

#### Defined in

[api.ts:1137](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/host-inventory/api.ts#L1137)

___

### state

• `Optional` **state**: `string`

Interface state (UP, DOWN, UNKNOWN)

**`Memberof`**

NetworkInterface

#### Defined in

[api.ts:1143](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/host-inventory/api.ts#L1143)

___

### type

• `Optional` **type**: `string`

Interface type (ether, loopback)

**`Memberof`**

NetworkInterface

#### Defined in

[api.ts:1149](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/host-inventory/api.ts#L1149)
