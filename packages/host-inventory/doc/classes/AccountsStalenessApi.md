[@redhat-cloud-services/host-inventory-client](../README.md) / [Exports](../modules.md) / AccountsStalenessApi

# Class: AccountsStalenessApi

AccountsStalenessApi - object-oriented interface

**`Export`**

## Hierarchy

- `BaseAPI`

  ↳ **`AccountsStalenessApi`**

## Table of contents

### Constructors

- [constructor](AccountsStalenessApi.md#constructor)

### Properties

- [axios](AccountsStalenessApi.md#axios)
- [basePath](AccountsStalenessApi.md#basepath)
- [configuration](AccountsStalenessApi.md#configuration)

### Methods

- [apiAccountStalenessCreateStaleness](AccountsStalenessApi.md#apiaccountstalenesscreatestaleness)
- [apiAccountStalenessDeleteStaleness](AccountsStalenessApi.md#apiaccountstalenessdeletestaleness)
- [apiAccountStalenessGetStaleness](AccountsStalenessApi.md#apiaccountstalenessgetstaleness)
- [apiAccountStalenessResetStaleness](AccountsStalenessApi.md#apiaccountstalenessresetstaleness)
- [apiAccountStalenessUpdateStaleness](AccountsStalenessApi.md#apiaccountstalenessupdatestaleness)

## Constructors

### constructor

• **new AccountsStalenessApi**(`configuration?`, `basePath?`, `axios?`)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `configuration?` | [`Configuration`](Configuration.md) | `undefined` |
| `basePath` | `string` | `BASE_PATH` |
| `axios` | `AxiosInstance` | `globalAxios` |

#### Inherited from

BaseAPI.constructor

#### Defined in

[base.ts:51](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/base.ts#L51)

## Properties

### axios

• `Protected` **axios**: `AxiosInstance` = `globalAxios`

#### Inherited from

BaseAPI.axios

#### Defined in

[base.ts:51](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/base.ts#L51)

___

### basePath

• `Protected` **basePath**: `string` = `BASE_PATH`

#### Inherited from

BaseAPI.basePath

#### Defined in

[base.ts:51](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/base.ts#L51)

___

### configuration

• `Protected` **configuration**: [`Configuration`](Configuration.md)

#### Inherited from

BaseAPI.configuration

#### Defined in

[base.ts:49](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/base.ts#L49)

## Methods

### apiAccountStalenessCreateStaleness

▸ **apiAccountStalenessCreateStaleness**(`accountStalenessIn`, `options?`): `Promise`<`AxiosResponse`<[`AccountStalenessOutput`](../interfaces/AccountStalenessOutput.md)\>\>

Create account staleness record. Required permissions: inventory:TODO:write

**`Summary`**

Create account staleness record

**`Throws`**

**`Memberof`**

AccountsStalenessApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `accountStalenessIn` | [`AccountStalenessIn`](../interfaces/AccountStalenessIn.md) | Data required to create a record for a account staleness. |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`AccountStalenessOutput`](../interfaces/AccountStalenessOutput.md)\>\>

#### Defined in

[api.ts:3008](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L3008)

___

### apiAccountStalenessDeleteStaleness

▸ **apiAccountStalenessDeleteStaleness**(`options?`): `Promise`<`AxiosResponse`<`void`\>\>

Delete an account staleness <br /><br /> Required permissions: inventory:staleness:write

**`Summary`**

Delete an account staleness

**`Throws`**

**`Memberof`**

AccountsStalenessApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<`void`\>\>

#### Defined in

[api.ts:3019](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L3019)

___

### apiAccountStalenessGetStaleness

▸ **apiAccountStalenessGetStaleness**(`options?`): `Promise`<`AxiosResponse`<[`AccountStalenessOutput`](../interfaces/AccountStalenessOutput.md)\>\>

Read the entire list of all accounts staleness available. Required permissions: inventory:TODO:read

**`Summary`**

Read the entire list of account staleness

**`Throws`**

**`Memberof`**

AccountsStalenessApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`AccountStalenessOutput`](../interfaces/AccountStalenessOutput.md)\>\>

#### Defined in

[api.ts:3030](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L3030)

___

### apiAccountStalenessResetStaleness

▸ **apiAccountStalenessResetStaleness**(`options?`): `Promise`<`AxiosResponse`<[`AccountStalenessOutput`](../interfaces/AccountStalenessOutput.md)\>\>

Reset account staleness record. Required permissions: inventory:TODO:read

**`Summary`**

Reset account staleness

**`Throws`**

**`Memberof`**

AccountsStalenessApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`AccountStalenessOutput`](../interfaces/AccountStalenessOutput.md)\>\>

#### Defined in

[api.ts:3041](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L3041)

___

### apiAccountStalenessUpdateStaleness

▸ **apiAccountStalenessUpdateStaleness**(`options?`): `Promise`<`AxiosResponse`<[`AccountStalenessOutput`](../interfaces/AccountStalenessOutput.md)\>\>

Update account staleness record. Required permissions: inventory:TODO:write

**`Summary`**

Update account staleness record

**`Throws`**

**`Memberof`**

AccountsStalenessApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`AccountStalenessOutput`](../interfaces/AccountStalenessOutput.md)\>\>

#### Defined in

[api.ts:3052](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L3052)
