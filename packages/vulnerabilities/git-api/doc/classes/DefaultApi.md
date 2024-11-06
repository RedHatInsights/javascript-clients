[@redhat-cloud-services/vulnerabilities-client](../README.md) / [Exports](../modules.md) / DefaultApi

# Class: DefaultApi

DefaultApi - object-oriented interface

**`Export`**

DefaultApi

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

- [deleteNotifications](DefaultApi.md#deletenotifications)
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

• **new DefaultApi**(`configuration?`, `basePath?`, `axios?`): [`DefaultApi`](DefaultApi.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `configuration?` | [`Configuration`](Configuration.md) | `undefined` |
| `basePath` | `string` | `BASE_PATH` |
| `axios` | `AxiosInstance` | `globalAxios` |

#### Returns

[`DefaultApi`](DefaultApi.md)

#### Inherited from

BaseAPI.constructor

#### Defined in

[base.ts:51](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/vulnerabilities/git-api/base.ts#L51)

## Properties

### axios

• `Protected` **axios**: `AxiosInstance` = `globalAxios`

#### Inherited from

BaseAPI.axios

#### Defined in

[base.ts:51](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/vulnerabilities/git-api/base.ts#L51)

___

### basePath

• `Protected` **basePath**: `string` = `BASE_PATH`

#### Inherited from

BaseAPI.basePath

#### Defined in

[base.ts:51](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/vulnerabilities/git-api/base.ts#L51)

___

### configuration

• `Protected` **configuration**: `undefined` \| [`Configuration`](Configuration.md)

#### Inherited from

BaseAPI.configuration

#### Defined in

[base.ts:49](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/vulnerabilities/git-api/base.ts#L49)

## Methods

### deleteNotifications

▸ **deleteNotifications**(`options?`): `Promise`\<`AxiosResponse`\<[`NotificationsOut`](../interfaces/NotificationsOut.md), `any`\>\>

Use this endpoint for restarting your already obtained notifications for CVEs.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<[`NotificationsOut`](../interfaces/NotificationsOut.md), `any`\>\>

**`Summary`**

Delete already sent notifications for CVEs

**`Throws`**

**`Memberof`**

DefaultApi

#### Defined in

[api.ts:6037](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/vulnerabilities/git-api/api.ts#L6037)

___

### getAffectedSystemsByCve

▸ **getAffectedSystemsByCve**(`cveId`, `filter?`, `limit?`, `offset?`, `page?`, `pageSize?`, `sort?`, `statusId?`, `dataFormat?`, `uuid?`, `ruleKey?`, `rulePresence?`, `rule?`, `tags?`, `sapSids?`, `sapSystem?`, `showAdvisories?`, `advisory?`, `rhelVersion?`, `firstReportedFrom?`, `firstReportedTo?`, `advisoryAvailable?`, `remediation?`, `report?`, `ansible?`, `mssql?`, `groupNames?`, `groupIds?`, `hostType?`, `options?`): `Promise`\<`AxiosResponse`\<[`AffectedSystemsOut`](../interfaces/AffectedSystemsOut.md), `any`\>\>

This is a report of affected systems for a given CVE. Use this request to obtain server identification numbers of all affected servers along with last check-in, system name and more.

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
| `advisory?` | `string` | Filter by advisory name, works only with show_advisories&#x3D;true |
| `rhelVersion?` | `string` | Filters results by RHEL OS version. Automatically flters out systems which are not RHEL or have uknown OS. |
| `firstReportedFrom?` | `string` | Filter for CVEs/Systems where the vulnerability appeared after given date. |
| `firstReportedTo?` | `string` | Filter for CVEs/Systems where the vulnerability appeared before given date. |
| `advisoryAvailable?` | `boolean`[] | String of booleans (array of booleans), where true shows CVE-system pairs with available advisory, false shows CVE-system pairs without available advisory. |
| `remediation?` | `string` | Filer based on available remediation type id. |
| `report?` | `boolean` | Needs to be used when endpoint data is used for report generation, checks RBAC permission for report and export feature. |
| `ansible?` | `boolean` | Boolean value which shows systems managed by Ansible Automation Platform. |
| `mssql?` | `boolean` | Boolean value which shows systems managed by MSSQL. |
| `groupNames?` | `string`[] | Names of the inventory groups. |
| `groupIds?` | `string`[] | IDs of the inventory groups. |
| `hostType?` | (``"rpmdnf"`` \| ``"edge"``)[] | For filtering out the systems based on their type. Value \&quot;rpmdnf\&quot; for RPMDNF systems, \&quot;edge\&quot; for OSTree systems. |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<[`AffectedSystemsOut`](../interfaces/AffectedSystemsOut.md), `any`\>\>

**`Summary`**

Determine affected systems for a given CVE

**`Throws`**

**`Memberof`**

DefaultApi

#### Defined in

[api.ts:6077](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/vulnerabilities/git-api/api.ts#L6077)

___

### getAffectedSystemsIdsByCve

▸ **getAffectedSystemsIdsByCve**(`cveId`, `filter?`, `limit?`, `offset?`, `page?`, `pageSize?`, `sort?`, `statusId?`, `dataFormat?`, `uuid?`, `ruleKey?`, `rulePresence?`, `rule?`, `tags?`, `sapSids?`, `sapSystem?`, `showAdvisories?`, `advisory?`, `rhelVersion?`, `firstReportedFrom?`, `firstReportedTo?`, `advisoryAvailable?`, `remediation?`, `ansible?`, `mssql?`, `groupNames?`, `groupIds?`, `hostType?`, `options?`): `Promise`\<`AxiosResponse`\<[`AffectedSystemsIdsOut`](../interfaces/AffectedSystemsIdsOut.md), `any`\>\>

This is a report of identification numbers of affected systems for a given CVE. Use this request to obtain server identification numbers of all affected systems.

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
| `advisory?` | `string` | Filter by advisory name, works only with show_advisories&#x3D;true |
| `rhelVersion?` | `string` | Filters results by RHEL OS version. Automatically flters out systems which are not RHEL or have uknown OS. |
| `firstReportedFrom?` | `string` | Filter for CVEs/Systems where the vulnerability appeared after given date. |
| `firstReportedTo?` | `string` | Filter for CVEs/Systems where the vulnerability appeared before given date. |
| `advisoryAvailable?` | `boolean`[] | String of booleans (array of booleans), where true shows CVE-system pairs with available advisory, false shows CVE-system pairs without available advisory. |
| `remediation?` | `string` | Filer based on available remediation type id. |
| `ansible?` | `boolean` | Boolean value which shows systems managed by Ansible Automation Platform. |
| `mssql?` | `boolean` | Boolean value which shows systems managed by MSSQL. |
| `groupNames?` | `string`[] | Names of the inventory groups. |
| `groupIds?` | `string`[] | IDs of the inventory groups. |
| `hostType?` | (``"rpmdnf"`` \| ``"edge"``)[] | For filtering out the systems based on their type. Value \&quot;rpmdnf\&quot; for RPMDNF systems, \&quot;edge\&quot; for OSTree systems. |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<[`AffectedSystemsIdsOut`](../interfaces/AffectedSystemsIdsOut.md), `any`\>\>

**`Summary`**

Get identification numbers of affected systems for a given CVE

**`Throws`**

**`Memberof`**

DefaultApi

#### Defined in

[api.ts:6116](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/vulnerabilities/git-api/api.ts#L6116)

___

### getAnnouncement

▸ **getAnnouncement**(`options?`): `Promise`\<`AxiosResponse`\<[`AnnouncementOut`](../interfaces/AnnouncementOut.md), `any`\>\>

This endpoint provides vulnerability service announcements. Remain informed about important alerts for the vulnerability service. Announcements are issued by Insights Product Managers and other subject matter experts.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<[`AnnouncementOut`](../interfaces/AnnouncementOut.md), `any`\>\>

**`Summary`**

Announce important updates

**`Throws`**

**`Memberof`**

DefaultApi

#### Defined in

[api.ts:6127](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/vulnerabilities/git-api/api.ts#L6127)

___

### getApiStatus

▸ **getApiStatus**(`options?`): `Promise`\<`AxiosResponse`\<`void`, `any`\>\>

Checks database availability and API response threshold time.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<`void`, `any`\>\>

**`Summary`**

Determine the health of the application

**`Throws`**

**`Memberof`**

DefaultApi

#### Defined in

[api.ts:6138](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/vulnerabilities/git-api/api.ts#L6138)

___

### getBusinessRiskList

▸ **getBusinessRiskList**(`options?`): `Promise`\<`AxiosResponse`\<[`BusinessRiskListOut`](../interfaces/BusinessRiskListOut.md), `any`\>\>

This endpoint helps you determine the numeric business risk for a given CVE. A business risk is a label you can set for a given CVE. Choose one of five business risk options ranging from 0-4, where 0 is not defined and 4 indicates a critical risk. You must call this endpoint to choose a numerical value before calling the *PATCH/cves/business_risk* endpoint.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<[`BusinessRiskListOut`](../interfaces/BusinessRiskListOut.md), `any`\>\>

**`Summary`**

Access business risk values

**`Throws`**

**`Memberof`**

DefaultApi

#### Defined in

[api.ts:6149](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/vulnerabilities/git-api/api.ts#L6149)

___

### getCveDetails

▸ **getCveDetails**(`cveId`, `advisoryAvailable?`, `options?`): `Promise`\<`AxiosResponse`\<[`CveDetailOut`](../interfaces/CveDetailOut.md), `any`\>\>

This endpoint returns the CVE identification number, description, scores and other metadata. The metadata includes the description, CVSS 2/3 Score, CVSS 2/3 attack vector, severity, public date, modified date, business risk, status, a URL to Red Hat web pages, a list of advisories remediating the CVE, and information regarding known exploits for the CVE.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `cveId` | `string` | CVE id. |
| `advisoryAvailable?` | `boolean`[] | String of booleans (array of booleans), where true shows CVE-system pairs with available advisory, false shows CVE-system pairs without available advisory. |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<[`CveDetailOut`](../interfaces/CveDetailOut.md), `any`\>\>

**`Summary`**

Get CVE details

**`Throws`**

**`Memberof`**

DefaultApi

#### Defined in

[api.ts:6162](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/vulnerabilities/git-api/api.ts#L6162)

___

### getCveIdsBySystem

▸ **getCveIdsBySystem**(`inventoryId`, `filter?`, `limit?`, `offset?`, `page?`, `pageSize?`, `sort?`, `cvssFrom?`, `cvssTo?`, `publicFrom?`, `publicTo?`, `impact?`, `statusId?`, `dataFormat?`, `businessRiskId?`, `rulePresence?`, `showAdvisories?`, `advisory?`, `ruleKey?`, `knownExploit?`, `firstReportedFrom?`, `firstReportedTo?`, `advisoryAvailable?`, `remediation?`, `options?`): `Promise`\<`AxiosResponse`\<[`SystemCvesIdsOut`](../interfaces/SystemCvesIdsOut.md), `any`\>\>

This endpoint displays identification numbers of all CVEs for which a system is exposed. Use this endpoint to learn which CVEs are affecting a given system.

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
| `advisory?` | `string` | Filter by advisory name, works only with show_advisories&#x3D;true |
| `ruleKey?` | `string`[] | Filters security rules by its error key. |
| `knownExploit?` | `boolean`[] | String of booleans (array of booleans), where true shows CVEs with known exploits, false shows CVEs without known exploits. |
| `firstReportedFrom?` | `string` | Filter for CVEs/Systems where the vulnerability appeared after given date. |
| `firstReportedTo?` | `string` | Filter for CVEs/Systems where the vulnerability appeared before given date. |
| `advisoryAvailable?` | `boolean`[] | String of booleans (array of booleans), where true shows CVE-system pairs with available advisory, false shows CVE-system pairs without available advisory. |
| `remediation?` | `string` | Filer based on available remediation type id. |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<[`SystemCvesIdsOut`](../interfaces/SystemCvesIdsOut.md), `any`\>\>

**`Summary`**

Get a CVE identification number report for a system

**`Throws`**

**`Memberof`**

DefaultApi

#### Defined in

[api.ts:6197](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/vulnerabilities/git-api/api.ts#L6197)

___

### getCveIdsList

▸ **getCveIdsList**(`filter?`, `limit?`, `offset?`, `page?`, `pageSize?`, `sort?`, `cvssFrom?`, `cvssTo?`, `publicFrom?`, `publicTo?`, `impact?`, `dataFormat?`, `businessRiskId?`, `statusId?`, `rulePresence?`, `tags?`, `sapSids?`, `sapSystem?`, `knownExploit?`, `affecting?`, `rhelVersion?`, `ansible?`, `mssql?`, `advisoryAvailable?`, `options?`): `Promise`\<`AxiosResponse`\<[`VulnerabilitiesIdsOut`](../interfaces/VulnerabilitiesIdsOut.md), `any`\>\>

This is an overview of vulnerabilities identification numbers across your entire system inventory. Use this endpoint to get an overview of which CVEs are affecting your account.

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
| `advisoryAvailable?` | `boolean`[] | String of booleans (array of booleans), where true shows CVE-system pairs with available advisory, false shows CVE-system pairs without available advisory. |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<[`VulnerabilitiesIdsOut`](../interfaces/VulnerabilitiesIdsOut.md), `any`\>\>

**`Summary`**

Get an overview of Vulnerabilities\' identification numbers

**`Throws`**

**`Memberof`**

DefaultApi

#### Defined in

[api.ts:6232](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/vulnerabilities/git-api/api.ts#L6232)

___

### getCveList

▸ **getCveList**(`filter?`, `limit?`, `offset?`, `page?`, `pageSize?`, `sort?`, `cvssFrom?`, `cvssTo?`, `publicFrom?`, `publicTo?`, `impact?`, `dataFormat?`, `businessRiskId?`, `statusId?`, `rulePresence?`, `tags?`, `sapSids?`, `sapSystem?`, `knownExploit?`, `affecting?`, `rhelVersion?`, `report?`, `advancedReport?`, `ansible?`, `mssql?`, `advisoryAvailable?`, `groupNames?`, `groupIds?`, `affectingHostType?`, `options?`): `Promise`\<`AxiosResponse`\<[`VulnerabilitiesOut`](../interfaces/VulnerabilitiesOut.md), `any`\>\>

This provides an overview of vulnerabilities across your entire system inventory. Use this endpoint to get an overview of which CVEs are affecting your account, including some CVE metadata, how many systems are affected by each CVE, and more.

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
| `advisoryAvailable?` | `boolean`[] | String of booleans (array of booleans), where true shows CVE-system pairs with available advisory, false shows CVE-system pairs without available advisory. |
| `groupNames?` | `string`[] | Names of the inventory groups. |
| `groupIds?` | `string`[] | IDs of the inventory groups. |
| `affectingHostType?` | (``"rpmdnf"`` \| ``"edge"`` \| ``"none"``)[] | Controls, whenever CVE has 1 or more affecting systems. Value \&quot;edge\&quot; returns CVEs with one or more vulnerable immutable systems, value \&quot;rpmdnf\&quot; returns CVEs with one or more vulnerable conventional systems. Value \&quot;none\&quot; returns CVEs not affecting systems of any kind. |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<[`VulnerabilitiesOut`](../interfaces/VulnerabilitiesOut.md), `any`\>\>

**`Summary`**

Get a vulnerabilities overview

**`Throws`**

**`Memberof`**

DefaultApi

#### Defined in

[api.ts:6272](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/vulnerabilities/git-api/api.ts#L6272)

___

### getCveListBySystem

▸ **getCveListBySystem**(`inventoryId`, `filter?`, `limit?`, `offset?`, `page?`, `pageSize?`, `sort?`, `cvssFrom?`, `cvssTo?`, `publicFrom?`, `publicTo?`, `impact?`, `statusId?`, `dataFormat?`, `businessRiskId?`, `rulePresence?`, `showAdvisories?`, `advisory?`, `ruleKey?`, `knownExploit?`, `firstReportedFrom?`, `firstReportedTo?`, `advisoryAvailable?`, `remediation?`, `report?`, `options?`): `Promise`\<`AxiosResponse`\<[`SystemCvesOut`](../interfaces/SystemCvesOut.md), `any`\>\>

This endpoint displays detailed information about all CVEs for which a system is exposed. Use this endpoint to discover which CVEs are affecting a given system. CVE metadata is included.

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
| `advisory?` | `string` | Filter by advisory name, works only with show_advisories&#x3D;true |
| `ruleKey?` | `string`[] | Filters security rules by its error key. |
| `knownExploit?` | `boolean`[] | String of booleans (array of booleans), where true shows CVEs with known exploits, false shows CVEs without known exploits. |
| `firstReportedFrom?` | `string` | Filter for CVEs/Systems where the vulnerability appeared after given date. |
| `firstReportedTo?` | `string` | Filter for CVEs/Systems where the vulnerability appeared before given date. |
| `advisoryAvailable?` | `boolean`[] | String of booleans (array of booleans), where true shows CVE-system pairs with available advisory, false shows CVE-system pairs without available advisory. |
| `remediation?` | `string` | Filer based on available remediation type id. |
| `report?` | `boolean` | Needs to be used when endpoint data is used for report generation, checks RBAC permission for report and export feature. |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<[`SystemCvesOut`](../interfaces/SystemCvesOut.md), `any`\>\>

**`Summary`**

Get a CVE report for a system

**`Throws`**

**`Memberof`**

DefaultApi

#### Defined in

[api.ts:6308](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/vulnerabilities/git-api/api.ts#L6308)

___

### getCveList\_1

▸ **getCveList_1**(`vulnerabilitiesPostIn`, `filter?`, `limit?`, `offset?`, `page?`, `pageSize?`, `sort?`, `options?`): `Promise`\<`AxiosResponse`\<[`VulnerabilitiesPostOut`](../interfaces/VulnerabilitiesPostOut.md), `any`\>\>

This is an overview of vulnerabilities for specific CVEs provided in the body. Use this endpoint to get a CVSS score, and learn the severity for a list of CVEs provided in the request.

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

`Promise`\<`AxiosResponse`\<[`VulnerabilitiesPostOut`](../interfaces/VulnerabilitiesPostOut.md), `any`\>\>

**`Summary`**

Send a vulnerabilities overview

**`Throws`**

**`Memberof`**

DefaultApi

#### Defined in

[api.ts:6326](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/vulnerabilities/git-api/api.ts#L6326)

___

### getDashbar

▸ **getDashbar**(`tags?`, `sapSids?`, `sapSystem?`, `ansible?`, `mssql?`, `options?`): `Promise`\<`AxiosResponse`\<[`DashbarOut`](../interfaces/DashbarOut.md), `any`\>\>

These are aggregations summarizing your account such as number of unique CVEs, list of security rules, CVEs by severity and more. Use this endpoint to obtain a snapshot of all the CVES and details about their prevalence, severity and other details.

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

`Promise`\<`AxiosResponse`\<[`DashbarOut`](../interfaces/DashbarOut.md), `any`\>\>

**`Summary`**

Get aggregations for the dashbar

**`Throws`**

**`Memberof`**

DefaultApi

#### Defined in

[api.ts:6342](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/vulnerabilities/git-api/api.ts#L6342)

___

### getDashboard

▸ **getDashboard**(`tags?`, `sapSids?`, `sapSystem?`, `ansible?`, `mssql?`, `options?`): `Promise`\<`AxiosResponse`\<[`Dashboard`](../interfaces/Dashboard.md), `any`\>\>

These are aggregations summarizing your account such as number of unique CVEs, list of security rules, CVEs by severity, and more. Use this endpoint to obtain a snapshot of all the CVES and details about their prevalence and severity.

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

`Promise`\<`AxiosResponse`\<[`Dashboard`](../interfaces/Dashboard.md), `any`\>\>

**`Summary`**

Get a macro level overview of aggregated vulnerabilities

**`Throws`**

**`Memberof`**

DefaultApi

#### Defined in

[api.ts:6358](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/vulnerabilities/git-api/api.ts#L6358)

___

### getExecutiveReport

▸ **getExecutiveReport**(`options?`): `Promise`\<`AxiosResponse`\<[`ExecutiveReport`](../interfaces/ExecutiveReport.md), `any`\>\>

This returns an overview of vulnerabilities affecting a given account. Use this request when you need to download a high-level, executive report summarizing the security exposure of your infrastructure. These reports are designed for an executive audience and include data such as the number of RHEL systems analyzed, the number of security rules in your infrastructure, percentage of CVEs with a certain severity and more.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<[`ExecutiveReport`](../interfaces/ExecutiveReport.md), `any`\>\>

**`Summary`**

Generate an executive report

**`Throws`**

**`Memberof`**

DefaultApi

#### Defined in

[api.ts:6369](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/vulnerabilities/git-api/api.ts#L6369)

___

### getPlaybookTemplate

▸ **getPlaybookTemplate**(`ruleId`, `options?`): `Promise`\<`AxiosResponse`\<[`PlaybookTemplate`](../interfaces/PlaybookTemplate.md), `any`\>\>

This returns an Ansible playbook template for a given rule identification number. Use this endpoint to return an Ansible playbook template for a given rule error key. The template is used to remediate issues on your system.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ruleId` | `string` | Insights security rule ID. |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<[`PlaybookTemplate`](../interfaces/PlaybookTemplate.md), `any`\>\>

**`Summary`**

Get an Ansible Playbook template for CVEs with security rules

**`Throws`**

**`Memberof`**

DefaultApi

#### Defined in

[api.ts:6381](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/vulnerabilities/git-api/api.ts#L6381)

___

### getStatusList

▸ **getStatusList**(`options?`): `Promise`\<`AxiosResponse`\<[`StatusListOut`](../interfaces/StatusListOut.md), `any`\>\>

This endpoint returns a list of possible values for setting status for a CVE or system-CVE pair. Call this api when you want to know which values are available for setting a status. A list of numbers will be returned. You must call this endpoint before calling the *PATCH/cves/status* endpoint.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<[`StatusListOut`](../interfaces/StatusListOut.md), `any`\>\>

**`Summary`**

Access available status values

**`Throws`**

**`Memberof`**

DefaultApi

#### Defined in

[api.ts:6392](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/vulnerabilities/git-api/api.ts#L6392)

___

### getSystemDetails

▸ **getSystemDetails**(`inventoryId`, `options?`): `Promise`\<`AxiosResponse`\<[`SystemDetailsOut`](../interfaces/SystemDetailsOut.md), `any`\>\>

This allows you to get information about systems related to an inventory identification number. This includes details such as operating system, inventory tags, last update, opt-out status, and more.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inventoryId` | `string` | Inventory ID. |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<[`SystemDetailsOut`](../interfaces/SystemDetailsOut.md), `any`\>\>

**`Summary`**

Get system details

**`Throws`**

**`Memberof`**

DefaultApi

#### Defined in

[api.ts:6404](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/vulnerabilities/git-api/api.ts#L6404)

___

### getSystemsIds

▸ **getSystemsIds**(`filter?`, `limit?`, `offset?`, `page?`, `pageSize?`, `sort?`, `dataFormat?`, `stale?`, `uuid?`, `tags?`, `sapSids?`, `sapSystem?`, `excluded?`, `rhelVersion?`, `ansible?`, `mssql?`, `groupNames?`, `groupIds?`, `options?`): `Promise`\<`AxiosResponse`\<[`SystemIdsOut`](../interfaces/SystemIdsOut.md), `any`\>\>

This lists systems including those that have opted out of the current query. Use this when you do not want to see a registered system or systems in your reports.

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
| `groupNames?` | `string`[] | Names of the inventory groups. |
| `groupIds?` | `string`[] | IDs of the inventory groups. |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<[`SystemIdsOut`](../interfaces/SystemIdsOut.md), `any`\>\>

**`Summary`**

List systems identification numbers along with opt out state

**`Throws`**

**`Memberof`**

DefaultApi

#### Defined in

[api.ts:6433](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/vulnerabilities/git-api/api.ts#L6433)

___

### getSystemsList

▸ **getSystemsList**(`filter?`, `limit?`, `offset?`, `page?`, `pageSize?`, `sort?`, `dataFormat?`, `stale?`, `uuid?`, `tags?`, `sapSids?`, `sapSystem?`, `excluded?`, `rhelVersion?`, `report?`, `ansible?`, `mssql?`, `groupNames?`, `groupIds?`, `options?`): `Promise`\<`AxiosResponse`\<[`SystemListOut`](../interfaces/SystemListOut.md), `any`\>\>

List systems that are accessible when you are logged into your account. Use this endpoint to view basic system attributes such as display name and system type.

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
| `groupNames?` | `string`[] | Names of the inventory groups. |
| `groupIds?` | `string`[] | IDs of the inventory groups. |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<[`SystemListOut`](../interfaces/SystemListOut.md), `any`\>\>

**`Summary`**

List systems

**`Throws`**

**`Memberof`**

DefaultApi

#### Defined in

[api.ts:6463](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/vulnerabilities/git-api/api.ts#L6463)

___

### getVersion

▸ **getVersion**(`options?`): `Promise`\<`AxiosResponse`\<[`VersionOut`](../interfaces/VersionOut.md), `any`\>\>

This endpoint will provide you with the application version. Use this endpoint to track application changes.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<[`VersionOut`](../interfaces/VersionOut.md), `any`\>\>

**`Summary`**

Get application version

**`Throws`**

**`Memberof`**

DefaultApi

#### Defined in

[api.ts:6474](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/vulnerabilities/git-api/api.ts#L6474)

___

### setCveBusinessRisk

▸ **setCveBusinessRisk**(`cveRiskIn`, `options?`): `Promise`\<`AxiosResponse`\<[`BulkChangeOut`](../interfaces/BulkChangeOut.md), `any`\>\>

This sets a business risk for a specific CVE. Set a value of low, medium, high or critical for a given CVE. These values are obtained by the business risk path *GET/business_risk*. To set a business risk, you must call the GET/business_risk endpoint first, followed by the *PATCH/cves/business_risk* path.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `cveRiskIn` | [`CveRiskIn`](../interfaces/CveRiskIn.md) | Values to be set. At least one of the \&quot;business_risk_id\&quot; or \&quot;business_risk_text\&quot; parameters is required. |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<[`BulkChangeOut`](../interfaces/BulkChangeOut.md), `any`\>\>

**`Summary`**

Set business risk for a CVE

**`Throws`**

**`Memberof`**

DefaultApi

#### Defined in

[api.ts:6486](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/vulnerabilities/git-api/api.ts#L6486)

___

### setCveStatus

▸ **setCveStatus**(`cveStatusIn`, `options?`): `Promise`\<`AxiosResponse`\<[`BulkChangeOut`](../interfaces/BulkChangeOut.md), `any`\>\>

This sets the status for a specific CVE. Set a status value for a given CVE (e.g. in-review, on-hold, scheduled for a patch, or resolved). These values are obtained by sending a *GET/status* request. To set a status, you must call the *GET/business_risk* first, followed by the *PATCH/cves/status* path.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `cveStatusIn` | [`CveStatusIn`](../interfaces/CveStatusIn.md) | Values to be set. At least one of the \&quot;status_id\&quot; or \&quot;status_text\&quot; parameters is required. |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<[`BulkChangeOut`](../interfaces/BulkChangeOut.md), `any`\>\>

**`Summary`**

Set status for a CVE

**`Throws`**

**`Memberof`**

DefaultApi

#### Defined in

[api.ts:6498](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/vulnerabilities/git-api/api.ts#L6498)

___

### setCvesWithoutErrata

▸ **setCvesWithoutErrata**(`cvesWithoutErrataIn`, `options?`): `Promise`\<`AxiosResponse`\<[`CvesWithoutErrataOut`](../interfaces/CvesWithoutErrataOut.md), `any`\>\>

Use this endpoint to enable/disable reporting CVEs that do not have advisories (errata) for your customer account. If the feature is disabled, CVEs without advisories will be hidden in outputs of all endpoints.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `cvesWithoutErrataIn` | [`CvesWithoutErrataIn`](../interfaces/CvesWithoutErrataIn.md) | Values to be set. |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<[`CvesWithoutErrataOut`](../interfaces/CvesWithoutErrataOut.md), `any`\>\>

**`Summary`**

Set a feature flag for CVEs without errata

**`Throws`**

**`Memberof`**

DefaultApi

#### Defined in

[api.ts:6510](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/vulnerabilities/git-api/api.ts#L6510)

___

### setStatus

▸ **setStatus**(`statusIn`, `options?`): `Promise`\<`AxiosResponse`\<[`StatusOut`](../interfaces/StatusOut.md), `any`\>\>

This endpoint sets status for given systems and CVEs. Use this endpoint when you need to set a status value for system-CVE pairs.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `statusIn` | [`StatusIn`](../interfaces/StatusIn.md) | Values to be set. |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<[`StatusOut`](../interfaces/StatusOut.md), `any`\>\>

**`Summary`**

Set status for system vulnerabilities

**`Throws`**

**`Memberof`**

DefaultApi

#### Defined in

[api.ts:6522](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/vulnerabilities/git-api/api.ts#L6522)

___

### setSystemsOptOut

▸ **setSystemsOptOut**(`optOutIn`, `options?`): `Promise`\<`AxiosResponse`\<[`BulkChangeOut`](../interfaces/BulkChangeOut.md), `any`\>\>

Opt a specific system in or out of vulnerability analysis. Use this when you want to use other Insights services but do not want to see specific systems in vulnerability reports. This allows you to hide select systems.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `optOutIn` | [`OptOutIn`](../interfaces/OptOutIn.md) | Values to be set. |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<[`BulkChangeOut`](../interfaces/BulkChangeOut.md), `any`\>\>

**`Summary`**

Opt a system in or out of the vulnerability service

**`Throws`**

**`Memberof`**

DefaultApi

#### Defined in

[api.ts:6534](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/vulnerabilities/git-api/api.ts#L6534)
