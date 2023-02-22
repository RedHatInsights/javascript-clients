[@redhat-cloud-services/host-inventory-client](../README.md) / [Exports](../modules.md) / GroupIn

# Interface: GroupIn

Data of a single group belonging to an account.

**`Export`**

**`Interface`**

GroupIn

## Hierarchy

- [`GroupInAllOf`](GroupInAllOf.md)

  ↳ **`GroupIn`**

## Table of contents

### Properties

- [host\_ids](GroupIn.md#host_ids)
- [id](GroupIn.md#id)
- [name](GroupIn.md#name)

## Properties

### host\_ids

• `Optional` **host\_ids**: `string`[]

A comma-separated list of host IDs that belong to the group.

**`Memberof`**

GroupInAllOf

#### Inherited from

[GroupInAllOf](GroupInAllOf.md).[host_ids](GroupInAllOf.md#host_ids)

#### Defined in

[api.ts:655](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L655)

___

### id

• `Optional` **id**: `string`

**`Memberof`**

GroupInAllOf

#### Inherited from

[GroupInAllOf](GroupInAllOf.md).[id](GroupInAllOf.md#id)

#### Defined in

[api.ts:643](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L643)

___

### name

• `Optional` **name**: `string`

A group’s human-readable name.

**`Memberof`**

GroupInAllOf

#### Inherited from

[GroupInAllOf](GroupInAllOf.md).[name](GroupInAllOf.md#name)

#### Defined in

[api.ts:649](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L649)
