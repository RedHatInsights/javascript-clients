[@redhat-cloud-services/rbac-client](../README.md) / [Exports](../modules.md) / ServiceAccountInGroupResponse

# Interface: ServiceAccountInGroupResponse

**`Export`**

**`Interface`**

ServiceAccountInGroupResponse

## Table of contents

### Properties

- [data](ServiceAccountInGroupResponse.md#data)
- [links](ServiceAccountInGroupResponse.md#links)
- [meta](ServiceAccountInGroupResponse.md#meta)

## Properties

### data

• `Optional` **data**: `Object`

Object which indicates whether the given service account UUIDs in the query parameter are present in the specified group or not

**`Memberof`**

ServiceAccountInGroupResponse

#### Index signature

▪ [key: `string`]: `boolean`

#### Defined in

[api.ts:2491](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/rbac/api.ts#L2491)

___

### links

• `Optional` **links**: `object`

The links object for this particular response will be empty, since there is no pagination available for the query parameter

**`Memberof`**

ServiceAccountInGroupResponse

#### Defined in

[api.ts:2485](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/rbac/api.ts#L2485)

___

### meta

• `Optional` **meta**: [`PaginationMeta`](PaginationMeta.md)

**`Memberof`**

ServiceAccountInGroupResponse

#### Defined in

[api.ts:2479](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/rbac/api.ts#L2479)
