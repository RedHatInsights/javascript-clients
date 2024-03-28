[@redhat-cloud-services/policies-client](README.md) / Exports

# @redhat-cloud-services/policies-client

## Table of contents

### Enumerations

- [FactType](enums/FactType.md)

### Classes

- [BasePathFillerServiceApi](classes/BasePathFillerServiceApi.md)
- [Configuration](classes/Configuration.md)
- [FactServiceApi](classes/FactServiceApi.md)
- [PolicyCrudServiceApi](classes/PolicyCrudServiceApi.md)

### Interfaces

- [ConfigurationParameters](interfaces/ConfigurationParameters.md)
- [Fact](interfaces/Fact.md)
- [HistoryItem](interfaces/HistoryItem.md)
- [Meta](interfaces/Meta.md)
- [Msg](interfaces/Msg.md)
- [PagedResponseOfHistoryItem](interfaces/PagedResponseOfHistoryItem.md)
- [PagedResponseOfPolicy](interfaces/PagedResponseOfPolicy.md)
- [Policy](interfaces/Policy.md)
- [UserPreferences](interfaces/UserPreferences.md)

### Functions

- [BasePathFillerServiceApiAxiosParamCreator](modules.md#basepathfillerserviceapiaxiosparamcreator)
- [BasePathFillerServiceApiFactory](modules.md#basepathfillerserviceapifactory)
- [BasePathFillerServiceApiFp](modules.md#basepathfillerserviceapifp)
- [FactServiceApiAxiosParamCreator](modules.md#factserviceapiaxiosparamcreator)
- [FactServiceApiFactory](modules.md#factserviceapifactory)
- [FactServiceApiFp](modules.md#factserviceapifp)
- [PolicyCrudServiceApiAxiosParamCreator](modules.md#policycrudserviceapiaxiosparamcreator)
- [PolicyCrudServiceApiFactory](modules.md#policycrudserviceapifactory)
- [PolicyCrudServiceApiFp](modules.md#policycrudserviceapifp)

## Functions

### BasePathFillerServiceApiAxiosParamCreator

▸ **BasePathFillerServiceApiAxiosParamCreator**(`configuration?`): `Object`

BasePathFillerServiceApi - axios parameter creator

**`Export`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuration?` | [`Configuration`](classes/Configuration.md) |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `get` | (`options?`: `AxiosRequestConfig`<`any`\>) => `Promise`<`RequestArgs`\> |

#### Defined in

[api.ts:251](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/policies/api.ts#L251)

___

### BasePathFillerServiceApiFactory

▸ **BasePathFillerServiceApiFactory**(`configuration?`, `basePath?`, `axios?`): `Object`

BasePathFillerServiceApi - factory interface

**`Export`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuration?` | [`Configuration`](classes/Configuration.md) |
| `basePath?` | `string` |
| `axios?` | `AxiosInstance` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `get` | (`options?`: `any`) => `AxiosPromise`<`void`\> |

#### Defined in

[api.ts:310](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/policies/api.ts#L310)

___

### BasePathFillerServiceApiFp

▸ **BasePathFillerServiceApiFp**(`configuration?`): `Object`

BasePathFillerServiceApi - functional programming interface

**`Export`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuration?` | [`Configuration`](classes/Configuration.md) |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `get` | (`options?`: `AxiosRequestConfig`<`any`\>) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<`void`\>\> |

#### Defined in

[api.ts:290](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/policies/api.ts#L290)

___

### FactServiceApiAxiosParamCreator

▸ **FactServiceApiAxiosParamCreator**(`configuration?`): `Object`

FactServiceApi - axios parameter creator

**`Export`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuration?` | [`Configuration`](classes/Configuration.md) |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `getFacts` | (`options?`: `AxiosRequestConfig`<`any`\>) => `Promise`<`RequestArgs`\> |

#### Defined in

[api.ts:349](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/policies/api.ts#L349)

___

### FactServiceApiFactory

▸ **FactServiceApiFactory**(`configuration?`, `basePath?`, `axios?`): `Object`

FactServiceApi - factory interface

**`Export`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuration?` | [`Configuration`](classes/Configuration.md) |
| `basePath?` | `string` |
| `axios?` | `AxiosInstance` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `getFacts` | (`options?`: `any`) => `AxiosPromise`<[`Fact`](interfaces/Fact.md)[]\> |

#### Defined in

[api.ts:408](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/policies/api.ts#L408)

___

### FactServiceApiFp

▸ **FactServiceApiFp**(`configuration?`): `Object`

FactServiceApi - functional programming interface

**`Export`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuration?` | [`Configuration`](classes/Configuration.md) |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `getFacts` | (`options?`: `AxiosRequestConfig`<`any`\>) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`Fact`](interfaces/Fact.md)[]\>\> |

#### Defined in

[api.ts:388](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/policies/api.ts#L388)

___

### PolicyCrudServiceApiAxiosParamCreator

▸ **PolicyCrudServiceApiAxiosParamCreator**(`configuration?`): `Object`

PolicyCrudServiceApi - axios parameter creator

**`Export`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuration?` | [`Configuration`](classes/Configuration.md) |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `deletePoliciesById` | (`id`: `string`, `options?`: `AxiosRequestConfig`<`any`\>) => `Promise`<`RequestArgs`\> |
| `deletePoliciesIds` | (`requestBody?`: `string`[], `options?`: `AxiosRequestConfig`<`any`\>) => `Promise`<`RequestArgs`\> |
| `getPolicies` | (`offset?`: `number`, `limit?`: `number`, `sortColumn?`: ``"name"`` \| ``"description"`` \| ``"is_enabled"`` \| ``"mtime"`` \| ``"last_triggered"``, `sortDirection?`: ``"asc"`` \| ``"desc"``, `filterName?`: `string`, `filteropName?`: ``"equal"`` \| ``"like"`` \| ``"ilike"`` \| ``"not_equal"``, `filterDescription?`: `string`, `filteropDescription?`: ``"equal"`` \| ``"like"`` \| ``"ilike"`` \| ``"not_equal"``, `filterIsEnabled?`: ``"true"`` \| ``"false"``, `options?`: `AxiosRequestConfig`<`any`\>) => `Promise`<`RequestArgs`\> |
| `getPoliciesById` | (`id`: `string`, `options?`: `AxiosRequestConfig`<`any`\>) => `Promise`<`RequestArgs`\> |
| `getPoliciesByIdHistoryTrigger` | (`id`: `string`, `offset?`: `number`, `limit?`: `number`, `filterName?`: `string`, `filteropName?`: ``"equal"`` \| ``"like"`` \| ``"not_equal"``, `filterId?`: `string`, `filteropId?`: ``"equal"`` \| ``"like"`` \| ``"not_equal"``, `sortColumn?`: ``"hostName"`` \| ``"ctime"``, `sortDirection?`: ``"asc"`` \| ``"desc"``, `options?`: `AxiosRequestConfig`<`any`\>) => `Promise`<`RequestArgs`\> |
| `getPoliciesIds` | (`filterName?`: `string`, `filteropName?`: ``"equal"`` \| ``"like"`` \| ``"ilike"`` \| ``"not_equal"``, `filterDescription?`: `string`, `filteropDescription?`: ``"equal"`` \| ``"like"`` \| ``"ilike"`` \| ``"not_equal"``, `filterIsEnabled?`: ``"true"`` \| ``"false"``, `options?`: `AxiosRequestConfig`<`any`\>) => `Promise`<`RequestArgs`\> |
| `postPolicies` | (`alsoStore?`: `boolean`, `policy?`: [`Policy`](interfaces/Policy.md), `options?`: `AxiosRequestConfig`<`any`\>) => `Promise`<`RequestArgs`\> |
| `postPoliciesByIdEnabled` | (`id`: `string`, `enabled?`: `boolean`, `options?`: `AxiosRequestConfig`<`any`\>) => `Promise`<`RequestArgs`\> |
| `postPoliciesIdsEnabled` | (`enabled?`: `boolean`, `requestBody?`: `string`[], `options?`: `AxiosRequestConfig`<`any`\>) => `Promise`<`RequestArgs`\> |
| `postPoliciesValidate` | (`policy?`: [`Policy`](interfaces/Policy.md), `options?`: `AxiosRequestConfig`<`any`\>) => `Promise`<`RequestArgs`\> |
| `postPoliciesValidateName` | (`body`: `string`, `id?`: `string`, `options?`: `AxiosRequestConfig`<`any`\>) => `Promise`<`RequestArgs`\> |
| `putPoliciesByPolicyId` | (`policyId`: `string`, `dry?`: `boolean`, `policy?`: [`Policy`](interfaces/Policy.md), `options?`: `AxiosRequestConfig`<`any`\>) => `Promise`<`RequestArgs`\> |

#### Defined in

[api.ts:447](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/policies/api.ts#L447)

___

### PolicyCrudServiceApiFactory

▸ **PolicyCrudServiceApiFactory**(`configuration?`, `basePath?`, `axios?`): `Object`

PolicyCrudServiceApi - factory interface

**`Export`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuration?` | [`Configuration`](classes/Configuration.md) |
| `basePath?` | `string` |
| `axios?` | `AxiosInstance` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `deletePoliciesById` | (`id`: `string`, `options?`: `any`) => `AxiosPromise`<`void`\> |
| `deletePoliciesIds` | (`requestBody?`: `string`[], `options?`: `any`) => `AxiosPromise`<`string`[]\> |
| `getPolicies` | (`offset?`: `number`, `limit?`: `number`, `sortColumn?`: ``"name"`` \| ``"description"`` \| ``"is_enabled"`` \| ``"mtime"`` \| ``"last_triggered"``, `sortDirection?`: ``"asc"`` \| ``"desc"``, `filterName?`: `string`, `filteropName?`: ``"equal"`` \| ``"like"`` \| ``"ilike"`` \| ``"not_equal"``, `filterDescription?`: `string`, `filteropDescription?`: ``"equal"`` \| ``"like"`` \| ``"ilike"`` \| ``"not_equal"``, `filterIsEnabled?`: ``"true"`` \| ``"false"``, `options?`: `any`) => `AxiosPromise`<[`PagedResponseOfPolicy`](interfaces/PagedResponseOfPolicy.md)\> |
| `getPoliciesById` | (`id`: `string`, `options?`: `any`) => `AxiosPromise`<[`Policy`](interfaces/Policy.md)\> |
| `getPoliciesByIdHistoryTrigger` | (`id`: `string`, `offset?`: `number`, `limit?`: `number`, `filterName?`: `string`, `filteropName?`: ``"equal"`` \| ``"like"`` \| ``"not_equal"``, `filterId?`: `string`, `filteropId?`: ``"equal"`` \| ``"like"`` \| ``"not_equal"``, `sortColumn?`: ``"hostName"`` \| ``"ctime"``, `sortDirection?`: ``"asc"`` \| ``"desc"``, `options?`: `any`) => `AxiosPromise`<[`PagedResponseOfHistoryItem`](interfaces/PagedResponseOfHistoryItem.md)\> |
| `getPoliciesIds` | (`filterName?`: `string`, `filteropName?`: ``"equal"`` \| ``"like"`` \| ``"ilike"`` \| ``"not_equal"``, `filterDescription?`: `string`, `filteropDescription?`: ``"equal"`` \| ``"like"`` \| ``"ilike"`` \| ``"not_equal"``, `filterIsEnabled?`: ``"true"`` \| ``"false"``, `options?`: `any`) => `AxiosPromise`<`string`[]\> |
| `postPolicies` | (`alsoStore?`: `boolean`, `policy?`: [`Policy`](interfaces/Policy.md), `options?`: `any`) => `AxiosPromise`<`void`\> |
| `postPoliciesByIdEnabled` | (`id`: `string`, `enabled?`: `boolean`, `options?`: `any`) => `AxiosPromise`<`void`\> |
| `postPoliciesIdsEnabled` | (`enabled?`: `boolean`, `requestBody?`: `string`[], `options?`: `any`) => `AxiosPromise`<`string`[]\> |
| `postPoliciesValidate` | (`policy?`: [`Policy`](interfaces/Policy.md), `options?`: `any`) => `AxiosPromise`<[`Msg`](interfaces/Msg.md)\> |
| `postPoliciesValidateName` | (`body`: `string`, `id?`: `string`, `options?`: `any`) => `AxiosPromise`<[`Msg`](interfaces/Msg.md)\> |
| `putPoliciesByPolicyId` | (`policyId`: `string`, `dry?`: `boolean`, `policy?`: [`Policy`](interfaces/Policy.md), `options?`: `any`) => `AxiosPromise`<[`Policy`](interfaces/Policy.md)\> |

#### Defined in

[api.ts:1165](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/policies/api.ts#L1165)

___

### PolicyCrudServiceApiFp

▸ **PolicyCrudServiceApiFp**(`configuration?`): `Object`

PolicyCrudServiceApi - functional programming interface

**`Export`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuration?` | [`Configuration`](classes/Configuration.md) |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `deletePoliciesById` | (`id`: `string`, `options?`: `AxiosRequestConfig`<`any`\>) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<`void`\>\> |
| `deletePoliciesIds` | (`requestBody?`: `string`[], `options?`: `AxiosRequestConfig`<`any`\>) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<`string`[]\>\> |
| `getPolicies` | (`offset?`: `number`, `limit?`: `number`, `sortColumn?`: ``"name"`` \| ``"description"`` \| ``"is_enabled"`` \| ``"mtime"`` \| ``"last_triggered"``, `sortDirection?`: ``"asc"`` \| ``"desc"``, `filterName?`: `string`, `filteropName?`: ``"equal"`` \| ``"like"`` \| ``"ilike"`` \| ``"not_equal"``, `filterDescription?`: `string`, `filteropDescription?`: ``"equal"`` \| ``"like"`` \| ``"ilike"`` \| ``"not_equal"``, `filterIsEnabled?`: ``"true"`` \| ``"false"``, `options?`: `AxiosRequestConfig`<`any`\>) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`PagedResponseOfPolicy`](interfaces/PagedResponseOfPolicy.md)\>\> |
| `getPoliciesById` | (`id`: `string`, `options?`: `AxiosRequestConfig`<`any`\>) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`Policy`](interfaces/Policy.md)\>\> |
| `getPoliciesByIdHistoryTrigger` | (`id`: `string`, `offset?`: `number`, `limit?`: `number`, `filterName?`: `string`, `filteropName?`: ``"equal"`` \| ``"like"`` \| ``"not_equal"``, `filterId?`: `string`, `filteropId?`: ``"equal"`` \| ``"like"`` \| ``"not_equal"``, `sortColumn?`: ``"hostName"`` \| ``"ctime"``, `sortDirection?`: ``"asc"`` \| ``"desc"``, `options?`: `AxiosRequestConfig`<`any`\>) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`PagedResponseOfHistoryItem`](interfaces/PagedResponseOfHistoryItem.md)\>\> |
| `getPoliciesIds` | (`filterName?`: `string`, `filteropName?`: ``"equal"`` \| ``"like"`` \| ``"ilike"`` \| ``"not_equal"``, `filterDescription?`: `string`, `filteropDescription?`: ``"equal"`` \| ``"like"`` \| ``"ilike"`` \| ``"not_equal"``, `filterIsEnabled?`: ``"true"`` \| ``"false"``, `options?`: `AxiosRequestConfig`<`any`\>) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<`string`[]\>\> |
| `postPolicies` | (`alsoStore?`: `boolean`, `policy?`: [`Policy`](interfaces/Policy.md), `options?`: `AxiosRequestConfig`<`any`\>) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<`void`\>\> |
| `postPoliciesByIdEnabled` | (`id`: `string`, `enabled?`: `boolean`, `options?`: `AxiosRequestConfig`<`any`\>) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<`void`\>\> |
| `postPoliciesIdsEnabled` | (`enabled?`: `boolean`, `requestBody?`: `string`[], `options?`: `AxiosRequestConfig`<`any`\>) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<`string`[]\>\> |
| `postPoliciesValidate` | (`policy?`: [`Policy`](interfaces/Policy.md), `options?`: `AxiosRequestConfig`<`any`\>) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`Msg`](interfaces/Msg.md)\>\> |
| `postPoliciesValidateName` | (`body`: `string`, `id?`: `string`, `options?`: `AxiosRequestConfig`<`any`\>) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`Msg`](interfaces/Msg.md)\>\> |
| `putPoliciesByPolicyId` | (`policyId`: `string`, `dry?`: `boolean`, `policy?`: [`Policy`](interfaces/Policy.md), `options?`: `AxiosRequestConfig`<`any`\>) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`Policy`](interfaces/Policy.md)\>\> |

#### Defined in

[api.ts:997](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/policies/api.ts#L997)
