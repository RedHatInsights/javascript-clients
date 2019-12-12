[@redhat-cloud-services/insights-client](../README.md) > [RatingApi](../classes/ratingapi.md)

# Class: RatingApi

RatingApi - object-oriented interface

*__export__*: 

*__class__*: RatingApi

*__extends__*: {BaseAPI}

## Hierarchy

 [BaseAPI](baseapi.md)

**↳ RatingApi**

## Index

### Constructors

* [constructor](ratingapi.md#constructor)

### Properties

* [axios](ratingapi.md#axios)
* [basePath](ratingapi.md#basepath)
* [configuration](ratingapi.md#configuration)

### Methods

* [ratingCreate](ratingapi.md#ratingcreate)
* [ratingList](ratingapi.md#ratinglist)
* [ratingRead](ratingapi.md#ratingread)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new RatingApi**(configuration?: *[Configuration](configuration.md)*, basePath?: *`string`*, axios?: *`AxiosInstance`*): [RatingApi](ratingapi.md)

*Inherited from [BaseAPI](baseapi.md).[constructor](baseapi.md#constructor)*

*Defined in [api.ts:49](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L49)*

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| `Optional` configuration | [Configuration](configuration.md) | - |
| `Default value` basePath | `string` |  BASE_PATH |
| `Default value` axios | `AxiosInstance` |  globalAxios |

**Returns:** [RatingApi](ratingapi.md)

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

<a id="ratingcreate"></a>

###  ratingCreate

▸ **ratingCreate**(ruleRating: *[RuleRating](../modules/rulerating.md)*, options?: *`any`*): `AxiosPromise`<[RuleRating](../modules/rulerating.md)>

*Defined in [api.ts:2746](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L2746)*

Return the new rating. Any previous rating for this rule by this user is amended to the current value. This does not attempt to delete a rating by this user of this rule if the rating is zero.

*__summary__*: Add or update a rating for a rule, by rule ID.

*__throws__*: {RequiredError}

*__memberof__*: RatingApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| ruleRating | [RuleRating](../modules/rulerating.md) |  \- |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[RuleRating](../modules/rulerating.md)>

___
<a id="ratinglist"></a>

###  ratingList

▸ **ratingList**(limit?: *`number`*, offset?: *`number`*, options?: *`any`*): `AxiosPromise`<[InlineResponse2003](../interfaces/inlineresponse2003.md)>

*Defined in [api.ts:2759](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L2759)*

Only the current user's ratings are listed here.

*__summary__*: List all rules rated by the current user

*__throws__*: {RequiredError}

*__memberof__*: RatingApi

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` limit | `number` |
| `Optional` offset | `number` |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[InlineResponse2003](../interfaces/inlineresponse2003.md)>

___
<a id="ratingread"></a>

###  ratingRead

▸ **ratingRead**(rule: *`string`*, options?: *`any`*): `AxiosPromise`<[RuleRating](../modules/rulerating.md)>

*Defined in [api.ts:2770](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L2770)*

Rules can be rated +1, 0 or -1; the rating is stored per (user, rule) unique pair. Rule ratings are edited simply by POSTing a new rating, which overwrites any previous rating by that user for that rule.

*__throws__*: {RequiredError}

*__memberof__*: RatingApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| rule | `string` |  Insights Rule ID |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[RuleRating](../modules/rulerating.md)>

___

