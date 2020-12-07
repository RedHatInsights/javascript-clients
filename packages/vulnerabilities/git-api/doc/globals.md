[@redhat-cloud-services/vulnerabilities-client](README.md) › [Globals](globals.md)

# @redhat-cloud-services/vulnerabilities-client

## Index

### Classes

* [BaseAPI](classes/baseapi.md)
* [Configuration](classes/configuration.md)
* [DefaultApi](classes/defaultapi.md)
* [RequiredError](classes/requirederror.md)

### Interfaces

* [AffectedSystemsIdsOut](interfaces/affectedsystemsidsout.md)
* [AffectedSystemsOut](interfaces/affectedsystemsout.md)
* [BulkChangeOut](interfaces/bulkchangeout.md)
* [BusinessRiskListOut](interfaces/businessrisklistout.md)
* [BusinessRiskListOutData](interfaces/businessrisklistoutdata.md)
* [BusinessRiskListOutMeta](interfaces/businessrisklistoutmeta.md)
* [ConfigurationParameters](interfaces/configurationparameters.md)
* [CveDetailOut](interfaces/cvedetailout.md)
* [CveDetailOutData](interfaces/cvedetailoutdata.md)
* [CveDetailOutDataAttributes](interfaces/cvedetailoutdataattributes.md)
* [CveRiskIn](interfaces/cveriskin.md)
* [CveStatusIn](interfaces/cvestatusin.md)
* [Errors](interfaces/errors.md)
* [ErrorsErrors](interfaces/errorserrors.md)
* [ExecutiveReport](interfaces/executivereport.md)
* [ExecutiveReportCvesBySeverity](interfaces/executivereportcvesbyseverity.md)
* [ExecutiveReportCvesBySeverity0to39](interfaces/executivereportcvesbyseverity0to39.md)
* [ExecutiveReportCvesBySeverity4to79](interfaces/executivereportcvesbyseverity4to79.md)
* [ExecutiveReportCvesBySeverity8to10](interfaces/executivereportcvesbyseverity8to10.md)
* [ExecutiveReportCvesBySeverityNa](interfaces/executivereportcvesbyseverityna.md)
* [ExecutiveReportRecentCves](interfaces/executivereportrecentcves.md)
* [ExecutiveReportTopCves](interfaces/executivereporttopcves.md)
* [InsightsRule](interfaces/insightsrule.md)
* [Links](interfaces/links.md)
* [Meta](interfaces/meta.md)
* [MetaAffectedSystems](interfaces/metaaffectedsystems.md)
* [MetaAffectedSystemsAllOf](interfaces/metaaffectedsystemsallof.md)
* [MetaCves](interfaces/metacves.md)
* [MetaCvesAllOf](interfaces/metacvesallof.md)
* [MetaCvesSystems](interfaces/metacvessystems.md)
* [MetaCvesSystemsAllOf](interfaces/metacvessystemsallof.md)
* [MetaSystems](interfaces/metasystems.md)
* [MetaSystemsAllOf](interfaces/metasystemsallof.md)
* [MetaVulnerabilitiesOut](interfaces/metavulnerabilitiesout.md)
* [MetaVulnerabilitiesOutAllOf](interfaces/metavulnerabilitiesoutallof.md)
* [OptOutIn](interfaces/optoutin.md)
* [PlaybookTemplate](interfaces/playbooktemplate.md)
* [PlaybookTemplateData](interfaces/playbooktemplatedata.md)
* [RequestArgs](interfaces/requestargs.md)
* [StatusIn](interfaces/statusin.md)
* [StatusListOut](interfaces/statuslistout.md)
* [StatusListOutData](interfaces/statuslistoutdata.md)
* [StatusListOutMeta](interfaces/statuslistoutmeta.md)
* [StatusOut](interfaces/statusout.md)
* [StatusOutUpdated](interfaces/statusoutupdated.md)
* [SystemCvesIdsOut](interfaces/systemcvesidsout.md)
* [SystemCvesOut](interfaces/systemcvesout.md)
* [SystemDetailsOut](interfaces/systemdetailsout.md)
* [SystemDetailsOutData](interfaces/systemdetailsoutdata.md)
* [SystemDetailsOutDataTags](interfaces/systemdetailsoutdatatags.md)
* [SystemIdsOut](interfaces/systemidsout.md)
* [SystemListOut](interfaces/systemlistout.md)
* [VersionOut](interfaces/versionout.md)
* [VulnerabilitiesIdsOut](interfaces/vulnerabilitiesidsout.md)
* [VulnerabilitiesOut](interfaces/vulnerabilitiesout.md)

### Type aliases

* [CveOrList](globals.md#cveorlist)
* [InventoryIdOrList](globals.md#inventoryidorlist)

### Variables

* [BASE_PATH](globals.md#const-base_path)

### Functions

* [DefaultApiAxiosParamCreator](globals.md#const-defaultapiaxiosparamcreator)
* [DefaultApiFactory](globals.md#const-defaultapifactory)
* [DefaultApiFp](globals.md#const-defaultapifp)

### Object literals

* [COLLECTION_FORMATS](globals.md#const-collection_formats)

## Type aliases

###  CveOrList

Ƭ **CveOrList**: *Array‹string› | string*

*Defined in [packages/vulnerabilities/git-api/api.ts:317](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L317)*

**`export`** 

___

###  InventoryIdOrList

Ƭ **InventoryIdOrList**: *Array‹string› | string*

*Defined in [packages/vulnerabilities/git-api/api.ts:678](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L678)*

**`export`** 

## Variables

### `Const` BASE_PATH

• **BASE_PATH**: *string* = "http://localhost".replace(/\/+$/, "")

*Defined in [packages/vulnerabilities/git-api/base.ts:20](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/base.ts#L20)*

## Functions

### `Const` DefaultApiAxiosParamCreator

▸ **DefaultApiAxiosParamCreator**(`configuration?`: [Configuration](classes/configuration.md)): *object*

*Defined in [packages/vulnerabilities/git-api/api.ts:1940](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1940)*

DefaultApi - axios parameter creator

**`export`** 

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](classes/configuration.md) |

**Returns:** *object*

* **deleteSystem**(`inventoryId`: string, `options`: any): *Promise‹[RequestArgs](interfaces/requestargs.md)›*

* **getAffectedSystemsByCve**(`cveId`: string, `filter?`: string, `limit?`: number, `offset?`: number, `page?`: number, `pageSize?`: number, `sort?`: string, `statusId?`: string, `dataFormat?`: string, `uuid?`: string, `ruleKey?`: Array‹string›, `rulePresence?`: Array‹boolean›, `tags?`: Array‹string›, `sapSids?`: Array‹string›, `sapSystem?`: boolean, `showAdvisories?`: boolean, `advisory?`: string, `securityRule?`: string, `options`: any): *Promise‹[RequestArgs](interfaces/requestargs.md)›*

* **getAffectedSystemsIdsByCve**(`cveId`: string, `filter?`: string, `limit?`: number, `offset?`: number, `page?`: number, `pageSize?`: number, `sort?`: string, `statusId?`: string, `dataFormat?`: string, `uuid?`: string, `ruleKey?`: Array‹string›, `rulePresence?`: Array‹boolean›, `tags?`: Array‹string›, `sapSids?`: Array‹string›, `sapSystem?`: boolean, `showAdvisories?`: boolean, `advisory?`: string, `securityRule?`: string, `options`: any): *Promise‹[RequestArgs](interfaces/requestargs.md)›*

* **getApiStatus**(`options`: any): *Promise‹[RequestArgs](interfaces/requestargs.md)›*

* **getBusinessRiskList**(`options`: any): *Promise‹[RequestArgs](interfaces/requestargs.md)›*

* **getCveDetails**(`cveId`: string, `showAdvisoriesDetails?`: boolean, `options`: any): *Promise‹[RequestArgs](interfaces/requestargs.md)›*

* **getCveIdsBySystem**(`inventoryId`: string, `filter?`: string, `limit?`: number, `offset?`: number, `page?`: number, `pageSize?`: number, `sort?`: string, `cvssFrom?`: number, `cvssTo?`: number, `publicFrom?`: string, `publicTo?`: string, `impact?`: string, `statusId?`: string, `dataFormat?`: string, `businessRiskId?`: string, `securityRule?`: boolean, `rulePresence?`: Array‹boolean›, `options`: any): *Promise‹[RequestArgs](interfaces/requestargs.md)›*

* **getCveIdsList**(`filter?`: string, `limit?`: number, `offset?`: number, `page?`: number, `pageSize?`: number, `sort?`: string, `cvssFrom?`: number, `cvssTo?`: number, `publicFrom?`: string, `publicTo?`: string, `impact?`: string, `dataFormat?`: string, `businessRiskId?`: string, `statusId?`: string, `securityRule?`: boolean, `rulePresence?`: Array‹boolean›, `showAll?`: boolean, `affecting?`: Array‹boolean›, `options`: any): *Promise‹[RequestArgs](interfaces/requestargs.md)›*

* **getCveList**(`filter?`: string, `limit?`: number, `offset?`: number, `page?`: number, `pageSize?`: number, `sort?`: string, `cvssFrom?`: number, `cvssTo?`: number, `publicFrom?`: string, `publicTo?`: string, `impact?`: string, `dataFormat?`: string, `businessRiskId?`: string, `statusId?`: string, `securityRule?`: boolean, `rulePresence?`: Array‹boolean›, `showAll?`: boolean, `affecting?`: Array‹boolean›, `options`: any): *Promise‹[RequestArgs](interfaces/requestargs.md)›*

* **getCveListBySystem**(`inventoryId`: string, `filter?`: string, `limit?`: number, `offset?`: number, `page?`: number, `pageSize?`: number, `sort?`: string, `cvssFrom?`: number, `cvssTo?`: number, `publicFrom?`: string, `publicTo?`: string, `impact?`: string, `statusId?`: string, `dataFormat?`: string, `businessRiskId?`: string, `securityRule?`: boolean, `rulePresence?`: Array‹boolean›, `showAdvisories?`: boolean, `advisory?`: string, `options`: any): *Promise‹[RequestArgs](interfaces/requestargs.md)›*

* **getExecutiveReport**(`options`: any): *Promise‹[RequestArgs](interfaces/requestargs.md)›*

* **getPlaybookTemplate**(`ruleId`: string, `options`: any): *Promise‹[RequestArgs](interfaces/requestargs.md)›*

* **getStatusList**(`options`: any): *Promise‹[RequestArgs](interfaces/requestargs.md)›*

* **getSystemDetails**(`inventoryId`: string, `options`: any): *Promise‹[RequestArgs](interfaces/requestargs.md)›*

* **getSystemsIds**(`filter?`: string, `limit?`: number, `offset?`: number, `page?`: number, `pageSize?`: number, `sort?`: string, `dataFormat?`: string, `stale?`: boolean, `uuid?`: string, `tags?`: Array‹string›, `sapSids?`: Array‹string›, `sapSystem?`: boolean, `optOut?`: boolean, `excluded?`: Array‹boolean›, `options`: any): *Promise‹[RequestArgs](interfaces/requestargs.md)›*

* **getSystemsList**(`filter?`: string, `limit?`: number, `offset?`: number, `page?`: number, `pageSize?`: number, `sort?`: string, `dataFormat?`: string, `stale?`: boolean, `uuid?`: string, `tags?`: Array‹string›, `sapSids?`: Array‹string›, `sapSystem?`: boolean, `optOut?`: boolean, `excluded?`: Array‹boolean›, `options`: any): *Promise‹[RequestArgs](interfaces/requestargs.md)›*

* **getVersion**(`options`: any): *Promise‹[RequestArgs](interfaces/requestargs.md)›*

* **setCveBusinessRisk**(`cveRiskIn`: [CveRiskIn](interfaces/cveriskin.md), `options`: any): *Promise‹[RequestArgs](interfaces/requestargs.md)›*

* **setCveStatus**(`cveStatusIn`: [CveStatusIn](interfaces/cvestatusin.md), `options`: any): *Promise‹[RequestArgs](interfaces/requestargs.md)›*

* **setStatus**(`statusIn`: [StatusIn](interfaces/statusin.md), `options`: any): *Promise‹[RequestArgs](interfaces/requestargs.md)›*

* **setSystemOptOut**(`inventoryId`: string, `value`: boolean, `options`: any): *Promise‹[RequestArgs](interfaces/requestargs.md)›*

* **setSystemsOptOut**(`optOutIn`: [OptOutIn](interfaces/optoutin.md), `options`: any): *Promise‹[RequestArgs](interfaces/requestargs.md)›*

___

### `Const` DefaultApiFactory

▸ **DefaultApiFactory**(`configuration?`: [Configuration](classes/configuration.md), `basePath?`: string, `axios?`: AxiosInstance): *object*

*Defined in [packages/vulnerabilities/git-api/api.ts:4095](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L4095)*

DefaultApi - factory interface

**`export`** 

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](classes/configuration.md) |
`basePath?` | string |
`axios?` | AxiosInstance |

**Returns:** *object*

* **deleteSystem**(`inventoryId`: string, `options?`: any): *AxiosPromise‹void›*

* **getAffectedSystemsByCve**(`cveId`: string, `filter?`: string, `limit?`: number, `offset?`: number, `page?`: number, `pageSize?`: number, `sort?`: string, `statusId?`: string, `dataFormat?`: string, `uuid?`: string, `ruleKey?`: Array‹string›, `rulePresence?`: Array‹boolean›, `tags?`: Array‹string›, `sapSids?`: Array‹string›, `sapSystem?`: boolean, `showAdvisories?`: boolean, `advisory?`: string, `securityRule?`: string, `options?`: any): *AxiosPromise‹[AffectedSystemsOut](interfaces/affectedsystemsout.md)›*

* **getAffectedSystemsIdsByCve**(`cveId`: string, `filter?`: string, `limit?`: number, `offset?`: number, `page?`: number, `pageSize?`: number, `sort?`: string, `statusId?`: string, `dataFormat?`: string, `uuid?`: string, `ruleKey?`: Array‹string›, `rulePresence?`: Array‹boolean›, `tags?`: Array‹string›, `sapSids?`: Array‹string›, `sapSystem?`: boolean, `showAdvisories?`: boolean, `advisory?`: string, `securityRule?`: string, `options?`: any): *AxiosPromise‹[AffectedSystemsIdsOut](interfaces/affectedsystemsidsout.md)›*

* **getApiStatus**(`options?`: any): *AxiosPromise‹void›*

* **getBusinessRiskList**(`options?`: any): *AxiosPromise‹[BusinessRiskListOut](interfaces/businessrisklistout.md)›*

* **getCveDetails**(`cveId`: string, `showAdvisoriesDetails?`: boolean, `options?`: any): *AxiosPromise‹[CveDetailOut](interfaces/cvedetailout.md)›*

* **getCveIdsBySystem**(`inventoryId`: string, `filter?`: string, `limit?`: number, `offset?`: number, `page?`: number, `pageSize?`: number, `sort?`: string, `cvssFrom?`: number, `cvssTo?`: number, `publicFrom?`: string, `publicTo?`: string, `impact?`: string, `statusId?`: string, `dataFormat?`: string, `businessRiskId?`: string, `securityRule?`: boolean, `rulePresence?`: Array‹boolean›, `options?`: any): *AxiosPromise‹[SystemCvesIdsOut](interfaces/systemcvesidsout.md)›*

* **getCveIdsList**(`filter?`: string, `limit?`: number, `offset?`: number, `page?`: number, `pageSize?`: number, `sort?`: string, `cvssFrom?`: number, `cvssTo?`: number, `publicFrom?`: string, `publicTo?`: string, `impact?`: string, `dataFormat?`: string, `businessRiskId?`: string, `statusId?`: string, `securityRule?`: boolean, `rulePresence?`: Array‹boolean›, `showAll?`: boolean, `affecting?`: Array‹boolean›, `options?`: any): *AxiosPromise‹[VulnerabilitiesIdsOut](interfaces/vulnerabilitiesidsout.md)›*

* **getCveList**(`filter?`: string, `limit?`: number, `offset?`: number, `page?`: number, `pageSize?`: number, `sort?`: string, `cvssFrom?`: number, `cvssTo?`: number, `publicFrom?`: string, `publicTo?`: string, `impact?`: string, `dataFormat?`: string, `businessRiskId?`: string, `statusId?`: string, `securityRule?`: boolean, `rulePresence?`: Array‹boolean›, `showAll?`: boolean, `affecting?`: Array‹boolean›, `options?`: any): *AxiosPromise‹[VulnerabilitiesOut](interfaces/vulnerabilitiesout.md)›*

* **getCveListBySystem**(`inventoryId`: string, `filter?`: string, `limit?`: number, `offset?`: number, `page?`: number, `pageSize?`: number, `sort?`: string, `cvssFrom?`: number, `cvssTo?`: number, `publicFrom?`: string, `publicTo?`: string, `impact?`: string, `statusId?`: string, `dataFormat?`: string, `businessRiskId?`: string, `securityRule?`: boolean, `rulePresence?`: Array‹boolean›, `showAdvisories?`: boolean, `advisory?`: string, `options?`: any): *AxiosPromise‹[SystemCvesOut](interfaces/systemcvesout.md)›*

* **getExecutiveReport**(`options?`: any): *AxiosPromise‹[ExecutiveReport](interfaces/executivereport.md)›*

* **getPlaybookTemplate**(`ruleId`: string, `options?`: any): *AxiosPromise‹[PlaybookTemplate](interfaces/playbooktemplate.md)›*

* **getStatusList**(`options?`: any): *AxiosPromise‹[StatusListOut](interfaces/statuslistout.md)›*

* **getSystemDetails**(`inventoryId`: string, `options?`: any): *AxiosPromise‹[SystemDetailsOut](interfaces/systemdetailsout.md)›*

* **getSystemsIds**(`filter?`: string, `limit?`: number, `offset?`: number, `page?`: number, `pageSize?`: number, `sort?`: string, `dataFormat?`: string, `stale?`: boolean, `uuid?`: string, `tags?`: Array‹string›, `sapSids?`: Array‹string›, `sapSystem?`: boolean, `optOut?`: boolean, `excluded?`: Array‹boolean›, `options?`: any): *AxiosPromise‹[SystemIdsOut](interfaces/systemidsout.md)›*

* **getSystemsList**(`filter?`: string, `limit?`: number, `offset?`: number, `page?`: number, `pageSize?`: number, `sort?`: string, `dataFormat?`: string, `stale?`: boolean, `uuid?`: string, `tags?`: Array‹string›, `sapSids?`: Array‹string›, `sapSystem?`: boolean, `optOut?`: boolean, `excluded?`: Array‹boolean›, `options?`: any): *AxiosPromise‹[SystemListOut](interfaces/systemlistout.md)›*

* **getVersion**(`options?`: any): *AxiosPromise‹[VersionOut](interfaces/versionout.md)›*

* **setCveBusinessRisk**(`cveRiskIn`: [CveRiskIn](interfaces/cveriskin.md), `options?`: any): *AxiosPromise‹[BulkChangeOut](interfaces/bulkchangeout.md)›*

* **setCveStatus**(`cveStatusIn`: [CveStatusIn](interfaces/cvestatusin.md), `options?`: any): *AxiosPromise‹[BulkChangeOut](interfaces/bulkchangeout.md)›*

* **setStatus**(`statusIn`: [StatusIn](interfaces/statusin.md), `options?`: any): *AxiosPromise‹[StatusOut](interfaces/statusout.md)›*

* **setSystemOptOut**(`inventoryId`: string, `value`: boolean, `options?`: any): *AxiosPromise‹void›*

* **setSystemsOptOut**(`optOutIn`: [OptOutIn](interfaces/optoutin.md), `options?`: any): *AxiosPromise‹[BulkChangeOut](interfaces/bulkchangeout.md)›*

___

### `Const` DefaultApiFp

▸ **DefaultApiFp**(`configuration?`: [Configuration](classes/configuration.md)): *object*

*Defined in [packages/vulnerabilities/git-api/api.ts:3653](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L3653)*

DefaultApi - functional programming interface

**`export`** 

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](classes/configuration.md) |

**Returns:** *object*

* **deleteSystem**(`inventoryId`: string, `options?`: any): *Promise‹function›*

* **getAffectedSystemsByCve**(`cveId`: string, `filter?`: string, `limit?`: number, `offset?`: number, `page?`: number, `pageSize?`: number, `sort?`: string, `statusId?`: string, `dataFormat?`: string, `uuid?`: string, `ruleKey?`: Array‹string›, `rulePresence?`: Array‹boolean›, `tags?`: Array‹string›, `sapSids?`: Array‹string›, `sapSystem?`: boolean, `showAdvisories?`: boolean, `advisory?`: string, `securityRule?`: string, `options?`: any): *Promise‹function›*

* **getAffectedSystemsIdsByCve**(`cveId`: string, `filter?`: string, `limit?`: number, `offset?`: number, `page?`: number, `pageSize?`: number, `sort?`: string, `statusId?`: string, `dataFormat?`: string, `uuid?`: string, `ruleKey?`: Array‹string›, `rulePresence?`: Array‹boolean›, `tags?`: Array‹string›, `sapSids?`: Array‹string›, `sapSystem?`: boolean, `showAdvisories?`: boolean, `advisory?`: string, `securityRule?`: string, `options?`: any): *Promise‹function›*

* **getApiStatus**(`options?`: any): *Promise‹function›*

* **getBusinessRiskList**(`options?`: any): *Promise‹function›*

* **getCveDetails**(`cveId`: string, `showAdvisoriesDetails?`: boolean, `options?`: any): *Promise‹function›*

* **getCveIdsBySystem**(`inventoryId`: string, `filter?`: string, `limit?`: number, `offset?`: number, `page?`: number, `pageSize?`: number, `sort?`: string, `cvssFrom?`: number, `cvssTo?`: number, `publicFrom?`: string, `publicTo?`: string, `impact?`: string, `statusId?`: string, `dataFormat?`: string, `businessRiskId?`: string, `securityRule?`: boolean, `rulePresence?`: Array‹boolean›, `options?`: any): *Promise‹function›*

* **getCveIdsList**(`filter?`: string, `limit?`: number, `offset?`: number, `page?`: number, `pageSize?`: number, `sort?`: string, `cvssFrom?`: number, `cvssTo?`: number, `publicFrom?`: string, `publicTo?`: string, `impact?`: string, `dataFormat?`: string, `businessRiskId?`: string, `statusId?`: string, `securityRule?`: boolean, `rulePresence?`: Array‹boolean›, `showAll?`: boolean, `affecting?`: Array‹boolean›, `options?`: any): *Promise‹function›*

* **getCveList**(`filter?`: string, `limit?`: number, `offset?`: number, `page?`: number, `pageSize?`: number, `sort?`: string, `cvssFrom?`: number, `cvssTo?`: number, `publicFrom?`: string, `publicTo?`: string, `impact?`: string, `dataFormat?`: string, `businessRiskId?`: string, `statusId?`: string, `securityRule?`: boolean, `rulePresence?`: Array‹boolean›, `showAll?`: boolean, `affecting?`: Array‹boolean›, `options?`: any): *Promise‹function›*

* **getCveListBySystem**(`inventoryId`: string, `filter?`: string, `limit?`: number, `offset?`: number, `page?`: number, `pageSize?`: number, `sort?`: string, `cvssFrom?`: number, `cvssTo?`: number, `publicFrom?`: string, `publicTo?`: string, `impact?`: string, `statusId?`: string, `dataFormat?`: string, `businessRiskId?`: string, `securityRule?`: boolean, `rulePresence?`: Array‹boolean›, `showAdvisories?`: boolean, `advisory?`: string, `options?`: any): *Promise‹function›*

* **getExecutiveReport**(`options?`: any): *Promise‹function›*

* **getPlaybookTemplate**(`ruleId`: string, `options?`: any): *Promise‹function›*

* **getStatusList**(`options?`: any): *Promise‹function›*

* **getSystemDetails**(`inventoryId`: string, `options?`: any): *Promise‹function›*

* **getSystemsIds**(`filter?`: string, `limit?`: number, `offset?`: number, `page?`: number, `pageSize?`: number, `sort?`: string, `dataFormat?`: string, `stale?`: boolean, `uuid?`: string, `tags?`: Array‹string›, `sapSids?`: Array‹string›, `sapSystem?`: boolean, `optOut?`: boolean, `excluded?`: Array‹boolean›, `options?`: any): *Promise‹function›*

* **getSystemsList**(`filter?`: string, `limit?`: number, `offset?`: number, `page?`: number, `pageSize?`: number, `sort?`: string, `dataFormat?`: string, `stale?`: boolean, `uuid?`: string, `tags?`: Array‹string›, `sapSids?`: Array‹string›, `sapSystem?`: boolean, `optOut?`: boolean, `excluded?`: Array‹boolean›, `options?`: any): *Promise‹function›*

* **getVersion**(`options?`: any): *Promise‹function›*

* **setCveBusinessRisk**(`cveRiskIn`: [CveRiskIn](interfaces/cveriskin.md), `options?`: any): *Promise‹function›*

* **setCveStatus**(`cveStatusIn`: [CveStatusIn](interfaces/cvestatusin.md), `options?`: any): *Promise‹function›*

* **setStatus**(`statusIn`: [StatusIn](interfaces/statusin.md), `options?`: any): *Promise‹function›*

* **setSystemOptOut**(`inventoryId`: string, `value`: boolean, `options?`: any): *Promise‹function›*

* **setSystemsOptOut**(`optOutIn`: [OptOutIn](interfaces/optoutin.md), `options?`: any): *Promise‹function›*

## Object literals

### `Const` COLLECTION_FORMATS

### ▪ **COLLECTION_FORMATS**: *object*

*Defined in [packages/vulnerabilities/git-api/base.ts:26](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/base.ts#L26)*

**`export`** 

###  csv

• **csv**: *string* = ","

*Defined in [packages/vulnerabilities/git-api/base.ts:27](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/base.ts#L27)*

###  pipes

• **pipes**: *string* = "|"

*Defined in [packages/vulnerabilities/git-api/base.ts:30](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/base.ts#L30)*

###  ssv

• **ssv**: *string* = " "

*Defined in [packages/vulnerabilities/git-api/base.ts:28](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/base.ts#L28)*

###  tsv

• **tsv**: *string* = "	"

*Defined in [packages/vulnerabilities/git-api/base.ts:29](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/base.ts#L29)*
