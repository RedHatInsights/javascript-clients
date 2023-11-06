[@redhat-cloud-services/insights-client](../README.md) / [Exports](../modules.md) / RuleApi

# Class: RuleApi

RuleApi - object-oriented interface

**`Export`**

## Hierarchy

- `BaseAPI`

  ↳ **`RuleApi`**

## Table of contents

### Constructors

- [constructor](RuleApi.md#constructor)

### Properties

- [axios](RuleApi.md#axios)
- [basePath](RuleApi.md#basepath)
- [configuration](RuleApi.md#configuration)

### Methods

- [ruleAckHostsCreate](RuleApi.md#ruleackhostscreate)
- [ruleJustificationsList](RuleApi.md#rulejustificationslist)
- [ruleList](RuleApi.md#rulelist)
- [ruleRetrieve](RuleApi.md#ruleretrieve)
- [ruleStatsRetrieve](RuleApi.md#rulestatsretrieve)
- [ruleSystemsDetailList](RuleApi.md#rulesystemsdetaillist)
- [ruleSystemsRetrieve](RuleApi.md#rulesystemsretrieve)
- [ruleUnackHostsCreate](RuleApi.md#ruleunackhostscreate)

## Constructors

### constructor

• **new RuleApi**(`configuration?`, `basePath?`, `axios?`)

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

• `Protected` **configuration**: [`Configuration`](Configuration.md)

#### Inherited from

BaseAPI.configuration

#### Defined in

[base.ts:49](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/base.ts#L49)

## Methods

### ruleAckHostsCreate

▸ **ruleAckHostsCreate**(`ruleId`, `multiHostAck`, `options?`): `Promise`<`AxiosResponse`<[`MultiAckResponse`](../interfaces/MultiAckResponse.md), `any`\>\>

Add acknowledgements for one or more hosts to this rule.  Host acknowledgements will be added to this rule in this account for the system UUIDs supplied.  The justification supplied will be given for all host acks created.  Any existing host acknowledgements for a host on this rule will be updated.  The count of created hosts acknowledgements, and the list of systems now impacted by this rule, will be returned.  Account-wide acks are unaffected.

**`Throws`**

**`Memberof`**

RuleApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ruleId` | `string` |  |
| `multiHostAck` | [`MultiHostAck`](../interfaces/MultiHostAck.md) |  |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`MultiAckResponse`](../interfaces/MultiAckResponse.md), `any`\>\>

#### Defined in

[api.ts:7180](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L7180)

___

### ruleJustificationsList

▸ **ruleJustificationsList**(`ruleId`, `limit?`, `offset?`, `options?`): `Promise`<`AxiosResponse`<[`PaginatedJustificationCountList`](../interfaces/PaginatedJustificationCountList.md), `any`\>\>

List all justifications given for disabling this rule.  This is an **internal-only** view that allows us to provide feedback on why rules are disabled by our customers.  It lists the justifications given in both account-wide acks and host-specific acks of a rule.

**`Throws`**

**`Memberof`**

RuleApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ruleId` | `string` |  |
| `limit?` | `number` | Number of results to return per page. |
| `offset?` | `number` | The initial index from which to return the results. |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`PaginatedJustificationCountList`](../interfaces/PaginatedJustificationCountList.md), `any`\>\>

#### Defined in

[api.ts:7193](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L7193)

___

### ruleList

▸ **ruleList**(`category?`, `filterSystemProfileSapSidsContains?`, `filterSystemProfileSapSystem?`, `groups?`, `hasPlaybook?`, `hasTag?`, `impact?`, `impacting?`, `incident?`, `likelihood?`, `limit?`, `offset?`, `pathway?`, `reboot?`, `reportsShown?`, `resRisk?`, `ruleStatus?`, `sort?`, `tags?`, `text?`, `topic?`, `totalRisk?`, `options?`): `Promise`<`AxiosResponse`<[`PaginatedRuleForAccountList`](../interfaces/PaginatedRuleForAccountList.md), `any`\>\>

List all active rules for this account.  If \'acked\' is False or not given, then only rules that are not acked will be shown.  If acked is set and \'true\' as a string or evaluates to a true value, then all rules including those that are acked will be shown.

**`Throws`**

**`Memberof`**

RuleApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `category?` | (``2`` \| ``1`` \| ``3`` \| ``4``)[] | Display rules of this category (number) |
| `filterSystemProfileSapSidsContains?` | `string`[] | Are there systems which contain these SAP SIDs? |
| `filterSystemProfileSapSystem?` | `boolean` | Is this a SAP system? |
| `groups?` | `string`[] | List of Inventory host group names |
| `hasPlaybook?` | `boolean` | Display rules that have a playbook |
| `hasTag?` | `string`[] | Display rules that have (one or more) tags |
| `impact?` | (``2`` \| ``1`` \| ``3`` \| ``4``)[] | Display rules of this impact level (1..4) |
| `impacting?` | `boolean` | Display only rules that are impacting systems currently |
| `incident?` | `boolean` | Display only rules that cause an incident |
| `likelihood?` | (``2`` \| ``1`` \| ``3`` \| ``4``)[] | Display only rules of this likelihood level (1..4) |
| `limit?` | `number` | Number of results to return per page. |
| `offset?` | `number` | The initial index from which to return the results. |
| `pathway?` | `string` | Display rules of this Pathway |
| `reboot?` | `boolean` | Display rules that require a reboot to fix |
| `reportsShown?` | `boolean` | Display rules where reports are shown or not |
| `resRisk?` | (``2`` \| ``1`` \| ``3`` \| ``4``)[] | Display rules with this resolution risk level (1..4) |
| `ruleStatus?` | ``"all"`` \| ``"disabled"`` \| ``"enabled"`` \| ``"rhdisabled"`` | Display rules which are enabled, disabled (acked) by user, or disabled (acked) by Red Hat |
| `sort?` | (``"description"`` \| ``"-category"`` \| ``"-description"`` \| ``"-impact"`` \| ``"-impacted_count"`` \| ``"-likelihood"`` \| ``"-playbook_count"`` \| ``"-publish_date"`` \| ``"-resolution_risk"`` \| ``"-rule_id"`` \| ``"-total_risk"`` \| ``"category"`` \| ``"impact"`` \| ``"impacted_count"`` \| ``"likelihood"`` \| ``"playbook_count"`` \| ``"publish_date"`` \| ``"resolution_risk"`` \| ``"rule_id"`` \| ``"total_risk"``)[] | Order by this field |
| `tags?` | `string`[] | Tags have a namespace, key and value in the form namespace/key&#x3D;value |
| `text?` | `string` | Display rules with this text in their text fields |
| `topic?` | `string` | Display rules in this topic (slug) |
| `totalRisk?` | (``2`` \| ``1`` \| ``3`` \| ``4``)[] | Display rules with this total risk level (1..4) |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`PaginatedRuleForAccountList`](../interfaces/PaginatedRuleForAccountList.md), `any`\>\>

#### Defined in

[api.ts:7225](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L7225)

___

### ruleRetrieve

▸ **ruleRetrieve**(`ruleId`, `groups?`, `tags?`, `options?`): `Promise`<`AxiosResponse`<[`RuleForAccount`](../interfaces/RuleForAccount.md), `any`\>\>

Retrieve a single rule and its associated details.  This includes the account-relevant details such as number of impacted systems and host acknowledgements.

**`Throws`**

**`Memberof`**

RuleApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ruleId` | `string` |  |
| `groups?` | `string`[] | List of Inventory host group names |
| `tags?` | `string`[] | Tags have a namespace, key and value in the form namespace/key&#x3D;value |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`RuleForAccount`](../interfaces/RuleForAccount.md), `any`\>\>

#### Defined in

[api.ts:7238](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L7238)

___

### ruleStatsRetrieve

▸ **ruleStatsRetrieve**(`ruleId`, `options?`): `Promise`<`AxiosResponse`<[`RuleUsageStats`](../interfaces/RuleUsageStats.md), `any`\>\>

Display usage and impact statistics for this rule.  For internal use only.  This allows rule developers to see the number of systems and accounts impacted by a rule.

**`Throws`**

**`Memberof`**

RuleApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ruleId` | `string` |  |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`RuleUsageStats`](../interfaces/RuleUsageStats.md), `any`\>\>

#### Defined in

[api.ts:7249](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L7249)

___

### ruleSystemsDetailList

▸ **ruleSystemsDetailList**(`ruleId`, `groups?`, `limit?`, `name?`, `offset?`, `rhelVersion?`, `sort?`, `tags?`, `options?`): `Promise`<`AxiosResponse`<[`PaginatedSystemsDetailList`](../interfaces/PaginatedSystemsDetailList.md), `any`\>\>

List systems affected by this rule with additional information about each system  All systems owned by the user\'s account, with a current upload reporting the given rule, are listed in a paginated format.  Additional information includes hit counts and upload/stale timestamps.

**`Throws`**

**`Memberof`**

RuleApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ruleId` | `string` |  |
| `groups?` | `string`[] | List of Inventory host group names |
| `limit?` | `number` | Number of results to return per page. |
| `name?` | `string` | Search for systems that include this in their display name |
| `offset?` | `number` | The initial index from which to return the results. |
| `rhelVersion?` | (``"6.0"`` \| ``"6.1"`` \| ``"6.10"`` \| ``"6.2"`` \| ``"6.3"`` \| ``"6.4"`` \| ``"6.5"`` \| ``"6.6"`` \| ``"6.7"`` \| ``"6.8"`` \| ``"6.9"`` \| ``"7.0"`` \| ``"7.1"`` \| ``"7.10"`` \| ``"7.2"`` \| ``"7.3"`` \| ``"7.4"`` \| ``"7.5"`` \| ``"7.6"`` \| ``"7.7"`` \| ``"7.8"`` \| ``"7.9"`` \| ``"8.0"`` \| ``"8.1"`` \| ``"8.2"`` \| ``"8.3"`` \| ``"8.4"`` \| ``"8.5"`` \| ``"8.6"`` \| ``"8.7"`` \| ``"8.8"`` \| ``"8.9"`` \| ``"9.0"`` \| ``"9.1"`` \| ``"9.2"`` \| ``"9.3"``)[] | Display only systems with these versions of RHEL |
| `sort?` | ``"-critical_hits"`` \| ``"-display_name"`` \| ``"-hits"`` \| ``"-important_hits"`` \| ``"-last_seen"`` \| ``"-low_hits"`` \| ``"-moderate_hits"`` \| ``"-rhel_version"`` \| ``"critical_hits"`` \| ``"display_name"`` \| ``"hits"`` \| ``"important_hits"`` \| ``"last_seen"`` \| ``"low_hits"`` \| ``"moderate_hits"`` \| ``"rhel_version"`` \| ``"-impacted_date"`` \| ``"impacted_date"`` | Order by this field |
| `tags?` | `string`[] | Tags have a namespace, key and value in the form namespace/key&#x3D;value |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`PaginatedSystemsDetailList`](../interfaces/PaginatedSystemsDetailList.md), `any`\>\>

#### Defined in

[api.ts:7267](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L7267)

___

### ruleSystemsRetrieve

▸ **ruleSystemsRetrieve**(`ruleId`, `format?`, `groups?`, `name?`, `rhelVersion?`, `sort?`, `tags?`, `options?`): `Promise`<`AxiosResponse`<[`SystemsForRule`](../interfaces/SystemsForRule.md), `any`\>\>

List all systems affected by this rule.  All systems owned by the user\'s account, with a current upload reporting the given rule, are listed.  Systems are simply listed by Insights Inventory UUID.

**`Throws`**

**`Memberof`**

RuleApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ruleId` | `string` |  |
| `format?` | ``"json"`` \| ``"csv"`` |  |
| `groups?` | `string`[] | List of Inventory host group names |
| `name?` | `string` | Search for systems that include this in their display name |
| `rhelVersion?` | (``"6.0"`` \| ``"6.1"`` \| ``"6.10"`` \| ``"6.2"`` \| ``"6.3"`` \| ``"6.4"`` \| ``"6.5"`` \| ``"6.6"`` \| ``"6.7"`` \| ``"6.8"`` \| ``"6.9"`` \| ``"7.0"`` \| ``"7.1"`` \| ``"7.10"`` \| ``"7.2"`` \| ``"7.3"`` \| ``"7.4"`` \| ``"7.5"`` \| ``"7.6"`` \| ``"7.7"`` \| ``"7.8"`` \| ``"7.9"`` \| ``"8.0"`` \| ``"8.1"`` \| ``"8.2"`` \| ``"8.3"`` \| ``"8.4"`` \| ``"8.5"`` \| ``"8.6"`` \| ``"8.7"`` \| ``"8.8"`` \| ``"8.9"`` \| ``"9.0"`` \| ``"9.1"`` \| ``"9.2"`` \| ``"9.3"``)[] | Display only systems with these versions of RHEL |
| `sort?` | (``"-display_name"`` \| ``"-last_seen"`` \| ``"display_name"`` \| ``"last_seen"`` \| ``"-stale_at"`` \| ``"-system_uuid"`` \| ``"-updated"`` \| ``"stale_at"`` \| ``"system_uuid"`` \| ``"updated"``)[] | Order by this field |
| `tags?` | `string`[] | Tags have a namespace, key and value in the form namespace/key&#x3D;value |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`SystemsForRule`](../interfaces/SystemsForRule.md), `any`\>\>

#### Defined in

[api.ts:7284](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L7284)

___

### ruleUnackHostsCreate

▸ **ruleUnackHostsCreate**(`ruleId`, `multiHostUnAck`, `options?`): `Promise`<`AxiosResponse`<[`MultiAckResponse`](../interfaces/MultiAckResponse.md), `any`\>\>

Delete acknowledgements for one or more hosts to this rule.  Any host acknowledgements for this rule in this account for the given system are deleted.  Hosts that do not have an acknowledgement for this rule in this account are ignored.  The count of deleted host acknowledgements, and the list of hosts now impacted by this rule, will be returned.  Account-wide acks are unaffected.

**`Throws`**

**`Memberof`**

RuleApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ruleId` | `string` |  |
| `multiHostUnAck` | [`MultiHostUnAck`](../interfaces/MultiHostUnAck.md) |  |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`MultiAckResponse`](../interfaces/MultiAckResponse.md), `any`\>\>

#### Defined in

[api.ts:7296](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L7296)
