[@redhat-cloud-services/rbac-client](../README.md) > [AccessApi](../classes/accessapi.md)

# Class: AccessApi

AccessApi - object-oriented interface

*__export__*: 

*__class__*: AccessApi

*__extends__*: {BaseAPI}

## Hierarchy

 [BaseAPI](baseapi.md)

**↳ AccessApi**

## Index

### Constructors

* [constructor](accessapi.md#constructor)

### Properties

* [axios](accessapi.md#axios)
* [basePath](accessapi.md#basepath)
* [configuration](accessapi.md#configuration)

### Methods

* [getPrincipalAccess](accessapi.md#getprincipalaccess)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new AccessApi**(configuration?: *[Configuration](configuration.md)*, basePath?: *`string`*, axios?: *`AxiosInstance`*): [AccessApi](accessapi.md)

*Inherited from [BaseAPI](baseapi.md).[constructor](baseapi.md#constructor)*

*Defined in api.ts:49*

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| `Optional` configuration | [Configuration](configuration.md) | - |
| `Default value` basePath | `string` |  BASE_PATH |
| `Default value` axios | `AxiosInstance` |  globalAxios |

**Returns:** [AccessApi](accessapi.md)

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

<a id="getprincipalaccess"></a>

###  getPrincipalAccess

▸ **getPrincipalAccess**(application: *`string`*, username?: *`string`*, limit?: *`number`*, offset?: *`number`*, options?: *`any`*): `AxiosPromise`<[AccessPagination](../interfaces/accesspagination.md)>

*Defined in api.ts:1010*

*__summary__*: Get the permitted access for a principal in the tenant

*__throws__*: {RequiredError}

*__memberof__*: AccessApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| application | `string` |  The application name to obtain access for the principal |
| `Optional` username | `string` |
| `Optional` limit | `number` |
| `Optional` offset | `number` |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[AccessPagination](../interfaces/accesspagination.md)>

___

