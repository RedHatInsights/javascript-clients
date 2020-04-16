[@redhat-cloud-services/cost-management-client](../README.md) › [Globals](../globals.md) › [AzureReportsApi](azurereportsapi.md)

# Class: AzureReportsApi

AzureReportsApi - object-oriented interface

**`export`** 

**`class`** AzureReportsApi

**`extends`** {BaseAPI}

## Hierarchy

* [BaseAPI](baseapi.md)

  ↳ **AzureReportsApi**

## Index

### Constructors

* [constructor](azurereportsapi.md#constructor)

### Properties

* [axios](azurereportsapi.md#protected-axios)
* [basePath](azurereportsapi.md#protected-basepath)
* [configuration](azurereportsapi.md#protected-configuration)

### Methods

* [getAzureCostReports](azurereportsapi.md#getazurecostreports)
* [getAzureInstanceReports](azurereportsapi.md#getazureinstancereports)
* [getAzureStorageReports](azurereportsapi.md#getazurestoragereports)

## Constructors

###  constructor

\+ **new AzureReportsApi**(`configuration?`: [Configuration](configuration.md), `basePath`: string, `axios`: AxiosInstance): *[AzureReportsApi](azurereportsapi.md)*

*Inherited from [BaseAPI](baseapi.md).[constructor](baseapi.md#constructor)*

*Defined in [api.ts:49](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/cost-management/api.ts#L49)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`configuration?` | [Configuration](configuration.md) | - |
`basePath` | string |  BASE_PATH |
`axios` | AxiosInstance |  globalAxios |

**Returns:** *[AzureReportsApi](azurereportsapi.md)*

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

###  getAzureCostReports

▸ **getAzureCostReports**(`delta?`: string, `filter?`: any, `groupBy?`: any, `orderBy?`: any, `offset?`: number, `limit?`: number, `options?`: any): *AxiosPromise‹[ReportCost](../interfaces/reportcost.md)›*

*Defined in [api.ts:3678](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/cost-management/api.ts#L3678)*

**`summary`** Query to obtain cost reports

**`throws`** {RequiredError}

**`memberof`** AzureReportsApi

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

###  getAzureInstanceReports

▸ **getAzureInstanceReports**(`filter?`: any, `groupBy?`: any, `orderBy?`: any, `units?`: string, `offset?`: number, `limit?`: number, `options?`: any): *AxiosPromise‹[ReportInstanceInventory](../interfaces/reportinstanceinventory.md)›*

*Defined in [api.ts:3695](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/cost-management/api.ts#L3695)*

**`summary`** Query to obtain Azure instance type data

**`throws`** {RequiredError}

**`memberof`** AzureReportsApi

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

**Returns:** *AxiosPromise‹[ReportInstanceInventory](../interfaces/reportinstanceinventory.md)›*

___

###  getAzureStorageReports

▸ **getAzureStorageReports**(`filter?`: any, `groupBy?`: any, `orderBy?`: any, `units?`: string, `offset?`: number, `limit?`: number, `options?`: any): *AxiosPromise‹[ReportStorageInventory](../interfaces/reportstorageinventory.md)›*

*Defined in [api.ts:3712](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/cost-management/api.ts#L3712)*

**`summary`** Query to obtain AWS storage data

**`throws`** {RequiredError}

**`memberof`** AzureReportsApi

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
