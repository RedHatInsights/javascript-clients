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

[api.ts:1232](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1232)

___

### ipv6\_addresses

• `Optional` **ipv6\_addresses**: `string`[]

**`Memberof`**

NetworkInterface

#### Defined in

[api.ts:1238](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1238)

___

### mac\_address

• `Optional` **mac\_address**: `string`

MAC address (with or without colons)

**`Memberof`**

NetworkInterface

#### Defined in

[api.ts:1250](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1250)

___

### mtu

• `Optional` **mtu**: `number`

MTU (Maximum transmission unit)

**`Memberof`**

NetworkInterface

#### Defined in

[api.ts:1244](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1244)

___

### name

• `Optional` **name**: `string`

Name of interface

**`Memberof`**

NetworkInterface

#### Defined in

[api.ts:1256](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1256)

___

### state

• `Optional` **state**: `string`

Interface state (UP, DOWN, UNKNOWN)

**`Memberof`**

NetworkInterface

#### Defined in

[api.ts:1262](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1262)

___

### type

• `Optional` **type**: `string`

Interface type (ether, loopback)

**`Memberof`**

NetworkInterface

#### Defined in

[api.ts:1268](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1268)
