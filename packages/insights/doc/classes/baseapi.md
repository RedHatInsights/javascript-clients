[@redhat-cloud-services/insights-client](../README.md) › [Globals](../globals.md) › [BaseAPI](baseapi.md)

# Class: BaseAPI

**`export`** 

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

  ↳ [UserPreferencesApi](userpreferencesapi.md)

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

Defined in packages/insights/base.ts:49

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`configuration?` | [Configuration](configuration.md) | - |
`basePath` | string | BASE_PATH |
`axios` | AxiosInstance | globalAxios |

**Returns:** *[BaseAPI](baseapi.md)*

## Properties

### `Protected` axios

• **axios**: *AxiosInstance*

Defined in packages/insights/base.ts:51

___

### `Protected` basePath

• **basePath**: *string*

Defined in packages/insights/base.ts:51

___

### `Protected` configuration

• **configuration**: *[Configuration](configuration.md) | undefined*

Defined in packages/insights/base.ts:49
