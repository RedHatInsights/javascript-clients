[@redhat-cloud-services/catalog-client](../README.md) / [Exports](../modules.md) / IconApi

# Class: IconApi

IconApi - object-oriented interface

**`Export`**

## Hierarchy

- `BaseAPI`

  ↳ **`IconApi`**

## Table of contents

### Constructors

- [constructor](IconApi.md#constructor)

### Properties

- [axios](IconApi.md#axios)
- [basePath](IconApi.md#basepath)
- [configuration](IconApi.md#configuration)

### Methods

- [createIcon](IconApi.md#createicon)
- [destroyIcon](IconApi.md#destroyicon)

## Constructors

### constructor

• **new IconApi**(`configuration?`, `basePath?`, `axios?`)

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

• `Protected` **configuration**: `undefined` \| [`Configuration`](Configuration.md)

#### Inherited from

BaseAPI.configuration

#### Defined in

[base.ts:49](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/base.ts#L49)

## Methods

### createIcon

▸ **createIcon**(`content?`, `portfolioId?`, `portfolioItemId?`, `options?`): `Promise`<`AxiosResponse`<[`Icon`](../interfaces/Icon.md), `any`\>\>

Creates an Icon from the specified parameters

**`Summary`**

Create an Icon

**`Throws`**

**`Memberof`**

IconApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `content?` | `any` | The binary image contents, maximum size is 250KB |
| `portfolioId?` | `string` | The Portfolio this Icon belongs to |
| `portfolioItemId?` | `string` | The Portfolio Item this Icon belongs to |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`Icon`](../interfaces/Icon.md), `any`\>\>

#### Defined in

[api.ts:1789](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L1789)

___

### destroyIcon

▸ **destroyIcon**(`id`, `options?`): `Promise`<`AxiosResponse`<`void`, `any`\>\>

Deletes the icon based on the icon ID passed

**`Summary`**

Delete an existing Icon

**`Throws`**

**`Memberof`**

IconApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | ID of the resource |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<`void`, `any`\>\>

#### Defined in

[api.ts:1801](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L1801)
