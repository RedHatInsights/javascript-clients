[@redhat-cloud-services/host-inventory-client](../README.md) / [Exports](../modules.md) / TagsApi

# Class: TagsApi

TagsApi - object-oriented interface

**`Export`**

## Hierarchy

- `BaseAPI`

  ↳ **`TagsApi`**

## Table of contents

### Constructors

- [constructor](TagsApi.md#constructor)

### Properties

- [axios](TagsApi.md#axios)
- [basePath](TagsApi.md#basepath)
- [configuration](TagsApi.md#configuration)

### Methods

- [apiTagGetTags](TagsApi.md#apitaggettags)

## Constructors

### constructor

• **new TagsApi**(`configuration?`, `basePath?`, `axios?`)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `configuration?` | [`Configuration`](Configuration.md) | `undefined` |
| `basePath` | `string` | `BASE_PATH` |
| `axios` | `AxiosInstance` | `globalAxios` |

#### Inherited from

BaseAPI.constructor

#### Defined in

[base.ts:51](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/base.ts#L51)

## Properties

### axios

• `Protected` **axios**: `AxiosInstance` = `globalAxios`

#### Inherited from

BaseAPI.axios

#### Defined in

[base.ts:51](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/base.ts#L51)

___

### basePath

• `Protected` **basePath**: `string` = `BASE_PATH`

#### Inherited from

BaseAPI.basePath

#### Defined in

[base.ts:51](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/base.ts#L51)

___

### configuration

• `Protected` **configuration**: [`Configuration`](Configuration.md)

#### Inherited from

BaseAPI.configuration

#### Defined in

[base.ts:49](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/base.ts#L49)

## Methods

### apiTagGetTags

▸ **apiTagGetTags**(`tags?`, `orderBy?`, `orderHow?`, `perPage?`, `page?`, `staleness?`, `search?`, `displayName?`, `fqdn?`, `hostnameOrId?`, `insightsId?`, `providerId?`, `providerType?`, `registeredWith?`, `filter?`, `options?`): `Promise`<`AxiosResponse`<[`ActiveTags`](../interfaces/ActiveTags.md)\>\>

Required permissions: inventory:hosts:read

**`Summary`**

Get the active host tags for a given account

**`Throws`**

**`Memberof`**

TagsApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `tags?` | `string`[] | filters out hosts not tagged by the given tags |
| `orderBy?` | ``"tag"`` \| ``"count"`` | Ordering field name |
| `orderHow?` | ``"ASC"`` \| ``"DESC"`` | Direction of the ordering. Default to ASC |
| `perPage?` | `number` | A number of items to return per page. |
| `page?` | `number` | A page number of the items to return. |
| `staleness?` | (``"unknown"`` \| ``"fresh"`` \| ``"stale"`` \| ``"stale_warning"``)[] | Culling states of the hosts. Default: fresh,stale,unknown |
| `search?` | `string` | Used for searching tags and sap_sids that match the given search string. For searching tags, a tag\&#39;s namespace, key, and/or value is used for matching. |
| `displayName?` | `string` | Filter by display_name (case-insensitive) |
| `fqdn?` | `string` | Filter by FQDN (case-insensitive) |
| `hostnameOrId?` | `string` | Filter by display_name, fqdn, id (case-insensitive) |
| `insightsId?` | `string` | Filter by insights_id |
| `providerId?` | `string` | Filter by provider_id |
| `providerType?` | ``"alibaba"`` \| ``"aws"`` \| ``"azure"`` \| ``"gcp"`` \| ``"ibm"`` | Filter by provider_type |
| `registeredWith?` | (``"insights"`` \| ``"yupana"`` \| ``"puptoo"`` \| ``"rhsm-conduit"`` \| ``"cloud-connector"`` \| ``"!yupana"`` \| ``"!puptoo"`` \| ``"!rhsm-conduit"`` \| ``"!cloud-connector"``)[] | Filters out any host not registered by the specified reporters |
| `filter?` | `Object` | Filters hosts based on system_profile fields |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`ActiveTags`](../interfaces/ActiveTags.md)\>\>

#### Defined in

[api.ts:4315](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L4315)
