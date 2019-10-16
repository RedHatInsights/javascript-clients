[@redhat-cloud-services/cost-management-client](../README.md) > [UpdateChargeApi](../classes/updatechargeapi.md)

# Class: UpdateChargeApi

UpdateChargeApi - object-oriented interface

*__export__*: 

*__class__*: UpdateChargeApi

*__extends__*: {BaseAPI}

## Hierarchy

 [BaseAPI](baseapi.md)

**↳ UpdateChargeApi**

## Index

### Constructors

* [constructor](updatechargeapi.md#constructor)

### Properties

* [axios](updatechargeapi.md#axios)
* [basePath](updatechargeapi.md#basepath)
* [configuration](updatechargeapi.md#configuration)

### Methods

* [updateChargeList](updatechargeapi.md#updatechargelist)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new UpdateChargeApi**(configuration?: *[Configuration](configuration.md)*, basePath?: *`string`*, axios?: *`AxiosInstance`*): [UpdateChargeApi](updatechargeapi.md)

*Inherited from [BaseAPI](baseapi.md).[constructor](baseapi.md#constructor)*

*Defined in api.ts:49*

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| `Optional` configuration | [Configuration](configuration.md) | - |
| `Default value` basePath | `string` |  BASE_PATH |
| `Default value` axios | `AxiosInstance` |  globalAxios |

**Returns:** [UpdateChargeApi](updatechargeapi.md)

___

## Properties

<a id="axios"></a>

### `<Protected>` axios

**● axios**: *`AxiosInstance`*

*Inherited from [BaseAPI](baseapi.md).[axios](baseapi.md#axios)*

*Defined in api.ts:51*

___
<a id="basepath"></a>

### `<Protected>` basePath

**● basePath**: *`string`*

*Inherited from [BaseAPI](baseapi.md).[basePath](baseapi.md#basepath)*

*Defined in api.ts:51*

___
<a id="configuration"></a>

### `<Protected>` configuration

**● configuration**: *[Configuration](configuration.md) \| `undefined`*

*Inherited from [BaseAPI](baseapi.md).[configuration](baseapi.md#configuration)*

*Defined in api.ts:49*

___

## Methods

<a id="updatechargelist"></a>

###  updateChargeList

▸ **updateChargeList**(providerUuid?: *`string`*, schema?: *`string`*, options?: *`any`*): `AxiosPromise`<[UpdateChargeGetResponse](../interfaces/updatechargegetresponse.md)>

*Defined in api.ts:903*

Update report summary tables in the database.

*__throws__*: {RequiredError}

*__memberof__*: UpdateChargeApi

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` providerUuid | `string` |
| `Optional` schema | `string` |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[UpdateChargeGetResponse](../interfaces/updatechargegetresponse.md)>

___

