[@redhat-cloud-services/remediations-client](../README.md) › [Globals](../globals.md) › [BaseAPI](baseapi.md)

# Class: BaseAPI

**`export`** 

## Hierarchy

* **BaseAPI**

  ↳ [DiagnosisApi](diagnosisapi.md)

  ↳ [GeneratorApi](generatorapi.md)

  ↳ [RemediationsApi](remediationsapi.md)

  ↳ [ResolutionsApi](resolutionsapi.md)

  ↳ [VersionApi](versionapi.md)

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

*Defined in [base.ts:49](https://github.com/fhlavac/javascript-clients/blob/master/packages/remediations/base.ts#L49)*

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

*Defined in [base.ts:51](https://github.com/fhlavac/javascript-clients/blob/master/packages/remediations/base.ts#L51)*

___

### `Protected` basePath

• **basePath**: *string*

*Defined in [base.ts:51](https://github.com/fhlavac/javascript-clients/blob/master/packages/remediations/base.ts#L51)*

___

### `Protected` configuration

• **configuration**: *[Configuration](configuration.md) | undefined*

*Defined in [base.ts:49](https://github.com/fhlavac/javascript-clients/blob/master/packages/remediations/base.ts#L49)*
