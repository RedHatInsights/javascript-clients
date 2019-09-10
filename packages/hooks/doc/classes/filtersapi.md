[@redhat-cloud-services/notifications-client](../README.md) > [FiltersApi](../classes/filtersapi.md)

# Class: FiltersApi

FiltersApi - object-oriented interface

*__export__*: 

*__class__*: FiltersApi

*__extends__*: {BaseAPI}

## Hierarchy

 [BaseAPI](baseapi.md)

**↳ FiltersApi**

## Index

### Constructors

* [constructor](filtersapi.md#constructor)

### Properties

* [axios](filtersapi.md#axios)
* [basePath](filtersapi.md#basepath)
* [configuration](filtersapi.md#configuration)

### Methods

* [filtersShow](filtersapi.md#filtersshow)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new FiltersApi**(configuration?: *[Configuration](configuration.md)*, basePath?: *`string`*, axios?: *`AxiosInstance`*): [FiltersApi](filtersapi.md)

*Inherited from [BaseAPI](baseapi.md).[constructor](baseapi.md#constructor)*

*Defined in [api.ts:49](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/hooks/api.ts#L49)*

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| `Optional` configuration | [Configuration](configuration.md) | - |
| `Default value` basePath | `string` |  BASE_PATH |
| `Default value` axios | `AxiosInstance` |  globalAxios |

**Returns:** [FiltersApi](filtersapi.md)

___

## Properties

<a id="axios"></a>

### `<Protected>` axios

**● axios**: *`AxiosInstance`*

*Inherited from [BaseAPI](baseapi.md).[axios](baseapi.md#axios)*

*Defined in [api.ts:51](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/hooks/api.ts#L51)*

___
<a id="basepath"></a>

### `<Protected>` basePath

**● basePath**: *`string`*

*Inherited from [BaseAPI](baseapi.md).[basePath](baseapi.md#basepath)*

*Defined in [api.ts:51](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/hooks/api.ts#L51)*

___
<a id="configuration"></a>

### `<Protected>` configuration

**● configuration**: *[Configuration](configuration.md) \| `undefined`*

*Inherited from [BaseAPI](baseapi.md).[configuration](baseapi.md#configuration)*

*Defined in [api.ts:49](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/hooks/api.ts#L49)*

___

## Methods

<a id="filtersshow"></a>

###  filtersShow

▸ **filtersShow**(X_RH_IDENTITY: *`string`*, endpointId: *`number`*, options?: *`any`*): `AxiosPromise`<[InlineResponse2004](../interfaces/inlineresponse2004.md)>

*Defined in [api.ts:1918](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/hooks/api.ts#L1918)*

Show the filter of the endpoint

*__throws__*: {RequiredError}

*__memberof__*: FiltersApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| X_RH_IDENTITY | `string` |  \- |
| endpointId | `number` |  \- |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[InlineResponse2004](../interfaces/inlineresponse2004.md)>

___

