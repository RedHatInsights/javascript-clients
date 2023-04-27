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

[api.ts:1750](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1750)

___

### ipv6\_addresses

• `Optional` **ipv6\_addresses**: `string`[]

**`Memberof`**

SystemProfileNetworkInterface

#### Defined in

[api.ts:1756](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1756)

___

### mac\_address

• `Optional` **mac\_address**: `string`

MAC address (with or without colons)

**`Memberof`**

SystemProfileNetworkInterface

#### Defined in

[api.ts:1768](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1768)

___

### mtu

• `Optional` **mtu**: `number`

MTU (Maximum transmission unit)

**`Memberof`**

SystemProfileNetworkInterface

#### Defined in

[api.ts:1762](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1762)

___

### name

• `Optional` **name**: `string`

Name of interface

**`Memberof`**

SystemProfileNetworkInterface

#### Defined in

[api.ts:1774](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1774)

___

### state

• `Optional` **state**: `string`

Interface state (UP, DOWN, UNKNOWN)

**`Memberof`**

SystemProfileNetworkInterface

#### Defined in

[api.ts:1780](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1780)

___

### type

• `Optional` **type**: `string`

Interface type (ether, loopback)

**`Memberof`**

SystemProfileNetworkInterface

#### Defined in

[api.ts:1786](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1786)
