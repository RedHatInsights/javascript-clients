[@redhat-cloud-services/host-inventory-client](../README.md) > [BulkHostOut](../interfaces/bulkhostout.md)

# Interface: BulkHostOut

*__export__*: 

*__interface__*: BulkHostOut

## Hierarchy

**BulkHostOut**

## Index

### Properties

* [data](bulkhostout.md#data)
* [errors](bulkhostout.md#errors)
* [total](bulkhostout.md#total)

---

## Properties

<a id="data"></a>

### `<Optional>` data

**● data**: *`Array`<[BulkHostOutDetails](bulkhostoutdetails.md)>*

*Defined in api.ts:95*

List of hosts that were created, updated or failed to be processed.

*__type__*: {Array}

*__memberof__*: BulkHostOut

___
<a id="errors"></a>

### `<Optional>` errors

**● errors**: *`number`*

*Defined in api.ts:89*

Number of items in the "data" list that contain errors.

*__type__*: {number}

*__memberof__*: BulkHostOut

___
<a id="total"></a>

### `<Optional>` total

**● total**: *`number`*

*Defined in api.ts:83*

Total number of items in the "data" list.

*__type__*: {number}

*__memberof__*: BulkHostOut

___

