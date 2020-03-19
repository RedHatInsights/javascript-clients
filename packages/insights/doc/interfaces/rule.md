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

*Defined in [api.ts:671](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L671)*

**`type`** {boolean}

**`memberof`** Rule

___

###  category

• **category**: *[RuleCategory](rulecategory.md)*

*Defined in [api.ts:677](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L677)*

**`type`** {RuleCategory}

**`memberof`** Rule

___

### `Optional` createdAt

• **createdAt**? : *Date*

*Defined in [api.ts:641](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L641)*

**`type`** {Date}

**`memberof`** Rule

___

### `Optional` deletedAt

• **deletedAt**? : *Date*

*Defined in [api.ts:653](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L653)*

**`type`** {Date}

**`memberof`** Rule

___

###  description

• **description**: *string*

*Defined in [api.ts:665](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L665)*

**`type`** {string}

**`memberof`** Rule

___

###  generic

• **generic**: *string*

*Defined in [api.ts:725](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L725)*

**`type`** {string}

**`memberof`** Rule

___

###  impact

• **impact**: *[RuleImpact](ruleimpact.md)*

*Defined in [api.ts:683](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L683)*

**`type`** {RuleImpact}

**`memberof`** Rule

___

### `Optional` likelihood

• **likelihood**? : *number*

*Defined in [api.ts:689](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L689)*

**`type`** {number}

**`memberof`** Rule

___

### `Optional` moreInfo

• **moreInfo**? : *string*

*Defined in [api.ts:737](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L737)*

**`type`** {string}

**`memberof`** Rule

___

### `Optional` nodeId

• **nodeId**? : *string*

*Defined in [api.ts:695](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L695)*

KCS solution number

**`type`** {string}

**`memberof`** Rule

___

### `Optional` publishDate

• **publishDate**? : *Date | null*

*Defined in [api.ts:713](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L713)*

**`type`** {Date}

**`memberof`** Rule

___

###  reason

• **reason**: *string*

*Defined in [api.ts:731](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L731)*

**`type`** {string}

**`memberof`** Rule

___

### `Optional` rebootRequired

• **rebootRequired**? : *boolean*

*Defined in [api.ts:707](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L707)*

**`type`** {boolean}

**`memberof`** Rule

___

###  resolutionSet

• **resolutionSet**: *Array‹[Resolution](resolution.md)›*

*Defined in [api.ts:743](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L743)*

**`type`** {Array<Resolution>}

**`memberof`** Rule

___

###  ruleId

• **ruleId**: *string*

*Defined in [api.ts:635](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L635)*

Rule ID from Insights

**`type`** {string}

**`memberof`** Rule

___

###  ruleset

• **ruleset**: *[RuleSet](ruleset.md)*

*Defined in [api.ts:659](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L659)*

**`type`** {RuleSet}

**`memberof`** Rule

___

###  summary

• **summary**: *string*

*Defined in [api.ts:719](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L719)*

**`type`** {string}

**`memberof`** Rule

___

### `Optional` tags

• **tags**? : *string*

*Defined in [api.ts:701](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L701)*

**`type`** {string}

**`memberof`** Rule

___

### `Optional` totalRisk

• **totalRisk**? : *number*

*Defined in [api.ts:749](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L749)*

**`type`** {number}

**`memberof`** Rule

___

### `Optional` updatedAt

• **updatedAt**? : *Date*

*Defined in [api.ts:647](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L647)*

**`type`** {Date}

**`memberof`** Rule
