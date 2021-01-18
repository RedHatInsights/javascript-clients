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

* [deleteSystem](defaultapi.md#deletesystem)
* [getAffectedSystemsByCve](defaultapi.md#getaffectedsystemsbycve)
* [getAffectedSystemsIdsByCve](defaultapi.md#getaffectedsystemsidsbycve)
* [getApiStatus](defaultapi.md#getapistatus)
* [getBusinessRiskList](defaultapi.md#getbusinessrisklist)
* [getCveDetails](defaultapi.md#getcvedetails)
* [getCveIdsBySystem](defaultapi.md#getcveidsbysystem)
* [getCveIdsList](defaultapi.md#getcveidslist)
* [getCveList](defaultapi.md#getcvelist)
* [getCveListBySystem](defaultapi.md#getcvelistbysystem)
* [getDashboard](defaultapi.md#getdashboard)
* [getExecutiveReport](defaultapi.md#getexecutivereport)
* [getPlaybookTemplate](defaultapi.md#getplaybooktemplate)
* [getStatusList](defaultapi.md#getstatuslist)
* [getSystemDetails](defaultapi.md#getsystemdetails)
* [getSystemsIds](defaultapi.md#getsystemsids)
* [getSystemsList](defaultapi.md#getsystemslist)
* [getVersion](defaultapi.md#getversion)
* [setCveBusinessRisk](defaultapi.md#setcvebusinessrisk)
* [setCveStatus](defaultapi.md#setcvestatus)
* [setStatus](defaultapi.md#setstatus)
* [setSystemOptOut](defaultapi.md#setsystemoptout)
* [setSystemsOptOut](defaultapi.md#setsystemsoptout)

## Constructors

###  constructor

\+ **new DefaultApi**(`configuration?`: [Configuration](configuration.md), `basePath`: string, `axios`: AxiosInstance): *[DefaultApi](defaultapi.md)*

*Inherited from [BaseAPI](baseapi.md).[constructor](baseapi.md#constructor)*

*Defined in [packages/vulnerabilities/git-api/base.ts:49](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/base.ts#L49)*

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

*Defined in [packages/vulnerabilities/git-api/base.ts:51](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/base.ts#L51)*

___

### `Protected` basePath

• **basePath**: *string*

*Inherited from [BaseAPI](baseapi.md).[basePath](baseapi.md#protected-basepath)*

*Defined in [packages/vulnerabilities/git-api/base.ts:51](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/base.ts#L51)*

___

### `Protected` configuration

• **configuration**: *[Configuration](configuration.md) | undefined*

*Inherited from [BaseAPI](baseapi.md).[configuration](baseapi.md#protected-configuration)*

*Defined in [packages/vulnerabilities/git-api/base.ts:49](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/base.ts#L49)*

## Methods

###  deleteSystem

▸ **deleteSystem**(`inventoryId`: string, `options?`: any): *Promise‹AxiosResponse‹void››*

*Defined in [packages/vulnerabilities/git-api/api.ts:4746](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L4746)*

Deletes system from database.

**`summary`** Delete system.

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`inventoryId` | string | Inventory ID. |
`options?` | any | - |

**Returns:** *Promise‹AxiosResponse‹void››*

___

###  getAffectedSystemsByCve

▸ **getAffectedSystemsByCve**(`cveId`: string, `filter?`: string, `limit?`: number, `offset?`: number, `page?`: number, `pageSize?`: number, `sort?`: string, `statusId?`: string, `dataFormat?`: string, `uuid?`: string, `ruleKey?`: Array‹string›, `rulePresence?`: Array‹boolean›, `tags?`: Array‹string›, `sapSids?`: Array‹string›, `sapSystem?`: boolean, `showAdvisories?`: boolean, `advisory?`: string, `securityRule?`: string, `options?`: any): *Promise‹AxiosResponse‹[AffectedSystemsOut](../interfaces/affectedsystemsout.md)››*

*Defined in [packages/vulnerabilities/git-api/api.ts:4775](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L4775)*

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
`tags?` | Array‹string› | - |
`sapSids?` | Array‹string› | - |
`sapSystem?` | boolean | - |
`showAdvisories?` | boolean | - |
`advisory?` | string | - |
`securityRule?` | string | - |
`options?` | any | - |

**Returns:** *Promise‹AxiosResponse‹[AffectedSystemsOut](../interfaces/affectedsystemsout.md)››*

___

###  getAffectedSystemsIdsByCve

▸ **getAffectedSystemsIdsByCve**(`cveId`: string, `filter?`: string, `limit?`: number, `offset?`: number, `page?`: number, `pageSize?`: number, `sort?`: string, `statusId?`: string, `dataFormat?`: string, `uuid?`: string, `ruleKey?`: Array‹string›, `rulePresence?`: Array‹boolean›, `tags?`: Array‹string›, `sapSids?`: Array‹string›, `sapSystem?`: boolean, `showAdvisories?`: boolean, `advisory?`: string, `securityRule?`: string, `options?`: any): *Promise‹AxiosResponse‹[AffectedSystemsIdsOut](../interfaces/affectedsystemsidsout.md)››*

*Defined in [packages/vulnerabilities/git-api/api.ts:4804](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L4804)*

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
`tags?` | Array‹string› | - |
`sapSids?` | Array‹string› | - |
`sapSystem?` | boolean | - |
`showAdvisories?` | boolean | - |
`advisory?` | string | - |
`securityRule?` | string | - |
`options?` | any | - |

**Returns:** *Promise‹AxiosResponse‹[AffectedSystemsIdsOut](../interfaces/affectedsystemsidsout.md)››*

___

###  getApiStatus

▸ **getApiStatus**(`options?`: any): *Promise‹AxiosResponse‹void››*

*Defined in [packages/vulnerabilities/git-api/api.ts:4815](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L4815)*

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

*Defined in [packages/vulnerabilities/git-api/api.ts:4826](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L4826)*

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

*Defined in [packages/vulnerabilities/git-api/api.ts:4839](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L4839)*

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

▸ **getCveIdsBySystem**(`inventoryId`: string, `filter?`: string, `limit?`: number, `offset?`: number, `page?`: number, `pageSize?`: number, `sort?`: string, `cvssFrom?`: number, `cvssTo?`: number, `publicFrom?`: string, `publicTo?`: string, `impact?`: string, `statusId?`: string, `dataFormat?`: string, `businessRiskId?`: string, `securityRule?`: boolean, `rulePresence?`: Array‹boolean›, `advisory?`: string, `ruleKey?`: Array‹string›, `options?`: any): *Promise‹AxiosResponse‹[SystemCvesIdsOut](../interfaces/systemcvesidsout.md)››*

*Defined in [packages/vulnerabilities/git-api/api.ts:4869](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L4869)*

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
`securityRule?` | boolean | - |
`rulePresence?` | Array‹boolean› | - |
`advisory?` | string | - |
`ruleKey?` | Array‹string› | - |
`options?` | any | - |

**Returns:** *Promise‹AxiosResponse‹[SystemCvesIdsOut](../interfaces/systemcvesidsout.md)››*

___

###  getCveIdsList

▸ **getCveIdsList**(`filter?`: string, `limit?`: number, `offset?`: number, `page?`: number, `pageSize?`: number, `sort?`: string, `cvssFrom?`: number, `cvssTo?`: number, `publicFrom?`: string, `publicTo?`: string, `impact?`: string, `dataFormat?`: string, `businessRiskId?`: string, `statusId?`: string, `securityRule?`: boolean, `rulePresence?`: Array‹boolean›, `tags?`: Array‹string›, `sapSids?`: Array‹string›, `sapSystem?`: boolean, `showAll?`: boolean, `affecting?`: Array‹boolean›, `options?`: any): *Promise‹AxiosResponse‹[VulnerabilitiesIdsOut](../interfaces/vulnerabilitiesidsout.md)››*

*Defined in [packages/vulnerabilities/git-api/api.ts:4901](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L4901)*

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
`securityRule?` | boolean |
`rulePresence?` | Array‹boolean› |
`tags?` | Array‹string› |
`sapSids?` | Array‹string› |
`sapSystem?` | boolean |
`showAll?` | boolean |
`affecting?` | Array‹boolean› |
`options?` | any |

**Returns:** *Promise‹AxiosResponse‹[VulnerabilitiesIdsOut](../interfaces/vulnerabilitiesidsout.md)››*

___

###  getCveList

▸ **getCveList**(`filter?`: string, `limit?`: number, `offset?`: number, `page?`: number, `pageSize?`: number, `sort?`: string, `cvssFrom?`: number, `cvssTo?`: number, `publicFrom?`: string, `publicTo?`: string, `impact?`: string, `dataFormat?`: string, `businessRiskId?`: string, `statusId?`: string, `securityRule?`: boolean, `rulePresence?`: Array‹boolean›, `tags?`: Array‹string›, `sapSids?`: Array‹string›, `sapSystem?`: boolean, `showAll?`: boolean, `affecting?`: Array‹boolean›, `options?`: any): *Promise‹AxiosResponse‹[VulnerabilitiesOut](../interfaces/vulnerabilitiesout.md)››*

*Defined in [packages/vulnerabilities/git-api/api.ts:4933](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L4933)*

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
`securityRule?` | boolean |
`rulePresence?` | Array‹boolean› |
`tags?` | Array‹string› |
`sapSids?` | Array‹string› |
`sapSystem?` | boolean |
`showAll?` | boolean |
`affecting?` | Array‹boolean› |
`options?` | any |

**Returns:** *Promise‹AxiosResponse‹[VulnerabilitiesOut](../interfaces/vulnerabilitiesout.md)››*

___

###  getCveListBySystem

▸ **getCveListBySystem**(`inventoryId`: string, `filter?`: string, `limit?`: number, `offset?`: number, `page?`: number, `pageSize?`: number, `sort?`: string, `cvssFrom?`: number, `cvssTo?`: number, `publicFrom?`: string, `publicTo?`: string, `impact?`: string, `statusId?`: string, `dataFormat?`: string, `businessRiskId?`: string, `securityRule?`: boolean, `rulePresence?`: Array‹boolean›, `showAdvisories?`: boolean, `advisory?`: string, `ruleKey?`: Array‹string›, `options?`: any): *Promise‹AxiosResponse‹[SystemCvesOut](../interfaces/systemcvesout.md)››*

*Defined in [packages/vulnerabilities/git-api/api.ts:4964](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L4964)*

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
`securityRule?` | boolean | - |
`rulePresence?` | Array‹boolean› | - |
`showAdvisories?` | boolean | - |
`advisory?` | string | - |
`ruleKey?` | Array‹string› | - |
`options?` | any | - |

**Returns:** *Promise‹AxiosResponse‹[SystemCvesOut](../interfaces/systemcvesout.md)››*

___

###  getDashboard

▸ **getDashboard**(`tags?`: Array‹string›, `sapSids?`: Array‹string›, `sapSystem?`: boolean, `options?`: any): *Promise‹AxiosResponse‹[Dashboard](../interfaces/dashboard.md)››*

*Defined in [packages/vulnerabilities/git-api/api.ts:4978](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L4978)*

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

*Defined in [packages/vulnerabilities/git-api/api.ts:4989](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L4989)*

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

###  getPlaybookTemplate

▸ **getPlaybookTemplate**(`ruleId`: string, `options?`: any): *Promise‹AxiosResponse‹[PlaybookTemplate](../interfaces/playbooktemplate.md)››*

*Defined in [packages/vulnerabilities/git-api/api.ts:5001](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L5001)*

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

*Defined in [packages/vulnerabilities/git-api/api.ts:5012](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L5012)*

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

*Defined in [packages/vulnerabilities/git-api/api.ts:5024](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L5024)*

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

▸ **getSystemsIds**(`filter?`: string, `limit?`: number, `offset?`: number, `page?`: number, `pageSize?`: number, `sort?`: string, `dataFormat?`: string, `stale?`: boolean, `uuid?`: string, `tags?`: Array‹string›, `sapSids?`: Array‹string›, `sapSystem?`: boolean, `optOut?`: boolean, `excluded?`: Array‹boolean›, `options?`: any): *Promise‹AxiosResponse‹[SystemIdsOut](../interfaces/systemidsout.md)››*

*Defined in [packages/vulnerabilities/git-api/api.ts:5049](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L5049)*

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
`optOut?` | boolean |
`excluded?` | Array‹boolean› |
`options?` | any |

**Returns:** *Promise‹AxiosResponse‹[SystemIdsOut](../interfaces/systemidsout.md)››*

___

###  getSystemsList

▸ **getSystemsList**(`filter?`: string, `limit?`: number, `offset?`: number, `page?`: number, `pageSize?`: number, `sort?`: string, `dataFormat?`: string, `stale?`: boolean, `uuid?`: string, `tags?`: Array‹string›, `sapSids?`: Array‹string›, `sapSystem?`: boolean, `optOut?`: boolean, `excluded?`: Array‹boolean›, `options?`: any): *Promise‹AxiosResponse‹[SystemListOut](../interfaces/systemlistout.md)››*

*Defined in [packages/vulnerabilities/git-api/api.ts:5074](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L5074)*

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
`optOut?` | boolean |
`excluded?` | Array‹boolean› |
`options?` | any |

**Returns:** *Promise‹AxiosResponse‹[SystemListOut](../interfaces/systemlistout.md)››*

___

###  getVersion

▸ **getVersion**(`options?`: any): *Promise‹AxiosResponse‹[VersionOut](../interfaces/versionout.md)››*

*Defined in [packages/vulnerabilities/git-api/api.ts:5085](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L5085)*

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

*Defined in [packages/vulnerabilities/git-api/api.ts:5097](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L5097)*

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

*Defined in [packages/vulnerabilities/git-api/api.ts:5109](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L5109)*

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

*Defined in [packages/vulnerabilities/git-api/api.ts:5121](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L5121)*

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

###  setSystemOptOut

▸ **setSystemOptOut**(`inventoryId`: string, `value`: boolean, `options?`: any): *Promise‹AxiosResponse‹void››*

*Defined in [packages/vulnerabilities/git-api/api.ts:5134](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L5134)*

Opts in/out a systems. Opted out system is not shown and manageable by the vulnerability application.

**`summary`** Opt in/out a system to/from vulnerability application.

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`inventoryId` | string | Inventory ID. |
`value` | boolean | opt_out setting of the host. |
`options?` | any | - |

**Returns:** *Promise‹AxiosResponse‹void››*

___

###  setSystemsOptOut

▸ **setSystemsOptOut**(`optOutIn`: [OptOutIn](../interfaces/optoutin.md), `options?`: any): *Promise‹AxiosResponse‹[BulkChangeOut](../interfaces/bulkchangeout.md)››*

*Defined in [packages/vulnerabilities/git-api/api.ts:5146](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L5146)*

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
