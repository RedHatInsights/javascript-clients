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

*Defined in [packages/vulnerabilities/api.ts:1954](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1954)*

**`memberof`** StatusIn

___

### `Optional` inventory_id

• **inventory_id**? : *[InventoryIdOrList](../globals.md#inventoryidorlist)*

*Defined in [packages/vulnerabilities/api.ts:1948](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1948)*

**`memberof`** StatusIn

___

### `Optional` status_id

• **status_id**? : *number*

*Defined in [packages/vulnerabilities/api.ts:1960](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1960)*

Status ID to be set, obtained by GET method. If not specified, global CVE status is set.

**`memberof`** StatusIn

___

### `Optional` status_text

• **status_text**? : *string | null*

*Defined in [packages/vulnerabilities/api.ts:1966](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1966)*

Complementary text to the status.

**`memberof`** StatusIn
