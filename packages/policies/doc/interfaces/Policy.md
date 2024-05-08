[@redhat-cloud-services/policies-client](../README.md) / [Exports](../modules.md) / Policy

# Interface: Policy

**`Export`**

Policy

## Table of contents

### Properties

- [actions](Policy.md#actions)
- [conditions](Policy.md#conditions)
- [ctime](Policy.md#ctime)
- [description](Policy.md#description)
- [id](Policy.md#id)
- [isEnabled](Policy.md#isenabled)
- [lastTriggered](Policy.md#lasttriggered)
- [mtime](Policy.md#mtime)
- [name](Policy.md#name)

## Properties

### actions

• `Optional` **actions**: `string`

String describing actions separated by \';\' when the policy is evaluated to true.Allowed values is \'notification\'

**`Memberof`**

Policy

#### Defined in

[api.ts:207](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/policies/api.ts#L207)

___

### conditions

• **conditions**: `string`

Condition string.

**`Memberof`**

Policy

#### Defined in

[api.ts:201](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/policies/api.ts#L201)

___

### ctime

• `Optional` **ctime**: `string`

Create time in a form like \'2020-01-24 12:19:56.718\', output only

**`Memberof`**

Policy

#### Defined in

[api.ts:219](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/policies/api.ts#L219)

___

### description

• `Optional` **description**: `string`

A short description of the policy.

**`Memberof`**

Policy

#### Defined in

[api.ts:189](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/policies/api.ts#L189)

___

### id

• `Optional` **id**: `string`

**`Memberof`**

Policy

#### Defined in

[api.ts:177](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/policies/api.ts#L177)

___

### isEnabled

• `Optional` **isEnabled**: `boolean`

**`Memberof`**

Policy

#### Defined in

[api.ts:195](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/policies/api.ts#L195)

___

### lastTriggered

• `Optional` **lastTriggered**: `number`

**`Memberof`**

Policy

#### Defined in

[api.ts:225](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/policies/api.ts#L225)

___

### mtime

• `Optional` **mtime**: `string`

Last update time in a form like \'2020-01-24 12:19:56.718\', output only

**`Memberof`**

Policy

#### Defined in

[api.ts:213](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/policies/api.ts#L213)

___

### name

• **name**: `string`

Name of the rule. Must be unique per customer organization.

**`Memberof`**

Policy

#### Defined in

[api.ts:183](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/policies/api.ts#L183)
