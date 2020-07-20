[@redhat-cloud-services/approval-client](../README.md) › [Globals](../globals.md) › [Reposition](reposition.md)

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

*Defined in [packages/approval/api.ts:268](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L268)*

Move the record up (negative) or down (positive) in the list. Do not set it if placement is used

**`memberof`** Reposition

___

### `Optional` placement

• **placement**? : *[RepositionPlacementEnum](../enums/repositionplacementenum.md)*

*Defined in [packages/approval/api.ts:274](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L274)*

Place the record to the top or bottom of the list. Do not set it if increment is used

**`memberof`** Reposition
