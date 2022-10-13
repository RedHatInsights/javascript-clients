[@redhat-cloud-services/insights-client](../README.md) / [Exports](../modules.md) / SystemtypeApi

# Class: SystemtypeApi

SystemtypeApi - object-oriented interface

**`Export`**

## Hierarchy

- `BaseAPI`

  ↳ **`SystemtypeApi`**

## Table of contents

### Constructors

- [constructor](SystemtypeApi.md#constructor)

### Properties

- [axios](SystemtypeApi.md#axios)
- [basePath](SystemtypeApi.md#basepath)
- [configuration](SystemtypeApi.md#configuration)

### Methods

- [systemtypeList](SystemtypeApi.md#systemtypelist)
- [systemtypeRetrieve](SystemtypeApi.md#systemtyperetrieve)

## Constructors

### constructor

• **new SystemtypeApi**(`configuration?`, `basePath?`, `axios?`)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `configuration?` | [`Configuration`](Configuration.md) | `undefined` |
| `basePath` | `string` | `BASE_PATH` |
| `axios` | `AxiosInstance` | `globalAxios` |

#### Inherited from

BaseAPI.constructor

#### Defined in

[base.ts:51](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/base.ts#L51)

## Properties

### axios

• `Protected` **axios**: `AxiosInstance` = `globalAxios`

#### Inherited from

BaseAPI.axios

#### Defined in

[base.ts:51](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/base.ts#L51)

___

### basePath

• `Protected` **basePath**: `string` = `BASE_PATH`

#### Inherited from

BaseAPI.basePath

#### Defined in

[base.ts:51](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/base.ts#L51)

___

### configuration

• `Protected` **configuration**: [`Configuration`](Configuration.md)

#### Inherited from

BaseAPI.configuration

#### Defined in

[base.ts:49](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/base.ts#L49)

## Methods

### systemtypeList

▸ **systemtypeList**(`options?`): `Promise`<`AxiosResponse`<[`SystemType`](../interfaces/SystemType.md)[]\>\>

List all system types by role and product code

**`Summary`**

List all system types

**`Throws`**

**`Memberof`**

SystemtypeApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`SystemType`](../interfaces/SystemType.md)[]\>\>

#### Defined in

[api.ts:789](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L789)

___

### systemtypeRetrieve

▸ **systemtypeRetrieve**(`id`, `options?`): `Promise`<`AxiosResponse`<[`SystemType`](../interfaces/SystemType.md)\>\>

Retrieve details of a single system type

**`Summary`**

Retrieve a system type

**`Throws`**

**`Memberof`**

SystemtypeApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `number` | A unique integer value identifying this system type. |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`SystemType`](../interfaces/SystemType.md)\>\>

#### Defined in

[api.ts:801](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L801)
