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
* [getOpenShiftAllCostReports](openshiftreportsapi.md#getopenshiftallcostreports)
* [getOpenShiftAllInventoryInstanceReport](openshiftreportsapi.md#getopenshiftallinventoryinstancereport)
* [getOpenShiftAllInventoryStorageReport](openshiftreportsapi.md#getopenshiftallinventorystoragereport)
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

*Defined in [api.ts:5580](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/cost-management/api.ts#L5580)*

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

*Defined in [api.ts:5597](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/cost-management/api.ts#L5597)*

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

*Defined in [api.ts:5614](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/cost-management/api.ts#L5614)*

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

###  getOpenShiftAllCostReports

▸ **getOpenShiftAllCostReports**(`delta?`: string, `filter?`: any, `groupBy?`: any, `orderBy?`: any, `offset?`: number, `limit?`: number, `options?`: any): *AxiosPromise‹[ReportCosts](../interfaces/reportcosts.md)›*

*Defined in [api.ts:5631](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/cost-management/api.ts#L5631)*

**`summary`** Query to obtain OpenShift on all infrastructures cost reports

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

###  getOpenShiftAllInventoryInstanceReport

▸ **getOpenShiftAllInventoryInstanceReport**(`filter?`: any, `groupBy?`: any, `orderBy?`: any, `units?`: string, `offset?`: number, `limit?`: number, `options?`: any): *AxiosPromise‹[ReportOpenShiftAllInstanceInventory](../interfaces/reportopenshiftallinstanceinventory.md)›*

*Defined in [api.ts:5648](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/cost-management/api.ts#L5648)*

**`summary`** Query to obtain OpenShift on all infrastructures instance data

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

**Returns:** *AxiosPromise‹[ReportOpenShiftAllInstanceInventory](../interfaces/reportopenshiftallinstanceinventory.md)›*

___

###  getOpenShiftAllInventoryStorageReport

▸ **getOpenShiftAllInventoryStorageReport**(`filter?`: any, `groupBy?`: any, `orderBy?`: any, `units?`: string, `offset?`: number, `limit?`: number, `options?`: any): *AxiosPromise‹[ReportOpenShiftAllStorageInventory](../interfaces/reportopenshiftallstorageinventory.md)›*

*Defined in [api.ts:5665](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/cost-management/api.ts#L5665)*

**`summary`** Query to obtain OpenShift on all infrastructures storage data

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

**Returns:** *AxiosPromise‹[ReportOpenShiftAllStorageInventory](../interfaces/reportopenshiftallstorageinventory.md)›*

___

###  getOpenShiftAzureCostReports

▸ **getOpenShiftAzureCostReports**(`delta?`: string, `filter?`: any, `groupBy?`: any, `orderBy?`: any, `offset?`: number, `limit?`: number, `options?`: any): *AxiosPromise‹[ReportCosts](../interfaces/reportcosts.md)›*

*Defined in [api.ts:5682](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/cost-management/api.ts#L5682)*

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

*Defined in [api.ts:5699](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/cost-management/api.ts#L5699)*

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

*Defined in [api.ts:5716](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/cost-management/api.ts#L5716)*

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

*Defined in [api.ts:5732](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/cost-management/api.ts#L5732)*

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

*Defined in [api.ts:5749](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/cost-management/api.ts#L5749)*

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

*Defined in [api.ts:5765](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/cost-management/api.ts#L5765)*

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

*Defined in [api.ts:5781](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/cost-management/api.ts#L5781)*

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
