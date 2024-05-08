[@redhat-cloud-services/insights-client](../README.md) / [Exports](../modules.md) / AutosubexclusionApi

# Class: AutosubexclusionApi

AutosubexclusionApi - object-oriented interface

**`Export`**

AutosubexclusionApi

## Hierarchy

- `BaseAPI`

  ↳ **`AutosubexclusionApi`**

## Table of contents

### Constructors

- [constructor](AutosubexclusionApi.md#constructor)

### Properties

- [axios](AutosubexclusionApi.md#axios)
- [basePath](AutosubexclusionApi.md#basepath)
- [configuration](AutosubexclusionApi.md#configuration)

### Methods

- [autosubexclusionCreate](AutosubexclusionApi.md#autosubexclusioncreate)
- [autosubexclusionDestroy](AutosubexclusionApi.md#autosubexclusiondestroy)
- [autosubexclusionList](AutosubexclusionApi.md#autosubexclusionlist)
- [autosubexclusionRetrieve](AutosubexclusionApi.md#autosubexclusionretrieve)

## Constructors

### constructor

• **new AutosubexclusionApi**(`configuration?`, `basePath?`, `axios?`): [`AutosubexclusionApi`](AutosubexclusionApi.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `configuration?` | [`Configuration`](Configuration.md) | `undefined` |
| `basePath` | `string` | `BASE_PATH` |
| `axios` | `AxiosInstance` | `globalAxios` |

#### Returns

[`AutosubexclusionApi`](AutosubexclusionApi.md)

#### Inherited from

BaseAPI.constructor

#### Defined in

[base.ts:51](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/insights/base.ts#L51)

## Properties

### axios

• `Protected` **axios**: `AxiosInstance` = `globalAxios`

#### Inherited from

BaseAPI.axios

#### Defined in

[base.ts:51](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/insights/base.ts#L51)

___

### basePath

• `Protected` **basePath**: `string` = `BASE_PATH`

#### Inherited from

BaseAPI.basePath

#### Defined in

[base.ts:51](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/insights/base.ts#L51)

___

### configuration

• `Protected` **configuration**: `undefined` \| [`Configuration`](Configuration.md)

#### Inherited from

BaseAPI.configuration

#### Defined in

[base.ts:49](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/insights/base.ts#L49)

## Methods

### autosubexclusionCreate

▸ **autosubexclusionCreate**(`subscriptionExcludedAccount`, `options?`): `Promise`\<`AxiosResponse`\<[`SubscriptionExcludedAccount`](../interfaces/SubscriptionExcludedAccount.md), `any`\>\>

Create a new subscription exclusion for an account.  This creates a new subscription exclusion for an account. This should contain an org_id and account. Only org_id is required. Account is optional.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `subscriptionExcludedAccount` | [`SubscriptionExcludedAccount`](../interfaces/SubscriptionExcludedAccount.md) |  |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<[`SubscriptionExcludedAccount`](../interfaces/SubscriptionExcludedAccount.md), `any`\>\>

**`Throws`**

**`Memberof`**

AutosubexclusionApi

#### Defined in

[api.ts:3605](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/insights/api.ts#L3605)

___

### autosubexclusionDestroy

▸ **autosubexclusionDestroy**(`orgId`, `options?`): `Promise`\<`AxiosResponse`\<`string`, `any`\>\>

Destroy an existing subscription exclusion in the system.  This will DELETE an existing subscription exclusion in the system. Existing subscription exclusions are identified and deleted by the \"org_id\" field.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `orgId` | `string` |  |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<`string`, `any`\>\>

**`Throws`**

**`Memberof`**

AutosubexclusionApi

#### Defined in

[api.ts:3616](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/insights/api.ts#L3616)

___

### autosubexclusionList

▸ **autosubexclusionList**(`limit?`, `offset?`, `options?`): `Promise`\<`AxiosResponse`\<[`PaginatedSubscriptionExcludedAccountList`](../interfaces/PaginatedSubscriptionExcludedAccountList.md), `any`\>\>

Returns all subscription exclusions for accounts  This returns a list of all subscription exclusions. This contains exclusions and their account and org_id. These are all accounts that are excluded from the autosub subscription path for weekly report subscriptions.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `limit?` | `number` | Number of results to return per page. |
| `offset?` | `number` | The initial index from which to return the results. |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<[`PaginatedSubscriptionExcludedAccountList`](../interfaces/PaginatedSubscriptionExcludedAccountList.md), `any`\>\>

**`Throws`**

**`Memberof`**

AutosubexclusionApi

#### Defined in

[api.ts:3628](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/insights/api.ts#L3628)

___

### autosubexclusionRetrieve

▸ **autosubexclusionRetrieve**(`orgId`, `options?`): `Promise`\<`AxiosResponse`\<[`SubscriptionExcludedAccount`](../interfaces/SubscriptionExcludedAccount.md), `any`\>\>

Returns an individual subscription exclusion based on org_id.  This returns an individual subscription exclusion based on the org_id.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `orgId` | `string` |  |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<[`SubscriptionExcludedAccount`](../interfaces/SubscriptionExcludedAccount.md), `any`\>\>

**`Throws`**

**`Memberof`**

AutosubexclusionApi

#### Defined in

[api.ts:3639](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/insights/api.ts#L3639)
