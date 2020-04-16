[@redhat-cloud-services/remediations-client](../README.md) › [Globals](../globals.md) › [DiagnosisApi](diagnosisapi.md)

# Class: DiagnosisApi

DiagnosisApi - object-oriented interface

**`export`** 

## Hierarchy

* [BaseAPI](baseapi.md)

  ↳ **DiagnosisApi**

## Index

### Constructors

* [constructor](diagnosisapi.md#constructor)

### Properties

* [axios](diagnosisapi.md#protected-axios)
* [basePath](diagnosisapi.md#protected-basepath)
* [configuration](diagnosisapi.md#protected-configuration)

### Methods

* [getDiagnosis](diagnosisapi.md#getdiagnosis)

## Constructors

###  constructor

\+ **new DiagnosisApi**(`configuration?`: [Configuration](configuration.md), `basePath`: string, `axios`: AxiosInstance): *[DiagnosisApi](diagnosisapi.md)*

*Inherited from [BaseAPI](baseapi.md).[constructor](baseapi.md#constructor)*

Defined in base.ts:49

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`configuration?` | [Configuration](configuration.md) | - |
`basePath` | string | BASE_PATH |
`axios` | AxiosInstance | globalAxios |

**Returns:** *[DiagnosisApi](diagnosisapi.md)*

## Properties

### `Protected` axios

• **axios**: *AxiosInstance*

*Inherited from [BaseAPI](baseapi.md).[axios](baseapi.md#protected-axios)*

Defined in base.ts:51

___

### `Protected` basePath

• **basePath**: *string*

*Inherited from [BaseAPI](baseapi.md).[basePath](baseapi.md#protected-basepath)*

Defined in base.ts:51

___

### `Protected` configuration

• **configuration**: *[Configuration](configuration.md) | undefined*

*Inherited from [BaseAPI](baseapi.md).[configuration](baseapi.md#protected-configuration)*

Defined in base.ts:49

## Methods

###  getDiagnosis

▸ **getDiagnosis**(`system`: string, `remediation?`: string, `options?`: any): *AxiosPromise‹[Diagnosis](../interfaces/diagnosis.md)›*

*Defined in [api.ts:1255](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/remediations/api.ts#L1255)*

Provides host-specific diagnosis information

**`summary`** host-specific diagnosis

**`throws`** {RequiredError}

**`memberof`** DiagnosisApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`system` | string | System identifier |
`remediation?` | string | - |
`options?` | any | - |

**Returns:** *AxiosPromise‹[Diagnosis](../interfaces/diagnosis.md)›*
