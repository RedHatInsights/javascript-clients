[@redhat-cloud-services/host-inventory-client](../README.md) › [Globals](../globals.md) › [BulkHostOut](bulkhostout.md)

# Interface: BulkHostOut

**`export`** 

**`interface`** BulkHostOut

## Hierarchy

* **BulkHostOut**

## Index

### Properties

* [data](bulkhostout.md#optional-data)
* [errors](bulkhostout.md#optional-errors)
* [total](bulkhostout.md#optional-total)

## Properties

### `Optional` data

• **data**? : *Array‹[BulkHostOutDetails](bulkhostoutdetails.md)›*

*Defined in [api.ts:153](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L153)*

List of hosts that were created, updated or failed to be processed.

**`type`** {Array<BulkHostOutDetails>}

**`memberof`** BulkHostOut

___

### `Optional` errors

• **errors**? : *number*

*Defined in [api.ts:147](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L147)*

Number of items in the \"data\" list that contain errors.

**`type`** {number}

**`memberof`** BulkHostOut

___

### `Optional` total

• **total**? : *number*

*Defined in [api.ts:141](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L141)*

Total number of items in the \"data\" list.

**`type`** {number}

**`memberof`** BulkHostOut
