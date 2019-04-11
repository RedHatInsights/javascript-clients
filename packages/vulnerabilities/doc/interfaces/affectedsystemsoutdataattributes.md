[@redhat-cloud-services/vulnerabilities-client](../README.md) > [AffectedSystemsOutDataAttributes](../interfaces/affectedsystemsoutdataattributes.md)

# Interface: AffectedSystemsOutDataAttributes

*__export__*: 

*__interface__*: AffectedSystemsOutDataAttributes

## Hierarchy

**AffectedSystemsOutDataAttributes**

## Index

### Properties

* [inventoryId](affectedsystemsoutdataattributes.md#inventoryid)
* [lastEvaluation](affectedsystemsoutdataattributes.md#lastevaluation)
* [satelliteManaged](affectedsystemsoutdataattributes.md#satellitemanaged)
* [status](affectedsystemsoutdataattributes.md#status)
* [statusId](affectedsystemsoutdataattributes.md#statusid)

---

## Properties

<a id="inventoryid"></a>

###  inventoryId

**● inventoryId**: *`string`*

*Defined in api.ts:135*

Host ID.

*__type__*: {string}

*__memberof__*: AffectedSystemsOutDataAttributes

___
<a id="lastevaluation"></a>

###  lastEvaluation

**● lastEvaluation**: *`string`*

*Defined in api.ts:141*

Date of last evaluation.

*__type__*: {string}

*__memberof__*: AffectedSystemsOutDataAttributes

___
<a id="satellitemanaged"></a>

###  satelliteManaged

**● satelliteManaged**: *`boolean`*

*Defined in api.ts:147*

Whether the host is managed by Satellite or not.

*__type__*: {boolean}

*__memberof__*: AffectedSystemsOutDataAttributes

___
<a id="status"></a>

### `<Optional>` status

**● status**: *`string`*

*Defined in api.ts:153*

Status of the vulnerability for the application's point of view.

*__type__*: {string}

*__memberof__*: AffectedSystemsOutDataAttributes

___
<a id="statusid"></a>

###  statusId

**● statusId**: *`number`*

*Defined in api.ts:159*

Internal ID of the vulnerability status.

*__type__*: {number}

*__memberof__*: AffectedSystemsOutDataAttributes

___

