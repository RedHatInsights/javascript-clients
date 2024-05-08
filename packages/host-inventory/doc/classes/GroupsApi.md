[@redhat-cloud-services/host-inventory-client](../README.md) / [Exports](../modules.md) / GroupsApi

# Class: GroupsApi

GroupsApi - object-oriented interface

**`Export`**

GroupsApi

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

- [apiAssignmentRuleCreateAssignmentRule](GroupsApi.md#apiassignmentrulecreateassignmentrule)
- [apiAssignmentRuleGetAssignmentRulesById](GroupsApi.md#apiassignmentrulegetassignmentrulesbyid)
- [apiAssignmentRuleGetAssignmentRulesList](GroupsApi.md#apiassignmentrulegetassignmentruleslist)
- [apiGroupCreateGroup](GroupsApi.md#apigroupcreategroup)
- [apiGroupDeleteGroups](GroupsApi.md#apigroupdeletegroups)
- [apiGroupDeleteHostsFromDifferentGroups](GroupsApi.md#apigroupdeletehostsfromdifferentgroups)
- [apiGroupGetGroupList](GroupsApi.md#apigroupgetgrouplist)
- [apiGroupGetGroupsById](GroupsApi.md#apigroupgetgroupsbyid)
- [apiGroupPatchGroupById](GroupsApi.md#apigrouppatchgroupbyid)
- [apiHostGroupAddHostListToGroup](GroupsApi.md#apihostgroupaddhostlisttogroup)
- [apiHostGroupDeleteHostsFromGroup](GroupsApi.md#apihostgroupdeletehostsfromgroup)

## Constructors

### constructor

• **new GroupsApi**(`configuration?`, `basePath?`, `axios?`): [`GroupsApi`](GroupsApi.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `configuration?` | [`Configuration`](Configuration.md) | `undefined` |
| `basePath` | `string` | `BASE_PATH` |
| `axios` | `AxiosInstance` | `globalAxios` |

#### Returns

[`GroupsApi`](GroupsApi.md)

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

### apiAssignmentRuleCreateAssignmentRule

▸ **apiAssignmentRuleCreateAssignmentRule**(`assignmentRuleIn`, `options?`): `Promise`\<`AxiosResponse`\<[`AssignmentRuleOut`](../interfaces/AssignmentRuleOut.md), `any`\>\>

Create Assignment Rule object using post request <br /><br /> Required permissions: inventory:groups:write

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `assignmentRuleIn` | [`AssignmentRuleIn`](../interfaces/AssignmentRuleIn.md) | Data required to create Assignment Rule object |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<[`AssignmentRuleOut`](../interfaces/AssignmentRuleOut.md), `any`\>\>

**`Summary`**

Create Assignment Rule object

**`Throws`**

**`Memberof`**

GroupsApi

#### Defined in

[api.ts:4207](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/host-inventory/api.ts#L4207)

___

### apiAssignmentRuleGetAssignmentRulesById

▸ **apiAssignmentRuleGetAssignmentRulesById**(`assignmentRuleIdList`, `perPage?`, `page?`, `orderBy?`, `orderHow?`, `options?`): `Promise`\<`AxiosResponse`\<[`AssignmentRuleQueryOutput`](../interfaces/AssignmentRuleQueryOutput.md), `any`\>\>

Find one or more assignment rules by their IDs. <br /><br /> Required permissions: inventory:groups:read

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `assignmentRuleIdList` | `string`[] | A comma-separated list of assignment-rule IDs. |
| `perPage?` | `number` | A number of items to return per page. |
| `page?` | `number` | A page number of the items to return. |
| `orderBy?` | ``"name"`` \| ``"group_id"`` | Ordering field name |
| `orderHow?` | ``"ASC"`` \| ``"DESC"`` | Direction of the ordering; defaults to ASC for name, and to DESC for host_ids |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<[`AssignmentRuleQueryOutput`](../interfaces/AssignmentRuleQueryOutput.md), `any`\>\>

**`Summary`**

Find assignment rules by their IDs

**`Throws`**

**`Memberof`**

GroupsApi

#### Defined in

[api.ts:4223](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/host-inventory/api.ts#L4223)

___

### apiAssignmentRuleGetAssignmentRulesList

▸ **apiAssignmentRuleGetAssignmentRulesList**(`name?`, `perPage?`, `page?`, `orderBy?`, `orderHow?`, `options?`): `Promise`\<`AxiosResponse`\<[`AssignmentRuleQueryOutput`](../interfaces/AssignmentRuleQueryOutput.md), `any`\>\>

Read the entire list of all assignment-rules available to the account. [Not Implemented] Required permissions: inventory:groups:read

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name?` | `string` | Filter by assignment-rule name |
| `perPage?` | `number` | A number of items to return per page. |
| `page?` | `number` | A page number of the items to return. |
| `orderBy?` | ``"name"`` \| ``"group_id"`` | Ordering field name |
| `orderHow?` | ``"ASC"`` \| ``"DESC"`` | Direction of the ordering; defaults to ASC for name, and to DESC for host_ids |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<[`AssignmentRuleQueryOutput`](../interfaces/AssignmentRuleQueryOutput.md), `any`\>\>

**`Summary`**

Read the entire list of assignment-rules [Not Implemented]

**`Throws`**

**`Memberof`**

GroupsApi

#### Defined in

[api.ts:4239](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/host-inventory/api.ts#L4239)

___

### apiGroupCreateGroup

▸ **apiGroupCreateGroup**(`groupIn`, `options?`): `Promise`\<`AxiosResponse`\<[`GroupOutWithHostCount`](../interfaces/GroupOutWithHostCount.md), `any`\>\>

Creates a new group containing the hosts associated with the host IDs provided. <br /><br /> Required permissions: inventory:groups:write

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `groupIn` | [`GroupIn`](../interfaces/GroupIn.md) | Data required to create a record for a group. |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<[`GroupOutWithHostCount`](../interfaces/GroupOutWithHostCount.md), `any`\>\>

**`Summary`**

Create a new group matching the provided name and list of hosts IDs

**`Throws`**

**`Memberof`**

GroupsApi

#### Defined in

[api.ts:4251](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/host-inventory/api.ts#L4251)

___

### apiGroupDeleteGroups

▸ **apiGroupDeleteGroups**(`groupIdList`, `options?`): `Promise`\<`AxiosResponse`\<`void`, `any`\>\>

Delete a list of groups. <br /><br /> Required permissions: inventory:groups:write

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `groupIdList` | `string`[] | A comma-separated list of group IDs. |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<`void`, `any`\>\>

**`Summary`**

Delete a list of groups

**`Throws`**

**`Memberof`**

GroupsApi

#### Defined in

[api.ts:4263](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/host-inventory/api.ts#L4263)

___

### apiGroupDeleteHostsFromDifferentGroups

▸ **apiGroupDeleteHostsFromDifferentGroups**(`hostIdList`, `options?`): `Promise`\<`AxiosResponse`\<`void`, `any`\>\>

Delete a list of hosts from the groups they are in. <br /><br /> Required permissions: inventory:groups:write

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `hostIdList` | `string`[] | A comma-separated list of host IDs. |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<`void`, `any`\>\>

**`Summary`**

Delete a list of hosts from the groups they are in

**`Throws`**

**`Memberof`**

GroupsApi

#### Defined in

[api.ts:4275](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/host-inventory/api.ts#L4275)

___

### apiGroupGetGroupList

▸ **apiGroupGetGroupList**(`name?`, `perPage?`, `page?`, `orderBy?`, `orderHow?`, `options?`): `Promise`\<`AxiosResponse`\<[`GroupQueryOutput`](../interfaces/GroupQueryOutput.md), `any`\>\>

Read the entire list of all groups available to the account. <br /><br /> Required permissions: inventory:groups:read

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name?` | `string` | Filter by group name |
| `perPage?` | `number` | A number of items to return per page. |
| `page?` | `number` | A page number of the items to return. |
| `orderBy?` | ``"name"`` \| ``"host_count"`` \| ``"updated"`` | Ordering field name |
| `orderHow?` | ``"ASC"`` \| ``"DESC"`` | Direction of the ordering; defaults to ASC for name, and to DESC for host_count |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<[`GroupQueryOutput`](../interfaces/GroupQueryOutput.md), `any`\>\>

**`Summary`**

Read the entire list of groups

**`Throws`**

**`Memberof`**

GroupsApi

#### Defined in

[api.ts:4291](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/host-inventory/api.ts#L4291)

___

### apiGroupGetGroupsById

▸ **apiGroupGetGroupsById**(`groupIdList`, `perPage?`, `page?`, `orderBy?`, `orderHow?`, `options?`): `Promise`\<`AxiosResponse`\<[`GroupQueryOutput`](../interfaces/GroupQueryOutput.md), `any`\>\>

Find one or more groups by their IDs. <br /><br /> Required permissions: inventory:groups:read

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `groupIdList` | `string`[] | A comma-separated list of group IDs. |
| `perPage?` | `number` | A number of items to return per page. |
| `page?` | `number` | A page number of the items to return. |
| `orderBy?` | ``"name"`` \| ``"host_count"`` \| ``"updated"`` | Ordering field name |
| `orderHow?` | ``"ASC"`` \| ``"DESC"`` | Direction of the ordering; defaults to ASC for name, and to DESC for host_count |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<[`GroupQueryOutput`](../interfaces/GroupQueryOutput.md), `any`\>\>

**`Summary`**

Find groups by their IDs

**`Throws`**

**`Memberof`**

GroupsApi

#### Defined in

[api.ts:4307](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/host-inventory/api.ts#L4307)

___

### apiGroupPatchGroupById

▸ **apiGroupPatchGroupById**(`groupId`, `groupIn`, `options?`): `Promise`\<`AxiosResponse`\<[`GroupOutWithHostCount`](../interfaces/GroupOutWithHostCount.md), `any`\>\>

Merge group information. <br /><br /> Required permissions: inventory:groups:write

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `groupId` | `string` | Group ID. |
| `groupIn` | [`GroupIn`](../interfaces/GroupIn.md) | A dictionary with new information to merge with the original group. |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<[`GroupOutWithHostCount`](../interfaces/GroupOutWithHostCount.md), `any`\>\>

**`Summary`**

Merge group information

**`Throws`**

**`Memberof`**

GroupsApi

#### Defined in

[api.ts:4320](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/host-inventory/api.ts#L4320)

___

### apiHostGroupAddHostListToGroup

▸ **apiHostGroupAddHostListToGroup**(`groupId`, `requestBody`, `options?`): `Promise`\<`AxiosResponse`\<[`GroupOutWithHostCount`](../interfaces/GroupOutWithHostCount.md), `any`\>\>

Adds the host list in the request body to the provided group. <br /><br /> Required permissions: inventory:groups:write

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `groupId` | `string` | Group ID. |
| `requestBody` | `string`[] | A list of hosts IDs to associate with the provided group. |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<[`GroupOutWithHostCount`](../interfaces/GroupOutWithHostCount.md), `any`\>\>

**`Summary`**

Add host IDs to the provided group

**`Throws`**

**`Memberof`**

GroupsApi

#### Defined in

[api.ts:4333](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/host-inventory/api.ts#L4333)

___

### apiHostGroupDeleteHostsFromGroup

▸ **apiHostGroupDeleteHostsFromGroup**(`groupId`, `hostIdList`, `options?`): `Promise`\<`AxiosResponse`\<`void`, `any`\>\>

Delete one or more hosts from a group. <br /><br /> Required permissions: inventory:groups:write

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `groupId` | `string` | Group ID. |
| `hostIdList` | `string`[] | A comma-separated list of host IDs. |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<`void`, `any`\>\>

**`Summary`**

Delete one or more hosts from a group

**`Throws`**

**`Memberof`**

GroupsApi

#### Defined in

[api.ts:4346](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/host-inventory/api.ts#L4346)
