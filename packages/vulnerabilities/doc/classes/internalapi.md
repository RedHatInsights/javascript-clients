[@redhat-cloud-services/vulnerabilities-client](../README.md) > [InternalApi](../classes/internalapi.md)

# Class: InternalApi

InternalApi - object-oriented interface

*__export__*: 

*__class__*: InternalApi

*__extends__*: {BaseAPI}

## Hierarchy

 [BaseAPI](baseapi.md)

**↳ InternalApi**

## Index

### Constructors

* [constructor](internalapi.md#constructor)

### Properties

* [axios](internalapi.md#axios)
* [basePath](internalapi.md#basepath)
* [configuration](internalapi.md#configuration)

### Methods

* [refreshAccount](internalapi.md#refreshaccount)
* [refreshAccountCve](internalapi.md#refreshaccountcve)
* [refreshCve](internalapi.md#refreshcve)
* [refreshSystem](internalapi.md#refreshsystem)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new InternalApi**(configuration?: *[Configuration](configuration.md)*, basePath?: *`string`*, axios?: *`AxiosInstance`*): [InternalApi](internalapi.md)

*Inherited from [BaseAPI](baseapi.md).[constructor](baseapi.md#constructor)*

*Defined in [api.ts:49](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L49)*

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| `Optional` configuration | [Configuration](configuration.md) | - |
| `Default value` basePath | `string` |  BASE_PATH |
| `Default value` axios | `AxiosInstance` |  globalAxios |

**Returns:** [InternalApi](internalapi.md)

___

## Properties

<a id="axios"></a>

### `<Protected>` axios

**● axios**: *`AxiosInstance`*

*Inherited from [BaseAPI](baseapi.md).[axios](baseapi.md#axios)*

*Defined in [api.ts:51](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L51)*

___
<a id="basepath"></a>

### `<Protected>` basePath

**● basePath**: *`string`*

*Inherited from [BaseAPI](baseapi.md).[basePath](baseapi.md#basepath)*

*Defined in [api.ts:51](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L51)*

___
<a id="configuration"></a>

### `<Protected>` configuration

**● configuration**: *[Configuration](configuration.md) \| `undefined`*

*Inherited from [BaseAPI](baseapi.md).[configuration](baseapi.md#configuration)*

*Defined in [api.ts:49](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L49)*

___

## Methods

<a id="refreshaccount"></a>

###  refreshAccount

▸ **refreshAccount**(accountId: *`string`*, options?: *`any`*): `AxiosPromise`<`Response`>

*Defined in [api.ts:2725](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L2725)*

Refresh cached counts for given account ID. Admin interface, available only to internal users.

*__summary__*: Refresh cached counts for given account ID.

*__throws__*: {RequiredError}

*__memberof__*: InternalApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| accountId | `string` |  Account ID of user. |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<`Response`>

___
<a id="refreshaccountcve"></a>

###  refreshAccountCve

▸ **refreshAccountCve**(accountId: *`string`*, cveId: *`string`*, options?: *`any`*): `AxiosPromise`<`Response`>

*Defined in [api.ts:2738](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L2738)*

Refresh cached counts for given account ID and CVE. Admin interface, available only to internal users.

*__summary__*: Refresh cached counts for given account ID and CVE.

*__throws__*: {RequiredError}

*__memberof__*: InternalApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| accountId | `string` |  Account ID of user. |
| cveId | `string` |  CVE id. |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<`Response`>

___
<a id="refreshcve"></a>

###  refreshCve

▸ **refreshCve**(cveId: *`string`*, options?: *`any`*): `AxiosPromise`<`Response`>

*Defined in [api.ts:2750](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L2750)*

Refresh cached counts for given CVE. Admin interface, available only to internal users.

*__summary__*: Refresh cached counts for given CVE.

*__throws__*: {RequiredError}

*__memberof__*: InternalApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| cveId | `string` |  CVE id. |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<`Response`>

___
<a id="refreshsystem"></a>

###  refreshSystem

▸ **refreshSystem**(inventoryId: *`string`*, options?: *`any`*): `AxiosPromise`<`Response`>

*Defined in [api.ts:2762](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L2762)*

Refresh cached counts for given inventory ID. Admin interface, available only to internal users.

*__summary__*: Refresh cached counts for given inventory ID.

*__throws__*: {RequiredError}

*__memberof__*: InternalApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| inventoryId | `string` |  Inventory ID. |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<`Response`>

___

