[@redhat-cloud-services/insights-client](../README.md) / [Exports](../modules.md) / ExportApi

# Class: ExportApi

ExportApi - object-oriented interface

**`Export`**

ExportApi

## Hierarchy

- `BaseAPI`

  ↳ **`ExportApi`**

## Table of contents

### Constructors

- [constructor](ExportApi.md#constructor)

### Properties

- [axios](ExportApi.md#axios)
- [basePath](ExportApi.md#basepath)
- [configuration](ExportApi.md#configuration)

### Methods

- [exportHitsList](ExportApi.md#exporthitslist)
- [exportReportsList](ExportApi.md#exportreportslist)
- [exportRulesList](ExportApi.md#exportruleslist)
- [exportSystemsList](ExportApi.md#exportsystemslist)

## Constructors

### constructor

• **new ExportApi**(`configuration?`, `basePath?`, `axios?`): [`ExportApi`](ExportApi.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `configuration?` | [`Configuration`](Configuration.md) | `undefined` |
| `basePath` | `string` | `BASE_PATH` |
| `axios` | `AxiosInstance` | `globalAxios` |

#### Returns

[`ExportApi`](ExportApi.md)

#### Inherited from

BaseAPI.constructor

#### Defined in

[base.ts:51](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/insights/base.ts#L51)

## Properties

### axios

• `Protected` **axios**: `AxiosInstance` = `globalAxios`

#### Inherited from

BaseAPI.axios

#### Defined in

[base.ts:51](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/insights/base.ts#L51)

___

### basePath

• `Protected` **basePath**: `string` = `BASE_PATH`

#### Inherited from

BaseAPI.basePath

#### Defined in

[base.ts:51](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/insights/base.ts#L51)

___

### configuration

• `Protected` **configuration**: `undefined` \| [`Configuration`](Configuration.md)

#### Inherited from

BaseAPI.configuration

#### Defined in

[base.ts:49](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/insights/base.ts#L49)

## Methods

### exportHitsList

▸ **exportHitsList**(`category?`, `displayName?`, `filterSystemProfileSapSidsContains?`, `filterSystemProfileSapSystem?`, `format?`, `groups?`, `hasPlaybook?`, `impact?`, `incident?`, `likelihood?`, `reboot?`, `resRisk?`, `tags?`, `text?`, `totalRisk?`, `updateMethod?`, `uuid?`, `options?`): `Promise`\<`AxiosResponse`\<[`ExportHits`](../interfaces/ExportHits.md)[], `any`\>\>

Get each host and all rules currently affecting it.  We also only present active, non-acked (on an account AND host level) rules.  Inventory data may be requested if Advisor has not seen all the hosts. The accepted content type supplied in the request headers is used to determine the supplied content type.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `category?` | (``1`` \| ``2`` \| ``3`` \| ``4``)[] | Display rules of this category (number) |
| `displayName?` | `string` | Display systems with this text in their display_name |
| `filterSystemProfileSapSidsContains?` | `string`[] | Are there systems which contain these SAP SIDs? |
| `filterSystemProfileSapSystem?` | `boolean` | Is this a SAP system? |
| `format?` | ``"csv"`` \| ``"json"`` |  |
| `groups?` | `string`[] | List of Inventory host group names |
| `hasPlaybook?` | `boolean` | Display rules that have a playbook |
| `impact?` | (``1`` \| ``2`` \| ``3`` \| ``4``)[] | Display rules of this impact level (1..4) |
| `incident?` | `boolean` | Display only rules that cause an incident |
| `likelihood?` | (``1`` \| ``2`` \| ``3`` \| ``4``)[] | Display only rules of this likelihood level (1..4) |
| `reboot?` | `boolean` | Display rules that require a reboot to fix |
| `resRisk?` | (``1`` \| ``2`` \| ``3`` \| ``4``)[] | Display rules with this resolution risk level (1..4) |
| `tags?` | `string`[] | Tags have a namespace, key and value in the form namespace/key&#x3D;value |
| `text?` | `string` | Display rules with this text in their text fields |
| `totalRisk?` | (``1`` \| ``2`` \| ``3`` \| ``4``)[] | Display rules with this total risk level (1..4) |
| `updateMethod?` | (``"dnfyum"`` \| ``"ostree"``)[] | Search for systems with this updater type |
| `uuid?` | `string` | Display a system with this uuid |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<[`ExportHits`](../interfaces/ExportHits.md)[], `any`\>\>

**`Throws`**

**`Memberof`**

ExportApi

#### Defined in

[api.ts:4316](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/insights/api.ts#L4316)

___

### exportReportsList

▸ **exportReportsList**(`category?`, `displayName?`, `filterSystemProfileSapSidsContains?`, `filterSystemProfileSapSystem?`, `groups?`, `hasPlaybook?`, `impact?`, `incident?`, `likelihood?`, `reboot?`, `resRisk?`, `tags?`, `text?`, `totalRisk?`, `updateMethod?`, `uuid?`, `options?`): `Promise`\<`AxiosResponse`\<[`ReportExport`](../interfaces/ReportExport.md)[], `any`\>\>

List the report details of each rule affecting each system.  System and Rule are referred to by ID only, to be correlated with the Rule and System export data.  It\'s like the hits output but much less repetitive.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `category?` | (``1`` \| ``2`` \| ``3`` \| ``4``)[] | Display rules of this category (number) |
| `displayName?` | `string` | Display systems with this text in their display_name |
| `filterSystemProfileSapSidsContains?` | `string`[] | Are there systems which contain these SAP SIDs? |
| `filterSystemProfileSapSystem?` | `boolean` | Is this a SAP system? |
| `groups?` | `string`[] | List of Inventory host group names |
| `hasPlaybook?` | `boolean` | Display rules that have a playbook |
| `impact?` | (``1`` \| ``2`` \| ``3`` \| ``4``)[] | Display rules of this impact level (1..4) |
| `incident?` | `boolean` | Display only rules that cause an incident |
| `likelihood?` | (``1`` \| ``2`` \| ``3`` \| ``4``)[] | Display only rules of this likelihood level (1..4) |
| `reboot?` | `boolean` | Display rules that require a reboot to fix |
| `resRisk?` | (``1`` \| ``2`` \| ``3`` \| ``4``)[] | Display rules with this resolution risk level (1..4) |
| `tags?` | `string`[] | Tags have a namespace, key and value in the form namespace/key&#x3D;value |
| `text?` | `string` | Display rules with this text in their text fields |
| `totalRisk?` | (``1`` \| ``2`` \| ``3`` \| ``4``)[] | Display rules with this total risk level (1..4) |
| `updateMethod?` | (``"dnfyum"`` \| ``"ostree"``)[] | Search for systems with this updater type |
| `uuid?` | `string` | Display a system with this uuid |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<[`ReportExport`](../interfaces/ReportExport.md)[], `any`\>\>

**`Throws`**

**`Memberof`**

ExportApi

#### Defined in

[api.ts:4342](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/insights/api.ts#L4342)

___

### exportRulesList

▸ **exportRulesList**(`category?`, `displayName?`, `filterSystemProfileSapSidsContains?`, `filterSystemProfileSapSystem?`, `groups?`, `hasPlaybook?`, `impact?`, `incident?`, `likelihood?`, `reboot?`, `resRisk?`, `tags?`, `text?`, `totalRisk?`, `updateMethod?`, `uuid?`, `options?`): `Promise`\<`AxiosResponse`\<[`RuleExport`](../interfaces/RuleExport.md)[], `any`\>\>

List the report details of each rule affecting each system.  System and Rule are referred to by ID only, to be correlated with the Rule and System export data.  It\'s like the hits output but much less repetitive.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `category?` | (``1`` \| ``2`` \| ``3`` \| ``4``)[] | Display rules of this category (number) |
| `displayName?` | `string` | Display systems with this text in their display_name |
| `filterSystemProfileSapSidsContains?` | `string`[] | Are there systems which contain these SAP SIDs? |
| `filterSystemProfileSapSystem?` | `boolean` | Is this a SAP system? |
| `groups?` | `string`[] | List of Inventory host group names |
| `hasPlaybook?` | `boolean` | Display rules that have a playbook |
| `impact?` | (``1`` \| ``2`` \| ``3`` \| ``4``)[] | Display rules of this impact level (1..4) |
| `incident?` | `boolean` | Display only rules that cause an incident |
| `likelihood?` | (``1`` \| ``2`` \| ``3`` \| ``4``)[] | Display only rules of this likelihood level (1..4) |
| `reboot?` | `boolean` | Display rules that require a reboot to fix |
| `resRisk?` | (``1`` \| ``2`` \| ``3`` \| ``4``)[] | Display rules with this resolution risk level (1..4) |
| `tags?` | `string`[] | Tags have a namespace, key and value in the form namespace/key&#x3D;value |
| `text?` | `string` | Display rules with this text in their text fields |
| `totalRisk?` | (``1`` \| ``2`` \| ``3`` \| ``4``)[] | Display rules with this total risk level (1..4) |
| `updateMethod?` | (``"dnfyum"`` \| ``"ostree"``)[] | Search for systems with this updater type |
| `uuid?` | `string` | Display a system with this uuid |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<[`RuleExport`](../interfaces/RuleExport.md)[], `any`\>\>

**`Throws`**

**`Memberof`**

ExportApi

#### Defined in

[api.ts:4368](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/insights/api.ts#L4368)

___

### exportSystemsList

▸ **exportSystemsList**(`displayName?`, `format?`, `groups?`, `ruleId?`, `sort?`, `updateMethod?`, `options?`): `Promise`\<`AxiosResponse`\<[`System`](../interfaces/System.md)[], `any`\>\>

List of systems with details and hit counts.  Systems can be sorted and filtered by display name and rule id.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `displayName?` | `string` | Display systems with this text in their display_name |
| `format?` | ``"csv"`` \| ``"json"`` |  |
| `groups?` | `string`[] | List of Inventory host group names |
| `ruleId?` | `string` | Display systems with this text in their rule_id |
| `sort?` | ``"-critical_hits"`` \| ``"-display_name"`` \| ``"-group_name"`` \| ``"-hits"`` \| ``"-important_hits"`` \| ``"-last_seen"`` \| ``"-low_hits"`` \| ``"-moderate_hits"`` \| ``"-rhel_version"`` \| ``"critical_hits"`` \| ``"display_name"`` \| ``"group_name"`` \| ``"hits"`` \| ``"important_hits"`` \| ``"last_seen"`` \| ``"low_hits"`` \| ``"moderate_hits"`` \| ``"rhel_version"`` | Order by this field |
| `updateMethod?` | (``"dnfyum"`` \| ``"ostree"``)[] | Search for systems with this updater type |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<[`System`](../interfaces/System.md)[], `any`\>\>

**`Throws`**

**`Memberof`**

ExportApi

#### Defined in

[api.ts:4384](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/insights/api.ts#L4384)
