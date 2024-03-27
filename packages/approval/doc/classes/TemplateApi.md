[@redhat-cloud-services/approval-client](../README.md) / [Exports](../modules.md) / TemplateApi

# Class: TemplateApi

TemplateApi - object-oriented interface

**`Export`**

## Hierarchy

- `BaseAPI`

  ↳ **`TemplateApi`**

## Table of contents

### Constructors

- [constructor](TemplateApi.md#constructor)

### Properties

- [axios](TemplateApi.md#axios)
- [basePath](TemplateApi.md#basepath)
- [configuration](TemplateApi.md#configuration)

### Methods

- [listTemplates](TemplateApi.md#listtemplates)
- [showTemplate](TemplateApi.md#showtemplate)

## Constructors

### constructor

• **new TemplateApi**(`configuration?`, `basePath?`, `axios?`)

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

• `Protected` **configuration**: `undefined` \| [`Configuration`](Configuration.md)

#### Inherited from

BaseAPI.configuration

#### Defined in

[base.ts:49](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/base.ts#L49)

## Methods

### listTemplates

▸ **listTemplates**(`limit?`, `offset?`, `filter?`, `sortBy?`, `options?`): `Promise`<`AxiosResponse`<[`TemplateCollection`](../interfaces/TemplateCollection.md), `any`\>\>

Find all templates, available to admin only

**`Summary`**

List templates

**`Throws`**

**`Memberof`**

TemplateApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `limit?` | `number` | Maximum number of items per page. Used by pagination |
| `offset?` | `number` | Number of items to skip before starting to collect the result set. Used by pagination |
| `filter?` | `object` | Filter for querying collections |
| `sortBy?` | `string` | Attribute used to sort a collection |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`TemplateCollection`](../interfaces/TemplateCollection.md), `any`\>\>

#### Defined in

[api.ts:1766](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L1766)

___

### showTemplate

▸ **showTemplate**(`id`, `options?`): `Promise`<`AxiosResponse`<[`Template`](../interfaces/Template.md), `any`\>\>

Find a template by its id, available to admin only

**`Summary`**

Return a template

**`Throws`**

**`Memberof`**

TemplateApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | ID used to select a resource |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`Template`](../interfaces/Template.md), `any`\>\>

#### Defined in

[api.ts:1778](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L1778)
