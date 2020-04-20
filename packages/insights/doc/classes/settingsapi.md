[@redhat-cloud-services/insights-client](../README.md) › [Globals](../globals.md) › [SettingsApi](settingsapi.md)

# Class: SettingsApi

SettingsApi - object-oriented interface

**`export`** 

## Hierarchy

* [BaseAPI](baseapi.md)

  ↳ **SettingsApi**

## Index

### Constructors

* [constructor](settingsapi.md#constructor)

### Properties

* [axios](settingsapi.md#protected-axios)
* [basePath](settingsapi.md#protected-basepath)
* [configuration](settingsapi.md#protected-configuration)

### Methods

* [settingsCreate](settingsapi.md#settingscreate)
* [settingsList](settingsapi.md#settingslist)

## Constructors

###  constructor

\+ **new SettingsApi**(`configuration?`: [Configuration](configuration.md), `basePath`: string, `axios`: AxiosInstance): *[SettingsApi](settingsapi.md)*

*Inherited from [BaseAPI](baseapi.md).[constructor](baseapi.md#constructor)*

*Defined in [packages/insights/base.ts:49](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/base.ts#L49)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`configuration?` | [Configuration](configuration.md) | - |
`basePath` | string | BASE_PATH |
`axios` | AxiosInstance | globalAxios |

**Returns:** *[SettingsApi](settingsapi.md)*

## Properties

### `Protected` axios

• **axios**: *AxiosInstance*

*Inherited from [BaseAPI](baseapi.md).[axios](baseapi.md#protected-axios)*

*Defined in [packages/insights/base.ts:51](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/base.ts#L51)*

___

### `Protected` basePath

• **basePath**: *string*

*Inherited from [BaseAPI](baseapi.md).[basePath](baseapi.md#protected-basepath)*

*Defined in [packages/insights/base.ts:51](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/base.ts#L51)*

___

### `Protected` configuration

• **configuration**: *[Configuration](configuration.md) | undefined*

*Inherited from [BaseAPI](baseapi.md).[configuration](baseapi.md#protected-configuration)*

*Defined in [packages/insights/base.ts:49](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/base.ts#L49)*

## Methods

###  settingsCreate

▸ **settingsCreate**(`settingsInput`: [SettingsInput](../interfaces/settingsinput.md), `options?`: any): *AxiosPromise‹[SettingsInput](../interfaces/settingsinput.md)›*

*Defined in [packages/insights/api.ts:4074](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L4074)*

The current account settings will be updated, or one will be created, with the

**`summary`** Accept the settings as input, and adjust the actual models accordingly.

**`throws`** {RequiredError}

**`memberof`** SettingsApi

**Parameters:**

Name | Type |
------ | ------ |
`settingsInput` | [SettingsInput](../interfaces/settingsinput.md) |
`options?` | any |

**Returns:** *AxiosPromise‹[SettingsInput](../interfaces/settingsinput.md)›*

___

###  settingsList

▸ **settingsList**(`options?`: any): *AxiosPromise‹[SettingsDDF](../interfaces/settingsddf.md)[]›*

*Defined in [packages/insights/api.ts:4085](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L4085)*

This simply compiles the \'show_satellite_hosts\' account-wide setting and the weekly report \'is_subscribed\' user-specific setting into one handy view, with the description metadata necessary to use Data-Driven Forms to display it.

**`summary`** Describe the settings we have in a Data-Driven Forms way.

**`throws`** {RequiredError}

**`memberof`** SettingsApi

**Parameters:**

Name | Type |
------ | ------ |
`options?` | any |

**Returns:** *AxiosPromise‹[SettingsDDF](../interfaces/settingsddf.md)[]›*
