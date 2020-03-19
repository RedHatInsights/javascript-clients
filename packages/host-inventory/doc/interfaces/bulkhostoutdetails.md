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

*Defined in [api.ts:185](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L185)*

Details about why a host failed to be created or updated.

**`type`** {string}

**`memberof`** BulkHostOutDetails

___

### `Optional` host

• **host**? : *[CreateHostOut](createhostout.md)*

*Defined in [api.ts:173](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L173)*

**`type`** {CreateHostOut}

**`memberof`** BulkHostOutDetails

___

### `Optional` status

• **status**? : *number*

*Defined in [api.ts:167](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L167)*

HTTP status code of the results of the host create/update process

**`type`** {number}

**`memberof`** BulkHostOutDetails

___

### `Optional` title

• **title**? : *string*

*Defined in [api.ts:179](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L179)*

Short description of why a host failed to be created or updated.

**`type`** {string}

**`memberof`** BulkHostOutDetails
