[@redhat-cloud-services/compliance-client](../README.md) / [Exports](../modules.md) / ContentApi

# Class: ContentApi

ContentApi - object-oriented interface

**`Export`**

ContentApi

## Hierarchy

- `BaseAPI`

  ↳ **`ContentApi`**

## Table of contents

### Constructors

- [constructor](ContentApi.md#constructor)

### Properties

- [axios](ContentApi.md#axios)
- [basePath](ContentApi.md#basepath)
- [configuration](ContentApi.md#configuration)

### Methods

- [profile](ContentApi.md#profile)
- [profileRule](ContentApi.md#profilerule)
- [profileRules](ContentApi.md#profilerules)
- [profiles](ContentApi.md#profiles)
- [rule](ContentApi.md#rule)
- [ruleGroup](ContentApi.md#rulegroup)
- [ruleGroups](ContentApi.md#rulegroups)
- [rules](ContentApi.md#rules)
- [securityGuide](ContentApi.md#securityguide)
- [securityGuideRuleTree](ContentApi.md#securityguideruletree)
- [securityGuides](ContentApi.md#securityguides)
- [supportedProfiles](ContentApi.md#supportedprofiles)
- [valueDefinition](ContentApi.md#valuedefinition)
- [valueDefinitions](ContentApi.md#valuedefinitions)

## Constructors

### constructor

• **new ContentApi**(`configuration?`, `basePath?`, `axios?`): [`ContentApi`](ContentApi.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `configuration?` | [`Configuration`](Configuration.md) | `undefined` |
| `basePath` | `string` | `BASE_PATH` |
| `axios` | `AxiosInstance` | `globalAxios` |

#### Returns

[`ContentApi`](ContentApi.md)

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

### profile

▸ **profile**(`securityGuideId`, `id`, `xRHIDENTITY?`, `options?`): `Promise`\<`AxiosResponse`\<[`Profile200Response`](../interfaces/Profile200Response.md), `any`\>\>

Returns a Profile

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `securityGuideId` | `any` |  |
| `id` | `any` |  |
| `xRHIDENTITY?` | `any` |  |
| `options?` | `AxiosRequestConfig`\<`any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<[`Profile200Response`](../interfaces/Profile200Response.md), `any`\>\>

**`Summary`**

Request a Profile

**`Throws`**

**`Memberof`**

ContentApi

#### Defined in

api.ts:2326

___

### profileRule

▸ **profileRule**(`securityGuideId`, `profileId`, `id`, `xRHIDENTITY?`, `options?`): `Promise`\<`AxiosResponse`\<[`Rule200Response`](../interfaces/Rule200Response.md), `any`\>\>

Returns a Rule assigned to a Profile

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `securityGuideId` | `any` |  |
| `profileId` | `any` |  |
| `id` | `any` |  |
| `xRHIDENTITY?` | `any` |  |
| `options?` | `AxiosRequestConfig`\<`any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<[`Rule200Response`](../interfaces/Rule200Response.md), `any`\>\>

**`Summary`**

Request a Rule assigned to a Profile

**`Throws`**

**`Memberof`**

ContentApi

#### Defined in

api.ts:2341

___

### profileRules

▸ **profileRules**(`securityGuideId`, `profileId`, `xRHIDENTITY?`, `limit?`, `offset?`, `sortBy?`, `filter?`, `options?`): `Promise`\<`AxiosResponse`\<[`Rules200Response`](../interfaces/Rules200Response.md), `any`\>\>

Lists Rules assigned to a Profile

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `securityGuideId` | `any` |  |
| `profileId` | `any` |  |
| `xRHIDENTITY?` | `any` |  |
| `limit?` | `any` | Number of items to return per page |
| `offset?` | `any` | Offset of first item of paginated response |
| `sortBy?` | `any` | Attribute and direction to sort the items by. Represented by an array of fields with an optional direction (&#x60;&lt;key&gt;:asc&#x60; or &#x60;&lt;key&gt;:desc&#x60;).&lt;br&gt;&lt;br&gt;If no direction is selected, &#x60;&lt;key&gt;:asc&#x60; is used by default. |
| `filter?` | `any` | Query string to filter items by their attributes. Compliant with &lt;a href&#x3D;\&quot;https://github.com/wvanbergen/scoped_search/wiki/Query-language\&quot; target&#x3D;\&quot;_blank\&quot; title&#x3D;\&quot;github.com/wvanbergen/scoped_search\&quot;&gt;scoped_search query language&lt;/a&gt;. However, only &#x60;&#x3D;&#x60; or &#x60;!&#x3D;&#x60; (resp. &#x60;&lt;&gt;&#x60;) operators are supported.&lt;br&gt;&lt;br&gt;Rules are searchable using attributes &#x60;title&#x60; and &#x60;severity&#x60;&lt;br&gt;&lt;br&gt;(e.g.: &#x60;(version&#x3D;0.1.47 AND os_major_verision&#x3D;8)&#x60;) |
| `options?` | `AxiosRequestConfig`\<`any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<[`Rules200Response`](../interfaces/Rules200Response.md), `any`\>\>

**`Summary`**

Request Rules assigned to a Profile

**`Throws`**

**`Memberof`**

ContentApi

#### Defined in

api.ts:2359

___

### profiles

▸ **profiles**(`securityGuideId`, `xRHIDENTITY?`, `limit?`, `offset?`, `sortBy?`, `filter?`, `options?`): `Promise`\<`AxiosResponse`\<[`Profiles200Response`](../interfaces/Profiles200Response.md), `any`\>\>

Lists Profiles

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `securityGuideId` | `any` |  |
| `xRHIDENTITY?` | `any` |  |
| `limit?` | `any` | Number of items to return per page |
| `offset?` | `any` | Offset of first item of paginated response |
| `sortBy?` | `any` | Attribute and direction to sort the items by. Represented by an array of fields with an optional direction (&#x60;&lt;key&gt;:asc&#x60; or &#x60;&lt;key&gt;:desc&#x60;).&lt;br&gt;&lt;br&gt;If no direction is selected, &#x60;&lt;key&gt;:asc&#x60; is used by default. |
| `filter?` | `any` | Query string to filter items by their attributes. Compliant with &lt;a href&#x3D;\&quot;https://github.com/wvanbergen/scoped_search/wiki/Query-language\&quot; target&#x3D;\&quot;_blank\&quot; title&#x3D;\&quot;github.com/wvanbergen/scoped_search\&quot;&gt;scoped_search query language&lt;/a&gt;. However, only &#x60;&#x3D;&#x60; or &#x60;!&#x3D;&#x60; (resp. &#x60;&lt;&gt;&#x60;) operators are supported.&lt;br&gt;&lt;br&gt;Profiles are searchable using attributes &#x60;title&#x60; and &#x60;ref_id&#x60;&lt;br&gt;&lt;br&gt;(e.g.: &#x60;(version&#x3D;0.1.47 AND os_major_verision&#x3D;8)&#x60;) |
| `options?` | `AxiosRequestConfig`\<`any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<[`Profiles200Response`](../interfaces/Profiles200Response.md), `any`\>\>

**`Summary`**

Request Profiles

**`Throws`**

**`Memberof`**

ContentApi

#### Defined in

api.ts:2376

___

### rule

▸ **rule**(`securityGuideId`, `id`, `xRHIDENTITY?`, `options?`): `Promise`\<`AxiosResponse`\<[`Rule200Response`](../interfaces/Rule200Response.md), `any`\>\>

Returns a Rule

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `securityGuideId` | `any` |  |
| `id` | `any` |  |
| `xRHIDENTITY?` | `any` |  |
| `options?` | `AxiosRequestConfig`\<`any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<[`Rule200Response`](../interfaces/Rule200Response.md), `any`\>\>

**`Summary`**

Request a Rule

**`Throws`**

**`Memberof`**

ContentApi

#### Defined in

api.ts:2390

___

### ruleGroup

▸ **ruleGroup**(`securityGuideId`, `id`, `xRHIDENTITY?`, `options?`): `Promise`\<`AxiosResponse`\<[`RuleGroup200Response`](../interfaces/RuleGroup200Response.md), `any`\>\>

Returns a Rule Group

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `securityGuideId` | `any` |  |
| `id` | `any` |  |
| `xRHIDENTITY?` | `any` |  |
| `options?` | `AxiosRequestConfig`\<`any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<[`RuleGroup200Response`](../interfaces/RuleGroup200Response.md), `any`\>\>

**`Summary`**

Request a Rule Group

**`Throws`**

**`Memberof`**

ContentApi

#### Defined in

api.ts:2404

___

### ruleGroups

▸ **ruleGroups**(`securityGuideId`, `xRHIDENTITY?`, `limit?`, `offset?`, `sortBy?`, `filter?`, `options?`): `Promise`\<`AxiosResponse`\<[`RuleGroups200Response`](../interfaces/RuleGroups200Response.md), `any`\>\>

Lists Rule Groups

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `securityGuideId` | `any` |  |
| `xRHIDENTITY?` | `any` |  |
| `limit?` | `any` | Number of items to return per page |
| `offset?` | `any` | Offset of first item of paginated response |
| `sortBy?` | `any` | Attribute and direction to sort the items by. Represented by an array of fields with an optional direction (&#x60;&lt;key&gt;:asc&#x60; or &#x60;&lt;key&gt;:desc&#x60;).&lt;br&gt;&lt;br&gt;If no direction is selected, &#x60;&lt;key&gt;:asc&#x60; is used by default. |
| `filter?` | `any` | Query string to filter items by their attributes. Compliant with &lt;a href&#x3D;\&quot;https://github.com/wvanbergen/scoped_search/wiki/Query-language\&quot; target&#x3D;\&quot;_blank\&quot; title&#x3D;\&quot;github.com/wvanbergen/scoped_search\&quot;&gt;scoped_search query language&lt;/a&gt;. However, only &#x60;&#x3D;&#x60; or &#x60;!&#x3D;&#x60; (resp. &#x60;&lt;&gt;&#x60;) operators are supported.&lt;br&gt;&lt;br&gt;Rule Groups are searchable using attributes &lt;br&gt;&lt;br&gt;(e.g.: &#x60;(version&#x3D;0.1.47 AND os_major_verision&#x3D;8)&#x60;) |
| `options?` | `AxiosRequestConfig`\<`any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<[`RuleGroups200Response`](../interfaces/RuleGroups200Response.md), `any`\>\>

**`Summary`**

Request Rule Groups

**`Throws`**

**`Memberof`**

ContentApi

#### Defined in

api.ts:2421

___

### rules

▸ **rules**(`securityGuideId`, `xRHIDENTITY?`, `limit?`, `offset?`, `sortBy?`, `filter?`, `options?`): `Promise`\<`AxiosResponse`\<[`Rules200Response`](../interfaces/Rules200Response.md), `any`\>\>

Lists Rules assigned

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `securityGuideId` | `any` |  |
| `xRHIDENTITY?` | `any` |  |
| `limit?` | `any` | Number of items to return per page |
| `offset?` | `any` | Offset of first item of paginated response |
| `sortBy?` | `any` | Attribute and direction to sort the items by. Represented by an array of fields with an optional direction (&#x60;&lt;key&gt;:asc&#x60; or &#x60;&lt;key&gt;:desc&#x60;).&lt;br&gt;&lt;br&gt;If no direction is selected, &#x60;&lt;key&gt;:asc&#x60; is used by default. |
| `filter?` | `any` | Query string to filter items by their attributes. Compliant with &lt;a href&#x3D;\&quot;https://github.com/wvanbergen/scoped_search/wiki/Query-language\&quot; target&#x3D;\&quot;_blank\&quot; title&#x3D;\&quot;github.com/wvanbergen/scoped_search\&quot;&gt;scoped_search query language&lt;/a&gt;. However, only &#x60;&#x3D;&#x60; or &#x60;!&#x3D;&#x60; (resp. &#x60;&lt;&gt;&#x60;) operators are supported.&lt;br&gt;&lt;br&gt;Rules are searchable using attributes &#x60;title&#x60; and &#x60;severity&#x60;&lt;br&gt;&lt;br&gt;(e.g.: &#x60;(version&#x3D;0.1.47 AND os_major_verision&#x3D;8)&#x60;) |
| `options?` | `AxiosRequestConfig`\<`any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<[`Rules200Response`](../interfaces/Rules200Response.md), `any`\>\>

**`Summary`**

Request Rules

**`Throws`**

**`Memberof`**

ContentApi

#### Defined in

api.ts:2438

___

### securityGuide

▸ **securityGuide**(`id`, `xRHIDENTITY?`, `options?`): `Promise`\<`AxiosResponse`\<[`SecurityGuide200Response`](../interfaces/SecurityGuide200Response.md), `any`\>\>

Returns a Security Guide

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `any` |  |
| `xRHIDENTITY?` | `any` |  |
| `options?` | `AxiosRequestConfig`\<`any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<[`SecurityGuide200Response`](../interfaces/SecurityGuide200Response.md), `any`\>\>

**`Summary`**

Request a Security Guide

**`Throws`**

**`Memberof`**

ContentApi

#### Defined in

api.ts:2451

___

### securityGuideRuleTree

▸ **securityGuideRuleTree**(`id`, `xRHIDENTITY?`, `options?`): `Promise`\<`AxiosResponse`\<`any`, `any`\>\>

Returns the Rule Tree of a Security Guide

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `any` |  |
| `xRHIDENTITY?` | `any` |  |
| `options?` | `AxiosRequestConfig`\<`any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<`any`, `any`\>\>

**`Summary`**

Request the Rule Tree of a Security Guide

**`Throws`**

**`Memberof`**

ContentApi

#### Defined in

api.ts:2464

___

### securityGuides

▸ **securityGuides**(`xRHIDENTITY?`, `limit?`, `offset?`, `sortBy?`, `filter?`, `options?`): `Promise`\<`AxiosResponse`\<[`SecurityGuides200Response`](../interfaces/SecurityGuides200Response.md), `any`\>\>

Lists Security Guides

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `xRHIDENTITY?` | `any` |  |
| `limit?` | `any` | Number of items to return per page |
| `offset?` | `any` | Offset of first item of paginated response |
| `sortBy?` | `any` | Attribute and direction to sort the items by. Represented by an array of fields with an optional direction (&#x60;&lt;key&gt;:asc&#x60; or &#x60;&lt;key&gt;:desc&#x60;).&lt;br&gt;&lt;br&gt;If no direction is selected, &#x60;&lt;key&gt;:asc&#x60; is used by default. |
| `filter?` | `any` | Query string to filter items by their attributes. Compliant with &lt;a href&#x3D;\&quot;https://github.com/wvanbergen/scoped_search/wiki/Query-language\&quot; target&#x3D;\&quot;_blank\&quot; title&#x3D;\&quot;github.com/wvanbergen/scoped_search\&quot;&gt;scoped_search query language&lt;/a&gt;. However, only &#x60;&#x3D;&#x60; or &#x60;!&#x3D;&#x60; (resp. &#x60;&lt;&gt;&#x60;) operators are supported.&lt;br&gt;&lt;br&gt;Security Guides are searchable using attributes &#x60;title&#x60;, &#x60;version&#x60;, &#x60;ref_id&#x60;, and &#x60;os_major_version&#x60;&lt;br&gt;&lt;br&gt;(e.g.: &#x60;(version&#x3D;0.1.47 AND os_major_verision&#x3D;8)&#x60;) |
| `options?` | `AxiosRequestConfig`\<`any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<[`SecurityGuides200Response`](../interfaces/SecurityGuides200Response.md), `any`\>\>

**`Summary`**

Request Security Guides

**`Throws`**

**`Memberof`**

ContentApi

#### Defined in

api.ts:2480

___

### supportedProfiles

▸ **supportedProfiles**(`xRHIDENTITY?`, `limit?`, `offset?`, `sortBy?`, `filter?`, `options?`): `Promise`\<`AxiosResponse`\<[`SupportedProfiles200Response`](../interfaces/SupportedProfiles200Response.md), `any`\>\>

Lists Supported Profiles

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `xRHIDENTITY?` | `any` |  |
| `limit?` | `any` | Number of items to return per page |
| `offset?` | `any` | Offset of first item of paginated response |
| `sortBy?` | `any` | Attribute and direction to sort the items by. Represented by an array of fields with an optional direction (&#x60;&lt;key&gt;:asc&#x60; or &#x60;&lt;key&gt;:desc&#x60;).&lt;br&gt;&lt;br&gt;If no direction is selected, &#x60;&lt;key&gt;:asc&#x60; is used by default. |
| `filter?` | `any` | Query string to filter items by their attributes. Compliant with &lt;a href&#x3D;\&quot;https://github.com/wvanbergen/scoped_search/wiki/Query-language\&quot; target&#x3D;\&quot;_blank\&quot; title&#x3D;\&quot;github.com/wvanbergen/scoped_search\&quot;&gt;scoped_search query language&lt;/a&gt;. However, only &#x60;&#x3D;&#x60; or &#x60;!&#x3D;&#x60; (resp. &#x60;&lt;&gt;&#x60;) operators are supported.&lt;br&gt;&lt;br&gt;Supported Profiles are searchable using attributes &#x60;os_major_version&#x60;&lt;br&gt;&lt;br&gt;(e.g.: &#x60;(version&#x3D;0.1.47 AND os_major_verision&#x3D;8)&#x60;) |
| `options?` | `AxiosRequestConfig`\<`any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<[`SupportedProfiles200Response`](../interfaces/SupportedProfiles200Response.md), `any`\>\>

**`Summary`**

Request Supported Profiles

**`Throws`**

**`Memberof`**

ContentApi

#### Defined in

api.ts:2496

___

### valueDefinition

▸ **valueDefinition**(`securityGuideId`, `id`, `xRHIDENTITY?`, `options?`): `Promise`\<`AxiosResponse`\<[`ValueDefinition200Response`](../interfaces/ValueDefinition200Response.md), `any`\>\>

Returns a Value Definition

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `securityGuideId` | `any` |  |
| `id` | `any` |  |
| `xRHIDENTITY?` | `any` |  |
| `options?` | `AxiosRequestConfig`\<`any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<[`ValueDefinition200Response`](../interfaces/ValueDefinition200Response.md), `any`\>\>

**`Summary`**

Request a Value Definition

**`Throws`**

**`Memberof`**

ContentApi

#### Defined in

api.ts:2510

___

### valueDefinitions

▸ **valueDefinitions**(`securityGuideId`, `xRHIDENTITY?`, `limit?`, `offset?`, `sortBy?`, `filter?`, `options?`): `Promise`\<`AxiosResponse`\<[`ValueDefinitions200Response`](../interfaces/ValueDefinitions200Response.md), `any`\>\>

Lists Value Definitions

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `securityGuideId` | `any` |  |
| `xRHIDENTITY?` | `any` |  |
| `limit?` | `any` | Number of items to return per page |
| `offset?` | `any` | Offset of first item of paginated response |
| `sortBy?` | `any` | Attribute and direction to sort the items by. Represented by an array of fields with an optional direction (&#x60;&lt;key&gt;:asc&#x60; or &#x60;&lt;key&gt;:desc&#x60;).&lt;br&gt;&lt;br&gt;If no direction is selected, &#x60;&lt;key&gt;:asc&#x60; is used by default. |
| `filter?` | `any` | Query string to filter items by their attributes. Compliant with &lt;a href&#x3D;\&quot;https://github.com/wvanbergen/scoped_search/wiki/Query-language\&quot; target&#x3D;\&quot;_blank\&quot; title&#x3D;\&quot;github.com/wvanbergen/scoped_search\&quot;&gt;scoped_search query language&lt;/a&gt;. However, only &#x60;&#x3D;&#x60; or &#x60;!&#x3D;&#x60; (resp. &#x60;&lt;&gt;&#x60;) operators are supported.&lt;br&gt;&lt;br&gt;Value Definitions are searchable using attributes &#x60;title&#x60;&lt;br&gt;&lt;br&gt;(e.g.: &#x60;(version&#x3D;0.1.47 AND os_major_verision&#x3D;8)&#x60;) |
| `options?` | `AxiosRequestConfig`\<`any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<[`ValueDefinitions200Response`](../interfaces/ValueDefinitions200Response.md), `any`\>\>

**`Summary`**

Request Value Definitions

**`Throws`**

**`Memberof`**

ContentApi

#### Defined in

api.ts:2527
