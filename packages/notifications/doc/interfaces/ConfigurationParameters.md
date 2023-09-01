[notifications-client](../README.md) / [Exports](../modules.md) / ConfigurationParameters

# Interface: ConfigurationParameters

## Table of contents

### Properties

- [accessToken](ConfigurationParameters.md#accesstoken)
- [apiKey](ConfigurationParameters.md#apikey)
- [baseOptions](ConfigurationParameters.md#baseoptions)
- [basePath](ConfigurationParameters.md#basepath)
- [formDataCtor](ConfigurationParameters.md#formdatactor)
- [password](ConfigurationParameters.md#password)
- [username](ConfigurationParameters.md#username)

## Properties

### accessToken

• `Optional` **accessToken**: `string` \| `Promise`<`string`\> \| (`name?`: `string`, `scopes?`: `string`[]) => `string` \| (`name?`: `string`, `scopes?`: `string`[]) => `Promise`<`string`\>

#### Defined in

packages/notifications/utils/configuration.ts:8

___

### apiKey

• `Optional` **apiKey**: `string` \| `Promise`<`string`\> \| (`name`: `string`) => `string` \| (`name`: `string`) => `Promise`<`string`\>

#### Defined in

packages/notifications/utils/configuration.ts:5

___

### baseOptions

• `Optional` **baseOptions**: `any`

#### Defined in

packages/notifications/utils/configuration.ts:10

___

### basePath

• `Optional` **basePath**: `string`

#### Defined in

packages/notifications/utils/configuration.ts:9

___

### formDataCtor

• `Optional` **formDataCtor**: () => `any`

#### Type declaration

• **new ConfigurationParameters**()

#### Defined in

packages/notifications/utils/configuration.ts:11

___

### password

• `Optional` **password**: `string`

#### Defined in

packages/notifications/utils/configuration.ts:7

___

### username

• `Optional` **username**: `string`

#### Defined in

packages/notifications/utils/configuration.ts:6
