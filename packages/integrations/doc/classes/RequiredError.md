[@redhat-cloud-services/integrations-client](../README.md) / [Exports](../modules.md) / RequiredError

# Class: RequiredError

**`Export`**

## Hierarchy

- `Error`

  ↳ **`RequiredError`**

## Table of contents

### Constructors

- [constructor](RequiredError.md#constructor)

### Properties

- [field](RequiredError.md#field)
- [message](RequiredError.md#message)
- [name](RequiredError.md#name)
- [stack](RequiredError.md#stack)
- [prepareStackTrace](RequiredError.md#preparestacktrace)
- [stackTraceLimit](RequiredError.md#stacktracelimit)

### Methods

- [captureStackTrace](RequiredError.md#capturestacktrace)

## Constructors

### constructor

• **new RequiredError**(`field`, `msg?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `field` | `string` |
| `msg?` | `string` |

#### Overrides

Error.constructor

#### Defined in

[packages/integrations/utils/base.ts:167](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/integrations/utils/base.ts#L167)

## Properties

### field

• **field**: `string`

#### Defined in

[packages/integrations/utils/base.ts:167](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/integrations/utils/base.ts#L167)

___

### message

• **message**: `string`

#### Inherited from

Error.message

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1041

___

### name

• **name**: `string`

#### Inherited from

Error.name

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1040

___

### stack

• `Optional` **stack**: `string`

#### Inherited from

Error.stack

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1042

___

### prepareStackTrace

▪ `Static` `Optional` **prepareStackTrace**: (`err`: `Error`, `stackTraces`: `CallSite`[]) => `any`

#### Type declaration

▸ (`err`, `stackTraces`): `any`

Optional override for formatting stack traces

**`See`**

https://github.com/v8/v8/wiki/Stack%20Trace%20API#customizing-stack-traces

##### Parameters

| Name | Type |
| :------ | :------ |
| `err` | `Error` |
| `stackTraces` | `CallSite`[] |

##### Returns

`any`

#### Inherited from

Error.prepareStackTrace

#### Defined in

node_modules/@types/node/globals.d.ts:115

___

### stackTraceLimit

▪ `Static` **stackTraceLimit**: `number`

#### Inherited from

Error.stackTraceLimit

#### Defined in

node_modules/@types/node/globals.d.ts:117

## Methods

### captureStackTrace

▸ `Static` **captureStackTrace**(`targetObject`, `constructorOpt?`): `void`

Create .stack property on a target object

#### Parameters

| Name | Type |
| :------ | :------ |
| `targetObject` | `object` |
| `constructorOpt?` | `Function` |

#### Returns

`void`

#### Inherited from

Error.captureStackTrace

#### Defined in

node_modules/@types/node/globals.d.ts:108
