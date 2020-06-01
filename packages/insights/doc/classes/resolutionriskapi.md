[@redhat-cloud-services/insights-client](../README.md) › [Globals](../globals.md) › [ResolutionRiskApi](resolutionriskapi.md)

# Class: ResolutionRiskApi

ResolutionRiskApi - object-oriented interface

**`export`** 

## Hierarchy

* [BaseAPI](baseapi.md)

  ↳ **ResolutionRiskApi**

## Index

### Constructors

* [constructor](resolutionriskapi.md#constructor)

### Properties

* [axios](resolutionriskapi.md#protected-axios)
* [basePath](resolutionriskapi.md#protected-basepath)
* [configuration](resolutionriskapi.md#protected-configuration)

### Methods

* [resolutionRiskList](resolutionriskapi.md#resolutionrisklist)

## Constructors

###  constructor

\+ **new ResolutionRiskApi**(`configuration?`: [Configuration](configuration.md), `basePath`: string, `axios`: AxiosInstance): *[ResolutionRiskApi](resolutionriskapi.md)*

*Inherited from [BaseAPI](baseapi.md).[constructor](baseapi.md#constructor)*

*Defined in [packages/insights/base.ts:49](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/base.ts#L49)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`configuration?` | [Configuration](configuration.md) | - |
`basePath` | string | BASE_PATH |
`axios` | AxiosInstance | globalAxios |

**Returns:** *[ResolutionRiskApi](resolutionriskapi.md)*

## Properties

### `Protected` axios

• **axios**: *AxiosInstance*

*Inherited from [BaseAPI](baseapi.md).[axios](baseapi.md#protected-axios)*

*Defined in [packages/insights/base.ts:51](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/base.ts#L51)*

___

### `Protected` basePath

• **basePath**: *string*

*Inherited from [BaseAPI](baseapi.md).[basePath](baseapi.md#protected-basepath)*

*Defined in [packages/insights/base.ts:51](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/base.ts#L51)*

___

### `Protected` configuration

• **configuration**: *[Configuration](configuration.md) | undefined*

*Inherited from [BaseAPI](baseapi.md).[configuration](baseapi.md#protected-configuration)*

*Defined in [packages/insights/base.ts:49](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/base.ts#L49)*

## Methods

###  resolutionRiskList

▸ **resolutionRiskList**(`options?`: any): *AxiosPromise‹void›*

*Defined in [packages/insights/api.ts:359](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L359)*

Risks are listed in increasing order of severity.

**`summary`** List all total risk values.

**`throws`** {RequiredError}

**`memberof`** ResolutionRiskApi

**Parameters:**

Name | Type |
------ | ------ |
`options?` | any |

**Returns:** *AxiosPromise‹void›*
