[@redhat-cloud-services/insights-client](../README.md) > [TotalRiskApi](../classes/totalriskapi.md)

# Class: TotalRiskApi

TotalRiskApi - object-oriented interface

*__export__*: 

*__class__*: TotalRiskApi

*__extends__*: {BaseAPI}

## Hierarchy

 [BaseAPI](baseapi.md)

**↳ TotalRiskApi**

## Index

### Constructors

* [constructor](totalriskapi.md#constructor)

### Properties

* [axios](totalriskapi.md#axios)
* [basePath](totalriskapi.md#basepath)
* [configuration](totalriskapi.md#configuration)

### Methods

* [totalRiskList](totalriskapi.md#totalrisklist)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new TotalRiskApi**(configuration?: *[Configuration](configuration.md)*, basePath?: *`string`*, axios?: *`AxiosInstance`*): [TotalRiskApi](totalriskapi.md)

*Inherited from [BaseAPI](baseapi.md).[constructor](baseapi.md#constructor)*

*Defined in [api.ts:49](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L49)*

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| `Optional` configuration | [Configuration](configuration.md) | - |
| `Default value` basePath | `string` |  BASE_PATH |
| `Default value` axios | `AxiosInstance` |  globalAxios |

**Returns:** [TotalRiskApi](totalriskapi.md)

___

## Properties

<a id="axios"></a>

### `<Protected>` axios

**● axios**: *`AxiosInstance`*

*Inherited from [BaseAPI](baseapi.md).[axios](baseapi.md#axios)*

*Defined in [api.ts:51](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L51)*

___
<a id="basepath"></a>

### `<Protected>` basePath

**● basePath**: *`string`*

*Inherited from [BaseAPI](baseapi.md).[basePath](baseapi.md#basepath)*

*Defined in [api.ts:51](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L51)*

___
<a id="configuration"></a>

### `<Protected>` configuration

**● configuration**: *[Configuration](configuration.md) \| `undefined`*

*Inherited from [BaseAPI](baseapi.md).[configuration](baseapi.md#configuration)*

*Defined in [api.ts:49](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L49)*

___

## Methods

<a id="totalrisklist"></a>

###  totalRiskList

▸ **totalRiskList**(options?: *`any`*): `AxiosPromise`<`Response`>

*Defined in [api.ts:4300](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L4300)*

List all total risk values.

*__throws__*: {RequiredError}

*__memberof__*: TotalRiskApi

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<`Response`>

___

