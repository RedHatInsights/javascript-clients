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

- [apiAssignmentRuleCreateAssignmentRule](GroupsApi.md#apiassignmentrulecreateassignmentrule)
- [apiAssignmentRuleGetAssignmentRulesById](GroupsApi.md#apiassignmentrulegetassignmentrulesbyid)
- [apiAssignmentRuleGetAssignmentRulesList](GroupsApi.md#apiassignmentrulegetassignmentruleslist)
- [apiGroupCreateGroup](GroupsApi.md#apigroupcreategroup)
- [apiGroupDeleteGroups](GroupsApi.md#apigroupdeletegroups)
- [apiGroupGetGroupList](GroupsApi.md#apigroupgetgrouplist)
- [apiGroupGetGroupsById](GroupsApi.md#apigroupgetgroupsbyid)
- [apiGroupPatchGroupById](GroupsApi.md#apigrouppatchgroupbyid)
- [apiHostGroupAddHostListToGroup](GroupsApi.md#apihostgroupaddhostlisttogroup)
- [apiHostGroupDeleteHostsFromGroup](GroupsApi.md#apihostgroupdeletehostsfromgroup)

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

### apiAssignmentRuleCreateAssignmentRule

▸ **apiAssignmentRuleCreateAssignmentRule**(`assignmentRuleIn`, `options?`): `Promise`<`AxiosResponse`<[`AssignmentRuleOut`](../interfaces/AssignmentRuleOut.md)\>\>

Create Assignment Rule object using post request <br /><br /> Required permissions: inventory:groups:write

**`Summary`**

Create Assignment Rule object

**`Throws`**

**`Memberof`**

GroupsApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `assignmentRuleIn` | [`AssignmentRuleIn`](../interfaces/AssignmentRuleIn.md) | Data required to create Assignment Rule object |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`AssignmentRuleOut`](../interfaces/AssignmentRuleOut.md)\>\>

#### Defined in

[api.ts:3888](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L3888)

___

### apiAssignmentRuleGetAssignmentRulesById

▸ **apiAssignmentRuleGetAssignmentRulesById**(`assignmentRuleIdList`, `perPage?`, `page?`, `orderBy?`, `orderHow?`, `options?`): `Promise`<`AxiosResponse`<[`AssignmentRuleQueryOutput`](../interfaces/AssignmentRuleQueryOutput.md)\>\>

Find one or more assignment rules by their IDs. <br /><br /> Required permissions: inventory:groups:read

**`Summary`**

Find assignment rules by their IDs

**`Throws`**

**`Memberof`**

GroupsApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `assignmentRuleIdList` | `string`[] | A comma-separated list of assignment-rule IDs. |
| `perPage?` | `number` | A number of items to return per page. |
| `page?` | `number` | A page number of the items to return. |
| `orderBy?` | ``"name"`` \| ``"org_id"`` \| ``"account"`` \| ``"group_id"`` | Ordering field name |
| `orderHow?` | ``"ASC"`` \| ``"DESC"`` | Direction of the ordering; defaults to ASC for name, and to DESC for host_ids |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`AssignmentRuleQueryOutput`](../interfaces/AssignmentRuleQueryOutput.md)\>\>

#### Defined in

[api.ts:3904](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L3904)

___

### apiAssignmentRuleGetAssignmentRulesList

▸ **apiAssignmentRuleGetAssignmentRulesList**(`name?`, `perPage?`, `page?`, `orderBy?`, `orderHow?`, `options?`): `Promise`<`AxiosResponse`<[`AssignmentRuleQueryOutput`](../interfaces/AssignmentRuleQueryOutput.md)\>\>

Read the entire list of all assignment-rules available to the account. [Not Implemented] Required permissions: inventory:groups:read

**`Summary`**

Read the entire list of assignment-rules [Not Implemented]

**`Throws`**

**`Memberof`**

GroupsApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name?` | `string` | Filter by assignment-rule name |
| `perPage?` | `number` | A number of items to return per page. |
| `page?` | `number` | A page number of the items to return. |
| `orderBy?` | ``"name"`` \| ``"org_id"`` \| ``"account"`` \| ``"group_id"`` | Ordering field name |
| `orderHow?` | ``"ASC"`` \| ``"DESC"`` | Direction of the ordering; defaults to ASC for name, and to DESC for host_ids |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`AssignmentRuleQueryOutput`](../interfaces/AssignmentRuleQueryOutput.md)\>\>

#### Defined in

[api.ts:3920](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L3920)

___

### apiGroupCreateGroup

▸ **apiGroupCreateGroup**(`groupIn`, `options?`): `Promise`<`AxiosResponse`<[`GroupOutWithHostCount`](../interfaces/GroupOutWithHostCount.md)\>\>

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

`Promise`<`AxiosResponse`<[`GroupOutWithHostCount`](../interfaces/GroupOutWithHostCount.md)\>\>

#### Defined in

[api.ts:3932](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L3932)

___

### apiGroupDeleteGroups

▸ **apiGroupDeleteGroups**(`groupIdList`, `options?`): `Promise`<`AxiosResponse`<`void`\>\>

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

`Promise`<`AxiosResponse`<`void`\>\>

#### Defined in

[api.ts:3944](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L3944)

___

### apiGroupGetGroupList

▸ **apiGroupGetGroupList**(`name?`, `perPage?`, `page?`, `orderBy?`, `orderHow?`, `options?`): `Promise`<`AxiosResponse`<[`GroupQueryOutput`](../interfaces/GroupQueryOutput.md)\>\>

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
| `orderBy?` | ``"name"`` \| ``"host_count"`` | Ordering field name |
| `orderHow?` | ``"ASC"`` \| ``"DESC"`` | Direction of the ordering; defaults to ASC for name, and to DESC for host_count |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`GroupQueryOutput`](../interfaces/GroupQueryOutput.md)\>\>

#### Defined in

[api.ts:3960](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L3960)

___

### apiGroupGetGroupsById

▸ **apiGroupGetGroupsById**(`groupIdList`, `perPage?`, `page?`, `orderBy?`, `orderHow?`, `options?`): `Promise`<`AxiosResponse`<[`GroupQueryOutput`](../interfaces/GroupQueryOutput.md)\>\>

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
| `orderBy?` | ``"name"`` \| ``"host_count"`` | Ordering field name |
| `orderHow?` | ``"ASC"`` \| ``"DESC"`` | Direction of the ordering; defaults to ASC for name, and to DESC for host_count |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`GroupQueryOutput`](../interfaces/GroupQueryOutput.md)\>\>

#### Defined in

[api.ts:3976](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L3976)

___

### apiGroupPatchGroupById

▸ **apiGroupPatchGroupById**(`groupId`, `groupIn`, `options?`): `Promise`<`AxiosResponse`<[`GroupOutWithHostCount`](../interfaces/GroupOutWithHostCount.md)\>\>

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

`Promise`<`AxiosResponse`<[`GroupOutWithHostCount`](../interfaces/GroupOutWithHostCount.md)\>\>

#### Defined in

[api.ts:3989](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L3989)

___

### apiHostGroupAddHostListToGroup

▸ **apiHostGroupAddHostListToGroup**(`groupId`, `requestBody`, `options?`): `Promise`<`AxiosResponse`<[`GroupOutWithHostCount`](../interfaces/GroupOutWithHostCount.md)\>\>

Adds the host list in the request body to the provided group. <br /><br /> Required permissions: inventory:groups:write

**`Summary`**

Add host IDs to the provided group

**`Throws`**

**`Memberof`**

GroupsApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `groupId` | `string` | Group ID. |
| `requestBody` | `string`[] | A list of hosts IDs to associate with the provided group. |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`GroupOutWithHostCount`](../interfaces/GroupOutWithHostCount.md)\>\>

#### Defined in

[api.ts:4002](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L4002)

___

### apiHostGroupDeleteHostsFromGroup

▸ **apiHostGroupDeleteHostsFromGroup**(`groupId`, `hostIdList`, `options?`): `Promise`<`AxiosResponse`<`void`\>\>

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

`Promise`<`AxiosResponse`<`void`\>\>

#### Defined in

[api.ts:4015](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L4015)
