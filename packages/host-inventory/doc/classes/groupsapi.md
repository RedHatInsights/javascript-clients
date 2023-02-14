[@redhat-cloud-services/host-inventory-client](../README.md) › [Globals](../globals.md) › [GroupsApi](groupsapi.md)

# Class: GroupsApi

GroupsApi - object-oriented interface

**`export`** 

## Hierarchy

* [BaseAPI](baseapi.md)

  ↳ **GroupsApi**

## Index

### Constructors

* [constructor](groupsapi.md#constructor)

### Properties

* [axios](groupsapi.md#protected-axios)
* [basePath](groupsapi.md#protected-basepath)
* [configuration](groupsapi.md#protected-configuration)

### Methods

* [apiGroupCreateGroup](groupsapi.md#apigroupcreategroup)
* [apiGroupDeleteGroup](groupsapi.md#apigroupdeletegroup)
* [apiGroupDeleteHostsFromGroup](groupsapi.md#apigroupdeletehostsfromgroup)
* [apiGroupGetGroup](groupsapi.md#apigroupgetgroup)
* [apiGroupGetGroupList](groupsapi.md#apigroupgetgrouplist)
* [apiGroupGetGroupsById](groupsapi.md#apigroupgetgroupsbyid)
* [apiGroupPatchGroupById](groupsapi.md#apigrouppatchgroupbyid)
* [apiGroupUpdateGroupDetails](groupsapi.md#apigroupupdategroupdetails)

## Constructors

###  constructor

\+ **new GroupsApi**(`configuration?`: [Configuration](configuration.md), `basePath`: string, `axios`: AxiosInstance): *[GroupsApi](groupsapi.md)*

*Inherited from [BaseAPI](baseapi.md).[constructor](baseapi.md#constructor)*

*Defined in [base.ts:49](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/base.ts#L49)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`configuration?` | [Configuration](configuration.md) | - |
`basePath` | string | BASE_PATH |
`axios` | AxiosInstance | globalAxios |

**Returns:** *[GroupsApi](groupsapi.md)*

## Properties

### `Protected` axios

• **axios**: *AxiosInstance*

*Inherited from [BaseAPI](baseapi.md).[axios](baseapi.md#protected-axios)*

*Defined in [base.ts:51](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/base.ts#L51)*

___

### `Protected` basePath

• **basePath**: *string*

*Inherited from [BaseAPI](baseapi.md).[basePath](baseapi.md#protected-basepath)*

*Defined in [base.ts:51](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/base.ts#L51)*

___

### `Protected` configuration

• **configuration**: *[Configuration](configuration.md) | undefined*

*Inherited from [BaseAPI](baseapi.md).[configuration](baseapi.md#protected-configuration)*

*Defined in [base.ts:49](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/base.ts#L49)*

## Methods

###  apiGroupCreateGroup

▸ **apiGroupCreateGroup**(`createGroup`: [CreateGroup](../interfaces/creategroup.md), `options?`: any): *Promise‹AxiosResponse‹[GroupOut](../interfaces/groupout.md)››*

*Defined in [api.ts:3059](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L3059)*

Creates a new group containing the hosts associated with the host IDs provided. [Not Implemented] <br /><br /> Required permissions: inventory:groups:write

**`summary`** Create a new group matching the provided name and list of hosts IDs [Not Implemented]

**`throws`** {RequiredError}

**`memberof`** GroupsApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`createGroup` | [CreateGroup](../interfaces/creategroup.md) | Data required to create a record for a group. |
`options?` | any | - |

**Returns:** *Promise‹AxiosResponse‹[GroupOut](../interfaces/groupout.md)››*

___

###  apiGroupDeleteGroup

▸ **apiGroupDeleteGroup**(`groupId`: string, `options?`: any): *Promise‹AxiosResponse‹void››*

*Defined in [api.ts:3071](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L3071)*

Delete a group. [Not Implemented] <br /><br /> Required permissions: inventory:groups:write

**`summary`** Delete a group [Not Implemented]

**`throws`** {RequiredError}

**`memberof`** GroupsApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`groupId` | string | Group ID. |
`options?` | any | - |

**Returns:** *Promise‹AxiosResponse‹void››*

___

###  apiGroupDeleteHostsFromGroup

▸ **apiGroupDeleteHostsFromGroup**(`groupId`: string, `hostIdList`: Array‹string›, `options?`: any): *Promise‹AxiosResponse‹void››*

*Defined in [api.ts:3084](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L3084)*

Delete one or more hosts from a group. [Not Implemented] <br /><br /> Required permissions: inventory:groups:write

**`summary`** Delete one or more hosts from a group [Not Implemented]

**`throws`** {RequiredError}

**`memberof`** GroupsApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`groupId` | string | Group ID. |
`hostIdList` | Array‹string› | A comma separated list of host IDs. |
`options?` | any | - |

**Returns:** *Promise‹AxiosResponse‹void››*

___

###  apiGroupGetGroup

▸ **apiGroupGetGroup**(`groupId`: string, `options?`: any): *Promise‹AxiosResponse‹[GroupOut](../interfaces/groupout.md)››*

*Defined in [api.ts:3096](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L3096)*

Find a group by its ID. [Not Implemented] <br /><br /> Required permissions: inventory:groups:read

**`summary`** Find a group by its ID [Not Implemented]

**`throws`** {RequiredError}

**`memberof`** GroupsApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`groupId` | string | Group ID. |
`options?` | any | - |

**Returns:** *Promise‹AxiosResponse‹[GroupOut](../interfaces/groupout.md)››*

___

###  apiGroupGetGroupList

▸ **apiGroupGetGroupList**(`name?`: string, `perPage?`: number, `page?`: number, `orderBy?`: "display_name" | "updated" | "operating_system", `orderHow?`: "ASC" | "DESC", `options?`: any): *Promise‹AxiosResponse‹[GroupQueryOutput](../interfaces/groupqueryoutput.md)››*

*Defined in [api.ts:3112](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L3112)*

Read the entire list of all groups available to the account. [Not Implemented] <br /><br /> Required permissions: inventory:groups:read

**`summary`** Read the entire list of groups [Not Implemented]

**`throws`** {RequiredError}

**`memberof`** GroupsApi

**Parameters:**

Name | Type |
------ | ------ |
`name?` | string |
`perPage?` | number |
`page?` | number |
`orderBy?` | "display_name" &#124; "updated" &#124; "operating_system" |
`orderHow?` | "ASC" &#124; "DESC" |
`options?` | any |

**Returns:** *Promise‹AxiosResponse‹[GroupQueryOutput](../interfaces/groupqueryoutput.md)››*

___

###  apiGroupGetGroupsById

▸ **apiGroupGetGroupsById**(`groupIdList`: Array‹string›, `options?`: any): *Promise‹AxiosResponse‹[GroupQueryOutput](../interfaces/groupqueryoutput.md)››*

*Defined in [api.ts:3124](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L3124)*

Find one or more groups by their IDs. [Not Implemented] <br /><br /> Required permissions: inventory:groups:read

**`summary`** Find groups by their IDs [Not Implemented]

**`throws`** {RequiredError}

**`memberof`** GroupsApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`groupIdList` | Array‹string› | A comma separated list of group IDs. |
`options?` | any | - |

**Returns:** *Promise‹AxiosResponse‹[GroupQueryOutput](../interfaces/groupqueryoutput.md)››*

___

###  apiGroupPatchGroupById

▸ **apiGroupPatchGroupById**(`groupId`: string, `groupIn`: [GroupIn](../interfaces/groupin.md), `options?`: any): *Promise‹AxiosResponse‹[GroupOut](../interfaces/groupout.md)››*

*Defined in [api.ts:3137](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L3137)*

Merge group information. [Not Implemented] <br /><br /> Required permissions: inventory:groups:write

**`summary`** Merge group information [Not Implemented]

**`throws`** {RequiredError}

**`memberof`** GroupsApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`groupId` | string | Group ID. |
`groupIn` | [GroupIn](../interfaces/groupin.md) | A dictionary with the new information to merge with the original one. |
`options?` | any | - |

**Returns:** *Promise‹AxiosResponse‹[GroupOut](../interfaces/groupout.md)››*

___

###  apiGroupUpdateGroupDetails

▸ **apiGroupUpdateGroupDetails**(`groupId`: string, `groupIn`: [GroupIn](../interfaces/groupin.md), `options?`: any): *Promise‹AxiosResponse‹[GroupOut](../interfaces/groupout.md)››*

*Defined in [api.ts:3150](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L3150)*

Replace information from a group. [Not Implemented] <br /><br /> Required permissions: inventory:groups:write

**`summary`** Replace group information [Not Implemented]

**`throws`** {RequiredError}

**`memberof`** GroupsApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`groupId` | string | Group ID. |
`groupIn` | [GroupIn](../interfaces/groupin.md) | A dictionary with the information to replace the original one. |
`options?` | any | - |

**Returns:** *Promise‹AxiosResponse‹[GroupOut](../interfaces/groupout.md)››*
