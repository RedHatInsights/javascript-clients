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

* [deletesystem](defaultapi.md#deletesystem)
* [detailAdvisory](defaultapi.md#detailadvisory)
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
* [listPackages](defaultapi.md#listpackages)
* [listSystemAdvisories](defaultapi.md#listsystemadvisories)
* [listSystems](defaultapi.md#listsystems)
* [packageSystems](defaultapi.md#packagesystems)
* [packageVersions](defaultapi.md#packageversions)
* [systemPackages](defaultapi.md#systempackages)
* [viewAdvisoriesSystems](defaultapi.md#viewadvisoriessystems)
* [viewSystemsAdvisories](defaultapi.md#viewsystemsadvisories)

## Constructors

###  constructor

\+ **new DefaultApi**(`configuration?`: [Configuration](configuration.md), `basePath`: string, `axios`: AxiosInstance): *[DefaultApi](defaultapi.md)*

*Inherited from [BaseAPI](baseapi.md).[constructor](baseapi.md#constructor)*

*Defined in [base.ts:49](https://github.com/RedHatInsights/javascript-clients/blob/63c8a77/packages/patch/base.ts#L49)*

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

*Defined in [base.ts:51](https://github.com/RedHatInsights/javascript-clients/blob/63c8a77/packages/patch/base.ts#L51)*

___

### `Protected` basePath

• **basePath**: *string*

*Inherited from [BaseAPI](baseapi.md).[basePath](baseapi.md#protected-basepath)*

*Defined in [base.ts:51](https://github.com/RedHatInsights/javascript-clients/blob/63c8a77/packages/patch/base.ts#L51)*

___

### `Protected` configuration

• **configuration**: *[Configuration](configuration.md) | undefined*

*Inherited from [BaseAPI](baseapi.md).[configuration](baseapi.md#protected-configuration)*

*Defined in [base.ts:49](https://github.com/RedHatInsights/javascript-clients/blob/63c8a77/packages/patch/base.ts#L49)*

## Methods

###  deletesystem

▸ **deletesystem**(`inventoryId`: string, `options?`: any): *Promise‹AxiosResponse‹void››*

*Defined in [api.ts:4638](https://github.com/RedHatInsights/javascript-clients/blob/63c8a77/packages/patch/api.ts#L4638)*

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

▸ **detailAdvisory**(`advisoryId`: string, `options?`: any): *Promise‹AxiosResponse‹[ControllersAdvisoryDetailResponse](../interfaces/controllersadvisorydetailresponse.md)››*

*Defined in [api.ts:4650](https://github.com/RedHatInsights/javascript-clients/blob/63c8a77/packages/patch/api.ts#L4650)*

Show me details an advisory by given advisory name

**`summary`** Show me details an advisory by given advisory name

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`advisoryId` | string | Advisory ID |
`options?` | any | - |

**Returns:** *Promise‹AxiosResponse‹[ControllersAdvisoryDetailResponse](../interfaces/controllersadvisorydetailresponse.md)››*

___

###  detailSystem

▸ **detailSystem**(`inventoryId`: string, `options?`: any): *Promise‹AxiosResponse‹[ControllersSystemDetailResponse](../interfaces/controllerssystemdetailresponse.md)››*

*Defined in [api.ts:4662](https://github.com/RedHatInsights/javascript-clients/blob/63c8a77/packages/patch/api.ts#L4662)*

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

*Defined in [api.ts:4682](https://github.com/RedHatInsights/javascript-clients/blob/63c8a77/packages/patch/api.ts#L4682)*

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

*Defined in [api.ts:4717](https://github.com/RedHatInsights/javascript-clients/blob/63c8a77/packages/patch/api.ts#L4717)*

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

*Defined in [api.ts:4736](https://github.com/RedHatInsights/javascript-clients/blob/63c8a77/packages/patch/api.ts#L4736)*

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

*Defined in [api.ts:4753](https://github.com/RedHatInsights/javascript-clients/blob/63c8a77/packages/patch/api.ts#L4753)*

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

*Defined in [api.ts:4773](https://github.com/RedHatInsights/javascript-clients/blob/63c8a77/packages/patch/api.ts#L4773)*

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

*Defined in [api.ts:4791](https://github.com/RedHatInsights/javascript-clients/blob/63c8a77/packages/patch/api.ts#L4791)*

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

▸ **exportSystems**(`search?`: string, `filterId?`: string, `filterDisplayName?`: string, `filterLastEvaluation?`: string, `filterLastUpload?`: string, `filterRhsaCount?`: string, `filterRhbaCount?`: string, `filterRheaCount?`: string, `filterOtherCount?`: string, `filterStale?`: string, `filterPackagesInstalled?`: string, `filterPackagesUpdatable?`: string, `filterSystemProfileSapSystem?`: string, `filterSystemProfileSapSidsIn?`: Array‹string›, `filterSystemProfileAnsible?`: string, `filterSystemProfileAnsibleControllerVersion?`: string, `filterSystemProfileMssql?`: string, `filterSystemProfileMssqlVersion?`: string, `filterOsname?`: string, `filterOsminor?`: string, `filterOsmajor?`: string, `filterOs?`: string, `tags?`: Array‹string›, `options?`: any): *Promise‹AxiosResponse‹[ControllersSystemInlineItem](../interfaces/controllerssysteminlineitem.md)[]››*

*Defined in [api.ts:4825](https://github.com/RedHatInsights/javascript-clients/blob/63c8a77/packages/patch/api.ts#L4825)*

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
`filterOs?` | string |
`tags?` | Array‹string› |
`options?` | any |

**Returns:** *Promise‹AxiosResponse‹[ControllersSystemInlineItem](../interfaces/controllerssysteminlineitem.md)[]››*

___

###  latestPackage

▸ **latestPackage**(`packageName`: string, `options?`: any): *Promise‹AxiosResponse‹[ControllersPackageDetailResponse](../interfaces/controllerspackagedetailresponse.md)››*

*Defined in [api.ts:4837](https://github.com/RedHatInsights/javascript-clients/blob/63c8a77/packages/patch/api.ts#L4837)*

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

*Defined in [api.ts:4867](https://github.com/RedHatInsights/javascript-clients/blob/63c8a77/packages/patch/api.ts#L4867)*

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

*Defined in [api.ts:4908](https://github.com/RedHatInsights/javascript-clients/blob/63c8a77/packages/patch/api.ts#L4908)*

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

###  listPackages

▸ **listPackages**(`limit?`: number, `offset?`: number, `sort?`: "id" | "name" | "systems_installed" | "systems_updatable", `search?`: string, `filterName?`: string, `filterSystemsInstalled?`: string, `filterSystemsUpdatable?`: string, `filterSummary?`: string, `tags?`: Array‹string›, `filterSystemProfileSapSystem?`: string, `filterSystemProfileSapSidsIn?`: Array‹string›, `filterSystemProfileAnsible?`: string, `filterSystemProfileAnsibleControllerVersion?`: string, `filterSystemProfileMssql?`: string, `filterSystemProfileMssqlVersion?`: string, `options?`: any): *Promise‹AxiosResponse‹[ControllersPackagesResponse](../interfaces/controllerspackagesresponse.md)››*

*Defined in [api.ts:4934](https://github.com/RedHatInsights/javascript-clients/blob/63c8a77/packages/patch/api.ts#L4934)*

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

*Defined in [api.ts:4957](https://github.com/RedHatInsights/javascript-clients/blob/63c8a77/packages/patch/api.ts#L4957)*

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

▸ **listSystems**(`limit?`: number, `offset?`: number, `sort?`: "id" | "display_name" | "last_evaluation" | "last_upload" | "rhsa_count" | "rhba_count" | "rhea_count" | "other_count" | "stale" | "packages_installed" | "packages_updatable", `search?`: string, `filterInsightsId?`: string, `filterId?`: string, `filterDisplayName?`: string, `filterLastEvaluation?`: string, `filterLastUpload?`: string, `filterRhsaCount?`: string, `filterRhbaCount?`: string, `filterRheaCount?`: string, `filterOtherCount?`: string, `filterStale?`: string, `filterPackagesInstalled?`: string, `filterPackagesUpdatable?`: string, `filterStaleTimestamp?`: string, `filterStaleWarningTimestamp?`: string, `filterCulledTimestamp?`: string, `filterCreated?`: string, `filterOsname?`: string, `filterOsminor?`: string, `filterOsmajor?`: string, `filterOs?`: string, `tags?`: Array‹string›, `filterSystemProfileSapSystem?`: string, `filterSystemProfileSapSidsIn?`: Array‹string›, `filterSystemProfileAnsible?`: string, `filterSystemProfileAnsibleControllerVersion?`: string, `filterSystemProfileMssql?`: string, `filterSystemProfileMssqlVersion?`: string, `options?`: any): *Promise‹AxiosResponse‹[ControllersSystemsResponse](../interfaces/controllerssystemsresponse.md)››*

*Defined in [api.ts:4999](https://github.com/RedHatInsights/javascript-clients/blob/63c8a77/packages/patch/api.ts#L4999)*

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

*Defined in [api.ts:5020](https://github.com/RedHatInsights/javascript-clients/blob/63c8a77/packages/patch/api.ts#L5020)*

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

*Defined in [api.ts:5034](https://github.com/RedHatInsights/javascript-clients/blob/63c8a77/packages/patch/api.ts#L5034)*

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

###  systemPackages

▸ **systemPackages**(`inventoryId`: string, `limit?`: number, `offset?`: number, `search?`: string, `filterName?`: string, `filterDescription?`: string, `filterEvra?`: string, `filterSummary?`: string, `filterUpdatable?`: boolean, `options?`: any): *Promise‹AxiosResponse‹[ControllersSystemPackageResponse](../interfaces/controllerssystempackageresponse.md)››*

*Defined in [api.ts:5054](https://github.com/RedHatInsights/javascript-clients/blob/63c8a77/packages/patch/api.ts#L5054)*

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

###  viewAdvisoriesSystems

▸ **viewAdvisoriesSystems**(`body`: [ControllersSystemsAdvisoriesRequest](../interfaces/controllerssystemsadvisoriesrequest.md), `options?`: any): *Promise‹AxiosResponse‹[ControllersAdvisoriesSystemsResponse](../interfaces/controllersadvisoriessystemsresponse.md)››*

*Defined in [api.ts:5066](https://github.com/RedHatInsights/javascript-clients/blob/63c8a77/packages/patch/api.ts#L5066)*

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

*Defined in [api.ts:5078](https://github.com/RedHatInsights/javascript-clients/blob/63c8a77/packages/patch/api.ts#L5078)*

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
