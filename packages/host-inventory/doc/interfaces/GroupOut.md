[@redhat-cloud-services/host-inventory-client](../README.md) / [Exports](../modules.md) / GroupOut

# Interface: GroupOut

Data of a single group belonging to an account.

**`Export`**

**`Interface`**

GroupOut

## Table of contents

### Properties

- [account](GroupOut.md#account)
- [created\_at](GroupOut.md#created_at)
- [host\_ids](GroupOut.md#host_ids)
- [id](GroupOut.md#id)
- [name](GroupOut.md#name)
- [org\_id](GroupOut.md#org_id)
- [updated\_at](GroupOut.md#updated_at)

## Properties

### account

• `Optional` **account**: `string`

A Red Hat Account number that owns the host.

**`Memberof`**

GroupOut

#### Defined in

[api.ts:686](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L686)

___

### created\_at

• `Optional` **created\_at**: `string`

A timestamp when the entry was created.

**`Memberof`**

GroupOut

#### Defined in

[api.ts:698](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L698)

___

### host\_ids

• `Optional` **host\_ids**: `string`[]

A comma-separated list of host IDs that belong to the group.

**`Memberof`**

GroupOut

#### Defined in

[api.ts:680](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L680)

___

### id

• `Optional` **id**: `string`

**`Memberof`**

GroupOut

#### Defined in

[api.ts:668](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L668)

___

### name

• `Optional` **name**: `string`

A group’s human-readable name.

**`Memberof`**

GroupOut

#### Defined in

[api.ts:674](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L674)

___

### org\_id

• `Optional` **org\_id**: `string`

The Org ID of the tenant that owns the host.

**`Memberof`**

GroupOut

#### Defined in

[api.ts:692](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L692)

___

### updated\_at

• `Optional` **updated\_at**: `string`

A timestamp when the entry was last updated.

**`Memberof`**

GroupOut

#### Defined in

[api.ts:704](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L704)
