[@redhat-cloud-services/patch-client](README.md) › [Globals](globals.md)

# @redhat-cloud-services/patch-client

## Index

### Classes

* [BaseAPI](classes/baseapi.md)
* [Configuration](classes/configuration.md)
* [DefaultApi](classes/defaultapi.md)
* [RequiredError](classes/requirederror.md)

### Interfaces

* [ConfigurationParameters](interfaces/configurationparameters.md)
* [ControllersAdvisoriesResponse](interfaces/controllersadvisoriesresponse.md)
* [ControllersAdvisoriesSystemsResponse](interfaces/controllersadvisoriessystemsresponse.md)
* [ControllersAdvisoryDetailAttributes](interfaces/controllersadvisorydetailattributes.md)
* [ControllersAdvisoryDetailItem](interfaces/controllersadvisorydetailitem.md)
* [ControllersAdvisoryDetailResponse](interfaces/controllersadvisorydetailresponse.md)
* [ControllersAdvisoryInlineItem](interfaces/controllersadvisoryinlineitem.md)
* [ControllersAdvisoryItem](interfaces/controllersadvisoryitem.md)
* [ControllersAdvisoryItemAttributes](interfaces/controllersadvisoryitemattributes.md)
* [ControllersAdvisorySystemsResponse](interfaces/controllersadvisorysystemsresponse.md)
* [ControllersFilterData](interfaces/controllersfilterdata.md)
* [ControllersLinks](interfaces/controllerslinks.md)
* [ControllersListMeta](interfaces/controllerslistmeta.md)
* [ControllersPackageDetailAttributes](interfaces/controllerspackagedetailattributes.md)
* [ControllersPackageDetailItem](interfaces/controllerspackagedetailitem.md)
* [ControllersPackageDetailResponse](interfaces/controllerspackagedetailresponse.md)
* [ControllersPackageItem](interfaces/controllerspackageitem.md)
* [ControllersPackageSystemItem](interfaces/controllerspackagesystemitem.md)
* [ControllersPackageSystemsResponse](interfaces/controllerspackagesystemsresponse.md)
* [ControllersPackageVersionItem](interfaces/controllerspackageversionitem.md)
* [ControllersPackageVersionsResponse](interfaces/controllerspackageversionsresponse.md)
* [ControllersPackagesResponse](interfaces/controllerspackagesresponse.md)
* [ControllersSystemAdvisoriesDBLookup](interfaces/controllerssystemadvisoriesdblookup.md)
* [ControllersSystemAdvisoriesResponse](interfaces/controllerssystemadvisoriesresponse.md)
* [ControllersSystemAdvisoryItem](interfaces/controllerssystemadvisoryitem.md)
* [ControllersSystemAdvisoryItemAttributes](interfaces/controllerssystemadvisoryitemattributes.md)
* [ControllersSystemDetailResponse](interfaces/controllerssystemdetailresponse.md)
* [ControllersSystemInlineItem](interfaces/controllerssysteminlineitem.md)
* [ControllersSystemItem](interfaces/controllerssystemitem.md)
* [ControllersSystemItemAttributes](interfaces/controllerssystemitemattributes.md)
* [ControllersSystemPackageData](interfaces/controllerssystempackagedata.md)
* [ControllersSystemPackageInline](interfaces/controllerssystempackageinline.md)
* [ControllersSystemPackageResponse](interfaces/controllerssystempackageresponse.md)
* [ControllersSystemTag](interfaces/controllerssystemtag.md)
* [ControllersSystemsAdvisoriesRequest](interfaces/controllerssystemsadvisoriesrequest.md)
* [ControllersSystemsAdvisoriesResponse](interfaces/controllerssystemsadvisoriesresponse.md)
* [ControllersSystemsResponse](interfaces/controllerssystemsresponse.md)
* [ModelsPackageUpdate](interfaces/modelspackageupdate.md)
* [RequestArgs](interfaces/requestargs.md)

### Variables

* [BASE_PATH](globals.md#const-base_path)

### Functions

* [DefaultApiAxiosParamCreator](globals.md#const-defaultapiaxiosparamcreator)
* [DefaultApiFactory](globals.md#const-defaultapifactory)
* [DefaultApiFp](globals.md#const-defaultapifp)

### Object literals

* [COLLECTION_FORMATS](globals.md#const-collection_formats)

## Variables

### `Const` BASE_PATH

• **BASE_PATH**: *string* = "https://cloud.redhat.com".replace(/\/+$/, "")

*Defined in [packages/patch/base.ts:20](https://github.com/RedHatInsights/javascript-clients/blob/9192949/packages/patch/base.ts#L20)*

## Functions

### `Const` DefaultApiAxiosParamCreator

▸ **DefaultApiAxiosParamCreator**(`configuration?`: [Configuration](classes/configuration.md)): *object*

*Defined in [packages/patch/api.ts:1432](https://github.com/RedHatInsights/javascript-clients/blob/9192949/packages/patch/api.ts#L1432)*

DefaultApi - axios parameter creator

**`export`** 

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](classes/configuration.md) |

**Returns:** *object*

* **deletesystem**(`inventoryId`: string, `options`: any): *Promise‹[RequestArgs](interfaces/requestargs.md)›*

* **detailAdvisory**(`advisoryId`: string, `options`: any): *Promise‹[RequestArgs](interfaces/requestargs.md)›*

* **detailSystem**(`inventoryId`: string, `options`: any): *Promise‹[RequestArgs](interfaces/requestargs.md)›*

* **exportAdvisories**(`search?`: string, `filterId?`: string, `filterDescription?`: string, `filterPublicDate?`: string, `filterSynopsis?`: string, `filterAdvisoryType?`: string, `filterAdvisoryTypeName?`: string, `filterSeverity?`: string, `filterApplicableSystems?`: string, `options`: any): *Promise‹[RequestArgs](interfaces/requestargs.md)›*

* **exportAdvisorySystems**(`advisoryId`: string, `search?`: string, `filterId?`: string, `filterDisplayName?`: string, `filterLastEvaluation?`: string, `filterLastUpload?`: string, `filterRhsaCount?`: string, `filterRhbaCount?`: string, `filterRheaCount?`: string, `filterOtherCount?`: string, `filterStale?`: string, `filterPackagesInstalled?`: string, `filterPackagesUpdatable?`: string, `filterSystemProfileSapSystem?`: string, `filterSystemProfileSapSidsIn?`: Array‹string›, `filterOsname?`: string, `filterOsminor?`: string, `filterOsmajor?`: string, `filterOs?`: string, `tags?`: Array‹string›, `options`: any): *Promise‹[RequestArgs](interfaces/requestargs.md)›*

* **exportPackageSystems**(`packageName`: string, `filterSystemProfileSapSystem?`: string, `filterSystemProfileSapSidsIn?`: Array‹string›, `tags?`: Array‹string›, `options`: any): *Promise‹[RequestArgs](interfaces/requestargs.md)›*

* **exportPackages**(`sort?`: "id" | "name" | "systems_installed" | "systems_updatable", `search?`: string, `filterName?`: string, `filterSystemsInstalled?`: string, `filterSystemsUpdatable?`: string, `filterSummary?`: string, `options`: any): *Promise‹[RequestArgs](interfaces/requestargs.md)›*

* **exportSystemAdvisories**(`inventoryId`: string, `search?`: string, `filterId?`: string, `filterDescription?`: string, `filterPublicDate?`: string, `filterSynopsis?`: string, `filterAdvisoryType?`: string, `filterAdvisoryTypeName?`: string, `filterSeverity?`: string, `options`: any): *Promise‹[RequestArgs](interfaces/requestargs.md)›*

* **exportSystemPackages**(`inventoryId`: string, `search?`: string, `filterName?`: string, `filterDescription?`: string, `filterEvra?`: string, `filterSummary?`: string, `filterUpdatable?`: boolean, `options`: any): *Promise‹[RequestArgs](interfaces/requestargs.md)›*

* **exportSystems**(`search?`: string, `filterId?`: string, `filterDisplayName?`: string, `filterLastEvaluation?`: string, `filterLastUpload?`: string, `filterRhsaCount?`: string, `filterRhbaCount?`: string, `filterRheaCount?`: string, `filterOtherCount?`: string, `filterStale?`: string, `filterPackagesInstalled?`: string, `filterPackagesUpdatable?`: string, `filterSystemProfileSapSystem?`: string, `filterSystemProfileSapSidsIn?`: Array‹string›, `filterOsname?`: string, `filterOsminor?`: string, `filterOsmajor?`: string, `filterOs?`: string, `tags?`: Array‹string›, `options`: any): *Promise‹[RequestArgs](interfaces/requestargs.md)›*

* **latestPackage**(`packageName`: string, `options`: any): *Promise‹[RequestArgs](interfaces/requestargs.md)›*

* **listAdvisories**(`limit?`: number, `offset?`: number, `sort?`: "id" | "name" | "advisory_type" | "synopsis" | "public_date" | "applicable_systems", `search?`: string, `filterId?`: string, `filterDescription?`: string, `filterPublicDate?`: string, `filterSynopsis?`: string, `filterAdvisoryType?`: string, `filterAdvisoryTypeName?`: string, `filterSeverity?`: string, `filterApplicableSystems?`: string, `tags?`: Array‹string›, `filterSystemProfileSapSystem?`: string, `filterSystemProfileSapSidsIn?`: Array‹string›, `options`: any): *Promise‹[RequestArgs](interfaces/requestargs.md)›*

* **listAdvisorySystems**(`advisoryId`: string, `limit?`: number, `offset?`: number, `sort?`: "id" | "display_name" | "last_evaluation" | "last_upload" | "rhsa_count" | "rhba_count" | "rhea_count" | "other_count" | "stale", `search?`: string, `filterId?`: string, `filterInsightsId?`: string, `filterDisplayName?`: string, `filterLastEvaluation?`: string, `filterLastUpload?`: string, `filterRhsaCount?`: string, `filterRhbaCount?`: string, `filterRheaCount?`: string, `filterOtherCount?`: string, `filterStale?`: string, `filterStaleTimestamp?`: string, `filterStaleWarningTimestamp?`: string, `filterCulledTimestamp?`: string, `filterCreated?`: string, `filterOsname?`: string, `filterOsminor?`: string, `filterOsmajor?`: string, `filterOs?`: string, `tags?`: Array‹string›, `filterSystemProfileSapSystem?`: string, `filterSystemProfileSapSidsIn?`: Array‹string›, `options`: any): *Promise‹[RequestArgs](interfaces/requestargs.md)›*

* **listPackages**(`limit?`: number, `offset?`: number, `sort?`: "id" | "name" | "systems_installed" | "systems_updatable", `search?`: string, `filterName?`: string, `filterSystemsInstalled?`: string, `filterSystemsUpdatable?`: string, `filterSummary?`: string, `tags?`: Array‹string›, `filterSystemProfileSapSystem?`: string, `filterSystemProfileSapSidsIn?`: Array‹string›, `options`: any): *Promise‹[RequestArgs](interfaces/requestargs.md)›*

* **listSystemAdvisories**(`inventoryId`: string, `limit?`: number, `offset?`: number, `sort?`: "id" | "name" | "type" | "synopsis" | "public_date", `search?`: string, `filterId?`: string, `filterDescription?`: string, `filterPublicDate?`: string, `filterSynopsis?`: string, `filterAdvisoryType?`: string, `filterAdvisoryTypeName?`: string, `filterSeverity?`: string, `options`: any): *Promise‹[RequestArgs](interfaces/requestargs.md)›*

* **listSystems**(`limit?`: number, `offset?`: number, `sort?`: "id" | "display_name" | "last_evaluation" | "last_upload" | "rhsa_count" | "rhba_count" | "rhea_count" | "other_count" | "stale" | "packages_installed" | "packages_updatable", `search?`: string, `filterInsightsId?`: string, `filterId?`: string, `filterDisplayName?`: string, `filterLastEvaluation?`: string, `filterLastUpload?`: string, `filterRhsaCount?`: string, `filterRhbaCount?`: string, `filterRheaCount?`: string, `filterOtherCount?`: string, `filterStale?`: string, `filterPackagesInstalled?`: string, `filterPackagesUpdatable?`: string, `filterStaleTimestamp?`: string, `filterStaleWarningTimestamp?`: string, `filterCulledTimestamp?`: string, `filterCreated?`: string, `filterOsname?`: string, `filterOsminor?`: string, `filterOsmajor?`: string, `filterOs?`: string, `tags?`: Array‹string›, `filterSystemProfileSapSystem?`: string, `filterSystemProfileSapSidsIn?`: Array‹string›, `options`: any): *Promise‹[RequestArgs](interfaces/requestargs.md)›*

* **packageSystems**(`packageName`: string, `limit?`: number, `offset?`: number, `tags?`: Array‹string›, `filterSystemProfileSapSystem?`: string, `filterSystemProfileSapSidsIn?`: Array‹string›, `options`: any): *Promise‹[RequestArgs](interfaces/requestargs.md)›*

* **packageVersions**(`packageName`: string, `limit?`: number, `offset?`: number, `options`: any): *Promise‹[RequestArgs](interfaces/requestargs.md)›*

* **systemPackages**(`inventoryId`: string, `limit?`: number, `offset?`: number, `search?`: string, `filterName?`: string, `filterDescription?`: string, `filterEvra?`: string, `filterSummary?`: string, `filterUpdatable?`: boolean, `options`: any): *Promise‹[RequestArgs](interfaces/requestargs.md)›*

* **viewAdvisoriesSystems**(`body`: [ControllersSystemsAdvisoriesRequest](interfaces/controllerssystemsadvisoriesrequest.md), `options`: any): *Promise‹[RequestArgs](interfaces/requestargs.md)›*

* **viewSystemsAdvisories**(`body`: [ControllersSystemsAdvisoriesRequest](interfaces/controllerssystemsadvisoriesrequest.md), `options`: any): *Promise‹[RequestArgs](interfaces/requestargs.md)›*

___

### `Const` DefaultApiFactory

▸ **DefaultApiFactory**(`configuration?`: [Configuration](classes/configuration.md), `basePath?`: string, `axios?`: AxiosInstance): *object*

*Defined in [packages/patch/api.ts:3676](https://github.com/RedHatInsights/javascript-clients/blob/9192949/packages/patch/api.ts#L3676)*

DefaultApi - factory interface

**`export`** 

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](classes/configuration.md) |
`basePath?` | string |
`axios?` | AxiosInstance |

**Returns:** *object*

* **deletesystem**(`inventoryId`: string, `options?`: any): *AxiosPromise‹void›*

* **detailAdvisory**(`advisoryId`: string, `options?`: any): *AxiosPromise‹[ControllersAdvisoryDetailResponse](interfaces/controllersadvisorydetailresponse.md)›*

* **detailSystem**(`inventoryId`: string, `options?`: any): *AxiosPromise‹[ControllersSystemDetailResponse](interfaces/controllerssystemdetailresponse.md)›*

* **exportAdvisories**(`search?`: string, `filterId?`: string, `filterDescription?`: string, `filterPublicDate?`: string, `filterSynopsis?`: string, `filterAdvisoryType?`: string, `filterAdvisoryTypeName?`: string, `filterSeverity?`: string, `filterApplicableSystems?`: string, `options?`: any): *AxiosPromise‹Array‹[ControllersAdvisoryInlineItem](interfaces/controllersadvisoryinlineitem.md)››*

* **exportAdvisorySystems**(`advisoryId`: string, `search?`: string, `filterId?`: string, `filterDisplayName?`: string, `filterLastEvaluation?`: string, `filterLastUpload?`: string, `filterRhsaCount?`: string, `filterRhbaCount?`: string, `filterRheaCount?`: string, `filterOtherCount?`: string, `filterStale?`: string, `filterPackagesInstalled?`: string, `filterPackagesUpdatable?`: string, `filterSystemProfileSapSystem?`: string, `filterSystemProfileSapSidsIn?`: Array‹string›, `filterOsname?`: string, `filterOsminor?`: string, `filterOsmajor?`: string, `filterOs?`: string, `tags?`: Array‹string›, `options?`: any): *AxiosPromise‹Array‹[ControllersSystemInlineItem](interfaces/controllerssysteminlineitem.md)››*

* **exportPackageSystems**(`packageName`: string, `filterSystemProfileSapSystem?`: string, `filterSystemProfileSapSidsIn?`: Array‹string›, `tags?`: Array‹string›, `options?`: any): *AxiosPromise‹Array‹[ControllersPackageSystemItem](interfaces/controllerspackagesystemitem.md)››*

* **exportPackages**(`sort?`: "id" | "name" | "systems_installed" | "systems_updatable", `search?`: string, `filterName?`: string, `filterSystemsInstalled?`: string, `filterSystemsUpdatable?`: string, `filterSummary?`: string, `options?`: any): *AxiosPromise‹Array‹[ControllersPackageItem](interfaces/controllerspackageitem.md)››*

* **exportSystemAdvisories**(`inventoryId`: string, `search?`: string, `filterId?`: string, `filterDescription?`: string, `filterPublicDate?`: string, `filterSynopsis?`: string, `filterAdvisoryType?`: string, `filterAdvisoryTypeName?`: string, `filterSeverity?`: string, `options?`: any): *AxiosPromise‹Array‹[ControllersSystemAdvisoriesDBLookup](interfaces/controllerssystemadvisoriesdblookup.md)››*

* **exportSystemPackages**(`inventoryId`: string, `search?`: string, `filterName?`: string, `filterDescription?`: string, `filterEvra?`: string, `filterSummary?`: string, `filterUpdatable?`: boolean, `options?`: any): *AxiosPromise‹Array‹[ControllersSystemPackageInline](interfaces/controllerssystempackageinline.md)››*

* **exportSystems**(`search?`: string, `filterId?`: string, `filterDisplayName?`: string, `filterLastEvaluation?`: string, `filterLastUpload?`: string, `filterRhsaCount?`: string, `filterRhbaCount?`: string, `filterRheaCount?`: string, `filterOtherCount?`: string, `filterStale?`: string, `filterPackagesInstalled?`: string, `filterPackagesUpdatable?`: string, `filterSystemProfileSapSystem?`: string, `filterSystemProfileSapSidsIn?`: Array‹string›, `filterOsname?`: string, `filterOsminor?`: string, `filterOsmajor?`: string, `filterOs?`: string, `tags?`: Array‹string›, `options?`: any): *AxiosPromise‹Array‹[ControllersSystemInlineItem](interfaces/controllerssysteminlineitem.md)››*

* **latestPackage**(`packageName`: string, `options?`: any): *AxiosPromise‹[ControllersPackageDetailResponse](interfaces/controllerspackagedetailresponse.md)›*

* **listAdvisories**(`limit?`: number, `offset?`: number, `sort?`: "id" | "name" | "advisory_type" | "synopsis" | "public_date" | "applicable_systems", `search?`: string, `filterId?`: string, `filterDescription?`: string, `filterPublicDate?`: string, `filterSynopsis?`: string, `filterAdvisoryType?`: string, `filterAdvisoryTypeName?`: string, `filterSeverity?`: string, `filterApplicableSystems?`: string, `tags?`: Array‹string›, `filterSystemProfileSapSystem?`: string, `filterSystemProfileSapSidsIn?`: Array‹string›, `options?`: any): *AxiosPromise‹[ControllersAdvisoriesResponse](interfaces/controllersadvisoriesresponse.md)›*

* **listAdvisorySystems**(`advisoryId`: string, `limit?`: number, `offset?`: number, `sort?`: "id" | "display_name" | "last_evaluation" | "last_upload" | "rhsa_count" | "rhba_count" | "rhea_count" | "other_count" | "stale", `search?`: string, `filterId?`: string, `filterInsightsId?`: string, `filterDisplayName?`: string, `filterLastEvaluation?`: string, `filterLastUpload?`: string, `filterRhsaCount?`: string, `filterRhbaCount?`: string, `filterRheaCount?`: string, `filterOtherCount?`: string, `filterStale?`: string, `filterStaleTimestamp?`: string, `filterStaleWarningTimestamp?`: string, `filterCulledTimestamp?`: string, `filterCreated?`: string, `filterOsname?`: string, `filterOsminor?`: string, `filterOsmajor?`: string, `filterOs?`: string, `tags?`: Array‹string›, `filterSystemProfileSapSystem?`: string, `filterSystemProfileSapSidsIn?`: Array‹string›, `options?`: any): *AxiosPromise‹[ControllersAdvisorySystemsResponse](interfaces/controllersadvisorysystemsresponse.md)›*

* **listPackages**(`limit?`: number, `offset?`: number, `sort?`: "id" | "name" | "systems_installed" | "systems_updatable", `search?`: string, `filterName?`: string, `filterSystemsInstalled?`: string, `filterSystemsUpdatable?`: string, `filterSummary?`: string, `tags?`: Array‹string›, `filterSystemProfileSapSystem?`: string, `filterSystemProfileSapSidsIn?`: Array‹string›, `options?`: any): *AxiosPromise‹[ControllersPackagesResponse](interfaces/controllerspackagesresponse.md)›*

* **listSystemAdvisories**(`inventoryId`: string, `limit?`: number, `offset?`: number, `sort?`: "id" | "name" | "type" | "synopsis" | "public_date", `search?`: string, `filterId?`: string, `filterDescription?`: string, `filterPublicDate?`: string, `filterSynopsis?`: string, `filterAdvisoryType?`: string, `filterAdvisoryTypeName?`: string, `filterSeverity?`: string, `options?`: any): *AxiosPromise‹[ControllersSystemAdvisoriesResponse](interfaces/controllerssystemadvisoriesresponse.md)›*

* **listSystems**(`limit?`: number, `offset?`: number, `sort?`: "id" | "display_name" | "last_evaluation" | "last_upload" | "rhsa_count" | "rhba_count" | "rhea_count" | "other_count" | "stale" | "packages_installed" | "packages_updatable", `search?`: string, `filterInsightsId?`: string, `filterId?`: string, `filterDisplayName?`: string, `filterLastEvaluation?`: string, `filterLastUpload?`: string, `filterRhsaCount?`: string, `filterRhbaCount?`: string, `filterRheaCount?`: string, `filterOtherCount?`: string, `filterStale?`: string, `filterPackagesInstalled?`: string, `filterPackagesUpdatable?`: string, `filterStaleTimestamp?`: string, `filterStaleWarningTimestamp?`: string, `filterCulledTimestamp?`: string, `filterCreated?`: string, `filterOsname?`: string, `filterOsminor?`: string, `filterOsmajor?`: string, `filterOs?`: string, `tags?`: Array‹string›, `filterSystemProfileSapSystem?`: string, `filterSystemProfileSapSidsIn?`: Array‹string›, `options?`: any): *AxiosPromise‹[ControllersSystemsResponse](interfaces/controllerssystemsresponse.md)›*

* **packageSystems**(`packageName`: string, `limit?`: number, `offset?`: number, `tags?`: Array‹string›, `filterSystemProfileSapSystem?`: string, `filterSystemProfileSapSidsIn?`: Array‹string›, `options?`: any): *AxiosPromise‹[ControllersPackageSystemsResponse](interfaces/controllerspackagesystemsresponse.md)›*

* **packageVersions**(`packageName`: string, `limit?`: number, `offset?`: number, `options?`: any): *AxiosPromise‹[ControllersPackageVersionsResponse](interfaces/controllerspackageversionsresponse.md)›*

* **systemPackages**(`inventoryId`: string, `limit?`: number, `offset?`: number, `search?`: string, `filterName?`: string, `filterDescription?`: string, `filterEvra?`: string, `filterSummary?`: string, `filterUpdatable?`: boolean, `options?`: any): *AxiosPromise‹[ControllersSystemPackageResponse](interfaces/controllerssystempackageresponse.md)›*

* **viewAdvisoriesSystems**(`body`: [ControllersSystemsAdvisoriesRequest](interfaces/controllerssystemsadvisoriesrequest.md), `options?`: any): *AxiosPromise‹[ControllersAdvisoriesSystemsResponse](interfaces/controllersadvisoriessystemsresponse.md)›*

* **viewSystemsAdvisories**(`body`: [ControllersSystemsAdvisoriesRequest](interfaces/controllerssystemsadvisoriesrequest.md), `options?`: any): *AxiosPromise‹[ControllersSystemsAdvisoriesResponse](interfaces/controllerssystemsadvisoriesresponse.md)›*

___

### `Const` DefaultApiFp

▸ **DefaultApiFp**(`configuration?`: [Configuration](classes/configuration.md)): *object*

*Defined in [packages/patch/api.ts:3205](https://github.com/RedHatInsights/javascript-clients/blob/9192949/packages/patch/api.ts#L3205)*

DefaultApi - functional programming interface

**`export`** 

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](classes/configuration.md) |

**Returns:** *object*

* **deletesystem**(`inventoryId`: string, `options?`: any): *Promise‹function›*

* **detailAdvisory**(`advisoryId`: string, `options?`: any): *Promise‹function›*

* **detailSystem**(`inventoryId`: string, `options?`: any): *Promise‹function›*

* **exportAdvisories**(`search?`: string, `filterId?`: string, `filterDescription?`: string, `filterPublicDate?`: string, `filterSynopsis?`: string, `filterAdvisoryType?`: string, `filterAdvisoryTypeName?`: string, `filterSeverity?`: string, `filterApplicableSystems?`: string, `options?`: any): *Promise‹function›*

* **exportAdvisorySystems**(`advisoryId`: string, `search?`: string, `filterId?`: string, `filterDisplayName?`: string, `filterLastEvaluation?`: string, `filterLastUpload?`: string, `filterRhsaCount?`: string, `filterRhbaCount?`: string, `filterRheaCount?`: string, `filterOtherCount?`: string, `filterStale?`: string, `filterPackagesInstalled?`: string, `filterPackagesUpdatable?`: string, `filterSystemProfileSapSystem?`: string, `filterSystemProfileSapSidsIn?`: Array‹string›, `filterOsname?`: string, `filterOsminor?`: string, `filterOsmajor?`: string, `filterOs?`: string, `tags?`: Array‹string›, `options?`: any): *Promise‹function›*

* **exportPackageSystems**(`packageName`: string, `filterSystemProfileSapSystem?`: string, `filterSystemProfileSapSidsIn?`: Array‹string›, `tags?`: Array‹string›, `options?`: any): *Promise‹function›*

* **exportPackages**(`sort?`: "id" | "name" | "systems_installed" | "systems_updatable", `search?`: string, `filterName?`: string, `filterSystemsInstalled?`: string, `filterSystemsUpdatable?`: string, `filterSummary?`: string, `options?`: any): *Promise‹function›*

* **exportSystemAdvisories**(`inventoryId`: string, `search?`: string, `filterId?`: string, `filterDescription?`: string, `filterPublicDate?`: string, `filterSynopsis?`: string, `filterAdvisoryType?`: string, `filterAdvisoryTypeName?`: string, `filterSeverity?`: string, `options?`: any): *Promise‹function›*

* **exportSystemPackages**(`inventoryId`: string, `search?`: string, `filterName?`: string, `filterDescription?`: string, `filterEvra?`: string, `filterSummary?`: string, `filterUpdatable?`: boolean, `options?`: any): *Promise‹function›*

* **exportSystems**(`search?`: string, `filterId?`: string, `filterDisplayName?`: string, `filterLastEvaluation?`: string, `filterLastUpload?`: string, `filterRhsaCount?`: string, `filterRhbaCount?`: string, `filterRheaCount?`: string, `filterOtherCount?`: string, `filterStale?`: string, `filterPackagesInstalled?`: string, `filterPackagesUpdatable?`: string, `filterSystemProfileSapSystem?`: string, `filterSystemProfileSapSidsIn?`: Array‹string›, `filterOsname?`: string, `filterOsminor?`: string, `filterOsmajor?`: string, `filterOs?`: string, `tags?`: Array‹string›, `options?`: any): *Promise‹function›*

* **latestPackage**(`packageName`: string, `options?`: any): *Promise‹function›*

* **listAdvisories**(`limit?`: number, `offset?`: number, `sort?`: "id" | "name" | "advisory_type" | "synopsis" | "public_date" | "applicable_systems", `search?`: string, `filterId?`: string, `filterDescription?`: string, `filterPublicDate?`: string, `filterSynopsis?`: string, `filterAdvisoryType?`: string, `filterAdvisoryTypeName?`: string, `filterSeverity?`: string, `filterApplicableSystems?`: string, `tags?`: Array‹string›, `filterSystemProfileSapSystem?`: string, `filterSystemProfileSapSidsIn?`: Array‹string›, `options?`: any): *Promise‹function›*

* **listAdvisorySystems**(`advisoryId`: string, `limit?`: number, `offset?`: number, `sort?`: "id" | "display_name" | "last_evaluation" | "last_upload" | "rhsa_count" | "rhba_count" | "rhea_count" | "other_count" | "stale", `search?`: string, `filterId?`: string, `filterInsightsId?`: string, `filterDisplayName?`: string, `filterLastEvaluation?`: string, `filterLastUpload?`: string, `filterRhsaCount?`: string, `filterRhbaCount?`: string, `filterRheaCount?`: string, `filterOtherCount?`: string, `filterStale?`: string, `filterStaleTimestamp?`: string, `filterStaleWarningTimestamp?`: string, `filterCulledTimestamp?`: string, `filterCreated?`: string, `filterOsname?`: string, `filterOsminor?`: string, `filterOsmajor?`: string, `filterOs?`: string, `tags?`: Array‹string›, `filterSystemProfileSapSystem?`: string, `filterSystemProfileSapSidsIn?`: Array‹string›, `options?`: any): *Promise‹function›*

* **listPackages**(`limit?`: number, `offset?`: number, `sort?`: "id" | "name" | "systems_installed" | "systems_updatable", `search?`: string, `filterName?`: string, `filterSystemsInstalled?`: string, `filterSystemsUpdatable?`: string, `filterSummary?`: string, `tags?`: Array‹string›, `filterSystemProfileSapSystem?`: string, `filterSystemProfileSapSidsIn?`: Array‹string›, `options?`: any): *Promise‹function›*

* **listSystemAdvisories**(`inventoryId`: string, `limit?`: number, `offset?`: number, `sort?`: "id" | "name" | "type" | "synopsis" | "public_date", `search?`: string, `filterId?`: string, `filterDescription?`: string, `filterPublicDate?`: string, `filterSynopsis?`: string, `filterAdvisoryType?`: string, `filterAdvisoryTypeName?`: string, `filterSeverity?`: string, `options?`: any): *Promise‹function›*

* **listSystems**(`limit?`: number, `offset?`: number, `sort?`: "id" | "display_name" | "last_evaluation" | "last_upload" | "rhsa_count" | "rhba_count" | "rhea_count" | "other_count" | "stale" | "packages_installed" | "packages_updatable", `search?`: string, `filterInsightsId?`: string, `filterId?`: string, `filterDisplayName?`: string, `filterLastEvaluation?`: string, `filterLastUpload?`: string, `filterRhsaCount?`: string, `filterRhbaCount?`: string, `filterRheaCount?`: string, `filterOtherCount?`: string, `filterStale?`: string, `filterPackagesInstalled?`: string, `filterPackagesUpdatable?`: string, `filterStaleTimestamp?`: string, `filterStaleWarningTimestamp?`: string, `filterCulledTimestamp?`: string, `filterCreated?`: string, `filterOsname?`: string, `filterOsminor?`: string, `filterOsmajor?`: string, `filterOs?`: string, `tags?`: Array‹string›, `filterSystemProfileSapSystem?`: string, `filterSystemProfileSapSidsIn?`: Array‹string›, `options?`: any): *Promise‹function›*

* **packageSystems**(`packageName`: string, `limit?`: number, `offset?`: number, `tags?`: Array‹string›, `filterSystemProfileSapSystem?`: string, `filterSystemProfileSapSidsIn?`: Array‹string›, `options?`: any): *Promise‹function›*

* **packageVersions**(`packageName`: string, `limit?`: number, `offset?`: number, `options?`: any): *Promise‹function›*

* **systemPackages**(`inventoryId`: string, `limit?`: number, `offset?`: number, `search?`: string, `filterName?`: string, `filterDescription?`: string, `filterEvra?`: string, `filterSummary?`: string, `filterUpdatable?`: boolean, `options?`: any): *Promise‹function›*

* **viewAdvisoriesSystems**(`body`: [ControllersSystemsAdvisoriesRequest](interfaces/controllerssystemsadvisoriesrequest.md), `options?`: any): *Promise‹function›*

* **viewSystemsAdvisories**(`body`: [ControllersSystemsAdvisoriesRequest](interfaces/controllerssystemsadvisoriesrequest.md), `options?`: any): *Promise‹function›*

## Object literals

### `Const` COLLECTION_FORMATS

### ▪ **COLLECTION_FORMATS**: *object*

*Defined in [packages/patch/base.ts:26](https://github.com/RedHatInsights/javascript-clients/blob/9192949/packages/patch/base.ts#L26)*

**`export`** 

###  csv

• **csv**: *string* = ","

*Defined in [packages/patch/base.ts:27](https://github.com/RedHatInsights/javascript-clients/blob/9192949/packages/patch/base.ts#L27)*

###  pipes

• **pipes**: *string* = "|"

*Defined in [packages/patch/base.ts:30](https://github.com/RedHatInsights/javascript-clients/blob/9192949/packages/patch/base.ts#L30)*

###  ssv

• **ssv**: *string* = " "

*Defined in [packages/patch/base.ts:28](https://github.com/RedHatInsights/javascript-clients/blob/9192949/packages/patch/base.ts#L28)*

###  tsv

• **tsv**: *string* = "	"

*Defined in [packages/patch/base.ts:29](https://github.com/RedHatInsights/javascript-clients/blob/9192949/packages/patch/base.ts#L29)*
