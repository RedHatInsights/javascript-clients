[@redhat-cloud-services/remediations-client](../README.md) > [DiagnosisApi](../classes/diagnosisapi.md)

# Class: DiagnosisApi

DiagnosisApi - object-oriented interface

*__export__*: 

*__class__*: DiagnosisApi

*__extends__*: {BaseAPI}

## Hierarchy

 [BaseAPI](baseapi.md)

**↳ DiagnosisApi**

## Index

### Constructors

* [constructor](diagnosisapi.md#constructor)

### Properties

* [axios](diagnosisapi.md#axios)
* [basePath](diagnosisapi.md#basepath)
* [configuration](diagnosisapi.md#configuration)

### Methods

* [getDiagnosis](diagnosisapi.md#getdiagnosis)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new DiagnosisApi**(configuration?: *[Configuration](configuration.md)*, basePath?: *`string`*, axios?: *`AxiosInstance`*): [DiagnosisApi](diagnosisapi.md)

*Inherited from [BaseAPI](baseapi.md).[constructor](baseapi.md#constructor)*

*Defined in [api.ts:49](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/remediations/api.ts#L49)*

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| `Optional` configuration | [Configuration](configuration.md) | - |
| `Default value` basePath | `string` |  BASE_PATH |
| `Default value` axios | `AxiosInstance` |  globalAxios |

**Returns:** [DiagnosisApi](diagnosisapi.md)

___

## Properties

<a id="axios"></a>

### `<Protected>` axios

**● axios**: *`AxiosInstance`*

*Inherited from [BaseAPI](baseapi.md).[axios](baseapi.md#axios)*

*Defined in [api.ts:51](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/remediations/api.ts#L51)*

___
<a id="basepath"></a>

### `<Protected>` basePath

**● basePath**: *`string`*

*Inherited from [BaseAPI](baseapi.md).[basePath](baseapi.md#basepath)*

*Defined in [api.ts:51](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/remediations/api.ts#L51)*

___
<a id="configuration"></a>

### `<Protected>` configuration

**● configuration**: *[Configuration](configuration.md) \| `undefined`*

*Inherited from [BaseAPI](baseapi.md).[configuration](baseapi.md#configuration)*

*Defined in [api.ts:49](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/remediations/api.ts#L49)*

___

## Methods

<a id="getdiagnosis"></a>

###  getDiagnosis

▸ **getDiagnosis**(system: *`string`*, remediation?: *`string`*, options?: *`any`*): `AxiosPromise`<[Diagnosis](../interfaces/diagnosis.md)>

*Defined in [api.ts:923](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/remediations/api.ts#L923)*

Provides host-specific diagnosis information

*__summary__*: host-specific diagnosis

*__throws__*: {RequiredError}

*__memberof__*: DiagnosisApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| system | `string` |  System identifier |
| `Optional` remediation | `string` |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[Diagnosis](../interfaces/diagnosis.md)>

___

