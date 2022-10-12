[@redhat-cloud-services/policies-client](../README.md) › [Globals](../globals.md) › [PolicyCrudServiceApi](policycrudserviceapi.md)

# Class: PolicyCrudServiceApi

PolicyCrudServiceApi - object-oriented interface

**`export`** 

## Hierarchy

* [BaseAPI](baseapi.md)

  ↳ **PolicyCrudServiceApi**

## Index

### Constructors

* [constructor](policycrudserviceapi.md#constructor)

### Properties

* [axios](policycrudserviceapi.md#protected-axios)
* [basePath](policycrudserviceapi.md#protected-basepath)
* [configuration](policycrudserviceapi.md#protected-configuration)

### Methods

* [deletePoliciesById](policycrudserviceapi.md#deletepoliciesbyid)
* [deletePoliciesIds](policycrudserviceapi.md#deletepoliciesids)
* [getPolicies](policycrudserviceapi.md#getpolicies)
* [getPoliciesById](policycrudserviceapi.md#getpoliciesbyid)
* [getPoliciesByIdHistoryTrigger](policycrudserviceapi.md#getpoliciesbyidhistorytrigger)
* [getPoliciesIds](policycrudserviceapi.md#getpoliciesids)
* [postPolicies](policycrudserviceapi.md#postpolicies)
* [postPoliciesByIdEnabled](policycrudserviceapi.md#postpoliciesbyidenabled)
* [postPoliciesIdsEnabled](policycrudserviceapi.md#postpoliciesidsenabled)
* [postPoliciesValidate](policycrudserviceapi.md#postpoliciesvalidate)
* [postPoliciesValidateName](policycrudserviceapi.md#postpoliciesvalidatename)
* [putPoliciesByPolicyId](policycrudserviceapi.md#putpoliciesbypolicyid)

## Constructors

###  constructor

\+ **new PolicyCrudServiceApi**(`configuration?`: [Configuration](configuration.md), `basePath`: string, `axios`: AxiosInstance): *[PolicyCrudServiceApi](policycrudserviceapi.md)*

*Inherited from [BaseAPI](baseapi.md).[constructor](baseapi.md#constructor)*

Defined in packages/policies/base.ts:50

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`configuration?` | [Configuration](configuration.md) | - |
`basePath` | string | BASE_PATH |
`axios` | AxiosInstance | globalAxios |

**Returns:** *[PolicyCrudServiceApi](policycrudserviceapi.md)*

## Properties

### `Protected` axios

• **axios**: *AxiosInstance*

*Inherited from [BaseAPI](baseapi.md).[axios](baseapi.md#protected-axios)*

Defined in packages/policies/base.ts:52

___

### `Protected` basePath

• **basePath**: *string*

*Inherited from [BaseAPI](baseapi.md).[basePath](baseapi.md#protected-basepath)*

Defined in packages/policies/base.ts:52

___

### `Protected` configuration

• **configuration**: *[Configuration](configuration.md) | undefined*

*Inherited from [BaseAPI](baseapi.md).[configuration](baseapi.md#protected-configuration)*

Defined in packages/policies/base.ts:50

## Methods

###  deletePoliciesById

▸ **deletePoliciesById**(`id`: string, `options?`: AxiosRequestConfig): *Promise‹AxiosResponse‹void››*

Defined in packages/policies/api.ts:1332

**`summary`** Delete a single policy for a customer by its id

**`throws`** {RequiredError}

**`memberof`** PolicyCrudServiceApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | UUID of the policy |
`options?` | AxiosRequestConfig | - |

**Returns:** *Promise‹AxiosResponse‹void››*

___

###  deletePoliciesIds

▸ **deletePoliciesIds**(`requestBody?`: Array‹string›, `options?`: AxiosRequestConfig): *Promise‹AxiosResponse‹string[]››*

Defined in packages/policies/api.ts:1344

**`summary`** Delete policies for a customer by the ids passed in the body. Result will be a list of deleted UUIDs

**`throws`** {RequiredError}

**`memberof`** PolicyCrudServiceApi

**Parameters:**

Name | Type |
------ | ------ |
`requestBody?` | Array‹string› |
`options?` | AxiosRequestConfig |

**Returns:** *Promise‹AxiosResponse‹string[]››*

___

###  getPolicies

▸ **getPolicies**(`filteropDescription?`: "equal" | "like" | "ilike" | "not_equal", `filteropName?`: "equal" | "like" | "ilike" | "not_equal", `filterDescription?`: string, `filterIsEnabled?`: "true" | "false", `filterName?`: string, `limit?`: number, `offset?`: number, `sortColumn?`: "name" | "description" | "is_enabled" | "mtime" | "last_triggered", `sortDirection?`: "asc" | "desc", `options?`: AxiosRequestConfig): *Promise‹AxiosResponse‹[PagedResponseOfPolicy](../interfaces/pagedresponseofpolicy.md)››*

Defined in packages/policies/api.ts:1364

**`summary`** Return all policies for a given account

**`throws`** {RequiredError}

**`memberof`** PolicyCrudServiceApi

**Parameters:**

Name | Type |
------ | ------ |
`filteropDescription?` | "equal" &#124; "like" &#124; "ilike" &#124; "not_equal" |
`filteropName?` | "equal" &#124; "like" &#124; "ilike" &#124; "not_equal" |
`filterDescription?` | string |
`filterIsEnabled?` | "true" &#124; "false" |
`filterName?` | string |
`limit?` | number |
`offset?` | number |
`sortColumn?` | "name" &#124; "description" &#124; "is_enabled" &#124; "mtime" &#124; "last_triggered" |
`sortDirection?` | "asc" &#124; "desc" |
`options?` | AxiosRequestConfig |

**Returns:** *Promise‹AxiosResponse‹[PagedResponseOfPolicy](../interfaces/pagedresponseofpolicy.md)››*

___

###  getPoliciesById

▸ **getPoliciesById**(`id`: string, `options?`: AxiosRequestConfig): *Promise‹AxiosResponse‹[Policy](../interfaces/policy.md)››*

Defined in packages/policies/api.ts:1376

**`summary`** Retrieve a single policy for a customer by its id

**`throws`** {RequiredError}

**`memberof`** PolicyCrudServiceApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | UUID of the policy |
`options?` | AxiosRequestConfig | - |

**Returns:** *Promise‹AxiosResponse‹[Policy](../interfaces/policy.md)››*

___

###  getPoliciesByIdHistoryTrigger

▸ **getPoliciesByIdHistoryTrigger**(`id`: string, `filteropId?`: "equal" | "not_equal" | "like", `filteropName?`: "equal" | "like" | "not_equal", `filterId?`: string, `filterName?`: string, `limit?`: number, `offset?`: number, `sortColumn?`: "hostName" | "ctime", `sortDirection?`: "asc" | "desc", `options?`: AxiosRequestConfig): *Promise‹AxiosResponse‹[PagedResponseOfHistoryItem](../interfaces/pagedresponseofhistoryitem.md)››*

Defined in packages/policies/api.ts:1396

**`summary`** Retrieve the trigger history of a single policy

**`throws`** {RequiredError}

**`memberof`** PolicyCrudServiceApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | UUID of the policy |
`filteropId?` | "equal" &#124; "not_equal" &#124; "like" | - |
`filteropName?` | "equal" &#124; "like" &#124; "not_equal" | - |
`filterId?` | string | - |
`filterName?` | string | - |
`limit?` | number | - |
`offset?` | number | - |
`sortColumn?` | "hostName" &#124; "ctime" | - |
`sortDirection?` | "asc" &#124; "desc" | - |
`options?` | AxiosRequestConfig | - |

**Returns:** *Promise‹AxiosResponse‹[PagedResponseOfHistoryItem](../interfaces/pagedresponseofhistoryitem.md)››*

___

###  getPoliciesIds

▸ **getPoliciesIds**(`filteropDescription?`: "equal" | "like" | "ilike" | "not_equal", `filteropName?`: "equal" | "like" | "ilike" | "not_equal", `filterDescription?`: string, `filterIsEnabled?`: "true" | "false", `filterName?`: string, `options?`: AxiosRequestConfig): *Promise‹AxiosResponse‹string[]››*

Defined in packages/policies/api.ts:1412

**`summary`** Return all policy ids for a given account after applying the filters

**`throws`** {RequiredError}

**`memberof`** PolicyCrudServiceApi

**Parameters:**

Name | Type |
------ | ------ |
`filteropDescription?` | "equal" &#124; "like" &#124; "ilike" &#124; "not_equal" |
`filteropName?` | "equal" &#124; "like" &#124; "ilike" &#124; "not_equal" |
`filterDescription?` | string |
`filterIsEnabled?` | "true" &#124; "false" |
`filterName?` | string |
`options?` | AxiosRequestConfig |

**Returns:** *Promise‹AxiosResponse‹string[]››*

___

###  postPolicies

▸ **postPolicies**(`alsoStore?`: boolean, `policy?`: [Policy](../interfaces/policy.md), `options?`: AxiosRequestConfig): *Promise‹AxiosResponse‹void››*

Defined in packages/policies/api.ts:1425

**`summary`** Validate (and possibly persist) a passed policy for the given account

**`throws`** {RequiredError}

**`memberof`** PolicyCrudServiceApi

**Parameters:**

Name | Type |
------ | ------ |
`alsoStore?` | boolean |
`policy?` | [Policy](../interfaces/policy.md) |
`options?` | AxiosRequestConfig |

**Returns:** *Promise‹AxiosResponse‹void››*

___

###  postPoliciesByIdEnabled

▸ **postPoliciesByIdEnabled**(`id`: string, `enabled?`: boolean, `options?`: AxiosRequestConfig): *Promise‹AxiosResponse‹void››*

Defined in packages/policies/api.ts:1438

**`summary`** Enable/disable a policy

**`throws`** {RequiredError}

**`memberof`** PolicyCrudServiceApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | ID of the Policy |
`enabled?` | boolean | - |
`options?` | AxiosRequestConfig | - |

**Returns:** *Promise‹AxiosResponse‹void››*

___

###  postPoliciesIdsEnabled

▸ **postPoliciesIdsEnabled**(`enabled?`: boolean, `requestBody?`: Array‹string›, `options?`: AxiosRequestConfig): *Promise‹AxiosResponse‹string[]››*

Defined in packages/policies/api.ts:1451

**`summary`** Enable/disable policies identified by list of uuid in body

**`throws`** {RequiredError}

**`memberof`** PolicyCrudServiceApi

**Parameters:**

Name | Type |
------ | ------ |
`enabled?` | boolean |
`requestBody?` | Array‹string› |
`options?` | AxiosRequestConfig |

**Returns:** *Promise‹AxiosResponse‹string[]››*

___

###  postPoliciesValidate

▸ **postPoliciesValidate**(`policy?`: [Policy](../interfaces/policy.md), `options?`: AxiosRequestConfig): *Promise‹AxiosResponse‹[Msg](../interfaces/msg.md)››*

Defined in packages/policies/api.ts:1463

**`summary`** Validates a Policy condition

**`throws`** {RequiredError}

**`memberof`** PolicyCrudServiceApi

**Parameters:**

Name | Type |
------ | ------ |
`policy?` | [Policy](../interfaces/policy.md) |
`options?` | AxiosRequestConfig |

**Returns:** *Promise‹AxiosResponse‹[Msg](../interfaces/msg.md)››*

___

###  postPoliciesValidateName

▸ **postPoliciesValidateName**(`body`: string, `id?`: string, `options?`: AxiosRequestConfig): *Promise‹AxiosResponse‹[Msg](../interfaces/msg.md)››*

Defined in packages/policies/api.ts:1476

**`summary`** Validates the Policy.name and verifies if it is unique.

**`throws`** {RequiredError}

**`memberof`** PolicyCrudServiceApi

**Parameters:**

Name | Type |
------ | ------ |
`body` | string |
`id?` | string |
`options?` | AxiosRequestConfig |

**Returns:** *Promise‹AxiosResponse‹[Msg](../interfaces/msg.md)››*

___

###  putPoliciesByPolicyId

▸ **putPoliciesByPolicyId**(`policyId`: string, `dry?`: boolean, `policy?`: [Policy](../interfaces/policy.md), `options?`: AxiosRequestConfig): *Promise‹AxiosResponse‹[Policy](../interfaces/policy.md)››*

Defined in packages/policies/api.ts:1490

**`summary`** Update a single policy for a customer by its id

**`throws`** {RequiredError}

**`memberof`** PolicyCrudServiceApi

**Parameters:**

Name | Type |
------ | ------ |
`policyId` | string |
`dry?` | boolean |
`policy?` | [Policy](../interfaces/policy.md) |
`options?` | AxiosRequestConfig |

**Returns:** *Promise‹AxiosResponse‹[Policy](../interfaces/policy.md)››*
