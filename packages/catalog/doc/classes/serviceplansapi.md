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
* [patchServicePlanModified](serviceplansapi.md#patchserviceplanmodified)
* [showServicePlan](serviceplansapi.md#showserviceplan)
* [showServicePlanBase](serviceplansapi.md#showserviceplanbase)
* [showServicePlanModified](serviceplansapi.md#showserviceplanmodified)

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

*Defined in [api.ts:6024](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L6024)*

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
<a id="patchserviceplanmodified"></a>

###  patchServicePlanModified

▸ **patchServicePlanModified**(id: *`string`*, options?: *`any`*): `AxiosPromise`<[DataDrivenFormSchema](../interfaces/datadrivenformschema.md)>

*Defined in [api.ts:6036](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L6036)*

*__summary__*: Patch Service Plan Modified Schema

*__throws__*: {RequiredError}

*__memberof__*: ServicePlansApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  ID of the resource |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[DataDrivenFormSchema](../interfaces/datadrivenformschema.md)>

___
<a id="showserviceplan"></a>

###  showServicePlan

▸ **showServicePlan**(id: *`string`*, options?: *`any`*): `AxiosPromise`<[ServicePlan](../interfaces/serviceplan.md)>

*Defined in [api.ts:6048](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L6048)*

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

▸ **showServicePlanBase**(id: *`string`*, options?: *`any`*): `AxiosPromise`<[DataDrivenFormSchema](../interfaces/datadrivenformschema.md)>

*Defined in [api.ts:6060](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L6060)*

Returns the specified Service Plan's base schema

*__summary__*: Show Service Plan Base Schema

*__throws__*: {RequiredError}

*__memberof__*: ServicePlansApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  ID of the resource |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[DataDrivenFormSchema](../interfaces/datadrivenformschema.md)>

___
<a id="showserviceplanmodified"></a>

###  showServicePlanModified

▸ **showServicePlanModified**(id: *`string`*, options?: *`any`*): `AxiosPromise`<[DataDrivenFormSchema](../interfaces/datadrivenformschema.md)>

*Defined in [api.ts:6072](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L6072)*

Returns the specified Service Plan's modified schema

*__summary__*: Show Service Plan modified Schema

*__throws__*: {RequiredError}

*__memberof__*: ServicePlansApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  ID of the resource |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[DataDrivenFormSchema](../interfaces/datadrivenformschema.md)>

___

