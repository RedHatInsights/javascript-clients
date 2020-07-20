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
* [getBusinessRiskList](defaultapi.md#getbusinessrisklist)
* [getCveDetails](defaultapi.md#getcvedetails)
* [getCveIdsBySystem](defaultapi.md#getcveidsbysystem)
* [getCveIdsList](defaultapi.md#getcveidslist)
* [getCveList](defaultapi.md#getcvelist)
* [getCveListBySystem](defaultapi.md#getcvelistbysystem)
* [getExecutiveReport](defaultapi.md#getexecutivereport)
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

*Defined in [packages/vulnerabilities/base.ts:49](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/base.ts#L49)*

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

*Defined in [packages/vulnerabilities/base.ts:51](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/base.ts#L51)*

___

### `Protected` basePath

• **basePath**: *string*

*Inherited from [BaseAPI](baseapi.md).[basePath](baseapi.md#protected-basepath)*

*Defined in [packages/vulnerabilities/base.ts:51](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/base.ts#L51)*

___

### `Protected` configuration

• **configuration**: *[Configuration](configuration.md) | undefined*

*Inherited from [BaseAPI](baseapi.md).[configuration](baseapi.md#protected-configuration)*

*Defined in [packages/vulnerabilities/base.ts:49](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/base.ts#L49)*

## Methods

###  deleteSystem

▸ **deleteSystem**(`inventoryId`: string, `options?`: any): *AxiosPromise‹void›*

*Defined in [packages/vulnerabilities/api.ts:3569](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L3569)*

Deletes system from database.

**`summary`** Delete system.

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`inventoryId` | string | Inventory ID. |
`options?` | any | - |

**Returns:** *AxiosPromise‹void›*

___

###  getAffectedSystemsByCve

▸ **getAffectedSystemsByCve**(`cveId`: string, `filter?`: string, `limit?`: number, `offset?`: number, `page?`: number, `pageSize?`: number, `sort?`: string, `statusId?`: string, `dataFormat?`: string, `uuid?`: string, `securityRule?`: string, `options?`: any): *AxiosPromise‹[AffectedSystemsOut](../interfaces/affectedsystemsout.md)›*

*Defined in [packages/vulnerabilities/api.ts:3591](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L3591)*

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
`securityRule?` | string | - |
`options?` | any | - |

**Returns:** *AxiosPromise‹[AffectedSystemsOut](../interfaces/affectedsystemsout.md)›*

___

###  getAffectedSystemsIdsByCve

▸ **getAffectedSystemsIdsByCve**(`cveId`: string, `filter?`: string, `limit?`: number, `offset?`: number, `page?`: number, `pageSize?`: number, `sort?`: string, `statusId?`: string, `dataFormat?`: string, `securityRule?`: string, `options?`: any): *AxiosPromise‹[AffectedSystemsIdsOut](../interfaces/affectedsystemsidsout.md)›*

*Defined in [packages/vulnerabilities/api.ts:3612](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L3612)*

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
`securityRule?` | string | - |
`options?` | any | - |

**Returns:** *AxiosPromise‹[AffectedSystemsIdsOut](../interfaces/affectedsystemsidsout.md)›*

___

###  getBusinessRiskList

▸ **getBusinessRiskList**(`options?`: any): *AxiosPromise‹[BusinessRiskListOut](../interfaces/businessrisklistout.md)›*

*Defined in [packages/vulnerabilities/api.ts:3623](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L3623)*

Returns available business risk and business_risk_id pairs where business_risk_id is internal ID of the business risk.

**`summary`** Available business risk/business_risk_id pairs.

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type |
------ | ------ |
`options?` | any |

**Returns:** *AxiosPromise‹[BusinessRiskListOut](../interfaces/businessrisklistout.md)›*

___

###  getCveDetails

▸ **getCveDetails**(`cveId`: string, `options?`: any): *AxiosPromise‹[CveDetailOut](../interfaces/cvedetailout.md)›*

*Defined in [packages/vulnerabilities/api.ts:3635](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L3635)*

Show all information about given CVE.

**`summary`** Details of a CVE.

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`cveId` | string | CVE id. |
`options?` | any | - |

**Returns:** *AxiosPromise‹[CveDetailOut](../interfaces/cvedetailout.md)›*

___

###  getCveIdsBySystem

▸ **getCveIdsBySystem**(`inventoryId`: string, `filter?`: string, `limit?`: number, `offset?`: number, `page?`: number, `pageSize?`: number, `sort?`: string, `cvssFrom?`: number, `cvssTo?`: number, `publicFrom?`: string, `publicTo?`: string, `impact?`: string, `statusId?`: string, `dataFormat?`: string, `businessRiskId?`: string, `securityRule?`: boolean, `options?`: any): *AxiosPromise‹[SystemCvesIdsOut](../interfaces/systemcvesidsout.md)›*

*Defined in [packages/vulnerabilities/api.ts:3662](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L3662)*

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
`options?` | any | - |

**Returns:** *AxiosPromise‹[SystemCvesIdsOut](../interfaces/systemcvesidsout.md)›*

___

###  getCveIdsList

▸ **getCveIdsList**(`filter?`: string, `limit?`: number, `offset?`: number, `page?`: number, `pageSize?`: number, `sort?`: string, `cvssFrom?`: number, `cvssTo?`: number, `publicFrom?`: string, `publicTo?`: string, `impact?`: string, `dataFormat?`: string, `businessRiskId?`: string, `statusId?`: string, `securityRule?`: boolean, `showAll?`: boolean, `options?`: any): *AxiosPromise‹[VulnerabilitiesIdsOut](../interfaces/vulnerabilitiesidsout.md)›*

*Defined in [packages/vulnerabilities/api.ts:3689](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L3689)*

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
`showAll?` | boolean |
`options?` | any |

**Returns:** *AxiosPromise‹[VulnerabilitiesIdsOut](../interfaces/vulnerabilitiesidsout.md)›*

___

###  getCveList

▸ **getCveList**(`filter?`: string, `limit?`: number, `offset?`: number, `page?`: number, `pageSize?`: number, `sort?`: string, `cvssFrom?`: number, `cvssTo?`: number, `publicFrom?`: string, `publicTo?`: string, `impact?`: string, `dataFormat?`: string, `businessRiskId?`: string, `statusId?`: string, `securityRule?`: boolean, `showAll?`: boolean, `options?`: any): *AxiosPromise‹[VulnerabilitiesOut](../interfaces/vulnerabilitiesout.md)›*

*Defined in [packages/vulnerabilities/api.ts:3716](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L3716)*

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
`showAll?` | boolean |
`options?` | any |

**Returns:** *AxiosPromise‹[VulnerabilitiesOut](../interfaces/vulnerabilitiesout.md)›*

___

###  getCveListBySystem

▸ **getCveListBySystem**(`inventoryId`: string, `filter?`: string, `limit?`: number, `offset?`: number, `page?`: number, `pageSize?`: number, `sort?`: string, `cvssFrom?`: number, `cvssTo?`: number, `publicFrom?`: string, `publicTo?`: string, `impact?`: string, `statusId?`: string, `dataFormat?`: string, `businessRiskId?`: string, `securityRule?`: boolean, `options?`: any): *AxiosPromise‹[SystemCvesOut](../interfaces/systemcvesout.md)›*

*Defined in [packages/vulnerabilities/api.ts:3743](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L3743)*

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
`options?` | any | - |

**Returns:** *AxiosPromise‹[SystemCvesOut](../interfaces/systemcvesout.md)›*

___

###  getExecutiveReport

▸ **getExecutiveReport**(`options?`: any): *AxiosPromise‹[ExecutiveReport](../interfaces/executivereport.md)›*

*Defined in [packages/vulnerabilities/api.ts:3754](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L3754)*

Returns top level overview of vulnerabilities affecting given account.

**`summary`** Top level overview of vulnerabilities.

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type |
------ | ------ |
`options?` | any |

**Returns:** *AxiosPromise‹[ExecutiveReport](../interfaces/executivereport.md)›*

___

###  getStatusList

▸ **getStatusList**(`options?`: any): *AxiosPromise‹[StatusListOut](../interfaces/statuslistout.md)›*

*Defined in [packages/vulnerabilities/api.ts:3765](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L3765)*

Returns available status and status_id pairs where status_id is internal ID of the status.

**`summary`** Available status/status_id pairs.

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type |
------ | ------ |
`options?` | any |

**Returns:** *AxiosPromise‹[StatusListOut](../interfaces/statuslistout.md)›*

___

###  getSystemDetails

▸ **getSystemDetails**(`inventoryId`: string, `options?`: any): *AxiosPromise‹[SystemDetailsOut](../interfaces/systemdetailsout.md)›*

*Defined in [packages/vulnerabilities/api.ts:3777](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L3777)*

Provides details of a system, e.g. it\'s opt out status.

**`summary`** System details.

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`inventoryId` | string | Inventory ID. |
`options?` | any | - |

**Returns:** *AxiosPromise‹[SystemDetailsOut](../interfaces/systemdetailsout.md)›*

___

###  getSystemsIds

▸ **getSystemsIds**(`filter?`: string, `limit?`: number, `offset?`: number, `page?`: number, `pageSize?`: number, `sort?`: string, `dataFormat?`: string, `stale?`: boolean, `uuid?`: string, `optOut?`: boolean, `options?`: any): *AxiosPromise‹[SystemIdsOut](../interfaces/systemidsout.md)›*

*Defined in [packages/vulnerabilities/api.ts:3798](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L3798)*

List systems IDs visible to logged in account.

**`summary`** List systems IDs.

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
`optOut?` | boolean |
`options?` | any |

**Returns:** *AxiosPromise‹[SystemIdsOut](../interfaces/systemidsout.md)›*

___

###  getSystemsList

▸ **getSystemsList**(`filter?`: string, `limit?`: number, `offset?`: number, `page?`: number, `pageSize?`: number, `sort?`: string, `dataFormat?`: string, `stale?`: boolean, `uuid?`: string, `optOut?`: boolean, `options?`: any): *AxiosPromise‹[SystemListOut](../interfaces/systemlistout.md)›*

*Defined in [packages/vulnerabilities/api.ts:3819](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L3819)*

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
`optOut?` | boolean |
`options?` | any |

**Returns:** *AxiosPromise‹[SystemListOut](../interfaces/systemlistout.md)›*

___

###  getVersion

▸ **getVersion**(`options?`: any): *AxiosPromise‹[VersionOut](../interfaces/versionout.md)›*

*Defined in [packages/vulnerabilities/api.ts:3830](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L3830)*

Get application version.

**`summary`** Application version

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type |
------ | ------ |
`options?` | any |

**Returns:** *AxiosPromise‹[VersionOut](../interfaces/versionout.md)›*

___

###  setCveBusinessRisk

▸ **setCveBusinessRisk**(`cveRiskIn`: [CveRiskIn](../interfaces/cveriskin.md), `options?`: any): *AxiosPromise‹[BulkChangeOut](../interfaces/bulkchangeout.md)›*

*Defined in [packages/vulnerabilities/api.ts:3842](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L3842)*

Sets business risk for a CVE.

**`summary`** Set business risk for a CVE.

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`cveRiskIn` | [CveRiskIn](../interfaces/cveriskin.md) | Values to be set. At least one of the \&quot;business_risk_id\&quot; or \&quot;business_risk_text\&quot; parameters is required. |
`options?` | any | - |

**Returns:** *AxiosPromise‹[BulkChangeOut](../interfaces/bulkchangeout.md)›*

___

###  setCveStatus

▸ **setCveStatus**(`cveStatusIn`: [CveStatusIn](../interfaces/cvestatusin.md), `options?`: any): *AxiosPromise‹[BulkChangeOut](../interfaces/bulkchangeout.md)›*

*Defined in [packages/vulnerabilities/api.ts:3854](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L3854)*

Sets status for a CVE.

**`summary`** Set status for a CVE.

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`cveStatusIn` | [CveStatusIn](../interfaces/cvestatusin.md) | Values to be set. At least one of the \&quot;status_id\&quot; or \&quot;status_text\&quot; parameters is required. |
`options?` | any | - |

**Returns:** *AxiosPromise‹[BulkChangeOut](../interfaces/bulkchangeout.md)›*

___

###  setStatus

▸ **setStatus**(`statusIn`: [StatusIn](../interfaces/statusin.md), `options?`: any): *AxiosPromise‹[StatusOut](../interfaces/statusout.md)›*

*Defined in [packages/vulnerabilities/api.ts:3866](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L3866)*

Sets status for given hosts and CVEs.

**`summary`** Set status for system vulnerabilities.

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`statusIn` | [StatusIn](../interfaces/statusin.md) | Values to be set. |
`options?` | any | - |

**Returns:** *AxiosPromise‹[StatusOut](../interfaces/statusout.md)›*

___

###  setSystemOptOut

▸ **setSystemOptOut**(`inventoryId`: string, `value`: boolean, `options?`: any): *AxiosPromise‹void›*

*Defined in [packages/vulnerabilities/api.ts:3879](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L3879)*

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

**Returns:** *AxiosPromise‹void›*

___

###  setSystemsOptOut

▸ **setSystemsOptOut**(`optOutIn`: [OptOutIn](../interfaces/optoutin.md), `options?`: any): *AxiosPromise‹[BulkChangeOut](../interfaces/bulkchangeout.md)›*

*Defined in [packages/vulnerabilities/api.ts:3891](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L3891)*

Opts in/out a systems. Opted out system is not shown and manageable by the vulnerability application.

**`summary`** Opt in/out a system to/from vulnerability application.

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`optOutIn` | [OptOutIn](../interfaces/optoutin.md) | Values to be set. |
`options?` | any | - |

**Returns:** *AxiosPromise‹[BulkChangeOut](../interfaces/bulkchangeout.md)›*
