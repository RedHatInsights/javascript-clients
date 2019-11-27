[@redhat-cloud-services/insights-client](../README.md) > [BaseAPI](../classes/baseapi.md)

# Class: BaseAPI

*__export__*: 

*__class__*: BaseAPI

## Hierarchy

**BaseAPI**

↳  [AccountSettingApi](accountsettingapi.md)

↳  [AckApi](ackapi.md)

↳  [ExportApi](exportapi.md)

↳  [HostackApi](hostackapi.md)

↳  [ResolutionRiskApi](resolutionriskapi.md)

↳  [RuleApi](ruleapi.md)

↳  [RulecategoryApi](rulecategoryapi.md)

↳  [StatsApi](statsapi.md)

↳  [SystemApi](systemapi.md)

↳  [SystemtypeApi](systemtypeapi.md)

↳  [TopicApi](topicapi.md)

↳  [TotalRiskApi](totalriskapi.md)

↳  [WeeklyreportsubscriptionApi](weeklyreportsubscriptionapi.md)

## Index

### Constructors

* [constructor](baseapi.md#constructor)

### Properties

* [axios](baseapi.md#axios)
* [basePath](baseapi.md#basepath)
* [configuration](baseapi.md#configuration)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new BaseAPI**(configuration?: *[Configuration](configuration.md)*, basePath?: *`string`*, axios?: *`AxiosInstance`*): [BaseAPI](baseapi.md)

*Defined in [api.ts:49](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L49)*

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| `Optional` configuration | [Configuration](configuration.md) | - |
| `Default value` basePath | `string` |  BASE_PATH |
| `Default value` axios | `AxiosInstance` |  globalAxios |

**Returns:** [BaseAPI](baseapi.md)

___

## Properties

<a id="axios"></a>

### `<Protected>` axios

**● axios**: *`AxiosInstance`*

*Defined in [api.ts:51](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L51)*

___
<a id="basepath"></a>

### `<Protected>` basePath

**● basePath**: *`string`*

*Defined in [api.ts:51](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L51)*

___
<a id="configuration"></a>

### `<Protected>` configuration

**● configuration**: *[Configuration](configuration.md) \| `undefined`*

*Defined in [api.ts:49](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L49)*

___

