[@redhat-cloud-services/patch-client](../README.md) / [Exports](../modules.md) / DefaultApi

# Class: DefaultApi

DefaultApi - object-oriented interface

**`Export`**

## Hierarchy

- `BaseAPI`

  ↳ **`DefaultApi`**

## Table of contents

### Constructors

- [constructor](DefaultApi.md#constructor)

### Properties

- [axios](DefaultApi.md#axios)
- [basePath](DefaultApi.md#basepath)
- [configuration](DefaultApi.md#configuration)

### Methods

- [baselineDelete](DefaultApi.md#baselinedelete)
- [createBaseline](DefaultApi.md#createbaseline)
- [deletesystem](DefaultApi.md#deletesystem)
- [detailAdvisory](DefaultApi.md#detailadvisory)
- [detailBaseline](DefaultApi.md#detailbaseline)
- [detailSystem](DefaultApi.md#detailsystem)
- [exportAdvisories](DefaultApi.md#exportadvisories)
- [exportAdvisorySystems](DefaultApi.md#exportadvisorysystems)
- [exportPackageSystems](DefaultApi.md#exportpackagesystems)
- [exportPackages](DefaultApi.md#exportpackages)
- [exportSystemAdvisories](DefaultApi.md#exportsystemadvisories)
- [exportSystemPackages](DefaultApi.md#exportsystempackages)
- [exportSystems](DefaultApi.md#exportsystems)
- [latestPackage](DefaultApi.md#latestpackage)
- [listAdvisories](DefaultApi.md#listadvisories)
- [listAdvisorySystems](DefaultApi.md#listadvisorysystems)
- [listBaseline](DefaultApi.md#listbaseline)
- [listBaselineSystems](DefaultApi.md#listbaselinesystems)
- [listPackages](DefaultApi.md#listpackages)
- [listSystemAdvisories](DefaultApi.md#listsystemadvisories)
- [listSystems](DefaultApi.md#listsystems)
- [packageSystems](DefaultApi.md#packagesystems)
- [packageVersions](DefaultApi.md#packageversions)
- [removeBaselineSystems](DefaultApi.md#removebaselinesystems)
- [systemPackages](DefaultApi.md#systempackages)
- [updateBaseline](DefaultApi.md#updatebaseline)
- [viewAdvisoriesSystems](DefaultApi.md#viewadvisoriessystems)
- [viewSystemsAdvisories](DefaultApi.md#viewsystemsadvisories)

## Constructors

### constructor

• **new DefaultApi**(`configuration?`, `basePath?`, `axios?`)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `configuration?` | [`Configuration`](Configuration.md) | `undefined` |
| `basePath` | `string` | `BASE_PATH` |
| `axios` | `AxiosInstance` | `globalAxios` |

#### Inherited from

BaseAPI.constructor

#### Defined in

[base.ts:51](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/patch/base.ts#L51)

## Properties

### axios

• `Protected` **axios**: `AxiosInstance` = `globalAxios`

#### Inherited from

BaseAPI.axios

#### Defined in

[base.ts:51](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/patch/base.ts#L51)

___

### basePath

• `Protected` **basePath**: `string` = `BASE_PATH`

#### Inherited from

BaseAPI.basePath

#### Defined in

[base.ts:51](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/patch/base.ts#L51)

___

### configuration

• `Protected` **configuration**: [`Configuration`](Configuration.md)

#### Inherited from

BaseAPI.configuration

#### Defined in

[base.ts:49](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/patch/base.ts#L49)

## Methods

### baselineDelete

▸ **baselineDelete**(`baselineId`, `options?`): `Promise`<`AxiosResponse`<[`ControllersDeleteBaselineResponse`](../interfaces/ControllersDeleteBaselineResponse.md), `any`\>\>

Delete a baseline

**`Summary`**

Delete a baseline

**`Throws`**

**`Memberof`**

DefaultApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `baselineId` | `number` | Baseline ID |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`ControllersDeleteBaselineResponse`](../interfaces/ControllersDeleteBaselineResponse.md), `any`\>\>

#### Defined in

[api.ts:5266](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/patch/api.ts#L5266)

___

### createBaseline

▸ **createBaseline**(`body`, `options?`): `Promise`<`AxiosResponse`<[`ControllersCreateBaselineResponse`](../interfaces/ControllersCreateBaselineResponse.md), `any`\>\>

Create a baseline for my set of systems

**`Summary`**

Create a baseline for my set of systems

**`Throws`**

**`Memberof`**

DefaultApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `body` | [`ControllersCreateBaselineRequest`](../interfaces/ControllersCreateBaselineRequest.md) | Request body |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`ControllersCreateBaselineResponse`](../interfaces/ControllersCreateBaselineResponse.md), `any`\>\>

#### Defined in

[api.ts:5278](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/patch/api.ts#L5278)

___

### deletesystem

▸ **deletesystem**(`inventoryId`, `options?`): `Promise`<`AxiosResponse`<`void`, `any`\>\>

Delete system by inventory id

**`Summary`**

Delete system by inventory id

**`Throws`**

**`Memberof`**

DefaultApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inventoryId` | `string` | Inventory ID |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<`void`, `any`\>\>

#### Defined in

[api.ts:5290](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/patch/api.ts#L5290)

___

### detailAdvisory

▸ **detailAdvisory**(`advisoryId`, `options?`): `Promise`<`AxiosResponse`<[`ControllersAdvisoryDetailResponseV1`](../interfaces/ControllersAdvisoryDetailResponseV1.md), `any`\>\>

Show me details an advisory by given advisory name

**`Summary`**

Show me details an advisory by given advisory name

**`Throws`**

**`Memberof`**

DefaultApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `advisoryId` | `string` | Advisory ID |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`ControllersAdvisoryDetailResponseV1`](../interfaces/ControllersAdvisoryDetailResponseV1.md), `any`\>\>

#### Defined in

[api.ts:5302](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/patch/api.ts#L5302)

___

### detailBaseline

▸ **detailBaseline**(`baselineId`, `options?`): `Promise`<`AxiosResponse`<[`ControllersBaselineDetailResponse`](../interfaces/ControllersBaselineDetailResponse.md), `any`\>\>

Show baseline detail by given baseline ID

**`Summary`**

Show baseline detail by given baseline ID

**`Throws`**

**`Memberof`**

DefaultApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `baselineId` | `string` | Baseline ID |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`ControllersBaselineDetailResponse`](../interfaces/ControllersBaselineDetailResponse.md), `any`\>\>

#### Defined in

[api.ts:5314](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/patch/api.ts#L5314)

___

### detailSystem

▸ **detailSystem**(`inventoryId`, `options?`): `Promise`<`AxiosResponse`<[`ControllersSystemDetailResponse`](../interfaces/ControllersSystemDetailResponse.md), `any`\>\>

Show me details about a system by given inventory id

**`Summary`**

Show me details about a system by given inventory id

**`Throws`**

**`Memberof`**

DefaultApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inventoryId` | `string` | Inventory ID |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`ControllersSystemDetailResponse`](../interfaces/ControllersSystemDetailResponse.md), `any`\>\>

#### Defined in

[api.ts:5326](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/patch/api.ts#L5326)

___

### exportAdvisories

▸ **exportAdvisories**(`search?`, `filterId?`, `filterDescription?`, `filterPublicDate?`, `filterSynopsis?`, `filterAdvisoryType?`, `filterAdvisoryTypeName?`, `filterSeverity?`, `filterApplicableSystems?`, `options?`): `Promise`<`AxiosResponse`<[`ControllersAdvisoryInlineItem`](../interfaces/ControllersAdvisoryInlineItem.md)[], `any`\>\>

Export applicable advisories for all my systems

**`Summary`**

Export applicable advisories for all my systems

**`Throws`**

**`Memberof`**

DefaultApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `search?` | `string` | Find matching text |
| `filterId?` | `string` | Filter |
| `filterDescription?` | `string` | Filter |
| `filterPublicDate?` | `string` | Filter |
| `filterSynopsis?` | `string` | Filter |
| `filterAdvisoryType?` | `string` | Filter |
| `filterAdvisoryTypeName?` | `string` | Filter |
| `filterSeverity?` | `string` | Filter |
| `filterApplicableSystems?` | `string` | Filter |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`ControllersAdvisoryInlineItem`](../interfaces/ControllersAdvisoryInlineItem.md)[], `any`\>\>

#### Defined in

[api.ts:5346](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/patch/api.ts#L5346)

___

### exportAdvisorySystems

▸ **exportAdvisorySystems**(`advisoryId`, `search?`, `filterId?`, `filterDisplayName?`, `filterLastEvaluation?`, `filterLastUpload?`, `filterRhsaCount?`, `filterRhbaCount?`, `filterRheaCount?`, `filterOtherCount?`, `filterStale?`, `filterPackagesInstalled?`, `filterPackagesUpdatable?`, `filterSystemProfileSapSystem?`, `filterSystemProfileSapSidsIn?`, `filterSystemProfileAnsible?`, `filterSystemProfileAnsibleControllerVersion?`, `filterSystemProfileMssql?`, `filterSystemProfileMssqlVersion?`, `filterOsname?`, `filterOsminor?`, `filterOsmajor?`, `filterOs?`, `tags?`, `options?`): `Promise`<`AxiosResponse`<[`ControllersSystemInlineItem`](../interfaces/ControllersSystemInlineItem.md)[], `any`\>\>

Export systems for my account

**`Summary`**

Export systems for my account

**`Throws`**

**`Memberof`**

DefaultApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `advisoryId` | `string` | Advisory ID |
| `search?` | `string` | Find matching text |
| `filterId?` | `string` | Filter |
| `filterDisplayName?` | `string` | Filter |
| `filterLastEvaluation?` | `string` | Filter |
| `filterLastUpload?` | `string` | Filter |
| `filterRhsaCount?` | `string` | Filter |
| `filterRhbaCount?` | `string` | Filter |
| `filterRheaCount?` | `string` | Filter |
| `filterOtherCount?` | `string` | Filter |
| `filterStale?` | `string` | Filter |
| `filterPackagesInstalled?` | `string` | Filter |
| `filterPackagesUpdatable?` | `string` | Filter |
| `filterSystemProfileSapSystem?` | `string` | Filter only SAP systems |
| `filterSystemProfileSapSidsIn?` | `string`[] | Filter systems by their SAP SIDs |
| `filterSystemProfileAnsible?` | `string` | Filter systems by ansible |
| `filterSystemProfileAnsibleControllerVersion?` | `string` | Filter systems by ansible version |
| `filterSystemProfileMssql?` | `string` | Filter systems by mssql version |
| `filterSystemProfileMssqlVersion?` | `string` | Filter systems by mssql version |
| `filterOsname?` | `string` | Filter |
| `filterOsminor?` | `string` | Filter |
| `filterOsmajor?` | `string` | Filter |
| `filterOs?` | `string` | Filter OS version |
| `tags?` | `string`[] | Tag filter |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`ControllersSystemInlineItem`](../interfaces/ControllersSystemInlineItem.md)[], `any`\>\>

#### Defined in

[api.ts:5381](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/patch/api.ts#L5381)

___

### exportPackageSystems

▸ **exportPackageSystems**(`packageName`, `filterSystemProfileSapSystem?`, `filterSystemProfileSapSidsIn?`, `filterSystemProfileAnsible?`, `filterSystemProfileAnsibleControllerVersion?`, `filterSystemProfileMssql?`, `filterSystemProfileMssqlVersion?`, `tags?`, `options?`): `Promise`<`AxiosResponse`<[`ControllersPackageSystemItem`](../interfaces/ControllersPackageSystemItem.md)[], `any`\>\>

Show me all my systems which have a package installed

**`Summary`**

Show me all my systems which have a package installed

**`Throws`**

**`Memberof`**

DefaultApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `packageName` | `string` | Package name |
| `filterSystemProfileSapSystem?` | `string` | Filter only SAP systems |
| `filterSystemProfileSapSidsIn?` | `string`[] | Filter systems by their SAP SIDs |
| `filterSystemProfileAnsible?` | `string` | Filter systems by ansible |
| `filterSystemProfileAnsibleControllerVersion?` | `string` | Filter systems by ansible version |
| `filterSystemProfileMssql?` | `string` | Filter systems by mssql version |
| `filterSystemProfileMssqlVersion?` | `string` | Filter systems by mssql version |
| `tags?` | `string`[] | Tag filter |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`ControllersPackageSystemItem`](../interfaces/ControllersPackageSystemItem.md)[], `any`\>\>

#### Defined in

[api.ts:5400](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/patch/api.ts#L5400)

___

### exportPackages

▸ **exportPackages**(`sort?`, `search?`, `filterName?`, `filterSystemsInstalled?`, `filterSystemsUpdatable?`, `filterSummary?`, `options?`): `Promise`<`AxiosResponse`<[`ControllersPackageItem`](../interfaces/ControllersPackageItem.md)[], `any`\>\>

Show me all installed packages across my systems

**`Summary`**

Show me all installed packages across my systems

**`Throws`**

**`Memberof`**

DefaultApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `sort?` | ``"id"`` \| ``"name"`` \| ``"systems_installed"`` \| ``"systems_updatable"`` | Sort field |
| `search?` | `string` | Find matching text |
| `filterName?` | `string` | Filter |
| `filterSystemsInstalled?` | `string` | Filter |
| `filterSystemsUpdatable?` | `string` | Filter |
| `filterSummary?` | `string` | Filter |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`ControllersPackageItem`](../interfaces/ControllersPackageItem.md)[], `any`\>\>

#### Defined in

[api.ts:5417](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/patch/api.ts#L5417)

___

### exportSystemAdvisories

▸ **exportSystemAdvisories**(`inventoryId`, `search?`, `filterId?`, `filterDescription?`, `filterPublicDate?`, `filterSynopsis?`, `filterAdvisoryType?`, `filterAdvisoryTypeName?`, `filterSeverity?`, `options?`): `Promise`<`AxiosResponse`<[`ControllersSystemAdvisoriesDBLookup`](../interfaces/ControllersSystemAdvisoriesDBLookup.md)[], `any`\>\>

Export applicable advisories for all my systems

**`Summary`**

Export applicable advisories for all my systems

**`Throws`**

**`Memberof`**

DefaultApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inventoryId` | `string` | Inventory ID |
| `search?` | `string` | Find matching text |
| `filterId?` | `string` | Filter |
| `filterDescription?` | `string` | Filter |
| `filterPublicDate?` | `string` | Filter |
| `filterSynopsis?` | `string` | Filter |
| `filterAdvisoryType?` | `string` | Filter |
| `filterAdvisoryTypeName?` | `string` | Filter |
| `filterSeverity?` | `string` | Filter |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`ControllersSystemAdvisoriesDBLookup`](../interfaces/ControllersSystemAdvisoriesDBLookup.md)[], `any`\>\>

#### Defined in

[api.ts:5437](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/patch/api.ts#L5437)

___

### exportSystemPackages

▸ **exportSystemPackages**(`inventoryId`, `search?`, `filterName?`, `filterDescription?`, `filterEvra?`, `filterSummary?`, `filterUpdatable?`, `options?`): `Promise`<`AxiosResponse`<[`ControllersSystemPackageInline`](../interfaces/ControllersSystemPackageInline.md)[], `any`\>\>

Show me details about a system packages by given inventory id

**`Summary`**

Show me details about a system packages by given inventory id

**`Throws`**

**`Memberof`**

DefaultApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inventoryId` | `string` | Inventory ID |
| `search?` | `string` | Find matching text |
| `filterName?` | `string` | Filter |
| `filterDescription?` | `string` | Filter |
| `filterEvra?` | `string` | Filter |
| `filterSummary?` | `string` | Filter |
| `filterUpdatable?` | `boolean` | Filter |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`ControllersSystemPackageInline`](../interfaces/ControllersSystemPackageInline.md)[], `any`\>\>

#### Defined in

[api.ts:5455](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/patch/api.ts#L5455)

___

### exportSystems

▸ **exportSystems**(`search?`, `filterId?`, `filterDisplayName?`, `filterLastEvaluation?`, `filterLastUpload?`, `filterRhsaCount?`, `filterRhbaCount?`, `filterRheaCount?`, `filterOtherCount?`, `filterStale?`, `filterPackagesInstalled?`, `filterPackagesUpdatable?`, `filterSystemProfileSapSystem?`, `filterSystemProfileSapSidsIn?`, `filterSystemProfileAnsible?`, `filterSystemProfileAnsibleControllerVersion?`, `filterSystemProfileMssql?`, `filterSystemProfileMssqlVersion?`, `filterOsname?`, `filterOsminor?`, `filterOsmajor?`, `filterBaselineName?`, `filterOs?`, `tags?`, `options?`): `Promise`<`AxiosResponse`<[`ControllersSystemInlineItem`](../interfaces/ControllersSystemInlineItem.md)[], `any`\>\>

Export systems for my account

**`Summary`**

Export systems for my account

**`Throws`**

**`Memberof`**

DefaultApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `search?` | `string` | Find matching text |
| `filterId?` | `string` | Filter |
| `filterDisplayName?` | `string` | Filter |
| `filterLastEvaluation?` | `string` | Filter |
| `filterLastUpload?` | `string` | Filter |
| `filterRhsaCount?` | `string` | Filter |
| `filterRhbaCount?` | `string` | Filter |
| `filterRheaCount?` | `string` | Filter |
| `filterOtherCount?` | `string` | Filter |
| `filterStale?` | `string` | Filter |
| `filterPackagesInstalled?` | `string` | Filter |
| `filterPackagesUpdatable?` | `string` | Filter |
| `filterSystemProfileSapSystem?` | `string` | Filter only SAP systems |
| `filterSystemProfileSapSidsIn?` | `string`[] | Filter systems by their SAP SIDs |
| `filterSystemProfileAnsible?` | `string` | Filter systems by ansible |
| `filterSystemProfileAnsibleControllerVersion?` | `string` | Filter systems by ansible version |
| `filterSystemProfileMssql?` | `string` | Filter systems by mssql version |
| `filterSystemProfileMssqlVersion?` | `string` | Filter systems by mssql version |
| `filterOsname?` | `string` | Filter |
| `filterOsminor?` | `string` | Filter |
| `filterOsmajor?` | `string` | Filter |
| `filterBaselineName?` | `string` | Filter |
| `filterOs?` | `string` | Filter OS version |
| `tags?` | `string`[] | Tag filter |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`ControllersSystemInlineItem`](../interfaces/ControllersSystemInlineItem.md)[], `any`\>\>

#### Defined in

[api.ts:5490](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/patch/api.ts#L5490)

___

### latestPackage

▸ **latestPackage**(`packageName`, `options?`): `Promise`<`AxiosResponse`<[`ControllersPackageDetailResponse`](../interfaces/ControllersPackageDetailResponse.md), `any`\>\>

Show me metadata of selected package

**`Summary`**

Show me metadata of selected package

**`Throws`**

**`Memberof`**

DefaultApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `packageName` | `string` | package_name - latest, nevra - exact version |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`ControllersPackageDetailResponse`](../interfaces/ControllersPackageDetailResponse.md), `any`\>\>

#### Defined in

[api.ts:5502](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/patch/api.ts#L5502)

___

### listAdvisories

▸ **listAdvisories**(`limit?`, `offset?`, `sort?`, `search?`, `filterId?`, `filterDescription?`, `filterPublicDate?`, `filterSynopsis?`, `filterAdvisoryType?`, `filterAdvisoryTypeName?`, `filterSeverity?`, `filterApplicableSystems?`, `tags?`, `filterSystemProfileSapSystem?`, `filterSystemProfileSapSidsIn?`, `filterSystemProfileAnsible?`, `filterSystemProfileAnsibleControllerVersion?`, `filterSystemProfileMssql?`, `filterSystemProfileMssqlVersion?`, `options?`): `Promise`<`AxiosResponse`<[`ControllersAdvisoriesResponse`](../interfaces/ControllersAdvisoriesResponse.md), `any`\>\>

Show me all applicable advisories for all my systems

**`Summary`**

Show me all applicable advisories for all my systems

**`Throws`**

**`Memberof`**

DefaultApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `limit?` | `number` | Limit for paging, set -1 to return all |
| `offset?` | `number` | Offset for paging |
| `sort?` | ``"id"`` \| ``"name"`` \| ``"advisory_type"`` \| ``"synopsis"`` \| ``"public_date"`` \| ``"applicable_systems"`` | Sort field |
| `search?` | `string` | Find matching text |
| `filterId?` | `string` | Filter |
| `filterDescription?` | `string` | Filter |
| `filterPublicDate?` | `string` | Filter |
| `filterSynopsis?` | `string` | Filter |
| `filterAdvisoryType?` | `string` | Filter |
| `filterAdvisoryTypeName?` | `string` | Filter |
| `filterSeverity?` | `string` | Filter |
| `filterApplicableSystems?` | `string` | Filter |
| `tags?` | `string`[] | Tag filter |
| `filterSystemProfileSapSystem?` | `string` | Filter only SAP systems |
| `filterSystemProfileSapSidsIn?` | `string`[] | Filter systems by their SAP SIDs |
| `filterSystemProfileAnsible?` | `string` | Filter systems by ansible |
| `filterSystemProfileAnsibleControllerVersion?` | `string` | Filter systems by ansible version |
| `filterSystemProfileMssql?` | `string` | Filter systems by mssql version |
| `filterSystemProfileMssqlVersion?` | `string` | Filter systems by mssql version |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`ControllersAdvisoriesResponse`](../interfaces/ControllersAdvisoriesResponse.md), `any`\>\>

#### Defined in

[api.ts:5532](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/patch/api.ts#L5532)

___

### listAdvisorySystems

▸ **listAdvisorySystems**(`advisoryId`, `limit?`, `offset?`, `sort?`, `search?`, `filterId?`, `filterInsightsId?`, `filterDisplayName?`, `filterLastEvaluation?`, `filterLastUpload?`, `filterRhsaCount?`, `filterRhbaCount?`, `filterRheaCount?`, `filterOtherCount?`, `filterStale?`, `filterStaleTimestamp?`, `filterStaleWarningTimestamp?`, `filterCulledTimestamp?`, `filterCreated?`, `filterOsname?`, `filterOsminor?`, `filterOsmajor?`, `filterOs?`, `tags?`, `filterSystemProfileSapSystem?`, `filterSystemProfileSapSidsIn?`, `filterSystemProfileAnsible?`, `filterSystemProfileAnsibleControllerVersion?`, `filterSystemProfileMssql?`, `filterSystemProfileMssqlVersion?`, `options?`): `Promise`<`AxiosResponse`<[`ControllersAdvisorySystemsResponse`](../interfaces/ControllersAdvisorySystemsResponse.md), `any`\>\>

Show me systems on which the given advisory is applicable

**`Summary`**

Show me systems on which the given advisory is applicable

**`Throws`**

**`Memberof`**

DefaultApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `advisoryId` | `string` | Advisory ID |
| `limit?` | `number` | Limit for paging, set -1 to return all |
| `offset?` | `number` | Offset for paging |
| `sort?` | ``"id"`` \| ``"display_name"`` \| ``"last_evaluation"`` \| ``"last_upload"`` \| ``"rhsa_count"`` \| ``"rhba_count"`` \| ``"rhea_count"`` \| ``"other_count"`` \| ``"stale"`` | Sort field |
| `search?` | `string` | Find matching text |
| `filterId?` | `string` | Filter |
| `filterInsightsId?` | `string` | Filter |
| `filterDisplayName?` | `string` | Filter |
| `filterLastEvaluation?` | `string` | Filter |
| `filterLastUpload?` | `string` | Filter |
| `filterRhsaCount?` | `string` | Filter |
| `filterRhbaCount?` | `string` | Filter |
| `filterRheaCount?` | `string` | Filter |
| `filterOtherCount?` | `string` | Filter |
| `filterStale?` | `string` | Filter |
| `filterStaleTimestamp?` | `string` | Filter |
| `filterStaleWarningTimestamp?` | `string` | Filter |
| `filterCulledTimestamp?` | `string` | Filter |
| `filterCreated?` | `string` | Filter |
| `filterOsname?` | `string` | Filter |
| `filterOsminor?` | `string` | Filter |
| `filterOsmajor?` | `string` | Filter |
| `filterOs?` | `string` | Filter OS version |
| `tags?` | `string`[] | Tag filter |
| `filterSystemProfileSapSystem?` | `string` | Filter only SAP systems |
| `filterSystemProfileSapSidsIn?` | `string`[] | Filter systems by their SAP SIDs |
| `filterSystemProfileAnsible?` | `string` | Filter systems by ansible |
| `filterSystemProfileAnsibleControllerVersion?` | `string` | Filter systems by ansible version |
| `filterSystemProfileMssql?` | `string` | Filter systems by mssql version |
| `filterSystemProfileMssqlVersion?` | `string` | Filter systems by mssql version |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`ControllersAdvisorySystemsResponse`](../interfaces/ControllersAdvisorySystemsResponse.md), `any`\>\>

#### Defined in

[api.ts:5573](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/patch/api.ts#L5573)

___

### listBaseline

▸ **listBaseline**(`limit?`, `offset?`, `sort?`, `search?`, `filterId?`, `filterName?`, `filterSystems?`, `tags?`, `options?`): `Promise`<`AxiosResponse`<[`ControllersBaselinesResponse`](../interfaces/ControllersBaselinesResponse.md), `any`\>\>

Show me all baselines for all my systems

**`Summary`**

Show me all baselines for all my systems

**`Throws`**

**`Memberof`**

DefaultApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `limit?` | `number` | Limit for paging, set -1 to return all |
| `offset?` | `number` | Offset for paging |
| `sort?` | ``"id"`` \| ``"name"`` \| ``"config"`` | Sort field |
| `search?` | `string` | Find matching text |
| `filterId?` | `string` | Filter |
| `filterName?` | `string` | Filter |
| `filterSystems?` | `string` | Filter |
| `tags?` | `string`[] | Tag filter |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`ControllersBaselinesResponse`](../interfaces/ControllersBaselinesResponse.md), `any`\>\>

#### Defined in

[api.ts:5592](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/patch/api.ts#L5592)

___

### listBaselineSystems

▸ **listBaselineSystems**(`baselineId`, `limit?`, `offset?`, `sort?`, `search?`, `filterDisplayName?`, `tags?`, `options?`): `Promise`<`AxiosResponse`<[`ControllersBaselineSystemsResponse`](../interfaces/ControllersBaselineSystemsResponse.md), `any`\>\>

Show me all systems applicable to a baseline

**`Summary`**

Show me all systems belonging to a baseline

**`Throws`**

**`Memberof`**

DefaultApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `baselineId` | `number` | Baseline ID |
| `limit?` | `number` | Limit for paging, set -1 to return all |
| `offset?` | `number` | Offset for paging |
| `sort?` | ``"id"`` \| ``"name"`` \| ``"config"`` | Sort field |
| `search?` | `string` | Find matching text |
| `filterDisplayName?` | `string` | Filter |
| `tags?` | `string`[] | Tag filter |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`ControllersBaselineSystemsResponse`](../interfaces/ControllersBaselineSystemsResponse.md), `any`\>\>

#### Defined in

[api.ts:5610](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/patch/api.ts#L5610)

___

### listPackages

▸ **listPackages**(`limit?`, `offset?`, `sort?`, `search?`, `filterName?`, `filterSystemsInstalled?`, `filterSystemsUpdatable?`, `filterSummary?`, `tags?`, `filterSystemProfileSapSystem?`, `filterSystemProfileSapSidsIn?`, `filterSystemProfileAnsible?`, `filterSystemProfileAnsibleControllerVersion?`, `filterSystemProfileMssql?`, `filterSystemProfileMssqlVersion?`, `options?`): `Promise`<`AxiosResponse`<[`ControllersPackagesResponse`](../interfaces/ControllersPackagesResponse.md), `any`\>\>

Show me all installed packages across my systems

**`Summary`**

Show me all installed packages across my systems

**`Throws`**

**`Memberof`**

DefaultApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `limit?` | `number` | Limit for paging, set -1 to return all |
| `offset?` | `number` | Offset for paging |
| `sort?` | ``"id"`` \| ``"name"`` \| ``"systems_installed"`` \| ``"systems_updatable"`` | Sort field |
| `search?` | `string` | Find matching text |
| `filterName?` | `string` | Filter |
| `filterSystemsInstalled?` | `string` | Filter |
| `filterSystemsUpdatable?` | `string` | Filter |
| `filterSummary?` | `string` | Filter |
| `tags?` | `string`[] | Tag filter |
| `filterSystemProfileSapSystem?` | `string` | Filter only SAP systems |
| `filterSystemProfileSapSidsIn?` | `string`[] | Filter systems by their SAP SIDs |
| `filterSystemProfileAnsible?` | `string` | Filter systems by ansible |
| `filterSystemProfileAnsibleControllerVersion?` | `string` | Filter systems by ansible version |
| `filterSystemProfileMssql?` | `string` | Filter systems by mssql version |
| `filterSystemProfileMssqlVersion?` | `string` | Filter systems by mssql version |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`ControllersPackagesResponse`](../interfaces/ControllersPackagesResponse.md), `any`\>\>

#### Defined in

[api.ts:5636](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/patch/api.ts#L5636)

___

### listSystemAdvisories

▸ **listSystemAdvisories**(`inventoryId`, `limit?`, `offset?`, `sort?`, `search?`, `filterId?`, `filterDescription?`, `filterPublicDate?`, `filterSynopsis?`, `filterAdvisoryType?`, `filterAdvisoryTypeName?`, `filterSeverity?`, `options?`): `Promise`<`AxiosResponse`<[`ControllersSystemAdvisoriesResponse`](../interfaces/ControllersSystemAdvisoriesResponse.md), `any`\>\>

Show me advisories for a system by given inventory id

**`Summary`**

Show me advisories for a system by given inventory id

**`Throws`**

**`Memberof`**

DefaultApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inventoryId` | `string` | Inventory ID |
| `limit?` | `number` | Limit for paging, set -1 to return all |
| `offset?` | `number` | Offset for paging |
| `sort?` | ``"id"`` \| ``"name"`` \| ``"synopsis"`` \| ``"public_date"`` \| ``"type"`` | Sort field |
| `search?` | `string` | Find matching text |
| `filterId?` | `string` | Filter |
| `filterDescription?` | `string` | Filter |
| `filterPublicDate?` | `string` | Filter |
| `filterSynopsis?` | `string` | Filter |
| `filterAdvisoryType?` | `string` | Filter |
| `filterAdvisoryTypeName?` | `string` | Filter |
| `filterSeverity?` | `string` | Filter |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`ControllersSystemAdvisoriesResponse`](../interfaces/ControllersSystemAdvisoriesResponse.md), `any`\>\>

#### Defined in

[api.ts:5659](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/patch/api.ts#L5659)

___

### listSystems

▸ **listSystems**(`limit?`, `offset?`, `sort?`, `search?`, `filterInsightsId?`, `filterId?`, `filterDisplayName?`, `filterLastEvaluation?`, `filterLastUpload?`, `filterRhsaCount?`, `filterRhbaCount?`, `filterRheaCount?`, `filterOtherCount?`, `filterStale?`, `filterPackagesInstalled?`, `filterPackagesUpdatable?`, `filterStaleTimestamp?`, `filterStaleWarningTimestamp?`, `filterCulledTimestamp?`, `filterCreated?`, `filterOsname?`, `filterOsminor?`, `filterOsmajor?`, `filterBaselineName?`, `filterOs?`, `tags?`, `filterSystemProfileSapSystem?`, `filterSystemProfileSapSidsIn?`, `filterSystemProfileAnsible?`, `filterSystemProfileAnsibleControllerVersion?`, `filterSystemProfileMssql?`, `filterSystemProfileMssqlVersion?`, `options?`): `Promise`<`AxiosResponse`<[`ControllersSystemsResponse`](../interfaces/ControllersSystemsResponse.md), `any`\>\>

Show me all my systems

**`Summary`**

Show me all my systems

**`Throws`**

**`Memberof`**

DefaultApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `limit?` | `number` | Limit for paging, set -1 to return all |
| `offset?` | `number` | Offset for paging |
| `sort?` | ``"id"`` \| ``"display_name"`` \| ``"last_evaluation"`` \| ``"last_upload"`` \| ``"rhsa_count"`` \| ``"rhba_count"`` \| ``"rhea_count"`` \| ``"other_count"`` \| ``"stale"`` \| ``"packages_installed"`` \| ``"packages_updatable"`` | Sort field |
| `search?` | `string` | Find matching text |
| `filterInsightsId?` | `string` | Filter |
| `filterId?` | `string` | Filter |
| `filterDisplayName?` | `string` | Filter |
| `filterLastEvaluation?` | `string` | Filter |
| `filterLastUpload?` | `string` | Filter |
| `filterRhsaCount?` | `string` | Filter |
| `filterRhbaCount?` | `string` | Filter |
| `filterRheaCount?` | `string` | Filter |
| `filterOtherCount?` | `string` | Filter |
| `filterStale?` | `string` | Filter |
| `filterPackagesInstalled?` | `string` | Filter |
| `filterPackagesUpdatable?` | `string` | Filter |
| `filterStaleTimestamp?` | `string` | Filter |
| `filterStaleWarningTimestamp?` | `string` | Filter |
| `filterCulledTimestamp?` | `string` | Filter |
| `filterCreated?` | `string` | Filter |
| `filterOsname?` | `string` | Filter |
| `filterOsminor?` | `string` | Filter |
| `filterOsmajor?` | `string` | Filter |
| `filterBaselineName?` | `string` | Filter |
| `filterOs?` | `string` | Filter OS version |
| `tags?` | `string`[] | Tag filter |
| `filterSystemProfileSapSystem?` | `string` | Filter only SAP systems |
| `filterSystemProfileSapSidsIn?` | `string`[] | Filter systems by their SAP SIDs |
| `filterSystemProfileAnsible?` | `string` | Filter systems by ansible |
| `filterSystemProfileAnsibleControllerVersion?` | `string` | Filter systems by ansible version |
| `filterSystemProfileMssql?` | `string` | Filter systems by mssql version |
| `filterSystemProfileMssqlVersion?` | `string` | Filter systems by mssql version |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`ControllersSystemsResponse`](../interfaces/ControllersSystemsResponse.md), `any`\>\>

#### Defined in

[api.ts:5702](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/patch/api.ts#L5702)

___

### packageSystems

▸ **packageSystems**(`packageName`, `limit?`, `offset?`, `tags?`, `filterSystemProfileSapSystem?`, `filterSystemProfileSapSidsIn?`, `filterSystemProfileAnsible?`, `filterSystemProfileAnsibleControllerVersion?`, `filterSystemProfileMssql?`, `filterSystemProfileMssqlVersion?`, `options?`): `Promise`<`AxiosResponse`<[`ControllersPackageSystemsResponse`](../interfaces/ControllersPackageSystemsResponse.md), `any`\>\>

Show me all my systems which have a package installed

**`Summary`**

Show me all my systems which have a package installed

**`Throws`**

**`Memberof`**

DefaultApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `packageName` | `string` | Package name |
| `limit?` | `number` | Limit for paging, set -1 to return all |
| `offset?` | `number` | Offset for paging |
| `tags?` | `string`[] | Tag filter |
| `filterSystemProfileSapSystem?` | `string` | Filter only SAP systems |
| `filterSystemProfileSapSidsIn?` | `string`[] | Filter systems by their SAP SIDs |
| `filterSystemProfileAnsible?` | `string` | Filter systems by ansible |
| `filterSystemProfileAnsibleControllerVersion?` | `string` | Filter systems by ansible version |
| `filterSystemProfileMssql?` | `string` | Filter systems by mssql version |
| `filterSystemProfileMssqlVersion?` | `string` | Filter systems by mssql version |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`ControllersPackageSystemsResponse`](../interfaces/ControllersPackageSystemsResponse.md), `any`\>\>

#### Defined in

[api.ts:5723](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/patch/api.ts#L5723)

___

### packageVersions

▸ **packageVersions**(`packageName`, `limit?`, `offset?`, `options?`): `Promise`<`AxiosResponse`<[`ControllersPackageVersionsResponse`](../interfaces/ControllersPackageVersionsResponse.md), `any`\>\>

Show me all package versions installed on some system

**`Summary`**

Show me all package versions installed on some system

**`Throws`**

**`Memberof`**

DefaultApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `packageName` | `string` | Package name |
| `limit?` | `number` | Limit for paging, set -1 to return all |
| `offset?` | `number` | Offset for paging |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`ControllersPackageVersionsResponse`](../interfaces/ControllersPackageVersionsResponse.md), `any`\>\>

#### Defined in

[api.ts:5737](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/patch/api.ts#L5737)

___

### removeBaselineSystems

▸ **removeBaselineSystems**(`body`, `options?`): `Promise`<`AxiosResponse`<`void`, `any`\>\>

Remove systems from baseline

**`Summary`**

Remove systems from baseline

**`Throws`**

**`Memberof`**

DefaultApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `body` | [`ControllersBaselineSystemsRemoveRequest`](../interfaces/ControllersBaselineSystemsRemoveRequest.md) | Request body |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<`void`, `any`\>\>

#### Defined in

[api.ts:5749](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/patch/api.ts#L5749)

___

### systemPackages

▸ **systemPackages**(`inventoryId`, `limit?`, `offset?`, `search?`, `filterName?`, `filterDescription?`, `filterEvra?`, `filterSummary?`, `filterUpdatable?`, `options?`): `Promise`<`AxiosResponse`<[`ControllersSystemPackageResponse`](../interfaces/ControllersSystemPackageResponse.md), `any`\>\>

Show me details about a system packages by given inventory id

**`Summary`**

Show me details about a system packages by given inventory id

**`Throws`**

**`Memberof`**

DefaultApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inventoryId` | `string` | Inventory ID |
| `limit?` | `number` | Limit for paging, set -1 to return all |
| `offset?` | `number` | Offset for paging |
| `search?` | `string` | Find matching text |
| `filterName?` | `string` | Filter |
| `filterDescription?` | `string` | Filter |
| `filterEvra?` | `string` | Filter |
| `filterSummary?` | `string` | Filter |
| `filterUpdatable?` | `boolean` | Filter |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`ControllersSystemPackageResponse`](../interfaces/ControllersSystemPackageResponse.md), `any`\>\>

#### Defined in

[api.ts:5769](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/patch/api.ts#L5769)

___

### updateBaseline

▸ **updateBaseline**(`baselineId`, `body`, `options?`): `Promise`<`AxiosResponse`<[`ControllersUpdateBaselineResponse`](../interfaces/ControllersUpdateBaselineResponse.md), `any`\>\>

Update a baseline for my set of systems

**`Summary`**

Update a baseline for my set of systems

**`Throws`**

**`Memberof`**

DefaultApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `baselineId` | `number` | Baseline ID |
| `body` | [`ControllersUpdateBaselineRequest`](../interfaces/ControllersUpdateBaselineRequest.md) | Request body |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`ControllersUpdateBaselineResponse`](../interfaces/ControllersUpdateBaselineResponse.md), `any`\>\>

#### Defined in

[api.ts:5782](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/patch/api.ts#L5782)

___

### viewAdvisoriesSystems

▸ **viewAdvisoriesSystems**(`body`, `options?`): `Promise`<`AxiosResponse`<[`ControllersAdvisoriesSystemsResponse`](../interfaces/ControllersAdvisoriesSystemsResponse.md), `any`\>\>

View advisory-system pairs for selected systems and advisories

**`Summary`**

View advisory-system pairs for selected systems and advisories

**`Throws`**

**`Memberof`**

DefaultApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `body` | [`ControllersSystemsAdvisoriesRequest`](../interfaces/ControllersSystemsAdvisoriesRequest.md) | Request body |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`ControllersAdvisoriesSystemsResponse`](../interfaces/ControllersAdvisoriesSystemsResponse.md), `any`\>\>

#### Defined in

[api.ts:5794](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/patch/api.ts#L5794)

___

### viewSystemsAdvisories

▸ **viewSystemsAdvisories**(`body`, `options?`): `Promise`<`AxiosResponse`<[`ControllersSystemsAdvisoriesResponse`](../interfaces/ControllersSystemsAdvisoriesResponse.md), `any`\>\>

View system-advisory pairs for selected systems and advisories

**`Summary`**

View system-advisory pairs for selected systems and advisories

**`Throws`**

**`Memberof`**

DefaultApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `body` | [`ControllersSystemsAdvisoriesRequest`](../interfaces/ControllersSystemsAdvisoriesRequest.md) | Request body |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`ControllersSystemsAdvisoriesResponse`](../interfaces/ControllersSystemsAdvisoriesResponse.md), `any`\>\>

#### Defined in

[api.ts:5806](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/patch/api.ts#L5806)
