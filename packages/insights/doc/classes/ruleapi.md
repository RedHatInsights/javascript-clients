[@redhat-cloud-services/insights-client](../README.md) > [RuleApi](../classes/ruleapi.md)

# Class: RuleApi

RuleApi - object-oriented interface

*__export__*: 

*__class__*: RuleApi

*__extends__*: {BaseAPI}

## Hierarchy

 [BaseAPI](baseapi.md)

**↳ RuleApi**

## Index

### Constructors

* [constructor](ruleapi.md#constructor)

### Properties

* [axios](ruleapi.md#axios)
* [basePath](ruleapi.md#basepath)
* [configuration](ruleapi.md#configuration)

### Methods

* [ruleList](ruleapi.md#rulelist)
* [ruleRead](ruleapi.md#ruleread)
* [ruleSystems](ruleapi.md#rulesystems)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new RuleApi**(configuration?: *[Configuration](configuration.md)*, basePath?: *`string`*, axios?: *`AxiosInstance`*): [RuleApi](ruleapi.md)

*Inherited from [BaseAPI](baseapi.md).[constructor](baseapi.md#constructor)*

*Defined in [api.ts:49](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L49)*

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| `Optional` configuration | [Configuration](configuration.md) | - |
| `Default value` basePath | `string` |  BASE_PATH |
| `Default value` axios | `AxiosInstance` |  globalAxios |

**Returns:** [RuleApi](ruleapi.md)

___

## Properties

<a id="axios"></a>

### `<Protected>` axios

**● axios**: *`AxiosInstance`*

*Inherited from [BaseAPI](baseapi.md).[axios](baseapi.md#axios)*

*Defined in [api.ts:51](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L51)*

___
<a id="basepath"></a>

### `<Protected>` basePath

**● basePath**: *`string`*

*Inherited from [BaseAPI](baseapi.md).[basePath](baseapi.md#basepath)*

*Defined in [api.ts:51](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L51)*

___
<a id="configuration"></a>

### `<Protected>` configuration

**● configuration**: *[Configuration](configuration.md) \| `undefined`*

*Inherited from [BaseAPI](baseapi.md).[configuration](baseapi.md#configuration)*

*Defined in [api.ts:49](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L49)*

___

## Methods

<a id="rulelist"></a>

###  ruleList

▸ **ruleList**(limit?: *`number`*, offset?: *`number`*, category?: *`Array`<`1` \| `2` \| `3` \| `4`>*, hasTag?: *`Array`<`string`>*, impact?: *`Array`<`1` \| `2` \| `3` \| `4`>*, impacting?: *`boolean`*, incident?: *`boolean`*, likelihood?: *`Array`<`1` \| `2` \| `3` \| `4`>*, reportsShown?: *`boolean`*, resRisk?: *`Array`<`1` \| `2` \| `3` \| `4`>*, sort?: *"category" \| "description" \| "impact" \| "impacted_count" \| "likelihood" \| "playbook_count" \| "publish_date" \| "rule_id" \| "total_risk" \| "resolution_risk" \| "-category" \| "-description" \| "-impact" \| "-impacted_count" \| "-likelihood" \| "-playbook_count" \| "-publish_date" \| "-rule_id" \| "-total_risk" \| "-resolution_risk"*, text?: *`string`*, topic?: *`string`*, totalRisk?: *`Array`<`1` \| `2` \| `3` \| `4`>*, options?: *`any`*): `AxiosPromise`<[InlineResponse2003](../interfaces/inlineresponse2003.md)>

*Defined in [api.ts:2731](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L2731)*

List all active rules for this account. If 'acked' is False or not given, then only rules that are not acked will be shown. If acked is set and 'true' as a string or evaluates to a true value, then all rules including those that are acked will be shown.

*__throws__*: {RequiredError}

*__memberof__*: RuleApi

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` limit | `number` |
| `Optional` offset | `number` |
| `Optional` category | `Array`<`1` \| `2` \| `3` \| `4`> |
| `Optional` hasTag | `Array`<`string`> |
| `Optional` impact | `Array`<`1` \| `2` \| `3` \| `4`> |
| `Optional` impacting | `boolean` |
| `Optional` incident | `boolean` |
| `Optional` likelihood | `Array`<`1` \| `2` \| `3` \| `4`> |
| `Optional` reportsShown | `boolean` |
| `Optional` resRisk | `Array`<`1` \| `2` \| `3` \| `4`> |
| `Optional` sort | "category" \| "description" \| "impact" \| "impacted_count" \| "likelihood" \| "playbook_count" \| "publish_date" \| "rule_id" \| "total_risk" \| "resolution_risk" \| "-category" \| "-description" \| "-impact" \| "-impacted_count" \| "-likelihood" \| "-playbook_count" \| "-publish_date" \| "-rule_id" \| "-total_risk" \| "-resolution_risk" |
| `Optional` text | `string` |
| `Optional` topic | `string` |
| `Optional` totalRisk | `Array`<`1` \| `2` \| `3` \| `4`> |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[InlineResponse2003](../interfaces/inlineresponse2003.md)>

___
<a id="ruleread"></a>

###  ruleRead

▸ **ruleRead**(ruleId: *`string`*, options?: *`any`*): `AxiosPromise`<[RuleForAccount](../interfaces/ruleforaccount.md)>

*Defined in [api.ts:2742](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L2742)*

Retrieve a single rule and its associated details.

*__throws__*: {RequiredError}

*__memberof__*: RuleApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| ruleId | `string` |  Rule ID from Insights |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[RuleForAccount](../interfaces/ruleforaccount.md)>

___
<a id="rulesystems"></a>

###  ruleSystems

▸ **ruleSystems**(ruleId: *`string`*, options?: *`any`*): `AxiosPromise`<[SystemsForRule](../interfaces/systemsforrule.md)>

*Defined in [api.ts:2753](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L2753)*

List all systems affected by this rule.

*__throws__*: {RequiredError}

*__memberof__*: RuleApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| ruleId | `string` |  Rule ID from Insights |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[SystemsForRule](../interfaces/systemsforrule.md)>

___

