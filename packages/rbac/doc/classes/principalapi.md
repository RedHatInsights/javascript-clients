[@redhat-cloud-services/rbac-client](../README.md) > [PrincipalApi](../classes/principalapi.md)

# Class: PrincipalApi

PrincipalApi - object-oriented interface

*__export__*: 

*__class__*: PrincipalApi

*__extends__*: {BaseAPI}

## Hierarchy

 [BaseAPI](baseapi.md)

**↳ PrincipalApi**

## Index

### Constructors

* [constructor](principalapi.md#constructor)

### Properties

* [axios](principalapi.md#axios)
* [basePath](principalapi.md#basepath)
* [configuration](principalapi.md#configuration)

### Methods

* [getPrincipal](principalapi.md#getprincipal)
* [listPrincipals](principalapi.md#listprincipals)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new PrincipalApi**(configuration?: *[Configuration](configuration.md)*, basePath?: *`string`*, axios?: *`AxiosInstance`*): [PrincipalApi](principalapi.md)

*Inherited from [BaseAPI](baseapi.md).[constructor](baseapi.md#constructor)*

*Defined in api.ts:49*

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| `Optional` configuration | [Configuration](configuration.md) | - |
| `Default value` basePath | `string` |  BASE_PATH |
| `Default value` axios | `AxiosInstance` |  globalAxios |

**Returns:** [PrincipalApi](principalapi.md)

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

<a id="getprincipal"></a>

###  getPrincipal

▸ **getPrincipal**(username: *`string`*, options?: *`any`*): `AxiosPromise`<[Principal](../interfaces/principal.md)>

*Defined in api.ts:2270*

*__summary__*: Get a principal in the tenant

*__throws__*: {RequiredError}

*__memberof__*: PrincipalApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| username | `string` |  Username of principal to get |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[Principal](../interfaces/principal.md)>

___
<a id="listprincipals"></a>

###  listPrincipals

▸ **listPrincipals**(limit?: *`number`*, offset?: *`number`*, options?: *`any`*): `AxiosPromise`<[PrincipalPagination](../interfaces/principalpagination.md)>

*Defined in api.ts:2283*

*__summary__*: List the principals for a tenant

*__throws__*: {RequiredError}

*__memberof__*: PrincipalApi

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` limit | `number` |
| `Optional` offset | `number` |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[PrincipalPagination](../interfaces/principalpagination.md)>

___

