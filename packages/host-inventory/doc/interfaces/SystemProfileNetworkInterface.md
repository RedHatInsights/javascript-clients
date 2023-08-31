[@redhat-cloud-services/host-inventory-client](../README.md) / [Exports](../modules.md) / SystemProfileNetworkInterface

# Interface: SystemProfileNetworkInterface

Representation of one network interface

**`Export`**

**`Interface`**

SystemProfileNetworkInterface

## Table of contents

### Properties

- [ipv4\_addresses](SystemProfileNetworkInterface.md#ipv4_addresses)
- [ipv6\_addresses](SystemProfileNetworkInterface.md#ipv6_addresses)
- [mac\_address](SystemProfileNetworkInterface.md#mac_address)
- [mtu](SystemProfileNetworkInterface.md#mtu)
- [name](SystemProfileNetworkInterface.md#name)
- [state](SystemProfileNetworkInterface.md#state)
- [type](SystemProfileNetworkInterface.md#type)

## Properties

### ipv4\_addresses

• `Optional` **ipv4\_addresses**: `string`[]

**`Memberof`**

SystemProfileNetworkInterface

#### Defined in

[api.ts:2139](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L2139)

___

### ipv6\_addresses

• `Optional` **ipv6\_addresses**: `string`[]

**`Memberof`**

SystemProfileNetworkInterface

#### Defined in

[api.ts:2145](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L2145)

___

### mac\_address

• `Optional` **mac\_address**: `string`

MAC address (with or without colons)

**`Memberof`**

SystemProfileNetworkInterface

#### Defined in

[api.ts:2157](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L2157)

___

### mtu

• `Optional` **mtu**: `number`

MTU (Maximum transmission unit)

**`Memberof`**

SystemProfileNetworkInterface

#### Defined in

[api.ts:2151](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L2151)

___

### name

• `Optional` **name**: `string`

Name of interface

**`Memberof`**

SystemProfileNetworkInterface

#### Defined in

[api.ts:2163](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L2163)

___

### state

• `Optional` **state**: `string`

Interface state (UP, DOWN, UNKNOWN)

**`Memberof`**

SystemProfileNetworkInterface

#### Defined in

[api.ts:2169](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L2169)

___

### type

• `Optional` **type**: `string`

Interface type (ether, loopback)

**`Memberof`**

SystemProfileNetworkInterface

#### Defined in

[api.ts:2175](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L2175)
