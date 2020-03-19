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
* [statsStaleHosts](statsapi.md#statsstalehosts)
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

▸ **statsHitsSeries**(start?: *`string`*, end?: *`string`*, grain?: *"ever" \| "year" \| "quarter" \| "month" \| "week" \| "day"*, tags?: *`Array`<`string`>*, options?: *`any`*): `AxiosPromise`<[StatTimeSeries](../interfaces/stattimeseries.md)[]>

*Defined in [api.ts:4706](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L4706)*

A 'hit' is a unique system-rule pair - a rule impacting one system.

*__summary__*: Simple time series of day and number of hits per day.

*__throws__*: {RequiredError}

*__memberof__*: StatsApi

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` start | `string` |
| `Optional` end | `string` |
| `Optional` grain | "ever" \| "year" \| "quarter" \| "month" \| "week" \| "day" |
| `Optional` tags | `Array`<`string`> |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[StatTimeSeries](../interfaces/stattimeseries.md)[]>

___
<a id="statslist"></a>

###  statsList

▸ **statsList**(options?: *`any`*): `AxiosPromise`<`Response`>

*Defined in [api.ts:4717](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L4717)*

Copied sort-of from the APIRootView's `get` method.

*__summary__*: Provide a simple list of URLs contained here.

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

▸ **statsReports**(tags?: *`Array`<`string`>*, options?: *`any`*): `AxiosPromise`<[Stats](../interfaces/stats.md)>

*Defined in [api.ts:4729](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L4729)*

Only current reports are considered.

*__summary__*: Show statistics of reports impacting across categories and risks.

*__throws__*: {RequiredError}

*__memberof__*: StatsApi

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` tags | `Array`<`string`> |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[Stats](../interfaces/stats.md)>

___
<a id="statsrules"></a>

###  statsRules

▸ **statsRules**(tags?: *`Array`<`string`>*, options?: *`any`*): `AxiosPromise`<[Stats](../interfaces/stats.md)>

*Defined in [api.ts:4741](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L4741)*

Only current reports are considered.

*__summary__*: Show statistics of rule usage across categories and risks.

*__throws__*: {RequiredError}

*__memberof__*: StatsApi

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` tags | `Array`<`string`> |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[Stats](../interfaces/stats.md)>

___
<a id="statsruleshitseries"></a>

###  statsRulesHitSeries

▸ **statsRulesHitSeries**(start?: *`string`*, end?: *`string`*, grain?: *"ever" \| "year" \| "quarter" \| "month" \| "week" \| "day"*, tags?: *`Array`<`string`>*, options?: *`any`*): `AxiosPromise`<[StatTimeSeries](../interfaces/stattimeseries.md)[]>

*Defined in [api.ts:4756](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L4756)*

If one rule is impacting four systems, this is counted once.

*__summary__*: Simple time series of day and number of rules impacting systems.

*__throws__*: {RequiredError}

*__memberof__*: StatsApi

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` start | `string` |
| `Optional` end | `string` |
| `Optional` grain | "ever" \| "year" \| "quarter" \| "month" \| "week" \| "day" |
| `Optional` tags | `Array`<`string`> |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[StatTimeSeries](../interfaces/stattimeseries.md)[]>

___
<a id="statsstalehosts"></a>

###  statsStaleHosts

▸ **statsStaleHosts**(tags?: *`Array`<`string`>*, options?: *`any`*): `AxiosPromise`<[StaleSystemStats](../interfaces/stalesystemstats.md)>

*Defined in [api.ts:4768](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L4768)*

For historic reasons, 'stale' refers to hosts that are being warned of being stale, and 'stale\_warn' refers to hosts that are being hidden from display.

*__summary__*: Show statistics of stale warning and hidden systems.

*__throws__*: {RequiredError}

*__memberof__*: StatsApi

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` tags | `Array`<`string`> |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[StaleSystemStats](../interfaces/stalesystemstats.md)>

___
<a id="statssystems"></a>

###  statsSystems

▸ **statsSystems**(tags?: *`Array`<`string`>*, options?: *`any`*): `AxiosPromise`<[Stats](../interfaces/stats.md)>

*Defined in [api.ts:4780](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L4780)*

Only current reports are considered.

*__summary__*: Show statistics of systems being impacted across categories and risks.

*__throws__*: {RequiredError}

*__memberof__*: StatsApi

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` tags | `Array`<`string`> |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[Stats](../interfaces/stats.md)>

___
<a id="statssystemsimpactedseries"></a>

###  statsSystemsImpactedSeries

▸ **statsSystemsImpactedSeries**(start?: *`string`*, end?: *`string`*, grain?: *"ever" \| "year" \| "quarter" \| "month" \| "week" \| "day"*, tags?: *`Array`<`string`>*, options?: *`any`*): `AxiosPromise`<[StatTimeSeries](../interfaces/stattimeseries.md)[]>

*Defined in [api.ts:4795](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L4795)*

Systems with no reports of rules impacting them are ignored.

*__summary__*: Simple time series of day and number of systems impacted by any rule.

*__throws__*: {RequiredError}

*__memberof__*: StatsApi

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` start | `string` |
| `Optional` end | `string` |
| `Optional` grain | "ever" \| "year" \| "quarter" \| "month" \| "week" \| "day" |
| `Optional` tags | `Array`<`string`> |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[StatTimeSeries](../interfaces/stattimeseries.md)[]>

___
<a id="statssystemsreportingseries"></a>

###  statsSystemsReportingSeries

▸ **statsSystemsReportingSeries**(start?: *`string`*, end?: *`string`*, grain?: *"ever" \| "year" \| "quarter" \| "month" \| "week" \| "day"*, tags?: *`Array`<`string`>*, options?: *`any`*): `AxiosPromise`<[StatTimeSeries](../interfaces/stattimeseries.md)[]>

*Defined in [api.ts:4810](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L4810)*

Systems with no reports of rules impacting them are still considered.

*__summary__*: Simple time series of day and number of systems having uploaded that day.

*__throws__*: {RequiredError}

*__memberof__*: StatsApi

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` start | `string` |
| `Optional` end | `string` |
| `Optional` grain | "ever" \| "year" \| "quarter" \| "month" \| "week" \| "day" |
| `Optional` tags | `Array`<`string`> |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[StatTimeSeries](../interfaces/stattimeseries.md)[]>

___

