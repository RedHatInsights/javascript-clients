[@redhat-cloud-services/host-inventory-client](../README.md) / [Exports](../modules.md) / GroupIn

# Interface: GroupIn

Data of a single group belonging to an account.

**`Export`**

GroupIn

## Hierarchy

- [`GroupInAllOf`](GroupInAllOf.md)

  ↳ **`GroupIn`**

## Table of contents

### Properties

- [host\_ids](GroupIn.md#host_ids)
- [name](GroupIn.md#name)

## Properties

### host\_ids

• `Optional` **host\_ids**: ``null`` \| `string`[]

A comma-separated list of host IDs that belong to the group.

**`Memberof`**

GroupInAllOf

#### Inherited from

[GroupInAllOf](GroupInAllOf.md).[host_ids](GroupInAllOf.md#host_ids)

#### Defined in

[api.ts:553](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/host-inventory/api.ts#L553)

___

### name

• `Optional` **name**: `string`

A group’s human-readable name.

**`Memberof`**

GroupInAllOf

#### Inherited from

[GroupInAllOf](GroupInAllOf.md).[name](GroupInAllOf.md#name)

#### Defined in

[api.ts:547](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/host-inventory/api.ts#L547)
