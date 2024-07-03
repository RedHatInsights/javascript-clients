[@redhat-cloud-services/insights-client](../README.md) / [Exports](../modules.md) / SystemtypeApi

# Class: SystemtypeApi

SystemtypeApi - object-oriented interface

**`Export`**

SystemtypeApi

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

• **new SystemtypeApi**(`configuration?`, `basePath?`, `axios?`): [`SystemtypeApi`](SystemtypeApi.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `configuration?` | [`Configuration`](Configuration.md) | `undefined` |
| `basePath` | `string` | `BASE_PATH` |
| `axios` | `AxiosInstance` | `globalAxios` |

#### Returns

[`SystemtypeApi`](SystemtypeApi.md)

#### Inherited from

BaseAPI.constructor

#### Defined in

[base.ts:51](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/insights/base.ts#L51)

## Properties

### axios

• `Protected` **axios**: `AxiosInstance` = `globalAxios`

#### Inherited from

BaseAPI.axios

#### Defined in

[base.ts:51](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/insights/base.ts#L51)

___

### basePath

• `Protected` **basePath**: `string` = `BASE_PATH`

#### Inherited from

BaseAPI.basePath

#### Defined in

[base.ts:51](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/insights/base.ts#L51)

___

### configuration

• `Protected` **configuration**: `undefined` \| [`Configuration`](Configuration.md)

#### Inherited from

BaseAPI.configuration

#### Defined in

[base.ts:49](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/insights/base.ts#L49)

## Methods

### systemtypeList

▸ **systemtypeList**(`options?`): `Promise`\<`AxiosResponse`\<[`SystemType`](../interfaces/SystemType.md)[], `any`\>\>

List all system types by role and product code

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<[`SystemType`](../interfaces/SystemType.md)[], `any`\>\>

**`Summary`**

List all system types

**`Throws`**

**`Memberof`**

SystemtypeApi

#### Defined in

[api.ts:9254](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/insights/api.ts#L9254)

___

### systemtypeRetrieve

▸ **systemtypeRetrieve**(`id`, `options?`): `Promise`\<`AxiosResponse`\<[`SystemType`](../interfaces/SystemType.md), `any`\>\>

Retrieve details of a single system type

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `number` | A unique integer value identifying this system type. |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<[`SystemType`](../interfaces/SystemType.md), `any`\>\>

**`Summary`**

Retrieve a system type

**`Throws`**

**`Memberof`**

SystemtypeApi

#### Defined in

[api.ts:9266](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/insights/api.ts#L9266)
