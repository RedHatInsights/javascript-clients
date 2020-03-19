[@redhat-cloud-services/cost-management-client](../README.md) > [AzureReportsApi](../classes/azurereportsapi.md)

# Class: AzureReportsApi

AzureReportsApi - object-oriented interface

*__export__*: 

*__class__*: AzureReportsApi

*__extends__*: {BaseAPI}

## Hierarchy

 [BaseAPI](baseapi.md)

**↳ AzureReportsApi**

## Index

### Constructors

* [constructor](azurereportsapi.md#constructor)

### Properties

* [axios](azurereportsapi.md#axios)
* [basePath](azurereportsapi.md#basepath)
* [configuration](azurereportsapi.md#configuration)

### Methods

* [getAzureCostReports](azurereportsapi.md#getazurecostreports)
* [getAzureInstanceReports](azurereportsapi.md#getazureinstancereports)
* [getAzureStorageReports](azurereportsapi.md#getazurestoragereports)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new AzureReportsApi**(configuration?: *[Configuration](configuration.md)*, basePath?: *`string`*, axios?: *`AxiosInstance`*): [AzureReportsApi](azurereportsapi.md)

*Inherited from [BaseAPI](baseapi.md).[constructor](baseapi.md#constructor)*

*Defined in [api.ts:49](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/cost-management/api.ts#L49)*

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| `Optional` configuration | [Configuration](configuration.md) | - |
| `Default value` basePath | `string` |  BASE_PATH |
| `Default value` axios | `AxiosInstance` |  globalAxios |

**Returns:** [AzureReportsApi](azurereportsapi.md)

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

<a id="getazurecostreports"></a>

###  getAzureCostReports

▸ **getAzureCostReports**(delta?: *`string`*, filter?: *`any`*, groupBy?: *`any`*, orderBy?: *`any`*, offset?: *`number`*, limit?: *`number`*, options?: *`any`*): `AxiosPromise`<[ReportCost](../interfaces/reportcost.md)>

*Defined in [api.ts:3585](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/cost-management/api.ts#L3585)*

*__summary__*: Query to obtain cost reports

*__throws__*: {RequiredError}

*__memberof__*: AzureReportsApi

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` delta | `string` |
| `Optional` filter | `any` |
| `Optional` groupBy | `any` |
| `Optional` orderBy | `any` |
| `Optional` offset | `number` |
| `Optional` limit | `number` |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[ReportCost](../interfaces/reportcost.md)>

___
<a id="getazureinstancereports"></a>

###  getAzureInstanceReports

▸ **getAzureInstanceReports**(filter?: *`any`*, groupBy?: *`any`*, orderBy?: *`any`*, units?: *`string`*, offset?: *`number`*, limit?: *`number`*, options?: *`any`*): `AxiosPromise`<[ReportInstanceInventory](../interfaces/reportinstanceinventory.md)>

*Defined in [api.ts:3602](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/cost-management/api.ts#L3602)*

*__summary__*: Query to obtain Azure instance type data

*__throws__*: {RequiredError}

*__memberof__*: AzureReportsApi

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` filter | `any` |
| `Optional` groupBy | `any` |
| `Optional` orderBy | `any` |
| `Optional` units | `string` |
| `Optional` offset | `number` |
| `Optional` limit | `number` |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[ReportInstanceInventory](../interfaces/reportinstanceinventory.md)>

___
<a id="getazurestoragereports"></a>

###  getAzureStorageReports

▸ **getAzureStorageReports**(filter?: *`any`*, groupBy?: *`any`*, orderBy?: *`any`*, units?: *`string`*, offset?: *`number`*, limit?: *`number`*, options?: *`any`*): `AxiosPromise`<[ReportStorageInventory](../interfaces/reportstorageinventory.md)>

*Defined in [api.ts:3619](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/cost-management/api.ts#L3619)*

*__summary__*: Query to obtain AWS storage data

*__throws__*: {RequiredError}

*__memberof__*: AzureReportsApi

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` filter | `any` |
| `Optional` groupBy | `any` |
| `Optional` orderBy | `any` |
| `Optional` units | `string` |
| `Optional` offset | `number` |
| `Optional` limit | `number` |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[ReportStorageInventory](../interfaces/reportstorageinventory.md)>

___

