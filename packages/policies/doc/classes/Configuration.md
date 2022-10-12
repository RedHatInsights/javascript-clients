[@redhat-cloud-services/policies-client](../README.md) / [Exports](../modules.md) / Configuration

# Class: Configuration

## Table of contents

### Constructors

- [constructor](Configuration.md#constructor)

### Properties

- [accessToken](Configuration.md#accesstoken)
- [apiKey](Configuration.md#apikey)
- [baseOptions](Configuration.md#baseoptions)
- [basePath](Configuration.md#basepath)
- [formDataCtor](Configuration.md#formdatactor)
- [password](Configuration.md#password)
- [username](Configuration.md#username)

### Methods

- [isJsonMime](Configuration.md#isjsonmime)

## Constructors

### constructor

• **new Configuration**(`param?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `param` | [`ConfigurationParameters`](../interfaces/ConfigurationParameters.md) |

#### Defined in

[configuration.ts:77](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/policies/configuration.ts#L77)

## Properties

### accessToken

• `Optional` **accessToken**: `string` \| `Promise`<`string`\> \| (`name?`: `string`, `scopes?`: `string`[]) => `string` \| (`name?`: `string`, `scopes?`: `string`[]) => `Promise`<`string`\>

parameter for oauth2 security

**`Param`**

security name

**`Param`**

oauth2 scope

**`Memberof`**

Configuration

#### Defined in

[configuration.ts:53](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/policies/configuration.ts#L53)

___

### apiKey

• `Optional` **apiKey**: `string` \| `Promise`<`string`\> \| (`name`: `string`) => `string` \| (`name`: `string`) => `Promise`<`string`\>

parameter for apiKey security

**`Param`**

security name

**`Memberof`**

Configuration

#### Defined in

[configuration.ts:32](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/policies/configuration.ts#L32)

___

### baseOptions

• `Optional` **baseOptions**: `any`

base options for axios calls

**`Memberof`**

Configuration

#### Defined in

[configuration.ts:67](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/policies/configuration.ts#L67)

___

### basePath

• `Optional` **basePath**: `string`

override base path

**`Memberof`**

Configuration

#### Defined in

[configuration.ts:60](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/policies/configuration.ts#L60)

___

### formDataCtor

• `Optional` **formDataCtor**: () => `any`

#### Type declaration

• **new Configuration**()

The FormData constructor that will be used to create multipart form data
requests. You can inject this here so that execution environments that
do not support the FormData class can still run the generated client.

#### Defined in

[configuration.ts:75](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/policies/configuration.ts#L75)

___

### password

• `Optional` **password**: `string`

parameter for basic security

**`Memberof`**

Configuration

#### Defined in

[configuration.ts:46](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/policies/configuration.ts#L46)

___

### username

• `Optional` **username**: `string`

parameter for basic security

**`Memberof`**

Configuration

#### Defined in

[configuration.ts:39](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/policies/configuration.ts#L39)

## Methods

### isJsonMime

▸ **isJsonMime**(`mime`): `boolean`

Check if the given MIME is a JSON MIME.
JSON MIME examples:
  application/json
  application/json; charset=UTF8
  APPLICATION/JSON
  application/vnd.company+json

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `mime` | `string` | MIME (Multipurpose Internet Mail Extensions) |

#### Returns

`boolean`

True if the given MIME is JSON, false otherwise.

#### Defined in

[configuration.ts:97](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/policies/configuration.ts#L97)
