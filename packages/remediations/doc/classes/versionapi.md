[@redhat-cloud-services/remediations-client](../README.md) > [VersionApi](../classes/versionapi.md)

# Class: VersionApi

VersionApi - object-oriented interface

*__export__*: 

*__class__*: VersionApi

*__extends__*: {BaseAPI}

## Hierarchy

 [BaseAPI](baseapi.md)

**↳ VersionApi**

## Index

### Constructors

* [constructor](versionapi.md#constructor)

### Properties

* [axios](versionapi.md#axios)
* [basePath](versionapi.md#basepath)
* [configuration](versionapi.md#configuration)

### Methods

* [getVersion](versionapi.md#getversion)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new VersionApi**(configuration?: *[Configuration](configuration.md)*, basePath?: *`string`*, axios?: *`AxiosInstance`*): [VersionApi](versionapi.md)

*Inherited from [BaseAPI](baseapi.md).[constructor](baseapi.md#constructor)*

*Defined in [api.ts:49](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/remediations/api.ts#L49)*

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| `Optional` configuration | [Configuration](configuration.md) | - |
| `Default value` basePath | `string` |  BASE_PATH |
| `Default value` axios | `AxiosInstance` |  globalAxios |

**Returns:** [VersionApi](versionapi.md)

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

<a id="getversion"></a>

###  getVersion

▸ **getVersion**(options?: *`any`*): `AxiosPromise`<[InlineResponse200](../interfaces/inlineresponse200.md)>

*Defined in [api.ts:1965](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/remediations/api.ts#L1965)*

Provides information about the version of the service

*__summary__*: Get service version

*__throws__*: {RequiredError}

*__memberof__*: VersionApi

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[InlineResponse200](../interfaces/inlineresponse200.md)>

___

