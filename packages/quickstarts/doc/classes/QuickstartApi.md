[@redhat-cloud-services/quickstarts-client](../README.md) / [Exports](../modules.md) / QuickstartApi

# Class: QuickstartApi

QuickstartApi - object-oriented interface

**`Export`**

## Hierarchy

- `BaseAPI`

  ↳ **`QuickstartApi`**

## Table of contents

### Constructors

- [constructor](QuickstartApi.md#constructor)

### Properties

- [axios](QuickstartApi.md#axios)
- [basePath](QuickstartApi.md#basepath)
- [configuration](QuickstartApi.md#configuration)

### Methods

- [quickstartsGet](QuickstartApi.md#quickstartsget)
- [quickstartsIdGet](QuickstartApi.md#quickstartsidget)

## Constructors

### constructor

• **new QuickstartApi**(`configuration?`, `basePath?`, `axios?`)

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

### quickstartsGet

▸ **quickstartsGet**(`bundle?`, `application?`, `limit?`, `offset?`, `options?`): `Promise`<`AxiosResponse`<[`QuickstartsGet200Response`](../interfaces/QuickstartsGet200Response.md), `any`\>\>

**`Summary`**

Returns list of all quickstarts

**`Throws`**

**`Memberof`**

QuickstartApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `bundle?` | `string` | If set, content is associated with a specific CRC bundle |
| `application?` | `string` | If set, content is associated with a specific CRC application |
| `limit?` | `number` | Pagination limit |
| `offset?` | `number` | Pagination offset |
| `options?` | `AxiosRequestConfig`<`any`\> | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`QuickstartsGet200Response`](../interfaces/QuickstartsGet200Response.md), `any`\>\>

#### Defined in

[api.ts:630](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/quickstarts/api.ts#L630)

___

### quickstartsIdGet

▸ **quickstartsIdGet**(`id`, `options?`): `Promise`<`AxiosResponse`<[`V1Quickstart`](../interfaces/V1Quickstart.md), `any`\>\>

**`Summary`**

Return a quickstarts by ID

**`Throws`**

**`Memberof`**

QuickstartApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `number` | identifier |
| `options?` | `AxiosRequestConfig`<`any`\> | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`V1Quickstart`](../interfaces/V1Quickstart.md), `any`\>\>

#### Defined in

[api.ts:642](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/quickstarts/api.ts#L642)
