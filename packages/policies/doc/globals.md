[@redhat-cloud-services/policies-client](README.md) › [Globals](globals.md)

# @redhat-cloud-services/policies-client

## Index

### Classes

* [BaseAPI](classes/baseapi.md)
* [BasePathFillerServiceApi](classes/basepathfillerserviceapi.md)
* [Configuration](classes/configuration.md)
* [FactServiceApi](classes/factserviceapi.md)
* [PolicyCrudServiceApi](classes/policycrudserviceapi.md)
* [RequiredError](classes/requirederror.md)

### Interfaces

* [ConfigurationParameters](interfaces/configurationparameters.md)
* [Fact](interfaces/fact.md)
* [HistoryItem](interfaces/historyitem.md)
* [Meta](interfaces/meta.md)
* [Msg](interfaces/msg.md)
* [PagedResponseOfHistoryItem](interfaces/pagedresponseofhistoryitem.md)
* [PagedResponseOfPolicy](interfaces/pagedresponseofpolicy.md)
* [Policy](interfaces/policy.md)
* [RequestArgs](interfaces/requestargs.md)
* [UserPreferences](interfaces/userpreferences.md)

### Type aliases

* [FactType](globals.md#facttype)

### Variables

* [BASE_PATH](globals.md#const-base_path)
* [DUMMY_BASE_URL](globals.md#const-dummy_base_url)
* [FactType](globals.md#const-facttype)

### Functions

* [BasePathFillerServiceApiAxiosParamCreator](globals.md#const-basepathfillerserviceapiaxiosparamcreator)
* [BasePathFillerServiceApiFactory](globals.md#const-basepathfillerserviceapifactory)
* [BasePathFillerServiceApiFp](globals.md#const-basepathfillerserviceapifp)
* [FactServiceApiAxiosParamCreator](globals.md#const-factserviceapiaxiosparamcreator)
* [FactServiceApiFactory](globals.md#const-factserviceapifactory)
* [FactServiceApiFp](globals.md#const-factserviceapifp)
* [PolicyCrudServiceApiAxiosParamCreator](globals.md#const-policycrudserviceapiaxiosparamcreator)
* [PolicyCrudServiceApiFactory](globals.md#const-policycrudserviceapifactory)
* [PolicyCrudServiceApiFp](globals.md#const-policycrudserviceapifp)
* [assertParamExists](globals.md#const-assertparamexists)
* [createRequestFunction](globals.md#const-createrequestfunction)
* [serializeDataIfNeeded](globals.md#const-serializedataifneeded)
* [setApiKeyToObject](globals.md#const-setapikeytoobject)
* [setBasicAuthToObject](globals.md#const-setbasicauthtoobject)
* [setBearerAuthToObject](globals.md#const-setbearerauthtoobject)
* [setFlattenedQueryParams](globals.md#setflattenedqueryparams)
* [setOAuthToObject](globals.md#const-setoauthtoobject)
* [setSearchParams](globals.md#const-setsearchparams)
* [toPathString](globals.md#const-topathstring)

### Object literals

* [COLLECTION_FORMATS](globals.md#const-collection_formats)

## Type aliases

###  FactType

Ƭ **FactType**: *typeof FactType[keyof typeof FactType]*

Defined in packages/policies/api.ts:62

## Variables

### `Const` BASE_PATH

• **BASE_PATH**: *string* = "https://cloud.redhat.com".replace(/\/+$/, "")

Defined in packages/policies/base.ts:21

___

### `Const` DUMMY_BASE_URL

• **DUMMY_BASE_URL**: *"https://example.com"* = "https://example.com"

Defined in packages/policies/common.ts:24

**`export`** 

___

### `Const` FactType

• **FactType**: *object* = {
    String: 'STRING',
    Boolean: 'BOOLEAN',
    List: 'LIST',
    Int: 'INT'
} as const

Defined in packages/policies/api.ts:55

**`export`** 

#### Type declaration:

* **Boolean**: *"BOOLEAN"* = "BOOLEAN"

* **Int**: *"INT"* = "INT"

* **List**: *"LIST"* = "LIST"

* **String**: *"STRING"* = "STRING"

## Functions

### `Const` BasePathFillerServiceApiAxiosParamCreator

▸ **BasePathFillerServiceApiAxiosParamCreator**(`configuration?`: [Configuration](classes/configuration.md)): *object*

Defined in packages/policies/api.ts:251

BasePathFillerServiceApi - axios parameter creator

**`export`** 

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](classes/configuration.md) |

**Returns:** *object*

* **get**(`options`: AxiosRequestConfig): *Promise‹[RequestArgs](interfaces/requestargs.md)›*

___

### `Const` BasePathFillerServiceApiFactory

▸ **BasePathFillerServiceApiFactory**(`configuration?`: [Configuration](classes/configuration.md), `basePath?`: string, `axios?`: AxiosInstance): *object*

Defined in packages/policies/api.ts:310

BasePathFillerServiceApi - factory interface

**`export`** 

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](classes/configuration.md) |
`basePath?` | string |
`axios?` | AxiosInstance |

**Returns:** *object*

* **get**(`options?`: any): *AxiosPromise‹void›*

___

### `Const` BasePathFillerServiceApiFp

▸ **BasePathFillerServiceApiFp**(`configuration?`: [Configuration](classes/configuration.md)): *object*

Defined in packages/policies/api.ts:290

BasePathFillerServiceApi - functional programming interface

**`export`** 

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](classes/configuration.md) |

**Returns:** *object*

* **get**(`options?`: AxiosRequestConfig): *Promise‹function›*

___

### `Const` FactServiceApiAxiosParamCreator

▸ **FactServiceApiAxiosParamCreator**(`configuration?`: [Configuration](classes/configuration.md)): *object*

Defined in packages/policies/api.ts:349

FactServiceApi - axios parameter creator

**`export`** 

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](classes/configuration.md) |

**Returns:** *object*

* **getFacts**(`options`: AxiosRequestConfig): *Promise‹[RequestArgs](interfaces/requestargs.md)›*

___

### `Const` FactServiceApiFactory

▸ **FactServiceApiFactory**(`configuration?`: [Configuration](classes/configuration.md), `basePath?`: string, `axios?`: AxiosInstance): *object*

Defined in packages/policies/api.ts:408

FactServiceApi - factory interface

**`export`** 

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](classes/configuration.md) |
`basePath?` | string |
`axios?` | AxiosInstance |

**Returns:** *object*

* **getFacts**(`options?`: any): *AxiosPromise‹Array‹[Fact](interfaces/fact.md)››*

___

### `Const` FactServiceApiFp

▸ **FactServiceApiFp**(`configuration?`: [Configuration](classes/configuration.md)): *object*

Defined in packages/policies/api.ts:388

FactServiceApi - functional programming interface

**`export`** 

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](classes/configuration.md) |

**Returns:** *object*

* **getFacts**(`options?`: AxiosRequestConfig): *Promise‹function›*

___

### `Const` PolicyCrudServiceApiAxiosParamCreator

▸ **PolicyCrudServiceApiAxiosParamCreator**(`configuration?`: [Configuration](classes/configuration.md)): *object*

Defined in packages/policies/api.ts:447

PolicyCrudServiceApi - axios parameter creator

**`export`** 

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](classes/configuration.md) |

**Returns:** *object*

* **deletePoliciesById**(`id`: string, `options`: AxiosRequestConfig): *Promise‹[RequestArgs](interfaces/requestargs.md)›*

* **deletePoliciesIds**(`requestBody?`: Array‹string›, `options`: AxiosRequestConfig): *Promise‹[RequestArgs](interfaces/requestargs.md)›*

* **getPolicies**(`filteropDescription?`: "equal" | "like" | "ilike" | "not_equal", `filteropName?`: "equal" | "like" | "ilike" | "not_equal", `filterDescription?`: string, `filterIsEnabled?`: "true" | "false", `filterName?`: string, `limit?`: number, `offset?`: number, `sortColumn?`: "name" | "description" | "is_enabled" | "mtime" | "last_triggered", `sortDirection?`: "asc" | "desc", `options`: AxiosRequestConfig): *Promise‹[RequestArgs](interfaces/requestargs.md)›*

* **getPoliciesById**(`id`: string, `options`: AxiosRequestConfig): *Promise‹[RequestArgs](interfaces/requestargs.md)›*

* **getPoliciesByIdHistoryTrigger**(`id`: string, `filteropId?`: "equal" | "not_equal" | "like", `filteropName?`: "equal" | "like" | "not_equal", `filterId?`: string, `filterName?`: string, `limit?`: number, `offset?`: number, `sortColumn?`: "hostName" | "ctime", `sortDirection?`: "asc" | "desc", `options`: AxiosRequestConfig): *Promise‹[RequestArgs](interfaces/requestargs.md)›*

* **getPoliciesIds**(`filteropDescription?`: "equal" | "like" | "ilike" | "not_equal", `filteropName?`: "equal" | "like" | "ilike" | "not_equal", `filterDescription?`: string, `filterIsEnabled?`: "true" | "false", `filterName?`: string, `options`: AxiosRequestConfig): *Promise‹[RequestArgs](interfaces/requestargs.md)›*

* **postPolicies**(`alsoStore?`: boolean, `policy?`: [Policy](interfaces/policy.md), `options`: AxiosRequestConfig): *Promise‹[RequestArgs](interfaces/requestargs.md)›*

* **postPoliciesByIdEnabled**(`id`: string, `enabled?`: boolean, `options`: AxiosRequestConfig): *Promise‹[RequestArgs](interfaces/requestargs.md)›*

* **postPoliciesIdsEnabled**(`enabled?`: boolean, `requestBody?`: Array‹string›, `options`: AxiosRequestConfig): *Promise‹[RequestArgs](interfaces/requestargs.md)›*

* **postPoliciesValidate**(`policy?`: [Policy](interfaces/policy.md), `options`: AxiosRequestConfig): *Promise‹[RequestArgs](interfaces/requestargs.md)›*

* **postPoliciesValidateName**(`body`: string, `id?`: string, `options`: AxiosRequestConfig): *Promise‹[RequestArgs](interfaces/requestargs.md)›*

* **putPoliciesByPolicyId**(`policyId`: string, `dry?`: boolean, `policy?`: [Policy](interfaces/policy.md), `options`: AxiosRequestConfig): *Promise‹[RequestArgs](interfaces/requestargs.md)›*

___

### `Const` PolicyCrudServiceApiFactory

▸ **PolicyCrudServiceApiFactory**(`configuration?`: [Configuration](classes/configuration.md), `basePath?`: string, `axios?`: AxiosInstance): *object*

Defined in packages/policies/api.ts:1165

PolicyCrudServiceApi - factory interface

**`export`** 

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](classes/configuration.md) |
`basePath?` | string |
`axios?` | AxiosInstance |

**Returns:** *object*

* **deletePoliciesById**(`id`: string, `options?`: any): *AxiosPromise‹void›*

* **deletePoliciesIds**(`requestBody?`: Array‹string›, `options?`: any): *AxiosPromise‹Array‹string››*

* **getPolicies**(`filteropDescription?`: "equal" | "like" | "ilike" | "not_equal", `filteropName?`: "equal" | "like" | "ilike" | "not_equal", `filterDescription?`: string, `filterIsEnabled?`: "true" | "false", `filterName?`: string, `limit?`: number, `offset?`: number, `sortColumn?`: "name" | "description" | "is_enabled" | "mtime" | "last_triggered", `sortDirection?`: "asc" | "desc", `options?`: any): *AxiosPromise‹[PagedResponseOfPolicy](interfaces/pagedresponseofpolicy.md)›*

* **getPoliciesById**(`id`: string, `options?`: any): *AxiosPromise‹[Policy](interfaces/policy.md)›*

* **getPoliciesByIdHistoryTrigger**(`id`: string, `filteropId?`: "equal" | "not_equal" | "like", `filteropName?`: "equal" | "like" | "not_equal", `filterId?`: string, `filterName?`: string, `limit?`: number, `offset?`: number, `sortColumn?`: "hostName" | "ctime", `sortDirection?`: "asc" | "desc", `options?`: any): *AxiosPromise‹[PagedResponseOfHistoryItem](interfaces/pagedresponseofhistoryitem.md)›*

* **getPoliciesIds**(`filteropDescription?`: "equal" | "like" | "ilike" | "not_equal", `filteropName?`: "equal" | "like" | "ilike" | "not_equal", `filterDescription?`: string, `filterIsEnabled?`: "true" | "false", `filterName?`: string, `options?`: any): *AxiosPromise‹Array‹string››*

* **postPolicies**(`alsoStore?`: boolean, `policy?`: [Policy](interfaces/policy.md), `options?`: any): *AxiosPromise‹void›*

* **postPoliciesByIdEnabled**(`id`: string, `enabled?`: boolean, `options?`: any): *AxiosPromise‹void›*

* **postPoliciesIdsEnabled**(`enabled?`: boolean, `requestBody?`: Array‹string›, `options?`: any): *AxiosPromise‹Array‹string››*

* **postPoliciesValidate**(`policy?`: [Policy](interfaces/policy.md), `options?`: any): *AxiosPromise‹[Msg](interfaces/msg.md)›*

* **postPoliciesValidateName**(`body`: string, `id?`: string, `options?`: any): *AxiosPromise‹[Msg](interfaces/msg.md)›*

* **putPoliciesByPolicyId**(`policyId`: string, `dry?`: boolean, `policy?`: [Policy](interfaces/policy.md), `options?`: any): *AxiosPromise‹[Policy](interfaces/policy.md)›*

___

### `Const` PolicyCrudServiceApiFp

▸ **PolicyCrudServiceApiFp**(`configuration?`: [Configuration](classes/configuration.md)): *object*

Defined in packages/policies/api.ts:997

PolicyCrudServiceApi - functional programming interface

**`export`** 

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](classes/configuration.md) |

**Returns:** *object*

* **deletePoliciesById**(`id`: string, `options?`: AxiosRequestConfig): *Promise‹function›*

* **deletePoliciesIds**(`requestBody?`: Array‹string›, `options?`: AxiosRequestConfig): *Promise‹function›*

* **getPolicies**(`filteropDescription?`: "equal" | "like" | "ilike" | "not_equal", `filteropName?`: "equal" | "like" | "ilike" | "not_equal", `filterDescription?`: string, `filterIsEnabled?`: "true" | "false", `filterName?`: string, `limit?`: number, `offset?`: number, `sortColumn?`: "name" | "description" | "is_enabled" | "mtime" | "last_triggered", `sortDirection?`: "asc" | "desc", `options?`: AxiosRequestConfig): *Promise‹function›*

* **getPoliciesById**(`id`: string, `options?`: AxiosRequestConfig): *Promise‹function›*

* **getPoliciesByIdHistoryTrigger**(`id`: string, `filteropId?`: "equal" | "not_equal" | "like", `filteropName?`: "equal" | "like" | "not_equal", `filterId?`: string, `filterName?`: string, `limit?`: number, `offset?`: number, `sortColumn?`: "hostName" | "ctime", `sortDirection?`: "asc" | "desc", `options?`: AxiosRequestConfig): *Promise‹function›*

* **getPoliciesIds**(`filteropDescription?`: "equal" | "like" | "ilike" | "not_equal", `filteropName?`: "equal" | "like" | "ilike" | "not_equal", `filterDescription?`: string, `filterIsEnabled?`: "true" | "false", `filterName?`: string, `options?`: AxiosRequestConfig): *Promise‹function›*

* **postPolicies**(`alsoStore?`: boolean, `policy?`: [Policy](interfaces/policy.md), `options?`: AxiosRequestConfig): *Promise‹function›*

* **postPoliciesByIdEnabled**(`id`: string, `enabled?`: boolean, `options?`: AxiosRequestConfig): *Promise‹function›*

* **postPoliciesIdsEnabled**(`enabled?`: boolean, `requestBody?`: Array‹string›, `options?`: AxiosRequestConfig): *Promise‹function›*

* **postPoliciesValidate**(`policy?`: [Policy](interfaces/policy.md), `options?`: AxiosRequestConfig): *Promise‹function›*

* **postPoliciesValidateName**(`body`: string, `id?`: string, `options?`: AxiosRequestConfig): *Promise‹function›*

* **putPoliciesByPolicyId**(`policyId`: string, `dry?`: boolean, `policy?`: [Policy](interfaces/policy.md), `options?`: AxiosRequestConfig): *Promise‹function›*

___

### `Const` assertParamExists

▸ **assertParamExists**(`functionName`: string, `paramName`: string, `paramValue`: unknown): *void*

Defined in packages/policies/common.ts:31

**`throws`** {RequiredError}

**`export`** 

**Parameters:**

Name | Type |
------ | ------ |
`functionName` | string |
`paramName` | string |
`paramValue` | unknown |

**Returns:** *void*

___

### `Const` createRequestFunction

▸ **createRequestFunction**(`axiosArgs`: [RequestArgs](interfaces/requestargs.md), `globalAxios`: AxiosInstance, `BASE_PATH`: string, `configuration?`: [Configuration](classes/configuration.md)): *(Anonymous function)*

Defined in packages/policies/common.ts:143

**`export`** 

**Parameters:**

Name | Type |
------ | ------ |
`axiosArgs` | [RequestArgs](interfaces/requestargs.md) |
`globalAxios` | AxiosInstance |
`BASE_PATH` | string |
`configuration?` | [Configuration](classes/configuration.md) |

**Returns:** *(Anonymous function)*

___

### `Const` serializeDataIfNeeded

▸ **serializeDataIfNeeded**(`value`: any, `requestOptions`: any, `configuration?`: [Configuration](classes/configuration.md)): *any*

Defined in packages/policies/common.ts:121

**`export`** 

**Parameters:**

Name | Type |
------ | ------ |
`value` | any |
`requestOptions` | any |
`configuration?` | [Configuration](classes/configuration.md) |

**Returns:** *any*

___

### `Const` setApiKeyToObject

▸ **setApiKeyToObject**(`object`: any, `keyParamName`: string, `configuration?`: [Configuration](classes/configuration.md)): *Promise‹void›*

Defined in packages/policies/common.ts:41

**`export`** 

**Parameters:**

Name | Type |
------ | ------ |
`object` | any |
`keyParamName` | string |
`configuration?` | [Configuration](classes/configuration.md) |

**Returns:** *Promise‹void›*

___

### `Const` setBasicAuthToObject

▸ **setBasicAuthToObject**(`object`: any, `configuration?`: [Configuration](classes/configuration.md)): *void*

Defined in packages/policies/common.ts:54

**`export`** 

**Parameters:**

Name | Type |
------ | ------ |
`object` | any |
`configuration?` | [Configuration](classes/configuration.md) |

**Returns:** *void*

___

### `Const` setBearerAuthToObject

▸ **setBearerAuthToObject**(`object`: any, `configuration?`: [Configuration](classes/configuration.md)): *Promise‹void›*

Defined in packages/policies/common.ts:64

**`export`** 

**Parameters:**

Name | Type |
------ | ------ |
`object` | any |
`configuration?` | [Configuration](classes/configuration.md) |

**Returns:** *Promise‹void›*

___

###  setFlattenedQueryParams

▸ **setFlattenedQueryParams**(`urlSearchParams`: URLSearchParams, `parameter`: any, `key`: string): *void*

Defined in packages/policies/common.ts:86

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`urlSearchParams` | URLSearchParams | - |
`parameter` | any | - |
`key` | string | "" |

**Returns:** *void*

___

### `Const` setOAuthToObject

▸ **setOAuthToObject**(`object`: any, `name`: string, `scopes`: string[], `configuration?`: [Configuration](classes/configuration.md)): *Promise‹void›*

Defined in packages/policies/common.ts:77

**`export`** 

**Parameters:**

Name | Type |
------ | ------ |
`object` | any |
`name` | string |
`scopes` | string[] |
`configuration?` | [Configuration](classes/configuration.md) |

**Returns:** *Promise‹void›*

___

### `Const` setSearchParams

▸ **setSearchParams**(`url`: URL, ...`objects`: any[]): *void*

Defined in packages/policies/common.ts:111

**`export`** 

**Parameters:**

Name | Type |
------ | ------ |
`url` | URL |
`...objects` | any[] |

**Returns:** *void*

___

### `Const` toPathString

▸ **toPathString**(`url`: URL): *string*

Defined in packages/policies/common.ts:135

**`export`** 

**Parameters:**

Name | Type |
------ | ------ |
`url` | URL |

**Returns:** *string*

## Object literals

### `Const` COLLECTION_FORMATS

### ▪ **COLLECTION_FORMATS**: *object*

Defined in packages/policies/base.ts:27

**`export`** 

###  csv

• **csv**: *string* = ","

Defined in packages/policies/base.ts:28

###  pipes

• **pipes**: *string* = "|"

Defined in packages/policies/base.ts:31

###  ssv

• **ssv**: *string* = " "

Defined in packages/policies/base.ts:29

###  tsv

• **tsv**: *string* = "	"

Defined in packages/policies/base.ts:30
