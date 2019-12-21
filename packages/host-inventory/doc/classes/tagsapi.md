[@redhat-cloud-services/host-inventory-client](../README.md) > [TagsApi](../classes/tagsapi.md)

# Class: TagsApi

TagsApi - object-oriented interface

*__export__*: 

*__class__*: TagsApi

*__extends__*: {BaseAPI}

## Hierarchy

 [BaseAPI](baseapi.md)

**↳ TagsApi**

## Index

### Constructors

* [constructor](tagsapi.md#constructor)

### Properties

* [axios](tagsapi.md#axios)
* [basePath](tagsapi.md#basepath)
* [configuration](tagsapi.md#configuration)

### Methods

* [apiTagGetTags](tagsapi.md#apitaggettags)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new TagsApi**(configuration?: *[Configuration](configuration.md)*, basePath?: *`string`*, axios?: *`AxiosInstance`*): [TagsApi](tagsapi.md)

*Inherited from [BaseAPI](baseapi.md).[constructor](baseapi.md#constructor)*

*Defined in [api.ts:49](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L49)*

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| `Optional` configuration | [Configuration](configuration.md) | - |
| `Default value` basePath | `string` |  BASE_PATH |
| `Default value` axios | `AxiosInstance` |  globalAxios |

**Returns:** [TagsApi](tagsapi.md)

___

## Properties

<a id="axios"></a>

### `<Protected>` axios

**● axios**: *`AxiosInstance`*

*Inherited from [BaseAPI](baseapi.md).[axios](baseapi.md#axios)*

*Defined in [api.ts:51](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L51)*

___
<a id="basepath"></a>

### `<Protected>` basePath

**● basePath**: *`string`*

*Inherited from [BaseAPI](baseapi.md).[basePath](baseapi.md#basepath)*

*Defined in [api.ts:51](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L51)*

___
<a id="configuration"></a>

### `<Protected>` configuration

**● configuration**: *[Configuration](configuration.md) \| `undefined`*

*Inherited from [BaseAPI](baseapi.md).[configuration](baseapi.md#configuration)*

*Defined in [api.ts:49](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L49)*

___

## Methods

<a id="apitaggettags"></a>

###  apiTagGetTags

▸ **apiTagGetTags**(tags?: *`Array`<`string`>*, orderBy?: *"tag" \| "count"*, orderHow?: *"ASC" \| "DESC"*, perPage?: *`number`*, page?: *`number`*, staleness?: *`Array`<"fresh" \| "stale" \| "stale_warning" \| "unknown">*, search?: *`string`*, options?: *`any`*): `AxiosPromise`<[ActiveTags](../interfaces/activetags.md)>

*Defined in [api.ts:2469](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L2469)*

*__summary__*: Get the active host tags for a given account

*__throws__*: {RequiredError}

*__memberof__*: TagsApi

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` tags | `Array`<`string`> |
| `Optional` orderBy | "tag" \| "count" |
| `Optional` orderHow | "ASC" \| "DESC" |
| `Optional` perPage | `number` |
| `Optional` page | `number` |
| `Optional` staleness | `Array`<"fresh" \| "stale" \| "stale_warning" \| "unknown"> |
| `Optional` search | `string` |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[ActiveTags](../interfaces/activetags.md)>

___

