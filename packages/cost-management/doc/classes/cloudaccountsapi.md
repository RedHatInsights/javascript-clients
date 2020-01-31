[@redhat-cloud-services/cost-management-client](../README.md) > [CloudAccountsApi](../classes/cloudaccountsapi.md)

# Class: CloudAccountsApi

CloudAccountsApi - object-oriented interface

*__export__*: 

*__class__*: CloudAccountsApi

*__extends__*: {BaseAPI}

## Hierarchy

 [BaseAPI](baseapi.md)

**↳ CloudAccountsApi**

## Index

### Constructors

* [constructor](cloudaccountsapi.md#constructor)

### Properties

* [axios](cloudaccountsapi.md#axios)
* [basePath](cloudaccountsapi.md#basepath)
* [configuration](cloudaccountsapi.md#configuration)

### Methods

* [getCloudAccounts](cloudaccountsapi.md#getcloudaccounts)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new CloudAccountsApi**(configuration?: *[Configuration](configuration.md)*, basePath?: *`string`*, axios?: *`AxiosInstance`*): [CloudAccountsApi](cloudaccountsapi.md)

*Inherited from [BaseAPI](baseapi.md).[constructor](baseapi.md#constructor)*

*Defined in [api.ts:49](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/cost-management/api.ts#L49)*

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| `Optional` configuration | [Configuration](configuration.md) | - |
| `Default value` basePath | `string` |  BASE_PATH |
| `Default value` axios | `AxiosInstance` |  globalAxios |

**Returns:** [CloudAccountsApi](cloudaccountsapi.md)

___

## Properties

<a id="axios"></a>

### `<Protected>` axios

**● axios**: *`AxiosInstance`*

*Inherited from [BaseAPI](baseapi.md).[axios](baseapi.md#axios)*

*Defined in [api.ts:51](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/cost-management/api.ts#L51)*

___
<a id="basepath"></a>

### `<Protected>` basePath

**● basePath**: *`string`*

*Inherited from [BaseAPI](baseapi.md).[basePath](baseapi.md#basepath)*

*Defined in [api.ts:51](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/cost-management/api.ts#L51)*

___
<a id="configuration"></a>

### `<Protected>` configuration

**● configuration**: *[Configuration](configuration.md) \| `undefined`*

*Inherited from [BaseAPI](baseapi.md).[configuration](baseapi.md#configuration)*

*Defined in [api.ts:49](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/cost-management/api.ts#L49)*

___

## Methods

<a id="getcloudaccounts"></a>

###  getCloudAccounts

▸ **getCloudAccounts**(options?: *`any`*): `AxiosPromise`<[CloudAccountPagination](../interfaces/cloudaccountpagination.md)>

*Defined in [api.ts:3966](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/cost-management/api.ts#L3966)*

*__summary__*: Obtain defined cloud accounts

*__throws__*: {RequiredError}

*__memberof__*: CloudAccountsApi

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[CloudAccountPagination](../interfaces/cloudaccountpagination.md)>

___

