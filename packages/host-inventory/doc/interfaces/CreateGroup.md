[@redhat-cloud-services/host-inventory-client](../README.md) / [Exports](../modules.md) / CreateGroup

# Interface: CreateGroup

Data required to create a group.

**`Export`**

**`Interface`**

CreateGroup

## Hierarchy

- [`CreateGroupAllOf`](CreateGroupAllOf.md)

  ↳ **`CreateGroup`**

## Table of contents

### Properties

- [host\_ids](CreateGroup.md#host_ids)
- [name](CreateGroup.md#name)

## Properties

### host\_ids

• `Optional` **host\_ids**: `string`[]

A comma-separated list of host IDs that belong to the group.

**`Memberof`**

CreateGroupAllOf

#### Inherited from

[CreateGroupAllOf](CreateGroupAllOf.md).[host_ids](CreateGroupAllOf.md#host_ids)

#### Defined in

[api.ts:324](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L324)

___

### name

• `Optional` **name**: `string`

A group’s human-readable name.

**`Memberof`**

CreateGroupAllOf

#### Inherited from

[CreateGroupAllOf](CreateGroupAllOf.md).[name](CreateGroupAllOf.md#name)

#### Defined in

[api.ts:318](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L318)
