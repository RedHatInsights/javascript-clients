[@redhat-cloud-services/insights-client](../README.md) › [Globals](../globals.md) › [RatingApi](ratingapi.md)

# Class: RatingApi

RatingApi - object-oriented interface

**`export`** 

**`class`** RatingApi

**`extends`** {BaseAPI}

## Hierarchy

* [BaseAPI](baseapi.md)

  ↳ **RatingApi**

## Index

### Constructors

* [constructor](ratingapi.md#constructor)

### Properties

* [axios](ratingapi.md#protected-axios)
* [basePath](ratingapi.md#protected-basepath)
* [configuration](ratingapi.md#protected-configuration)

### Methods

* [ratingCreate](ratingapi.md#ratingcreate)
* [ratingList](ratingapi.md#ratinglist)
* [ratingRead](ratingapi.md#ratingread)

## Constructors

###  constructor

\+ **new RatingApi**(`configuration?`: [Configuration](configuration.md), `basePath`: string, `axios`: AxiosInstance): *[RatingApi](ratingapi.md)*

*Inherited from [BaseAPI](baseapi.md).[constructor](baseapi.md#constructor)*

*Defined in [api.ts:49](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L49)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`configuration?` | [Configuration](configuration.md) | - |
`basePath` | string |  BASE_PATH |
`axios` | AxiosInstance |  globalAxios |

**Returns:** *[RatingApi](ratingapi.md)*

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

###  ratingCreate

▸ **ratingCreate**(`ruleRating`: [RuleRating](../modules/rulerating.md), `options?`: any): *AxiosPromise‹[RuleRating](../modules/rulerating.md)›*

*Defined in [api.ts:3080](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L3080)*

Return the new rating.  Any previous rating for this rule by this user is amended to the current value.  This does not attempt to delete a rating by this user of this rule if the rating is zero.

**`summary`** Add or update a rating for a rule, by rule ID.

**`throws`** {RequiredError}

**`memberof`** RatingApi

**Parameters:**

Name | Type |
------ | ------ |
`ruleRating` | [RuleRating](../modules/rulerating.md) |
`options?` | any |

**Returns:** *AxiosPromise‹[RuleRating](../modules/rulerating.md)›*

___

###  ratingList

▸ **ratingList**(`limit?`: number, `offset?`: number, `options?`: any): *AxiosPromise‹[InlineResponse2003](../interfaces/inlineresponse2003.md)›*

*Defined in [api.ts:3093](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L3093)*

Only the current user's ratings are listed here.

**`summary`** List all rules rated by the current user

**`throws`** {RequiredError}

**`memberof`** RatingApi

**Parameters:**

Name | Type |
------ | ------ |
`limit?` | number |
`offset?` | number |
`options?` | any |

**Returns:** *AxiosPromise‹[InlineResponse2003](../interfaces/inlineresponse2003.md)›*

___

###  ratingRead

▸ **ratingRead**(`rule`: string, `options?`: any): *AxiosPromise‹[RuleRating](../modules/rulerating.md)›*

*Defined in [api.ts:3105](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L3105)*

Retrieve the ratings for a single rule, by Insights Rule ID

**`summary`** Retrieve the ratings for a single rule

**`throws`** {RequiredError}

**`memberof`** RatingApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`rule` | string | Insights Rule ID |
`options?` | any | - |

**Returns:** *AxiosPromise‹[RuleRating](../modules/rulerating.md)›*
