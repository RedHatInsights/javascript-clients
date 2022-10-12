[@redhat-cloud-services/policies-client](../README.md) › [Globals](../globals.md) › [Configuration](configuration.md)

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
* [formDataCtor](configuration.md#optional-formdatactor)
* [password](configuration.md#optional-password)
* [username](configuration.md#optional-username)

### Methods

* [isJsonMime](configuration.md#isjsonmime)

## Constructors

###  constructor

\+ **new Configuration**(`param`: [ConfigurationParameters](../interfaces/configurationparameters.md)): *[Configuration](configuration.md)*

Defined in packages/policies/configuration.ts:75

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`param` | [ConfigurationParameters](../interfaces/configurationparameters.md) | {} |

**Returns:** *[Configuration](configuration.md)*

## Properties

### `Optional` accessToken

• **accessToken**? : *string | Promise‹string› | function | function*

Defined in packages/policies/configuration.ts:53

parameter for oauth2 security

**`param`** security name

**`param`** oauth2 scope

**`memberof`** Configuration

___

### `Optional` apiKey

• **apiKey**? : *string | Promise‹string› | function | function*

Defined in packages/policies/configuration.ts:32

parameter for apiKey security

**`param`** security name

**`memberof`** Configuration

___

### `Optional` baseOptions

• **baseOptions**? : *any*

Defined in packages/policies/configuration.ts:67

base options for axios calls

**`memberof`** Configuration

___

### `Optional` basePath

• **basePath**? : *string*

Defined in packages/policies/configuration.ts:60

override base path

**`memberof`** Configuration

___

### `Optional` formDataCtor

• **formDataCtor**? : *object*

Defined in packages/policies/configuration.ts:75

The FormData constructor that will be used to create multipart form data
requests. You can inject this here so that execution environments that
do not support the FormData class can still run the generated client.

#### Type declaration:

___

### `Optional` password

• **password**? : *string*

Defined in packages/policies/configuration.ts:46

parameter for basic security

**`memberof`** Configuration

___

### `Optional` username

• **username**? : *string*

Defined in packages/policies/configuration.ts:39

parameter for basic security

**`memberof`** Configuration

## Methods

###  isJsonMime

▸ **isJsonMime**(`mime`: string): *boolean*

Defined in packages/policies/configuration.ts:97

Check if the given MIME is a JSON MIME.
JSON MIME examples:
  application/json
  application/json; charset=UTF8
  APPLICATION/JSON
  application/vnd.company+json

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`mime` | string | MIME (Multipurpose Internet Mail Extensions) |

**Returns:** *boolean*

True if the given MIME is JSON, false otherwise.
