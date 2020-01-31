[@redhat-cloud-services/catalog-client](../README.md) > [SettingsApi](../classes/settingsapi.md)

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

* [createSetting](settingsapi.md#createsetting)
* [destroySetting](settingsapi.md#destroysetting)
* [listSettings](settingsapi.md#listsettings)
* [showSetting](settingsapi.md#showsetting)
* [updateSetting](settingsapi.md#updatesetting)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new SettingsApi**(configuration?: *[Configuration](configuration.md)*, basePath?: *`string`*, axios?: *`AxiosInstance`*): [SettingsApi](settingsapi.md)

*Inherited from [BaseAPI](baseapi.md).[constructor](baseapi.md#constructor)*

*Defined in [api.ts:49](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L49)*

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

*Defined in [api.ts:51](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L51)*

___
<a id="basepath"></a>

### `<Protected>` basePath

**● basePath**: *`string`*

*Inherited from [BaseAPI](baseapi.md).[basePath](baseapi.md#basepath)*

*Defined in [api.ts:51](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L51)*

___
<a id="configuration"></a>

### `<Protected>` configuration

**● configuration**: *[Configuration](configuration.md) \| `undefined`*

*Inherited from [BaseAPI](baseapi.md).[configuration](baseapi.md#configuration)*

*Defined in [api.ts:49](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L49)*

___

## Methods

<a id="createsetting"></a>

###  createSetting

▸ **createSetting**(setting: *[Setting](../interfaces/setting.md)*, options?: *`any`*): `AxiosPromise`<`Response`>

*Defined in [api.ts:6599](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L6599)*

Create Tenant Setting

*__summary__*: Create Tenant Setting

*__throws__*: {RequiredError}

*__memberof__*: SettingsApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| setting | [Setting](../interfaces/setting.md) |  Json encoded key/value pair to create a new setting |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<`Response`>

___
<a id="destroysetting"></a>

###  destroySetting

▸ **destroySetting**(name: *`string`*, options?: *`any`*): `AxiosPromise`<`Response`>

*Defined in [api.ts:6611](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L6611)*

Delete a Tenant Setting

*__summary__*: Delete a Tenant Setting

*__throws__*: {RequiredError}

*__memberof__*: SettingsApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| name | `string` |  name of the setting |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<`Response`>

___
<a id="listsettings"></a>

###  listSettings

▸ **listSettings**(options?: *`any`*): `AxiosPromise`<[TenantSettings](../interfaces/tenantsettings.md)>

*Defined in [api.ts:6622](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L6622)*

List Tenant Settings

*__summary__*: List Tenant Settings

*__throws__*: {RequiredError}

*__memberof__*: SettingsApi

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[TenantSettings](../interfaces/tenantsettings.md)>

___
<a id="showsetting"></a>

###  showSetting

▸ **showSetting**(name: *`string`*, options?: *`any`*): `AxiosPromise`<`Response`>

*Defined in [api.ts:6634](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L6634)*

Get a specific Tenant Setting

*__summary__*: Get a specific Tenant Setting

*__throws__*: {RequiredError}

*__memberof__*: SettingsApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| name | `string` |  name of the setting |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<`Response`>

___
<a id="updatesetting"></a>

###  updateSetting

▸ **updateSetting**(name: *`string`*, options?: *`any`*): `AxiosPromise`<`Response`>

*Defined in [api.ts:6646](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L6646)*

Update a Tenant Setting

*__summary__*: Update a Tenant Setting

*__throws__*: {RequiredError}

*__memberof__*: SettingsApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| name | `string` |  name of the setting |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<`Response`>

___

