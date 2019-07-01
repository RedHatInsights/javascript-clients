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

▸ **exportHitsList**(options?: *`any`*): `AxiosPromise`<[InlineResponse2001](../interfaces/inlineresponse2001.md)[]>

*Defined in [api.ts:1045](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L1045)*

Get each host and all rules currently affecting it. This will eventually require a request to the Inventory service to list the host name and Insights UUID (as opposed to the Inventory UUID which we store). We also only present active, non-acked rules.

*__throws__*: {RequiredError}

*__memberof__*: ExportApi

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[InlineResponse2001](../interfaces/inlineresponse2001.md)[]>

___

