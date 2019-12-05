[@redhat-cloud-services/notifications-client](../README.md) > [AppsApi](../classes/appsapi.md)

# Class: AppsApi

AppsApi - object-oriented interface

*__export__*: 

*__class__*: AppsApi

*__extends__*: {BaseAPI}

## Hierarchy

 [BaseAPI](baseapi.md)

**↳ AppsApi**

## Index

### Constructors

* [constructor](appsapi.md#constructor)

### Properties

* [axios](appsapi.md#axios)
* [basePath](appsapi.md#basepath)
* [configuration](appsapi.md#configuration)

### Methods

* [appsIndex](appsapi.md#appsindex)
* [appsShow](appsapi.md#appsshow)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new AppsApi**(configuration?: *[Configuration](configuration.md)*, basePath?: *`string`*, axios?: *`AxiosInstance`*): [AppsApi](appsapi.md)

*Inherited from [BaseAPI](baseapi.md).[constructor](baseapi.md#constructor)*

*Defined in [api.ts:49](https://github.com/karelhala/javascript-clients/blob/master/packages/hooks/api.ts#L49)*

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| `Optional` configuration | [Configuration](configuration.md) | - |
| `Default value` basePath | `string` |  BASE_PATH |
| `Default value` axios | `AxiosInstance` |  globalAxios |

**Returns:** [AppsApi](appsapi.md)

___

## Properties

<a id="axios"></a>

### `<Protected>` axios

**● axios**: *`AxiosInstance`*

*Inherited from [BaseAPI](baseapi.md).[axios](baseapi.md#axios)*

*Defined in [api.ts:51](https://github.com/karelhala/javascript-clients/blob/master/packages/hooks/api.ts#L51)*

___
<a id="basepath"></a>

### `<Protected>` basePath

**● basePath**: *`string`*

*Inherited from [BaseAPI](baseapi.md).[basePath](baseapi.md#basepath)*

*Defined in [api.ts:51](https://github.com/karelhala/javascript-clients/blob/master/packages/hooks/api.ts#L51)*

___
<a id="configuration"></a>

### `<Protected>` configuration

**● configuration**: *[Configuration](configuration.md) \| `undefined`*

*Inherited from [BaseAPI](baseapi.md).[configuration](baseapi.md#configuration)*

*Defined in [api.ts:49](https://github.com/karelhala/javascript-clients/blob/master/packages/hooks/api.ts#L49)*

___

## Methods

<a id="appsindex"></a>

###  appsIndex

▸ **appsIndex**(X_RH_IDENTITY: *`string`*, options?: *`any`*): `AxiosPromise`<[InlineResponse200](../interfaces/inlineresponse200.md)>

*Defined in [api.ts:1265](https://github.com/karelhala/javascript-clients/blob/master/packages/hooks/api.ts#L1265)*

Lists all apps requested

*__throws__*: {RequiredError}

*__memberof__*: AppsApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| X_RH_IDENTITY | `string` |  \- |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[InlineResponse200](../interfaces/inlineresponse200.md)>

___
<a id="appsshow"></a>

###  appsShow

▸ **appsShow**(X_RH_IDENTITY: *`string`*, id: *`number`*, options?: *`any`*): `AxiosPromise`<[InlineResponse2002](../interfaces/inlineresponse2002.md)>

*Defined in [api.ts:1277](https://github.com/karelhala/javascript-clients/blob/master/packages/hooks/api.ts#L1277)*

Shows the requested app

*__throws__*: {RequiredError}

*__memberof__*: AppsApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| X_RH_IDENTITY | `string` |  \- |
| id | `number` |  \- |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[InlineResponse2002](../interfaces/inlineresponse2002.md)>

___

