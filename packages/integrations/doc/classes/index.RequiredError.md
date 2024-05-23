[@redhat-cloud-services/javascript-clients](../README.md) / [Exports](../modules.md) / [index](../modules/index.md) / RequiredError

# Class: RequiredError

[index](../modules/index.md).RequiredError

**`Export`**

RequiredError

## Hierarchy

- `Error`

  ↳ **`RequiredError`**

## Table of contents

### Constructors

- [constructor](index.RequiredError.md#constructor)

### Properties

- [field](index.RequiredError.md#field)
- [message](index.RequiredError.md#message)
- [name](index.RequiredError.md#name)
- [stack](index.RequiredError.md#stack)
- [prepareStackTrace](index.RequiredError.md#preparestacktrace)
- [stackTraceLimit](index.RequiredError.md#stacktracelimit)

### Methods

- [captureStackTrace](index.RequiredError.md#capturestacktrace)

## Constructors

### constructor

• **new RequiredError**(`field`, `msg?`): [`RequiredError`](index.RequiredError.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `field` | `string` |
| `msg?` | `string` |

#### Returns

[`RequiredError`](index.RequiredError.md)

#### Overrides

Error.constructor

#### Defined in

[packages/integrations/base.ts:68](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/integrations/base.ts#L68)

## Properties

### field

• **field**: `string`

#### Defined in

[packages/integrations/base.ts:68](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/integrations/base.ts#L68)

___

### message

• **message**: `string`

#### Inherited from

Error.message

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1054

___

### name

• **name**: `string`

#### Inherited from

Error.name

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1053

___

### stack

• `Optional` **stack**: `string`

#### Inherited from

Error.stack

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1055

___

### prepareStackTrace

▪ `Static` `Optional` **prepareStackTrace**: (`err`: `Error`, `stackTraces`: `CallSite`[]) => `any`

Optional override for formatting stack traces

**`See`**

https://github.com/v8/v8/wiki/Stack%20Trace%20API#customizing-stack-traces

#### Type declaration

▸ (`err`, `stackTraces`): `any`

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

▸ **captureStackTrace**(`targetObject`, `constructorOpt?`): `void`

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
