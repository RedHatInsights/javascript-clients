[@redhat-cloud-services/host-inventory-client](../README.md) › [Globals](../globals.md) › [TagsApi](tagsapi.md)

# Class: TagsApi

TagsApi - object-oriented interface

**`export`** 

**`class`** TagsApi

**`extends`** {BaseAPI}

## Hierarchy

* [BaseAPI](baseapi.md)

  ↳ **TagsApi**

## Index

### Constructors

* [constructor](tagsapi.md#constructor)

### Properties

* [axios](tagsapi.md#protected-axios)
* [basePath](tagsapi.md#protected-basepath)
* [configuration](tagsapi.md#protected-configuration)

### Methods

* [apiTagGetTags](tagsapi.md#apitaggettags)

## Constructors

###  constructor

\+ **new TagsApi**(`configuration?`: [Configuration](configuration.md), `basePath`: string, `axios`: AxiosInstance): *[TagsApi](tagsapi.md)*

*Inherited from [BaseAPI](baseapi.md).[constructor](baseapi.md#constructor)*

*Defined in [api.ts:49](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L49)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`configuration?` | [Configuration](configuration.md) | - |
`basePath` | string |  BASE_PATH |
`axios` | AxiosInstance |  globalAxios |

**Returns:** *[TagsApi](tagsapi.md)*

## Properties

### `Protected` axios

• **axios**: *AxiosInstance*

*Inherited from [BaseAPI](baseapi.md).[axios](baseapi.md#protected-axios)*

*Defined in [api.ts:51](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L51)*

___

### `Protected` basePath

• **basePath**: *string*

*Inherited from [BaseAPI](baseapi.md).[basePath](baseapi.md#protected-basepath)*

*Defined in [api.ts:51](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L51)*

___

### `Protected` configuration

• **configuration**: *[Configuration](configuration.md) | undefined*

*Inherited from [BaseAPI](baseapi.md).[configuration](baseapi.md#protected-configuration)*

*Defined in [api.ts:49](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L49)*

## Methods

###  apiTagGetTags

▸ **apiTagGetTags**(`tags?`: Array‹string›, `orderBy?`: "tag" | "count", `orderHow?`: "ASC" | "DESC", `perPage?`: number, `page?`: number, `staleness?`: Array‹"fresh" | "stale" | "stale_warning" | "unknown"›, `search?`: string, `options?`: any): *AxiosPromise‹[ActiveTags](../interfaces/activetags.md)›*

*Defined in [api.ts:2499](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L2499)*

**`summary`** Get the active host tags for a given account

**`throws`** {RequiredError}

**`memberof`** TagsApi

**Parameters:**

Name | Type |
------ | ------ |
`tags?` | Array‹string› |
`orderBy?` | "tag" &#124; "count" |
`orderHow?` | "ASC" &#124; "DESC" |
`perPage?` | number |
`page?` | number |
`staleness?` | Array‹"fresh" &#124; "stale" &#124; "stale_warning" &#124; "unknown"› |
`search?` | string |
`options?` | any |

**Returns:** *AxiosPromise‹[ActiveTags](../interfaces/activetags.md)›*
