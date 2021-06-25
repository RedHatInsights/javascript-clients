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

*Defined in [packages/vulnerabilities/api.ts:1978](https://github.com/fhlavac/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1978)*

**`memberof`** StatusIn

___

### `Optional` inventory_id

• **inventory_id**? : *[InventoryIdOrList](../globals.md#inventoryidorlist)*

*Defined in [packages/vulnerabilities/api.ts:1972](https://github.com/fhlavac/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1972)*

**`memberof`** StatusIn

___

### `Optional` status_id

• **status_id**? : *number*

*Defined in [packages/vulnerabilities/api.ts:1984](https://github.com/fhlavac/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1984)*

Status ID to be set, obtained by GET method. If not specified, global CVE status is set.

**`memberof`** StatusIn

___

### `Optional` status_text

• **status_text**? : *string | null*

*Defined in [packages/vulnerabilities/api.ts:1990](https://github.com/fhlavac/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1990)*

Complementary text to the status.

**`memberof`** StatusIn
