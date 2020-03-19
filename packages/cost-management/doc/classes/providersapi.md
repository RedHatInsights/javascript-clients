[@redhat-cloud-services/cost-management-client](../README.md) > [ProvidersApi](../classes/providersapi.md)

# Class: ProvidersApi

ProvidersApi - object-oriented interface

*__export__*: 

*__class__*: ProvidersApi

*__extends__*: {BaseAPI}

## Hierarchy

 [BaseAPI](baseapi.md)

**↳ ProvidersApi**

## Index

### Constructors

* [constructor](providersapi.md#constructor)

### Properties

* [axios](providersapi.md#axios)
* [basePath](providersapi.md#basepath)
* [configuration](providersapi.md#configuration)

### Methods

* [createProvider](providersapi.md#createprovider)
* [deleteProvider](providersapi.md#deleteprovider)
* [getProvider](providersapi.md#getprovider)
* [listProviders](providersapi.md#listproviders)
* [updateProvider](providersapi.md#updateprovider)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new ProvidersApi**(configuration?: *[Configuration](configuration.md)*, basePath?: *`string`*, axios?: *`AxiosInstance`*): [ProvidersApi](providersapi.md)

*Inherited from [BaseAPI](baseapi.md).[constructor](baseapi.md#constructor)*

*Defined in [api.ts:49](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/cost-management/api.ts#L49)*

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| `Optional` configuration | [Configuration](configuration.md) | - |
| `Default value` basePath | `string` |  BASE_PATH |
| `Default value` axios | `AxiosInstance` |  globalAxios |

**Returns:** [ProvidersApi](providersapi.md)

___

## Properties

<a id="axios"></a>

### `<Protected>` axios

**● axios**: *`AxiosInstance`*

*Inherited from [BaseAPI](baseapi.md).[axios](baseapi.md#axios)*

*Defined in [api.ts:51](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/cost-management/api.ts#L51)*

___
<a id="basepath"></a>

### `<Protected>` basePath

**● basePath**: *`string`*

*Inherited from [BaseAPI](baseapi.md).[basePath](baseapi.md#basepath)*

*Defined in [api.ts:51](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/cost-management/api.ts#L51)*

___
<a id="configuration"></a>

### `<Protected>` configuration

**● configuration**: *[Configuration](configuration.md) \| `undefined`*

*Inherited from [BaseAPI](baseapi.md).[configuration](baseapi.md#configuration)*

*Defined in [api.ts:49](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/cost-management/api.ts#L49)*

___

## Methods

<a id="createprovider"></a>

###  createProvider

▸ **createProvider**(providerIn: *[ProviderIn](../interfaces/providerin.md)*, options?: *`any`*): `AxiosPromise`<[ProviderOut](../interfaces/providerout.md)>

*Defined in [api.ts:5745](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/cost-management/api.ts#L5745)*

*__summary__*: Create a provider

*__throws__*: {RequiredError}

*__memberof__*: ProvidersApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| providerIn | [ProviderIn](../interfaces/providerin.md) |  Provider to add to a Customer |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[ProviderOut](../interfaces/providerout.md)>

___
<a id="deleteprovider"></a>

###  deleteProvider

▸ **deleteProvider**(uuid: *`string`*, options?: *`any`*): `AxiosPromise`<`Response`>

*Defined in [api.ts:5757](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/cost-management/api.ts#L5757)*

*__summary__*: Delete a provider

*__throws__*: {RequiredError}

*__memberof__*: ProvidersApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| uuid | `string` |  ID of provider to delete |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<`Response`>

___
<a id="getprovider"></a>

###  getProvider

▸ **getProvider**(uuid: *`string`*, stats?: *"true" \| "false"*, options?: *`any`*): `AxiosPromise`<[ProviderOut](../interfaces/providerout.md)>

*Defined in [api.ts:5770](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/cost-management/api.ts#L5770)*

*__summary__*: Get a provider

*__throws__*: {RequiredError}

*__memberof__*: ProvidersApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| uuid | `string` |  ID of provider to get |
| `Optional` stats | "true" \| "false" |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[ProviderOut](../interfaces/providerout.md)>

___
<a id="listproviders"></a>

###  listProviders

▸ **listProviders**(type?: *`string`*, name?: *`string`*, stats?: *"true" \| "false"*, offset?: *`number`*, limit?: *`number`*, options?: *`any`*): `AxiosPromise`<[ProviderPagination](../interfaces/providerpagination.md)>

*Defined in [api.ts:5786](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/cost-management/api.ts#L5786)*

*__summary__*: List the providers

*__throws__*: {RequiredError}

*__memberof__*: ProvidersApi

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` type | `string` |
| `Optional` name | `string` |
| `Optional` stats | "true" \| "false" |
| `Optional` offset | `number` |
| `Optional` limit | `number` |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[ProviderPagination](../interfaces/providerpagination.md)>

___
<a id="updateprovider"></a>

###  updateProvider

▸ **updateProvider**(uuid: *`string`*, providerIn: *[ProviderIn](../interfaces/providerin.md)*, options?: *`any`*): `AxiosPromise`<[ProviderOut](../interfaces/providerout.md)>

*Defined in [api.ts:5799](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/cost-management/api.ts#L5799)*

*__summary__*: Update a provider

*__throws__*: {RequiredError}

*__memberof__*: ProvidersApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| uuid | `string` |  ID of provider to update |
| providerIn | [ProviderIn](../interfaces/providerin.md) |  \- |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[ProviderOut](../interfaces/providerout.md)>

___

