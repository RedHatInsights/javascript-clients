[@redhat-cloud-services/vulnerabilities-client](../README.md) / [Exports](../modules.md) / StatusIn

# Interface: StatusIn

**`Export`**

**`Interface`**

StatusIn

## Table of contents

### Properties

- [cve](StatusIn.md#cve)
- [inventory\_id](StatusIn.md#inventory_id)
- [status\_id](StatusIn.md#status_id)
- [status\_text](StatusIn.md#status_text)

## Properties

### cve

• **cve**: [`CveOrList`](../modules.md#cveorlist)

**`Memberof`**

StatusIn

#### Defined in

[api.ts:2279](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L2279)

___

### inventory\_id

• `Optional` **inventory\_id**: [`InventoryIdOrList`](../modules.md#inventoryidorlist)

**`Memberof`**

StatusIn

#### Defined in

[api.ts:2285](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L2285)

___

### status\_id

• `Optional` **status\_id**: `number`

Status ID to be set, obtained by GET method. If not specified, global CVE status is set.

**`Memberof`**

StatusIn

#### Defined in

[api.ts:2291](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L2291)

___

### status\_text

• `Optional` **status\_text**: `string`

Complementary text to the status.

**`Memberof`**

StatusIn

#### Defined in

[api.ts:2297](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L2297)
