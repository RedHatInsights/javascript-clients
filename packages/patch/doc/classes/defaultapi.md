[@redhat-cloud-services/patch-client](../README.md) › [Globals](../globals.md) › [DefaultApi](defaultapi.md)

# Class: DefaultApi

DefaultApi - object-oriented interface

**`export`** 

## Hierarchy

* [BaseAPI](baseapi.md)

  ↳ **DefaultApi**

## Index

### Constructors

* [constructor](defaultapi.md#constructor)

### Properties

* [axios](defaultapi.md#protected-axios)
* [basePath](defaultapi.md#protected-basepath)
* [configuration](defaultapi.md#protected-configuration)

### Methods

* [baselineDelete](defaultapi.md#baselinedelete)
* [createBaseline](defaultapi.md#createbaseline)
* [deletesystem](defaultapi.md#deletesystem)
* [detailAdvisory](defaultapi.md#detailadvisory)
* [detailBaseline](defaultapi.md#detailbaseline)
* [detailSystem](defaultapi.md#detailsystem)
* [exportAdvisories](defaultapi.md#exportadvisories)
* [exportAdvisorySystems](defaultapi.md#exportadvisorysystems)
* [exportPackageSystems](defaultapi.md#exportpackagesystems)
* [exportPackages](defaultapi.md#exportpackages)
* [exportSystemAdvisories](defaultapi.md#exportsystemadvisories)
* [exportSystemPackages](defaultapi.md#exportsystempackages)
* [exportSystems](defaultapi.md#exportsystems)
* [latestPackage](defaultapi.md#latestpackage)
* [listAdvisories](defaultapi.md#listadvisories)
* [listAdvisorySystems](defaultapi.md#listadvisorysystems)
* [listBaseline](defaultapi.md#listbaseline)
* [listBaselineSystems](defaultapi.md#listbaselinesystems)
* [listPackages](defaultapi.md#listpackages)
* [listSystemAdvisories](defaultapi.md#listsystemadvisories)
* [listSystems](defaultapi.md#listsystems)
* [packageSystems](defaultapi.md#packagesystems)
* [packageVersions](defaultapi.md#packageversions)
* [removeBaselineSystems](defaultapi.md#removebaselinesystems)
* [systemPackages](defaultapi.md#systempackages)
* [updateBaseline](defaultapi.md#updatebaseline)
* [viewAdvisoriesSystems](defaultapi.md#viewadvisoriessystems)
* [viewSystemsAdvisories](defaultapi.md#viewsystemsadvisories)

## Constructors

###  constructor

\+ **new DefaultApi**(`configuration?`: [Configuration](configuration.md), `basePath`: string, `axios`: AxiosInstance): *[DefaultApi](defaultapi.md)*

*Inherited from [BaseAPI](baseapi.md).[constructor](baseapi.md#constructor)*

*Defined in [base.ts:49](https://github.com/RedHatInsights/javascript-clients/blob/daadefd7/packages/patch/base.ts#L49)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`configuration?` | [Configuration](configuration.md) | - |
`basePath` | string | BASE_PATH |
`axios` | AxiosInstance | globalAxios |

**Returns:** *[DefaultApi](defaultapi.md)*

## Properties

### `Protected` axios

• **axios**: *AxiosInstance*

*Inherited from [BaseAPI](baseapi.md).[axios](baseapi.md#protected-axios)*

*Defined in [base.ts:51](https://github.com/RedHatInsights/javascript-clients/blob/daadefd7/packages/patch/base.ts#L51)*

___

### `Protected` basePath

• **basePath**: *string*

*Inherited from [BaseAPI](baseapi.md).[basePath](baseapi.md#protected-basepath)*

*Defined in [base.ts:51](https://github.com/RedHatInsights/javascript-clients/blob/daadefd7/packages/patch/base.ts#L51)*

___

### `Protected` configuration

• **configuration**: *[Configuration](configuration.md) | undefined*

*Inherited from [BaseAPI](baseapi.md).[configuration](baseapi.md#protected-configuration)*

*Defined in [base.ts:49](https://github.com/RedHatInsights/javascript-clients/blob/daadefd7/packages/patch/base.ts#L49)*

## Methods

###  baselineDelete

▸ **baselineDelete**(`baselineId`: number, `options?`: any): *Promise‹AxiosResponse‹[ControllersDeleteBaselineResponse](../interfaces/controllersdeletebaselineresponse.md)››*

*Defined in [api.ts:5266](https://github.com/RedHatInsights/javascript-clients/blob/daadefd7/packages/patch/api.ts#L5266)*

Delete a baseline

**`summary`** Delete a baseline

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`baselineId` | number | Baseline ID |
`options?` | any | - |

**Returns:** *Promise‹AxiosResponse‹[ControllersDeleteBaselineResponse](../interfaces/controllersdeletebaselineresponse.md)››*

___

###  createBaseline

▸ **createBaseline**(`body`: [ControllersCreateBaselineRequest](../interfaces/controllerscreatebaselinerequest.md), `options?`: any): *Promise‹AxiosResponse‹[ControllersCreateBaselineResponse](../interfaces/controllerscreatebaselineresponse.md)››*

*Defined in [api.ts:5278](https://github.com/RedHatInsights/javascript-clients/blob/daadefd7/packages/patch/api.ts#L5278)*

Create a baseline for my set of systems

**`summary`** Create a baseline for my set of systems

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`body` | [ControllersCreateBaselineRequest](../interfaces/controllerscreatebaselinerequest.md) | Request body |
`options?` | any | - |

**Returns:** *Promise‹AxiosResponse‹[ControllersCreateBaselineResponse](../interfaces/controllerscreatebaselineresponse.md)››*

___

###  deletesystem

▸ **deletesystem**(`inventoryId`: string, `options?`: any): *Promise‹AxiosResponse‹void››*

*Defined in [api.ts:5290](https://github.com/RedHatInsights/javascript-clients/blob/daadefd7/packages/patch/api.ts#L5290)*

Delete system by inventory id

**`summary`** Delete system by inventory id

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`inventoryId` | string | Inventory ID |
`options?` | any | - |

**Returns:** *Promise‹AxiosResponse‹void››*

___

###  detailAdvisory

▸ **detailAdvisory**(`advisoryId`: string, `options?`: any): *Promise‹AxiosResponse‹[ControllersAdvisoryDetailResponseV1](../interfaces/controllersadvisorydetailresponsev1.md)››*

*Defined in [api.ts:5302](https://github.com/RedHatInsights/javascript-clients/blob/daadefd7/packages/patch/api.ts#L5302)*

Show me details an advisory by given advisory name

**`summary`** Show me details an advisory by given advisory name

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`advisoryId` | string | Advisory ID |
`options?` | any | - |

**Returns:** *Promise‹AxiosResponse‹[ControllersAdvisoryDetailResponseV1](../interfaces/controllersadvisorydetailresponsev1.md)››*

___

###  detailBaseline

▸ **detailBaseline**(`baselineId`: string, `options?`: any): *Promise‹AxiosResponse‹[ControllersBaselineDetailResponse](../interfaces/controllersbaselinedetailresponse.md)››*

*Defined in [api.ts:5314](https://github.com/RedHatInsights/javascript-clients/blob/daadefd7/packages/patch/api.ts#L5314)*

Show baseline detail by given baseline ID

**`summary`** Show baseline detail by given baseline ID

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`baselineId` | string | Baseline ID |
`options?` | any | - |

**Returns:** *Promise‹AxiosResponse‹[ControllersBaselineDetailResponse](../interfaces/controllersbaselinedetailresponse.md)››*

___

###  detailSystem

▸ **detailSystem**(`inventoryId`: string, `options?`: any): *Promise‹AxiosResponse‹[ControllersSystemDetailResponse](../interfaces/controllerssystemdetailresponse.md)››*

*Defined in [api.ts:5326](https://github.com/RedHatInsights/javascript-clients/blob/daadefd7/packages/patch/api.ts#L5326)*

Show me details about a system by given inventory id

**`summary`** Show me details about a system by given inventory id

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`inventoryId` | string | Inventory ID |
`options?` | any | - |

**Returns:** *Promise‹AxiosResponse‹[ControllersSystemDetailResponse](../interfaces/controllerssystemdetailresponse.md)››*

___

###  exportAdvisories

▸ **exportAdvisories**(`search?`: string, `filterId?`: string, `filterDescription?`: string, `filterPublicDate?`: string, `filterSynopsis?`: string, `filterAdvisoryType?`: string, `filterAdvisoryTypeName?`: string, `filterSeverity?`: string, `filterApplicableSystems?`: string, `options?`: any): *Promise‹AxiosResponse‹[ControllersAdvisoryInlineItem](../interfaces/controllersadvisoryinlineitem.md)[]››*

*Defined in [api.ts:5346](https://github.com/RedHatInsights/javascript-clients/blob/daadefd7/packages/patch/api.ts#L5346)*

Export applicable advisories for all my systems

**`summary`** Export applicable advisories for all my systems

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type |
------ | ------ |
`search?` | string |
`filterId?` | string |
`filterDescription?` | string |
`filterPublicDate?` | string |
`filterSynopsis?` | string |
`filterAdvisoryType?` | string |
`filterAdvisoryTypeName?` | string |
`filterSeverity?` | string |
`filterApplicableSystems?` | string |
`options?` | any |

**Returns:** *Promise‹AxiosResponse‹[ControllersAdvisoryInlineItem](../interfaces/controllersadvisoryinlineitem.md)[]››*

___

###  exportAdvisorySystems

▸ **exportAdvisorySystems**(`advisoryId`: string, `search?`: string, `filterId?`: string, `filterDisplayName?`: string, `filterLastEvaluation?`: string, `filterLastUpload?`: string, `filterRhsaCount?`: string, `filterRhbaCount?`: string, `filterRheaCount?`: string, `filterOtherCount?`: string, `filterStale?`: string, `filterPackagesInstalled?`: string, `filterPackagesUpdatable?`: string, `filterSystemProfileSapSystem?`: string, `filterSystemProfileSapSidsIn?`: Array‹string›, `filterSystemProfileAnsible?`: string, `filterSystemProfileAnsibleControllerVersion?`: string, `filterSystemProfileMssql?`: string, `filterSystemProfileMssqlVersion?`: string, `filterOsname?`: string, `filterOsminor?`: string, `filterOsmajor?`: string, `filterOs?`: string, `tags?`: Array‹string›, `options?`: any): *Promise‹AxiosResponse‹[ControllersSystemInlineItem](../interfaces/controllerssysteminlineitem.md)[]››*

*Defined in [api.ts:5381](https://github.com/RedHatInsights/javascript-clients/blob/daadefd7/packages/patch/api.ts#L5381)*

Export systems for my account

**`summary`** Export systems for my account

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`advisoryId` | string | Advisory ID |
`search?` | string | - |
`filterId?` | string | - |
`filterDisplayName?` | string | - |
`filterLastEvaluation?` | string | - |
`filterLastUpload?` | string | - |
`filterRhsaCount?` | string | - |
`filterRhbaCount?` | string | - |
`filterRheaCount?` | string | - |
`filterOtherCount?` | string | - |
`filterStale?` | string | - |
`filterPackagesInstalled?` | string | - |
`filterPackagesUpdatable?` | string | - |
`filterSystemProfileSapSystem?` | string | - |
`filterSystemProfileSapSidsIn?` | Array‹string› | - |
`filterSystemProfileAnsible?` | string | - |
`filterSystemProfileAnsibleControllerVersion?` | string | - |
`filterSystemProfileMssql?` | string | - |
`filterSystemProfileMssqlVersion?` | string | - |
`filterOsname?` | string | - |
`filterOsminor?` | string | - |
`filterOsmajor?` | string | - |
`filterOs?` | string | - |
`tags?` | Array‹string› | - |
`options?` | any | - |

**Returns:** *Promise‹AxiosResponse‹[ControllersSystemInlineItem](../interfaces/controllerssysteminlineitem.md)[]››*

___

###  exportPackageSystems

▸ **exportPackageSystems**(`packageName`: string, `filterSystemProfileSapSystem?`: string, `filterSystemProfileSapSidsIn?`: Array‹string›, `filterSystemProfileAnsible?`: string, `filterSystemProfileAnsibleControllerVersion?`: string, `filterSystemProfileMssql?`: string, `filterSystemProfileMssqlVersion?`: string, `tags?`: Array‹string›, `options?`: any): *Promise‹AxiosResponse‹[ControllersPackageSystemItem](../interfaces/controllerspackagesystemitem.md)[]››*

*Defined in [api.ts:5400](https://github.com/RedHatInsights/javascript-clients/blob/daadefd7/packages/patch/api.ts#L5400)*

Show me all my systems which have a package installed

**`summary`** Show me all my systems which have a package installed

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`packageName` | string | Package name |
`filterSystemProfileSapSystem?` | string | - |
`filterSystemProfileSapSidsIn?` | Array‹string› | - |
`filterSystemProfileAnsible?` | string | - |
`filterSystemProfileAnsibleControllerVersion?` | string | - |
`filterSystemProfileMssql?` | string | - |
`filterSystemProfileMssqlVersion?` | string | - |
`tags?` | Array‹string› | - |
`options?` | any | - |

**Returns:** *Promise‹AxiosResponse‹[ControllersPackageSystemItem](../interfaces/controllerspackagesystemitem.md)[]››*

___

###  exportPackages

▸ **exportPackages**(`sort?`: "id" | "name" | "systems_installed" | "systems_updatable", `search?`: string, `filterName?`: string, `filterSystemsInstalled?`: string, `filterSystemsUpdatable?`: string, `filterSummary?`: string, `options?`: any): *Promise‹AxiosResponse‹[ControllersPackageItem](../interfaces/controllerspackageitem.md)[]››*

*Defined in [api.ts:5417](https://github.com/RedHatInsights/javascript-clients/blob/daadefd7/packages/patch/api.ts#L5417)*

Show me all installed packages across my systems

**`summary`** Show me all installed packages across my systems

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type |
------ | ------ |
`sort?` | "id" &#124; "name" &#124; "systems_installed" &#124; "systems_updatable" |
`search?` | string |
`filterName?` | string |
`filterSystemsInstalled?` | string |
`filterSystemsUpdatable?` | string |
`filterSummary?` | string |
`options?` | any |

**Returns:** *Promise‹AxiosResponse‹[ControllersPackageItem](../interfaces/controllerspackageitem.md)[]››*

___

###  exportSystemAdvisories

▸ **exportSystemAdvisories**(`inventoryId`: string, `search?`: string, `filterId?`: string, `filterDescription?`: string, `filterPublicDate?`: string, `filterSynopsis?`: string, `filterAdvisoryType?`: string, `filterAdvisoryTypeName?`: string, `filterSeverity?`: string, `options?`: any): *Promise‹AxiosResponse‹[ControllersSystemAdvisoriesDBLookup](../interfaces/controllerssystemadvisoriesdblookup.md)[]››*

*Defined in [api.ts:5437](https://github.com/RedHatInsights/javascript-clients/blob/daadefd7/packages/patch/api.ts#L5437)*

Export applicable advisories for all my systems

**`summary`** Export applicable advisories for all my systems

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`inventoryId` | string | Inventory ID |
`search?` | string | - |
`filterId?` | string | - |
`filterDescription?` | string | - |
`filterPublicDate?` | string | - |
`filterSynopsis?` | string | - |
`filterAdvisoryType?` | string | - |
`filterAdvisoryTypeName?` | string | - |
`filterSeverity?` | string | - |
`options?` | any | - |

**Returns:** *Promise‹AxiosResponse‹[ControllersSystemAdvisoriesDBLookup](../interfaces/controllerssystemadvisoriesdblookup.md)[]››*

___

###  exportSystemPackages

▸ **exportSystemPackages**(`inventoryId`: string, `search?`: string, `filterName?`: string, `filterDescription?`: string, `filterEvra?`: string, `filterSummary?`: string, `filterUpdatable?`: boolean, `options?`: any): *Promise‹AxiosResponse‹[ControllersSystemPackageInline](../interfaces/controllerssystempackageinline.md)[]››*

*Defined in [api.ts:5455](https://github.com/RedHatInsights/javascript-clients/blob/daadefd7/packages/patch/api.ts#L5455)*

Show me details about a system packages by given inventory id

**`summary`** Show me details about a system packages by given inventory id

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`inventoryId` | string | Inventory ID |
`search?` | string | - |
`filterName?` | string | - |
`filterDescription?` | string | - |
`filterEvra?` | string | - |
`filterSummary?` | string | - |
`filterUpdatable?` | boolean | - |
`options?` | any | - |

**Returns:** *Promise‹AxiosResponse‹[ControllersSystemPackageInline](../interfaces/controllerssystempackageinline.md)[]››*

___

###  exportSystems

▸ **exportSystems**(`search?`: string, `filterId?`: string, `filterDisplayName?`: string, `filterLastEvaluation?`: string, `filterLastUpload?`: string, `filterRhsaCount?`: string, `filterRhbaCount?`: string, `filterRheaCount?`: string, `filterOtherCount?`: string, `filterStale?`: string, `filterPackagesInstalled?`: string, `filterPackagesUpdatable?`: string, `filterSystemProfileSapSystem?`: string, `filterSystemProfileSapSidsIn?`: Array‹string›, `filterSystemProfileAnsible?`: string, `filterSystemProfileAnsibleControllerVersion?`: string, `filterSystemProfileMssql?`: string, `filterSystemProfileMssqlVersion?`: string, `filterOsname?`: string, `filterOsminor?`: string, `filterOsmajor?`: string, `filterBaselineName?`: string, `filterOs?`: string, `tags?`: Array‹string›, `options?`: any): *Promise‹AxiosResponse‹[ControllersSystemInlineItem](../interfaces/controllerssysteminlineitem.md)[]››*

*Defined in [api.ts:5490](https://github.com/RedHatInsights/javascript-clients/blob/daadefd7/packages/patch/api.ts#L5490)*

Export systems for my account

**`summary`** Export systems for my account

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type |
------ | ------ |
`search?` | string |
`filterId?` | string |
`filterDisplayName?` | string |
`filterLastEvaluation?` | string |
`filterLastUpload?` | string |
`filterRhsaCount?` | string |
`filterRhbaCount?` | string |
`filterRheaCount?` | string |
`filterOtherCount?` | string |
`filterStale?` | string |
`filterPackagesInstalled?` | string |
`filterPackagesUpdatable?` | string |
`filterSystemProfileSapSystem?` | string |
`filterSystemProfileSapSidsIn?` | Array‹string› |
`filterSystemProfileAnsible?` | string |
`filterSystemProfileAnsibleControllerVersion?` | string |
`filterSystemProfileMssql?` | string |
`filterSystemProfileMssqlVersion?` | string |
`filterOsname?` | string |
`filterOsminor?` | string |
`filterOsmajor?` | string |
`filterBaselineName?` | string |
`filterOs?` | string |
`tags?` | Array‹string› |
`options?` | any |

**Returns:** *Promise‹AxiosResponse‹[ControllersSystemInlineItem](../interfaces/controllerssysteminlineitem.md)[]››*

___

###  latestPackage

▸ **latestPackage**(`packageName`: string, `options?`: any): *Promise‹AxiosResponse‹[ControllersPackageDetailResponse](../interfaces/controllerspackagedetailresponse.md)››*

*Defined in [api.ts:5502](https://github.com/RedHatInsights/javascript-clients/blob/daadefd7/packages/patch/api.ts#L5502)*

Show me metadata of selected package

**`summary`** Show me metadata of selected package

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`packageName` | string | package_name - latest, nevra - exact version |
`options?` | any | - |

**Returns:** *Promise‹AxiosResponse‹[ControllersPackageDetailResponse](../interfaces/controllerspackagedetailresponse.md)››*

___

###  listAdvisories

▸ **listAdvisories**(`limit?`: number, `offset?`: number, `sort?`: "id" | "name" | "advisory_type" | "synopsis" | "public_date" | "applicable_systems", `search?`: string, `filterId?`: string, `filterDescription?`: string, `filterPublicDate?`: string, `filterSynopsis?`: string, `filterAdvisoryType?`: string, `filterAdvisoryTypeName?`: string, `filterSeverity?`: string, `filterApplicableSystems?`: string, `tags?`: Array‹string›, `filterSystemProfileSapSystem?`: string, `filterSystemProfileSapSidsIn?`: Array‹string›, `filterSystemProfileAnsible?`: string, `filterSystemProfileAnsibleControllerVersion?`: string, `filterSystemProfileMssql?`: string, `filterSystemProfileMssqlVersion?`: string, `options?`: any): *Promise‹AxiosResponse‹[ControllersAdvisoriesResponse](../interfaces/controllersadvisoriesresponse.md)››*

*Defined in [api.ts:5532](https://github.com/RedHatInsights/javascript-clients/blob/daadefd7/packages/patch/api.ts#L5532)*

Show me all applicable advisories for all my systems

**`summary`** Show me all applicable advisories for all my systems

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type |
------ | ------ |
`limit?` | number |
`offset?` | number |
`sort?` | "id" &#124; "name" &#124; "advisory_type" &#124; "synopsis" &#124; "public_date" &#124; "applicable_systems" |
`search?` | string |
`filterId?` | string |
`filterDescription?` | string |
`filterPublicDate?` | string |
`filterSynopsis?` | string |
`filterAdvisoryType?` | string |
`filterAdvisoryTypeName?` | string |
`filterSeverity?` | string |
`filterApplicableSystems?` | string |
`tags?` | Array‹string› |
`filterSystemProfileSapSystem?` | string |
`filterSystemProfileSapSidsIn?` | Array‹string› |
`filterSystemProfileAnsible?` | string |
`filterSystemProfileAnsibleControllerVersion?` | string |
`filterSystemProfileMssql?` | string |
`filterSystemProfileMssqlVersion?` | string |
`options?` | any |

**Returns:** *Promise‹AxiosResponse‹[ControllersAdvisoriesResponse](../interfaces/controllersadvisoriesresponse.md)››*

___

###  listAdvisorySystems

▸ **listAdvisorySystems**(`advisoryId`: string, `limit?`: number, `offset?`: number, `sort?`: "id" | "display_name" | "last_evaluation" | "last_upload" | "rhsa_count" | "rhba_count" | "rhea_count" | "other_count" | "stale", `search?`: string, `filterId?`: string, `filterInsightsId?`: string, `filterDisplayName?`: string, `filterLastEvaluation?`: string, `filterLastUpload?`: string, `filterRhsaCount?`: string, `filterRhbaCount?`: string, `filterRheaCount?`: string, `filterOtherCount?`: string, `filterStale?`: string, `filterStaleTimestamp?`: string, `filterStaleWarningTimestamp?`: string, `filterCulledTimestamp?`: string, `filterCreated?`: string, `filterOsname?`: string, `filterOsminor?`: string, `filterOsmajor?`: string, `filterOs?`: string, `tags?`: Array‹string›, `filterSystemProfileSapSystem?`: string, `filterSystemProfileSapSidsIn?`: Array‹string›, `filterSystemProfileAnsible?`: string, `filterSystemProfileAnsibleControllerVersion?`: string, `filterSystemProfileMssql?`: string, `filterSystemProfileMssqlVersion?`: string, `options?`: any): *Promise‹AxiosResponse‹[ControllersAdvisorySystemsResponse](../interfaces/controllersadvisorysystemsresponse.md)››*

*Defined in [api.ts:5573](https://github.com/RedHatInsights/javascript-clients/blob/daadefd7/packages/patch/api.ts#L5573)*

Show me systems on which the given advisory is applicable

**`summary`** Show me systems on which the given advisory is applicable

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`advisoryId` | string | Advisory ID |
`limit?` | number | - |
`offset?` | number | - |
`sort?` | "id" &#124; "display_name" &#124; "last_evaluation" &#124; "last_upload" &#124; "rhsa_count" &#124; "rhba_count" &#124; "rhea_count" &#124; "other_count" &#124; "stale" | - |
`search?` | string | - |
`filterId?` | string | - |
`filterInsightsId?` | string | - |
`filterDisplayName?` | string | - |
`filterLastEvaluation?` | string | - |
`filterLastUpload?` | string | - |
`filterRhsaCount?` | string | - |
`filterRhbaCount?` | string | - |
`filterRheaCount?` | string | - |
`filterOtherCount?` | string | - |
`filterStale?` | string | - |
`filterStaleTimestamp?` | string | - |
`filterStaleWarningTimestamp?` | string | - |
`filterCulledTimestamp?` | string | - |
`filterCreated?` | string | - |
`filterOsname?` | string | - |
`filterOsminor?` | string | - |
`filterOsmajor?` | string | - |
`filterOs?` | string | - |
`tags?` | Array‹string› | - |
`filterSystemProfileSapSystem?` | string | - |
`filterSystemProfileSapSidsIn?` | Array‹string› | - |
`filterSystemProfileAnsible?` | string | - |
`filterSystemProfileAnsibleControllerVersion?` | string | - |
`filterSystemProfileMssql?` | string | - |
`filterSystemProfileMssqlVersion?` | string | - |
`options?` | any | - |

**Returns:** *Promise‹AxiosResponse‹[ControllersAdvisorySystemsResponse](../interfaces/controllersadvisorysystemsresponse.md)››*

___

###  listBaseline

▸ **listBaseline**(`limit?`: number, `offset?`: number, `sort?`: "id" | "name" | "config", `search?`: string, `filterId?`: string, `filterName?`: string, `filterSystems?`: string, `tags?`: Array‹string›, `options?`: any): *Promise‹AxiosResponse‹[ControllersBaselinesResponse](../interfaces/controllersbaselinesresponse.md)››*

*Defined in [api.ts:5592](https://github.com/RedHatInsights/javascript-clients/blob/daadefd7/packages/patch/api.ts#L5592)*

Show me all baselines for all my systems

**`summary`** Show me all baselines for all my systems

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type |
------ | ------ |
`limit?` | number |
`offset?` | number |
`sort?` | "id" &#124; "name" &#124; "config" |
`search?` | string |
`filterId?` | string |
`filterName?` | string |
`filterSystems?` | string |
`tags?` | Array‹string› |
`options?` | any |

**Returns:** *Promise‹AxiosResponse‹[ControllersBaselinesResponse](../interfaces/controllersbaselinesresponse.md)››*

___

###  listBaselineSystems

▸ **listBaselineSystems**(`baselineId`: number, `limit?`: number, `offset?`: number, `sort?`: "id" | "name" | "config", `search?`: string, `filterDisplayName?`: string, `tags?`: Array‹string›, `options?`: any): *Promise‹AxiosResponse‹[ControllersBaselineSystemsResponse](../interfaces/controllersbaselinesystemsresponse.md)››*

*Defined in [api.ts:5610](https://github.com/RedHatInsights/javascript-clients/blob/daadefd7/packages/patch/api.ts#L5610)*

Show me all systems applicable to a baseline

**`summary`** Show me all systems belonging to a baseline

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`baselineId` | number | Baseline ID |
`limit?` | number | - |
`offset?` | number | - |
`sort?` | "id" &#124; "name" &#124; "config" | - |
`search?` | string | - |
`filterDisplayName?` | string | - |
`tags?` | Array‹string› | - |
`options?` | any | - |

**Returns:** *Promise‹AxiosResponse‹[ControllersBaselineSystemsResponse](../interfaces/controllersbaselinesystemsresponse.md)››*

___

###  listPackages

▸ **listPackages**(`limit?`: number, `offset?`: number, `sort?`: "id" | "name" | "systems_installed" | "systems_updatable", `search?`: string, `filterName?`: string, `filterSystemsInstalled?`: string, `filterSystemsUpdatable?`: string, `filterSummary?`: string, `tags?`: Array‹string›, `filterSystemProfileSapSystem?`: string, `filterSystemProfileSapSidsIn?`: Array‹string›, `filterSystemProfileAnsible?`: string, `filterSystemProfileAnsibleControllerVersion?`: string, `filterSystemProfileMssql?`: string, `filterSystemProfileMssqlVersion?`: string, `options?`: any): *Promise‹AxiosResponse‹[ControllersPackagesResponse](../interfaces/controllerspackagesresponse.md)››*

*Defined in [api.ts:5636](https://github.com/RedHatInsights/javascript-clients/blob/daadefd7/packages/patch/api.ts#L5636)*

Show me all installed packages across my systems

**`summary`** Show me all installed packages across my systems

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type |
------ | ------ |
`limit?` | number |
`offset?` | number |
`sort?` | "id" &#124; "name" &#124; "systems_installed" &#124; "systems_updatable" |
`search?` | string |
`filterName?` | string |
`filterSystemsInstalled?` | string |
`filterSystemsUpdatable?` | string |
`filterSummary?` | string |
`tags?` | Array‹string› |
`filterSystemProfileSapSystem?` | string |
`filterSystemProfileSapSidsIn?` | Array‹string› |
`filterSystemProfileAnsible?` | string |
`filterSystemProfileAnsibleControllerVersion?` | string |
`filterSystemProfileMssql?` | string |
`filterSystemProfileMssqlVersion?` | string |
`options?` | any |

**Returns:** *Promise‹AxiosResponse‹[ControllersPackagesResponse](../interfaces/controllerspackagesresponse.md)››*

___

###  listSystemAdvisories

▸ **listSystemAdvisories**(`inventoryId`: string, `limit?`: number, `offset?`: number, `sort?`: "id" | "name" | "type" | "synopsis" | "public_date", `search?`: string, `filterId?`: string, `filterDescription?`: string, `filterPublicDate?`: string, `filterSynopsis?`: string, `filterAdvisoryType?`: string, `filterAdvisoryTypeName?`: string, `filterSeverity?`: string, `options?`: any): *Promise‹AxiosResponse‹[ControllersSystemAdvisoriesResponse](../interfaces/controllerssystemadvisoriesresponse.md)››*

*Defined in [api.ts:5659](https://github.com/RedHatInsights/javascript-clients/blob/daadefd7/packages/patch/api.ts#L5659)*

Show me advisories for a system by given inventory id

**`summary`** Show me advisories for a system by given inventory id

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`inventoryId` | string | Inventory ID |
`limit?` | number | - |
`offset?` | number | - |
`sort?` | "id" &#124; "name" &#124; "type" &#124; "synopsis" &#124; "public_date" | - |
`search?` | string | - |
`filterId?` | string | - |
`filterDescription?` | string | - |
`filterPublicDate?` | string | - |
`filterSynopsis?` | string | - |
`filterAdvisoryType?` | string | - |
`filterAdvisoryTypeName?` | string | - |
`filterSeverity?` | string | - |
`options?` | any | - |

**Returns:** *Promise‹AxiosResponse‹[ControllersSystemAdvisoriesResponse](../interfaces/controllerssystemadvisoriesresponse.md)››*

___

###  listSystems

▸ **listSystems**(`limit?`: number, `offset?`: number, `sort?`: "id" | "display_name" | "last_evaluation" | "last_upload" | "rhsa_count" | "rhba_count" | "rhea_count" | "other_count" | "stale" | "packages_installed" | "packages_updatable", `search?`: string, `filterInsightsId?`: string, `filterId?`: string, `filterDisplayName?`: string, `filterLastEvaluation?`: string, `filterLastUpload?`: string, `filterRhsaCount?`: string, `filterRhbaCount?`: string, `filterRheaCount?`: string, `filterOtherCount?`: string, `filterStale?`: string, `filterPackagesInstalled?`: string, `filterPackagesUpdatable?`: string, `filterStaleTimestamp?`: string, `filterStaleWarningTimestamp?`: string, `filterCulledTimestamp?`: string, `filterCreated?`: string, `filterOsname?`: string, `filterOsminor?`: string, `filterOsmajor?`: string, `filterBaselineName?`: string, `filterOs?`: string, `tags?`: Array‹string›, `filterSystemProfileSapSystem?`: string, `filterSystemProfileSapSidsIn?`: Array‹string›, `filterSystemProfileAnsible?`: string, `filterSystemProfileAnsibleControllerVersion?`: string, `filterSystemProfileMssql?`: string, `filterSystemProfileMssqlVersion?`: string, `options?`: any): *Promise‹AxiosResponse‹[ControllersSystemsResponse](../interfaces/controllerssystemsresponse.md)››*

*Defined in [api.ts:5702](https://github.com/RedHatInsights/javascript-clients/blob/daadefd7/packages/patch/api.ts#L5702)*

Show me all my systems

**`summary`** Show me all my systems

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type |
------ | ------ |
`limit?` | number |
`offset?` | number |
`sort?` | "id" &#124; "display_name" &#124; "last_evaluation" &#124; "last_upload" &#124; "rhsa_count" &#124; "rhba_count" &#124; "rhea_count" &#124; "other_count" &#124; "stale" &#124; "packages_installed" &#124; "packages_updatable" |
`search?` | string |
`filterInsightsId?` | string |
`filterId?` | string |
`filterDisplayName?` | string |
`filterLastEvaluation?` | string |
`filterLastUpload?` | string |
`filterRhsaCount?` | string |
`filterRhbaCount?` | string |
`filterRheaCount?` | string |
`filterOtherCount?` | string |
`filterStale?` | string |
`filterPackagesInstalled?` | string |
`filterPackagesUpdatable?` | string |
`filterStaleTimestamp?` | string |
`filterStaleWarningTimestamp?` | string |
`filterCulledTimestamp?` | string |
`filterCreated?` | string |
`filterOsname?` | string |
`filterOsminor?` | string |
`filterOsmajor?` | string |
`filterBaselineName?` | string |
`filterOs?` | string |
`tags?` | Array‹string› |
`filterSystemProfileSapSystem?` | string |
`filterSystemProfileSapSidsIn?` | Array‹string› |
`filterSystemProfileAnsible?` | string |
`filterSystemProfileAnsibleControllerVersion?` | string |
`filterSystemProfileMssql?` | string |
`filterSystemProfileMssqlVersion?` | string |
`options?` | any |

**Returns:** *Promise‹AxiosResponse‹[ControllersSystemsResponse](../interfaces/controllerssystemsresponse.md)››*

___

###  packageSystems

▸ **packageSystems**(`packageName`: string, `limit?`: number, `offset?`: number, `tags?`: Array‹string›, `filterSystemProfileSapSystem?`: string, `filterSystemProfileSapSidsIn?`: Array‹string›, `filterSystemProfileAnsible?`: string, `filterSystemProfileAnsibleControllerVersion?`: string, `filterSystemProfileMssql?`: string, `filterSystemProfileMssqlVersion?`: string, `options?`: any): *Promise‹AxiosResponse‹[ControllersPackageSystemsResponse](../interfaces/controllerspackagesystemsresponse.md)››*

*Defined in [api.ts:5723](https://github.com/RedHatInsights/javascript-clients/blob/daadefd7/packages/patch/api.ts#L5723)*

Show me all my systems which have a package installed

**`summary`** Show me all my systems which have a package installed

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`packageName` | string | Package name |
`limit?` | number | - |
`offset?` | number | - |
`tags?` | Array‹string› | - |
`filterSystemProfileSapSystem?` | string | - |
`filterSystemProfileSapSidsIn?` | Array‹string› | - |
`filterSystemProfileAnsible?` | string | - |
`filterSystemProfileAnsibleControllerVersion?` | string | - |
`filterSystemProfileMssql?` | string | - |
`filterSystemProfileMssqlVersion?` | string | - |
`options?` | any | - |

**Returns:** *Promise‹AxiosResponse‹[ControllersPackageSystemsResponse](../interfaces/controllerspackagesystemsresponse.md)››*

___

###  packageVersions

▸ **packageVersions**(`packageName`: string, `limit?`: number, `offset?`: number, `options?`: any): *Promise‹AxiosResponse‹[ControllersPackageVersionsResponse](../interfaces/controllerspackageversionsresponse.md)››*

*Defined in [api.ts:5737](https://github.com/RedHatInsights/javascript-clients/blob/daadefd7/packages/patch/api.ts#L5737)*

Show me all package versions installed on some system

**`summary`** Show me all package versions installed on some system

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`packageName` | string | Package name |
`limit?` | number | - |
`offset?` | number | - |
`options?` | any | - |

**Returns:** *Promise‹AxiosResponse‹[ControllersPackageVersionsResponse](../interfaces/controllerspackageversionsresponse.md)››*

___

###  removeBaselineSystems

▸ **removeBaselineSystems**(`body`: [ControllersBaselineSystemsRemoveRequest](../interfaces/controllersbaselinesystemsremoverequest.md), `options?`: any): *Promise‹AxiosResponse‹void››*

*Defined in [api.ts:5749](https://github.com/RedHatInsights/javascript-clients/blob/daadefd7/packages/patch/api.ts#L5749)*

Remove systems from baseline

**`summary`** Remove systems from baseline

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`body` | [ControllersBaselineSystemsRemoveRequest](../interfaces/controllersbaselinesystemsremoverequest.md) | Request body |
`options?` | any | - |

**Returns:** *Promise‹AxiosResponse‹void››*

___

###  systemPackages

▸ **systemPackages**(`inventoryId`: string, `limit?`: number, `offset?`: number, `search?`: string, `filterName?`: string, `filterDescription?`: string, `filterEvra?`: string, `filterSummary?`: string, `filterUpdatable?`: boolean, `options?`: any): *Promise‹AxiosResponse‹[ControllersSystemPackageResponse](../interfaces/controllerssystempackageresponse.md)››*

*Defined in [api.ts:5769](https://github.com/RedHatInsights/javascript-clients/blob/daadefd7/packages/patch/api.ts#L5769)*

Show me details about a system packages by given inventory id

**`summary`** Show me details about a system packages by given inventory id

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`inventoryId` | string | Inventory ID |
`limit?` | number | - |
`offset?` | number | - |
`search?` | string | - |
`filterName?` | string | - |
`filterDescription?` | string | - |
`filterEvra?` | string | - |
`filterSummary?` | string | - |
`filterUpdatable?` | boolean | - |
`options?` | any | - |

**Returns:** *Promise‹AxiosResponse‹[ControllersSystemPackageResponse](../interfaces/controllerssystempackageresponse.md)››*

___

###  updateBaseline

▸ **updateBaseline**(`baselineId`: number, `body`: [ControllersUpdateBaselineRequest](../interfaces/controllersupdatebaselinerequest.md), `options?`: any): *Promise‹AxiosResponse‹[ControllersUpdateBaselineResponse](../interfaces/controllersupdatebaselineresponse.md)››*

*Defined in [api.ts:5782](https://github.com/RedHatInsights/javascript-clients/blob/daadefd7/packages/patch/api.ts#L5782)*

Update a baseline for my set of systems

**`summary`** Update a baseline for my set of systems

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`baselineId` | number | Baseline ID |
`body` | [ControllersUpdateBaselineRequest](../interfaces/controllersupdatebaselinerequest.md) | Request body |
`options?` | any | - |

**Returns:** *Promise‹AxiosResponse‹[ControllersUpdateBaselineResponse](../interfaces/controllersupdatebaselineresponse.md)››*

___

###  viewAdvisoriesSystems

▸ **viewAdvisoriesSystems**(`body`: [ControllersSystemsAdvisoriesRequest](../interfaces/controllerssystemsadvisoriesrequest.md), `options?`: any): *Promise‹AxiosResponse‹[ControllersAdvisoriesSystemsResponse](../interfaces/controllersadvisoriessystemsresponse.md)››*

*Defined in [api.ts:5794](https://github.com/RedHatInsights/javascript-clients/blob/daadefd7/packages/patch/api.ts#L5794)*

View advisory-system pairs for selected systems and advisories

**`summary`** View advisory-system pairs for selected systems and advisories

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`body` | [ControllersSystemsAdvisoriesRequest](../interfaces/controllerssystemsadvisoriesrequest.md) | Request body |
`options?` | any | - |

**Returns:** *Promise‹AxiosResponse‹[ControllersAdvisoriesSystemsResponse](../interfaces/controllersadvisoriessystemsresponse.md)››*

___

###  viewSystemsAdvisories

▸ **viewSystemsAdvisories**(`body`: [ControllersSystemsAdvisoriesRequest](../interfaces/controllerssystemsadvisoriesrequest.md), `options?`: any): *Promise‹AxiosResponse‹[ControllersSystemsAdvisoriesResponse](../interfaces/controllerssystemsadvisoriesresponse.md)››*

*Defined in [api.ts:5806](https://github.com/RedHatInsights/javascript-clients/blob/daadefd7/packages/patch/api.ts#L5806)*

View system-advisory pairs for selected systems and advisories

**`summary`** View system-advisory pairs for selected systems and advisories

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`body` | [ControllersSystemsAdvisoriesRequest](../interfaces/controllerssystemsadvisoriesrequest.md) | Request body |
`options?` | any | - |

**Returns:** *Promise‹AxiosResponse‹[ControllersSystemsAdvisoriesResponse](../interfaces/controllerssystemsadvisoriesresponse.md)››*
