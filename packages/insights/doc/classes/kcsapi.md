[@redhat-cloud-services/insights-client](../README.md) > [KcsApi](../classes/kcsapi.md)

# Class: KcsApi

KcsApi - object-oriented interface

*__export__*: 

*__class__*: KcsApi

*__extends__*: {BaseAPI}

## Hierarchy

 [BaseAPI](baseapi.md)

**↳ KcsApi**

## Index

### Constructors

* [constructor](kcsapi.md#constructor)

### Properties

* [axios](kcsapi.md#axios)
* [basePath](kcsapi.md#basepath)
* [configuration](kcsapi.md#configuration)

### Methods

* [kcsList](kcsapi.md#kcslist)
* [kcsRead](kcsapi.md#kcsread)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new KcsApi**(configuration?: *[Configuration](configuration.md)*, basePath?: *`string`*, axios?: *`AxiosInstance`*): [KcsApi](kcsapi.md)

*Inherited from [BaseAPI](baseapi.md).[constructor](baseapi.md#constructor)*

*Defined in [api.ts:49](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L49)*

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| `Optional` configuration | [Configuration](configuration.md) | - |
| `Default value` basePath | `string` |  BASE_PATH |
| `Default value` axios | `AxiosInstance` |  globalAxios |

**Returns:** [KcsApi](kcsapi.md)

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

<a id="kcslist"></a>

###  kcsList

▸ **kcsList**(options?: *`any`*): `AxiosPromise`<[Kcs](../interfaces/kcs.md)[]>

*Defined in [api.ts:2771](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L2771)*

Looks for all active rules with KCS solutions Returns a list of dicts of the C.R.C rule URL and its KCS solution number

*__throws__*: {RequiredError}

*__memberof__*: KcsApi

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[Kcs](../interfaces/kcs.md)[]>

___
<a id="kcsread"></a>

###  kcsRead

▸ **kcsRead**(nodeId: *`string`*, options?: *`any`*): `AxiosPromise`<`string`[]>

*Defined in [api.ts:2782](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L2782)*

Gets active rule(s) for a particular KCS solution (node\_id) Returns a list of C.R.C rule url(s) for that KCS solution

*__throws__*: {RequiredError}

*__memberof__*: KcsApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| nodeId | `string` |  KCS solution number |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<`string`[]>

___

