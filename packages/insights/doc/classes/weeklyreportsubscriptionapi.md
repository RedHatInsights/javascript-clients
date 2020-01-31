[@redhat-cloud-services/insights-client](../README.md) > [WeeklyreportsubscriptionApi](../classes/weeklyreportsubscriptionapi.md)

# Class: WeeklyreportsubscriptionApi

WeeklyreportsubscriptionApi - object-oriented interface

*__export__*: 

*__class__*: WeeklyreportsubscriptionApi

*__extends__*: {BaseAPI}

## Hierarchy

 [BaseAPI](baseapi.md)

**↳ WeeklyreportsubscriptionApi**

## Index

### Constructors

* [constructor](weeklyreportsubscriptionapi.md#constructor)

### Properties

* [axios](weeklyreportsubscriptionapi.md#axios)
* [basePath](weeklyreportsubscriptionapi.md#basepath)
* [configuration](weeklyreportsubscriptionapi.md#configuration)

### Methods

* [weeklyreportsubscriptionCreate](weeklyreportsubscriptionapi.md#weeklyreportsubscriptioncreate)
* [weeklyreportsubscriptionList](weeklyreportsubscriptionapi.md#weeklyreportsubscriptionlist)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new WeeklyreportsubscriptionApi**(configuration?: *[Configuration](configuration.md)*, basePath?: *`string`*, axios?: *`AxiosInstance`*): [WeeklyreportsubscriptionApi](weeklyreportsubscriptionapi.md)

*Inherited from [BaseAPI](baseapi.md).[constructor](baseapi.md#constructor)*

*Defined in [api.ts:49](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L49)*

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| `Optional` configuration | [Configuration](configuration.md) | - |
| `Default value` basePath | `string` |  BASE_PATH |
| `Default value` axios | `AxiosInstance` |  globalAxios |

**Returns:** [WeeklyreportsubscriptionApi](weeklyreportsubscriptionapi.md)

___

## Properties

<a id="axios"></a>

### `<Protected>` axios

**● axios**: *`AxiosInstance`*

*Inherited from [BaseAPI](baseapi.md).[axios](baseapi.md#axios)*

*Defined in [api.ts:51](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L51)*

___
<a id="basepath"></a>

### `<Protected>` basePath

**● basePath**: *`string`*

*Inherited from [BaseAPI](baseapi.md).[basePath](baseapi.md#basepath)*

*Defined in [api.ts:51](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L51)*

___
<a id="configuration"></a>

### `<Protected>` configuration

**● configuration**: *[Configuration](configuration.md) \| `undefined`*

*Inherited from [BaseAPI](baseapi.md).[configuration](baseapi.md#configuration)*

*Defined in [api.ts:49](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L49)*

___

## Methods

<a id="weeklyreportsubscriptioncreate"></a>

###  weeklyreportsubscriptionCreate

▸ **weeklyreportsubscriptionCreate**(weeklyReportSubscription: *[WeeklyReportSubscription](../interfaces/weeklyreportsubscription.md)*, options?: *`any`*): `AxiosPromise`<[WeeklyReportSubscription](../interfaces/weeklyreportsubscription.md)>

*Defined in [api.ts:5329](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L5329)*

Set the subscription status of the current user to the supplied `is_subscribed` value.

*__throws__*: {RequiredError}

*__memberof__*: WeeklyreportsubscriptionApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| weeklyReportSubscription | [WeeklyReportSubscription](../interfaces/weeklyreportsubscription.md) |  \- |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[WeeklyReportSubscription](../interfaces/weeklyreportsubscription.md)>

___
<a id="weeklyreportsubscriptionlist"></a>

###  weeklyreportsubscriptionList

▸ **weeklyreportsubscriptionList**(options?: *`any`*): `AxiosPromise`<[WeeklyReportSubscription](../interfaces/weeklyreportsubscription.md)>

*Defined in [api.ts:5339](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L5339)*

Show the user's current subscription status.

*__throws__*: {RequiredError}

*__memberof__*: WeeklyreportsubscriptionApi

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[WeeklyReportSubscription](../interfaces/weeklyreportsubscription.md)>

___

