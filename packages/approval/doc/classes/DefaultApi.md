[@redhat-cloud-services/approval-client](../README.md) / [Exports](../modules.md) / DefaultApi

# Class: DefaultApi

DefaultApi - object-oriented interface

**`Export`**

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

- [getDocumentation](DefaultApi.md#getdocumentation)

## Constructors

### constructor

• **new DefaultApi**(`configuration?`, `basePath?`, `axios?`)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `configuration?` | [`Configuration`](Configuration.md) | `undefined` |
| `basePath` | `string` | `BASE_PATH` |
| `axios` | `AxiosInstance` | `globalAxios` |

#### Inherited from

BaseAPI.constructor

#### Defined in

[base.ts:51](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/base.ts#L51)

## Properties

### axios

• `Protected` **axios**: `AxiosInstance` = `globalAxios`

#### Inherited from

BaseAPI.axios

#### Defined in

[base.ts:51](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/base.ts#L51)

___

### basePath

• `Protected` **basePath**: `string` = `BASE_PATH`

#### Inherited from

BaseAPI.basePath

#### Defined in

[base.ts:51](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/base.ts#L51)

___

### configuration

• `Protected` **configuration**: [`Configuration`](Configuration.md)

#### Inherited from

BaseAPI.configuration

#### Defined in

[base.ts:49](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/base.ts#L49)

## Methods

### getDocumentation

▸ **getDocumentation**(`options?`): `Promise`<`AxiosResponse`<`object`, `any`\>\>

**`Summary`**

Return this API document in JSON format

**`Throws`**

**`Memberof`**

DefaultApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<`object`, `any`\>\>

#### Defined in

[api.ts:1023](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L1023)
