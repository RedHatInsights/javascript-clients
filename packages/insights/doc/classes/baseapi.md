[@redhat-cloud-services/insights-client](../README.md) › [Globals](../globals.md) › [BaseAPI](baseapi.md)

# Class: BaseAPI

**`export`** 

## Hierarchy

* **BaseAPI**

  ↳ [KcsApi](kcsapi.md)

  ↳ [ResolutionRiskApi](resolutionriskapi.md)

  ↳ [RulecategoryApi](rulecategoryapi.md)

  ↳ [SystemtypeApi](systemtypeapi.md)

  ↳ [TotalRiskApi](totalriskapi.md)

## Index

### Constructors

* [constructor](baseapi.md#constructor)

### Properties

* [axios](baseapi.md#protected-axios)
* [basePath](baseapi.md#protected-basepath)
* [configuration](baseapi.md#protected-configuration)

## Constructors

###  constructor

\+ **new BaseAPI**(`configuration?`: [Configuration](configuration.md), `basePath`: string, `axios`: AxiosInstance): *[BaseAPI](baseapi.md)*

*Defined in [packages/insights/base.ts:49](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/base.ts#L49)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`configuration?` | [Configuration](configuration.md) | - |
`basePath` | string | BASE_PATH |
`axios` | AxiosInstance | globalAxios |

**Returns:** *[BaseAPI](baseapi.md)*

## Properties

### `Protected` axios

• **axios**: *AxiosInstance*

*Defined in [packages/insights/base.ts:51](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/base.ts#L51)*

___

### `Protected` basePath

• **basePath**: *string*

*Defined in [packages/insights/base.ts:51](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/base.ts#L51)*

___

### `Protected` configuration

• **configuration**: *[Configuration](configuration.md) | undefined*

*Defined in [packages/insights/base.ts:49](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/base.ts#L49)*
