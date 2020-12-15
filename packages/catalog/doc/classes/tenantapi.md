[@redhat-cloud-services/catalog-client](../README.md) › [Globals](../globals.md) › [TenantApi](tenantapi.md)

# Class: TenantApi

TenantApi - object-oriented interface

**`export`** 

## Hierarchy

* [BaseAPI](baseapi.md)

  ↳ **TenantApi**

## Index

### Constructors

* [constructor](tenantapi.md#constructor)

### Properties

* [axios](tenantapi.md#protected-axios)
* [basePath](tenantapi.md#protected-basepath)
* [configuration](tenantapi.md#protected-configuration)

### Methods

* [listTenants](tenantapi.md#listtenants)
* [showTenant](tenantapi.md#showtenant)
* [tenantSeed](tenantapi.md#tenantseed)

## Constructors

###  constructor

\+ **new TenantApi**(`configuration?`: [Configuration](configuration.md), `basePath`: string, `axios`: AxiosInstance): *[TenantApi](tenantapi.md)*

*Inherited from [BaseAPI](baseapi.md).[constructor](baseapi.md#constructor)*

*Defined in [packages/catalog/base.ts:49](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/base.ts#L49)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`configuration?` | [Configuration](configuration.md) | - |
`basePath` | string | BASE_PATH |
`axios` | AxiosInstance | globalAxios |

**Returns:** *[TenantApi](tenantapi.md)*

## Properties

### `Protected` axios

• **axios**: *AxiosInstance*

*Inherited from [BaseAPI](baseapi.md).[axios](baseapi.md#protected-axios)*

*Defined in [packages/catalog/base.ts:51](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/base.ts#L51)*

___

### `Protected` basePath

• **basePath**: *string*

*Inherited from [BaseAPI](baseapi.md).[basePath](baseapi.md#protected-basepath)*

*Defined in [packages/catalog/base.ts:51](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/base.ts#L51)*

___

### `Protected` configuration

• **configuration**: *[Configuration](configuration.md) | undefined*

*Inherited from [BaseAPI](baseapi.md).[configuration](baseapi.md#protected-configuration)*

*Defined in [packages/catalog/base.ts:49](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/base.ts#L49)*

## Methods

###  listTenants

▸ **listTenants**(`options?`: any): *Promise‹AxiosResponse‹[TenantsCollection](../interfaces/tenantscollection.md)››*

*Defined in [packages/catalog/api.ts:8183](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L8183)*

Get a list of tenants.

**`summary`** List Tenants

**`throws`** {RequiredError}

**`memberof`** TenantApi

**Parameters:**

Name | Type |
------ | ------ |
`options?` | any |

**Returns:** *Promise‹AxiosResponse‹[TenantsCollection](../interfaces/tenantscollection.md)››*

___

###  showTenant

▸ **showTenant**(`tenantId`: string, `options?`: any): *Promise‹AxiosResponse‹[Tenant](../interfaces/tenant.md)››*

*Defined in [packages/catalog/api.ts:8195](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L8195)*

Gets the tenant specified by the tenant id.

**`summary`** Get a specific Tenant

**`throws`** {RequiredError}

**`memberof`** TenantApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`tenantId` | string | ID of the resource |
`options?` | any | - |

**Returns:** *Promise‹AxiosResponse‹[Tenant](../interfaces/tenant.md)››*

___

###  tenantSeed

▸ **tenantSeed**(`tenantId`: string, `options?`: any): *Promise‹AxiosResponse‹void››*

*Defined in [packages/catalog/api.ts:8207](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L8207)*

Run a task to seed the Tenant Groups required for an org admin to onboard additional users.

**`summary`** Seed Tenant Groups

**`throws`** {RequiredError}

**`memberof`** TenantApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`tenantId` | string | ID of the resource |
`options?` | any | - |

**Returns:** *Promise‹AxiosResponse‹void››*
