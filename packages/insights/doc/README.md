
[

Javascript client for Insights API
==================================

](#javascript-client-for-insights-api)

If you want to use [RedHatInsights/insights-advisor-api](https://github.com/RedHatInsights/insights-advisor-api) you shouldn't use get requests directly, but rather use this client to integrate with this service.

[

Install
-------

](#install)

NPM

```bash
npm install --save @redhat-cloud-services/insights-client
```

Or Yarn

```bash
yarn add @redhat-cloud-services/insights-client
```

[

### Usage

](#usage)

This client is using typescript and axios. Types are distributed with this package, so no need to define or install them separately.

To correctly bootstrap this API you should use this config (no need to define it multiple times, just one config and reimport it anywhere you want to use it).

```JS
// api.js
import axios from 'axios';
import { GroupApi } from '@redhat-cloud-services/insights-client';
const instance = axios.create();

// BASE_PATH should be set in your constants file
const groupApi = new GroupApi(undefined, BASE_PATH, instance);
export groupApi;
```

If you want to add some interceptors you can use axios build in interceptors

```JS
// api.js
import axios from 'axios';
import { SystemApi } from '@redhat-cloud-services/insights-client';
const instance = axios.create();

// Request interceptor
instance.interceptors.request.use((request) => {
    // some logic to do with request
});

// Response interceptor
instance.interceptors.response.use((response) => {
    // some logic to do with request
});

// Error interceptor
instance.interceptors.response.use(null, (error) => {
    // some logic to do with error
});

// BASE_PATH should be set in your constants file
const systemApi = new SystemApi(undefined, BASE_PATH, instance);
export systemApi;
```

[

API documentation
-----------------

](#api-documentation)

*   [README](doc/README.md)

## Index

### Classes

* [AccountSettingApi](classes/accountsettingapi.md)
* [AckApi](classes/ackapi.md)
* [BaseAPI](classes/baseapi.md)
* [Configuration](classes/configuration.md)
* [ExportApi](classes/exportapi.md)
* [HostackApi](classes/hostackapi.md)
* [RequiredError](classes/requirederror.md)
* [ResolutionRiskApi](classes/resolutionriskapi.md)
* [RuleApi](classes/ruleapi.md)
* [RulecategoryApi](classes/rulecategoryapi.md)
* [StatsApi](classes/statsapi.md)
* [SystemApi](classes/systemapi.md)
* [SystemtypeApi](classes/systemtypeapi.md)
* [TopicApi](classes/topicapi.md)
* [TotalRiskApi](classes/totalriskapi.md)
* [WeeklyreportsubscriptionApi](classes/weeklyreportsubscriptionapi.md)

### Interfaces

* [AccountSetting](interfaces/accountsetting.md)
* [Ack](interfaces/ack.md)
* [AckInput](interfaces/ackinput.md)
* [AckJustification](interfaces/ackjustification.md)
* [ConfigurationParameters](interfaces/configurationparameters.md)
* [HostAck](interfaces/hostack.md)
* [HostAckJustification](interfaces/hostackjustification.md)
* [InlineResponse200](interfaces/inlineresponse200.md)
* [InlineResponse2001](interfaces/inlineresponse2001.md)
* [InlineResponse2002](interfaces/inlineresponse2002.md)
* [InlineResponse2003](interfaces/inlineresponse2003.md)
* [InlineResponse2004](interfaces/inlineresponse2004.md)
* [InlineResponse200Links](interfaces/inlineresponse200links.md)
* [InlineResponse200Meta](interfaces/inlineresponse200meta.md)
* [RequestArgs](interfaces/requestargs.md)
* [Resolution](interfaces/resolution.md)
* [ResolutionRisk](interfaces/resolutionrisk.md)
* [Rule](interfaces/rule.md)
* [RuleCategory](interfaces/rulecategory.md)
* [RuleForAccount](interfaces/ruleforaccount.md)
* [RuleImpact](interfaces/ruleimpact.md)
* [RuleSet](interfaces/ruleset.md)
* [StatTimeSeries](interfaces/stattimeseries.md)
* [Stats](interfaces/stats.md)
* [System](interfaces/system.md)
* [SystemType](interfaces/systemtype.md)
* [SystemsForRule](interfaces/systemsforrule.md)
* [Topic](interfaces/topic.md)
* [WeeklyReportSubscription](interfaces/weeklyreportsubscription.md)

### Variables

* [BASE_PATH](#base_path)

### Functions

* [AccountSettingApiAxiosParamCreator](#accountsettingapiaxiosparamcreator)
* [AccountSettingApiFactory](#accountsettingapifactory)
* [AccountSettingApiFp](#accountsettingapifp)
* [AckApiAxiosParamCreator](#ackapiaxiosparamcreator)
* [AckApiFactory](#ackapifactory)
* [AckApiFp](#ackapifp)
* [ExportApiAxiosParamCreator](#exportapiaxiosparamcreator)
* [ExportApiFactory](#exportapifactory)
* [ExportApiFp](#exportapifp)
* [HostackApiAxiosParamCreator](#hostackapiaxiosparamcreator)
* [HostackApiFactory](#hostackapifactory)
* [HostackApiFp](#hostackapifp)
* [ResolutionRiskApiAxiosParamCreator](#resolutionriskapiaxiosparamcreator)
* [ResolutionRiskApiFactory](#resolutionriskapifactory)
* [ResolutionRiskApiFp](#resolutionriskapifp)
* [RuleApiAxiosParamCreator](#ruleapiaxiosparamcreator)
* [RuleApiFactory](#ruleapifactory)
* [RuleApiFp](#ruleapifp)
* [RulecategoryApiAxiosParamCreator](#rulecategoryapiaxiosparamcreator)
* [RulecategoryApiFactory](#rulecategoryapifactory)
* [RulecategoryApiFp](#rulecategoryapifp)
* [StatsApiAxiosParamCreator](#statsapiaxiosparamcreator)
* [StatsApiFactory](#statsapifactory)
* [StatsApiFp](#statsapifp)
* [SystemApiAxiosParamCreator](#systemapiaxiosparamcreator)
* [SystemApiFactory](#systemapifactory)
* [SystemApiFp](#systemapifp)
* [SystemtypeApiAxiosParamCreator](#systemtypeapiaxiosparamcreator)
* [SystemtypeApiFactory](#systemtypeapifactory)
* [SystemtypeApiFp](#systemtypeapifp)
* [TopicApiAxiosParamCreator](#topicapiaxiosparamcreator)
* [TopicApiFactory](#topicapifactory)
* [TopicApiFp](#topicapifp)
* [TotalRiskApiAxiosParamCreator](#totalriskapiaxiosparamcreator)
* [TotalRiskApiFactory](#totalriskapifactory)
* [TotalRiskApiFp](#totalriskapifp)
* [WeeklyreportsubscriptionApiAxiosParamCreator](#weeklyreportsubscriptionapiaxiosparamcreator)
* [WeeklyreportsubscriptionApiFactory](#weeklyreportsubscriptionapifactory)
* [WeeklyreportsubscriptionApiFp](#weeklyreportsubscriptionapifp)

### Object literals

* [COLLECTION_FORMATS](#collection_formats)

---

## Variables

<a id="base_path"></a>

### `<Const>` BASE_PATH

**● BASE_PATH**: *`string`* =  "https://cloud.redhat.com/api/insights/v1".replace(/\/+$/, "")

*Defined in [api.ts:20](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L20)*

___

## Functions

<a id="accountsettingapiaxiosparamcreator"></a>

### `<Const>` AccountSettingApiAxiosParamCreator

▸ **AccountSettingApiAxiosParamCreator**(configuration?: *[Configuration](classes/configuration.md)*): `object`

*Defined in [api.ts:1031](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L1031)*

AccountSettingApi - axios parameter creator

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` configuration | [Configuration](classes/configuration.md) |

**Returns:** `object`

___
<a id="accountsettingapifactory"></a>

### `<Const>` AccountSettingApiFactory

▸ **AccountSettingApiFactory**(configuration?: *[Configuration](classes/configuration.md)*, basePath?: *`string`*, axios?: *`AxiosInstance`*): `object`

*Defined in [api.ts:1135](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L1135)*

AccountSettingApi - factory interface

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` configuration | [Configuration](classes/configuration.md) |
| `Optional` basePath | `string` |
| `Optional` axios | `AxiosInstance` |

**Returns:** `object`

___
<a id="accountsettingapifp"></a>

### `<Const>` AccountSettingApiFp

▸ **AccountSettingApiFp**(configuration?: *[Configuration](classes/configuration.md)*): `object`

*Defined in [api.ts:1101](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L1101)*

AccountSettingApi - functional programming interface

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` configuration | [Configuration](classes/configuration.md) |

**Returns:** `object`

___
<a id="ackapiaxiosparamcreator"></a>

### `<Const>` AckApiAxiosParamCreator

▸ **AckApiAxiosParamCreator**(configuration?: *[Configuration](classes/configuration.md)*): `object`

*Defined in [api.ts:1191](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L1191)*

AckApi - axios parameter creator

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` configuration | [Configuration](classes/configuration.md) |

**Returns:** `object`

___
<a id="ackapifactory"></a>

### `<Const>` AckApiFactory

▸ **AckApiFactory**(configuration?: *[Configuration](classes/configuration.md)*, basePath?: *`string`*, axios?: *`AxiosInstance`*): `object`

*Defined in [api.ts:1454](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L1454)*

AckApi - factory interface

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` configuration | [Configuration](classes/configuration.md) |
| `Optional` basePath | `string` |
| `Optional` axios | `AxiosInstance` |

**Returns:** `object`

___
<a id="ackapifp"></a>

### `<Const>` AckApiFp

▸ **AckApiFp**(configuration?: *[Configuration](classes/configuration.md)*): `object`

*Defined in [api.ts:1377](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L1377)*

AckApi - functional programming interface

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` configuration | [Configuration](classes/configuration.md) |

**Returns:** `object`

___
<a id="exportapiaxiosparamcreator"></a>

### `<Const>` ExportApiAxiosParamCreator

▸ **ExportApiAxiosParamCreator**(configuration?: *[Configuration](classes/configuration.md)*): `object`

*Defined in [api.ts:1578](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L1578)*

ExportApi - axios parameter creator

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` configuration | [Configuration](classes/configuration.md) |

**Returns:** `object`

___
<a id="exportapifactory"></a>

### `<Const>` ExportApiFactory

▸ **ExportApiFactory**(configuration?: *[Configuration](classes/configuration.md)*, basePath?: *`string`*, axios?: *`AxiosInstance`*): `object`

*Defined in [api.ts:1818](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L1818)*

ExportApi - factory interface

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` configuration | [Configuration](classes/configuration.md) |
| `Optional` basePath | `string` |
| `Optional` axios | `AxiosInstance` |

**Returns:** `object`

___
<a id="exportapifp"></a>

### `<Const>` ExportApiFp

▸ **ExportApiFp**(configuration?: *[Configuration](classes/configuration.md)*): `object`

*Defined in [api.ts:1755](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L1755)*

ExportApi - functional programming interface

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` configuration | [Configuration](classes/configuration.md) |

**Returns:** `object`

___
<a id="hostackapiaxiosparamcreator"></a>

### `<Const>` HostackApiAxiosParamCreator

▸ **HostackApiAxiosParamCreator**(configuration?: *[Configuration](classes/configuration.md)*): `object`

*Defined in [api.ts:1926](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L1926)*

HostackApi - axios parameter creator

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` configuration | [Configuration](classes/configuration.md) |

**Returns:** `object`

___
<a id="hostackapifactory"></a>

### `<Const>` HostackApiFactory

▸ **HostackApiFactory**(configuration?: *[Configuration](classes/configuration.md)*, basePath?: *`string`*, axios?: *`AxiosInstance`*): `object`

*Defined in [api.ts:2203](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L2203)*

HostackApi - factory interface

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` configuration | [Configuration](classes/configuration.md) |
| `Optional` basePath | `string` |
| `Optional` axios | `AxiosInstance` |

**Returns:** `object`

___
<a id="hostackapifp"></a>

### `<Const>` HostackApiFp

▸ **HostackApiFp**(configuration?: *[Configuration](classes/configuration.md)*): `object`

*Defined in [api.ts:2121](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L2121)*

HostackApi - functional programming interface

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` configuration | [Configuration](classes/configuration.md) |

**Returns:** `object`

___
<a id="resolutionriskapiaxiosparamcreator"></a>

### `<Const>` ResolutionRiskApiAxiosParamCreator

▸ **ResolutionRiskApiAxiosParamCreator**(configuration?: *[Configuration](classes/configuration.md)*): `object`

*Defined in [api.ts:2337](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L2337)*

ResolutionRiskApi - axios parameter creator

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` configuration | [Configuration](classes/configuration.md) |

**Returns:** `object`

___
<a id="resolutionriskapifactory"></a>

### `<Const>` ResolutionRiskApiFactory

▸ **ResolutionRiskApiFactory**(configuration?: *[Configuration](classes/configuration.md)*, basePath?: *`string`*, axios?: *`AxiosInstance`*): `object`

*Defined in [api.ts:2393](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L2393)*

ResolutionRiskApi - factory interface

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` configuration | [Configuration](classes/configuration.md) |
| `Optional` basePath | `string` |
| `Optional` axios | `AxiosInstance` |

**Returns:** `object`

___
<a id="resolutionriskapifp"></a>

### `<Const>` ResolutionRiskApiFp

▸ **ResolutionRiskApiFp**(configuration?: *[Configuration](classes/configuration.md)*): `object`

*Defined in [api.ts:2372](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L2372)*

ResolutionRiskApi - functional programming interface

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` configuration | [Configuration](classes/configuration.md) |

**Returns:** `object`

___
<a id="ruleapiaxiosparamcreator"></a>

### `<Const>` RuleApiAxiosParamCreator

▸ **RuleApiAxiosParamCreator**(configuration?: *[Configuration](classes/configuration.md)*): `object`

*Defined in [api.ts:2429](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L2429)*

RuleApi - axios parameter creator

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` configuration | [Configuration](classes/configuration.md) |

**Returns:** `object`

___
<a id="ruleapifactory"></a>

### `<Const>` RuleApiFactory

▸ **RuleApiFactory**(configuration?: *[Configuration](classes/configuration.md)*, basePath?: *`string`*, axios?: *`AxiosInstance`*): `object`

*Defined in [api.ts:2659](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L2659)*

RuleApi - factory interface

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` configuration | [Configuration](classes/configuration.md) |
| `Optional` basePath | `string` |
| `Optional` axios | `AxiosInstance` |

**Returns:** `object`

___
<a id="ruleapifp"></a>

### `<Const>` RuleApiFp

▸ **RuleApiFp**(configuration?: *[Configuration](classes/configuration.md)*): `object`

*Defined in [api.ts:2598](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L2598)*

RuleApi - functional programming interface

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` configuration | [Configuration](classes/configuration.md) |

**Returns:** `object`

___
<a id="rulecategoryapiaxiosparamcreator"></a>

### `<Const>` RulecategoryApiAxiosParamCreator

▸ **RulecategoryApiAxiosParamCreator**(configuration?: *[Configuration](classes/configuration.md)*): `object`

*Defined in [api.ts:2763](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L2763)*

RulecategoryApi - axios parameter creator

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` configuration | [Configuration](classes/configuration.md) |

**Returns:** `object`

___
<a id="rulecategoryapifactory"></a>

### `<Const>` RulecategoryApiFactory

▸ **RulecategoryApiFactory**(configuration?: *[Configuration](classes/configuration.md)*, basePath?: *`string`*, axios?: *`AxiosInstance`*): `object`

*Defined in [api.ts:2864](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L2864)*

RulecategoryApi - factory interface

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` configuration | [Configuration](classes/configuration.md) |
| `Optional` basePath | `string` |
| `Optional` axios | `AxiosInstance` |

**Returns:** `object`

___
<a id="rulecategoryapifp"></a>

### `<Const>` RulecategoryApiFp

▸ **RulecategoryApiFp**(configuration?: *[Configuration](classes/configuration.md)*): `object`

*Defined in [api.ts:2830](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L2830)*

RulecategoryApi - functional programming interface

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` configuration | [Configuration](classes/configuration.md) |

**Returns:** `object`

___
<a id="statsapiaxiosparamcreator"></a>

### `<Const>` StatsApiAxiosParamCreator

▸ **StatsApiAxiosParamCreator**(configuration?: *[Configuration](classes/configuration.md)*): `object`

*Defined in [api.ts:2920](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L2920)*

StatsApi - axios parameter creator

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` configuration | [Configuration](classes/configuration.md) |

**Returns:** `object`

___
<a id="statsapifactory"></a>

### `<Const>` StatsApiFactory

▸ **StatsApiFactory**(configuration?: *[Configuration](classes/configuration.md)*, basePath?: *`string`*, axios?: *`AxiosInstance`*): `object`

*Defined in [api.ts:3314](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L3314)*

StatsApi - factory interface

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` configuration | [Configuration](classes/configuration.md) |
| `Optional` basePath | `string` |
| `Optional` axios | `AxiosInstance` |

**Returns:** `object`

___
<a id="statsapifp"></a>

### `<Const>` StatsApiFp

▸ **StatsApiFp**(configuration?: *[Configuration](classes/configuration.md)*): `object`

*Defined in [api.ts:3197](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L3197)*

StatsApi - functional programming interface

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` configuration | [Configuration](classes/configuration.md) |

**Returns:** `object`

___
<a id="systemapiaxiosparamcreator"></a>

### `<Const>` SystemApiAxiosParamCreator

▸ **SystemApiAxiosParamCreator**(configuration?: *[Configuration](classes/configuration.md)*): `object`

*Defined in [api.ts:3500](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L3500)*

SystemApi - axios parameter creator

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` configuration | [Configuration](classes/configuration.md) |

**Returns:** `object`

___
<a id="systemapifactory"></a>

### `<Const>` SystemApiFactory

▸ **SystemApiFactory**(configuration?: *[Configuration](classes/configuration.md)*, basePath?: *`string`*, axios?: *`AxiosInstance`*): `object`

*Defined in [api.ts:3670](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L3670)*

SystemApi - factory interface

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` configuration | [Configuration](classes/configuration.md) |
| `Optional` basePath | `string` |
| `Optional` axios | `AxiosInstance` |

**Returns:** `object`

___
<a id="systemapifp"></a>

### `<Const>` SystemApiFp

▸ **SystemApiFp**(configuration?: *[Configuration](classes/configuration.md)*): `object`

*Defined in [api.ts:3619](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L3619)*

SystemApi - functional programming interface

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` configuration | [Configuration](classes/configuration.md) |

**Returns:** `object`

___
<a id="systemtypeapiaxiosparamcreator"></a>

### `<Const>` SystemtypeApiAxiosParamCreator

▸ **SystemtypeApiAxiosParamCreator**(configuration?: *[Configuration](classes/configuration.md)*): `object`

*Defined in [api.ts:3754](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L3754)*

SystemtypeApi - axios parameter creator

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` configuration | [Configuration](classes/configuration.md) |

**Returns:** `object`

___
<a id="systemtypeapifactory"></a>

### `<Const>` SystemtypeApiFactory

▸ **SystemtypeApiFactory**(configuration?: *[Configuration](classes/configuration.md)*, basePath?: *`string`*, axios?: *`AxiosInstance`*): `object`

*Defined in [api.ts:3855](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L3855)*

SystemtypeApi - factory interface

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` configuration | [Configuration](classes/configuration.md) |
| `Optional` basePath | `string` |
| `Optional` axios | `AxiosInstance` |

**Returns:** `object`

___
<a id="systemtypeapifp"></a>

### `<Const>` SystemtypeApiFp

▸ **SystemtypeApiFp**(configuration?: *[Configuration](classes/configuration.md)*): `object`

*Defined in [api.ts:3821](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L3821)*

SystemtypeApi - functional programming interface

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` configuration | [Configuration](classes/configuration.md) |

**Returns:** `object`

___
<a id="topicapiaxiosparamcreator"></a>

### `<Const>` TopicApiAxiosParamCreator

▸ **TopicApiAxiosParamCreator**(configuration?: *[Configuration](classes/configuration.md)*): `object`

*Defined in [api.ts:3911](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L3911)*

TopicApi - axios parameter creator

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` configuration | [Configuration](classes/configuration.md) |

**Returns:** `object`

___
<a id="topicapifactory"></a>

### `<Const>` TopicApiFactory

▸ **TopicApiFactory**(configuration?: *[Configuration](classes/configuration.md)*, basePath?: *`string`*, axios?: *`AxiosInstance`*): `object`

*Defined in [api.ts:4114](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L4114)*

TopicApi - factory interface

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` configuration | [Configuration](classes/configuration.md) |
| `Optional` basePath | `string` |
| `Optional` axios | `AxiosInstance` |

**Returns:** `object`

___
<a id="topicapifp"></a>

### `<Const>` TopicApiFp

▸ **TopicApiFp**(configuration?: *[Configuration](classes/configuration.md)*): `object`

*Defined in [api.ts:4050](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L4050)*

TopicApi - functional programming interface

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` configuration | [Configuration](classes/configuration.md) |

**Returns:** `object`

___
<a id="totalriskapiaxiosparamcreator"></a>

### `<Const>` TotalRiskApiAxiosParamCreator

▸ **TotalRiskApiAxiosParamCreator**(configuration?: *[Configuration](classes/configuration.md)*): `object`

*Defined in [api.ts:4218](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L4218)*

TotalRiskApi - axios parameter creator

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` configuration | [Configuration](classes/configuration.md) |

**Returns:** `object`

___
<a id="totalriskapifactory"></a>

### `<Const>` TotalRiskApiFactory

▸ **TotalRiskApiFactory**(configuration?: *[Configuration](classes/configuration.md)*, basePath?: *`string`*, axios?: *`AxiosInstance`*): `object`

*Defined in [api.ts:4274](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L4274)*

TotalRiskApi - factory interface

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` configuration | [Configuration](classes/configuration.md) |
| `Optional` basePath | `string` |
| `Optional` axios | `AxiosInstance` |

**Returns:** `object`

___
<a id="totalriskapifp"></a>

### `<Const>` TotalRiskApiFp

▸ **TotalRiskApiFp**(configuration?: *[Configuration](classes/configuration.md)*): `object`

*Defined in [api.ts:4253](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L4253)*

TotalRiskApi - functional programming interface

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` configuration | [Configuration](classes/configuration.md) |

**Returns:** `object`

___
<a id="weeklyreportsubscriptionapiaxiosparamcreator"></a>

### `<Const>` WeeklyreportsubscriptionApiAxiosParamCreator

▸ **WeeklyreportsubscriptionApiAxiosParamCreator**(configuration?: *[Configuration](classes/configuration.md)*): `object`

*Defined in [api.ts:4310](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L4310)*

WeeklyreportsubscriptionApi - axios parameter creator

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` configuration | [Configuration](classes/configuration.md) |

**Returns:** `object`

___
<a id="weeklyreportsubscriptionapifactory"></a>

### `<Const>` WeeklyreportsubscriptionApiFactory

▸ **WeeklyreportsubscriptionApiFactory**(configuration?: *[Configuration](classes/configuration.md)*, basePath?: *`string`*, axios?: *`AxiosInstance`*): `object`

*Defined in [api.ts:4414](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L4414)*

WeeklyreportsubscriptionApi - factory interface

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` configuration | [Configuration](classes/configuration.md) |
| `Optional` basePath | `string` |
| `Optional` axios | `AxiosInstance` |

**Returns:** `object`

___
<a id="weeklyreportsubscriptionapifp"></a>

### `<Const>` WeeklyreportsubscriptionApiFp

▸ **WeeklyreportsubscriptionApiFp**(configuration?: *[Configuration](classes/configuration.md)*): `object`

*Defined in [api.ts:4380](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L4380)*

WeeklyreportsubscriptionApi - functional programming interface

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` configuration | [Configuration](classes/configuration.md) |

**Returns:** `object`

___

## Object literals

<a id="collection_formats"></a>

### `<Const>` COLLECTION_FORMATS

**COLLECTION_FORMATS**: *`object`*

*Defined in [api.ts:26](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L26)*

*__export__*: 

<a id="collection_formats.csv"></a>

####  csv

**● csv**: *`string`* = ","

*Defined in [api.ts:27](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L27)*

___
<a id="collection_formats.pipes"></a>

####  pipes

**● pipes**: *`string`* = "|"

*Defined in [api.ts:30](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L30)*

___
<a id="collection_formats.ssv"></a>

####  ssv

**● ssv**: *`string`* = " "

*Defined in [api.ts:28](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L28)*

___
<a id="collection_formats.tsv"></a>

####  tsv

**● tsv**: *`string`* = "	"

*Defined in [api.ts:29](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L29)*

___

___

