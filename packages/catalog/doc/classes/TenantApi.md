[@redhat-cloud-services/catalog-client](../README.md) / [Exports](../modules.md) / TenantApi

# Class: TenantApi

TenantApi - object-oriented interface

**`Export`**

## Hierarchy

- `BaseAPI`

  ↳ **`TenantApi`**

## Table of contents

### Constructors

- [constructor](TenantApi.md#constructor)

### Properties

- [axios](TenantApi.md#axios)
- [basePath](TenantApi.md#basepath)
- [configuration](TenantApi.md#configuration)

### Methods

- [listTenants](TenantApi.md#listtenants)
- [showTenant](TenantApi.md#showtenant)
- [tenantSeed](TenantApi.md#tenantseed)

## Constructors

### constructor

• **new TenantApi**(`configuration?`, `basePath?`, `axios?`)

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

### listTenants

▸ **listTenants**(`options?`): `Promise`<`AxiosResponse`<[`TenantsCollection`](../interfaces/TenantsCollection.md), `any`\>\>

Get a list of tenants.

**`Summary`**

List Tenants

**`Throws`**

**`Memberof`**

TenantApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`TenantsCollection`](../interfaces/TenantsCollection.md), `any`\>\>

#### Defined in

[api.ts:8365](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L8365)

___

### showTenant

▸ **showTenant**(`tenantId`, `options?`): `Promise`<`AxiosResponse`<[`Tenant`](../interfaces/Tenant.md), `any`\>\>

Gets the tenant specified by the tenant id.

**`Summary`**

Get a specific Tenant

**`Throws`**

**`Memberof`**

TenantApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `tenantId` | `string` | ID of the resource |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`Tenant`](../interfaces/Tenant.md), `any`\>\>

#### Defined in

[api.ts:8377](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L8377)

___

### tenantSeed

▸ **tenantSeed**(`tenantId`, `options?`): `Promise`<`AxiosResponse`<`void`, `any`\>\>

Run a task to seed the Tenant Groups required for an org admin to onboard additional users.

**`Summary`**

Seed Tenant Groups

**`Throws`**

**`Memberof`**

TenantApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `tenantId` | `string` | ID of the resource |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<`void`, `any`\>\>

#### Defined in

[api.ts:8389](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L8389)
