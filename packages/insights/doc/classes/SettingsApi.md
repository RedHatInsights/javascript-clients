[@redhat-cloud-services/insights-client](../README.md) / [Exports](../modules.md) / SettingsApi

# Class: SettingsApi

SettingsApi - object-oriented interface

**`Export`**

## Hierarchy

- `BaseAPI`

  ↳ **`SettingsApi`**

## Table of contents

### Constructors

- [constructor](SettingsApi.md#constructor)

### Properties

- [axios](SettingsApi.md#axios)
- [basePath](SettingsApi.md#basepath)
- [configuration](SettingsApi.md#configuration)

### Methods

- [settingsList](SettingsApi.md#settingslist)

## Constructors

### constructor

• **new SettingsApi**(`configuration?`, `basePath?`, `axios?`)

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

### settingsList

▸ **settingsList**(`options?`): `Promise`<`AxiosResponse`<[`SettingsDDF`](../interfaces/SettingsDDF.md)[], `any`\>\>

Describe the settings we have in a Data-Driven Forms way.  This simply compiles the \'show_satellite_hosts\' account-wide setting into a format compatible with Data-Driven Forms.

**`Throws`**

**`Memberof`**

SettingsApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`SettingsDDF`](../interfaces/SettingsDDF.md)[], `any`\>\>

#### Defined in

[api.ts:7564](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L7564)
