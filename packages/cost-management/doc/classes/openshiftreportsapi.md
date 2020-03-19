[@redhat-cloud-services/cost-management-client](../README.md) › [Globals](../globals.md) › [OpenShiftReportsApi](openshiftreportsapi.md)

# Class: OpenShiftReportsApi

OpenShiftReportsApi - object-oriented interface

**`export`** 

**`class`** OpenShiftReportsApi

**`extends`** {BaseAPI}

## Hierarchy

* [BaseAPI](baseapi.md)

  ↳ **OpenShiftReportsApi**

## Index

### Constructors

* [constructor](openshiftreportsapi.md#constructor)

### Properties

* [axios](openshiftreportsapi.md#protected-axios)
* [basePath](openshiftreportsapi.md#protected-basepath)
* [configuration](openshiftreportsapi.md#protected-configuration)

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

## Constructors

###  constructor

\+ **new OpenShiftReportsApi**(`configuration?`: [Configuration](configuration.md), `basePath`: string, `axios`: AxiosInstance): *[OpenShiftReportsApi](openshiftreportsapi.md)*

*Inherited from [BaseAPI](baseapi.md).[constructor](baseapi.md#constructor)*

*Defined in [api.ts:49](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/cost-management/api.ts#L49)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`configuration?` | [Configuration](configuration.md) | - |
`basePath` | string |  BASE_PATH |
`axios` | AxiosInstance |  globalAxios |

**Returns:** *[OpenShiftReportsApi](openshiftreportsapi.md)*

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

###  getOpenShiftAWSCostReports

▸ **getOpenShiftAWSCostReports**(`delta?`: string, `filter?`: any, `groupBy?`: any, `orderBy?`: any, `offset?`: number, `limit?`: number, `options?`: any): *AxiosPromise‹[ReportCosts](../interfaces/reportcosts.md)›*

*Defined in [api.ts:5184](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/cost-management/api.ts#L5184)*

**`summary`** Query to obtain OpenShift on AWS cost reports

**`throws`** {RequiredError}

**`memberof`** OpenShiftReportsApi

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

**Returns:** *AxiosPromise‹[ReportCosts](../interfaces/reportcosts.md)›*

___

###  getOpenShiftAWSInventoryInstanceReport

▸ **getOpenShiftAWSInventoryInstanceReport**(`filter?`: any, `groupBy?`: any, `orderBy?`: any, `units?`: string, `offset?`: number, `limit?`: number, `options?`: any): *AxiosPromise‹[ReportOpenShiftAWSInstanceInventory](../interfaces/reportopenshiftawsinstanceinventory.md)›*

*Defined in [api.ts:5201](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/cost-management/api.ts#L5201)*

**`summary`** Query to obtain OpenShift on AWS instance data

**`throws`** {RequiredError}

**`memberof`** OpenShiftReportsApi

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

**Returns:** *AxiosPromise‹[ReportOpenShiftAWSInstanceInventory](../interfaces/reportopenshiftawsinstanceinventory.md)›*

___

###  getOpenShiftAWSInventoryStorageReport

▸ **getOpenShiftAWSInventoryStorageReport**(`filter?`: any, `groupBy?`: any, `orderBy?`: any, `units?`: string, `offset?`: number, `limit?`: number, `options?`: any): *AxiosPromise‹[ReportOpenShiftAWSStorageInventory](../interfaces/reportopenshiftawsstorageinventory.md)›*

*Defined in [api.ts:5218](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/cost-management/api.ts#L5218)*

**`summary`** Query to obtain OpenShift on AWS storage data

**`throws`** {RequiredError}

**`memberof`** OpenShiftReportsApi

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

**Returns:** *AxiosPromise‹[ReportOpenShiftAWSStorageInventory](../interfaces/reportopenshiftawsstorageinventory.md)›*

___

###  getOpenShiftAzureCostReports

▸ **getOpenShiftAzureCostReports**(`delta?`: string, `filter?`: any, `groupBy?`: any, `orderBy?`: any, `offset?`: number, `limit?`: number, `options?`: any): *AxiosPromise‹[ReportCosts](../interfaces/reportcosts.md)›*

*Defined in [api.ts:5235](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/cost-management/api.ts#L5235)*

**`summary`** Query to obtain OpenShift on Azure cost reports

**`throws`** {RequiredError}

**`memberof`** OpenShiftReportsApi

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

**Returns:** *AxiosPromise‹[ReportCosts](../interfaces/reportcosts.md)›*

___

###  getOpenShiftAzureInventoryInstanceReport

▸ **getOpenShiftAzureInventoryInstanceReport**(`filter?`: any, `groupBy?`: any, `orderBy?`: any, `units?`: string, `offset?`: number, `limit?`: number, `options?`: any): *AxiosPromise‹[ReportOpenShiftAzureInstanceInventory](../interfaces/reportopenshiftazureinstanceinventory.md)›*

*Defined in [api.ts:5252](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/cost-management/api.ts#L5252)*

**`summary`** Query to obtain OpenShift on Azure instance data

**`throws`** {RequiredError}

**`memberof`** OpenShiftReportsApi

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

**Returns:** *AxiosPromise‹[ReportOpenShiftAzureInstanceInventory](../interfaces/reportopenshiftazureinstanceinventory.md)›*

___

###  getOpenShiftAzureInventoryStorageReport

▸ **getOpenShiftAzureInventoryStorageReport**(`filter?`: any, `groupBy?`: any, `orderBy?`: any, `units?`: string, `offset?`: number, `limit?`: number, `options?`: any): *AxiosPromise‹[ReportOpenShiftAzureStorageInventory](../interfaces/reportopenshiftazurestorageinventory.md)›*

*Defined in [api.ts:5269](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/cost-management/api.ts#L5269)*

**`summary`** Query to obtain OpenShift on Azure storage data

**`throws`** {RequiredError}

**`memberof`** OpenShiftReportsApi

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

**Returns:** *AxiosPromise‹[ReportOpenShiftAzureStorageInventory](../interfaces/reportopenshiftazurestorageinventory.md)›*

___

###  getOpenShiftComputeReports

▸ **getOpenShiftComputeReports**(`filter?`: any, `groupBy?`: any, `orderBy?`: any, `offset?`: number, `limit?`: number, `options?`: any): *AxiosPromise‹[ReportOpenShiftCpu](../interfaces/reportopenshiftcpu.md)›*

*Defined in [api.ts:5285](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/cost-management/api.ts#L5285)*

**`summary`** Query to obtain OpenShift compute usage information

**`throws`** {RequiredError}

**`memberof`** OpenShiftReportsApi

**Parameters:**

Name | Type |
------ | ------ |
`filter?` | any |
`groupBy?` | any |
`orderBy?` | any |
`offset?` | number |
`limit?` | number |
`options?` | any |

**Returns:** *AxiosPromise‹[ReportOpenShiftCpu](../interfaces/reportopenshiftcpu.md)›*

___

###  getOpenShiftCostReports

▸ **getOpenShiftCostReports**(`delta?`: string, `filter?`: any, `groupBy?`: any, `orderBy?`: any, `offset?`: number, `limit?`: number, `options?`: any): *AxiosPromise‹[ReportCost](../interfaces/reportcost.md)›*

*Defined in [api.ts:5302](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/cost-management/api.ts#L5302)*

**`summary`** Query to obtain cost reports

**`throws`** {RequiredError}

**`memberof`** OpenShiftReportsApi

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

###  getOpenShiftMemoryReports

▸ **getOpenShiftMemoryReports**(`filter?`: any, `groupBy?`: any, `orderBy?`: any, `offset?`: number, `limit?`: number, `options?`: any): *AxiosPromise‹[ReportOpenShiftMemory](../interfaces/reportopenshiftmemory.md)›*

*Defined in [api.ts:5318](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/cost-management/api.ts#L5318)*

**`summary`** Query to obtain OpenShift memory usage information

**`throws`** {RequiredError}

**`memberof`** OpenShiftReportsApi

**Parameters:**

Name | Type |
------ | ------ |
`filter?` | any |
`groupBy?` | any |
`orderBy?` | any |
`offset?` | number |
`limit?` | number |
`options?` | any |

**Returns:** *AxiosPromise‹[ReportOpenShiftMemory](../interfaces/reportopenshiftmemory.md)›*

___

###  getOpenShiftVolumeReports

▸ **getOpenShiftVolumeReports**(`filter?`: any, `groupBy?`: any, `orderBy?`: any, `offset?`: number, `limit?`: number, `options?`: any): *AxiosPromise‹[ReportOpenShiftVolume](../interfaces/reportopenshiftvolume.md)›*

*Defined in [api.ts:5334](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/cost-management/api.ts#L5334)*

**`summary`** Query to obtain OpenShift volume usage information

**`throws`** {RequiredError}

**`memberof`** OpenShiftReportsApi

**Parameters:**

Name | Type |
------ | ------ |
`filter?` | any |
`groupBy?` | any |
`orderBy?` | any |
`offset?` | number |
`limit?` | number |
`options?` | any |

**Returns:** *AxiosPromise‹[ReportOpenShiftVolume](../interfaces/reportopenshiftvolume.md)›*
