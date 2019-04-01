[@redhat-cloud-services/rbac-client](../README.md) > [PolicyApi](../classes/policyapi.md)

# Class: PolicyApi

PolicyApi - object-oriented interface

*__export__*: 

*__class__*: PolicyApi

*__extends__*: {BaseAPI}

## Hierarchy

 [BaseAPI](baseapi.md)

**↳ PolicyApi**

## Index

### Constructors

* [constructor](policyapi.md#constructor)

### Properties

* [axios](policyapi.md#axios)
* [basePath](policyapi.md#basepath)
* [configuration](policyapi.md#configuration)

### Methods

* [createPolicies](policyapi.md#createpolicies)
* [deletePolicy](policyapi.md#deletepolicy)
* [getPolicy](policyapi.md#getpolicy)
* [listPolicies](policyapi.md#listpolicies)
* [updatePolicy](policyapi.md#updatepolicy)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new PolicyApi**(configuration?: *[Configuration](configuration.md)*, basePath?: *`string`*, axios?: *`AxiosInstance`*): [PolicyApi](policyapi.md)

*Inherited from [BaseAPI](baseapi.md).[constructor](baseapi.md#constructor)*

*Defined in api.ts:49*

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| `Optional` configuration | [Configuration](configuration.md) | - |
| `Default value` basePath | `string` |  BASE_PATH |
| `Default value` axios | `AxiosInstance` |  globalAxios |

**Returns:** [PolicyApi](policyapi.md)

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

<a id="createpolicies"></a>

###  createPolicies

▸ **createPolicies**(policyIn: *[PolicyIn](../interfaces/policyin.md)*, options?: *`any`*): `AxiosPromise`<[PolicyExtended](../interfaces/policyextended.md)>

*Defined in api.ts:2038*

*__summary__*: Create a policy in a tenant

*__throws__*: {RequiredError}

*__memberof__*: PolicyApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| policyIn | [PolicyIn](../interfaces/policyin.md) |  Policy to create |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[PolicyExtended](../interfaces/policyextended.md)>

___
<a id="deletepolicy"></a>

###  deletePolicy

▸ **deletePolicy**(uuid: *`string`*, options?: *`any`*): `AxiosPromise`<`Response`>

*Defined in api.ts:2050*

*__summary__*: Delete a policy in the tenant

*__throws__*: {RequiredError}

*__memberof__*: PolicyApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| uuid | `string` |  ID of policy to delete |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<`Response`>

___
<a id="getpolicy"></a>

###  getPolicy

▸ **getPolicy**(uuid: *`string`*, options?: *`any`*): `AxiosPromise`<[PolicyExtended](../interfaces/policyextended.md)>

*Defined in api.ts:2062*

*__summary__*: Get a policy in the tenant

*__throws__*: {RequiredError}

*__memberof__*: PolicyApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| uuid | `string` |  ID of policy to get |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[PolicyExtended](../interfaces/policyextended.md)>

___
<a id="listpolicies"></a>

###  listPolicies

▸ **listPolicies**(limit?: *`number`*, offset?: *`number`*, name?: *`string`*, orderBy?: *`string`*, options?: *`any`*): `AxiosPromise`<[PolicyPagination](../interfaces/policypagination.md)>

*Defined in api.ts:2077*

*__summary__*: List the policies in the tenant

*__throws__*: {RequiredError}

*__memberof__*: PolicyApi

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` limit | `number` |
| `Optional` offset | `number` |
| `Optional` name | `string` |
| `Optional` orderBy | `string` |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[PolicyPagination](../interfaces/policypagination.md)>

___
<a id="updatepolicy"></a>

###  updatePolicy

▸ **updatePolicy**(uuid: *`string`*, policyIn: *[PolicyIn](../interfaces/policyin.md)*, options?: *`any`*): `AxiosPromise`<[PolicyExtended](../interfaces/policyextended.md)>

*Defined in api.ts:2090*

*__summary__*: Update a policy in the tenant

*__throws__*: {RequiredError}

*__memberof__*: PolicyApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| uuid | `string` |  ID of policy to update |
| policyIn | [PolicyIn](../interfaces/policyin.md) |  Policy to update |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[PolicyExtended](../interfaces/policyextended.md)>

___

