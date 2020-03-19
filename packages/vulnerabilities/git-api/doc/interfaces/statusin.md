[@redhat-cloud-services/vulnerabilities-client](../README.md) › [Globals](../globals.md) › [StatusIn](statusin.md)

# Interface: StatusIn

**`export`** 

**`interface`** StatusIn

## Hierarchy

* **StatusIn**

## Index

### Properties

* [cve](statusin.md#cve)
* [inventoryId](statusin.md#optional-inventoryid)
* [statusId](statusin.md#optional-statusid)
* [statusText](statusin.md#optional-statustext)

## Properties

###  cve

• **cve**: *[CveOrList](cveorlist.md)*

*Defined in [git-api/api.ts:1209](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1209)*

**`type`** {CveOrList}

**`memberof`** StatusIn

___

### `Optional` inventoryId

• **inventoryId**? : *[InventoryIdOrList](inventoryidorlist.md)*

*Defined in [git-api/api.ts:1203](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1203)*

**`type`** {InventoryIdOrList}

**`memberof`** StatusIn

___

### `Optional` statusId

• **statusId**? : *number*

*Defined in [git-api/api.ts:1215](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1215)*

Status ID to be set, obtained by GET method. If not specified, global CVE status is set.

**`type`** {number}

**`memberof`** StatusIn

___

### `Optional` statusText

• **statusText**? : *string | null*

*Defined in [git-api/api.ts:1221](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1221)*

Complementary text to the status.

**`type`** {string}

**`memberof`** StatusIn
