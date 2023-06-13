[@redhat-cloud-services/remediations-client](../README.md) / [Exports](../modules.md) / DiagnosisApi

# Class: DiagnosisApi

DiagnosisApi - object-oriented interface

**`Export`**

## Hierarchy

- `BaseAPI`

  ↳ **`DiagnosisApi`**

## Table of contents

### Constructors

- [constructor](DiagnosisApi.md#constructor)

### Properties

- [axios](DiagnosisApi.md#axios)
- [basePath](DiagnosisApi.md#basepath)
- [configuration](DiagnosisApi.md#configuration)

### Methods

- [getDiagnosis](DiagnosisApi.md#getdiagnosis)

## Constructors

### constructor

• **new DiagnosisApi**(`configuration?`, `basePath?`, `axios?`)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `configuration?` | [`Configuration`](Configuration.md) | `undefined` |
| `basePath` | `string` | `BASE_PATH` |
| `axios` | `AxiosInstance` | `globalAxios` |

#### Inherited from

BaseAPI.constructor

#### Defined in

[base.ts:51](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/remediations/base.ts#L51)

## Properties

### axios

• `Protected` **axios**: `AxiosInstance` = `globalAxios`

#### Inherited from

BaseAPI.axios

#### Defined in

[base.ts:51](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/remediations/base.ts#L51)

___

### basePath

• `Protected` **basePath**: `string` = `BASE_PATH`

#### Inherited from

BaseAPI.basePath

#### Defined in

[base.ts:51](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/remediations/base.ts#L51)

___

### configuration

• `Protected` **configuration**: [`Configuration`](Configuration.md)

#### Inherited from

BaseAPI.configuration

#### Defined in

[base.ts:49](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/remediations/base.ts#L49)

## Methods

### getDiagnosis

▸ **getDiagnosis**(`system`, `remediation?`, `branchId?`, `options?`): `Promise`<`AxiosResponse`<[`Diagnosis`](../interfaces/Diagnosis.md), `any`\>\>

Provides host-specific diagnosis information

**`Summary`**

host-specific diagnosis

**`Throws`**

**`Memberof`**

DiagnosisApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `system` | `string` | System identifier |
| `remediation?` | `string` | Remediation identifier (uuid) |
| `branchId?` | `string` | Branch ID passed by satellite |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`Diagnosis`](../interfaces/Diagnosis.md), `any`\>\>

#### Defined in

[api.ts:1347](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/remediations/api.ts#L1347)
