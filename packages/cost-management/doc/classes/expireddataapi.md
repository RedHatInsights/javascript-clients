[@redhat-cloud-services/cost-management-client](../README.md) > [ExpiredDataApi](../classes/expireddataapi.md)

# Class: ExpiredDataApi

ExpiredDataApi - object-oriented interface

*__export__*: 

*__class__*: ExpiredDataApi

*__extends__*: {BaseAPI}

## Hierarchy

 [BaseAPI](baseapi.md)

**↳ ExpiredDataApi**

## Index

### Constructors

* [constructor](expireddataapi.md#constructor)

### Properties

* [axios](expireddataapi.md#axios)
* [basePath](expireddataapi.md#basepath)
* [configuration](expireddataapi.md#configuration)

### Methods

* [deleteExpiredData](expireddataapi.md#deleteexpireddata)
* [getExpiredData](expireddataapi.md#getexpireddata)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new ExpiredDataApi**(configuration?: *[Configuration](configuration.md)*, basePath?: *`string`*, axios?: *`AxiosInstance`*): [ExpiredDataApi](expireddataapi.md)

*Inherited from [BaseAPI](baseapi.md).[constructor](baseapi.md#constructor)*

*Defined in api.ts:49*

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| `Optional` configuration | [Configuration](configuration.md) | - |
| `Default value` basePath | `string` |  BASE_PATH |
| `Default value` axios | `AxiosInstance` |  globalAxios |

**Returns:** [ExpiredDataApi](expireddataapi.md)

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

<a id="deleteexpireddata"></a>

###  deleteExpiredData

▸ **deleteExpiredData**(options?: *`any`*): `AxiosPromise`<[ExpiredDataDeleteResponse](../interfaces/expireddatadeleteresponse.md)>

*Defined in api.ts:453*

Return expired data.

*__throws__*: {RequiredError}

*__memberof__*: ExpiredDataApi

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[ExpiredDataDeleteResponse](../interfaces/expireddatadeleteresponse.md)>

___
<a id="getexpireddata"></a>

###  getExpiredData

▸ **getExpiredData**(options?: *`any`*): `AxiosPromise`<[ExpiredDataGetResponse](../interfaces/expireddatagetresponse.md)>

*Defined in api.ts:463*

Return simulated expired data.

*__throws__*: {RequiredError}

*__memberof__*: ExpiredDataApi

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[ExpiredDataGetResponse](../interfaces/expireddatagetresponse.md)>

___

