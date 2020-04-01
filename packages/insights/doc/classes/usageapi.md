[@redhat-cloud-services/insights-client](../README.md) › [Globals](../globals.md) › [UsageApi](usageapi.md)

# Class: UsageApi

UsageApi - object-oriented interface

**`export`** 

**`class`** UsageApi

**`extends`** {BaseAPI}

## Hierarchy

* [BaseAPI](baseapi.md)

  ↳ **UsageApi**

## Index

### Constructors

* [constructor](usageapi.md#constructor)

### Properties

* [axios](usageapi.md#protected-axios)
* [basePath](usageapi.md#protected-basepath)
* [configuration](usageapi.md#protected-configuration)

### Methods

* [usageList](usageapi.md#usagelist)

## Constructors

###  constructor

\+ **new UsageApi**(`configuration?`: [Configuration](configuration.md), `basePath`: string, `axios`: AxiosInstance): *[UsageApi](usageapi.md)*

*Inherited from [BaseAPI](baseapi.md).[constructor](baseapi.md#constructor)*

*Defined in [api.ts:49](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L49)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`configuration?` | [Configuration](configuration.md) | - |
`basePath` | string |  BASE_PATH |
`axios` | AxiosInstance |  globalAxios |

**Returns:** *[UsageApi](usageapi.md)*

## Properties

### `Protected` axios

• **axios**: *AxiosInstance*

*Inherited from [BaseAPI](baseapi.md).[axios](baseapi.md#protected-axios)*

*Defined in [api.ts:51](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L51)*

___

### `Protected` basePath

• **basePath**: *string*

*Inherited from [BaseAPI](baseapi.md).[basePath](baseapi.md#protected-basepath)*

*Defined in [api.ts:51](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L51)*

___

### `Protected` configuration

• **configuration**: *[Configuration](configuration.md) | undefined*

*Inherited from [BaseAPI](baseapi.md).[configuration](baseapi.md#protected-configuration)*

*Defined in [api.ts:49](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L49)*

## Methods

###  usageList

▸ **usageList**(`options?`: any): *AxiosPromise‹Response›*

*Defined in [api.ts:5490](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L5490)*

This uses a HashLogLog structure to record number of hits, and this is therefore an approximation.

**`summary`** List the unique rule hits for this account over the given time range

**`throws`** {RequiredError}

**`memberof`** UsageApi

**Parameters:**

Name | Type |
------ | ------ |
`options?` | any |

**Returns:** *AxiosPromise‹Response›*
