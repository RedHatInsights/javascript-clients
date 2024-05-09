[@redhat-cloud-services/host-inventory-client](../README.md) / [Exports](../modules.md) / HostsApi

# Class: HostsApi

HostsApi - object-oriented interface

**`Export`**

HostsApi

## Hierarchy

- `BaseAPI`

  ↳ **`HostsApi`**

## Table of contents

### Constructors

- [constructor](HostsApi.md#constructor)

### Properties

- [axios](HostsApi.md#axios)
- [basePath](HostsApi.md#basepath)
- [configuration](HostsApi.md#configuration)

### Methods

- [apiHostDeleteAllHosts](HostsApi.md#apihostdeleteallhosts)
- [apiHostDeleteHostById](HostsApi.md#apihostdeletehostbyid)
- [apiHostDeleteHostsByFilter](HostsApi.md#apihostdeletehostsbyfilter)
- [apiHostGetHostById](HostsApi.md#apihostgethostbyid)
- [apiHostGetHostList](HostsApi.md#apihostgethostlist)
- [apiHostGetHostSystemProfileById](HostsApi.md#apihostgethostsystemprofilebyid)
- [apiHostGetHostTagCount](HostsApi.md#apihostgethosttagcount)
- [apiHostGetHostTags](HostsApi.md#apihostgethosttags)
- [apiHostHostCheckin](HostsApi.md#apihosthostcheckin)
- [apiHostMergeFacts](HostsApi.md#apihostmergefacts)
- [apiHostPatchHostById](HostsApi.md#apihostpatchhostbyid)
- [apiHostReplaceFacts](HostsApi.md#apihostreplacefacts)

## Constructors

### constructor

• **new HostsApi**(`configuration?`, `basePath?`, `axios?`): [`HostsApi`](HostsApi.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `configuration?` | [`Configuration`](Configuration.md) | `undefined` |
| `basePath` | `string` | `BASE_PATH` |
| `axios` | `AxiosInstance` | `globalAxios` |

#### Returns

[`HostsApi`](HostsApi.md)

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

### apiHostDeleteAllHosts

▸ **apiHostDeleteAllHosts**(`confirmDeleteAll?`, `options?`): `Promise`\<`AxiosResponse`\<`void`, `any`\>\>

Delete all hosts on the account.  The request must include \"confirm_delete_all=true\". <br /><br /> Required permissions: inventory:hosts:write

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `confirmDeleteAll?` | `boolean` | Confirmation to delete all hosts on the account |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<`void`, `any`\>\>

**`Summary`**

Delete all hosts on the account

**`Throws`**

**`Memberof`**

HostsApi

#### Defined in

[api.ts:5662](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/host-inventory/api.ts#L5662)

___

### apiHostDeleteHostById

▸ **apiHostDeleteHostById**(`hostIdList`, `branchId?`, `options?`): `Promise`\<`AxiosResponse`\<`void`, `any`\>\>

Delete hosts by IDs <br /><br /> Required permissions: inventory:hosts:write

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `hostIdList` | `string`[] | A comma-separated list of host IDs. |
| `branchId?` | `string` | Filter by branch_id |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<`void`, `any`\>\>

**`Summary`**

Delete hosts by IDs

**`Throws`**

**`Memberof`**

HostsApi

#### Defined in

[api.ts:5675](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/host-inventory/api.ts#L5675)

___

### apiHostDeleteHostsByFilter

▸ **apiHostDeleteHostsByFilter**(`displayName?`, `fqdn?`, `hostnameOrId?`, `insightsId?`, `providerId?`, `providerType?`, `updatedStart?`, `updatedEnd?`, `groupName?`, `registeredWith?`, `staleness?`, `tags?`, `filter?`, `options?`): `Promise`\<`AxiosResponse`\<`void`, `any`\>\>

Delete the entire list of hosts filtered by the given parameters. <br /><br /> Required permissions: inventory:hosts:write

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `displayName?` | `string` | Filter by display_name (case-insensitive) |
| `fqdn?` | `string` | Filter by FQDN (case-insensitive) |
| `hostnameOrId?` | `string` | Filter by display_name, fqdn, id (case-insensitive) |
| `insightsId?` | `string` | Filter by insights_id |
| `providerId?` | `string` | Filter by provider_id |
| `providerType?` | ``"alibaba"`` \| ``"aws"`` \| ``"azure"`` \| ``"gcp"`` \| ``"ibm"`` | Filter by provider_type |
| `updatedStart?` | `string` | Only show hosts last modified after the given date |
| `updatedEnd?` | `string` | Only show hosts last modified before the given date |
| `groupName?` | `string`[] | Filter by group name |
| `registeredWith?` | (``"insights"`` \| ``"yupana"`` \| ``"satellite"`` \| ``"discovery"`` \| ``"puptoo"`` \| ``"rhsm-conduit"`` \| ``"cloud-connector"`` \| ``"!yupana"`` \| ``"!satellite"`` \| ``"!discovery"`` \| ``"!puptoo"`` \| ``"!rhsm-conduit"`` \| ``"!cloud-connector"``)[] | Filters out any host not registered by the specified reporters |
| `staleness?` | (``"fresh"`` \| ``"stale"`` \| ``"stale_warning"`` \| ``"unknown"``)[] | Culling states of the hosts. |
| `tags?` | `string`[] | filters out hosts not tagged by the given tags |
| `filter?` | `Object` | Filters hosts based on system_profile fields. For example: &lt;br /&gt;&lt;br /&gt; &amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;{\&quot;system_profile\&quot;: {\&quot;sap_system\&quot;: {\&quot;eq\&quot;: \&quot;true\&quot;}}} &lt;br /&gt;&lt;br /&gt; which equates to the URL param: &lt;br /&gt;&lt;br /&gt; &amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;\&quot;?filter[system_profile][sap_system][eq]&#x3D;true\&quot; &lt;br /&gt;&lt;br /&gt; Hosts with host_type \&quot;edge\&quot; are filtered out by default. &lt;br /&gt;&lt;br /&gt; To get \&quot;edge\&quot; hosts, use this explicit filter: &lt;br /&gt;&lt;br /&gt; &amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;{\&quot;system_profile\&quot;: {\&quot;host_type\&quot;: {\&quot;eq\&quot;: \&quot;edge\&quot;}}} &lt;br /&gt;&lt;br /&gt; which equates to the URL param: &lt;br /&gt;&lt;br /&gt; &amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;\&quot;?filter[system_profile][host_type][eq]&#x3D;edge\&quot; |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<`void`, `any`\>\>

**`Summary`**

Delete the entire list of hosts filtered by the given parameters

**`Throws`**

**`Memberof`**

HostsApi

#### Defined in

[api.ts:5699](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/host-inventory/api.ts#L5699)

___

### apiHostGetHostById

▸ **apiHostGetHostById**(`hostIdList`, `branchId?`, `perPage?`, `page?`, `orderBy?`, `orderHow?`, `fields?`, `options?`): `Promise`\<`AxiosResponse`\<[`HostQueryOutput`](../interfaces/HostQueryOutput.md), `any`\>\>

Find one or more hosts by their ID. <br /><br /> Required permissions: inventory:hosts:read

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `hostIdList` | `string`[] | A comma-separated list of host IDs. |
| `branchId?` | `string` | Filter by branch_id |
| `perPage?` | `number` | A number of items to return per page. |
| `page?` | `number` | A page number of the items to return. |
| `orderBy?` | ``"updated"`` \| ``"display_name"`` \| ``"group_name"`` \| ``"operating_system"`` | Ordering field name |
| `orderHow?` | ``"ASC"`` \| ``"DESC"`` | Direction of the ordering; defaults to ASC for display_name, and to DESC for updated and operating_system |
| `fields?` | `Object` | Fetches only mentioned system_profile fields. For example, &lt;br /&gt;&lt;br /&gt; &amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;{\&quot;system_profile\&quot;: [\&quot;arch\&quot;, \&quot;host_type\&quot;]} &lt;br /&gt;&lt;br /&gt; which equates to the URL param: &lt;br /&gt;&lt;br /&gt; &amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;\&quot;?fields[system_profile]&#x3D;arch,host_type\&quot; |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<[`HostQueryOutput`](../interfaces/HostQueryOutput.md), `any`\>\>

**`Summary`**

Find hosts by their IDs

**`Throws`**

**`Memberof`**

HostsApi

#### Defined in

[api.ts:5717](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/host-inventory/api.ts#L5717)

___

### apiHostGetHostList

▸ **apiHostGetHostList**(`displayName?`, `fqdn?`, `hostnameOrId?`, `insightsId?`, `providerId?`, `providerType?`, `updatedStart?`, `updatedEnd?`, `groupName?`, `branchId?`, `perPage?`, `page?`, `orderBy?`, `orderHow?`, `staleness?`, `tags?`, `registeredWith?`, `filter?`, `fields?`, `options?`): `Promise`\<`AxiosResponse`\<[`HostQueryOutput`](../interfaces/HostQueryOutput.md), `any`\>\>

Read the entire list of all hosts available to the account. <br /><br /> Required permissions: inventory:hosts:read

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `displayName?` | `string` | Filter by display_name (case-insensitive) |
| `fqdn?` | `string` | Filter by FQDN (case-insensitive) |
| `hostnameOrId?` | `string` | Filter by display_name, fqdn, id (case-insensitive) |
| `insightsId?` | `string` | Filter by insights_id |
| `providerId?` | `string` | Filter by provider_id |
| `providerType?` | ``"alibaba"`` \| ``"aws"`` \| ``"azure"`` \| ``"gcp"`` \| ``"ibm"`` | Filter by provider_type |
| `updatedStart?` | `string` | Only show hosts last modified after the given date |
| `updatedEnd?` | `string` | Only show hosts last modified before the given date |
| `groupName?` | `string`[] | Filter by group name |
| `branchId?` | `string` | Filter by branch_id |
| `perPage?` | `number` | A number of items to return per page. |
| `page?` | `number` | A page number of the items to return. |
| `orderBy?` | ``"updated"`` \| ``"display_name"`` \| ``"group_name"`` \| ``"operating_system"`` | Ordering field name |
| `orderHow?` | ``"ASC"`` \| ``"DESC"`` | Direction of the ordering; defaults to ASC for display_name, and to DESC for updated and operating_system |
| `staleness?` | (``"fresh"`` \| ``"stale"`` \| ``"stale_warning"`` \| ``"unknown"``)[] | Culling states of the hosts. Default: fresh, stale and stale_warning |
| `tags?` | `string`[] | filters out hosts not tagged by the given tags |
| `registeredWith?` | (``"insights"`` \| ``"yupana"`` \| ``"satellite"`` \| ``"discovery"`` \| ``"puptoo"`` \| ``"rhsm-conduit"`` \| ``"cloud-connector"`` \| ``"!yupana"`` \| ``"!satellite"`` \| ``"!discovery"`` \| ``"!puptoo"`` \| ``"!rhsm-conduit"`` \| ``"!cloud-connector"``)[] | Filters out any host not registered by the specified reporters |
| `filter?` | `Object` | Filters hosts based on system_profile fields. For example: &lt;br /&gt;&lt;br /&gt; &amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;{\&quot;system_profile\&quot;: {\&quot;sap_system\&quot;: {\&quot;eq\&quot;: \&quot;true\&quot;}}} &lt;br /&gt;&lt;br /&gt; which equates to the URL param: &lt;br /&gt;&lt;br /&gt; &amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;\&quot;?filter[system_profile][sap_system][eq]&#x3D;true\&quot; &lt;br /&gt;&lt;br /&gt; Hosts with host_type \&quot;edge\&quot; are filtered out by default. &lt;br /&gt;&lt;br /&gt; To get \&quot;edge\&quot; hosts, use this explicit filter: &lt;br /&gt;&lt;br /&gt; &amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;{\&quot;system_profile\&quot;: {\&quot;host_type\&quot;: {\&quot;eq\&quot;: \&quot;edge\&quot;}}} &lt;br /&gt;&lt;br /&gt; which equates to the URL param: &lt;br /&gt;&lt;br /&gt; &amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;\&quot;?filter[system_profile][host_type][eq]&#x3D;edge\&quot; |
| `fields?` | `Object` | Fetches only mentioned system_profile fields. For example, &lt;br /&gt;&lt;br /&gt; &amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;{\&quot;system_profile\&quot;: [\&quot;arch\&quot;, \&quot;host_type\&quot;]} &lt;br /&gt;&lt;br /&gt; which equates to the URL param: &lt;br /&gt;&lt;br /&gt; &amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;\&quot;?fields[system_profile]&#x3D;arch,host_type\&quot; |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<[`HostQueryOutput`](../interfaces/HostQueryOutput.md), `any`\>\>

**`Summary`**

Read the entire list of hosts

**`Throws`**

**`Memberof`**

HostsApi

#### Defined in

[api.ts:5747](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/host-inventory/api.ts#L5747)

___

### apiHostGetHostSystemProfileById

▸ **apiHostGetHostSystemProfileById**(`hostIdList`, `perPage?`, `page?`, `orderBy?`, `orderHow?`, `branchId?`, `fields?`, `options?`): `Promise`\<`AxiosResponse`\<[`SystemProfileByHostOut`](../interfaces/SystemProfileByHostOut.md), `any`\>\>

Find one or more hosts by their ID and return the id and system profile <br /><br /> Required permissions: inventory:hosts:read

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `hostIdList` | `string`[] | A comma-separated list of host IDs. |
| `perPage?` | `number` | A number of items to return per page. |
| `page?` | `number` | A page number of the items to return. |
| `orderBy?` | ``"updated"`` \| ``"display_name"`` \| ``"group_name"`` \| ``"operating_system"`` | Ordering field name |
| `orderHow?` | ``"ASC"`` \| ``"DESC"`` | Direction of the ordering; defaults to ASC for display_name, and to DESC for updated and operating_system |
| `branchId?` | `string` | Filter by branch_id |
| `fields?` | `Object` | Fetches only mentioned system_profile fields. For example, &lt;br /&gt;&lt;br /&gt; &amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;{\&quot;system_profile\&quot;: [\&quot;arch\&quot;, \&quot;host_type\&quot;]} &lt;br /&gt;&lt;br /&gt; which equates to the URL param: &lt;br /&gt;&lt;br /&gt; &amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;\&quot;?fields[system_profile]&#x3D;arch,host_type\&quot; |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<[`SystemProfileByHostOut`](../interfaces/SystemProfileByHostOut.md), `any`\>\>

**`Summary`**

Return one or more hosts system profile

**`Throws`**

**`Memberof`**

HostsApi

#### Defined in

[api.ts:5765](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/host-inventory/api.ts#L5765)

___

### apiHostGetHostTagCount

▸ **apiHostGetHostTagCount**(`hostIdList`, `perPage?`, `page?`, `orderBy?`, `orderHow?`, `options?`): `Promise`\<`AxiosResponse`\<[`TagCountOut`](../interfaces/TagCountOut.md), `any`\>\>

Get the number of tags on a host or hosts <br /><br /> Required permissions: inventory:hosts:read

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `hostIdList` | `string`[] | A comma-separated list of host IDs. |
| `perPage?` | `number` | A number of items to return per page. |
| `page?` | `number` | A page number of the items to return. |
| `orderBy?` | ``"updated"`` \| ``"display_name"`` \| ``"group_name"`` \| ``"operating_system"`` | Ordering field name |
| `orderHow?` | ``"ASC"`` \| ``"DESC"`` | Direction of the ordering; defaults to ASC for display_name, and to DESC for updated and operating_system |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<[`TagCountOut`](../interfaces/TagCountOut.md), `any`\>\>

**`Summary`**

Get the number of tags on a host or hosts

**`Throws`**

**`Memberof`**

HostsApi

#### Defined in

[api.ts:5781](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/host-inventory/api.ts#L5781)

___

### apiHostGetHostTags

▸ **apiHostGetHostTags**(`hostIdList`, `perPage?`, `page?`, `orderBy?`, `orderHow?`, `search?`, `options?`): `Promise`\<`AxiosResponse`\<[`TagsOut`](../interfaces/TagsOut.md), `any`\>\>

Get the tags on a host <br /><br /> Required permissions: inventory:hosts:read

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `hostIdList` | `string`[] | A comma-separated list of host IDs. |
| `perPage?` | `number` | A number of items to return per page. |
| `page?` | `number` | A page number of the items to return. |
| `orderBy?` | ``"updated"`` \| ``"display_name"`` \| ``"group_name"`` \| ``"operating_system"`` | Ordering field name |
| `orderHow?` | ``"ASC"`` \| ``"DESC"`` | Direction of the ordering; defaults to ASC for display_name, and to DESC for updated and operating_system |
| `search?` | `string` | Used for searching tags and sap_sids that match the given search string. For searching tags, a tag\&#39;s namespace, key, and/or value is used for matching. |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<[`TagsOut`](../interfaces/TagsOut.md), `any`\>\>

**`Summary`**

Get the tags on a host

**`Throws`**

**`Memberof`**

HostsApi

#### Defined in

[api.ts:5798](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/host-inventory/api.ts#L5798)

___

### apiHostHostCheckin

▸ **apiHostHostCheckin**(`createCheckIn`, `options?`): `Promise`\<`AxiosResponse`\<[`HostOut`](../interfaces/HostOut.md), `any`\>\>

Finds a host and updates its staleness timestamps. It uses the supplied canonical facts to determine which host to update. By default, the staleness timestamp is set to 1 hour from when the request is received; however, this can be overridden by supplying the interval. <br /><br /> Required permissions: inventory:hosts:write

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `createCheckIn` | [`CreateCheckIn`](../interfaces/CreateCheckIn.md) | Data required to create a check-in record for a host. |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<[`HostOut`](../interfaces/HostOut.md), `any`\>\>

**`Summary`**

Update staleness timestamps for a host matching the provided facts

**`Throws`**

**`Memberof`**

HostsApi

#### Defined in

[api.ts:5810](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/host-inventory/api.ts#L5810)

___

### apiHostMergeFacts

▸ **apiHostMergeFacts**(`hostIdList`, `namespace`, `body`, `branchId?`, `options?`): `Promise`\<`AxiosResponse`\<`void`, `any`\>\>

Merge one or multiple hosts facts under a namespace. <br /><br /> Required permissions: inventory:hosts:write

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `hostIdList` | `string`[] | A comma-separated list of host IDs. |
| `namespace` | `string` | A namespace of the merged facts. |
| `body` | `object` | A dictionary with the new facts to merge with the original ones. |
| `branchId?` | `string` | Filter by branch_id |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<`void`, `any`\>\>

**`Summary`**

Merge facts under a namespace

**`Throws`**

**`Memberof`**

HostsApi

#### Defined in

[api.ts:5825](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/host-inventory/api.ts#L5825)

___

### apiHostPatchHostById

▸ **apiHostPatchHostById**(`hostIdList`, `patchHostIn`, `branchId?`, `options?`): `Promise`\<`AxiosResponse`\<`void`, `any`\>\>

Update hosts <br /><br /> Required permissions: inventory:hosts:write

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `hostIdList` | `string`[] | A comma-separated list of host IDs. |
| `patchHostIn` | [`PatchHostIn`](../interfaces/PatchHostIn.md) | A group of fields to be updated on the hosts |
| `branchId?` | `string` | Filter by branch_id |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<`void`, `any`\>\>

**`Summary`**

Update hosts

**`Throws`**

**`Memberof`**

HostsApi

#### Defined in

[api.ts:5839](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/host-inventory/api.ts#L5839)

___

### apiHostReplaceFacts

▸ **apiHostReplaceFacts**(`hostIdList`, `namespace`, `body`, `branchId?`, `options?`): `Promise`\<`AxiosResponse`\<`void`, `any`\>\>

Replace facts under a namespace <br /><br /> Required permissions: inventory:hosts:write

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `hostIdList` | `string`[] | A comma-separated list of host IDs. |
| `namespace` | `string` | A namespace of the merged facts. |
| `body` | `object` | A dictionary with the new facts to replace the original ones. |
| `branchId?` | `string` | Filter by branch_id |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<`void`, `any`\>\>

**`Summary`**

Replace facts under a namespace

**`Throws`**

**`Memberof`**

HostsApi

#### Defined in

[api.ts:5854](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/host-inventory/api.ts#L5854)
