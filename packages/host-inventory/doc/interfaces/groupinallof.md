[@redhat-cloud-services/host-inventory-client](../README.md) › [Globals](../globals.md) › [GroupInAllOf](groupinallof.md)

# Interface: GroupInAllOf

**`export`** 

**`interface`** GroupInAllOf

## Hierarchy

* **GroupInAllOf**

  ↳ [GroupIn](groupin.md)

## Index

### Properties

* [host_ids](groupinallof.md#optional-host_ids)
* [id](groupinallof.md#optional-id)
* [name](groupinallof.md#optional-name)

## Properties

### `Optional` host_ids

• **host_ids**? : *Array‹string› | null*

*Defined in [api.ts:655](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L655)*

A comma separated list of host IDs that belong to the group.

**`memberof`** GroupInAllOf

___

### `Optional` id

• **id**? : *string*

*Defined in [api.ts:643](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L643)*

A durable and reliable platform-wide group identifier. Applications should use this identifier to reference groups.

**`memberof`** GroupInAllOf

___

### `Optional` name

• **name**? : *string | null*

*Defined in [api.ts:649](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L649)*

A group’s human-readable name.

**`memberof`** GroupInAllOf
