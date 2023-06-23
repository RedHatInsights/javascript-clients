[@redhat-cloud-services/host-inventory-client](../README.md) / [Exports](../modules.md) / GroupOutWithHostCount

# Interface: GroupOutWithHostCount

Data of a single group belonging to an account.

**`Export`**

**`Interface`**

GroupOutWithHostCount

## Hierarchy

- [`GroupOutWithHostCountAllOf`](GroupOutWithHostCountAllOf.md)

  ↳ **`GroupOutWithHostCount`**

## Table of contents

### Properties

- [group\_out](GroupOutWithHostCount.md#group_out)
- [host\_count](GroupOutWithHostCount.md#host_count)

## Properties

### group\_out

• `Optional` **group\_out**: [`GroupOut`](GroupOut.md)

**`Memberof`**

GroupOutWithHostCountAllOf

#### Inherited from

[GroupOutWithHostCountAllOf](GroupOutWithHostCountAllOf.md).[group_out](GroupOutWithHostCountAllOf.md#group_out)

#### Defined in

[api.ts:698](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L698)

___

### host\_count

• `Optional` **host\_count**: `number`

The number of hosts associated with the group.

**`Memberof`**

GroupOutWithHostCountAllOf

#### Inherited from

[GroupOutWithHostCountAllOf](GroupOutWithHostCountAllOf.md).[host_count](GroupOutWithHostCountAllOf.md#host_count)

#### Defined in

[api.ts:704](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L704)
