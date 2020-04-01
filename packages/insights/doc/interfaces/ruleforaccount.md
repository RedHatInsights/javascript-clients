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

*Defined in [api.ts:833](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L833)*

**`type`** {boolean}

**`memberof`** RuleForAccount

___

###  category

• **category**: *[RuleCategory](rulecategory.md)*

*Defined in [api.ts:839](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L839)*

**`type`** {RuleCategory}

**`memberof`** RuleForAccount

___

### `Optional` createdAt

• **createdAt**? : *Date*

*Defined in [api.ts:803](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L803)*

**`type`** {Date}

**`memberof`** RuleForAccount

___

### `Optional` deletedAt

• **deletedAt**? : *Date*

*Defined in [api.ts:815](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L815)*

**`type`** {Date}

**`memberof`** RuleForAccount

___

###  description

• **description**: *string*

*Defined in [api.ts:827](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L827)*

**`type`** {string}

**`memberof`** RuleForAccount

___

###  generic

• **generic**: *string*

*Defined in [api.ts:893](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L893)*

**`type`** {string}

**`memberof`** RuleForAccount

___

### `Optional` hostsAckedCount

• **hostsAckedCount**? : *number*

*Defined in [api.ts:935](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L935)*

**`type`** {number}

**`memberof`** RuleForAccount

___

###  impact

• **impact**: *[RuleImpact](ruleimpact.md)*

*Defined in [api.ts:845](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L845)*

**`type`** {RuleImpact}

**`memberof`** RuleForAccount

___

### `Optional` impactedSystemsCount

• **impactedSystemsCount**? : *number*

*Defined in [api.ts:911](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L911)*

**`type`** {number}

**`memberof`** RuleForAccount

___

### `Optional` likelihood

• **likelihood**? : *number*

*Defined in [api.ts:851](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L851)*

**`type`** {number}

**`memberof`** RuleForAccount

___

### `Optional` moreInfo

• **moreInfo**? : *string*

*Defined in [api.ts:905](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L905)*

**`type`** {string}

**`memberof`** RuleForAccount

___

### `Optional` nodeId

• **nodeId**? : *string*

*Defined in [api.ts:857](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L857)*

KCS solution number

**`type`** {string}

**`memberof`** RuleForAccount

___

### `Optional` playbookCount

• **playbookCount**? : *number*

*Defined in [api.ts:869](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L869)*

**`type`** {number}

**`memberof`** RuleForAccount

___

### `Optional` publishDate

• **publishDate**? : *Date | null*

*Defined in [api.ts:881](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L881)*

**`type`** {Date}

**`memberof`** RuleForAccount

___

### `Optional` rating

• **rating**? : *number*

*Defined in [api.ts:941](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L941)*

**`type`** {number}

**`memberof`** RuleForAccount

___

###  reason

• **reason**: *string*

*Defined in [api.ts:899](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L899)*

**`type`** {string}

**`memberof`** RuleForAccount

___

### `Optional` rebootRequired

• **rebootRequired**? : *boolean*

*Defined in [api.ts:875](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L875)*

**`type`** {boolean}

**`memberof`** RuleForAccount

___

### `Optional` reportsShown

• **reportsShown**? : *boolean*

*Defined in [api.ts:917](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L917)*

**`type`** {boolean}

**`memberof`** RuleForAccount

___

###  resolutionSet

• **resolutionSet**: *Array‹[Resolution](resolution.md)›*

*Defined in [api.ts:923](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L923)*

**`type`** {Array<Resolution>}

**`memberof`** RuleForAccount

___

###  ruleId

• **ruleId**: *string*

*Defined in [api.ts:797](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L797)*

Rule ID from Insights

**`type`** {string}

**`memberof`** RuleForAccount

___

###  ruleset

• **ruleset**: *[RuleSet](ruleset.md)*

*Defined in [api.ts:821](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L821)*

**`type`** {RuleSet}

**`memberof`** RuleForAccount

___

###  summary

• **summary**: *string*

*Defined in [api.ts:887](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L887)*

**`type`** {string}

**`memberof`** RuleForAccount

___

### `Optional` tags

• **tags**? : *string*

*Defined in [api.ts:863](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L863)*

**`type`** {string}

**`memberof`** RuleForAccount

___

### `Optional` totalRisk

• **totalRisk**? : *number*

*Defined in [api.ts:929](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L929)*

**`type`** {number}

**`memberof`** RuleForAccount

___

### `Optional` updatedAt

• **updatedAt**? : *Date*

*Defined in [api.ts:809](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L809)*

**`type`** {Date}

**`memberof`** RuleForAccount
