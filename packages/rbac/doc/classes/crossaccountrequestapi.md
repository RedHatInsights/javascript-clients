[@redhat-cloud-services/rbac-client](../README.md) › [Globals](../globals.md) › [CrossAccountRequestApi](crossaccountrequestapi.md)

# Class: CrossAccountRequestApi

CrossAccountRequestApi - object-oriented interface

**`export`** 

## Hierarchy

* [BaseAPI](baseapi.md)

  ↳ **CrossAccountRequestApi**

## Index

### Constructors

* [constructor](crossaccountrequestapi.md#constructor)

### Properties

* [axios](crossaccountrequestapi.md#protected-axios)
* [basePath](crossaccountrequestapi.md#protected-basepath)
* [configuration](crossaccountrequestapi.md#protected-configuration)

### Methods

* [createCrossAccountRequests](crossaccountrequestapi.md#createcrossaccountrequests)
* [getCrossAccountRequest](crossaccountrequestapi.md#getcrossaccountrequest)
* [listCrossAccountRequests](crossaccountrequestapi.md#listcrossaccountrequests)
* [patchCrossAccountRequest](crossaccountrequestapi.md#patchcrossaccountrequest)
* [putCrossAccountRequest](crossaccountrequestapi.md#putcrossaccountrequest)

## Constructors

###  constructor

\+ **new CrossAccountRequestApi**(`configuration?`: [Configuration](configuration.md), `basePath`: string, `axios`: AxiosInstance): *[CrossAccountRequestApi](crossaccountrequestapi.md)*

*Inherited from [BaseAPI](baseapi.md).[constructor](baseapi.md#constructor)*

*Defined in [base.ts:49](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/rbac/base.ts#L49)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`configuration?` | [Configuration](configuration.md) | - |
`basePath` | string | BASE_PATH |
`axios` | AxiosInstance | globalAxios |

**Returns:** *[CrossAccountRequestApi](crossaccountrequestapi.md)*

## Properties

### `Protected` axios

• **axios**: *AxiosInstance*

*Inherited from [BaseAPI](baseapi.md).[axios](baseapi.md#protected-axios)*

*Defined in [base.ts:51](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/rbac/base.ts#L51)*

___

### `Protected` basePath

• **basePath**: *string*

*Inherited from [BaseAPI](baseapi.md).[basePath](baseapi.md#protected-basepath)*

*Defined in [base.ts:51](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/rbac/base.ts#L51)*

___

### `Protected` configuration

• **configuration**: *[Configuration](configuration.md) | undefined*

*Inherited from [BaseAPI](baseapi.md).[configuration](baseapi.md#protected-configuration)*

*Defined in [base.ts:49](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/rbac/base.ts#L49)*

## Methods

###  createCrossAccountRequests

▸ **createCrossAccountRequests**(`crossAccountRequestIn`: [CrossAccountRequestIn](../interfaces/crossaccountrequestin.md), `options?`: any): *Promise‹AxiosResponse‹[CrossAccountRequestOut](../interfaces/crossaccountrequestout.md)››*

*Defined in [api.ts:2927](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/rbac/api.ts#L2927)*

**`summary`** Create a cross account request

**`throws`** {RequiredError}

**`memberof`** CrossAccountRequestApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`crossAccountRequestIn` | [CrossAccountRequestIn](../interfaces/crossaccountrequestin.md) | CrossAccountRequest to create |
`options?` | any | - |

**Returns:** *Promise‹AxiosResponse‹[CrossAccountRequestOut](../interfaces/crossaccountrequestout.md)››*

___

###  getCrossAccountRequest

▸ **getCrossAccountRequest**(`uuid`: string, `queryBy?`: "user_id" | "target_account", `account?`: string, `approvedOnly?`: "true", `options?`: any): *Promise‹AxiosResponse‹[CrossAccountRequestDetailByAccount](../interfaces/crossaccountrequestdetailbyaccount.md) | [CrossAccountRequestDetailByUseId](../interfaces/crossaccountrequestdetailbyuseid.md)››*

*Defined in [api.ts:2942](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/rbac/api.ts#L2942)*

**`summary`** Get a cross account request

**`throws`** {RequiredError}

**`memberof`** CrossAccountRequestApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`uuid` | string | ID of cross account request to get |
`queryBy?` | "user_id" &#124; "target_account" | - |
`account?` | string | - |
`approvedOnly?` | "true" | - |
`options?` | any | - |

**Returns:** *Promise‹AxiosResponse‹[CrossAccountRequestDetailByAccount](../interfaces/crossaccountrequestdetailbyaccount.md) | [CrossAccountRequestDetailByUseId](../interfaces/crossaccountrequestdetailbyuseid.md)››*

___

###  listCrossAccountRequests

▸ **listCrossAccountRequests**(`limit?`: number, `offset?`: number, `queryBy?`: "user_id" | "target_account", `account?`: string, `approvedOnly?`: "true", `status?`: "pending" | "approved" | "denied" | "cancelled" | "expired", `orderBy?`: "request_id" | "start_date" | "end_date" | "created" | "modified" | "status", `options?`: any): *Promise‹AxiosResponse‹[CrossAccountRequestPagination](../interfaces/crossaccountrequestpagination.md)››*

*Defined in [api.ts:2960](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/rbac/api.ts#L2960)*

By default, responses are sorted in ascending order by created_at

**`summary`** List the cross account requests for a user or account

**`throws`** {RequiredError}

**`memberof`** CrossAccountRequestApi

**Parameters:**

Name | Type |
------ | ------ |
`limit?` | number |
`offset?` | number |
`queryBy?` | "user_id" &#124; "target_account" |
`account?` | string |
`approvedOnly?` | "true" |
`status?` | "pending" &#124; "approved" &#124; "denied" &#124; "cancelled" &#124; "expired" |
`orderBy?` | "request_id" &#124; "start_date" &#124; "end_date" &#124; "created" &#124; "modified" &#124; "status" |
`options?` | any |

**Returns:** *Promise‹AxiosResponse‹[CrossAccountRequestPagination](../interfaces/crossaccountrequestpagination.md)››*

___

###  patchCrossAccountRequest

▸ **patchCrossAccountRequest**(`uuid`: string, `crossAccountRequestPatch`: [CrossAccountRequestPatch](../interfaces/crossaccountrequestpatch.md), `options?`: any): *Promise‹AxiosResponse‹[CrossAccountRequestDetailByAccount](../interfaces/crossaccountrequestdetailbyaccount.md) | [CrossAccountRequestDetailByUseId](../interfaces/crossaccountrequestdetailbyuseid.md)››*

*Defined in [api.ts:2973](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/rbac/api.ts#L2973)*

Update a cross account request

**`summary`** Update a cross account request

**`throws`** {RequiredError}

**`memberof`** CrossAccountRequestApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`uuid` | string | ID of cross account request to get |
`crossAccountRequestPatch` | [CrossAccountRequestPatch](../interfaces/crossaccountrequestpatch.md) | Updates to CrossAccountRequest |
`options?` | any | - |

**Returns:** *Promise‹AxiosResponse‹[CrossAccountRequestDetailByAccount](../interfaces/crossaccountrequestdetailbyaccount.md) | [CrossAccountRequestDetailByUseId](../interfaces/crossaccountrequestdetailbyuseid.md)››*

___

###  putCrossAccountRequest

▸ **putCrossAccountRequest**(`uuid`: string, `crossAccountRequestUpdateIn`: [CrossAccountRequestUpdateIn](../interfaces/crossaccountrequestupdatein.md), `options?`: any): *Promise‹AxiosResponse‹[CrossAccountRequestDetailByAccount](../interfaces/crossaccountrequestdetailbyaccount.md) | [CrossAccountRequestDetailByUseId](../interfaces/crossaccountrequestdetailbyuseid.md)››*

*Defined in [api.ts:2986](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/rbac/api.ts#L2986)*

Update a cross account request

**`summary`** Update a cross account request

**`throws`** {RequiredError}

**`memberof`** CrossAccountRequestApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`uuid` | string | ID of cross account request to get |
`crossAccountRequestUpdateIn` | [CrossAccountRequestUpdateIn](../interfaces/crossaccountrequestupdatein.md) | Updates to CrossAccountRequest |
`options?` | any | - |

**Returns:** *Promise‹AxiosResponse‹[CrossAccountRequestDetailByAccount](../interfaces/crossaccountrequestdetailbyaccount.md) | [CrossAccountRequestDetailByUseId](../interfaces/crossaccountrequestdetailbyuseid.md)››*
