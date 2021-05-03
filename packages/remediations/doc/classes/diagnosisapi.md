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

*Defined in [base.ts:49](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/remediations/base.ts#L49)*

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

*Defined in [base.ts:51](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/remediations/base.ts#L51)*

___

### `Protected` basePath

• **basePath**: *string*

*Inherited from [BaseAPI](baseapi.md).[basePath](baseapi.md#protected-basepath)*

*Defined in [base.ts:51](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/remediations/base.ts#L51)*

___

### `Protected` configuration

• **configuration**: *[Configuration](configuration.md) | undefined*

*Inherited from [BaseAPI](baseapi.md).[configuration](baseapi.md#protected-configuration)*

*Defined in [base.ts:49](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/remediations/base.ts#L49)*

## Methods

###  getDiagnosis

▸ **getDiagnosis**(`system`: string, `remediation?`: string, `branchId?`: string, `options?`: any): *Promise‹AxiosResponse‹[Diagnosis](../interfaces/diagnosis.md)››*

*Defined in [api.ts:1302](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/remediations/api.ts#L1302)*

Provides host-specific diagnosis information

**`summary`** host-specific diagnosis

**`throws`** {RequiredError}

**`memberof`** DiagnosisApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`system` | string | System identifier |
`remediation?` | string | - |
`branchId?` | string | - |
`options?` | any | - |

**Returns:** *Promise‹AxiosResponse‹[Diagnosis](../interfaces/diagnosis.md)››*
