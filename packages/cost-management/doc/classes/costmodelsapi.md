[@redhat-cloud-services/cost-management-client](../README.md) › [Globals](../globals.md) › [CostModelsApi](costmodelsapi.md)

# Class: CostModelsApi

CostModelsApi - object-oriented interface

**`export`** 

**`class`** CostModelsApi

**`extends`** {BaseAPI}

## Hierarchy

* [BaseAPI](baseapi.md)

  ↳ **CostModelsApi**

## Index

### Constructors

* [constructor](costmodelsapi.md#constructor)

### Properties

* [axios](costmodelsapi.md#protected-axios)
* [basePath](costmodelsapi.md#protected-basepath)
* [configuration](costmodelsapi.md#protected-configuration)

### Methods

* [createCostModel](costmodelsapi.md#createcostmodel)
* [deleteCostModel](costmodelsapi.md#deletecostmodel)
* [getCostModel](costmodelsapi.md#getcostmodel)
* [listCostModels](costmodelsapi.md#listcostmodels)
* [updateCostModel](costmodelsapi.md#updatecostmodel)

## Constructors

###  constructor

\+ **new CostModelsApi**(`configuration?`: [Configuration](configuration.md), `basePath`: string, `axios`: AxiosInstance): *[CostModelsApi](costmodelsapi.md)*

*Inherited from [BaseAPI](baseapi.md).[constructor](baseapi.md#constructor)*

*Defined in [api.ts:49](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/cost-management/api.ts#L49)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`configuration?` | [Configuration](configuration.md) | - |
`basePath` | string |  BASE_PATH |
`axios` | AxiosInstance |  globalAxios |

**Returns:** *[CostModelsApi](costmodelsapi.md)*

## Properties

### `Protected` axios

• **axios**: *AxiosInstance*

*Inherited from [BaseAPI](baseapi.md).[axios](baseapi.md#protected-axios)*

*Defined in [api.ts:51](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/cost-management/api.ts#L51)*

___

### `Protected` basePath

• **basePath**: *string*

*Inherited from [BaseAPI](baseapi.md).[basePath](baseapi.md#protected-basepath)*

*Defined in [api.ts:51](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/cost-management/api.ts#L51)*

___

### `Protected` configuration

• **configuration**: *[Configuration](configuration.md) | undefined*

*Inherited from [BaseAPI](baseapi.md).[configuration](baseapi.md#protected-configuration)*

*Defined in [api.ts:49](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/cost-management/api.ts#L49)*

## Methods

###  createCostModel

▸ **createCostModel**(`costModel`: [CostModel](../interfaces/costmodel.md), `options?`: any): *AxiosPromise‹[CostModelOut](../interfaces/costmodelout.md)›*

*Defined in [api.ts:4130](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/cost-management/api.ts#L4130)*

**`summary`** Create a new cost model.

**`throws`** {RequiredError}

**`memberof`** CostModelsApi

**Parameters:**

Name | Type |
------ | ------ |
`costModel` | [CostModel](../interfaces/costmodel.md) |
`options?` | any |

**Returns:** *AxiosPromise‹[CostModelOut](../interfaces/costmodelout.md)›*

___

###  deleteCostModel

▸ **deleteCostModel**(`costModelUuid`: string, `options?`: any): *AxiosPromise‹Response›*

*Defined in [api.ts:4142](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/cost-management/api.ts#L4142)*

**`summary`** Delete a Cost Model

**`throws`** {RequiredError}

**`memberof`** CostModelsApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`costModelUuid` | string | UUID of Cost Model to get |
`options?` | any | - |

**Returns:** *AxiosPromise‹Response›*

___

###  getCostModel

▸ **getCostModel**(`costModelUuid`: string, `options?`: any): *AxiosPromise‹[CostModelOut](../interfaces/costmodelout.md)›*

*Defined in [api.ts:4154](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/cost-management/api.ts#L4154)*

**`summary`** Get a Cost Model.

**`throws`** {RequiredError}

**`memberof`** CostModelsApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`costModelUuid` | string | UUID of Cost Model to get |
`options?` | any | - |

**Returns:** *AxiosPromise‹[CostModelOut](../interfaces/costmodelout.md)›*

___

###  listCostModels

▸ **listCostModels**(`offset?`: number, `limit?`: number, `sourceUuid?`: string, `sourceType?`: string, `name?`: string, `description?`: string, `ordering?`: "name" | "-name" | "source_type" | "-source_type" | "updated_timestamp" | "-updated_timestamp", `options?`: any): *AxiosPromise‹[CostModelPagination](../interfaces/costmodelpagination.md)›*

*Defined in [api.ts:4172](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/cost-management/api.ts#L4172)*

**`summary`** List the cost models

**`throws`** {RequiredError}

**`memberof`** CostModelsApi

**Parameters:**

Name | Type |
------ | ------ |
`offset?` | number |
`limit?` | number |
`sourceUuid?` | string |
`sourceType?` | string |
`name?` | string |
`description?` | string |
`ordering?` | "name" &#124; "-name" &#124; "source_type" &#124; "-source_type" &#124; "updated_timestamp" &#124; "-updated_timestamp" |
`options?` | any |

**Returns:** *AxiosPromise‹[CostModelPagination](../interfaces/costmodelpagination.md)›*

___

###  updateCostModel

▸ **updateCostModel**(`costModelUuid`: string, `costModel`: [CostModel](../interfaces/costmodel.md), `options?`: any): *AxiosPromise‹[CostModelOut](../interfaces/costmodelout.md)›*

*Defined in [api.ts:4185](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/cost-management/api.ts#L4185)*

**`summary`** Update a Cost Model

**`throws`** {RequiredError}

**`memberof`** CostModelsApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`costModelUuid` | string | UUID of Cost Model to get |
`costModel` | [CostModel](../interfaces/costmodel.md) | Update to a Cost Model |
`options?` | any | - |

**Returns:** *AxiosPromise‹[CostModelOut](../interfaces/costmodelout.md)›*
