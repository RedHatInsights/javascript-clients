[@redhat-cloud-services/catalog-client](../README.md) > [ServicePlansApi](../classes/serviceplansapi.md)

# Class: ServicePlansApi

ServicePlansApi - object-oriented interface

*__export__*: 

*__class__*: ServicePlansApi

*__extends__*: {BaseAPI}

## Hierarchy

 [BaseAPI](baseapi.md)

**↳ ServicePlansApi**

## Index

### Constructors

* [constructor](serviceplansapi.md#constructor)

### Properties

* [axios](serviceplansapi.md#axios)
* [basePath](serviceplansapi.md#basepath)
* [configuration](serviceplansapi.md#configuration)

### Methods

* [createServicePlan](serviceplansapi.md#createserviceplan)
* [showServicePlan](serviceplansapi.md#showserviceplan)
* [showServicePlanBase](serviceplansapi.md#showserviceplanbase)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new ServicePlansApi**(configuration?: *[Configuration](configuration.md)*, basePath?: *`string`*, axios?: *`AxiosInstance`*): [ServicePlansApi](serviceplansapi.md)

*Inherited from [BaseAPI](baseapi.md).[constructor](baseapi.md#constructor)*

*Defined in [api.ts:49](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L49)*

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| `Optional` configuration | [Configuration](configuration.md) | - |
| `Default value` basePath | `string` |  BASE_PATH |
| `Default value` axios | `AxiosInstance` |  globalAxios |

**Returns:** [ServicePlansApi](serviceplansapi.md)

___

## Properties

<a id="axios"></a>

### `<Protected>` axios

**● axios**: *`AxiosInstance`*

*Inherited from [BaseAPI](baseapi.md).[axios](baseapi.md#axios)*

*Defined in [api.ts:51](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L51)*

___
<a id="basepath"></a>

### `<Protected>` basePath

**● basePath**: *`string`*

*Inherited from [BaseAPI](baseapi.md).[basePath](baseapi.md#basepath)*

*Defined in [api.ts:51](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L51)*

___
<a id="configuration"></a>

### `<Protected>` configuration

**● configuration**: *[Configuration](configuration.md) \| `undefined`*

*Inherited from [BaseAPI](baseapi.md).[configuration](baseapi.md#configuration)*

*Defined in [api.ts:49](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L49)*

___

## Methods

<a id="createserviceplan"></a>

###  createServicePlan

▸ **createServicePlan**(importServicePlan?: *[ImportServicePlan](../interfaces/importserviceplan.md)*, options?: *`any`*): `AxiosPromise`<[ServicePlan](../interfaces/serviceplan.md)[]>

*Defined in [api.ts:5844](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L5844)*

Returns the new Service Plan

*__summary__*: Create Service Plan

*__throws__*: {RequiredError}

*__memberof__*: ServicePlansApi

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` importServicePlan | [ImportServicePlan](../interfaces/importserviceplan.md) |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[ServicePlan](../interfaces/serviceplan.md)[]>

___
<a id="showserviceplan"></a>

###  showServicePlan

▸ **showServicePlan**(id: *`string`*, options?: *`any`*): `AxiosPromise`<[ServicePlan](../interfaces/serviceplan.md)>

*Defined in [api.ts:5856](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L5856)*

Returns the specified Service Plan

*__summary__*: Show Service Plan

*__throws__*: {RequiredError}

*__memberof__*: ServicePlansApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  ID of the resource |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[ServicePlan](../interfaces/serviceplan.md)>

___
<a id="showserviceplanbase"></a>

###  showServicePlanBase

▸ **showServicePlanBase**(id: *`string`*, options?: *`any`*): `AxiosPromise`<`any`>

*Defined in [api.ts:5868](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L5868)*

Returns the specified Service Plan's base schema

*__summary__*: Show Service Plan Base Schema

*__throws__*: {RequiredError}

*__memberof__*: ServicePlansApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  ID of the resource |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<`any`>

___

