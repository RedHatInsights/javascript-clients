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
* [topicRulesWithTag](topicapi.md#topicruleswithtag)
* [topicSystems](topicapi.md#topicsystems)

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

▸ **topicList**(showDisabled?: *`boolean`*, options?: *`any`*): `AxiosPromise`<[Topic](../interfaces/topic.md)[]>

*Defined in [api.ts:4173](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L4173)*

Normally this only shows enabled topics, but if the 'show\_disabled' parameter is set to True then this will show disabled topics as well.

*__summary__*: List the rule topics and their impacted systems counts.

*__throws__*: {RequiredError}

*__memberof__*: TopicApi

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` showDisabled | `boolean` |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[Topic](../interfaces/topic.md)[]>

___
<a id="topicread"></a>

###  topicRead

▸ **topicRead**(slug: *`string`*, options?: *`any`*): `AxiosPromise`<[Topic](../interfaces/topic.md)>

*Defined in [api.ts:4185](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L4185)*

This also lists the topic's impacted systems count.

*__summary__*: Retrieve a single topic by slug.

*__throws__*: {RequiredError}

*__memberof__*: TopicApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| slug | `string` |  Rule topic slug |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[Topic](../interfaces/topic.md)>

___
<a id="topicruleswithtag"></a>

###  topicRulesWithTag

▸ **topicRulesWithTag**(slug: *`string`*, options?: *`any`*): `AxiosPromise`<[Rule](../interfaces/rule.md)[]>

*Defined in [api.ts:4196](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L4196)*

Lists the available rules that have this tag.

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

*Defined in [api.ts:4208](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L4208)*

Systems are just listed by their UUID.

*__summary__*: List all systems affected by this rule topic.

*__throws__*: {RequiredError}

*__memberof__*: TopicApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| slug | `string` |  Rule topic slug |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[SystemsForRule](../interfaces/systemsforrule.md)>

___

