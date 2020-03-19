[@redhat-cloud-services/insights-client](../README.md) › [Globals](../globals.md) › [StatsApi](statsapi.md)

# Class: StatsApi

StatsApi - object-oriented interface

**`export`** 

**`class`** StatsApi

**`extends`** {BaseAPI}

## Hierarchy

* [BaseAPI](baseapi.md)

  ↳ **StatsApi**

## Index

### Constructors

* [constructor](statsapi.md#constructor)

### Properties

* [axios](statsapi.md#protected-axios)
* [basePath](statsapi.md#protected-basepath)
* [configuration](statsapi.md#protected-configuration)

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

## Constructors

###  constructor

\+ **new StatsApi**(`configuration?`: [Configuration](configuration.md), `basePath`: string, `axios`: AxiosInstance): *[StatsApi](statsapi.md)*

*Inherited from [BaseAPI](baseapi.md).[constructor](baseapi.md#constructor)*

*Defined in [api.ts:49](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L49)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`configuration?` | [Configuration](configuration.md) | - |
`basePath` | string |  BASE_PATH |
`axios` | AxiosInstance |  globalAxios |

**Returns:** *[StatsApi](statsapi.md)*

## Properties

### `Protected` axios

• **axios**: *AxiosInstance*

*Inherited from [BaseAPI](baseapi.md).[axios](baseapi.md#protected-axios)*

*Defined in [api.ts:51](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L51)*

___

### `Protected` basePath

• **basePath**: *string*

*Inherited from [BaseAPI](baseapi.md).[basePath](baseapi.md#protected-basepath)*

*Defined in [api.ts:51](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L51)*

___

### `Protected` configuration

• **configuration**: *[Configuration](configuration.md) | undefined*

*Inherited from [BaseAPI](baseapi.md).[configuration](baseapi.md#protected-configuration)*

*Defined in [api.ts:49](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L49)*

## Methods

###  statsHitsSeries

▸ **statsHitsSeries**(`start?`: string, `end?`: string, `grain?`: "ever" | "year" | "quarter" | "month" | "week" | "day", `tags?`: Array‹string›, `options?`: any): *AxiosPromise‹[StatTimeSeries](../interfaces/stattimeseries.md)[]›*

*Defined in [api.ts:4706](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L4706)*

A 'hit' is a unique system-rule pair - a rule impacting one system.

**`summary`** Simple time series of day and number of hits per day.

**`throws`** {RequiredError}

**`memberof`** StatsApi

**Parameters:**

Name | Type |
------ | ------ |
`start?` | string |
`end?` | string |
`grain?` | "ever" &#124; "year" &#124; "quarter" &#124; "month" &#124; "week" &#124; "day" |
`tags?` | Array‹string› |
`options?` | any |

**Returns:** *AxiosPromise‹[StatTimeSeries](../interfaces/stattimeseries.md)[]›*

___

###  statsList

▸ **statsList**(`options?`: any): *AxiosPromise‹Response›*

*Defined in [api.ts:4717](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L4717)*

Copied sort-of from the APIRootView's `get` method.

**`summary`** Provide a simple list of URLs contained here.

**`throws`** {RequiredError}

**`memberof`** StatsApi

**Parameters:**

Name | Type |
------ | ------ |
`options?` | any |

**Returns:** *AxiosPromise‹Response›*

___

###  statsReports

▸ **statsReports**(`tags?`: Array‹string›, `options?`: any): *AxiosPromise‹[Stats](../interfaces/stats.md)›*

*Defined in [api.ts:4729](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L4729)*

Only current reports are considered.

**`summary`** Show statistics of reports impacting across categories and risks.

**`throws`** {RequiredError}

**`memberof`** StatsApi

**Parameters:**

Name | Type |
------ | ------ |
`tags?` | Array‹string› |
`options?` | any |

**Returns:** *AxiosPromise‹[Stats](../interfaces/stats.md)›*

___

###  statsRules

▸ **statsRules**(`tags?`: Array‹string›, `options?`: any): *AxiosPromise‹[Stats](../interfaces/stats.md)›*

*Defined in [api.ts:4741](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L4741)*

Only current reports are considered.

**`summary`** Show statistics of rule usage across categories and risks.

**`throws`** {RequiredError}

**`memberof`** StatsApi

**Parameters:**

Name | Type |
------ | ------ |
`tags?` | Array‹string› |
`options?` | any |

**Returns:** *AxiosPromise‹[Stats](../interfaces/stats.md)›*

___

###  statsRulesHitSeries

▸ **statsRulesHitSeries**(`start?`: string, `end?`: string, `grain?`: "ever" | "year" | "quarter" | "month" | "week" | "day", `tags?`: Array‹string›, `options?`: any): *AxiosPromise‹[StatTimeSeries](../interfaces/stattimeseries.md)[]›*

*Defined in [api.ts:4756](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L4756)*

If one rule is impacting four systems, this is counted once.

**`summary`** Simple time series of day and number of rules impacting systems.

**`throws`** {RequiredError}

**`memberof`** StatsApi

**Parameters:**

Name | Type |
------ | ------ |
`start?` | string |
`end?` | string |
`grain?` | "ever" &#124; "year" &#124; "quarter" &#124; "month" &#124; "week" &#124; "day" |
`tags?` | Array‹string› |
`options?` | any |

**Returns:** *AxiosPromise‹[StatTimeSeries](../interfaces/stattimeseries.md)[]›*

___

###  statsStaleHosts

▸ **statsStaleHosts**(`tags?`: Array‹string›, `options?`: any): *AxiosPromise‹[StaleSystemStats](../interfaces/stalesystemstats.md)›*

*Defined in [api.ts:4768](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L4768)*

For historic reasons, 'stale' refers to hosts that are being warned of being stale, and 'stale_warn' refers to hosts that are being hidden from display.

**`summary`** Show statistics of stale warning and hidden systems.

**`throws`** {RequiredError}

**`memberof`** StatsApi

**Parameters:**

Name | Type |
------ | ------ |
`tags?` | Array‹string› |
`options?` | any |

**Returns:** *AxiosPromise‹[StaleSystemStats](../interfaces/stalesystemstats.md)›*

___

###  statsSystems

▸ **statsSystems**(`tags?`: Array‹string›, `options?`: any): *AxiosPromise‹[Stats](../interfaces/stats.md)›*

*Defined in [api.ts:4780](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L4780)*

Only current reports are considered.

**`summary`** Show statistics of systems being impacted across categories and risks.

**`throws`** {RequiredError}

**`memberof`** StatsApi

**Parameters:**

Name | Type |
------ | ------ |
`tags?` | Array‹string› |
`options?` | any |

**Returns:** *AxiosPromise‹[Stats](../interfaces/stats.md)›*

___

###  statsSystemsImpactedSeries

▸ **statsSystemsImpactedSeries**(`start?`: string, `end?`: string, `grain?`: "ever" | "year" | "quarter" | "month" | "week" | "day", `tags?`: Array‹string›, `options?`: any): *AxiosPromise‹[StatTimeSeries](../interfaces/stattimeseries.md)[]›*

*Defined in [api.ts:4795](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L4795)*

Systems with no reports of rules impacting them are ignored.

**`summary`** Simple time series of day and number of systems impacted by any rule.

**`throws`** {RequiredError}

**`memberof`** StatsApi

**Parameters:**

Name | Type |
------ | ------ |
`start?` | string |
`end?` | string |
`grain?` | "ever" &#124; "year" &#124; "quarter" &#124; "month" &#124; "week" &#124; "day" |
`tags?` | Array‹string› |
`options?` | any |

**Returns:** *AxiosPromise‹[StatTimeSeries](../interfaces/stattimeseries.md)[]›*

___

###  statsSystemsReportingSeries

▸ **statsSystemsReportingSeries**(`start?`: string, `end?`: string, `grain?`: "ever" | "year" | "quarter" | "month" | "week" | "day", `tags?`: Array‹string›, `options?`: any): *AxiosPromise‹[StatTimeSeries](../interfaces/stattimeseries.md)[]›*

*Defined in [api.ts:4810](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L4810)*

Systems with no reports of rules impacting them are still considered.

**`summary`** Simple time series of day and number of systems having uploaded that day.

**`throws`** {RequiredError}

**`memberof`** StatsApi

**Parameters:**

Name | Type |
------ | ------ |
`start?` | string |
`end?` | string |
`grain?` | "ever" &#124; "year" &#124; "quarter" &#124; "month" &#124; "week" &#124; "day" |
`tags?` | Array‹string› |
`options?` | any |

**Returns:** *AxiosPromise‹[StatTimeSeries](../interfaces/stattimeseries.md)[]›*
