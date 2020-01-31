
[

Javascript client for Cost Management API
=========================================

](#javascript-client-for-cost-management-api)

This is a client library for [RedHatInsights/Cost Management](https://github.com/project-koku).

[

Install
-------

](#install)

NPM

```bash
npm install --save @redhat-cloud-services/cost-management-client
```

Or Yarn

```bash
yarn add @redhat-cloud-services/cost-management-client
```

[

### Usage

](#usage)

This client is using typescript and axios. Types are distributed with this package, so no need to define or install them separately.

```js
import { CostModelApi } from '@redhat-cloud-services/cost-management-client';

const api = new CostModelApi();
const costManagement = await api.getCostModel();
```

[

API documentation
-----------------

](#api-documentation)

*   [README](doc/README.md)

## Index

### Modules

* [DataExportRequestOut](modules/dataexportrequestout.md)
* [Markup](modules/markup.md)
* [ReportAzureOrdering](modules/reportazureordering.md)
* [ReportCostsOpenShiftOrdering](modules/reportcostsopenshiftordering.md)
* [ReportInventoryOpenShiftOrdering](modules/reportinventoryopenshiftordering.md)
* [ReportOpenShiftAWSOrdering](modules/reportopenshiftawsordering.md)
* [ReportOpenShiftAzureOrdering](modules/reportopenshiftazureordering.md)
* [ReportOrdering](modules/reportordering.md)

### Enumerations

* [ReportResolution](enums/reportresolution.md)
* [ReportResourceScope](enums/reportresourcescope.md)
* [ReportTimeScopeUnits](enums/reporttimescopeunits.md)
* [ReportTimeScopeValue](enums/reporttimescopevalue.md)

### Classes

* [AWSReportApi](classes/awsreportapi.md)
* [AzureReportApi](classes/azurereportapi.md)
* [BaseAPI](classes/baseapi.md)
* [CloudAccountsApi](classes/cloudaccountsapi.md)
* [Configuration](classes/configuration.md)
* [CostModelApi](classes/costmodelapi.md)
* [DataExportRequestApi](classes/dataexportrequestapi.md)
* [MetricsApi](classes/metricsapi.md)
* [OpenShiftReportApi](classes/openshiftreportapi.md)
* [ProviderApi](classes/providerapi.md)
* [RequiredError](classes/requirederror.md)
* [SourcesApi](classes/sourcesapi.md)
* [StatusApi](classes/statusapi.md)
* [TagsApi](classes/tagsapi.md)
* [UserPreferenceApi](classes/userpreferenceapi.md)

### Interfaces

* [CloudAccountOut](interfaces/cloudaccountout.md)
* [CloudAccountPagination](interfaces/cloudaccountpagination.md)
* [ConfigurationParameters](interfaces/configurationparameters.md)
* [CostModel](interfaces/costmodel.md)
* [CostModelOut](interfaces/costmodelout.md)
* [CostModelPagination](interfaces/costmodelpagination.md)
* [CostModelResp](interfaces/costmodelresp.md)
* [CostModelRespProviders](interfaces/costmodelrespproviders.md)
* [Customer](interfaces/customer.md)
* [CustomerOut](interfaces/customerout.md)
* [DataExportRequest](interfaces/dataexportrequest.md)
* [DataExportRequestPagination](interfaces/dataexportrequestpagination.md)
* [ListPagination](interfaces/listpagination.md)
* [Metrics](interfaces/metrics.md)
* [MetricsOut](interfaces/metricsout.md)
* [ModelError](interfaces/modelerror.md)
* [PaginationLinks](interfaces/paginationlinks.md)
* [PaginationMeta](interfaces/paginationmeta.md)
* [Provider](interfaces/provider.md)
* [ProviderAuthenticationIn](interfaces/providerauthenticationin.md)
* [ProviderAuthenticationOut](interfaces/providerauthenticationout.md)
* [ProviderBillingSourceIn](interfaces/providerbillingsourcein.md)
* [ProviderBillingSourceOut](interfaces/providerbillingsourceout.md)
* [ProviderIn](interfaces/providerin.md)
* [ProviderOut](interfaces/providerout.md)
* [ProviderPagination](interfaces/providerpagination.md)
* [Rate](interfaces/rate.md)
* [Report](interfaces/report.md)
* [ReportAzureFilter](interfaces/reportazurefilter.md)
* [ReportAzureGrouping](interfaces/reportazuregrouping.md)
* [ReportCost](interfaces/reportcost.md)
* [ReportCosts](interfaces/reportcosts.md)
* [ReportDelta](interfaces/reportdelta.md)
* [ReportFilter](interfaces/reportfilter.md)
* [ReportGrouping](interfaces/reportgrouping.md)
* [ReportInstanceInventory](interfaces/reportinstanceinventory.md)
* [ReportOpenShiftAWSFilter](interfaces/reportopenshiftawsfilter.md)
* [ReportOpenShiftAWSGrouping](interfaces/reportopenshiftawsgrouping.md)
* [ReportOpenShiftAWSInstanceInventory](interfaces/reportopenshiftawsinstanceinventory.md)
* [ReportOpenShiftAWSStorageInventory](interfaces/reportopenshiftawsstorageinventory.md)
* [ReportOpenShiftAzureFilter](interfaces/reportopenshiftazurefilter.md)
* [ReportOpenShiftAzureGrouping](interfaces/reportopenshiftazuregrouping.md)
* [ReportOpenShiftAzureInstanceInventory](interfaces/reportopenshiftazureinstanceinventory.md)
* [ReportOpenShiftAzureStorageInventory](interfaces/reportopenshiftazurestorageinventory.md)
* [ReportOpenShiftCpu](interfaces/reportopenshiftcpu.md)
* [ReportOpenShiftFilter](interfaces/reportopenshiftfilter.md)
* [ReportOpenShiftGrouping](interfaces/reportopenshiftgrouping.md)
* [ReportOpenShiftMemory](interfaces/reportopenshiftmemory.md)
* [ReportOpenShiftVolume](interfaces/reportopenshiftvolume.md)
* [ReportPaginationMeta](interfaces/reportpaginationmeta.md)
* [ReportStorageInventory](interfaces/reportstorageinventory.md)
* [RequestArgs](interfaces/requestargs.md)
* [Source](interfaces/source.md)
* [SourceIn](interfaces/sourcein.md)
* [SourceOut](interfaces/sourceout.md)
* [SourcePagination](interfaces/sourcepagination.md)
* [Status](interfaces/status.md)
* [Tags](interfaces/tags.md)
* [TagsFilter](interfaces/tagsfilter.md)
* [User](interfaces/user.md)
* [UserOut](interfaces/userout.md)
* [UserPreference](interfaces/userpreference.md)
* [UserPreferenceOut](interfaces/userpreferenceout.md)
* [UserPreferencePagination](interfaces/userpreferencepagination.md)

### Variables

* [BASE_PATH](#base_path)

### Functions

* [AWSReportApiAxiosParamCreator](#awsreportapiaxiosparamcreator)
* [AWSReportApiFactory](#awsreportapifactory)
* [AWSReportApiFp](#awsreportapifp)
* [AzureReportApiAxiosParamCreator](#azurereportapiaxiosparamcreator)
* [AzureReportApiFactory](#azurereportapifactory)
* [AzureReportApiFp](#azurereportapifp)
* [CloudAccountsApiAxiosParamCreator](#cloudaccountsapiaxiosparamcreator)
* [CloudAccountsApiFactory](#cloudaccountsapifactory)
* [CloudAccountsApiFp](#cloudaccountsapifp)
* [CostModelApiAxiosParamCreator](#costmodelapiaxiosparamcreator)
* [CostModelApiFactory](#costmodelapifactory)
* [CostModelApiFp](#costmodelapifp)
* [DataExportRequestApiAxiosParamCreator](#dataexportrequestapiaxiosparamcreator)
* [DataExportRequestApiFactory](#dataexportrequestapifactory)
* [DataExportRequestApiFp](#dataexportrequestapifp)
* [MetricsApiAxiosParamCreator](#metricsapiaxiosparamcreator)
* [MetricsApiFactory](#metricsapifactory)
* [MetricsApiFp](#metricsapifp)
* [OpenShiftReportApiAxiosParamCreator](#openshiftreportapiaxiosparamcreator)
* [OpenShiftReportApiFactory](#openshiftreportapifactory)
* [OpenShiftReportApiFp](#openshiftreportapifp)
* [ProviderApiAxiosParamCreator](#providerapiaxiosparamcreator)
* [ProviderApiFactory](#providerapifactory)
* [ProviderApiFp](#providerapifp)
* [SourcesApiAxiosParamCreator](#sourcesapiaxiosparamcreator)
* [SourcesApiFactory](#sourcesapifactory)
* [SourcesApiFp](#sourcesapifp)
* [StatusApiAxiosParamCreator](#statusapiaxiosparamcreator)
* [StatusApiFactory](#statusapifactory)
* [StatusApiFp](#statusapifp)
* [TagsApiAxiosParamCreator](#tagsapiaxiosparamcreator)
* [TagsApiFactory](#tagsapifactory)
* [TagsApiFp](#tagsapifp)
* [UserPreferenceApiAxiosParamCreator](#userpreferenceapiaxiosparamcreator)
* [UserPreferenceApiFactory](#userpreferenceapifactory)
* [UserPreferenceApiFp](#userpreferenceapifp)

### Object literals

* [COLLECTION_FORMATS](#collection_formats)

---

## Variables

<a id="base_path"></a>

### `<Const>` BASE_PATH

**● BASE_PATH**: *`string`* =  "https://cloud.redhat.com/api/cost-management/v1".replace(/\/+$/, "")

*Defined in [api.ts:20](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/cost-management/api.ts#L20)*

___

## Functions

<a id="awsreportapiaxiosparamcreator"></a>

### `<Const>` AWSReportApiAxiosParamCreator

▸ **AWSReportApiAxiosParamCreator**(configuration?: *[Configuration](classes/configuration.md)*): `object`

*Defined in [api.ts:3118](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/cost-management/api.ts#L3118)*

AWSReportApi - axios parameter creator

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` configuration | [Configuration](classes/configuration.md) |

**Returns:** `object`

___
<a id="awsreportapifactory"></a>

### `<Const>` AWSReportApiFactory

▸ **AWSReportApiFactory**(configuration?: *[Configuration](classes/configuration.md)*, basePath?: *`string`*, axios?: *`AxiosInstance`*): `object`

*Defined in [api.ts:3382](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/cost-management/api.ts#L3382)*

AWSReportApi - factory interface

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` configuration | [Configuration](classes/configuration.md) |
| `Optional` basePath | `string` |
| `Optional` axios | `AxiosInstance` |

**Returns:** `object`

___
<a id="awsreportapifp"></a>

### `<Const>` AWSReportApiFp

▸ **AWSReportApiFp**(configuration?: *[Configuration](classes/configuration.md)*): `object`

*Defined in [api.ts:3316](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/cost-management/api.ts#L3316)*

AWSReportApi - functional programming interface

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` configuration | [Configuration](classes/configuration.md) |

**Returns:** `object`

___
<a id="azurereportapiaxiosparamcreator"></a>

### `<Const>` AzureReportApiAxiosParamCreator

▸ **AzureReportApiAxiosParamCreator**(configuration?: *[Configuration](classes/configuration.md)*): `object`

*Defined in [api.ts:3496](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/cost-management/api.ts#L3496)*

AzureReportApi - axios parameter creator

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` configuration | [Configuration](classes/configuration.md) |

**Returns:** `object`

___
<a id="azurereportapifactory"></a>

### `<Const>` AzureReportApiFactory

▸ **AzureReportApiFactory**(configuration?: *[Configuration](classes/configuration.md)*, basePath?: *`string`*, axios?: *`AxiosInstance`*): `object`

*Defined in [api.ts:3760](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/cost-management/api.ts#L3760)*

AzureReportApi - factory interface

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` configuration | [Configuration](classes/configuration.md) |
| `Optional` basePath | `string` |
| `Optional` axios | `AxiosInstance` |

**Returns:** `object`

___
<a id="azurereportapifp"></a>

### `<Const>` AzureReportApiFp

▸ **AzureReportApiFp**(configuration?: *[Configuration](classes/configuration.md)*): `object`

*Defined in [api.ts:3694](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/cost-management/api.ts#L3694)*

AzureReportApi - functional programming interface

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` configuration | [Configuration](classes/configuration.md) |

**Returns:** `object`

___
<a id="cloudaccountsapiaxiosparamcreator"></a>

### `<Const>` CloudAccountsApiAxiosParamCreator

▸ **CloudAccountsApiAxiosParamCreator**(configuration?: *[Configuration](classes/configuration.md)*): `object`

*Defined in [api.ts:3874](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/cost-management/api.ts#L3874)*

CloudAccountsApi - axios parameter creator

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` configuration | [Configuration](classes/configuration.md) |

**Returns:** `object`

___
<a id="cloudaccountsapifactory"></a>

### `<Const>` CloudAccountsApiFactory

▸ **CloudAccountsApiFactory**(configuration?: *[Configuration](classes/configuration.md)*, basePath?: *`string`*, axios?: *`AxiosInstance`*): `object`

*Defined in [api.ts:3938](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/cost-management/api.ts#L3938)*

CloudAccountsApi - factory interface

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` configuration | [Configuration](classes/configuration.md) |
| `Optional` basePath | `string` |
| `Optional` axios | `AxiosInstance` |

**Returns:** `object`

___
<a id="cloudaccountsapifp"></a>

### `<Const>` CloudAccountsApiFp

▸ **CloudAccountsApiFp**(configuration?: *[Configuration](classes/configuration.md)*): `object`

*Defined in [api.ts:3916](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/cost-management/api.ts#L3916)*

CloudAccountsApi - functional programming interface

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` configuration | [Configuration](classes/configuration.md) |

**Returns:** `object`

___
<a id="costmodelapiaxiosparamcreator"></a>

### `<Const>` CostModelApiAxiosParamCreator

▸ **CostModelApiAxiosParamCreator**(configuration?: *[Configuration](classes/configuration.md)*): `object`

*Defined in [api.ts:3976](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/cost-management/api.ts#L3976)*

CostModelApi - axios parameter creator

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` configuration | [Configuration](classes/configuration.md) |

**Returns:** `object`

___
<a id="costmodelapifactory"></a>

### `<Const>` CostModelApiFactory

▸ **CostModelApiFactory**(configuration?: *[Configuration](classes/configuration.md)*, basePath?: *`string`*, axios?: *`AxiosInstance`*): `object`

*Defined in [api.ts:4301](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/cost-management/api.ts#L4301)*

CostModelApi - factory interface

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` configuration | [Configuration](classes/configuration.md) |
| `Optional` basePath | `string` |
| `Optional` axios | `AxiosInstance` |

**Returns:** `object`

___
<a id="costmodelapifp"></a>

### `<Const>` CostModelApiFp

▸ **CostModelApiFp**(configuration?: *[Configuration](classes/configuration.md)*): `object`

*Defined in [api.ts:4215](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/cost-management/api.ts#L4215)*

CostModelApi - functional programming interface

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` configuration | [Configuration](classes/configuration.md) |

**Returns:** `object`

___
<a id="dataexportrequestapiaxiosparamcreator"></a>

### `<Const>` DataExportRequestApiAxiosParamCreator

▸ **DataExportRequestApiAxiosParamCreator**(configuration?: *[Configuration](classes/configuration.md)*): `object`

*Defined in [api.ts:4443](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/cost-management/api.ts#L4443)*

DataExportRequestApi - axios parameter creator

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` configuration | [Configuration](classes/configuration.md) |

**Returns:** `object`

___
<a id="dataexportrequestapifactory"></a>

### `<Const>` DataExportRequestApiFactory

▸ **DataExportRequestApiFactory**(configuration?: *[Configuration](classes/configuration.md)*, basePath?: *`string`*, axios?: *`AxiosInstance`*): `object`

*Defined in [api.ts:4628](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/cost-management/api.ts#L4628)*

DataExportRequestApi - factory interface

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` configuration | [Configuration](classes/configuration.md) |
| `Optional` basePath | `string` |
| `Optional` axios | `AxiosInstance` |

**Returns:** `object`

___
<a id="dataexportrequestapifp"></a>

### `<Const>` DataExportRequestApiFp

▸ **DataExportRequestApiFp**(configuration?: *[Configuration](classes/configuration.md)*): `object`

*Defined in [api.ts:4576](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/cost-management/api.ts#L4576)*

DataExportRequestApi - functional programming interface

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` configuration | [Configuration](classes/configuration.md) |

**Returns:** `object`

___
<a id="metricsapiaxiosparamcreator"></a>

### `<Const>` MetricsApiAxiosParamCreator

▸ **MetricsApiAxiosParamCreator**(configuration?: *[Configuration](classes/configuration.md)*): `object`

*Defined in [api.ts:4714](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/cost-management/api.ts#L4714)*

MetricsApi - axios parameter creator

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` configuration | [Configuration](classes/configuration.md) |

**Returns:** `object`

___
<a id="metricsapifactory"></a>

### `<Const>` MetricsApiFactory

▸ **MetricsApiFactory**(configuration?: *[Configuration](classes/configuration.md)*, basePath?: *`string`*, axios?: *`AxiosInstance`*): `object`

*Defined in [api.ts:4772](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/cost-management/api.ts#L4772)*

MetricsApi - factory interface

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` configuration | [Configuration](classes/configuration.md) |
| `Optional` basePath | `string` |
| `Optional` axios | `AxiosInstance` |

**Returns:** `object`

___
<a id="metricsapifp"></a>

### `<Const>` MetricsApiFp

▸ **MetricsApiFp**(configuration?: *[Configuration](classes/configuration.md)*): `object`

*Defined in [api.ts:4750](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/cost-management/api.ts#L4750)*

MetricsApi - functional programming interface

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` configuration | [Configuration](classes/configuration.md) |

**Returns:** `object`

___
<a id="openshiftreportapiaxiosparamcreator"></a>

### `<Const>` OpenShiftReportApiAxiosParamCreator

▸ **OpenShiftReportApiAxiosParamCreator**(configuration?: *[Configuration](classes/configuration.md)*): `object`

*Defined in [api.ts:4810](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/cost-management/api.ts#L4810)*

OpenShiftReportApi - axios parameter creator

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` configuration | [Configuration](classes/configuration.md) |

**Returns:** `object`

___
<a id="openshiftreportapifactory"></a>

### `<Const>` OpenShiftReportApiFactory

▸ **OpenShiftReportApiFactory**(configuration?: *[Configuration](classes/configuration.md)*, basePath?: *`string`*, axios?: *`AxiosInstance`*): `object`

*Defined in [api.ts:5630](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/cost-management/api.ts#L5630)*

OpenShiftReportApi - factory interface

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` configuration | [Configuration](classes/configuration.md) |
| `Optional` basePath | `string` |
| `Optional` axios | `AxiosInstance` |

**Returns:** `object`

___
<a id="openshiftreportapifp"></a>

### `<Const>` OpenShiftReportApiFp

▸ **OpenShiftReportApiFp**(configuration?: *[Configuration](classes/configuration.md)*): `object`

*Defined in [api.ts:5434](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/cost-management/api.ts#L5434)*

OpenShiftReportApi - functional programming interface

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` configuration | [Configuration](classes/configuration.md) |

**Returns:** `object`

___
<a id="providerapiaxiosparamcreator"></a>

### `<Const>` ProviderApiAxiosParamCreator

▸ **ProviderApiAxiosParamCreator**(configuration?: *[Configuration](classes/configuration.md)*): `object`

*Defined in [api.ts:5962](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/cost-management/api.ts#L5962)*

ProviderApi - axios parameter creator

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` configuration | [Configuration](classes/configuration.md) |

**Returns:** `object`

___
<a id="providerapifactory"></a>

### `<Const>` ProviderApiFactory

▸ **ProviderApiFactory**(configuration?: *[Configuration](classes/configuration.md)*, basePath?: *`string`*, axios?: *`AxiosInstance`*): `object`

*Defined in [api.ts:6287](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/cost-management/api.ts#L6287)*

ProviderApi - factory interface

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` configuration | [Configuration](classes/configuration.md) |
| `Optional` basePath | `string` |
| `Optional` axios | `AxiosInstance` |

**Returns:** `object`

___
<a id="providerapifp"></a>

### `<Const>` ProviderApiFp

▸ **ProviderApiFp**(configuration?: *[Configuration](classes/configuration.md)*): `object`

*Defined in [api.ts:6202](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/cost-management/api.ts#L6202)*

ProviderApi - functional programming interface

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` configuration | [Configuration](classes/configuration.md) |

**Returns:** `object`

___
<a id="sourcesapiaxiosparamcreator"></a>

### `<Const>` SourcesApiAxiosParamCreator

▸ **SourcesApiAxiosParamCreator**(configuration?: *[Configuration](classes/configuration.md)*): `object`

*Defined in [api.ts:6427](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/cost-management/api.ts#L6427)*

SourcesApi - axios parameter creator

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` configuration | [Configuration](classes/configuration.md) |

**Returns:** `object`

___
<a id="sourcesapifactory"></a>

### `<Const>` SourcesApiFactory

▸ **SourcesApiFactory**(configuration?: *[Configuration](classes/configuration.md)*, basePath?: *`string`*, axios?: *`AxiosInstance`*): `object`

*Defined in [api.ts:6589](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/cost-management/api.ts#L6589)*

SourcesApi - factory interface

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` configuration | [Configuration](classes/configuration.md) |
| `Optional` basePath | `string` |
| `Optional` axios | `AxiosInstance` |

**Returns:** `object`

___
<a id="sourcesapifp"></a>

### `<Const>` SourcesApiFp

▸ **SourcesApiFp**(configuration?: *[Configuration](classes/configuration.md)*): `object`

*Defined in [api.ts:6538](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/cost-management/api.ts#L6538)*

SourcesApi - functional programming interface

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` configuration | [Configuration](classes/configuration.md) |

**Returns:** `object`

___
<a id="statusapiaxiosparamcreator"></a>

### `<Const>` StatusApiAxiosParamCreator

▸ **StatusApiAxiosParamCreator**(configuration?: *[Configuration](classes/configuration.md)*): `object`

*Defined in [api.ts:6673](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/cost-management/api.ts#L6673)*

StatusApi - axios parameter creator

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` configuration | [Configuration](classes/configuration.md) |

**Returns:** `object`

___
<a id="statusapifactory"></a>

### `<Const>` StatusApiFactory

▸ **StatusApiFactory**(configuration?: *[Configuration](classes/configuration.md)*, basePath?: *`string`*, axios?: *`AxiosInstance`*): `object`

*Defined in [api.ts:6731](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/cost-management/api.ts#L6731)*

StatusApi - factory interface

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` configuration | [Configuration](classes/configuration.md) |
| `Optional` basePath | `string` |
| `Optional` axios | `AxiosInstance` |

**Returns:** `object`

___
<a id="statusapifp"></a>

### `<Const>` StatusApiFp

▸ **StatusApiFp**(configuration?: *[Configuration](classes/configuration.md)*): `object`

*Defined in [api.ts:6709](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/cost-management/api.ts#L6709)*

StatusApi - functional programming interface

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` configuration | [Configuration](classes/configuration.md) |

**Returns:** `object`

___
<a id="tagsapiaxiosparamcreator"></a>

### `<Const>` TagsApiAxiosParamCreator

▸ **TagsApiAxiosParamCreator**(configuration?: *[Configuration](classes/configuration.md)*): `object`

*Defined in [api.ts:6769](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/cost-management/api.ts#L6769)*

TagsApi - axios parameter creator

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` configuration | [Configuration](classes/configuration.md) |

**Returns:** `object`

___
<a id="tagsapifactory"></a>

### `<Const>` TagsApiFactory

▸ **TagsApiFactory**(configuration?: *[Configuration](classes/configuration.md)*, basePath?: *`string`*, axios?: *`AxiosInstance`*): `object`

*Defined in [api.ts:7137](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/cost-management/api.ts#L7137)*

TagsApi - factory interface

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` configuration | [Configuration](classes/configuration.md) |
| `Optional` basePath | `string` |
| `Optional` axios | `AxiosInstance` |

**Returns:** `object`

___
<a id="tagsapifp"></a>

### `<Const>` TagsApiFp

▸ **TagsApiFp**(configuration?: *[Configuration](classes/configuration.md)*): `object`

*Defined in [api.ts:7043](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/cost-management/api.ts#L7043)*

TagsApi - functional programming interface

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` configuration | [Configuration](classes/configuration.md) |

**Returns:** `object`

___
<a id="userpreferenceapiaxiosparamcreator"></a>

### `<Const>` UserPreferenceApiAxiosParamCreator

▸ **UserPreferenceApiAxiosParamCreator**(configuration?: *[Configuration](classes/configuration.md)*): `object`

*Defined in [api.ts:7295](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/cost-management/api.ts#L7295)*

UserPreferenceApi - axios parameter creator

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` configuration | [Configuration](classes/configuration.md) |

**Returns:** `object`

___
<a id="userpreferenceapifactory"></a>

### `<Const>` UserPreferenceApiFactory

▸ **UserPreferenceApiFactory**(configuration?: *[Configuration](classes/configuration.md)*, basePath?: *`string`*, axios?: *`AxiosInstance`*): `object`

*Defined in [api.ts:7596](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/cost-management/api.ts#L7596)*

UserPreferenceApi - factory interface

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` configuration | [Configuration](classes/configuration.md) |
| `Optional` basePath | `string` |
| `Optional` axios | `AxiosInstance` |

**Returns:** `object`

___
<a id="userpreferenceapifp"></a>

### `<Const>` UserPreferenceApiFp

▸ **UserPreferenceApiFp**(configuration?: *[Configuration](classes/configuration.md)*): `object`

*Defined in [api.ts:7515](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/cost-management/api.ts#L7515)*

UserPreferenceApi - functional programming interface

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` configuration | [Configuration](classes/configuration.md) |

**Returns:** `object`

___

## Object literals

<a id="collection_formats"></a>

### `<Const>` COLLECTION_FORMATS

**COLLECTION_FORMATS**: *`object`*

*Defined in [api.ts:26](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/cost-management/api.ts#L26)*

*__export__*: 

<a id="collection_formats.csv"></a>

####  csv

**● csv**: *`string`* = ","

*Defined in [api.ts:27](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/cost-management/api.ts#L27)*

___
<a id="collection_formats.pipes"></a>

####  pipes

**● pipes**: *`string`* = "|"

*Defined in [api.ts:30](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/cost-management/api.ts#L30)*

___
<a id="collection_formats.ssv"></a>

####  ssv

**● ssv**: *`string`* = " "

*Defined in [api.ts:28](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/cost-management/api.ts#L28)*

___
<a id="collection_formats.tsv"></a>

####  tsv

**● tsv**: *`string`* = "	"

*Defined in [api.ts:29](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/cost-management/api.ts#L29)*

___

___

