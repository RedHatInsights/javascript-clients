[@redhat-cloud-services/policies-client](../README.md) / [Exports](../modules.md) / PolicyCrudServiceApi

# Class: PolicyCrudServiceApi

PolicyCrudServiceApi - object-oriented interface

**`Export`**

PolicyCrudServiceApi

## Hierarchy

- `BaseAPI`

  ↳ **`PolicyCrudServiceApi`**

## Table of contents

### Constructors

- [constructor](PolicyCrudServiceApi.md#constructor)

### Properties

- [axios](PolicyCrudServiceApi.md#axios)
- [basePath](PolicyCrudServiceApi.md#basepath)
- [configuration](PolicyCrudServiceApi.md#configuration)

### Methods

- [deletePoliciesById](PolicyCrudServiceApi.md#deletepoliciesbyid)
- [deletePoliciesIds](PolicyCrudServiceApi.md#deletepoliciesids)
- [getPolicies](PolicyCrudServiceApi.md#getpolicies)
- [getPoliciesById](PolicyCrudServiceApi.md#getpoliciesbyid)
- [getPoliciesByIdHistoryTrigger](PolicyCrudServiceApi.md#getpoliciesbyidhistorytrigger)
- [getPoliciesIds](PolicyCrudServiceApi.md#getpoliciesids)
- [postPolicies](PolicyCrudServiceApi.md#postpolicies)
- [postPoliciesByIdEnabled](PolicyCrudServiceApi.md#postpoliciesbyidenabled)
- [postPoliciesIdsEnabled](PolicyCrudServiceApi.md#postpoliciesidsenabled)
- [postPoliciesValidate](PolicyCrudServiceApi.md#postpoliciesvalidate)
- [postPoliciesValidateName](PolicyCrudServiceApi.md#postpoliciesvalidatename)
- [putPoliciesByPolicyId](PolicyCrudServiceApi.md#putpoliciesbypolicyid)

## Constructors

### constructor

• **new PolicyCrudServiceApi**(`configuration?`, `basePath?`, `axios?`): [`PolicyCrudServiceApi`](PolicyCrudServiceApi.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `configuration?` | [`Configuration`](Configuration.md) | `undefined` |
| `basePath` | `string` | `BASE_PATH` |
| `axios` | `AxiosInstance` | `globalAxios` |

#### Returns

[`PolicyCrudServiceApi`](PolicyCrudServiceApi.md)

#### Inherited from

BaseAPI.constructor

#### Defined in

[base.ts:52](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/policies/base.ts#L52)

## Properties

### axios

• `Protected` **axios**: `AxiosInstance` = `globalAxios`

#### Inherited from

BaseAPI.axios

#### Defined in

[base.ts:52](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/policies/base.ts#L52)

___

### basePath

• `Protected` **basePath**: `string` = `BASE_PATH`

#### Inherited from

BaseAPI.basePath

#### Defined in

[base.ts:52](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/policies/base.ts#L52)

___

### configuration

• `Protected` **configuration**: `undefined` \| [`Configuration`](Configuration.md)

#### Inherited from

BaseAPI.configuration

#### Defined in

[base.ts:50](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/policies/base.ts#L50)

## Methods

### deletePoliciesById

▸ **deletePoliciesById**(`id`, `options?`): `Promise`\<`AxiosResponse`\<`void`, `any`\>\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | UUID of the policy |
| `options?` | `AxiosRequestConfig`\<`any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<`void`, `any`\>\>

**`Summary`**

Delete a single policy for a customer by its id

**`Throws`**

**`Memberof`**

PolicyCrudServiceApi

#### Defined in

[api.ts:1332](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/policies/api.ts#L1332)

___

### deletePoliciesIds

▸ **deletePoliciesIds**(`requestBody?`, `options?`): `Promise`\<`AxiosResponse`\<`string`[], `any`\>\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestBody?` | `string`[] |  |
| `options?` | `AxiosRequestConfig`\<`any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<`string`[], `any`\>\>

**`Summary`**

Delete policies for a customer by the ids passed in the body. Result will be a list of deleted UUIDs

**`Throws`**

**`Memberof`**

PolicyCrudServiceApi

#### Defined in

[api.ts:1344](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/policies/api.ts#L1344)

___

### getPolicies

▸ **getPolicies**(`offset?`, `limit?`, `sortColumn?`, `sortDirection?`, `filterName?`, `filteropName?`, `filterDescription?`, `filteropDescription?`, `filterIsEnabled?`, `options?`): `Promise`\<`AxiosResponse`\<[`PagedResponseOfPolicy`](../interfaces/PagedResponseOfPolicy.md), `any`\>\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `offset?` | `number` | Page number, starts 0, if not specified uses 0. |
| `limit?` | `number` | Number of items per page, if not specified uses 50. -1 can be used to specify an unlimited page, when specified it ignores the offset |
| `sortColumn?` | ``"name"`` \| ``"description"`` \| ``"is_enabled"`` \| ``"mtime"`` \| ``"last_triggered"`` | Column to sort the results by |
| `sortDirection?` | ``"asc"`` \| ``"desc"`` | Sort direction used |
| `filterName?` | `string` | Filtering policies by the name depending on the Filter operator used. |
| `filteropName?` | ``"equal"`` \| ``"like"`` \| ``"ilike"`` \| ``"not_equal"`` | Operations used with the filter |
| `filterDescription?` | `string` | Filtering policies by the description depending on the Filter operator used. |
| `filteropDescription?` | ``"equal"`` \| ``"like"`` \| ``"ilike"`` \| ``"not_equal"`` | Operations used with the filter |
| `filterIsEnabled?` | ``"true"`` \| ``"false"`` | Filtering policies by the is_enabled field.Defaults to true if no operand is given. |
| `options?` | `AxiosRequestConfig`\<`any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<[`PagedResponseOfPolicy`](../interfaces/PagedResponseOfPolicy.md), `any`\>\>

**`Summary`**

Return all policies for a given account

**`Throws`**

**`Memberof`**

PolicyCrudServiceApi

#### Defined in

[api.ts:1364](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/policies/api.ts#L1364)

___

### getPoliciesById

▸ **getPoliciesById**(`id`, `options?`): `Promise`\<`AxiosResponse`\<[`Policy`](../interfaces/Policy.md), `any`\>\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | UUID of the policy |
| `options?` | `AxiosRequestConfig`\<`any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<[`Policy`](../interfaces/Policy.md), `any`\>\>

**`Summary`**

Retrieve a single policy for a customer by its id

**`Throws`**

**`Memberof`**

PolicyCrudServiceApi

#### Defined in

[api.ts:1376](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/policies/api.ts#L1376)

___

### getPoliciesByIdHistoryTrigger

▸ **getPoliciesByIdHistoryTrigger**(`id`, `offset?`, `limit?`, `filterName?`, `filteropName?`, `filterId?`, `filteropId?`, `sortColumn?`, `sortDirection?`, `options?`): `Promise`\<`AxiosResponse`\<[`PagedResponseOfHistoryItem`](../interfaces/PagedResponseOfHistoryItem.md), `any`\>\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | UUID of the policy |
| `offset?` | `number` | Page number, starts 0, if not specified uses 0. |
| `limit?` | `number` | Number of items per page, if not specified uses 50. Maximum value is 200. |
| `filterName?` | `string` | Filtering history entries by the host name depending on the Filter operator used. |
| `filteropName?` | ``"equal"`` \| ``"like"`` \| ``"not_equal"`` | Operations used with the name filter |
| `filterId?` | `string` | Filtering history entries by the id depending on the Filter operator used. |
| `filteropId?` | ``"equal"`` \| ``"like"`` \| ``"not_equal"`` | Operations used with the name filter |
| `sortColumn?` | ``"hostName"`` \| ``"ctime"`` | Column to sort the results by |
| `sortDirection?` | ``"asc"`` \| ``"desc"`` | Sort direction used |
| `options?` | `AxiosRequestConfig`\<`any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<[`PagedResponseOfHistoryItem`](../interfaces/PagedResponseOfHistoryItem.md), `any`\>\>

**`Summary`**

Retrieve the trigger history of a single policy

**`Throws`**

**`Memberof`**

PolicyCrudServiceApi

#### Defined in

[api.ts:1396](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/policies/api.ts#L1396)

___

### getPoliciesIds

▸ **getPoliciesIds**(`filterName?`, `filteropName?`, `filterDescription?`, `filteropDescription?`, `filterIsEnabled?`, `options?`): `Promise`\<`AxiosResponse`\<`string`[], `any`\>\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `filterName?` | `string` | Filtering policies by the name depending on the Filter operator used. |
| `filteropName?` | ``"equal"`` \| ``"like"`` \| ``"ilike"`` \| ``"not_equal"`` | Operations used with the filter |
| `filterDescription?` | `string` | Filtering policies by the description depending on the Filter operator used. |
| `filteropDescription?` | ``"equal"`` \| ``"like"`` \| ``"ilike"`` \| ``"not_equal"`` | Operations used with the filter |
| `filterIsEnabled?` | ``"true"`` \| ``"false"`` | Filtering policies by the is_enabled field.Defaults to true if no operand is given. |
| `options?` | `AxiosRequestConfig`\<`any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<`string`[], `any`\>\>

**`Summary`**

Return all policy ids for a given account after applying the filters

**`Throws`**

**`Memberof`**

PolicyCrudServiceApi

#### Defined in

[api.ts:1412](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/policies/api.ts#L1412)

___

### postPolicies

▸ **postPolicies**(`alsoStore?`, `policy?`, `options?`): `Promise`\<`AxiosResponse`\<`void`, `any`\>\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `alsoStore?` | `boolean` | If passed and set to true, the passed policy is also persisted (if it is valid) |
| `policy?` | [`Policy`](../interfaces/Policy.md) |  |
| `options?` | `AxiosRequestConfig`\<`any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<`void`, `any`\>\>

**`Summary`**

Validate (and possibly persist) a passed policy for the given account

**`Throws`**

**`Memberof`**

PolicyCrudServiceApi

#### Defined in

[api.ts:1425](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/policies/api.ts#L1425)

___

### postPoliciesByIdEnabled

▸ **postPoliciesByIdEnabled**(`id`, `enabled?`, `options?`): `Promise`\<`AxiosResponse`\<`void`, `any`\>\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | ID of the Policy |
| `enabled?` | `boolean` | Should the policy be enabled (true) or disabled (false, default) |
| `options?` | `AxiosRequestConfig`\<`any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<`void`, `any`\>\>

**`Summary`**

Enable/disable a policy

**`Throws`**

**`Memberof`**

PolicyCrudServiceApi

#### Defined in

[api.ts:1438](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/policies/api.ts#L1438)

___

### postPoliciesIdsEnabled

▸ **postPoliciesIdsEnabled**(`enabled?`, `requestBody?`, `options?`): `Promise`\<`AxiosResponse`\<`string`[], `any`\>\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `enabled?` | `boolean` |  |
| `requestBody?` | `string`[] |  |
| `options?` | `AxiosRequestConfig`\<`any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<`string`[], `any`\>\>

**`Summary`**

Enable/disable policies identified by list of uuid in body

**`Throws`**

**`Memberof`**

PolicyCrudServiceApi

#### Defined in

[api.ts:1451](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/policies/api.ts#L1451)

___

### postPoliciesValidate

▸ **postPoliciesValidate**(`policy?`, `options?`): `Promise`\<`AxiosResponse`\<[`Msg`](../interfaces/Msg.md), `any`\>\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `policy?` | [`Policy`](../interfaces/Policy.md) |  |
| `options?` | `AxiosRequestConfig`\<`any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<[`Msg`](../interfaces/Msg.md), `any`\>\>

**`Summary`**

Validates a Policy condition

**`Throws`**

**`Memberof`**

PolicyCrudServiceApi

#### Defined in

[api.ts:1463](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/policies/api.ts#L1463)

___

### postPoliciesValidateName

▸ **postPoliciesValidateName**(`body`, `id?`, `options?`): `Promise`\<`AxiosResponse`\<[`Msg`](../interfaces/Msg.md), `any`\>\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `body` | `string` |  |
| `id?` | `string` | UUID of the policy |
| `options?` | `AxiosRequestConfig`\<`any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<[`Msg`](../interfaces/Msg.md), `any`\>\>

**`Summary`**

Validates the Policy.name and verifies if it is unique.

**`Throws`**

**`Memberof`**

PolicyCrudServiceApi

#### Defined in

[api.ts:1476](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/policies/api.ts#L1476)

___

### putPoliciesByPolicyId

▸ **putPoliciesByPolicyId**(`policyId`, `dry?`, `policy?`, `options?`): `Promise`\<`AxiosResponse`\<[`Policy`](../interfaces/Policy.md), `any`\>\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `policyId` | `string` |  |
| `dry?` | `boolean` |  |
| `policy?` | [`Policy`](../interfaces/Policy.md) |  |
| `options?` | `AxiosRequestConfig`\<`any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<[`Policy`](../interfaces/Policy.md), `any`\>\>

**`Summary`**

Update a single policy for a customer by its id

**`Throws`**

**`Memberof`**

PolicyCrudServiceApi

#### Defined in

[api.ts:1490](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/policies/api.ts#L1490)
