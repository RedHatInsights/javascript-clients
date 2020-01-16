[@redhat-cloud-services/insights-client](../README.md) > [UsageApi](../classes/usageapi.md)

# Class: UsageApi

UsageApi - object-oriented interface

*__export__*: 

*__class__*: UsageApi

*__extends__*: {BaseAPI}

## Hierarchy

 [BaseAPI](baseapi.md)

**↳ UsageApi**

## Index

### Constructors

* [constructor](usageapi.md#constructor)

### Properties

* [axios](usageapi.md#axios)
* [basePath](usageapi.md#basepath)
* [configuration](usageapi.md#configuration)

### Methods

* [usageList](usageapi.md#usagelist)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new UsageApi**(configuration?: *[Configuration](configuration.md)*, basePath?: *`string`*, axios?: *`AxiosInstance`*): [UsageApi](usageapi.md)

*Inherited from [BaseAPI](baseapi.md).[constructor](baseapi.md#constructor)*

*Defined in [api.ts:49](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L49)*

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| `Optional` configuration | [Configuration](configuration.md) | - |
| `Default value` basePath | `string` |  BASE_PATH |
| `Default value` axios | `AxiosInstance` |  globalAxios |

**Returns:** [UsageApi](usageapi.md)

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

<a id="usagelist"></a>

###  usageList

▸ **usageList**(options?: *`any`*): `AxiosPromise`<`Response`>

*Defined in [api.ts:5179](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L5179)*

Returns the amount of unique rule hits within an account over the specified time range.

*__throws__*: {RequiredError}

*__memberof__*: UsageApi

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<`Response`>

___

