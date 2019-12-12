[@redhat-cloud-services/notifications-client](../README.md) > [EndpointsApi](../classes/endpointsapi.md)

# Class: EndpointsApi

EndpointsApi - object-oriented interface

*__export__*: 

*__class__*: EndpointsApi

*__extends__*: {BaseAPI}

## Hierarchy

 [BaseAPI](baseapi.md)

**↳ EndpointsApi**

## Index

### Constructors

* [constructor](endpointsapi.md#constructor)

### Properties

* [axios](endpointsapi.md#axios)
* [basePath](endpointsapi.md#basepath)
* [configuration](endpointsapi.md#configuration)

### Methods

* [endpointsCreate](endpointsapi.md#endpointscreate)
* [endpointsDestroy](endpointsapi.md#endpointsdestroy)
* [endpointsIndex](endpointsapi.md#endpointsindex)
* [endpointsShow](endpointsapi.md#endpointsshow)
* [endpointsTest](endpointsapi.md#endpointstest)
* [endpointsUpdate](endpointsapi.md#endpointsupdate)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new EndpointsApi**(configuration?: *[Configuration](configuration.md)*, basePath?: *`string`*, axios?: *`AxiosInstance`*): [EndpointsApi](endpointsapi.md)

*Inherited from [BaseAPI](baseapi.md).[constructor](baseapi.md#constructor)*

*Defined in [api.ts:49](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/hooks/api.ts#L49)*

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| `Optional` configuration | [Configuration](configuration.md) | - |
| `Default value` basePath | `string` |  BASE_PATH |
| `Default value` axios | `AxiosInstance` |  globalAxios |

**Returns:** [EndpointsApi](endpointsapi.md)

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

<a id="endpointscreate"></a>

###  endpointsCreate

▸ **endpointsCreate**(X_RH_IDENTITY: *`string`*, inlineObject1: *[InlineObject1](../interfaces/inlineobject1.md)*, options?: *`any`*): `AxiosPromise`<[InlineResponse201](../interfaces/inlineresponse201.md)>

*Defined in [api.ts:1742](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/hooks/api.ts#L1742)*

Creates an endpoint

*__throws__*: {RequiredError}

*__memberof__*: EndpointsApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| X_RH_IDENTITY | `string` |  \- |
| inlineObject1 | [InlineObject1](../interfaces/inlineobject1.md) |  \- |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[InlineResponse201](../interfaces/inlineresponse201.md)>

___
<a id="endpointsdestroy"></a>

###  endpointsDestroy

▸ **endpointsDestroy**(X_RH_IDENTITY: *`string`*, id: *`number`*, options?: *`any`*): `AxiosPromise`<`Response`>

*Defined in [api.ts:1754](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/hooks/api.ts#L1754)*

*__throws__*: {RequiredError}

*__memberof__*: EndpointsApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| X_RH_IDENTITY | `string` |  \- |
| id | `number` |  \- |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<`Response`>

___
<a id="endpointsindex"></a>

###  endpointsIndex

▸ **endpointsIndex**(X_RH_IDENTITY: *`string`*, order?: *`string`*, offset?: *`number`*, limit?: *`number`*, options?: *`any`*): `AxiosPromise`<[InlineResponse2003](../interfaces/inlineresponse2003.md)>

*Defined in [api.ts:1768](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/hooks/api.ts#L1768)*

List all endpoints

*__throws__*: {RequiredError}

*__memberof__*: EndpointsApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| X_RH_IDENTITY | `string` |  \- |
| `Optional` order | `string` |
| `Optional` offset | `number` |
| `Optional` limit | `number` |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[InlineResponse2003](../interfaces/inlineresponse2003.md)>

___
<a id="endpointsshow"></a>

###  endpointsShow

▸ **endpointsShow**(X_RH_IDENTITY: *`string`*, id: *`number`*, options?: *`any`*): `AxiosPromise`<[InlineResponse201](../interfaces/inlineresponse201.md)>

*Defined in [api.ts:1780](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/hooks/api.ts#L1780)*

Shows the requested endpoint

*__throws__*: {RequiredError}

*__memberof__*: EndpointsApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| X_RH_IDENTITY | `string` |  \- |
| id | `number` |  \- |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[InlineResponse201](../interfaces/inlineresponse201.md)>

___
<a id="endpointstest"></a>

###  endpointsTest

▸ **endpointsTest**(X_RH_IDENTITY: *`string`*, id: *`number`*, options?: *`any`*): `AxiosPromise`<`Response`>

*Defined in [api.ts:1792](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/hooks/api.ts#L1792)*

Send a test message to the endpoint

*__throws__*: {RequiredError}

*__memberof__*: EndpointsApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| X_RH_IDENTITY | `string` |  \- |
| id | `number` |  \- |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<`Response`>

___
<a id="endpointsupdate"></a>

###  endpointsUpdate

▸ **endpointsUpdate**(X_RH_IDENTITY: *`string`*, id: *`number`*, inlineObject2: *[InlineObject2](../interfaces/inlineobject2.md)*, options?: *`any`*): `AxiosPromise`<[InlineResponse201](../interfaces/inlineresponse201.md)>

*Defined in [api.ts:1805](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/hooks/api.ts#L1805)*

Updates the requested endpoint

*__throws__*: {RequiredError}

*__memberof__*: EndpointsApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| X_RH_IDENTITY | `string` |  \- |
| id | `number` |  \- |
| inlineObject2 | [InlineObject2](../interfaces/inlineobject2.md) |  \- |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[InlineResponse201](../interfaces/inlineresponse201.md)>

___

