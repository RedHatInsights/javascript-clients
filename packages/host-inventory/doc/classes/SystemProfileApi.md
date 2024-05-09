[@redhat-cloud-services/host-inventory-client](../README.md) / [Exports](../modules.md) / SystemProfileApi

# Class: SystemProfileApi

SystemProfileApi - object-oriented interface

**`Export`**

SystemProfileApi

## Hierarchy

- `BaseAPI`

  ↳ **`SystemProfileApi`**

## Table of contents

### Constructors

- [constructor](SystemProfileApi.md#constructor)

### Properties

- [axios](SystemProfileApi.md#axios)
- [basePath](SystemProfileApi.md#basepath)
- [configuration](SystemProfileApi.md#configuration)

### Methods

- [apiSystemProfileGetOperatingSystem](SystemProfileApi.md#apisystemprofilegetoperatingsystem)
- [apiSystemProfileGetSapSids](SystemProfileApi.md#apisystemprofilegetsapsids)
- [apiSystemProfileGetSapSystem](SystemProfileApi.md#apisystemprofilegetsapsystem)
- [apiSystemProfileValidateSchema](SystemProfileApi.md#apisystemprofilevalidateschema)

## Constructors

### constructor

• **new SystemProfileApi**(`configuration?`, `basePath?`, `axios?`): [`SystemProfileApi`](SystemProfileApi.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `configuration?` | [`Configuration`](Configuration.md) | `undefined` |
| `basePath` | `string` | `BASE_PATH` |
| `axios` | `AxiosInstance` | `globalAxios` |

#### Returns

[`SystemProfileApi`](SystemProfileApi.md)

#### Inherited from

BaseAPI.constructor

#### Defined in

[base.ts:51](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/host-inventory/base.ts#L51)

## Properties

### axios

• `Protected` **axios**: `AxiosInstance` = `globalAxios`

#### Inherited from

BaseAPI.axios

#### Defined in

[base.ts:51](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/host-inventory/base.ts#L51)

___

### basePath

• `Protected` **basePath**: `string` = `BASE_PATH`

#### Inherited from

BaseAPI.basePath

#### Defined in

[base.ts:51](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/host-inventory/base.ts#L51)

___

### configuration

• `Protected` **configuration**: `undefined` \| [`Configuration`](Configuration.md)

#### Inherited from

BaseAPI.configuration

#### Defined in

[base.ts:49](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/host-inventory/base.ts#L49)

## Methods

### apiSystemProfileGetOperatingSystem

▸ **apiSystemProfileGetOperatingSystem**(`tags?`, `perPage?`, `page?`, `staleness?`, `registeredWith?`, `filter?`, `options?`): `Promise`\<`AxiosResponse`\<[`SystemProfileOperatingSystemOut`](../interfaces/SystemProfileOperatingSystemOut.md), `any`\>\>

Required permissions: inventory:hosts:read

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `tags?` | `string`[] | filters out hosts not tagged by the given tags |
| `perPage?` | `number` | A number of items to return per page. |
| `page?` | `number` | A page number of the items to return. |
| `staleness?` | (``"fresh"`` \| ``"stale"`` \| ``"stale_warning"`` \| ``"unknown"``)[] | Culling states of the hosts. Default: fresh, stale and stale_warning |
| `registeredWith?` | (``"insights"`` \| ``"yupana"`` \| ``"satellite"`` \| ``"discovery"`` \| ``"puptoo"`` \| ``"rhsm-conduit"`` \| ``"cloud-connector"`` \| ``"!yupana"`` \| ``"!satellite"`` \| ``"!discovery"`` \| ``"!puptoo"`` \| ``"!rhsm-conduit"`` \| ``"!cloud-connector"``)[] | Filters out any host not registered by the specified reporters |
| `filter?` | `Object` | Filters hosts based on system_profile fields. For example: &lt;br /&gt;&lt;br /&gt; &amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;{\&quot;system_profile\&quot;: {\&quot;sap_system\&quot;: {\&quot;eq\&quot;: \&quot;true\&quot;}}} &lt;br /&gt;&lt;br /&gt; which equates to the URL param: &lt;br /&gt;&lt;br /&gt; &amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;\&quot;?filter[system_profile][sap_system][eq]&#x3D;true\&quot; &lt;br /&gt;&lt;br /&gt; Hosts with host_type \&quot;edge\&quot; are filtered out by default. &lt;br /&gt;&lt;br /&gt; To get \&quot;edge\&quot; hosts, use this explicit filter: &lt;br /&gt;&lt;br /&gt; &amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;{\&quot;system_profile\&quot;: {\&quot;host_type\&quot;: {\&quot;eq\&quot;: \&quot;edge\&quot;}}} &lt;br /&gt;&lt;br /&gt; which equates to the URL param: &lt;br /&gt;&lt;br /&gt; &amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;\&quot;?filter[system_profile][host_type][eq]&#x3D;edge\&quot; |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<[`SystemProfileOperatingSystemOut`](../interfaces/SystemProfileOperatingSystemOut.md), `any`\>\>

**`Summary`**

get all operating system versions and counts on the account

**`Throws`**

**`Memberof`**

SystemProfileApi

#### Defined in

[api.ts:6532](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/host-inventory/api.ts#L6532)

___

### apiSystemProfileGetSapSids

▸ **apiSystemProfileGetSapSids**(`search?`, `tags?`, `perPage?`, `page?`, `staleness?`, `registeredWith?`, `filter?`, `options?`): `Promise`\<`AxiosResponse`\<[`SystemProfileSapSystemOut`](../interfaces/SystemProfileSapSystemOut.md), `any`\>\>

Required permissions: inventory:hosts:read

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `search?` | `string` | Used for searching tags and sap_sids that match the given search string. For searching tags, a tag\&#39;s namespace, key, and/or value is used for matching. |
| `tags?` | `string`[] | filters out hosts not tagged by the given tags |
| `perPage?` | `number` | A number of items to return per page. |
| `page?` | `number` | A page number of the items to return. |
| `staleness?` | (``"fresh"`` \| ``"stale"`` \| ``"stale_warning"`` \| ``"unknown"``)[] | Culling states of the hosts. Default: fresh, stale and stale_warning |
| `registeredWith?` | (``"insights"`` \| ``"yupana"`` \| ``"satellite"`` \| ``"discovery"`` \| ``"puptoo"`` \| ``"rhsm-conduit"`` \| ``"cloud-connector"`` \| ``"!yupana"`` \| ``"!satellite"`` \| ``"!discovery"`` \| ``"!puptoo"`` \| ``"!rhsm-conduit"`` \| ``"!cloud-connector"``)[] | Filters out any host not registered by the specified reporters |
| `filter?` | `Object` | Filters hosts based on system_profile fields. For example: &lt;br /&gt;&lt;br /&gt; &amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;{\&quot;system_profile\&quot;: {\&quot;sap_system\&quot;: {\&quot;eq\&quot;: \&quot;true\&quot;}}} &lt;br /&gt;&lt;br /&gt; which equates to the URL param: &lt;br /&gt;&lt;br /&gt; &amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;\&quot;?filter[system_profile][sap_system][eq]&#x3D;true\&quot; &lt;br /&gt;&lt;br /&gt; Hosts with host_type \&quot;edge\&quot; are filtered out by default. &lt;br /&gt;&lt;br /&gt; To get \&quot;edge\&quot; hosts, use this explicit filter: &lt;br /&gt;&lt;br /&gt; &amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;{\&quot;system_profile\&quot;: {\&quot;host_type\&quot;: {\&quot;eq\&quot;: \&quot;edge\&quot;}}} &lt;br /&gt;&lt;br /&gt; which equates to the URL param: &lt;br /&gt;&lt;br /&gt; &amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;\&quot;?filter[system_profile][host_type][eq]&#x3D;edge\&quot; |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<[`SystemProfileSapSystemOut`](../interfaces/SystemProfileSapSystemOut.md), `any`\>\>

**`Summary`**

get all sap sids values and counts on the account

**`Throws`**

**`Memberof`**

SystemProfileApi

#### Defined in

[api.ts:6550](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/host-inventory/api.ts#L6550)

___

### apiSystemProfileGetSapSystem

▸ **apiSystemProfileGetSapSystem**(`tags?`, `perPage?`, `page?`, `staleness?`, `registeredWith?`, `filter?`, `options?`): `Promise`\<`AxiosResponse`\<[`SystemProfileSapSystemOut`](../interfaces/SystemProfileSapSystemOut.md), `any`\>\>

Required permissions: inventory:hosts:read

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `tags?` | `string`[] | filters out hosts not tagged by the given tags |
| `perPage?` | `number` | A number of items to return per page. |
| `page?` | `number` | A page number of the items to return. |
| `staleness?` | (``"fresh"`` \| ``"stale"`` \| ``"stale_warning"`` \| ``"unknown"``)[] | Culling states of the hosts. Default: fresh, stale and stale_warning |
| `registeredWith?` | (``"insights"`` \| ``"yupana"`` \| ``"satellite"`` \| ``"discovery"`` \| ``"puptoo"`` \| ``"rhsm-conduit"`` \| ``"cloud-connector"`` \| ``"!yupana"`` \| ``"!satellite"`` \| ``"!discovery"`` \| ``"!puptoo"`` \| ``"!rhsm-conduit"`` \| ``"!cloud-connector"``)[] | Filters out any host not registered by the specified reporters |
| `filter?` | `Object` | Filters hosts based on system_profile fields. For example: &lt;br /&gt;&lt;br /&gt; &amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;{\&quot;system_profile\&quot;: {\&quot;sap_system\&quot;: {\&quot;eq\&quot;: \&quot;true\&quot;}}} &lt;br /&gt;&lt;br /&gt; which equates to the URL param: &lt;br /&gt;&lt;br /&gt; &amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;\&quot;?filter[system_profile][sap_system][eq]&#x3D;true\&quot; &lt;br /&gt;&lt;br /&gt; Hosts with host_type \&quot;edge\&quot; are filtered out by default. &lt;br /&gt;&lt;br /&gt; To get \&quot;edge\&quot; hosts, use this explicit filter: &lt;br /&gt;&lt;br /&gt; &amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;{\&quot;system_profile\&quot;: {\&quot;host_type\&quot;: {\&quot;eq\&quot;: \&quot;edge\&quot;}}} &lt;br /&gt;&lt;br /&gt; which equates to the URL param: &lt;br /&gt;&lt;br /&gt; &amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;\&quot;?filter[system_profile][host_type][eq]&#x3D;edge\&quot; |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<[`SystemProfileSapSystemOut`](../interfaces/SystemProfileSapSystemOut.md), `any`\>\>

**`Summary`**

get all sap system values and counts on the account

**`Throws`**

**`Memberof`**

SystemProfileApi

#### Defined in

[api.ts:6567](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/host-inventory/api.ts#L6567)

___

### apiSystemProfileValidateSchema

▸ **apiSystemProfileValidateSchema**(`repoBranch`, `repoFork?`, `days?`, `maxMessages?`, `options?`): `Promise`\<`AxiosResponse`\<`void`, `any`\>\>

Validates System Profile data from recent Kafka messages against a given spec, and compares it with the current one. Only HBI Admins can access this endpoint.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `repoBranch` | `string` | The branch of the inventory-schemas repo to use |
| `repoFork?` | `string` | The fork of the inventory-schemas repo to use |
| `days?` | `number` | How many days worth of data to validate |
| `maxMessages?` | `number` | Stops polling when this number of messages has been collected |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<`void`, `any`\>\>

**`Summary`**

validate system profile schema

**`Throws`**

**`Memberof`**

SystemProfileApi

#### Defined in

[api.ts:6582](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/host-inventory/api.ts#L6582)
