[@redhat-cloud-services/insights-client](../README.md) › [Globals](../globals.md) › [AccountSettingApi](accountsettingapi.md)

# Class: AccountSettingApi

AccountSettingApi - object-oriented interface

**`export`** 

## Hierarchy

* [BaseAPI](baseapi.md)

  ↳ **AccountSettingApi**

## Index

### Constructors

* [constructor](accountsettingapi.md#constructor)

### Properties

* [axios](accountsettingapi.md#protected-axios)
* [basePath](accountsettingapi.md#protected-basepath)
* [configuration](accountsettingapi.md#protected-configuration)

### Methods

* [accountSettingCreate](accountsettingapi.md#accountsettingcreate)
* [accountSettingList](accountsettingapi.md#accountsettinglist)

## Constructors

###  constructor

\+ **new AccountSettingApi**(`configuration?`: [Configuration](configuration.md), `basePath`: string, `axios`: AxiosInstance): *[AccountSettingApi](accountsettingapi.md)*

*Inherited from [BaseAPI](baseapi.md).[constructor](baseapi.md#constructor)*

*Defined in [packages/insights/base.ts:49](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/base.ts#L49)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`configuration?` | [Configuration](configuration.md) | - |
`basePath` | string | BASE_PATH |
`axios` | AxiosInstance | globalAxios |

**Returns:** *[AccountSettingApi](accountsettingapi.md)*

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

###  accountSettingCreate

▸ **accountSettingCreate**(`accountSetting`: [AccountSetting](../interfaces/accountsetting.md), `options?`: any): *AxiosPromise‹[AccountSetting](../interfaces/accountsetting.md)›*

*Defined in [packages/insights/api.ts:1406](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L1406)*

A new object will be created, even if the default settings are supplied.

**`summary`** Update this account\'s settings, and return the updated settings.

**`throws`** {RequiredError}

**`memberof`** AccountSettingApi

**Parameters:**

Name | Type |
------ | ------ |
`accountSetting` | [AccountSetting](../interfaces/accountsetting.md) |
`options?` | any |

**Returns:** *AxiosPromise‹[AccountSetting](../interfaces/accountsetting.md)›*

___

###  accountSettingList

▸ **accountSettingList**(`options?`: any): *AxiosPromise‹void›*

*Defined in [packages/insights/api.ts:1417](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L1417)*

This will not create a new account settings object if none exists.

**`summary`** Show this account\'s settings, or the defaults.

**`throws`** {RequiredError}

**`memberof`** AccountSettingApi

**Parameters:**

Name | Type |
------ | ------ |
`options?` | any |

**Returns:** *AxiosPromise‹void›*
