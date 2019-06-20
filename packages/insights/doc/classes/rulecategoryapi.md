[@redhat-cloud-services/insights-client](../README.md) > [RulecategoryApi](../classes/rulecategoryapi.md)

# Class: RulecategoryApi

RulecategoryApi - object-oriented interface

*__export__*: 

*__class__*: RulecategoryApi

*__extends__*: {BaseAPI}

## Hierarchy

 [BaseAPI](baseapi.md)

**↳ RulecategoryApi**

## Index

### Constructors

* [constructor](rulecategoryapi.md#constructor)

### Properties

* [axios](rulecategoryapi.md#axios)
* [basePath](rulecategoryapi.md#basepath)
* [configuration](rulecategoryapi.md#configuration)

### Methods

* [rulecategoryList](rulecategoryapi.md#rulecategorylist)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new RulecategoryApi**(configuration?: *[Configuration](configuration.md)*, basePath?: *`string`*, axios?: *`AxiosInstance`*): [RulecategoryApi](rulecategoryapi.md)

*Inherited from [BaseAPI](baseapi.md).[constructor](baseapi.md#constructor)*

*Defined in [api.ts:49](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L49)*

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| `Optional` configuration | [Configuration](configuration.md) | - |
| `Default value` basePath | `string` |  BASE_PATH |
| `Default value` axios | `AxiosInstance` |  globalAxios |

**Returns:** [RulecategoryApi](rulecategoryapi.md)

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

<a id="rulecategorylist"></a>

###  rulecategoryList

▸ **rulecategoryList**(options?: *`any`*): `AxiosPromise`<[RuleCategory](../interfaces/rulecategory.md)[]>

*Defined in [api.ts:1303](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L1303)*

Rules are divided into categories, the usual being Availability, Stability, Security and Performance

*__throws__*: {RequiredError}

*__memberof__*: RulecategoryApi

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[RuleCategory](../interfaces/rulecategory.md)[]>

___

