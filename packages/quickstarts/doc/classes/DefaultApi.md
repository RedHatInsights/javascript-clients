[@redhat-cloud-services/quickstarts-client](../README.md) / [Exports](../modules.md) / DefaultApi

# Class: DefaultApi

DefaultApi - object-oriented interface

**`Export`**

DefaultApi

## Hierarchy

- `BaseAPI`

  ↳ **`DefaultApi`**

## Table of contents

### Constructors

- [constructor](DefaultApi.md#constructor)

### Properties

- [axios](DefaultApi.md#axios)
- [basePath](DefaultApi.md#basepath)
- [configuration](DefaultApi.md#configuration)

### Methods

- [favoritesGet](DefaultApi.md#favoritesget)
- [favoritesPost](DefaultApi.md#favoritespost)
- [helptopicsGet](DefaultApi.md#helptopicsget)
- [helptopicsNameGet](DefaultApi.md#helptopicsnameget)
- [quickstartsGet](DefaultApi.md#quickstartsget)
- [quickstartsIdGet](DefaultApi.md#quickstartsidget)

## Constructors

### constructor

• **new DefaultApi**(`configuration?`, `basePath?`, `axios?`): [`DefaultApi`](DefaultApi.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `configuration?` | [`Configuration`](Configuration.md) | `undefined` |
| `basePath` | `string` | `BASE_PATH` |
| `axios` | `AxiosInstance` | `globalAxios` |

#### Returns

[`DefaultApi`](DefaultApi.md)

#### Inherited from

BaseAPI.constructor

#### Defined in

[base.ts:52](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/quickstarts/base.ts#L52)

## Properties

### axios

• `Protected` **axios**: `AxiosInstance` = `globalAxios`

#### Inherited from

BaseAPI.axios

#### Defined in

[base.ts:52](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/quickstarts/base.ts#L52)

___

### basePath

• `Protected` **basePath**: `string` = `BASE_PATH`

#### Inherited from

BaseAPI.basePath

#### Defined in

[base.ts:52](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/quickstarts/base.ts#L52)

___

### configuration

• `Protected` **configuration**: `undefined` \| [`Configuration`](Configuration.md)

#### Inherited from

BaseAPI.configuration

#### Defined in

[base.ts:50](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/quickstarts/base.ts#L50)

## Methods

### favoritesGet

▸ **favoritesGet**(`options?`): `Promise`\<`AxiosResponse`\<[`FavoritesGet200Response`](../interfaces/FavoritesGet200Response.md), `any`\>\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | `AxiosRequestConfig`\<`any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<[`FavoritesGet200Response`](../interfaces/FavoritesGet200Response.md), `any`\>\>

**`Summary`**

Returns list of all favorites

**`Throws`**

**`Memberof`**

DefaultApi

#### Defined in

[api.ts:728](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/quickstarts/api.ts#L728)

___

### favoritesPost

▸ **favoritesPost**(`v1FavoriteQuickstart?`, `options?`): `Promise`\<`AxiosResponse`\<[`V1FavoriteQuickstart`](../interfaces/V1FavoriteQuickstart.md), `any`\>\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `v1FavoriteQuickstart?` | [`V1FavoriteQuickstart`](../interfaces/V1FavoriteQuickstart.md) |  |
| `options?` | `AxiosRequestConfig`\<`any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<[`V1FavoriteQuickstart`](../interfaces/V1FavoriteQuickstart.md), `any`\>\>

**`Summary`**

Add a favorite

**`Throws`**

**`Memberof`**

DefaultApi

#### Defined in

[api.ts:740](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/quickstarts/api.ts#L740)

___

### helptopicsGet

▸ **helptopicsGet**(`options?`): `Promise`\<`AxiosResponse`\<[`HelptopicsGet200Response`](../interfaces/HelptopicsGet200Response.md), `any`\>\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | `AxiosRequestConfig`\<`any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<[`HelptopicsGet200Response`](../interfaces/HelptopicsGet200Response.md), `any`\>\>

**`Summary`**

Returns list of all help topics

**`Throws`**

**`Memberof`**

DefaultApi

#### Defined in

[api.ts:751](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/quickstarts/api.ts#L751)

___

### helptopicsNameGet

▸ **helptopicsNameGet**(`options?`): `Promise`\<`AxiosResponse`\<[`HelptopicsNameGet200Response`](../interfaces/HelptopicsNameGet200Response.md), `any`\>\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | `AxiosRequestConfig`\<`any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<[`HelptopicsNameGet200Response`](../interfaces/HelptopicsNameGet200Response.md), `any`\>\>

**`Summary`**

Return a help topics set by topic name

**`Throws`**

**`Memberof`**

DefaultApi

#### Defined in

[api.ts:762](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/quickstarts/api.ts#L762)

___

### quickstartsGet

▸ **quickstartsGet**(`options?`): `Promise`\<`AxiosResponse`\<[`QuickstartsGet200Response`](../interfaces/QuickstartsGet200Response.md), `any`\>\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | `AxiosRequestConfig`\<`any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<[`QuickstartsGet200Response`](../interfaces/QuickstartsGet200Response.md), `any`\>\>

**`Summary`**

Returns list of all quickstarts

**`Throws`**

**`Memberof`**

DefaultApi

#### Defined in

[api.ts:773](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/quickstarts/api.ts#L773)

___

### quickstartsIdGet

▸ **quickstartsIdGet**(`options?`): `Promise`\<`AxiosResponse`\<[`V1Quickstart`](../interfaces/V1Quickstart.md), `any`\>\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | `AxiosRequestConfig`\<`any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<[`V1Quickstart`](../interfaces/V1Quickstart.md), `any`\>\>

**`Summary`**

Return a quickstarts by ID

**`Throws`**

**`Memberof`**

DefaultApi

#### Defined in

[api.ts:784](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/quickstarts/api.ts#L784)
