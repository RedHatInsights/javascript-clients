[@redhat-cloud-services/javascript-clients-shared](../README.md) / [Exports](../modules.md) / BaseAPI

# Class: BaseAPI

Base API to store config, basepath and axios instance.

**`Export`**

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

• **new BaseAPI**(`basePath`, `config?`)

Constructor to create baseAPI.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `basePath` | `string` | basePath of api requests. |
| `config` | [`ApiConfig`](../interfaces/ApiConfig.md) | to be passed down to axios. |

#### Defined in

[packages/shared/base.ts:19](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/shared/base.ts#L19)

## Properties

### axios

• `Protected` **axios**: `AxiosInstance`

#### Defined in

[packages/shared/base.ts:13](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/shared/base.ts#L13)

___

### basePath

• `Protected` **basePath**: `string`

#### Defined in

[packages/shared/base.ts:19](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/shared/base.ts#L19)

___

### configuration

• `Protected` **configuration**: `undefined` \| [`Configuration`](Configuration.md)

#### Defined in

[packages/shared/base.ts:12](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/shared/base.ts#L12)

## Methods

### authConfig

▸ `Private` **authConfig**(`__namedParameters`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | `Omit`<[`RequestArgs`](../interfaces/RequestArgs.md), ``"authType"`` \| ``"authKey"``\> & { `authKey?`: `string` \| [`string`, `string`[]] ; `authType`: [`AuthTypeEnum`](../modules.md#authtypeenum-1)  } |

#### Returns

`Promise`<`void`\>

#### Defined in

[packages/shared/base.ts:32](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/shared/base.ts#L32)

___

### sendRequest

▸ **sendRequest**<`T`\>(`request`, `axios?`, `basePath?`): `Promise`<`AxiosResponse`<`T`, `any`\>\>

Send axios request

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `request` | `Promise`<[`RequestArgs`](../interfaces/RequestArgs.md)\> | to be send trough axios. |
| `axios?` | `AxiosInstance` | optional axios instance. |
| `basePath?` | `string` | - |

#### Returns

`Promise`<`AxiosResponse`<`T`, `any`\>\>

promisable axios response.

#### Defined in

[packages/shared/base.ts:60](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/shared/base.ts#L60)
