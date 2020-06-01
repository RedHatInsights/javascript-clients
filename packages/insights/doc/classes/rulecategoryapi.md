[@redhat-cloud-services/insights-client](../README.md) › [Globals](../globals.md) › [RulecategoryApi](rulecategoryapi.md)

# Class: RulecategoryApi

RulecategoryApi - object-oriented interface

**`export`** 

## Hierarchy

* [BaseAPI](baseapi.md)

  ↳ **RulecategoryApi**

## Index

### Constructors

* [constructor](rulecategoryapi.md#constructor)

### Properties

* [axios](rulecategoryapi.md#protected-axios)
* [basePath](rulecategoryapi.md#protected-basepath)
* [configuration](rulecategoryapi.md#protected-configuration)

### Methods

* [rulecategoryList](rulecategoryapi.md#rulecategorylist)
* [rulecategoryRead](rulecategoryapi.md#rulecategoryread)

## Constructors

###  constructor

\+ **new RulecategoryApi**(`configuration?`: [Configuration](configuration.md), `basePath`: string, `axios`: AxiosInstance): *[RulecategoryApi](rulecategoryapi.md)*

*Inherited from [BaseAPI](baseapi.md).[constructor](baseapi.md#constructor)*

*Defined in [packages/insights/base.ts:49](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/base.ts#L49)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`configuration?` | [Configuration](configuration.md) | - |
`basePath` | string | BASE_PATH |
`axios` | AxiosInstance | globalAxios |

**Returns:** *[RulecategoryApi](rulecategoryapi.md)*

## Properties

### `Protected` axios

• **axios**: *AxiosInstance*

*Inherited from [BaseAPI](baseapi.md).[axios](baseapi.md#protected-axios)*

*Defined in [packages/insights/base.ts:51](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/base.ts#L51)*

___

### `Protected` basePath

• **basePath**: *string*

*Inherited from [BaseAPI](baseapi.md).[basePath](baseapi.md#protected-basepath)*

*Defined in [packages/insights/base.ts:51](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/base.ts#L51)*

___

### `Protected` configuration

• **configuration**: *[Configuration](configuration.md) | undefined*

*Inherited from [BaseAPI](baseapi.md).[configuration](baseapi.md#protected-configuration)*

*Defined in [packages/insights/base.ts:49](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/base.ts#L49)*

## Methods

###  rulecategoryList

▸ **rulecategoryList**(`options?`: any): *AxiosPromise‹[RuleCategory](../interfaces/rulecategory.md)[]›*

*Defined in [packages/insights/api.ts:519](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L519)*

Categories are listed in decreasing order of importance.

**`summary`** Rules are divided into categories, the usual being Availability, Stability, Security and Performance.

**`throws`** {RequiredError}

**`memberof`** RulecategoryApi

**Parameters:**

Name | Type |
------ | ------ |
`options?` | any |

**Returns:** *AxiosPromise‹[RuleCategory](../interfaces/rulecategory.md)[]›*

___

###  rulecategoryRead

▸ **rulecategoryRead**(`id`: number, `options?`: any): *AxiosPromise‹[RuleCategory](../interfaces/rulecategory.md)›*

*Defined in [packages/insights/api.ts:531](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L531)*

Categories are listed in decreasing order of importance.

**`summary`** Rules are divided into categories, the usual being Availability, Stability, Security and Performance.

**`throws`** {RequiredError}

**`memberof`** RulecategoryApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | number | A unique integer value identifying this rule category. |
`options?` | any | - |

**Returns:** *AxiosPromise‹[RuleCategory](../interfaces/rulecategory.md)›*
