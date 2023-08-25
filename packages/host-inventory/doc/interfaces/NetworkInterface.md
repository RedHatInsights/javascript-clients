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

[api.ts:1182](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1182)

___

### ipv6\_addresses

• `Optional` **ipv6\_addresses**: `string`[]

**`Memberof`**

NetworkInterface

#### Defined in

[api.ts:1188](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1188)

___

### mac\_address

• `Optional` **mac\_address**: `string`

MAC address (with or without colons)

**`Memberof`**

NetworkInterface

#### Defined in

[api.ts:1200](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1200)

___

### mtu

• `Optional` **mtu**: `number`

MTU (Maximum transmission unit)

**`Memberof`**

NetworkInterface

#### Defined in

[api.ts:1194](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1194)

___

### name

• `Optional` **name**: `string`

Name of interface

**`Memberof`**

NetworkInterface

#### Defined in

[api.ts:1206](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1206)

___

### state

• `Optional` **state**: `string`

Interface state (UP, DOWN, UNKNOWN)

**`Memberof`**

NetworkInterface

#### Defined in

[api.ts:1212](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1212)

___

### type

• `Optional` **type**: `string`

Interface type (ether, loopback)

**`Memberof`**

NetworkInterface

#### Defined in

[api.ts:1218](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1218)
