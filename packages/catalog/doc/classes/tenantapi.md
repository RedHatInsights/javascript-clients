[@redhat-cloud-services/catalog-client](../README.md) > [TenantApi](../classes/tenantapi.md)

# Class: TenantApi

TenantApi - object-oriented interface

*__export__*: 

*__class__*: TenantApi

*__extends__*: {BaseAPI}

## Hierarchy

 [BaseAPI](baseapi.md)

**↳ TenantApi**

## Index

### Constructors

* [constructor](tenantapi.md#constructor)

### Properties

* [axios](tenantapi.md#axios)
* [basePath](tenantapi.md#basepath)
* [configuration](tenantapi.md#configuration)

### Methods

* [listTenants](tenantapi.md#listtenants)
* [showTenant](tenantapi.md#showtenant)
* [tenantSeed](tenantapi.md#tenantseed)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new TenantApi**(configuration?: *[Configuration](configuration.md)*, basePath?: *`string`*, axios?: *`AxiosInstance`*): [TenantApi](tenantapi.md)

*Inherited from [BaseAPI](baseapi.md).[constructor](baseapi.md#constructor)*

*Defined in [api.ts:49](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L49)*

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| `Optional` configuration | [Configuration](configuration.md) | - |
| `Default value` basePath | `string` |  BASE_PATH |
| `Default value` axios | `AxiosInstance` |  globalAxios |

**Returns:** [TenantApi](tenantapi.md)

___

## Properties

<a id="axios"></a>

### `<Protected>` axios

**● axios**: *`AxiosInstance`*

*Inherited from [BaseAPI](baseapi.md).[axios](baseapi.md#axios)*

*Defined in [api.ts:51](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L51)*

___
<a id="basepath"></a>

### `<Protected>` basePath

**● basePath**: *`string`*

*Inherited from [BaseAPI](baseapi.md).[basePath](baseapi.md#basepath)*

*Defined in [api.ts:51](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L51)*

___
<a id="configuration"></a>

### `<Protected>` configuration

**● configuration**: *[Configuration](configuration.md) \| `undefined`*

*Inherited from [BaseAPI](baseapi.md).[configuration](baseapi.md#configuration)*

*Defined in [api.ts:49](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L49)*

___

## Methods

<a id="listtenants"></a>

###  listTenants

▸ **listTenants**(options?: *`any`*): `AxiosPromise`<[TenantsCollection](../interfaces/tenantscollection.md)>

*Defined in [api.ts:6976](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L6976)*

Get a list of tenants.

*__summary__*: List Tenants

*__throws__*: {RequiredError}

*__memberof__*: TenantApi

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[TenantsCollection](../interfaces/tenantscollection.md)>

___
<a id="showtenant"></a>

###  showTenant

▸ **showTenant**(tenantId: *`string`*, options?: *`any`*): `AxiosPromise`<[Tenant](../interfaces/tenant.md)>

*Defined in [api.ts:6988](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L6988)*

Gets the tenant specified by the tenant id.

*__summary__*: Get a specific Tenant

*__throws__*: {RequiredError}

*__memberof__*: TenantApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| tenantId | `string` |  ID of the resource |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[Tenant](../interfaces/tenant.md)>

___
<a id="tenantseed"></a>

###  tenantSeed

▸ **tenantSeed**(tenantId: *`string`*, options?: *`any`*): `AxiosPromise`<`Response`>

*Defined in [api.ts:7000](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L7000)*

Run a task to seed the Tenant Groups required for an org admin to onboard additional users.

*__summary__*: Seed Tenant Groups

*__throws__*: {RequiredError}

*__memberof__*: TenantApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| tenantId | `string` |  ID of the resource |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<`Response`>

___

