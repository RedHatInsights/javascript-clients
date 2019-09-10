[@redhat-cloud-services/insights-client](../README.md) > [TopicApi](../classes/topicapi.md)

# Class: TopicApi

TopicApi - object-oriented interface

*__export__*: 

*__class__*: TopicApi

*__extends__*: {BaseAPI}

## Hierarchy

 [BaseAPI](baseapi.md)

**↳ TopicApi**

## Index

### Constructors

* [constructor](topicapi.md#constructor)

### Properties

* [axios](topicapi.md#axios)
* [basePath](topicapi.md#basepath)
* [configuration](topicapi.md#configuration)

### Methods

* [topicList](topicapi.md#topiclist)
* [topicRead](topicapi.md#topicread)
* [topicRulesRead](topicapi.md#topicrulesread)
* [topicRulesWithTags](topicapi.md#topicruleswithtags)
* [topicSystems](topicapi.md#topicsystems)
* [topicTagsRead](topicapi.md#topictagsread)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new TopicApi**(configuration?: *[Configuration](configuration.md)*, basePath?: *`string`*, axios?: *`AxiosInstance`*): [TopicApi](topicapi.md)

*Inherited from [BaseAPI](baseapi.md).[constructor](baseapi.md#constructor)*

*Defined in [api.ts:49](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L49)*

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| `Optional` configuration | [Configuration](configuration.md) | - |
| `Default value` basePath | `string` |  BASE_PATH |
| `Default value` axios | `AxiosInstance` |  globalAxios |

**Returns:** [TopicApi](topicapi.md)

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

<a id="topiclist"></a>

###  topicList

▸ **topicList**(options?: *`any`*): `AxiosPromise`<[TopicWithRules](../interfaces/topicwithrules.md)[]>

*Defined in [api.ts:2862](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L2862)*

Rules have topics, set by Insights administrators. This is a view of the topics available, along with the rules and systems to which they apply.

*__throws__*: {RequiredError}

*__memberof__*: TopicApi

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[TopicWithRules](../interfaces/topicwithrules.md)[]>

___
<a id="topicread"></a>

###  topicRead

▸ **topicRead**(slug: *`string`*, options?: *`any`*): `AxiosPromise`<[TopicWithRules](../interfaces/topicwithrules.md)>

*Defined in [api.ts:2873](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L2873)*

Rules have topics, set by Insights administrators. This is a view of the topics available, along with the rules and systems to which they apply.

*__throws__*: {RequiredError}

*__memberof__*: TopicApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| slug | `string` |  Rule topic slug |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[TopicWithRules](../interfaces/topicwithrules.md)>

___
<a id="topicrulesread"></a>

###  topicRulesRead

▸ **topicRulesRead**(slug: *`string`*, options?: *`any`*): `AxiosPromise`<[Rule](../interfaces/rule.md)[]>

*Defined in [api.ts:2884](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L2884)*

View, add to or delete from the rules in this topic

*__throws__*: {RequiredError}

*__memberof__*: TopicApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| slug | `string` |  Rule topic slug |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[Rule](../interfaces/rule.md)[]>

___
<a id="topicruleswithtags"></a>

###  topicRulesWithTags

▸ **topicRulesWithTags**(slug: *`string`*, options?: *`any`*): `AxiosPromise`<[Rule](../interfaces/rule.md)[]>

*Defined in [api.ts:2895](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L2895)*

Lists the available rules that share a tag with this topic. Some of these may also be in the given topic - can we show that

*__throws__*: {RequiredError}

*__memberof__*: TopicApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| slug | `string` |  Rule topic slug |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[Rule](../interfaces/rule.md)[]>

___
<a id="topicsystems"></a>

###  topicSystems

▸ **topicSystems**(slug: *`string`*, options?: *`any`*): `AxiosPromise`<[SystemsForRule](../interfaces/systemsforrule.md)>

*Defined in [api.ts:2906](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L2906)*

List all systems affected by this rule topic.

*__throws__*: {RequiredError}

*__memberof__*: TopicApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| slug | `string` |  Rule topic slug |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[SystemsForRule](../interfaces/systemsforrule.md)>

___
<a id="topictagsread"></a>

###  topicTagsRead

▸ **topicTagsRead**(slug: *`string`*, options?: *`any`*): `AxiosPromise`<[Tag](../interfaces/tag.md)[]>

*Defined in [api.ts:2917](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L2917)*

View, add to or delete from the tags in a topic.

*__throws__*: {RequiredError}

*__memberof__*: TopicApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| slug | `string` |  Rule topic slug |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[Tag](../interfaces/tag.md)[]>

___

