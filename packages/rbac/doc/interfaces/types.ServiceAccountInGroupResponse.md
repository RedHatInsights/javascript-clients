[@redhat-cloud-services/javascript-clients](../README.md) / [Exports](../modules.md) / [types](../modules/types.md) / ServiceAccountInGroupResponse

# Interface: ServiceAccountInGroupResponse

[types](../modules/types.md).ServiceAccountInGroupResponse

**`Export`**

ServiceAccountInGroupResponse

## Table of contents

### Properties

- [data](types.ServiceAccountInGroupResponse.md#data)
- [links](types.ServiceAccountInGroupResponse.md#links)
- [meta](types.ServiceAccountInGroupResponse.md#meta)

## Properties

### data

• `Optional` **data**: `Object`

Object which indicates whether the given service account UUIDs in the query parameter are present in the specified group or not

**`Memberof`**

ServiceAccountInGroupResponse

#### Index signature

▪ [key: `string`]: `boolean`

#### Defined in

[types/index.ts:2139](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/rbac/types/index.ts#L2139)

___

### links

• `Optional` **links**: `object`

The links object for this particular response will be empty, since there is no pagination available for the query parameter

**`Memberof`**

ServiceAccountInGroupResponse

#### Defined in

[types/index.ts:2133](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/rbac/types/index.ts#L2133)

___

### meta

• `Optional` **meta**: [`PaginationMeta`](types.PaginationMeta.md)

**`Memberof`**

ServiceAccountInGroupResponse

#### Defined in

[types/index.ts:2127](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/rbac/types/index.ts#L2127)
