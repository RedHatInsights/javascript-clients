[@redhat-cloud-services/javascript-clients-shared](README.md) / Exports

# @redhat-cloud-services/javascript-clients-shared

## Table of contents

### Classes

- [BaseAPI](classes/BaseAPI.md)
- [Configuration](classes/Configuration.md)
- [RequiredError](classes/RequiredError.md)

### Interfaces

- [ApiConfig](interfaces/ApiConfig.md)
- [ConfigurationParameters](interfaces/ConfigurationParameters.md)
- [RequestArgs](interfaces/RequestArgs.md)

### Type Aliases

- [ActionType](modules.md#actiontype)
- [AuthTypeEnum](modules.md#authtypeenum)

### Variables

- [AuthTypeEnum](modules.md#authtypeenum-1)
- [COLLECTION\_FORMATS](modules.md#collection_formats)
- [DUMMY\_BASE\_URL](modules.md#dummy_base_url)

### Functions

- [APIFactory](modules.md#apifactory)
- [assertParamExists](modules.md#assertparamexists)
- [createRequestFunction](modules.md#createrequestfunction)
- [serializeDataIfNeeded](modules.md#serializedataifneeded)
- [setApiKeyToObject](modules.md#setapikeytoobject)
- [setBasicAuthToObject](modules.md#setbasicauthtoobject)
- [setBearerAuthToObject](modules.md#setbearerauthtoobject)
- [setOAuthToObject](modules.md#setoauthtoobject)
- [setSearchParams](modules.md#setsearchparams)
- [toPathString](modules.md#topathstring)

## Type Aliases

### ActionType

Ƭ **ActionType**: (...`config`: `any`) => `Promise`\<[`RequestArgs`](interfaces/RequestArgs.md)\>

#### Type declaration

▸ (`...config`): `Promise`\<[`RequestArgs`](interfaces/RequestArgs.md)\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `...config` | `any` |

##### Returns

`Promise`\<[`RequestArgs`](interfaces/RequestArgs.md)\>

#### Defined in

[packages/shared/common.ts:53](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/shared/common.ts#L53)

___

### AuthTypeEnum

Ƭ **AuthTypeEnum**: typeof [`AuthTypeEnum`](modules.md#authtypeenum-1)[keyof typeof [`AuthTypeEnum`](modules.md#authtypeenum-1)]

#### Defined in

[packages/shared/common.ts:14](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/shared/common.ts#L14)

[packages/shared/common.ts:22](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/shared/common.ts#L22)

## Variables

### AuthTypeEnum

• `Const` **AuthTypeEnum**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `Basic` | ``"basic"`` |
| `Bearer` | ``"bearer"`` |
| `InHeader` | ``"inHeader"`` |
| `InQuery` | ``"inQuery"`` |
| `Oauth` | ``"oath"`` |

#### Defined in

[packages/shared/common.ts:14](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/shared/common.ts#L14)

[packages/shared/common.ts:22](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/shared/common.ts#L22)

___

### COLLECTION\_FORMATS

• `Const` **COLLECTION\_FORMATS**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `csv` | `string` |
| `pipes` | `string` |
| `ssv` | `string` |
| `tsv` | `string` |

#### Defined in

[packages/shared/common.ts:7](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/shared/common.ts#L7)

___

### DUMMY\_BASE\_URL

• `Const` **DUMMY\_BASE\_URL**: ``"https://example.com"``

**`Export`**

#### Defined in

[packages/shared/common.ts:64](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/shared/common.ts#L64)

## Functions

### APIFactory

▸ **APIFactory**\<`T`\>(`basePath`, `actions`, `config?`): [`BaseAPI`](classes/BaseAPI.md) & `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Record`\<`string`, [`ActionType`](modules.md#actiontype)\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `basePath` | `string` |
| `actions` | `T` |
| `config?` | [`ApiConfig`](interfaces/ApiConfig.md) |

#### Returns

[`BaseAPI`](classes/BaseAPI.md) & `T`

#### Defined in

[packages/shared/utils.ts:13](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/shared/utils.ts#L13)

▸ **APIFactory**\<`T`\>(`actions`, `config?`): [`BaseAPI`](classes/BaseAPI.md) & `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Record`\<`string`, [`ActionType`](modules.md#actiontype)\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `actions` | `T` |
| `config?` | [`ApiConfig`](interfaces/ApiConfig.md) |

#### Returns

[`BaseAPI`](classes/BaseAPI.md) & `T`

#### Defined in

[packages/shared/utils.ts:14](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/shared/utils.ts#L14)

___

### assertParamExists

▸ **assertParamExists**(`functionName`, `paramName`, `paramValue`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionName` | `string` |
| `paramName` | `string` |
| `paramValue` | `unknown` |

#### Returns

`void`

**`Throws`**

**`Export`**

#### Defined in

[packages/shared/common.ts:71](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/shared/common.ts#L71)

___

### createRequestFunction

▸ **createRequestFunction**(`axiosArgs`, `globalAxios`, `BASE_PATH`, `configuration?`): \<T, R\>(`axios`: `AxiosInstance`, `basePath`: `string`) => `Promise`\<`R`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `axiosArgs` | [`RequestArgs`](interfaces/RequestArgs.md) |
| `globalAxios` | `AxiosInstance` |
| `BASE_PATH` | `string` |
| `configuration?` | [`Configuration`](classes/Configuration.md) |

#### Returns

`fn`

▸ \<`T`, `R`\>(`axios?`, `basePath?`): `Promise`\<`R`\>

##### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `unknown` |
| `R` | `AxiosResponse`\<`T`, `any`\> |

##### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `axios` | `AxiosInstance` | `globalAxios` |
| `basePath` | `string` | `BASE_PATH` |

##### Returns

`Promise`\<`R`\>

**`Export`**

#### Defined in

[packages/shared/common.ts:184](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/shared/common.ts#L184)

___

### serializeDataIfNeeded

▸ **serializeDataIfNeeded**(`value`, `requestOptions`, `configuration?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |
| `requestOptions` | `any` |
| `configuration?` | [`Configuration`](classes/Configuration.md) |

#### Returns

`any`

**`Export`**

#### Defined in

[packages/shared/common.ts:162](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/shared/common.ts#L162)

___

### setApiKeyToObject

▸ **setApiKeyToObject**(`object`, `keyParamName`, `configuration?`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `object` | `any` |
| `keyParamName` | `string` |
| `configuration?` | [`Configuration`](classes/Configuration.md) |

#### Returns

`Promise`\<`void`\>

**`Export`**

#### Defined in

[packages/shared/common.ts:81](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/shared/common.ts#L81)

___

### setBasicAuthToObject

▸ **setBasicAuthToObject**(`object`, `configuration?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `object` | `any` |
| `configuration?` | [`Configuration`](classes/Configuration.md) |

#### Returns

`void`

**`Export`**

#### Defined in

[packages/shared/common.ts:94](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/shared/common.ts#L94)

___

### setBearerAuthToObject

▸ **setBearerAuthToObject**(`object`, `configuration?`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `object` | `any` |
| `configuration?` | [`Configuration`](classes/Configuration.md) |

#### Returns

`Promise`\<`void`\>

**`Export`**

#### Defined in

[packages/shared/common.ts:104](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/shared/common.ts#L104)

___

### setOAuthToObject

▸ **setOAuthToObject**(`object`, `name`, `scopes`, `configuration?`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `object` | `any` |
| `name` | `string` |
| `scopes` | `string`[] |
| `configuration?` | [`Configuration`](classes/Configuration.md) |

#### Returns

`Promise`\<`void`\>

**`Export`**

#### Defined in

[packages/shared/common.ts:117](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/shared/common.ts#L117)

___

### setSearchParams

▸ **setSearchParams**(`url`, `...objects`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `URL` |
| `...objects` | `any`[] |

#### Returns

`void`

**`Export`**

#### Defined in

[packages/shared/common.ts:152](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/shared/common.ts#L152)

___

### toPathString

▸ **toPathString**(`url`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `URL` |

#### Returns

`string`

**`Export`**

#### Defined in

[packages/shared/common.ts:176](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/shared/common.ts#L176)
