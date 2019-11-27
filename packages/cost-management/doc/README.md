
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
* [Configuration](classes/configuration.md)
* [CostModelApi](classes/costmodelapi.md)
* [DataExportRequestApi](classes/dataexportrequestapi.md)
* [MetricsApi](classes/metricsapi.md)
* [OpenShiftReportApi](classes/openshiftreportapi.md)
* [ProviderApi](classes/providerapi.md)
* [RequiredError](classes/requirederror.md)
* [SourcesAuthenticationApi](classes/sourcesauthenticationapi.md)
* [SourcesBillingSourceApi](classes/sourcesbillingsourceapi.md)
* [StatusApi](classes/statusapi.md)
* [TagsApi](classes/tagsapi.md)
* [UserPreferenceApi](classes/userpreferenceapi.md)

### Interfaces

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
* [SourcesAuthentication](interfaces/sourcesauthentication.md)
* [SourcesAuthenticationIn](interfaces/sourcesauthenticationin.md)
* [SourcesAuthenticationOut](interfaces/sourcesauthenticationout.md)
* [SourcesBillingSource](interfaces/sourcesbillingsource.md)
* [SourcesBillingSourceIn](interfaces/sourcesbillingsourcein.md)
* [SourcesBillingSourceOut](interfaces/sourcesbillingsourceout.md)
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
* [SourcesAuthenticationApiAxiosParamCreator](#sourcesauthenticationapiaxiosparamcreator)
* [SourcesAuthenticationApiFactory](#sourcesauthenticationapifactory)
* [SourcesAuthenticationApiFp](#sourcesauthenticationapifp)
* [SourcesBillingSourceApiAxiosParamCreator](#sourcesbillingsourceapiaxiosparamcreator)
* [SourcesBillingSourceApiFactory](#sourcesbillingsourceapifactory)
* [SourcesBillingSourceApiFp](#sourcesbillingsourceapifp)
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

*Defined in [api.ts:3034](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/cost-management/api.ts#L3034)*

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

*Defined in [api.ts:3298](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/cost-management/api.ts#L3298)*

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

*Defined in [api.ts:3232](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/cost-management/api.ts#L3232)*

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

*Defined in [api.ts:3412](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/cost-management/api.ts#L3412)*

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

*Defined in [api.ts:3676](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/cost-management/api.ts#L3676)*

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

*Defined in [api.ts:3610](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/cost-management/api.ts#L3610)*

AzureReportApi - functional programming interface

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` configuration | [Configuration](classes/configuration.md) |

**Returns:** `object`

___
<a id="costmodelapiaxiosparamcreator"></a>

### `<Const>` CostModelApiAxiosParamCreator

▸ **CostModelApiAxiosParamCreator**(configuration?: *[Configuration](classes/configuration.md)*): `object`

*Defined in [api.ts:3790](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/cost-management/api.ts#L3790)*

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

*Defined in [api.ts:4103](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/cost-management/api.ts#L4103)*

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

*Defined in [api.ts:4019](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/cost-management/api.ts#L4019)*

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

*Defined in [api.ts:4241](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/cost-management/api.ts#L4241)*

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

*Defined in [api.ts:4426](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/cost-management/api.ts#L4426)*

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

*Defined in [api.ts:4374](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/cost-management/api.ts#L4374)*

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

*Defined in [api.ts:4512](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/cost-management/api.ts#L4512)*

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

*Defined in [api.ts:4570](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/cost-management/api.ts#L4570)*

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

*Defined in [api.ts:4548](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/cost-management/api.ts#L4548)*

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

*Defined in [api.ts:4608](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/cost-management/api.ts#L4608)*

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

*Defined in [api.ts:5428](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/cost-management/api.ts#L5428)*

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

*Defined in [api.ts:5232](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/cost-management/api.ts#L5232)*

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

*Defined in [api.ts:5760](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/cost-management/api.ts#L5760)*

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

*Defined in [api.ts:6010](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/cost-management/api.ts#L6010)*

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

*Defined in [api.ts:5942](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/cost-management/api.ts#L5942)*

ProviderApi - functional programming interface

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` configuration | [Configuration](classes/configuration.md) |

**Returns:** `object`

___
<a id="sourcesauthenticationapiaxiosparamcreator"></a>

### `<Const>` SourcesAuthenticationApiAxiosParamCreator

▸ **SourcesAuthenticationApiAxiosParamCreator**(configuration?: *[Configuration](classes/configuration.md)*): `object`

*Defined in [api.ts:6122](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/cost-management/api.ts#L6122)*

SourcesAuthenticationApi - axios parameter creator

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` configuration | [Configuration](classes/configuration.md) |

**Returns:** `object`

___
<a id="sourcesauthenticationapifactory"></a>

### `<Const>` SourcesAuthenticationApiFactory

▸ **SourcesAuthenticationApiFactory**(configuration?: *[Configuration](classes/configuration.md)*, basePath?: *`string`*, axios?: *`AxiosInstance`*): `object`

*Defined in [api.ts:6196](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/cost-management/api.ts#L6196)*

SourcesAuthenticationApi - factory interface

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` configuration | [Configuration](classes/configuration.md) |
| `Optional` basePath | `string` |
| `Optional` axios | `AxiosInstance` |

**Returns:** `object`

___
<a id="sourcesauthenticationapifp"></a>

### `<Const>` SourcesAuthenticationApiFp

▸ **SourcesAuthenticationApiFp**(configuration?: *[Configuration](classes/configuration.md)*): `object`

*Defined in [api.ts:6173](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/cost-management/api.ts#L6173)*

SourcesAuthenticationApi - functional programming interface

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` configuration | [Configuration](classes/configuration.md) |

**Returns:** `object`

___
<a id="sourcesbillingsourceapiaxiosparamcreator"></a>

### `<Const>` SourcesBillingSourceApiAxiosParamCreator

▸ **SourcesBillingSourceApiAxiosParamCreator**(configuration?: *[Configuration](classes/configuration.md)*): `object`

*Defined in [api.ts:6236](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/cost-management/api.ts#L6236)*

SourcesBillingSourceApi - axios parameter creator

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` configuration | [Configuration](classes/configuration.md) |

**Returns:** `object`

___
<a id="sourcesbillingsourceapifactory"></a>

### `<Const>` SourcesBillingSourceApiFactory

▸ **SourcesBillingSourceApiFactory**(configuration?: *[Configuration](classes/configuration.md)*, basePath?: *`string`*, axios?: *`AxiosInstance`*): `object`

*Defined in [api.ts:6310](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/cost-management/api.ts#L6310)*

SourcesBillingSourceApi - factory interface

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` configuration | [Configuration](classes/configuration.md) |
| `Optional` basePath | `string` |
| `Optional` axios | `AxiosInstance` |

**Returns:** `object`

___
<a id="sourcesbillingsourceapifp"></a>

### `<Const>` SourcesBillingSourceApiFp

▸ **SourcesBillingSourceApiFp**(configuration?: *[Configuration](classes/configuration.md)*): `object`

*Defined in [api.ts:6287](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/cost-management/api.ts#L6287)*

SourcesBillingSourceApi - functional programming interface

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` configuration | [Configuration](classes/configuration.md) |

**Returns:** `object`

___
<a id="statusapiaxiosparamcreator"></a>

### `<Const>` StatusApiAxiosParamCreator

▸ **StatusApiAxiosParamCreator**(configuration?: *[Configuration](classes/configuration.md)*): `object`

*Defined in [api.ts:6350](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/cost-management/api.ts#L6350)*

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

*Defined in [api.ts:6408](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/cost-management/api.ts#L6408)*

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

*Defined in [api.ts:6386](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/cost-management/api.ts#L6386)*

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

*Defined in [api.ts:6446](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/cost-management/api.ts#L6446)*

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

*Defined in [api.ts:6744](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/cost-management/api.ts#L6744)*

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

*Defined in [api.ts:6667](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/cost-management/api.ts#L6667)*

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

*Defined in [api.ts:6874](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/cost-management/api.ts#L6874)*

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

*Defined in [api.ts:7175](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/cost-management/api.ts#L7175)*

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

*Defined in [api.ts:7094](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/cost-management/api.ts#L7094)*

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

