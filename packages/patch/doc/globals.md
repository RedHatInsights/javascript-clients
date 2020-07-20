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
* [ControllersSystemAdvisoriesResponse](interfaces/controllerssystemadvisoriesresponse.md)
* [ControllersSystemAdvisoryItem](interfaces/controllerssystemadvisoryitem.md)
* [ControllersSystemAdvisoryItemAttributes](interfaces/controllerssystemadvisoryitemattributes.md)
* [ControllersSystemDetailResponse](interfaces/controllerssystemdetailresponse.md)
* [ControllersSystemInlineItem](interfaces/controllerssysteminlineitem.md)
* [ControllersSystemItem](interfaces/controllerssystemitem.md)
* [ControllersSystemItemAttributes](interfaces/controllerssystemitemattributes.md)
* [ControllersSystemsResponse](interfaces/controllerssystemsresponse.md)
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

*Defined in [packages/patch/base.ts:20](https://github.com/RedHatInsights/javascript-clients/blob/6553de7/packages/patch/base.ts#L20)*

## Functions

### `Const` DefaultApiAxiosParamCreator

▸ **DefaultApiAxiosParamCreator**(`configuration?`: [Configuration](classes/configuration.md)): *object*

*Defined in [packages/patch/api.ts:640](https://github.com/RedHatInsights/javascript-clients/blob/6553de7/packages/patch/api.ts#L640)*

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

* **exportSystems**(`filterId?`: string, `filterDisplayName?`: string, `filterLastEvaluation?`: string, `filterLastUpload?`: string, `filterRhsaCount?`: string, `filterRhbaCount?`: string, `filterRheaCount?`: string, `filterEnabled?`: string, `filterStale?`: string, `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **listAdvisories**(`limit?`: number, `offset?`: number, `sort?`: "id" | "name" | "advisory_type" | "synopsis" | "public_date" | "applicable_systems", `search?`: string, `filterId?`: string, `filterDescription?`: string, `filterPublicDate?`: string, `filterSynopsis?`: string, `filterAdvisoryType?`: string, `filterSeverity?`: string, `filterApplicableSystems?`: string, `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **listAdvisorySystems**(`advisoryId`: string, `limit?`: number, `offset?`: number, `sort?`: "id" | "display_name" | "last_evaluation" | "last_upload" | "rhsa_count" | "rhba_count" | "rhea_count" | "stale", `filterId?`: string, `filterDisplayName?`: string, `filterLastEvaluation?`: string, `filterLastUpload?`: string, `filterRhsaCount?`: string, `filterRhbaCount?`: string, `filterRheaCount?`: string, `filterStale?`: string, `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **listSystemAdvisories**(`inventoryId`: string, `limit?`: number, `offset?`: number, `sort?`: "id" | "name" | "type" | "synopsis" | "public_date", `search?`: string, `filterId?`: string, `filterDescription?`: string, `filterPublicDate?`: string, `filterSynopsis?`: string, `filterAdvisoryType?`: string, `filterSeverity?`: string, `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **listSystems**(`limit?`: number, `offset?`: number, `sort?`: "id" | "display_name" | "last_evaluation" | "last_upload" | "rhsa_count" | "rhba_count" | "rhea_count" | "stale", `filterId?`: string, `filterDisplayName?`: string, `filterLastEvaluation?`: string, `filterLastUpload?`: string, `filterRhsaCount?`: string, `filterRhbaCount?`: string, `filterRheaCount?`: string, `filterStale?`: string, `options`: any): *[RequestArgs](interfaces/requestargs.md)*

___

### `Const` DefaultApiFactory

▸ **DefaultApiFactory**(`configuration?`: [Configuration](classes/configuration.md), `basePath?`: string, `axios?`: AxiosInstance): *object*

*Defined in [packages/patch/api.ts:1512](https://github.com/RedHatInsights/javascript-clients/blob/6553de7/packages/patch/api.ts#L1512)*

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

* **exportSystems**(`filterId?`: string, `filterDisplayName?`: string, `filterLastEvaluation?`: string, `filterLastUpload?`: string, `filterRhsaCount?`: string, `filterRhbaCount?`: string, `filterRheaCount?`: string, `filterEnabled?`: string, `filterStale?`: string, `options?`: any): *AxiosPromise‹Array‹[ControllersSystemInlineItem](interfaces/controllerssysteminlineitem.md)››*

* **listAdvisories**(`limit?`: number, `offset?`: number, `sort?`: "id" | "name" | "advisory_type" | "synopsis" | "public_date" | "applicable_systems", `search?`: string, `filterId?`: string, `filterDescription?`: string, `filterPublicDate?`: string, `filterSynopsis?`: string, `filterAdvisoryType?`: string, `filterSeverity?`: string, `filterApplicableSystems?`: string, `options?`: any): *AxiosPromise‹[ControllersAdvisoriesResponse](interfaces/controllersadvisoriesresponse.md)›*

* **listAdvisorySystems**(`advisoryId`: string, `limit?`: number, `offset?`: number, `sort?`: "id" | "display_name" | "last_evaluation" | "last_upload" | "rhsa_count" | "rhba_count" | "rhea_count" | "stale", `filterId?`: string, `filterDisplayName?`: string, `filterLastEvaluation?`: string, `filterLastUpload?`: string, `filterRhsaCount?`: string, `filterRhbaCount?`: string, `filterRheaCount?`: string, `filterStale?`: string, `options?`: any): *AxiosPromise‹[ControllersAdvisorySystemsResponse](interfaces/controllersadvisorysystemsresponse.md)›*

* **listSystemAdvisories**(`inventoryId`: string, `limit?`: number, `offset?`: number, `sort?`: "id" | "name" | "type" | "synopsis" | "public_date", `search?`: string, `filterId?`: string, `filterDescription?`: string, `filterPublicDate?`: string, `filterSynopsis?`: string, `filterAdvisoryType?`: string, `filterSeverity?`: string, `options?`: any): *AxiosPromise‹[ControllersSystemAdvisoriesResponse](interfaces/controllerssystemadvisoriesresponse.md)›*

* **listSystems**(`limit?`: number, `offset?`: number, `sort?`: "id" | "display_name" | "last_evaluation" | "last_upload" | "rhsa_count" | "rhba_count" | "rhea_count" | "stale", `filterId?`: string, `filterDisplayName?`: string, `filterLastEvaluation?`: string, `filterLastUpload?`: string, `filterRhsaCount?`: string, `filterRhbaCount?`: string, `filterRheaCount?`: string, `filterStale?`: string, `options?`: any): *AxiosPromise‹[ControllersSystemsResponse](interfaces/controllerssystemsresponse.md)›*

___

### `Const` DefaultApiFp

▸ **DefaultApiFp**(`configuration?`: [Configuration](classes/configuration.md)): *object*

*Defined in [packages/patch/api.ts:1321](https://github.com/RedHatInsights/javascript-clients/blob/6553de7/packages/patch/api.ts#L1321)*

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

* **exportSystems**(`filterId?`: string, `filterDisplayName?`: string, `filterLastEvaluation?`: string, `filterLastUpload?`: string, `filterRhsaCount?`: string, `filterRhbaCount?`: string, `filterRheaCount?`: string, `filterEnabled?`: string, `filterStale?`: string, `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹Array‹[ControllersSystemInlineItem](interfaces/controllerssysteminlineitem.md)››*

* **listAdvisories**(`limit?`: number, `offset?`: number, `sort?`: "id" | "name" | "advisory_type" | "synopsis" | "public_date" | "applicable_systems", `search?`: string, `filterId?`: string, `filterDescription?`: string, `filterPublicDate?`: string, `filterSynopsis?`: string, `filterAdvisoryType?`: string, `filterSeverity?`: string, `filterApplicableSystems?`: string, `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹[ControllersAdvisoriesResponse](interfaces/controllersadvisoriesresponse.md)›*

* **listAdvisorySystems**(`advisoryId`: string, `limit?`: number, `offset?`: number, `sort?`: "id" | "display_name" | "last_evaluation" | "last_upload" | "rhsa_count" | "rhba_count" | "rhea_count" | "stale", `filterId?`: string, `filterDisplayName?`: string, `filterLastEvaluation?`: string, `filterLastUpload?`: string, `filterRhsaCount?`: string, `filterRhbaCount?`: string, `filterRheaCount?`: string, `filterStale?`: string, `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹[ControllersAdvisorySystemsResponse](interfaces/controllersadvisorysystemsresponse.md)›*

* **listSystemAdvisories**(`inventoryId`: string, `limit?`: number, `offset?`: number, `sort?`: "id" | "name" | "type" | "synopsis" | "public_date", `search?`: string, `filterId?`: string, `filterDescription?`: string, `filterPublicDate?`: string, `filterSynopsis?`: string, `filterAdvisoryType?`: string, `filterSeverity?`: string, `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹[ControllersSystemAdvisoriesResponse](interfaces/controllerssystemadvisoriesresponse.md)›*

* **listSystems**(`limit?`: number, `offset?`: number, `sort?`: "id" | "display_name" | "last_evaluation" | "last_upload" | "rhsa_count" | "rhba_count" | "rhea_count" | "stale", `filterId?`: string, `filterDisplayName?`: string, `filterLastEvaluation?`: string, `filterLastUpload?`: string, `filterRhsaCount?`: string, `filterRhbaCount?`: string, `filterRheaCount?`: string, `filterStale?`: string, `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹[ControllersSystemsResponse](interfaces/controllerssystemsresponse.md)›*

## Object literals

### `Const` COLLECTION_FORMATS

### ▪ **COLLECTION_FORMATS**: *object*

*Defined in [packages/patch/base.ts:26](https://github.com/RedHatInsights/javascript-clients/blob/6553de7/packages/patch/base.ts#L26)*

**`export`** 

###  csv

• **csv**: *string* = ","

*Defined in [packages/patch/base.ts:27](https://github.com/RedHatInsights/javascript-clients/blob/6553de7/packages/patch/base.ts#L27)*

###  pipes

• **pipes**: *string* = "|"

*Defined in [packages/patch/base.ts:30](https://github.com/RedHatInsights/javascript-clients/blob/6553de7/packages/patch/base.ts#L30)*

###  ssv

• **ssv**: *string* = " "

*Defined in [packages/patch/base.ts:28](https://github.com/RedHatInsights/javascript-clients/blob/6553de7/packages/patch/base.ts#L28)*

###  tsv

• **tsv**: *string* = "	"

*Defined in [packages/patch/base.ts:29](https://github.com/RedHatInsights/javascript-clients/blob/6553de7/packages/patch/base.ts#L29)*
