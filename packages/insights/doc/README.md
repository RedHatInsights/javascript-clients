
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

### Modules

* [RuleRating](modules/rulerating.md)

### Classes

* [AccountSettingApi](classes/accountsettingapi.md)
* [AckApi](classes/ackapi.md)
* [BaseAPI](classes/baseapi.md)
* [Configuration](classes/configuration.md)
* [ExportApi](classes/exportapi.md)
* [HostackApi](classes/hostackapi.md)
* [KcsApi](classes/kcsapi.md)
* [RatingApi](classes/ratingapi.md)
* [RequiredError](classes/requirederror.md)
* [ResolutionRiskApi](classes/resolutionriskapi.md)
* [RuleApi](classes/ruleapi.md)
* [RulecategoryApi](classes/rulecategoryapi.md)
* [SettingsApi](classes/settingsapi.md)
* [StatsApi](classes/statsapi.md)
* [SystemApi](classes/systemapi.md)
* [SystemtypeApi](classes/systemtypeapi.md)
* [TagApi](classes/tagapi.md)
* [TopicApi](classes/topicapi.md)
* [TotalRiskApi](classes/totalriskapi.md)
* [UsageApi](classes/usageapi.md)
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
* [InlineResponse2005](interfaces/inlineresponse2005.md)
* [InlineResponse200Links](interfaces/inlineresponse200links.md)
* [InlineResponse200Meta](interfaces/inlineresponse200meta.md)
* [Kcs](interfaces/kcs.md)
* [MultiAckResponse](interfaces/multiackresponse.md)
* [MultiHostAck](interfaces/multihostack.md)
* [MultiHostUnAck](interfaces/multihostunack.md)
* [Report](interfaces/report.md)
* [RequestArgs](interfaces/requestargs.md)
* [Resolution](interfaces/resolution.md)
* [ResolutionRisk](interfaces/resolutionrisk.md)
* [Rule](interfaces/rule.md)
* [RuleCategory](interfaces/rulecategory.md)
* [RuleForAccount](interfaces/ruleforaccount.md)
* [RuleImpact](interfaces/ruleimpact.md)
* [RuleSet](interfaces/ruleset.md)
* [SettingDDF](interfaces/settingddf.md)
* [SettingsDDF](interfaces/settingsddf.md)
* [SettingsInput](interfaces/settingsinput.md)
* [StatTimeSeries](interfaces/stattimeseries.md)
* [Stats](interfaces/stats.md)
* [System](interfaces/system.md)
* [SystemType](interfaces/systemtype.md)
* [SystemsForRule](interfaces/systemsforrule.md)
* [TagList](interfaces/taglist.md)
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
* [KcsApiAxiosParamCreator](#kcsapiaxiosparamcreator)
* [KcsApiFactory](#kcsapifactory)
* [KcsApiFp](#kcsapifp)
* [RatingApiAxiosParamCreator](#ratingapiaxiosparamcreator)
* [RatingApiFactory](#ratingapifactory)
* [RatingApiFp](#ratingapifp)
* [ResolutionRiskApiAxiosParamCreator](#resolutionriskapiaxiosparamcreator)
* [ResolutionRiskApiFactory](#resolutionriskapifactory)
* [ResolutionRiskApiFp](#resolutionriskapifp)
* [RuleApiAxiosParamCreator](#ruleapiaxiosparamcreator)
* [RuleApiFactory](#ruleapifactory)
* [RuleApiFp](#ruleapifp)
* [RulecategoryApiAxiosParamCreator](#rulecategoryapiaxiosparamcreator)
* [RulecategoryApiFactory](#rulecategoryapifactory)
* [RulecategoryApiFp](#rulecategoryapifp)
* [SettingsApiAxiosParamCreator](#settingsapiaxiosparamcreator)
* [SettingsApiFactory](#settingsapifactory)
* [SettingsApiFp](#settingsapifp)
* [StatsApiAxiosParamCreator](#statsapiaxiosparamcreator)
* [StatsApiFactory](#statsapifactory)
* [StatsApiFp](#statsapifp)
* [SystemApiAxiosParamCreator](#systemapiaxiosparamcreator)
* [SystemApiFactory](#systemapifactory)
* [SystemApiFp](#systemapifp)
* [SystemtypeApiAxiosParamCreator](#systemtypeapiaxiosparamcreator)
* [SystemtypeApiFactory](#systemtypeapifactory)
* [SystemtypeApiFp](#systemtypeapifp)
* [TagApiAxiosParamCreator](#tagapiaxiosparamcreator)
* [TagApiFactory](#tagapifactory)
* [TagApiFp](#tagapifp)
* [TopicApiAxiosParamCreator](#topicapiaxiosparamcreator)
* [TopicApiFactory](#topicapifactory)
* [TopicApiFp](#topicapifp)
* [TotalRiskApiAxiosParamCreator](#totalriskapiaxiosparamcreator)
* [TotalRiskApiFactory](#totalriskapifactory)
* [TotalRiskApiFp](#totalriskapifp)
* [UsageApiAxiosParamCreator](#usageapiaxiosparamcreator)
* [UsageApiFactory](#usageapifactory)
* [UsageApiFp](#usageapifp)
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

*Defined in [api.ts:1297](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L1297)*

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

*Defined in [api.ts:1401](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L1401)*

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

*Defined in [api.ts:1367](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L1367)*

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

*Defined in [api.ts:1457](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L1457)*

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

*Defined in [api.ts:1720](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L1720)*

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

*Defined in [api.ts:1643](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L1643)*

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

*Defined in [api.ts:1844](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L1844)*

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

*Defined in [api.ts:2102](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L2102)*

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

*Defined in [api.ts:2036](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L2036)*

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

*Defined in [api.ts:2216](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L2216)*

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

*Defined in [api.ts:2499](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L2499)*

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

*Defined in [api.ts:2416](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L2416)*

HostackApi - functional programming interface

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` configuration | [Configuration](classes/configuration.md) |

**Returns:** `object`

___
<a id="kcsapiaxiosparamcreator"></a>

### `<Const>` KcsApiAxiosParamCreator

▸ **KcsApiAxiosParamCreator**(configuration?: *[Configuration](classes/configuration.md)*): `object`

*Defined in [api.ts:2635](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L2635)*

KcsApi - axios parameter creator

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` configuration | [Configuration](classes/configuration.md) |

**Returns:** `object`

___
<a id="kcsapifactory"></a>

### `<Const>` KcsApiFactory

▸ **KcsApiFactory**(configuration?: *[Configuration](classes/configuration.md)*, basePath?: *`string`*, axios?: *`AxiosInstance`*): `object`

*Defined in [api.ts:2736](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L2736)*

KcsApi - factory interface

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` configuration | [Configuration](classes/configuration.md) |
| `Optional` basePath | `string` |
| `Optional` axios | `AxiosInstance` |

**Returns:** `object`

___
<a id="kcsapifp"></a>

### `<Const>` KcsApiFp

▸ **KcsApiFp**(configuration?: *[Configuration](classes/configuration.md)*): `object`

*Defined in [api.ts:2702](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L2702)*

KcsApi - functional programming interface

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` configuration | [Configuration](classes/configuration.md) |

**Returns:** `object`

___
<a id="ratingapiaxiosparamcreator"></a>

### `<Const>` RatingApiAxiosParamCreator

▸ **RatingApiAxiosParamCreator**(configuration?: *[Configuration](classes/configuration.md)*): `object`

*Defined in [api.ts:2792](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L2792)*

RatingApi - axios parameter creator

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` configuration | [Configuration](classes/configuration.md) |

**Returns:** `object`

___
<a id="ratingapifactory"></a>

### `<Const>` RatingApiFactory

▸ **RatingApiFactory**(configuration?: *[Configuration](classes/configuration.md)*, basePath?: *`string`*, axios?: *`AxiosInstance`*): `object`

*Defined in [api.ts:2957](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L2957)*

RatingApi - factory interface

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` configuration | [Configuration](classes/configuration.md) |
| `Optional` basePath | `string` |
| `Optional` axios | `AxiosInstance` |

**Returns:** `object`

___
<a id="ratingapifp"></a>

### `<Const>` RatingApiFp

▸ **RatingApiFp**(configuration?: *[Configuration](classes/configuration.md)*): `object`

*Defined in [api.ts:2906](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L2906)*

RatingApi - functional programming interface

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` configuration | [Configuration](classes/configuration.md) |

**Returns:** `object`

___
<a id="resolutionriskapiaxiosparamcreator"></a>

### `<Const>` ResolutionRiskApiAxiosParamCreator

▸ **ResolutionRiskApiAxiosParamCreator**(configuration?: *[Configuration](classes/configuration.md)*): `object`

*Defined in [api.ts:3041](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L3041)*

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

*Defined in [api.ts:3097](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L3097)*

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

*Defined in [api.ts:3076](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L3076)*

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

*Defined in [api.ts:3133](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L3133)*

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

*Defined in [api.ts:3507](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L3507)*

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

*Defined in [api.ts:3409](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L3409)*

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

*Defined in [api.ts:3673](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L3673)*

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

*Defined in [api.ts:3774](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L3774)*

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

*Defined in [api.ts:3740](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L3740)*

RulecategoryApi - functional programming interface

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` configuration | [Configuration](classes/configuration.md) |

**Returns:** `object`

___
<a id="settingsapiaxiosparamcreator"></a>

### `<Const>` SettingsApiAxiosParamCreator

▸ **SettingsApiAxiosParamCreator**(configuration?: *[Configuration](classes/configuration.md)*): `object`

*Defined in [api.ts:3830](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L3830)*

SettingsApi - axios parameter creator

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` configuration | [Configuration](classes/configuration.md) |

**Returns:** `object`

___
<a id="settingsapifactory"></a>

### `<Const>` SettingsApiFactory

▸ **SettingsApiFactory**(configuration?: *[Configuration](classes/configuration.md)*, basePath?: *`string`*, axios?: *`AxiosInstance`*): `object`

*Defined in [api.ts:3936](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L3936)*

SettingsApi - factory interface

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` configuration | [Configuration](classes/configuration.md) |
| `Optional` basePath | `string` |
| `Optional` axios | `AxiosInstance` |

**Returns:** `object`

___
<a id="settingsapifp"></a>

### `<Const>` SettingsApiFp

▸ **SettingsApiFp**(configuration?: *[Configuration](classes/configuration.md)*): `object`

*Defined in [api.ts:3901](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L3901)*

SettingsApi - functional programming interface

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` configuration | [Configuration](classes/configuration.md) |

**Returns:** `object`

___
<a id="statsapiaxiosparamcreator"></a>

### `<Const>` StatsApiAxiosParamCreator

▸ **StatsApiAxiosParamCreator**(configuration?: *[Configuration](classes/configuration.md)*): `object`

*Defined in [api.ts:3994](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L3994)*

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

*Defined in [api.ts:4430](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L4430)*

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

*Defined in [api.ts:4306](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L4306)*

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

*Defined in [api.ts:4630](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L4630)*

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

*Defined in [api.ts:4806](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L4806)*

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

*Defined in [api.ts:4754](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L4754)*

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

*Defined in [api.ts:4892](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L4892)*

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

*Defined in [api.ts:4993](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L4993)*

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

*Defined in [api.ts:4959](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L4959)*

SystemtypeApi - functional programming interface

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` configuration | [Configuration](classes/configuration.md) |

**Returns:** `object`

___
<a id="tagapiaxiosparamcreator"></a>

### `<Const>` TagApiAxiosParamCreator

▸ **TagApiAxiosParamCreator**(configuration?: *[Configuration](classes/configuration.md)*): `object`

*Defined in [api.ts:5049](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L5049)*

TagApi - axios parameter creator

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` configuration | [Configuration](classes/configuration.md) |

**Returns:** `object`

___
<a id="tagapifactory"></a>

### `<Const>` TagApiFactory

▸ **TagApiFactory**(configuration?: *[Configuration](classes/configuration.md)*, basePath?: *`string`*, axios?: *`AxiosInstance`*): `object`

*Defined in [api.ts:5105](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L5105)*

TagApi - factory interface

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` configuration | [Configuration](classes/configuration.md) |
| `Optional` basePath | `string` |
| `Optional` axios | `AxiosInstance` |

**Returns:** `object`

___
<a id="tagapifp"></a>

### `<Const>` TagApiFp

▸ **TagApiFp**(configuration?: *[Configuration](classes/configuration.md)*): `object`

*Defined in [api.ts:5084](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L5084)*

TagApi - functional programming interface

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` configuration | [Configuration](classes/configuration.md) |

**Returns:** `object`

___
<a id="topicapiaxiosparamcreator"></a>

### `<Const>` TopicApiAxiosParamCreator

▸ **TopicApiAxiosParamCreator**(configuration?: *[Configuration](classes/configuration.md)*): `object`

*Defined in [api.ts:5141](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L5141)*

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

*Defined in [api.ts:5356](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L5356)*

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

*Defined in [api.ts:5290](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L5290)*

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

*Defined in [api.ts:5464](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L5464)*

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

*Defined in [api.ts:5520](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L5520)*

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

*Defined in [api.ts:5499](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L5499)*

TotalRiskApi - functional programming interface

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` configuration | [Configuration](classes/configuration.md) |

**Returns:** `object`

___
<a id="usageapiaxiosparamcreator"></a>

### `<Const>` UsageApiAxiosParamCreator

▸ **UsageApiAxiosParamCreator**(configuration?: *[Configuration](classes/configuration.md)*): `object`

*Defined in [api.ts:5556](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L5556)*

UsageApi - axios parameter creator

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` configuration | [Configuration](classes/configuration.md) |

**Returns:** `object`

___
<a id="usageapifactory"></a>

### `<Const>` UsageApiFactory

▸ **UsageApiFactory**(configuration?: *[Configuration](classes/configuration.md)*, basePath?: *`string`*, axios?: *`AxiosInstance`*): `object`

*Defined in [api.ts:5612](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L5612)*

UsageApi - factory interface

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` configuration | [Configuration](classes/configuration.md) |
| `Optional` basePath | `string` |
| `Optional` axios | `AxiosInstance` |

**Returns:** `object`

___
<a id="usageapifp"></a>

### `<Const>` UsageApiFp

▸ **UsageApiFp**(configuration?: *[Configuration](classes/configuration.md)*): `object`

*Defined in [api.ts:5591](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L5591)*

UsageApi - functional programming interface

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` configuration | [Configuration](classes/configuration.md) |

**Returns:** `object`

___
<a id="weeklyreportsubscriptionapiaxiosparamcreator"></a>

### `<Const>` WeeklyreportsubscriptionApiAxiosParamCreator

▸ **WeeklyreportsubscriptionApiAxiosParamCreator**(configuration?: *[Configuration](classes/configuration.md)*): `object`

*Defined in [api.ts:5648](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L5648)*

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

*Defined in [api.ts:5752](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L5752)*

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

*Defined in [api.ts:5718](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L5718)*

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

