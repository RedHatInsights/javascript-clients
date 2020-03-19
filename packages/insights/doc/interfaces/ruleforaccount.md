[@redhat-cloud-services/insights-client](../README.md) › [Globals](../globals.md) › [RuleForAccount](ruleforaccount.md)

# Interface: RuleForAccount

**`export`** 

**`interface`** RuleForAccount

## Hierarchy

* **RuleForAccount**

## Index

### Properties

* [active](ruleforaccount.md#optional-active)
* [category](ruleforaccount.md#category)
* [createdAt](ruleforaccount.md#optional-createdat)
* [deletedAt](ruleforaccount.md#optional-deletedat)
* [description](ruleforaccount.md#description)
* [generic](ruleforaccount.md#generic)
* [hostsAckedCount](ruleforaccount.md#optional-hostsackedcount)
* [impact](ruleforaccount.md#impact)
* [impactedSystemsCount](ruleforaccount.md#optional-impactedsystemscount)
* [likelihood](ruleforaccount.md#optional-likelihood)
* [moreInfo](ruleforaccount.md#optional-moreinfo)
* [nodeId](ruleforaccount.md#optional-nodeid)
* [playbookCount](ruleforaccount.md#optional-playbookcount)
* [publishDate](ruleforaccount.md#optional-publishdate)
* [rating](ruleforaccount.md#optional-rating)
* [reason](ruleforaccount.md#reason)
* [rebootRequired](ruleforaccount.md#optional-rebootrequired)
* [reportsShown](ruleforaccount.md#optional-reportsshown)
* [resolutionSet](ruleforaccount.md#resolutionset)
* [ruleId](ruleforaccount.md#ruleid)
* [ruleset](ruleforaccount.md#ruleset)
* [summary](ruleforaccount.md#summary)
* [tags](ruleforaccount.md#optional-tags)
* [totalRisk](ruleforaccount.md#optional-totalrisk)
* [updatedAt](ruleforaccount.md#optional-updatedat)

## Properties

### `Optional` active

• **active**? : *boolean*

*Defined in [api.ts:819](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L819)*

**`type`** {boolean}

**`memberof`** RuleForAccount

___

###  category

• **category**: *[RuleCategory](rulecategory.md)*

*Defined in [api.ts:825](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L825)*

**`type`** {RuleCategory}

**`memberof`** RuleForAccount

___

### `Optional` createdAt

• **createdAt**? : *Date*

*Defined in [api.ts:789](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L789)*

**`type`** {Date}

**`memberof`** RuleForAccount

___

### `Optional` deletedAt

• **deletedAt**? : *Date*

*Defined in [api.ts:801](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L801)*

**`type`** {Date}

**`memberof`** RuleForAccount

___

###  description

• **description**: *string*

*Defined in [api.ts:813](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L813)*

**`type`** {string}

**`memberof`** RuleForAccount

___

###  generic

• **generic**: *string*

*Defined in [api.ts:879](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L879)*

**`type`** {string}

**`memberof`** RuleForAccount

___

### `Optional` hostsAckedCount

• **hostsAckedCount**? : *number*

*Defined in [api.ts:921](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L921)*

**`type`** {number}

**`memberof`** RuleForAccount

___

###  impact

• **impact**: *[RuleImpact](ruleimpact.md)*

*Defined in [api.ts:831](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L831)*

**`type`** {RuleImpact}

**`memberof`** RuleForAccount

___

### `Optional` impactedSystemsCount

• **impactedSystemsCount**? : *number*

*Defined in [api.ts:897](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L897)*

**`type`** {number}

**`memberof`** RuleForAccount

___

### `Optional` likelihood

• **likelihood**? : *number*

*Defined in [api.ts:837](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L837)*

**`type`** {number}

**`memberof`** RuleForAccount

___

### `Optional` moreInfo

• **moreInfo**? : *string*

*Defined in [api.ts:891](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L891)*

**`type`** {string}

**`memberof`** RuleForAccount

___

### `Optional` nodeId

• **nodeId**? : *string*

*Defined in [api.ts:843](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L843)*

KCS solution number

**`type`** {string}

**`memberof`** RuleForAccount

___

### `Optional` playbookCount

• **playbookCount**? : *number*

*Defined in [api.ts:855](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L855)*

**`type`** {number}

**`memberof`** RuleForAccount

___

### `Optional` publishDate

• **publishDate**? : *Date | null*

*Defined in [api.ts:867](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L867)*

**`type`** {Date}

**`memberof`** RuleForAccount

___

### `Optional` rating

• **rating**? : *number*

*Defined in [api.ts:927](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L927)*

**`type`** {number}

**`memberof`** RuleForAccount

___

###  reason

• **reason**: *string*

*Defined in [api.ts:885](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L885)*

**`type`** {string}

**`memberof`** RuleForAccount

___

### `Optional` rebootRequired

• **rebootRequired**? : *boolean*

*Defined in [api.ts:861](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L861)*

**`type`** {boolean}

**`memberof`** RuleForAccount

___

### `Optional` reportsShown

• **reportsShown**? : *boolean*

*Defined in [api.ts:903](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L903)*

**`type`** {boolean}

**`memberof`** RuleForAccount

___

###  resolutionSet

• **resolutionSet**: *Array‹[Resolution](resolution.md)›*

*Defined in [api.ts:909](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L909)*

**`type`** {Array<Resolution>}

**`memberof`** RuleForAccount

___

###  ruleId

• **ruleId**: *string*

*Defined in [api.ts:783](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L783)*

Rule ID from Insights

**`type`** {string}

**`memberof`** RuleForAccount

___

###  ruleset

• **ruleset**: *[RuleSet](ruleset.md)*

*Defined in [api.ts:807](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L807)*

**`type`** {RuleSet}

**`memberof`** RuleForAccount

___

###  summary

• **summary**: *string*

*Defined in [api.ts:873](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L873)*

**`type`** {string}

**`memberof`** RuleForAccount

___

### `Optional` tags

• **tags**? : *string*

*Defined in [api.ts:849](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L849)*

**`type`** {string}

**`memberof`** RuleForAccount

___

### `Optional` totalRisk

• **totalRisk**? : *number*

*Defined in [api.ts:915](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L915)*

**`type`** {number}

**`memberof`** RuleForAccount

___

### `Optional` updatedAt

• **updatedAt**? : *Date*

*Defined in [api.ts:795](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L795)*

**`type`** {Date}

**`memberof`** RuleForAccount
