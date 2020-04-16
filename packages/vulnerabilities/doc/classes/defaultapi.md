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
* [getBusinessRiskList](defaultapi.md#getbusinessrisklist)
* [getCveDetails](defaultapi.md#getcvedetails)
* [getCveList](defaultapi.md#getcvelist)
* [getCveListBySystem](defaultapi.md#getcvelistbysystem)
* [getExecutiveReport](defaultapi.md#getexecutivereport)
* [getStatusList](defaultapi.md#getstatuslist)
* [getSystemDetails](defaultapi.md#getsystemdetails)
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

Defined in packages/vulnerabilities/base.ts:49

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

Defined in packages/vulnerabilities/base.ts:51

___

### `Protected` basePath

• **basePath**: *string*

*Inherited from [BaseAPI](baseapi.md).[basePath](baseapi.md#protected-basepath)*

Defined in packages/vulnerabilities/base.ts:51

___

### `Protected` configuration

• **configuration**: *[Configuration](configuration.md) | undefined*

*Inherited from [BaseAPI](baseapi.md).[configuration](baseapi.md#protected-configuration)*

Defined in packages/vulnerabilities/base.ts:49

## Methods

###  deleteSystem

▸ **deleteSystem**(`inventoryId`: string, `options?`: any): *AxiosPromise‹void›*

*Defined in [packages/vulnerabilities/api.ts:2802](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L2802)*

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

▸ **getAffectedSystemsByCve**(`cveId`: string, `filter?`: string, `limit?`: number, `offset?`: number, `page?`: number, `pageSize?`: number, `sort?`: string, `statusId?`: string, `dataFormat?`: string, `securityRule?`: string, `options?`: any): *AxiosPromise‹[AffectedSystemsOut](../interfaces/affectedsystemsout.md)›*

*Defined in [packages/vulnerabilities/api.ts:2823](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L2823)*

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
`securityRule?` | string | - |
`options?` | any | - |

**Returns:** *AxiosPromise‹[AffectedSystemsOut](../interfaces/affectedsystemsout.md)›*

___

###  getBusinessRiskList

▸ **getBusinessRiskList**(`options?`: any): *AxiosPromise‹[BusinessRiskListOut](../interfaces/businessrisklistout.md)›*

*Defined in [packages/vulnerabilities/api.ts:2834](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L2834)*

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

*Defined in [packages/vulnerabilities/api.ts:2846](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L2846)*

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

###  getCveList

▸ **getCveList**(`filter?`: string, `limit?`: number, `offset?`: number, `page?`: number, `pageSize?`: number, `sort?`: string, `cvssFrom?`: number, `cvssTo?`: number, `publicFrom?`: string, `publicTo?`: string, `impact?`: string, `dataFormat?`: string, `businessRiskId?`: string, `statusId?`: string, `securityRule?`: boolean, `showAll?`: boolean, `options?`: any): *AxiosPromise‹[VulnerabilitiesOut](../interfaces/vulnerabilitiesout.md)›*

*Defined in [packages/vulnerabilities/api.ts:2873](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L2873)*

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

▸ **getCveListBySystem**(`inventoryId`: string, `filter?`: string, `limit?`: number, `offset?`: number, `page?`: number, `pageSize?`: number, `sort?`: string, `cvssFrom?`: number, `cvssTo?`: number, `publicFrom?`: string, `publicTo?`: string, `impact?`: string, `statusId?`: string, `dataFormat?`: string, `businessRiskId?`: string, `stale?`: boolean, `securityRule?`: boolean, `options?`: any): *AxiosPromise‹[SystemCvesOut](../interfaces/systemcvesout.md)›*

*Defined in [packages/vulnerabilities/api.ts:2901](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L2901)*

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
`stale?` | boolean | - |
`securityRule?` | boolean | - |
`options?` | any | - |

**Returns:** *AxiosPromise‹[SystemCvesOut](../interfaces/systemcvesout.md)›*

___

###  getExecutiveReport

▸ **getExecutiveReport**(`options?`: any): *AxiosPromise‹[ExecutiveReport](../interfaces/executivereport.md)›*

*Defined in [packages/vulnerabilities/api.ts:2912](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L2912)*

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

*Defined in [packages/vulnerabilities/api.ts:2923](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L2923)*

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

▸ **getSystemDetails**(`inventoryId`: string, `stale?`: boolean, `options?`: any): *AxiosPromise‹[SystemDetailsOut](../interfaces/systemdetailsout.md)›*

*Defined in [packages/vulnerabilities/api.ts:2936](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L2936)*

Provides details of a system, e.g. it\'s opt out status.

**`summary`** System details.

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`inventoryId` | string | Inventory ID. |
`stale?` | boolean | - |
`options?` | any | - |

**Returns:** *AxiosPromise‹[SystemDetailsOut](../interfaces/systemdetailsout.md)›*

___

###  getSystemsList

▸ **getSystemsList**(`filter?`: string, `limit?`: number, `offset?`: number, `page?`: number, `pageSize?`: number, `sort?`: string, `dataFormat?`: string, `stale?`: boolean, `optOut?`: boolean, `options?`: any): *AxiosPromise‹[SystemListOut](../interfaces/systemlistout.md)›*

*Defined in [packages/vulnerabilities/api.ts:2956](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L2956)*

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
`optOut?` | boolean |
`options?` | any |

**Returns:** *AxiosPromise‹[SystemListOut](../interfaces/systemlistout.md)›*

___

###  getVersion

▸ **getVersion**(`options?`: any): *AxiosPromise‹[VersionOut](../interfaces/versionout.md)›*

*Defined in [packages/vulnerabilities/api.ts:2967](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L2967)*

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

*Defined in [packages/vulnerabilities/api.ts:2979](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L2979)*

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

*Defined in [packages/vulnerabilities/api.ts:2991](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L2991)*

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

*Defined in [packages/vulnerabilities/api.ts:3003](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L3003)*

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

*Defined in [packages/vulnerabilities/api.ts:3016](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L3016)*

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

*Defined in [packages/vulnerabilities/api.ts:3028](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L3028)*

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
