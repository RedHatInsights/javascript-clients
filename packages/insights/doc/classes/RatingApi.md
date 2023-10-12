[@redhat-cloud-services/insights-client](../README.md) / [Exports](../modules.md) / RatingApi

# Class: RatingApi

RatingApi - object-oriented interface

**`Export`**

## Hierarchy

- `BaseAPI`

  ↳ **`RatingApi`**

## Table of contents

### Constructors

- [constructor](RatingApi.md#constructor)

### Properties

- [axios](RatingApi.md#axios)
- [basePath](RatingApi.md#basepath)
- [configuration](RatingApi.md#configuration)

### Methods

- [ratingAllRatingsList](RatingApi.md#ratingallratingslist)
- [ratingCreate](RatingApi.md#ratingcreate)
- [ratingList](RatingApi.md#ratinglist)
- [ratingRetrieve](RatingApi.md#ratingretrieve)
- [ratingStatsList](RatingApi.md#ratingstatslist)

## Constructors

### constructor

• **new RatingApi**(`configuration?`, `basePath?`, `axios?`)

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

### ratingAllRatingsList

▸ **ratingAllRatingsList**(`limit?`, `offset?`, `options?`): `Promise`<`AxiosResponse`<[`PaginatedAllRuleRatingsList`](../interfaces/PaginatedAllRuleRatingsList.md)\>\>

Show all ratings.  Available only to internal users.

**`Throws`**

**`Memberof`**

RatingApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `limit?` | `number` | Number of results to return per page. |
| `offset?` | `number` | The initial index from which to return the results. |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`PaginatedAllRuleRatingsList`](../interfaces/PaginatedAllRuleRatingsList.md)\>\>

#### Defined in

[api.ts:6277](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L6277)

___

### ratingCreate

▸ **ratingCreate**(`ruleRating`, `options?`): `Promise`<`AxiosResponse`<[`RuleRating`](../interfaces/RuleRating.md)\>\>

Add or update a rating for a rule, by rule ID.  Return the new rating.  Any previous rating for this rule by this user is amended to the current value.  This does not attempt to delete a rating by this user of this rule if the rating is zero.

**`Throws`**

**`Memberof`**

RatingApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ruleRating` | [`RuleRating`](../interfaces/RuleRating.md) |  |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`RuleRating`](../interfaces/RuleRating.md)\>\>

#### Defined in

[api.ts:6288](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L6288)

___

### ratingList

▸ **ratingList**(`limit?`, `offset?`, `options?`): `Promise`<`AxiosResponse`<[`PaginatedRuleRatingList`](../interfaces/PaginatedRuleRatingList.md)\>\>

List all rules rated by the current user  Only the current user\'s ratings are listed here.

**`Throws`**

**`Memberof`**

RatingApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `limit?` | `number` | Number of results to return per page. |
| `offset?` | `number` | The initial index from which to return the results. |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`PaginatedRuleRatingList`](../interfaces/PaginatedRuleRatingList.md)\>\>

#### Defined in

[api.ts:6300](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L6300)

___

### ratingRetrieve

▸ **ratingRetrieve**(`rule`, `options?`): `Promise`<`AxiosResponse`<[`RuleRating`](../interfaces/RuleRating.md)\>\>

Retrieve the ratings for a single rule, by Insights Rule ID

**`Summary`**

Retrieve the ratings for a single rule

**`Throws`**

**`Memberof`**

RatingApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `rule` | `string` |  |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`RuleRating`](../interfaces/RuleRating.md)\>\>

#### Defined in

[api.ts:6312](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L6312)

___

### ratingStatsList

▸ **ratingStatsList**(`limit?`, `offset?`, `options?`): `Promise`<`AxiosResponse`<[`PaginatedRuleRatingStatsList`](../interfaces/PaginatedRuleRatingStatsList.md)\>\>

Summarise the ratings for a rule.  This summarises the statistics for each rule.  Available only to internal users.

**`Throws`**

**`Memberof`**

RatingApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `limit?` | `number` | Number of results to return per page. |
| `offset?` | `number` | The initial index from which to return the results. |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`PaginatedRuleRatingStatsList`](../interfaces/PaginatedRuleRatingStatsList.md)\>\>

#### Defined in

[api.ts:6324](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L6324)
