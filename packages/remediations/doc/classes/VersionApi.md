[@redhat-cloud-services/remediations-client](../README.md) / [Exports](../modules.md) / VersionApi

# Class: VersionApi

VersionApi - object-oriented interface

**`Export`**

## Hierarchy

- `BaseAPI`

  ↳ **`VersionApi`**

## Table of contents

### Constructors

- [constructor](VersionApi.md#constructor)

### Properties

- [axios](VersionApi.md#axios)
- [basePath](VersionApi.md#basepath)
- [configuration](VersionApi.md#configuration)

### Methods

- [getVersion](VersionApi.md#getversion)

## Constructors

### constructor

• **new VersionApi**(`configuration?`, `basePath?`, `axios?`)

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

### getVersion

▸ **getVersion**(`options?`): `Promise`<`AxiosResponse`<[`InlineResponse200`](../interfaces/InlineResponse200.md), `any`\>\>

Provides information about the version of the service

**`Summary`**

Get service version

**`Throws`**

**`Memberof`**

VersionApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`InlineResponse200`](../interfaces/InlineResponse200.md), `any`\>\>

#### Defined in

[api.ts:3506](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/remediations/api.ts#L3506)
