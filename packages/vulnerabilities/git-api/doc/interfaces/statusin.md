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

• **cve**: *[CveOrList](cveorlist.md)*

*Defined in [packages/vulnerabilities/git-api/api.ts:1078](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1078)*

**`memberof`** StatusIn

___

### `Optional` inventory_id

• **inventory_id**? : *[InventoryIdOrList](inventoryidorlist.md)*

*Defined in [packages/vulnerabilities/git-api/api.ts:1072](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1072)*

**`memberof`** StatusIn

___

### `Optional` status_id

• **status_id**? : *number*

*Defined in [packages/vulnerabilities/git-api/api.ts:1084](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1084)*

Status ID to be set, obtained by GET method. If not specified, global CVE status is set.

**`memberof`** StatusIn

___

### `Optional` status_text

• **status_text**? : *string | null*

*Defined in [packages/vulnerabilities/git-api/api.ts:1090](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1090)*

Complementary text to the status.

**`memberof`** StatusIn
