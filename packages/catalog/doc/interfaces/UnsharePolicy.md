[@redhat-cloud-services/catalog-client](../README.md) / [Exports](../modules.md) / UnsharePolicy

# Interface: UnsharePolicy

**`Export`**

**`Interface`**

UnsharePolicy

## Table of contents

### Properties

- [group\_uuids](UnsharePolicy.md#group_uuids)
- [permissions](UnsharePolicy.md#permissions)

## Properties

### group\_uuids

• `Optional` **group\_uuids**: `string`[]

An array of group UUID\'s retrieved from the RBAC Service from which the permissions have to be removed. If group uuids are not specified we will unshare it from all groups.

**`Memberof`**

UnsharePolicy

#### Defined in

[api.ts:1394](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L1394)

___

### permissions

• **permissions**: [`UnsharePolicyPermissionsEnum`](../enums/UnsharePolicyPermissionsEnum.md)[]

The permissions to remove for this resource.

**`Memberof`**

UnsharePolicy

#### Defined in

[api.ts:1388](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L1388)
