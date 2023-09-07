[@redhat-cloud-services/insights-client](../README.md) / [Exports](../modules.md) / UserPreferencesApi

# Class: UserPreferencesApi

UserPreferencesApi - object-oriented interface

**`Export`**

## Hierarchy

- `BaseAPI`

  ↳ **`UserPreferencesApi`**

## Table of contents

### Constructors

- [constructor](UserPreferencesApi.md#constructor)

### Properties

- [axios](UserPreferencesApi.md#axios)
- [basePath](UserPreferencesApi.md#basepath)
- [configuration](UserPreferencesApi.md#configuration)

### Methods

- [userPreferencesCreate](UserPreferencesApi.md#userpreferencescreate)
- [userPreferencesList](UserPreferencesApi.md#userpreferenceslist)

## Constructors

### constructor

• **new UserPreferencesApi**(`configuration?`, `basePath?`, `axios?`)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `configuration?` | [`Configuration`](Configuration.md) | `undefined` |
| `basePath` | `string` | `BASE_PATH` |
| `axios` | `AxiosInstance` | `globalAxios` |

#### Inherited from

BaseAPI.constructor

#### Defined in

[base.ts:51](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/base.ts#L51)

## Properties

### axios

• `Protected` **axios**: `AxiosInstance` = `globalAxios`

#### Inherited from

BaseAPI.axios

#### Defined in

[base.ts:51](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/base.ts#L51)

___

### basePath

• `Protected` **basePath**: `string` = `BASE_PATH`

#### Inherited from

BaseAPI.basePath

#### Defined in

[base.ts:51](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/base.ts#L51)

___

### configuration

• `Protected` **configuration**: [`Configuration`](Configuration.md)

#### Inherited from

BaseAPI.configuration

#### Defined in

[base.ts:49](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/base.ts#L49)

## Methods

### userPreferencesCreate

▸ **userPreferencesCreate**(`preferencesInput`, `options?`): `Promise`<`AxiosResponse`<[`PreferencesInput`](../interfaces/PreferencesInput.md)\>\>

Accept the settings as input, and adjust the actual models accordingly.  The current account settings will be updated, or one will be created, with the

**`Throws`**

**`Memberof`**

UserPreferencesApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `preferencesInput` | [`PreferencesInput`](../interfaces/PreferencesInput.md) |  |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`PreferencesInput`](../interfaces/PreferencesInput.md)\>\>

#### Defined in

[api.ts:10038](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L10038)

___

### userPreferencesList

▸ **userPreferencesList**(`options?`): `Promise`<`AxiosResponse`<[`SettingsDDF`](../interfaces/SettingsDDF.md)[]\>\>

Describe the settings we have in a Data-Driven Forms way.  This simply compiles the \'show_satellite_hosts\' account-wide setting and the weekly report \'is_subscribed\' user-specific setting into one handy view, with the description metadata necessary to use Data-Driven Forms to display it.

**`Throws`**

**`Memberof`**

UserPreferencesApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`SettingsDDF`](../interfaces/SettingsDDF.md)[]\>\>

#### Defined in

[api.ts:10048](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L10048)
