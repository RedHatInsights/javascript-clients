[@redhat-cloud-services/cost-management-client](../README.md) › [Globals](../globals.md) › [AWSReportsApi](awsreportsapi.md)

# Class: AWSReportsApi

AWSReportsApi - object-oriented interface

**`export`** 

**`class`** AWSReportsApi

**`extends`** {BaseAPI}

## Hierarchy

* [BaseAPI](baseapi.md)

  ↳ **AWSReportsApi**

## Index

### Constructors

* [constructor](awsreportsapi.md#constructor)

### Properties

* [axios](awsreportsapi.md#protected-axios)
* [basePath](awsreportsapi.md#protected-basepath)
* [configuration](awsreportsapi.md#protected-configuration)

### Methods

* [getAWSCostReports](awsreportsapi.md#getawscostreports)
* [getAWSInstanceReports](awsreportsapi.md#getawsinstancereports)
* [getAWSStorageReports](awsreportsapi.md#getawsstoragereports)

## Constructors

###  constructor

\+ **new AWSReportsApi**(`configuration?`: [Configuration](configuration.md), `basePath`: string, `axios`: AxiosInstance): *[AWSReportsApi](awsreportsapi.md)*

*Inherited from [BaseAPI](baseapi.md).[constructor](baseapi.md#constructor)*

*Defined in [api.ts:49](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/cost-management/api.ts#L49)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`configuration?` | [Configuration](configuration.md) | - |
`basePath` | string |  BASE_PATH |
`axios` | AxiosInstance |  globalAxios |

**Returns:** *[AWSReportsApi](awsreportsapi.md)*

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

###  getAWSCostReports

▸ **getAWSCostReports**(`delta?`: string, `filter?`: any, `groupBy?`: any, `orderBy?`: any, `offset?`: number, `limit?`: number, `options?`: any): *AxiosPromise‹[ReportCost](../interfaces/reportcost.md)›*

*Defined in [api.ts:3206](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/cost-management/api.ts#L3206)*

**`summary`** Query to obtain cost reports

**`throws`** {RequiredError}

**`memberof`** AWSReportsApi

**Parameters:**

Name | Type |
------ | ------ |
`delta?` | string |
`filter?` | any |
`groupBy?` | any |
`orderBy?` | any |
`offset?` | number |
`limit?` | number |
`options?` | any |

**Returns:** *AxiosPromise‹[ReportCost](../interfaces/reportcost.md)›*

___

###  getAWSInstanceReports

▸ **getAWSInstanceReports**(`filter?`: any, `groupBy?`: any, `orderBy?`: any, `units?`: string, `offset?`: number, `limit?`: number, `computeCount?`: boolean, `options?`: any): *AxiosPromise‹[ReportInstanceInventory](../interfaces/reportinstanceinventory.md)›*

*Defined in [api.ts:3224](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/cost-management/api.ts#L3224)*

**`summary`** Query to obtain AWS instance type data

**`throws`** {RequiredError}

**`memberof`** AWSReportsApi

**Parameters:**

Name | Type |
------ | ------ |
`filter?` | any |
`groupBy?` | any |
`orderBy?` | any |
`units?` | string |
`offset?` | number |
`limit?` | number |
`computeCount?` | boolean |
`options?` | any |

**Returns:** *AxiosPromise‹[ReportInstanceInventory](../interfaces/reportinstanceinventory.md)›*

___

###  getAWSStorageReports

▸ **getAWSStorageReports**(`filter?`: any, `groupBy?`: any, `orderBy?`: any, `units?`: string, `offset?`: number, `limit?`: number, `options?`: any): *AxiosPromise‹[ReportStorageInventory](../interfaces/reportstorageinventory.md)›*

*Defined in [api.ts:3241](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/cost-management/api.ts#L3241)*

**`summary`** Query to obtain AWS storage data

**`throws`** {RequiredError}

**`memberof`** AWSReportsApi

**Parameters:**

Name | Type |
------ | ------ |
`filter?` | any |
`groupBy?` | any |
`orderBy?` | any |
`units?` | string |
`offset?` | number |
`limit?` | number |
`options?` | any |

**Returns:** *AxiosPromise‹[ReportStorageInventory](../interfaces/reportstorageinventory.md)›*
