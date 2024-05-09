[@redhat-cloud-services/policies-client](../README.md) / [Exports](../modules.md) / BasePathFillerServiceApi

# Class: BasePathFillerServiceApi

BasePathFillerServiceApi - object-oriented interface

**`Export`**

BasePathFillerServiceApi

## Hierarchy

- `BaseAPI`

  ↳ **`BasePathFillerServiceApi`**

## Table of contents

### Constructors

- [constructor](BasePathFillerServiceApi.md#constructor)

### Properties

- [axios](BasePathFillerServiceApi.md#axios)
- [basePath](BasePathFillerServiceApi.md#basepath)
- [configuration](BasePathFillerServiceApi.md#configuration)

### Methods

- [get](BasePathFillerServiceApi.md#get)

## Constructors

### constructor

• **new BasePathFillerServiceApi**(`configuration?`, `basePath?`, `axios?`): [`BasePathFillerServiceApi`](BasePathFillerServiceApi.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `configuration?` | [`Configuration`](Configuration.md) | `undefined` |
| `basePath` | `string` | `BASE_PATH` |
| `axios` | `AxiosInstance` | `globalAxios` |

#### Returns

[`BasePathFillerServiceApi`](BasePathFillerServiceApi.md)

#### Inherited from

BaseAPI.constructor

#### Defined in

[base.ts:52](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/policies/base.ts#L52)

## Properties

### axios

• `Protected` **axios**: `AxiosInstance` = `globalAxios`

#### Inherited from

BaseAPI.axios

#### Defined in

[base.ts:52](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/policies/base.ts#L52)

___

### basePath

• `Protected` **basePath**: `string` = `BASE_PATH`

#### Inherited from

BaseAPI.basePath

#### Defined in

[base.ts:52](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/policies/base.ts#L52)

___

### configuration

• `Protected` **configuration**: `undefined` \| [`Configuration`](Configuration.md)

#### Inherited from

BaseAPI.configuration

#### Defined in

[base.ts:50](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/policies/base.ts#L50)

## Methods

### get

▸ **get**(`options?`): `Promise`\<`AxiosResponse`\<`void`, `any`\>\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | `AxiosRequestConfig`\<`any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<`void`, `any`\>\>

**`Summary`**

Just a filler to have a defined return code for the base path

**`Throws`**

**`Memberof`**

BasePathFillerServiceApi

#### Defined in

[api.ts:339](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/policies/api.ts#L339)
