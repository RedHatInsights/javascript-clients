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

*Defined in [api.ts:1015](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1015)*

*__type__*: {CveOrList}

*__memberof__*: StatusIn

___
<a id="inventoryid"></a>

### `<Optional>` inventoryId

**● inventoryId**: *[InventoryIdOrList](inventoryidorlist.md)*

*Defined in [api.ts:1009](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1009)*

*__type__*: {InventoryIdOrList}

*__memberof__*: StatusIn

___
<a id="statusid"></a>

### `<Optional>` statusId

**● statusId**: *`number`*

*Defined in [api.ts:1021](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1021)*

Status ID to be set, obtained by GET method. If not specified, global CVE status is set.

*__type__*: {number}

*__memberof__*: StatusIn

___
<a id="statustext"></a>

### `<Optional>` statusText

**● statusText**: *`string` \| `null`*

*Defined in [api.ts:1027](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1027)*

Complementary text to the status.

*__type__*: {string}

*__memberof__*: StatusIn

___

