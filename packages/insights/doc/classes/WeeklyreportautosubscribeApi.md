[@redhat-cloud-services/insights-client](../README.md) / [Exports](../modules.md) / WeeklyreportautosubscribeApi

# Class: WeeklyreportautosubscribeApi

WeeklyreportautosubscribeApi - object-oriented interface

**`Export`**

## Hierarchy

- `BaseAPI`

  ↳ **`WeeklyreportautosubscribeApi`**

## Table of contents

### Constructors

- [constructor](WeeklyreportautosubscribeApi.md#constructor)

### Properties

- [axios](WeeklyreportautosubscribeApi.md#axios)
- [basePath](WeeklyreportautosubscribeApi.md#basepath)
- [configuration](WeeklyreportautosubscribeApi.md#configuration)

### Methods

- [weeklyreportautosubscribeCreate](WeeklyreportautosubscribeApi.md#weeklyreportautosubscribecreate)
- [weeklyreportautosubscribeList](WeeklyreportautosubscribeApi.md#weeklyreportautosubscribelist)

## Constructors

### constructor

• **new WeeklyreportautosubscribeApi**(`configuration?`, `basePath?`, `axios?`)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `configuration?` | [`Configuration`](Configuration.md) | `undefined` |
| `basePath` | `string` | `BASE_PATH` |
| `axios` | `AxiosInstance` | `globalAxios` |

#### Inherited from

BaseAPI.constructor

#### Defined in

[base.ts:51](https://github.com/mkholjuraev/javascript-clients/blob/master/packages/insights/base.ts#L51)

## Properties

### axios

• `Protected` **axios**: `AxiosInstance` = `globalAxios`

#### Inherited from

BaseAPI.axios

#### Defined in

[base.ts:51](https://github.com/mkholjuraev/javascript-clients/blob/master/packages/insights/base.ts#L51)

___

### basePath

• `Protected` **basePath**: `string` = `BASE_PATH`

#### Inherited from

BaseAPI.basePath

#### Defined in

[base.ts:51](https://github.com/mkholjuraev/javascript-clients/blob/master/packages/insights/base.ts#L51)

___

### configuration

• `Protected` **configuration**: [`Configuration`](Configuration.md)

#### Inherited from

BaseAPI.configuration

#### Defined in

[base.ts:49](https://github.com/mkholjuraev/javascript-clients/blob/master/packages/insights/base.ts#L49)

## Methods

### weeklyreportautosubscribeCreate

▸ **weeklyreportautosubscribeCreate**(`autoSubscribeInput`, `options?`): `Promise`<`AxiosResponse`<[`AutoSubscribe`](../interfaces/AutoSubscribe.md), `any`\>\>

Set the auto-subscription status of the current user to the supplied `is_auto_subscribed` value.  If \'is_auto_subscribed\' is true, an auto-subscription is added if it doesn\'t already exist.  If it is false, the auto-subscription is removed if it exists.  Check if ENABLE_AUTOSUB enviroment variable is set to allow the method.

**`Throws`**

**`Memberof`**

WeeklyreportautosubscribeApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `autoSubscribeInput` | [`AutoSubscribeInput`](../interfaces/AutoSubscribeInput.md) |  |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`AutoSubscribe`](../interfaces/AutoSubscribe.md), `any`\>\>

#### Defined in

[api.ts:10139](https://github.com/mkholjuraev/javascript-clients/blob/master/packages/insights/api.ts#L10139)

___

### weeklyreportautosubscribeList

▸ **weeklyreportautosubscribeList**(`options?`): `Promise`<`AxiosResponse`<[`AutoSubscribe`](../interfaces/AutoSubscribe.md)[], `any`\>\>

Show the user\'s current subscription status.  This shows the presence of a weekly report subscription by the user in this account.

**`Throws`**

**`Memberof`**

WeeklyreportautosubscribeApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`AutoSubscribe`](../interfaces/AutoSubscribe.md)[], `any`\>\>

#### Defined in

[api.ts:10149](https://github.com/mkholjuraev/javascript-clients/blob/master/packages/insights/api.ts#L10149)
