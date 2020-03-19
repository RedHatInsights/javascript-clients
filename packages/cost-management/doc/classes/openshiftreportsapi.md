[@redhat-cloud-services/cost-management-client](../README.md) > [OpenShiftReportsApi](../classes/openshiftreportsapi.md)

# Class: OpenShiftReportsApi

OpenShiftReportsApi - object-oriented interface

*__export__*: 

*__class__*: OpenShiftReportsApi

*__extends__*: {BaseAPI}

## Hierarchy

 [BaseAPI](baseapi.md)

**↳ OpenShiftReportsApi**

## Index

### Constructors

* [constructor](openshiftreportsapi.md#constructor)

### Properties

* [axios](openshiftreportsapi.md#axios)
* [basePath](openshiftreportsapi.md#basepath)
* [configuration](openshiftreportsapi.md#configuration)

### Methods

* [getOpenShiftAWSCostReports](openshiftreportsapi.md#getopenshiftawscostreports)
* [getOpenShiftAWSInventoryInstanceReport](openshiftreportsapi.md#getopenshiftawsinventoryinstancereport)
* [getOpenShiftAWSInventoryStorageReport](openshiftreportsapi.md#getopenshiftawsinventorystoragereport)
* [getOpenShiftAzureCostReports](openshiftreportsapi.md#getopenshiftazurecostreports)
* [getOpenShiftAzureInventoryInstanceReport](openshiftreportsapi.md#getopenshiftazureinventoryinstancereport)
* [getOpenShiftAzureInventoryStorageReport](openshiftreportsapi.md#getopenshiftazureinventorystoragereport)
* [getOpenShiftComputeReports](openshiftreportsapi.md#getopenshiftcomputereports)
* [getOpenShiftCostReports](openshiftreportsapi.md#getopenshiftcostreports)
* [getOpenShiftMemoryReports](openshiftreportsapi.md#getopenshiftmemoryreports)
* [getOpenShiftVolumeReports](openshiftreportsapi.md#getopenshiftvolumereports)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new OpenShiftReportsApi**(configuration?: *[Configuration](configuration.md)*, basePath?: *`string`*, axios?: *`AxiosInstance`*): [OpenShiftReportsApi](openshiftreportsapi.md)

*Inherited from [BaseAPI](baseapi.md).[constructor](baseapi.md#constructor)*

*Defined in [api.ts:49](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/cost-management/api.ts#L49)*

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| `Optional` configuration | [Configuration](configuration.md) | - |
| `Default value` basePath | `string` |  BASE_PATH |
| `Default value` axios | `AxiosInstance` |  globalAxios |

**Returns:** [OpenShiftReportsApi](openshiftreportsapi.md)

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

*Defined in [api.ts:5184](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/cost-management/api.ts#L5184)*

*__summary__*: Query to obtain OpenShift on AWS cost reports

*__throws__*: {RequiredError}

*__memberof__*: OpenShiftReportsApi

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

*Defined in [api.ts:5201](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/cost-management/api.ts#L5201)*

*__summary__*: Query to obtain OpenShift on AWS instance data

*__throws__*: {RequiredError}

*__memberof__*: OpenShiftReportsApi

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

*Defined in [api.ts:5218](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/cost-management/api.ts#L5218)*

*__summary__*: Query to obtain OpenShift on AWS storage data

*__throws__*: {RequiredError}

*__memberof__*: OpenShiftReportsApi

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

*Defined in [api.ts:5235](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/cost-management/api.ts#L5235)*

*__summary__*: Query to obtain OpenShift on Azure cost reports

*__throws__*: {RequiredError}

*__memberof__*: OpenShiftReportsApi

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

*Defined in [api.ts:5252](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/cost-management/api.ts#L5252)*

*__summary__*: Query to obtain OpenShift on Azure instance data

*__throws__*: {RequiredError}

*__memberof__*: OpenShiftReportsApi

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

*Defined in [api.ts:5269](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/cost-management/api.ts#L5269)*

*__summary__*: Query to obtain OpenShift on Azure storage data

*__throws__*: {RequiredError}

*__memberof__*: OpenShiftReportsApi

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

*Defined in [api.ts:5285](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/cost-management/api.ts#L5285)*

*__summary__*: Query to obtain OpenShift compute usage information

*__throws__*: {RequiredError}

*__memberof__*: OpenShiftReportsApi

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

*Defined in [api.ts:5302](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/cost-management/api.ts#L5302)*

*__summary__*: Query to obtain cost reports

*__throws__*: {RequiredError}

*__memberof__*: OpenShiftReportsApi

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

*Defined in [api.ts:5318](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/cost-management/api.ts#L5318)*

*__summary__*: Query to obtain OpenShift memory usage information

*__throws__*: {RequiredError}

*__memberof__*: OpenShiftReportsApi

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

*Defined in [api.ts:5334](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/cost-management/api.ts#L5334)*

*__summary__*: Query to obtain OpenShift volume usage information

*__throws__*: {RequiredError}

*__memberof__*: OpenShiftReportsApi

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

