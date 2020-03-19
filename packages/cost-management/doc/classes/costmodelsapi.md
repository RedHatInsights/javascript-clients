[@redhat-cloud-services/cost-management-client](../README.md) > [CostModelsApi](../classes/costmodelsapi.md)

# Class: CostModelsApi

CostModelsApi - object-oriented interface

*__export__*: 

*__class__*: CostModelsApi

*__extends__*: {BaseAPI}

## Hierarchy

 [BaseAPI](baseapi.md)

**↳ CostModelsApi**

## Index

### Constructors

* [constructor](costmodelsapi.md#constructor)

### Properties

* [axios](costmodelsapi.md#axios)
* [basePath](costmodelsapi.md#basepath)
* [configuration](costmodelsapi.md#configuration)

### Methods

* [createCostModel](costmodelsapi.md#createcostmodel)
* [deleteCostModel](costmodelsapi.md#deletecostmodel)
* [getCostModel](costmodelsapi.md#getcostmodel)
* [listCostModels](costmodelsapi.md#listcostmodels)
* [updateCostModel](costmodelsapi.md#updatecostmodel)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new CostModelsApi**(configuration?: *[Configuration](configuration.md)*, basePath?: *`string`*, axios?: *`AxiosInstance`*): [CostModelsApi](costmodelsapi.md)

*Inherited from [BaseAPI](baseapi.md).[constructor](baseapi.md#constructor)*

*Defined in [api.ts:49](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/cost-management/api.ts#L49)*

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| `Optional` configuration | [Configuration](configuration.md) | - |
| `Default value` basePath | `string` |  BASE_PATH |
| `Default value` axios | `AxiosInstance` |  globalAxios |

**Returns:** [CostModelsApi](costmodelsapi.md)

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

<a id="createcostmodel"></a>

###  createCostModel

▸ **createCostModel**(costModel: *[CostModel](../interfaces/costmodel.md)*, options?: *`any`*): `AxiosPromise`<[CostModelOut](../interfaces/costmodelout.md)>

*Defined in [api.ts:4031](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/cost-management/api.ts#L4031)*

*__summary__*: Create a new cost model.

*__throws__*: {RequiredError}

*__memberof__*: CostModelsApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| costModel | [CostModel](../interfaces/costmodel.md) |  \- |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[CostModelOut](../interfaces/costmodelout.md)>

___
<a id="deletecostmodel"></a>

###  deleteCostModel

▸ **deleteCostModel**(costModelUuid: *`string`*, options?: *`any`*): `AxiosPromise`<`Response`>

*Defined in [api.ts:4043](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/cost-management/api.ts#L4043)*

*__summary__*: Delete a Cost Model

*__throws__*: {RequiredError}

*__memberof__*: CostModelsApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| costModelUuid | `string` |  UUID of Cost Model to get |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<`Response`>

___
<a id="getcostmodel"></a>

###  getCostModel

▸ **getCostModel**(costModelUuid: *`string`*, options?: *`any`*): `AxiosPromise`<[CostModelOut](../interfaces/costmodelout.md)>

*Defined in [api.ts:4055](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/cost-management/api.ts#L4055)*

*__summary__*: Get a Cost Model.

*__throws__*: {RequiredError}

*__memberof__*: CostModelsApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| costModelUuid | `string` |  UUID of Cost Model to get |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[CostModelOut](../interfaces/costmodelout.md)>

___
<a id="listcostmodels"></a>

###  listCostModels

▸ **listCostModels**(offset?: *`number`*, limit?: *`number`*, providerUuid?: *`string`*, sourceType?: *`string`*, name?: *`string`*, description?: *`string`*, ordering?: *"name" \| "-name" \| "source_type" \| "-source_type" \| "updated_timestamp" \| "-updated_timestamp"*, options?: *`any`*): `AxiosPromise`<[CostModelPagination](../interfaces/costmodelpagination.md)>

*Defined in [api.ts:4073](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/cost-management/api.ts#L4073)*

*__summary__*: List the cost models

*__throws__*: {RequiredError}

*__memberof__*: CostModelsApi

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` offset | `number` |
| `Optional` limit | `number` |
| `Optional` providerUuid | `string` |
| `Optional` sourceType | `string` |
| `Optional` name | `string` |
| `Optional` description | `string` |
| `Optional` ordering | "name" \| "-name" \| "source_type" \| "-source_type" \| "updated_timestamp" \| "-updated_timestamp" |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[CostModelPagination](../interfaces/costmodelpagination.md)>

___
<a id="updatecostmodel"></a>

###  updateCostModel

▸ **updateCostModel**(costModelUuid: *`string`*, costModel: *[CostModel](../interfaces/costmodel.md)*, options?: *`any`*): `AxiosPromise`<[CostModelOut](../interfaces/costmodelout.md)>

*Defined in [api.ts:4086](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/cost-management/api.ts#L4086)*

*__summary__*: Update a Cost Model

*__throws__*: {RequiredError}

*__memberof__*: CostModelsApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| costModelUuid | `string` |  UUID of Cost Model to get |
| costModel | [CostModel](../interfaces/costmodel.md) |  Update to a Cost Model |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[CostModelOut](../interfaces/costmodelout.md)>

___

