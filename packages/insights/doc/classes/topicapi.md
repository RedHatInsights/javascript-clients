[@redhat-cloud-services/insights-client](../README.md) › [Globals](../globals.md) › [TopicApi](topicapi.md)

# Class: TopicApi

TopicApi - object-oriented interface

**`export`** 

**`class`** TopicApi

**`extends`** {BaseAPI}

## Hierarchy

* [BaseAPI](baseapi.md)

  ↳ **TopicApi**

## Index

### Constructors

* [constructor](topicapi.md#constructor)

### Properties

* [axios](topicapi.md#protected-axios)
* [basePath](topicapi.md#protected-basepath)
* [configuration](topicapi.md#protected-configuration)

### Methods

* [topicList](topicapi.md#topiclist)
* [topicRead](topicapi.md#topicread)
* [topicRulesWithTag](topicapi.md#topicruleswithtag)
* [topicSystems](topicapi.md#topicsystems)

## Constructors

###  constructor

\+ **new TopicApi**(`configuration?`: [Configuration](configuration.md), `basePath`: string, `axios`: AxiosInstance): *[TopicApi](topicapi.md)*

*Inherited from [BaseAPI](baseapi.md).[constructor](baseapi.md#constructor)*

*Defined in [api.ts:49](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L49)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`configuration?` | [Configuration](configuration.md) | - |
`basePath` | string |  BASE_PATH |
`axios` | AxiosInstance |  globalAxios |

**Returns:** *[TopicApi](topicapi.md)*

## Properties

### `Protected` axios

• **axios**: *AxiosInstance*

*Inherited from [BaseAPI](baseapi.md).[axios](baseapi.md#protected-axios)*

*Defined in [api.ts:51](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L51)*

___

### `Protected` basePath

• **basePath**: *string*

*Inherited from [BaseAPI](baseapi.md).[basePath](baseapi.md#protected-basepath)*

*Defined in [api.ts:51](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L51)*

___

### `Protected` configuration

• **configuration**: *[Configuration](configuration.md) | undefined*

*Inherited from [BaseAPI](baseapi.md).[configuration](baseapi.md#protected-configuration)*

*Defined in [api.ts:49](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L49)*

## Methods

###  topicList

▸ **topicList**(`showDisabled?`: boolean, `tags?`: Array‹string›, `options?`: any): *AxiosPromise‹[Topic](../interfaces/topic.md)[]›*

*Defined in [api.ts:5635](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L5635)*

Normally this only shows enabled topics, but if the 'show_disabled' parameter is set to True then this will show disabled topics as well.

**`summary`** List the rule topics and their impacted systems counts.

**`throws`** {RequiredError}

**`memberof`** TopicApi

**Parameters:**

Name | Type |
------ | ------ |
`showDisabled?` | boolean |
`tags?` | Array‹string› |
`options?` | any |

**Returns:** *AxiosPromise‹[Topic](../interfaces/topic.md)[]›*

___

###  topicRead

▸ **topicRead**(`slug`: string, `options?`: any): *AxiosPromise‹[Topic](../interfaces/topic.md)›*

*Defined in [api.ts:5647](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L5647)*

This also lists the topic's impacted systems count.

**`summary`** Retrieve a single topic by slug.

**`throws`** {RequiredError}

**`memberof`** TopicApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`slug` | string | Rule topic slug |
`options?` | any | - |

**Returns:** *AxiosPromise‹[Topic](../interfaces/topic.md)›*

___

###  topicRulesWithTag

▸ **topicRulesWithTag**(`slug`: string, `options?`: any): *AxiosPromise‹[Rule](../interfaces/rule.md)[]›*

*Defined in [api.ts:5659](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L5659)*

This shows the rule information for rules with this tag.

**`summary`** Lists the available rules that have this tag.

**`throws`** {RequiredError}

**`memberof`** TopicApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`slug` | string | Rule topic slug |
`options?` | any | - |

**Returns:** *AxiosPromise‹[Rule](../interfaces/rule.md)[]›*

___

###  topicSystems

▸ **topicSystems**(`slug`: string, `tags?`: Array‹string›, `options?`: any): *AxiosPromise‹[SystemsForRule](../interfaces/systemsforrule.md)›*

*Defined in [api.ts:5672](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L5672)*

Systems are just listed by their UUID.

**`summary`** List all systems affected by this rule topic.

**`throws`** {RequiredError}

**`memberof`** TopicApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`slug` | string | Rule topic slug |
`tags?` | Array‹string› | - |
`options?` | any | - |

**Returns:** *AxiosPromise‹[SystemsForRule](../interfaces/systemsforrule.md)›*
