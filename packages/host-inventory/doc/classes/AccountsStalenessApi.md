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

- [apiStalenessCreateStaleness](AccountsStalenessApi.md#apistalenesscreatestaleness)
- [apiStalenessDeleteStaleness](AccountsStalenessApi.md#apistalenessdeletestaleness)
- [apiStalenessGetDefaultStaleness](AccountsStalenessApi.md#apistalenessgetdefaultstaleness)
- [apiStalenessGetStaleness](AccountsStalenessApi.md#apistalenessgetstaleness)
- [apiStalenessUpdateStaleness](AccountsStalenessApi.md#apistalenessupdatestaleness)

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

[base.ts:51](https://github.com/mkholjuraev/javascript-clients/blob/master/packages/host-inventory/base.ts#L51)

## Properties

### axios

• `Protected` **axios**: `AxiosInstance` = `globalAxios`

#### Inherited from

BaseAPI.axios

#### Defined in

[base.ts:51](https://github.com/mkholjuraev/javascript-clients/blob/master/packages/host-inventory/base.ts#L51)

___

### basePath

• `Protected` **basePath**: `string` = `BASE_PATH`

#### Inherited from

BaseAPI.basePath

#### Defined in

[base.ts:51](https://github.com/mkholjuraev/javascript-clients/blob/master/packages/host-inventory/base.ts#L51)

___

### configuration

• `Protected` **configuration**: [`Configuration`](Configuration.md)

#### Inherited from

BaseAPI.configuration

#### Defined in

[base.ts:49](https://github.com/mkholjuraev/javascript-clients/blob/master/packages/host-inventory/base.ts#L49)

## Methods

### apiStalenessCreateStaleness

▸ **apiStalenessCreateStaleness**(`stalenessIn`, `options?`): `Promise`<`AxiosResponse`<[`StalenessOutput`](../interfaces/StalenessOutput.md), `any`\>\>

Create account staleness record. Required permissions: inventory:TODO:write

**`Summary`**

Create account staleness record

**`Throws`**

**`Memberof`**

AccountsStalenessApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `stalenessIn` | [`StalenessIn`](../interfaces/StalenessIn.md) | Data required to create a record for a account staleness. |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`StalenessOutput`](../interfaces/StalenessOutput.md), `any`\>\>

#### Defined in

[api.ts:3083](https://github.com/mkholjuraev/javascript-clients/blob/master/packages/host-inventory/api.ts#L3083)

___

### apiStalenessDeleteStaleness

▸ **apiStalenessDeleteStaleness**(`options?`): `Promise`<`AxiosResponse`<`void`, `any`\>\>

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

`Promise`<`AxiosResponse`<`void`, `any`\>\>

#### Defined in

[api.ts:3094](https://github.com/mkholjuraev/javascript-clients/blob/master/packages/host-inventory/api.ts#L3094)

___

### apiStalenessGetDefaultStaleness

▸ **apiStalenessGetDefaultStaleness**(`options?`): `Promise`<`AxiosResponse`<[`StalenessOutput`](../interfaces/StalenessOutput.md), `any`\>\>

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

`Promise`<`AxiosResponse`<[`StalenessOutput`](../interfaces/StalenessOutput.md), `any`\>\>

#### Defined in

[api.ts:3105](https://github.com/mkholjuraev/javascript-clients/blob/master/packages/host-inventory/api.ts#L3105)

___

### apiStalenessGetStaleness

▸ **apiStalenessGetStaleness**(`options?`): `Promise`<`AxiosResponse`<[`StalenessOutput`](../interfaces/StalenessOutput.md), `any`\>\>

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

`Promise`<`AxiosResponse`<[`StalenessOutput`](../interfaces/StalenessOutput.md), `any`\>\>

#### Defined in

[api.ts:3116](https://github.com/mkholjuraev/javascript-clients/blob/master/packages/host-inventory/api.ts#L3116)

___

### apiStalenessUpdateStaleness

▸ **apiStalenessUpdateStaleness**(`stalenessIn`, `options?`): `Promise`<`AxiosResponse`<[`StalenessOutput`](../interfaces/StalenessOutput.md), `any`\>\>

Update account staleness record. Required permissions: inventory:staleness:write

**`Summary`**

Update account staleness record

**`Throws`**

**`Memberof`**

AccountsStalenessApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `stalenessIn` | [`StalenessIn`](../interfaces/StalenessIn.md) | Data required to update a record for a account staleness. |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`StalenessOutput`](../interfaces/StalenessOutput.md), `any`\>\>

#### Defined in

[api.ts:3128](https://github.com/mkholjuraev/javascript-clients/blob/master/packages/host-inventory/api.ts#L3128)
