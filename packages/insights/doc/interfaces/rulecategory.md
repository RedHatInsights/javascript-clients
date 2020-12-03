[@redhat-cloud-services/insights-client](../README.md) › [Globals](../globals.md) › [RuleCategory](rulecategory.md)

# Interface: RuleCategory

The category for a rule.  In Advisor this is one of \'Security\', \'Availability\', \'Stability\' or \'Performance\'.  We don\'t use a Choices field because we want other projects to use this and choose their own categories.

**`export`** 

**`interface`** RuleCategory

## Hierarchy

* **RuleCategory**

## Index

### Properties

* [id](rulecategory.md#optional-id)
* [name](rulecategory.md#name)

## Properties

### `Optional` id

• **id**? : *number*

*Defined in [packages/insights/api.ts:52](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L52)*

**`memberof`** RuleCategory

___

###  name

• **name**: *string*

*Defined in [packages/insights/api.ts:58](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L58)*

**`memberof`** RuleCategory
