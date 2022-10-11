[@redhat-cloud-services/policies-client](../README.md) › [Globals](../globals.md) › [Policy](policy.md)

# Interface: Policy

**`export`** 

**`interface`** Policy

## Hierarchy

* **Policy**

## Index

### Properties

* [actions](policy.md#optional-actions)
* [conditions](policy.md#conditions)
* [ctime](policy.md#optional-ctime)
* [description](policy.md#optional-description)
* [id](policy.md#optional-id)
* [isEnabled](policy.md#optional-isenabled)
* [lastTriggered](policy.md#optional-lasttriggered)
* [mtime](policy.md#optional-mtime)
* [name](policy.md#name)

## Properties

### `Optional` actions

• **actions**? : *string*

Defined in packages/policies/api.ts:207

String describing actions separated by \';\' when the policy is evaluated to true.Allowed values is \'notification\'

**`memberof`** Policy

___

###  conditions

• **conditions**: *string*

Defined in packages/policies/api.ts:201

Condition string.

**`memberof`** Policy

___

### `Optional` ctime

• **ctime**? : *string*

Defined in packages/policies/api.ts:219

Create time in a form like \'2020-01-24 12:19:56.718\', output only

**`memberof`** Policy

___

### `Optional` description

• **description**? : *string*

Defined in packages/policies/api.ts:189

A short description of the policy.

**`memberof`** Policy

___

### `Optional` id

• **id**? : *string*

Defined in packages/policies/api.ts:177

**`memberof`** Policy

___

### `Optional` isEnabled

• **isEnabled**? : *boolean*

Defined in packages/policies/api.ts:195

**`memberof`** Policy

___

### `Optional` lastTriggered

• **lastTriggered**? : *number*

Defined in packages/policies/api.ts:225

**`memberof`** Policy

___

### `Optional` mtime

• **mtime**? : *string*

Defined in packages/policies/api.ts:213

Last update time in a form like \'2020-01-24 12:19:56.718\', output only

**`memberof`** Policy

___

###  name

• **name**: *string*

Defined in packages/policies/api.ts:183

Name of the rule. Must be unique per customer organization.

**`memberof`** Policy
