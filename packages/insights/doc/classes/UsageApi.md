[@redhat-cloud-services/insights-client](../README.md) / [Exports](../modules.md) / UsageApi

# Class: UsageApi

UsageApi - object-oriented interface

**`Export`**

## Hierarchy

- `BaseAPI`

  ↳ **`UsageApi`**

## Table of contents

### Constructors

- [constructor](UsageApi.md#constructor)

### Properties

- [axios](UsageApi.md#axios)
- [basePath](UsageApi.md#basepath)
- [configuration](UsageApi.md#configuration)

### Methods

- [usageList](UsageApi.md#usagelist)

## Constructors

### constructor

• **new UsageApi**(`configuration?`, `basePath?`, `axios?`)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `configuration?` | [`Configuration`](Configuration.md) | `undefined` |
| `basePath` | `string` | `BASE_PATH` |
| `axios` | `AxiosInstance` | `globalAxios` |

#### Inherited from

BaseAPI.constructor

#### Defined in

[base.ts:51](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/base.ts#L51)

## Properties

### axios

• `Protected` **axios**: `AxiosInstance` = `globalAxios`

#### Inherited from

BaseAPI.axios

#### Defined in

[base.ts:51](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/base.ts#L51)

___

### basePath

• `Protected` **basePath**: `string` = `BASE_PATH`

#### Inherited from

BaseAPI.basePath

#### Defined in

[base.ts:51](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/base.ts#L51)

___

### configuration

• `Protected` **configuration**: `undefined` \| [`Configuration`](Configuration.md)

#### Inherited from

BaseAPI.configuration

#### Defined in

[base.ts:49](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/base.ts#L49)

## Methods

### usageList

▸ **usageList**(`account?`, `end?`, `orgId?`, `start?`, `options?`): `Promise`<`AxiosResponse`<[`Usage`](../interfaces/Usage.md), `any`\>\>

List the unique rule hits for this account over the given time range  This uses a HashLogLog structure to record number of hits, and this is therefore an approximation.

**`Throws`**

**`Memberof`**

UsageApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `account?` | `string`[] | Allow &#x60;hydrauser&#x60; to view any account |
| `end?` | `string` | End date for statistics range |
| `orgId?` | `string` | Allow &#x60;hydrauser&#x60; to view any org_id |
| `start?` | `string` | Start date for statistics range |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`Usage`](../interfaces/Usage.md), `any`\>\>

#### Defined in

[api.ts:10196](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L10196)
