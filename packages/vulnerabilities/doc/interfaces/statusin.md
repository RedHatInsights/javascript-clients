[@redhat-cloud-services/vulnerabilities-client](../README.md) › [Globals](../globals.md) › [StatusIn](statusin.md)

# Interface: StatusIn

**`export`** 

**`interface`** StatusIn

## Hierarchy

* **StatusIn**

## Index

### Properties

* [cve](statusin.md#cve)
* [inventory_id](statusin.md#optional-inventory_id)
* [status_id](statusin.md#optional-status_id)
* [status_text](statusin.md#optional-status_text)

## Properties

###  cve

• **cve**: *[CveOrList](../globals.md#cveorlist)*

*Defined in [packages/vulnerabilities/api.ts:1582](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1582)*

**`memberof`** StatusIn

___

### `Optional` inventory_id

• **inventory_id**? : *[InventoryIdOrList](../globals.md#inventoryidorlist)*

*Defined in [packages/vulnerabilities/api.ts:1576](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1576)*

**`memberof`** StatusIn

___

### `Optional` status_id

• **status_id**? : *number*

*Defined in [packages/vulnerabilities/api.ts:1588](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1588)*

Status ID to be set, obtained by GET method. If not specified, global CVE status is set.

**`memberof`** StatusIn

___

### `Optional` status_text

• **status_text**? : *string | null*

*Defined in [packages/vulnerabilities/api.ts:1594](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1594)*

Complementary text to the status.

**`memberof`** StatusIn
