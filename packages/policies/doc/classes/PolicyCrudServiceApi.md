[@redhat-cloud-services/policies-client](../README.md) / [Exports](../modules.md) / PolicyCrudServiceApi

# Class: PolicyCrudServiceApi

PolicyCrudServiceApi - object-oriented interface

**`Export`**

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

• **new PolicyCrudServiceApi**(`configuration?`, `basePath?`, `axios?`)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `configuration?` | [`Configuration`](Configuration.md) | `undefined` |
| `basePath` | `string` | `BASE_PATH` |
| `axios` | `AxiosInstance` | `globalAxios` |

#### Inherited from

BaseAPI.constructor

#### Defined in

[base.ts:52](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/policies/base.ts#L52)

## Properties

### axios

• `Protected` **axios**: `AxiosInstance` = `globalAxios`

#### Inherited from

BaseAPI.axios

#### Defined in

[base.ts:52](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/policies/base.ts#L52)

___

### basePath

• `Protected` **basePath**: `string` = `BASE_PATH`

#### Inherited from

BaseAPI.basePath

#### Defined in

[base.ts:52](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/policies/base.ts#L52)

___

### configuration

• `Protected` **configuration**: [`Configuration`](Configuration.md)

#### Inherited from

BaseAPI.configuration

#### Defined in

[base.ts:50](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/policies/base.ts#L50)

## Methods

### deletePoliciesById

▸ **deletePoliciesById**(`id`, `options?`): `Promise`<`AxiosResponse`<`void`\>\>

**`Summary`**

Delete a single policy for a customer by its id

**`Throws`**

**`Memberof`**

PolicyCrudServiceApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | UUID of the policy |
| `options?` | `AxiosRequestConfig` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<`void`\>\>

#### Defined in

[api.ts:1332](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/policies/api.ts#L1332)

___

### deletePoliciesIds

▸ **deletePoliciesIds**(`requestBody?`, `options?`): `Promise`<`AxiosResponse`<`string`[]\>\>

**`Summary`**

Delete policies for a customer by the ids passed in the body. Result will be a list of deleted UUIDs

**`Throws`**

**`Memberof`**

PolicyCrudServiceApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestBody?` | `string`[] |  |
| `options?` | `AxiosRequestConfig` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<`string`[]\>\>

#### Defined in

[api.ts:1344](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/policies/api.ts#L1344)

___

### getPolicies

▸ **getPolicies**(`filteropDescription?`, `filteropName?`, `filterDescription?`, `filterIsEnabled?`, `filterName?`, `limit?`, `offset?`, `sortColumn?`, `sortDirection?`, `options?`): `Promise`<`AxiosResponse`<[`PagedResponseOfPolicy`](../interfaces/PagedResponseOfPolicy.md)\>\>

**`Summary`**

Return all policies for a given account

**`Throws`**

**`Memberof`**

PolicyCrudServiceApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `filteropDescription?` | ``"equal"`` \| ``"like"`` \| ``"ilike"`` \| ``"not_equal"`` | Operations used with the filter |
| `filteropName?` | ``"equal"`` \| ``"like"`` \| ``"ilike"`` \| ``"not_equal"`` | Operations used with the filter |
| `filterDescription?` | `string` | Filtering policies by the description depending on the Filter operator used. |
| `filterIsEnabled?` | ``"false"`` \| ``"true"`` | Filtering policies by the is_enabled field.Defaults to true if no operand is given. |
| `filterName?` | `string` | Filtering policies by the name depending on the Filter operator used. |
| `limit?` | `number` | Number of items per page, if not specified uses 50. -1 can be used to specify an unlimited page, when specified it ignores the offset |
| `offset?` | `number` | Page number, starts 0, if not specified uses 0. |
| `sortColumn?` | ``"name"`` \| ``"description"`` \| ``"is_enabled"`` \| ``"mtime"`` \| ``"last_triggered"`` | Column to sort the results by |
| `sortDirection?` | ``"desc"`` \| ``"asc"`` | Sort direction used |
| `options?` | `AxiosRequestConfig` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`PagedResponseOfPolicy`](../interfaces/PagedResponseOfPolicy.md)\>\>

#### Defined in

[api.ts:1364](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/policies/api.ts#L1364)

___

### getPoliciesById

▸ **getPoliciesById**(`id`, `options?`): `Promise`<`AxiosResponse`<[`Policy`](../interfaces/Policy.md)\>\>

**`Summary`**

Retrieve a single policy for a customer by its id

**`Throws`**

**`Memberof`**

PolicyCrudServiceApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | UUID of the policy |
| `options?` | `AxiosRequestConfig` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`Policy`](../interfaces/Policy.md)\>\>

#### Defined in

[api.ts:1376](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/policies/api.ts#L1376)

___

### getPoliciesByIdHistoryTrigger

▸ **getPoliciesByIdHistoryTrigger**(`id`, `filteropId?`, `filteropName?`, `filterId?`, `filterName?`, `limit?`, `offset?`, `sortColumn?`, `sortDirection?`, `options?`): `Promise`<`AxiosResponse`<[`PagedResponseOfHistoryItem`](../interfaces/PagedResponseOfHistoryItem.md)\>\>

**`Summary`**

Retrieve the trigger history of a single policy

**`Throws`**

**`Memberof`**

PolicyCrudServiceApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | UUID of the policy |
| `filteropId?` | ``"equal"`` \| ``"like"`` \| ``"not_equal"`` | Operations used with the name filter |
| `filteropName?` | ``"equal"`` \| ``"like"`` \| ``"not_equal"`` | Operations used with the name filter |
| `filterId?` | `string` | Filtering history entries by the id depending on the Filter operator used. |
| `filterName?` | `string` | Filtering history entries by the host name depending on the Filter operator used. |
| `limit?` | `number` | Number of items per page, if not specified uses 50. Maximum value is 200. |
| `offset?` | `number` | Page number, starts 0, if not specified uses 0. |
| `sortColumn?` | ``"hostName"`` \| ``"ctime"`` | Column to sort the results by |
| `sortDirection?` | ``"desc"`` \| ``"asc"`` | Sort direction used |
| `options?` | `AxiosRequestConfig` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`PagedResponseOfHistoryItem`](../interfaces/PagedResponseOfHistoryItem.md)\>\>

#### Defined in

[api.ts:1396](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/policies/api.ts#L1396)

___

### getPoliciesIds

▸ **getPoliciesIds**(`filteropDescription?`, `filteropName?`, `filterDescription?`, `filterIsEnabled?`, `filterName?`, `options?`): `Promise`<`AxiosResponse`<`string`[]\>\>

**`Summary`**

Return all policy ids for a given account after applying the filters

**`Throws`**

**`Memberof`**

PolicyCrudServiceApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `filteropDescription?` | ``"equal"`` \| ``"like"`` \| ``"ilike"`` \| ``"not_equal"`` | Operations used with the filter |
| `filteropName?` | ``"equal"`` \| ``"like"`` \| ``"ilike"`` \| ``"not_equal"`` | Operations used with the filter |
| `filterDescription?` | `string` | Filtering policies by the description depending on the Filter operator used. |
| `filterIsEnabled?` | ``"false"`` \| ``"true"`` | Filtering policies by the is_enabled field.Defaults to true if no operand is given. |
| `filterName?` | `string` | Filtering policies by the name depending on the Filter operator used. |
| `options?` | `AxiosRequestConfig` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<`string`[]\>\>

#### Defined in

[api.ts:1412](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/policies/api.ts#L1412)

___

### postPolicies

▸ **postPolicies**(`alsoStore?`, `policy?`, `options?`): `Promise`<`AxiosResponse`<`void`\>\>

**`Summary`**

Validate (and possibly persist) a passed policy for the given account

**`Throws`**

**`Memberof`**

PolicyCrudServiceApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `alsoStore?` | `boolean` | If passed and set to true, the passed policy is also persisted (if it is valid) |
| `policy?` | [`Policy`](../interfaces/Policy.md) |  |
| `options?` | `AxiosRequestConfig` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<`void`\>\>

#### Defined in

[api.ts:1425](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/policies/api.ts#L1425)

___

### postPoliciesByIdEnabled

▸ **postPoliciesByIdEnabled**(`id`, `enabled?`, `options?`): `Promise`<`AxiosResponse`<`void`\>\>

**`Summary`**

Enable/disable a policy

**`Throws`**

**`Memberof`**

PolicyCrudServiceApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | ID of the Policy |
| `enabled?` | `boolean` | Should the policy be enabled (true) or disabled (false, default) |
| `options?` | `AxiosRequestConfig` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<`void`\>\>

#### Defined in

[api.ts:1438](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/policies/api.ts#L1438)

___

### postPoliciesIdsEnabled

▸ **postPoliciesIdsEnabled**(`enabled?`, `requestBody?`, `options?`): `Promise`<`AxiosResponse`<`string`[]\>\>

**`Summary`**

Enable/disable policies identified by list of uuid in body

**`Throws`**

**`Memberof`**

PolicyCrudServiceApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `enabled?` | `boolean` |  |
| `requestBody?` | `string`[] |  |
| `options?` | `AxiosRequestConfig` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<`string`[]\>\>

#### Defined in

[api.ts:1451](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/policies/api.ts#L1451)

___

### postPoliciesValidate

▸ **postPoliciesValidate**(`policy?`, `options?`): `Promise`<`AxiosResponse`<[`Msg`](../interfaces/Msg.md)\>\>

**`Summary`**

Validates a Policy condition

**`Throws`**

**`Memberof`**

PolicyCrudServiceApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `policy?` | [`Policy`](../interfaces/Policy.md) |  |
| `options?` | `AxiosRequestConfig` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`Msg`](../interfaces/Msg.md)\>\>

#### Defined in

[api.ts:1463](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/policies/api.ts#L1463)

___

### postPoliciesValidateName

▸ **postPoliciesValidateName**(`body`, `id?`, `options?`): `Promise`<`AxiosResponse`<[`Msg`](../interfaces/Msg.md)\>\>

**`Summary`**

Validates the Policy.name and verifies if it is unique.

**`Throws`**

**`Memberof`**

PolicyCrudServiceApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `body` | `string` |  |
| `id?` | `string` | UUID of the policy |
| `options?` | `AxiosRequestConfig` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`Msg`](../interfaces/Msg.md)\>\>

#### Defined in

[api.ts:1476](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/policies/api.ts#L1476)

___

### putPoliciesByPolicyId

▸ **putPoliciesByPolicyId**(`policyId`, `dry?`, `policy?`, `options?`): `Promise`<`AxiosResponse`<[`Policy`](../interfaces/Policy.md)\>\>

**`Summary`**

Update a single policy for a customer by its id

**`Throws`**

**`Memberof`**

PolicyCrudServiceApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `policyId` | `string` |  |
| `dry?` | `boolean` |  |
| `policy?` | [`Policy`](../interfaces/Policy.md) |  |
| `options?` | `AxiosRequestConfig` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`Policy`](../interfaces/Policy.md)\>\>

#### Defined in

[api.ts:1490](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/policies/api.ts#L1490)
