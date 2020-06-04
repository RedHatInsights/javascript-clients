[@redhat-cloud-services/insights-client](../README.md) › [Globals](../globals.md) › [WeeklyreportsubscriptionApi](weeklyreportsubscriptionapi.md)

# Class: WeeklyreportsubscriptionApi

WeeklyreportsubscriptionApi - object-oriented interface

**`export`** 

## Hierarchy

* [BaseAPI](baseapi.md)

  ↳ **WeeklyreportsubscriptionApi**

## Index

### Constructors

* [constructor](weeklyreportsubscriptionapi.md#constructor)

### Properties

* [axios](weeklyreportsubscriptionapi.md#protected-axios)
* [basePath](weeklyreportsubscriptionapi.md#protected-basepath)
* [configuration](weeklyreportsubscriptionapi.md#protected-configuration)

### Methods

* [weeklyreportsubscriptionCreate](weeklyreportsubscriptionapi.md#weeklyreportsubscriptioncreate)
* [weeklyreportsubscriptionList](weeklyreportsubscriptionapi.md#weeklyreportsubscriptionlist)

## Constructors

###  constructor

\+ **new WeeklyreportsubscriptionApi**(`configuration?`: [Configuration](configuration.md), `basePath`: string, `axios`: AxiosInstance): *[WeeklyreportsubscriptionApi](weeklyreportsubscriptionapi.md)*

*Inherited from [BaseAPI](baseapi.md).[constructor](baseapi.md#constructor)*

*Defined in [packages/insights/base.ts:49](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/base.ts#L49)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`configuration?` | [Configuration](configuration.md) | - |
`basePath` | string | BASE_PATH |
`axios` | AxiosInstance | globalAxios |

**Returns:** *[WeeklyreportsubscriptionApi](weeklyreportsubscriptionapi.md)*

## Properties

### `Protected` axios

• **axios**: *AxiosInstance*

*Inherited from [BaseAPI](baseapi.md).[axios](baseapi.md#protected-axios)*

*Defined in [packages/insights/base.ts:51](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/base.ts#L51)*

___

### `Protected` basePath

• **basePath**: *string*

*Inherited from [BaseAPI](baseapi.md).[basePath](baseapi.md#protected-basepath)*

*Defined in [packages/insights/base.ts:51](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/base.ts#L51)*

___

### `Protected` configuration

• **configuration**: *[Configuration](configuration.md) | undefined*

*Inherited from [BaseAPI](baseapi.md).[configuration](baseapi.md#protected-configuration)*

*Defined in [packages/insights/base.ts:49](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/base.ts#L49)*

## Methods

###  weeklyreportsubscriptionCreate

▸ **weeklyreportsubscriptionCreate**(`weeklyReportSubscription`: [WeeklyReportSubscription](../interfaces/weeklyreportsubscription.md), `options?`: any): *AxiosPromise‹[WeeklyReportSubscription](../interfaces/weeklyreportsubscription.md)›*

*Defined in [packages/insights/api.ts:5914](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L5914)*

If \'is_subscribed\' is true, a subscription is added if it doesn\'t already exist.  If it is false, the subscription is removed if it exists.

**`summary`** Set the subscription status of the current user to the supplied `is_subscribed` value.

**`throws`** {RequiredError}

**`memberof`** WeeklyreportsubscriptionApi

**Parameters:**

Name | Type |
------ | ------ |
`weeklyReportSubscription` | [WeeklyReportSubscription](../interfaces/weeklyreportsubscription.md) |
`options?` | any |

**Returns:** *AxiosPromise‹[WeeklyReportSubscription](../interfaces/weeklyreportsubscription.md)›*

___

###  weeklyreportsubscriptionList

▸ **weeklyreportsubscriptionList**(`options?`: any): *AxiosPromise‹[WeeklyReportSubscription](../interfaces/weeklyreportsubscription.md)›*

*Defined in [packages/insights/api.ts:5925](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L5925)*

This shows the presence of a weekly report subscription by the user in this account.

**`summary`** Show the user\'s current subscription status.

**`throws`** {RequiredError}

**`memberof`** WeeklyreportsubscriptionApi

**Parameters:**

Name | Type |
------ | ------ |
`options?` | any |

**Returns:** *AxiosPromise‹[WeeklyReportSubscription](../interfaces/weeklyreportsubscription.md)›*
