[@redhat-cloud-services/integrations-client](../README.md) / [Exports](../modules.md) / BaseAPI

# Class: BaseAPI

Base API to store config, basepath and axios instance.

**`Export`**

BaseAPI

## Table of contents

### Constructors

- [constructor](BaseAPI.md#constructor)

### Properties

- [axios](BaseAPI.md#axios)
- [basePath](BaseAPI.md#basepath)
- [configuration](BaseAPI.md#configuration)

### Methods

- [authConfig](BaseAPI.md#authconfig)
- [sendRequest](BaseAPI.md#sendrequest)

## Constructors

### constructor

• **new BaseAPI**(`basePath?`, `config?`): [`BaseAPI`](BaseAPI.md)

Constructor to create baseAPI.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `basePath` | `string` | `BASE_PATH` | basePath of api requests. |
| `config` | [`ApiConfig`](../interfaces/ApiConfig.md) | `undefined` | to be passed down to axios. |

#### Returns

[`BaseAPI`](BaseAPI.md)

#### Defined in

[packages/integrations/utils/base.ts:70](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/integrations/utils/base.ts#L70)

## Properties

### axios

• `Protected` **axios**: `AxiosInstance`

#### Defined in

[packages/integrations/utils/base.ts:64](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/integrations/utils/base.ts#L64)

___

### basePath

• `Protected` **basePath**: `string` = `BASE_PATH`

basePath of api requests.

#### Defined in

[packages/integrations/utils/base.ts:70](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/integrations/utils/base.ts#L70)

___

### configuration

• `Protected` **configuration**: `undefined` \| [`Configuration`](Configuration.md)

#### Defined in

[packages/integrations/utils/base.ts:63](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/integrations/utils/base.ts#L63)

## Methods

### authConfig

▸ **authConfig**(`«destructured»`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Omit`\<[`RequestArgs`](../interfaces/RequestArgs.md), ``"authType"`` \| ``"authKey"``\> & \{ `authKey?`: `string` \| [`string`, `string`[]] ; `authType`: [`AuthTypeEnum`](../modules.md#authtypeenum)  } |

#### Returns

`Promise`\<`void`\>

#### Defined in

[packages/integrations/utils/base.ts:83](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/integrations/utils/base.ts#L83)

___

### sendRequest

▸ **sendRequest**\<`T`\>(`request`, `axios?`, `basePath?`): `Promise`\<`AxiosResponse`\<`T`, `any`\>\>

Send axios request

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `request` | `Promise`\<[`RequestArgs`](../interfaces/RequestArgs.md)\> | to be send trough axios. |
| `axios?` | `AxiosInstance` | optional axios instance. |
| `basePath?` | `string` | - |

#### Returns

`Promise`\<`AxiosResponse`\<`T`, `any`\>\>

promisable axios response.

#### Defined in

[packages/integrations/utils/base.ts:111](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/integrations/utils/base.ts#L111)
