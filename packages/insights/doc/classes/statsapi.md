[@redhat-cloud-services/insights-client](../README.md) > [StatsApi](../classes/statsapi.md)

# Class: StatsApi

StatsApi - object-oriented interface

*__export__*: 

*__class__*: StatsApi

*__extends__*: {BaseAPI}

## Hierarchy

 [BaseAPI](baseapi.md)

**↳ StatsApi**

## Index

### Constructors

* [constructor](statsapi.md#constructor)

### Properties

* [axios](statsapi.md#axios)
* [basePath](statsapi.md#basepath)
* [configuration](statsapi.md#configuration)

### Methods

* [statsHitsSeries](statsapi.md#statshitsseries)
* [statsList](statsapi.md#statslist)
* [statsReports](statsapi.md#statsreports)
* [statsRules](statsapi.md#statsrules)
* [statsRulesHitSeries](statsapi.md#statsruleshitseries)
* [statsSystems](statsapi.md#statssystems)
* [statsSystemsImpactedSeries](statsapi.md#statssystemsimpactedseries)
* [statsSystemsReportingSeries](statsapi.md#statssystemsreportingseries)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new StatsApi**(configuration?: *[Configuration](configuration.md)*, basePath?: *`string`*, axios?: *`AxiosInstance`*): [StatsApi](statsapi.md)

*Inherited from [BaseAPI](baseapi.md).[constructor](baseapi.md#constructor)*

*Defined in [api.ts:49](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L49)*

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| `Optional` configuration | [Configuration](configuration.md) | - |
| `Default value` basePath | `string` |  BASE_PATH |
| `Default value` axios | `AxiosInstance` |  globalAxios |

**Returns:** [StatsApi](statsapi.md)

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

<a id="statshitsseries"></a>

###  statsHitsSeries

▸ **statsHitsSeries**(start?: *`string`*, end?: *`string`*, grain?: *"ever" \| "year" \| "quarter" \| "month" \| "week" \| "day"*, options?: *`any`*): `AxiosPromise`<[StatTimeSeries](../interfaces/stattimeseries.md)[]>

*Defined in [api.ts:3357](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L3357)*

Simple time series of day and number of hits (per system-rule tuple) per day.

*__throws__*: {RequiredError}

*__memberof__*: StatsApi

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` start | `string` |
| `Optional` end | `string` |
| `Optional` grain | "ever" \| "year" \| "quarter" \| "month" \| "week" \| "day" |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[StatTimeSeries](../interfaces/stattimeseries.md)[]>

___
<a id="statslist"></a>

###  statsList

▸ **statsList**(options?: *`any`*): `AxiosPromise`<`Response`>

*Defined in [api.ts:3367](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L3367)*

Provide a simple list of URLs contained here. Copied sort-of from the APIRootView's `get` method.

*__throws__*: {RequiredError}

*__memberof__*: StatsApi

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<`Response`>

___
<a id="statsreports"></a>

###  statsReports

▸ **statsReports**(options?: *`any`*): `AxiosPromise`<[RulesStats](../interfaces/rulesstats.md)>

*Defined in [api.ts:3377](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L3377)*

View the statistics for this account.

*__throws__*: {RequiredError}

*__memberof__*: StatsApi

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[RulesStats](../interfaces/rulesstats.md)>

___
<a id="statsrules"></a>

###  statsRules

▸ **statsRules**(options?: *`any`*): `AxiosPromise`<[RulesStats](../interfaces/rulesstats.md)>

*Defined in [api.ts:3387](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L3387)*

View the statistics for this account.

*__throws__*: {RequiredError}

*__memberof__*: StatsApi

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[RulesStats](../interfaces/rulesstats.md)>

___
<a id="statsruleshitseries"></a>

###  statsRulesHitSeries

▸ **statsRulesHitSeries**(start?: *`string`*, end?: *`string`*, grain?: *"ever" \| "year" \| "quarter" \| "month" \| "week" \| "day"*, options?: *`any`*): `AxiosPromise`<[StatTimeSeries](../interfaces/stattimeseries.md)[]>

*Defined in [api.ts:3400](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L3400)*

Simple time series of day and number of systems impacted by any rule

*__throws__*: {RequiredError}

*__memberof__*: StatsApi

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` start | `string` |
| `Optional` end | `string` |
| `Optional` grain | "ever" \| "year" \| "quarter" \| "month" \| "week" \| "day" |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[StatTimeSeries](../interfaces/stattimeseries.md)[]>

___
<a id="statssystems"></a>

###  statsSystems

▸ **statsSystems**(options?: *`any`*): `AxiosPromise`<[SystemsStats](../interfaces/systemsstats.md)>

*Defined in [api.ts:3410](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L3410)*

View the statistics for this account.

*__throws__*: {RequiredError}

*__memberof__*: StatsApi

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[SystemsStats](../interfaces/systemsstats.md)>

___
<a id="statssystemsimpactedseries"></a>

###  statsSystemsImpactedSeries

▸ **statsSystemsImpactedSeries**(start?: *`string`*, end?: *`string`*, grain?: *"ever" \| "year" \| "quarter" \| "month" \| "week" \| "day"*, options?: *`any`*): `AxiosPromise`<[StatTimeSeries](../interfaces/stattimeseries.md)[]>

*Defined in [api.ts:3423](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L3423)*

Simple time series of day and number of systems impacted by any rule

*__throws__*: {RequiredError}

*__memberof__*: StatsApi

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` start | `string` |
| `Optional` end | `string` |
| `Optional` grain | "ever" \| "year" \| "quarter" \| "month" \| "week" \| "day" |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[StatTimeSeries](../interfaces/stattimeseries.md)[]>

___
<a id="statssystemsreportingseries"></a>

###  statsSystemsReportingSeries

▸ **statsSystemsReportingSeries**(start?: *`string`*, end?: *`string`*, grain?: *"ever" \| "year" \| "quarter" \| "month" \| "week" \| "day"*, options?: *`any`*): `AxiosPromise`<[StatTimeSeries](../interfaces/stattimeseries.md)[]>

*Defined in [api.ts:3436](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L3436)*

Simple time series of day and number of systems having uploaded that day.

*__throws__*: {RequiredError}

*__memberof__*: StatsApi

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` start | `string` |
| `Optional` end | `string` |
| `Optional` grain | "ever" \| "year" \| "quarter" \| "month" \| "week" \| "day" |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[StatTimeSeries](../interfaces/stattimeseries.md)[]>

___

