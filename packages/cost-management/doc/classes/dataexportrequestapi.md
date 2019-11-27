[@redhat-cloud-services/cost-management-client](../README.md) > [DataExportRequestApi](../classes/dataexportrequestapi.md)

# Class: DataExportRequestApi

DataExportRequestApi - object-oriented interface

*__export__*: 

*__class__*: DataExportRequestApi

*__extends__*: {BaseAPI}

## Hierarchy

 [BaseAPI](baseapi.md)

**↳ DataExportRequestApi**

## Index

### Constructors

* [constructor](dataexportrequestapi.md#constructor)

### Properties

* [axios](dataexportrequestapi.md#axios)
* [basePath](dataexportrequestapi.md#basepath)
* [configuration](dataexportrequestapi.md#configuration)

### Methods

* [createDataExportRequest](dataexportrequestapi.md#createdataexportrequest)
* [listDataExportRequests](dataexportrequestapi.md#listdataexportrequests)
* [retrieveDataExportRequest](dataexportrequestapi.md#retrievedataexportrequest)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new DataExportRequestApi**(configuration?: *[Configuration](configuration.md)*, basePath?: *`string`*, axios?: *`AxiosInstance`*): [DataExportRequestApi](dataexportrequestapi.md)

*Inherited from [BaseAPI](baseapi.md).[constructor](baseapi.md#constructor)*

*Defined in [api.ts:49](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/cost-management/api.ts#L49)*

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| `Optional` configuration | [Configuration](configuration.md) | - |
| `Default value` basePath | `string` |  BASE_PATH |
| `Default value` axios | `AxiosInstance` |  globalAxios |

**Returns:** [DataExportRequestApi](dataexportrequestapi.md)

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

<a id="createdataexportrequest"></a>

###  createDataExportRequest

▸ **createDataExportRequest**(dataExportRequest: *[DataExportRequest](../interfaces/dataexportrequest.md)*, options?: *`any`*): `AxiosPromise`<[DataExportRequestOut](../modules/dataexportrequestout.md)>

*Defined in [api.ts:4477](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/cost-management/api.ts#L4477)*

*__summary__*: Create a data export request

*__throws__*: {RequiredError}

*__memberof__*: DataExportRequestApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| dataExportRequest | [DataExportRequest](../interfaces/dataexportrequest.md) |  Data export request to create |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[DataExportRequestOut](../modules/dataexportrequestout.md)>

___
<a id="listdataexportrequests"></a>

###  listDataExportRequests

▸ **listDataExportRequests**(offset?: *`number`*, limit?: *`number`*, options?: *`any`*): `AxiosPromise`<[DataExportRequestPagination](../interfaces/dataexportrequestpagination.md)>

*Defined in [api.ts:4490](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/cost-management/api.ts#L4490)*

*__summary__*: List the data export requests

*__throws__*: {RequiredError}

*__memberof__*: DataExportRequestApi

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` offset | `number` |
| `Optional` limit | `number` |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[DataExportRequestPagination](../interfaces/dataexportrequestpagination.md)>

___
<a id="retrievedataexportrequest"></a>

###  retrieveDataExportRequest

▸ **retrieveDataExportRequest**(uuid: *`string`*, options?: *`any`*): `AxiosPromise`<[DataExportRequestOut](../modules/dataexportrequestout.md)>

*Defined in [api.ts:4502](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/cost-management/api.ts#L4502)*

*__summary__*: Get a data export request

*__throws__*: {RequiredError}

*__memberof__*: DataExportRequestApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| uuid | `string` |  ID of data export request to get |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[DataExportRequestOut](../modules/dataexportrequestout.md)>

___

