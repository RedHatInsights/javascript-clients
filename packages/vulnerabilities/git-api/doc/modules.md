[@redhat-cloud-services/vulnerabilities-client](README.md) / Exports

# @redhat-cloud-services/vulnerabilities-client

## Table of contents

### Classes

- [Configuration](classes/Configuration.md)
- [DefaultApi](classes/DefaultApi.md)

### Interfaces

- [AffectedSystemsIdsOut](interfaces/AffectedSystemsIdsOut.md)
- [AffectedSystemsOut](interfaces/AffectedSystemsOut.md)
- [AnnouncementOut](interfaces/AnnouncementOut.md)
- [BulkChangeOut](interfaces/BulkChangeOut.md)
- [BusinessRiskListOut](interfaces/BusinessRiskListOut.md)
- [BusinessRiskListOutData](interfaces/BusinessRiskListOutData.md)
- [BusinessRiskListOutMeta](interfaces/BusinessRiskListOutMeta.md)
- [ConfigurationParameters](interfaces/ConfigurationParameters.md)
- [CveDetailOut](interfaces/CveDetailOut.md)
- [CveDetailOutData](interfaces/CveDetailOutData.md)
- [CveDetailOutDataAttributes](interfaces/CveDetailOutDataAttributes.md)
- [CveRiskIn](interfaces/CveRiskIn.md)
- [CveStatusIn](interfaces/CveStatusIn.md)
- [CvesWithoutErrataIn](interfaces/CvesWithoutErrataIn.md)
- [CvesWithoutErrataOut](interfaces/CvesWithoutErrataOut.md)
- [CvesWithoutErrataOutUpdated](interfaces/CvesWithoutErrataOutUpdated.md)
- [CvesWithoutErrataOutUpdatedCvesWithoutErrata](interfaces/CvesWithoutErrataOutUpdatedCvesWithoutErrata.md)
- [DashbarOut](interfaces/DashbarOut.md)
- [Dashboard](interfaces/Dashboard.md)
- [DashboardCvesBySeverity](interfaces/DashboardCvesBySeverity.md)
- [DashboardCvesBySeverity0to39](interfaces/DashboardCvesBySeverity0to39.md)
- [DashboardCvesBySeverity4to79](interfaces/DashboardCvesBySeverity4to79.md)
- [DashboardCvesBySeverity8to10](interfaces/DashboardCvesBySeverity8to10.md)
- [DashboardCvesBySeverityNa](interfaces/DashboardCvesBySeverityNa.md)
- [DashboardRecentCves](interfaces/DashboardRecentCves.md)
- [DashboardRecentRules](interfaces/DashboardRecentRules.md)
- [Errors](interfaces/Errors.md)
- [ErrorsErrors](interfaces/ErrorsErrors.md)
- [ExecutiveReport](interfaces/ExecutiveReport.md)
- [ExecutiveReportCvesBySeverity](interfaces/ExecutiveReportCvesBySeverity.md)
- [ExecutiveReportCvesBySeverity0to39](interfaces/ExecutiveReportCvesBySeverity0to39.md)
- [ExecutiveReportCvesBySeverity4to79](interfaces/ExecutiveReportCvesBySeverity4to79.md)
- [ExecutiveReportCvesBySeverity8to10](interfaces/ExecutiveReportCvesBySeverity8to10.md)
- [ExecutiveReportCvesBySeverityNa](interfaces/ExecutiveReportCvesBySeverityNa.md)
- [ExecutiveReportRulesBySeverity](interfaces/ExecutiveReportRulesBySeverity.md)
- [ExecutiveReportRulesBySeverity1](interfaces/ExecutiveReportRulesBySeverity1.md)
- [ExecutiveReportTopCves](interfaces/ExecutiveReportTopCves.md)
- [ExecutiveReportTopRules](interfaces/ExecutiveReportTopRules.md)
- [InsightsRule](interfaces/InsightsRule.md)
- [Links](interfaces/Links.md)
- [Meta](interfaces/Meta.md)
- [MetaAffectedSystems](interfaces/MetaAffectedSystems.md)
- [MetaAffectedSystemsAllOf](interfaces/MetaAffectedSystemsAllOf.md)
- [MetaCves](interfaces/MetaCves.md)
- [MetaCvesAllOf](interfaces/MetaCvesAllOf.md)
- [MetaCvesSystems](interfaces/MetaCvesSystems.md)
- [MetaCvesSystemsAllOf](interfaces/MetaCvesSystemsAllOf.md)
- [MetaPermissions](interfaces/MetaPermissions.md)
- [MetaSystems](interfaces/MetaSystems.md)
- [MetaSystemsAllOf](interfaces/MetaSystemsAllOf.md)
- [MetaVulnerabilitiesOut](interfaces/MetaVulnerabilitiesOut.md)
- [MetaVulnerabilitiesOutAllOf](interfaces/MetaVulnerabilitiesOutAllOf.md)
- [MitigatedSystemsIdsOut](interfaces/MitigatedSystemsIdsOut.md)
- [MitigatedSystemsOut](interfaces/MitigatedSystemsOut.md)
- [OptOutIn](interfaces/OptOutIn.md)
- [PlaybookTemplate](interfaces/PlaybookTemplate.md)
- [PlaybookTemplateData](interfaces/PlaybookTemplateData.md)
- [StatusIn](interfaces/StatusIn.md)
- [StatusListOut](interfaces/StatusListOut.md)
- [StatusListOutData](interfaces/StatusListOutData.md)
- [StatusListOutMeta](interfaces/StatusListOutMeta.md)
- [StatusOut](interfaces/StatusOut.md)
- [StatusOutUpdated](interfaces/StatusOutUpdated.md)
- [SystemCvesIdsOut](interfaces/SystemCvesIdsOut.md)
- [SystemCvesOut](interfaces/SystemCvesOut.md)
- [SystemDetailsOut](interfaces/SystemDetailsOut.md)
- [SystemDetailsOutData](interfaces/SystemDetailsOutData.md)
- [SystemDetailsOutDataTags](interfaces/SystemDetailsOutDataTags.md)
- [SystemIdsOut](interfaces/SystemIdsOut.md)
- [SystemListOut](interfaces/SystemListOut.md)
- [VersionOut](interfaces/VersionOut.md)
- [VulnerabilitiesIdsOut](interfaces/VulnerabilitiesIdsOut.md)
- [VulnerabilitiesOut](interfaces/VulnerabilitiesOut.md)
- [VulnerabilitiesPostIn](interfaces/VulnerabilitiesPostIn.md)
- [VulnerabilitiesPostOut](interfaces/VulnerabilitiesPostOut.md)
- [VulnerabilitiesPostOutAttributes](interfaces/VulnerabilitiesPostOutAttributes.md)
- [VulnerabilitiesPostOutData](interfaces/VulnerabilitiesPostOutData.md)

### Type Aliases

- [CveOrList](modules.md#cveorlist)
- [InventoryIdOrList](modules.md#inventoryidorlist)

### Functions

- [DefaultApiAxiosParamCreator](modules.md#defaultapiaxiosparamcreator)
- [DefaultApiFactory](modules.md#defaultapifactory)
- [DefaultApiFp](modules.md#defaultapifp)

## Type Aliases

### CveOrList

Ƭ **CveOrList**: `string`[] \| `string`

**`Export`**

#### Defined in

[api.ts:360](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L360)

___

### InventoryIdOrList

Ƭ **InventoryIdOrList**: `string`[] \| `string`

**`Export`**

#### Defined in

[api.ts:1192](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1192)

## Functions

### DefaultApiAxiosParamCreator

▸ **DefaultApiAxiosParamCreator**(`configuration?`): `Object`

DefaultApi - axios parameter creator

**`Export`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuration?` | [`Configuration`](classes/Configuration.md) |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `getAffectedSystemsByCve` | (`cveId`: `string`, `filter?`: `string`, `limit?`: `number`, `offset?`: `number`, `page?`: `number`, `pageSize?`: `number`, `sort?`: `string`, `statusId?`: `string`, `dataFormat?`: `string`, `uuid?`: `string`, `ruleKey?`: `string`[], `rulePresence?`: `boolean`[], `rule?`: `string`[], `tags?`: `string`[], `sapSids?`: `string`[], `sapSystem?`: `boolean`, `showAdvisories?`: `boolean`, `advisory?`: `string`, `rhelVersion?`: `string`, `firstReportedFrom?`: `string`, `firstReportedTo?`: `string`, `advisoryAvailable?`: `boolean`[], `remediation?`: `string`, `report?`: `boolean`, `ansible?`: `boolean`, `mssql?`: `boolean`, `options?`: `any`) => `Promise`<`RequestArgs`\> |
| `getAffectedSystemsIdsByCve` | (`cveId`: `string`, `filter?`: `string`, `limit?`: `number`, `offset?`: `number`, `page?`: `number`, `pageSize?`: `number`, `sort?`: `string`, `statusId?`: `string`, `dataFormat?`: `string`, `uuid?`: `string`, `ruleKey?`: `string`[], `rulePresence?`: `boolean`[], `rule?`: `string`[], `tags?`: `string`[], `sapSids?`: `string`[], `sapSystem?`: `boolean`, `showAdvisories?`: `boolean`, `advisory?`: `string`, `rhelVersion?`: `string`, `firstReportedFrom?`: `string`, `firstReportedTo?`: `string`, `advisoryAvailable?`: `boolean`[], `remediation?`: `string`, `ansible?`: `boolean`, `mssql?`: `boolean`, `options?`: `any`) => `Promise`<`RequestArgs`\> |
| `getAnnouncement` | (`options?`: `any`) => `Promise`<`RequestArgs`\> |
| `getApiStatus` | (`options?`: `any`) => `Promise`<`RequestArgs`\> |
| `getBusinessRiskList` | (`options?`: `any`) => `Promise`<`RequestArgs`\> |
| `getCveDetails` | (`cveId`: `string`, `options?`: `any`) => `Promise`<`RequestArgs`\> |
| `getCveIdsBySystem` | (`inventoryId`: `string`, `filter?`: `string`, `limit?`: `number`, `offset?`: `number`, `page?`: `number`, `pageSize?`: `number`, `sort?`: `string`, `cvssFrom?`: `number`, `cvssTo?`: `number`, `publicFrom?`: `string`, `publicTo?`: `string`, `impact?`: `string`, `statusId?`: `string`, `dataFormat?`: `string`, `businessRiskId?`: `string`, `rulePresence?`: `boolean`[], `showAdvisories?`: `boolean`, `advisory?`: `string`, `ruleKey?`: `string`[], `knownExploit?`: `boolean`[], `firstReportedFrom?`: `string`, `firstReportedTo?`: `string`, `advisoryAvailable?`: `boolean`[], `remediation?`: `string`, `options?`: `any`) => `Promise`<`RequestArgs`\> |
| `getCveIdsList` | (`filter?`: `string`, `limit?`: `number`, `offset?`: `number`, `page?`: `number`, `pageSize?`: `number`, `sort?`: `string`, `cvssFrom?`: `number`, `cvssTo?`: `number`, `publicFrom?`: `string`, `publicTo?`: `string`, `impact?`: `string`, `dataFormat?`: `string`, `businessRiskId?`: `string`, `statusId?`: `string`, `rulePresence?`: `boolean`[], `tags?`: `string`[], `sapSids?`: `string`[], `sapSystem?`: `boolean`, `knownExploit?`: `boolean`[], `affecting?`: `boolean`[], `rhelVersion?`: `string`, `ansible?`: `boolean`, `mssql?`: `boolean`, `advisoryAvailable?`: `boolean`[], `options?`: `any`) => `Promise`<`RequestArgs`\> |
| `getCveList` | (`filter?`: `string`, `limit?`: `number`, `offset?`: `number`, `page?`: `number`, `pageSize?`: `number`, `sort?`: `string`, `cvssFrom?`: `number`, `cvssTo?`: `number`, `publicFrom?`: `string`, `publicTo?`: `string`, `impact?`: `string`, `dataFormat?`: `string`, `businessRiskId?`: `string`, `statusId?`: `string`, `rulePresence?`: `boolean`[], `tags?`: `string`[], `sapSids?`: `string`[], `sapSystem?`: `boolean`, `knownExploit?`: `boolean`[], `affecting?`: `boolean`[], `rhelVersion?`: `string`, `report?`: `boolean`, `advancedReport?`: `boolean`, `ansible?`: `boolean`, `mssql?`: `boolean`, `advisoryAvailable?`: `boolean`[], `options?`: `any`) => `Promise`<`RequestArgs`\> |
| `getCveListBySystem` | (`inventoryId`: `string`, `filter?`: `string`, `limit?`: `number`, `offset?`: `number`, `page?`: `number`, `pageSize?`: `number`, `sort?`: `string`, `cvssFrom?`: `number`, `cvssTo?`: `number`, `publicFrom?`: `string`, `publicTo?`: `string`, `impact?`: `string`, `statusId?`: `string`, `dataFormat?`: `string`, `businessRiskId?`: `string`, `rulePresence?`: `boolean`[], `showAdvisories?`: `boolean`, `advisory?`: `string`, `ruleKey?`: `string`[], `knownExploit?`: `boolean`[], `firstReportedFrom?`: `string`, `firstReportedTo?`: `string`, `advisoryAvailable?`: `boolean`[], `remediation?`: `string`, `report?`: `boolean`, `options?`: `any`) => `Promise`<`RequestArgs`\> |
| `getCveList_1` | (`vulnerabilitiesPostIn`: [`VulnerabilitiesPostIn`](interfaces/VulnerabilitiesPostIn.md), `filter?`: `string`, `limit?`: `number`, `offset?`: `number`, `page?`: `number`, `pageSize?`: `number`, `sort?`: `string`, `options?`: `any`) => `Promise`<`RequestArgs`\> |
| `getDashbar` | (`tags?`: `string`[], `sapSids?`: `string`[], `sapSystem?`: `boolean`, `ansible?`: `boolean`, `mssql?`: `boolean`, `options?`: `any`) => `Promise`<`RequestArgs`\> |
| `getDashboard` | (`tags?`: `string`[], `sapSids?`: `string`[], `sapSystem?`: `boolean`, `ansible?`: `boolean`, `mssql?`: `boolean`, `options?`: `any`) => `Promise`<`RequestArgs`\> |
| `getExecutiveReport` | (`options?`: `any`) => `Promise`<`RequestArgs`\> |
| `getPlaybookTemplate` | (`ruleId`: `string`, `options?`: `any`) => `Promise`<`RequestArgs`\> |
| `getStatusList` | (`options?`: `any`) => `Promise`<`RequestArgs`\> |
| `getSystemDetails` | (`inventoryId`: `string`, `options?`: `any`) => `Promise`<`RequestArgs`\> |
| `getSystemsIds` | (`filter?`: `string`, `limit?`: `number`, `offset?`: `number`, `page?`: `number`, `pageSize?`: `number`, `sort?`: `string`, `dataFormat?`: `string`, `stale?`: `boolean`, `uuid?`: `string`, `tags?`: `string`[], `sapSids?`: `string`[], `sapSystem?`: `boolean`, `excluded?`: `boolean`[], `rhelVersion?`: `string`, `ansible?`: `boolean`, `mssql?`: `boolean`, `options?`: `any`) => `Promise`<`RequestArgs`\> |
| `getSystemsList` | (`filter?`: `string`, `limit?`: `number`, `offset?`: `number`, `page?`: `number`, `pageSize?`: `number`, `sort?`: `string`, `dataFormat?`: `string`, `stale?`: `boolean`, `uuid?`: `string`, `tags?`: `string`[], `sapSids?`: `string`[], `sapSystem?`: `boolean`, `excluded?`: `boolean`[], `rhelVersion?`: `string`, `report?`: `boolean`, `ansible?`: `boolean`, `mssql?`: `boolean`, `options?`: `any`) => `Promise`<`RequestArgs`\> |
| `getVersion` | (`options?`: `any`) => `Promise`<`RequestArgs`\> |
| `setCveBusinessRisk` | (`cveRiskIn`: [`CveRiskIn`](interfaces/CveRiskIn.md), `options?`: `any`) => `Promise`<`RequestArgs`\> |
| `setCveStatus` | (`cveStatusIn`: [`CveStatusIn`](interfaces/CveStatusIn.md), `options?`: `any`) => `Promise`<`RequestArgs`\> |
| `setCvesWithoutErrata` | (`cvesWithoutErrataIn`: [`CvesWithoutErrataIn`](interfaces/CvesWithoutErrataIn.md), `options?`: `any`) => `Promise`<`RequestArgs`\> |
| `setStatus` | (`statusIn`: [`StatusIn`](interfaces/StatusIn.md), `options?`: `any`) => `Promise`<`RequestArgs`\> |
| `setSystemsOptOut` | (`optOutIn`: [`OptOutIn`](interfaces/OptOutIn.md), `options?`: `any`) => `Promise`<`RequestArgs`\> |

#### Defined in

[api.ts:2761](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L2761)

___

### DefaultApiFactory

▸ **DefaultApiFactory**(`configuration?`, `basePath?`, `axios?`): `Object`

DefaultApi - factory interface

**`Export`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuration?` | [`Configuration`](classes/Configuration.md) |
| `basePath?` | `string` |
| `axios?` | `AxiosInstance` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `getAffectedSystemsByCve` | (`cveId`: `string`, `filter?`: `string`, `limit?`: `number`, `offset?`: `number`, `page?`: `number`, `pageSize?`: `number`, `sort?`: `string`, `statusId?`: `string`, `dataFormat?`: `string`, `uuid?`: `string`, `ruleKey?`: `string`[], `rulePresence?`: `boolean`[], `rule?`: `string`[], `tags?`: `string`[], `sapSids?`: `string`[], `sapSystem?`: `boolean`, `showAdvisories?`: `boolean`, `advisory?`: `string`, `rhelVersion?`: `string`, `firstReportedFrom?`: `string`, `firstReportedTo?`: `string`, `advisoryAvailable?`: `boolean`[], `remediation?`: `string`, `report?`: `boolean`, `ansible?`: `boolean`, `mssql?`: `boolean`, `options?`: `any`) => `AxiosPromise`<[`AffectedSystemsOut`](interfaces/AffectedSystemsOut.md)\> |
| `getAffectedSystemsIdsByCve` | (`cveId`: `string`, `filter?`: `string`, `limit?`: `number`, `offset?`: `number`, `page?`: `number`, `pageSize?`: `number`, `sort?`: `string`, `statusId?`: `string`, `dataFormat?`: `string`, `uuid?`: `string`, `ruleKey?`: `string`[], `rulePresence?`: `boolean`[], `rule?`: `string`[], `tags?`: `string`[], `sapSids?`: `string`[], `sapSystem?`: `boolean`, `showAdvisories?`: `boolean`, `advisory?`: `string`, `rhelVersion?`: `string`, `firstReportedFrom?`: `string`, `firstReportedTo?`: `string`, `advisoryAvailable?`: `boolean`[], `remediation?`: `string`, `ansible?`: `boolean`, `mssql?`: `boolean`, `options?`: `any`) => `AxiosPromise`<[`AffectedSystemsIdsOut`](interfaces/AffectedSystemsIdsOut.md)\> |
| `getAnnouncement` | (`options?`: `any`) => `AxiosPromise`<[`AnnouncementOut`](interfaces/AnnouncementOut.md)\> |
| `getApiStatus` | (`options?`: `any`) => `AxiosPromise`<`void`\> |
| `getBusinessRiskList` | (`options?`: `any`) => `AxiosPromise`<[`BusinessRiskListOut`](interfaces/BusinessRiskListOut.md)\> |
| `getCveDetails` | (`cveId`: `string`, `options?`: `any`) => `AxiosPromise`<[`CveDetailOut`](interfaces/CveDetailOut.md)\> |
| `getCveIdsBySystem` | (`inventoryId`: `string`, `filter?`: `string`, `limit?`: `number`, `offset?`: `number`, `page?`: `number`, `pageSize?`: `number`, `sort?`: `string`, `cvssFrom?`: `number`, `cvssTo?`: `number`, `publicFrom?`: `string`, `publicTo?`: `string`, `impact?`: `string`, `statusId?`: `string`, `dataFormat?`: `string`, `businessRiskId?`: `string`, `rulePresence?`: `boolean`[], `showAdvisories?`: `boolean`, `advisory?`: `string`, `ruleKey?`: `string`[], `knownExploit?`: `boolean`[], `firstReportedFrom?`: `string`, `firstReportedTo?`: `string`, `advisoryAvailable?`: `boolean`[], `remediation?`: `string`, `options?`: `any`) => `AxiosPromise`<[`SystemCvesIdsOut`](interfaces/SystemCvesIdsOut.md)\> |
| `getCveIdsList` | (`filter?`: `string`, `limit?`: `number`, `offset?`: `number`, `page?`: `number`, `pageSize?`: `number`, `sort?`: `string`, `cvssFrom?`: `number`, `cvssTo?`: `number`, `publicFrom?`: `string`, `publicTo?`: `string`, `impact?`: `string`, `dataFormat?`: `string`, `businessRiskId?`: `string`, `statusId?`: `string`, `rulePresence?`: `boolean`[], `tags?`: `string`[], `sapSids?`: `string`[], `sapSystem?`: `boolean`, `knownExploit?`: `boolean`[], `affecting?`: `boolean`[], `rhelVersion?`: `string`, `ansible?`: `boolean`, `mssql?`: `boolean`, `advisoryAvailable?`: `boolean`[], `options?`: `any`) => `AxiosPromise`<[`VulnerabilitiesIdsOut`](interfaces/VulnerabilitiesIdsOut.md)\> |
| `getCveList` | (`filter?`: `string`, `limit?`: `number`, `offset?`: `number`, `page?`: `number`, `pageSize?`: `number`, `sort?`: `string`, `cvssFrom?`: `number`, `cvssTo?`: `number`, `publicFrom?`: `string`, `publicTo?`: `string`, `impact?`: `string`, `dataFormat?`: `string`, `businessRiskId?`: `string`, `statusId?`: `string`, `rulePresence?`: `boolean`[], `tags?`: `string`[], `sapSids?`: `string`[], `sapSystem?`: `boolean`, `knownExploit?`: `boolean`[], `affecting?`: `boolean`[], `rhelVersion?`: `string`, `report?`: `boolean`, `advancedReport?`: `boolean`, `ansible?`: `boolean`, `mssql?`: `boolean`, `advisoryAvailable?`: `boolean`[], `options?`: `any`) => `AxiosPromise`<[`VulnerabilitiesOut`](interfaces/VulnerabilitiesOut.md)\> |
| `getCveListBySystem` | (`inventoryId`: `string`, `filter?`: `string`, `limit?`: `number`, `offset?`: `number`, `page?`: `number`, `pageSize?`: `number`, `sort?`: `string`, `cvssFrom?`: `number`, `cvssTo?`: `number`, `publicFrom?`: `string`, `publicTo?`: `string`, `impact?`: `string`, `statusId?`: `string`, `dataFormat?`: `string`, `businessRiskId?`: `string`, `rulePresence?`: `boolean`[], `showAdvisories?`: `boolean`, `advisory?`: `string`, `ruleKey?`: `string`[], `knownExploit?`: `boolean`[], `firstReportedFrom?`: `string`, `firstReportedTo?`: `string`, `advisoryAvailable?`: `boolean`[], `remediation?`: `string`, `report?`: `boolean`, `options?`: `any`) => `AxiosPromise`<[`SystemCvesOut`](interfaces/SystemCvesOut.md)\> |
| `getCveList_1` | (`vulnerabilitiesPostIn`: [`VulnerabilitiesPostIn`](interfaces/VulnerabilitiesPostIn.md), `filter?`: `string`, `limit?`: `number`, `offset?`: `number`, `page?`: `number`, `pageSize?`: `number`, `sort?`: `string`, `options?`: `any`) => `AxiosPromise`<[`VulnerabilitiesPostOut`](interfaces/VulnerabilitiesPostOut.md)\> |
| `getDashbar` | (`tags?`: `string`[], `sapSids?`: `string`[], `sapSystem?`: `boolean`, `ansible?`: `boolean`, `mssql?`: `boolean`, `options?`: `any`) => `AxiosPromise`<[`DashbarOut`](interfaces/DashbarOut.md)\> |
| `getDashboard` | (`tags?`: `string`[], `sapSids?`: `string`[], `sapSystem?`: `boolean`, `ansible?`: `boolean`, `mssql?`: `boolean`, `options?`: `any`) => `AxiosPromise`<[`Dashboard`](interfaces/Dashboard.md)\> |
| `getExecutiveReport` | (`options?`: `any`) => `AxiosPromise`<[`ExecutiveReport`](interfaces/ExecutiveReport.md)\> |
| `getPlaybookTemplate` | (`ruleId`: `string`, `options?`: `any`) => `AxiosPromise`<[`PlaybookTemplate`](interfaces/PlaybookTemplate.md)\> |
| `getStatusList` | (`options?`: `any`) => `AxiosPromise`<[`StatusListOut`](interfaces/StatusListOut.md)\> |
| `getSystemDetails` | (`inventoryId`: `string`, `options?`: `any`) => `AxiosPromise`<[`SystemDetailsOut`](interfaces/SystemDetailsOut.md)\> |
| `getSystemsIds` | (`filter?`: `string`, `limit?`: `number`, `offset?`: `number`, `page?`: `number`, `pageSize?`: `number`, `sort?`: `string`, `dataFormat?`: `string`, `stale?`: `boolean`, `uuid?`: `string`, `tags?`: `string`[], `sapSids?`: `string`[], `sapSystem?`: `boolean`, `excluded?`: `boolean`[], `rhelVersion?`: `string`, `ansible?`: `boolean`, `mssql?`: `boolean`, `options?`: `any`) => `AxiosPromise`<[`SystemIdsOut`](interfaces/SystemIdsOut.md)\> |
| `getSystemsList` | (`filter?`: `string`, `limit?`: `number`, `offset?`: `number`, `page?`: `number`, `pageSize?`: `number`, `sort?`: `string`, `dataFormat?`: `string`, `stale?`: `boolean`, `uuid?`: `string`, `tags?`: `string`[], `sapSids?`: `string`[], `sapSystem?`: `boolean`, `excluded?`: `boolean`[], `rhelVersion?`: `string`, `report?`: `boolean`, `ansible?`: `boolean`, `mssql?`: `boolean`, `options?`: `any`) => `AxiosPromise`<[`SystemListOut`](interfaces/SystemListOut.md)\> |
| `getVersion` | (`options?`: `any`) => `AxiosPromise`<[`VersionOut`](interfaces/VersionOut.md)\> |
| `setCveBusinessRisk` | (`cveRiskIn`: [`CveRiskIn`](interfaces/CveRiskIn.md), `options?`: `any`) => `AxiosPromise`<[`BulkChangeOut`](interfaces/BulkChangeOut.md)\> |
| `setCveStatus` | (`cveStatusIn`: [`CveStatusIn`](interfaces/CveStatusIn.md), `options?`: `any`) => `AxiosPromise`<[`BulkChangeOut`](interfaces/BulkChangeOut.md)\> |
| `setCvesWithoutErrata` | (`cvesWithoutErrataIn`: [`CvesWithoutErrataIn`](interfaces/CvesWithoutErrataIn.md), `options?`: `any`) => `AxiosPromise`<[`CvesWithoutErrataOut`](interfaces/CvesWithoutErrataOut.md)\> |
| `setStatus` | (`statusIn`: [`StatusIn`](interfaces/StatusIn.md), `options?`: `any`) => `AxiosPromise`<[`StatusOut`](interfaces/StatusOut.md)\> |
| `setSystemsOptOut` | (`optOutIn`: [`OptOutIn`](interfaces/OptOutIn.md), `options?`: `any`) => `AxiosPromise`<[`BulkChangeOut`](interfaces/BulkChangeOut.md)\> |

#### Defined in

[api.ts:5441](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L5441)

___

### DefaultApiFp

▸ **DefaultApiFp**(`configuration?`): `Object`

DefaultApi - functional programming interface

**`Export`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuration?` | [`Configuration`](classes/Configuration.md) |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `getAffectedSystemsByCve` | (`cveId`: `string`, `filter?`: `string`, `limit?`: `number`, `offset?`: `number`, `page?`: `number`, `pageSize?`: `number`, `sort?`: `string`, `statusId?`: `string`, `dataFormat?`: `string`, `uuid?`: `string`, `ruleKey?`: `string`[], `rulePresence?`: `boolean`[], `rule?`: `string`[], `tags?`: `string`[], `sapSids?`: `string`[], `sapSystem?`: `boolean`, `showAdvisories?`: `boolean`, `advisory?`: `string`, `rhelVersion?`: `string`, `firstReportedFrom?`: `string`, `firstReportedTo?`: `string`, `advisoryAvailable?`: `boolean`[], `remediation?`: `string`, `report?`: `boolean`, `ansible?`: `boolean`, `mssql?`: `boolean`, `options?`: `any`) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`AffectedSystemsOut`](interfaces/AffectedSystemsOut.md)\>\> |
| `getAffectedSystemsIdsByCve` | (`cveId`: `string`, `filter?`: `string`, `limit?`: `number`, `offset?`: `number`, `page?`: `number`, `pageSize?`: `number`, `sort?`: `string`, `statusId?`: `string`, `dataFormat?`: `string`, `uuid?`: `string`, `ruleKey?`: `string`[], `rulePresence?`: `boolean`[], `rule?`: `string`[], `tags?`: `string`[], `sapSids?`: `string`[], `sapSystem?`: `boolean`, `showAdvisories?`: `boolean`, `advisory?`: `string`, `rhelVersion?`: `string`, `firstReportedFrom?`: `string`, `firstReportedTo?`: `string`, `advisoryAvailable?`: `boolean`[], `remediation?`: `string`, `ansible?`: `boolean`, `mssql?`: `boolean`, `options?`: `any`) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`AffectedSystemsIdsOut`](interfaces/AffectedSystemsIdsOut.md)\>\> |
| `getAnnouncement` | (`options?`: `any`) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`AnnouncementOut`](interfaces/AnnouncementOut.md)\>\> |
| `getApiStatus` | (`options?`: `any`) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<`void`\>\> |
| `getBusinessRiskList` | (`options?`: `any`) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`BusinessRiskListOut`](interfaces/BusinessRiskListOut.md)\>\> |
| `getCveDetails` | (`cveId`: `string`, `options?`: `any`) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`CveDetailOut`](interfaces/CveDetailOut.md)\>\> |
| `getCveIdsBySystem` | (`inventoryId`: `string`, `filter?`: `string`, `limit?`: `number`, `offset?`: `number`, `page?`: `number`, `pageSize?`: `number`, `sort?`: `string`, `cvssFrom?`: `number`, `cvssTo?`: `number`, `publicFrom?`: `string`, `publicTo?`: `string`, `impact?`: `string`, `statusId?`: `string`, `dataFormat?`: `string`, `businessRiskId?`: `string`, `rulePresence?`: `boolean`[], `showAdvisories?`: `boolean`, `advisory?`: `string`, `ruleKey?`: `string`[], `knownExploit?`: `boolean`[], `firstReportedFrom?`: `string`, `firstReportedTo?`: `string`, `advisoryAvailable?`: `boolean`[], `remediation?`: `string`, `options?`: `any`) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`SystemCvesIdsOut`](interfaces/SystemCvesIdsOut.md)\>\> |
| `getCveIdsList` | (`filter?`: `string`, `limit?`: `number`, `offset?`: `number`, `page?`: `number`, `pageSize?`: `number`, `sort?`: `string`, `cvssFrom?`: `number`, `cvssTo?`: `number`, `publicFrom?`: `string`, `publicTo?`: `string`, `impact?`: `string`, `dataFormat?`: `string`, `businessRiskId?`: `string`, `statusId?`: `string`, `rulePresence?`: `boolean`[], `tags?`: `string`[], `sapSids?`: `string`[], `sapSystem?`: `boolean`, `knownExploit?`: `boolean`[], `affecting?`: `boolean`[], `rhelVersion?`: `string`, `ansible?`: `boolean`, `mssql?`: `boolean`, `advisoryAvailable?`: `boolean`[], `options?`: `any`) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`VulnerabilitiesIdsOut`](interfaces/VulnerabilitiesIdsOut.md)\>\> |
| `getCveList` | (`filter?`: `string`, `limit?`: `number`, `offset?`: `number`, `page?`: `number`, `pageSize?`: `number`, `sort?`: `string`, `cvssFrom?`: `number`, `cvssTo?`: `number`, `publicFrom?`: `string`, `publicTo?`: `string`, `impact?`: `string`, `dataFormat?`: `string`, `businessRiskId?`: `string`, `statusId?`: `string`, `rulePresence?`: `boolean`[], `tags?`: `string`[], `sapSids?`: `string`[], `sapSystem?`: `boolean`, `knownExploit?`: `boolean`[], `affecting?`: `boolean`[], `rhelVersion?`: `string`, `report?`: `boolean`, `advancedReport?`: `boolean`, `ansible?`: `boolean`, `mssql?`: `boolean`, `advisoryAvailable?`: `boolean`[], `options?`: `any`) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`VulnerabilitiesOut`](interfaces/VulnerabilitiesOut.md)\>\> |
| `getCveListBySystem` | (`inventoryId`: `string`, `filter?`: `string`, `limit?`: `number`, `offset?`: `number`, `page?`: `number`, `pageSize?`: `number`, `sort?`: `string`, `cvssFrom?`: `number`, `cvssTo?`: `number`, `publicFrom?`: `string`, `publicTo?`: `string`, `impact?`: `string`, `statusId?`: `string`, `dataFormat?`: `string`, `businessRiskId?`: `string`, `rulePresence?`: `boolean`[], `showAdvisories?`: `boolean`, `advisory?`: `string`, `ruleKey?`: `string`[], `knownExploit?`: `boolean`[], `firstReportedFrom?`: `string`, `firstReportedTo?`: `string`, `advisoryAvailable?`: `boolean`[], `remediation?`: `string`, `report?`: `boolean`, `options?`: `any`) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`SystemCvesOut`](interfaces/SystemCvesOut.md)\>\> |
| `getCveList_1` | (`vulnerabilitiesPostIn`: [`VulnerabilitiesPostIn`](interfaces/VulnerabilitiesPostIn.md), `filter?`: `string`, `limit?`: `number`, `offset?`: `number`, `page?`: `number`, `pageSize?`: `number`, `sort?`: `string`, `options?`: `any`) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`VulnerabilitiesPostOut`](interfaces/VulnerabilitiesPostOut.md)\>\> |
| `getDashbar` | (`tags?`: `string`[], `sapSids?`: `string`[], `sapSystem?`: `boolean`, `ansible?`: `boolean`, `mssql?`: `boolean`, `options?`: `any`) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`DashbarOut`](interfaces/DashbarOut.md)\>\> |
| `getDashboard` | (`tags?`: `string`[], `sapSids?`: `string`[], `sapSystem?`: `boolean`, `ansible?`: `boolean`, `mssql?`: `boolean`, `options?`: `any`) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`Dashboard`](interfaces/Dashboard.md)\>\> |
| `getExecutiveReport` | (`options?`: `any`) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`ExecutiveReport`](interfaces/ExecutiveReport.md)\>\> |
| `getPlaybookTemplate` | (`ruleId`: `string`, `options?`: `any`) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`PlaybookTemplate`](interfaces/PlaybookTemplate.md)\>\> |
| `getStatusList` | (`options?`: `any`) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`StatusListOut`](interfaces/StatusListOut.md)\>\> |
| `getSystemDetails` | (`inventoryId`: `string`, `options?`: `any`) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`SystemDetailsOut`](interfaces/SystemDetailsOut.md)\>\> |
| `getSystemsIds` | (`filter?`: `string`, `limit?`: `number`, `offset?`: `number`, `page?`: `number`, `pageSize?`: `number`, `sort?`: `string`, `dataFormat?`: `string`, `stale?`: `boolean`, `uuid?`: `string`, `tags?`: `string`[], `sapSids?`: `string`[], `sapSystem?`: `boolean`, `excluded?`: `boolean`[], `rhelVersion?`: `string`, `ansible?`: `boolean`, `mssql?`: `boolean`, `options?`: `any`) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`SystemIdsOut`](interfaces/SystemIdsOut.md)\>\> |
| `getSystemsList` | (`filter?`: `string`, `limit?`: `number`, `offset?`: `number`, `page?`: `number`, `pageSize?`: `number`, `sort?`: `string`, `dataFormat?`: `string`, `stale?`: `boolean`, `uuid?`: `string`, `tags?`: `string`[], `sapSids?`: `string`[], `sapSystem?`: `boolean`, `excluded?`: `boolean`[], `rhelVersion?`: `string`, `report?`: `boolean`, `ansible?`: `boolean`, `mssql?`: `boolean`, `options?`: `any`) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`SystemListOut`](interfaces/SystemListOut.md)\>\> |
| `getVersion` | (`options?`: `any`) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`VersionOut`](interfaces/VersionOut.md)\>\> |
| `setCveBusinessRisk` | (`cveRiskIn`: [`CveRiskIn`](interfaces/CveRiskIn.md), `options?`: `any`) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`BulkChangeOut`](interfaces/BulkChangeOut.md)\>\> |
| `setCveStatus` | (`cveStatusIn`: [`CveStatusIn`](interfaces/CveStatusIn.md), `options?`: `any`) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`BulkChangeOut`](interfaces/BulkChangeOut.md)\>\> |
| `setCvesWithoutErrata` | (`cvesWithoutErrataIn`: [`CvesWithoutErrataIn`](interfaces/CvesWithoutErrataIn.md), `options?`: `any`) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`CvesWithoutErrataOut`](interfaces/CvesWithoutErrataOut.md)\>\> |
| `setStatus` | (`statusIn`: [`StatusIn`](interfaces/StatusIn.md), `options?`: `any`) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`StatusOut`](interfaces/StatusOut.md)\>\> |
| `setSystemsOptOut` | (`optOutIn`: [`OptOutIn`](interfaces/OptOutIn.md), `options?`: `any`) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`BulkChangeOut`](interfaces/BulkChangeOut.md)\>\> |

#### Defined in

[api.ts:4899](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L4899)
