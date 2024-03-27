[@redhat-cloud-services/catalog-client](../README.md) / [Exports](../modules.md) / SharePolicy

# Interface: SharePolicy

**`Export`**

**`Interface`**

SharePolicy

## Table of contents

### Properties

- [group\_uuids](SharePolicy.md#group_uuids)
- [permissions](SharePolicy.md#permissions)

## Properties

### group\_uuids

• **group\_uuids**: `string`[]

An array of group UUID\'s retrieved from the RBAC Service with whom the resource has to be shared.

**`Memberof`**

SharePolicy

#### Defined in

[api.ts:1218](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L1218)

___

### permissions

• **permissions**: [`SharePolicyPermissionsEnum`](../enums/SharePolicyPermissionsEnum.md)[]

The permissions to apply for this share. The valid values are read, update, delete and order

**`Memberof`**

SharePolicy

#### Defined in

[api.ts:1212](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L1212)
