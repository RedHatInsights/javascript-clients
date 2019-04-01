[@redhat-cloud-services/entitlements-client](../README.md) > [ServicesApi](../classes/servicesapi.md)

# Class: ServicesApi

ServicesApi - object-oriented interface

*__export__*: 

*__class__*: ServicesApi

*__extends__*: {BaseAPI}

## Hierarchy

 [BaseAPI](baseapi.md)

**↳ ServicesApi**

## Index

### Constructors

* [constructor](servicesapi.md#constructor)

### Properties

* [axios](servicesapi.md#axios)
* [basePath](servicesapi.md#basepath)
* [configuration](servicesapi.md#configuration)

### Methods

* [servicesGet](servicesapi.md#servicesget)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new ServicesApi**(configuration?: *[Configuration](configuration.md)*, basePath?: *`string`*, axios?: *`AxiosInstance`*): [ServicesApi](servicesapi.md)

*Inherited from [BaseAPI](baseapi.md).[constructor](baseapi.md#constructor)*

*Defined in api.ts:49*

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| `Optional` configuration | [Configuration](configuration.md) | - |
| `Default value` basePath | `string` |  BASE_PATH |
| `Default value` axios | `AxiosInstance` |  globalAxios |

**Returns:** [ServicesApi](servicesapi.md)

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

<a id="servicesget"></a>

###  servicesGet

▸ **servicesGet**(options?: *`any`*): `AxiosPromise`<`object`>

*Defined in api.ts:177*

*__summary__*: get a list of services a user is entitled to

*__throws__*: {RequiredError}

*__memberof__*: ServicesApi

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<`object`>

___

