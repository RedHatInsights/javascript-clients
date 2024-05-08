[@redhat-cloud-services/quickstarts-client](README.md) / Exports

# @redhat-cloud-services/quickstarts-client

## Table of contents

### Classes

- [Configuration](classes/Configuration.md)
- [DefaultApi](classes/DefaultApi.md)

### Interfaces

- [BadRequest](interfaces/BadRequest.md)
- [ConfigurationParameters](interfaces/ConfigurationParameters.md)
- [FavoritesGet200Response](interfaces/FavoritesGet200Response.md)
- [HelptopicsGet200Response](interfaces/HelptopicsGet200Response.md)
- [HelptopicsNameGet200Response](interfaces/HelptopicsNameGet200Response.md)
- [NotFound](interfaces/NotFound.md)
- [QuickstartsGet200Response](interfaces/QuickstartsGet200Response.md)
- [V1FavoriteQuickstart](interfaces/V1FavoriteQuickstart.md)
- [V1HelpTopic](interfaces/V1HelpTopic.md)
- [V1HelpTopicTagsInner](interfaces/V1HelpTopicTagsInner.md)
- [V1Quickstart](interfaces/V1Quickstart.md)
- [V1QuickstartFavoriteQuickstartInner](interfaces/V1QuickstartFavoriteQuickstartInner.md)
- [V1QuickstartProgress](interfaces/V1QuickstartProgress.md)

### Type Aliases

- [V1HelpTopicDeletedAt](modules.md#v1helptopicdeletedat)

### Functions

- [DefaultApiAxiosParamCreator](modules.md#defaultapiaxiosparamcreator)
- [DefaultApiFactory](modules.md#defaultapifactory)
- [DefaultApiFp](modules.md#defaultapifp)

## Type Aliases

### V1HelpTopicDeletedAt

Ƭ **V1HelpTopicDeletedAt**: ``null`` \| `string`

**`Export`**

#### Defined in

[api.ts:210](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/quickstarts/api.ts#L210)

## Functions

### DefaultApiAxiosParamCreator

▸ **DefaultApiAxiosParamCreator**(`configuration?`): `Object`

DefaultApi - axios parameter creator

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuration?` | [`Configuration`](classes/Configuration.md) |

#### Returns

`Object`

| Name | Type | Description |
| :------ | :------ | :------ |
| `favoritesGet` | (`options?`: `AxiosRequestConfig`\<`any`\>) => `Promise`\<`RequestArgs`\> | - |
| `favoritesPost` | (`v1FavoriteQuickstart?`: [`V1FavoriteQuickstart`](interfaces/V1FavoriteQuickstart.md), `options?`: `AxiosRequestConfig`\<`any`\>) => `Promise`\<`RequestArgs`\> | - |
| `helptopicsGet` | (`options?`: `AxiosRequestConfig`\<`any`\>) => `Promise`\<`RequestArgs`\> | - |
| `helptopicsNameGet` | (`options?`: `AxiosRequestConfig`\<`any`\>) => `Promise`\<`RequestArgs`\> | - |
| `quickstartsGet` | (`options?`: `AxiosRequestConfig`\<`any`\>) => `Promise`\<`RequestArgs`\> | - |
| `quickstartsIdGet` | (`options?`: `AxiosRequestConfig`\<`any`\>) => `Promise`\<`RequestArgs`\> | - |

**`Export`**

#### Defined in

[api.ts:389](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/quickstarts/api.ts#L389)

___

### DefaultApiFactory

▸ **DefaultApiFactory**(`configuration?`, `basePath?`, `axios?`): `Object`

DefaultApi - factory interface

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuration?` | [`Configuration`](classes/Configuration.md) |
| `basePath?` | `string` |
| `axios?` | `AxiosInstance` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `favoritesGet` | (`options?`: `any`) => `AxiosPromise`\<[`FavoritesGet200Response`](interfaces/FavoritesGet200Response.md)\> |
| `favoritesPost` | (`v1FavoriteQuickstart?`: [`V1FavoriteQuickstart`](interfaces/V1FavoriteQuickstart.md), `options?`: `any`) => `AxiosPromise`\<[`V1FavoriteQuickstart`](interfaces/V1FavoriteQuickstart.md)\> |
| `helptopicsGet` | (`options?`: `any`) => `AxiosPromise`\<[`HelptopicsGet200Response`](interfaces/HelptopicsGet200Response.md)\> |
| `helptopicsNameGet` | (`options?`: `any`) => `AxiosPromise`\<[`HelptopicsNameGet200Response`](interfaces/HelptopicsNameGet200Response.md)\> |
| `quickstartsGet` | (`options?`: `any`) => `AxiosPromise`\<[`QuickstartsGet200Response`](interfaces/QuickstartsGet200Response.md)\> |
| `quickstartsIdGet` | (`options?`: `any`) => `AxiosPromise`\<[`V1Quickstart`](interfaces/V1Quickstart.md)\> |

**`Export`**

#### Defined in

[api.ts:653](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/quickstarts/api.ts#L653)

___

### DefaultApiFp

▸ **DefaultApiFp**(`configuration?`): `Object`

DefaultApi - functional programming interface

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuration?` | [`Configuration`](classes/Configuration.md) |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `favoritesGet` | (`options?`: `AxiosRequestConfig`\<`any`\>) => `Promise`\<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`\<[`FavoritesGet200Response`](interfaces/FavoritesGet200Response.md)\>\> |
| `favoritesPost` | (`v1FavoriteQuickstart?`: [`V1FavoriteQuickstart`](interfaces/V1FavoriteQuickstart.md), `options?`: `AxiosRequestConfig`\<`any`\>) => `Promise`\<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`\<[`V1FavoriteQuickstart`](interfaces/V1FavoriteQuickstart.md)\>\> |
| `helptopicsGet` | (`options?`: `AxiosRequestConfig`\<`any`\>) => `Promise`\<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`\<[`HelptopicsGet200Response`](interfaces/HelptopicsGet200Response.md)\>\> |
| `helptopicsNameGet` | (`options?`: `AxiosRequestConfig`\<`any`\>) => `Promise`\<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`\<[`HelptopicsNameGet200Response`](interfaces/HelptopicsNameGet200Response.md)\>\> |
| `quickstartsGet` | (`options?`: `AxiosRequestConfig`\<`any`\>) => `Promise`\<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`\<[`QuickstartsGet200Response`](interfaces/QuickstartsGet200Response.md)\>\> |
| `quickstartsIdGet` | (`options?`: `AxiosRequestConfig`\<`any`\>) => `Promise`\<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`\<[`V1Quickstart`](interfaces/V1Quickstart.md)\>\> |

**`Export`**

#### Defined in

[api.ts:582](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/quickstarts/api.ts#L582)
