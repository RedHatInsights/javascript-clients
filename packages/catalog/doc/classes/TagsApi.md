[@redhat-cloud-services/catalog-client](../README.md) / [Exports](../modules.md) / TagsApi

# Class: TagsApi

TagsApi - object-oriented interface

**`Export`**

## Hierarchy

- `BaseAPI`

  ↳ **`TagsApi`**

## Table of contents

### Constructors

- [constructor](TagsApi.md#constructor)

### Properties

- [axios](TagsApi.md#axios)
- [basePath](TagsApi.md#basepath)
- [configuration](TagsApi.md#configuration)

### Methods

- [listTags](TagsApi.md#listtags)

## Constructors

### constructor

• **new TagsApi**(`configuration?`, `basePath?`, `axios?`)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `configuration?` | [`Configuration`](Configuration.md) | `undefined` |
| `basePath` | `string` | `BASE_PATH` |
| `axios` | `AxiosInstance` | `globalAxios` |

#### Inherited from

BaseAPI.constructor

#### Defined in

[base.ts:51](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/base.ts#L51)

## Properties

### axios

• `Protected` **axios**: `AxiosInstance` = `globalAxios`

#### Inherited from

BaseAPI.axios

#### Defined in

[base.ts:51](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/base.ts#L51)

___

### basePath

• `Protected` **basePath**: `string` = `BASE_PATH`

#### Inherited from

BaseAPI.basePath

#### Defined in

[base.ts:51](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/base.ts#L51)

___

### configuration

• `Protected` **configuration**: [`Configuration`](Configuration.md)

#### Inherited from

BaseAPI.configuration

#### Defined in

[base.ts:49](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/base.ts#L49)

## Methods

### listTags

▸ **listTags**(`options?`): `Promise`<`AxiosResponse`<[`TagsCollection`](../interfaces/TagsCollection.md)\>\>

List Tags

**`Summary`**

List Tags

**`Throws`**

**`Memberof`**

TagsApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`TagsCollection`](../interfaces/TagsCollection.md)\>\>

#### Defined in

[api.ts:8127](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L8127)
