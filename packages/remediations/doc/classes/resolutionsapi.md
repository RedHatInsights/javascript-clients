[@redhat-cloud-services/remediations-client](../README.md) > [ResolutionsApi](../classes/resolutionsapi.md)

# Class: ResolutionsApi

ResolutionsApi - object-oriented interface

*__export__*: 

*__class__*: ResolutionsApi

*__extends__*: {BaseAPI}

## Hierarchy

 [BaseAPI](baseapi.md)

**↳ ResolutionsApi**

## Index

### Constructors

* [constructor](resolutionsapi.md#constructor)

### Properties

* [axios](resolutionsapi.md#axios)
* [basePath](resolutionsapi.md#basepath)
* [configuration](resolutionsapi.md#configuration)

### Methods

* [getResolutionsForIssue](resolutionsapi.md#getresolutionsforissue)
* [getResolutionsForIssues](resolutionsapi.md#getresolutionsforissues)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new ResolutionsApi**(configuration?: *[Configuration](configuration.md)*, basePath?: *`string`*, axios?: *`AxiosInstance`*): [ResolutionsApi](resolutionsapi.md)

*Inherited from [BaseAPI](baseapi.md).[constructor](baseapi.md#constructor)*

*Defined in [api.ts:49](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/remediations/api.ts#L49)*

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| `Optional` configuration | [Configuration](configuration.md) | - |
| `Default value` basePath | `string` |  BASE_PATH |
| `Default value` axios | `AxiosInstance` |  globalAxios |

**Returns:** [ResolutionsApi](resolutionsapi.md)

___

## Properties

<a id="axios"></a>

### `<Protected>` axios

**● axios**: *`AxiosInstance`*

*Inherited from [BaseAPI](baseapi.md).[axios](baseapi.md#axios)*

*Defined in [api.ts:51](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/remediations/api.ts#L51)*

___
<a id="basepath"></a>

### `<Protected>` basePath

**● basePath**: *`string`*

*Inherited from [BaseAPI](baseapi.md).[basePath](baseapi.md#basepath)*

*Defined in [api.ts:51](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/remediations/api.ts#L51)*

___
<a id="configuration"></a>

### `<Protected>` configuration

**● configuration**: *[Configuration](configuration.md) \| `undefined`*

*Inherited from [BaseAPI](baseapi.md).[configuration](baseapi.md#configuration)*

*Defined in [api.ts:49](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/remediations/api.ts#L49)*

___

## Methods

<a id="getresolutionsforissue"></a>

###  getResolutionsForIssue

▸ **getResolutionsForIssue**(issue: *`string`*, options?: *`any`*): `AxiosPromise`<[Resolutions](../interfaces/resolutions.md)>

*Defined in [api.ts:2085](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/remediations/api.ts#L2085)*

Provides information about resolutions available for the given issue

*__summary__*: Resolution metadata

*__throws__*: {RequiredError}

*__memberof__*: ResolutionsApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| issue | `string` |  Issue identifier (e.g. &#x60;advisor:CVE\_2017\_6074\_kernel\|KERNEL\_CVE\_2017\_6074&#x60;) |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[Resolutions](../interfaces/resolutions.md)>

___
<a id="getresolutionsforissues"></a>

###  getResolutionsForIssues

▸ **getResolutionsForIssues**(resolutionsBatchInput: *[ResolutionsBatchInput](../interfaces/resolutionsbatchinput.md)*, options?: *`any`*): `AxiosPromise`<`object`>

*Defined in [api.ts:2097](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/remediations/api.ts#L2097)*

Provides information about resolutions available for the given issues

*__summary__*: Resolution metadata (batch)

*__throws__*: {RequiredError}

*__memberof__*: ResolutionsApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| resolutionsBatchInput | [ResolutionsBatchInput](../interfaces/resolutionsbatchinput.md) |  \- |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<`object`>

___

