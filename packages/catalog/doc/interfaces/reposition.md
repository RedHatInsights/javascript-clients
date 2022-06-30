[@redhat-cloud-services/catalog-client](../README.md) › [Globals](../globals.md) › [Reposition](reposition.md)

# Interface: Reposition

The desired increment relative to its current position, or placement to top or bottom of the list.

**`export`** 

**`interface`** Reposition

## Hierarchy

* **Reposition**

## Index

### Properties

* [increment](reposition.md#optional-increment)
* [placement](reposition.md#optional-placement)

## Properties

### `Optional` increment

• **increment**? : *number | null*

*Defined in [api.ts:1040](https://github.com/RedHatInsights/javascript-clients.gi/blob/master/packages/catalog/api.ts#L1040)*

Move the record up (negative) or down (positive) in the list. Do not set it if placement is used

**`memberof`** Reposition

___

### `Optional` placement

• **placement**? : *[RepositionPlacementEnum](../enums/repositionplacementenum.md)*

*Defined in [api.ts:1046](https://github.com/RedHatInsights/javascript-clients.gi/blob/master/packages/catalog/api.ts#L1046)*

Place the record to the top or bottom of the list. Do not set it if increment is used

**`memberof`** Reposition
