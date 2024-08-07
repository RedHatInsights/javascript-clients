[@redhat-cloud-services/insights-client](../README.md) / [Exports](../modules.md) / WeeklyreportsubscriptionApi

# Class: WeeklyreportsubscriptionApi

WeeklyreportsubscriptionApi - object-oriented interface

**`Export`**

WeeklyreportsubscriptionApi

## Hierarchy

- `BaseAPI`

  ↳ **`WeeklyreportsubscriptionApi`**

## Table of contents

### Constructors

- [constructor](WeeklyreportsubscriptionApi.md#constructor)

### Properties

- [axios](WeeklyreportsubscriptionApi.md#axios)
- [basePath](WeeklyreportsubscriptionApi.md#basepath)
- [configuration](WeeklyreportsubscriptionApi.md#configuration)

### Methods

- [weeklyreportsubscriptionCreate](WeeklyreportsubscriptionApi.md#weeklyreportsubscriptioncreate)
- [weeklyreportsubscriptionList](WeeklyreportsubscriptionApi.md#weeklyreportsubscriptionlist)

## Constructors

### constructor

• **new WeeklyreportsubscriptionApi**(`configuration?`, `basePath?`, `axios?`): [`WeeklyreportsubscriptionApi`](WeeklyreportsubscriptionApi.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `configuration?` | [`Configuration`](Configuration.md) | `undefined` |
| `basePath` | `string` | `BASE_PATH` |
| `axios` | `AxiosInstance` | `globalAxios` |

#### Returns

[`WeeklyreportsubscriptionApi`](WeeklyreportsubscriptionApi.md)

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

### weeklyreportsubscriptionCreate

▸ **weeklyreportsubscriptionCreate**(`weeklyReportSubscription`, `options?`): `Promise`\<`AxiosResponse`\<[`WeeklyReportSubscription`](../interfaces/WeeklyReportSubscription.md), `any`\>\>

Set the subscription status of the current user to the supplied `is_subscribed` value.  If \'is_subscribed\' is true, a subscription is added if it doesn\'t already exist.  If it is false, the subscription is removed if it exists.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `weeklyReportSubscription` | [`WeeklyReportSubscription`](../interfaces/WeeklyReportSubscription.md) |  |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<[`WeeklyReportSubscription`](../interfaces/WeeklyReportSubscription.md), `any`\>\>

**`Throws`**

**`Memberof`**

WeeklyreportsubscriptionApi

#### Defined in

[api.ts:10716](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/insights/api.ts#L10716)

___

### weeklyreportsubscriptionList

▸ **weeklyreportsubscriptionList**(`options?`): `Promise`\<`AxiosResponse`\<[`WeeklyReportSubscription`](../interfaces/WeeklyReportSubscription.md)[], `any`\>\>

Show the user\'s current subscription status.  This shows the presence of a weekly report subscription by the user in this account.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<[`WeeklyReportSubscription`](../interfaces/WeeklyReportSubscription.md)[], `any`\>\>

**`Throws`**

**`Memberof`**

WeeklyreportsubscriptionApi

#### Defined in

[api.ts:10726](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/insights/api.ts#L10726)
