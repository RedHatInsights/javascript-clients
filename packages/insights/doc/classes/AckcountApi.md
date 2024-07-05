[@redhat-cloud-services/insights-client](../README.md) / [Exports](../modules.md) / AckcountApi

# Class: AckcountApi

AckcountApi - object-oriented interface

**`Export`**

AckcountApi

## Hierarchy

- `BaseAPI`

  ↳ **`AckcountApi`**

## Table of contents

### Constructors

- [constructor](AckcountApi.md#constructor)

### Properties

- [axios](AckcountApi.md#axios)
- [basePath](AckcountApi.md#basepath)
- [configuration](AckcountApi.md#configuration)

### Methods

- [ackcountList](AckcountApi.md#ackcountlist)
- [ackcountRetrieve](AckcountApi.md#ackcountretrieve)

## Constructors

### constructor

• **new AckcountApi**(`configuration?`, `basePath?`, `axios?`): [`AckcountApi`](AckcountApi.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `configuration?` | [`Configuration`](Configuration.md) | `undefined` |
| `basePath` | `string` | `BASE_PATH` |
| `axios` | `AxiosInstance` | `globalAxios` |

#### Returns

[`AckcountApi`](AckcountApi.md)

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

### ackcountList

▸ **ackcountList**(`options?`): `Promise`\<`AxiosResponse`\<[`AckCount`](../interfaces/AckCount.md)[], `any`\>\>

Get the ack counts for all active rules  Return a list of rule_ids and their ack counts

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<[`AckCount`](../interfaces/AckCount.md)[], `any`\>\>

**`Throws`**

**`Memberof`**

AckcountApi

#### Defined in

[api.ts:3258](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/insights/api.ts#L3258)

___

### ackcountRetrieve

▸ **ackcountRetrieve**(`ruleId`, `options?`): `Promise`\<`AxiosResponse`\<[`AckCount`](../interfaces/AckCount.md), `any`\>\>

Get the ack count for the given rule_id  Returns the rule_id and its ack count

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ruleId` | `string` |  |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<[`AckCount`](../interfaces/AckCount.md), `any`\>\>

**`Throws`**

**`Memberof`**

AckcountApi

#### Defined in

[api.ts:3269](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/insights/api.ts#L3269)
