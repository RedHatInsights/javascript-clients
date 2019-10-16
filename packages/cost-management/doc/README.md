
Javascript client for Cost Management API
=========================================

This is a client library for [RedHatInsights/Cost Management](https://github.com/project-koku).

Install
-------

NPM

```bash
npm install --save @redhat-cloud-services/cost-management-client
```

Or Yarn

```bash
yarn add @redhat-cloud-services/cost-management-client
```

### Usage

This client is using typescript and axios. Types are distributed with this package, so no need to define or install them separately.

```js
import { DownloadApi } from '@redhat-cloud-services/cost-management-client';

const api = new DownloadApi();
const costManagement = await api.getDownload();
```

API documentation
-----------------

*   [README](doc/README.md)

## Index

### Classes

* [BaseAPI](classes/baseapi.md)
* [Configuration](classes/configuration.md)
* [DownloadApi](classes/downloadapi.md)
* [ExpiredDataApi](classes/expireddataapi.md)
* [ReportDataApi](classes/reportdataapi.md)
* [RequiredError](classes/requirederror.md)
* [StatusApi](classes/statusapi.md)
* [UpdateChargeApi](classes/updatechargeapi.md)

### Interfaces

* [ConfigurationParameters](interfaces/configurationparameters.md)
* [DatabaseConnection](interfaces/databaseconnection.md)
* [DownloadGetResponse](interfaces/downloadgetresponse.md)
* [ExpiredDataDeleteResponse](interfaces/expireddatadeleteresponse.md)
* [ExpiredDataGetResponse](interfaces/expireddatagetresponse.md)
* [ReportDataGetResponse](interfaces/reportdatagetresponse.md)
* [RequestArgs](interfaces/requestargs.md)
* [StatusResponse](interfaces/statusresponse.md)
* [UpdateChargeGetResponse](interfaces/updatechargegetresponse.md)

### Variables

* [BASE_PATH](#base_path)

### Functions

- [Javascript client for Cost Management API](#javascript-client-for-cost-management-api)
  - [Install](#install)
    - [Usage](#usage)
  - [API documentation](#api-documentation)
  - [Index](#index)
    - [Classes](#classes)
    - [Interfaces](#interfaces)
    - [Variables](#variables)
    - [Functions](#functions)
    - [Object literals](#object-literals)
  - [Variables](#variables-1)
    - [`<Const>` BASE_PATH](#const-basepath)
  - [Functions](#functions-1)
    - [`<Const>` DownloadApiAxiosParamCreator](#const-downloadapiaxiosparamcreator)
    - [`<Const>` DownloadApiFactory](#const-downloadapifactory)
    - [`<Const>` DownloadApiFp](#const-downloadapifp)
    - [`<Const>` ExpiredDataApiAxiosParamCreator](#const-expireddataapiaxiosparamcreator)
    - [`<Const>` ExpiredDataApiFactory](#const-expireddataapifactory)
    - [`<Const>` ExpiredDataApiFp](#const-expireddataapifp)
    - [`<Const>` ReportDataApiAxiosParamCreator](#const-reportdataapiaxiosparamcreator)
    - [`<Const>` ReportDataApiFactory](#const-reportdataapifactory)
    - [`<Const>` ReportDataApiFp](#const-reportdataapifp)
    - [`<Const>` StatusApiAxiosParamCreator](#const-statusapiaxiosparamcreator)
    - [`<Const>` StatusApiFactory](#const-statusapifactory)
    - [`<Const>` StatusApiFp](#const-statusapifp)
    - [`<Const>` UpdateChargeApiAxiosParamCreator](#const-updatechargeapiaxiosparamcreator)
    - [`<Const>` UpdateChargeApiFactory](#const-updatechargeapifactory)
    - [`<Const>` UpdateChargeApiFp](#const-updatechargeapifp)
  - [Object literals](#object-literals-1)
    - [`<Const>` COLLECTION_FORMATS](#const-collectionformats)
      - [csv](#csv)
      - [pipes](#pipes)
      - [ssv](#ssv)
      - [tsv](#tsv)

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

<a id="downloadapiaxiosparamcreator"></a>

### `<Const>` DownloadApiAxiosParamCreator

▸ **DownloadApiAxiosParamCreator**(configuration?: *[Configuration](classes/configuration.md)*): `object`

*Defined in api.ts:229*

DownloadApi - axios parameter creator

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` configuration | [Configuration](classes/configuration.md) |

**Returns:** `object`

___
<a id="downloadapifactory"></a>

### `<Const>` DownloadApiFactory

▸ **DownloadApiFactory**(configuration?: *[Configuration](classes/configuration.md)*, basePath?: *`string`*, axios?: *`AxiosInstance`*): `object`

*Defined in api.ts:287*

DownloadApi - factory interface

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` configuration | [Configuration](classes/configuration.md) |
| `Optional` basePath | `string` |
| `Optional` axios | `AxiosInstance` |

**Returns:** `object`

___
<a id="downloadapifp"></a>

### `<Const>` DownloadApiFp

▸ **DownloadApiFp**(configuration?: *[Configuration](classes/configuration.md)*): `object`

*Defined in api.ts:265*

DownloadApi - functional programming interface

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` configuration | [Configuration](classes/configuration.md) |

**Returns:** `object`

___
<a id="expireddataapiaxiosparamcreator"></a>

### `<Const>` ExpiredDataApiAxiosParamCreator

▸ **ExpiredDataApiAxiosParamCreator**(configuration?: *[Configuration](classes/configuration.md)*): `object`

*Defined in api.ts:325*

ExpiredDataApi - axios parameter creator

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` configuration | [Configuration](classes/configuration.md) |

**Returns:** `object`

___
<a id="expireddataapifactory"></a>

### `<Const>` ExpiredDataApiFactory

▸ **ExpiredDataApiFactory**(configuration?: *[Configuration](classes/configuration.md)*, basePath?: *`string`*, axios?: *`AxiosInstance`*): `object`

*Defined in api.ts:419*

ExpiredDataApi - factory interface

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` configuration | [Configuration](classes/configuration.md) |
| `Optional` basePath | `string` |
| `Optional` axios | `AxiosInstance` |

**Returns:** `object`

___
<a id="expireddataapifp"></a>

### `<Const>` ExpiredDataApiFp

▸ **ExpiredDataApiFp**(configuration?: *[Configuration](classes/configuration.md)*): `object`

*Defined in api.ts:386*

ExpiredDataApi - functional programming interface

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` configuration | [Configuration](classes/configuration.md) |

**Returns:** `object`

___
<a id="reportdataapiaxiosparamcreator"></a>

### `<Const>` ReportDataApiAxiosParamCreator

▸ **ReportDataApiAxiosParamCreator**(configuration?: *[Configuration](classes/configuration.md)*): `object`

*Defined in api.ts:473*

ReportDataApi - axios parameter creator

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` configuration | [Configuration](classes/configuration.md) |

**Returns:** `object`

___
<a id="reportdataapifactory"></a>

### `<Const>` ReportDataApiFactory

▸ **ReportDataApiFactory**(configuration?: *[Configuration](classes/configuration.md)*, basePath?: *`string`*, axios?: *`AxiosInstance`*): `object`

*Defined in api.ts:639*

ReportDataApi - factory interface

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` configuration | [Configuration](classes/configuration.md) |
| `Optional` basePath | `string` |
| `Optional` axios | `AxiosInstance` |

**Returns:** `object`

___
<a id="reportdataapifp"></a>

### `<Const>` ReportDataApiFp

▸ **ReportDataApiFp**(configuration?: *[Configuration](classes/configuration.md)*): `object`

*Defined in api.ts:596*

ReportDataApi - functional programming interface

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` configuration | [Configuration](classes/configuration.md) |

**Returns:** `object`

___
<a id="statusapiaxiosparamcreator"></a>

### `<Const>` StatusApiAxiosParamCreator

▸ **StatusApiAxiosParamCreator**(configuration?: *[Configuration](classes/configuration.md)*): `object`

*Defined in api.ts:713*

StatusApi - axios parameter creator

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` configuration | [Configuration](classes/configuration.md) |

**Returns:** `object`

___
<a id="statusapifactory"></a>

### `<Const>` StatusApiFactory

▸ **StatusApiFactory**(configuration?: *[Configuration](classes/configuration.md)*, basePath?: *`string`*, axios?: *`AxiosInstance`*): `object`

*Defined in api.ts:769*

StatusApi - factory interface

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` configuration | [Configuration](classes/configuration.md) |
| `Optional` basePath | `string` |
| `Optional` axios | `AxiosInstance` |

**Returns:** `object`

___
<a id="statusapifp"></a>

### `<Const>` StatusApiFp

▸ **StatusApiFp**(configuration?: *[Configuration](classes/configuration.md)*): `object`

*Defined in api.ts:748*

StatusApi - functional programming interface

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` configuration | [Configuration](classes/configuration.md) |

**Returns:** `object`

___
<a id="updatechargeapiaxiosparamcreator"></a>

### `<Const>` UpdateChargeApiAxiosParamCreator

▸ **UpdateChargeApiAxiosParamCreator**(configuration?: *[Configuration](classes/configuration.md)*): `object`

*Defined in api.ts:805*

UpdateChargeApi - axios parameter creator

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` configuration | [Configuration](classes/configuration.md) |

**Returns:** `object`

___
<a id="updatechargeapifactory"></a>

### `<Const>` UpdateChargeApiFactory

▸ **UpdateChargeApiFactory**(configuration?: *[Configuration](classes/configuration.md)*, basePath?: *`string`*, axios?: *`AxiosInstance`*): `object`

*Defined in api.ts:873*

UpdateChargeApi - factory interface

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` configuration | [Configuration](classes/configuration.md) |
| `Optional` basePath | `string` |
| `Optional` axios | `AxiosInstance` |

**Returns:** `object`

___
<a id="updatechargeapifp"></a>

### `<Const>` UpdateChargeApiFp

▸ **UpdateChargeApiFp**(configuration?: *[Configuration](classes/configuration.md)*): `object`

*Defined in api.ts:850*

UpdateChargeApi - functional programming interface

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

