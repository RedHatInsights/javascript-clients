
Javascript client for Insights API
==================================

If you want to use [RedHatInsights/insights-advisor-api](https://github.com/RedHatInsights/insights-advisor-api) you shouldn't use get requests directly, but rather use this client to integrate with this service.

Install
-------

NPM

```bash
npm install --save @redhat-cloud-services/insights-client
```

Or Yarn

```bash
yarn add @redhat-cloud-services/insights-client
```

### Usage

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

API documentation
-----------------

*   [README](doc/README.md)

## Index

### Classes

* [AccountSettingApi](classes/accountsettingapi.md)
* [AckApi](classes/ackapi.md)
* [BaseAPI](classes/baseapi.md)
* [Configuration](classes/configuration.md)
* [ExportApi](classes/exportapi.md)
* [RequiredError](classes/requirederror.md)
* [RuleApi](classes/ruleapi.md)
* [RulecategoryApi](classes/rulecategoryapi.md)
* [StatsApi](classes/statsapi.md)
* [SystemApi](classes/systemapi.md)
* [SystemtypeApi](classes/systemtypeapi.md)
* [TopicApi](classes/topicapi.md)

### Interfaces

* [AccountSetting](interfaces/accountsetting.md)
* [Ack](interfaces/ack.md)
* [ConfigurationParameters](interfaces/configurationparameters.md)
* [InlineResponse200](interfaces/inlineresponse200.md)
* [InlineResponse2001](interfaces/inlineresponse2001.md)
* [InlineResponse2002](interfaces/inlineresponse2002.md)
* [InlineResponse200Links](interfaces/inlineresponse200links.md)
* [InlineResponse200Meta](interfaces/inlineresponse200meta.md)
* [RequestArgs](interfaces/requestargs.md)
* [Resolution](interfaces/resolution.md)
* [ResolutionRisk](interfaces/resolutionrisk.md)
* [Rule](interfaces/rule.md)
* [RuleCategory](interfaces/rulecategory.md)
* [RuleForAccount](interfaces/ruleforaccount.md)
* [RuleId](interfaces/ruleid.md)
* [RuleImpact](interfaces/ruleimpact.md)
* [RuleSet](interfaces/ruleset.md)
* [RulesStats](interfaces/rulesstats.md)
* [SystemType](interfaces/systemtype.md)
* [SystemsForRule](interfaces/systemsforrule.md)
* [SystemsStats](interfaces/systemsstats.md)
* [TopicWithRules](interfaces/topicwithrules.md)

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

*Defined in [api.ts:807](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L807)*

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

*Defined in [api.ts:911](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L911)*

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

*Defined in [api.ts:877](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L877)*

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

*Defined in [api.ts:967](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L967)*

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

*Defined in [api.ts:1175](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L1175)*

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

*Defined in [api.ts:1112](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L1112)*

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

*Defined in [api.ts:1277](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L1277)*

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

*Defined in [api.ts:1333](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L1333)*

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

*Defined in [api.ts:1312](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L1312)*

ExportApi - functional programming interface

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` configuration | [Configuration](classes/configuration.md) |

**Returns:** `object`

___
<a id="ruleapiaxiosparamcreator"></a>

### `<Const>` RuleApiAxiosParamCreator

▸ **RuleApiAxiosParamCreator**(configuration?: *[Configuration](classes/configuration.md)*): `object`

*Defined in [api.ts:1369](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L1369)*

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

*Defined in [api.ts:1599](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L1599)*

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

*Defined in [api.ts:1538](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L1538)*

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

*Defined in [api.ts:1703](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L1703)*

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

*Defined in [api.ts:1804](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L1804)*

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

*Defined in [api.ts:1770](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L1770)*

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

*Defined in [api.ts:1860](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L1860)*

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

*Defined in [api.ts:2030](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L2030)*

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

*Defined in [api.ts:1973](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L1973)*

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

*Defined in [api.ts:2120](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L2120)*

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

*Defined in [api.ts:2183](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L2183)*

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

*Defined in [api.ts:2161](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L2161)*

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

*Defined in [api.ts:2221](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L2221)*

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

*Defined in [api.ts:2322](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L2322)*

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

*Defined in [api.ts:2288](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L2288)*

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

*Defined in [api.ts:2378](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L2378)*

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

*Defined in [api.ts:2524](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L2524)*

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

*Defined in [api.ts:2477](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L2477)*

TopicApi - functional programming interface

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

