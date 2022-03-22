[@redhat-cloud-services/rbac-client](../README.md) › [Globals](../globals.md) › [RequiredError](requirederror.md)

# Class: RequiredError

**`export`** 

## Hierarchy

* [Error](requirederror.md#static-error)

  ↳ **RequiredError**

## Index

### Constructors

* [constructor](requirederror.md#constructor)

### Properties

* [field](requirederror.md#field)
* [message](requirederror.md#message)
* [name](requirederror.md#name)
* [stack](requirederror.md#optional-stack)
* [Error](requirederror.md#static-error)

## Constructors

###  constructor

\+ **new RequiredError**(`field`: string, `msg?`: string): *[RequiredError](requirederror.md)*

*Defined in [base.ts:66](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/rbac/base.ts#L66)*

**Parameters:**

Name | Type |
------ | ------ |
`field` | string |
`msg?` | string |

**Returns:** *[RequiredError](requirederror.md)*

## Properties

###  field

• **field**: *string*

*Defined in [base.ts:67](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/rbac/base.ts#L67)*

___

###  message

• **message**: *string*

*Inherited from [RequiredError](requirederror.md).[message](requirederror.md#message)*

Defined in node_modules/typescript/lib/lib.es5.d.ts:1023

___

###  name

• **name**: *"RequiredError"* = "RequiredError"

*Overrides void*

*Defined in [base.ts:66](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/rbac/base.ts#L66)*

___

### `Optional` stack

• **stack**? : *string*

*Inherited from [RequiredError](requirederror.md).[stack](requirederror.md#optional-stack)*

Defined in node_modules/typescript/lib/lib.es5.d.ts:1024

___

### `Static` Error

▪ **Error**: *ErrorConstructor*

Defined in node_modules/typescript/lib/lib.es5.d.ts:1033
