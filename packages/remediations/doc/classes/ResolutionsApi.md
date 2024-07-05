[@redhat-cloud-services/remediations-client](../README.md) / [Exports](../modules.md) / ResolutionsApi

# Class: ResolutionsApi

ResolutionsApi - object-oriented interface

**`Export`**

ResolutionsApi

## Hierarchy

- `BaseAPI`

  ↳ **`ResolutionsApi`**

## Table of contents

### Constructors

- [constructor](ResolutionsApi.md#constructor)

### Properties

- [axios](ResolutionsApi.md#axios)
- [basePath](ResolutionsApi.md#basepath)
- [configuration](ResolutionsApi.md#configuration)

### Methods

- [getResolutionsForIssue](ResolutionsApi.md#getresolutionsforissue)
- [getResolutionsForIssues](ResolutionsApi.md#getresolutionsforissues)

## Constructors

### constructor

• **new ResolutionsApi**(`configuration?`, `basePath?`, `axios?`): [`ResolutionsApi`](ResolutionsApi.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `configuration?` | [`Configuration`](Configuration.md) | `undefined` |
| `basePath` | `string` | `BASE_PATH` |
| `axios` | `AxiosInstance` | `globalAxios` |

#### Returns

[`ResolutionsApi`](ResolutionsApi.md)

#### Inherited from

BaseAPI.constructor

#### Defined in

[base.ts:51](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/remediations/base.ts#L51)

## Properties

### axios

• `Protected` **axios**: `AxiosInstance` = `globalAxios`

#### Inherited from

BaseAPI.axios

#### Defined in

[base.ts:51](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/remediations/base.ts#L51)

___

### basePath

• `Protected` **basePath**: `string` = `BASE_PATH`

#### Inherited from

BaseAPI.basePath

#### Defined in

[base.ts:51](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/remediations/base.ts#L51)

___

### configuration

• `Protected` **configuration**: `undefined` \| [`Configuration`](Configuration.md)

#### Inherited from

BaseAPI.configuration

#### Defined in

[base.ts:49](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/remediations/base.ts#L49)

## Methods

### getResolutionsForIssue

▸ **getResolutionsForIssue**(`issue`, `options?`): `Promise`\<`AxiosResponse`\<[`Resolutions`](../interfaces/Resolutions.md), `any`\>\>

Provides information about resolutions available for the given issue

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `issue` | `string` | Issue identifier (e.g. &#x60;advisor:CVE_2017_6074_kernel\|KERNEL_CVE_2017_6074&#x60;) |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<[`Resolutions`](../interfaces/Resolutions.md), `any`\>\>

**`Summary`**

Resolution metadata

**`Throws`**

**`Memberof`**

ResolutionsApi

#### Defined in

[api.ts:3577](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/remediations/api.ts#L3577)

___

### getResolutionsForIssues

▸ **getResolutionsForIssues**(`resolutionsBatchInput`, `options?`): `Promise`\<`AxiosResponse`\<\{ `[key: string]`: [`Resolutions`](../interfaces/Resolutions.md) \| `boolean`;  }, `any`\>\>

Provides information about resolutions available for the given issues

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `resolutionsBatchInput` | [`ResolutionsBatchInput`](../interfaces/ResolutionsBatchInput.md) |  |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<\{ `[key: string]`: [`Resolutions`](../interfaces/Resolutions.md) \| `boolean`;  }, `any`\>\>

**`Summary`**

Resolution metadata (batch)

**`Throws`**

**`Memberof`**

ResolutionsApi

#### Defined in

[api.ts:3589](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/remediations/api.ts#L3589)
