[@redhat-cloud-services/host-inventory-client](../README.md) › [Globals](../globals.md) › [BulkHostOutDetails](bulkhostoutdetails.md)

# Interface: BulkHostOutDetails

**`export`** 

**`interface`** BulkHostOutDetails

## Hierarchy

* **BulkHostOutDetails**

## Index

### Properties

* [detail](bulkhostoutdetails.md#optional-detail)
* [host](bulkhostoutdetails.md#optional-host)
* [status](bulkhostoutdetails.md#optional-status)
* [title](bulkhostoutdetails.md#optional-title)

## Properties

### `Optional` detail

• **detail**? : *string*

*Defined in [packages/host-inventory/api.ts:132](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L132)*

Details about why a host failed to be created or updated.

**`memberof`** BulkHostOutDetails

___

### `Optional` host

• **host**? : *[CreateHostOut](createhostout.md)*

*Defined in [packages/host-inventory/api.ts:120](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L120)*

**`memberof`** BulkHostOutDetails

___

### `Optional` status

• **status**? : *number*

*Defined in [packages/host-inventory/api.ts:114](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L114)*

HTTP status code of the results of the host create/update process

**`memberof`** BulkHostOutDetails

___

### `Optional` title

• **title**? : *string*

*Defined in [packages/host-inventory/api.ts:126](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L126)*

Short description of why a host failed to be created or updated.

**`memberof`** BulkHostOutDetails
