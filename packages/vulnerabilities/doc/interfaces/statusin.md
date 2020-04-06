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

*Defined in [api.ts:1271](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1271)*

**`type`** {CveOrList}

**`memberof`** StatusIn

___

### `Optional` inventoryId

• **inventoryId**? : *[InventoryIdOrList](inventoryidorlist.md)*

*Defined in [api.ts:1265](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1265)*

**`type`** {InventoryIdOrList}

**`memberof`** StatusIn

___

### `Optional` statusId

• **statusId**? : *number*

*Defined in [api.ts:1277](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1277)*

Status ID to be set, obtained by GET method. If not specified, global CVE status is set.

**`type`** {number}

**`memberof`** StatusIn

___

### `Optional` statusText

• **statusText**? : *string | null*

*Defined in [api.ts:1283](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1283)*

Complementary text to the status.

**`type`** {string}

**`memberof`** StatusIn
