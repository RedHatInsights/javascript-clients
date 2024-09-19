[@redhat-cloud-services/policies-client](README.md) / Exports

# @redhat-cloud-services/policies-client

## Table of contents

### Enumerations

- [FactType](enums/FactType.md)

### Interfaces

- [Fact](interfaces/Fact.md)
- [HistoryItem](interfaces/HistoryItem.md)
- [Meta](interfaces/Meta.md)
- [Msg](interfaces/Msg.md)
- [PagedResponseOfHistoryItem](interfaces/PagedResponseOfHistoryItem.md)
- [PagedResponseOfPolicy](interfaces/PagedResponseOfPolicy.md)
- [Policy](interfaces/Policy.md)
- [UserPreferences](interfaces/UserPreferences.md)

### Functions

- [deletePoliciesById](modules.md#deletepoliciesbyid)
- [deletePoliciesIds](modules.md#deletepoliciesids)
- [get](modules.md#get)
- [getFacts](modules.md#getfacts)
- [getPolicies](modules.md#getpolicies)
- [getPoliciesById](modules.md#getpoliciesbyid)
- [getPoliciesByIdHistoryTrigger](modules.md#getpoliciesbyidhistorytrigger)
- [getPoliciesIds](modules.md#getpoliciesids)
- [postPolicies](modules.md#postpolicies)
- [postPoliciesByIdEnabled](modules.md#postpoliciesbyidenabled)
- [postPoliciesIdsEnabled](modules.md#postpoliciesidsenabled)
- [postPoliciesValidate](modules.md#postpoliciesvalidate)
- [postPoliciesValidateName](modules.md#postpoliciesvalidatename)
- [putPoliciesByPolicyId](modules.md#putpoliciesbypolicyid)

## Functions

### deletePoliciesById

▸ **deletePoliciesById**(`...config`): `Promise`\<`RequestArgs`\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...config` | [`DeletePoliciesByIdParams`] \| [`string`, `AxiosRequestConfig`\<`any`\>] | with all available params. |

#### Returns

`Promise`\<`RequestArgs`\>

**`Summary`**

Delete a single policy for a customer by its id

**`Throws`**

#### Defined in

DeletePoliciesById/index.ts:34

___

### deletePoliciesIds

▸ **deletePoliciesIds**(`...config`): `Promise`\<`RequestArgs`\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...config` | [`DeletePoliciesIdsParams`] \| [`string`[], `AxiosRequestConfig`\<`any`\>] | with all available params. |

#### Returns

`Promise`\<`RequestArgs`\>

**`Summary`**

Delete policies for a customer by the ids passed in the body. Result will be a list of deleted UUIDs

**`Throws`**

#### Defined in

DeletePoliciesIds/index.ts:34

___

### get

▸ **get**(`...config`): `Promise`\<`RequestArgs`\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...config` | [`GetParams`] \| [`AxiosRequestConfig`\<`any`\>] | with all available params. |

#### Returns

`Promise`\<`RequestArgs`\>

**`Summary`**

Just a filler to have a defined return code for the base path

**`Throws`**

#### Defined in

Get/index.ts:28

___

### getFacts

▸ **getFacts**(`...config`): `Promise`\<`RequestArgs`\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...config` | [`AxiosRequestConfig`\<`any`\>] \| [`GetFactsParams`] | with all available params. |

#### Returns

`Promise`\<`RequestArgs`\>

**`Summary`**

Retrieve a list of fact (keys) along with their data types

**`Throws`**

#### Defined in

GetFacts/index.ts:28

___

### getPolicies

▸ **getPolicies**(`...config`): `Promise`\<`RequestArgs`\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...config` | [`GetPoliciesParams`] \| [`number`, `number`, `GetPoliciesSortColumnEnum`, `GetPoliciesSortDirectionEnum`, `string`, `GetPoliciesFilteropNameEnum`, `string`, `GetPoliciesFilteropDescriptionEnum`, `GetPoliciesFilterIsEnabledEnum`, `AxiosRequestConfig`\<`any`\>] | with all available params. |

#### Returns

`Promise`\<`RequestArgs`\>

**`Summary`**

Return all policies for a given account

**`Throws`**

#### Defined in

GetPolicies/index.ts:134

___

### getPoliciesById

▸ **getPoliciesById**(`...config`): `Promise`\<`RequestArgs`\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...config` | [`string`, `AxiosRequestConfig`\<`any`\>] \| [`GetPoliciesByIdParams`] | with all available params. |

#### Returns

`Promise`\<`RequestArgs`\>

**`Summary`**

Retrieve a single policy for a customer by its id

**`Throws`**

#### Defined in

GetPoliciesById/index.ts:34

___

### getPoliciesByIdHistoryTrigger

▸ **getPoliciesByIdHistoryTrigger**(`...config`): `Promise`\<`RequestArgs`\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...config` | [`GetPoliciesByIdHistoryTriggerParams`] \| [`string`, `number`, `number`, `string`, `GetPoliciesByIdHistoryTriggerFilteropNameEnum`, `string`, `GetPoliciesByIdHistoryTriggerFilteropIdEnum`, `GetPoliciesByIdHistoryTriggerSortColumnEnum`, `GetPoliciesByIdHistoryTriggerSortDirectionEnum`, `AxiosRequestConfig`\<`any`\>] | with all available params. |

#### Returns

`Promise`\<`RequestArgs`\>

**`Summary`**

Retrieve the trigger history of a single policy

**`Throws`**

#### Defined in

GetPoliciesByIdHistoryTrigger/index.ts:120

___

### getPoliciesIds

▸ **getPoliciesIds**(`...config`): `Promise`\<`RequestArgs`\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...config` | [`GetPoliciesIdsParams`] \| [`string`, `GetPoliciesIdsFilteropNameEnum`, `string`, `GetPoliciesIdsFilteropDescriptionEnum`, `GetPoliciesIdsFilterIsEnabledEnum`, `AxiosRequestConfig`\<`any`\>] | with all available params. |

#### Returns

`Promise`\<`RequestArgs`\>

**`Summary`**

Return all policy ids for a given account after applying the filters

**`Throws`**

#### Defined in

GetPoliciesIds/index.ts:89

___

### postPolicies

▸ **postPolicies**(`...config`): `Promise`\<`RequestArgs`\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...config` | [`PostPoliciesParams`] \| [`boolean`, [`Policy`](interfaces/Policy.md), `AxiosRequestConfig`\<`any`\>] | with all available params. |

#### Returns

`Promise`\<`RequestArgs`\>

**`Summary`**

Validate (and possibly persist) a passed policy for the given account

**`Throws`**

#### Defined in

PostPolicies/index.ts:40

___

### postPoliciesByIdEnabled

▸ **postPoliciesByIdEnabled**(`...config`): `Promise`\<`RequestArgs`\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...config` | [`PostPoliciesByIdEnabledParams`] \| [`string`, `boolean`, `AxiosRequestConfig`\<`any`\>] | with all available params. |

#### Returns

`Promise`\<`RequestArgs`\>

**`Summary`**

Enable/disable a policy

**`Throws`**

#### Defined in

PostPoliciesByIdEnabled/index.ts:40

___

### postPoliciesIdsEnabled

▸ **postPoliciesIdsEnabled**(`...config`): `Promise`\<`RequestArgs`\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...config` | [`PostPoliciesIdsEnabledParams`] \| [`boolean`, `string`[], `AxiosRequestConfig`\<`any`\>] | with all available params. |

#### Returns

`Promise`\<`RequestArgs`\>

**`Summary`**

Enable/disable policies identified by list of uuid in body

**`Throws`**

#### Defined in

PostPoliciesIdsEnabled/index.ts:40

___

### postPoliciesValidate

▸ **postPoliciesValidate**(`...config`): `Promise`\<`RequestArgs`\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...config` | [`PostPoliciesValidateParams`] \| [[`Policy`](interfaces/Policy.md), `AxiosRequestConfig`\<`any`\>] | with all available params. |

#### Returns

`Promise`\<`RequestArgs`\>

**`Summary`**

Validates a Policy condition

**`Throws`**

#### Defined in

PostPoliciesValidate/index.ts:34

___

### postPoliciesValidateName

▸ **postPoliciesValidateName**(`...config`): `Promise`\<`RequestArgs`\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...config` | [`PostPoliciesValidateNameParams`] \| [`string`, `string`, `AxiosRequestConfig`\<`any`\>] | with all available params. |

#### Returns

`Promise`\<`RequestArgs`\>

**`Summary`**

Validates the Policy.name and verifies if it is unique.

**`Throws`**

#### Defined in

PostPoliciesValidateName/index.ts:40

___

### putPoliciesByPolicyId

▸ **putPoliciesByPolicyId**(`...config`): `Promise`\<`RequestArgs`\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...config` | [`PutPoliciesByPolicyIdParams`] \| [`string`, `boolean`, [`Policy`](interfaces/Policy.md), `AxiosRequestConfig`\<`any`\>] | with all available params. |

#### Returns

`Promise`\<`RequestArgs`\>

**`Summary`**

Update a single policy for a customer by its id

**`Throws`**

#### Defined in

PutPoliciesByPolicyId/index.ts:46
