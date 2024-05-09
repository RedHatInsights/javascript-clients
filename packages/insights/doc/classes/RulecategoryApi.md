[@redhat-cloud-services/insights-client](../README.md) / [Exports](../modules.md) / RulecategoryApi

# Class: RulecategoryApi

RulecategoryApi - object-oriented interface

**`Export`**

RulecategoryApi

## Hierarchy

- `BaseAPI`

  ↳ **`RulecategoryApi`**

## Table of contents

### Constructors

- [constructor](RulecategoryApi.md#constructor)

### Properties

- [axios](RulecategoryApi.md#axios)
- [basePath](RulecategoryApi.md#basepath)
- [configuration](RulecategoryApi.md#configuration)

### Methods

- [rulecategoryList](RulecategoryApi.md#rulecategorylist)
- [rulecategoryRetrieve](RulecategoryApi.md#rulecategoryretrieve)

## Constructors

### constructor

• **new RulecategoryApi**(`configuration?`, `basePath?`, `axios?`): [`RulecategoryApi`](RulecategoryApi.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `configuration?` | [`Configuration`](Configuration.md) | `undefined` |
| `basePath` | `string` | `BASE_PATH` |
| `axios` | `AxiosInstance` | `globalAxios` |

#### Returns

[`RulecategoryApi`](RulecategoryApi.md)

#### Inherited from

BaseAPI.constructor

#### Defined in

[base.ts:51](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/insights/base.ts#L51)

## Properties

### axios

• `Protected` **axios**: `AxiosInstance` = `globalAxios`

#### Inherited from

BaseAPI.axios

#### Defined in

[base.ts:51](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/insights/base.ts#L51)

___

### basePath

• `Protected` **basePath**: `string` = `BASE_PATH`

#### Inherited from

BaseAPI.basePath

#### Defined in

[base.ts:51](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/insights/base.ts#L51)

___

### configuration

• `Protected` **configuration**: `undefined` \| [`Configuration`](Configuration.md)

#### Inherited from

BaseAPI.configuration

#### Defined in

[base.ts:49](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/insights/base.ts#L49)

## Methods

### rulecategoryList

▸ **rulecategoryList**(`options?`): `Promise`\<`AxiosResponse`\<[`RuleCategory`](../interfaces/RuleCategory.md)[], `any`\>\>

Rules are divided into categories, the usual being Availability, Stability, Security and Performance.  Categories are listed in decreasing order of importance.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<[`RuleCategory`](../interfaces/RuleCategory.md)[], `any`\>\>

**`Throws`**

**`Memberof`**

RulecategoryApi

#### Defined in

[api.ts:7724](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/insights/api.ts#L7724)

___

### rulecategoryRetrieve

▸ **rulecategoryRetrieve**(`id`, `options?`): `Promise`\<`AxiosResponse`\<[`RuleCategory`](../interfaces/RuleCategory.md), `any`\>\>

Rules are divided into categories, the usual being Availability, Stability, Security and Performance.  Categories are listed in decreasing order of importance.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `number` | A unique integer value identifying this rule category. |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<[`RuleCategory`](../interfaces/RuleCategory.md), `any`\>\>

**`Throws`**

**`Memberof`**

RulecategoryApi

#### Defined in

[api.ts:7735](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/insights/api.ts#L7735)
