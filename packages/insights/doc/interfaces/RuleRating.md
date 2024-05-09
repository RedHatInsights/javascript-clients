[@redhat-cloud-services/insights-client](../README.md) / [Exports](../modules.md) / RuleRating

# Interface: RuleRating

Rule ratings list the rating (-1, 0 or +1) for one or more rules.  The rule is listed by its Insights Rule ID.

**`Export`**

RuleRating

## Table of contents

### Properties

- [rating](RuleRating.md#rating)
- [rule](RuleRating.md#rule)

## Properties

### rating

• **rating**: [`RuleRatingRatingEnum`](../enums/RuleRatingRatingEnum.md)

* `-1` - Dislike * `0` - Neutral * `1` - Like

**`Memberof`**

RuleRating

#### Defined in

[api.ts:1790](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/insights/api.ts#L1790)

___

### rule

• **rule**: `string`

Rule ID from Insights

**`Memberof`**

RuleRating

#### Defined in

[api.ts:1784](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/insights/api.ts#L1784)
