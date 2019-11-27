[@redhat-cloud-services/cost-management-client](../README.md) > [SourcesAuthenticationApi](../classes/sourcesauthenticationapi.md)

# Class: SourcesAuthenticationApi

SourcesAuthenticationApi - object-oriented interface

*__export__*: 

*__class__*: SourcesAuthenticationApi

*__extends__*: {BaseAPI}

## Hierarchy

 [BaseAPI](baseapi.md)

**↳ SourcesAuthenticationApi**

## Index

### Constructors

* [constructor](sourcesauthenticationapi.md#constructor)

### Properties

* [axios](sourcesauthenticationapi.md#axios)
* [basePath](sourcesauthenticationapi.md#basepath)
* [configuration](sourcesauthenticationapi.md#configuration)

### Methods

* [createAuthentication](sourcesauthenticationapi.md#createauthentication)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new SourcesAuthenticationApi**(configuration?: *[Configuration](configuration.md)*, basePath?: *`string`*, axios?: *`AxiosInstance`*): [SourcesAuthenticationApi](sourcesauthenticationapi.md)

*Inherited from [BaseAPI](baseapi.md).[constructor](baseapi.md#constructor)*

*Defined in [api.ts:49](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/cost-management/api.ts#L49)*

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| `Optional` configuration | [Configuration](configuration.md) | - |
| `Default value` basePath | `string` |  BASE_PATH |
| `Default value` axios | `AxiosInstance` |  globalAxios |

**Returns:** [SourcesAuthenticationApi](sourcesauthenticationapi.md)

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

<a id="createauthentication"></a>

###  createAuthentication

▸ **createAuthentication**(sourcesAuthentication: *[SourcesAuthentication](../interfaces/sourcesauthentication.md)*, options?: *`any`*): `AxiosPromise`<[SourcesAuthenticationOut](../interfaces/sourcesauthenticationout.md)>

*Defined in [api.ts:6226](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/cost-management/api.ts#L6226)*

*__summary__*: Create an authentication entry for a Platform-Source.

*__throws__*: {RequiredError}

*__memberof__*: SourcesAuthenticationApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| sourcesAuthentication | [SourcesAuthentication](../interfaces/sourcesauthentication.md) |  \- |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[SourcesAuthenticationOut](../interfaces/sourcesauthenticationout.md)>

___

