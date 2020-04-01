[@redhat-cloud-services/insights-client](../README.md) › [Globals](../globals.md) › [Rule](rule.md)

# Interface: Rule

**`export`** 

**`interface`** Rule

## Hierarchy

* **Rule**

## Index

### Properties

* [active](rule.md#optional-active)
* [category](rule.md#category)
* [createdAt](rule.md#optional-createdat)
* [deletedAt](rule.md#optional-deletedat)
* [description](rule.md#description)
* [generic](rule.md#generic)
* [impact](rule.md#impact)
* [likelihood](rule.md#optional-likelihood)
* [moreInfo](rule.md#optional-moreinfo)
* [nodeId](rule.md#optional-nodeid)
* [publishDate](rule.md#optional-publishdate)
* [reason](rule.md#reason)
* [rebootRequired](rule.md#optional-rebootrequired)
* [resolutionSet](rule.md#resolutionset)
* [ruleId](rule.md#ruleid)
* [ruleset](rule.md#ruleset)
* [summary](rule.md#summary)
* [tags](rule.md#optional-tags)
* [totalRisk](rule.md#optional-totalrisk)
* [updatedAt](rule.md#optional-updatedat)

## Properties

### `Optional` active

• **active**? : *boolean*

*Defined in [api.ts:685](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L685)*

**`type`** {boolean}

**`memberof`** Rule

___

###  category

• **category**: *[RuleCategory](rulecategory.md)*

*Defined in [api.ts:691](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L691)*

**`type`** {RuleCategory}

**`memberof`** Rule

___

### `Optional` createdAt

• **createdAt**? : *Date*

*Defined in [api.ts:655](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L655)*

**`type`** {Date}

**`memberof`** Rule

___

### `Optional` deletedAt

• **deletedAt**? : *Date*

*Defined in [api.ts:667](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L667)*

**`type`** {Date}

**`memberof`** Rule

___

###  description

• **description**: *string*

*Defined in [api.ts:679](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L679)*

**`type`** {string}

**`memberof`** Rule

___

###  generic

• **generic**: *string*

*Defined in [api.ts:739](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L739)*

**`type`** {string}

**`memberof`** Rule

___

###  impact

• **impact**: *[RuleImpact](ruleimpact.md)*

*Defined in [api.ts:697](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L697)*

**`type`** {RuleImpact}

**`memberof`** Rule

___

### `Optional` likelihood

• **likelihood**? : *number*

*Defined in [api.ts:703](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L703)*

**`type`** {number}

**`memberof`** Rule

___

### `Optional` moreInfo

• **moreInfo**? : *string*

*Defined in [api.ts:751](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L751)*

**`type`** {string}

**`memberof`** Rule

___

### `Optional` nodeId

• **nodeId**? : *string*

*Defined in [api.ts:709](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L709)*

KCS solution number

**`type`** {string}

**`memberof`** Rule

___

### `Optional` publishDate

• **publishDate**? : *Date | null*

*Defined in [api.ts:727](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L727)*

**`type`** {Date}

**`memberof`** Rule

___

###  reason

• **reason**: *string*

*Defined in [api.ts:745](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L745)*

**`type`** {string}

**`memberof`** Rule

___

### `Optional` rebootRequired

• **rebootRequired**? : *boolean*

*Defined in [api.ts:721](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L721)*

**`type`** {boolean}

**`memberof`** Rule

___

###  resolutionSet

• **resolutionSet**: *Array‹[Resolution](resolution.md)›*

*Defined in [api.ts:757](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L757)*

**`type`** {Array<Resolution>}

**`memberof`** Rule

___

###  ruleId

• **ruleId**: *string*

*Defined in [api.ts:649](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L649)*

Rule ID from Insights

**`type`** {string}

**`memberof`** Rule

___

###  ruleset

• **ruleset**: *[RuleSet](ruleset.md)*

*Defined in [api.ts:673](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L673)*

**`type`** {RuleSet}

**`memberof`** Rule

___

###  summary

• **summary**: *string*

*Defined in [api.ts:733](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L733)*

**`type`** {string}

**`memberof`** Rule

___

### `Optional` tags

• **tags**? : *string*

*Defined in [api.ts:715](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L715)*

**`type`** {string}

**`memberof`** Rule

___

### `Optional` totalRisk

• **totalRisk**? : *number*

*Defined in [api.ts:763](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L763)*

**`type`** {number}

**`memberof`** Rule

___

### `Optional` updatedAt

• **updatedAt**? : *Date*

*Defined in [api.ts:661](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L661)*

**`type`** {Date}

**`memberof`** Rule
