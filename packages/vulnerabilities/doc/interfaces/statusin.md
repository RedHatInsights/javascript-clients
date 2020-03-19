[@redhat-cloud-services/vulnerabilities-client](../README.md) > [StatusIn](../interfaces/statusin.md)

# Interface: StatusIn

*__export__*: 

*__interface__*: StatusIn

## Hierarchy

**StatusIn**

## Index

### Properties

* [cve](statusin.md#cve)
* [inventoryId](statusin.md#inventoryid)
* [statusId](statusin.md#statusid)
* [statusText](statusin.md#statustext)

---

## Properties

<a id="cve"></a>

###  cve

**● cve**: *[CveOrList](cveorlist.md)*

*Defined in [api.ts:1203](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1203)*

*__type__*: {CveOrList}

*__memberof__*: StatusIn

___
<a id="inventoryid"></a>

### `<Optional>` inventoryId

**● inventoryId**: *[InventoryIdOrList](inventoryidorlist.md)*

*Defined in [api.ts:1197](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1197)*

*__type__*: {InventoryIdOrList}

*__memberof__*: StatusIn

___
<a id="statusid"></a>

### `<Optional>` statusId

**● statusId**: *`number`*

*Defined in [api.ts:1209](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1209)*

Status ID to be set, obtained by GET method. If not specified, global CVE status is set.

*__type__*: {number}

*__memberof__*: StatusIn

___
<a id="statustext"></a>

### `<Optional>` statusText

**● statusText**: *`string` \| `null`*

*Defined in [api.ts:1215](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1215)*

Complementary text to the status.

*__type__*: {string}

*__memberof__*: StatusIn

___

