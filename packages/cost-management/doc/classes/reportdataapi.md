[@redhat-cloud-services/cost-management-client](../README.md) > [ReportDataApi](../classes/reportdataapi.md)

# Class: ReportDataApi

ReportDataApi - object-oriented interface

*__export__*: 

*__class__*: ReportDataApi

*__extends__*: {BaseAPI}

## Hierarchy

 [BaseAPI](baseapi.md)

**↳ ReportDataApi**

## Index

### Constructors

* [constructor](reportdataapi.md#constructor)

### Properties

* [axios](reportdataapi.md#axios)
* [basePath](reportdataapi.md#basepath)
* [configuration](reportdataapi.md#configuration)

### Methods

* [deleteReportData](reportdataapi.md#deletereportdata)
* [getReportData](reportdataapi.md#getreportdata)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new ReportDataApi**(configuration?: *[Configuration](configuration.md)*, basePath?: *`string`*, axios?: *`AxiosInstance`*): [ReportDataApi](reportdataapi.md)

*Inherited from [BaseAPI](baseapi.md).[constructor](baseapi.md#constructor)*

*Defined in api.ts:49*

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| `Optional` configuration | [Configuration](configuration.md) | - |
| `Default value` basePath | `string` |  BASE_PATH |
| `Default value` axios | `AxiosInstance` |  globalAxios |

**Returns:** [ReportDataApi](reportdataapi.md)

___

## Properties

<a id="axios"></a>

### `<Protected>` axios

**● axios**: *`AxiosInstance`*

*Inherited from [BaseAPI](baseapi.md).[axios](baseapi.md#axios)*

*Defined in api.ts:51*

___
<a id="basepath"></a>

### `<Protected>` basePath

**● basePath**: *`string`*

*Inherited from [BaseAPI](baseapi.md).[basePath](baseapi.md#basepath)*

*Defined in api.ts:51*

___
<a id="configuration"></a>

### `<Protected>` configuration

**● configuration**: *[Configuration](configuration.md) \| `undefined`*

*Inherited from [BaseAPI](baseapi.md).[configuration](baseapi.md#configuration)*

*Defined in api.ts:49*

___

## Methods

<a id="deletereportdata"></a>

###  deleteReportData

▸ **deleteReportData**(providerId: *`string`*, provider: *`string`*, schema: *`string`*, simulate?: *`boolean`*, endDate?: *`string`*, options?: *`any`*): `AxiosPromise`<[ReportDataGetResponse](../interfaces/reportdatagetresponse.md)>

*Defined in api.ts:688*

Delete report summary tables in the database.

*__throws__*: {RequiredError}

*__memberof__*: ReportDataApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| providerId | `string` |  The provider database ID |
| provider | `string` |  The provider type |
| schema | `string` |  The database schema |
| `Optional` simulate | `boolean` |
| `Optional` endDate | `string` |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[ReportDataGetResponse](../interfaces/reportdatagetresponse.md)>

___
<a id="getreportdata"></a>

###  getReportData

▸ **getReportData**(providerUuid?: *`string`*, providerType?: *`string`*, schema?: *`string`*, startDate?: *`string`*, endDate?: *`string`*, options?: *`any`*): `AxiosPromise`<[ReportDataGetResponse](../interfaces/reportdatagetresponse.md)>

*Defined in api.ts:703*

Update report summary tables in the database.

*__throws__*: {RequiredError}

*__memberof__*: ReportDataApi

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` providerUuid | `string` |
| `Optional` providerType | `string` |
| `Optional` schema | `string` |
| `Optional` startDate | `string` |
| `Optional` endDate | `string` |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[ReportDataGetResponse](../interfaces/reportdatagetresponse.md)>

___

