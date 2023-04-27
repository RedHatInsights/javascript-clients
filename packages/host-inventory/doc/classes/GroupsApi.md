[@redhat-cloud-services/host-inventory-client](../README.md) / [Exports](../modules.md) / GroupsApi

# Class: GroupsApi

GroupsApi - object-oriented interface

**`Export`**

## Hierarchy

- `BaseAPI`

  ↳ **`GroupsApi`**

## Table of contents

### Constructors

- [constructor](GroupsApi.md#constructor)

### Properties

- [axios](GroupsApi.md#axios)
- [basePath](GroupsApi.md#basepath)
- [configuration](GroupsApi.md#configuration)

### Methods

- [apiGroupCreateGroup](GroupsApi.md#apigroupcreategroup)
- [apiGroupDeleteGroups](GroupsApi.md#apigroupdeletegroups)
- [apiGroupDeleteHostsFromGroup](GroupsApi.md#apigroupdeletehostsfromgroup)
- [apiGroupGetGroupList](GroupsApi.md#apigroupgetgrouplist)
- [apiGroupGetGroupsById](GroupsApi.md#apigroupgetgroupsbyid)
- [apiGroupPatchGroupById](GroupsApi.md#apigrouppatchgroupbyid)

## Constructors

### constructor

• **new GroupsApi**(`configuration?`, `basePath?`, `axios?`)

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

### apiGroupCreateGroup

▸ **apiGroupCreateGroup**(`groupIn`, `options?`): `Promise`<`AxiosResponse`<[`GroupOut`](../interfaces/GroupOut.md), `any`\>\>

Creates a new group containing the hosts associated with the host IDs provided. [Not Implemented] <br /><br /> Required permissions: inventory:groups:write

**`Summary`**

Create a new group matching the provided name and list of hosts IDs [Not Implemented]

**`Throws`**

**`Memberof`**

GroupsApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `groupIn` | [`GroupIn`](../interfaces/GroupIn.md) | Data required to create a record for a group. |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`GroupOut`](../interfaces/GroupOut.md), `any`\>\>

#### Defined in

[api.ts:2920](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L2920)

___

### apiGroupDeleteGroups

▸ **apiGroupDeleteGroups**(`groupIdList`, `options?`): `Promise`<`AxiosResponse`<`void`, `any`\>\>

Delete a list of groups. [Not Implemented] <br /><br /> Required permissions: inventory:groups:write

**`Summary`**

Delete a list of groups [Not Implemented]

**`Throws`**

**`Memberof`**

GroupsApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `groupIdList` | `string`[] | A comma-separated list of group IDs. |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<`void`, `any`\>\>

#### Defined in

[api.ts:2932](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L2932)

___

### apiGroupDeleteHostsFromGroup

▸ **apiGroupDeleteHostsFromGroup**(`groupId`, `hostIdList`, `options?`): `Promise`<`AxiosResponse`<`void`, `any`\>\>

Delete one or more hosts from a group. [Not Implemented] <br /><br /> Required permissions: inventory:groups:write

**`Summary`**

Delete one or more hosts from a group [Not Implemented]

**`Throws`**

**`Memberof`**

GroupsApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `groupId` | `string` | Group ID. |
| `hostIdList` | `string`[] | A comma-separated list of host IDs. |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<`void`, `any`\>\>

#### Defined in

[api.ts:2945](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L2945)

___

### apiGroupGetGroupList

▸ **apiGroupGetGroupList**(`name?`, `perPage?`, `page?`, `orderBy?`, `orderHow?`, `options?`): `Promise`<`AxiosResponse`<[`GroupQueryOutput`](../interfaces/GroupQueryOutput.md), `any`\>\>

Read the entire list of all groups available to the account. [Not Implemented] <br /><br /> Required permissions: inventory:groups:read

**`Summary`**

Read the entire list of groups [Not Implemented]

**`Throws`**

**`Memberof`**

GroupsApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name?` | `string` | Filter by group name |
| `perPage?` | `number` | A number of items to return per page. |
| `page?` | `number` | A page number of the items to return. |
| `orderBy?` | ``"name"`` \| ``"host_ids"`` | Ordering field name |
| `orderHow?` | ``"ASC"`` \| ``"DESC"`` | Direction of the ordering; defaults to ASC for name, and to DESC for host_ids |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`GroupQueryOutput`](../interfaces/GroupQueryOutput.md), `any`\>\>

#### Defined in

[api.ts:2961](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L2961)

___

### apiGroupGetGroupsById

▸ **apiGroupGetGroupsById**(`groupIdList`, `perPage?`, `page?`, `orderBy?`, `orderHow?`, `options?`): `Promise`<`AxiosResponse`<[`GroupQueryOutput`](../interfaces/GroupQueryOutput.md), `any`\>\>

Find one or more groups by their IDs. [Not Implemented] <br /><br /> Required permissions: inventory:groups:read

**`Summary`**

Find groups by their IDs [Not Implemented]

**`Throws`**

**`Memberof`**

GroupsApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `groupIdList` | `string`[] | A comma-separated list of group IDs. |
| `perPage?` | `number` | A number of items to return per page. |
| `page?` | `number` | A page number of the items to return. |
| `orderBy?` | ``"name"`` \| ``"host_ids"`` | Ordering field name |
| `orderHow?` | ``"ASC"`` \| ``"DESC"`` | Direction of the ordering; defaults to ASC for name, and to DESC for host_ids |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`GroupQueryOutput`](../interfaces/GroupQueryOutput.md), `any`\>\>

#### Defined in

[api.ts:2977](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L2977)

___

### apiGroupPatchGroupById

▸ **apiGroupPatchGroupById**(`groupId`, `groupIn`, `options?`): `Promise`<`AxiosResponse`<[`GroupOut`](../interfaces/GroupOut.md), `any`\>\>

Merge group information. [Not Implemented] <br /><br /> Required permissions: inventory:groups:write

**`Summary`**

Merge group information [Not Implemented]

**`Throws`**

**`Memberof`**

GroupsApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `groupId` | `string` | Group ID. |
| `groupIn` | [`GroupIn`](../interfaces/GroupIn.md) | A dictionary with new information to merge with the original group. |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`GroupOut`](../interfaces/GroupOut.md), `any`\>\>

#### Defined in

[api.ts:2990](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L2990)
