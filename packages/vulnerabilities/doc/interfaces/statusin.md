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

*Defined in [api.ts:2161](https://github.com/RedHatInsights/javascript-clients.gi/blob/master/packages/vulnerabilities/api.ts#L2161)*

**`memberof`** StatusIn

___

### `Optional` inventory_id

• **inventory_id**? : *[InventoryIdOrList](../globals.md#inventoryidorlist)*

*Defined in [api.ts:2167](https://github.com/RedHatInsights/javascript-clients.gi/blob/master/packages/vulnerabilities/api.ts#L2167)*

**`memberof`** StatusIn

___

### `Optional` status_id

• **status_id**? : *number*

*Defined in [api.ts:2173](https://github.com/RedHatInsights/javascript-clients.gi/blob/master/packages/vulnerabilities/api.ts#L2173)*

Status ID to be set, obtained by GET method. If not specified, global CVE status is set.

**`memberof`** StatusIn

___

### `Optional` status_text

• **status_text**? : *string | null*

*Defined in [api.ts:2179](https://github.com/RedHatInsights/javascript-clients.gi/blob/master/packages/vulnerabilities/api.ts#L2179)*

Complementary text to the status.

**`memberof`** StatusIn
