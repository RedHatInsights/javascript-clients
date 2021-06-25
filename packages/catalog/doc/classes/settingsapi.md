[@redhat-cloud-services/catalog-client](../README.md) › [Globals](../globals.md) › [SettingsApi](settingsapi.md)

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

* [createSetting](settingsapi.md#createsetting)
* [destroySetting](settingsapi.md#destroysetting)
* [listSettings](settingsapi.md#listsettings)
* [showSetting](settingsapi.md#showsetting)
* [updateSetting](settingsapi.md#updatesetting)

## Constructors

###  constructor

\+ **new SettingsApi**(`configuration?`: [Configuration](configuration.md), `basePath`: string, `axios`: AxiosInstance): *[SettingsApi](settingsapi.md)*

*Inherited from [BaseAPI](baseapi.md).[constructor](baseapi.md#constructor)*

*Defined in [packages/catalog/base.ts:49](https://github.com/fhlavac/javascript-clients/blob/master/packages/catalog/base.ts#L49)*

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

*Defined in [packages/catalog/base.ts:51](https://github.com/fhlavac/javascript-clients/blob/master/packages/catalog/base.ts#L51)*

___

### `Protected` basePath

• **basePath**: *string*

*Inherited from [BaseAPI](baseapi.md).[basePath](baseapi.md#protected-basepath)*

*Defined in [packages/catalog/base.ts:51](https://github.com/fhlavac/javascript-clients/blob/master/packages/catalog/base.ts#L51)*

___

### `Protected` configuration

• **configuration**: *[Configuration](configuration.md) | undefined*

*Inherited from [BaseAPI](baseapi.md).[configuration](baseapi.md#protected-configuration)*

*Defined in [packages/catalog/base.ts:49](https://github.com/fhlavac/javascript-clients/blob/master/packages/catalog/base.ts#L49)*

## Methods

###  createSetting

▸ **createSetting**(`setting`: [Setting](../interfaces/setting.md), `options?`: any): *Promise‹AxiosResponse‹void››*

*Defined in [packages/catalog/api.ts:7974](https://github.com/fhlavac/javascript-clients/blob/master/packages/catalog/api.ts#L7974)*

Create Tenant Setting

**`summary`** Create Tenant Setting

**`throws`** {RequiredError}

**`memberof`** SettingsApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`setting` | [Setting](../interfaces/setting.md) | Json encoded key/value pair to create a new setting |
`options?` | any | - |

**Returns:** *Promise‹AxiosResponse‹void››*

___

###  destroySetting

▸ **destroySetting**(`name`: string, `options?`: any): *Promise‹AxiosResponse‹void››*

*Defined in [packages/catalog/api.ts:7986](https://github.com/fhlavac/javascript-clients/blob/master/packages/catalog/api.ts#L7986)*

Delete a Tenant Setting

**`summary`** Delete a Tenant Setting

**`throws`** {RequiredError}

**`memberof`** SettingsApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`name` | string | name of the setting |
`options?` | any | - |

**Returns:** *Promise‹AxiosResponse‹void››*

___

###  listSettings

▸ **listSettings**(`options?`: any): *Promise‹AxiosResponse‹[TenantSettings](../interfaces/tenantsettings.md)››*

*Defined in [packages/catalog/api.ts:7997](https://github.com/fhlavac/javascript-clients/blob/master/packages/catalog/api.ts#L7997)*

List Tenant Settings

**`summary`** List Tenant Settings

**`throws`** {RequiredError}

**`memberof`** SettingsApi

**Parameters:**

Name | Type |
------ | ------ |
`options?` | any |

**Returns:** *Promise‹AxiosResponse‹[TenantSettings](../interfaces/tenantsettings.md)››*

___

###  showSetting

▸ **showSetting**(`name`: string, `options?`: any): *Promise‹AxiosResponse‹void››*

*Defined in [packages/catalog/api.ts:8009](https://github.com/fhlavac/javascript-clients/blob/master/packages/catalog/api.ts#L8009)*

Get a specific Tenant Setting

**`summary`** Get a specific Tenant Setting

**`throws`** {RequiredError}

**`memberof`** SettingsApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`name` | string | name of the setting |
`options?` | any | - |

**Returns:** *Promise‹AxiosResponse‹void››*

___

###  updateSetting

▸ **updateSetting**(`name`: string, `options?`: any): *Promise‹AxiosResponse‹void››*

*Defined in [packages/catalog/api.ts:8021](https://github.com/fhlavac/javascript-clients/blob/master/packages/catalog/api.ts#L8021)*

Update a Tenant Setting

**`summary`** Update a Tenant Setting

**`throws`** {RequiredError}

**`memberof`** SettingsApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`name` | string | name of the setting |
`options?` | any | - |

**Returns:** *Promise‹AxiosResponse‹void››*
