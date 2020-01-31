[@redhat-cloud-services/cost-management-client](../README.md) > [CostModelApi](../classes/costmodelapi.md)

# Class: CostModelApi

CostModelApi - object-oriented interface

*__export__*: 

*__class__*: CostModelApi

*__extends__*: {BaseAPI}

## Hierarchy

 [BaseAPI](baseapi.md)

**↳ CostModelApi**

## Index

### Constructors

* [constructor](costmodelapi.md#constructor)

### Properties

* [axios](costmodelapi.md#axios)
* [basePath](costmodelapi.md#basepath)
* [configuration](costmodelapi.md#configuration)

### Methods

* [createCostModel](costmodelapi.md#createcostmodel)
* [deleteCostModel](costmodelapi.md#deletecostmodel)
* [getCostModel](costmodelapi.md#getcostmodel)
* [listCostModels](costmodelapi.md#listcostmodels)
* [updateCostModel](costmodelapi.md#updatecostmodel)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new CostModelApi**(configuration?: *[Configuration](configuration.md)*, basePath?: *`string`*, axios?: *`AxiosInstance`*): [CostModelApi](costmodelapi.md)

*Inherited from [BaseAPI](baseapi.md).[constructor](baseapi.md#constructor)*

*Defined in [api.ts:49](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/cost-management/api.ts#L49)*

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| `Optional` configuration | [Configuration](configuration.md) | - |
| `Default value` basePath | `string` |  BASE_PATH |
| `Default value` axios | `AxiosInstance` |  globalAxios |

**Returns:** [CostModelApi](costmodelapi.md)

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

*Defined in [api.ts:4378](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/cost-management/api.ts#L4378)*

*__summary__*: Create a new cost model.

*__throws__*: {RequiredError}

*__memberof__*: CostModelApi

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

*Defined in [api.ts:4390](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/cost-management/api.ts#L4390)*

*__summary__*: Delete a Cost Model

*__throws__*: {RequiredError}

*__memberof__*: CostModelApi

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

*Defined in [api.ts:4402](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/cost-management/api.ts#L4402)*

*__summary__*: Get a Cost Model.

*__throws__*: {RequiredError}

*__memberof__*: CostModelApi

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

*Defined in [api.ts:4420](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/cost-management/api.ts#L4420)*

*__summary__*: List the cost models

*__throws__*: {RequiredError}

*__memberof__*: CostModelApi

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

*Defined in [api.ts:4433](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/cost-management/api.ts#L4433)*

*__summary__*: Update a Cost Model

*__throws__*: {RequiredError}

*__memberof__*: CostModelApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| costModelUuid | `string` |  UUID of Cost Model to get |
| costModel | [CostModel](../interfaces/costmodel.md) |  Update to a Cost Model |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[CostModelOut](../interfaces/costmodelout.md)>

___

