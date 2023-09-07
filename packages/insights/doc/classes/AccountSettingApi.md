[@redhat-cloud-services/insights-client](../README.md) / [Exports](../modules.md) / AccountSettingApi

# Class: AccountSettingApi

AccountSettingApi - object-oriented interface

**`Export`**

## Hierarchy

- `BaseAPI`

  ↳ **`AccountSettingApi`**

## Table of contents

### Constructors

- [constructor](AccountSettingApi.md#constructor)

### Properties

- [axios](AccountSettingApi.md#axios)
- [basePath](AccountSettingApi.md#basepath)
- [configuration](AccountSettingApi.md#configuration)

### Methods

- [accountSettingCreate](AccountSettingApi.md#accountsettingcreate)
- [accountSettingRetrieve](AccountSettingApi.md#accountsettingretrieve)

## Constructors

### constructor

• **new AccountSettingApi**(`configuration?`, `basePath?`, `axios?`)

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

### accountSettingCreate

▸ **accountSettingCreate**(`options?`): `Promise`<`AxiosResponse`<`void`\>\>

Update this account\'s settings, and return the updated settings.  A new object will be created, even if the default settings are supplied.

**`Throws`**

**`Memberof`**

AccountSettingApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<`void`\>\>

#### Defined in

[api.ts:2817](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L2817)

___

### accountSettingRetrieve

▸ **accountSettingRetrieve**(`options?`): `Promise`<`AxiosResponse`<`void`\>\>

Show this account\'s settings, or the defaults.  This will not create a new account settings object if none exists.

**`Throws`**

**`Memberof`**

AccountSettingApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<`void`\>\>

#### Defined in

[api.ts:2827](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L2827)
