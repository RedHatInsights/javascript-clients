[@redhat-cloud-services/vulnerabilities-client](../README.md) › [Globals](../globals.md) › [DefaultApi](defaultapi.md)

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

* [getAffectedSystemsByCve](defaultapi.md#getaffectedsystemsbycve)
* [getAffectedSystemsIdsByCve](defaultapi.md#getaffectedsystemsidsbycve)
* [getAnnouncement](defaultapi.md#getannouncement)
* [getApiStatus](defaultapi.md#getapistatus)
* [getBusinessRiskList](defaultapi.md#getbusinessrisklist)
* [getCveDetails](defaultapi.md#getcvedetails)
* [getCveIdsBySystem](defaultapi.md#getcveidsbysystem)
* [getCveIdsList](defaultapi.md#getcveidslist)
* [getCveList](defaultapi.md#getcvelist)
* [getCveListBySystem](defaultapi.md#getcvelistbysystem)
* [getCveList_1](defaultapi.md#getcvelist_1)
* [getDashbar](defaultapi.md#getdashbar)
* [getDashboard](defaultapi.md#getdashboard)
* [getExecutiveReport](defaultapi.md#getexecutivereport)
* [getMitigatedSystemsByCve](defaultapi.md#getmitigatedsystemsbycve)
* [getMitigatedSystemsIdsByCve](defaultapi.md#getmitigatedsystemsidsbycve)
* [getPlaybookTemplate](defaultapi.md#getplaybooktemplate)
* [getStatusList](defaultapi.md#getstatuslist)
* [getSystemDetails](defaultapi.md#getsystemdetails)
* [getSystemsIds](defaultapi.md#getsystemsids)
* [getSystemsList](defaultapi.md#getsystemslist)
* [getVersion](defaultapi.md#getversion)
* [setCveBusinessRisk](defaultapi.md#setcvebusinessrisk)
* [setCveStatus](defaultapi.md#setcvestatus)
* [setStatus](defaultapi.md#setstatus)
* [setSystemsOptOut](defaultapi.md#setsystemsoptout)

## Constructors

###  constructor

\+ **new DefaultApi**(`configuration?`: [Configuration](configuration.md), `basePath`: string, `axios`: AxiosInstance): *[DefaultApi](defaultapi.md)*

*Inherited from [BaseAPI](baseapi.md).[constructor](baseapi.md#constructor)*

*Defined in [git-api/base.ts:49](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/base.ts#L49)*

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

*Defined in [git-api/base.ts:51](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/base.ts#L51)*

___

### `Protected` basePath

• **basePath**: *string*

*Inherited from [BaseAPI](baseapi.md).[basePath](baseapi.md#protected-basepath)*

*Defined in [git-api/base.ts:51](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/base.ts#L51)*

___

### `Protected` configuration

• **configuration**: *[Configuration](configuration.md) | undefined*

*Inherited from [BaseAPI](baseapi.md).[configuration](baseapi.md#protected-configuration)*

*Defined in [git-api/base.ts:49](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/base.ts#L49)*

## Methods

###  getAffectedSystemsByCve

▸ **getAffectedSystemsByCve**(`cveId`: string, `filter?`: string, `limit?`: number, `offset?`: number, `page?`: number, `pageSize?`: number, `sort?`: string, `statusId?`: string, `dataFormat?`: string, `uuid?`: string, `ruleKey?`: Array‹string›, `rulePresence?`: Array‹boolean›, `rule?`: Array‹string›, `tags?`: Array‹string›, `sapSids?`: Array‹string›, `sapSystem?`: boolean, `showAdvisories?`: boolean, `advisory?`: string, `rhelVersion?`: string, `firstReportedFrom?`: string, `firstReportedTo?`: string, `advisoryAvailable?`: Array‹boolean›, `remediation?`: string, `report?`: boolean, `options?`: any): *Promise‹AxiosResponse‹[AffectedSystemsOut](../interfaces/affectedsystemsout.md)››*

*Defined in [git-api/api.ts:6019](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L6019)*

Report of affected systems for a given CVE.

**`summary`** Affected systems for a given CVE.

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`cveId` | string | CVE id. |
`filter?` | string | - |
`limit?` | number | - |
`offset?` | number | - |
`page?` | number | - |
`pageSize?` | number | - |
`sort?` | string | - |
`statusId?` | string | - |
`dataFormat?` | string | - |
`uuid?` | string | - |
`ruleKey?` | Array‹string› | - |
`rulePresence?` | Array‹boolean› | - |
`rule?` | Array‹string› | - |
`tags?` | Array‹string› | - |
`sapSids?` | Array‹string› | - |
`sapSystem?` | boolean | - |
`showAdvisories?` | boolean | - |
`advisory?` | string | - |
`rhelVersion?` | string | - |
`firstReportedFrom?` | string | - |
`firstReportedTo?` | string | - |
`advisoryAvailable?` | Array‹boolean› | - |
`remediation?` | string | - |
`report?` | boolean | - |
`options?` | any | - |

**Returns:** *Promise‹AxiosResponse‹[AffectedSystemsOut](../interfaces/affectedsystemsout.md)››*

___

###  getAffectedSystemsIdsByCve

▸ **getAffectedSystemsIdsByCve**(`cveId`: string, `filter?`: string, `limit?`: number, `offset?`: number, `page?`: number, `pageSize?`: number, `sort?`: string, `statusId?`: string, `dataFormat?`: string, `uuid?`: string, `ruleKey?`: Array‹string›, `rulePresence?`: Array‹boolean›, `rule?`: Array‹string›, `tags?`: Array‹string›, `sapSids?`: Array‹string›, `sapSystem?`: boolean, `showAdvisories?`: boolean, `advisory?`: string, `rhelVersion?`: string, `firstReportedFrom?`: string, `firstReportedTo?`: string, `advisoryAvailable?`: Array‹boolean›, `remediation?`: string, `options?`: any): *Promise‹AxiosResponse‹[AffectedSystemsIdsOut](../interfaces/affectedsystemsidsout.md)››*

*Defined in [git-api/api.ts:6053](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L6053)*

Report of IDs of affected systems for a given CVE.

**`summary`** IDs of affected systems for a given CVE.

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`cveId` | string | CVE id. |
`filter?` | string | - |
`limit?` | number | - |
`offset?` | number | - |
`page?` | number | - |
`pageSize?` | number | - |
`sort?` | string | - |
`statusId?` | string | - |
`dataFormat?` | string | - |
`uuid?` | string | - |
`ruleKey?` | Array‹string› | - |
`rulePresence?` | Array‹boolean› | - |
`rule?` | Array‹string› | - |
`tags?` | Array‹string› | - |
`sapSids?` | Array‹string› | - |
`sapSystem?` | boolean | - |
`showAdvisories?` | boolean | - |
`advisory?` | string | - |
`rhelVersion?` | string | - |
`firstReportedFrom?` | string | - |
`firstReportedTo?` | string | - |
`advisoryAvailable?` | Array‹boolean› | - |
`remediation?` | string | - |
`options?` | any | - |

**Returns:** *Promise‹AxiosResponse‹[AffectedSystemsIdsOut](../interfaces/affectedsystemsidsout.md)››*

___

###  getAnnouncement

▸ **getAnnouncement**(`options?`: any): *Promise‹AxiosResponse‹[AnnouncementOut](../interfaces/announcementout.md)››*

*Defined in [git-api/api.ts:6064](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L6064)*

Get announcement shown above CVEs list.

**`summary`** Announcement.

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type |
------ | ------ |
`options?` | any |

**Returns:** *Promise‹AxiosResponse‹[AnnouncementOut](../interfaces/announcementout.md)››*

___

###  getApiStatus

▸ **getApiStatus**(`options?`: any): *Promise‹AxiosResponse‹void››*

*Defined in [git-api/api.ts:6075](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L6075)*

Checks database availability and API response threshold time.

**`summary`** Health status of application

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type |
------ | ------ |
`options?` | any |

**Returns:** *Promise‹AxiosResponse‹void››*

___

###  getBusinessRiskList

▸ **getBusinessRiskList**(`options?`: any): *Promise‹AxiosResponse‹[BusinessRiskListOut](../interfaces/businessrisklistout.md)››*

*Defined in [git-api/api.ts:6086](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L6086)*

Returns available business risk and business_risk_id pairs where business_risk_id is internal ID of the business risk.

**`summary`** Available business risk/business_risk_id pairs.

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type |
------ | ------ |
`options?` | any |

**Returns:** *Promise‹AxiosResponse‹[BusinessRiskListOut](../interfaces/businessrisklistout.md)››*

___

###  getCveDetails

▸ **getCveDetails**(`cveId`: string, `showAdvisoriesDetails?`: boolean, `options?`: any): *Promise‹AxiosResponse‹[CveDetailOut](../interfaces/cvedetailout.md)››*

*Defined in [git-api/api.ts:6099](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L6099)*

Show all information about given CVE.

**`summary`** Details of a CVE.

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`cveId` | string | CVE id. |
`showAdvisoriesDetails?` | boolean | - |
`options?` | any | - |

**Returns:** *Promise‹AxiosResponse‹[CveDetailOut](../interfaces/cvedetailout.md)››*

___

###  getCveIdsBySystem

▸ **getCveIdsBySystem**(`inventoryId`: string, `filter?`: string, `limit?`: number, `offset?`: number, `page?`: number, `pageSize?`: number, `sort?`: string, `cvssFrom?`: number, `cvssTo?`: number, `publicFrom?`: string, `publicTo?`: string, `impact?`: string, `statusId?`: string, `dataFormat?`: string, `businessRiskId?`: string, `rulePresence?`: Array‹boolean›, `showAdvisories?`: boolean, `advisory?`: string, `ruleKey?`: Array‹string›, `knownExploit?`: Array‹boolean›, `firstReportedFrom?`: string, `firstReportedTo?`: string, `advisoryAvailable?`: Array‹boolean›, `remediation?`: string, `options?`: any): *Promise‹AxiosResponse‹[SystemCvesIdsOut](../interfaces/systemcvesidsout.md)››*

*Defined in [git-api/api.ts:6134](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L6134)*

Shows IDs of all CVEs the system is exposed to.

**`summary`** CVE IDs report for a system.

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`inventoryId` | string | Inventory ID. |
`filter?` | string | - |
`limit?` | number | - |
`offset?` | number | - |
`page?` | number | - |
`pageSize?` | number | - |
`sort?` | string | - |
`cvssFrom?` | number | - |
`cvssTo?` | number | - |
`publicFrom?` | string | - |
`publicTo?` | string | - |
`impact?` | string | - |
`statusId?` | string | - |
`dataFormat?` | string | - |
`businessRiskId?` | string | - |
`rulePresence?` | Array‹boolean› | - |
`showAdvisories?` | boolean | - |
`advisory?` | string | - |
`ruleKey?` | Array‹string› | - |
`knownExploit?` | Array‹boolean› | - |
`firstReportedFrom?` | string | - |
`firstReportedTo?` | string | - |
`advisoryAvailable?` | Array‹boolean› | - |
`remediation?` | string | - |
`options?` | any | - |

**Returns:** *Promise‹AxiosResponse‹[SystemCvesIdsOut](../interfaces/systemcvesidsout.md)››*

___

###  getCveIdsList

▸ **getCveIdsList**(`filter?`: string, `limit?`: number, `offset?`: number, `page?`: number, `pageSize?`: number, `sort?`: string, `cvssFrom?`: number, `cvssTo?`: number, `publicFrom?`: string, `publicTo?`: string, `impact?`: string, `dataFormat?`: string, `businessRiskId?`: string, `statusId?`: string, `rulePresence?`: Array‹boolean›, `tags?`: Array‹string›, `sapSids?`: Array‹string›, `sapSystem?`: boolean, `knownExploit?`: Array‹boolean›, `affecting?`: Array‹boolean›, `rhelVersion?`: string, `options?`: any): *Promise‹AxiosResponse‹[VulnerabilitiesIdsOut](../interfaces/vulnerabilitiesidsout.md)››*

*Defined in [git-api/api.ts:6166](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L6166)*

Overview of vulnerabilities IDs across whole host inventory.

**`summary`** Vulnerabilities IDs overview.

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type |
------ | ------ |
`filter?` | string |
`limit?` | number |
`offset?` | number |
`page?` | number |
`pageSize?` | number |
`sort?` | string |
`cvssFrom?` | number |
`cvssTo?` | number |
`publicFrom?` | string |
`publicTo?` | string |
`impact?` | string |
`dataFormat?` | string |
`businessRiskId?` | string |
`statusId?` | string |
`rulePresence?` | Array‹boolean› |
`tags?` | Array‹string› |
`sapSids?` | Array‹string› |
`sapSystem?` | boolean |
`knownExploit?` | Array‹boolean› |
`affecting?` | Array‹boolean› |
`rhelVersion?` | string |
`options?` | any |

**Returns:** *Promise‹AxiosResponse‹[VulnerabilitiesIdsOut](../interfaces/vulnerabilitiesidsout.md)››*

___

###  getCveList

▸ **getCveList**(`filter?`: string, `limit?`: number, `offset?`: number, `page?`: number, `pageSize?`: number, `sort?`: string, `cvssFrom?`: number, `cvssTo?`: number, `publicFrom?`: string, `publicTo?`: string, `impact?`: string, `dataFormat?`: string, `businessRiskId?`: string, `statusId?`: string, `rulePresence?`: Array‹boolean›, `tags?`: Array‹string›, `sapSids?`: Array‹string›, `sapSystem?`: boolean, `knownExploit?`: Array‹boolean›, `affecting?`: Array‹boolean›, `rhelVersion?`: string, `report?`: boolean, `advancedReport?`: boolean, `options?`: any): *Promise‹AxiosResponse‹[VulnerabilitiesOut](../interfaces/vulnerabilitiesout.md)››*

*Defined in [git-api/api.ts:6200](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L6200)*

Overview of vulnerabilities across whole host inventory.

**`summary`** Vulnerabilities overview.

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type |
------ | ------ |
`filter?` | string |
`limit?` | number |
`offset?` | number |
`page?` | number |
`pageSize?` | number |
`sort?` | string |
`cvssFrom?` | number |
`cvssTo?` | number |
`publicFrom?` | string |
`publicTo?` | string |
`impact?` | string |
`dataFormat?` | string |
`businessRiskId?` | string |
`statusId?` | string |
`rulePresence?` | Array‹boolean› |
`tags?` | Array‹string› |
`sapSids?` | Array‹string› |
`sapSystem?` | boolean |
`knownExploit?` | Array‹boolean› |
`affecting?` | Array‹boolean› |
`rhelVersion?` | string |
`report?` | boolean |
`advancedReport?` | boolean |
`options?` | any |

**Returns:** *Promise‹AxiosResponse‹[VulnerabilitiesOut](../interfaces/vulnerabilitiesout.md)››*

___

###  getCveListBySystem

▸ **getCveListBySystem**(`inventoryId`: string, `filter?`: string, `limit?`: number, `offset?`: number, `page?`: number, `pageSize?`: number, `sort?`: string, `cvssFrom?`: number, `cvssTo?`: number, `publicFrom?`: string, `publicTo?`: string, `impact?`: string, `statusId?`: string, `dataFormat?`: string, `businessRiskId?`: string, `rulePresence?`: Array‹boolean›, `showAdvisories?`: boolean, `advisory?`: string, `ruleKey?`: Array‹string›, `knownExploit?`: Array‹boolean›, `firstReportedFrom?`: string, `firstReportedTo?`: string, `advisoryAvailable?`: Array‹boolean›, `remediation?`: string, `report?`: boolean, `options?`: any): *Promise‹AxiosResponse‹[SystemCvesOut](../interfaces/systemcvesout.md)››*

*Defined in [git-api/api.ts:6236](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L6236)*

Shows detailed information about all CVEs the system is exposed to.

**`summary`** CVE report for a system.

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`inventoryId` | string | Inventory ID. |
`filter?` | string | - |
`limit?` | number | - |
`offset?` | number | - |
`page?` | number | - |
`pageSize?` | number | - |
`sort?` | string | - |
`cvssFrom?` | number | - |
`cvssTo?` | number | - |
`publicFrom?` | string | - |
`publicTo?` | string | - |
`impact?` | string | - |
`statusId?` | string | - |
`dataFormat?` | string | - |
`businessRiskId?` | string | - |
`rulePresence?` | Array‹boolean› | - |
`showAdvisories?` | boolean | - |
`advisory?` | string | - |
`ruleKey?` | Array‹string› | - |
`knownExploit?` | Array‹boolean› | - |
`firstReportedFrom?` | string | - |
`firstReportedTo?` | string | - |
`advisoryAvailable?` | Array‹boolean› | - |
`remediation?` | string | - |
`report?` | boolean | - |
`options?` | any | - |

**Returns:** *Promise‹AxiosResponse‹[SystemCvesOut](../interfaces/systemcvesout.md)››*

___

###  getCveList_1

▸ **getCveList_1**(`vulnerabilitiesPostIn`: [VulnerabilitiesPostIn](../interfaces/vulnerabilitiespostin.md), `filter?`: string, `limit?`: number, `offset?`: number, `page?`: number, `pageSize?`: number, `sort?`: string, `options?`: any): *Promise‹AxiosResponse‹[VulnerabilitiesPostOut](../interfaces/vulnerabilitiespostout.md)››*

*Defined in [git-api/api.ts:6254](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L6254)*

Overview of vulnerabilities for specific CVEs provided in the body.

**`summary`** Vulnerabilities overview.

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`vulnerabilitiesPostIn` | [VulnerabilitiesPostIn](../interfaces/vulnerabilitiespostin.md) | List of CVEs to provide info about. |
`filter?` | string | - |
`limit?` | number | - |
`offset?` | number | - |
`page?` | number | - |
`pageSize?` | number | - |
`sort?` | string | - |
`options?` | any | - |

**Returns:** *Promise‹AxiosResponse‹[VulnerabilitiesPostOut](../interfaces/vulnerabilitiespostout.md)››*

___

###  getDashbar

▸ **getDashbar**(`tags?`: Array‹string›, `sapSids?`: Array‹string›, `sapSystem?`: boolean, `options?`: any): *Promise‹AxiosResponse‹[DashbarOut](../interfaces/dashbarout.md)››*

*Defined in [git-api/api.ts:6268](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L6268)*

Overview of CVE aggregations used for Dashbar.

**`summary`** Aggregations for Dashbar.

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type |
------ | ------ |
`tags?` | Array‹string› |
`sapSids?` | Array‹string› |
`sapSystem?` | boolean |
`options?` | any |

**Returns:** *Promise‹AxiosResponse‹[DashbarOut](../interfaces/dashbarout.md)››*

___

###  getDashboard

▸ **getDashboard**(`tags?`: Array‹string›, `sapSids?`: Array‹string›, `sapSystem?`: boolean, `options?`: any): *Promise‹AxiosResponse‹[Dashboard](../interfaces/dashboard.md)››*

*Defined in [git-api/api.ts:6282](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L6282)*

Returns top level overview of vulnerabilities affecting given account.

**`summary`** Top level overview of vulnerabilities.

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type |
------ | ------ |
`tags?` | Array‹string› |
`sapSids?` | Array‹string› |
`sapSystem?` | boolean |
`options?` | any |

**Returns:** *Promise‹AxiosResponse‹[Dashboard](../interfaces/dashboard.md)››*

___

###  getExecutiveReport

▸ **getExecutiveReport**(`options?`: any): *Promise‹AxiosResponse‹[ExecutiveReport](../interfaces/executivereport.md)››*

*Defined in [git-api/api.ts:6293](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L6293)*

Returns top level overview of vulnerabilities affecting given account.

**`summary`** Top level overview of vulnerabilities.

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type |
------ | ------ |
`options?` | any |

**Returns:** *Promise‹AxiosResponse‹[ExecutiveReport](../interfaces/executivereport.md)››*

___

###  getMitigatedSystemsByCve

▸ **getMitigatedSystemsByCve**(`cveId`: string, `filter?`: string, `limit?`: number, `offset?`: number, `page?`: number, `pageSize?`: number, `sort?`: string, `statusId?`: string, `dataFormat?`: string, `uuid?`: string, `ruleKey?`: Array‹string›, `rulePresence?`: Array‹boolean›, `rule?`: Array‹string›, `tags?`: Array‹string›, `sapSids?`: Array‹string›, `sapSystem?`: boolean, `showAdvisories?`: boolean, `advisory?`: string, `rhelVersion?`: string, `advisoryAvailable?`: Array‹boolean›, `remediation?`: string, `options?`: any): *Promise‹AxiosResponse‹[MitigatedSystemsIdsOut](../interfaces/mitigatedsystemsidsout.md)››*

*Defined in [git-api/api.ts:6325](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L6325)*

Report of mitigated system IDs for a given CVE with a security rule. Returns empty list if CVE does not have a security rule.

**`summary`** IDs of mitigated systems for a given CVE which has a security rule.

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`cveId` | string | CVE id. |
`filter?` | string | - |
`limit?` | number | - |
`offset?` | number | - |
`page?` | number | - |
`pageSize?` | number | - |
`sort?` | string | - |
`statusId?` | string | - |
`dataFormat?` | string | - |
`uuid?` | string | - |
`ruleKey?` | Array‹string› | - |
`rulePresence?` | Array‹boolean› | - |
`rule?` | Array‹string› | - |
`tags?` | Array‹string› | - |
`sapSids?` | Array‹string› | - |
`sapSystem?` | boolean | - |
`showAdvisories?` | boolean | - |
`advisory?` | string | - |
`rhelVersion?` | string | - |
`advisoryAvailable?` | Array‹boolean› | - |
`remediation?` | string | - |
`options?` | any | - |

**Returns:** *Promise‹AxiosResponse‹[MitigatedSystemsIdsOut](../interfaces/mitigatedsystemsidsout.md)››*

___

###  getMitigatedSystemsIdsByCve

▸ **getMitigatedSystemsIdsByCve**(`cveId`: string, `filter?`: string, `limit?`: number, `offset?`: number, `page?`: number, `pageSize?`: number, `sort?`: string, `statusId?`: string, `dataFormat?`: string, `uuid?`: string, `ruleKey?`: Array‹string›, `rulePresence?`: Array‹boolean›, `rule?`: Array‹string›, `tags?`: Array‹string›, `sapSids?`: Array‹string›, `sapSystem?`: boolean, `showAdvisories?`: boolean, `advisory?`: string, `rhelVersion?`: string, `advisoryAvailable?`: Array‹boolean›, `remediation?`: string, `options?`: any): *Promise‹AxiosResponse‹[MitigatedSystemsOut](../interfaces/mitigatedsystemsout.md)››*

*Defined in [git-api/api.ts:6357](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L6357)*

Report of mitigated systems for a given CVE with a security rule. Returns empty list if CVE does not have a security rule.

**`summary`** Mitigated systems for a given CVE which has a security rule.

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`cveId` | string | CVE id. |
`filter?` | string | - |
`limit?` | number | - |
`offset?` | number | - |
`page?` | number | - |
`pageSize?` | number | - |
`sort?` | string | - |
`statusId?` | string | - |
`dataFormat?` | string | - |
`uuid?` | string | - |
`ruleKey?` | Array‹string› | - |
`rulePresence?` | Array‹boolean› | - |
`rule?` | Array‹string› | - |
`tags?` | Array‹string› | - |
`sapSids?` | Array‹string› | - |
`sapSystem?` | boolean | - |
`showAdvisories?` | boolean | - |
`advisory?` | string | - |
`rhelVersion?` | string | - |
`advisoryAvailable?` | Array‹boolean› | - |
`remediation?` | string | - |
`options?` | any | - |

**Returns:** *Promise‹AxiosResponse‹[MitigatedSystemsOut](../interfaces/mitigatedsystemsout.md)››*

___

###  getPlaybookTemplate

▸ **getPlaybookTemplate**(`ruleId`: string, `options?`: any): *Promise‹AxiosResponse‹[PlaybookTemplate](../interfaces/playbooktemplate.md)››*

*Defined in [git-api/api.ts:6369](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L6369)*

Return Ansible playbook template for given rule id.

**`summary`** Playbook template for CVEs with security rules.

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`ruleId` | string | Insights security rule ID. |
`options?` | any | - |

**Returns:** *Promise‹AxiosResponse‹[PlaybookTemplate](../interfaces/playbooktemplate.md)››*

___

###  getStatusList

▸ **getStatusList**(`options?`: any): *Promise‹AxiosResponse‹[StatusListOut](../interfaces/statuslistout.md)››*

*Defined in [git-api/api.ts:6380](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L6380)*

Returns available status and status_id pairs where status_id is internal ID of the status.

**`summary`** Available status/status_id pairs.

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type |
------ | ------ |
`options?` | any |

**Returns:** *Promise‹AxiosResponse‹[StatusListOut](../interfaces/statuslistout.md)››*

___

###  getSystemDetails

▸ **getSystemDetails**(`inventoryId`: string, `options?`: any): *Promise‹AxiosResponse‹[SystemDetailsOut](../interfaces/systemdetailsout.md)››*

*Defined in [git-api/api.ts:6392](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L6392)*

Provides details of a system, e.g. it\'s opt out status.

**`summary`** System details.

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`inventoryId` | string | Inventory ID. |
`options?` | any | - |

**Returns:** *Promise‹AxiosResponse‹[SystemDetailsOut](../interfaces/systemdetailsout.md)››*

___

###  getSystemsIds

▸ **getSystemsIds**(`filter?`: string, `limit?`: number, `offset?`: number, `page?`: number, `pageSize?`: number, `sort?`: string, `dataFormat?`: string, `stale?`: boolean, `uuid?`: string, `tags?`: Array‹string›, `sapSids?`: Array‹string›, `sapSystem?`: boolean, `excluded?`: Array‹boolean›, `rhelVersion?`: string, `options?`: any): *Promise‹AxiosResponse‹[SystemIdsOut](../interfaces/systemidsout.md)››*

*Defined in [git-api/api.ts:6417](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L6417)*

List systems IDs visible to logged in account.

**`summary`** List systems IDs along with additional info about opt out state of the system.

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type |
------ | ------ |
`filter?` | string |
`limit?` | number |
`offset?` | number |
`page?` | number |
`pageSize?` | number |
`sort?` | string |
`dataFormat?` | string |
`stale?` | boolean |
`uuid?` | string |
`tags?` | Array‹string› |
`sapSids?` | Array‹string› |
`sapSystem?` | boolean |
`excluded?` | Array‹boolean› |
`rhelVersion?` | string |
`options?` | any |

**Returns:** *Promise‹AxiosResponse‹[SystemIdsOut](../interfaces/systemidsout.md)››*

___

###  getSystemsList

▸ **getSystemsList**(`filter?`: string, `limit?`: number, `offset?`: number, `page?`: number, `pageSize?`: number, `sort?`: string, `dataFormat?`: string, `stale?`: boolean, `uuid?`: string, `tags?`: Array‹string›, `sapSids?`: Array‹string›, `sapSystem?`: boolean, `excluded?`: Array‹boolean›, `rhelVersion?`: string, `report?`: boolean, `options?`: any): *Promise‹AxiosResponse‹[SystemListOut](../interfaces/systemlistout.md)››*

*Defined in [git-api/api.ts:6443](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L6443)*

List systems visible to logged in account with basic information related to vulnerabilities.

**`summary`** List systems.

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type |
------ | ------ |
`filter?` | string |
`limit?` | number |
`offset?` | number |
`page?` | number |
`pageSize?` | number |
`sort?` | string |
`dataFormat?` | string |
`stale?` | boolean |
`uuid?` | string |
`tags?` | Array‹string› |
`sapSids?` | Array‹string› |
`sapSystem?` | boolean |
`excluded?` | Array‹boolean› |
`rhelVersion?` | string |
`report?` | boolean |
`options?` | any |

**Returns:** *Promise‹AxiosResponse‹[SystemListOut](../interfaces/systemlistout.md)››*

___

###  getVersion

▸ **getVersion**(`options?`: any): *Promise‹AxiosResponse‹[VersionOut](../interfaces/versionout.md)››*

*Defined in [git-api/api.ts:6454](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L6454)*

Get application version.

**`summary`** Application version

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type |
------ | ------ |
`options?` | any |

**Returns:** *Promise‹AxiosResponse‹[VersionOut](../interfaces/versionout.md)››*

___

###  setCveBusinessRisk

▸ **setCveBusinessRisk**(`cveRiskIn`: [CveRiskIn](../interfaces/cveriskin.md), `options?`: any): *Promise‹AxiosResponse‹[BulkChangeOut](../interfaces/bulkchangeout.md)››*

*Defined in [git-api/api.ts:6466](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L6466)*

Sets business risk for a CVE.

**`summary`** Set business risk for a CVE.

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`cveRiskIn` | [CveRiskIn](../interfaces/cveriskin.md) | Values to be set. At least one of the \&quot;business_risk_id\&quot; or \&quot;business_risk_text\&quot; parameters is required. |
`options?` | any | - |

**Returns:** *Promise‹AxiosResponse‹[BulkChangeOut](../interfaces/bulkchangeout.md)››*

___

###  setCveStatus

▸ **setCveStatus**(`cveStatusIn`: [CveStatusIn](../interfaces/cvestatusin.md), `options?`: any): *Promise‹AxiosResponse‹[BulkChangeOut](../interfaces/bulkchangeout.md)››*

*Defined in [git-api/api.ts:6478](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L6478)*

Sets status for a CVE.

**`summary`** Set status for a CVE.

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`cveStatusIn` | [CveStatusIn](../interfaces/cvestatusin.md) | Values to be set. At least one of the \&quot;status_id\&quot; or \&quot;status_text\&quot; parameters is required. |
`options?` | any | - |

**Returns:** *Promise‹AxiosResponse‹[BulkChangeOut](../interfaces/bulkchangeout.md)››*

___

###  setStatus

▸ **setStatus**(`statusIn`: [StatusIn](../interfaces/statusin.md), `options?`: any): *Promise‹AxiosResponse‹[StatusOut](../interfaces/statusout.md)››*

*Defined in [git-api/api.ts:6490](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L6490)*

Sets status for given hosts and CVEs.

**`summary`** Set status for system vulnerabilities.

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`statusIn` | [StatusIn](../interfaces/statusin.md) | Values to be set. |
`options?` | any | - |

**Returns:** *Promise‹AxiosResponse‹[StatusOut](../interfaces/statusout.md)››*

___

###  setSystemsOptOut

▸ **setSystemsOptOut**(`optOutIn`: [OptOutIn](../interfaces/optoutin.md), `options?`: any): *Promise‹AxiosResponse‹[BulkChangeOut](../interfaces/bulkchangeout.md)››*

*Defined in [git-api/api.ts:6502](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L6502)*

Opts in/out a systems. Opted out system is not shown and manageable by the vulnerability application.

**`summary`** Opt in/out a system to/from vulnerability application.

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`optOutIn` | [OptOutIn](../interfaces/optoutin.md) | Values to be set. |
`options?` | any | - |

**Returns:** *Promise‹AxiosResponse‹[BulkChangeOut](../interfaces/bulkchangeout.md)››*
