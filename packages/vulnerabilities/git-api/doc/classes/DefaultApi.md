[@redhat-cloud-services/vulnerabilities-client](../README.md) / [Exports](../modules.md) / DefaultApi

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

- [getAffectedSystemsByCve](DefaultApi.md#getaffectedsystemsbycve)
- [getAffectedSystemsIdsByCve](DefaultApi.md#getaffectedsystemsidsbycve)
- [getAnnouncement](DefaultApi.md#getannouncement)
- [getApiStatus](DefaultApi.md#getapistatus)
- [getBusinessRiskList](DefaultApi.md#getbusinessrisklist)
- [getCveDetails](DefaultApi.md#getcvedetails)
- [getCveIdsBySystem](DefaultApi.md#getcveidsbysystem)
- [getCveIdsList](DefaultApi.md#getcveidslist)
- [getCveList](DefaultApi.md#getcvelist)
- [getCveListBySystem](DefaultApi.md#getcvelistbysystem)
- [getCveList\_1](DefaultApi.md#getcvelist_1)
- [getDashbar](DefaultApi.md#getdashbar)
- [getDashboard](DefaultApi.md#getdashboard)
- [getExecutiveReport](DefaultApi.md#getexecutivereport)
- [getPlaybookTemplate](DefaultApi.md#getplaybooktemplate)
- [getStatusList](DefaultApi.md#getstatuslist)
- [getSystemDetails](DefaultApi.md#getsystemdetails)
- [getSystemsIds](DefaultApi.md#getsystemsids)
- [getSystemsList](DefaultApi.md#getsystemslist)
- [getVersion](DefaultApi.md#getversion)
- [setCveBusinessRisk](DefaultApi.md#setcvebusinessrisk)
- [setCveStatus](DefaultApi.md#setcvestatus)
- [setCvesWithoutErrata](DefaultApi.md#setcveswithouterrata)
- [setStatus](DefaultApi.md#setstatus)
- [setSystemsOptOut](DefaultApi.md#setsystemsoptout)

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

[base.ts:51](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/base.ts#L51)

## Properties

### axios

• `Protected` **axios**: `AxiosInstance` = `globalAxios`

#### Inherited from

BaseAPI.axios

#### Defined in

[base.ts:51](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/base.ts#L51)

___

### basePath

• `Protected` **basePath**: `string` = `BASE_PATH`

#### Inherited from

BaseAPI.basePath

#### Defined in

[base.ts:51](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/base.ts#L51)

___

### configuration

• `Protected` **configuration**: [`Configuration`](Configuration.md)

#### Inherited from

BaseAPI.configuration

#### Defined in

[base.ts:49](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/base.ts#L49)

## Methods

### getAffectedSystemsByCve

▸ **getAffectedSystemsByCve**(`cveId`, `filter?`, `limit?`, `offset?`, `page?`, `pageSize?`, `sort?`, `statusId?`, `dataFormat?`, `uuid?`, `ruleKey?`, `rulePresence?`, `rule?`, `tags?`, `sapSids?`, `sapSystem?`, `showAdvisories?`, `advisory?`, `rhelVersion?`, `firstReportedFrom?`, `firstReportedTo?`, `advisoryAvailable?`, `remediation?`, `report?`, `ansible?`, `mssql?`, `options?`): `Promise`<`AxiosResponse`<[`AffectedSystemsOut`](../interfaces/AffectedSystemsOut.md), `any`\>\>

Report of affected systems for a given CVE.

**`Summary`**

Affected systems for a given CVE.

**`Throws`**

**`Memberof`**

DefaultApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `cveId` | `string` | CVE id. |
| `filter?` | `string` | Full text filter for the display name of system. |
| `limit?` | `number` | Maximum number of records per page. Limit/Offset pagination wins over page/page_size pagination. |
| `offset?` | `number` | Offset of first record of paginated response. Limit/Offset pagination wins over page/page_size pagination. |
| `page?` | `number` | Page number of paginated response. Limit/Offset pagination wins over page/page_size pagination. |
| `pageSize?` | `number` | Page size of paginated response. Limit/Offset pagination wins over page/page_size pagination. |
| `sort?` | `string` | Sorting used for response. |
| `statusId?` | `string` | Filer based on CVE status ID. |
| `dataFormat?` | `string` | Format of the output data, either JSON (default) or CSV. |
| `uuid?` | `string` | Filter based on UUID of inventory. |
| `ruleKey?` | `string`[] | Filters security rules by its error key. |
| `rulePresence?` | `boolean`[] | Comma seprated string with bools. If true shows only CVEs with security rule associated, if false shows CVEs without rules. true, false shows all. |
| `rule?` | `string`[] | Filters CVEs or systems by security rule, has two functionalities. If value is false, shows results without security rules, every other value is taken as rule error key. |
| `tags?` | `string`[] | Filter based on hosts tags. Tags needs to be in query format, that means &lt;namespace&gt;/&lt;key&gt;&#x3D;&lt;value&gt; or &lt;namespace&gt;/&lt;key&gt; if value is null. Characters \&#39;/\&#39;, \&#39;&#x3D;\&#39; in tag values needs to be escaped by url encoding. |
| `sapSids?` | `string`[] | List of SAP IDs to filter with |
| `sapSystem?` | `boolean` | Boolean value which shows systems managed by SAP. |
| `showAdvisories?` | `boolean` | If true shows advisories list |
| `advisory?` | `string` | filter by advisory name, works only with show_advisories&#x3D;true |
| `rhelVersion?` | `string` | Filters results by RHEL OS version. Automatically flters out systems which are not RHEL or have uknown OS. |
| `firstReportedFrom?` | `string` | Filter for CVEs/Systems where the vulnerability appeared after given date. |
| `firstReportedTo?` | `string` | Filter for CVEs/Systems where the vulnerability appeared before given date. |
| `advisoryAvailable?` | `boolean`[] | String of booleans (array of booleans), where true shows CVE-system pairs with available advisory, false shows CVE-system pairs without available advisory. |
| `remediation?` | `string` | Filer based on available remediation type id. |
| `report?` | `boolean` | Needs to be used when endpoint data is used for report generation, checks RBAC permission for report and export feature. |
| `ansible?` | `boolean` | Boolean value which shows systems managed by Ansible Automation Platform. |
| `mssql?` | `boolean` | Boolean value which shows systems managed by MSSQL. |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`AffectedSystemsOut`](../interfaces/AffectedSystemsOut.md), `any`\>\>

#### Defined in

[api.ts:5893](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L5893)

___

### getAffectedSystemsIdsByCve

▸ **getAffectedSystemsIdsByCve**(`cveId`, `filter?`, `limit?`, `offset?`, `page?`, `pageSize?`, `sort?`, `statusId?`, `dataFormat?`, `uuid?`, `ruleKey?`, `rulePresence?`, `rule?`, `tags?`, `sapSids?`, `sapSystem?`, `showAdvisories?`, `advisory?`, `rhelVersion?`, `firstReportedFrom?`, `firstReportedTo?`, `advisoryAvailable?`, `remediation?`, `ansible?`, `mssql?`, `options?`): `Promise`<`AxiosResponse`<[`AffectedSystemsIdsOut`](../interfaces/AffectedSystemsIdsOut.md), `any`\>\>

Report of IDs of affected systems for a given CVE.

**`Summary`**

IDs of affected systems for a given CVE.

**`Throws`**

**`Memberof`**

DefaultApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `cveId` | `string` | CVE id. |
| `filter?` | `string` | Full text filter for the display name of system. |
| `limit?` | `number` | Maximum number of records per page. Limit/Offset pagination wins over page/page_size pagination. |
| `offset?` | `number` | Offset of first record of paginated response. Limit/Offset pagination wins over page/page_size pagination. |
| `page?` | `number` | Page number of paginated response. Limit/Offset pagination wins over page/page_size pagination. |
| `pageSize?` | `number` | Page size of paginated response. Limit/Offset pagination wins over page/page_size pagination. |
| `sort?` | `string` | Sorting used for response. |
| `statusId?` | `string` | Filer based on CVE status ID. |
| `dataFormat?` | `string` | Format of the output data, either JSON (default) or CSV. |
| `uuid?` | `string` | Filter based on UUID of inventory. |
| `ruleKey?` | `string`[] | Filters security rules by its error key. |
| `rulePresence?` | `boolean`[] | Comma seprated string with bools. If true shows only CVEs with security rule associated, if false shows CVEs without rules. true, false shows all. |
| `rule?` | `string`[] | Filters CVEs or systems by security rule, has two functionalities. If value is false, shows results without security rules, every other value is taken as rule error key. |
| `tags?` | `string`[] | Filter based on hosts tags. Tags needs to be in query format, that means &lt;namespace&gt;/&lt;key&gt;&#x3D;&lt;value&gt; or &lt;namespace&gt;/&lt;key&gt; if value is null. Characters \&#39;/\&#39;, \&#39;&#x3D;\&#39; in tag values needs to be escaped by url encoding. |
| `sapSids?` | `string`[] | List of SAP IDs to filter with |
| `sapSystem?` | `boolean` | Boolean value which shows systems managed by SAP. |
| `showAdvisories?` | `boolean` | If true shows advisories list |
| `advisory?` | `string` | filter by advisory name, works only with show_advisories&#x3D;true |
| `rhelVersion?` | `string` | Filters results by RHEL OS version. Automatically flters out systems which are not RHEL or have uknown OS. |
| `firstReportedFrom?` | `string` | Filter for CVEs/Systems where the vulnerability appeared after given date. |
| `firstReportedTo?` | `string` | Filter for CVEs/Systems where the vulnerability appeared before given date. |
| `advisoryAvailable?` | `boolean`[] | String of booleans (array of booleans), where true shows CVE-system pairs with available advisory, false shows CVE-system pairs without available advisory. |
| `remediation?` | `string` | Filer based on available remediation type id. |
| `ansible?` | `boolean` | Boolean value which shows systems managed by Ansible Automation Platform. |
| `mssql?` | `boolean` | Boolean value which shows systems managed by MSSQL. |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`AffectedSystemsIdsOut`](../interfaces/AffectedSystemsIdsOut.md), `any`\>\>

#### Defined in

[api.ts:5929](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L5929)

___

### getAnnouncement

▸ **getAnnouncement**(`options?`): `Promise`<`AxiosResponse`<[`AnnouncementOut`](../interfaces/AnnouncementOut.md), `any`\>\>

Get announcement shown above CVEs list.

**`Summary`**

Announcement.

**`Throws`**

**`Memberof`**

DefaultApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`AnnouncementOut`](../interfaces/AnnouncementOut.md), `any`\>\>

#### Defined in

[api.ts:5940](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L5940)

___

### getApiStatus

▸ **getApiStatus**(`options?`): `Promise`<`AxiosResponse`<`void`, `any`\>\>

Checks database availability and API response threshold time.

**`Summary`**

Health status of application

**`Throws`**

**`Memberof`**

DefaultApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<`void`, `any`\>\>

#### Defined in

[api.ts:5951](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L5951)

___

### getBusinessRiskList

▸ **getBusinessRiskList**(`options?`): `Promise`<`AxiosResponse`<[`BusinessRiskListOut`](../interfaces/BusinessRiskListOut.md), `any`\>\>

Returns available business risk and business_risk_id pairs where business_risk_id is internal ID of the business risk.

**`Summary`**

Available business risk/business_risk_id pairs.

**`Throws`**

**`Memberof`**

DefaultApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`BusinessRiskListOut`](../interfaces/BusinessRiskListOut.md), `any`\>\>

#### Defined in

[api.ts:5962](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L5962)

___

### getCveDetails

▸ **getCveDetails**(`cveId`, `options?`): `Promise`<`AxiosResponse`<[`CveDetailOut`](../interfaces/CveDetailOut.md), `any`\>\>

Show all information about given CVE.

**`Summary`**

Details of a CVE.

**`Throws`**

**`Memberof`**

DefaultApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `cveId` | `string` | CVE id. |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`CveDetailOut`](../interfaces/CveDetailOut.md), `any`\>\>

#### Defined in

[api.ts:5974](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L5974)

___

### getCveIdsBySystem

▸ **getCveIdsBySystem**(`inventoryId`, `filter?`, `limit?`, `offset?`, `page?`, `pageSize?`, `sort?`, `cvssFrom?`, `cvssTo?`, `publicFrom?`, `publicTo?`, `impact?`, `statusId?`, `dataFormat?`, `businessRiskId?`, `rulePresence?`, `showAdvisories?`, `advisory?`, `ruleKey?`, `knownExploit?`, `firstReportedFrom?`, `firstReportedTo?`, `advisoryAvailable?`, `remediation?`, `options?`): `Promise`<`AxiosResponse`<[`SystemCvesIdsOut`](../interfaces/SystemCvesIdsOut.md), `any`\>\>

Shows IDs of all CVEs the system is exposed to.

**`Summary`**

CVE IDs report for a system.

**`Throws`**

**`Memberof`**

DefaultApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inventoryId` | `string` | Inventory ID. |
| `filter?` | `string` | Full text filter for CVE and it\&#39;s description text. |
| `limit?` | `number` | Maximum number of records per page. Limit/Offset pagination wins over page/page_size pagination. |
| `offset?` | `number` | Offset of first record of paginated response. Limit/Offset pagination wins over page/page_size pagination. |
| `page?` | `number` | Page number of paginated response. Limit/Offset pagination wins over page/page_size pagination. |
| `pageSize?` | `number` | Page size of paginated response. Limit/Offset pagination wins over page/page_size pagination. |
| `sort?` | `string` | Sorting used for response. |
| `cvssFrom?` | `number` | Filter based on cvss score, starting from the value. Use -1 to include also CVEs with N/A cvss score. |
| `cvssTo?` | `number` | Filter based on cvss score, up to the value. |
| `publicFrom?` | `string` | Filter CVEs based on their published date, starting from the date. |
| `publicTo?` | `string` | Filter CVEs based on their published date, up to the date. |
| `impact?` | `string` | Filter based on impact IDs. |
| `statusId?` | `string` | Filer based on CVE status ID. |
| `dataFormat?` | `string` | Format of the output data, either JSON (default) or CSV. |
| `businessRiskId?` | `string` | Filter based on business risk IDs. |
| `rulePresence?` | `boolean`[] | Comma seprated string with bools. If true shows only CVEs with security rule associated, if false shows CVEs without rules. true, false shows all. |
| `showAdvisories?` | `boolean` | If true shows advisories list |
| `advisory?` | `string` | filter by advisory name, works only with show_advisories&#x3D;true |
| `ruleKey?` | `string`[] | Filters security rules by its error key. |
| `knownExploit?` | `boolean`[] | String of booleans (array of booleans), where true shows CVEs with known exploits, false shows CVEs without known exploits. |
| `firstReportedFrom?` | `string` | Filter for CVEs/Systems where the vulnerability appeared after given date. |
| `firstReportedTo?` | `string` | Filter for CVEs/Systems where the vulnerability appeared before given date. |
| `advisoryAvailable?` | `boolean`[] | String of booleans (array of booleans), where true shows CVE-system pairs with available advisory, false shows CVE-system pairs without available advisory. |
| `remediation?` | `string` | Filer based on available remediation type id. |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`SystemCvesIdsOut`](../interfaces/SystemCvesIdsOut.md), `any`\>\>

#### Defined in

[api.ts:6009](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L6009)

___

### getCveIdsList

▸ **getCveIdsList**(`filter?`, `limit?`, `offset?`, `page?`, `pageSize?`, `sort?`, `cvssFrom?`, `cvssTo?`, `publicFrom?`, `publicTo?`, `impact?`, `dataFormat?`, `businessRiskId?`, `statusId?`, `rulePresence?`, `tags?`, `sapSids?`, `sapSystem?`, `knownExploit?`, `affecting?`, `rhelVersion?`, `ansible?`, `mssql?`, `options?`): `Promise`<`AxiosResponse`<[`VulnerabilitiesIdsOut`](../interfaces/VulnerabilitiesIdsOut.md), `any`\>\>

Overview of vulnerabilities IDs across whole host inventory.

**`Summary`**

Vulnerabilities IDs overview.

**`Throws`**

**`Memberof`**

DefaultApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `filter?` | `string` | Full text filter for CVE and it\&#39;s description text. |
| `limit?` | `number` | Maximum number of records per page. Limit/Offset pagination wins over page/page_size pagination. |
| `offset?` | `number` | Offset of first record of paginated response. Limit/Offset pagination wins over page/page_size pagination. |
| `page?` | `number` | Page number of paginated response. Limit/Offset pagination wins over page/page_size pagination. |
| `pageSize?` | `number` | Page size of paginated response. Limit/Offset pagination wins over page/page_size pagination. |
| `sort?` | `string` | Sorting used for response. |
| `cvssFrom?` | `number` | Filter based on cvss score, starting from the value. Use -1 to include also CVEs with N/A cvss score. |
| `cvssTo?` | `number` | Filter based on cvss score, up to the value. |
| `publicFrom?` | `string` | Filter CVEs based on their published date, starting from the date. |
| `publicTo?` | `string` | Filter CVEs based on their published date, up to the date. |
| `impact?` | `string` | Filter based on impact IDs. |
| `dataFormat?` | `string` | Format of the output data, either JSON (default) or CSV. |
| `businessRiskId?` | `string` | Filter based on business risk IDs. |
| `statusId?` | `string` | Filer based on CVE status ID. |
| `rulePresence?` | `boolean`[] | Comma seprated string with bools. If true shows only CVEs with security rule associated, if false shows CVEs without rules. true, false shows all. |
| `tags?` | `string`[] | Filter based on hosts tags. Tags needs to be in query format, that means &lt;namespace&gt;/&lt;key&gt;&#x3D;&lt;value&gt; or &lt;namespace&gt;/&lt;key&gt; if value is null. Characters \&#39;/\&#39;, \&#39;&#x3D;\&#39; in tag values needs to be escaped by url encoding. |
| `sapSids?` | `string`[] | List of SAP IDs to filter with |
| `sapSystem?` | `boolean` | Boolean value which shows systems managed by SAP. |
| `knownExploit?` | `boolean`[] | String of booleans (array of booleans), where true shows CVEs with known exploits, false shows CVEs without known exploits. |
| `affecting?` | `boolean`[] | Comma seprated string with bools (array of bools). True value controls displaying CVEs with at least one system affected. False value toggles CVEs with no systems affected. Defaults to showing only CVEs with at least one system affected. |
| `rhelVersion?` | `string` | Filters results by RHEL OS version. Automatically flters out systems which are not RHEL or have uknown OS. |
| `ansible?` | `boolean` | Boolean value which shows systems managed by Ansible Automation Platform. |
| `mssql?` | `boolean` | Boolean value which shows systems managed by MSSQL. |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`VulnerabilitiesIdsOut`](../interfaces/VulnerabilitiesIdsOut.md), `any`\>\>

#### Defined in

[api.ts:6043](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L6043)

___

### getCveList

▸ **getCveList**(`filter?`, `limit?`, `offset?`, `page?`, `pageSize?`, `sort?`, `cvssFrom?`, `cvssTo?`, `publicFrom?`, `publicTo?`, `impact?`, `dataFormat?`, `businessRiskId?`, `statusId?`, `rulePresence?`, `tags?`, `sapSids?`, `sapSystem?`, `knownExploit?`, `affecting?`, `rhelVersion?`, `report?`, `advancedReport?`, `ansible?`, `mssql?`, `options?`): `Promise`<`AxiosResponse`<[`VulnerabilitiesOut`](../interfaces/VulnerabilitiesOut.md), `any`\>\>

Overview of vulnerabilities across whole host inventory.

**`Summary`**

Vulnerabilities overview.

**`Throws`**

**`Memberof`**

DefaultApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `filter?` | `string` | Full text filter for CVE and it\&#39;s description text. |
| `limit?` | `number` | Maximum number of records per page. Limit/Offset pagination wins over page/page_size pagination. |
| `offset?` | `number` | Offset of first record of paginated response. Limit/Offset pagination wins over page/page_size pagination. |
| `page?` | `number` | Page number of paginated response. Limit/Offset pagination wins over page/page_size pagination. |
| `pageSize?` | `number` | Page size of paginated response. Limit/Offset pagination wins over page/page_size pagination. |
| `sort?` | `string` | Sorting used for response. |
| `cvssFrom?` | `number` | Filter based on cvss score, starting from the value. Use -1 to include also CVEs with N/A cvss score. |
| `cvssTo?` | `number` | Filter based on cvss score, up to the value. |
| `publicFrom?` | `string` | Filter CVEs based on their published date, starting from the date. |
| `publicTo?` | `string` | Filter CVEs based on their published date, up to the date. |
| `impact?` | `string` | Filter based on impact IDs. |
| `dataFormat?` | `string` | Format of the output data, either JSON (default) or CSV. |
| `businessRiskId?` | `string` | Filter based on business risk IDs. |
| `statusId?` | `string` | Filer based on CVE status ID. |
| `rulePresence?` | `boolean`[] | Comma seprated string with bools. If true shows only CVEs with security rule associated, if false shows CVEs without rules. true, false shows all. |
| `tags?` | `string`[] | Filter based on hosts tags. Tags needs to be in query format, that means &lt;namespace&gt;/&lt;key&gt;&#x3D;&lt;value&gt; or &lt;namespace&gt;/&lt;key&gt; if value is null. Characters \&#39;/\&#39;, \&#39;&#x3D;\&#39; in tag values needs to be escaped by url encoding. |
| `sapSids?` | `string`[] | List of SAP IDs to filter with |
| `sapSystem?` | `boolean` | Boolean value which shows systems managed by SAP. |
| `knownExploit?` | `boolean`[] | String of booleans (array of booleans), where true shows CVEs with known exploits, false shows CVEs without known exploits. |
| `affecting?` | `boolean`[] | Comma seprated string with bools (array of bools). True value controls displaying CVEs with at least one system affected. False value toggles CVEs with no systems affected. Defaults to showing only CVEs with at least one system affected. |
| `rhelVersion?` | `string` | Filters results by RHEL OS version. Automatically flters out systems which are not RHEL or have uknown OS. |
| `report?` | `boolean` | Needs to be used when endpoint data is used for report generation, checks RBAC permission for report and export feature. |
| `advancedReport?` | `boolean` | Needs to be used when endpoint data is used for Report by CVEs feature, checks RBAC permission for advanced report. |
| `ansible?` | `boolean` | Boolean value which shows systems managed by Ansible Automation Platform. |
| `mssql?` | `boolean` | Boolean value which shows systems managed by MSSQL. |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`VulnerabilitiesOut`](../interfaces/VulnerabilitiesOut.md), `any`\>\>

#### Defined in

[api.ts:6079](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L6079)

___

### getCveListBySystem

▸ **getCveListBySystem**(`inventoryId`, `filter?`, `limit?`, `offset?`, `page?`, `pageSize?`, `sort?`, `cvssFrom?`, `cvssTo?`, `publicFrom?`, `publicTo?`, `impact?`, `statusId?`, `dataFormat?`, `businessRiskId?`, `rulePresence?`, `showAdvisories?`, `advisory?`, `ruleKey?`, `knownExploit?`, `firstReportedFrom?`, `firstReportedTo?`, `advisoryAvailable?`, `remediation?`, `report?`, `options?`): `Promise`<`AxiosResponse`<[`SystemCvesOut`](../interfaces/SystemCvesOut.md), `any`\>\>

Shows detailed information about all CVEs the system is exposed to.

**`Summary`**

CVE report for a system.

**`Throws`**

**`Memberof`**

DefaultApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inventoryId` | `string` | Inventory ID. |
| `filter?` | `string` | Full text filter for CVE and it\&#39;s description text. |
| `limit?` | `number` | Maximum number of records per page. Limit/Offset pagination wins over page/page_size pagination. |
| `offset?` | `number` | Offset of first record of paginated response. Limit/Offset pagination wins over page/page_size pagination. |
| `page?` | `number` | Page number of paginated response. Limit/Offset pagination wins over page/page_size pagination. |
| `pageSize?` | `number` | Page size of paginated response. Limit/Offset pagination wins over page/page_size pagination. |
| `sort?` | `string` | Sorting used for response. |
| `cvssFrom?` | `number` | Filter based on cvss score, starting from the value. Use -1 to include also CVEs with N/A cvss score. |
| `cvssTo?` | `number` | Filter based on cvss score, up to the value. |
| `publicFrom?` | `string` | Filter CVEs based on their published date, starting from the date. |
| `publicTo?` | `string` | Filter CVEs based on their published date, up to the date. |
| `impact?` | `string` | Filter based on impact IDs. |
| `statusId?` | `string` | Filer based on CVE status ID. |
| `dataFormat?` | `string` | Format of the output data, either JSON (default) or CSV. |
| `businessRiskId?` | `string` | Filter based on business risk IDs. |
| `rulePresence?` | `boolean`[] | Comma seprated string with bools. If true shows only CVEs with security rule associated, if false shows CVEs without rules. true, false shows all. |
| `showAdvisories?` | `boolean` | If true shows advisories list |
| `advisory?` | `string` | filter by advisory name, works only with show_advisories&#x3D;true |
| `ruleKey?` | `string`[] | Filters security rules by its error key. |
| `knownExploit?` | `boolean`[] | String of booleans (array of booleans), where true shows CVEs with known exploits, false shows CVEs without known exploits. |
| `firstReportedFrom?` | `string` | Filter for CVEs/Systems where the vulnerability appeared after given date. |
| `firstReportedTo?` | `string` | Filter for CVEs/Systems where the vulnerability appeared before given date. |
| `advisoryAvailable?` | `boolean`[] | String of booleans (array of booleans), where true shows CVE-system pairs with available advisory, false shows CVE-system pairs without available advisory. |
| `remediation?` | `string` | Filer based on available remediation type id. |
| `report?` | `boolean` | Needs to be used when endpoint data is used for report generation, checks RBAC permission for report and export feature. |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`SystemCvesOut`](../interfaces/SystemCvesOut.md), `any`\>\>

#### Defined in

[api.ts:6115](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L6115)

___

### getCveList\_1

▸ **getCveList_1**(`vulnerabilitiesPostIn`, `filter?`, `limit?`, `offset?`, `page?`, `pageSize?`, `sort?`, `options?`): `Promise`<`AxiosResponse`<[`VulnerabilitiesPostOut`](../interfaces/VulnerabilitiesPostOut.md), `any`\>\>

Overview of vulnerabilities for specific CVEs provided in the body.

**`Summary`**

Vulnerabilities overview.

**`Throws`**

**`Memberof`**

DefaultApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `vulnerabilitiesPostIn` | [`VulnerabilitiesPostIn`](../interfaces/VulnerabilitiesPostIn.md) | List of CVEs to provide info about. |
| `filter?` | `string` | Full text filter for CVE and it\&#39;s description text. |
| `limit?` | `number` | Maximum number of records per page. Limit/Offset pagination wins over page/page_size pagination. |
| `offset?` | `number` | Offset of first record of paginated response. Limit/Offset pagination wins over page/page_size pagination. |
| `page?` | `number` | Page number of paginated response. Limit/Offset pagination wins over page/page_size pagination. |
| `pageSize?` | `number` | Page size of paginated response. Limit/Offset pagination wins over page/page_size pagination. |
| `sort?` | `string` | Sorting used for response. |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`VulnerabilitiesPostOut`](../interfaces/VulnerabilitiesPostOut.md), `any`\>\>

#### Defined in

[api.ts:6133](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L6133)

___

### getDashbar

▸ **getDashbar**(`tags?`, `sapSids?`, `sapSystem?`, `ansible?`, `mssql?`, `options?`): `Promise`<`AxiosResponse`<[`DashbarOut`](../interfaces/DashbarOut.md), `any`\>\>

Overview of CVE aggregations used for Dashbar.

**`Summary`**

Aggregations for Dashbar.

**`Throws`**

**`Memberof`**

DefaultApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `tags?` | `string`[] | Filter based on hosts tags. Tags needs to be in query format, that means &lt;namespace&gt;/&lt;key&gt;&#x3D;&lt;value&gt; or &lt;namespace&gt;/&lt;key&gt; if value is null. Characters \&#39;/\&#39;, \&#39;&#x3D;\&#39; in tag values needs to be escaped by url encoding. |
| `sapSids?` | `string`[] | List of SAP IDs to filter with |
| `sapSystem?` | `boolean` | Boolean value which shows systems managed by SAP. |
| `ansible?` | `boolean` | Boolean value which shows systems managed by Ansible Automation Platform. |
| `mssql?` | `boolean` | Boolean value which shows systems managed by MSSQL. |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`DashbarOut`](../interfaces/DashbarOut.md), `any`\>\>

#### Defined in

[api.ts:6149](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L6149)

___

### getDashboard

▸ **getDashboard**(`tags?`, `sapSids?`, `sapSystem?`, `ansible?`, `mssql?`, `options?`): `Promise`<`AxiosResponse`<[`Dashboard`](../interfaces/Dashboard.md), `any`\>\>

Returns top level overview of vulnerabilities affecting given account.

**`Summary`**

Top level overview of vulnerabilities.

**`Throws`**

**`Memberof`**

DefaultApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `tags?` | `string`[] | Filter based on hosts tags. Tags needs to be in query format, that means &lt;namespace&gt;/&lt;key&gt;&#x3D;&lt;value&gt; or &lt;namespace&gt;/&lt;key&gt; if value is null. Characters \&#39;/\&#39;, \&#39;&#x3D;\&#39; in tag values needs to be escaped by url encoding. |
| `sapSids?` | `string`[] | List of SAP IDs to filter with |
| `sapSystem?` | `boolean` | Boolean value which shows systems managed by SAP. |
| `ansible?` | `boolean` | Boolean value which shows systems managed by Ansible Automation Platform. |
| `mssql?` | `boolean` | Boolean value which shows systems managed by MSSQL. |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`Dashboard`](../interfaces/Dashboard.md), `any`\>\>

#### Defined in

[api.ts:6165](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L6165)

___

### getExecutiveReport

▸ **getExecutiveReport**(`options?`): `Promise`<`AxiosResponse`<[`ExecutiveReport`](../interfaces/ExecutiveReport.md), `any`\>\>

Returns top level overview of vulnerabilities affecting given account.

**`Summary`**

Top level overview of vulnerabilities.

**`Throws`**

**`Memberof`**

DefaultApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`ExecutiveReport`](../interfaces/ExecutiveReport.md), `any`\>\>

#### Defined in

[api.ts:6176](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L6176)

___

### getPlaybookTemplate

▸ **getPlaybookTemplate**(`ruleId`, `options?`): `Promise`<`AxiosResponse`<[`PlaybookTemplate`](../interfaces/PlaybookTemplate.md), `any`\>\>

Return Ansible playbook template for given rule id.

**`Summary`**

Playbook template for CVEs with security rules.

**`Throws`**

**`Memberof`**

DefaultApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ruleId` | `string` | Insights security rule ID. |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`PlaybookTemplate`](../interfaces/PlaybookTemplate.md), `any`\>\>

#### Defined in

[api.ts:6188](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L6188)

___

### getStatusList

▸ **getStatusList**(`options?`): `Promise`<`AxiosResponse`<[`StatusListOut`](../interfaces/StatusListOut.md), `any`\>\>

Returns available status and status_id pairs where status_id is internal ID of the status.

**`Summary`**

Available status/status_id pairs.

**`Throws`**

**`Memberof`**

DefaultApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`StatusListOut`](../interfaces/StatusListOut.md), `any`\>\>

#### Defined in

[api.ts:6199](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L6199)

___

### getSystemDetails

▸ **getSystemDetails**(`inventoryId`, `options?`): `Promise`<`AxiosResponse`<[`SystemDetailsOut`](../interfaces/SystemDetailsOut.md), `any`\>\>

Provides details of a system, e.g. it\'s opt out status.

**`Summary`**

System details.

**`Throws`**

**`Memberof`**

DefaultApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inventoryId` | `string` | Inventory ID. |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`SystemDetailsOut`](../interfaces/SystemDetailsOut.md), `any`\>\>

#### Defined in

[api.ts:6211](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L6211)

___

### getSystemsIds

▸ **getSystemsIds**(`filter?`, `limit?`, `offset?`, `page?`, `pageSize?`, `sort?`, `dataFormat?`, `stale?`, `uuid?`, `tags?`, `sapSids?`, `sapSystem?`, `excluded?`, `rhelVersion?`, `ansible?`, `mssql?`, `options?`): `Promise`<`AxiosResponse`<[`SystemIdsOut`](../interfaces/SystemIdsOut.md), `any`\>\>

List systems IDs visible to logged in account.

**`Summary`**

List systems IDs along with additional info about opt out state of the system.

**`Throws`**

**`Memberof`**

DefaultApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `filter?` | `string` | Full text filter for the display name of system. |
| `limit?` | `number` | Maximum number of records per page. Limit/Offset pagination wins over page/page_size pagination. |
| `offset?` | `number` | Offset of first record of paginated response. Limit/Offset pagination wins over page/page_size pagination. |
| `page?` | `number` | Page number of paginated response. Limit/Offset pagination wins over page/page_size pagination. |
| `pageSize?` | `number` | Page size of paginated response. Limit/Offset pagination wins over page/page_size pagination. |
| `sort?` | `string` | Sorting used for response. |
| `dataFormat?` | `string` | Format of the output data, either JSON (default) or CSV. |
| `stale?` | `boolean` | If set to true, shows stale systems. If not set defaults to false. |
| `uuid?` | `string` | Filter based on UUID of inventory. |
| `tags?` | `string`[] | Filter based on hosts tags. Tags needs to be in query format, that means &lt;namespace&gt;/&lt;key&gt;&#x3D;&lt;value&gt; or &lt;namespace&gt;/&lt;key&gt; if value is null. Characters \&#39;/\&#39;, \&#39;&#x3D;\&#39; in tag values needs to be escaped by url encoding. |
| `sapSids?` | `string`[] | List of SAP IDs to filter with |
| `sapSystem?` | `boolean` | Boolean value which shows systems managed by SAP. |
| `excluded?` | `boolean`[] | Comma seprated string with bools (array of bools). True boolean value displays systems which are excluded. False value displays systems excluded from vulnerability analysis. Defaults to showing only those systems which are not excluded. |
| `rhelVersion?` | `string` | Filters results by RHEL OS version. Automatically flters out systems which are not RHEL or have uknown OS. |
| `ansible?` | `boolean` | Boolean value which shows systems managed by Ansible Automation Platform. |
| `mssql?` | `boolean` | Boolean value which shows systems managed by MSSQL. |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`SystemIdsOut`](../interfaces/SystemIdsOut.md), `any`\>\>

#### Defined in

[api.ts:6238](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L6238)

___

### getSystemsList

▸ **getSystemsList**(`filter?`, `limit?`, `offset?`, `page?`, `pageSize?`, `sort?`, `dataFormat?`, `stale?`, `uuid?`, `tags?`, `sapSids?`, `sapSystem?`, `excluded?`, `rhelVersion?`, `report?`, `ansible?`, `mssql?`, `options?`): `Promise`<`AxiosResponse`<[`SystemListOut`](../interfaces/SystemListOut.md), `any`\>\>

List systems visible to logged in account with basic information related to vulnerabilities.

**`Summary`**

List systems.

**`Throws`**

**`Memberof`**

DefaultApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `filter?` | `string` | Full text filter for the display name of system. |
| `limit?` | `number` | Maximum number of records per page. Limit/Offset pagination wins over page/page_size pagination. |
| `offset?` | `number` | Offset of first record of paginated response. Limit/Offset pagination wins over page/page_size pagination. |
| `page?` | `number` | Page number of paginated response. Limit/Offset pagination wins over page/page_size pagination. |
| `pageSize?` | `number` | Page size of paginated response. Limit/Offset pagination wins over page/page_size pagination. |
| `sort?` | `string` | Sorting used for response. |
| `dataFormat?` | `string` | Format of the output data, either JSON (default) or CSV. |
| `stale?` | `boolean` | If set to true, shows stale systems. If not set defaults to false. |
| `uuid?` | `string` | Filter based on UUID of inventory. |
| `tags?` | `string`[] | Filter based on hosts tags. Tags needs to be in query format, that means &lt;namespace&gt;/&lt;key&gt;&#x3D;&lt;value&gt; or &lt;namespace&gt;/&lt;key&gt; if value is null. Characters \&#39;/\&#39;, \&#39;&#x3D;\&#39; in tag values needs to be escaped by url encoding. |
| `sapSids?` | `string`[] | List of SAP IDs to filter with |
| `sapSystem?` | `boolean` | Boolean value which shows systems managed by SAP. |
| `excluded?` | `boolean`[] | Comma seprated string with bools (array of bools). True boolean value displays systems which are excluded. False value displays systems excluded from vulnerability analysis. Defaults to showing only those systems which are not excluded. |
| `rhelVersion?` | `string` | Filters results by RHEL OS version. Automatically flters out systems which are not RHEL or have uknown OS. |
| `report?` | `boolean` | Needs to be used when endpoint data is used for report generation, checks RBAC permission for report and export feature. |
| `ansible?` | `boolean` | Boolean value which shows systems managed by Ansible Automation Platform. |
| `mssql?` | `boolean` | Boolean value which shows systems managed by MSSQL. |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`SystemListOut`](../interfaces/SystemListOut.md), `any`\>\>

#### Defined in

[api.ts:6266](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L6266)

___

### getVersion

▸ **getVersion**(`options?`): `Promise`<`AxiosResponse`<[`VersionOut`](../interfaces/VersionOut.md), `any`\>\>

Get application version.

**`Summary`**

Application version

**`Throws`**

**`Memberof`**

DefaultApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`VersionOut`](../interfaces/VersionOut.md), `any`\>\>

#### Defined in

[api.ts:6277](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L6277)

___

### setCveBusinessRisk

▸ **setCveBusinessRisk**(`cveRiskIn`, `options?`): `Promise`<`AxiosResponse`<[`BulkChangeOut`](../interfaces/BulkChangeOut.md), `any`\>\>

Sets business risk for a CVE.

**`Summary`**

Set business risk for a CVE.

**`Throws`**

**`Memberof`**

DefaultApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `cveRiskIn` | [`CveRiskIn`](../interfaces/CveRiskIn.md) | Values to be set. At least one of the \&quot;business_risk_id\&quot; or \&quot;business_risk_text\&quot; parameters is required. |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`BulkChangeOut`](../interfaces/BulkChangeOut.md), `any`\>\>

#### Defined in

[api.ts:6289](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L6289)

___

### setCveStatus

▸ **setCveStatus**(`cveStatusIn`, `options?`): `Promise`<`AxiosResponse`<[`BulkChangeOut`](../interfaces/BulkChangeOut.md), `any`\>\>

Sets status for a CVE.

**`Summary`**

Set status for a CVE.

**`Throws`**

**`Memberof`**

DefaultApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `cveStatusIn` | [`CveStatusIn`](../interfaces/CveStatusIn.md) | Values to be set. At least one of the \&quot;status_id\&quot; or \&quot;status_text\&quot; parameters is required. |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`BulkChangeOut`](../interfaces/BulkChangeOut.md), `any`\>\>

#### Defined in

[api.ts:6301](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L6301)

___

### setCvesWithoutErrata

▸ **setCvesWithoutErrata**(`cvesWithoutErrataIn`, `options?`): `Promise`<`AxiosResponse`<[`CvesWithoutErrataOut`](../interfaces/CvesWithoutErrataOut.md), `any`\>\>

Sets cves_without_errata feature flag.

**`Summary`**

Set cves_without_errata feature flag.

**`Throws`**

**`Memberof`**

DefaultApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `cvesWithoutErrataIn` | [`CvesWithoutErrataIn`](../interfaces/CvesWithoutErrataIn.md) | Values to be set. |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`CvesWithoutErrataOut`](../interfaces/CvesWithoutErrataOut.md), `any`\>\>

#### Defined in

[api.ts:6313](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L6313)

___

### setStatus

▸ **setStatus**(`statusIn`, `options?`): `Promise`<`AxiosResponse`<[`StatusOut`](../interfaces/StatusOut.md), `any`\>\>

Sets status for given hosts and CVEs.

**`Summary`**

Set status for system vulnerabilities.

**`Throws`**

**`Memberof`**

DefaultApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `statusIn` | [`StatusIn`](../interfaces/StatusIn.md) | Values to be set. |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`StatusOut`](../interfaces/StatusOut.md), `any`\>\>

#### Defined in

[api.ts:6325](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L6325)

___

### setSystemsOptOut

▸ **setSystemsOptOut**(`optOutIn`, `options?`): `Promise`<`AxiosResponse`<[`BulkChangeOut`](../interfaces/BulkChangeOut.md), `any`\>\>

Opts in/out a systems. Opted out system is not shown and manageable by the vulnerability application.

**`Summary`**

Opt in/out a system to/from vulnerability application.

**`Throws`**

**`Memberof`**

DefaultApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `optOutIn` | [`OptOutIn`](../interfaces/OptOutIn.md) | Values to be set. |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`BulkChangeOut`](../interfaces/BulkChangeOut.md), `any`\>\>

#### Defined in

[api.ts:6337](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L6337)
