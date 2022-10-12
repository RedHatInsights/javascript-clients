[@redhat-cloud-services/approval-client](../README.md) / [Exports](../modules.md) / Reposition

# Interface: Reposition

The desired increment relative to its current position, or placement to top or bottom of the list.

**`Export`**

**`Interface`**

Reposition

## Table of contents

### Properties

- [increment](Reposition.md#increment)
- [placement](Reposition.md#placement)

## Properties

### increment

• `Optional` **increment**: `number`

Move the record up (negative) or down (positive) in the list. Do not set it if placement is used

**`Memberof`**

Reposition

#### Defined in

[api.ts:268](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L268)

___

### placement

• `Optional` **placement**: [`RepositionPlacementEnum`](../enums/RepositionPlacementEnum.md)

Place the record to the top or bottom of the list. Do not set it if increment is used

**`Memberof`**

Reposition

#### Defined in

[api.ts:274](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L274)
