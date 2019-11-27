[@redhat-cloud-services/cost-management-client](../README.md) > [MetricsApi](../classes/metricsapi.md)

# Class: MetricsApi

MetricsApi - object-oriented interface

*__export__*: 

*__class__*: MetricsApi

*__extends__*: {BaseAPI}

## Hierarchy

 [BaseAPI](baseapi.md)

**↳ MetricsApi**

## Index

### Constructors

* [constructor](metricsapi.md#constructor)

### Properties

* [axios](metricsapi.md#axios)
* [basePath](metricsapi.md#basepath)
* [configuration](metricsapi.md#configuration)

### Methods

* [getMetrics](metricsapi.md#getmetrics)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new MetricsApi**(configuration?: *[Configuration](configuration.md)*, basePath?: *`string`*, axios?: *`AxiosInstance`*): [MetricsApi](metricsapi.md)

*Inherited from [BaseAPI](baseapi.md).[constructor](baseapi.md#constructor)*

*Defined in [api.ts:49](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/cost-management/api.ts#L49)*

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| `Optional` configuration | [Configuration](configuration.md) | - |
| `Default value` basePath | `string` |  BASE_PATH |
| `Default value` axios | `AxiosInstance` |  globalAxios |

**Returns:** [MetricsApi](metricsapi.md)

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

<a id="getmetrics"></a>

###  getMetrics

▸ **getMetrics**(options?: *`any`*): `AxiosPromise`<[Metrics](../interfaces/metrics.md)>

*Defined in [api.ts:4598](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/cost-management/api.ts#L4598)*

*__summary__*: Obtain Metrics

*__throws__*: {RequiredError}

*__memberof__*: MetricsApi

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[Metrics](../interfaces/metrics.md)>

___

