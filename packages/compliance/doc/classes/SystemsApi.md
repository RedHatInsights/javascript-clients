[@redhat-cloud-services/compliance-client](../README.md) / [Exports](../modules.md) / SystemsApi

# Class: SystemsApi

SystemsApi - object-oriented interface

**`Export`**

SystemsApi

## Hierarchy

- `BaseAPI`

  ↳ **`SystemsApi`**

## Table of contents

### Constructors

- [constructor](SystemsApi.md#constructor)

### Properties

- [axios](SystemsApi.md#axios)
- [basePath](SystemsApi.md#basepath)
- [configuration](SystemsApi.md#configuration)

### Methods

- [system](SystemsApi.md#system)
- [systems](SystemsApi.md#systems)
- [systemsPolicies](SystemsApi.md#systemspolicies)

## Constructors

### constructor

• **new SystemsApi**(`configuration?`, `basePath?`, `axios?`): [`SystemsApi`](SystemsApi.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `configuration?` | [`Configuration`](Configuration.md) | `undefined` |
| `basePath` | `string` | `BASE_PATH` |
| `axios` | `AxiosInstance` | `globalAxios` |

#### Returns

[`SystemsApi`](SystemsApi.md)

#### Inherited from

BaseAPI.constructor

#### Defined in

base.ts:53

## Properties

### axios

• `Protected` **axios**: `AxiosInstance` = `globalAxios`

#### Inherited from

BaseAPI.axios

#### Defined in

base.ts:53

___

### basePath

• `Protected` **basePath**: `string` = `BASE_PATH`

#### Inherited from

BaseAPI.basePath

#### Defined in

base.ts:53

___

### configuration

• `Protected` **configuration**: `undefined` \| [`Configuration`](Configuration.md)

#### Inherited from

BaseAPI.configuration

#### Defined in

base.ts:51

## Methods

### system

▸ **system**(`id`, `xRHIDENTITY?`, `options?`): `Promise`\<`AxiosResponse`\<[`System200Response`](../interfaces/System200Response.md), `any`\>\>

Returns a System

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `any` |  |
| `xRHIDENTITY?` | `any` |  |
| `options?` | `AxiosRequestConfig`\<`any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<[`System200Response`](../interfaces/System200Response.md), `any`\>\>

**`Summary`**

Request a System

**`Throws`**

**`Memberof`**

SystemsApi

#### Defined in

api.ts:4310

___

### systems

▸ **systems**(`xRHIDENTITY?`, `limit?`, `offset?`, `sortBy?`, `filter?`, `options?`): `Promise`\<`AxiosResponse`\<[`Systems200Response`](../interfaces/Systems200Response.md), `any`\>\>

Lists Systems

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `xRHIDENTITY?` | `any` |  |
| `limit?` | `any` | Number of items to return per page |
| `offset?` | `any` | Offset of first item of paginated response |
| `sortBy?` | `any` | Attribute and direction to sort the items by. Represented by an array of fields with an optional direction (&#x60;&lt;key&gt;:asc&#x60; or &#x60;&lt;key&gt;:desc&#x60;).&lt;br&gt;&lt;br&gt;If no direction is selected, &#x60;&lt;key&gt;:asc&#x60; is used by default. |
| `filter?` | `any` | Query string to filter items by their attributes. Compliant with &lt;a href&#x3D;\&quot;https://github.com/wvanbergen/scoped_search/wiki/Query-language\&quot; target&#x3D;\&quot;_blank\&quot; title&#x3D;\&quot;github.com/wvanbergen/scoped_search\&quot;&gt;scoped_search query language&lt;/a&gt;. However, only &#x60;&#x3D;&#x60; or &#x60;!&#x3D;&#x60; (resp. &#x60;&lt;&gt;&#x60;) operators are supported.&lt;br&gt;&lt;br&gt;Systems are searchable using attributes &#x60;display_name&#x60;, &#x60;os_major_version&#x60;, and &#x60;os_minor_version&#x60;&lt;br&gt;&lt;br&gt;(e.g.: &#x60;(version&#x3D;0.1.47 AND os_major_verision&#x3D;8)&#x60;) |
| `options?` | `AxiosRequestConfig`\<`any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<[`Systems200Response`](../interfaces/Systems200Response.md), `any`\>\>

**`Summary`**

Request Systems

**`Throws`**

**`Memberof`**

SystemsApi

#### Defined in

api.ts:4326

___

### systemsPolicies

▸ **systemsPolicies**(`systemId`, `xRHIDENTITY?`, `limit?`, `offset?`, `sortBy?`, `filter?`, `options?`): `Promise`\<`AxiosResponse`\<[`Policies200Response`](../interfaces/Policies200Response.md), `any`\>\>

Lists Policies under a System

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `systemId` | `any` |  |
| `xRHIDENTITY?` | `any` |  |
| `limit?` | `any` | Number of items to return per page |
| `offset?` | `any` | Offset of first item of paginated response |
| `sortBy?` | `any` | Attribute and direction to sort the items by. Represented by an array of fields with an optional direction (&#x60;&lt;key&gt;:asc&#x60; or &#x60;&lt;key&gt;:desc&#x60;).&lt;br&gt;&lt;br&gt;If no direction is selected, &#x60;&lt;key&gt;:asc&#x60; is used by default. |
| `filter?` | `any` | Query string to filter items by their attributes. Compliant with &lt;a href&#x3D;\&quot;https://github.com/wvanbergen/scoped_search/wiki/Query-language\&quot; target&#x3D;\&quot;_blank\&quot; title&#x3D;\&quot;github.com/wvanbergen/scoped_search\&quot;&gt;scoped_search query language&lt;/a&gt;. However, only &#x60;&#x3D;&#x60; or &#x60;!&#x3D;&#x60; (resp. &#x60;&lt;&gt;&#x60;) operators are supported.&lt;br&gt;&lt;br&gt;Policies are searchable using attributes &#x60;title&#x60; and &#x60;os_major_version&#x60;&lt;br&gt;&lt;br&gt;(e.g.: &#x60;(version&#x3D;0.1.47 AND os_major_verision&#x3D;8)&#x60;) |
| `options?` | `AxiosRequestConfig`\<`any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<[`Policies200Response`](../interfaces/Policies200Response.md), `any`\>\>

**`Summary`**

Request Policies assigned to a System

**`Throws`**

**`Memberof`**

SystemsApi

#### Defined in

api.ts:4343
