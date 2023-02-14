[@redhat-cloud-services/host-inventory-client](../README.md) › [Globals](../globals.md) › [CreateGroup](creategroup.md)

# Interface: CreateGroup

Data required to create a group.

**`export`** 

**`interface`** CreateGroup

## Hierarchy

* [CreateGroupAllOf](creategroupallof.md)

  ↳ **CreateGroup**

## Index

### Properties

* [host_ids](creategroup.md#optional-host_ids)
* [name](creategroup.md#optional-name)

## Properties

### `Optional` host_ids

• **host_ids**? : *Array‹string› | null*

*Inherited from [CreateGroup](creategroup.md).[host_ids](creategroup.md#optional-host_ids)*

*Defined in [api.ts:324](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L324)*

A comma separated list of host IDs that belong to the group.

**`memberof`** CreateGroupAllOf

___

### `Optional` name

• **name**? : *string | null*

*Inherited from [CreateGroup](creategroup.md).[name](creategroup.md#optional-name)*

*Defined in [api.ts:318](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L318)*

A group’s human-readable name.

**`memberof`** CreateGroupAllOf
