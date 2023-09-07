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

[api.ts:1218](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1218)

___

### ipv6\_addresses

• `Optional` **ipv6\_addresses**: `string`[]

**`Memberof`**

NetworkInterface

#### Defined in

[api.ts:1224](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1224)

___

### mac\_address

• `Optional` **mac\_address**: `string`

MAC address (with or without colons)

**`Memberof`**

NetworkInterface

#### Defined in

[api.ts:1236](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1236)

___

### mtu

• `Optional` **mtu**: `number`

MTU (Maximum transmission unit)

**`Memberof`**

NetworkInterface

#### Defined in

[api.ts:1230](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1230)

___

### name

• `Optional` **name**: `string`

Name of interface

**`Memberof`**

NetworkInterface

#### Defined in

[api.ts:1242](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1242)

___

### state

• `Optional` **state**: `string`

Interface state (UP, DOWN, UNKNOWN)

**`Memberof`**

NetworkInterface

#### Defined in

[api.ts:1248](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1248)

___

### type

• `Optional` **type**: `string`

Interface type (ether, loopback)

**`Memberof`**

NetworkInterface

#### Defined in

[api.ts:1254](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1254)
