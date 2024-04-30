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

Ƭ **ActionType**: (...`config`: `any`) => `Promise`<[`RequestArgs`](interfaces/RequestArgs.md)\>

#### Type declaration

▸ (...`config`): `Promise`<[`RequestArgs`](interfaces/RequestArgs.md)\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `...config` | `any` |

##### Returns

`Promise`<[`RequestArgs`](interfaces/RequestArgs.md)\>

#### Defined in

[packages/shared/common.ts:46](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/shared/common.ts#L46)

___

### AuthTypeEnum

Ƭ **AuthTypeEnum**: typeof [`AuthTypeEnum`](modules.md#authtypeenum-1)[keyof typeof [`AuthTypeEnum`](modules.md#authtypeenum-1)]

#### Defined in

[packages/shared/common.ts:7](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/shared/common.ts#L7)

[packages/shared/common.ts:15](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/shared/common.ts#L15)

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

[packages/shared/common.ts:7](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/shared/common.ts#L7)

[packages/shared/common.ts:15](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/shared/common.ts#L15)

___

### DUMMY\_BASE\_URL

• `Const` **DUMMY\_BASE\_URL**: ``"https://example.com"``

**`Export`**

#### Defined in

[packages/shared/common.ts:57](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/shared/common.ts#L57)

## Functions

### APIFactory

▸ **APIFactory**<`T`\>(`basePath`, `config?`, `actions`): [`BaseAPI`](classes/BaseAPI.md) & `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Record`<`string`, [`ActionType`](modules.md#actiontype)\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `basePath` | `string` |
| `config` | [`ApiConfig`](interfaces/ApiConfig.md) |
| `actions` | `T` |

#### Returns

[`BaseAPI`](classes/BaseAPI.md) & `T`

#### Defined in

[packages/shared/utils.ts:5](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/shared/utils.ts#L5)

___

### assertParamExists

▸ **assertParamExists**(`functionName`, `paramName`, `paramValue`): `void`

**`Throws`**

**`Export`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionName` | `string` |
| `paramName` | `string` |
| `paramValue` | `unknown` |

#### Returns

`void`

#### Defined in

[packages/shared/common.ts:64](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/shared/common.ts#L64)

___

### createRequestFunction

▸ **createRequestFunction**(`axiosArgs`, `globalAxios`, `BASE_PATH`, `configuration?`): <T, R\>(`axios`: `AxiosInstance`, `basePath`: `string`) => `Promise`<`R`\>

**`Export`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `axiosArgs` | [`RequestArgs`](interfaces/RequestArgs.md) |
| `globalAxios` | `AxiosInstance` |
| `BASE_PATH` | `string` |
| `configuration?` | [`Configuration`](classes/Configuration.md) |

#### Returns

`fn`

▸ <`T`, `R`\>(`axios?`, `basePath?`): `Promise`<`R`\>

##### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `unknown` |
| `R` | `AxiosResponse`<`T`, `any`\> |

##### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `axios` | `AxiosInstance` | `globalAxios` |
| `basePath` | `string` | `BASE_PATH` |

##### Returns

`Promise`<`R`\>

#### Defined in

[packages/shared/common.ts:177](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/shared/common.ts#L177)

___

### serializeDataIfNeeded

▸ **serializeDataIfNeeded**(`value`, `requestOptions`, `configuration?`): `any`

**`Export`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |
| `requestOptions` | `any` |
| `configuration?` | [`Configuration`](classes/Configuration.md) |

#### Returns

`any`

#### Defined in

[packages/shared/common.ts:155](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/shared/common.ts#L155)

___

### setApiKeyToObject

▸ **setApiKeyToObject**(`object`, `keyParamName`, `configuration?`): `Promise`<`void`\>

**`Export`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `object` | `any` |
| `keyParamName` | `string` |
| `configuration?` | [`Configuration`](classes/Configuration.md) |

#### Returns

`Promise`<`void`\>

#### Defined in

[packages/shared/common.ts:74](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/shared/common.ts#L74)

___

### setBasicAuthToObject

▸ **setBasicAuthToObject**(`object`, `configuration?`): `void`

**`Export`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `object` | `any` |
| `configuration?` | [`Configuration`](classes/Configuration.md) |

#### Returns

`void`

#### Defined in

[packages/shared/common.ts:87](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/shared/common.ts#L87)

___

### setBearerAuthToObject

▸ **setBearerAuthToObject**(`object`, `configuration?`): `Promise`<`void`\>

**`Export`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `object` | `any` |
| `configuration?` | [`Configuration`](classes/Configuration.md) |

#### Returns

`Promise`<`void`\>

#### Defined in

[packages/shared/common.ts:97](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/shared/common.ts#L97)

___

### setOAuthToObject

▸ **setOAuthToObject**(`object`, `name`, `scopes`, `configuration?`): `Promise`<`void`\>

**`Export`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `object` | `any` |
| `name` | `string` |
| `scopes` | `string`[] |
| `configuration?` | [`Configuration`](classes/Configuration.md) |

#### Returns

`Promise`<`void`\>

#### Defined in

[packages/shared/common.ts:110](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/shared/common.ts#L110)

___

### setSearchParams

▸ **setSearchParams**(`url`, ...`objects`): `void`

**`Export`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `URL` |
| `...objects` | `any`[] |

#### Returns

`void`

#### Defined in

[packages/shared/common.ts:145](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/shared/common.ts#L145)

___

### toPathString

▸ **toPathString**(`url`): `string`

**`Export`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `URL` |

#### Returns

`string`

#### Defined in

[packages/shared/common.ts:169](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/shared/common.ts#L169)
