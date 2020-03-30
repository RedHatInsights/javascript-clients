[@redhat-cloud-services/vulnerabilities-client](README.md) › [Globals](globals.md)

# @redhat-cloud-services/vulnerabilities-client

## Index

### Classes

* [BaseAPI](classes/baseapi.md)
* [Configuration](classes/configuration.md)
* [DefaultApi](classes/defaultapi.md)
* [InternalApi](classes/internalapi.md)
* [RequiredError](classes/requirederror.md)

### Interfaces

* [AffectedSystemsOut](interfaces/affectedsystemsout.md)
* [BulkChangeOut](interfaces/bulkchangeout.md)
* [BusinessRiskListOut](interfaces/businessrisklistout.md)
* [BusinessRiskListOutData](interfaces/businessrisklistoutdata.md)
* [BusinessRiskListOutMeta](interfaces/businessrisklistoutmeta.md)
* [ConfigurationParameters](interfaces/configurationparameters.md)
* [CveDetailOut](interfaces/cvedetailout.md)
* [CveDetailOutData](interfaces/cvedetailoutdata.md)
* [CveDetailOutDataAttributes](interfaces/cvedetailoutdataattributes.md)
* [CveOrList](interfaces/cveorlist.md)
* [CveRiskIn](interfaces/cveriskin.md)
* [CveStatusIn](interfaces/cvestatusin.md)
* [Errors](interfaces/errors.md)
* [ErrorsErrors](interfaces/errorserrors.md)
* [ExecutiveReport](interfaces/executivereport.md)
* [ExecutiveReportCvesBySeverity](interfaces/executivereportcvesbyseverity.md)
* [ExecutiveReportCvesBySeverity0to39](interfaces/executivereportcvesbyseverity0to39.md)
* [ExecutiveReportCvesBySeverity4to79](interfaces/executivereportcvesbyseverity4to79.md)
* [ExecutiveReportCvesBySeverity8to10](interfaces/executivereportcvesbyseverity8to10.md)
* [ExecutiveReportRecentCves](interfaces/executivereportrecentcves.md)
* [ExecutiveReportTopCves](interfaces/executivereporttopcves.md)
* [InsightsRule](interfaces/insightsrule.md)
* [InventoryIdOrList](interfaces/inventoryidorlist.md)
* [Links](interfaces/links.md)
* [Meta](interfaces/meta.md)
* [MetaAffectedSystems](interfaces/metaaffectedsystems.md)
* [MetaCves](interfaces/metacves.md)
* [MetaCvesSystems](interfaces/metacvessystems.md)
* [MetaSystems](interfaces/metasystems.md)
* [MetaVulnerabilitiesOut](interfaces/metavulnerabilitiesout.md)
* [OptOutIn](interfaces/optoutin.md)
* [RequestArgs](interfaces/requestargs.md)
* [StatusIn](interfaces/statusin.md)
* [StatusListOut](interfaces/statuslistout.md)
* [StatusListOutData](interfaces/statuslistoutdata.md)
* [StatusListOutMeta](interfaces/statuslistoutmeta.md)
* [StatusOut](interfaces/statusout.md)
* [StatusOutUpdated](interfaces/statusoutupdated.md)
* [SystemCvesOut](interfaces/systemcvesout.md)
* [SystemDetailsOut](interfaces/systemdetailsout.md)
* [SystemDetailsOutData](interfaces/systemdetailsoutdata.md)
* [SystemListOut](interfaces/systemlistout.md)
* [VersionOut](interfaces/versionout.md)
* [VulnerabilitiesOut](interfaces/vulnerabilitiesout.md)

### Variables

* [BASE_PATH](globals.md#const-base_path)

### Functions

* [DefaultApiAxiosParamCreator](globals.md#const-defaultapiaxiosparamcreator)
* [DefaultApiFactory](globals.md#const-defaultapifactory)
* [DefaultApiFp](globals.md#const-defaultapifp)
* [InternalApiAxiosParamCreator](globals.md#const-internalapiaxiosparamcreator)
* [InternalApiFactory](globals.md#const-internalapifactory)
* [InternalApiFp](globals.md#const-internalapifp)

### Object literals

* [COLLECTION_FORMATS](globals.md#const-collection_formats)

## Variables

### `Const` BASE_PATH

• **BASE_PATH**: *string* =  "http://localhost".replace(/\/+$/, "")

*Defined in [git-api/api.ts:20](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L20)*

## Functions

### `Const` DefaultApiAxiosParamCreator

▸ **DefaultApiAxiosParamCreator**(`configuration?`: [Configuration](classes/configuration.md)): *object*

*Defined in [git-api/api.ts:1529](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1529)*

DefaultApi - axios parameter creator

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](classes/configuration.md) |

**Returns:** *object*

* **deleteSystem**(`inventoryId`: string, `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **getAffectedSystemsByCve**(`cveId`: string, `filter?`: string, `limit?`: number, `offset?`: number, `page?`: number, `pageSize?`: number, `sort?`: string, `statusId?`: string, `dataFormat?`: string, `securityRule?`: boolean, `ruleName?`: string, `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **getBusinessRiskList**(`options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **getCveDetails**(`cveId`: string, `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **getCveList**(`filter?`: string, `limit?`: number, `offset?`: number, `page?`: number, `pageSize?`: number, `sort?`: string, `cvssFrom?`: number, `cvssTo?`: number, `publicFrom?`: string, `publicTo?`: string, `impact?`: string, `dataFormat?`: string, `businessRiskId?`: string, `statusId?`: string, `securityRule?`: boolean, `showAll?`: boolean, `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **getCveListBySystem**(`inventoryId`: string, `filter?`: string, `limit?`: number, `offset?`: number, `page?`: number, `pageSize?`: number, `sort?`: string, `cvssFrom?`: number, `cvssTo?`: number, `publicFrom?`: string, `publicTo?`: string, `impact?`: string, `statusId?`: string, `dataFormat?`: string, `businessRiskId?`: string, `stale?`: boolean, `securityRule?`: boolean, `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **getExecutiveReport**(`options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **getStatusList**(`options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **getSystemDetails**(`inventoryId`: string, `stale?`: boolean, `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **getSystemsList**(`filter?`: string, `limit?`: number, `offset?`: number, `page?`: number, `pageSize?`: number, `sort?`: string, `dataFormat?`: string, `stale?`: boolean, `optOut?`: boolean, `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **getVersion**(`options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **setCveBusinessRisk**(`cveRiskIn`: [CveRiskIn](interfaces/cveriskin.md), `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **setCveStatus**(`cveStatusIn`: [CveStatusIn](interfaces/cvestatusin.md), `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **setStatus**(`statusIn`: [StatusIn](interfaces/statusin.md), `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **setSystemOptOut**(`inventoryId`: string, `value`: boolean, `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **setSystemsOptOut**(`optOutIn`: [OptOutIn](interfaces/optoutin.md), `options`: any): *[RequestArgs](interfaces/requestargs.md)*

___

### `Const` DefaultApiFactory

▸ **DefaultApiFactory**(`configuration?`: [Configuration](classes/configuration.md), `basePath?`: string, `axios?`: AxiosInstance): *object*

*Defined in [git-api/api.ts:2801](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L2801)*

DefaultApi - factory interface

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](classes/configuration.md) |
`basePath?` | string |
`axios?` | AxiosInstance |

**Returns:** *object*

* **deleteSystem**(`inventoryId`: string, `options?`: any): *AxiosPromise‹Response›*

* **getAffectedSystemsByCve**(`cveId`: string, `filter?`: string, `limit?`: number, `offset?`: number, `page?`: number, `pageSize?`: number, `sort?`: string, `statusId?`: string, `dataFormat?`: string, `securityRule?`: boolean, `ruleName?`: string, `options?`: any): *AxiosPromise‹[AffectedSystemsOut](interfaces/affectedsystemsout.md)›*

* **getBusinessRiskList**(`options?`: any): *AxiosPromise‹[BusinessRiskListOut](interfaces/businessrisklistout.md)›*

* **getCveDetails**(`cveId`: string, `options?`: any): *AxiosPromise‹[CveDetailOut](interfaces/cvedetailout.md)›*

* **getCveList**(`filter?`: string, `limit?`: number, `offset?`: number, `page?`: number, `pageSize?`: number, `sort?`: string, `cvssFrom?`: number, `cvssTo?`: number, `publicFrom?`: string, `publicTo?`: string, `impact?`: string, `dataFormat?`: string, `businessRiskId?`: string, `statusId?`: string, `securityRule?`: boolean, `showAll?`: boolean, `options?`: any): *AxiosPromise‹[VulnerabilitiesOut](interfaces/vulnerabilitiesout.md)›*

* **getCveListBySystem**(`inventoryId`: string, `filter?`: string, `limit?`: number, `offset?`: number, `page?`: number, `pageSize?`: number, `sort?`: string, `cvssFrom?`: number, `cvssTo?`: number, `publicFrom?`: string, `publicTo?`: string, `impact?`: string, `statusId?`: string, `dataFormat?`: string, `businessRiskId?`: string, `stale?`: boolean, `securityRule?`: boolean, `options?`: any): *AxiosPromise‹[SystemCvesOut](interfaces/systemcvesout.md)›*

* **getExecutiveReport**(`options?`: any): *AxiosPromise‹[ExecutiveReport](interfaces/executivereport.md)›*

* **getStatusList**(`options?`: any): *AxiosPromise‹[StatusListOut](interfaces/statuslistout.md)›*

* **getSystemDetails**(`inventoryId`: string, `stale?`: boolean, `options?`: any): *AxiosPromise‹[SystemDetailsOut](interfaces/systemdetailsout.md)›*

* **getSystemsList**(`filter?`: string, `limit?`: number, `offset?`: number, `page?`: number, `pageSize?`: number, `sort?`: string, `dataFormat?`: string, `stale?`: boolean, `optOut?`: boolean, `options?`: any): *AxiosPromise‹[SystemListOut](interfaces/systemlistout.md)›*

* **getVersion**(`options?`: any): *AxiosPromise‹[VersionOut](interfaces/versionout.md)›*

* **setCveBusinessRisk**(`cveRiskIn`: [CveRiskIn](interfaces/cveriskin.md), `options?`: any): *AxiosPromise‹[BulkChangeOut](interfaces/bulkchangeout.md)›*

* **setCveStatus**(`cveStatusIn`: [CveStatusIn](interfaces/cvestatusin.md), `options?`: any): *AxiosPromise‹[BulkChangeOut](interfaces/bulkchangeout.md)›*

* **setStatus**(`statusIn`: [StatusIn](interfaces/statusin.md), `options?`: any): *AxiosPromise‹[StatusOut](interfaces/statusout.md)›*

* **setSystemOptOut**(`inventoryId`: string, `value`: boolean, `options?`: any): *AxiosPromise‹Response›*

* **setSystemsOptOut**(`optOutIn`: [OptOutIn](interfaces/optoutin.md), `options?`: any): *AxiosPromise‹[BulkChangeOut](interfaces/bulkchangeout.md)›*

___

### `Const` DefaultApiFp

▸ **DefaultApiFp**(`configuration?`: [Configuration](classes/configuration.md)): *object*

*Defined in [git-api/api.ts:2521](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L2521)*

DefaultApi - functional programming interface

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](classes/configuration.md) |

**Returns:** *object*

* **deleteSystem**(`inventoryId`: string, `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹Response›*

* **getAffectedSystemsByCve**(`cveId`: string, `filter?`: string, `limit?`: number, `offset?`: number, `page?`: number, `pageSize?`: number, `sort?`: string, `statusId?`: string, `dataFormat?`: string, `securityRule?`: boolean, `ruleName?`: string, `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹[AffectedSystemsOut](interfaces/affectedsystemsout.md)›*

* **getBusinessRiskList**(`options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹[BusinessRiskListOut](interfaces/businessrisklistout.md)›*

* **getCveDetails**(`cveId`: string, `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹[CveDetailOut](interfaces/cvedetailout.md)›*

* **getCveList**(`filter?`: string, `limit?`: number, `offset?`: number, `page?`: number, `pageSize?`: number, `sort?`: string, `cvssFrom?`: number, `cvssTo?`: number, `publicFrom?`: string, `publicTo?`: string, `impact?`: string, `dataFormat?`: string, `businessRiskId?`: string, `statusId?`: string, `securityRule?`: boolean, `showAll?`: boolean, `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹[VulnerabilitiesOut](interfaces/vulnerabilitiesout.md)›*

* **getCveListBySystem**(`inventoryId`: string, `filter?`: string, `limit?`: number, `offset?`: number, `page?`: number, `pageSize?`: number, `sort?`: string, `cvssFrom?`: number, `cvssTo?`: number, `publicFrom?`: string, `publicTo?`: string, `impact?`: string, `statusId?`: string, `dataFormat?`: string, `businessRiskId?`: string, `stale?`: boolean, `securityRule?`: boolean, `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹[SystemCvesOut](interfaces/systemcvesout.md)›*

* **getExecutiveReport**(`options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹[ExecutiveReport](interfaces/executivereport.md)›*

* **getStatusList**(`options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹[StatusListOut](interfaces/statuslistout.md)›*

* **getSystemDetails**(`inventoryId`: string, `stale?`: boolean, `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹[SystemDetailsOut](interfaces/systemdetailsout.md)›*

* **getSystemsList**(`filter?`: string, `limit?`: number, `offset?`: number, `page?`: number, `pageSize?`: number, `sort?`: string, `dataFormat?`: string, `stale?`: boolean, `optOut?`: boolean, `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹[SystemListOut](interfaces/systemlistout.md)›*

* **getVersion**(`options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹[VersionOut](interfaces/versionout.md)›*

* **setCveBusinessRisk**(`cveRiskIn`: [CveRiskIn](interfaces/cveriskin.md), `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹[BulkChangeOut](interfaces/bulkchangeout.md)›*

* **setCveStatus**(`cveStatusIn`: [CveStatusIn](interfaces/cvestatusin.md), `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹[BulkChangeOut](interfaces/bulkchangeout.md)›*

* **setStatus**(`statusIn`: [StatusIn](interfaces/statusin.md), `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹[StatusOut](interfaces/statusout.md)›*

* **setSystemOptOut**(`inventoryId`: string, `value`: boolean, `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹Response›*

* **setSystemsOptOut**(`optOutIn`: [OptOutIn](interfaces/optoutin.md), `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹[BulkChangeOut](interfaces/bulkchangeout.md)›*

___

### `Const` InternalApiAxiosParamCreator

▸ **InternalApiAxiosParamCreator**(`configuration?`: [Configuration](classes/configuration.md)): *object*

*Defined in [git-api/api.ts:3265](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L3265)*

InternalApi - axios parameter creator

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](classes/configuration.md) |

**Returns:** *object*

* **refreshAccount**(`accountId`: string, `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **refreshAccountCve**(`accountId`: string, `cveId`: string, `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **refreshCve**(`cveId`: string, `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **refreshSystem**(`inventoryId`: string, `options`: any): *[RequestArgs](interfaces/requestargs.md)*

___

### `Const` InternalApiFactory

▸ **InternalApiFactory**(`configuration?`: [Configuration](classes/configuration.md), `basePath?`: string, `axios?`: AxiosInstance): *object*

*Defined in [git-api/api.ts:3534](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L3534)*

InternalApi - factory interface

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](classes/configuration.md) |
`basePath?` | string |
`axios?` | AxiosInstance |

**Returns:** *object*

* **refreshAccount**(`accountId`: string, `options?`: any): *AxiosPromise‹Response›*

* **refreshAccountCve**(`accountId`: string, `cveId`: string, `options?`: any): *AxiosPromise‹Response›*

* **refreshCve**(`cveId`: string, `options?`: any): *AxiosPromise‹Response›*

* **refreshSystem**(`inventoryId`: string, `options?`: any): *AxiosPromise‹Response›*

___

### `Const` InternalApiFp

▸ **InternalApiFp**(`configuration?`: [Configuration](classes/configuration.md)): *object*

*Defined in [git-api/api.ts:3468](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L3468)*

InternalApi - functional programming interface

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](classes/configuration.md) |

**Returns:** *object*

* **refreshAccount**(`accountId`: string, `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹Response›*

* **refreshAccountCve**(`accountId`: string, `cveId`: string, `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹Response›*

* **refreshCve**(`cveId`: string, `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹Response›*

* **refreshSystem**(`inventoryId`: string, `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹Response›*

## Object literals

### `Const` COLLECTION_FORMATS

### ▪ **COLLECTION_FORMATS**: *object*

*Defined in [git-api/api.ts:26](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L26)*

**`export`** 

###  csv

• **csv**: *string* = ","

*Defined in [git-api/api.ts:27](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L27)*

###  pipes

• **pipes**: *string* = "|"

*Defined in [git-api/api.ts:30](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L30)*

###  ssv

• **ssv**: *string* = " "

*Defined in [git-api/api.ts:28](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L28)*

###  tsv

• **tsv**: *string* = "	"

*Defined in [git-api/api.ts:29](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L29)*
