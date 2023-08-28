[@redhat-cloud-services/catalog-client](../README.md) / [Exports](../modules.md) / SettingsApi

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

- [createSetting](SettingsApi.md#createsetting)
- [destroySetting](SettingsApi.md#destroysetting)
- [listSettings](SettingsApi.md#listsettings)
- [showSetting](SettingsApi.md#showsetting)
- [updateSetting](SettingsApi.md#updatesetting)

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

[base.ts:51](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/base.ts#L51)

## Properties

### axios

• `Protected` **axios**: `AxiosInstance` = `globalAxios`

#### Inherited from

BaseAPI.axios

#### Defined in

[base.ts:51](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/base.ts#L51)

___

### basePath

• `Protected` **basePath**: `string` = `BASE_PATH`

#### Inherited from

BaseAPI.basePath

#### Defined in

[base.ts:51](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/base.ts#L51)

___

### configuration

• `Protected` **configuration**: [`Configuration`](Configuration.md)

#### Inherited from

BaseAPI.configuration

#### Defined in

[base.ts:49](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/base.ts#L49)

## Methods

### createSetting

▸ **createSetting**(`setting`, `options?`): `Promise`<`AxiosResponse`<`void`\>\>

Create Tenant Setting

**`Summary`**

Create Tenant Setting

**`Throws`**

**`Memberof`**

SettingsApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `setting` | [`Setting`](../interfaces/Setting.md) | Json encoded key/value pair to create a new setting |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<`void`\>\>

#### Defined in

[api.ts:7974](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L7974)

___

### destroySetting

▸ **destroySetting**(`name`, `options?`): `Promise`<`AxiosResponse`<`void`\>\>

Delete a Tenant Setting

**`Summary`**

Delete a Tenant Setting

**`Throws`**

**`Memberof`**

SettingsApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | name of the setting |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<`void`\>\>

#### Defined in

[api.ts:7986](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L7986)

___

### listSettings

▸ **listSettings**(`options?`): `Promise`<`AxiosResponse`<[`TenantSettings`](../interfaces/TenantSettings.md)\>\>

List Tenant Settings

**`Summary`**

List Tenant Settings

**`Throws`**

**`Memberof`**

SettingsApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`TenantSettings`](../interfaces/TenantSettings.md)\>\>

#### Defined in

[api.ts:7997](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L7997)

___

### showSetting

▸ **showSetting**(`name`, `options?`): `Promise`<`AxiosResponse`<`void`\>\>

Get a specific Tenant Setting

**`Summary`**

Get a specific Tenant Setting

**`Throws`**

**`Memberof`**

SettingsApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | name of the setting |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<`void`\>\>

#### Defined in

[api.ts:8009](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L8009)

___

### updateSetting

▸ **updateSetting**(`name`, `options?`): `Promise`<`AxiosResponse`<`void`\>\>

Update a Tenant Setting

**`Summary`**

Update a Tenant Setting

**`Throws`**

**`Memberof`**

SettingsApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | name of the setting |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<`void`\>\>

#### Defined in

[api.ts:8021](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L8021)
