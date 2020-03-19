[@redhat-cloud-services/insights-client](../README.md) › [Globals](../globals.md) › [BaseAPI](baseapi.md)

# Class: BaseAPI

**`export`** 

**`class`** BaseAPI

## Hierarchy

* **BaseAPI**

  ↳ [AccountSettingApi](accountsettingapi.md)

  ↳ [AckApi](ackapi.md)

  ↳ [ExportApi](exportapi.md)

  ↳ [HostackApi](hostackapi.md)

  ↳ [KcsApi](kcsapi.md)

  ↳ [RatingApi](ratingapi.md)

  ↳ [ResolutionRiskApi](resolutionriskapi.md)

  ↳ [RuleApi](ruleapi.md)

  ↳ [RulecategoryApi](rulecategoryapi.md)

  ↳ [SettingsApi](settingsapi.md)

  ↳ [StatsApi](statsapi.md)

  ↳ [SystemApi](systemapi.md)

  ↳ [SystemtypeApi](systemtypeapi.md)

  ↳ [TagApi](tagapi.md)

  ↳ [TopicApi](topicapi.md)

  ↳ [TotalRiskApi](totalriskapi.md)

  ↳ [UsageApi](usageapi.md)

  ↳ [WeeklyreportsubscriptionApi](weeklyreportsubscriptionapi.md)

## Index

### Constructors

* [constructor](baseapi.md#constructor)

### Properties

* [axios](baseapi.md#protected-axios)
* [basePath](baseapi.md#protected-basepath)
* [configuration](baseapi.md#protected-configuration)

## Constructors

###  constructor

\+ **new BaseAPI**(`configuration?`: [Configuration](configuration.md), `basePath`: string, `axios`: AxiosInstance): *[BaseAPI](baseapi.md)*

*Defined in [api.ts:49](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L49)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`configuration?` | [Configuration](configuration.md) | - |
`basePath` | string |  BASE_PATH |
`axios` | AxiosInstance |  globalAxios |

**Returns:** *[BaseAPI](baseapi.md)*

## Properties

### `Protected` axios

• **axios**: *AxiosInstance*

*Defined in [api.ts:51](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L51)*

___

### `Protected` basePath

• **basePath**: *string*

*Defined in [api.ts:51](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L51)*

___

### `Protected` configuration

• **configuration**: *[Configuration](configuration.md) | undefined*

*Defined in [api.ts:49](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L49)*
