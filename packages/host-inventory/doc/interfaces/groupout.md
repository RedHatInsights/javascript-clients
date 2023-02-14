[@redhat-cloud-services/host-inventory-client](../README.md) › [Globals](../globals.md) › [GroupOut](groupout.md)

# Interface: GroupOut

Data of a single group belonging to an account.

**`export`** 

**`interface`** GroupOut

## Hierarchy

* **GroupOut**

## Index

### Properties

* [created_at](groupout.md#optional-created_at)
* [host_ids](groupout.md#optional-host_ids)
* [id](groupout.md#optional-id)
* [name](groupout.md#optional-name)
* [updated_at](groupout.md#optional-updated_at)

## Properties

### `Optional` created_at

• **created_at**? : *string*

*Defined in [api.ts:686](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L686)*

A timestamp when the entry was created.

**`memberof`** GroupOut

___

### `Optional` host_ids

• **host_ids**? : *Array‹string› | null*

*Defined in [api.ts:680](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L680)*

A comma separated list of host IDs that belong to the group.

**`memberof`** GroupOut

___

### `Optional` id

• **id**? : *string*

*Defined in [api.ts:668](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L668)*

A durable and reliable platform-wide group identifier. Applications should use this identifier to reference groups.

**`memberof`** GroupOut

___

### `Optional` name

• **name**? : *string | null*

*Defined in [api.ts:674](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L674)*

A group’s human-readable name.

**`memberof`** GroupOut

___

### `Optional` updated_at

• **updated_at**? : *string*

*Defined in [api.ts:692](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L692)*

A timestamp when the entry was last updated.

**`memberof`** GroupOut
