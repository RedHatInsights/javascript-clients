[@redhat-cloud-services/quickstarts-client](../README.md) / [Exports](../modules.md) / HelptopicApi

# Class: HelptopicApi

HelptopicApi - object-oriented interface

**`Export`**

## Hierarchy

- `BaseAPI`

  ↳ **`HelptopicApi`**

## Table of contents

### Constructors

- [constructor](HelptopicApi.md#constructor)

### Properties

- [axios](HelptopicApi.md#axios)
- [basePath](HelptopicApi.md#basepath)
- [configuration](HelptopicApi.md#configuration)

### Methods

- [helptopicsGet](HelptopicApi.md#helptopicsget)
- [helptopicsNameGet](HelptopicApi.md#helptopicsnameget)

## Constructors

### constructor

• **new HelptopicApi**(`configuration?`, `basePath?`, `axios?`)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `configuration?` | [`Configuration`](Configuration.md) | `undefined` |
| `basePath` | `string` | `BASE_PATH` |
| `axios` | `AxiosInstance` | `globalAxios` |

#### Inherited from

BaseAPI.constructor

#### Defined in

[base.ts:52](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/quickstarts/base.ts#L52)

## Properties

### axios

• `Protected` **axios**: `AxiosInstance` = `globalAxios`

#### Inherited from

BaseAPI.axios

#### Defined in

[base.ts:52](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/quickstarts/base.ts#L52)

___

### basePath

• `Protected` **basePath**: `string` = `BASE_PATH`

#### Inherited from

BaseAPI.basePath

#### Defined in

[base.ts:52](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/quickstarts/base.ts#L52)

___

### configuration

• `Protected` **configuration**: [`Configuration`](Configuration.md)

#### Inherited from

BaseAPI.configuration

#### Defined in

[base.ts:50](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/quickstarts/base.ts#L50)

## Methods

### helptopicsGet

▸ **helptopicsGet**(`bundle?`, `application?`, `name?`, `options?`): `Promise`<`AxiosResponse`<[`HelptopicsGet200Response`](../interfaces/HelptopicsGet200Response.md), `any`\>\>

**`Summary`**

Returns list of all help topics

**`Throws`**

**`Memberof`**

HelptopicApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `bundle?` | `string` | If set, content is associated with a specific CRC bundle |
| `application?` | `string` | If set, content is associated with a specific CRC application |
| `name?` | `string` | Search content by name |
| `options?` | `AxiosRequestConfig`<`any`\> | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`HelptopicsGet200Response`](../interfaces/HelptopicsGet200Response.md), `any`\>\>

#### Defined in

[api.ts:433](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/quickstarts/api.ts#L433)

___

### helptopicsNameGet

▸ **helptopicsNameGet**(`name`, `options?`): `Promise`<`AxiosResponse`<[`HelptopicsNameGet200Response`](../interfaces/HelptopicsNameGet200Response.md), `any`\>\>

**`Summary`**

Return a help topics set by topic name

**`Throws`**

**`Memberof`**

HelptopicApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | identifier |
| `options?` | `AxiosRequestConfig`<`any`\> | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`HelptopicsNameGet200Response`](../interfaces/HelptopicsNameGet200Response.md), `any`\>\>

#### Defined in

[api.ts:445](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/quickstarts/api.ts#L445)
