[@redhat-cloud-services/rbac-client](../README.md) › [Globals](../globals.md) › [PolicyApi](policyapi.md)

# Class: PolicyApi

PolicyApi - object-oriented interface

**`export`** 

**`class`** PolicyApi

**`extends`** {BaseAPI}

## Hierarchy

* [BaseAPI](baseapi.md)

  ↳ **PolicyApi**

## Index

### Constructors

* [constructor](policyapi.md#constructor)

### Properties

* [axios](policyapi.md#protected-axios)
* [basePath](policyapi.md#protected-basepath)
* [configuration](policyapi.md#protected-configuration)

### Methods

* [createPolicies](policyapi.md#createpolicies)
* [deletePolicy](policyapi.md#deletepolicy)
* [getPolicy](policyapi.md#getpolicy)
* [listPolicies](policyapi.md#listpolicies)
* [updatePolicy](policyapi.md#updatepolicy)

## Constructors

###  constructor

\+ **new PolicyApi**(`configuration?`: [Configuration](configuration.md), `basePath`: string, `axios`: AxiosInstance): *[PolicyApi](policyapi.md)*

*Inherited from [BaseAPI](baseapi.md).[constructor](baseapi.md#constructor)*

*Defined in [api.ts:49](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/rbac/api.ts#L49)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`configuration?` | [Configuration](configuration.md) | - |
`basePath` | string |  BASE_PATH |
`axios` | AxiosInstance |  globalAxios |

**Returns:** *[PolicyApi](policyapi.md)*

## Properties

### `Protected` axios

• **axios**: *AxiosInstance*

*Inherited from [BaseAPI](baseapi.md).[axios](baseapi.md#protected-axios)*

*Defined in [api.ts:51](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/rbac/api.ts#L51)*

___

### `Protected` basePath

• **basePath**: *string*

*Inherited from [BaseAPI](baseapi.md).[basePath](baseapi.md#protected-basepath)*

*Defined in [api.ts:51](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/rbac/api.ts#L51)*

___

### `Protected` configuration

• **configuration**: *[Configuration](configuration.md) | undefined*

*Inherited from [BaseAPI](baseapi.md).[configuration](baseapi.md#protected-configuration)*

*Defined in [api.ts:49](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/rbac/api.ts#L49)*

## Methods

###  createPolicies

▸ **createPolicies**(`policyIn`: [PolicyIn](../interfaces/policyin.md), `options?`: any): *AxiosPromise‹[PolicyExtended](../interfaces/policyextended.md)›*

*Defined in [api.ts:2807](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/rbac/api.ts#L2807)*

**`summary`** Create a policy in a tenant

**`throws`** {RequiredError}

**`memberof`** PolicyApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`policyIn` | [PolicyIn](../interfaces/policyin.md) | Policy to create |
`options?` | any | - |

**Returns:** *AxiosPromise‹[PolicyExtended](../interfaces/policyextended.md)›*

___

###  deletePolicy

▸ **deletePolicy**(`uuid`: string, `options?`: any): *AxiosPromise‹Response›*

*Defined in [api.ts:2819](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/rbac/api.ts#L2819)*

**`summary`** Delete a policy in the tenant

**`throws`** {RequiredError}

**`memberof`** PolicyApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`uuid` | string | ID of policy to delete |
`options?` | any | - |

**Returns:** *AxiosPromise‹Response›*

___

###  getPolicy

▸ **getPolicy**(`uuid`: string, `options?`: any): *AxiosPromise‹[PolicyExtended](../interfaces/policyextended.md)›*

*Defined in [api.ts:2831](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/rbac/api.ts#L2831)*

**`summary`** Get a policy in the tenant

**`throws`** {RequiredError}

**`memberof`** PolicyApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`uuid` | string | ID of policy to get |
`options?` | any | - |

**Returns:** *AxiosPromise‹[PolicyExtended](../interfaces/policyextended.md)›*

___

###  listPolicies

▸ **listPolicies**(`limit?`: number, `offset?`: number, `name?`: string, `scope?`: "account" | "principal", `groupName?`: string, `groupUuid?`: string, `orderBy?`: string, `options?`: any): *AxiosPromise‹[PolicyPagination](../interfaces/policypagination.md)›*

*Defined in [api.ts:2849](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/rbac/api.ts#L2849)*

**`summary`** List the policies in the tenant

**`throws`** {RequiredError}

**`memberof`** PolicyApi

**Parameters:**

Name | Type |
------ | ------ |
`limit?` | number |
`offset?` | number |
`name?` | string |
`scope?` | "account" &#124; "principal" |
`groupName?` | string |
`groupUuid?` | string |
`orderBy?` | string |
`options?` | any |

**Returns:** *AxiosPromise‹[PolicyPagination](../interfaces/policypagination.md)›*

___

###  updatePolicy

▸ **updatePolicy**(`uuid`: string, `policyIn`: [PolicyIn](../interfaces/policyin.md), `options?`: any): *AxiosPromise‹[PolicyExtended](../interfaces/policyextended.md)›*

*Defined in [api.ts:2862](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/rbac/api.ts#L2862)*

**`summary`** Update a policy in the tenant

**`throws`** {RequiredError}

**`memberof`** PolicyApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`uuid` | string | ID of policy to update |
`policyIn` | [PolicyIn](../interfaces/policyin.md) | Policy to update |
`options?` | any | - |

**Returns:** *AxiosPromise‹[PolicyExtended](../interfaces/policyextended.md)›*
