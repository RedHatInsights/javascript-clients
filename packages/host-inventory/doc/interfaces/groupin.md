[@redhat-cloud-services/host-inventory-client](../README.md) › [Globals](../globals.md) › [GroupIn](groupin.md)

# Interface: GroupIn

Data of a single group belonging to an account.

**`export`** 

**`interface`** GroupIn

## Hierarchy

* [GroupInAllOf](groupinallof.md)

  ↳ **GroupIn**

## Index

### Properties

* [host_ids](groupin.md#optional-host_ids)
* [id](groupin.md#optional-id)
* [name](groupin.md#optional-name)

## Properties

### `Optional` host_ids

• **host_ids**? : *Array‹string› | null*

*Inherited from [GroupIn](groupin.md).[host_ids](groupin.md#optional-host_ids)*

*Defined in [api.ts:655](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L655)*

A comma separated list of host IDs that belong to the group.

**`memberof`** GroupInAllOf

___

### `Optional` id

• **id**? : *string*

*Inherited from [GroupIn](groupin.md).[id](groupin.md#optional-id)*

*Defined in [api.ts:643](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L643)*

A durable and reliable platform-wide group identifier. Applications should use this identifier to reference groups.

**`memberof`** GroupInAllOf

___

### `Optional` name

• **name**? : *string | null*

*Inherited from [GroupIn](groupin.md).[name](groupin.md#optional-name)*

*Defined in [api.ts:649](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L649)*

A group’s human-readable name.

**`memberof`** GroupInAllOf
