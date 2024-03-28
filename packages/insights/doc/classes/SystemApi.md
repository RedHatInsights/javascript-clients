[@redhat-cloud-services/insights-client](../README.md) / [Exports](../modules.md) / SystemApi

# Class: SystemApi

SystemApi - object-oriented interface

**`Export`**

## Hierarchy

- `BaseAPI`

  ↳ **`SystemApi`**

## Table of contents

### Constructors

- [constructor](SystemApi.md#constructor)

### Properties

- [axios](SystemApi.md#axios)
- [basePath](SystemApi.md#basepath)
- [configuration](SystemApi.md#configuration)

### Methods

- [systemList](SystemApi.md#systemlist)
- [systemRenderedReportsList](SystemApi.md#systemrenderedreportslist)
- [systemReportsList](SystemApi.md#systemreportslist)
- [systemRetrieve](SystemApi.md#systemretrieve)

## Constructors

### constructor

• **new SystemApi**(`configuration?`, `basePath?`, `axios?`)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `configuration?` | [`Configuration`](Configuration.md) | `undefined` |
| `basePath` | `string` | `BASE_PATH` |
| `axios` | `AxiosInstance` | `globalAxios` |

#### Inherited from

BaseAPI.constructor

#### Defined in

[base.ts:51](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/base.ts#L51)

## Properties

### axios

• `Protected` **axios**: `AxiosInstance` = `globalAxios`

#### Inherited from

BaseAPI.axios

#### Defined in

[base.ts:51](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/base.ts#L51)

___

### basePath

• `Protected` **basePath**: `string` = `BASE_PATH`

#### Inherited from

BaseAPI.basePath

#### Defined in

[base.ts:51](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/base.ts#L51)

___

### configuration

• `Protected` **configuration**: `undefined` \| [`Configuration`](Configuration.md)

#### Inherited from

BaseAPI.configuration

#### Defined in

[base.ts:49](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/base.ts#L49)

## Methods

### systemList

▸ **systemList**(`displayName?`, `filterSystemProfileAnsible?`, `filterSystemProfileMssql?`, `filterSystemProfileSapSidsContains?`, `filterSystemProfileSapSystem?`, `groups?`, `hits?`, `incident?`, `limit?`, `offset?`, `pathway?`, `rhelVersion?`, `sort?`, `tags?`, `updateMethod?`, `options?`): `Promise`<`AxiosResponse`<[`PaginatedSystemList`](../interfaces/PaginatedSystemList.md), `any`\>\>

Returns systems with their hit count and last upload time.  Results can be sorted and systems can be filtered by display name and hits

**`Throws`**

**`Memberof`**

SystemApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `displayName?` | `string` | Display systems with this text in their display_name |
| `filterSystemProfileAnsible?` | `boolean` | Is this an Ansible system? |
| `filterSystemProfileMssql?` | `boolean` | Is this a Microsoft SQL system? |
| `filterSystemProfileSapSidsContains?` | `string`[] | Are there systems which contain these SAP SIDs? |
| `filterSystemProfileSapSystem?` | `boolean` | Is this a SAP system? |
| `groups?` | `string`[] | List of Inventory host group names |
| `hits?` | (``"all"`` \| ``"1"`` \| ``"2"`` \| ``"3"`` \| ``"4"`` \| ``"no"`` \| ``"yes"``)[] | Display systems with hits of the given total_risk value (1..4), or 0 to display all systems |
| `incident?` | `boolean` | Display only systems reporting an incident |
| `limit?` | `number` | Number of results to return per page. |
| `offset?` | `number` | The initial index from which to return the results. |
| `pathway?` | `string` | Display systems with rule hits for this Pathway |
| `rhelVersion?` | (``"6.0"`` \| ``"6.1"`` \| ``"6.10"`` \| ``"6.2"`` \| ``"6.3"`` \| ``"6.4"`` \| ``"6.5"`` \| ``"6.6"`` \| ``"6.7"`` \| ``"6.8"`` \| ``"6.9"`` \| ``"7.0"`` \| ``"7.1"`` \| ``"7.10"`` \| ``"7.2"`` \| ``"7.3"`` \| ``"7.4"`` \| ``"7.5"`` \| ``"7.6"`` \| ``"7.7"`` \| ``"7.8"`` \| ``"7.9"`` \| ``"8.0"`` \| ``"8.1"`` \| ``"8.10"`` \| ``"8.2"`` \| ``"8.3"`` \| ``"8.4"`` \| ``"8.5"`` \| ``"8.6"`` \| ``"8.7"`` \| ``"8.8"`` \| ``"8.9"`` \| ``"9.0"`` \| ``"9.1"`` \| ``"9.2"`` \| ``"9.3"`` \| ``"9.4"``)[] | Display only systems with these versions of RHEL |
| `sort?` | ``"-critical_hits"`` \| ``"-display_name"`` \| ``"-group_name"`` \| ``"-hits"`` \| ``"-important_hits"`` \| ``"-last_seen"`` \| ``"-low_hits"`` \| ``"-moderate_hits"`` \| ``"-rhel_version"`` \| ``"critical_hits"`` \| ``"display_name"`` \| ``"group_name"`` \| ``"hits"`` \| ``"important_hits"`` \| ``"last_seen"`` \| ``"low_hits"`` \| ``"moderate_hits"`` \| ``"rhel_version"`` | Order by this field |
| `tags?` | `string`[] | Tags have a namespace, key and value in the form namespace/key&#x3D;value |
| `updateMethod?` | (``"dnfyum"`` \| ``"ostree"``)[] | Search for systems with this updater type |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`PaginatedSystemList`](../interfaces/PaginatedSystemList.md), `any`\>\>

#### Defined in

[api.ts:9066](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L9066)

___

### systemRenderedReportsList

▸ **systemRenderedReportsList**(`uuid`, `filterSystemProfileAnsible?`, `filterSystemProfileMssql?`, `filterSystemProfileSapSidsContains?`, `filterSystemProfileSapSystem?`, `tags?`, `updateMethod?`, `options?`): `Promise`<`AxiosResponse`<[`RenderedReport`](../interfaces/RenderedReport.md)[], `any`\>\>

Returns the list of reports for an Inventory Host ID, with the rule templates filled in thanks to node.js and DoT and Markdown.  If the host ID is not found, return an empty list.

**`Throws`**

**`Memberof`**

SystemApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `uuid` | `string` | A UUID string identifying this inventory host. |
| `filterSystemProfileAnsible?` | `boolean` | Is this an Ansible system? |
| `filterSystemProfileMssql?` | `boolean` | Is this a Microsoft SQL system? |
| `filterSystemProfileSapSidsContains?` | `string`[] | Are there systems which contain these SAP SIDs? |
| `filterSystemProfileSapSystem?` | `boolean` | Is this a SAP system? |
| `tags?` | `string`[] | Tags have a namespace, key and value in the form namespace/key&#x3D;value |
| `updateMethod?` | (``"dnfyum"`` \| ``"ostree"``)[] | Search for systems with this updater type |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`RenderedReport`](../interfaces/RenderedReport.md)[], `any`\>\>

#### Defined in

[api.ts:9083](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L9083)

___

### systemReportsList

▸ **systemReportsList**(`uuid`, `filterSystemProfileAnsible?`, `filterSystemProfileMssql?`, `filterSystemProfileSapSidsContains?`, `filterSystemProfileSapSystem?`, `groups?`, `tags?`, `updateMethod?`, `options?`): `Promise`<`AxiosResponse`<[`Report`](../interfaces/Report.md)[], `any`\>\>

Returns the list of latest reports for an Inventory Host ID.  Returns reports that:  * are in the user\'s account  * have an active, not-deleted rule  * where the rule has not been acked by this account  If the host ID is not found, return an empty list.

**`Throws`**

**`Memberof`**

SystemApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `uuid` | `string` | A UUID string identifying this inventory host. |
| `filterSystemProfileAnsible?` | `boolean` | Is this an Ansible system? |
| `filterSystemProfileMssql?` | `boolean` | Is this a Microsoft SQL system? |
| `filterSystemProfileSapSidsContains?` | `string`[] | Are there systems which contain these SAP SIDs? |
| `filterSystemProfileSapSystem?` | `boolean` | Is this a SAP system? |
| `groups?` | `string`[] | List of Inventory host group names |
| `tags?` | `string`[] | Tags have a namespace, key and value in the form namespace/key&#x3D;value |
| `updateMethod?` | (``"dnfyum"`` \| ``"ostree"``)[] | Search for systems with this updater type |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`Report`](../interfaces/Report.md)[], `any`\>\>

#### Defined in

[api.ts:9101](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L9101)

___

### systemRetrieve

▸ **systemRetrieve**(`uuid`, `options?`): `Promise`<`AxiosResponse`<[`System`](../interfaces/System.md), `any`\>\>

Retrieve the reports for a single system by Insights Inventory UUID

**`Summary`**

Retrieve the reports for a single system

**`Throws`**

**`Memberof`**

SystemApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `uuid` | `string` | A UUID string identifying this inventory host. |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`System`](../interfaces/System.md), `any`\>\>

#### Defined in

[api.ts:9113](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L9113)
