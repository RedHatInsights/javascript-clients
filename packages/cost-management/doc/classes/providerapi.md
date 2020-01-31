[@redhat-cloud-services/cost-management-client](../README.md) > [ProviderApi](../classes/providerapi.md)

# Class: ProviderApi

ProviderApi - object-oriented interface

*__export__*: 

*__class__*: ProviderApi

*__extends__*: {BaseAPI}

## Hierarchy

 [BaseAPI](baseapi.md)

**↳ ProviderApi**

## Index

### Constructors

* [constructor](providerapi.md#constructor)

### Properties

* [axios](providerapi.md#axios)
* [basePath](providerapi.md#basepath)
* [configuration](providerapi.md#configuration)

### Methods

* [createProvider](providerapi.md#createprovider)
* [deleteProvider](providerapi.md#deleteprovider)
* [getProvider](providerapi.md#getprovider)
* [listProviders](providerapi.md#listproviders)
* [updateProvider](providerapi.md#updateprovider)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new ProviderApi**(configuration?: *[Configuration](configuration.md)*, basePath?: *`string`*, axios?: *`AxiosInstance`*): [ProviderApi](providerapi.md)

*Inherited from [BaseAPI](baseapi.md).[constructor](baseapi.md#constructor)*

*Defined in [api.ts:49](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/cost-management/api.ts#L49)*

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| `Optional` configuration | [Configuration](configuration.md) | - |
| `Default value` basePath | `string` |  BASE_PATH |
| `Default value` axios | `AxiosInstance` |  globalAxios |

**Returns:** [ProviderApi](providerapi.md)

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

*Defined in [api.ts:6363](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/cost-management/api.ts#L6363)*

*__summary__*: Create a provider

*__throws__*: {RequiredError}

*__memberof__*: ProviderApi

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

*Defined in [api.ts:6375](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/cost-management/api.ts#L6375)*

*__summary__*: Delete a provider

*__throws__*: {RequiredError}

*__memberof__*: ProviderApi

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

*Defined in [api.ts:6388](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/cost-management/api.ts#L6388)*

*__summary__*: Get a provider

*__throws__*: {RequiredError}

*__memberof__*: ProviderApi

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

*Defined in [api.ts:6404](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/cost-management/api.ts#L6404)*

*__summary__*: List the providers

*__throws__*: {RequiredError}

*__memberof__*: ProviderApi

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

*Defined in [api.ts:6417](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/cost-management/api.ts#L6417)*

*__summary__*: Update a provider

*__throws__*: {RequiredError}

*__memberof__*: ProviderApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| uuid | `string` |  ID of provider to update |
| providerIn | [ProviderIn](../interfaces/providerin.md) |  \- |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[ProviderOut](../interfaces/providerout.md)>

___

