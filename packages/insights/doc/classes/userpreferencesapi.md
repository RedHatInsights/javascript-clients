[@redhat-cloud-services/insights-client](../README.md) › [Globals](../globals.md) › [UserPreferencesApi](userpreferencesapi.md)

# Class: UserPreferencesApi

UserPreferencesApi - object-oriented interface

**`export`** 

## Hierarchy

* [BaseAPI](baseapi.md)

  ↳ **UserPreferencesApi**

## Index

### Constructors

* [constructor](userpreferencesapi.md#constructor)

### Properties

* [axios](userpreferencesapi.md#protected-axios)
* [basePath](userpreferencesapi.md#protected-basepath)
* [configuration](userpreferencesapi.md#protected-configuration)

### Methods

* [userPreferencesCreate](userpreferencesapi.md#userpreferencescreate)
* [userPreferencesList](userpreferencesapi.md#userpreferenceslist)

## Constructors

###  constructor

\+ **new UserPreferencesApi**(`configuration?`: [Configuration](configuration.md), `basePath`: string, `axios`: AxiosInstance): *[UserPreferencesApi](userpreferencesapi.md)*

*Inherited from [BaseAPI](baseapi.md).[constructor](baseapi.md#constructor)*

*Defined in [packages/insights/base.ts:49](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/base.ts#L49)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`configuration?` | [Configuration](configuration.md) | - |
`basePath` | string | BASE_PATH |
`axios` | AxiosInstance | globalAxios |

**Returns:** *[UserPreferencesApi](userpreferencesapi.md)*

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

###  userPreferencesCreate

▸ **userPreferencesCreate**(`preferencesInput`: [PreferencesInput](../interfaces/preferencesinput.md), `options?`: any): *AxiosPromise‹[PreferencesInput](../interfaces/preferencesinput.md)›*

*Defined in [packages/insights/api.ts:5723](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L5723)*

The current account settings will be updated, or one will be created, with the

**`summary`** Accept the settings as input, and adjust the actual models accordingly.

**`throws`** {RequiredError}

**`memberof`** UserPreferencesApi

**Parameters:**

Name | Type |
------ | ------ |
`preferencesInput` | [PreferencesInput](../interfaces/preferencesinput.md) |
`options?` | any |

**Returns:** *AxiosPromise‹[PreferencesInput](../interfaces/preferencesinput.md)›*

___

###  userPreferencesList

▸ **userPreferencesList**(`options?`: any): *AxiosPromise‹[SettingsDDF](../interfaces/settingsddf.md)[]›*

*Defined in [packages/insights/api.ts:5734](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L5734)*

This simply compiles the \'show_satellite_hosts\' account-wide setting and the weekly report \'is_subscribed\' user-specific setting into one handy view, with the description metadata necessary to use Data-Driven Forms to display it.

**`summary`** Describe the settings we have in a Data-Driven Forms way.

**`throws`** {RequiredError}

**`memberof`** UserPreferencesApi

**Parameters:**

Name | Type |
------ | ------ |
`options?` | any |

**Returns:** *AxiosPromise‹[SettingsDDF](../interfaces/settingsddf.md)[]›*
