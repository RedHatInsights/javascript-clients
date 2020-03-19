[@redhat-cloud-services/cost-management-client](../README.md) › [Globals](../globals.md) › [ProvidersApi](providersapi.md)

# Class: ProvidersApi

ProvidersApi - object-oriented interface

**`export`** 

**`class`** ProvidersApi

**`extends`** {BaseAPI}

## Hierarchy

* [BaseAPI](baseapi.md)

  ↳ **ProvidersApi**

## Index

### Constructors

* [constructor](providersapi.md#constructor)

### Properties

* [axios](providersapi.md#protected-axios)
* [basePath](providersapi.md#protected-basepath)
* [configuration](providersapi.md#protected-configuration)

### Methods

* [createProvider](providersapi.md#createprovider)
* [deleteProvider](providersapi.md#deleteprovider)
* [getProvider](providersapi.md#getprovider)
* [listProviders](providersapi.md#listproviders)
* [updateProvider](providersapi.md#updateprovider)

## Constructors

###  constructor

\+ **new ProvidersApi**(`configuration?`: [Configuration](configuration.md), `basePath`: string, `axios`: AxiosInstance): *[ProvidersApi](providersapi.md)*

*Inherited from [BaseAPI](baseapi.md).[constructor](baseapi.md#constructor)*

*Defined in [api.ts:49](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/cost-management/api.ts#L49)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`configuration?` | [Configuration](configuration.md) | - |
`basePath` | string |  BASE_PATH |
`axios` | AxiosInstance |  globalAxios |

**Returns:** *[ProvidersApi](providersapi.md)*

## Properties

### `Protected` axios

• **axios**: *AxiosInstance*

*Inherited from [BaseAPI](baseapi.md).[axios](baseapi.md#protected-axios)*

*Defined in [api.ts:51](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/cost-management/api.ts#L51)*

___

### `Protected` basePath

• **basePath**: *string*

*Inherited from [BaseAPI](baseapi.md).[basePath](baseapi.md#protected-basepath)*

*Defined in [api.ts:51](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/cost-management/api.ts#L51)*

___

### `Protected` configuration

• **configuration**: *[Configuration](configuration.md) | undefined*

*Inherited from [BaseAPI](baseapi.md).[configuration](baseapi.md#protected-configuration)*

*Defined in [api.ts:49](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/cost-management/api.ts#L49)*

## Methods

###  createProvider

▸ **createProvider**(`providerIn`: [ProviderIn](../interfaces/providerin.md), `options?`: any): *AxiosPromise‹[ProviderOut](../interfaces/providerout.md)›*

*Defined in [api.ts:5745](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/cost-management/api.ts#L5745)*

**`summary`** Create a provider

**`throws`** {RequiredError}

**`memberof`** ProvidersApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`providerIn` | [ProviderIn](../interfaces/providerin.md) | Provider to add to a Customer |
`options?` | any | - |

**Returns:** *AxiosPromise‹[ProviderOut](../interfaces/providerout.md)›*

___

###  deleteProvider

▸ **deleteProvider**(`uuid`: string, `options?`: any): *AxiosPromise‹Response›*

*Defined in [api.ts:5757](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/cost-management/api.ts#L5757)*

**`summary`** Delete a provider

**`throws`** {RequiredError}

**`memberof`** ProvidersApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`uuid` | string | ID of provider to delete |
`options?` | any | - |

**Returns:** *AxiosPromise‹Response›*

___

###  getProvider

▸ **getProvider**(`uuid`: string, `stats?`: "true" | "false", `options?`: any): *AxiosPromise‹[ProviderOut](../interfaces/providerout.md)›*

*Defined in [api.ts:5770](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/cost-management/api.ts#L5770)*

**`summary`** Get a provider

**`throws`** {RequiredError}

**`memberof`** ProvidersApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`uuid` | string | ID of provider to get |
`stats?` | "true" &#124; "false" | - |
`options?` | any | - |

**Returns:** *AxiosPromise‹[ProviderOut](../interfaces/providerout.md)›*

___

###  listProviders

▸ **listProviders**(`type?`: string, `name?`: string, `stats?`: "true" | "false", `offset?`: number, `limit?`: number, `options?`: any): *AxiosPromise‹[ProviderPagination](../interfaces/providerpagination.md)›*

*Defined in [api.ts:5786](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/cost-management/api.ts#L5786)*

**`summary`** List the providers

**`throws`** {RequiredError}

**`memberof`** ProvidersApi

**Parameters:**

Name | Type |
------ | ------ |
`type?` | string |
`name?` | string |
`stats?` | "true" &#124; "false" |
`offset?` | number |
`limit?` | number |
`options?` | any |

**Returns:** *AxiosPromise‹[ProviderPagination](../interfaces/providerpagination.md)›*

___

###  updateProvider

▸ **updateProvider**(`uuid`: string, `providerIn`: [ProviderIn](../interfaces/providerin.md), `options?`: any): *AxiosPromise‹[ProviderOut](../interfaces/providerout.md)›*

*Defined in [api.ts:5799](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/cost-management/api.ts#L5799)*

**`summary`** Update a provider

**`throws`** {RequiredError}

**`memberof`** ProvidersApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`uuid` | string | ID of provider to update |
`providerIn` | [ProviderIn](../interfaces/providerin.md) | - |
`options?` | any | - |

**Returns:** *AxiosPromise‹[ProviderOut](../interfaces/providerout.md)›*
