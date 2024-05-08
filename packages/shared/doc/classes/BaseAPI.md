[@redhat-cloud-services/javascript-clients-shared](../README.md) / [Exports](../modules.md) / BaseAPI

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

| Name | Type | Description |
| :------ | :------ | :------ |
| `basePath?` | `string` | basePath of api requests. |
| `config` | [`ApiConfig`](../interfaces/ApiConfig.md) | to be passed down to axios. |

#### Returns

[`BaseAPI`](BaseAPI.md)

#### Defined in

[packages/shared/base.ts:19](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/shared/base.ts#L19)

## Properties

### axios

• `Protected` **axios**: `AxiosInstance`

#### Defined in

[packages/shared/base.ts:13](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/shared/base.ts#L13)

___

### basePath

• `Protected` `Optional` **basePath**: `string`

basePath of api requests.

#### Defined in

[packages/shared/base.ts:19](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/shared/base.ts#L19)

___

### configuration

• `Protected` **configuration**: `undefined` \| [`Configuration`](Configuration.md)

#### Defined in

[packages/shared/base.ts:12](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/shared/base.ts#L12)

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

[packages/shared/base.ts:27](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/shared/base.ts#L27)

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

[packages/shared/base.ts:55](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/shared/base.ts#L55)
