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

*Defined in [packages/host-inventory/api.ts:101](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L101)*

List of hosts that were created, updated or failed to be processed.

**`memberof`** BulkHostOut

___

### `Optional` errors

• **errors**? : *number*

*Defined in [packages/host-inventory/api.ts:95](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L95)*

Number of items in the \"data\" list that contain errors.

**`memberof`** BulkHostOut

___

### `Optional` total

• **total**? : *number*

*Defined in [packages/host-inventory/api.ts:89](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L89)*

Total number of items in the \"data\" list.

**`memberof`** BulkHostOut
