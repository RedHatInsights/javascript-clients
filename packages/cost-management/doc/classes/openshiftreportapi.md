[@redhat-cloud-services/cost-management-client](../README.md) > [OpenShiftReportApi](../classes/openshiftreportapi.md)

# Class: OpenShiftReportApi

OpenShiftReportApi - object-oriented interface

*__export__*: 

*__class__*: OpenShiftReportApi

*__extends__*: {BaseAPI}

## Hierarchy

 [BaseAPI](baseapi.md)

**↳ OpenShiftReportApi**

## Index

### Constructors

* [constructor](openshiftreportapi.md#constructor)

### Properties

* [axios](openshiftreportapi.md#axios)
* [basePath](openshiftreportapi.md#basepath)
* [configuration](openshiftreportapi.md#configuration)

### Methods

* [getOpenShiftAWSCostReports](openshiftreportapi.md#getopenshiftawscostreports)
* [getOpenShiftAWSInventoryInstanceReport](openshiftreportapi.md#getopenshiftawsinventoryinstancereport)
* [getOpenShiftAWSInventoryStorageReport](openshiftreportapi.md#getopenshiftawsinventorystoragereport)
* [getOpenShiftAzureCostReports](openshiftreportapi.md#getopenshiftazurecostreports)
* [getOpenShiftAzureInventoryInstanceReport](openshiftreportapi.md#getopenshiftazureinventoryinstancereport)
* [getOpenShiftAzureInventoryStorageReport](openshiftreportapi.md#getopenshiftazureinventorystoragereport)
* [getOpenShiftComputeReports](openshiftreportapi.md#getopenshiftcomputereports)
* [getOpenShiftCostReports](openshiftreportapi.md#getopenshiftcostreports)
* [getOpenShiftMemoryReports](openshiftreportapi.md#getopenshiftmemoryreports)
* [getOpenShiftVolumeReports](openshiftreportapi.md#getopenshiftvolumereports)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new OpenShiftReportApi**(configuration?: *[Configuration](configuration.md)*, basePath?: *`string`*, axios?: *`AxiosInstance`*): [OpenShiftReportApi](openshiftreportapi.md)

*Inherited from [BaseAPI](baseapi.md).[constructor](baseapi.md#constructor)*

*Defined in [api.ts:49](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/cost-management/api.ts#L49)*

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| `Optional` configuration | [Configuration](configuration.md) | - |
| `Default value` basePath | `string` |  BASE_PATH |
| `Default value` axios | `AxiosInstance` |  globalAxios |

**Returns:** [OpenShiftReportApi](openshiftreportapi.md)

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

<a id="getopenshiftawscostreports"></a>

###  getOpenShiftAWSCostReports

▸ **getOpenShiftAWSCostReports**(delta?: *`string`*, filter?: *`any`*, groupBy?: *`any`*, orderBy?: *`any`*, offset?: *`number`*, limit?: *`number`*, options?: *`any`*): `AxiosPromise`<[ReportCosts](../interfaces/reportcosts.md)>

*Defined in [api.ts:5600](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/cost-management/api.ts#L5600)*

*__summary__*: Query to obtain OpenShift on AWS cost reports

*__throws__*: {RequiredError}

*__memberof__*: OpenShiftReportApi

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

**Returns:** `AxiosPromise`<[ReportCosts](../interfaces/reportcosts.md)>

___
<a id="getopenshiftawsinventoryinstancereport"></a>

###  getOpenShiftAWSInventoryInstanceReport

▸ **getOpenShiftAWSInventoryInstanceReport**(filter?: *`any`*, groupBy?: *`any`*, orderBy?: *`any`*, units?: *`string`*, offset?: *`number`*, limit?: *`number`*, options?: *`any`*): `AxiosPromise`<[ReportOpenShiftAWSInstanceInventory](../interfaces/reportopenshiftawsinstanceinventory.md)>

*Defined in [api.ts:5617](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/cost-management/api.ts#L5617)*

*__summary__*: Query to obtain OpenShift on AWS instance data

*__throws__*: {RequiredError}

*__memberof__*: OpenShiftReportApi

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

**Returns:** `AxiosPromise`<[ReportOpenShiftAWSInstanceInventory](../interfaces/reportopenshiftawsinstanceinventory.md)>

___
<a id="getopenshiftawsinventorystoragereport"></a>

###  getOpenShiftAWSInventoryStorageReport

▸ **getOpenShiftAWSInventoryStorageReport**(filter?: *`any`*, groupBy?: *`any`*, orderBy?: *`any`*, units?: *`string`*, offset?: *`number`*, limit?: *`number`*, options?: *`any`*): `AxiosPromise`<[ReportOpenShiftAWSStorageInventory](../interfaces/reportopenshiftawsstorageinventory.md)>

*Defined in [api.ts:5634](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/cost-management/api.ts#L5634)*

*__summary__*: Query to obtain OpenShift on AWS storage data

*__throws__*: {RequiredError}

*__memberof__*: OpenShiftReportApi

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

**Returns:** `AxiosPromise`<[ReportOpenShiftAWSStorageInventory](../interfaces/reportopenshiftawsstorageinventory.md)>

___
<a id="getopenshiftazurecostreports"></a>

###  getOpenShiftAzureCostReports

▸ **getOpenShiftAzureCostReports**(delta?: *`string`*, filter?: *`any`*, groupBy?: *`any`*, orderBy?: *`any`*, offset?: *`number`*, limit?: *`number`*, options?: *`any`*): `AxiosPromise`<[ReportCosts](../interfaces/reportcosts.md)>

*Defined in [api.ts:5651](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/cost-management/api.ts#L5651)*

*__summary__*: Query to obtain OpenShift on Azure cost reports

*__throws__*: {RequiredError}

*__memberof__*: OpenShiftReportApi

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

**Returns:** `AxiosPromise`<[ReportCosts](../interfaces/reportcosts.md)>

___
<a id="getopenshiftazureinventoryinstancereport"></a>

###  getOpenShiftAzureInventoryInstanceReport

▸ **getOpenShiftAzureInventoryInstanceReport**(filter?: *`any`*, groupBy?: *`any`*, orderBy?: *`any`*, units?: *`string`*, offset?: *`number`*, limit?: *`number`*, options?: *`any`*): `AxiosPromise`<[ReportOpenShiftAzureInstanceInventory](../interfaces/reportopenshiftazureinstanceinventory.md)>

*Defined in [api.ts:5668](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/cost-management/api.ts#L5668)*

*__summary__*: Query to obtain OpenShift on Azure instance data

*__throws__*: {RequiredError}

*__memberof__*: OpenShiftReportApi

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

**Returns:** `AxiosPromise`<[ReportOpenShiftAzureInstanceInventory](../interfaces/reportopenshiftazureinstanceinventory.md)>

___
<a id="getopenshiftazureinventorystoragereport"></a>

###  getOpenShiftAzureInventoryStorageReport

▸ **getOpenShiftAzureInventoryStorageReport**(filter?: *`any`*, groupBy?: *`any`*, orderBy?: *`any`*, units?: *`string`*, offset?: *`number`*, limit?: *`number`*, options?: *`any`*): `AxiosPromise`<[ReportOpenShiftAzureStorageInventory](../interfaces/reportopenshiftazurestorageinventory.md)>

*Defined in [api.ts:5685](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/cost-management/api.ts#L5685)*

*__summary__*: Query to obtain OpenShift on Azure storage data

*__throws__*: {RequiredError}

*__memberof__*: OpenShiftReportApi

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

**Returns:** `AxiosPromise`<[ReportOpenShiftAzureStorageInventory](../interfaces/reportopenshiftazurestorageinventory.md)>

___
<a id="getopenshiftcomputereports"></a>

###  getOpenShiftComputeReports

▸ **getOpenShiftComputeReports**(filter?: *`any`*, groupBy?: *`any`*, orderBy?: *`any`*, offset?: *`number`*, limit?: *`number`*, options?: *`any`*): `AxiosPromise`<[ReportOpenShiftCpu](../interfaces/reportopenshiftcpu.md)>

*Defined in [api.ts:5701](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/cost-management/api.ts#L5701)*

*__summary__*: Query to obtain OpenShift compute usage information

*__throws__*: {RequiredError}

*__memberof__*: OpenShiftReportApi

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` filter | `any` |
| `Optional` groupBy | `any` |
| `Optional` orderBy | `any` |
| `Optional` offset | `number` |
| `Optional` limit | `number` |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[ReportOpenShiftCpu](../interfaces/reportopenshiftcpu.md)>

___
<a id="getopenshiftcostreports"></a>

###  getOpenShiftCostReports

▸ **getOpenShiftCostReports**(delta?: *`string`*, filter?: *`any`*, groupBy?: *`any`*, orderBy?: *`any`*, offset?: *`number`*, limit?: *`number`*, options?: *`any`*): `AxiosPromise`<[ReportCost](../interfaces/reportcost.md)>

*Defined in [api.ts:5718](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/cost-management/api.ts#L5718)*

*__summary__*: Query to obtain cost reports

*__throws__*: {RequiredError}

*__memberof__*: OpenShiftReportApi

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
<a id="getopenshiftmemoryreports"></a>

###  getOpenShiftMemoryReports

▸ **getOpenShiftMemoryReports**(filter?: *`any`*, groupBy?: *`any`*, orderBy?: *`any`*, offset?: *`number`*, limit?: *`number`*, options?: *`any`*): `AxiosPromise`<[ReportOpenShiftMemory](../interfaces/reportopenshiftmemory.md)>

*Defined in [api.ts:5734](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/cost-management/api.ts#L5734)*

*__summary__*: Query to obtain OpenShift memory usage information

*__throws__*: {RequiredError}

*__memberof__*: OpenShiftReportApi

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` filter | `any` |
| `Optional` groupBy | `any` |
| `Optional` orderBy | `any` |
| `Optional` offset | `number` |
| `Optional` limit | `number` |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[ReportOpenShiftMemory](../interfaces/reportopenshiftmemory.md)>

___
<a id="getopenshiftvolumereports"></a>

###  getOpenShiftVolumeReports

▸ **getOpenShiftVolumeReports**(filter?: *`any`*, groupBy?: *`any`*, orderBy?: *`any`*, offset?: *`number`*, limit?: *`number`*, options?: *`any`*): `AxiosPromise`<[ReportOpenShiftVolume](../interfaces/reportopenshiftvolume.md)>

*Defined in [api.ts:5750](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/cost-management/api.ts#L5750)*

*__summary__*: Query to obtain OpenShift volume usage information

*__throws__*: {RequiredError}

*__memberof__*: OpenShiftReportApi

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` filter | `any` |
| `Optional` groupBy | `any` |
| `Optional` orderBy | `any` |
| `Optional` offset | `number` |
| `Optional` limit | `number` |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[ReportOpenShiftVolume](../interfaces/reportopenshiftvolume.md)>

___

