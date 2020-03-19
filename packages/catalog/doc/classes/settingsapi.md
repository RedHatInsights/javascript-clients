[@redhat-cloud-services/catalog-client](../README.md) › [Globals](../globals.md) › [SettingsApi](settingsapi.md)

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

* [createSetting](settingsapi.md#createsetting)
* [destroySetting](settingsapi.md#destroysetting)
* [listSettings](settingsapi.md#listsettings)
* [showSetting](settingsapi.md#showsetting)
* [updateSetting](settingsapi.md#updatesetting)

## Constructors

###  constructor

\+ **new SettingsApi**(`configuration?`: [Configuration](configuration.md), `basePath`: string, `axios`: AxiosInstance): *[SettingsApi](settingsapi.md)*

*Inherited from [BaseAPI](baseapi.md).[constructor](baseapi.md#constructor)*

*Defined in [api.ts:49](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L49)*

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

*Defined in [api.ts:51](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L51)*

___

### `Protected` basePath

• **basePath**: *string*

*Inherited from [BaseAPI](baseapi.md).[basePath](baseapi.md#protected-basepath)*

*Defined in [api.ts:51](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L51)*

___

### `Protected` configuration

• **configuration**: *[Configuration](configuration.md) | undefined*

*Inherited from [BaseAPI](baseapi.md).[configuration](baseapi.md#protected-configuration)*

*Defined in [api.ts:49](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L49)*

## Methods

###  createSetting

▸ **createSetting**(`setting`: [Setting](../interfaces/setting.md), `options?`: any): *AxiosPromise‹Response›*

*Defined in [api.ts:6599](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L6599)*

Create Tenant Setting

**`summary`** Create Tenant Setting

**`throws`** {RequiredError}

**`memberof`** SettingsApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`setting` | [Setting](../interfaces/setting.md) | Json encoded key/value pair to create a new setting |
`options?` | any | - |

**Returns:** *AxiosPromise‹Response›*

___

###  destroySetting

▸ **destroySetting**(`name`: string, `options?`: any): *AxiosPromise‹Response›*

*Defined in [api.ts:6611](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L6611)*

Delete a Tenant Setting

**`summary`** Delete a Tenant Setting

**`throws`** {RequiredError}

**`memberof`** SettingsApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`name` | string | name of the setting |
`options?` | any | - |

**Returns:** *AxiosPromise‹Response›*

___

###  listSettings

▸ **listSettings**(`options?`: any): *AxiosPromise‹[TenantSettings](../interfaces/tenantsettings.md)›*

*Defined in [api.ts:6622](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L6622)*

List Tenant Settings

**`summary`** List Tenant Settings

**`throws`** {RequiredError}

**`memberof`** SettingsApi

**Parameters:**

Name | Type |
------ | ------ |
`options?` | any |

**Returns:** *AxiosPromise‹[TenantSettings](../interfaces/tenantsettings.md)›*

___

###  showSetting

▸ **showSetting**(`name`: string, `options?`: any): *AxiosPromise‹Response›*

*Defined in [api.ts:6634](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L6634)*

Get a specific Tenant Setting

**`summary`** Get a specific Tenant Setting

**`throws`** {RequiredError}

**`memberof`** SettingsApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`name` | string | name of the setting |
`options?` | any | - |

**Returns:** *AxiosPromise‹Response›*

___

###  updateSetting

▸ **updateSetting**(`name`: string, `options?`: any): *AxiosPromise‹Response›*

*Defined in [api.ts:6646](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L6646)*

Update a Tenant Setting

**`summary`** Update a Tenant Setting

**`throws`** {RequiredError}

**`memberof`** SettingsApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`name` | string | name of the setting |
`options?` | any | - |

**Returns:** *AxiosPromise‹Response›*
