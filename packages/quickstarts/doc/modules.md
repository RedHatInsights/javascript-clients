[@redhat-cloud-services/quickstarts-client](README.md) / Exports

# @redhat-cloud-services/quickstarts-client

## Table of contents

### Classes

- [Configuration](classes/Configuration.md)
- [HelptopicApi](classes/HelptopicApi.md)
- [QuickstartApi](classes/QuickstartApi.md)

### Interfaces

- [BadRequest](interfaces/BadRequest.md)
- [ConfigurationParameters](interfaces/ConfigurationParameters.md)
- [HelptopicsGet200Response](interfaces/HelptopicsGet200Response.md)
- [HelptopicsNameGet200Response](interfaces/HelptopicsNameGet200Response.md)
- [NotFound](interfaces/NotFound.md)
- [QuickstartsGet200Response](interfaces/QuickstartsGet200Response.md)
- [V1HelpTopic](interfaces/V1HelpTopic.md)
- [V1HelpTopicTagsInner](interfaces/V1HelpTopicTagsInner.md)
- [V1Quickstart](interfaces/V1Quickstart.md)
- [V1QuickstartProgress](interfaces/V1QuickstartProgress.md)

### Functions

- [HelptopicApiAxiosParamCreator](modules.md#helptopicapiaxiosparamcreator)
- [HelptopicApiFactory](modules.md#helptopicapifactory)
- [HelptopicApiFp](modules.md#helptopicapifp)
- [QuickstartApiAxiosParamCreator](modules.md#quickstartapiaxiosparamcreator)
- [QuickstartApiFactory](modules.md#quickstartapifactory)
- [QuickstartApiFp](modules.md#quickstartapifp)

## Functions

### HelptopicApiAxiosParamCreator

▸ **HelptopicApiAxiosParamCreator**(`configuration?`): `Object`

HelptopicApi - axios parameter creator

**`Export`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuration?` | [`Configuration`](classes/Configuration.md) |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `helptopicsGet` | (`bundle?`: `string`, `application?`: `string`, `name?`: `string`, `options?`: `AxiosRequestConfig`) => `Promise`<`RequestArgs`\> |
| `helptopicsNameGet` | (`name`: `string`, `options?`: `AxiosRequestConfig`) => `Promise`<`RequestArgs`\> |

#### Defined in

[api.ts:266](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/quickstarts/api.ts#L266)

___

### HelptopicApiFactory

▸ **HelptopicApiFactory**(`configuration?`, `basePath?`, `axios?`): `Object`

HelptopicApi - factory interface

**`Export`**

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
| `helptopicsGet` | (`bundle?`: `string`, `application?`: `string`, `name?`: `string`, `options?`: `any`) => `AxiosPromise`<[`HelptopicsGet200Response`](interfaces/HelptopicsGet200Response.md)\> |
| `helptopicsNameGet` | (`name`: `string`, `options?`: `any`) => `AxiosPromise`<[`HelptopicsNameGet200Response`](interfaces/HelptopicsNameGet200Response.md)\> |

#### Defined in

[api.ts:388](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/quickstarts/api.ts#L388)

___

### HelptopicApiFp

▸ **HelptopicApiFp**(`configuration?`): `Object`

HelptopicApi - functional programming interface

**`Export`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuration?` | [`Configuration`](classes/Configuration.md) |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `helptopicsGet` | (`bundle?`: `string`, `application?`: `string`, `name?`: `string`, `options?`: `AxiosRequestConfig`) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`HelptopicsGet200Response`](interfaces/HelptopicsGet200Response.md)\>\> |
| `helptopicsNameGet` | (`name`: `string`, `options?`: `AxiosRequestConfig`) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`HelptopicsNameGet200Response`](interfaces/HelptopicsNameGet200Response.md)\>\> |

#### Defined in

[api.ts:354](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/quickstarts/api.ts#L354)

___

### QuickstartApiAxiosParamCreator

▸ **QuickstartApiAxiosParamCreator**(`configuration?`): `Object`

QuickstartApi - axios parameter creator

**`Export`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuration?` | [`Configuration`](classes/Configuration.md) |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `quickstartsGet` | (`bundle?`: `string`, `application?`: `string`, `limit?`: `number`, `offset?`: `number`, `options?`: `AxiosRequestConfig`) => `Promise`<`RequestArgs`\> |
| `quickstartsIdGet` | (`id`: `number`, `options?`: `AxiosRequestConfig`) => `Promise`<`RequestArgs`\> |

#### Defined in

[api.ts:455](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/quickstarts/api.ts#L455)

___

### QuickstartApiFactory

▸ **QuickstartApiFactory**(`configuration?`, `basePath?`, `axios?`): `Object`

QuickstartApi - factory interface

**`Export`**

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
| `quickstartsGet` | (`bundle?`: `string`, `application?`: `string`, `limit?`: `number`, `offset?`: `number`, `options?`: `any`) => `AxiosPromise`<[`QuickstartsGet200Response`](interfaces/QuickstartsGet200Response.md)\> |
| `quickstartsIdGet` | (`id`: `number`, `options?`: `any`) => `AxiosPromise`<[`V1Quickstart`](interfaces/V1Quickstart.md)\> |

#### Defined in

[api.ts:583](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/quickstarts/api.ts#L583)

___

### QuickstartApiFp

▸ **QuickstartApiFp**(`configuration?`): `Object`

QuickstartApi - functional programming interface

**`Export`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuration?` | [`Configuration`](classes/Configuration.md) |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `quickstartsGet` | (`bundle?`: `string`, `application?`: `string`, `limit?`: `number`, `offset?`: `number`, `options?`: `AxiosRequestConfig`) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`QuickstartsGet200Response`](interfaces/QuickstartsGet200Response.md)\>\> |
| `quickstartsIdGet` | (`id`: `number`, `options?`: `AxiosRequestConfig`) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`V1Quickstart`](interfaces/V1Quickstart.md)\>\> |

#### Defined in

[api.ts:548](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/quickstarts/api.ts#L548)
