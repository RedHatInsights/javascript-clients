[@redhat-cloud-services/cost-management-client](../README.md) › [Globals](../globals.md) › [SettingsApi](settingsapi.md)

# Class: SettingsApi

SettingsApi - object-oriented interface

**`export`** 

**`class`** SettingsApi

**`extends`** {BaseAPI}

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

* [assignSettings](settingsapi.md#assignsettings)
* [getSettings](settingsapi.md#getsettings)

## Constructors

###  constructor

\+ **new SettingsApi**(`configuration?`: [Configuration](configuration.md), `basePath`: string, `axios`: AxiosInstance): *[SettingsApi](settingsapi.md)*

*Inherited from [BaseAPI](baseapi.md).[constructor](baseapi.md#constructor)*

*Defined in [api.ts:49](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/cost-management/api.ts#L49)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`configuration?` | [Configuration](configuration.md) | - |
`basePath` | string |  BASE_PATH |
`axios` | AxiosInstance |  globalAxios |

**Returns:** *[SettingsApi](settingsapi.md)*

## Properties

### `Protected` axios

• **axios**: *AxiosInstance*

*Inherited from [BaseAPI](baseapi.md).[axios](baseapi.md#protected-axios)*

*Defined in [api.ts:51](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/cost-management/api.ts#L51)*

___

### `Protected` basePath

• **basePath**: *string*

*Inherited from [BaseAPI](baseapi.md).[basePath](baseapi.md#protected-basepath)*

*Defined in [api.ts:51](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/cost-management/api.ts#L51)*

___

### `Protected` configuration

• **configuration**: *[Configuration](configuration.md) | undefined*

*Inherited from [BaseAPI](baseapi.md).[configuration](baseapi.md#protected-configuration)*

*Defined in [api.ts:49](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/cost-management/api.ts#L49)*

## Methods

###  assignSettings

▸ **assignSettings**(`settingIn`: [SettingIn](../interfaces/settingin.md), `options?`: any): *AxiosPromise‹Response›*

*Defined in [api.ts:5950](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/cost-management/api.ts#L5950)*

**`summary`** Assign to cost management settings

**`throws`** {RequiredError}

**`memberof`** SettingsApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`settingIn` | [SettingIn](../interfaces/settingin.md) | Application settings that needs to stored |
`options?` | any | - |

**Returns:** *AxiosPromise‹Response›*

___

###  getSettings

▸ **getSettings**(`options?`: any): *AxiosPromise‹[SettingOut](../interfaces/settingout.md)[]›*

*Defined in [api.ts:5961](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/cost-management/api.ts#L5961)*

**`summary`** Query to cost management settings

**`throws`** {RequiredError}

**`memberof`** SettingsApi

**Parameters:**

Name | Type |
------ | ------ |
`options?` | any |

**Returns:** *AxiosPromise‹[SettingOut](../interfaces/settingout.md)[]›*
