[@redhat-cloud-services/notifications-client](../README.md) > [AppRegistrationApi](../classes/appregistrationapi.md)

# Class: AppRegistrationApi

AppRegistrationApi - object-oriented interface

*__export__*: 

*__class__*: AppRegistrationApi

*__extends__*: {BaseAPI}

## Hierarchy

 [BaseAPI](baseapi.md)

**↳ AppRegistrationApi**

## Index

### Constructors

* [constructor](appregistrationapi.md#constructor)

### Properties

* [axios](appregistrationapi.md#axios)
* [basePath](appregistrationapi.md#basepath)
* [configuration](appregistrationapi.md#configuration)

### Methods

* [appRegistrationCreate](appregistrationapi.md#appregistrationcreate)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new AppRegistrationApi**(configuration?: *[Configuration](configuration.md)*, basePath?: *`string`*, axios?: *`AxiosInstance`*): [AppRegistrationApi](appregistrationapi.md)

*Inherited from [BaseAPI](baseapi.md).[constructor](baseapi.md#constructor)*

*Defined in [api.ts:49](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/hooks/api.ts#L49)*

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| `Optional` configuration | [Configuration](configuration.md) | - |
| `Default value` basePath | `string` |  BASE_PATH |
| `Default value` axios | `AxiosInstance` |  globalAxios |

**Returns:** [AppRegistrationApi](appregistrationapi.md)

___

## Properties

<a id="axios"></a>

### `<Protected>` axios

**● axios**: *`AxiosInstance`*

*Inherited from [BaseAPI](baseapi.md).[axios](baseapi.md#axios)*

*Defined in [api.ts:51](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/hooks/api.ts#L51)*

___
<a id="basepath"></a>

### `<Protected>` basePath

**● basePath**: *`string`*

*Inherited from [BaseAPI](baseapi.md).[basePath](baseapi.md#basepath)*

*Defined in [api.ts:51](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/hooks/api.ts#L51)*

___
<a id="configuration"></a>

### `<Protected>` configuration

**● configuration**: *[Configuration](configuration.md) \| `undefined`*

*Inherited from [BaseAPI](baseapi.md).[configuration](baseapi.md#configuration)*

*Defined in [api.ts:49](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/hooks/api.ts#L49)*

___

## Methods

<a id="appregistrationcreate"></a>

###  appRegistrationCreate

▸ **appRegistrationCreate**(inlineObject: *[InlineObject](../interfaces/inlineobject.md)*, options?: *`any`*): `AxiosPromise`<[InlineResponse2001](../interfaces/inlineresponse2001.md)>

*Defined in [api.ts:1096](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/hooks/api.ts#L1096)*

Register an application

*__throws__*: {RequiredError}

*__memberof__*: AppRegistrationApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| inlineObject | [InlineObject](../interfaces/inlineobject.md) |  \- |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[InlineResponse2001](../interfaces/inlineresponse2001.md)>

___

