[@redhat-cloud-services/cost-management-client](../README.md) > [AzureReportApi](../classes/azurereportapi.md)

# Class: AzureReportApi

AzureReportApi - object-oriented interface

*__export__*: 

*__class__*: AzureReportApi

*__extends__*: {BaseAPI}

## Hierarchy

 [BaseAPI](baseapi.md)

**↳ AzureReportApi**

## Index

### Constructors

* [constructor](azurereportapi.md#constructor)

### Properties

* [axios](azurereportapi.md#axios)
* [basePath](azurereportapi.md#basepath)
* [configuration](azurereportapi.md#configuration)

### Methods

* [getAzureCostReports](azurereportapi.md#getazurecostreports)
* [getAzureInstanceReports](azurereportapi.md#getazureinstancereports)
* [getAzureStorageReports](azurereportapi.md#getazurestoragereports)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new AzureReportApi**(configuration?: *[Configuration](configuration.md)*, basePath?: *`string`*, axios?: *`AxiosInstance`*): [AzureReportApi](azurereportapi.md)

*Inherited from [BaseAPI](baseapi.md).[constructor](baseapi.md#constructor)*

*Defined in [api.ts:49](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/cost-management/api.ts#L49)*

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| `Optional` configuration | [Configuration](configuration.md) | - |
| `Default value` basePath | `string` |  BASE_PATH |
| `Default value` axios | `AxiosInstance` |  globalAxios |

**Returns:** [AzureReportApi](azurereportapi.md)

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

*Defined in [api.ts:3830](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/cost-management/api.ts#L3830)*

*__summary__*: Query to obtain cost reports

*__throws__*: {RequiredError}

*__memberof__*: AzureReportApi

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

*Defined in [api.ts:3847](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/cost-management/api.ts#L3847)*

*__summary__*: Query to obtain Azure instance type data

*__throws__*: {RequiredError}

*__memberof__*: AzureReportApi

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

*Defined in [api.ts:3864](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/cost-management/api.ts#L3864)*

*__summary__*: Query to obtain AWS storage data

*__throws__*: {RequiredError}

*__memberof__*: AzureReportApi

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

