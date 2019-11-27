[@redhat-cloud-services/cost-management-client](../README.md) > [SourcesBillingSourceApi](../classes/sourcesbillingsourceapi.md)

# Class: SourcesBillingSourceApi

SourcesBillingSourceApi - object-oriented interface

*__export__*: 

*__class__*: SourcesBillingSourceApi

*__extends__*: {BaseAPI}

## Hierarchy

 [BaseAPI](baseapi.md)

**↳ SourcesBillingSourceApi**

## Index

### Constructors

* [constructor](sourcesbillingsourceapi.md#constructor)

### Properties

* [axios](sourcesbillingsourceapi.md#axios)
* [basePath](sourcesbillingsourceapi.md#basepath)
* [configuration](sourcesbillingsourceapi.md#configuration)

### Methods

* [createBillingSource](sourcesbillingsourceapi.md#createbillingsource)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new SourcesBillingSourceApi**(configuration?: *[Configuration](configuration.md)*, basePath?: *`string`*, axios?: *`AxiosInstance`*): [SourcesBillingSourceApi](sourcesbillingsourceapi.md)

*Inherited from [BaseAPI](baseapi.md).[constructor](baseapi.md#constructor)*

*Defined in [api.ts:49](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/cost-management/api.ts#L49)*

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| `Optional` configuration | [Configuration](configuration.md) | - |
| `Default value` basePath | `string` |  BASE_PATH |
| `Default value` axios | `AxiosInstance` |  globalAxios |

**Returns:** [SourcesBillingSourceApi](sourcesbillingsourceapi.md)

___

## Properties

<a id="axios"></a>

### `<Protected>` axios

**● axios**: *`AxiosInstance`*

*Inherited from [BaseAPI](baseapi.md).[axios](baseapi.md#axios)*

*Defined in [api.ts:51](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/cost-management/api.ts#L51)*

___
<a id="basepath"></a>

### `<Protected>` basePath

**● basePath**: *`string`*

*Inherited from [BaseAPI](baseapi.md).[basePath](baseapi.md#basepath)*

*Defined in [api.ts:51](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/cost-management/api.ts#L51)*

___
<a id="configuration"></a>

### `<Protected>` configuration

**● configuration**: *[Configuration](configuration.md) \| `undefined`*

*Inherited from [BaseAPI](baseapi.md).[configuration](baseapi.md#configuration)*

*Defined in [api.ts:49](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/cost-management/api.ts#L49)*

___

## Methods

<a id="createbillingsource"></a>

###  createBillingSource

▸ **createBillingSource**(sourcesBillingSource: *[SourcesBillingSource](../interfaces/sourcesbillingsource.md)*, options?: *`any`*): `AxiosPromise`<[SourcesBillingSourceOut](../interfaces/sourcesbillingsourceout.md)>

*Defined in [api.ts:6340](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/cost-management/api.ts#L6340)*

*__summary__*: Create a billing source for a Platform-Source.

*__throws__*: {RequiredError}

*__memberof__*: SourcesBillingSourceApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| sourcesBillingSource | [SourcesBillingSource](../interfaces/sourcesbillingsource.md) |  \- |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[SourcesBillingSourceOut](../interfaces/sourcesbillingsourceout.md)>

___

