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

[api.ts:2315](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L2315)

___

### inventory\_id

• `Optional` **inventory\_id**: [`InventoryIdOrList`](../modules.md#inventoryidorlist)

**`Memberof`**

StatusIn

#### Defined in

[api.ts:2321](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L2321)

___

### status\_id

• `Optional` **status\_id**: `number`

Status ID to be set, obtained by GET method. If not specified, global CVE status is set.

**`Memberof`**

StatusIn

#### Defined in

[api.ts:2327](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L2327)

___

### status\_text

• `Optional` **status\_text**: `string`

Complementary text to the status.

**`Memberof`**

StatusIn

#### Defined in

[api.ts:2333](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L2333)
