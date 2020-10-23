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
* [ControllersPackagesResponse](interfaces/controllerspackagesresponse.md)
* [ControllersSystemAdvisoriesResponse](interfaces/controllerssystemadvisoriesresponse.md)
* [ControllersSystemAdvisoryItem](interfaces/controllerssystemadvisoryitem.md)
* [ControllersSystemAdvisoryItemAttributes](interfaces/controllerssystemadvisoryitemattributes.md)
* [ControllersSystemDetailResponse](interfaces/controllerssystemdetailresponse.md)
* [ControllersSystemInlineItem](interfaces/controllerssysteminlineitem.md)
* [ControllersSystemItem](interfaces/controllerssystemitem.md)
* [ControllersSystemItemAttributes](interfaces/controllerssystemitemattributes.md)
* [ControllersSystemPackageData](interfaces/controllerssystempackagedata.md)
* [ControllersSystemPackageResponse](interfaces/controllerssystempackageresponse.md)
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

*Defined in [packages/patch/base.ts:20](https://github.com/RedHatInsights/javascript-clients/blob/efdc955/packages/patch/base.ts#L20)*

## Functions

### `Const` DefaultApiAxiosParamCreator

▸ **DefaultApiAxiosParamCreator**(`configuration?`: [Configuration](classes/configuration.md)): *object*

*Defined in [packages/patch/api.ts:944](https://github.com/RedHatInsights/javascript-clients/blob/efdc955/packages/patch/api.ts#L944)*

DefaultApi - axios parameter creator

**`export`** 

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](classes/configuration.md) |

**Returns:** *object*

* **deletesystem**(`inventoryId`: string, `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **detailAdvisory**(`advisoryId`: string, `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **detailSystem**(`inventoryId`: string, `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **exportAdvisories**(`search?`: string, `filterId?`: string, `filterDescription?`: string, `filterPublicDate?`: string, `filterSynopsis?`: string, `filterAdvisoryType?`: string, `filterSeverity?`: string, `filterApplicableSystems?`: string, `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **exportSystems**(`search?`: string, `filterId?`: string, `filterDisplayName?`: string, `filterLastEvaluation?`: string, `filterLastUpload?`: string, `filterRhsaCount?`: string, `filterRhbaCount?`: string, `filterRheaCount?`: string, `filterStale?`: string, `filterPackagesInstalled?`: string, `filterPackagesUpdatable?`: string, `tags?`: Array‹string›, `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **latestPackage**(`packageName`: string, `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **listAdvisories**(`limit?`: number, `offset?`: number, `sort?`: "id" | "name" | "advisory_type" | "synopsis" | "public_date" | "applicable_systems", `search?`: string, `filterId?`: string, `filterDescription?`: string, `filterPublicDate?`: string, `filterSynopsis?`: string, `filterAdvisoryType?`: string, `filterSeverity?`: string, `filterApplicableSystems?`: string, `tags?`: Array‹string›, `filterSystemProfileSapSystem?`: string, `filterSystemProfileSapSidsIn?`: Array‹string›, `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **listAdvisorySystems**(`advisoryId`: string, `limit?`: number, `offset?`: number, `sort?`: "id" | "display_name" | "last_evaluation" | "last_upload" | "rhsa_count" | "rhba_count" | "rhea_count" | "stale", `search?`: string, `filterId?`: string, `filterDisplayName?`: string, `filterLastEvaluation?`: string, `filterLastUpload?`: string, `filterRhsaCount?`: string, `filterRhbaCount?`: string, `filterRheaCount?`: string, `filterStale?`: string, `tags?`: Array‹string›, `filterSystemProfileSapSystem?`: string, `filterSystemProfileSapSidsIn?`: Array‹string›, `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **listPackages**(`limit?`: number, `offset?`: number, `sort?`: "id" | "name" | "systems_installed" | "systems_updatable", `search?`: string, `filterName?`: string, `filterSystemsInstalled?`: string, `filterSystemsUpdatable?`: string, `filterSummary?`: string, `tags?`: Array‹string›, `filterSystemProfileSapSystem?`: string, `filterSystemProfileSapSidsIn?`: Array‹string›, `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **listSystemAdvisories**(`inventoryId`: string, `limit?`: number, `offset?`: number, `sort?`: "id" | "name" | "type" | "synopsis" | "public_date", `search?`: string, `filterId?`: string, `filterDescription?`: string, `filterPublicDate?`: string, `filterSynopsis?`: string, `filterAdvisoryType?`: string, `filterSeverity?`: string, `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **listSystems**(`limit?`: number, `offset?`: number, `sort?`: "id" | "display_name" | "last_evaluation" | "last_upload" | "rhsa_count" | "rhba_count" | "rhea_count" | "stale" | "packages_installed" | "packages_updatable", `search?`: string, `filterId?`: string, `filterDisplayName?`: string, `filterLastEvaluation?`: string, `filterLastUpload?`: string, `filterRhsaCount?`: string, `filterRhbaCount?`: string, `filterRheaCount?`: string, `filterStale?`: string, `filterPackagesInstalled?`: string, `filterPackagesUpdatable?`: string, `tags?`: Array‹string›, `filterSystemProfileSapSystem?`: string, `filterSystemProfileSapSidsIn?`: Array‹string›, `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **packageSystems**(`packageName`: string, `tags?`: Array‹string›, `filterSystemProfileSapSystem?`: string, `filterSystemProfileSapSidsIn?`: Array‹string›, `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **systemPackages**(`inventoryId`: string, `search?`: string, `filterName?`: string, `filterDescription?`: string, `filterEvra?`: string, `filterSummary?`: string, `filterUpdatable?`: boolean, `options`: any): *[RequestArgs](interfaces/requestargs.md)*

___

### `Const` DefaultApiFactory

▸ **DefaultApiFactory**(`configuration?`: [Configuration](classes/configuration.md), `basePath?`: string, `axios?`: AxiosInstance): *object*

*Defined in [packages/patch/api.ts:2257](https://github.com/RedHatInsights/javascript-clients/blob/efdc955/packages/patch/api.ts#L2257)*

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

* **exportAdvisories**(`search?`: string, `filterId?`: string, `filterDescription?`: string, `filterPublicDate?`: string, `filterSynopsis?`: string, `filterAdvisoryType?`: string, `filterSeverity?`: string, `filterApplicableSystems?`: string, `options?`: any): *AxiosPromise‹Array‹[ControllersAdvisoryInlineItem](interfaces/controllersadvisoryinlineitem.md)››*

* **exportSystems**(`search?`: string, `filterId?`: string, `filterDisplayName?`: string, `filterLastEvaluation?`: string, `filterLastUpload?`: string, `filterRhsaCount?`: string, `filterRhbaCount?`: string, `filterRheaCount?`: string, `filterStale?`: string, `filterPackagesInstalled?`: string, `filterPackagesUpdatable?`: string, `tags?`: Array‹string›, `options?`: any): *AxiosPromise‹Array‹[ControllersSystemInlineItem](interfaces/controllerssysteminlineitem.md)››*

* **latestPackage**(`packageName`: string, `options?`: any): *AxiosPromise‹[ControllersPackageDetailResponse](interfaces/controllerspackagedetailresponse.md)›*

* **listAdvisories**(`limit?`: number, `offset?`: number, `sort?`: "id" | "name" | "advisory_type" | "synopsis" | "public_date" | "applicable_systems", `search?`: string, `filterId?`: string, `filterDescription?`: string, `filterPublicDate?`: string, `filterSynopsis?`: string, `filterAdvisoryType?`: string, `filterSeverity?`: string, `filterApplicableSystems?`: string, `tags?`: Array‹string›, `filterSystemProfileSapSystem?`: string, `filterSystemProfileSapSidsIn?`: Array‹string›, `options?`: any): *AxiosPromise‹[ControllersAdvisoriesResponse](interfaces/controllersadvisoriesresponse.md)›*

* **listAdvisorySystems**(`advisoryId`: string, `limit?`: number, `offset?`: number, `sort?`: "id" | "display_name" | "last_evaluation" | "last_upload" | "rhsa_count" | "rhba_count" | "rhea_count" | "stale", `search?`: string, `filterId?`: string, `filterDisplayName?`: string, `filterLastEvaluation?`: string, `filterLastUpload?`: string, `filterRhsaCount?`: string, `filterRhbaCount?`: string, `filterRheaCount?`: string, `filterStale?`: string, `tags?`: Array‹string›, `filterSystemProfileSapSystem?`: string, `filterSystemProfileSapSidsIn?`: Array‹string›, `options?`: any): *AxiosPromise‹[ControllersAdvisorySystemsResponse](interfaces/controllersadvisorysystemsresponse.md)›*

* **listPackages**(`limit?`: number, `offset?`: number, `sort?`: "id" | "name" | "systems_installed" | "systems_updatable", `search?`: string, `filterName?`: string, `filterSystemsInstalled?`: string, `filterSystemsUpdatable?`: string, `filterSummary?`: string, `tags?`: Array‹string›, `filterSystemProfileSapSystem?`: string, `filterSystemProfileSapSidsIn?`: Array‹string›, `options?`: any): *AxiosPromise‹[ControllersPackagesResponse](interfaces/controllerspackagesresponse.md)›*

* **listSystemAdvisories**(`inventoryId`: string, `limit?`: number, `offset?`: number, `sort?`: "id" | "name" | "type" | "synopsis" | "public_date", `search?`: string, `filterId?`: string, `filterDescription?`: string, `filterPublicDate?`: string, `filterSynopsis?`: string, `filterAdvisoryType?`: string, `filterSeverity?`: string, `options?`: any): *AxiosPromise‹[ControllersSystemAdvisoriesResponse](interfaces/controllerssystemadvisoriesresponse.md)›*

* **listSystems**(`limit?`: number, `offset?`: number, `sort?`: "id" | "display_name" | "last_evaluation" | "last_upload" | "rhsa_count" | "rhba_count" | "rhea_count" | "stale" | "packages_installed" | "packages_updatable", `search?`: string, `filterId?`: string, `filterDisplayName?`: string, `filterLastEvaluation?`: string, `filterLastUpload?`: string, `filterRhsaCount?`: string, `filterRhbaCount?`: string, `filterRheaCount?`: string, `filterStale?`: string, `filterPackagesInstalled?`: string, `filterPackagesUpdatable?`: string, `tags?`: Array‹string›, `filterSystemProfileSapSystem?`: string, `filterSystemProfileSapSidsIn?`: Array‹string›, `options?`: any): *AxiosPromise‹[ControllersSystemsResponse](interfaces/controllerssystemsresponse.md)›*

* **packageSystems**(`packageName`: string, `tags?`: Array‹string›, `filterSystemProfileSapSystem?`: string, `filterSystemProfileSapSidsIn?`: Array‹string›, `options?`: any): *AxiosPromise‹[ControllersPackageSystemsResponse](interfaces/controllerspackagesystemsresponse.md)›*

* **systemPackages**(`inventoryId`: string, `search?`: string, `filterName?`: string, `filterDescription?`: string, `filterEvra?`: string, `filterSummary?`: string, `filterUpdatable?`: boolean, `options?`: any): *AxiosPromise‹[ControllersSystemPackageResponse](interfaces/controllerssystempackageresponse.md)›*

___

### `Const` DefaultApiFp

▸ **DefaultApiFp**(`configuration?`: [Configuration](classes/configuration.md)): *object*

*Defined in [packages/patch/api.ts:1975](https://github.com/RedHatInsights/javascript-clients/blob/efdc955/packages/patch/api.ts#L1975)*

DefaultApi - functional programming interface

**`export`** 

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](classes/configuration.md) |

**Returns:** *object*

* **deletesystem**(`inventoryId`: string, `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹void›*

* **detailAdvisory**(`advisoryId`: string, `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹[ControllersAdvisoryDetailResponse](interfaces/controllersadvisorydetailresponse.md)›*

* **detailSystem**(`inventoryId`: string, `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹[ControllersSystemDetailResponse](interfaces/controllerssystemdetailresponse.md)›*

* **exportAdvisories**(`search?`: string, `filterId?`: string, `filterDescription?`: string, `filterPublicDate?`: string, `filterSynopsis?`: string, `filterAdvisoryType?`: string, `filterSeverity?`: string, `filterApplicableSystems?`: string, `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹Array‹[ControllersAdvisoryInlineItem](interfaces/controllersadvisoryinlineitem.md)››*

* **exportSystems**(`search?`: string, `filterId?`: string, `filterDisplayName?`: string, `filterLastEvaluation?`: string, `filterLastUpload?`: string, `filterRhsaCount?`: string, `filterRhbaCount?`: string, `filterRheaCount?`: string, `filterStale?`: string, `filterPackagesInstalled?`: string, `filterPackagesUpdatable?`: string, `tags?`: Array‹string›, `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹Array‹[ControllersSystemInlineItem](interfaces/controllerssysteminlineitem.md)››*

* **latestPackage**(`packageName`: string, `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹[ControllersPackageDetailResponse](interfaces/controllerspackagedetailresponse.md)›*

* **listAdvisories**(`limit?`: number, `offset?`: number, `sort?`: "id" | "name" | "advisory_type" | "synopsis" | "public_date" | "applicable_systems", `search?`: string, `filterId?`: string, `filterDescription?`: string, `filterPublicDate?`: string, `filterSynopsis?`: string, `filterAdvisoryType?`: string, `filterSeverity?`: string, `filterApplicableSystems?`: string, `tags?`: Array‹string›, `filterSystemProfileSapSystem?`: string, `filterSystemProfileSapSidsIn?`: Array‹string›, `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹[ControllersAdvisoriesResponse](interfaces/controllersadvisoriesresponse.md)›*

* **listAdvisorySystems**(`advisoryId`: string, `limit?`: number, `offset?`: number, `sort?`: "id" | "display_name" | "last_evaluation" | "last_upload" | "rhsa_count" | "rhba_count" | "rhea_count" | "stale", `search?`: string, `filterId?`: string, `filterDisplayName?`: string, `filterLastEvaluation?`: string, `filterLastUpload?`: string, `filterRhsaCount?`: string, `filterRhbaCount?`: string, `filterRheaCount?`: string, `filterStale?`: string, `tags?`: Array‹string›, `filterSystemProfileSapSystem?`: string, `filterSystemProfileSapSidsIn?`: Array‹string›, `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹[ControllersAdvisorySystemsResponse](interfaces/controllersadvisorysystemsresponse.md)›*

* **listPackages**(`limit?`: number, `offset?`: number, `sort?`: "id" | "name" | "systems_installed" | "systems_updatable", `search?`: string, `filterName?`: string, `filterSystemsInstalled?`: string, `filterSystemsUpdatable?`: string, `filterSummary?`: string, `tags?`: Array‹string›, `filterSystemProfileSapSystem?`: string, `filterSystemProfileSapSidsIn?`: Array‹string›, `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹[ControllersPackagesResponse](interfaces/controllerspackagesresponse.md)›*

* **listSystemAdvisories**(`inventoryId`: string, `limit?`: number, `offset?`: number, `sort?`: "id" | "name" | "type" | "synopsis" | "public_date", `search?`: string, `filterId?`: string, `filterDescription?`: string, `filterPublicDate?`: string, `filterSynopsis?`: string, `filterAdvisoryType?`: string, `filterSeverity?`: string, `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹[ControllersSystemAdvisoriesResponse](interfaces/controllerssystemadvisoriesresponse.md)›*

* **listSystems**(`limit?`: number, `offset?`: number, `sort?`: "id" | "display_name" | "last_evaluation" | "last_upload" | "rhsa_count" | "rhba_count" | "rhea_count" | "stale" | "packages_installed" | "packages_updatable", `search?`: string, `filterId?`: string, `filterDisplayName?`: string, `filterLastEvaluation?`: string, `filterLastUpload?`: string, `filterRhsaCount?`: string, `filterRhbaCount?`: string, `filterRheaCount?`: string, `filterStale?`: string, `filterPackagesInstalled?`: string, `filterPackagesUpdatable?`: string, `tags?`: Array‹string›, `filterSystemProfileSapSystem?`: string, `filterSystemProfileSapSidsIn?`: Array‹string›, `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹[ControllersSystemsResponse](interfaces/controllerssystemsresponse.md)›*

* **packageSystems**(`packageName`: string, `tags?`: Array‹string›, `filterSystemProfileSapSystem?`: string, `filterSystemProfileSapSidsIn?`: Array‹string›, `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹[ControllersPackageSystemsResponse](interfaces/controllerspackagesystemsresponse.md)›*

* **systemPackages**(`inventoryId`: string, `search?`: string, `filterName?`: string, `filterDescription?`: string, `filterEvra?`: string, `filterSummary?`: string, `filterUpdatable?`: boolean, `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹[ControllersSystemPackageResponse](interfaces/controllerssystempackageresponse.md)›*

## Object literals

### `Const` COLLECTION_FORMATS

### ▪ **COLLECTION_FORMATS**: *object*

*Defined in [packages/patch/base.ts:26](https://github.com/RedHatInsights/javascript-clients/blob/efdc955/packages/patch/base.ts#L26)*

**`export`** 

###  csv

• **csv**: *string* = ","

*Defined in [packages/patch/base.ts:27](https://github.com/RedHatInsights/javascript-clients/blob/efdc955/packages/patch/base.ts#L27)*

###  pipes

• **pipes**: *string* = "|"

*Defined in [packages/patch/base.ts:30](https://github.com/RedHatInsights/javascript-clients/blob/efdc955/packages/patch/base.ts#L30)*

###  ssv

• **ssv**: *string* = " "

*Defined in [packages/patch/base.ts:28](https://github.com/RedHatInsights/javascript-clients/blob/efdc955/packages/patch/base.ts#L28)*

###  tsv

• **tsv**: *string* = "	"

*Defined in [packages/patch/base.ts:29](https://github.com/RedHatInsights/javascript-clients/blob/efdc955/packages/patch/base.ts#L29)*
