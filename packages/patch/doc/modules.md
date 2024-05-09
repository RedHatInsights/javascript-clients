[@redhat-cloud-services/patch-client](README.md) / Exports

# @redhat-cloud-services/patch-client

## Table of contents

### Classes

- [Configuration](classes/Configuration.md)
- [DefaultApi](classes/DefaultApi.md)

### Interfaces

- [ConfigurationParameters](interfaces/ConfigurationParameters.md)
- [ControllersAdvisoriesResponse](interfaces/ControllersAdvisoriesResponse.md)
- [ControllersAdvisoriesSystemsResponse](interfaces/ControllersAdvisoriesSystemsResponse.md)
- [ControllersAdvisoryDetailAttributesV1](interfaces/ControllersAdvisoryDetailAttributesV1.md)
- [ControllersAdvisoryDetailItemV1](interfaces/ControllersAdvisoryDetailItemV1.md)
- [ControllersAdvisoryDetailResponseV1](interfaces/ControllersAdvisoryDetailResponseV1.md)
- [ControllersAdvisoryInlineItem](interfaces/ControllersAdvisoryInlineItem.md)
- [ControllersAdvisoryItem](interfaces/ControllersAdvisoryItem.md)
- [ControllersAdvisoryItemAttributes](interfaces/ControllersAdvisoryItemAttributes.md)
- [ControllersAdvisorySystemsResponse](interfaces/ControllersAdvisorySystemsResponse.md)
- [ControllersBaselineConfig](interfaces/ControllersBaselineConfig.md)
- [ControllersBaselineDetailAttributes](interfaces/ControllersBaselineDetailAttributes.md)
- [ControllersBaselineDetailItem](interfaces/ControllersBaselineDetailItem.md)
- [ControllersBaselineDetailResponse](interfaces/ControllersBaselineDetailResponse.md)
- [ControllersBaselineItem](interfaces/ControllersBaselineItem.md)
- [ControllersBaselineItemAttributes](interfaces/ControllersBaselineItemAttributes.md)
- [ControllersBaselineSystemAttributes](interfaces/ControllersBaselineSystemAttributes.md)
- [ControllersBaselineSystemItem](interfaces/ControllersBaselineSystemItem.md)
- [ControllersBaselineSystemsRemoveRequest](interfaces/ControllersBaselineSystemsRemoveRequest.md)
- [ControllersBaselineSystemsResponse](interfaces/ControllersBaselineSystemsResponse.md)
- [ControllersBaselinesResponse](interfaces/ControllersBaselinesResponse.md)
- [ControllersCreateBaselineRequest](interfaces/ControllersCreateBaselineRequest.md)
- [ControllersCreateBaselineResponse](interfaces/ControllersCreateBaselineResponse.md)
- [ControllersDeleteBaselineResponse](interfaces/ControllersDeleteBaselineResponse.md)
- [ControllersFilterData](interfaces/ControllersFilterData.md)
- [ControllersLinks](interfaces/ControllersLinks.md)
- [ControllersListMeta](interfaces/ControllersListMeta.md)
- [ControllersPackageDetailAttributes](interfaces/ControllersPackageDetailAttributes.md)
- [ControllersPackageDetailItem](interfaces/ControllersPackageDetailItem.md)
- [ControllersPackageDetailResponse](interfaces/ControllersPackageDetailResponse.md)
- [ControllersPackageItem](interfaces/ControllersPackageItem.md)
- [ControllersPackageSystemItem](interfaces/ControllersPackageSystemItem.md)
- [ControllersPackageSystemsResponse](interfaces/ControllersPackageSystemsResponse.md)
- [ControllersPackageVersionItem](interfaces/ControllersPackageVersionItem.md)
- [ControllersPackageVersionsResponse](interfaces/ControllersPackageVersionsResponse.md)
- [ControllersPackagesResponse](interfaces/ControllersPackagesResponse.md)
- [ControllersSystemAdvisoriesDBLookup](interfaces/ControllersSystemAdvisoriesDBLookup.md)
- [ControllersSystemAdvisoriesResponse](interfaces/ControllersSystemAdvisoriesResponse.md)
- [ControllersSystemAdvisoryItem](interfaces/ControllersSystemAdvisoryItem.md)
- [ControllersSystemAdvisoryItemAttributes](interfaces/ControllersSystemAdvisoryItemAttributes.md)
- [ControllersSystemDetailResponse](interfaces/ControllersSystemDetailResponse.md)
- [ControllersSystemInlineItem](interfaces/ControllersSystemInlineItem.md)
- [ControllersSystemItem](interfaces/ControllersSystemItem.md)
- [ControllersSystemItemAttributes](interfaces/ControllersSystemItemAttributes.md)
- [ControllersSystemPackageData](interfaces/ControllersSystemPackageData.md)
- [ControllersSystemPackageInline](interfaces/ControllersSystemPackageInline.md)
- [ControllersSystemPackageResponse](interfaces/ControllersSystemPackageResponse.md)
- [ControllersSystemTag](interfaces/ControllersSystemTag.md)
- [ControllersSystemsAdvisoriesRequest](interfaces/ControllersSystemsAdvisoriesRequest.md)
- [ControllersSystemsAdvisoriesResponse](interfaces/ControllersSystemsAdvisoriesResponse.md)
- [ControllersSystemsResponse](interfaces/ControllersSystemsResponse.md)
- [ControllersUpdateBaselineRequest](interfaces/ControllersUpdateBaselineRequest.md)
- [ControllersUpdateBaselineResponse](interfaces/ControllersUpdateBaselineResponse.md)
- [ModelsPackageUpdate](interfaces/ModelsPackageUpdate.md)
- [UtilsErrorResponse](interfaces/UtilsErrorResponse.md)

### Functions

- [DefaultApiAxiosParamCreator](modules.md#defaultapiaxiosparamcreator)
- [DefaultApiFactory](modules.md#defaultapifactory)
- [DefaultApiFp](modules.md#defaultapifp)

## Functions

### DefaultApiAxiosParamCreator

▸ **DefaultApiAxiosParamCreator**(`configuration?`): `Object`

DefaultApi - axios parameter creator

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuration?` | [`Configuration`](classes/Configuration.md) |

#### Returns

`Object`

| Name | Type | Description |
| :------ | :------ | :------ |
| `baselineDelete` | (`baselineId`: `number`, `options?`: `any`) => `Promise`\<`RequestArgs`\> | - |
| `createBaseline` | (`body`: [`ControllersCreateBaselineRequest`](interfaces/ControllersCreateBaselineRequest.md), `options?`: `any`) => `Promise`\<`RequestArgs`\> | - |
| `deletesystem` | (`inventoryId`: `string`, `options?`: `any`) => `Promise`\<`RequestArgs`\> | - |
| `detailAdvisory` | (`advisoryId`: `string`, `options?`: `any`) => `Promise`\<`RequestArgs`\> | - |
| `detailBaseline` | (`baselineId`: `string`, `options?`: `any`) => `Promise`\<`RequestArgs`\> | - |
| `detailSystem` | (`inventoryId`: `string`, `options?`: `any`) => `Promise`\<`RequestArgs`\> | - |
| `exportAdvisories` | (`search?`: `string`, `filterId?`: `string`, `filterDescription?`: `string`, `filterPublicDate?`: `string`, `filterSynopsis?`: `string`, `filterAdvisoryType?`: `string`, `filterAdvisoryTypeName?`: `string`, `filterSeverity?`: `string`, `filterApplicableSystems?`: `string`, `options?`: `any`) => `Promise`\<`RequestArgs`\> | - |
| `exportAdvisorySystems` | (`advisoryId`: `string`, `search?`: `string`, `filterId?`: `string`, `filterDisplayName?`: `string`, `filterLastEvaluation?`: `string`, `filterLastUpload?`: `string`, `filterRhsaCount?`: `string`, `filterRhbaCount?`: `string`, `filterRheaCount?`: `string`, `filterOtherCount?`: `string`, `filterStale?`: `string`, `filterPackagesInstalled?`: `string`, `filterPackagesUpdatable?`: `string`, `filterSystemProfileSapSystem?`: `string`, `filterSystemProfileSapSidsIn?`: `string`[], `filterSystemProfileAnsible?`: `string`, `filterSystemProfileAnsibleControllerVersion?`: `string`, `filterSystemProfileMssql?`: `string`, `filterSystemProfileMssqlVersion?`: `string`, `filterOsname?`: `string`, `filterOsminor?`: `string`, `filterOsmajor?`: `string`, `filterOs?`: `string`, `tags?`: `string`[], `options?`: `any`) => `Promise`\<`RequestArgs`\> | - |
| `exportPackageSystems` | (`packageName`: `string`, `filterSystemProfileSapSystem?`: `string`, `filterSystemProfileSapSidsIn?`: `string`[], `filterSystemProfileAnsible?`: `string`, `filterSystemProfileAnsibleControllerVersion?`: `string`, `filterSystemProfileMssql?`: `string`, `filterSystemProfileMssqlVersion?`: `string`, `tags?`: `string`[], `options?`: `any`) => `Promise`\<`RequestArgs`\> | - |
| `exportPackages` | (`sort?`: ``"id"`` \| ``"name"`` \| ``"systems_installed"`` \| ``"systems_updatable"``, `search?`: `string`, `filterName?`: `string`, `filterSystemsInstalled?`: `string`, `filterSystemsUpdatable?`: `string`, `filterSummary?`: `string`, `options?`: `any`) => `Promise`\<`RequestArgs`\> | - |
| `exportSystemAdvisories` | (`inventoryId`: `string`, `search?`: `string`, `filterId?`: `string`, `filterDescription?`: `string`, `filterPublicDate?`: `string`, `filterSynopsis?`: `string`, `filterAdvisoryType?`: `string`, `filterAdvisoryTypeName?`: `string`, `filterSeverity?`: `string`, `options?`: `any`) => `Promise`\<`RequestArgs`\> | - |
| `exportSystemPackages` | (`inventoryId`: `string`, `search?`: `string`, `filterName?`: `string`, `filterDescription?`: `string`, `filterEvra?`: `string`, `filterSummary?`: `string`, `filterUpdatable?`: `boolean`, `options?`: `any`) => `Promise`\<`RequestArgs`\> | - |
| `exportSystems` | (`search?`: `string`, `filterId?`: `string`, `filterDisplayName?`: `string`, `filterLastEvaluation?`: `string`, `filterLastUpload?`: `string`, `filterRhsaCount?`: `string`, `filterRhbaCount?`: `string`, `filterRheaCount?`: `string`, `filterOtherCount?`: `string`, `filterStale?`: `string`, `filterPackagesInstalled?`: `string`, `filterPackagesUpdatable?`: `string`, `filterSystemProfileSapSystem?`: `string`, `filterSystemProfileSapSidsIn?`: `string`[], `filterSystemProfileAnsible?`: `string`, `filterSystemProfileAnsibleControllerVersion?`: `string`, `filterSystemProfileMssql?`: `string`, `filterSystemProfileMssqlVersion?`: `string`, `filterOsname?`: `string`, `filterOsminor?`: `string`, `filterOsmajor?`: `string`, `filterBaselineName?`: `string`, `filterOs?`: `string`, `tags?`: `string`[], `options?`: `any`) => `Promise`\<`RequestArgs`\> | - |
| `latestPackage` | (`packageName`: `string`, `options?`: `any`) => `Promise`\<`RequestArgs`\> | - |
| `listAdvisories` | (`limit?`: `number`, `offset?`: `number`, `sort?`: ``"id"`` \| ``"name"`` \| ``"advisory_type"`` \| ``"synopsis"`` \| ``"public_date"`` \| ``"applicable_systems"``, `search?`: `string`, `filterId?`: `string`, `filterDescription?`: `string`, `filterPublicDate?`: `string`, `filterSynopsis?`: `string`, `filterAdvisoryType?`: `string`, `filterAdvisoryTypeName?`: `string`, `filterSeverity?`: `string`, `filterApplicableSystems?`: `string`, `tags?`: `string`[], `filterSystemProfileSapSystem?`: `string`, `filterSystemProfileSapSidsIn?`: `string`[], `filterSystemProfileAnsible?`: `string`, `filterSystemProfileAnsibleControllerVersion?`: `string`, `filterSystemProfileMssql?`: `string`, `filterSystemProfileMssqlVersion?`: `string`, `options?`: `any`) => `Promise`\<`RequestArgs`\> | - |
| `listAdvisorySystems` | (`advisoryId`: `string`, `limit?`: `number`, `offset?`: `number`, `sort?`: ``"id"`` \| ``"display_name"`` \| ``"last_evaluation"`` \| ``"last_upload"`` \| ``"rhsa_count"`` \| ``"rhba_count"`` \| ``"rhea_count"`` \| ``"other_count"`` \| ``"stale"``, `search?`: `string`, `filterId?`: `string`, `filterInsightsId?`: `string`, `filterDisplayName?`: `string`, `filterLastEvaluation?`: `string`, `filterLastUpload?`: `string`, `filterRhsaCount?`: `string`, `filterRhbaCount?`: `string`, `filterRheaCount?`: `string`, `filterOtherCount?`: `string`, `filterStale?`: `string`, `filterStaleTimestamp?`: `string`, `filterStaleWarningTimestamp?`: `string`, `filterCulledTimestamp?`: `string`, `filterCreated?`: `string`, `filterOsname?`: `string`, `filterOsminor?`: `string`, `filterOsmajor?`: `string`, `filterOs?`: `string`, `tags?`: `string`[], `filterSystemProfileSapSystem?`: `string`, `filterSystemProfileSapSidsIn?`: `string`[], `filterSystemProfileAnsible?`: `string`, `filterSystemProfileAnsibleControllerVersion?`: `string`, `filterSystemProfileMssql?`: `string`, `filterSystemProfileMssqlVersion?`: `string`, `options?`: `any`) => `Promise`\<`RequestArgs`\> | - |
| `listBaseline` | (`limit?`: `number`, `offset?`: `number`, `sort?`: ``"id"`` \| ``"name"`` \| ``"config"``, `search?`: `string`, `filterId?`: `string`, `filterName?`: `string`, `filterSystems?`: `string`, `tags?`: `string`[], `options?`: `any`) => `Promise`\<`RequestArgs`\> | - |
| `listBaselineSystems` | (`baselineId`: `number`, `limit?`: `number`, `offset?`: `number`, `sort?`: ``"id"`` \| ``"name"`` \| ``"config"``, `search?`: `string`, `filterDisplayName?`: `string`, `tags?`: `string`[], `options?`: `any`) => `Promise`\<`RequestArgs`\> | - |
| `listPackages` | (`limit?`: `number`, `offset?`: `number`, `sort?`: ``"id"`` \| ``"name"`` \| ``"systems_installed"`` \| ``"systems_updatable"``, `search?`: `string`, `filterName?`: `string`, `filterSystemsInstalled?`: `string`, `filterSystemsUpdatable?`: `string`, `filterSummary?`: `string`, `tags?`: `string`[], `filterSystemProfileSapSystem?`: `string`, `filterSystemProfileSapSidsIn?`: `string`[], `filterSystemProfileAnsible?`: `string`, `filterSystemProfileAnsibleControllerVersion?`: `string`, `filterSystemProfileMssql?`: `string`, `filterSystemProfileMssqlVersion?`: `string`, `options?`: `any`) => `Promise`\<`RequestArgs`\> | - |
| `listSystemAdvisories` | (`inventoryId`: `string`, `limit?`: `number`, `offset?`: `number`, `sort?`: ``"id"`` \| ``"name"`` \| ``"synopsis"`` \| ``"public_date"`` \| ``"type"``, `search?`: `string`, `filterId?`: `string`, `filterDescription?`: `string`, `filterPublicDate?`: `string`, `filterSynopsis?`: `string`, `filterAdvisoryType?`: `string`, `filterAdvisoryTypeName?`: `string`, `filterSeverity?`: `string`, `options?`: `any`) => `Promise`\<`RequestArgs`\> | - |
| `listSystems` | (`limit?`: `number`, `offset?`: `number`, `sort?`: ``"id"`` \| ``"display_name"`` \| ``"last_evaluation"`` \| ``"last_upload"`` \| ``"rhsa_count"`` \| ``"rhba_count"`` \| ``"rhea_count"`` \| ``"other_count"`` \| ``"stale"`` \| ``"packages_installed"`` \| ``"packages_updatable"``, `search?`: `string`, `filterInsightsId?`: `string`, `filterId?`: `string`, `filterDisplayName?`: `string`, `filterLastEvaluation?`: `string`, `filterLastUpload?`: `string`, `filterRhsaCount?`: `string`, `filterRhbaCount?`: `string`, `filterRheaCount?`: `string`, `filterOtherCount?`: `string`, `filterStale?`: `string`, `filterPackagesInstalled?`: `string`, `filterPackagesUpdatable?`: `string`, `filterStaleTimestamp?`: `string`, `filterStaleWarningTimestamp?`: `string`, `filterCulledTimestamp?`: `string`, `filterCreated?`: `string`, `filterOsname?`: `string`, `filterOsminor?`: `string`, `filterOsmajor?`: `string`, `filterBaselineName?`: `string`, `filterOs?`: `string`, `tags?`: `string`[], `filterSystemProfileSapSystem?`: `string`, `filterSystemProfileSapSidsIn?`: `string`[], `filterSystemProfileAnsible?`: `string`, `filterSystemProfileAnsibleControllerVersion?`: `string`, `filterSystemProfileMssql?`: `string`, `filterSystemProfileMssqlVersion?`: `string`, `options?`: `any`) => `Promise`\<`RequestArgs`\> | - |
| `packageSystems` | (`packageName`: `string`, `limit?`: `number`, `offset?`: `number`, `tags?`: `string`[], `filterSystemProfileSapSystem?`: `string`, `filterSystemProfileSapSidsIn?`: `string`[], `filterSystemProfileAnsible?`: `string`, `filterSystemProfileAnsibleControllerVersion?`: `string`, `filterSystemProfileMssql?`: `string`, `filterSystemProfileMssqlVersion?`: `string`, `options?`: `any`) => `Promise`\<`RequestArgs`\> | - |
| `packageVersions` | (`packageName`: `string`, `limit?`: `number`, `offset?`: `number`, `options?`: `any`) => `Promise`\<`RequestArgs`\> | - |
| `removeBaselineSystems` | (`body`: [`ControllersBaselineSystemsRemoveRequest`](interfaces/ControllersBaselineSystemsRemoveRequest.md), `options?`: `any`) => `Promise`\<`RequestArgs`\> | - |
| `systemPackages` | (`inventoryId`: `string`, `limit?`: `number`, `offset?`: `number`, `search?`: `string`, `filterName?`: `string`, `filterDescription?`: `string`, `filterEvra?`: `string`, `filterSummary?`: `string`, `filterUpdatable?`: `boolean`, `options?`: `any`) => `Promise`\<`RequestArgs`\> | - |
| `updateBaseline` | (`baselineId`: `number`, `body`: [`ControllersUpdateBaselineRequest`](interfaces/ControllersUpdateBaselineRequest.md), `options?`: `any`) => `Promise`\<`RequestArgs`\> | - |
| `viewAdvisoriesSystems` | (`body`: [`ControllersSystemsAdvisoriesRequest`](interfaces/ControllersSystemsAdvisoriesRequest.md), `options?`: `any`) => `Promise`\<`RequestArgs`\> | - |
| `viewSystemsAdvisories` | (`body`: [`ControllersSystemsAdvisoriesRequest`](interfaces/ControllersSystemsAdvisoriesRequest.md), `options?`: `any`) => `Promise`\<`RequestArgs`\> | - |

**`Export`**

#### Defined in

[api.ts:1803](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/patch/api.ts#L1803)

___

### DefaultApiFactory

▸ **DefaultApiFactory**(`configuration?`, `basePath?`, `axios?`): `Object`

DefaultApi - factory interface

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuration?` | [`Configuration`](classes/Configuration.md) |
| `basePath?` | `string` |
| `axios?` | `AxiosInstance` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `baselineDelete` | (`baselineId`: `number`, `options?`: `any`) => `AxiosPromise`\<[`ControllersDeleteBaselineResponse`](interfaces/ControllersDeleteBaselineResponse.md)\> |
| `createBaseline` | (`body`: [`ControllersCreateBaselineRequest`](interfaces/ControllersCreateBaselineRequest.md), `options?`: `any`) => `AxiosPromise`\<[`ControllersCreateBaselineResponse`](interfaces/ControllersCreateBaselineResponse.md)\> |
| `deletesystem` | (`inventoryId`: `string`, `options?`: `any`) => `AxiosPromise`\<`void`\> |
| `detailAdvisory` | (`advisoryId`: `string`, `options?`: `any`) => `AxiosPromise`\<[`ControllersAdvisoryDetailResponseV1`](interfaces/ControllersAdvisoryDetailResponseV1.md)\> |
| `detailBaseline` | (`baselineId`: `string`, `options?`: `any`) => `AxiosPromise`\<[`ControllersBaselineDetailResponse`](interfaces/ControllersBaselineDetailResponse.md)\> |
| `detailSystem` | (`inventoryId`: `string`, `options?`: `any`) => `AxiosPromise`\<[`ControllersSystemDetailResponse`](interfaces/ControllersSystemDetailResponse.md)\> |
| `exportAdvisories` | (`search?`: `string`, `filterId?`: `string`, `filterDescription?`: `string`, `filterPublicDate?`: `string`, `filterSynopsis?`: `string`, `filterAdvisoryType?`: `string`, `filterAdvisoryTypeName?`: `string`, `filterSeverity?`: `string`, `filterApplicableSystems?`: `string`, `options?`: `any`) => `AxiosPromise`\<[`ControllersAdvisoryInlineItem`](interfaces/ControllersAdvisoryInlineItem.md)[]\> |
| `exportAdvisorySystems` | (`advisoryId`: `string`, `search?`: `string`, `filterId?`: `string`, `filterDisplayName?`: `string`, `filterLastEvaluation?`: `string`, `filterLastUpload?`: `string`, `filterRhsaCount?`: `string`, `filterRhbaCount?`: `string`, `filterRheaCount?`: `string`, `filterOtherCount?`: `string`, `filterStale?`: `string`, `filterPackagesInstalled?`: `string`, `filterPackagesUpdatable?`: `string`, `filterSystemProfileSapSystem?`: `string`, `filterSystemProfileSapSidsIn?`: `string`[], `filterSystemProfileAnsible?`: `string`, `filterSystemProfileAnsibleControllerVersion?`: `string`, `filterSystemProfileMssql?`: `string`, `filterSystemProfileMssqlVersion?`: `string`, `filterOsname?`: `string`, `filterOsminor?`: `string`, `filterOsmajor?`: `string`, `filterOs?`: `string`, `tags?`: `string`[], `options?`: `any`) => `AxiosPromise`\<[`ControllersSystemInlineItem`](interfaces/ControllersSystemInlineItem.md)[]\> |
| `exportPackageSystems` | (`packageName`: `string`, `filterSystemProfileSapSystem?`: `string`, `filterSystemProfileSapSidsIn?`: `string`[], `filterSystemProfileAnsible?`: `string`, `filterSystemProfileAnsibleControllerVersion?`: `string`, `filterSystemProfileMssql?`: `string`, `filterSystemProfileMssqlVersion?`: `string`, `tags?`: `string`[], `options?`: `any`) => `AxiosPromise`\<[`ControllersPackageSystemItem`](interfaces/ControllersPackageSystemItem.md)[]\> |
| `exportPackages` | (`sort?`: ``"id"`` \| ``"name"`` \| ``"systems_installed"`` \| ``"systems_updatable"``, `search?`: `string`, `filterName?`: `string`, `filterSystemsInstalled?`: `string`, `filterSystemsUpdatable?`: `string`, `filterSummary?`: `string`, `options?`: `any`) => `AxiosPromise`\<[`ControllersPackageItem`](interfaces/ControllersPackageItem.md)[]\> |
| `exportSystemAdvisories` | (`inventoryId`: `string`, `search?`: `string`, `filterId?`: `string`, `filterDescription?`: `string`, `filterPublicDate?`: `string`, `filterSynopsis?`: `string`, `filterAdvisoryType?`: `string`, `filterAdvisoryTypeName?`: `string`, `filterSeverity?`: `string`, `options?`: `any`) => `AxiosPromise`\<[`ControllersSystemAdvisoriesDBLookup`](interfaces/ControllersSystemAdvisoriesDBLookup.md)[]\> |
| `exportSystemPackages` | (`inventoryId`: `string`, `search?`: `string`, `filterName?`: `string`, `filterDescription?`: `string`, `filterEvra?`: `string`, `filterSummary?`: `string`, `filterUpdatable?`: `boolean`, `options?`: `any`) => `AxiosPromise`\<[`ControllersSystemPackageInline`](interfaces/ControllersSystemPackageInline.md)[]\> |
| `exportSystems` | (`search?`: `string`, `filterId?`: `string`, `filterDisplayName?`: `string`, `filterLastEvaluation?`: `string`, `filterLastUpload?`: `string`, `filterRhsaCount?`: `string`, `filterRhbaCount?`: `string`, `filterRheaCount?`: `string`, `filterOtherCount?`: `string`, `filterStale?`: `string`, `filterPackagesInstalled?`: `string`, `filterPackagesUpdatable?`: `string`, `filterSystemProfileSapSystem?`: `string`, `filterSystemProfileSapSidsIn?`: `string`[], `filterSystemProfileAnsible?`: `string`, `filterSystemProfileAnsibleControllerVersion?`: `string`, `filterSystemProfileMssql?`: `string`, `filterSystemProfileMssqlVersion?`: `string`, `filterOsname?`: `string`, `filterOsminor?`: `string`, `filterOsmajor?`: `string`, `filterBaselineName?`: `string`, `filterOs?`: `string`, `tags?`: `string`[], `options?`: `any`) => `AxiosPromise`\<[`ControllersSystemInlineItem`](interfaces/ControllersSystemInlineItem.md)[]\> |
| `latestPackage` | (`packageName`: `string`, `options?`: `any`) => `AxiosPromise`\<[`ControllersPackageDetailResponse`](interfaces/ControllersPackageDetailResponse.md)\> |
| `listAdvisories` | (`limit?`: `number`, `offset?`: `number`, `sort?`: ``"id"`` \| ``"name"`` \| ``"advisory_type"`` \| ``"synopsis"`` \| ``"public_date"`` \| ``"applicable_systems"``, `search?`: `string`, `filterId?`: `string`, `filterDescription?`: `string`, `filterPublicDate?`: `string`, `filterSynopsis?`: `string`, `filterAdvisoryType?`: `string`, `filterAdvisoryTypeName?`: `string`, `filterSeverity?`: `string`, `filterApplicableSystems?`: `string`, `tags?`: `string`[], `filterSystemProfileSapSystem?`: `string`, `filterSystemProfileSapSidsIn?`: `string`[], `filterSystemProfileAnsible?`: `string`, `filterSystemProfileAnsibleControllerVersion?`: `string`, `filterSystemProfileMssql?`: `string`, `filterSystemProfileMssqlVersion?`: `string`, `options?`: `any`) => `AxiosPromise`\<[`ControllersAdvisoriesResponse`](interfaces/ControllersAdvisoriesResponse.md)\> |
| `listAdvisorySystems` | (`advisoryId`: `string`, `limit?`: `number`, `offset?`: `number`, `sort?`: ``"id"`` \| ``"display_name"`` \| ``"last_evaluation"`` \| ``"last_upload"`` \| ``"rhsa_count"`` \| ``"rhba_count"`` \| ``"rhea_count"`` \| ``"other_count"`` \| ``"stale"``, `search?`: `string`, `filterId?`: `string`, `filterInsightsId?`: `string`, `filterDisplayName?`: `string`, `filterLastEvaluation?`: `string`, `filterLastUpload?`: `string`, `filterRhsaCount?`: `string`, `filterRhbaCount?`: `string`, `filterRheaCount?`: `string`, `filterOtherCount?`: `string`, `filterStale?`: `string`, `filterStaleTimestamp?`: `string`, `filterStaleWarningTimestamp?`: `string`, `filterCulledTimestamp?`: `string`, `filterCreated?`: `string`, `filterOsname?`: `string`, `filterOsminor?`: `string`, `filterOsmajor?`: `string`, `filterOs?`: `string`, `tags?`: `string`[], `filterSystemProfileSapSystem?`: `string`, `filterSystemProfileSapSidsIn?`: `string`[], `filterSystemProfileAnsible?`: `string`, `filterSystemProfileAnsibleControllerVersion?`: `string`, `filterSystemProfileMssql?`: `string`, `filterSystemProfileMssqlVersion?`: `string`, `options?`: `any`) => `AxiosPromise`\<[`ControllersAdvisorySystemsResponse`](interfaces/ControllersAdvisorySystemsResponse.md)\> |
| `listBaseline` | (`limit?`: `number`, `offset?`: `number`, `sort?`: ``"id"`` \| ``"name"`` \| ``"config"``, `search?`: `string`, `filterId?`: `string`, `filterName?`: `string`, `filterSystems?`: `string`, `tags?`: `string`[], `options?`: `any`) => `AxiosPromise`\<[`ControllersBaselinesResponse`](interfaces/ControllersBaselinesResponse.md)\> |
| `listBaselineSystems` | (`baselineId`: `number`, `limit?`: `number`, `offset?`: `number`, `sort?`: ``"id"`` \| ``"name"`` \| ``"config"``, `search?`: `string`, `filterDisplayName?`: `string`, `tags?`: `string`[], `options?`: `any`) => `AxiosPromise`\<[`ControllersBaselineSystemsResponse`](interfaces/ControllersBaselineSystemsResponse.md)\> |
| `listPackages` | (`limit?`: `number`, `offset?`: `number`, `sort?`: ``"id"`` \| ``"name"`` \| ``"systems_installed"`` \| ``"systems_updatable"``, `search?`: `string`, `filterName?`: `string`, `filterSystemsInstalled?`: `string`, `filterSystemsUpdatable?`: `string`, `filterSummary?`: `string`, `tags?`: `string`[], `filterSystemProfileSapSystem?`: `string`, `filterSystemProfileSapSidsIn?`: `string`[], `filterSystemProfileAnsible?`: `string`, `filterSystemProfileAnsibleControllerVersion?`: `string`, `filterSystemProfileMssql?`: `string`, `filterSystemProfileMssqlVersion?`: `string`, `options?`: `any`) => `AxiosPromise`\<[`ControllersPackagesResponse`](interfaces/ControllersPackagesResponse.md)\> |
| `listSystemAdvisories` | (`inventoryId`: `string`, `limit?`: `number`, `offset?`: `number`, `sort?`: ``"id"`` \| ``"name"`` \| ``"synopsis"`` \| ``"public_date"`` \| ``"type"``, `search?`: `string`, `filterId?`: `string`, `filterDescription?`: `string`, `filterPublicDate?`: `string`, `filterSynopsis?`: `string`, `filterAdvisoryType?`: `string`, `filterAdvisoryTypeName?`: `string`, `filterSeverity?`: `string`, `options?`: `any`) => `AxiosPromise`\<[`ControllersSystemAdvisoriesResponse`](interfaces/ControllersSystemAdvisoriesResponse.md)\> |
| `listSystems` | (`limit?`: `number`, `offset?`: `number`, `sort?`: ``"id"`` \| ``"display_name"`` \| ``"last_evaluation"`` \| ``"last_upload"`` \| ``"rhsa_count"`` \| ``"rhba_count"`` \| ``"rhea_count"`` \| ``"other_count"`` \| ``"stale"`` \| ``"packages_installed"`` \| ``"packages_updatable"``, `search?`: `string`, `filterInsightsId?`: `string`, `filterId?`: `string`, `filterDisplayName?`: `string`, `filterLastEvaluation?`: `string`, `filterLastUpload?`: `string`, `filterRhsaCount?`: `string`, `filterRhbaCount?`: `string`, `filterRheaCount?`: `string`, `filterOtherCount?`: `string`, `filterStale?`: `string`, `filterPackagesInstalled?`: `string`, `filterPackagesUpdatable?`: `string`, `filterStaleTimestamp?`: `string`, `filterStaleWarningTimestamp?`: `string`, `filterCulledTimestamp?`: `string`, `filterCreated?`: `string`, `filterOsname?`: `string`, `filterOsminor?`: `string`, `filterOsmajor?`: `string`, `filterBaselineName?`: `string`, `filterOs?`: `string`, `tags?`: `string`[], `filterSystemProfileSapSystem?`: `string`, `filterSystemProfileSapSidsIn?`: `string`[], `filterSystemProfileAnsible?`: `string`, `filterSystemProfileAnsibleControllerVersion?`: `string`, `filterSystemProfileMssql?`: `string`, `filterSystemProfileMssqlVersion?`: `string`, `options?`: `any`) => `AxiosPromise`\<[`ControllersSystemsResponse`](interfaces/ControllersSystemsResponse.md)\> |
| `packageSystems` | (`packageName`: `string`, `limit?`: `number`, `offset?`: `number`, `tags?`: `string`[], `filterSystemProfileSapSystem?`: `string`, `filterSystemProfileSapSidsIn?`: `string`[], `filterSystemProfileAnsible?`: `string`, `filterSystemProfileAnsibleControllerVersion?`: `string`, `filterSystemProfileMssql?`: `string`, `filterSystemProfileMssqlVersion?`: `string`, `options?`: `any`) => `AxiosPromise`\<[`ControllersPackageSystemsResponse`](interfaces/ControllersPackageSystemsResponse.md)\> |
| `packageVersions` | (`packageName`: `string`, `limit?`: `number`, `offset?`: `number`, `options?`: `any`) => `AxiosPromise`\<[`ControllersPackageVersionsResponse`](interfaces/ControllersPackageVersionsResponse.md)\> |
| `removeBaselineSystems` | (`body`: [`ControllersBaselineSystemsRemoveRequest`](interfaces/ControllersBaselineSystemsRemoveRequest.md), `options?`: `any`) => `AxiosPromise`\<`void`\> |
| `systemPackages` | (`inventoryId`: `string`, `limit?`: `number`, `offset?`: `number`, `search?`: `string`, `filterName?`: `string`, `filterDescription?`: `string`, `filterEvra?`: `string`, `filterSummary?`: `string`, `filterUpdatable?`: `boolean`, `options?`: `any`) => `AxiosPromise`\<[`ControllersSystemPackageResponse`](interfaces/ControllersSystemPackageResponse.md)\> |
| `updateBaseline` | (`baselineId`: `number`, `body`: [`ControllersUpdateBaselineRequest`](interfaces/ControllersUpdateBaselineRequest.md), `options?`: `any`) => `AxiosPromise`\<[`ControllersUpdateBaselineResponse`](interfaces/ControllersUpdateBaselineResponse.md)\> |
| `viewAdvisoriesSystems` | (`body`: [`ControllersSystemsAdvisoriesRequest`](interfaces/ControllersSystemsAdvisoriesRequest.md), `options?`: `any`) => `AxiosPromise`\<[`ControllersAdvisoriesSystemsResponse`](interfaces/ControllersAdvisoriesSystemsResponse.md)\> |
| `viewSystemsAdvisories` | (`body`: [`ControllersSystemsAdvisoriesRequest`](interfaces/ControllersSystemsAdvisoriesRequest.md), `options?`: `any`) => `AxiosPromise`\<[`ControllersSystemsAdvisoriesResponse`](interfaces/ControllersSystemsAdvisoriesResponse.md)\> |

**`Export`**

#### Defined in

[api.ts:4750](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/patch/api.ts#L4750)

___

### DefaultApiFp

▸ **DefaultApiFp**(`configuration?`): `Object`

DefaultApi - functional programming interface

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuration?` | [`Configuration`](classes/Configuration.md) |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `baselineDelete` | (`baselineId`: `number`, `options?`: `any`) => `Promise`\<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`\<[`ControllersDeleteBaselineResponse`](interfaces/ControllersDeleteBaselineResponse.md)\>\> |
| `createBaseline` | (`body`: [`ControllersCreateBaselineRequest`](interfaces/ControllersCreateBaselineRequest.md), `options?`: `any`) => `Promise`\<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`\<[`ControllersCreateBaselineResponse`](interfaces/ControllersCreateBaselineResponse.md)\>\> |
| `deletesystem` | (`inventoryId`: `string`, `options?`: `any`) => `Promise`\<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`\<`void`\>\> |
| `detailAdvisory` | (`advisoryId`: `string`, `options?`: `any`) => `Promise`\<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`\<[`ControllersAdvisoryDetailResponseV1`](interfaces/ControllersAdvisoryDetailResponseV1.md)\>\> |
| `detailBaseline` | (`baselineId`: `string`, `options?`: `any`) => `Promise`\<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`\<[`ControllersBaselineDetailResponse`](interfaces/ControllersBaselineDetailResponse.md)\>\> |
| `detailSystem` | (`inventoryId`: `string`, `options?`: `any`) => `Promise`\<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`\<[`ControllersSystemDetailResponse`](interfaces/ControllersSystemDetailResponse.md)\>\> |
| `exportAdvisories` | (`search?`: `string`, `filterId?`: `string`, `filterDescription?`: `string`, `filterPublicDate?`: `string`, `filterSynopsis?`: `string`, `filterAdvisoryType?`: `string`, `filterAdvisoryTypeName?`: `string`, `filterSeverity?`: `string`, `filterApplicableSystems?`: `string`, `options?`: `any`) => `Promise`\<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`\<[`ControllersAdvisoryInlineItem`](interfaces/ControllersAdvisoryInlineItem.md)[]\>\> |
| `exportAdvisorySystems` | (`advisoryId`: `string`, `search?`: `string`, `filterId?`: `string`, `filterDisplayName?`: `string`, `filterLastEvaluation?`: `string`, `filterLastUpload?`: `string`, `filterRhsaCount?`: `string`, `filterRhbaCount?`: `string`, `filterRheaCount?`: `string`, `filterOtherCount?`: `string`, `filterStale?`: `string`, `filterPackagesInstalled?`: `string`, `filterPackagesUpdatable?`: `string`, `filterSystemProfileSapSystem?`: `string`, `filterSystemProfileSapSidsIn?`: `string`[], `filterSystemProfileAnsible?`: `string`, `filterSystemProfileAnsibleControllerVersion?`: `string`, `filterSystemProfileMssql?`: `string`, `filterSystemProfileMssqlVersion?`: `string`, `filterOsname?`: `string`, `filterOsminor?`: `string`, `filterOsmajor?`: `string`, `filterOs?`: `string`, `tags?`: `string`[], `options?`: `any`) => `Promise`\<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`\<[`ControllersSystemInlineItem`](interfaces/ControllersSystemInlineItem.md)[]\>\> |
| `exportPackageSystems` | (`packageName`: `string`, `filterSystemProfileSapSystem?`: `string`, `filterSystemProfileSapSidsIn?`: `string`[], `filterSystemProfileAnsible?`: `string`, `filterSystemProfileAnsibleControllerVersion?`: `string`, `filterSystemProfileMssql?`: `string`, `filterSystemProfileMssqlVersion?`: `string`, `tags?`: `string`[], `options?`: `any`) => `Promise`\<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`\<[`ControllersPackageSystemItem`](interfaces/ControllersPackageSystemItem.md)[]\>\> |
| `exportPackages` | (`sort?`: ``"id"`` \| ``"name"`` \| ``"systems_installed"`` \| ``"systems_updatable"``, `search?`: `string`, `filterName?`: `string`, `filterSystemsInstalled?`: `string`, `filterSystemsUpdatable?`: `string`, `filterSummary?`: `string`, `options?`: `any`) => `Promise`\<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`\<[`ControllersPackageItem`](interfaces/ControllersPackageItem.md)[]\>\> |
| `exportSystemAdvisories` | (`inventoryId`: `string`, `search?`: `string`, `filterId?`: `string`, `filterDescription?`: `string`, `filterPublicDate?`: `string`, `filterSynopsis?`: `string`, `filterAdvisoryType?`: `string`, `filterAdvisoryTypeName?`: `string`, `filterSeverity?`: `string`, `options?`: `any`) => `Promise`\<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`\<[`ControllersSystemAdvisoriesDBLookup`](interfaces/ControllersSystemAdvisoriesDBLookup.md)[]\>\> |
| `exportSystemPackages` | (`inventoryId`: `string`, `search?`: `string`, `filterName?`: `string`, `filterDescription?`: `string`, `filterEvra?`: `string`, `filterSummary?`: `string`, `filterUpdatable?`: `boolean`, `options?`: `any`) => `Promise`\<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`\<[`ControllersSystemPackageInline`](interfaces/ControllersSystemPackageInline.md)[]\>\> |
| `exportSystems` | (`search?`: `string`, `filterId?`: `string`, `filterDisplayName?`: `string`, `filterLastEvaluation?`: `string`, `filterLastUpload?`: `string`, `filterRhsaCount?`: `string`, `filterRhbaCount?`: `string`, `filterRheaCount?`: `string`, `filterOtherCount?`: `string`, `filterStale?`: `string`, `filterPackagesInstalled?`: `string`, `filterPackagesUpdatable?`: `string`, `filterSystemProfileSapSystem?`: `string`, `filterSystemProfileSapSidsIn?`: `string`[], `filterSystemProfileAnsible?`: `string`, `filterSystemProfileAnsibleControllerVersion?`: `string`, `filterSystemProfileMssql?`: `string`, `filterSystemProfileMssqlVersion?`: `string`, `filterOsname?`: `string`, `filterOsminor?`: `string`, `filterOsmajor?`: `string`, `filterBaselineName?`: `string`, `filterOs?`: `string`, `tags?`: `string`[], `options?`: `any`) => `Promise`\<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`\<[`ControllersSystemInlineItem`](interfaces/ControllersSystemInlineItem.md)[]\>\> |
| `latestPackage` | (`packageName`: `string`, `options?`: `any`) => `Promise`\<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`\<[`ControllersPackageDetailResponse`](interfaces/ControllersPackageDetailResponse.md)\>\> |
| `listAdvisories` | (`limit?`: `number`, `offset?`: `number`, `sort?`: ``"id"`` \| ``"name"`` \| ``"advisory_type"`` \| ``"synopsis"`` \| ``"public_date"`` \| ``"applicable_systems"``, `search?`: `string`, `filterId?`: `string`, `filterDescription?`: `string`, `filterPublicDate?`: `string`, `filterSynopsis?`: `string`, `filterAdvisoryType?`: `string`, `filterAdvisoryTypeName?`: `string`, `filterSeverity?`: `string`, `filterApplicableSystems?`: `string`, `tags?`: `string`[], `filterSystemProfileSapSystem?`: `string`, `filterSystemProfileSapSidsIn?`: `string`[], `filterSystemProfileAnsible?`: `string`, `filterSystemProfileAnsibleControllerVersion?`: `string`, `filterSystemProfileMssql?`: `string`, `filterSystemProfileMssqlVersion?`: `string`, `options?`: `any`) => `Promise`\<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`\<[`ControllersAdvisoriesResponse`](interfaces/ControllersAdvisoriesResponse.md)\>\> |
| `listAdvisorySystems` | (`advisoryId`: `string`, `limit?`: `number`, `offset?`: `number`, `sort?`: ``"id"`` \| ``"display_name"`` \| ``"last_evaluation"`` \| ``"last_upload"`` \| ``"rhsa_count"`` \| ``"rhba_count"`` \| ``"rhea_count"`` \| ``"other_count"`` \| ``"stale"``, `search?`: `string`, `filterId?`: `string`, `filterInsightsId?`: `string`, `filterDisplayName?`: `string`, `filterLastEvaluation?`: `string`, `filterLastUpload?`: `string`, `filterRhsaCount?`: `string`, `filterRhbaCount?`: `string`, `filterRheaCount?`: `string`, `filterOtherCount?`: `string`, `filterStale?`: `string`, `filterStaleTimestamp?`: `string`, `filterStaleWarningTimestamp?`: `string`, `filterCulledTimestamp?`: `string`, `filterCreated?`: `string`, `filterOsname?`: `string`, `filterOsminor?`: `string`, `filterOsmajor?`: `string`, `filterOs?`: `string`, `tags?`: `string`[], `filterSystemProfileSapSystem?`: `string`, `filterSystemProfileSapSidsIn?`: `string`[], `filterSystemProfileAnsible?`: `string`, `filterSystemProfileAnsibleControllerVersion?`: `string`, `filterSystemProfileMssql?`: `string`, `filterSystemProfileMssqlVersion?`: `string`, `options?`: `any`) => `Promise`\<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`\<[`ControllersAdvisorySystemsResponse`](interfaces/ControllersAdvisorySystemsResponse.md)\>\> |
| `listBaseline` | (`limit?`: `number`, `offset?`: `number`, `sort?`: ``"id"`` \| ``"name"`` \| ``"config"``, `search?`: `string`, `filterId?`: `string`, `filterName?`: `string`, `filterSystems?`: `string`, `tags?`: `string`[], `options?`: `any`) => `Promise`\<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`\<[`ControllersBaselinesResponse`](interfaces/ControllersBaselinesResponse.md)\>\> |
| `listBaselineSystems` | (`baselineId`: `number`, `limit?`: `number`, `offset?`: `number`, `sort?`: ``"id"`` \| ``"name"`` \| ``"config"``, `search?`: `string`, `filterDisplayName?`: `string`, `tags?`: `string`[], `options?`: `any`) => `Promise`\<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`\<[`ControllersBaselineSystemsResponse`](interfaces/ControllersBaselineSystemsResponse.md)\>\> |
| `listPackages` | (`limit?`: `number`, `offset?`: `number`, `sort?`: ``"id"`` \| ``"name"`` \| ``"systems_installed"`` \| ``"systems_updatable"``, `search?`: `string`, `filterName?`: `string`, `filterSystemsInstalled?`: `string`, `filterSystemsUpdatable?`: `string`, `filterSummary?`: `string`, `tags?`: `string`[], `filterSystemProfileSapSystem?`: `string`, `filterSystemProfileSapSidsIn?`: `string`[], `filterSystemProfileAnsible?`: `string`, `filterSystemProfileAnsibleControllerVersion?`: `string`, `filterSystemProfileMssql?`: `string`, `filterSystemProfileMssqlVersion?`: `string`, `options?`: `any`) => `Promise`\<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`\<[`ControllersPackagesResponse`](interfaces/ControllersPackagesResponse.md)\>\> |
| `listSystemAdvisories` | (`inventoryId`: `string`, `limit?`: `number`, `offset?`: `number`, `sort?`: ``"id"`` \| ``"name"`` \| ``"synopsis"`` \| ``"public_date"`` \| ``"type"``, `search?`: `string`, `filterId?`: `string`, `filterDescription?`: `string`, `filterPublicDate?`: `string`, `filterSynopsis?`: `string`, `filterAdvisoryType?`: `string`, `filterAdvisoryTypeName?`: `string`, `filterSeverity?`: `string`, `options?`: `any`) => `Promise`\<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`\<[`ControllersSystemAdvisoriesResponse`](interfaces/ControllersSystemAdvisoriesResponse.md)\>\> |
| `listSystems` | (`limit?`: `number`, `offset?`: `number`, `sort?`: ``"id"`` \| ``"display_name"`` \| ``"last_evaluation"`` \| ``"last_upload"`` \| ``"rhsa_count"`` \| ``"rhba_count"`` \| ``"rhea_count"`` \| ``"other_count"`` \| ``"stale"`` \| ``"packages_installed"`` \| ``"packages_updatable"``, `search?`: `string`, `filterInsightsId?`: `string`, `filterId?`: `string`, `filterDisplayName?`: `string`, `filterLastEvaluation?`: `string`, `filterLastUpload?`: `string`, `filterRhsaCount?`: `string`, `filterRhbaCount?`: `string`, `filterRheaCount?`: `string`, `filterOtherCount?`: `string`, `filterStale?`: `string`, `filterPackagesInstalled?`: `string`, `filterPackagesUpdatable?`: `string`, `filterStaleTimestamp?`: `string`, `filterStaleWarningTimestamp?`: `string`, `filterCulledTimestamp?`: `string`, `filterCreated?`: `string`, `filterOsname?`: `string`, `filterOsminor?`: `string`, `filterOsmajor?`: `string`, `filterBaselineName?`: `string`, `filterOs?`: `string`, `tags?`: `string`[], `filterSystemProfileSapSystem?`: `string`, `filterSystemProfileSapSidsIn?`: `string`[], `filterSystemProfileAnsible?`: `string`, `filterSystemProfileAnsibleControllerVersion?`: `string`, `filterSystemProfileMssql?`: `string`, `filterSystemProfileMssqlVersion?`: `string`, `options?`: `any`) => `Promise`\<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`\<[`ControllersSystemsResponse`](interfaces/ControllersSystemsResponse.md)\>\> |
| `packageSystems` | (`packageName`: `string`, `limit?`: `number`, `offset?`: `number`, `tags?`: `string`[], `filterSystemProfileSapSystem?`: `string`, `filterSystemProfileSapSidsIn?`: `string`[], `filterSystemProfileAnsible?`: `string`, `filterSystemProfileAnsibleControllerVersion?`: `string`, `filterSystemProfileMssql?`: `string`, `filterSystemProfileMssqlVersion?`: `string`, `options?`: `any`) => `Promise`\<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`\<[`ControllersPackageSystemsResponse`](interfaces/ControllersPackageSystemsResponse.md)\>\> |
| `packageVersions` | (`packageName`: `string`, `limit?`: `number`, `offset?`: `number`, `options?`: `any`) => `Promise`\<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`\<[`ControllersPackageVersionsResponse`](interfaces/ControllersPackageVersionsResponse.md)\>\> |
| `removeBaselineSystems` | (`body`: [`ControllersBaselineSystemsRemoveRequest`](interfaces/ControllersBaselineSystemsRemoveRequest.md), `options?`: `any`) => `Promise`\<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`\<`void`\>\> |
| `systemPackages` | (`inventoryId`: `string`, `limit?`: `number`, `offset?`: `number`, `search?`: `string`, `filterName?`: `string`, `filterDescription?`: `string`, `filterEvra?`: `string`, `filterSummary?`: `string`, `filterUpdatable?`: `boolean`, `options?`: `any`) => `Promise`\<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`\<[`ControllersSystemPackageResponse`](interfaces/ControllersSystemPackageResponse.md)\>\> |
| `updateBaseline` | (`baselineId`: `number`, `body`: [`ControllersUpdateBaselineRequest`](interfaces/ControllersUpdateBaselineRequest.md), `options?`: `any`) => `Promise`\<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`\<[`ControllersUpdateBaselineResponse`](interfaces/ControllersUpdateBaselineResponse.md)\>\> |
| `viewAdvisoriesSystems` | (`body`: [`ControllersSystemsAdvisoriesRequest`](interfaces/ControllersSystemsAdvisoriesRequest.md), `options?`: `any`) => `Promise`\<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`\<[`ControllersAdvisoriesSystemsResponse`](interfaces/ControllersAdvisoriesSystemsResponse.md)\>\> |
| `viewSystemsAdvisories` | (`body`: [`ControllersSystemsAdvisoriesRequest`](interfaces/ControllersSystemsAdvisoriesRequest.md), `options?`: `any`) => `Promise`\<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`\<[`ControllersSystemsAdvisoriesResponse`](interfaces/ControllersSystemsAdvisoriesResponse.md)\>\> |

**`Export`**

#### Defined in

[api.ts:4133](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/patch/api.ts#L4133)
