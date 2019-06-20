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

* [statsReports](statsapi.md#statsreports)
* [statsRules](statsapi.md#statsrules)
* [statsSystems](statsapi.md#statssystems)

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

<a id="statsreports"></a>

###  statsReports

▸ **statsReports**(options?: *`any`*): `AxiosPromise`<[RulesStats](../interfaces/rulesstats.md)>

*Defined in [api.ts:1487](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L1487)*

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

*Defined in [api.ts:1497](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L1497)*

View the statistics for this account.

*__throws__*: {RequiredError}

*__memberof__*: StatsApi

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[RulesStats](../interfaces/rulesstats.md)>

___
<a id="statssystems"></a>

###  statsSystems

▸ **statsSystems**(options?: *`any`*): `AxiosPromise`<[SystemsStats](../interfaces/systemsstats.md)>

*Defined in [api.ts:1507](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L1507)*

View the statistics for this account.

*__throws__*: {RequiredError}

*__memberof__*: StatsApi

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[SystemsStats](../interfaces/systemsstats.md)>

___

