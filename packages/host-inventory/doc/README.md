
javascript-clients
==================

Javascript clients for swagger API

## Index

### Classes

* [BaseAPI](classes/baseapi.md)
* [Configuration](classes/configuration.md)
* [HostsApi](classes/hostsapi.md)
* [RequiredError](classes/requirederror.md)

### Interfaces

* [BulkHostOut](interfaces/bulkhostout.md)
* [BulkHostOutDetails](interfaces/bulkhostoutdetails.md)
* [ConfigurationParameters](interfaces/configurationparameters.md)
* [CreateHostIn](interfaces/createhostin.md)
* [CreateHostOut](interfaces/createhostout.md)
* [DiskDevice](interfaces/diskdevice.md)
* [DiskDeviceOptions](interfaces/diskdeviceoptions.md)
* [FactSet](interfaces/factset.md)
* [HostOut](interfaces/hostout.md)
* [HostQueryOutput](interfaces/hostqueryoutput.md)
* [HostSystemProfileOut](interfaces/hostsystemprofileout.md)
* [InstalledProduct](interfaces/installedproduct.md)
* [NetworkInterface](interfaces/networkinterface.md)
* [RequestArgs](interfaces/requestargs.md)
* [SystemProfileByHostOut](interfaces/systemprofilebyhostout.md)
* [SystemProfileIn](interfaces/systemprofilein.md)
* [YumRepo](interfaces/yumrepo.md)

### Variables

* [BASE_PATH](#base_path)

### Functions

* [HostsApiAxiosParamCreator](#hostsapiaxiosparamcreator)
* [HostsApiFactory](#hostsapifactory)
* [HostsApiFp](#hostsapifp)

### Object literals

* [COLLECTION_FORMATS](#collection_formats)

---

## Variables

<a id="base_path"></a>

### `<Const>` BASE_PATH

**● BASE_PATH**: *`string`* =  "http://localhost".replace(/\/+$/, "")

*Defined in api.ts:20*

___

## Functions

<a id="hostsapiaxiosparamcreator"></a>

### `<Const>` HostsApiAxiosParamCreator

▸ **HostsApiAxiosParamCreator**(configuration?: *[Configuration](classes/configuration.md)*): `object`

*Defined in api.ts:881*

HostsApi - axios parameter creator

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` configuration | [Configuration](classes/configuration.md) |

**Returns:** `object`

___
<a id="hostsapifactory"></a>

### `<Const>` HostsApiFactory

▸ **HostsApiFactory**(configuration?: *[Configuration](classes/configuration.md)*, basePath?: *`string`*, axios?: *`AxiosInstance`*): `object`

*Defined in api.ts:1325*

HostsApi - factory interface

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` configuration | [Configuration](classes/configuration.md) |
| `Optional` basePath | `string` |
| `Optional` axios | `AxiosInstance` |

**Returns:** `object`

___
<a id="hostsapifp"></a>

### `<Const>` HostsApiFp

▸ **HostsApiFp**(configuration?: *[Configuration](classes/configuration.md)*): `object`

*Defined in api.ts:1219*

HostsApi - functional programming interface

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` configuration | [Configuration](classes/configuration.md) |

**Returns:** `object`

___

## Object literals

<a id="collection_formats"></a>

### `<Const>` COLLECTION_FORMATS

**COLLECTION_FORMATS**: *`object`*

*Defined in api.ts:26*

*__export__*: 

<a id="collection_formats.csv"></a>

####  csv

**● csv**: *`string`* = ","

*Defined in api.ts:27*

___
<a id="collection_formats.pipes"></a>

####  pipes

**● pipes**: *`string`* = "|"

*Defined in api.ts:30*

___
<a id="collection_formats.ssv"></a>

####  ssv

**● ssv**: *`string`* = " "

*Defined in api.ts:28*

___
<a id="collection_formats.tsv"></a>

####  tsv

**● tsv**: *`string`* = "	"

*Defined in api.ts:29*

___

___

