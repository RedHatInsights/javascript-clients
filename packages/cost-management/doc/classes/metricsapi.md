[@redhat-cloud-services/cost-management-client](../README.md) › [Globals](../globals.md) › [MetricsApi](metricsapi.md)

# Class: MetricsApi

MetricsApi - object-oriented interface

**`export`** 

**`class`** MetricsApi

**`extends`** {BaseAPI}

## Hierarchy

* [BaseAPI](baseapi.md)

  ↳ **MetricsApi**

## Index

### Constructors

* [constructor](metricsapi.md#constructor)

### Properties

* [axios](metricsapi.md#protected-axios)
* [basePath](metricsapi.md#protected-basepath)
* [configuration](metricsapi.md#protected-configuration)

### Methods

* [getMetrics](metricsapi.md#getmetrics)

## Constructors

###  constructor

\+ **new MetricsApi**(`configuration?`: [Configuration](configuration.md), `basePath`: string, `axios`: AxiosInstance): *[MetricsApi](metricsapi.md)*

*Inherited from [BaseAPI](baseapi.md).[constructor](baseapi.md#constructor)*

*Defined in [api.ts:49](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/cost-management/api.ts#L49)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`configuration?` | [Configuration](configuration.md) | - |
`basePath` | string |  BASE_PATH |
`axios` | AxiosInstance |  globalAxios |

**Returns:** *[MetricsApi](metricsapi.md)*

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

###  getMetrics

▸ **getMetrics**(`options?`: any): *AxiosPromise‹[Metrics](../interfaces/metrics.md)›*

*Defined in [api.ts:4287](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/cost-management/api.ts#L4287)*

**`summary`** Obtain Metrics

**`throws`** {RequiredError}

**`memberof`** MetricsApi

**Parameters:**

Name | Type |
------ | ------ |
`options?` | any |

**Returns:** *AxiosPromise‹[Metrics](../interfaces/metrics.md)›*
