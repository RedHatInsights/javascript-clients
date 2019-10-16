[@redhat-cloud-services/cost-management-client](../README.md) > [StatusApi](../classes/statusapi.md)

# Class: StatusApi

StatusApi - object-oriented interface

*__export__*: 

*__class__*: StatusApi

*__extends__*: {BaseAPI}

## Hierarchy

 [BaseAPI](baseapi.md)

**↳ StatusApi**

## Index

### Constructors

* [constructor](statusapi.md#constructor)

### Properties

* [axios](statusapi.md#axios)
* [basePath](statusapi.md#basepath)
* [configuration](statusapi.md#configuration)

### Methods

* [statusList](statusapi.md#statuslist)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new StatusApi**(configuration?: *[Configuration](configuration.md)*, basePath?: *`string`*, axios?: *`AxiosInstance`*): [StatusApi](statusapi.md)

*Inherited from [BaseAPI](baseapi.md).[constructor](baseapi.md#constructor)*

*Defined in api.ts:49*

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| `Optional` configuration | [Configuration](configuration.md) | - |
| `Default value` basePath | `string` |  BASE_PATH |
| `Default value` axios | `AxiosInstance` |  globalAxios |

**Returns:** [StatusApi](statusapi.md)

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

<a id="statuslist"></a>

###  statusList

▸ **statusList**(options?: *`any`*): `AxiosPromise`<[StatusResponse](../interfaces/statusresponse.md)>

*Defined in api.ts:795*

Packages response for class-based view.

*__throws__*: {RequiredError}

*__memberof__*: StatusApi

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[StatusResponse](../interfaces/statusresponse.md)>

___

