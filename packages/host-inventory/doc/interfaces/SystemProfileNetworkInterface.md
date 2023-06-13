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

[api.ts:1914](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1914)

___

### ipv6\_addresses

• `Optional` **ipv6\_addresses**: `string`[]

**`Memberof`**

SystemProfileNetworkInterface

#### Defined in

[api.ts:1920](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1920)

___

### mac\_address

• `Optional` **mac\_address**: `string`

MAC address (with or without colons)

**`Memberof`**

SystemProfileNetworkInterface

#### Defined in

[api.ts:1932](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1932)

___

### mtu

• `Optional` **mtu**: `number`

MTU (Maximum transmission unit)

**`Memberof`**

SystemProfileNetworkInterface

#### Defined in

[api.ts:1926](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1926)

___

### name

• `Optional` **name**: `string`

Name of interface

**`Memberof`**

SystemProfileNetworkInterface

#### Defined in

[api.ts:1938](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1938)

___

### state

• `Optional` **state**: `string`

Interface state (UP, DOWN, UNKNOWN)

**`Memberof`**

SystemProfileNetworkInterface

#### Defined in

[api.ts:1944](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1944)

___

### type

• `Optional` **type**: `string`

Interface type (ether, loopback)

**`Memberof`**

SystemProfileNetworkInterface

#### Defined in

[api.ts:1950](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1950)
