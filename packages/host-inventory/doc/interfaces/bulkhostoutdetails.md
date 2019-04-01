[@redhat-cloud-services/host-inventory-client](../README.md) > [BulkHostOutDetails](../interfaces/bulkhostoutdetails.md)

# Interface: BulkHostOutDetails

*__export__*: 

*__interface__*: BulkHostOutDetails

## Hierarchy

**BulkHostOutDetails**

## Index

### Properties

* [detail](bulkhostoutdetails.md#detail)
* [host](bulkhostoutdetails.md#host)
* [status](bulkhostoutdetails.md#status)
* [title](bulkhostoutdetails.md#title)

---

## Properties

<a id="detail"></a>

### `<Optional>` detail

**● detail**: *`string`*

*Defined in api.ts:127*

Details about why a host failed to be created or updated.

*__type__*: {string}

*__memberof__*: BulkHostOutDetails

___
<a id="host"></a>

### `<Optional>` host

**● host**: *[CreateHostOut](createhostout.md)*

*Defined in api.ts:115*

*__type__*: {CreateHostOut}

*__memberof__*: BulkHostOutDetails

___
<a id="status"></a>

### `<Optional>` status

**● status**: *`number`*

*Defined in api.ts:109*

HTTP status code of the results of the host create/update process

*__type__*: {number}

*__memberof__*: BulkHostOutDetails

___
<a id="title"></a>

### `<Optional>` title

**● title**: *`string`*

*Defined in api.ts:121*

Short description of why a host failed to be created or updated.

*__type__*: {string}

*__memberof__*: BulkHostOutDetails

___

