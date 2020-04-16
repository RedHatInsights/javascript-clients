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
* [created_at](ruleforaccount.md#optional-created_at)
* [deleted_at](ruleforaccount.md#optional-deleted_at)
* [description](ruleforaccount.md#description)
* [generic](ruleforaccount.md#generic)
* [hosts_acked_count](ruleforaccount.md#optional-hosts_acked_count)
* [impact](ruleforaccount.md#impact)
* [impacted_systems_count](ruleforaccount.md#optional-impacted_systems_count)
* [likelihood](ruleforaccount.md#optional-likelihood)
* [more_info](ruleforaccount.md#optional-more_info)
* [node_id](ruleforaccount.md#optional-node_id)
* [playbook_count](ruleforaccount.md#optional-playbook_count)
* [publish_date](ruleforaccount.md#optional-publish_date)
* [rating](ruleforaccount.md#optional-rating)
* [reason](ruleforaccount.md#reason)
* [reboot_required](ruleforaccount.md#optional-reboot_required)
* [reports_shown](ruleforaccount.md#optional-reports_shown)
* [resolution_set](ruleforaccount.md#resolution_set)
* [rule_id](ruleforaccount.md#rule_id)
* [ruleset](ruleforaccount.md#ruleset)
* [summary](ruleforaccount.md#summary)
* [tags](ruleforaccount.md#optional-tags)
* [total_risk](ruleforaccount.md#optional-total_risk)
* [updated_at](ruleforaccount.md#optional-updated_at)

## Properties

### `Optional` active

• **active**? : *boolean*

*Defined in [packages/insights/api.ts:759](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L759)*

**`memberof`** RuleForAccount

___

###  category

• **category**: *[RuleCategory](rulecategory.md)*

*Defined in [packages/insights/api.ts:765](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L765)*

**`memberof`** RuleForAccount

___

### `Optional` created_at

• **created_at**? : *string*

*Defined in [packages/insights/api.ts:729](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L729)*

**`memberof`** RuleForAccount

___

### `Optional` deleted_at

• **deleted_at**? : *string*

*Defined in [packages/insights/api.ts:741](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L741)*

**`memberof`** RuleForAccount

___

###  description

• **description**: *string*

*Defined in [packages/insights/api.ts:753](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L753)*

**`memberof`** RuleForAccount

___

###  generic

• **generic**: *string*

*Defined in [packages/insights/api.ts:819](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L819)*

**`memberof`** RuleForAccount

___

### `Optional` hosts_acked_count

• **hosts_acked_count**? : *number*

*Defined in [packages/insights/api.ts:861](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L861)*

**`memberof`** RuleForAccount

___

###  impact

• **impact**: *[RuleImpact](ruleimpact.md)*

*Defined in [packages/insights/api.ts:771](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L771)*

**`memberof`** RuleForAccount

___

### `Optional` impacted_systems_count

• **impacted_systems_count**? : *number*

*Defined in [packages/insights/api.ts:837](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L837)*

**`memberof`** RuleForAccount

___

### `Optional` likelihood

• **likelihood**? : *number*

*Defined in [packages/insights/api.ts:777](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L777)*

**`memberof`** RuleForAccount

___

### `Optional` more_info

• **more_info**? : *string*

*Defined in [packages/insights/api.ts:831](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L831)*

**`memberof`** RuleForAccount

___

### `Optional` node_id

• **node_id**? : *string*

*Defined in [packages/insights/api.ts:783](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L783)*

KCS solution number

**`memberof`** RuleForAccount

___

### `Optional` playbook_count

• **playbook_count**? : *number*

*Defined in [packages/insights/api.ts:795](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L795)*

**`memberof`** RuleForAccount

___

### `Optional` publish_date

• **publish_date**? : *string | null*

*Defined in [packages/insights/api.ts:807](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L807)*

**`memberof`** RuleForAccount

___

### `Optional` rating

• **rating**? : *number*

*Defined in [packages/insights/api.ts:867](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L867)*

**`memberof`** RuleForAccount

___

###  reason

• **reason**: *string*

*Defined in [packages/insights/api.ts:825](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L825)*

**`memberof`** RuleForAccount

___

### `Optional` reboot_required

• **reboot_required**? : *boolean*

*Defined in [packages/insights/api.ts:801](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L801)*

**`memberof`** RuleForAccount

___

### `Optional` reports_shown

• **reports_shown**? : *boolean*

*Defined in [packages/insights/api.ts:843](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L843)*

**`memberof`** RuleForAccount

___

###  resolution_set

• **resolution_set**: *Array‹[Resolution](resolution.md)›*

*Defined in [packages/insights/api.ts:849](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L849)*

**`memberof`** RuleForAccount

___

###  rule_id

• **rule_id**: *string*

*Defined in [packages/insights/api.ts:723](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L723)*

Rule ID from Insights

**`memberof`** RuleForAccount

___

###  ruleset

• **ruleset**: *[RuleSet](ruleset.md)*

*Defined in [packages/insights/api.ts:747](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L747)*

**`memberof`** RuleForAccount

___

###  summary

• **summary**: *string*

*Defined in [packages/insights/api.ts:813](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L813)*

**`memberof`** RuleForAccount

___

### `Optional` tags

• **tags**? : *string*

*Defined in [packages/insights/api.ts:789](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L789)*

**`memberof`** RuleForAccount

___

### `Optional` total_risk

• **total_risk**? : *number*

*Defined in [packages/insights/api.ts:855](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L855)*

**`memberof`** RuleForAccount

___

### `Optional` updated_at

• **updated_at**? : *string*

*Defined in [packages/insights/api.ts:735](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L735)*

**`memberof`** RuleForAccount
