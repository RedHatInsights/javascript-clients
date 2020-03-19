[@redhat-cloud-services/cost-management-client](../README.md) > [AWSReportsApi](../classes/awsreportsapi.md)

# Class: AWSReportsApi

AWSReportsApi - object-oriented interface

*__export__*: 

*__class__*: AWSReportsApi

*__extends__*: {BaseAPI}

## Hierarchy

 [BaseAPI](baseapi.md)

**↳ AWSReportsApi**

## Index

### Constructors

* [constructor](awsreportsapi.md#constructor)

### Properties

* [axios](awsreportsapi.md#axios)
* [basePath](awsreportsapi.md#basepath)
* [configuration](awsreportsapi.md#configuration)

### Methods

* [getAWSCostReports](awsreportsapi.md#getawscostreports)
* [getAWSInstanceReports](awsreportsapi.md#getawsinstancereports)
* [getAWSStorageReports](awsreportsapi.md#getawsstoragereports)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new AWSReportsApi**(configuration?: *[Configuration](configuration.md)*, basePath?: *`string`*, axios?: *`AxiosInstance`*): [AWSReportsApi](awsreportsapi.md)

*Inherited from [BaseAPI](baseapi.md).[constructor](baseapi.md#constructor)*

*Defined in [api.ts:49](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/cost-management/api.ts#L49)*

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| `Optional` configuration | [Configuration](configuration.md) | - |
| `Default value` basePath | `string` |  BASE_PATH |
| `Default value` axios | `AxiosInstance` |  globalAxios |

**Returns:** [AWSReportsApi](awsreportsapi.md)

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

<a id="getawscostreports"></a>

###  getAWSCostReports

▸ **getAWSCostReports**(delta?: *`string`*, filter?: *`any`*, groupBy?: *`any`*, orderBy?: *`any`*, offset?: *`number`*, limit?: *`number`*, options?: *`any`*): `AxiosPromise`<[ReportCost](../interfaces/reportcost.md)>

*Defined in [api.ts:3206](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/cost-management/api.ts#L3206)*

*__summary__*: Query to obtain cost reports

*__throws__*: {RequiredError}

*__memberof__*: AWSReportsApi

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
<a id="getawsinstancereports"></a>

###  getAWSInstanceReports

▸ **getAWSInstanceReports**(filter?: *`any`*, groupBy?: *`any`*, orderBy?: *`any`*, units?: *`string`*, offset?: *`number`*, limit?: *`number`*, computeCount?: *`boolean`*, options?: *`any`*): `AxiosPromise`<[ReportInstanceInventory](../interfaces/reportinstanceinventory.md)>

*Defined in [api.ts:3224](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/cost-management/api.ts#L3224)*

*__summary__*: Query to obtain AWS instance type data

*__throws__*: {RequiredError}

*__memberof__*: AWSReportsApi

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` filter | `any` |
| `Optional` groupBy | `any` |
| `Optional` orderBy | `any` |
| `Optional` units | `string` |
| `Optional` offset | `number` |
| `Optional` limit | `number` |
| `Optional` computeCount | `boolean` |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[ReportInstanceInventory](../interfaces/reportinstanceinventory.md)>

___
<a id="getawsstoragereports"></a>

###  getAWSStorageReports

▸ **getAWSStorageReports**(filter?: *`any`*, groupBy?: *`any`*, orderBy?: *`any`*, units?: *`string`*, offset?: *`number`*, limit?: *`number`*, options?: *`any`*): `AxiosPromise`<[ReportStorageInventory](../interfaces/reportstorageinventory.md)>

*Defined in [api.ts:3241](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/cost-management/api.ts#L3241)*

*__summary__*: Query to obtain AWS storage data

*__throws__*: {RequiredError}

*__memberof__*: AWSReportsApi

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

