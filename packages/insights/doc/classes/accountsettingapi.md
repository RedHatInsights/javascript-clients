[@redhat-cloud-services/insights-client](../README.md) > [AccountSettingApi](../classes/accountsettingapi.md)

# Class: AccountSettingApi

AccountSettingApi - object-oriented interface

*__export__*: 

*__class__*: AccountSettingApi

*__extends__*: {BaseAPI}

## Hierarchy

 [BaseAPI](baseapi.md)

**↳ AccountSettingApi**

## Index

### Constructors

* [constructor](accountsettingapi.md#constructor)

### Properties

* [axios](accountsettingapi.md#axios)
* [basePath](accountsettingapi.md#basepath)
* [configuration](accountsettingapi.md#configuration)

### Methods

* [accountSettingCreate](accountsettingapi.md#accountsettingcreate)
* [accountSettingList](accountsettingapi.md#accountsettinglist)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new AccountSettingApi**(configuration?: *[Configuration](configuration.md)*, basePath?: *`string`*, axios?: *`AxiosInstance`*): [AccountSettingApi](accountsettingapi.md)

*Inherited from [BaseAPI](baseapi.md).[constructor](baseapi.md#constructor)*

*Defined in [api.ts:49](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L49)*

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| `Optional` configuration | [Configuration](configuration.md) | - |
| `Default value` basePath | `string` |  BASE_PATH |
| `Default value` axios | `AxiosInstance` |  globalAxios |

**Returns:** [AccountSettingApi](accountsettingapi.md)

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

<a id="accountsettingcreate"></a>

###  accountSettingCreate

▸ **accountSettingCreate**(accountSetting: *[AccountSetting](../interfaces/accountsetting.md)*, options?: *`any`*): `AxiosPromise`<[AccountSetting](../interfaces/accountsetting.md)>

*Defined in [api.ts:1171](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L1171)*

Update this account's settings, and return the updated settings.

*__throws__*: {RequiredError}

*__memberof__*: AccountSettingApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| accountSetting | [AccountSetting](../interfaces/accountsetting.md) |  \- |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[AccountSetting](../interfaces/accountsetting.md)>

___
<a id="accountsettinglist"></a>

###  accountSettingList

▸ **accountSettingList**(options?: *`any`*): `AxiosPromise`<`Response`>

*Defined in [api.ts:1181](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L1181)*

Show this account's settings, or the defaults.

*__throws__*: {RequiredError}

*__memberof__*: AccountSettingApi

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<`Response`>

___

