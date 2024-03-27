[@redhat-cloud-services/rbac-client](../README.md) / [Exports](../modules.md) / Configuration

# Class: Configuration

## Table of contents

### Constructors

- [constructor](Configuration.md#constructor)

### Properties

- [accessToken](Configuration.md#accesstoken)
- [apiKey](Configuration.md#apikey)
- [baseOptions](Configuration.md#baseoptions)
- [basePath](Configuration.md#basepath)
- [password](Configuration.md#password)
- [username](Configuration.md#username)

## Constructors

### constructor

• **new Configuration**(`param?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `param` | [`ConfigurationParameters`](../interfaces/ConfigurationParameters.md) |

#### Defined in

[configuration.ts:67](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/rbac/configuration.ts#L67)

## Properties

### accessToken

• `Optional` **accessToken**: `string` \| (`name?`: `string`, `scopes?`: `string`[]) => `string`

parameter for oauth2 security

**`Param`**

security name

**`Param`**

oauth2 scope

**`Memberof`**

Configuration

#### Defined in

[configuration.ts:51](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/rbac/configuration.ts#L51)

___

### apiKey

• `Optional` **apiKey**: `string` \| `Promise`<`string`\> \| (`name`: `string`) => `string` \| (`name`: `string`) => `Promise`<`string`\>

parameter for apiKey security

**`Param`**

security name

**`Memberof`**

Configuration

#### Defined in

[configuration.ts:30](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/rbac/configuration.ts#L30)

___

### baseOptions

• `Optional` **baseOptions**: `any`

base options for axios calls

**`Memberof`**

Configuration

#### Defined in

[configuration.ts:65](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/rbac/configuration.ts#L65)

___

### basePath

• `Optional` **basePath**: `string`

override base path

**`Memberof`**

Configuration

#### Defined in

[configuration.ts:58](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/rbac/configuration.ts#L58)

___

### password

• `Optional` **password**: `string`

parameter for basic security

**`Memberof`**

Configuration

#### Defined in

[configuration.ts:44](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/rbac/configuration.ts#L44)

___

### username

• `Optional` **username**: `string`

parameter for basic security

**`Memberof`**

Configuration

#### Defined in

[configuration.ts:37](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/rbac/configuration.ts#L37)
