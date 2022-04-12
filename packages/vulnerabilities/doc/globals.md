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
* [AnnouncementOut](interfaces/announcementout.md)
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
* [DashbarOut](interfaces/dashbarout.md)
* [Dashboard](interfaces/dashboard.md)
* [DashboardCvesBySeverity](interfaces/dashboardcvesbyseverity.md)
* [DashboardCvesBySeverity0to39](interfaces/dashboardcvesbyseverity0to39.md)
* [DashboardCvesBySeverity4to79](interfaces/dashboardcvesbyseverity4to79.md)
* [DashboardCvesBySeverity8to10](interfaces/dashboardcvesbyseverity8to10.md)
* [DashboardCvesBySeverityNa](interfaces/dashboardcvesbyseverityna.md)
* [DashboardRecentCves](interfaces/dashboardrecentcves.md)
* [DashboardRecentRules](interfaces/dashboardrecentrules.md)
* [Errors](interfaces/errors.md)
* [ErrorsErrors](interfaces/errorserrors.md)
* [ExecutiveReport](interfaces/executivereport.md)
* [ExecutiveReportCvesBySeverity](interfaces/executivereportcvesbyseverity.md)
* [ExecutiveReportCvesBySeverity0to39](interfaces/executivereportcvesbyseverity0to39.md)
* [ExecutiveReportCvesBySeverity4to79](interfaces/executivereportcvesbyseverity4to79.md)
* [ExecutiveReportCvesBySeverity8to10](interfaces/executivereportcvesbyseverity8to10.md)
* [ExecutiveReportCvesBySeverityNa](interfaces/executivereportcvesbyseverityna.md)
* [ExecutiveReportRulesBySeverity](interfaces/executivereportrulesbyseverity.md)
* [ExecutiveReportRulesBySeverity1](interfaces/executivereportrulesbyseverity1.md)
* [ExecutiveReportTopCves](interfaces/executivereporttopcves.md)
* [ExecutiveReportTopRules](interfaces/executivereporttoprules.md)
* [InsightsRule](interfaces/insightsrule.md)
* [Links](interfaces/links.md)
* [Meta](interfaces/meta.md)
* [MetaAffectedSystems](interfaces/metaaffectedsystems.md)
* [MetaAffectedSystemsAllOf](interfaces/metaaffectedsystemsallof.md)
* [MetaCves](interfaces/metacves.md)
* [MetaCvesAllOf](interfaces/metacvesallof.md)
* [MetaCvesSystems](interfaces/metacvessystems.md)
* [MetaCvesSystemsAllOf](interfaces/metacvessystemsallof.md)
* [MetaPermissions](interfaces/metapermissions.md)
* [MetaSystems](interfaces/metasystems.md)
* [MetaSystemsAllOf](interfaces/metasystemsallof.md)
* [MetaVulnerabilitiesOut](interfaces/metavulnerabilitiesout.md)
* [MetaVulnerabilitiesOutAllOf](interfaces/metavulnerabilitiesoutallof.md)
* [MitigatedSystemsIdsOut](interfaces/mitigatedsystemsidsout.md)
* [MitigatedSystemsOut](interfaces/mitigatedsystemsout.md)
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
* [VulnerabilitiesPostIn](interfaces/vulnerabilitiespostin.md)
* [VulnerabilitiesPostOut](interfaces/vulnerabilitiespostout.md)
* [VulnerabilitiesPostOutAttributes](interfaces/vulnerabilitiespostoutattributes.md)
* [VulnerabilitiesPostOutData](interfaces/vulnerabilitiespostoutdata.md)

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

*Defined in [api.ts:360](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L360)*

**`export`** 

___

###  InventoryIdOrList

Ƭ **InventoryIdOrList**: *Array‹string› | string*

*Defined in [api.ts:1128](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1128)*

**`export`** 

## Variables

### `Const` BASE_PATH

• **BASE_PATH**: *string* = "http://localhost/api/vulnerability/v1".replace(/\/+$/, "")

*Defined in [base.ts:20](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/base.ts#L20)*

## Functions

### `Const` DefaultApiAxiosParamCreator

▸ **DefaultApiAxiosParamCreator**(`configuration?`: [Configuration](classes/configuration.md)): *object*

*Defined in [api.ts:2631](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L2631)*

DefaultApi - axios parameter creator

**`export`** 

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](classes/configuration.md) |

**Returns:** *object*

* **getAffectedSystemsByCve**(`cveId`: string, `filter?`: string, `limit?`: number, `offset?`: number, `page?`: number, `pageSize?`: number, `sort?`: string, `statusId?`: string, `dataFormat?`: string, `uuid?`: string, `ruleKey?`: Array‹string›, `rulePresence?`: Array‹boolean›, `rule?`: Array‹string›, `tags?`: Array‹string›, `sapSids?`: Array‹string›, `sapSystem?`: boolean, `showAdvisories?`: boolean, `advisory?`: string, `rhelVersion?`: string, `firstReportedFrom?`: string, `firstReportedTo?`: string, `advisoryAvailable?`: Array‹boolean›, `remediation?`: string, `report?`: boolean, `options`: any): *Promise‹[RequestArgs](interfaces/requestargs.md)›*

* **getAffectedSystemsIdsByCve**(`cveId`: string, `filter?`: string, `limit?`: number, `offset?`: number, `page?`: number, `pageSize?`: number, `sort?`: string, `statusId?`: string, `dataFormat?`: string, `uuid?`: string, `ruleKey?`: Array‹string›, `rulePresence?`: Array‹boolean›, `rule?`: Array‹string›, `tags?`: Array‹string›, `sapSids?`: Array‹string›, `sapSystem?`: boolean, `showAdvisories?`: boolean, `advisory?`: string, `rhelVersion?`: string, `firstReportedFrom?`: string, `firstReportedTo?`: string, `advisoryAvailable?`: Array‹boolean›, `remediation?`: string, `options`: any): *Promise‹[RequestArgs](interfaces/requestargs.md)›*

* **getAnnouncement**(`options`: any): *Promise‹[RequestArgs](interfaces/requestargs.md)›*

* **getApiStatus**(`options`: any): *Promise‹[RequestArgs](interfaces/requestargs.md)›*

* **getBusinessRiskList**(`options`: any): *Promise‹[RequestArgs](interfaces/requestargs.md)›*

* **getCveDetails**(`cveId`: string, `showAdvisoriesDetails?`: boolean, `options`: any): *Promise‹[RequestArgs](interfaces/requestargs.md)›*

* **getCveIdsBySystem**(`inventoryId`: string, `filter?`: string, `limit?`: number, `offset?`: number, `page?`: number, `pageSize?`: number, `sort?`: string, `cvssFrom?`: number, `cvssTo?`: number, `publicFrom?`: string, `publicTo?`: string, `impact?`: string, `statusId?`: string, `dataFormat?`: string, `businessRiskId?`: string, `rulePresence?`: Array‹boolean›, `showAdvisories?`: boolean, `advisory?`: string, `ruleKey?`: Array‹string›, `knownExploit?`: Array‹boolean›, `firstReportedFrom?`: string, `firstReportedTo?`: string, `advisoryAvailable?`: Array‹boolean›, `remediation?`: string, `options`: any): *Promise‹[RequestArgs](interfaces/requestargs.md)›*

* **getCveIdsList**(`filter?`: string, `limit?`: number, `offset?`: number, `page?`: number, `pageSize?`: number, `sort?`: string, `cvssFrom?`: number, `cvssTo?`: number, `publicFrom?`: string, `publicTo?`: string, `impact?`: string, `dataFormat?`: string, `businessRiskId?`: string, `statusId?`: string, `rulePresence?`: Array‹boolean›, `tags?`: Array‹string›, `sapSids?`: Array‹string›, `sapSystem?`: boolean, `knownExploit?`: Array‹boolean›, `affecting?`: Array‹boolean›, `rhelVersion?`: string, `options`: any): *Promise‹[RequestArgs](interfaces/requestargs.md)›*

* **getCveList**(`filter?`: string, `limit?`: number, `offset?`: number, `page?`: number, `pageSize?`: number, `sort?`: string, `cvssFrom?`: number, `cvssTo?`: number, `publicFrom?`: string, `publicTo?`: string, `impact?`: string, `dataFormat?`: string, `businessRiskId?`: string, `statusId?`: string, `rulePresence?`: Array‹boolean›, `tags?`: Array‹string›, `sapSids?`: Array‹string›, `sapSystem?`: boolean, `knownExploit?`: Array‹boolean›, `affecting?`: Array‹boolean›, `rhelVersion?`: string, `report?`: boolean, `advancedReport?`: boolean, `options`: any): *Promise‹[RequestArgs](interfaces/requestargs.md)›*

* **getCveListBySystem**(`inventoryId`: string, `filter?`: string, `limit?`: number, `offset?`: number, `page?`: number, `pageSize?`: number, `sort?`: string, `cvssFrom?`: number, `cvssTo?`: number, `publicFrom?`: string, `publicTo?`: string, `impact?`: string, `statusId?`: string, `dataFormat?`: string, `businessRiskId?`: string, `rulePresence?`: Array‹boolean›, `showAdvisories?`: boolean, `advisory?`: string, `ruleKey?`: Array‹string›, `knownExploit?`: Array‹boolean›, `firstReportedFrom?`: string, `firstReportedTo?`: string, `advisoryAvailable?`: Array‹boolean›, `remediation?`: string, `report?`: boolean, `options`: any): *Promise‹[RequestArgs](interfaces/requestargs.md)›*

* **getCveList_1**(`vulnerabilitiesPostIn`: [VulnerabilitiesPostIn](interfaces/vulnerabilitiespostin.md), `filter?`: string, `limit?`: number, `offset?`: number, `page?`: number, `pageSize?`: number, `sort?`: string, `options`: any): *Promise‹[RequestArgs](interfaces/requestargs.md)›*

* **getDashbar**(`tags?`: Array‹string›, `sapSids?`: Array‹string›, `sapSystem?`: boolean, `options`: any): *Promise‹[RequestArgs](interfaces/requestargs.md)›*

* **getDashboard**(`tags?`: Array‹string›, `sapSids?`: Array‹string›, `sapSystem?`: boolean, `options`: any): *Promise‹[RequestArgs](interfaces/requestargs.md)›*

* **getExecutiveReport**(`options`: any): *Promise‹[RequestArgs](interfaces/requestargs.md)›*

* **getMitigatedSystemsByCve**(`cveId`: string, `filter?`: string, `limit?`: number, `offset?`: number, `page?`: number, `pageSize?`: number, `sort?`: string, `statusId?`: string, `dataFormat?`: string, `uuid?`: string, `ruleKey?`: Array‹string›, `rulePresence?`: Array‹boolean›, `rule?`: Array‹string›, `tags?`: Array‹string›, `sapSids?`: Array‹string›, `sapSystem?`: boolean, `showAdvisories?`: boolean, `advisory?`: string, `rhelVersion?`: string, `advisoryAvailable?`: Array‹boolean›, `remediation?`: string, `options`: any): *Promise‹[RequestArgs](interfaces/requestargs.md)›*

* **getMitigatedSystemsIdsByCve**(`cveId`: string, `filter?`: string, `limit?`: number, `offset?`: number, `page?`: number, `pageSize?`: number, `sort?`: string, `statusId?`: string, `dataFormat?`: string, `uuid?`: string, `ruleKey?`: Array‹string›, `rulePresence?`: Array‹boolean›, `rule?`: Array‹string›, `tags?`: Array‹string›, `sapSids?`: Array‹string›, `sapSystem?`: boolean, `showAdvisories?`: boolean, `advisory?`: string, `rhelVersion?`: string, `advisoryAvailable?`: Array‹boolean›, `remediation?`: string, `options`: any): *Promise‹[RequestArgs](interfaces/requestargs.md)›*

* **getPlaybookTemplate**(`ruleId`: string, `options`: any): *Promise‹[RequestArgs](interfaces/requestargs.md)›*

* **getStatusList**(`options`: any): *Promise‹[RequestArgs](interfaces/requestargs.md)›*

* **getSystemDetails**(`inventoryId`: string, `options`: any): *Promise‹[RequestArgs](interfaces/requestargs.md)›*

* **getSystemsIds**(`filter?`: string, `limit?`: number, `offset?`: number, `page?`: number, `pageSize?`: number, `sort?`: string, `dataFormat?`: string, `stale?`: boolean, `uuid?`: string, `tags?`: Array‹string›, `sapSids?`: Array‹string›, `sapSystem?`: boolean, `excluded?`: Array‹boolean›, `rhelVersion?`: string, `options`: any): *Promise‹[RequestArgs](interfaces/requestargs.md)›*

* **getSystemsList**(`filter?`: string, `limit?`: number, `offset?`: number, `page?`: number, `pageSize?`: number, `sort?`: string, `dataFormat?`: string, `stale?`: boolean, `uuid?`: string, `tags?`: Array‹string›, `sapSids?`: Array‹string›, `sapSystem?`: boolean, `excluded?`: Array‹boolean›, `rhelVersion?`: string, `report?`: boolean, `options`: any): *Promise‹[RequestArgs](interfaces/requestargs.md)›*

* **getVersion**(`options`: any): *Promise‹[RequestArgs](interfaces/requestargs.md)›*

* **setCveBusinessRisk**(`cveRiskIn`: [CveRiskIn](interfaces/cveriskin.md), `options`: any): *Promise‹[RequestArgs](interfaces/requestargs.md)›*

* **setCveStatus**(`cveStatusIn`: [CveStatusIn](interfaces/cvestatusin.md), `options`: any): *Promise‹[RequestArgs](interfaces/requestargs.md)›*

* **setStatus**(`statusIn`: [StatusIn](interfaces/statusin.md), `options`: any): *Promise‹[RequestArgs](interfaces/requestargs.md)›*

* **setSystemsOptOut**(`optOutIn`: [OptOutIn](interfaces/optoutin.md), `options`: any): *Promise‹[RequestArgs](interfaces/requestargs.md)›*

___

### `Const` DefaultApiFactory

▸ **DefaultApiFactory**(`configuration?`: [Configuration](classes/configuration.md), `basePath?`: string, `axios?`: AxiosInstance): *object*

*Defined in [api.ts:5510](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L5510)*

DefaultApi - factory interface

**`export`** 

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](classes/configuration.md) |
`basePath?` | string |
`axios?` | AxiosInstance |

**Returns:** *object*

* **getAffectedSystemsByCve**(`cveId`: string, `filter?`: string, `limit?`: number, `offset?`: number, `page?`: number, `pageSize?`: number, `sort?`: string, `statusId?`: string, `dataFormat?`: string, `uuid?`: string, `ruleKey?`: Array‹string›, `rulePresence?`: Array‹boolean›, `rule?`: Array‹string›, `tags?`: Array‹string›, `sapSids?`: Array‹string›, `sapSystem?`: boolean, `showAdvisories?`: boolean, `advisory?`: string, `rhelVersion?`: string, `firstReportedFrom?`: string, `firstReportedTo?`: string, `advisoryAvailable?`: Array‹boolean›, `remediation?`: string, `report?`: boolean, `options?`: any): *AxiosPromise‹[AffectedSystemsOut](interfaces/affectedsystemsout.md)›*

* **getAffectedSystemsIdsByCve**(`cveId`: string, `filter?`: string, `limit?`: number, `offset?`: number, `page?`: number, `pageSize?`: number, `sort?`: string, `statusId?`: string, `dataFormat?`: string, `uuid?`: string, `ruleKey?`: Array‹string›, `rulePresence?`: Array‹boolean›, `rule?`: Array‹string›, `tags?`: Array‹string›, `sapSids?`: Array‹string›, `sapSystem?`: boolean, `showAdvisories?`: boolean, `advisory?`: string, `rhelVersion?`: string, `firstReportedFrom?`: string, `firstReportedTo?`: string, `advisoryAvailable?`: Array‹boolean›, `remediation?`: string, `options?`: any): *AxiosPromise‹[AffectedSystemsIdsOut](interfaces/affectedsystemsidsout.md)›*

* **getAnnouncement**(`options?`: any): *AxiosPromise‹[AnnouncementOut](interfaces/announcementout.md)›*

* **getApiStatus**(`options?`: any): *AxiosPromise‹void›*

* **getBusinessRiskList**(`options?`: any): *AxiosPromise‹[BusinessRiskListOut](interfaces/businessrisklistout.md)›*

* **getCveDetails**(`cveId`: string, `showAdvisoriesDetails?`: boolean, `options?`: any): *AxiosPromise‹[CveDetailOut](interfaces/cvedetailout.md)›*

* **getCveIdsBySystem**(`inventoryId`: string, `filter?`: string, `limit?`: number, `offset?`: number, `page?`: number, `pageSize?`: number, `sort?`: string, `cvssFrom?`: number, `cvssTo?`: number, `publicFrom?`: string, `publicTo?`: string, `impact?`: string, `statusId?`: string, `dataFormat?`: string, `businessRiskId?`: string, `rulePresence?`: Array‹boolean›, `showAdvisories?`: boolean, `advisory?`: string, `ruleKey?`: Array‹string›, `knownExploit?`: Array‹boolean›, `firstReportedFrom?`: string, `firstReportedTo?`: string, `advisoryAvailable?`: Array‹boolean›, `remediation?`: string, `options?`: any): *AxiosPromise‹[SystemCvesIdsOut](interfaces/systemcvesidsout.md)›*

* **getCveIdsList**(`filter?`: string, `limit?`: number, `offset?`: number, `page?`: number, `pageSize?`: number, `sort?`: string, `cvssFrom?`: number, `cvssTo?`: number, `publicFrom?`: string, `publicTo?`: string, `impact?`: string, `dataFormat?`: string, `businessRiskId?`: string, `statusId?`: string, `rulePresence?`: Array‹boolean›, `tags?`: Array‹string›, `sapSids?`: Array‹string›, `sapSystem?`: boolean, `knownExploit?`: Array‹boolean›, `affecting?`: Array‹boolean›, `rhelVersion?`: string, `options?`: any): *AxiosPromise‹[VulnerabilitiesIdsOut](interfaces/vulnerabilitiesidsout.md)›*

* **getCveList**(`filter?`: string, `limit?`: number, `offset?`: number, `page?`: number, `pageSize?`: number, `sort?`: string, `cvssFrom?`: number, `cvssTo?`: number, `publicFrom?`: string, `publicTo?`: string, `impact?`: string, `dataFormat?`: string, `businessRiskId?`: string, `statusId?`: string, `rulePresence?`: Array‹boolean›, `tags?`: Array‹string›, `sapSids?`: Array‹string›, `sapSystem?`: boolean, `knownExploit?`: Array‹boolean›, `affecting?`: Array‹boolean›, `rhelVersion?`: string, `report?`: boolean, `advancedReport?`: boolean, `options?`: any): *AxiosPromise‹[VulnerabilitiesOut](interfaces/vulnerabilitiesout.md)›*

* **getCveListBySystem**(`inventoryId`: string, `filter?`: string, `limit?`: number, `offset?`: number, `page?`: number, `pageSize?`: number, `sort?`: string, `cvssFrom?`: number, `cvssTo?`: number, `publicFrom?`: string, `publicTo?`: string, `impact?`: string, `statusId?`: string, `dataFormat?`: string, `businessRiskId?`: string, `rulePresence?`: Array‹boolean›, `showAdvisories?`: boolean, `advisory?`: string, `ruleKey?`: Array‹string›, `knownExploit?`: Array‹boolean›, `firstReportedFrom?`: string, `firstReportedTo?`: string, `advisoryAvailable?`: Array‹boolean›, `remediation?`: string, `report?`: boolean, `options?`: any): *AxiosPromise‹[SystemCvesOut](interfaces/systemcvesout.md)›*

* **getCveList_1**(`vulnerabilitiesPostIn`: [VulnerabilitiesPostIn](interfaces/vulnerabilitiespostin.md), `filter?`: string, `limit?`: number, `offset?`: number, `page?`: number, `pageSize?`: number, `sort?`: string, `options?`: any): *AxiosPromise‹[VulnerabilitiesPostOut](interfaces/vulnerabilitiespostout.md)›*

* **getDashbar**(`tags?`: Array‹string›, `sapSids?`: Array‹string›, `sapSystem?`: boolean, `options?`: any): *AxiosPromise‹[DashbarOut](interfaces/dashbarout.md)›*

* **getDashboard**(`tags?`: Array‹string›, `sapSids?`: Array‹string›, `sapSystem?`: boolean, `options?`: any): *AxiosPromise‹[Dashboard](interfaces/dashboard.md)›*

* **getExecutiveReport**(`options?`: any): *AxiosPromise‹[ExecutiveReport](interfaces/executivereport.md)›*

* **getMitigatedSystemsByCve**(`cveId`: string, `filter?`: string, `limit?`: number, `offset?`: number, `page?`: number, `pageSize?`: number, `sort?`: string, `statusId?`: string, `dataFormat?`: string, `uuid?`: string, `ruleKey?`: Array‹string›, `rulePresence?`: Array‹boolean›, `rule?`: Array‹string›, `tags?`: Array‹string›, `sapSids?`: Array‹string›, `sapSystem?`: boolean, `showAdvisories?`: boolean, `advisory?`: string, `rhelVersion?`: string, `advisoryAvailable?`: Array‹boolean›, `remediation?`: string, `options?`: any): *AxiosPromise‹[MitigatedSystemsIdsOut](interfaces/mitigatedsystemsidsout.md)›*

* **getMitigatedSystemsIdsByCve**(`cveId`: string, `filter?`: string, `limit?`: number, `offset?`: number, `page?`: number, `pageSize?`: number, `sort?`: string, `statusId?`: string, `dataFormat?`: string, `uuid?`: string, `ruleKey?`: Array‹string›, `rulePresence?`: Array‹boolean›, `rule?`: Array‹string›, `tags?`: Array‹string›, `sapSids?`: Array‹string›, `sapSystem?`: boolean, `showAdvisories?`: boolean, `advisory?`: string, `rhelVersion?`: string, `advisoryAvailable?`: Array‹boolean›, `remediation?`: string, `options?`: any): *AxiosPromise‹[MitigatedSystemsOut](interfaces/mitigatedsystemsout.md)›*

* **getPlaybookTemplate**(`ruleId`: string, `options?`: any): *AxiosPromise‹[PlaybookTemplate](interfaces/playbooktemplate.md)›*

* **getStatusList**(`options?`: any): *AxiosPromise‹[StatusListOut](interfaces/statuslistout.md)›*

* **getSystemDetails**(`inventoryId`: string, `options?`: any): *AxiosPromise‹[SystemDetailsOut](interfaces/systemdetailsout.md)›*

* **getSystemsIds**(`filter?`: string, `limit?`: number, `offset?`: number, `page?`: number, `pageSize?`: number, `sort?`: string, `dataFormat?`: string, `stale?`: boolean, `uuid?`: string, `tags?`: Array‹string›, `sapSids?`: Array‹string›, `sapSystem?`: boolean, `excluded?`: Array‹boolean›, `rhelVersion?`: string, `options?`: any): *AxiosPromise‹[SystemIdsOut](interfaces/systemidsout.md)›*

* **getSystemsList**(`filter?`: string, `limit?`: number, `offset?`: number, `page?`: number, `pageSize?`: number, `sort?`: string, `dataFormat?`: string, `stale?`: boolean, `uuid?`: string, `tags?`: Array‹string›, `sapSids?`: Array‹string›, `sapSystem?`: boolean, `excluded?`: Array‹boolean›, `rhelVersion?`: string, `report?`: boolean, `options?`: any): *AxiosPromise‹[SystemListOut](interfaces/systemlistout.md)›*

* **getVersion**(`options?`: any): *AxiosPromise‹[VersionOut](interfaces/versionout.md)›*

* **setCveBusinessRisk**(`cveRiskIn`: [CveRiskIn](interfaces/cveriskin.md), `options?`: any): *AxiosPromise‹[BulkChangeOut](interfaces/bulkchangeout.md)›*

* **setCveStatus**(`cveStatusIn`: [CveStatusIn](interfaces/cvestatusin.md), `options?`: any): *AxiosPromise‹[BulkChangeOut](interfaces/bulkchangeout.md)›*

* **setStatus**(`statusIn`: [StatusIn](interfaces/statusin.md), `options?`: any): *AxiosPromise‹[StatusOut](interfaces/statusout.md)›*

* **setSystemsOptOut**(`optOutIn`: [OptOutIn](interfaces/optoutin.md), `options?`: any): *AxiosPromise‹[BulkChangeOut](interfaces/bulkchangeout.md)›*

___

### `Const` DefaultApiFp

▸ **DefaultApiFp**(`configuration?`: [Configuration](classes/configuration.md)): *object*

*Defined in [api.ts:4931](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L4931)*

DefaultApi - functional programming interface

**`export`** 

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](classes/configuration.md) |

**Returns:** *object*

* **getAffectedSystemsByCve**(`cveId`: string, `filter?`: string, `limit?`: number, `offset?`: number, `page?`: number, `pageSize?`: number, `sort?`: string, `statusId?`: string, `dataFormat?`: string, `uuid?`: string, `ruleKey?`: Array‹string›, `rulePresence?`: Array‹boolean›, `rule?`: Array‹string›, `tags?`: Array‹string›, `sapSids?`: Array‹string›, `sapSystem?`: boolean, `showAdvisories?`: boolean, `advisory?`: string, `rhelVersion?`: string, `firstReportedFrom?`: string, `firstReportedTo?`: string, `advisoryAvailable?`: Array‹boolean›, `remediation?`: string, `report?`: boolean, `options?`: any): *Promise‹function›*

* **getAffectedSystemsIdsByCve**(`cveId`: string, `filter?`: string, `limit?`: number, `offset?`: number, `page?`: number, `pageSize?`: number, `sort?`: string, `statusId?`: string, `dataFormat?`: string, `uuid?`: string, `ruleKey?`: Array‹string›, `rulePresence?`: Array‹boolean›, `rule?`: Array‹string›, `tags?`: Array‹string›, `sapSids?`: Array‹string›, `sapSystem?`: boolean, `showAdvisories?`: boolean, `advisory?`: string, `rhelVersion?`: string, `firstReportedFrom?`: string, `firstReportedTo?`: string, `advisoryAvailable?`: Array‹boolean›, `remediation?`: string, `options?`: any): *Promise‹function›*

* **getAnnouncement**(`options?`: any): *Promise‹function›*

* **getApiStatus**(`options?`: any): *Promise‹function›*

* **getBusinessRiskList**(`options?`: any): *Promise‹function›*

* **getCveDetails**(`cveId`: string, `showAdvisoriesDetails?`: boolean, `options?`: any): *Promise‹function›*

* **getCveIdsBySystem**(`inventoryId`: string, `filter?`: string, `limit?`: number, `offset?`: number, `page?`: number, `pageSize?`: number, `sort?`: string, `cvssFrom?`: number, `cvssTo?`: number, `publicFrom?`: string, `publicTo?`: string, `impact?`: string, `statusId?`: string, `dataFormat?`: string, `businessRiskId?`: string, `rulePresence?`: Array‹boolean›, `showAdvisories?`: boolean, `advisory?`: string, `ruleKey?`: Array‹string›, `knownExploit?`: Array‹boolean›, `firstReportedFrom?`: string, `firstReportedTo?`: string, `advisoryAvailable?`: Array‹boolean›, `remediation?`: string, `options?`: any): *Promise‹function›*

* **getCveIdsList**(`filter?`: string, `limit?`: number, `offset?`: number, `page?`: number, `pageSize?`: number, `sort?`: string, `cvssFrom?`: number, `cvssTo?`: number, `publicFrom?`: string, `publicTo?`: string, `impact?`: string, `dataFormat?`: string, `businessRiskId?`: string, `statusId?`: string, `rulePresence?`: Array‹boolean›, `tags?`: Array‹string›, `sapSids?`: Array‹string›, `sapSystem?`: boolean, `knownExploit?`: Array‹boolean›, `affecting?`: Array‹boolean›, `rhelVersion?`: string, `options?`: any): *Promise‹function›*

* **getCveList**(`filter?`: string, `limit?`: number, `offset?`: number, `page?`: number, `pageSize?`: number, `sort?`: string, `cvssFrom?`: number, `cvssTo?`: number, `publicFrom?`: string, `publicTo?`: string, `impact?`: string, `dataFormat?`: string, `businessRiskId?`: string, `statusId?`: string, `rulePresence?`: Array‹boolean›, `tags?`: Array‹string›, `sapSids?`: Array‹string›, `sapSystem?`: boolean, `knownExploit?`: Array‹boolean›, `affecting?`: Array‹boolean›, `rhelVersion?`: string, `report?`: boolean, `advancedReport?`: boolean, `options?`: any): *Promise‹function›*

* **getCveListBySystem**(`inventoryId`: string, `filter?`: string, `limit?`: number, `offset?`: number, `page?`: number, `pageSize?`: number, `sort?`: string, `cvssFrom?`: number, `cvssTo?`: number, `publicFrom?`: string, `publicTo?`: string, `impact?`: string, `statusId?`: string, `dataFormat?`: string, `businessRiskId?`: string, `rulePresence?`: Array‹boolean›, `showAdvisories?`: boolean, `advisory?`: string, `ruleKey?`: Array‹string›, `knownExploit?`: Array‹boolean›, `firstReportedFrom?`: string, `firstReportedTo?`: string, `advisoryAvailable?`: Array‹boolean›, `remediation?`: string, `report?`: boolean, `options?`: any): *Promise‹function›*

* **getCveList_1**(`vulnerabilitiesPostIn`: [VulnerabilitiesPostIn](interfaces/vulnerabilitiespostin.md), `filter?`: string, `limit?`: number, `offset?`: number, `page?`: number, `pageSize?`: number, `sort?`: string, `options?`: any): *Promise‹function›*

* **getDashbar**(`tags?`: Array‹string›, `sapSids?`: Array‹string›, `sapSystem?`: boolean, `options?`: any): *Promise‹function›*

* **getDashboard**(`tags?`: Array‹string›, `sapSids?`: Array‹string›, `sapSystem?`: boolean, `options?`: any): *Promise‹function›*

* **getExecutiveReport**(`options?`: any): *Promise‹function›*

* **getMitigatedSystemsByCve**(`cveId`: string, `filter?`: string, `limit?`: number, `offset?`: number, `page?`: number, `pageSize?`: number, `sort?`: string, `statusId?`: string, `dataFormat?`: string, `uuid?`: string, `ruleKey?`: Array‹string›, `rulePresence?`: Array‹boolean›, `rule?`: Array‹string›, `tags?`: Array‹string›, `sapSids?`: Array‹string›, `sapSystem?`: boolean, `showAdvisories?`: boolean, `advisory?`: string, `rhelVersion?`: string, `advisoryAvailable?`: Array‹boolean›, `remediation?`: string, `options?`: any): *Promise‹function›*

* **getMitigatedSystemsIdsByCve**(`cveId`: string, `filter?`: string, `limit?`: number, `offset?`: number, `page?`: number, `pageSize?`: number, `sort?`: string, `statusId?`: string, `dataFormat?`: string, `uuid?`: string, `ruleKey?`: Array‹string›, `rulePresence?`: Array‹boolean›, `rule?`: Array‹string›, `tags?`: Array‹string›, `sapSids?`: Array‹string›, `sapSystem?`: boolean, `showAdvisories?`: boolean, `advisory?`: string, `rhelVersion?`: string, `advisoryAvailable?`: Array‹boolean›, `remediation?`: string, `options?`: any): *Promise‹function›*

* **getPlaybookTemplate**(`ruleId`: string, `options?`: any): *Promise‹function›*

* **getStatusList**(`options?`: any): *Promise‹function›*

* **getSystemDetails**(`inventoryId`: string, `options?`: any): *Promise‹function›*

* **getSystemsIds**(`filter?`: string, `limit?`: number, `offset?`: number, `page?`: number, `pageSize?`: number, `sort?`: string, `dataFormat?`: string, `stale?`: boolean, `uuid?`: string, `tags?`: Array‹string›, `sapSids?`: Array‹string›, `sapSystem?`: boolean, `excluded?`: Array‹boolean›, `rhelVersion?`: string, `options?`: any): *Promise‹function›*

* **getSystemsList**(`filter?`: string, `limit?`: number, `offset?`: number, `page?`: number, `pageSize?`: number, `sort?`: string, `dataFormat?`: string, `stale?`: boolean, `uuid?`: string, `tags?`: Array‹string›, `sapSids?`: Array‹string›, `sapSystem?`: boolean, `excluded?`: Array‹boolean›, `rhelVersion?`: string, `report?`: boolean, `options?`: any): *Promise‹function›*

* **getVersion**(`options?`: any): *Promise‹function›*

* **setCveBusinessRisk**(`cveRiskIn`: [CveRiskIn](interfaces/cveriskin.md), `options?`: any): *Promise‹function›*

* **setCveStatus**(`cveStatusIn`: [CveStatusIn](interfaces/cvestatusin.md), `options?`: any): *Promise‹function›*

* **setStatus**(`statusIn`: [StatusIn](interfaces/statusin.md), `options?`: any): *Promise‹function›*

* **setSystemsOptOut**(`optOutIn`: [OptOutIn](interfaces/optoutin.md), `options?`: any): *Promise‹function›*

## Object literals

### `Const` COLLECTION_FORMATS

### ▪ **COLLECTION_FORMATS**: *object*

*Defined in [base.ts:26](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/base.ts#L26)*

**`export`** 

###  csv

• **csv**: *string* = ","

*Defined in [base.ts:27](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/base.ts#L27)*

###  pipes

• **pipes**: *string* = "|"

*Defined in [base.ts:30](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/base.ts#L30)*

###  ssv

• **ssv**: *string* = " "

*Defined in [base.ts:28](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/base.ts#L28)*

###  tsv

• **tsv**: *string* = "	"

*Defined in [base.ts:29](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/base.ts#L29)*
