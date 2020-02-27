[@redhat-cloud-services/insights-client](../README.md) > [SettingsApi](../classes/settingsapi.md)

# Class: SettingsApi

SettingsApi - object-oriented interface

*__export__*: 

*__class__*: SettingsApi

*__extends__*: {BaseAPI}

## Hierarchy

 [BaseAPI](baseapi.md)

**↳ SettingsApi**

## Index

### Constructors

* [constructor](settingsapi.md#constructor)

### Properties

* [axios](settingsapi.md#axios)
* [basePath](settingsapi.md#basepath)
* [configuration](settingsapi.md#configuration)

### Methods

* [settingsCreate](settingsapi.md#settingscreate)
* [settingsList](settingsapi.md#settingslist)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new SettingsApi**(configuration?: *[Configuration](configuration.md)*, basePath?: *`string`*, axios?: *`AxiosInstance`*): [SettingsApi](settingsapi.md)

*Inherited from [BaseAPI](baseapi.md).[constructor](baseapi.md#constructor)*

*Defined in [api.ts:49](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L49)*

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| `Optional` configuration | [Configuration](configuration.md) | - |
| `Default value` basePath | `string` |  BASE_PATH |
| `Default value` axios | `AxiosInstance` |  globalAxios |

**Returns:** [SettingsApi](settingsapi.md)

___

## Properties

<a id="axios"></a>

### `<Protected>` axios

**● axios**: *`AxiosInstance`*

*Inherited from [BaseAPI](baseapi.md).[axios](baseapi.md#axios)*

*Defined in [api.ts:51](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L51)*

___
<a id="basepath"></a>

### `<Protected>` basePath

**● basePath**: *`string`*

*Inherited from [BaseAPI](baseapi.md).[basePath](baseapi.md#basepath)*

*Defined in [api.ts:51](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L51)*

___
<a id="configuration"></a>

### `<Protected>` configuration

**● configuration**: *[Configuration](configuration.md) \| `undefined`*

*Inherited from [BaseAPI](baseapi.md).[configuration](baseapi.md#configuration)*

*Defined in [api.ts:49](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L49)*

___

## Methods

<a id="settingscreate"></a>

###  settingsCreate

▸ **settingsCreate**(settingsInput: *[SettingsInput](../interfaces/settingsinput.md)*, options?: *`any`*): `AxiosPromise`<[SettingsInput](../interfaces/settingsinput.md)>

*Defined in [api.ts:3974](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L3974)*

The current account settings will be updated, or one will be created, with the

*__summary__*: Accept the settings as input, and adjust the actual models accordingly.

*__throws__*: {RequiredError}

*__memberof__*: SettingsApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| settingsInput | [SettingsInput](../interfaces/settingsinput.md) |  \- |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[SettingsInput](../interfaces/settingsinput.md)>

___
<a id="settingslist"></a>

###  settingsList

▸ **settingsList**(options?: *`any`*): `AxiosPromise`<[SettingsDDF](../interfaces/settingsddf.md)[]>

*Defined in [api.ts:3984](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L3984)*

Describe the settings we have in a Data-Driven Forms way.

*__throws__*: {RequiredError}

*__memberof__*: SettingsApi

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[SettingsDDF](../interfaces/settingsddf.md)[]>

___

