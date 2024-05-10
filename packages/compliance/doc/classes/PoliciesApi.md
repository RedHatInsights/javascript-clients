[@redhat-cloud-services/compliance-client](../README.md) / [Exports](../modules.md) / PoliciesApi

# Class: PoliciesApi

PoliciesApi - object-oriented interface

**`Export`**

PoliciesApi

## Hierarchy

- `BaseAPI`

  ↳ **`PoliciesApi`**

## Table of contents

### Constructors

- [constructor](PoliciesApi.md#constructor)

### Properties

- [axios](PoliciesApi.md#axios)
- [basePath](PoliciesApi.md#basepath)
- [configuration](PoliciesApi.md#configuration)

### Methods

- [assignRule](PoliciesApi.md#assignrule)
- [assignRules](PoliciesApi.md#assignrules)
- [assignSystem](PoliciesApi.md#assignsystem)
- [assignSystems](PoliciesApi.md#assignsystems)
- [createPolicy](PoliciesApi.md#createpolicy)
- [deletePolicy](PoliciesApi.md#deletepolicy)
- [policies](PoliciesApi.md#policies)
- [policy](PoliciesApi.md#policy)
- [policySystems](PoliciesApi.md#policysystems)
- [tailoring](PoliciesApi.md#tailoring)
- [tailoringFile](PoliciesApi.md#tailoringfile)
- [tailoringRules](PoliciesApi.md#tailoringrules)
- [tailorings](PoliciesApi.md#tailorings)
- [unassignRule](PoliciesApi.md#unassignrule)
- [unassignSystem](PoliciesApi.md#unassignsystem)
- [updatePolicy](PoliciesApi.md#updatepolicy)

## Constructors

### constructor

• **new PoliciesApi**(`configuration?`, `basePath?`, `axios?`): [`PoliciesApi`](PoliciesApi.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `configuration?` | [`Configuration`](Configuration.md) | `undefined` |
| `basePath` | `string` | `BASE_PATH` |
| `axios` | `AxiosInstance` | `globalAxios` |

#### Returns

[`PoliciesApi`](PoliciesApi.md)

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

### assignRule

▸ **assignRule**(`policyId`, `tailoringId`, `id`, `xRHIDENTITY?`, `options?`): `Promise`\<`AxiosResponse`\<`void`, `any`\>\>

Assigns a Rule to a Tailoring

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `policyId` | `any` |  |
| `tailoringId` | `any` |  |
| `id` | `any` |  |
| `xRHIDENTITY?` | `any` |  |
| `options?` | `AxiosRequestConfig`\<`any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<`void`, `any`\>\>

**`Summary`**

Assign a Rule to a Tailoring

**`Throws`**

**`Memberof`**

PoliciesApi

#### Defined in

api.ts:3794

___

### assignRules

▸ **assignRules**(`policyId`, `tailoringId`, `xRHIDENTITY?`, `assignRulesRequest?`, `options?`): `Promise`\<`AxiosResponse`\<[`Rules200Response`](../interfaces/Rules200Response.md), `any`\>\>

This feature is exclusively used by the frontend

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `policyId` | `any` |  |
| `tailoringId` | `any` |  |
| `xRHIDENTITY?` | `any` |  |
| `assignRulesRequest?` | [`AssignRulesRequest`](../interfaces/AssignRulesRequest.md) |  |
| `options?` | `AxiosRequestConfig`\<`any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<[`Rules200Response`](../interfaces/Rules200Response.md), `any`\>\>

**`Summary`**

Bulk assign Rules to a Tailoring

**`Deprecated`**

**`Throws`**

**`Memberof`**

PoliciesApi

#### Defined in

api.ts:3810

___

### assignSystem

▸ **assignSystem**(`id`, `policyId`, `xRHIDENTITY?`, `options?`): `Promise`\<`AxiosResponse`\<[`System200Response`](../interfaces/System200Response.md), `any`\>\>

Assigns a System to a Policy

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `any` |  |
| `policyId` | `any` |  |
| `xRHIDENTITY?` | `any` |  |
| `options?` | `AxiosRequestConfig`\<`any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<[`System200Response`](../interfaces/System200Response.md), `any`\>\>

**`Summary`**

Assign a System to a Policy

**`Throws`**

**`Memberof`**

PoliciesApi

#### Defined in

api.ts:3824

___

### assignSystems

▸ **assignSystems**(`policyId`, `xRHIDENTITY?`, `assignRulesRequest?`, `options?`): `Promise`\<`AxiosResponse`\<[`Systems200Response`](../interfaces/Systems200Response.md), `any`\>\>

This feature is exclusively used by the frontend

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `policyId` | `any` |  |
| `xRHIDENTITY?` | `any` |  |
| `assignRulesRequest?` | [`AssignRulesRequest`](../interfaces/AssignRulesRequest.md) |  |
| `options?` | `AxiosRequestConfig`\<`any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<[`Systems200Response`](../interfaces/Systems200Response.md), `any`\>\>

**`Summary`**

Bulk assign Systems to a Policy

**`Deprecated`**

**`Throws`**

**`Memberof`**

PoliciesApi

#### Defined in

api.ts:3839

___

### createPolicy

▸ **createPolicy**(`xRHIDENTITY?`, `policy?`, `options?`): `Promise`\<`AxiosResponse`\<[`CreatePolicy201Response`](../interfaces/CreatePolicy201Response.md), `any`\>\>

Create a Policy with the provided attributes

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `xRHIDENTITY?` | `any` |  |
| `policy?` | [`Policy`](../interfaces/Policy.md) |  |
| `options?` | `AxiosRequestConfig`\<`any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<[`CreatePolicy201Response`](../interfaces/CreatePolicy201Response.md), `any`\>\>

**`Summary`**

Create a Policy

**`Throws`**

**`Memberof`**

PoliciesApi

#### Defined in

api.ts:3852

___

### deletePolicy

▸ **deletePolicy**(`id`, `xRHIDENTITY?`, `options?`): `Promise`\<`AxiosResponse`\<[`CreatePolicy201Response`](../interfaces/CreatePolicy201Response.md), `any`\>\>

Deletes a Policy

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `any` |  |
| `xRHIDENTITY?` | `any` |  |
| `options?` | `AxiosRequestConfig`\<`any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<[`CreatePolicy201Response`](../interfaces/CreatePolicy201Response.md), `any`\>\>

**`Summary`**

Delete a Policy

**`Throws`**

**`Memberof`**

PoliciesApi

#### Defined in

api.ts:3865

___

### policies

▸ **policies**(`xRHIDENTITY?`, `limit?`, `offset?`, `sortBy?`, `filter?`, `options?`): `Promise`\<`AxiosResponse`\<[`Policies200Response`](../interfaces/Policies200Response.md), `any`\>\>

Lists Policies

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `xRHIDENTITY?` | `any` |  |
| `limit?` | `any` | Number of items to return per page |
| `offset?` | `any` | Offset of first item of paginated response |
| `sortBy?` | `any` | Attribute and direction to sort the items by. Represented by an array of fields with an optional direction (&#x60;&lt;key&gt;:asc&#x60; or &#x60;&lt;key&gt;:desc&#x60;).&lt;br&gt;&lt;br&gt;If no direction is selected, &#x60;&lt;key&gt;:asc&#x60; is used by default. |
| `filter?` | `any` | Query string to filter items by their attributes. Compliant with &lt;a href&#x3D;\&quot;https://github.com/wvanbergen/scoped_search/wiki/Query-language\&quot; target&#x3D;\&quot;_blank\&quot; title&#x3D;\&quot;github.com/wvanbergen/scoped_search\&quot;&gt;scoped_search query language&lt;/a&gt;. However, only &#x60;&#x3D;&#x60; or &#x60;!&#x3D;&#x60; (resp. &#x60;&lt;&gt;&#x60;) operators are supported.&lt;br&gt;&lt;br&gt;Policies are searchable using attributes &#x60;title&#x60; and &#x60;os_major_version&#x60;&lt;br&gt;&lt;br&gt;(e.g.: &#x60;(version&#x3D;0.1.47 AND os_major_verision&#x3D;8)&#x60;) |
| `options?` | `AxiosRequestConfig`\<`any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<[`Policies200Response`](../interfaces/Policies200Response.md), `any`\>\>

**`Summary`**

Request Policies

**`Throws`**

**`Memberof`**

PoliciesApi

#### Defined in

api.ts:3881

___

### policy

▸ **policy**(`id`, `xRHIDENTITY?`, `options?`): `Promise`\<`AxiosResponse`\<[`CreatePolicy201Response`](../interfaces/CreatePolicy201Response.md), `any`\>\>

Returns a Policy

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `any` |  |
| `xRHIDENTITY?` | `any` |  |
| `options?` | `AxiosRequestConfig`\<`any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<[`CreatePolicy201Response`](../interfaces/CreatePolicy201Response.md), `any`\>\>

**`Summary`**

Request a Policy

**`Throws`**

**`Memberof`**

PoliciesApi

#### Defined in

api.ts:3894

___

### policySystems

▸ **policySystems**(`policyId`, `xRHIDENTITY?`, `limit?`, `offset?`, `sortBy?`, `filter?`, `options?`): `Promise`\<`AxiosResponse`\<[`Systems200Response`](../interfaces/Systems200Response.md), `any`\>\>

Lists Systems assigned to a Policy

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `policyId` | `any` |  |
| `xRHIDENTITY?` | `any` |  |
| `limit?` | `any` | Number of items to return per page |
| `offset?` | `any` | Offset of first item of paginated response |
| `sortBy?` | `any` | Attribute and direction to sort the items by. Represented by an array of fields with an optional direction (&#x60;&lt;key&gt;:asc&#x60; or &#x60;&lt;key&gt;:desc&#x60;).&lt;br&gt;&lt;br&gt;If no direction is selected, &#x60;&lt;key&gt;:asc&#x60; is used by default. |
| `filter?` | `any` | Query string to filter items by their attributes. Compliant with &lt;a href&#x3D;\&quot;https://github.com/wvanbergen/scoped_search/wiki/Query-language\&quot; target&#x3D;\&quot;_blank\&quot; title&#x3D;\&quot;github.com/wvanbergen/scoped_search\&quot;&gt;scoped_search query language&lt;/a&gt;. However, only &#x60;&#x3D;&#x60; or &#x60;!&#x3D;&#x60; (resp. &#x60;&lt;&gt;&#x60;) operators are supported.&lt;br&gt;&lt;br&gt;Systems are searchable using attributes &#x60;display_name&#x60;, &#x60;os_major_version&#x60;, and &#x60;os_minor_version&#x60;&lt;br&gt;&lt;br&gt;(e.g.: &#x60;(version&#x3D;0.1.47 AND os_major_verision&#x3D;8)&#x60;) |
| `options?` | `AxiosRequestConfig`\<`any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<[`Systems200Response`](../interfaces/Systems200Response.md), `any`\>\>

**`Summary`**

Request Systems assigned to a Policy

**`Throws`**

**`Memberof`**

PoliciesApi

#### Defined in

api.ts:3911

___

### tailoring

▸ **tailoring**(`policyId`, `id`, `xRHIDENTITY?`, `options?`): `Promise`\<`AxiosResponse`\<[`Tailoring200Response`](../interfaces/Tailoring200Response.md), `any`\>\>

Returns a Tailoring

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `policyId` | `any` |  |
| `id` | `any` |  |
| `xRHIDENTITY?` | `any` |  |
| `options?` | `AxiosRequestConfig`\<`any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<[`Tailoring200Response`](../interfaces/Tailoring200Response.md), `any`\>\>

**`Summary`**

Request a Tailoring

**`Throws`**

**`Memberof`**

PoliciesApi

#### Defined in

api.ts:3925

___

### tailoringFile

▸ **tailoringFile**(`policyId`, `id`, `xRHIDENTITY?`, `options?`): `Promise`\<`AxiosResponse`\<[`TailoringFile`](../interfaces/TailoringFile.md), `any`\>\>

Returns a Tailoring File

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `policyId` | `any` |  |
| `id` | `any` |  |
| `xRHIDENTITY?` | `any` |  |
| `options?` | `AxiosRequestConfig`\<`any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<[`TailoringFile`](../interfaces/TailoringFile.md), `any`\>\>

**`Summary`**

Request a Tailoring file

**`Throws`**

**`Memberof`**

PoliciesApi

#### Defined in

api.ts:3939

___

### tailoringRules

▸ **tailoringRules**(`policyId`, `tailoringId`, `xRHIDENTITY?`, `limit?`, `offset?`, `sortBy?`, `filter?`, `options?`): `Promise`\<`AxiosResponse`\<[`Rules200Response`](../interfaces/Rules200Response.md), `any`\>\>

Lists Rules assigned to a Tailoring

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `policyId` | `any` |  |
| `tailoringId` | `any` |  |
| `xRHIDENTITY?` | `any` |  |
| `limit?` | `any` | Number of items to return per page |
| `offset?` | `any` | Offset of first item of paginated response |
| `sortBy?` | `any` | Attribute and direction to sort the items by. Represented by an array of fields with an optional direction (&#x60;&lt;key&gt;:asc&#x60; or &#x60;&lt;key&gt;:desc&#x60;).&lt;br&gt;&lt;br&gt;If no direction is selected, &#x60;&lt;key&gt;:asc&#x60; is used by default. |
| `filter?` | `any` | Query string to filter items by their attributes. Compliant with &lt;a href&#x3D;\&quot;https://github.com/wvanbergen/scoped_search/wiki/Query-language\&quot; target&#x3D;\&quot;_blank\&quot; title&#x3D;\&quot;github.com/wvanbergen/scoped_search\&quot;&gt;scoped_search query language&lt;/a&gt;. However, only &#x60;&#x3D;&#x60; or &#x60;!&#x3D;&#x60; (resp. &#x60;&lt;&gt;&#x60;) operators are supported.&lt;br&gt;&lt;br&gt;Rules are searchable using attributes &#x60;title&#x60; and &#x60;severity&#x60;&lt;br&gt;&lt;br&gt;(e.g.: &#x60;(version&#x3D;0.1.47 AND os_major_verision&#x3D;8)&#x60;) |
| `options?` | `AxiosRequestConfig`\<`any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<[`Rules200Response`](../interfaces/Rules200Response.md), `any`\>\>

**`Summary`**

Request Rules assigned to a Tailoring

**`Throws`**

**`Memberof`**

PoliciesApi

#### Defined in

api.ts:3957

___

### tailorings

▸ **tailorings**(`policyId`, `xRHIDENTITY?`, `limit?`, `offset?`, `sortBy?`, `filter?`, `options?`): `Promise`\<`AxiosResponse`\<[`Tailorings200Response`](../interfaces/Tailorings200Response.md), `any`\>\>

Lists Tailorings

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `policyId` | `any` |  |
| `xRHIDENTITY?` | `any` |  |
| `limit?` | `any` | Number of items to return per page |
| `offset?` | `any` | Offset of first item of paginated response |
| `sortBy?` | `any` | Attribute and direction to sort the items by. Represented by an array of fields with an optional direction (&#x60;&lt;key&gt;:asc&#x60; or &#x60;&lt;key&gt;:desc&#x60;).&lt;br&gt;&lt;br&gt;If no direction is selected, &#x60;&lt;key&gt;:asc&#x60; is used by default. |
| `filter?` | `any` | Query string to filter items by their attributes. Compliant with &lt;a href&#x3D;\&quot;https://github.com/wvanbergen/scoped_search/wiki/Query-language\&quot; target&#x3D;\&quot;_blank\&quot; title&#x3D;\&quot;github.com/wvanbergen/scoped_search\&quot;&gt;scoped_search query language&lt;/a&gt;. However, only &#x60;&#x3D;&#x60; or &#x60;!&#x3D;&#x60; (resp. &#x60;&lt;&gt;&#x60;) operators are supported.&lt;br&gt;&lt;br&gt;Tailorings are searchable using attributes &#x60;os_minor_version&#x60;&lt;br&gt;&lt;br&gt;(e.g.: &#x60;(version&#x3D;0.1.47 AND os_major_verision&#x3D;8)&#x60;) |
| `options?` | `AxiosRequestConfig`\<`any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<[`Tailorings200Response`](../interfaces/Tailorings200Response.md), `any`\>\>

**`Summary`**

Request Tailorings

**`Throws`**

**`Memberof`**

PoliciesApi

#### Defined in

api.ts:3974

___

### unassignRule

▸ **unassignRule**(`policyId`, `tailoringId`, `id`, `xRHIDENTITY?`, `options?`): `Promise`\<`AxiosResponse`\<`void`, `any`\>\>

Unassigns a Rule from a Tailoring

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `policyId` | `any` |  |
| `tailoringId` | `any` |  |
| `id` | `any` |  |
| `xRHIDENTITY?` | `any` |  |
| `options?` | `AxiosRequestConfig`\<`any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<`void`, `any`\>\>

**`Summary`**

Unassign a Rule from a Tailoring

**`Throws`**

**`Memberof`**

PoliciesApi

#### Defined in

api.ts:3989

___

### unassignSystem

▸ **unassignSystem**(`id`, `policyId`, `xRHIDENTITY?`, `options?`): `Promise`\<`AxiosResponse`\<[`System200Response`](../interfaces/System200Response.md), `any`\>\>

Unassigns a System from a Policy

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `any` |  |
| `policyId` | `any` |  |
| `xRHIDENTITY?` | `any` |  |
| `options?` | `AxiosRequestConfig`\<`any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<[`System200Response`](../interfaces/System200Response.md), `any`\>\>

**`Summary`**

Unassign a System from a Policy

**`Throws`**

**`Memberof`**

PoliciesApi

#### Defined in

api.ts:4003

___

### updatePolicy

▸ **updatePolicy**(`id`, `xRHIDENTITY?`, `policyUpdate?`, `options?`): `Promise`\<`AxiosResponse`\<[`CreatePolicy201Response`](../interfaces/CreatePolicy201Response.md), `any`\>\>

Updates a Policy with the provided attributes

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `any` |  |
| `xRHIDENTITY?` | `any` |  |
| `policyUpdate?` | [`PolicyUpdate`](../interfaces/PolicyUpdate.md) |  |
| `options?` | `AxiosRequestConfig`\<`any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<[`CreatePolicy201Response`](../interfaces/CreatePolicy201Response.md), `any`\>\>

**`Summary`**

Update a Policy

**`Throws`**

**`Memberof`**

PoliciesApi

#### Defined in

api.ts:4017
