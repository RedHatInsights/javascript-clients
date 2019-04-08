[@redhat-cloud-services/approval-client](../README.md) > [Configuration](../classes/configuration.md)

# Class: Configuration

## Hierarchy

**Configuration**

## Index

### Constructors

* [constructor](configuration.md#constructor)

### Properties

* [accessToken](configuration.md#accesstoken)
* [apiKey](configuration.md#apikey)
* [baseOptions](configuration.md#baseoptions)
* [basePath](configuration.md#basepath)
* [password](configuration.md#password)
* [username](configuration.md#username)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new Configuration**(param?: *[ConfigurationParameters](../interfaces/configurationparameters.md)*): [Configuration](configuration.md)

*Defined in [configuration.ts:65](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/configuration.ts#L65)*

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| `Default value` param | [ConfigurationParameters](../interfaces/configurationparameters.md) |  {} |

**Returns:** [Configuration](configuration.md)

___

## Properties

<a id="accesstoken"></a>

### `<Optional>` accessToken

**● accessToken**: *`string` \| `function`*

*Defined in [configuration.ts:51](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/configuration.ts#L51)*

parameter for oauth2 security

*__param__*: security name

*__param__*: oauth2 scope

*__memberof__*: Configuration

___
<a id="apikey"></a>

### `<Optional>` apiKey

**● apiKey**: *`string` \| `function`*

*Defined in [configuration.ts:30](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/configuration.ts#L30)*

parameter for apiKey security

*__param__*: security name

*__memberof__*: Configuration

___
<a id="baseoptions"></a>

### `<Optional>` baseOptions

**● baseOptions**: *`any`*

*Defined in [configuration.ts:65](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/configuration.ts#L65)*

base options for axios calls

*__type__*: {any}

*__memberof__*: Configuration

___
<a id="basepath"></a>

### `<Optional>` basePath

**● basePath**: *`string`*

*Defined in [configuration.ts:58](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/configuration.ts#L58)*

override base path

*__type__*: {string}

*__memberof__*: Configuration

___
<a id="password"></a>

### `<Optional>` password

**● password**: *`string`*

*Defined in [configuration.ts:44](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/configuration.ts#L44)*

parameter for basic security

*__type__*: {string}

*__memberof__*: Configuration

___
<a id="username"></a>

### `<Optional>` username

**● username**: *`string`*

*Defined in [configuration.ts:37](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/configuration.ts#L37)*

parameter for basic security

*__type__*: {string}

*__memberof__*: Configuration

___

