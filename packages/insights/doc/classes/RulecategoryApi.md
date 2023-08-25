[@redhat-cloud-services/insights-client](../README.md) / [Exports](../modules.md) / RulecategoryApi

# Class: RulecategoryApi

RulecategoryApi - object-oriented interface

**`Export`**

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

• **new RulecategoryApi**(`configuration?`, `basePath?`, `axios?`)

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

• `Protected` **configuration**: [`Configuration`](Configuration.md)

#### Inherited from

BaseAPI.configuration

#### Defined in

[base.ts:49](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/base.ts#L49)

## Methods

### rulecategoryList

▸ **rulecategoryList**(`options?`): `Promise`<`AxiosResponse`<[`RuleCategory`](../interfaces/RuleCategory.md)[]\>\>

Rules are divided into categories, the usual being Availability, Stability, Security and Performance.  Categories are listed in decreasing order of importance.

**`Throws`**

**`Memberof`**

RulecategoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`RuleCategory`](../interfaces/RuleCategory.md)[]\>\>

#### Defined in

[api.ts:404](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L404)

___

### rulecategoryRetrieve

▸ **rulecategoryRetrieve**(`id`, `options?`): `Promise`<`AxiosResponse`<[`RuleCategory`](../interfaces/RuleCategory.md)\>\>

Rules are divided into categories, the usual being Availability, Stability, Security and Performance.  Categories are listed in decreasing order of importance.

**`Throws`**

**`Memberof`**

RulecategoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `number` | A unique integer value identifying this rule category. |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`RuleCategory`](../interfaces/RuleCategory.md)\>\>

#### Defined in

[api.ts:415](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L415)
