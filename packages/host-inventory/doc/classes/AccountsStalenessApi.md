[@redhat-cloud-services/host-inventory-client](../README.md) / [Exports](../modules.md) / AccountsStalenessApi

# Class: AccountsStalenessApi

AccountsStalenessApi - object-oriented interface

**`Export`**

AccountsStalenessApi

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

• **new AccountsStalenessApi**(`configuration?`, `basePath?`, `axios?`): [`AccountsStalenessApi`](AccountsStalenessApi.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `configuration?` | [`Configuration`](Configuration.md) | `undefined` |
| `basePath` | `string` | `BASE_PATH` |
| `axios` | `AxiosInstance` | `globalAxios` |

#### Returns

[`AccountsStalenessApi`](AccountsStalenessApi.md)

#### Inherited from

BaseAPI.constructor

#### Defined in

[base.ts:51](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/host-inventory/base.ts#L51)

## Properties

### axios

• `Protected` **axios**: `AxiosInstance` = `globalAxios`

#### Inherited from

BaseAPI.axios

#### Defined in

[base.ts:51](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/host-inventory/base.ts#L51)

___

### basePath

• `Protected` **basePath**: `string` = `BASE_PATH`

#### Inherited from

BaseAPI.basePath

#### Defined in

[base.ts:51](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/host-inventory/base.ts#L51)

___

### configuration

• `Protected` **configuration**: `undefined` \| [`Configuration`](Configuration.md)

#### Inherited from

BaseAPI.configuration

#### Defined in

[base.ts:49](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/host-inventory/base.ts#L49)

## Methods

### apiStalenessCreateStaleness

▸ **apiStalenessCreateStaleness**(`stalenessIn`, `options?`): `Promise`\<`AxiosResponse`\<[`StalenessOutput`](../interfaces/StalenessOutput.md), `any`\>\>

Create account staleness record. Required permissions: inventory:TODO:write

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `stalenessIn` | [`StalenessIn`](../interfaces/StalenessIn.md) | Data required to create a record for a account staleness. |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<[`StalenessOutput`](../interfaces/StalenessOutput.md), `any`\>\>

**`Summary`**

Create account staleness record

**`Throws`**

**`Memberof`**

AccountsStalenessApi

#### Defined in

[api.ts:3290](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/host-inventory/api.ts#L3290)

___

### apiStalenessDeleteStaleness

▸ **apiStalenessDeleteStaleness**(`options?`): `Promise`\<`AxiosResponse`\<`void`, `any`\>\>

Delete an account staleness <br /><br /> Required permissions: inventory:staleness:write

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<`void`, `any`\>\>

**`Summary`**

Delete an account staleness

**`Throws`**

**`Memberof`**

AccountsStalenessApi

#### Defined in

[api.ts:3301](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/host-inventory/api.ts#L3301)

___

### apiStalenessGetDefaultStaleness

▸ **apiStalenessGetDefaultStaleness**(`options?`): `Promise`\<`AxiosResponse`\<[`StalenessOutput`](../interfaces/StalenessOutput.md), `any`\>\>

Read the entire list of all accounts staleness available. Required permissions: inventory:TODO:read

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<[`StalenessOutput`](../interfaces/StalenessOutput.md), `any`\>\>

**`Summary`**

Read the entire list of account staleness

**`Throws`**

**`Memberof`**

AccountsStalenessApi

#### Defined in

[api.ts:3312](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/host-inventory/api.ts#L3312)

___

### apiStalenessGetStaleness

▸ **apiStalenessGetStaleness**(`options?`): `Promise`\<`AxiosResponse`\<[`StalenessOutput`](../interfaces/StalenessOutput.md), `any`\>\>

Read the entire list of all accounts staleness available. Required permissions: inventory:TODO:read

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<[`StalenessOutput`](../interfaces/StalenessOutput.md), `any`\>\>

**`Summary`**

Read the entire list of account staleness

**`Throws`**

**`Memberof`**

AccountsStalenessApi

#### Defined in

[api.ts:3323](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/host-inventory/api.ts#L3323)

___

### apiStalenessUpdateStaleness

▸ **apiStalenessUpdateStaleness**(`stalenessIn`, `options?`): `Promise`\<`AxiosResponse`\<[`StalenessOutput`](../interfaces/StalenessOutput.md), `any`\>\>

Update account staleness record. Required permissions: inventory:staleness:write

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `stalenessIn` | [`StalenessIn`](../interfaces/StalenessIn.md) | Data required to update a record for a account staleness. |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<[`StalenessOutput`](../interfaces/StalenessOutput.md), `any`\>\>

**`Summary`**

Update account staleness record

**`Throws`**

**`Memberof`**

AccountsStalenessApi

#### Defined in

[api.ts:3335](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/host-inventory/api.ts#L3335)
