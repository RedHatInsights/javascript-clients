[@redhat-cloud-services/cost-management-client](../README.md) > [DownloadApi](../classes/downloadapi.md)

# Class: DownloadApi

DownloadApi - object-oriented interface

*__export__*: 

*__class__*: DownloadApi

*__extends__*: {BaseAPI}

## Hierarchy

 [BaseAPI](baseapi.md)

**↳ DownloadApi**

## Index

### Constructors

* [constructor](downloadapi.md#constructor)

### Properties

* [axios](downloadapi.md#axios)
* [basePath](downloadapi.md#basepath)
* [configuration](downloadapi.md#configuration)

### Methods

* [getDownload](downloadapi.md#getdownload)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new DownloadApi**(configuration?: *[Configuration](configuration.md)*, basePath?: *`string`*, axios?: *`AxiosInstance`*): [DownloadApi](downloadapi.md)

*Inherited from [BaseAPI](baseapi.md).[constructor](baseapi.md#constructor)*

*Defined in api.ts:49*

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| `Optional` configuration | [Configuration](configuration.md) | - |
| `Default value` basePath | `string` |  BASE_PATH |
| `Default value` axios | `AxiosInstance` |  globalAxios |

**Returns:** [DownloadApi](downloadapi.md)

___

## Properties

<a id="axios"></a>

### `<Protected>` axios

**● axios**: *`AxiosInstance`*

*Inherited from [BaseAPI](baseapi.md).[axios](baseapi.md#axios)*

*Defined in api.ts:51*

___
<a id="basepath"></a>

### `<Protected>` basePath

**● basePath**: *`string`*

*Inherited from [BaseAPI](baseapi.md).[basePath](baseapi.md#basepath)*

*Defined in api.ts:51*

___
<a id="configuration"></a>

### `<Protected>` configuration

**● configuration**: *[Configuration](configuration.md) \| `undefined`*

*Inherited from [BaseAPI](baseapi.md).[configuration](baseapi.md#configuration)*

*Defined in api.ts:49*

___

## Methods

<a id="getdownload"></a>

###  getDownload

▸ **getDownload**(options?: *`any`*): `AxiosPromise`<[DownloadGetResponse](../interfaces/downloadgetresponse.md)>

*Defined in api.ts:315*

Return download file async task ID.

*__summary__*: Download reports

*__throws__*: {RequiredError}

*__memberof__*: DownloadApi

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[DownloadGetResponse](../interfaces/downloadgetresponse.md)>

___

