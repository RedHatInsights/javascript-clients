[@redhat-cloud-services/policies-client](../README.md) / [Exports](../modules.md) / FactServiceApi

# Class: FactServiceApi

FactServiceApi - object-oriented interface

**`Export`**

## Hierarchy

- `BaseAPI`

  ↳ **`FactServiceApi`**

## Table of contents

### Constructors

- [constructor](FactServiceApi.md#constructor)

### Properties

- [axios](FactServiceApi.md#axios)
- [basePath](FactServiceApi.md#basepath)
- [configuration](FactServiceApi.md#configuration)

### Methods

- [getFacts](FactServiceApi.md#getfacts)

## Constructors

### constructor

• **new FactServiceApi**(`configuration?`, `basePath?`, `axios?`)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `configuration?` | [`Configuration`](Configuration.md) | `undefined` |
| `basePath` | `string` | `BASE_PATH` |
| `axios` | `AxiosInstance` | `globalAxios` |

#### Inherited from

BaseAPI.constructor

#### Defined in

[base.ts:52](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/policies/base.ts#L52)

## Properties

### axios

• `Protected` **axios**: `AxiosInstance` = `globalAxios`

#### Inherited from

BaseAPI.axios

#### Defined in

[base.ts:52](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/policies/base.ts#L52)

___

### basePath

• `Protected` **basePath**: `string` = `BASE_PATH`

#### Inherited from

BaseAPI.basePath

#### Defined in

[base.ts:52](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/policies/base.ts#L52)

___

### configuration

• `Protected` **configuration**: [`Configuration`](Configuration.md)

#### Inherited from

BaseAPI.configuration

#### Defined in

[base.ts:50](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/policies/base.ts#L50)

## Methods

### getFacts

▸ **getFacts**(`options?`): `Promise`<`AxiosResponse`<[`Fact`](../interfaces/Fact.md)[]\>\>

**`Summary`**

Retrieve a list of fact (keys) along with their data types

**`Throws`**

**`Memberof`**

FactServiceApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | `AxiosRequestConfig` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`Fact`](../interfaces/Fact.md)[]\>\>

#### Defined in

[api.ts:437](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/policies/api.ts#L437)
