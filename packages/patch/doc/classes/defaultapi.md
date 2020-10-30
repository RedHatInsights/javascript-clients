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
* [exportSystems](defaultapi.md#exportsystems)
* [latestPackage](defaultapi.md#latestpackage)
* [listAdvisories](defaultapi.md#listadvisories)
* [listAdvisorySystems](defaultapi.md#listadvisorysystems)
* [listPackages](defaultapi.md#listpackages)
* [listSystemAdvisories](defaultapi.md#listsystemadvisories)
* [listSystems](defaultapi.md#listsystems)
* [packageSystems](defaultapi.md#packagesystems)
* [systemPackages](defaultapi.md#systempackages)

## Constructors

###  constructor

\+ **new DefaultApi**(`configuration?`: [Configuration](configuration.md), `basePath`: string, `axios`: AxiosInstance): *[DefaultApi](defaultapi.md)*

*Inherited from [BaseAPI](baseapi.md).[constructor](baseapi.md#constructor)*

*Defined in [packages/patch/base.ts:49](https://github.com/RedHatInsights/javascript-clients/blob/33e5630/packages/patch/base.ts#L49)*

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

*Defined in [packages/patch/base.ts:51](https://github.com/RedHatInsights/javascript-clients/blob/33e5630/packages/patch/base.ts#L51)*

___

### `Protected` basePath

• **basePath**: *string*

*Inherited from [BaseAPI](baseapi.md).[basePath](baseapi.md#protected-basepath)*

*Defined in [packages/patch/base.ts:51](https://github.com/RedHatInsights/javascript-clients/blob/33e5630/packages/patch/base.ts#L51)*

___

### `Protected` configuration

• **configuration**: *[Configuration](configuration.md) | undefined*

*Inherited from [BaseAPI](baseapi.md).[configuration](baseapi.md#protected-configuration)*

*Defined in [packages/patch/base.ts:49](https://github.com/RedHatInsights/javascript-clients/blob/33e5630/packages/patch/base.ts#L49)*

## Methods

###  deletesystem

▸ **deletesystem**(`inventoryId`: string, `options?`: any): *AxiosPromise‹void›*

*Defined in [packages/patch/api.ts:2498](https://github.com/RedHatInsights/javascript-clients/blob/33e5630/packages/patch/api.ts#L2498)*

Delete system by inventory id

**`summary`** Delete system by inventory id

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`inventoryId` | string | Inventory ID |
`options?` | any | - |

**Returns:** *AxiosPromise‹void›*

___

###  detailAdvisory

▸ **detailAdvisory**(`advisoryId`: string, `options?`: any): *AxiosPromise‹[ControllersAdvisoryDetailResponse](../interfaces/controllersadvisorydetailresponse.md)›*

*Defined in [packages/patch/api.ts:2510](https://github.com/RedHatInsights/javascript-clients/blob/33e5630/packages/patch/api.ts#L2510)*

Show me details an advisory by given advisory name

**`summary`** Show me details an advisory by given advisory name

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`advisoryId` | string | Advisory ID |
`options?` | any | - |

**Returns:** *AxiosPromise‹[ControllersAdvisoryDetailResponse](../interfaces/controllersadvisorydetailresponse.md)›*

___

###  detailSystem

▸ **detailSystem**(`inventoryId`: string, `options?`: any): *AxiosPromise‹[ControllersSystemDetailResponse](../interfaces/controllerssystemdetailresponse.md)›*

*Defined in [packages/patch/api.ts:2522](https://github.com/RedHatInsights/javascript-clients/blob/33e5630/packages/patch/api.ts#L2522)*

Show me details about a system by given inventory id

**`summary`** Show me details about a system by given inventory id

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`inventoryId` | string | Inventory ID |
`options?` | any | - |

**Returns:** *AxiosPromise‹[ControllersSystemDetailResponse](../interfaces/controllerssystemdetailresponse.md)›*

___

###  exportAdvisories

▸ **exportAdvisories**(`search?`: string, `filterId?`: string, `filterDescription?`: string, `filterPublicDate?`: string, `filterSynopsis?`: string, `filterAdvisoryType?`: string, `filterSeverity?`: string, `filterApplicableSystems?`: string, `options?`: any): *AxiosPromise‹[ControllersAdvisoryInlineItem](../interfaces/controllersadvisoryinlineitem.md)[]›*

*Defined in [packages/patch/api.ts:2541](https://github.com/RedHatInsights/javascript-clients/blob/33e5630/packages/patch/api.ts#L2541)*

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
`filterSeverity?` | string |
`filterApplicableSystems?` | string |
`options?` | any |

**Returns:** *AxiosPromise‹[ControllersAdvisoryInlineItem](../interfaces/controllersadvisoryinlineitem.md)[]›*

___

###  exportSystems

▸ **exportSystems**(`search?`: string, `filterId?`: string, `filterDisplayName?`: string, `filterLastEvaluation?`: string, `filterLastUpload?`: string, `filterRhsaCount?`: string, `filterRhbaCount?`: string, `filterRheaCount?`: string, `filterStale?`: string, `filterPackagesInstalled?`: string, `filterPackagesUpdatable?`: string, `tags?`: Array‹string›, `options?`: any): *AxiosPromise‹[ControllersSystemInlineItem](../interfaces/controllerssysteminlineitem.md)[]›*

*Defined in [packages/patch/api.ts:2564](https://github.com/RedHatInsights/javascript-clients/blob/33e5630/packages/patch/api.ts#L2564)*

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
`filterStale?` | string |
`filterPackagesInstalled?` | string |
`filterPackagesUpdatable?` | string |
`tags?` | Array‹string› |
`options?` | any |

**Returns:** *AxiosPromise‹[ControllersSystemInlineItem](../interfaces/controllerssysteminlineitem.md)[]›*

___

###  latestPackage

▸ **latestPackage**(`packageName`: string, `options?`: any): *AxiosPromise‹[ControllersPackageDetailResponse](../interfaces/controllerspackagedetailresponse.md)›*

*Defined in [packages/patch/api.ts:2576](https://github.com/RedHatInsights/javascript-clients/blob/33e5630/packages/patch/api.ts#L2576)*

Show me metadata of selected package

**`summary`** Show me metadata of selected package

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`packageName` | string | package_name - latest, nevra - exact version |
`options?` | any | - |

**Returns:** *AxiosPromise‹[ControllersPackageDetailResponse](../interfaces/controllerspackagedetailresponse.md)›*

___

###  listAdvisories

▸ **listAdvisories**(`limit?`: number, `offset?`: number, `sort?`: "id" | "name" | "advisory_type" | "synopsis" | "public_date" | "applicable_systems", `search?`: string, `filterId?`: string, `filterDescription?`: string, `filterPublicDate?`: string, `filterSynopsis?`: string, `filterAdvisoryType?`: string, `filterSeverity?`: string, `filterApplicableSystems?`: string, `tags?`: Array‹string›, `filterSystemProfileSapSystem?`: string, `filterSystemProfileSapSidsIn?`: Array‹string›, `options?`: any): *AxiosPromise‹[ControllersAdvisoriesResponse](../interfaces/controllersadvisoriesresponse.md)›*

*Defined in [packages/patch/api.ts:2601](https://github.com/RedHatInsights/javascript-clients/blob/33e5630/packages/patch/api.ts#L2601)*

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
`filterSeverity?` | string |
`filterApplicableSystems?` | string |
`tags?` | Array‹string› |
`filterSystemProfileSapSystem?` | string |
`filterSystemProfileSapSidsIn?` | Array‹string› |
`options?` | any |

**Returns:** *AxiosPromise‹[ControllersAdvisoriesResponse](../interfaces/controllersadvisoriesresponse.md)›*

___

###  listAdvisorySystems

▸ **listAdvisorySystems**(`advisoryId`: string, `limit?`: number, `offset?`: number, `sort?`: "id" | "display_name" | "last_evaluation" | "last_upload" | "rhsa_count" | "rhba_count" | "rhea_count" | "stale", `search?`: string, `filterId?`: string, `filterDisplayName?`: string, `filterLastEvaluation?`: string, `filterLastUpload?`: string, `filterRhsaCount?`: string, `filterRhbaCount?`: string, `filterRheaCount?`: string, `filterStale?`: string, `tags?`: Array‹string›, `filterSystemProfileSapSystem?`: string, `filterSystemProfileSapSidsIn?`: Array‹string›, `options?`: any): *AxiosPromise‹[ControllersAdvisorySystemsResponse](../interfaces/controllersadvisorysystemsresponse.md)›*

*Defined in [packages/patch/api.ts:2628](https://github.com/RedHatInsights/javascript-clients/blob/33e5630/packages/patch/api.ts#L2628)*

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
`sort?` | "id" &#124; "display_name" &#124; "last_evaluation" &#124; "last_upload" &#124; "rhsa_count" &#124; "rhba_count" &#124; "rhea_count" &#124; "stale" | - |
`search?` | string | - |
`filterId?` | string | - |
`filterDisplayName?` | string | - |
`filterLastEvaluation?` | string | - |
`filterLastUpload?` | string | - |
`filterRhsaCount?` | string | - |
`filterRhbaCount?` | string | - |
`filterRheaCount?` | string | - |
`filterStale?` | string | - |
`tags?` | Array‹string› | - |
`filterSystemProfileSapSystem?` | string | - |
`filterSystemProfileSapSidsIn?` | Array‹string› | - |
`options?` | any | - |

**Returns:** *AxiosPromise‹[ControllersAdvisorySystemsResponse](../interfaces/controllersadvisorysystemsresponse.md)›*

___

###  listPackages

▸ **listPackages**(`limit?`: number, `offset?`: number, `sort?`: "id" | "name" | "systems_installed" | "systems_updatable", `search?`: string, `filterName?`: string, `filterSystemsInstalled?`: string, `filterSystemsUpdatable?`: string, `filterSummary?`: string, `tags?`: Array‹string›, `filterSystemProfileSapSystem?`: string, `filterSystemProfileSapSidsIn?`: Array‹string›, `options?`: any): *AxiosPromise‹[ControllersPackagesResponse](../interfaces/controllerspackagesresponse.md)›*

*Defined in [packages/patch/api.ts:2650](https://github.com/RedHatInsights/javascript-clients/blob/33e5630/packages/patch/api.ts#L2650)*

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
`options?` | any |

**Returns:** *AxiosPromise‹[ControllersPackagesResponse](../interfaces/controllerspackagesresponse.md)›*

___

###  listSystemAdvisories

▸ **listSystemAdvisories**(`inventoryId`: string, `limit?`: number, `offset?`: number, `sort?`: "id" | "name" | "type" | "synopsis" | "public_date", `search?`: string, `filterId?`: string, `filterDescription?`: string, `filterPublicDate?`: string, `filterSynopsis?`: string, `filterAdvisoryType?`: string, `filterSeverity?`: string, `options?`: any): *AxiosPromise‹[ControllersSystemAdvisoriesResponse](../interfaces/controllerssystemadvisoriesresponse.md)›*

*Defined in [packages/patch/api.ts:2672](https://github.com/RedHatInsights/javascript-clients/blob/33e5630/packages/patch/api.ts#L2672)*

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
`filterSeverity?` | string | - |
`options?` | any | - |

**Returns:** *AxiosPromise‹[ControllersSystemAdvisoriesResponse](../interfaces/controllerssystemadvisoriesresponse.md)›*

___

###  listSystems

▸ **listSystems**(`limit?`: number, `offset?`: number, `sort?`: "id" | "display_name" | "last_evaluation" | "last_upload" | "rhsa_count" | "rhba_count" | "rhea_count" | "stale" | "packages_installed" | "packages_updatable", `search?`: string, `filterId?`: string, `filterDisplayName?`: string, `filterLastEvaluation?`: string, `filterLastUpload?`: string, `filterRhsaCount?`: string, `filterRhbaCount?`: string, `filterRheaCount?`: string, `filterStale?`: string, `filterPackagesInstalled?`: string, `filterPackagesUpdatable?`: string, `tags?`: Array‹string›, `filterSystemProfileSapSystem?`: string, `filterSystemProfileSapSidsIn?`: Array‹string›, `options?`: any): *AxiosPromise‹[ControllersSystemsResponse](../interfaces/controllerssystemsresponse.md)›*

*Defined in [packages/patch/api.ts:2700](https://github.com/RedHatInsights/javascript-clients/blob/33e5630/packages/patch/api.ts#L2700)*

Show me all my systems

**`summary`** Show me all my systems

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type |
------ | ------ |
`limit?` | number |
`offset?` | number |
`sort?` | "id" &#124; "display_name" &#124; "last_evaluation" &#124; "last_upload" &#124; "rhsa_count" &#124; "rhba_count" &#124; "rhea_count" &#124; "stale" &#124; "packages_installed" &#124; "packages_updatable" |
`search?` | string |
`filterId?` | string |
`filterDisplayName?` | string |
`filterLastEvaluation?` | string |
`filterLastUpload?` | string |
`filterRhsaCount?` | string |
`filterRhbaCount?` | string |
`filterRheaCount?` | string |
`filterStale?` | string |
`filterPackagesInstalled?` | string |
`filterPackagesUpdatable?` | string |
`tags?` | Array‹string› |
`filterSystemProfileSapSystem?` | string |
`filterSystemProfileSapSidsIn?` | Array‹string› |
`options?` | any |

**Returns:** *AxiosPromise‹[ControllersSystemsResponse](../interfaces/controllerssystemsresponse.md)›*

___

###  packageSystems

▸ **packageSystems**(`packageName`: string, `tags?`: Array‹string›, `filterSystemProfileSapSystem?`: string, `filterSystemProfileSapSidsIn?`: Array‹string›, `options?`: any): *AxiosPromise‹[ControllersPackageSystemsResponse](../interfaces/controllerspackagesystemsresponse.md)›*

*Defined in [packages/patch/api.ts:2715](https://github.com/RedHatInsights/javascript-clients/blob/33e5630/packages/patch/api.ts#L2715)*

Show me all my systems which have a package installed

**`summary`** Show me all my systems which have a package installed

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`packageName` | string | Package name |
`tags?` | Array‹string› | - |
`filterSystemProfileSapSystem?` | string | - |
`filterSystemProfileSapSidsIn?` | Array‹string› | - |
`options?` | any | - |

**Returns:** *AxiosPromise‹[ControllersPackageSystemsResponse](../interfaces/controllerspackagesystemsresponse.md)›*

___

###  systemPackages

▸ **systemPackages**(`inventoryId`: string, `search?`: string, `filterName?`: string, `filterDescription?`: string, `filterEvra?`: string, `filterSummary?`: string, `filterUpdatable?`: boolean, `options?`: any): *AxiosPromise‹[ControllersSystemPackageResponse](../interfaces/controllerssystempackageresponse.md)›*

*Defined in [packages/patch/api.ts:2733](https://github.com/RedHatInsights/javascript-clients/blob/33e5630/packages/patch/api.ts#L2733)*

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

**Returns:** *AxiosPromise‹[ControllersSystemPackageResponse](../interfaces/controllerssystempackageresponse.md)›*
