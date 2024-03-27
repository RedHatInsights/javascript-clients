[@redhat-cloud-services/insights-client](../README.md) / [Exports](../modules.md) / AllRuleRatings

# Interface: AllRuleRatings

This is only available to internal users and lists ratings from all users.

**`Export`**

**`Interface`**

AllRuleRatings

## Table of contents

### Properties

- [account](AllRuleRatings.md#account)
- [created\_at](AllRuleRatings.md#created_at)
- [org\_id](AllRuleRatings.md#org_id)
- [rated\_by](AllRuleRatings.md#rated_by)
- [rating](AllRuleRatings.md#rating)
- [rule](AllRuleRatings.md#rule)
- [updated\_at](AllRuleRatings.md#updated_at)

## Properties

### account

• `Optional` **account**: ``null`` \| `string`

**`Memberof`**

AllRuleRatings

#### Defined in

[api.ts:200](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L200)

___

### created\_at

• **created\_at**: `string`

**`Memberof`**

AllRuleRatings

#### Defined in

[api.ts:182](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L182)

___

### org\_id

• **org\_id**: `string`

**`Memberof`**

AllRuleRatings

#### Defined in

[api.ts:206](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L206)

___

### rated\_by

• `Optional` **rated\_by**: `string`

The username that rated this rule

**`Memberof`**

AllRuleRatings

#### Defined in

[api.ts:194](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L194)

___

### rating

• **rating**: [`AllRuleRatingsRatingEnum`](../enums/AllRuleRatingsRatingEnum.md)

* `-1` - Dislike * `0` - Neutral * `1` - Like

**`Memberof`**

AllRuleRatings

#### Defined in

[api.ts:176](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L176)

___

### rule

• **rule**: `string`

Rule ID from Insights

**`Memberof`**

AllRuleRatings

#### Defined in

[api.ts:170](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L170)

___

### updated\_at

• **updated\_at**: `string`

**`Memberof`**

AllRuleRatings

#### Defined in

[api.ts:188](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L188)
