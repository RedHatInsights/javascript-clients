[@redhat-cloud-services/insights-client](../README.md) > [ExportApi](../classes/exportapi.md)

# Class: ExportApi

ExportApi - object-oriented interface

*__export__*: 

*__class__*: ExportApi

*__extends__*: {BaseAPI}

## Hierarchy

 [BaseAPI](baseapi.md)

**↳ ExportApi**

## Index

### Constructors

* [constructor](exportapi.md#constructor)

### Properties

* [axios](exportapi.md#axios)
* [basePath](exportapi.md#basepath)
* [configuration](exportapi.md#configuration)

### Methods

* [exportHitsList](exportapi.md#exporthitslist)
* [exportListCsv](exportapi.md#exportlistcsv)
* [exportListJson](exportapi.md#exportlistjson)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new ExportApi**(configuration?: *[Configuration](configuration.md)*, basePath?: *`string`*, axios?: *`AxiosInstance`*): [ExportApi](exportapi.md)

*Inherited from [BaseAPI](baseapi.md).[constructor](baseapi.md#constructor)*

*Defined in [api.ts:49](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L49)*

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| `Optional` configuration | [Configuration](configuration.md) | - |
| `Default value` basePath | `string` |  BASE_PATH |
| `Default value` axios | `AxiosInstance` |  globalAxios |

**Returns:** [ExportApi](exportapi.md)

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

<a id="exporthitslist"></a>

###  exportHitsList

▸ **exportHitsList**(category?: *`Array`<`1` \| `2` \| `3` \| `4`>*, impact?: *`Array`<`1` \| `2` \| `3` \| `4`>*, likelihood?: *`Array`<`1` \| `2` \| `3` \| `4`>*, resRisk?: *`Array`<`1` \| `2` \| `3` \| `4`>*, text?: *`string`*, totalRisk?: *`Array`<`1` \| `2` \| `3` \| `4`>*, options?: *`any`*): `AxiosPromise`<[InlineResponse2001](../interfaces/inlineresponse2001.md)[]>

*Defined in [api.ts:1884](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L1884)*

Get each host and all rules currently affecting it. This will eventually require a request to the Inventory service to list the host name and Insights UUID (as opposed to the Inventory UUID which we store). We also only present active, non-acked (on an account AND host level) rules.

*__throws__*: {RequiredError}

*__memberof__*: ExportApi

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` category | `Array`<`1` \| `2` \| `3` \| `4`> |
| `Optional` impact | `Array`<`1` \| `2` \| `3` \| `4`> |
| `Optional` likelihood | `Array`<`1` \| `2` \| `3` \| `4`> |
| `Optional` resRisk | `Array`<`1` \| `2` \| `3` \| `4`> |
| `Optional` text | `string` |
| `Optional` totalRisk | `Array`<`1` \| `2` \| `3` \| `4`> |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[InlineResponse2001](../interfaces/inlineresponse2001.md)[]>

___
<a id="exportlistcsv"></a>

###  exportListCsv

▸ **exportListCsv**(category?: *`Array`<`1` \| `2` \| `3` \| `4`>*, impact?: *`Array`<`1` \| `2` \| `3` \| `4`>*, likelihood?: *`Array`<`1` \| `2` \| `3` \| `4`>*, resRisk?: *`Array`<`1` \| `2` \| `3` \| `4`>*, text?: *`string`*, totalRisk?: *`Array`<`1` \| `2` \| `3` \| `4`>*, options?: *`any`*): `AxiosPromise`<`Response`>

*Defined in [api.ts:1900](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L1900)*

Export the hosts and rules listing as CSV or JSON

*__throws__*: {RequiredError}

*__memberof__*: ExportApi

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` category | `Array`<`1` \| `2` \| `3` \| `4`> |
| `Optional` impact | `Array`<`1` \| `2` \| `3` \| `4`> |
| `Optional` likelihood | `Array`<`1` \| `2` \| `3` \| `4`> |
| `Optional` resRisk | `Array`<`1` \| `2` \| `3` \| `4`> |
| `Optional` text | `string` |
| `Optional` totalRisk | `Array`<`1` \| `2` \| `3` \| `4`> |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<`Response`>

___
<a id="exportlistjson"></a>

###  exportListJson

▸ **exportListJson**(category?: *`Array`<`1` \| `2` \| `3` \| `4`>*, impact?: *`Array`<`1` \| `2` \| `3` \| `4`>*, likelihood?: *`Array`<`1` \| `2` \| `3` \| `4`>*, resRisk?: *`Array`<`1` \| `2` \| `3` \| `4`>*, text?: *`string`*, totalRisk?: *`Array`<`1` \| `2` \| `3` \| `4`>*, options?: *`any`*): `AxiosPromise`<[InlineResponse2001](../interfaces/inlineresponse2001.md)[]>

*Defined in [api.ts:1916](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L1916)*

Export the hosts and rules listing as CSV or JSON

*__throws__*: {RequiredError}

*__memberof__*: ExportApi

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` category | `Array`<`1` \| `2` \| `3` \| `4`> |
| `Optional` impact | `Array`<`1` \| `2` \| `3` \| `4`> |
| `Optional` likelihood | `Array`<`1` \| `2` \| `3` \| `4`> |
| `Optional` resRisk | `Array`<`1` \| `2` \| `3` \| `4`> |
| `Optional` text | `string` |
| `Optional` totalRisk | `Array`<`1` \| `2` \| `3` \| `4`> |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[InlineResponse2001](../interfaces/inlineresponse2001.md)[]>

___

