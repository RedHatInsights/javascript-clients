[@redhat-cloud-services/config-manager-client](../README.md) › [Globals](../globals.md) › [Configuration](configuration.md)

# Class: Configuration

## Hierarchy

* **Configuration**

## Index

### Constructors

* [constructor](configuration.md#constructor)

### Properties

* [accessToken](configuration.md#optional-accesstoken)
* [apiKey](configuration.md#optional-apikey)
* [baseOptions](configuration.md#optional-baseoptions)
* [basePath](configuration.md#optional-basepath)
* [password](configuration.md#optional-password)
* [username](configuration.md#optional-username)

## Constructors

###  constructor

\+ **new Configuration**(`param`: [ConfigurationParameters](../interfaces/configurationparameters.md)): *[Configuration](configuration.md)*

Defined in packages/config-manager/configuration.ts:65

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`param` | [ConfigurationParameters](../interfaces/configurationparameters.md) | {} |

**Returns:** *[Configuration](configuration.md)*

## Properties

### `Optional` accessToken

• **accessToken**? : *string | function*

Defined in packages/config-manager/configuration.ts:51

parameter for oauth2 security

**`param`** security name

**`param`** oauth2 scope

**`memberof`** Configuration

___

### `Optional` apiKey

• **apiKey**? : *string | Promise‹string› | function | function*

Defined in packages/config-manager/configuration.ts:30

parameter for apiKey security

**`param`** security name

**`memberof`** Configuration

___

### `Optional` baseOptions

• **baseOptions**? : *any*

Defined in packages/config-manager/configuration.ts:65

base options for axios calls

**`memberof`** Configuration

___

### `Optional` basePath

• **basePath**? : *string*

Defined in packages/config-manager/configuration.ts:58

override base path

**`memberof`** Configuration

___

### `Optional` password

• **password**? : *string*

Defined in packages/config-manager/configuration.ts:44

parameter for basic security

**`memberof`** Configuration

___

### `Optional` username

• **username**? : *string*

Defined in packages/config-manager/configuration.ts:37

parameter for basic security

**`memberof`** Configuration
