[@redhat-cloud-services/insights-client](../README.md) > [SystemtypeApi](../classes/systemtypeapi.md)

# Class: SystemtypeApi

SystemtypeApi - object-oriented interface

*__export__*: 

*__class__*: SystemtypeApi

*__extends__*: {BaseAPI}

## Hierarchy

 [BaseAPI](baseapi.md)

**↳ SystemtypeApi**

## Index

### Constructors

* [constructor](systemtypeapi.md#constructor)

### Properties

* [axios](systemtypeapi.md#axios)
* [basePath](systemtypeapi.md#basepath)
* [configuration](systemtypeapi.md#configuration)

### Methods

* [systemtypeList](systemtypeapi.md#systemtypelist)
* [systemtypeRead](systemtypeapi.md#systemtyperead)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new SystemtypeApi**(configuration?: *[Configuration](configuration.md)*, basePath?: *`string`*, axios?: *`AxiosInstance`*): [SystemtypeApi](systemtypeapi.md)

*Inherited from [BaseAPI](baseapi.md).[constructor](baseapi.md#constructor)*

*Defined in [api.ts:49](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L49)*

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| `Optional` configuration | [Configuration](configuration.md) | - |
| `Default value` basePath | `string` |  BASE_PATH |
| `Default value` axios | `AxiosInstance` |  globalAxios |

**Returns:** [SystemtypeApi](systemtypeapi.md)

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

<a id="systemtypelist"></a>

###  systemtypeList

▸ **systemtypeList**(options?: *`any`*): `AxiosPromise`<[SystemType](../interfaces/systemtype.md)[]>

*Defined in [api.ts:3836](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L3836)*

List all system types

*__throws__*: {RequiredError}

*__memberof__*: SystemtypeApi

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[SystemType](../interfaces/systemtype.md)[]>

___
<a id="systemtyperead"></a>

###  systemtypeRead

▸ **systemtypeRead**(id: *`number`*, options?: *`any`*): `AxiosPromise`<[SystemType](../interfaces/systemtype.md)>

*Defined in [api.ts:3847](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L3847)*

Display a single system type

*__throws__*: {RequiredError}

*__memberof__*: SystemtypeApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| id | `number` |  A unique integer value identifying this system type. |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[SystemType](../interfaces/systemtype.md)>

___

