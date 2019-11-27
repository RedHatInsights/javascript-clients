[@redhat-cloud-services/host-inventory-client](../README.md) > [NetworkInterface](../interfaces/networkinterface.md)

# Interface: NetworkInterface

Representation of one network interface

*__export__*: 

*__interface__*: NetworkInterface

## Hierarchy

**NetworkInterface**

## Index

### Properties

* [ipv4Addresses](networkinterface.md#ipv4addresses)
* [ipv6Addresses](networkinterface.md#ipv6addresses)
* [macAddress](networkinterface.md#macaddress)
* [mtu](networkinterface.md#mtu)
* [name](networkinterface.md#name)
* [state](networkinterface.md#state)
* [type](networkinterface.md#type)

---

## Properties

<a id="ipv4addresses"></a>

### `<Optional>` ipv4Addresses

**● ipv4Addresses**: *`Array`<`string`>*

*Defined in [api.ts:675](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L675)*

*__type__*: {Array}

*__memberof__*: NetworkInterface

___
<a id="ipv6addresses"></a>

### `<Optional>` ipv6Addresses

**● ipv6Addresses**: *`Array`<`string`>*

*Defined in [api.ts:681](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L681)*

*__type__*: {Array}

*__memberof__*: NetworkInterface

___
<a id="macaddress"></a>

### `<Optional>` macAddress

**● macAddress**: *`string`*

*Defined in [api.ts:693](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L693)*

MAC address (with or without colons)

*__type__*: {string}

*__memberof__*: NetworkInterface

___
<a id="mtu"></a>

### `<Optional>` mtu

**● mtu**: *`number`*

*Defined in [api.ts:687](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L687)*

MTU

*__type__*: {number}

*__memberof__*: NetworkInterface

___
<a id="name"></a>

### `<Optional>` name

**● name**: *`string`*

*Defined in [api.ts:699](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L699)*

name of interface

*__type__*: {string}

*__memberof__*: NetworkInterface

___
<a id="state"></a>

### `<Optional>` state

**● state**: *`string`*

*Defined in [api.ts:705](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L705)*

interface state (UP, DOWN, UNKNOWN)

*__type__*: {string}

*__memberof__*: NetworkInterface

___
<a id="type"></a>

### `<Optional>` type

**● type**: *`string`*

*Defined in [api.ts:711](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L711)*

interface type (ether, loopback)

*__type__*: {string}

*__memberof__*: NetworkInterface

___

