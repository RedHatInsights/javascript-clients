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

* [statsList](statsapi.md#statslist)
* [statsReports](statsapi.md#statsreports)
* [statsRules](statsapi.md#statsrules)
* [statsStaleHosts](statsapi.md#statsstalehosts)
* [statsSystems](statsapi.md#statssystems)

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

###  statsList

▸ **statsList**(`options?`: any): *AxiosPromise‹Response›*

*Defined in [api.ts:4388](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L4388)*

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

*Defined in [api.ts:4400](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L4400)*

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

*Defined in [api.ts:4412](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L4412)*

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

###  statsStaleHosts

▸ **statsStaleHosts**(`tags?`: Array‹string›, `options?`: any): *AxiosPromise‹[StaleSystemStats](../interfaces/stalesystemstats.md)›*

*Defined in [api.ts:4424](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L4424)*

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

*Defined in [api.ts:4436](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L4436)*

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
