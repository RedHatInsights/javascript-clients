[@redhat-cloud-services/insights-client](../README.md) / [Exports](../modules.md) / RatingApi

# Class: RatingApi

RatingApi - object-oriented interface

**`Export`**

RatingApi

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

• **new RatingApi**(`configuration?`, `basePath?`, `axios?`): [`RatingApi`](RatingApi.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `configuration?` | [`Configuration`](Configuration.md) | `undefined` |
| `basePath` | `string` | `BASE_PATH` |
| `axios` | `AxiosInstance` | `globalAxios` |

#### Returns

[`RatingApi`](RatingApi.md)

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

### ratingAllRatingsList

▸ **ratingAllRatingsList**(`limit?`, `offset?`, `options?`): `Promise`\<`AxiosResponse`\<[`PaginatedAllRuleRatingsList`](../interfaces/PaginatedAllRuleRatingsList.md), `any`\>\>

Show all ratings.  Available only to internal users.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `limit?` | `number` | Number of results to return per page. |
| `offset?` | `number` | The initial index from which to return the results. |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<[`PaginatedAllRuleRatingsList`](../interfaces/PaginatedAllRuleRatingsList.md), `any`\>\>

**`Throws`**

**`Memberof`**

RatingApi

#### Defined in

[api.ts:6437](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/insights/api.ts#L6437)

___

### ratingCreate

▸ **ratingCreate**(`ruleRating`, `options?`): `Promise`\<`AxiosResponse`\<[`RuleRating`](../interfaces/RuleRating.md), `any`\>\>

Add or update a rating for a rule, by rule ID.  Return the new rating.  Any previous rating for this rule by this user is amended to the current value.  This does not attempt to delete a rating by this user of this rule if the rating is zero.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ruleRating` | [`RuleRating`](../interfaces/RuleRating.md) |  |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<[`RuleRating`](../interfaces/RuleRating.md), `any`\>\>

**`Throws`**

**`Memberof`**

RatingApi

#### Defined in

[api.ts:6448](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/insights/api.ts#L6448)

___

### ratingList

▸ **ratingList**(`limit?`, `offset?`, `options?`): `Promise`\<`AxiosResponse`\<[`PaginatedRuleRatingList`](../interfaces/PaginatedRuleRatingList.md), `any`\>\>

List all rules rated by the current user  Only the current user\'s ratings are listed here.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `limit?` | `number` | Number of results to return per page. |
| `offset?` | `number` | The initial index from which to return the results. |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<[`PaginatedRuleRatingList`](../interfaces/PaginatedRuleRatingList.md), `any`\>\>

**`Throws`**

**`Memberof`**

RatingApi

#### Defined in

[api.ts:6460](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/insights/api.ts#L6460)

___

### ratingRetrieve

▸ **ratingRetrieve**(`rule`, `options?`): `Promise`\<`AxiosResponse`\<[`RuleRating`](../interfaces/RuleRating.md), `any`\>\>

Retrieve the ratings for a single rule, by Insights Rule ID

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `rule` | `string` |  |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<[`RuleRating`](../interfaces/RuleRating.md), `any`\>\>

**`Summary`**

Retrieve the ratings for a single rule

**`Throws`**

**`Memberof`**

RatingApi

#### Defined in

[api.ts:6472](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/insights/api.ts#L6472)

___

### ratingStatsList

▸ **ratingStatsList**(`limit?`, `offset?`, `options?`): `Promise`\<`AxiosResponse`\<[`PaginatedRuleRatingStatsList`](../interfaces/PaginatedRuleRatingStatsList.md), `any`\>\>

Summarise the ratings for a rule.  This summarises the statistics for each rule.  Available only to internal users.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `limit?` | `number` | Number of results to return per page. |
| `offset?` | `number` | The initial index from which to return the results. |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<[`PaginatedRuleRatingStatsList`](../interfaces/PaginatedRuleRatingStatsList.md), `any`\>\>

**`Throws`**

**`Memberof`**

RatingApi

#### Defined in

[api.ts:6484](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/insights/api.ts#L6484)
